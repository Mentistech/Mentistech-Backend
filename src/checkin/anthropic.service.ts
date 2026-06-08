import { Injectable, InternalServerErrorException } from '@nestjs/common';

interface AnaliseResult {
  respostaIa: string;
  conteudoPsicologico: string;
}

@Injectable()
export class AnthropicService {
  async analisarCheckin(humor: string, nivelEstresse: number): Promise<AnaliseResult> {
    // Mock para testes sem API key — remover quando a chave real estiver configurada
    if (!process.env.ANTHROPIC_API_KEY || process.env.ANTHROPIC_API_KEY === 'sua-chave-aqui') {
      return {
        respostaIa: `Olá! Percebo que você está se sentindo com humor "${humor}" e nível de estresse ${nivelEstresse}/10. É muito importante que você reconheça seus sentimentos e cuide de si mesmo.\n\nLembre-se de fazer pausas durante o dia, praticar respiração consciente e, se necessário, conversar com alguém de confiança. Sua saúde mental é prioridade.\n\nEstamos aqui para apoiar você nessa jornada. Não hesite em agendar uma consulta com nosso psicólogo caso precise de suporte adicional.`,
        conteudoPsicologico: `Colaborador reportou humor ${humor} com nível de estresse ${nivelEstresse}/10. Monitorar evolução nos próximos check-ins. Considerar intervenção preventiva se padrão persistir.`,
      };
    }

    const body = {
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 1000,
      system:
        'Você é um psicólogo assistente especializado em saúde mental corporativa. Analise o estado emocional do colaborador com base no check-in. Seja empático, acolhedor e nunca alarmista. Responda sempre em português. Retorne SOMENTE um JSON válido, sem markdown, sem explicações, apenas o objeto JSON com dois campos: {"resposta_ia": "mensagem de acolhimento e suporte direto ao colaborador em até 3 parágrafos", "conteudo_psicologico": "análise técnica resumida para o psicólogo em até 2 parágrafos"}',
      messages: [
        {
          role: 'user',
          content: `Humor relatado: ${humor}\nNível de estresse (1 a 10): ${nivelEstresse}`,
        },
      ],
    };

    let data: any;
    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'x-api-key': process.env.ANTHROPIC_API_KEY ?? '',
          'anthropic-version': '2023-06-01',
          'content-type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      data = await response.json();
    } catch {
      throw new InternalServerErrorException('Falha ao gerar análise de IA');
    }

    try {
      const raw: string = data.content[0].text;
      const text = raw.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '').trim();
      const parsed = JSON.parse(text);
      return {
        respostaIa: parsed.resposta_ia,
        conteudoPsicologico: parsed.conteudo_psicologico,
      };
    } catch {
      throw new InternalServerErrorException('Falha ao gerar análise de IA');
    }
  }
}
