import React, { useContext, useEffect } from "react"
import styled from "styled-components"
import { MixpanelContext } from "../../tracking"

const Button = styled.a`
  background: #fff;
  text-decoration: none;
  padding: 15px 20px;
  width: fit-content;
  font-family: sans-serif;
  border-radius: 10px;
  color: #006281;
  font-weight: bold;
`

const Cta = () => {
  const mixpanel = useContext(MixpanelContext)

  // Runs once, after page load
  useEffect(() => {
    mixpanel.track("Load homepage")
  }, [mixpanel])

  return (
    <Button
      href="https://www.whentocop.fr/"
      target="_blank"
      onClick={() => mixpanel.track("cta button")}
    >
      Essayer Biru gratuitement
    </Button>
  )
}

export default Cta
