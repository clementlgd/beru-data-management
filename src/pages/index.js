import React, { useContext, useEffect } from "react"
import { MixpanelContext } from "../tracking"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Title = styled.h1`
  font-size: 20px;
  color: red;
`

const IndexPage = () => {
  const mixpanel = useContext(MixpanelContext)

  // Runs once, after page load
  useEffect(() => {
    mixpanel.track("Load homepage")
  }, [mixpanel])

  const something = () => {
    mixpanel.track("Click button")
  }

  return (
    <Layout>
      <SEO title="Home" />
      <Title>Titre</Title>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <button onClick={() => mixpanel.track("Hello button")}>Hello</button>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export default IndexPage
