import React, { createContext, useEffect, useRef, useState } from 'react'

import { Block } from './components/blocks/Blocks'
import { Link, NavButton, BlockButton } from './components/buttons/Buttons'

import { setEnter, getIndex, setLocation, remove, add, getInitialPage, setExit } from './functions/utils'
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

const isMobileContext = createContext<boolean>(false)

const intros = [2, 4, 6]
const pages = [1, 2, 4, 6]

const App = () => {
  const[isMobile, setIsMobile] = useState(window.innerWidth < 725)

  const[pageActive, setPageActive] = useState(getInitialPage())
  const[active, setActive] = useState(1)
  const[lastPageDiscovered, setLastPageDiscovered] = useState(1)
  
  const[emoji, setEmoji] = useState<{emoji: number, section: number }[]>([])
  
  const firstRef = useRef<HTMLDivElement>(null!)
  const secondRef = useRef<HTMLDivElement>(null!)

  const atlas2Ref = useRef<HTMLDivElement>(null!)
  const introRef = useRef<HTMLDivElement>(null!)
  const tutorialRef = useRef<HTMLDivElement>(null!)
  const formsRef = useRef<HTMLDivElement>(null!)

  const firstNavRef = useRef<HTMLButtonElement>(null!)
  const secondNavRef = useRef<HTMLButtonElement>(null!)
  const emojiRef = useRef<HTMLButtonElement>(null!)

  const refMap: [DivRef, number][] = [
    [atlas2Ref, 1500],
    [atlas2Ref, 1500],
    [introRef, 1000],
    [tutorialRef, 1000],
    [introRef, 1000],
    [formsRef, 1000],
    [introRef, 1000]
  ]
  
  function decrement(index: number = 2) {
    setActive(s => s - 1)

    setEnter(refMap[index][0], refMap[index][1])
    changeIntrosTheme(index)
  }
  function increment(index: number = 2) {
    setActive(s => s + 1)
    setLastPageDiscovered(s => active + 1 > s ? active + 1 : s)
    
    setEnter(refMap[index][0], refMap[index][1])
    changeIntrosTheme(index)
  }

  function decrementPage() {
    const first = firstRef.current
    const second = secondRef.current

    setPageActive(0)
    setLocation('/0/')
 
    remove(first.classList, "--none")
    add(second.classList, "--none")

    setTimeout(() => {
      add(firstNavRef.current.classList, "--show")
    }, 300)
  }
  function incrementPage() {
    const first = firstRef.current
    const second = secondRef.current

    setPageActive(1)
    setLocation('/1/')

    add(first.classList, "--none")
    remove(second.classList, "--none") 

    remove(firstNavRef.current.classList, "--show")
    setEnter(atlas2Ref, 1500)

    setTimeout(() => {
      add(secondNavRef.current.classList, "--show")
      add(emojiRef.current.classList, "--show")
    }, 1505)
  }
  
  function hideNav(func: () => void) {
    remove(secondNavRef.current.classList, "--show")
    remove(emojiRef.current.classList, "--show")
    func()
  }

  function setPage(index: number, active: number) {
    setExit(
      refMap[active][0], refMap[active][1], 
      () => {
        setActive(pages[index])
        setEnter(refMap[pages[index]][0], refMap[pages[index]][1])
      }
    )
  }
  function setReaction(emoji: number, section: number) {
    setEmoji([{emoji, section}])
  }

  function changeIntrosTheme(index: number) {
    const intro = introRef.current

    if(intros.includes(index)){
      const theme = secondData.intro[getIndex(intros, index)].theme
      const isBlack = theme === "block-black"
    
      intro.classList.remove(isBlack ? "block-white" : "block-black")
      intro.classList.add(isBlack ? "block-black" : "block-white")
    } 
    else {
      intro.classList.remove("block-black")
      intro.classList.remove("block-white") 
    }
  }

  useEffect(() => {
    const first = firstRef.current
    const second = secondRef.current

    if(active === 0) {
      add(firstNavRef.current.classList, "--show") 
      remove(first.classList, "--none")
      add(second.classList, "--none")
    }
    else if(active === 1) {
      add(secondNavRef.current.classList, "--show")
      add(emojiRef.current.classList, "--show") 
      setEnter(atlas2Ref, 1500)
      add(first.classList, "--none")
      remove(second.classList, "--none") 
    } 
  }, [])

  return(
    <main className="App">
      <isMobileContext.Provider value={isMobile}>
        <Block type='div' blockRef={firstRef} name="section first-page">
          <Atlas/>
          <Discover active={pageActive}/>
          <Projects/>
          <About/>
          <World setPage={incrementPage}/>
          <Footer/>
          <NavButton blockRef={firstNavRef} isMobile={isMobile}>
            {firstData.index.map((e, i) =>
              <Link key={i} isNewTab={false} href={e.href} text={e.text}/>
            )}
          </NavButton>
        </Block>
        <Block type='div' blockRef={secondRef} name="section second-page">
          <Atlas2
            blockRef={atlas2Ref}
            decrement={decrementPage} 
            increment={increment}
            hideNav={hideNav}
          />
          <Intro
            index={getIndex(intros, active)}
            blockRef={introRef}
            decrement={() => decrement(active - 1)}
            increment={() => increment(active + 1)}
          />
          <Tutorial
            blockRef={tutorialRef}
            decrement={decrement}
            increment={increment} 
          />
          <Forms
            blockRef={formsRef}
            decrement={decrement}
            increment={increment}
          />
          <NavButton blockRef={secondNavRef} isMobile={isMobile}>
            {secondData.index.map((e, i) => 
              <BlockButton key={i} text={e.text} func={() => setPage(i, active)}/>
            ).filter((e, i) => pages[i] <= lastPageDiscovered)}
          </NavButton>
          <NavButton blockRef={emojiRef} isMobile={isMobile}>
            {secondData.emojiAriaLabels.map((e, i) => 
              <BlockButton key={i} text={e} func={() => setReaction(i, active)}/>
            )}
          </NavButton>
        </Block>
      </isMobileContext.Provider>
    </main>
  ) 
}

export default App
export {isMobileContext}