import './globals.css';

export const metadata = {
  title: 'URL Shortener',
  description: 'Shorten your URLs with ease',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

