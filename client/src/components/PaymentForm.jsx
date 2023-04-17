import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import CartItem from './CartItem';
// import CheckoutForm from '../pages/CheckoutForm';
import Auth from '../utils/auth';
import { useStoreContext } from '../utils/state';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../utils/actions';
import { BsCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import {
    Card,
    CardHeader,
    CardBody,
} from "@material-tailwind/react";

const stripePromise = loadStripe('pk_test_51Mm4DBEt2stpP8jUT68EIfZbGssaCGRsg73eXO6tvXL1XU6JmQ26c85ZUYqSm4ijQBkYyuiz9g07zCh9oOpL7hFD0027eiPLnu');

const PaymentForm = () => {
    const [state, dispatch] = useStoreContext();
    const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

    useEffect(() => {
        if (data) {
            stripePromise.then((res) => {
                res.redirectToCheckout({ sessionId: data.checkout.session });
            });
        }
    }, [data]);

    function toggleCart() {
        dispatch({ type: TOGGLE_CART });
    }

    function calculateTotal() {
        let sum = 0;
        state.cart.forEach((cartItem) => {
            sum += cartItem.style.price * cartItem.quantity;
        });
        return sum.toFixed(2);
    }

    return (
        <div className="cart">
            <div className='flex justify-center'>
                <Card className="w-full max-w-[26rem] shadow-lg m-20 rounded-md align-content:center">
                    <CardBody className="[background-color:#f5bcb1] rounded-md">
                        <div className="[color:#979291] mb-6 p-4">
                {state.cart.map((cartItem) => (
                    <CartItem key={cartItem.product._id} cartItem={cartItem} />
                ))}

                <div className='group mt-8 flex justify-center items-center gap-6 p-4'>
                    <strong>Total: ${calculateTotal()}</strong>
                    <button className="[background-color:#979291] px-4 py-2 rounded-lg">
                    <Link to={`/payment`} className="[color:#FFFFFF]">Checkout</Link></button>
                </div>
                </div>
               </CardBody> 
               </Card>
            </div>
        </div>
    );
};

export default PaymentForm;


// import React, { useState, useEffect } from "react";
// // import "./App.css";
// import { useStoreContext } from '../utils/state';
// import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from '../utils/actions';
// import CartItem from './CartItem';

// const ProductDisplay = ({cartItem}) => {
//   const [state, dispatch] = useStoreContext();

//   function calculateTotal() {
//     let sum = 0;
//     state.cart.forEach((cartItem) => {
//         sum += cartItem.style.price * cartItem.quantity;
//     });
//     return sum.toFixed(2);
// }
//   return (
//     <>
//     <div className="product">
//     <div>
//                 {state.cart.map((cartItem) => (
//                     <CartItem key={cartItem.product._id} cartItem={cartItem} />
//                 ))}

//                 <div className='flex-row space-between'>
//                     <strong>Total: ${calculateTotal()}</strong>
//                 </div>
//       <img
//         src="{cartItem.product.image}"
//         alt="cartItem.product.description"
//       />
//       <div className="description">
//       <h3>title</h3>
//       <h5>$150.00</h5>
//       </div>
//     </div>
//     <form action="/create-checkout-session" method="POST">
//       <button type="submit">
//         Checkout
//       </button>
//     </form>
//     </>
// )};

// const Message = ({ message }) => (
//   <section>
//     <p>{message}</p>
//   </section>
// );

// export default function App() {
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     // Check to see if this is a redirect back from Checkout
//     const query = new URLSearchParams(window.location.search);

//     if (query.get("success")) {
//       setMessage("Order placed! You will receive an email confirmation.");
//     }

//     if (query.get("canceled")) {
//       setMessage(
//         "Order canceled -- continue to shop around and checkout when you're ready."
//       );
//     }
//   }, []);

//   return message ? (
//     <Message message={message} />
//   ) : (
//     <ProductDisplay />
//   );
// }



// import React, { useState, useEffect } from "react";
// // import "./App.css";
// import { useStoreContext } from '../utils/state';
// import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from '../utils/actions';
// import CartItem from './CartItem';

// const ProductDisplay = ({cartItem}) => {
//   const [state, dispatch] = useStoreContext();

//   function calculateTotal() {
//     let sum = 0;
//     state.cart.forEach((cartItem) => {
//         sum += cartItem.style.price * cartItem.quantity;
//     });
//     return sum.toFixed(2);
// }
//   return (
//     <>
//     <div className="product">
//     <div>
//                 {state.cart.map((cartItem) => (
//                     <CartItem key={cartItem.product._id} cartItem={cartItem} />
//                 ))}

















// import React, { useState } from "react";
// import { CardElement, Elements, useElements, useStripe } from "@stripe/react-stripe-js"
// import axios from "axios"


// const CARD_OPTIONS = {
//     iconStyle: "solid",
//     style: {
//         base: {
//             iconColor: "#c4f0ff",
//             color: "#fff",
//             fontWeight: 500,
//             fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
//             fontSize: "16px",
//             fontSmoothing: "antialiased",
//             ":-webkit-autofill": { color: "#fce883" },
//             "::placeholder": { color: "#87bbfd" }
//         },
//         invalid: {
//             iconColor: "#ffc7ee",
//             color: "#ffc7ee"
//         }
//     }
// }


// export default function PaymentForm() {
//     const [success, setSuccess] = useState(false)
//     const stripe = useStripe()
//     const elements = useElements()





//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         const { error, paymentMethod } = await stripe.createPaymentMethod({
//             type: "card",
//             card: elements.getElement(CardElement)
//         })


//         if (!error) {
//             try {
//                 const { id } = paymentMethod
//                 const response = await axios.post("https://localhost:3001/payment", {
//                     amount: 1000,
//                     id
//                 })

//                 if (response.data.success) {
//                     console.lof("succesful payment")
//                     setSuccess(true)
//                 }


//         if (query.get("canceled")) {
//             setMessage(
//                 "Order canceled -- continue to shop around and checkout when you're ready."
//             );
//         }
//     }, []);

//     return message ? (
//         <Message message={message} />
//     ) : (
//         <ProductDisplay />
//     );
// }
