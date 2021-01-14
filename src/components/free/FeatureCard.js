import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  ${"" /* width: 400px; */}
  width: 25%;
  height: 170px;
`
const Title = styled.h3`
  color: #000;
  font-size: 33px;
  font-family: "Anton";
  margin-bottom: 20px;
`
const Content = styled.p`
  color: #000;
  font-size: 20px;
  font-family: sans-serif;
  max-width: 300px;
`

const FeatureCard = ({ title, content }) => (
  <Container>
    <Title>{title}</Title>
    <Content>{content}</Content>
  </Container>
)

export default FeatureCard
