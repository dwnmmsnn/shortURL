import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { url } = await request.json();

    const apiResponse = await fetch('https://api.encurtador.dev/encurtamentos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url }),
    });

    if (!apiResponse.ok) {
      const errorData = await apiResponse.text();
      return NextResponse.json({ error: errorData }, { status: apiResponse.status });
    }

    const data = await apiResponse.json();
    return NextResponse.json({ urlEncurtada: data.urlEncurtada });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
