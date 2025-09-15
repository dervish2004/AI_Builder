import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
    }

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // Using the Mistral model we configured
        model: 'mistralai/mistral-small-3.2-24b-instruct:free',
        messages: [
          {
            role: 'system',
            content: 'You are an expert React developer. Generate a single, production-ready React component snippet in JSX format only. Do not include any extra text, explanations, or a full HTML document. All styling should use Tailwind CSS.',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        // Set a reasonable token limit for efficiency
        max_tokens: 2000,
      }),
    });

    if (!response.ok) {
      // Improved error handling to get a more specific message from the API
      const errorText = await response.text();
      let errorMessage = `API Error: ${response.status} - ${response.statusText}`;

      try {
        const errorData = JSON.parse(errorText);
        if (errorData.error && errorData.error.message) {
          errorMessage = errorData.error.message;
        } else {
          errorMessage = errorText;
        }
      } catch  {
        // Fallback to the original error text if parsing fails
        errorMessage = errorText;
      }
      throw new Error(errorMessage);
    }

    const data = await response.json();
    const generatedCode = data.choices[0].message.content.trim();

    return NextResponse.json({ code: generatedCode });
  } catch (error) {
    console.error('API Error:', error);
    let userErrorMessage = 'An unknown error occurred. Please try again.';

    if (error instanceof Error && error.message.includes('402')) {
      userErrorMessage = 'Your credits have been exhausted. Please wait for them to refresh or try a simpler prompt.';
    } else if (error instanceof Error) {
      userErrorMessage = error.message;
    }

    return NextResponse.json({ error: userErrorMessage }, { status: 500 });
  }
}
