import type { AppProps } from 'next/app'

import { GlobalStyle } from '../styles/globalStyles'
import '../lib/dayjs'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
