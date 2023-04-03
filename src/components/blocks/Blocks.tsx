import React, { Suspense, useEffect, useRef, useState } from "react"
import { Canvas as Can } from "@react-three/fiber"

import { useAnimateOnView } from "../../functions/transition"
import { add, getTheme, remove } from "../../functions/utils"

import { Button } from "../buttons/Buttons"
import { Lighthouse } from "./Lighthouse"
import { Sphere } from "./Sphere"

import { 
  BlockType,
  DropdownType,
  NavType,
  ThemeType,
  CanvasType,
  canvasPosDic,
  canvasIntensityDic,
} from "./Blocks.types"
import data from "../../secondPage.json"

import "./blocks.css"

const blockTrans = {
  isTransition: true,
  isDelayChild: false,
  delayPerItem: 200,
  timeout: 200,
  start: 400,
  index: 0,
}

const Block = (prop: BlockType) => {
  const {name, blockRef, children, style, func} = prop

  useAnimateOnView('.block-project', blockTrans)
  useAnimateOnView('.block-about', blockTrans)

  return(
    <prop.type 
      ref={blockRef} 
      className={name} 
      style={style}
      {...func}
    >
      {children}
    </prop.type>
  )
}

const Canvas = (prop: CanvasType) => {
  const {isMobile, name} = prop

  const [isVisible, setIsVisible] = useState(true)
  
  const isGlobe = name === "canvas-globe"

  const canvasStyle: React.CSSProperties[] = [
    {position: "relative", height: "400px"},
    {position: "absolute", height: "100%", width: "100%"}
  ] 

  function getObj(): JSX.Element {
    const options = {isMobile, isVisible, setIsVisible}
   
    if(isGlobe)
      return Sphere(options)
    else 
      return <Lighthouse isMobile={isMobile}/>
  }

  return(
    <Can
      className={"canvas " + name} 
      style={isGlobe ? canvasStyle[0] : canvasStyle[1]} 
    >
      <pointLight 
        position={canvasPosDic[name]} 
        intensity={canvasIntensityDic[name]}
      />
      <ambientLight
        position={canvasPosDic[name]}
        intensity={0.01}
      />
      <Suspense fallback={null}>
        {getObj()}
      </Suspense>
    </Can>
  )
}

const DropdownBlock = (prop: DropdownType) => {
  const {toggle, children} = prop

  const [time , setTime] = useState<NodeJS.Timeout>()

  const ref = useRef<HTMLDivElement>(null!)

  useEffect(() => {
    const classList = ref.current.classList

    if(time) clearTimeout(time)

    if(!toggle){
      remove(classList, "--show")
      setTime(setTimeout(() => add(classList, "--none"), 1000))
    } 
    else {
      remove(classList, "--none")
      setTime(setTimeout(() => add(classList, "--show"), 10))
    }
  }, [toggle])

  return (
    <Block type="div" blockRef={ref} name="block-dropdown">
      {children}
    </Block>
  )
}

const NavBlock = (prop: NavType) => {
  const {
    blockRef, lastPageDiscovered, active, pageMap,
    setPageActive
  } = prop
  const {nav, emojiAriaLabels} = data

  const emojiRef = useRef<HTMLDivElement>(null!)

  function getIconName(e: number): string {
    return pageMap[active] === pageMap[e] ? "icon icon-large" : "icon"
  } 

  function setEmojiActive() {
    const emoji = emojiRef.current
  
    if(emoji.classList.contains("block-emoji--none"))
      remove(emoji.classList, "--none")
    else
      add(emoji.classList, "--none")
  }

  return(
    <nav ref={blockRef} className="block-nav">
      <Block type="div" blockRef={emojiRef} name="block-emoji block-emoji--none">
        {emojiAriaLabels.map((item, index) => (
          <Button
            type="h2"
            name="button-transparent"
            key={index}
            ariaLabel={item}
            func={{onClick: setEmojiActive}}
            children={<Block type="div" name="icon"/>}
          />
        ))}
      </Block>
      <Block type="div" name="block-wrapper">
        <Button 
          type="h2"
          name="button-transparent"
          ariaLabel="Emoji"
          func={{onClick: setEmojiActive}}
          children={<Block type="div" name="icon icon-large"/>}
        />
      </Block>
      {nav.map((e, i) => 
        <Button
          key={i}
          type="h2"
          name="button-transparent"
          ariaLabel={e.text}
          // func={{onClick: () => setPageActive(e.page)}}
          children={<Block type="div" name={getIconName(e.page)}/>}
        />
      ).filter((e, i) => i <= pageMap[lastPageDiscovered] - 1)}
    </nav>
  )
}

export {
  Block, 
  Canvas,
  DropdownBlock,
  NavBlock
}