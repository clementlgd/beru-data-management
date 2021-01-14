import React from "react"
import styled from "styled-components"

const Container = styled.div`
  height: fit-content;
  margin-bottom: 30px;
`
const Title = styled.h3`
  font-weight: bold;
  font-family: "Anton";
`
const Description = styled.p`
  font-family: sans-serif;
`

const TextCard = ({ title, description }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  )
}

export default TextCard
