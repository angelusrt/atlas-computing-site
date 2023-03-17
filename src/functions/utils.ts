import { useEffect } from "react"
import { ExpandedType, StyleType } from "../components/blocks/Blocks.types"
import { AnimationType, HTMLRef } from "./function.types"

function toggleClass(prop: AnimationType){
  const {classArray, isToggle, ref, time, setTime} = prop

  const classList = ref.current.classList
  const removeClass = (i: number) => classList.remove(classArray[i]) 
  const addClass = (i: number) => classList.add(classArray[i])

  if(time) clearTimeout(time)

  if(!isToggle){
    removeClass(0)
    setTime(setTimeout(() => addClass(1), 1000))
  } 
  else {
    removeClass(1)
    setTime(setTimeout(() => addClass(0), 10))
  }
}

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

function getShowClass(query: string): string {
  const queryArray = query.split(" ")
  const lastQuery = queryArray[queryArray.length - 1]
  const className = lastQuery.substring(1)
  
  return className + '--show'
}

function remove(classList: DOMTokenList, mod: string) {
  classList.remove(classList[0] + mod)
}

function add(classList: DOMTokenList, mod: string) {
  classList.add(classList[0] + mod)
}

function getStyle (style: StyleType | undefined): string {
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

function useToggleClass(prop: AnimationType){
  //eslint-disable-next-line
  useEffect(() => toggleClass(prop),[prop.isToggle])
}

export{
  toggleClass,
  toggleScrollOnExpanded,
  remove,
  add,
  addPos,
  getStyle,
  getShowClass,
  useToggleClass,
}