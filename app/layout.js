import './globals.css';

export const metadata = {
  title: 'Junk or no',
  description: 'Find out if a food item is junk food or not.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
