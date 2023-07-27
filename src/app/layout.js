"use client"

import theme from '@/theme'
import { ThemeProvider } from '@material-ui/core'

import "../app/global.css"
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          {children}
          </ThemeProvider>
          </body>
    </html>
  )
}
