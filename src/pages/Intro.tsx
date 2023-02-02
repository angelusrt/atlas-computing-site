import { Button } from "../components/buttons/Buttons";
import { Text } from "../components/texts/Texts";

const classes: string[] = [
  "text-intro-title", 
  "text-intro-subtitle"
]

function Intro() : JSX.Element{
  return(
    <section>
      <Button
        type='h1'
        name='button-white'
        text='AtCom'
      />
      <Button
        type='h2'
        name='button-white'
        text='Indíce'
      />
      <Button
        type='h2'
        name='button-black'
        text='Entre'
      />
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