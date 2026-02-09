import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Get Brevo API key and email configuration from environment variables
    const brevoApiKey = process.env.BREVO_API_KEY;
    const recipientEmail = process.env.BREVO_RECIPIENT_EMAIL || process.env.NEXT_PUBLIC_CONTACT_EMAIL;
    // Sender email must be verified in Brevo account
    const senderEmail = email;
    const senderName = name;

    if (!brevoApiKey) {
      console.error('BREVO_API_KEY is not set');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    if (!recipientEmail) {
      console.error('Recipient email is not set');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Send email via Brevo API
    const brevoResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': brevoApiKey,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        sender: {
          name: 'Personal Website - Contact Form',
          email: 'youssefadly47@yahoo.com',
        },
        to: [
          {
            email: recipientEmail,
            name: recipientEmail.split('@')[0],
          },
        ],
        replyTo: {
          email: email,
          name: name,
        },
        subject: `Personal Website Contact Form Submission`,
        htmlContent: `<html><head></head><body><h2>Personal Website Contact Form Submission</h2><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message.replace(/\n/g, '<br>')}</p></body></html>`,
      }),
    });

    if (!brevoResponse.ok) {
      const errorData = await brevoResponse.json().catch(() => ({}));
      console.error('Brevo API error:', errorData);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: brevoResponse.status }
      );
    }

    const data = await brevoResponse.json();

    return NextResponse.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
