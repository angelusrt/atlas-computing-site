import React, { useEffect, useRef, useState } from 'react'

import { getIndex, setDisplay, setLocation } from './functions/utils'
import { RatingType, UserType } from './functions/function.types'

import { Block, NavBlock } from './components/blocks/Blocks'
import { NavButton } from './components/buttons/Buttons'

import Atlas from './pages/Atlas'
import Discover from './pages/Discover'
import Projects from './pages/Projects'
import About from './pages/About'
import World from './pages/World'
import Footer from './pages/Footer'
import Atlas2 from './pages/Atlas2'
import Tutorial from './pages/Tutorial'
import Forms from './pages/Forms'
import Intro from './pages/Intro'

import firstData from "./firstPage.json"
import secondData from "./secondPage.json"

import "./App.css"

const intros = [2, 6, 9, 12]
const infos = [3, 4, 5]
const forms = [7, 8]
const navs = [3, 4, 5, 7, 8, 12]

const sectionMap: Record<number, number> = {
  0: 1, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1,
  6: 2, 7: 2, 8: 2,
  9: 3, 10: 3, 11: 3,
  12: 4, 13: 4
}

function getInitialPage () {
  return window.location.pathname === '/1/' ? 1 : 0
}

const App = () => {
  const[isMobile, setIsMobile] = useState(window.innerWidth < 725)
  const[pageActive, setPageActive] = useState(getInitialPage())
  const[pageFirstEntry, setPageFirstEntry] = useState(0)
  const[userState, setUserState] = useState<UserType>({rating: null})

  const firstRef = useRef<HTMLDivElement>(null!)
  const secondRef = useRef<HTMLDivElement>(null!)

  function decrement() {
    setPageActive(s => s - 1)
  }
  function increment() {
    setPageActive(s => s + 1)
    setPageFirstEntry(s => pageActive + 1 > s ? pageActive + 1 : s)
  }
  function decrementPage() {
    setPageActive(0)
    setLocation('/0/')
  }
  function incrementPage() {
    setPageActive(1)
    setLocation('/1/')
  }
  function setRating(prop: RatingType) {
    const {emoji, pageActive} = prop
    
    setUserState(s => {
      if (s.rating)
        s.rating.push({emoji, pageActive})
      else 
        s.rating = [{emoji, pageActive}]

      return s
    })
  }
  
  useEffect(() => {
    const isFirstPage = pageActive === 0    

    setDisplay(firstRef, isFirstPage)
    setDisplay(secondRef, !isFirstPage)
  }, [pageActive])

  return(
    <main className="App">
      <Block
        type='div' 
        blockRef={firstRef} 
        name="section first-page"
      >
        <Atlas
          subtitle={firstData.atlas.subtitle}
          isMobile={isMobile}
        />
        <Discover 
          tag={firstData.discover.tag}
          isMobile={isMobile}
        />
        <Projects
          tag={firstData.projects.tag}
          itens={firstData.projects.itens}
          isMobile={isMobile}
        />
        <About
          tag={firstData.about.tag}
          title={firstData.about.title}
          body={firstData.about.body[0]}
          valuesTag={firstData.about.values.tag}
          values={firstData.about.values.body}
          isMobile={isMobile}
        />
        <World 
          tag={firstData.world.tag}
          title={firstData.world.title}
          setPage={incrementPage}
        />
        <Footer
          buttons={firstData.footer.buttons}
          body={firstData.footer.body}
        />
        <NavButton
          index={firstData.index}
          isMobile={isMobile}
        />
      </Block>
      <Block 
        type='div'
        blockRef={secondRef} 
        name="section second-page"
      >
        <Atlas2
          data={secondData.atlas2}
          displayActive={pageActive}
          getIsDisplay={e => [1].includes(e)}
          decrement={decrementPage} 
          increment={increment}
        />
        <Intro
          data={secondData.intro[getIndex(intros, pageActive)]}
          displayActive={pageActive}
          getIsDisplay={e => intros.includes(e)}
          decrement={decrement}
          increment={increment}
        />
        <Tutorial
          data={secondData.tutorial[getIndex(infos, pageActive)]}
          displayActive={pageActive}
          getIsDisplay={e => infos.includes(e)}
          decrement={decrement}
          increment={increment} 
        />
        <Forms
          infos={secondData.forms.infos}
          inputs={secondData.forms.inputs}
          selections={secondData.forms.selections}
          index={getIndex(forms, pageActive)}
          displayActive={pageActive}
          getIsDisplay={e => forms.includes(e)}
          isMobile={isMobile}
          decrement={decrement}
          increment={increment}
        />
        <NavBlock
          data={secondData.nav}
          sectionMap={sectionMap}
          pageActive={pageActive}
          pageFirstEntry={pageFirstEntry}
          emojiAriaLabels={secondData.emojiAriaLabels}
          index={navs.findIndex(e => e === pageActive)}
          setPageActive={(s) => setPageActive(s)}
          setRating={setRating}
        />
      </Block>
    </main>
  ) 
}

export default App
