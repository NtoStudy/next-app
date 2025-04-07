import React from "react";
import "./globals.css"

export default function DashboardLayout({children,}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body>
    {/* Layout UI */}
    {/* Place children where you want to render a page or nested layout */}
    <nav>根组件</nav>
    <main>{children}</main>
    </body>
    </html>
  )
}
