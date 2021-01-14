import React, { useContext, useEffect } from "react"
import { MixpanelContext } from "../../tracking"
import { Link } from "gatsby"
import styled from "styled-components"

import Cta from "./Cta"

const Section = styled.section`
  height: 600px;
  background: #006281;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Title = styled.h1`
  font-size: 60px;
  color: #fff;
  text-align: center;
  max-width: 1000px;
`
const SubTitle = styled.p`
  font-size: 20px;
  color: #fff;
  margin: 20px 0 50px 0;
  line-height: 30px;
  text-align: center;
  font-family: sans-serif;
`

const CtaBanner = () => {
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
      <Title>Alors ? Vous avez envie de goûter à la vraie bière ? 🍺</Title>
      <SubTitle>
        Commandez dès maintenant votre première box de bière gratuitement !
      </SubTitle>
      <Cta />
    </Section>
  )
}

export default CtaBanner
