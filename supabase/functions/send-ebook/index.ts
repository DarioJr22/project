import 'jsr:@supabase/functions-js/edge-runtime.d.ts';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface EmailRequest {
  to: string;
  customerName: string;
  productName: string;
  downloadUrl: string;
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { to, customerName, productName, downloadUrl }: EmailRequest = await req.json();

    // Here you would integrate with your email service (SendGrid, Mailgun, etc.)
    // For now, we'll simulate sending the email
    
    const emailContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Seu Manual da Fertilidade</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .button { display: inline-block; background: #10b981; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; margin: 20px 0; }
          .footer { text-align: center; margin-top: 30px; font-size: 12px; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎉 Parabéns, ${customerName}!</h1>
            <p>Seu Manual da Fertilidade está pronto para download</p>
          </div>
          <div class="content">
            <h2>Obrigado pela sua compra!</h2>
            <p>Você acaba de dar um passo importante na sua jornada para a maternidade/paternidade.</p>
            
            <p><strong>Produto adquirido:</strong> ${productName}</p>
            
            <p>Clique no botão abaixo para fazer o download do seu e-book:</p>
            
            <a href="${downloadUrl}" class="button">📥 Baixar Meu E-book Agora</a>
            
            <h3>O que você vai encontrar no manual:</h3>
            <ul>
              <li>✅ Estratégias naturais para aumentar a fertilidade</li>
              <li>✅ Protocolos nutricionais específicos</li>
              <li>✅ Suplementação baseada em evidências</li>
              <li>✅ Checklists e planilhas práticas</li>
              <li>✅ Orientações para homens e mulheres</li>
            </ul>
            
            <p><strong>Dica importante:</strong> Salve este e-mail! Você pode baixar o manual quantas vezes quiser usando o link acima.</p>
            
            <div style="background: #fef3cd; border: 1px solid #fde68a; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <p><strong>⚠️ Aviso Médico:</strong> Este material é para fins educacionais. Sempre consulte seu médico antes de fazer mudanças significativas em sua saúde ou tratamento.</p>
            </div>
            
            <p>Se tiver alguma dúvida, responda este e-mail que teremos prazer em ajudar!</p>
            
            <p>Desejamos muito sucesso na sua jornada! 🍀</p>
            
            <p>Com carinho,<br>
            <strong>Equipe Manual da Fertilidade</strong></p>
          </div>
          <div class="footer">
            <p>Este e-mail foi enviado porque você adquiriu o Manual da Fertilidade.</p>
            <p>© 2025 Manual da Fertilidade. Todos os direitos reservados.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // In a real implementation, you would send this email using a service like:
    // - SendGrid
    // - Mailgun  
    // - Amazon SES
    // - Resend
    
    // For demonstration, we'll log the email content
    console.log('Email would be sent to:', to);
    console.log('Email content:', emailContent);

    // Simulate successful email sending
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'E-book enviado com sucesso!',
        emailSent: true 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'Erro ao enviar e-mail' 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});