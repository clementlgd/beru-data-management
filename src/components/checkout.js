import React, { useContext, useEffect, useState } from "react"
import { loadStripe } from "@stripe/stripe-js"
import { MixpanelContext } from "../tracking"

const buttonStyles = {
  textAlign: "center",
  background: "#fff",
  color: "#006281",
  textDdecoration: "none",
  padding: "15px 20px",
  width: "fit-content",
  fontFamily: "open-sans",
  borderRadius: "10px",
  fontWeight: "bold",
  transition: "all 0.3s",
  border: "none",
  cursor: "pointer",
}

const buttonDisabledStyles = {
  opacity: "0.5",
  cursor: "not-allowed",
}

let stripePromise
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_test_51I9WSMDbCOOQnOnrtmScW3rXxsrmtYz6N5UeczjAJmIQtqQv8p2qLeylDDS1ak9ZV7XqLXU7YdsPl26vtvNBrPOY00WhJD2IMx"
    )
  }
  return stripePromise
}

const Checkout = () => {
  const [loading, setLoading] = useState(false)
  const mixpanel = useContext(MixpanelContext)

  const redirectToCheckout = async event => {
    mixpanel.track("cta stripe purchase button")
    event.preventDefault()
    setLoading(true)

    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [{ price: "price_1I9nqnDbCOOQnOnrmfmvn5bw", quantity: 1 }], //old: "price_1I9Wd1DbCOOQnOnrCLnf18Qs"
      successUrl: `${window.location.origin}/successPayment/`,
      cancelUrl: `http://localhost:8000/`,
    })

    if (error) {
      console.warn("Error:", error)
      setLoading(false)
    }
  }

  return (
    <button
      disabled={loading}
      style={
        loading ? { ...buttonStyles, ...buttonDisabledStyles } : buttonStyles
      }
      onClick={redirectToCheckout}
    >
      Je m'abonne à Biru
    </button>
  )
}

export default Checkout
