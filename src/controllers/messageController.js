
const { messageSchema } = require('../schemas/messageSchema');
const { classifyMessage } = require('../services/aiService');

async function receiveMessage(req, res) {
  // 1. Validar os dados recebidos
  const validation = messageSchema.safeParse(req.body);

  if (!validation.success) {
    return res.status(400).json({
      success: false,
      message: 'Dados inválidos.',
      errors: validation.error.issues.map((issue) => ({
        field: issue.path.join('.'),
        message: issue.message
      }))
    });
  }

  const { message, customerName } = validation.data;

  try {
    // 2. Enviar mensagem para a IA
    const classification = await classifyMessage(message);

    // 3. Retornar resultado estruturado
    return res.status(200).json({
      success: true,
      message: 'Mensagem classificada com sucesso.',

      data: {
        customerName: customerName || 'Não informado',
        originalMessage: message,
        status: 'classified',
        classification
      }
    });

  } catch (error) {
    // Registrar erro no servidor
    console.error('Erro na classificação:', error);

    return res.status(502).json({
      success: false,
      message: 'Não foi possível classificar a mensagem.',
      error: 'Verifique a conexão com o serviço de IA.'
    });
  }
}

module.exports = { receiveMessage };

