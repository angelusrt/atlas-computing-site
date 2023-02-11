import { Nav } from "../components/blocks/Blocks"
import { Globe } from "../components/canvas/Canvas"
import { Text } from "../components/texts/Texts"
import data from "../data.json"

const classes: string[] = [
  "text-intro-title", 
  "text-intro-subtitle"
]

function Intro() : JSX.Element{
  return(
    <section id="intro">
      <Nav/>
      <Globe/>
      <Text type='h1' name={classes[0]}>
        {data.intro.title[0]}
      </Text>
      <Text type='h1' name={classes[0]}>
        {data.intro.title[1]}
      </Text>
      <Text type='h2' name={classes[1]}>
        {data.intro.subtitle}
      </Text>
    </section>
  )
}

export {Intro}