import { InfoBlock } from "../components/blocks/Blocks"
import { Button } from "../components/buttons/Buttons"

function Discover(){
  return(
    <section id="discover">
      <Button
        type="h1"
        color="black"
        text="Descubra"
      />
      <InfoBlock
        title="Localização"
        subtitle="Recife"
        color="white"
      />
      <InfoBlock
        title="Email"
        subtitle="angelusrt@gmail.com"
        color="white"
      />
    </section>
  )
}

export {Discover}