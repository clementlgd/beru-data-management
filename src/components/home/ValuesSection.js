import React, { useContext, useEffect } from "react"
import { MixpanelContext } from "../../tracking"
import { Link } from "gatsby"
import styled from "styled-components"

import ImgCard from "./ImgCard"

import Caroussel1 from "../../images/img3.jpg"
import Caroussel2 from "../../images/img4.jpg"
import Caroussel3 from "../../images/img5.jpg"

const Section = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 40px;
`
const CardContainer = styled.div`
  display: flex;
  margin-top: 60px;
`
const Title = styled.h1`
  font-size: 60px;
  color: #000;
`
const SubTitle = styled.p`
  font-size: 20px;
  color: #fff;
  margin: 20px 0 50px 0;
  max-width: 600px;
  line-height: 30px;
`

const ValuesSection = () => {
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
      <Title>Nos valeurs</Title>
      <CardContainer>
        <ImgCard
          imgSrc={Caroussel1}
          title={"Un voyage gustatif"}
          description={
            "Voyagez depuis votre canapé grâce aux nouvelles saveurs que nous apportons du monde entier."
          }
        />
        <ImgCard
          imgSrc={Caroussel2}
          title={"Soutenir les petits producteurs"}
          description={
            "Nous travaillons avec les petits producteurs pour les dévoiler au grand public. Échange juste et équitable."
          }
        />
        <ImgCard
          imgSrc={Caroussel3}
          title={"Un vrai savoir-faire"}
          description={
            "Nous privilégions le savoir-faire authentique et artisanale pour conserver ce patrimoine."
          }
        />
      </CardContainer>
    </Section>
  )
}

export default ValuesSection
