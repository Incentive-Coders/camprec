import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51IVziGIyZFM8agXoThfXEqwer9bkatYn6mvviooDbpoZcpA0lau5WnGD7TuiYstO6gfwUQHyIDqoN0pMIsVbjsyY001YH2hQH5"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}