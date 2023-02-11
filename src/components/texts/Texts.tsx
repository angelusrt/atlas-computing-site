import React from "react"
import { transition, useAnimateOnScroll } from "../../functions/transition"
import "./texts.css"

type textProps = {
  type: 'p' | 'h1' | 'h2',
  name ?: string,
  children: string
}

function Text(props: textProps) {
  useAnimateOnScroll(
    '.text-intro-title', 
    {...transition, start: 1000, delayPerItem: 200}
  )
  useAnimateOnScroll(
    '.text-intro-subtitle', 
    {...transition, start: 1500}
  )
  useAnimateOnScroll(
    '.text-footer-body', 
    {...transition, start: 1800}
  )

  return (
    <props.type className={props.name}>
      {props.children}
    </props.type>
  )
}

export {Text}