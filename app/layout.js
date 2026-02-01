import './globals.css';

export const metadata = {
  title: 'Growie — Smart Plant Growing Assistant',
  description: 'Growie helps you control the climate, keep a plant diary, and get personalized recommendations for the perfect harvest.',
  metadataBase: new URL('https://growie.pro'),
};

export default function RootLayout({ children, params }) {
  const locale = params?.locale || 'ru';

  return (
    <html lang={locale}>
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
