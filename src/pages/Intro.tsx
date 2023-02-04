import { Nav } from "../components/blocks/Blocks";
import { Text } from "../components/texts/Texts";

const classes: string[] = [
  "text-intro-title", 
  "text-intro-subtitle"
]

function Intro() : JSX.Element{
  return(
    <section>
      <Nav/>
      <Text type='h1' name={classes[0]}>
        Atlas
      </Text>
      <Text type='h1' name={classes[0]}>
        Computing
      </Text>
      <Text type='h2' name={classes[1]}>
        DESCUBRA PROJETOS CAPAZES DE 
        MELHORAR O SEU MUNDO.
      </Text>
    </section>
  )
}

export {Intro}