import { useEffect } from "react"
import { Err, Ok, Result } from "ts-results"
import { BlockErrorType, ExpandedType, StyleType, ThemeType } from "../components/blocks/Blocks.types"
import { AnimationType, EnterType, ExitType, HTMLRef } from "./function.types"

function toggleScrollOnExpanded(isExpanded: ExpandedType) {
  if(isExpanded !== 'unset')
    document.body.setAttribute("style",'overflow: hidden; height: 100%;')
  else
    document.body.setAttribute("style", 'overflow: auto; height: auto;')
}

function addPos (ref: HTMLRef, style: string) {
  const block = ref.current.getElementsByClassName('block-wrapper')[0]
  
  if(block) block.setAttribute('style', style)
}

function remove(classList: DOMTokenList, mod: string) {
  classList.remove(classList[0] + mod)
}

function add(classList: DOMTokenList, mod: string) {
  classList.add(classList[0] + mod)
}

function setLocation(path: string) {
  window.history.pushState(path, path, path);
}

function setAnimation(prop: AnimationType) {
  const {
    isExpanded, exitTimeoutTime, 
    onEnter, onEnterTimeout, onExit, onExitTimeout
  } = prop
  
  if(isExpanded === "expand-enter"){
    onEnter()

    setTimeout(onEnterTimeout, 5)
  }
  else if(isExpanded === "expand-out"){
    onExit()

    setTimeout(onExitTimeout, exitTimeoutTime)
  }
}

function setOnEnter(prop: EnterType): Result<"Successfull", BlockErrorType>{
  const {
    ref, delayFirst, delaySecond, time, displayActive,
    setTime, getIsDisplay, doNext
  } = prop

  if(!ref.current) return Err("BLOCK_DOESNT_EXIST")

  const classList = ref.current.classList

  const isTrans = classList.contains(classList[0] + "--trans-enter")

  if(getIsDisplay(displayActive)){
    if(time) clearTimeout(time)
    
    setTime(setTimeout(() => 
      add(classList, "--enter"), 5
    ))
    
    setTime(setTimeout(() => 
      add(classList, "--show"), delayFirst
    ))

    if(doNext) doNext()
  }
  
  if(isTrans){
    setTime(setTimeout(() => 
      add(classList, "--trans-exit"), 5
    ))

    setTime(setTimeout(() => {
      remove(classList, "--trans-exit")
      remove(classList, "--trans-enter")
    }, delaySecond)) 

    if(doNext) doNext()
  }

  return Ok("Successfull")
}

function setOnExit(prop: ExitType): Result<"Successfull", BlockErrorType>{
  const {ref, delayFirst, delaySecond, isLast, doNext} = prop

  if(!ref.current) return Err("BLOCK_DOESNT_EXIST")

  const classList = ref.current.classList

  if(!isLast){  
    remove(classList, "--show")  
    remove(classList, "--enter")

    setTimeout(doNext, delayFirst)
  }
  else{
    add(classList, "--trans-enter")
    
    setTimeout(doNext, delaySecond)
  }

  return Ok("Successfull")
} 

function setDisplay(ref: HTMLRef, statement: boolean): boolean | void {
  const block = ref.current
  
  if(!block) return false

  if(statement)
    block.classList.remove(block.classList[0] + "--none")
  else
    block.classList.add(block.classList[0] + "--none")
}

function getStyle(style: StyleType | undefined): string {
  if(typeof style === 'undefined') return ''
  if(typeof style.parentTop === 'undefined') return ''

  const isOffsetWidth = typeof style.offsetWidth === 'undefined'
  const isOffsetHeight = typeof style.offsetHeight === 'undefined'

  if(!style.isAbout && !isOffsetHeight && !isOffsetWidth)
    return `
      top: ${style.offsetTop - style.scrollY + style.parentTop}px;
      left: ${style.offsetLeft}px;
      width: ${style.offsetWidth}px;
      height: ${style.offsetHeight}px;
    ` 
  else
    return `
      top: ${style.offsetTop - style.scrollY + style.parentTop}px;
      left: ${style.offsetLeft}px; 
    `
} 

function getShowClass(query: string): string {
  const queryArray = query.split(" ")
  const lastQuery = queryArray[queryArray.length - 1]
  const className = lastQuery.substring(1)
  
  return className + '--show'
}

function getIndex(source: number[], number: number): number {
  const index = source.findIndex(e => e === number)

  return index === -1 ? 0 : index
}

function getTheme(theme: string): ThemeType {
  if(theme === 'block-white' || theme === 'block-black')
    return theme
  else
    return "block-white"
}

function useSetDisplay(ref: HTMLRef, statement: boolean) {
  useEffect(() => {setDisplay(ref, statement)},[statement])
}

function useSetOnEnter(prop: EnterType){
  useEffect(() => {setOnEnter(prop)},[prop.displayActive])
}

export{
  toggleScrollOnExpanded,
  remove,
  add,
  addPos,
  setLocation,
  setAnimation,
  setOnEnter,
  setOnExit,
  getStyle,
  getTheme,
  getIndex,
  getShowClass,
  setDisplay,
  useSetDisplay,
  useSetOnEnter
}