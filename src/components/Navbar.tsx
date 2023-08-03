"use client"
import { IconMenu2, IconX } from "@tabler/icons-react"
import Link from "next/link"
import { useState } from "react"

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <header className="w-full mx-auto px-4 bg-white shadow fixed top-0 z-50">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/">
              <h2 className="text-2xl font-bold">Christine Gueffier</h2>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setIsVisible((prev) => !prev)}
              >
                {isVisible ? <IconX /> : <IconMenu2 />}
              </button>
            </div>
          </div>
        </div>
        <nav
          className={`pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            isVisible ? "block" : "hidden"
          }`}
        >
          <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            <li>
              <Link href="/">Accueil</Link>
            </li>
            <li>
              <a href="#about">À propos</a>
            </li>
            <li>
              <a href="#projects">Projets</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
