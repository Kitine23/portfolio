import {
  IconBrandCss3,
  IconBrandGit,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandMongodb,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandNpm,
  IconBrandReact,
  IconBrandSass,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandVscode,
} from "@tabler/icons-react"
import colors from "tailwindcss/colors"
type TailwindColor = keyof typeof colors

type Skill = {
  tech: string
  progression: number
  color: `bg-${TailwindColor}-${number}`
  icon?: React.ReactElement
}

const skills: Skill[] = [
  {
    progression: 70,
    tech: "HTML5",
    color: "bg-blue-400",
    icon: <IconBrandHtml5 />,
  },
  {
    progression: 60,
    tech: "CSS3",
    color: "bg-red-400",
    icon: <IconBrandCss3 />,
  },
  {
    progression: 40,
    tech: "JavaScript (ES5)",
    color: "bg-yellow-400",
    icon: <IconBrandJavascript />,
  },
  {
    progression: 20,
    tech: "TypeScript",
    color: "bg-indigo-300",
    icon: <IconBrandTypescript />,
  },
  {
    progression: 55,
    tech: "React",
    color: "bg-green-400",
    icon: <IconBrandReact />,
  },
  {
    progression: 30,
    tech: "Git",
    color: "bg-pink-300",
    icon: <IconBrandGit />,
  },
  {
    progression: 10,
    tech: "MongoDB / Mongoose",
    color: "bg-orange-300",
    icon: <IconBrandMongodb />,
  },
  {
    progression: 30,
    tech: "ExpressJS",
    color: "bg-slate-300",
    icon: <IconBrandNodejs />,
  },
  {
    progression: 40,
    tech: "VSCode",
    color: "bg-yellow-600",
    icon: <IconBrandVscode />,
  },
  {
    progression: 20,
    tech: "Sass",
    color: "bg-teal-400",
    icon: <IconBrandSass />,
  },
  {
    progression: 40,
    tech: "TailwindCSS",
    color: "bg-sky-300",
    icon: <IconBrandTailwind />,
  },
  {
    progression: 30,
    tech: "NextJS",
    color: "bg-lime-300",
    icon: <IconBrandNextjs />,
  },
  {
    progression: 30,
    tech: "Npm",
    color: "bg-purple-400",
    icon: <IconBrandNpm />,
  },
]

export default skills
