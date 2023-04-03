import React, { createContext, useEffect, useRef, useState } from 'react'

import { Block, NavBlock } from './components/blocks/Blocks'
import { NavButton } from './components/buttons/Buttons'

import { setEnter, getIndex, setLocation, remove, add, getInitialPage } from './functions/utils'
import { DivRef } from './functions/function.types'

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

const pageMap: Record<number, number> = {
  0: 1, 1: 1, 2: 1, 3: 1, 
  4: 2, 5: 2, 
  6: 3, 7: 3,
}

const isMobileContext = createContext<boolean>(false)

const intros = [2, 4, 6]
const navs = [3, 5, 7] 

const App = () => {
  const[isMobile, setIsMobile] = useState(window.innerWidth < 725)
  const[active, setActive] = useState(getInitialPage())
  const[lastPageDiscovered, setLastPageDiscovered] = useState(0)

  const atlas2Ref = useRef<HTMLDivElement>(null!)
  const introRef = useRef<HTMLDivElement>(null!)
  const tutorialRef = useRef<HTMLDivElement>(null!)
  const formsRef = useRef<HTMLDivElement>(null!)
  const navRef = useRef<HTMLElement>(null!)
  const firstRef = useRef<HTMLDivElement>(null!)
  const secondRef = useRef<HTMLDivElement>(null!)

  const index = getIndex(intros, active)

  const refMap: [DivRef, number][] = [
    [atlas2Ref, 1500],
    [tutorialRef, 1000],
    [formsRef, 1000],
    [formsRef, 1000],
  ]

  function decrement(ref: DivRef, delay: number) {
    setActive(s => s - 1)
    setEnter(ref, delay)
  }
  function increment(ref: DivRef, delay: number) {
    setActive(s => s + 1)
    setLastPageDiscovered(s => active + 1 > s ? active + 1 : s)
    setEnter(ref, delay)
  }
  function decrementPage() {
    setActive(0)
    setLocation('/0/')
  }
  function incrementPage() {
    setActive(1)
    setLocation('/1/')
    setEnter(atlas2Ref, 1500)
  }
  
  useEffect(() => {
    const isFirstPage = active === 0    

    if(!isFirstPage) setEnter(atlas2Ref, 1500)  
  }, [])

  useEffect(() => {
    const first = firstRef.current
    const second = secondRef.current
    const nav = navRef.current
    const intro = introRef.current

    //Trocar visibilidade da página 1 e 2
    const isFirstPage = active === 0    

    if(isFirstPage){
      remove(first.classList, "--none")
      add(second.classList, "--none")
    }
    else {
      add(first.classList, "--none")
      remove(second.classList, "--none") 
    }

    //Trocar o tema do 'Intro'
    if(intros.includes(active)){
      const theme = secondData.intro[index].theme
      const isBlack = theme === "block-black"
    
      intro.classList.remove(isBlack ? "block-white" : "block-black")
      intro.classList.add(isBlack ? "block-black" : "block-white")
    } 
    else {
      intro.classList.remove("block-black")
      intro.classList.remove("block-white") 
    }

    //Trocar visibilidade do 'NavBlock'
    if(navs.includes(active)){
      remove(nav.classList, "--none")
      
      //Trocar o tema do 'NavBlock'
      const theme = secondData.nav[pageMap[active] - 1].theme
      const isBlack = theme === "block-black"
  
      nav.classList.remove(isBlack ? "block-white" : "block-black")
      nav.classList.add(isBlack ? "block-black" : "block-white")
    }
    else{
      add(nav.classList, "--none")
    }
  }, [active])

  return(
    <main className="App">
      <isMobileContext.Provider value={isMobile}>
        <Block type='div' blockRef={firstRef} name="section first-page">
          <Atlas/>
          <Discover active={active}/>
          <Projects/>
          <About/>
          <World setPage={incrementPage}/>
          <Footer/>
          <NavButton index={firstData.index} isMobile={isMobile}/>
        </Block>
        <Block type='div' blockRef={secondRef} name="section second-page">
          <Atlas2
            blockRef={atlas2Ref}
            decrement={decrementPage} 
            increment={() => increment(introRef, 1000)}
          />
          <Intro
            index={index}
            blockRef={introRef}
            decrement={() => decrement(...refMap[index])}
            increment={() => increment(...refMap[index + 1])}
          />
          <Tutorial
            blockRef={tutorialRef}
            decrement={() => decrement(introRef, 1000)}
            increment={() => increment(introRef, 1000)} 
          />
          <Forms
            blockRef={formsRef}
            decrement={() => decrement(introRef, 1000)}
            increment={() => increment(introRef, 1000)}
          />
          <NavBlock
            blockRef={navRef}
            pageMap={pageMap}
            active={active}
            lastPageDiscovered={lastPageDiscovered}
            setPageActive={(s) => {
              setActive(s)
              setEnter(...refMap[getIndex(intros, s) + 1])
            }}
          />
        </Block>
      </isMobileContext.Provider>
    </main>
  ) 
}

export default App
export {isMobileContext}