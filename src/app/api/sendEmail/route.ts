import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

// POST request handler to send the email
export async function POST(req: Request) {
    try {
        const { name, email, phone, message } = await req.json();

        // Validate input
        if (!name || !email || !phone || !message) {
            return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
        }

        // Configure the Nodemailer transporter with Gmail service
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER, // Your Gmail address
                pass: process.env.GMAIL_PASS, // Your Gmail app password (not the regular password)
            },
        });

        // Define the email options
        const mailOptions = {
            from: email,
            to: process.env.GMAIL_USER, // Your email address to receive the form message
            subject: `New Contact Form Submission from ${name}`,
            text: `
                Name: ${name}
                Email: ${email}
                Phone: ${phone}
                Message: ${message}
            `,
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        // Respond with success message
        return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
