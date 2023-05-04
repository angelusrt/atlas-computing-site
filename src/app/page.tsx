"use client"

import { useEffect, useRef, useState } from "react"
import { Block } from "../components/blocks/Blocks"
import { Link, NavButton } from "../components/buttons/Buttons"

import About from "./(about)/About"
import Atlas from "./(atlas)/Atlas"
import Discover from "./(discover)/Discover"
import Footer from "./(footer)/Footer"
import Projects from "./(projects)/Projects"
import World from "./(world)/World"

import firstData from "./../firstPage.json"

const Presenting = () => {
  const[isMobile, setIsMobile] = useState(false)
  
  const navRef = useRef<HTMLButtonElement>(null!)

  useEffect(() => {setIsMobile(window.innerWidth < 725)},[]) 
  useEffect(() => {
    function onResize() {
      if(isMobile && window.innerWidth >= 725)
        setIsMobile(false)
      else if(!isMobile && window.innerWidth < 725)
        setIsMobile(true)
    }

    window.addEventListener('resize', onResize)

    return () => window.removeEventListener('resize', onResize)
  }, [isMobile])

  return (
    <Block name="section first-page">
      <Atlas isMobile={isMobile}/>
      <Discover isMobile={isMobile}/>
      <Projects isMobile={isMobile}/>
      <About isMobile={isMobile}/>
      <World/>
      <Footer/>
      <NavButton blockRef={navRef} isMobile={isMobile}>
        {firstData.index.map((e, i) =>
          <Link key={i} isNewTab={false} href={e.href} text={e.text}/>
        )}
      </NavButton>
    </Block>
  )
}

export default Presenting