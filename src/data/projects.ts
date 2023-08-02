type Project = {
  name: string
  description: string
  image: string
  github: string
  link?: string
}

const projects: Project[] = [
  {
    name: "Booki",
    description:
      "Intégrer la page web de Booki, une plateforme de réservation de vacances avec HTML5 et CSS3",
    image: "/images/booki.png",
    github: "https://github.com/Kitine23/booki-oc",
    link: "https://kitine23.github.io/booki-oc/",
  },
  {
    name: "Kasa",
    description:
      "Implémenter le front end de Kasa, une application de location de Logements avec React et Sass",
    image: "/images/kasa.png",
    github: "https://github.com/Kitine23/kasa",
  },
  {
    name: "Mon vieux Grimoire",
    description:
      "Développement du back-end d'un site de notation de livres avec Express et MongoDB",
    image: "/images/mon-vieux-grimoire.png",
    github: "https://github.com/Kitine23/mon-vieux-grimoire",
  },
]

export default projects
