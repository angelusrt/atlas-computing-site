import React, { useState } from 'react'
import { NavButton } from './components/buttons/Buttons'

import About from './pages/About'
import Discover from './pages/Discover'
import Footer from './pages/Footer'
import Intro from './pages/Intro'
import Projects from './pages/Projects'
import World from './pages/World'

import data from "./data.json"

const App = () => {
  const[isMobile, setIsMobile] = useState(window.innerWidth < 725)

  return(
    <main className="App">
      <NavButton
        index={data.index}
        isMobile={isMobile}
      />
      <Intro
        subtitle={data.intro.subtitle}
        isMobile={isMobile}
      />
      <Discover 
        tag={data.discover.tag}
        isMobile={isMobile}
      />
      <Projects
        tag={data.projects.tag}
        itens={data.projects.itens}
        isMobile={isMobile}
      />
      <About
        tag={data.about.tag}
        title={data.about.title}
        body={data.about.body[0]}
        valuesTag={data.about.values.tag}
        values={data.about.values.body}
        isMobile={isMobile}
      />
      <World 
        tag={data.world.tag}
        title={data.world.title}
      />
      <Footer
        buttons={data.footer.buttons}
        body={data.footer.body}
      />
    </main>
  ) 
}

export default App
