import { InternalServerErrorException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AnthropicService } from '../../../src/checkin/anthropic.service';

const originalEnv = process.env;

describe('AnthropicService', () => {
  let service: AnthropicService;

  beforeEach(async () => {
    process.env = { ...originalEnv };

    const module: TestingModule = await Test.createTestingModule({
      providers: [AnthropicService],
    }).compile();

    service = module.get<AnthropicService>(AnthropicService);
    jest.restoreAllMocks();
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  describe('mock interno (sem API key)', () => {
    it('retorna resposta mockada quando ANTHROPIC_API_KEY não está definida', async () => {
      delete process.env.ANTHROPIC_API_KEY;
      const result = await service.analisarCheckin('BEM', 3);
      expect(result.respostaIa).toBeTruthy();
      expect(result.conteudoPsicologico).toBeTruthy();
    });

    it('retorna resposta mockada quando ANTHROPIC_API_KEY é o placeholder', async () => {
      process.env.ANTHROPIC_API_KEY = 'sua-chave-aqui';
      const result = await service.analisarCheckin('NEUTRO', 5);
      expect(result.respostaIa).toBeTruthy();
      expect(result.conteudoPsicologico).toBeTruthy();
    });

    it('não chama fetch quando API key ausente', async () => {
      delete process.env.ANTHROPIC_API_KEY;
      const fetchSpy = jest.spyOn(global, 'fetch');
      await service.analisarCheckin('MAL', 7);
      expect(fetchSpy).not.toHaveBeenCalled();
    });
  });

  describe('com API key configurada', () => {
    beforeEach(() => {
      process.env.ANTHROPIC_API_KEY = 'sk-chave-valida-para-testes';
    });

    it('parseia resposta JSON limpa da API corretamente', async () => {
      const payload = { resposta_ia: 'Você está bem!', conteudo_psicologico: 'Análise técnica.' };
      jest.spyOn(global, 'fetch').mockResolvedValue({
        json: () => Promise.resolve({ content: [{ text: JSON.stringify(payload) }] }),
      } as any);

      const result = await service.analisarCheckin('BEM', 3);
      expect(result.respostaIa).toBe('Você está bem!');
      expect(result.conteudoPsicologico).toBe('Análise técnica.');
    });

    it('parseia JSON envolto em bloco markdown ```json', async () => {
      const json = '{"resposta_ia":"Tudo bem!","conteudo_psicologico":"Análise"}';
      jest.spyOn(global, 'fetch').mockResolvedValue({
        json: () => Promise.resolve({ content: [{ text: '```json\n' + json + '\n```' }] }),
      } as any);

      const result = await service.analisarCheckin('BEM', 2);
      expect(result.respostaIa).toBe('Tudo bem!');
    });

    it('parseia JSON envolto em bloco markdown ``` sem rótulo', async () => {
      const json = '{"resposta_ia":"Ok","conteudo_psicologico":"Técnico"}';
      jest.spyOn(global, 'fetch').mockResolvedValue({
        json: () => Promise.resolve({ content: [{ text: '```\n' + json + '\n```' }] }),
      } as any);

      const result = await service.analisarCheckin('NEUTRO', 4);
      expect(result.respostaIa).toBe('Ok');
    });

    it('lança InternalServerErrorException se fetch falhar (erro de rede)', async () => {
      jest.spyOn(global, 'fetch').mockRejectedValue(new Error('Network error'));
      await expect(service.analisarCheckin('MAL', 8)).rejects.toThrow(InternalServerErrorException);
    });

    it('lança InternalServerErrorException se resposta não for JSON válido', async () => {
      jest.spyOn(global, 'fetch').mockResolvedValue({
        json: () => Promise.resolve({ content: [{ text: 'isso não é json' }] }),
      } as any);
      await expect(service.analisarCheckin('MUITO_MAL', 10)).rejects.toThrow(InternalServerErrorException);
    });

    it('envia humor e nivelEstresse corretos para a API', async () => {
      const payload = { resposta_ia: 'R', conteudo_psicologico: 'C' };
      const fetchSpy = jest.spyOn(global, 'fetch').mockResolvedValue({
        json: () => Promise.resolve({ content: [{ text: JSON.stringify(payload) }] }),
      } as any);

      await service.analisarCheckin('MUITO_MAL', 10);

      const body = JSON.parse((fetchSpy.mock.calls[0][1] as any).body);
      expect(body.messages[0].content).toContain('MUITO_MAL');
      expect(body.messages[0].content).toContain('10');
    });
  });
});
