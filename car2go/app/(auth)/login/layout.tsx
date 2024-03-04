export const metadata = {
  title: 'Car2Go | Log in',
  description: 'Login page for Car2Go',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
