import React, { useContext, useEffect } from "react"
import { MixpanelContext } from "../tracking"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Section = styled.section`
  height: 100vh;
  width: 100%;
  background: #006281;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Title = styled.h1`
  color: #fff;
  font-family: "Anton";
  font-size: 60px;
`

const SuccessPayment = () => {
  const mixpanel = useContext(MixpanelContext)

  // Runs once, after page load
  useEffect(() => {
    mixpanel.track("Load SuccessPayment page")
  }, [mixpanel])

  return (
    <Layout>
      <SEO title="SuccessPayment" />
      <Section>
        <Title>Félicitation pour votre commande chez Biru !</Title>
      </Section>
    </Layout>
  )
}

export default SuccessPayment
