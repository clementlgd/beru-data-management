import React, { useContext, useEffect } from "react"
import { MixpanelContext } from "../../tracking"
import { Link } from "gatsby"
import styled from "styled-components"

import background from "../../images/Banniere.jpg"
import Cta from "./Cta"

const Section = styled.section`
  height: 100vh;
  background-image: url(${background});
  background-repeat: no-repeat, repeat;
  background-position: 0 90%;
  background-size: cover;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 5%;
`
const Title = styled.h1`
  font-size: 100px;
  color: #fff;
  text-transform: uppercase;
`
const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: normal;
  color: #fff;
  margin: 20px 0 50px 0;
  max-width: 600px;
  line-height: 25px;
`

const Hero = () => {
  const mixpanel = useContext(MixpanelContext)

  // Runs once, after page load
  useEffect(() => {
    mixpanel.track("Load homepage")
  }, [mixpanel])

  const something = () => {
    mixpanel.track("Click button")
  }

  return (
    <Section>
      <Title>Biru</Title>
      <SubTitle>
        Voyagez depuis votre canapé en découvrant tous les mois de nouvelles
        bières, authentiques et artisanales.
      </SubTitle>
      <Cta />
    </Section>
  )
}

export default Hero
