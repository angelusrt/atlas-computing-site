import { Block, ProjectBlock } from "../components/blocks/Blocks"
import { Button } from "../components/buttons/Buttons"

function Projects(): JSX.Element{
  return(
    <section>
      <Button 
        type='h1'
        color='white'
        text='Projetos'
      />
      <Block 
        name="block-grid"
      >
        <ProjectBlock
          title="Placeholder"
          subtitle="Placeholder"
        />
        <ProjectBlock
          title="Placeholder"
          subtitle="Placeholder"
        />
        <ProjectBlock
          title="Placeholder"
          subtitle="Placeholder"
        />
      </Block>
    </section>
  )
}

export {Projects}