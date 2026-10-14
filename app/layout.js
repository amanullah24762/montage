import './globals.css';

export const metadata = {
  title: 'Montage Event Complex | Weddings & Events in Islamabad',
  description: 'Discover Montage Event Complex in Gulberg Greens, Islamabad. An elegant setting for weddings, celebrations and unforgettable events. Inquire on WhatsApp.',
};
export const viewport = { width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
