import { useAnimateOnScroll } from "../../functions/transition"
import { trans } from "../../functions/function.types"
import { iText } from "./Texts.types"

import "./texts.css"

const transTitle = {...trans, start: 200, delayPerItem: 200}
const transSubtitle = {...trans, start: 600}
const transFooter = {...trans, start: 200}

const Text = (props: iText) => {
  useAnimateOnScroll('.text-title', trans)
  useAnimateOnScroll('.text-intro-title', transTitle)
  useAnimateOnScroll('.text-intro-subtitle', transSubtitle)
  useAnimateOnScroll('.text-footer-body', transFooter)
  useAnimateOnScroll('.text-enter-title', transTitle)
  useAnimateOnScroll('.text-enter-subtitle', transSubtitle)

  return (
    <props.type className={props.name}>
      {props.children}
    </props.type>
  )
}

export {Text}