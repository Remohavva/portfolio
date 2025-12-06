import { NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validations';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate the form data
    const result = contactFormSchema.safeParse(body);
    
    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid form data', details: result.error.errors },
        { status: 400 }
      );
    }

    const { name, email, message } = result.data;

    // TODO: Implement your email sending logic here
    // Example options:
    // 1. SendGrid: https://sendgrid.com/
    // 2. Resend: https://resend.com/
    // 3. Nodemailer with SMTP
    // 4. AWS SES
    
    console.log('Contact form submission:', { name, email, message });

    // For now, just return success
    // Replace this with actual email sending
    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
