import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {NextUIProvider} from "@nextui-org/react";
import {ThemeProvider as NextThemesProvider} from "next-themes";
import { useTheme } from 'next-themes';


export default function App({ Component, pageProps }: AppProps) {
  const { theme } = useTheme();
  return (
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <Component {...pageProps} />
      </NextThemesProvider>
  )
}
