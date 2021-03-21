import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import React, { useState } from 'react'
import "../css/premium.css"


const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {

		base: {
			iconColor: "#565387",
			color: "#565387",
            innerWidth: "300px",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#565387" },
			"::placeholder": { color: "#565387" }
		},
		invalid: {
			iconColor: "#565387",
			color: "#565387"
		}
	}
}

export default function PaymentForm() {
    const [success, setSuccess ] = useState(false)
    const stripe = useStripe()
    const elements = useElements()


    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })


    if(!error) {
        try {
            const {id} = paymentMethod
            const response = await axios.post("https://camprec.herokuapp.com/api/payment", {
                amount: 50000,
                id,
            })

            if(response.data.success) {
                console.log("Successful payment")
                setSuccess(true)
            }

        } catch (error) {
            console.log("Error", error)
        }
    } else {
        console.log(error.message)
    }
}

    return (
        <>
        {!success ? 
        <form onSubmit={handleSubmit} className = "wh">
            <fieldset className="FormGroup wh">
                <div className="FormRow wh">
                    <CardElement options={CARD_OPTIONS} className = "wh"/>
                </div>
            </fieldset>
            <button className='btn' >Pay</button>
        </form>
        :
        window.alert("You just bought the premium of Camprec congrats this is the best decision of you're life") 
        }
          
        </>
    )
}