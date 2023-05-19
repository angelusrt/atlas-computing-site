"use client"

import { createContext, useState } from "react"
import { Button } from "../components/buttons/Buttons"
import "./globals.css"

type LangType = "pt" | "en"
const langContext = createContext<{
  lang: LangType, 
  setLang: (s: LangType) => void
}>({lang: "pt", setLang: null!})

function RootLayout({children}: {children: React.ReactNode}){
  const[lang, setLang] = useState<LangType>("pt")

  return (
    <html lang="en">
      <head>
        <title>Atlas Computing</title>
        
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="only light"/>
        <meta name="description" content="Onde o futuro se constrói"/>
        
        <link rel="icon" href="/favicon.ico" />

        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>

        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap"/>
      </head>
      <body>
        <langContext.Provider value={{lang, setLang}}>
          {/* <div className="language">
            <Button name="button-transparent" text="pt" onClick={() => setLang("pt")}/>
            <Button name="button-transparent" text="en" onClick={() => setLang("en")}/>
          </div> */}
          {children}
        </langContext.Provider>
      </body>
    </html>
  )
}

export default RootLayout
export {langContext}