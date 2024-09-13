import { Roboto } from 'next/font/google';

import '../styles/globals.css';

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: '--var-roboto',
  weight: ['400', '500', '700', '900'],
});

export const metadata = {
  title: 'The Cars Dealer App',
  description: 'test',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}  antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
