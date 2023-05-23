import { DivRef, HTMLRef } from "./types"

function remove(ref: HTMLRef, mod: string) {
  ref.current.classList.remove(ref.current.classList[0] + mod)
}

function add(ref: HTMLRef, mod: string) {
  ref.current.classList.add(ref.current.classList[0] + mod)
}

function removeEl(ref: HTMLElement, mod: string) {
  ref.classList.remove(ref.classList[0] + mod)
}

function addEl(ref: HTMLElement, mod: string) {
  ref.classList.add(ref.classList[0] + mod) 
}

function setLocation(path: string) {
  window.history.pushState(path, path, path)
}

function getInitialPage() {
  return window.location.pathname === '/1/' ? 1 : 0
}

function setEnter(ref: DivRef, delay: number) {
  remove(ref, "--none")

  setTimeout(() => {
    add(ref, "--enter")
    setTimeout(() => add(ref, "--show"), delay)
  }, 10)
}

function setExit(ref: DivRef, delay: number, func: () => void) {
  remove(ref, "--show")
  remove(ref, "--enter")

  setTimeout(() => {
    add(ref, "--none")
    func()
  }, delay)
}

function setTransEnter(ref: DivRef, delay: number, func: () => void) {
  add(ref, "--trans-enter")
  setTimeout(func, delay)
}

function setTransExit(ref: DivRef, delay: number) {
  const name = ref.current.classList[0] + "--trans-enter"
  const isTrans = ref.current.classList.contains(name)

  if(isTrans) {
    setTimeout(() => add(ref, "--trans-exit"), 5)

    setTimeout(() => {
      remove(ref, "--trans-exit")
      remove(ref, "--trans-enter")
    }, delay)
  }
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

function getBiggestAmount(body: {text: string, quantity: number}[]) {
  return body.map(e => e.quantity).reduce((accum, curr) => curr > accum ? curr : accum)
}


export{
  remove,
  add,
  removeEl,
  addEl,
  setLocation,
  getIndex,
  getShowClass,
  setEnter,
  setExit,
  setTransEnter,
  setTransExit,
  getInitialPage,
  getBiggestAmount
}
