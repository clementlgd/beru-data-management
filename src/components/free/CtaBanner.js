import React from "react"
import styled from "styled-components"

import CtaPurchase from "./CtaPurchase"
import Checkout from "../checkout"

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
  font-family: "Anton";
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
  return (
    <Section>
      <Title>
        Et si vous receviez un pack entier de bière à tester tous les mois pour
        15€/mois ? 🍺
      </Title>
      <SubTitle>
        Contient : un pack de 6 bières, un décapsuleur inédit, des snacks et de
        la documentation sur la bière du mois.
      </SubTitle>
      {/* <CtaPurchase /> */}
      <Checkout />
    </Section>
  )
}

export default CtaBanner
