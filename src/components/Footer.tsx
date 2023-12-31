import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react"

const Footer = () => {
  return (
    <footer className="bg-neutral-700">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
        <hr className="w-full h-0.5 bg-neutral-800 border-0" />
        <div className="mx-auto p-4 flex flex-col text-center text-neutral-100 md:flex-row md:justify-between items-center">
          <div>
            ©️ {new Date().getFullYear()} Christine Gueffier. Tout droits
            réservés
          </div>
          <div className="flex flex-row items-center justify-center space-x-2 mb-1">
            <a
              href="https://github.com/Kitine23"
              rel="noreferer"
              target="_blank"
              className="hover:-translate-y-1 transition-transform cursor-pointer"
              aria-label="lien github"
            >
              <IconBrandGithub size={32} />
            </a>
            <a
              href="#"
              rel="noreferer"
              target="_blank"
              className="hover:-translate-y-1 transition-transform cursor-pointer"
              aria-label="lien linkedin"
            >
              <IconBrandLinkedin size={32} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
