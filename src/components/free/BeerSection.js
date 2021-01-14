import React from "react"
import styled from "styled-components"

import ImgBeer from "../../images/shelby-1.png"
import BeerCard from "./BeerCard"

const Section = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 40px;
  background: #006281;
`
const ImageCarousel = styled.img`
  height: 90%;
  width: 30%;
  object-fit: contain;
`
const ContentContainer = styled.div`
  width: 70%;
`
const Title = styled.h2`
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
  font-family: "Anton";
  opacity: 0.8;
`
const CardContainer = styled.div`
  display: flex;
`

const BeerSection = () => {
  return (
    <Section>
      <ImageCarousel src={ImgBeer} alt="" />
      <ContentContainer>
        <Title>La shelby IPA</Title>
        <SubTitle>La bière du mois</SubTitle>
        <CardContainer>
          <BeerCard
            title="Fan de peaky blinders ?"
            description="La bière officielle de la série anglaise Peaky Blinders est spécialement disponible chez BIRU ! Elle est brassée par la brasserie anglaise Thornbridge, qui a reçu de nombreuses récompenses. Shelby IPA est une India Pale Ale, qui s'inspire des bières qui étaient servies dans les pubs anglais à l'époque où se jouait Peaky Blinders."
            margin="0 35px 0 0"
          />
          <BeerCard
            title="Une belle ambrée"
            description="C'est une bière spéciale de couleur ambrée, avec des arômes de fruits rouges et de malts sombres. La bière est ronde, onctueuse, aux saveurs maltées et possède une amertume délicate qui n'est pas aussi prononcée qu'une IPA brassée avec du houblon américain."
            margin="100px 0 0 0"
          />
        </CardContainer>
      </ContentContainer>
    </Section>
  )
}

export default BeerSection
