import React, { useContext, useEffect } from "react"
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

const CtaPurchase = () => {
  const mixpanel = useContext(MixpanelContext)

  return (
    <Button
      href=""
      target="_blank"
      onClick={() => mixpanel.track("cta test button")}
    >
      Test
    </Button>
  )
}

export default CtaPurchase
