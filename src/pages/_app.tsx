import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Roboto_Mono } from 'next/font/google';

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-robotoMono'
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${robotoMono.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  )
}
