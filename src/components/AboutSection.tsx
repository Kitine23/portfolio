import skills from "@/data/skills"
import Skill from "./Skill"

const AboutSection = () => {
  return (
    <section id="about" className="py-10 md:pt-16 md:pb-48">
      <div>
        <h2 className="text-center font-bold text-5xl">À propos</h2>
        <hr className="w-6 h-1 mx-auto mt-4 mb-10 bg-teal-500 border-0 rounded" />
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2 space-y-6">
            <h3 className="text-center text-2xl font-bold md:text-left">
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
            <h3 className="text-center text-2xl font-bold md:text-left">
              Mes services
            </h3>
            <p>
              Au delà du graphisme et du code, le score{" "}
              <abbr title="Search Engine Optimization">SEO</abbr> est l&apos;un
              des facteurs les plus importants pour un site web réussi. Je peux
              optimiser votre site existant pour obtenir une meilleure
              visibilité pour les moteurs de recherche notamment à l&apos;aide
              de l&apos;outil <b>Google Lighthouse</b>.
            </p>
            <p>
              Partages <b>Meta</b>, <b>X (ex. Twitter)</b> ou <b>Linkedin</b> ?
              La présence sur les réseaux sociaux nécessite le bon paramétrage
              de votre site. À l&apos;aide de mes services, améliorez
              l&apos;image de votre site lors des partages sur ces réseaux.
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
                  <Skill key={skill.tech} skill={skill} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
