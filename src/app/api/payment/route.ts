import { NextResponse } from 'next/server';

export  async function POST(request: Request) {

    try {
        console.log('Payment API request received.');
        const { email, amount, callback_url } = await request.json();

            const response = await fetch('https://api.paystack.co/transaction/initialize', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.PAYSTACK_SECRET_KEY}`
            },
            body: JSON.stringify({ email, amount, callback_url })
            });

        if(!response.ok) {
            console.log('Payment API response not OK:', response.status, response.statusText);
            return NextResponse.json(
                { error: 'Failed to initialize payment.' },
                { status: response.status }
            );
           
        }

        return NextResponse.json(await response.json());

    }
    catch (error) {
            console.log('Payment API error:', error);
            return NextResponse.json({ error: 'An error occurred while processing the payment.' } );
        }
    finally {
        console.log('Payment API request completed.');
    }
}