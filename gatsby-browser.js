import React from "react"
import mixpanel from "mixpanel-browser"

import { MixpanelContext } from "./src/tracking"

export const wrapRootElement = ({ element }) => {
  mixpanel.init("8b6f8f0326616eeb90a5d4e701d4d55e")
  if (process.env.NODE_ENV !== "production") {
    mixpanel.disable()
  }

  return (
    <MixpanelContext.Provider value={mixpanel}>
      {element}
    </MixpanelContext.Provider>
  )
}
