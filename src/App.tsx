import React, { useState } from 'react'

import About from './pages/About'
import Discover from './pages/Discover'
import Footer from './pages/Footer'
import Intro from './pages/Intro'
import Projects from './pages/Projects'

// const About = React.lazy(() => import('./pages/About'))
// const Discover = React.lazy(() => import('./pages/Discover'))
// const Footer = React.lazy(() => import('./pages/Footer'))
// const Intro = React.lazy(() => import('./pages/Intro'))
// const Projects = React.lazy(() => import('./pages/Projects'))
// const Enter = React.lazy(() => import('./pages/Enter'))

const App = () => {
  const [isToggle, setToggle] = useState(true)

  return (
    <div 
      className="App" 
      children={
        <React.Fragment>
          <Intro setToggle={() => setToggle(false)}/>
          <Discover/>
          <Projects/>
          <About/>
          <Footer/>
        </React.Fragment>
      }
    />
  )
}

export default App
