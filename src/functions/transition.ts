"use client"

import { useEffect } from "react"
import { ObsEntry, TransitionType } from "./types"
import { getShowClass } from "./utils"

function setAttribute(el: Element, trans: TransitionType){
  el.setAttribute(
    'style', 
    `transition-delay: ${
      trans.start + 
      trans.delayPerItem * 
      trans.index
    }ms`
  ) 
}

function removeAttribute(el: Element, trans: TransitionType){
  const duration = (
    trans.timeout + 
    trans.start + 
    trans.delayPerItem * 
    trans.index
  )

  setTimeout(() => {
    el.removeAttribute('style')
  }, duration)
}

function delayItem(el: Element, trans: TransitionType) {
  setAttribute(el, trans)
  removeAttribute(el, trans)
}

function delayChildren(el: ObsEntry, trans: TransitionType) {
  for(let i = 0; i < el.target.children.length; i++){
    const item = el.target.children.item(i)

    if(item) delayItem(item, {...trans, index: i})
  }
}
function delay(el: ObsEntry, trans: TransitionType){
  if(trans.isDelayChild)
    delayChildren(el, trans)
  else
    delayItem(el.target, trans)
}

function observe (el: Element, className: string, trans: TransitionType) {
  function setTransition(entry: IntersectionObserverEntry) {
    const isNotAlreadyAnimated = !entry.target.classList.contains(className)

    if(entry.isIntersecting && isNotAlreadyAnimated){
      entry.target.classList.add(className)

      if(trans.isTransition)
        delay(entry, trans)
    } 
    else if(!isNotAlreadyAnimated){
      observer.unobserve(el)
    }
  }
  
  function setForEach(entries: IntersectionObserverEntry[]) {
    for(let i = 0; i < entries.length; i++) 
      setTransition(entries[i])
  }

  const observer = new IntersectionObserver(setForEach)

  observer.observe(el)
}

function useAnimateOnView(query: string, trans: TransitionType){
  function effectAnimate(){  
    const itemsToAnimate = document.querySelectorAll(query)
    
    // function animate(el: Element, index: number) {
    //   observe(el, getShowClass(query), {...trans, index})
    // }

    // for(let i = 0; i < itemsToAnimate.length; i++)
    //   animate(itemsToAnimate[i], i)

    for(let i = 0; i < itemsToAnimate.length; i++)
      itemsToAnimate[i].classList.add(getShowClass(query))
  }
  
  //eslint-disable-next-line
  useEffect(effectAnimate, [])
}

export {useAnimateOnView}