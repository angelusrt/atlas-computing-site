import { Block, ProjectBlock } from "../components/blocks/Blocks"
import { Button } from "../components/buttons/Buttons"
import data from "../data.json"

function Projects(): JSX.Element{
  return(
    <section id="projects">
      <Button 
        type='h1'
        color='white'
        text={data.projects.tag}
      />
      <Block name="block-grid">
        <ProjectBlock
          iconName="ReadingFlow"
          title={data.projects.itens[0].title}
          subtitle={data.projects.itens[0].subtitle}
          body={data.projects.itens[0].body}
        />
        <ProjectBlock
          iconName="Database"
          title={data.projects.itens[1].title}
          subtitle={data.projects.itens[1].subtitle}
          body={data.projects.itens[1].body}
        />
        <ProjectBlock
          iconName="Network"
          title={data.projects.itens[2].title}
          subtitle={data.projects.itens[2].subtitle}
          body={data.projects.itens[2].body}
        />
      </Block>
    </section>
  )
}

export {Projects}