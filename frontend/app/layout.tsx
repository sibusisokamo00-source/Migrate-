import { AuthProvider } from './context/AuthContext'

export const metadata = {
  title: 'EA Migrate - Automated EA Hosting',
  description: 'Host, automate, and monitor your Forex EAs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: 'system-ui, sans-serif' }}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}