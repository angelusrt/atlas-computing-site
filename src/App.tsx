import React, { createContext, useEffect, useRef, useState } from 'react'
import { setEnter, setLocation, remove, add, getInitialPage, setExit } from './functions/utils'
import { Link, NavButton, BlockButton } from './components/buttons/Buttons'
import { Block } from './components/blocks/Blocks'
import { DivRef } from './functions/types'
import Atlas from './pages/Atlas/Atlas'
import Discover from './pages/Discover/Discover'
import Projects from './pages/Projects/Projects'
import About from './pages/About/About'
import World from './pages/World/World'
import Footer from './pages/Footer/Footer'
import Atlas2 from './pages/Atlas2/Atlas2'
import Intro from './pages/Intro/Intro'
import Forms from './pages/Forms/Forms'
import Analytics from './pages/Analytics/Analytics'
import firstData from "./firstPage.json"
import secondData from "./secondPage.json"
import "./App.css"

const isMobileContext = createContext<boolean>(false)

const pages = [1, 2, 4, 6]

const App = () => {
  const[isMobile, setIsMobile] = useState(window.innerWidth < 725)
  const[language, setLanguage] = useState("pt-br")
  const[userId, setUserId] = useState<null | number>(null)
  const[pageActive, setPageActive] = useState(getInitialPage())
  
  const activeRef = useRef(1)

  const firstRef = useRef<HTMLDivElement>(null!)
  const secondRef = useRef<HTMLDivElement>(null!)

  const atlas2Ref = useRef<HTMLDivElement>(null!)
  const intro1Ref = useRef<HTMLDivElement>(null!)
  const intro2Ref = useRef<HTMLDivElement>(null!)
  const formsRef = useRef<HTMLDivElement>(null!)
  const intro3Ref = useRef<HTMLDivElement>(null!)
  const analyticsRef = useRef<HTMLDivElement>(null!)

  const firstNavRef = useRef<HTMLButtonElement>(null!)
  const secondNavRef = useRef<HTMLButtonElement>(null!)

  const refMap: [DivRef, number][] = [
    [atlas2Ref, 1500],
    [atlas2Ref, 1500],
    [intro1Ref, 1000],
    [intro2Ref, 1000],
    [formsRef, 1000],
    [intro3Ref, 1000],
    [analyticsRef, 1000]
  ]
  
  function decrement(index: number = 2) {
    activeRef.current -= 1
    setEnter(refMap[index][0], refMap[index][1])
  }
  function increment(index: number = 2) {
    activeRef.current += 1
    setEnter(refMap[index][0], refMap[index][1])
  }

  function decrementPage() {
    const first = firstRef.current
    const second = secondRef.current

    setPageActive(0)
    setLocation('/0/')
 
    remove(first.classList, "--none")
    add(second.classList, "--none")

    setTimeout(() => {add(firstNavRef.current.classList, "--show")}, 300)
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

    setTimeout(() => {add(secondNavRef.current.classList, "--show")}, 1505)
  }
  
  function hideNav(func: () => void) {
    remove(secondNavRef.current.classList, "--show")
    func()
  }

  function setPage(index: number) {
    setExit(
      refMap[activeRef.current][0], refMap[activeRef.current][1], 
      () => {
        activeRef.current = pages[index]
        setEnter(refMap[pages[index]][0], refMap[pages[index]][1])
      }
    )
  }

  useEffect(() => {
    const first = firstRef.current
    const second = secondRef.current

    if(pageActive === 0) {
      add(firstNavRef.current.classList, "--show") 
      remove(first.classList, "--none")
      add(second.classList, "--none")
    }
    else if(pageActive === 1) {
      add(secondNavRef.current.classList, "--show")
      setEnter(atlas2Ref, 1500)
      add(first.classList, "--none")
      remove(second.classList, "--none") 
    } 
  }, [])

  return(
    <main className="App">
      <isMobileContext.Provider value={isMobile}>
        <Block blockRef={firstRef} name="section first-page">
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
        <Block blockRef={secondRef} name="section second-page">
          <Atlas2
            blockRef={atlas2Ref}
            decrement={decrementPage} 
            increment={() => increment(2)}
            hideNav={hideNav}
          />
          <Intro
            index={0}
            blockRef={intro1Ref}
            decrement={() => decrement(1)}
            increment={() => increment(3)}
          />
          <Intro
            index={1}
            blockRef={intro2Ref}
            decrement={() => decrement(2)}
            increment={() => increment(4)}
          />
          <Forms
            blockRef={formsRef}
            userId={userId}
            setUserId={s => setUserId(s)}
            decrement={() => decrement(3)}
            increment={() => increment(5)}
          />
          <Intro
            index={2}
            blockRef={intro3Ref}
            decrement={() => decrement(4)}
            increment={() => increment(6)}
          />
          <Analytics
            blockRef={analyticsRef}
            language={language}
            userId={userId}
            decrement={() => decrement(5)}
          />
          <NavButton blockRef={secondNavRef} isMobile={isMobile}>
            {secondData.index.map((e, i) => 
              <BlockButton key={i} text={e.text} func={() => setPage(i)}/>
            )}
          </NavButton>
        </Block>
      </isMobileContext.Provider>
    </main>
  ) 
}

export default App
export {isMobileContext}