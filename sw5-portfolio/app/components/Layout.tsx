export default function PageLayout({ children, bgColor }) {
    return (
        <html lang="en" style={{ backgroundColor: bgColor }}>
      <head>
      </head>
        <body className={'flex-col min-h-screen'}>
            <div >
                {children}
            </div>
        </body>
      </html>
    )
  }