
const { z } = require('zod');

const classificationSchema = z.object({
  category: z.enum([
    'duvida',
    'reclamacao',
    'solicitacao'
  ]),

  subject: z.string().min(3).max(100),

  priority: z.enum([
    'baixa',
    'media',
    'alta'
  ]),

  department: z.enum([
    'atendimento',
    'financeiro',
    'logistica',
    'suporte',
    'comercial'
  ]),

  summary: z.string().min(5).max(240)
});

module.exports = { classificationSchema };
