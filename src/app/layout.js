import './globals.css'
import { Fredoka } from 'next/font/google'

const inter = Fredoka({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-image">
          {children}
        </div>
      </body>
    </html>
  );
}
