"use client"
import Link from "next/link"
import { useState } from "react"

const Navbar = () => {
  const [navbar, setNavbar] = useState(false)

  return (
    <header className="w-full mx-auto px-4 bg-white shadow fixed top-0 z-50">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="md:py-5 md:block">
            <h2 className="text-2xl font-bold">Christine Gueffier</h2>
          </div>
        </div>
        <nav>
          <ul className="md:flex md:space-x-6">
            <li>
              <Link href="/">Accueil</Link>
            </li>
            <li>
              <Link href="/about">À propos</Link>
            </li>
            <li>
              <Link href="/projects">Projets</Link>
            </li>
            <li></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
