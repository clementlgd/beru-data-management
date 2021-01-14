import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background: #fff;
  max-width: 380px;
  padding: 30px 30px;
  margin: ${props => props.margin || "none"};
  border-radius: 8px;
  height: fit-content;
`
const Title = styled.h3`
  font-size: 28px;
  color: #000;
  font-family: "Anton";
`
const Description = styled.p`
  font-size: 15px;
  color: #000;
  margin: 0;
  max-width: 600px;
  line-height: 25px;
  font-family: sans-serif;
`

const BeerCard = ({ title, description, margin }) => (
  <Container margin={margin}>
    <Title>{title}</Title>
    <Description>{description}</Description>
  </Container>
)

export default BeerCard
