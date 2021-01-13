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
    // Runs when the button is clicked
    mixpanel.track("Click button")
  }
  return (
    <Layout>
      <SEO title="Home" />
      <Title>Titre</Title>
      <h1>Hello</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <button onClick={something}>Do something</button>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export default IndexPage
