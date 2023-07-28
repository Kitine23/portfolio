"use client"
import React from "react"
import Image from "next/image"
import { IconArrowDown } from "@tabler/icons-react"

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52">
        <div className="md:w-1/2 md:mt-2">
          <Image
            className="rounded-full shadow-2xl"
            src="/avatar.png"
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="font-bold text-4xl mt-6 md:text-7xl md:mt-0">
            Bonjour, je suis Christine Gueffier!
          </h1>
          <p className="text-lg mt-4 mb-6">
            Développeuse web junior Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Asperiores, quidem?
          </p>
          <a
            href="#projects"
            className="text-neutral-100 font font-semibold px-6 py-3 bg-teal-600"
          >
            Projets
          </a>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <a href="#about">
          <IconArrowDown size={35} className="animate-bounce" />
        </a>
      </div>
    </section>
  )
}

export default HeroSection
