"use client"
import Image from "next/image"
import { IconArrowDown } from "@tabler/icons-react"

const HeroSection = () => {
  return (
    <section id="home" className="py-16 md:py-10">
      <div className="flex flex-col text-center items-center justify-center py-10 sm:py-16 md:flex-row md:space-x-4 md:text-left md:py-32">
        <div className="md:w-1/2 md:mt-2">
          <Image
            className="rounded-full"
            src="/avatar.png"
            alt="avatar Christine Gueffier"
            width={300}
            height={300}
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="font-bold text-4xl mt-6 md:text-6xl md:mt-0 leading-loose tracking-wide">
            Bonjour 👋
            <br />
            je suis Christine Gueffier!
          </h1>
          <p className="text-xl mt-4 mb-6 text-teal-700 font-semibold">
            Développeuse web junior
          </p>
          <a
            href="#projects"
            className="text-neutral-100 font font-semibold px-6 py-3 bg-teal-700"
          >
            Mes projets
          </a>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <a href="#about" aria-label="voir section à propos">
          <IconArrowDown size={35} className="animate-bounce" />
        </a>
      </div>
    </section>
  )
}

export default HeroSection
