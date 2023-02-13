import { useEffect } from "react"

type transitionType = {
  isTransition: boolean,
  timeout: number,
  delayPerItem: number,
  isDelayChild: boolean,
  start: number,
  index: number
}

const transition: transitionType = {
  isTransition: true,
  delayPerItem: 0,
  isDelayChild: false,
  index: 0,
  start: 0,
  timeout: 200
}

function setAttribute(item: Element, transition: transitionType){
  item.setAttribute(
    'style', 
    `transition-delay: ${
      transition.start + 
      transition.delayPerItem * 
      transition.index
    }ms`
  ) 
}
function removeAttribute(item: Element, transition: transitionType){
  const duration = (
    transition.timeout + 
    transition.start + 
    transition.delayPerItem * 
    transition.index
  )

  setTimeout(() => {
    item.removeAttribute('style')
  }, duration)
}

function delayItem(item: Element, transition: transitionType) {
  setAttribute(item, transition)
  removeAttribute(item, transition)
}
function delayChildren(entry: IntersectionObserverEntry, transition: transitionType) {
  Array(...entry.target.children).forEach((item, index) => {
    delayItem(item, {...transition, index})
  }) 
}
function delay(entry: IntersectionObserverEntry, transition: transitionType){
  if(transition.isDelayChild)
    delayChildren(entry, transition)
  else
    delayItem(entry.target, transition)
}

function observe (item: Element, className: string, transition: transitionType) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const isNotAlreadyAnimated = !entry.target.classList.contains(className)

      if(entry.isIntersecting && isNotAlreadyAnimated){
        entry.target.classList.add(className)

        if(transition.isTransition)
          delay(entry, transition)
      } 
      else if(!isNotAlreadyAnimated){
        observer.unobserve(item)
      }
    })}
  )

  observer.observe(item)
}
  
const transitionDefault: transitionType = {
  isTransition: false,
  timeout: 0,
  delayPerItem: 0,
  isDelayChild: false,
  start: 0,
  index: 0
}

function useAnimateOnScroll(
  query: string, 
  transition = transitionDefault,
  transition2?: transitionType,  
  dependency?: boolean,
  conditional?: boolean,
){
  useEffect(() => {  
    const queryArray = query.split(" ")
    const lastQuery = queryArray[queryArray.length - 1]
    const className = lastQuery.substring(1)
    const classNameToToggle = className + '--show' 
  
    const itemsToAnimate = document.querySelectorAll(query)
    
    if(conditional === false && transition2 !== undefined){
      itemsToAnimate.forEach(
        (item, index) => observe(item, classNameToToggle, {...transition2, index})
      ) 
    } else {
      itemsToAnimate.forEach(
        (item, index) => observe(item, classNameToToggle, {...transition, index})
      )
    }
    //eslint-disable-next-line
  }, [dependency])
}

export {useAnimateOnScroll, transition}
export type {transitionType}