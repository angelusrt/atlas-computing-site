"use client"

import { useContext, useEffect, useRef, useState } from "react"
import { Block } from "../components/blocks/Blocks"
import { BlockButton, Link, NavButton } from "../components/buttons/Buttons"
import { langContext } from "./layout"

import About from "./(about)/About"
import Atlas from "./(atlas)/Atlas"
import Discover from "./(discover)/Discover"
import Footer from "./(footer)/Footer"
import Projects from "./(projects)/Projects"
import World from "./(world)/World"

import firstData from "./../data/firstPage.json"

const Presenting = () => {
  const {lang, setLang} = useContext(langContext)
  const[isMobile, setIsMobile] = useState(true)

  const navRef = useRef<HTMLButtonElement>(null!)
  
  useEffect(() => {
    setIsMobile(window.innerWidth < 725)
    
    //Aproximation of document.body.offsetHeight - window.innerHeight
    const heightAprox = 3000
    
    window.addEventListener('scroll', () => {
      const scroll = window.scrollY

      if(scroll >= 600 && scroll <= 1600){
        document.body.setAttribute("style", `--scroll: ${scroll / heightAprox};`)
      }
    }, true)
  },[]) 
  
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
      <Discover/>
      <Projects/>
      <About/>
      <World/>
      <Footer/>
      <NavButton blockRef={navRef} isMobile={isMobile}>
        {firstData[lang].index.map((e, i) =>
          <Link key={i} isNewTab={false} href={e.href} text={e.text}/>
        )}
        <div className="language">
          <BlockButton text="pt" func={() => setLang("pt")}/>
          <BlockButton text="en" func={() => setLang("en")}/>
        </div>
      </NavButton>
    </Block>
  )
}

export default Presenting
