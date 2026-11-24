
const { z } = require('zod');

const messageSchema = z.object({
  message: z
    .string()
    .trim()
    .min(5, 'A mensagem precisa ter pelo menos 5 caracteres.')
    .max(2000, 'A mensagem não pode ultrapassar 2000 caracteres.'),

  customerName: z
    .string()
    .trim()
    .min(2)
    .max(100)
    .optional()
});

module.exports = { messageSchema };
