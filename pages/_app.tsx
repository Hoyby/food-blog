import type { AppProps } from 'next/app'

import '../styles/globals.css'
import 'tailwindcss/tailwind.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
	return <Component {...pageProps} />
}

export default MyApp
