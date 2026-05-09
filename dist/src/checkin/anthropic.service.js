"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnthropicService = void 0;
const common_1 = require("@nestjs/common");
let AnthropicService = class AnthropicService {
    async analisarCheckin(humor, nivelEstresse) {
        const body = {
            model: 'claude-sonnet-4-20250514',
            max_tokens: 1000,
            system: 'Você é um psicólogo assistente especializado em saúde mental corporativa. Analise o estado emocional do colaborador com base no check-in. Seja empático, acolhedor e nunca alarmista. Responda sempre em português. Retorne SOMENTE um JSON válido, sem markdown, sem explicações, apenas o objeto JSON com dois campos: {"resposta_ia": "mensagem de acolhimento e suporte direto ao colaborador em até 3 parágrafos", "conteudo_psicologico": "análise técnica resumida para o psicólogo em até 2 parágrafos"}',
            messages: [
                {
                    role: 'user',
                    content: `Humor relatado: ${humor}\nNível de estresse (1 a 10): ${nivelEstresse}`,
                },
            ],
        };
        let data;
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
        }
        catch {
            throw new common_1.InternalServerErrorException('Falha ao gerar análise de IA');
        }
        try {
            const text = data.content[0].text;
            const parsed = JSON.parse(text);
            return {
                respostaIa: parsed.resposta_ia,
                conteudoPsicologico: parsed.conteudo_psicologico,
            };
        }
        catch {
            throw new common_1.InternalServerErrorException('Falha ao gerar análise de IA');
        }
    }
};
exports.AnthropicService = AnthropicService;
exports.AnthropicService = AnthropicService = __decorate([
    (0, common_1.Injectable)()
], AnthropicService);
//# sourceMappingURL=anthropic.service.js.map