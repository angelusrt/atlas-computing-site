import { useAnimateOnScroll } from "../../functions/transition"
import { trans } from "../../functions/function.types"
import { iText } from "./Texts.types"

import "./texts.css"

const Text = (props: iText) => {
  useAnimateOnScroll(
    '.text-intro-title', 
    {...trans, start: 1000, delayPerItem: 200}
  )
  useAnimateOnScroll(
    '.text-intro-subtitle', {...trans, start: 1500}
  )
  useAnimateOnScroll(
    '.text-footer-body', {...trans, start: 200}
  )

  return (
    <props.type className={props.name}>
      {props.children}
    </props.type>
  )
}

export {Text}