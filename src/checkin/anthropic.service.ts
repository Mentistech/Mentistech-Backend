import { Injectable, InternalServerErrorException } from '@nestjs/common';

interface AnaliseResult {
  respostaIa: string;
  conteudoPsicologico: string;
  sugestoes: string[];
}

@Injectable()
export class AnthropicService {
  async analisarCheckin(humor: string, nivelEstresse: number): Promise<AnaliseResult> {
    const body = {
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1000,
      system:
        'Você é um psicólogo assistente especializado em saúde mental corporativa. Analise o estado emocional do colaborador com base no check-in. Seja empático, acolhedor e nunca alarmista. Responda sempre em português. Retorne SOMENTE um JSON válido, sem markdown, sem explicações, apenas o objeto JSON com três campos: {"resposta_ia": "mensagem de acolhimento e suporte direto ao colaborador em até 3 parágrafos", "conteudo_psicologico": "análise técnica resumida para o psicólogo em até 2 parágrafos", "sugestoes": ["entre 2 e 4 sugestões de ação curtas e práticas para o colaborador, em frases objetivas, como exercícios de respiração, pausas, ou procurar o psicólogo quando necessário"]}',
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
      const text: string = data.content[0].text;
      const parsed = JSON.parse(text);
      return {
        respostaIa: parsed.resposta_ia,
        conteudoPsicologico: parsed.conteudo_psicologico,
        sugestoes: Array.isArray(parsed.sugestoes) ? parsed.sugestoes : [],
      };
    } catch {
      throw new InternalServerErrorException('Falha ao gerar análise de IA');
    }
  }
}
