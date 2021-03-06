import React, { useContext } from "react"
import styled from "styled-components"
import { MixpanelContext } from "../../tracking"

const Button = styled.a`
  background: #fff;
  color: #006281;
  text-decoration: none;
  padding: 15px 20px;
  width: fit-content;
  font-family: open-sans;
  border-radius: 10px;
  font-weight: bold;
  transition: all 0.3s;
  &:hover {
    background: #006281;
    color: #fff;
    transition: all 0.5s;
    border: solid 1px #fff;
  }
`

const Cta = () => {
  const mixpanel = useContext(MixpanelContext)

  return (
    <Button
      href="https://u6f60w1xnsf.typeform.com/to/MzjOpujo"
      target="_blank"
      onClick={() => mixpanel.track("cta free content button")}
    >
      Essayer Biru gratuitement
    </Button>
  )
}

export default Cta
