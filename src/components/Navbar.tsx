import Link from "next/link"

const Navbar = () => (
  <header className="w-full mx-auto px-4 bg-white shadow fixed top-0 z-50">
    <div className="justify-between md:items-center md:flex">
      <div>
        <div className="md:py-5 md:block">
          <Link href="/">
            <h2 className="text-2xl font-bold">Christine Gueffier</h2>
          </Link>
        </div>
      </div>
      <nav>
        <ul className="md:flex md:space-x-6">
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

export default Navbar
