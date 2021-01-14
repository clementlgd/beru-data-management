import React from "react"
import styled from "styled-components"

const Container = styled.div`
  height: fit-content;
  margin-bottom: 30px;
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ImageContainer = styled.div`
  width: 100%;
`
const ImageCarousel = styled.img`
  width: 350px;
  height: 200px;
  object-fit: cover;
`
const Title = styled.h3`
  font-size: 33px;
  text-align: center;
`
const Description = styled.p`
  font-family: sans-serif;
  text-align: center;
  font-size: 15px;
`

const ImgCard = ({ imgSrc, title, description }) => {
  return (
    <Container>
      {/* <ImageContainer> */}
      <ImageCarousel src={imgSrc} alt="Icon wich describe WhenToCop?" />
      {/* </ImageContainer> */}
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  )
}

export default ImgCard
