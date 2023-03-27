import React, { useEffect, useRef, useState } from "react"
import { Canvas as Can } from "@react-three/fiber"

import { useAnimateOnView } from "../../functions/transition"
import { add, getTheme, remove, setOnExit, useSetDisplay, useSetOnEnter } from "../../functions/utils"
import { ExitType } from "../../functions/function.types"

import { Button } from "../buttons/Buttons"
import { Icon } from "../icons/Icons"
import { Text } from "../texts/Texts"

import { Lighthouse } from "./Lighthouse"
import { Sphere } from "./Sphere"

import { 
  BlockType,
  DropdownType,
  InfoType,
  NavType,
  ProjectExpandedType,
  ProjectType,
  StyleType,
  IntroType,
  InputType,
  SelectType,
  ThemeType,
  CanvasType,
  canvasPosDic,
  canvasIntensityDic,
  SelectExpandedType,
} from "./Blocks.types"

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
  
  function getObj(): JSX.Element {
    const isGlobe = name === "canvas-globe"
    const options = {isMobile, isVisible, setIsVisible}
   
    if(isGlobe)
      return Sphere(options)
    else 
      return <Lighthouse isMobile={isMobile}/>
  }

  return(
    <Can
      className={"canvas " + name} 
      style={{position: "absolute"}} 
    >
      <pointLight 
        position={canvasPosDic[name]} 
        intensity={canvasIntensityDic[name]}
      />
      <ambientLight
        position={canvasPosDic[name]}
        intensity={0.01}
      />
      {getObj()}
    </Can>
  )
}

const ProjectBlock = (prop: ProjectType) => {
  const {
    iconName, isMobile, subtitle, title, onFunc, setStyle
  } = prop

  const ref = useRef<HTMLDivElement>(null!)

  const paddingHorizontal = isMobile ? 40 : 80
  const paddingVertical = 80

  function getStyle(): StyleType {
    const block = ref.current

    return {
      isAbout: false,
      offsetTop: block.offsetTop,
      offsetLeft: block.offsetLeft,
      offsetWidth: block.offsetWidth - paddingHorizontal,
      offsetHeight : block.offsetHeight - paddingVertical,
      parentTop: document.getElementById('projects')?.offsetTop,
      scrollY: window.scrollY,
      ref: ref
    }
  }

  return(
    <Block 
      type='div'
      blockRef={ref} 
      name="block-project"
    >
      <Icon name={iconName}/>
      <Text 
        type="h1" 
        name="text-big"
        children={title}
      />
      <Text 
        type="p" 
        name="text-thin-small"
        children={subtitle}
      />
      <Button
        type="h2"
        name="button-white"
        func={{onClick: () => {
          onFunc()
          setStyle(getStyle())
        }}}
        text="Ver mais"
        ariaLabel="Ver mais"
        textName="text-bold-small"
      />
    </Block>
  )
}

const ProjectExpandedBlock = (prop: ProjectExpandedType) => (
  <Block 
    type="div" 
    blockRef={prop.blockRef} 
    name="block-project-expanded"
  >
    <Block type="div" name="block-wrapper">
      <Icon name={prop.iconName}/>
      <Text 
        type="h1" 
        name="text-big"
        children={prop.title}
      />
      <Text 
        type="p" 
        name="text-thin-small"
        children={prop.subtitle}
      />
      <Text 
        type="p" 
        name="text-normal"
        children={prop.body}
      />
      <Button
        type="h2"
        name="button-white"
        func={{onClick: () => prop.onFunc()}}
        ariaLabel="Voltar"
        text="Voltar"
        textName="text-bold-small"
      >
        <Text 
          type="h2" 
          name="text-bold-small" 
          children="Ver mais"
        />
      </Button>
    </Block>
  </Block>
)

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
    <Block 
      type="div" 
      blockRef={ref} 
      name="block-dropdown"
    >
      {children}
    </Block>
  )
}

const IntroBlock = (prop: IntroType) => {
  const {
    body, iconName, subtitle, title, displayActive, 
    getIsDisplay, decrement, increment
  } = prop

  const [time , setTime] = useState<NodeJS.Timeout>()

  const ref = useRef<HTMLDivElement>(null!)

  const firstOnExitOptions: ExitType = {
    ref, 
    delayFirst: 1000, 
    delaySecond: 0, 
    isLast: getIsDisplay(displayActive - 1), 
    doNext: increment
  }
  const secondOnExitOptions: ExitType = {
    ref, 
    delayFirst: 1000, 
    delaySecond: 0, 
    isLast: getIsDisplay(displayActive + 1), 
    doNext: decrement
  }

  useSetOnEnter({
    delayFirst: 1000,
    delaySecond: 0,
    displayActive,
    ref,
    time,
    setTime,
    getIsDisplay
  })

  return(
    <Block 
      type="div"
      blockRef={ref} 
      name="block-intro"
    >
      <Icon name={iconName}/>
      <Text
        type="h1"
        name="text-big"
        children={title}
      />
      <Text
        type="h2"
        name="text-thin"
        children={subtitle}
      />
      <Text
        type="h2"
        name="text-normal"
        children={body}
      />
      <Button
        type="h2"
        ariaLabel="Continuar"
        text="Continuar"
        textName="text-bold-small"
        name="button-transparent"
        func={{onClick: () => {
          setOnExit(firstOnExitOptions)
        }}}
      />
      <Button
        type="h2"
        ariaLabel="Voltar"
        text="Voltar"
        textName="text-bold-small"
        name="button-transparent"
        func={{onClick: () => {
          setOnExit(secondOnExitOptions)
        }}}
      />
    </Block>
  ) 
}

const InfoBlock = (prop: InfoType) => {
  const {
    title, subtitle, body, displayActive, 
    getIsDisplay, decrement, increment
  } = prop

  const [time , setTime] = useState<NodeJS.Timeout>()

  const ref = useRef<HTMLDivElement>(null!)

  const firstOnExitOptions: ExitType = {
    ref, 
    delayFirst: 1000, 
    delaySecond: 250, 
    isLast: getIsDisplay(displayActive - 1), 
    doNext: decrement
  }
  const secondOnExitOptions: ExitType = {
    ref, 
    delayFirst: 1000, 
    delaySecond: 250, 
    isLast: getIsDisplay(displayActive + 1), 
    doNext: increment
  }

  useSetOnEnter({
    delayFirst: 1000,
    delaySecond: 250,
    displayActive,
    ref,
    time,
    setTime,
    getIsDisplay
  })

  return (
    <Block 
      type="div" 
      blockRef={ref} 
      name="block-info"
    >
      <Block type="div" name="block-wrapper-button">
        <Button
          type="h2"
          name="button-transparent"
          ariaLabel="Voltar"
          textName="text-bold-small"
          func={{onClick: () => {
            setOnExit(firstOnExitOptions)
          }}}
          children={
            <Icon name="Arrow"/>
          }
        />
        <Button
          type="h2"
          name="button-transparent"
          ariaLabel="Continuar"
          textName="text-bold-small"
          func={{onClick: () => {
            setOnExit(secondOnExitOptions)
          }}}
          children={
            <Icon name="Arrow"/>
          }
        />
      </Block>
      <Text
        type="h2"
        name="text-thin-small"
        children={subtitle}
      />
      <Text
        type="h1"
        name="text-big"
        children={title}
      />
      <Text
        type="h2"
        name="text-thin"
        children={body}
      />
    </Block>
  )
}

const NavBlock = (prop: NavType) => {
  const {
    index, pageActive, data, sectionMap, emojiAriaLabels, pageFirstEntry,
    setPageActive, setRating
  } = prop
  
  const [isEmoji, setIsEmoji] = useState(false)
  
  const ref = useRef<HTMLDivElement>(null!)
  const emojiRef = useRef<HTMLDivElement>(null!)

  function getIconName(e: number): string {
    return sectionMap[pageActive] === sectionMap[e] ? "icon icon-large" : "icon"
  } 
  
  const pages = (
    <React.Fragment children={
      data.map((e, i) => 
        <Button
          key={i}
          type="h2"
          name="button-transparent"
          ariaLabel={e.text}
          func={{onClick: () => setPageActive(e.page)}}
          children={
            <Block type="div" name={getIconName(e.page)}/>
          }
        />
      ).filter((e, i) => i <= sectionMap[pageFirstEntry] - 1)
    }/>
  )
  const emojis = (
    <React.Fragment children={
      emojiAriaLabels.map((item, index) => (
        <Button
          type="h2"
          name="button-transparent"
          key={index}
          ariaLabel={item}
          func={{onClick: () => setRating({
            emoji: index, pageActive: sectionMap[pageActive]
          })}}
          children={
            <Block type="div" name="icon"/>
          }
        />
      ))}
    />
  )

  useSetDisplay(ref, index !== -1)
  useSetDisplay(emojiRef, isEmoji)

  useEffect(() => {
    const theme: ThemeType = getTheme(data[sectionMap[pageActive] - 1].theme)
    
    const isBlack = theme === "block-black"
    const inverseTheme = isBlack ? "block-white" : "block-black"

    ref.current.classList.remove(inverseTheme)
    ref.current.classList.add(theme)
  }, [index])

  return(
    <nav ref={ref} className="block-nav">
      <Block 
        type="div"
        blockRef={emojiRef}
        name="block-emoji"
        children={emojis}
      />
      <Block type="div" name="block-wrapper">
        <Button 
          type="h2"
          name="button-transparent"
          ariaLabel="Emoji"
          func={{onClick: () => setIsEmoji(s => !s)}}
        >
          <Block type="div" name="icon icon-large"/>
        </Button>
      </Block>
      {pages}
    </nav>
  )
}

const InputBlock = (prop: InputType) => (
  <Block type="div" name="block-label block-input">
    <label htmlFor={prop.name}>
      <Text
        type="h2"
        name="text-thin-small"
        children={prop.text}
      />
    </label>
    <input 
      type={prop.type} 
      id={prop.name} 
      name={prop.name}
    />
  </Block>
)

const SelectBlock = (prop: SelectType) => {
  const {
    isMobile, name, optionList, text, setIsActive, setStyle
  } = prop

  const ref = useRef<HTMLElement>(null!)

  const options = (
    <React.Fragment children={
      optionList.map((item, id) => (
        <option 
          key={id}
          value={item.name} 
          children={item.text}
        />
      ))
    }/> 
  )

  function getStyleOptions(): StyleType {
    const paddingVertical = isMobile ? 35.5 : 54.5
    
    return {
      isAbout: false,
      parentTop: document.getElementById('forms')?.offsetTop,
      offsetTop: ref.current.offsetTop - paddingVertical,
      offsetLeft: 0,
      offsetHeight: 52 * optionList.length + 40,
      offsetWidth: ref.current.offsetWidth,
      scrollY: window.scrollY
    }
  }

  return (
    <Block 
      blockRef={ref}
      type="div" 
      name="block-label block-select"
    >
      <label htmlFor={name}>
        <Text
          type="h2"
          name="text-thin-small"
          children={text}
        />
      </label>
      <select 
        id={name} 
        name={name}
      >    
        <option 
          defaultValue="disabled"
          style={{display: "none"}}
        /> 
        {options}
      </select>
      <Block 
        type="div"
        name="block-selected"
        func={{onClick: () => {
          setStyle(getStyleOptions())
          setIsActive()
        }}}
        children={
          <Text
            type="h2"
            name="text-normal-small"
            children=""
          />
        }
      />
    </Block> 
  )
}

const SelectExpandedBlock = (prop: SelectExpandedType) => {
  const {
    text, blockRef, isDisplay, optionList, 
    setIsActive, setSelectText
  } = prop

  const options = (
    <React.Fragment children={
      optionList.map((item, id) => (
        <Button
          key={id}   
          ariaLabel={item.name}
          name="button-transparent"
          type="h2"
          text={item.text}
          textName="text-normal-small"
          func={{onClick: () => {
            setSelectText(id)
            setIsActive()
          }}}
        />
      ))
    }/>
  )

  useSetDisplay(blockRef, isDisplay)

  return (
    <Block 
      type="div" 
      blockRef={blockRef} 
      name={"block-label-expanded block-select"}
    >
      <Block
        type="div"
        name="block-wrapper"
      >
        <Text
          type="h2"
          name="text-thin-small"
          children={text}
        />
        <DropdownBlock
          toggle={isDisplay}
          children={options}
        />
      </Block>
    </Block> 
  )
}

export {
  Block, 
  Canvas,
  ProjectBlock, 
  ProjectExpandedBlock, 
  DropdownBlock,
  IntroBlock,
  InfoBlock,
  NavBlock,
  InputBlock,
  SelectBlock,
  SelectExpandedBlock
}