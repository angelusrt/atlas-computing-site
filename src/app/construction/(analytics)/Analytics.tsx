"use client"

import { useContext, useEffect, useState } from "react"
import { H1, H2 } from "../../../components/texts/Texts"
import { DivRef } from "../../../functions/types"
import { langContext } from "../../layout"
import { getBiggestAmount } from "../../../functions/utils"
import data from "../../../data/secondPage.json"
import "./Analytics.css"

type AnalysesType = {
  quantity: number,
  results : {
    header: {title: string, subtitle: string}, 
    body: {text: string, quantity: number}[]
  }[]
}

type AnalyticsType = {
  blockRef: DivRef,
  userId: number | null,
  decrement: () => void,
}

const name = "analytics analytics--none"
const Analytics = ({blockRef, userId, decrement}: AnalyticsType) => {
  const {lang} = useContext(langContext)
  const analytics = data[lang].analytics

  const [analyses, setAnalyses] = useState<AnalysesType>()

  async function getAnalytics() {
    const getHeader: RequestInit = { 
      method: "GET",
      keepalive: true,    
      referrer: "",
      referrerPolicy: "origin",   
      mode: "cors",
    }

    await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/user/analytics/${userId}/${lang}`, getHeader)
      .then(res => res.json())
      .then((analyses: AnalysesType) => setAnalyses(analyses))
      .catch(err => console.log(err))
  }

  useEffect(() => {if(userId) getAnalytics()},[userId])

  return (
    <section id="analytics" ref={blockRef} className={name}>
      {analyses != undefined && analyses.quantity &&
        <header>
          <H1 name="text-big">{analytics.title}</H1>
          <H2 name="text-thin-small">{analyses.quantity + analytics.subtitle}</H2>
        </header>
      }
      {analyses != undefined && analyses.results.map((e, i) => 
        <article key={i} className="analytic-card">
          <div className="headers">
            <H1 name="text-big">{e.header.title.toUpperCase()}</H1>
            <H2 name="text-bold-small">{e.header.subtitle}</H2>
          </div>
          <div className="body">
            {e.body.map(({quantity, text}, i) => 
              <div className="body-element" key={i}>
                <H1 name="text-bold-small">{text}</H1>
                <div 
                  className="graph" 
                  style={{height: `${quantity/getBiggestAmount(e.body) * 250}px`}}
                /> 
                <H2 name="text-bold-small">{`${quantity}`}</H2>
              </div>
            )}
          </div>
        </article>
      )}
    </section>
  )
}

export default Analytics