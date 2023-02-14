import { Block, ProjectBlock } from "../components/blocks/Blocks"
import { Button } from "../components/buttons/Buttons"
import data from "../data.json"

const Projects = () => (
  <section id="projects">
    <Button
      type='h1'
      name="button-title button-white" 
      textName="text-button-black"
      text={data.projects.tag}
    />
    <Block 
      name="block-grid"
      children={ data.projects.itens.map(
        (item, id) => 
        <ProjectBlock
          key={id}
          iconName={item.icon}
          title={item.title}
          subtitle={item.subtitle}
          body={item.body}
        />
      )}
    />
  </section>
)

export default Projects