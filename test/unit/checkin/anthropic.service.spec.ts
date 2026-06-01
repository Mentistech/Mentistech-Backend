import { InternalServerErrorException } from '@nestjs/common';
import { AnthropicService } from '../../../src/checkin/anthropic.service';

// monta uma resposta no formato que a API da Anthropic devolve
const fakeApiResponse = (text: string) => ({
  json: async () => ({ content: [{ text }] }),
});

describe('AnthropicService', () => {
  let service: AnthropicService;

  beforeEach(() => {
    service = new AnthropicService();
    jest.restoreAllMocks();
  });

  it('retorna a análise parseada com respostaIa, conteudoPsicologico e sugestoes', async () => {
    const conteudo = JSON.stringify({
      resposta_ia: 'Você está indo bem!',
      conteudo_psicologico: 'Estresse moderado, sem sinais de alerta.',
      sugestoes: ['Faça uma pausa', 'Respire fundo'],
    });
    global.fetch = jest.fn().mockResolvedValue(fakeApiResponse(conteudo));

    const result = await service.analisarCheckin('BEM', 4);

    expect(result).toEqual({
      respostaIa: 'Você está indo bem!',
      conteudoPsicologico: 'Estresse moderado, sem sinais de alerta.',
      sugestoes: ['Faça uma pausa', 'Respire fundo'],
    });
  });

  it('usa [] quando sugestoes está ausente ou não é um array', async () => {
    const conteudo = JSON.stringify({
      resposta_ia: 'Resposta',
      conteudo_psicologico: 'Análise',
      sugestoes: 'isto não é um array',
    });
    global.fetch = jest.fn().mockResolvedValue(fakeApiResponse(conteudo));

    const result = await service.analisarCheckin('NEUTRO', 5);

    expect(result.sugestoes).toEqual([]);
  });

  it('envia o humor e o nível de estresse no corpo da requisição', async () => {
    const fetchMock = jest
      .fn()
      .mockResolvedValue(
        fakeApiResponse(JSON.stringify({ resposta_ia: 'a', conteudo_psicologico: 'b', sugestoes: [] })),
      );
    global.fetch = fetchMock;

    await service.analisarCheckin('MUITO_MAL', 9);

    const body = JSON.parse((fetchMock.mock.calls[0][1] as RequestInit).body as string);
    expect(body.messages[0].content).toContain('MUITO_MAL');
    expect(body.messages[0].content).toContain('9');
  });

  it('lança InternalServerErrorException quando o fetch falha', async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error('rede indisponível'));

    await expect(service.analisarCheckin('MAL', 8)).rejects.toThrow(InternalServerErrorException);
  });

  it('lança InternalServerErrorException quando a resposta não é um JSON válido', async () => {
    global.fetch = jest.fn().mockResolvedValue(fakeApiResponse('isto não é json'));

    await expect(service.analisarCheckin('MAL', 8)).rejects.toThrow(InternalServerErrorException);
  });
});
