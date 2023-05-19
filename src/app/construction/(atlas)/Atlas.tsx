"use client"

import Link from "next/link"
import { useContext } from "react"
import { Button } from "../../../components/buttons/Buttons"
import { Icon } from "../../../components/icons/Icons"
import { H1, H2 } from "../../../components/texts/Texts"
import { DivRef } from "../../../functions/types"
import { setExit } from "../../../functions/utils"
import { langContext } from "../../layout"
import data from "../../../data/secondPage.json"
import "./Atlas.css"

type Atlas2Type = {
  blockRef: DivRef,
  increment: () => void,
}

const Atlas2 = ({blockRef, increment}: Atlas2Type) => {
  const {lang} = useContext(langContext)
  const atlas2 = data[lang].atlas2

  return (
    <section ref={blockRef} className="atlas2 block-black" id="atlas2">  
      <H1 name="title-big">Atlas</H1>
      <H1 name="title-big">Computing</H1>
      <H2 name="subtitle-big" >{atlas2.subtitle[0]}</H2>
      <H2 name="subtitle-big" >{atlas2.subtitle[1]}</H2>
      <div className="wrapper-button">
        <Button
          name="button-white"
          text={atlas2.buttons[0]}
          onClick={() => setExit(blockRef, 1500, increment)}
        />
        <Link href="/" className="button-black" aria-label={atlas2.buttons[1]}>
          <H2 name="text-bold-small">{atlas2.buttons[1]}</H2>
        </Link>
      </div>
      <Icon name="ColumnFirst"/>
      <Icon name="ColumnSecond"/>
    </section>
  ) 
}

export default Atlas2