import './globals.css'
import Navbar from './navbar/Navbar'
import { Inter, Nunito } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'vivek personal website',
  description: 'My personal website depicting me',
}

const font = Nunito({
  subsets: ["latin"],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}</body>
    </html>

  )
}
