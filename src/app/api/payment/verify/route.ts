// /api/payment/verify/route.ts
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const reference = searchParams.get('reference');

  if (!reference) {
    return NextResponse.json({ error: 'Missing reference' }, { status: 400 });
  }

  try {
    const response = await fetch(
      `https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        },
      }
    );

    const result = await response.json();

    if (!response.ok || !result.status) {
      return NextResponse.json({ error: 'Verification failed' }, { status: response.status });
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error('Verify API error:', error);
    return NextResponse.json({ error: 'An error occurred verifying payment.' }, { status: 500 });
  }
}