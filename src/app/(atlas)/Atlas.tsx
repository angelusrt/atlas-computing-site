"use client"

import { useContext, useEffect, useRef } from "react"
import { H1, H2 } from "../../components/texts/Texts"
import { langContext } from "../layout"
import data from "../../data/firstPage.json"
import "./Atlas.css"

const Atlas = ({isMobile}: {isMobile: boolean}) => {
  const {lang} = useContext(langContext)
  const atlas = data[lang].atlas

  const isVideoPlaying = useRef(true)
  const videoRef = useRef<HTMLVideoElement>(null!)

  useEffect(() => {
    const threshold = isMobile ? 400 : 600

    function handleVideo() {
      if(videoRef.current && !isVideoPlaying.current && window.scrollY < threshold){
        videoRef.current.play()
        isVideoPlaying.current = true
      }
      else if(videoRef.current && isVideoPlaying.current && window.scrollY >= threshold){
        videoRef.current.pause()
        isVideoPlaying.current = false
      }
    }

    window.addEventListener('scroll', handleVideo, false)

    return () => window.removeEventListener('scroll', handleVideo, false)
  }, [isMobile])
  
  return(
    <section id="atlas" className="block-white">
      <div className="wrapper">
        <H1 name="title-big">Atlas</H1>
        <H1 name="title-big">Computing</H1>
        <div className="wrapper-video">
          <video ref={videoRef} id="video-globe" src="/globe.mp4" muted loop autoPlay/>
        </div>
        <H2 name="subtitle-big">{atlas.subtitle}</H2>
      </div>
    </section>
  ) 
}

export default Atlas
