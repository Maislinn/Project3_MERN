// import React, { useEffect } from 'react';
// import { loadStripe } from '@stripe/stripe-js';
// import { useLazyQuery } from '@apollo/client';
// import { QUERY_CHECKOUT } from '../utils/queries';
// // import { idbPromise } from '../utils/helpers';
// import CartItem from './CartItem';
// // import CheckoutForm from '../pages/CheckoutForm';
// import Auth from '../utils/auth';
// import { useStoreContext } from '../utils/state';
// import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../utils/actions';
// import { BsCartFill } from "react-icons/bs";
// import { Link } from "react-router-dom";

// const stripePromise = loadStripe('pk_test_51Mm4DBEt2stpP8jUT68EIfZbGssaCGRsg73eXO6tvXL1XU6JmQ26c85ZUYqSm4ijQBkYyuiz9g07zCh9oOpL7hFD0027eiPLnu');

// const Cart = () => {
//     const [state, dispatch] = useStoreContext();
//     const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

//     useEffect(() => {
//         if (data) {
//             stripePromise.then((res) => {
//                 res.redirectToCheckout({ sessionId: data.checkout.session });
//             });
//         }
//     }, [data]);

//     function toggleCart() {
//         dispatch({ type: TOGGLE_CART });
//     }

//     function calculateTotal() {
//         let sum = 0;
//         state.cart.forEach((cartItem) => {
//             sum += cartItem.price * cartItem.quantity;
//         });
//         return sum.toFixed(2);
//     }

//     if (!state.cartOpen) {
//         return (
//             <div className='cart-closed' onClick={toggleCart}>
//                 <BsCartFill className="text-2xl" />
//             </div>
//         );
//     }

//     return (
//         <div className='cart flex flex-wrap'>
//             <div className='close' onClick={toggleCart}>
//                 [X]
//             </div>
//             <div>
//                 {state.cart.map((cartItem) => (
//                     <CartItem key={cartItem.product._id} cartItem={cartItem} />
//                 ))}

//                 <div className='gap-5 '>
//                     <strong>Total: ${calculateTotal()}</strong>
//                     <button className="[background-color:#979291] px-4 py-2 rounded-lg">
//                     <Link to={`/payment`}>Checkout</Link></button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Cart;

// 🦄 rbk: added Cart from client-origin
import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import CartItem from './CartItem';
import Auth from '../utils/auth';
import { useStoreContext } from '../utils/state';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../utils/actions';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Cart = () => {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  function submitCheckout() {
    const productIds = [];

    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });

    getCheckout({
      variables: { products: productIds },
    });
  }

  if (!state.cartOpen) {
    return (
      <div className="cart-closed" onClick={toggleCart}>
        <span role="img" aria-label="trash">
          🛒
        </span>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="close" onClick={toggleCart}>
        [close]
      </div>
      <h2>Services In Your Cart</h2>
      {state.cart.length ? (
        <div>
          {state.cart.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}

          <div className="flex-row space-between">
            <strong>Total: ${calculateTotal()}</strong>

            {Auth.loggedIn() ? (
              <button onClick={submitCheckout}>Checkout</button>
            ) : (
              <span>(log in to check out)</span>
            )}
          </div>
        </div>
      ) : (
        <h3>
          <span role="img" aria-label="shocked">
            😱
          </span>
          Your PET doesn't have a PAL yet! Please select some services. 
        </h3>
      )}
    </div>
  );
};

export default Cart;

