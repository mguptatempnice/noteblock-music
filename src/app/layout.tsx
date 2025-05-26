import './globals.css';
import ClientLayout from '../components/ClientLayout';

export const metadata = {
  title: 'My Music App',
  description: 'A per-user themed music page',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        {/* Your client-side MUI/theme wrapper */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
