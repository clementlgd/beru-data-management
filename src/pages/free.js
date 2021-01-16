import React, { useContext, useEffect } from "react"
import { MixpanelContext } from "../tracking"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/free/Hero"
import BeerSection from "../components/free/BeerSection"
import FeaturesSection from "../components/free/FeaturesSection"
import CtaBanner from "../components/free/CtaBanner"

const SecondPage = () => {
  const mixpanel = useContext(MixpanelContext)

  // Runs once, after page load
  useEffect(() => {
    mixpanel.track("Load freeContent page")
  }, [mixpanel])

  return (
    <Layout>
      <SEO title="Free page" />
      <Hero />
      <BeerSection />
      <FeaturesSection />
      <CtaBanner />
    </Layout>
  )
}

export default SecondPage
