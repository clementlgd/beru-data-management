import React, { useContext, useEffect } from "react"
import { MixpanelContext } from "../../tracking"
import { Link } from "gatsby"
import styled from "styled-components"

import TextCard from "./TextCard"

const Section = styled.section`
  height: 100vh;
  background: #fff;
  width: 100%;
  display: flex;
`
const LeftContainer = styled.section`
  flex-direction: column;
  padding: 100px 0 0 5%;
  height: 100vh;
  width: 100%;
  display: flex;
`
const RightContainer = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Title = styled.h1`
  font-size: 60px;
  color: #000;
`
const SubTitle = styled.h1`
  font-size: 20px;
  color: #000;
  margin: 20px 0 50px 0;
  max-width: 600px;
  line-height: 30px;
  font-weight: normal;
`

const ConceptSection = () => {
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
      <LeftContainer>
        <Title>Notre concept</Title>
        <SubTitle>
          Tous les mois, recevez une box avec la bière du mois, son histoire, la
          présentation du producteur mais aussi des petits snacks qui vont
          accompagner votre dégustation. Nous travaillons main dans la main avec
          le producteur pour vous concocter chaque box.
        </SubTitle>
      </LeftContainer>
      <RightContainer>
        <TextCard
          title="Découvrir 👀"
          description="Découvrez de nouveaux horizons tous les mois en goutânt à de nouvelles saveurs qui viennent du monde entier. Un pack de 4 bières avec, description de la bière (son histoire et producteur), des snacks "
        />
        <TextCard
          title="Soutenir 🤝"
          description="Nous soutenons les petits producteurs pour les mettre sur le devant de la scène. Chaque producteurs est sélectionné minutieusement selon son savoir-faire et sa qualité de produit. Des prix justes et pour eux mais aussi pour vous. "
        />
        <TextCard
          title="Déguster 😋"
          description="Nous nous efforçons de varier les plaisirs en proposant des nouvelles bières à chaque fois pour que vous puissez toujours goûter à de la nouveauté. Profitez de ce moment dégustation avec des snacks conseillés par le producteur. "
        />
      </RightContainer>
    </Section>
  )
}

export default ConceptSection
