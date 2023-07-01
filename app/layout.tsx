import NavBar from './components/NavBar'
import './globals.css'
import { Lora } from 'next/font/google'

const lora = Lora({ subsets: ['latin'] })

export const metadata = {
  title: 'Pokomon',
  description: 'Pokemon api, that teach me aboout NextJS - fetchind the date, and displaying it via Tailwind',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lora.className} >
        <div className='container mx-auto'>
        <NavBar />
        {children}
        </div>
      </body>
    </html>
  )
}
