import { Err, Ok, Result } from "ts-results"
import { BlockErrorType } from "../components/blocks/Blocks.types"
import { DivRef, HTMLRef, KeyframeType, OptionListType } from "./function.types"

function remove(classList: DOMTokenList, mod: string) {
  classList.remove(classList[0] + mod)
}

function add(classList: DOMTokenList, mod: string) {
  classList.add(classList[0] + mod)
}

function setLocation(path: string) {
  window.history.pushState(path, path, path)
}

function getInitialPage() {
  return window.location.pathname === '/1/' ? 1 : 0
}

function setEnter(ref: DivRef, delay: number) {
  const block = ref.current

  remove(block.classList, "--none")

  setTimeout(() => add(block.classList, "--enter"), 5)

  setTimeout(() => add(block.classList, "--show"), delay)
}

function setExit(blockRef: DivRef, delay: number, func: () => void) {
  const block = blockRef.current

  remove(block.classList, "--show")
  remove(block.classList, "--enter")

  setTimeout(() => {
    add(block.classList, "--none")
    func()
  }, delay)
}

function setTransEnter(blockRef: DivRef, delay: number, func: () => void) {
  const block = blockRef.current

  add(block.classList, "--trans-enter")
  
  setTimeout(func, delay)
}

function setTransExit(blockRef: DivRef, delay: number) {
  const block = blockRef.current

  const name = block.classList[0] + "--trans-enter"
  const isTrans = block.classList.contains(name)

  if(isTrans) {
    setTimeout(() => add(block.classList, "--trans-exit"), 5)

    setTimeout(() => {
      remove(block.classList, "--trans-exit")
      remove(block.classList, "--trans-enter")
    }, delay)
  }
}

function setSelectText(
  ref: HTMLRef | undefined, optionList: OptionListType, id: number
): Result<"Successfull", BlockErrorType> {
  const blockLabel = ref?.current

  if(!blockLabel) return Err("BLOCK_DOESNT_EXIST")
  
  const select = blockLabel.getElementsByTagName('select')[0]

  if(!select) return Err("BLOCK_DOESNT_EXIST")

  select.selectedIndex = id + 1

  const blockSelected = blockLabel.getElementsByClassName('block-selected')[0]

  if(!blockSelected) return Err("BLOCK_DOESNT_EXIST")

  const textSelected = blockSelected.children.item(0)

  if(!textSelected) return Err("BLOCK_DOESNT_EXIST")
  
  textSelected.innerHTML = optionList[id].text

  return Ok("Successfull")
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

function getKeyframe(prop: KeyframeType): Keyframe[] {
  const {
    isEnter, block, parent, pad, 
    endPad, padAux, radius, keyAmount
  } = prop

  const innerWidth = window.innerWidth
  const innerHeight = window.innerHeight

  const parentTop = parent ? parent.offsetTop : 0
  
  const scroll = window.scrollY
  const topNum = block.offsetTop - scroll + parentTop

  const top = `${topNum}px`
  const left = `${block.offsetLeft}px`
  const bottom = `${topNum + block.offsetHeight - padAux[0]}px`
  const right = `${block.offsetLeft + block.offsetWidth - padAux[1]}px`
  const width = `${block.offsetWidth - padAux[1]}px`
  const height = `${block.offsetHeight - padAux[0]}px`

  const endWidth = `${innerWidth - padAux[3]}px`
  const endHeight = `${innerHeight - padAux[2]}px`

  const keys: Keyframe[] = [
    {
      top, left, bottom, right, width, height, 
      paddingTop: pad[0], paddingLeft: pad[1], 
      paddingBottom: pad[2], paddingRight: pad[3],
      borderRadius: radius[0]
    },
    {
      top, left, bottom, right, width, height,
      paddingTop: pad[0], paddingLeft: pad[1], 
      paddingBottom: pad[2], paddingRight: pad[3],
      borderRadius: radius[1]
    },
    {
      top: `0px`, left: `0px`, bottom: `0px`, right: `0px`,
      borderRadius: radius[1], width: endWidth, height: endHeight,
      paddingTop: endPad[0], paddingLeft: endPad[1], 
      paddingBottom: endPad[2], paddingRight: endPad[3],
    }
  ] 

  if(keyAmount === 3)
    return isEnter ? keys : [keys[2], keys[1], keys[0]]
  else
    return isEnter ? [keys[0], keys[2]] : [keys[2], keys[0]] 
}

export{
  remove,
  add,
  setLocation,
  getIndex,
  getShowClass,
  getKeyframe,
  setEnter,
  setExit,
  setTransEnter,
  setTransExit,
  setSelectText,
  getInitialPage
}