const skills = [
  { tech: "HTML" },
  { tech: "CSS" },
  { tech: "JavaScript" },
  { tech: "React" },
]

const AboutSection = () => {
  return (
    <section id="about" className="py-10 md:pt-16 md:pb-48">
      <div>
        <h2 className="text-center font-bold text-5xl">À propos</h2>
        <hr className="w-6 h-1 mx-auto mt-4 mb-10 bg-teal-500 border-0 rounded" />
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2">
            <h3 className="text-center text-2xl font-bold mb-6 md:text-left">
              Mon parcours
            </h3>
            <p>
              Je suis{" "}
              <span className="font-bold text-teal-500">
                développeuse web junior
              </span>{" "}
              depuis 2023 après avoir suivi une formation Développeur web
              Fullstack avec OpenClassrooms
            </p>
            <br />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Mes compétences
            </h1>
            <div className="flex flex-wrap felx-row justify-center md:justify-start">
              {skills.map((skill) => (
                <p
                  key={skill.tech}
                  className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                >
                  {skill.tech}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
