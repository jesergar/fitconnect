'use client'

import { Carousel } from "nuka-carousel"
import { useEffect, useState } from "react"
import ChallengeCardCarousel from "../Cards/ChallengeCardCarousel"
import { loadChallenges } from "@/app/services/challenges"

export default function MyCarousel() {
  const [challengesApi, setChallengesApi] = useState([])
  
  useEffect(() => {
    loadChallenges()
    .then(res => setChallengesApi(res))
    .catch(err => console.log(err))
  }, [])

  return (
    <Carousel
        scrollDistance="slide"
        showArrows
        wrapMode="wrap"
        autoplay={true}>
        {challengesApi.map(challenge => <ChallengeCardCarousel challenge={challenge} />)}
    </Carousel>
  )
}