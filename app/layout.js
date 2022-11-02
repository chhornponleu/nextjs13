import '../styles/globals.css'

export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body>
        <h1>Root</h1>
        {children}
        </body>
    </html>
  )
}
