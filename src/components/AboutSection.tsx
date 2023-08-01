const skills = [
  { tech: "HTML" },
  { tech: "CSS" },
  { tech: "JavaScript" },
  { tech: "React" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">About Me</h1>
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        <div className="flex flex-col sapce-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me
            </h1>
            <p>
              Lorem ipsum dolor sit{" "}
              <span className="font-bold text-teal-500">
                amet consectetur adipisicing elit.
              </span>{" "}
              Praesentium corrupti doloribus repellat, sit illum laudantium
              minus aspernatur? Eius, impedit? Eius ab excepturi quaerat dolor
              voluptates reiciendis voluptatum, accusantium doloremque minima
              asperiores, ipsum ipsa optio harum blanditiis rerum enim quos sit
              fugit soluta facilis architecto? Harum vero quas voluptatem at
              tempora amet enim mollitia blanditiis distinctio vel iste ipsam
              minus eius soluta porro, nisi earum doloremque eligendi unde quia
              facilis corporis illo iure! Reiciendis soluta beatae consectetur
              vero nisi fugit corporis autem exercitationem ullam earum officia
              tenetur, commodi amet, voluptate quas at aut. Rerum excepturi
              eveniet atque in numquam, aliquam illo.
            </p>
            <br />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              My Skills
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
