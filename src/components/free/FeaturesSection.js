import React from "react"
import styled from "styled-components"

import FeatureCard from "./FeatureCard"

const Section = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 100px 60px 40px 60px;
  background: #fff;
`
const Title = styled.h2`
  font-size: 60px;
  color: #000;
  margin-bottom: 80px;
  font-family: "Anton";
`
const FeaturesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  ${"" /* background: red; */}
`

const FeaturesSection = () => {
  return (
    <Section>
      <Title>
        Les <span style={{ color: "#006281" }}>caractéristiques</span>
      </Title>
      <FeaturesContainer>
        <FeatureCard title="Famille de style" content="IPA" />
        <FeatureCard title="Contenance" content="33cl" />
        <FeatureCard title="Degré 🌡" content="5°" />
        <FeatureCard title="Pays 🇬🇧" content="Angleterre" />
        <FeatureCard title="Couleur de la bière " content="Ambrée" />
        <FeatureCard title="Style de bière" content="English IPA" />
        <FeatureCard
          title="Apparence"
          content="Robe ambrée et dorée coiffée d’une fine mousse blanche"
        />
        <FeatureCard title="Arôme" content="Arômes de fruits à noyau; de fr" />
        <FeatureCard
          title="Goût"
          content="Saveurs maltées, accompagnées d’une amertume délicate"
        />
        <FeatureCard title="Profil de saveurs" content="Fleurie & fraîche" />
      </FeaturesContainer>
    </Section>
  )
}

export default FeaturesSection
