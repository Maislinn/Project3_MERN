import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useStoreContext } from "../utils/state";
import { useQuery } from "@apollo/client";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../utils/actions";
import { QUERY_SINGLE_PRODUCT } from "../utils/queries";
import { idbPromise } from '../utils/helpers';


import Datepicker from '../components/Datepicker';

export default function ProductDetails() {
    let { id } = useParams();
    console.log({ id })
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [state, dispatch] = useStoreContext();
    const { cart } = state;

    const { loading, error, data } = useQuery(QUERY_SINGLE_PRODUCT, {
        variables: { id },
        onCompleted: (data) => {
            if (data.product) {
                setProduct(data.product);
            }
        }
    });

    //     function handleInput(event) {
    //     if (event.target.value.length === 0) {
    //         setQuantity(1)
    //         return
    //     }
    //     const result = event.target.value.replace(/\D/g, "");
    //     if (result) {
    //         setQuantity(result);
    //     }
    // }

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        cartItem: { 
            product: product,
            startDate: newValue.startDate, 
            endDate: newValue.endDate,
            purchaseQuantity: 1 },
    });
    console.log(product)
      idbPromise('cart', 'put', { cartItem: { 
        product: product,
        startDate: newValue.startDate, 
        endDate: newValue.endDate,
        purchaseQuantity: 1 }
    });
    }
  };


    // // Adding product to cart
    // function addToCart(amount) {
    //     // Checking to see if a particular item is already in cart
    //     const existingCartItem = cart.find(
    //         (_item) =>
    //             _item.product._id === id
    //     );

    //     if (existingCartItem) {
    //         console.log("Update cart");
    //         let quantity = 0;
    //         if (amount) {
    //             quantity =
    //                 parseInt(existingCartItem.quantity) + parseInt(amount);
    //         } else {
    //             quantity = parseInt(existingCartItem.quantity) + 1;
    //         }
    //         dispatch({
    //             type: UPDATE_CART_QUANTITY,
    //             cartItem: {
    //                 ...existingCartItem,
    //                 quantity: quantity,
    //             },
    //         });
    //         // If item is not already in the cart add one of item
    //     } else {
    //         console.log("add to cart");
    //         let quantity = 1;
    //         if (amount) {
    //             quantity = parseInt(amount);
    //         }
    //         dispatch({
    //             type: ADD_TO_CART,
    //             cartItem: {
    //                 product: product,
    //                 style: selectedStyle,
    //                 quantity: quantity,
    //             },
    //         });
    //     }
    // }


    if (loading) {
        return "Loading...";
    } else if (error) {
        return `Error! ${error.message}`;
    } else if (!product || !product._id) {
        return (
            <>
                <div className="m-10 flex flex-col justify-center align-center">
                    <h1 className="text-center">Product Not Found</h1>
                </div>
            </>
        );
    }
    return (
        <>
            <div className="pb-12 mb-40 mt-10 [background-color:#f5bcb1]">
                <h2 className="text-3xl m-5 col-span-4 text-center [color:#979291]">
                    {product.name}
                </h2>
                <div className="flex flex-col md:flex-row justify-center items-center">
                    <img
                        src={`/imgs/${product.image}`}
                        alt={product.name}
                        className="ml-3 rounded-3xl flex-none w-80"
                    ></img>
                    <div className="m-5">
                        <div className="card">
                            <div className="card-body">
                                <div className=" [color:#979291]">
                                    {product.description}
                                </div>
                                <div className="m-5 [color:#979291]">
                                    <p>Price: ${product.price}</p>
                                </div>
                            </div>
                        </div>
                        <Datepicker />
                        <p className="m-5 [color:#979291]">  </p>
                        <button
                            onClick={addToCart}
                            className=" [color:#f5bcb1] [background-color:#979291] font-bold
                            uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg 
                            outline-none focus:outline-no"
                            type="submit"
                        >
                            Add to Cart
                        </button>
                        Types: {cart.length}
                        <br />
                        Total Amount
                        {cart.reduce((total, current) => {
                            return total + current.quantity;
                        }, 0)}
                    </div>
                </div>
            </div>
        </>
    );
}
;
