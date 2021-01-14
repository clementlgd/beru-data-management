import React, { useContext, useEffect } from "react"
import { MixpanelContext } from "../../tracking"
import { Link } from "gatsby"
import styled from "styled-components"

import background from "../../images/img2.jpg"

const Section = styled.section`
  background-image: url(${background});
  background-repeat: no-repeat, repeat;
  background-position: 0 90%;
  background-size: cover;
  height: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 0 50px;
`
const Container = styled.div``
const Title = styled.h1`
  font-size: 60px;
  color: #fff;
  font-family: "Anton";
`
const SubTitle = styled.p`
  font-size: 20px;
  color: #fff;
  margin: 20px 0 50px 0;
  max-width: 600px;
  line-height: 30px;
  font-family: sans-serif;
`

const HistorySection = () => {
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
      <Container>
        <Title>Notre histoire</Title>
        <SubTitle>
          C’est un groupe de 5 amis, amateurs de bonnes bières qui est à
          l’origine de Biru. Nous nous sommes rendus compte que c’est toujours
          les mêmes marques qui reviennent et nous voulions en découvrir des
          nouvelles, qui viennent d’encore plus loin que le continent européen.
          C’est de cette volonté de découvrir et de soutenir les petits
          artisants qu’est née Biru.
        </SubTitle>
      </Container>
    </Section>
  )
}

export default HistorySection
