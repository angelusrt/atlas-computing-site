import { Block, ProjectBlock } from "../components/blocks/Blocks"
import { Text } from "../components/texts/Texts"

interface iProjects {
  tag: string,
  itens: {
    icon: string, 
    title: string, 
    subtitle: string, 
    body: string
  }[]
}

const Projects = (prop: iProjects) => (
  <section id="projects" className="block-white">
    <Text name="text-title" type='h1'>{prop.tag}</Text>
    <Block 
      name="block-grid"
      children={ prop.itens.map(
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