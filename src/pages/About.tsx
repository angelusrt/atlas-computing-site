import { Text } from "../components/texts/Texts"

function About(): JSX.Element{
  return(
    <section>
      <Text type='p'>
        Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. 
      </Text>
      <Text type='p'>
        Ut enim ad minim veniam, quis 
        nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea 
        commodo consequat. Duis aute 
        irure dolor in reprehenderit in 
        voluptate velit esse cillum dolore 
        eu fugiat nulla pariatur.
      </Text>
    </section>
  )
}

export{About}