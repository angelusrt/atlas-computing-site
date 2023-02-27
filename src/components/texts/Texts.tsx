import { useAnimateOnScroll } from "../../functions/transition"
import { trans } from "../../functions/function.types"
import { iText } from "./Texts.types"

import "./texts.css"

const transTitle = {...trans, start: 200, delayPerItem: 200}
const transSubtitle = {...trans, start: 600}
const transFooter = {...trans, start: 200}

const Text = (prop: iText) => {
  useAnimateOnScroll('.text-title', trans)
  useAnimateOnScroll('.text-big-title', transTitle)
  useAnimateOnScroll('.text-big-subtitle', transSubtitle)
  useAnimateOnScroll('.text-thin-small', transFooter)

  return (
    <prop.type ref={prop.textRef} className={prop.name}>
      {prop.children}
    </prop.type>
  )
}

export {Text}