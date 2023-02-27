import React, { useState } from 'react'
import { NavButton } from './components/buttons/Buttons'

import About from './pages/About'
import Discover from './pages/Discover'
import Footer from './pages/Footer'
import Intro from './pages/Intro'
import Projects from './pages/Projects'
import World from './pages/World'

import data from "./data.json"

const App = () => (
  <div 
    className="App" 
    children={
      <React.Fragment>
        <NavButton
          index={data.index}
        />
        <Intro
          subtitle={data.intro.subtitle}
        />
        <Discover 
          tag={data.discover.tag}
        />
        <Projects
          tag={data.projects.tag}
          itens={data.projects.itens}
        />
        <About
          tag={data.about.tag}
          title={data.about.title}
          body={data.about.body[0]}
        />
        <World 
          tag={data.world.tag}
          title={data.world.title}
        />
        <Footer
          buttons={data.footer.buttons}
          body={data.footer.body}
        />
      </React.Fragment>
    }
  />
)

export default App
