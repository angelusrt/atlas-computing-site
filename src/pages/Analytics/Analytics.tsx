import { useEffect, useState } from "react"
import { H1, H2 } from "../../components/texts/Texts"
import { DivRef } from "../../functions/types"
import "./Analytics.css"

type HeaderDataType = {title: string, subtitle: string}
type BodyDataType = {text: string, quantity: number} 

type DataType = {
  quantity: number,
  data : {header: HeaderDataType, body: BodyDataType[]}[]
}

type AnalyticsType = {
  blockRef: DivRef,
  language: string,
  userId: number | null,
  decrement: () => void,
}

const name = "analytics analytics--none"

const Analytics = (prop: AnalyticsType) => {
  const {blockRef, language, userId, decrement} = prop
  
  const [data, setData] = useState<DataType>()

  async function getAnalytics() {
    const getHeader: RequestInit = { 
      method: "GET",
      keepalive: true,    
      referrer: "",
      referrerPolicy: "origin",   
      mode: "cors",
    }

    await fetch(`${process.env.REACT_APP_HOST}/api/user/analytics/${userId}/${language}`, getHeader)
      .then(res => res.json())
      .then((data: DataType) => setData(data))
      .catch(err => console.log(err))
  }

  useEffect(() => {if(userId) getAnalytics()},[userId])

  return (
    <section id="analytics" ref={blockRef} className={name}>
      {data && data.quantity &&
        <header>
          <H1 name="text-big">Dados</H1>
          <H2 name="text-thin-small">{data.quantity + ' analizados'}</H2>
        </header>
      }
      {data && data.data.map((e, i) => 
        <Card 
          key={i}
          quantity={data.quantity} 
          header={e.header} 
          body={e.body}
          biggestQuantity={e.body.map(e => e.quantity).reduce(
            (accum, curr) => curr > accum ? curr : accum
          )}
        />
      )}
    </section>
  )
}

type CardType = {
  header: HeaderDataType,
  body: BodyDataType[],
  quantity: number,
  biggestQuantity: number
}

const Card = (prop: CardType) => (
  <article className="analytic-card">
    <div className="headers">
      <H1 name="text-big">{prop.header.title.toUpperCase()}</H1>
      <H2 name="text-bold-small">{prop.header.subtitle}</H2>
    </div>
    <div className="body">
      {prop.body.map((e, i) => 
        <div className="body-element" key={i}>
          <H1 name="text-bold-small">{e.text}</H1>
          <div 
            className="graph" 
            style={{height: `${e.quantity/prop.biggestQuantity * 250}px`}}
          /> 
          <H2 name="text-bold-small">{`${e.quantity}`}</H2>
        </div>
      )}
    </div>
  </article>
)

export default Analytics