import { Block, ProjectBlock } from "../components/blocks/Blocks"
import { Button } from "../components/buttons/Buttons"
import { Text } from "../components/texts/Texts"
import data from "../data.json"

const Projects = () => (
  <section id="projects" className="block-white">
    <Text name="text-title" type='h1'>
      {data.projects.tag}
    </Text>
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