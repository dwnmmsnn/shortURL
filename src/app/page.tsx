'use client';

import { useState } from 'react';
import { shortenURL } from './utils/shorturl';

export default function Home() {
  const [longURL, setLongURL] = useState('');
  const [shortURL, setShortURL] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setShortURL('');

    try {
      const shortened = await shortenURL(longURL);
      setShortURL(shortened);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred');
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <h1>URL Shortener</h1>
        <input
          type="url"
          placeholder="Enter a URL to shorten"
          value={longURL}
          onChange={(e) => setLongURL(e.target.value)}
          required
        />
        <button type="submit">Shorten</button>
      </form>
      {shortURL && (
        <p>
          Shortened URL: <a href={shortURL}>{shortURL}</a>
        </p>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
