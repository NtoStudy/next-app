"use client";
import Link from "next/link"
import React, {useState} from "react";
import {usePathname} from "next/navigation";

const LinkData = [
  {
    name: "About",
    href: "/dashboard/about",
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
  },
]

export default function DashboardLayout({children,}: Readonly<{
  children: React.ReactNode
}>) {
  const [count, setCount] = useState(0)
  const pathname = usePathname()
  return (
    <div className="border-2 border-dashed border-black p-4 w-1/2 mx-auto mt-10">
      <div className="flex gap-4 font-bold text-lg mb-4 ">
        {LinkData.map((link, index) => (
          <Link key={index} href={link.href} className={`${link.href === pathname ? "text-blue-500" : ""}`}>
            {link.name}
          </Link>
        ))}
      </div>
      <h2>Dashboard Layout {count}</h2>
      <button className="bg-black text-white p-2 my-4 rounded-md" onClick={() => setCount(count + 1)}>Increment</button>
      {children}
    </div>

  )
}
