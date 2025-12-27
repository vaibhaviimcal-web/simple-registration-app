import './globals.css';

export const metadata = {
  title: 'Simple Registration App',
  description: 'Minimal Next.js registration with Supabase',
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
