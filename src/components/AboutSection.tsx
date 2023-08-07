import skills from "@/data/skills"

const AboutSection = () => {
  return (
    <section id="about" className="py-10 md:pt-16 md:pb-48">
      <div>
        <h2 className="text-center font-bold text-5xl">À propos</h2>
        <hr className="w-6 h-1 mx-auto mt-4 mb-10 bg-teal-500 border-0 rounded" />
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2 space-y-4">
            <h3 className="text-center text-2xl font-bold mb-6 md:text-left">
              Mon parcours
            </h3>
            <p className="[&>b]:font-bold [&>b]:text-teal-700">
              Je suis <b>développeuse web junior</b> depuis 2023 après avoir
              suivi une formation Développeur web <b>Fullstack</b> avec{" "}
              <a
                href="https://openclassrooms.com/fr/"
                className="cursor-pointer underline"
              >
                OpenClassrooms
              </a>
              . Je suis à la recherche de missions qui me permettront de{" "}
              <b>gagner en expérience</b> et d&apos;utiliser ma maîtrise de
              technologies incontournables au profit de mes clients.
            </p>
            <p>
              Après avoir passé 5 ans à m&apos;occuper d&apos;enfants en
              situation d&apos;handicap, j&apos;ai pu développé des qualités
              comme la <b>persévérance</b>, la <b>capacité d&apos;adaptation</b>
              , l&apos;
              <b>esprit d&apos;équipe</b>, l&apos;<b>autonomie </b>
              et la <b>rigueur</b>. C&apos;est en 2022 que j&apos;ai lancé mon
              projet de reconversion professionnelle dans le développement web.
              Je suis intéressée par le développement front-end et le web design
              depuis la fin de ma formation.
            </p>
          </div>
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Mes compétences
            </h1>
            <div className="space-y-2">
              {skills
                .sort((a, b) => (a.progression < b.progression ? 1 : -1))
                .map((skill) => (
                  <div
                    key={skill.tech}
                    className="bg-gray-200 rounded font-semibold relative h-10"
                  >
                    <div
                      style={{ width: `${skill.progression}%` }}
                      className={`${skill.color} absolute inset-0 h-full`}
                      aria-hidden="true"
                    ></div>
                    <div className="px-4 py-2 flex z-10 absolute gap-2 items-center h-full">
                      {skill.icon}
                      <span className="whitespace-nowrap">{skill.tech}</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
