import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react"
import Image from "next/image"
import SlideUp from "./SlideUp"

const projects = [
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
      "Implémenter le front end de Kasa, une application de location de Logements avec React.",
    image: "/images/kasa.png",
    github: "https://github.com/Kitine23/kasa",
  },
  {
    name: "Mon vieux Grimoire",
    description: "Développez le back-end d'un site de notation de livres",
    image: "/images/mon-vieux-grimoire.png",
    github: "https://github.com/Kitine23/mon-vieux-grimoire",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-10 space-y-10">
      <h2 className="text-center font-bold text-5xl">
        Projets
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </h2>
      <div className="flex flex-col space-y-28">
        {projects.map((project) => (
          <div key={project.name}>
            <SlideUp offset="-300px 0px -300px 0px">
              <div className="flex flex-col animate-slideUpCubicBezier animation-delay-2 md:flex-row md:space-x-12">
                <div className="mt-8 md:w-1/2">
                  <a href={project.link} target="_blank"></a>
                  <Image
                    src={project.image}
                    alt=""
                    width={1000}
                    height={1000}
                    className="rounded-xl shadow-xl hover:opacity-70"
                  />
                </div>
                <div className="mt-12 md:w-1/2">
                  <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                  <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>
                  <div className="flex flex-row align-bottom space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      className="cursor-pointer"
                    >
                      <IconBrandGithub size={32} />
                    </a>
                    {project?.link && (
                      <a href={project.link} target="_blank">
                        <IconExternalLink
                          size={32}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </SlideUp>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
