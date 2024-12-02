export const shortenURL = async (longURL: string): Promise<string> => {
  try {
    const response = await fetch('/api/shortURL', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: longURL }),
    });

    if (!response.ok) {
      throw new Error('Failed to shorten the URL');
    }

    const data: { urlEncurtada: string } = await response.json();
    return data.urlEncurtada;
  } catch (error) {
    console.error('Error shortening URL:', error);
    throw error;
  }
};
