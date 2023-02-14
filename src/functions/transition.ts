import { useEffect } from "react"
import {  
  Transition,
  EntryTransition, 
  ElTransition
} from "./function.types"
import { animateQuery } from "./utils"

function setAttribute(trans: ElTransition){
  trans.el.setAttribute(
    'style', 
    `transition-delay: ${
      trans.start + 
      trans.delayPerItem * 
      trans.index
    }ms`
  ) 
}

function removeAttribute(trans: ElTransition){
  const duration = (
    trans.timeout + 
    trans.start + 
    trans.delayPerItem * 
    trans.index
  )

  setTimeout(() => {
    trans.el.removeAttribute('style')
  }, duration)
}

function delayItem(trans: ElTransition) {
  setAttribute(trans)
  removeAttribute(trans)
}

function delayChildren(prop: EntryTransition) {
  Array(...prop.entry.target.children).forEach((item, index) => 
    delayItem({...prop, index, el: item})
  ) 
}
function delay(prop: EntryTransition){
  if(prop.isDelayChild)
    delayChildren({...prop, entry: prop.entry})
  else
    delayItem({...prop, el: prop.entry.target})
}

function observe (className: string, trans: ElTransition) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const isNotAlreadyAnimated = !entry.target.classList.contains(className)

      if(entry.isIntersecting && isNotAlreadyAnimated){
        entry.target.classList.add(className)

        if(trans.isTransition)
          delay({...trans, entry})
      } 
      else if(!isNotAlreadyAnimated){
        observer.unobserve(trans.el)
      }
    })}
  )

  observer.observe(trans.el)
}

function useAnimateOnScroll(
  query: string, trans: Transition
){
  useEffect(() => {  
    const itemsToAnimate = document.querySelectorAll(query)
    
    itemsToAnimate.forEach(
      (el, index) => observe(
        animateQuery(query), {...trans, index, el}
      )
    )
    //eslint-disable-next-line
  }, [])
}

export {useAnimateOnScroll}