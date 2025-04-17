"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (path: string) => pathname === path

  return (
    <header className="py-4 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-xs font-medium">Kh</span>
            </div>
            <span className="text-sm">Khronza</span>
          </div>

          <nav className="hidden md:flex items-center space-x-1">
            <Link href="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>
              HOME
            </Link>
            <Link href="/portfolio" className={`nav-link ${isActive("/portfolio") ? "active" : ""}`}>
              PORTFOLIO
            </Link>
            <Link href="/bts" className={`nav-link ${isActive("/bts") ? "active" : ""}`}>
              BTS
            </Link>
            <Link href="/contact" className={`nav-link ${isActive("/contact") ? "active" : ""}`}>
              CONTACT
            </Link>
          </nav>

          <div className="flex items-center">
            <button className="px-3 py-1 text-xs border border-white/50 rounded-full hover:bg-white hover:text-black transition-colors">
              BOOK A CALL
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
