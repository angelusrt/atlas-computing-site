"use client"

import { useContext, useEffect, useRef, useState } from "react"

import { add, setEnter, setExit } from "../../functions/utils"

import { BlockButton, NavButton } from "../../components/buttons/Buttons"
import { Block } from "../../components/blocks/Blocks"
import { DivRef } from "../../functions/types"

import Analytics from "./(analytics)/Analytics"
import Atlas from "./(atlas)/Atlas"
import Forms from "./(forms)/Forms"
import Intro from "./(intro)/Intro"

import secondData from "../../data/secondPage.json"
import { langContext } from "../layout"

const pages = [1, 2, 4, 6]

const construction = () => {
  const {lang, setLang} = useContext(langContext)

  const[isMobile, setIsMobile] = useState(false)
  const[userId, setUserId] = useState<null | number>(null)
  
  const activeRef = useRef(1)

  const atlas2Ref = useRef<HTMLDivElement>(null!)
  const intro1Ref = useRef<HTMLDivElement>(null!)
  const intro2Ref = useRef<HTMLDivElement>(null!)
  const formsRef = useRef<HTMLDivElement>(null!)
  const intro3Ref = useRef<HTMLDivElement>(null!)
  const analyticsRef = useRef<HTMLDivElement>(null!)

  const navRef = useRef<HTMLButtonElement>(null!)

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

  function setPage(index: number) {
    setExit(
      refMap[activeRef.current][0], 
      refMap[activeRef.current][1], 
      () => {
        activeRef.current = pages[index]
        setEnter(refMap[pages[index]][0], refMap[pages[index]][1])
      }
    )
  }

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
  useEffect(() => {
    setIsMobile(window.innerWidth < 725)
    add(navRef, "--show")
    setEnter(atlas2Ref, 1500)
  }, [])

  return (
    <Block name="section second-page">
      <Atlas
        blockRef={atlas2Ref}
        increment={() => increment(2)}
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
        userId={userId}
        decrement={() => decrement(5)}
      />
      <NavButton blockRef={navRef} isMobile={isMobile}>
        {secondData[lang].index.map((e, i) => 
          <BlockButton key={i} text={e.text} func={() => setPage(i)}/>
        )}
        <div className="language">
          <BlockButton text="pt" func={() => setLang("pt")}/>
          <BlockButton text="en" func={() => setLang("en")}/>
        </div>
      </NavButton>
    </Block>
  )
}

export default construction