import React from 'react'

// import About from './pages/About'
// import Discover from './pages/Discover'
// import Footer from './pages/Footer'
// import Intro from './pages/Intro'
// import Projects from './pages/Projects'

const About = React.lazy(() => import('./pages/About'))
const Discover = React.lazy(() => import('./pages/Discover'))
const Footer = React.lazy(() => import('./pages/Footer'))
const Intro = React.lazy(() => import('./pages/Intro'))
const Projects = React.lazy(() => import('./pages/Projects'))

const App = () => {
  return (
    <div className="App">
      <Intro/>
      <Discover/>
      <Projects/>
      <About/>
      <Footer/>
    </div>
  )
}

export default App
