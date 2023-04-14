import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useStoreContext } from "../utils/state";
import { useQuery } from "@apollo/client";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../utils/actions";
import { QUERY_SINGLE_PRODUCT } from "../utils/queries";

export default function Product() {
    let { id } = useParams();
    console.log({ id })
    const [product, setProduct] = React.useState({});
    const [quantity, setQuantity] = React.useState(1);
    const [state, dispatch] = useStoreContext();
    const { cart } = state;

    // const { loading, data, error } = useQuery(QUERY_PRODUCTS);
    // console.log(data);

    // const findSelected = (data) => {
    //     // data.products.map((product) => console.log(product))
    //     return data.products.filter(product => product._id === id);
    // }
    // }
    const { loading, error, data } = useQuery(QUERY_SINGLE_PRODUCT, {
        variables: { id },
        onCompleted: (data) => {
            if (data.product) {
                setProduct(data.product);
            }
        }
    });






    // useEffect(() => {
    //     if (data) {
    //         setProduct(findSelected(data)[0]);
    //         console.log(product.name);
    //     } else if (loading) {
    //         setStatus("loading...");
    //     } 
    //     setStatus("something went")
    //   }, [data, loading, error]);

    // const { products } = state;

    // useEffect(() => {
    //   if (products) {
    //     setProduct(products.find((product) => product._id === id));
    //   } else if (data) {
    //     dispatch({
    //       type: UPDATE_PRODUCTS,
    //       products: data.products,
    //     });
    //   }
    // }, [products, data, dispatch, id]);
    // Adding product to cart
    function addToCart(amount) {
        // Checking to see if a particular item is already in cart

        // First get the selected style object
        const selectedStyle = product.styles.find(
            (s) => s.name === selectedStyleName
        );

        // then iterate through the cart to see if a CartItem has the same product id and style string
        const existingCartItem = cart.find(
            (_item) =>
                _item.product._id === id &&
                selectedStyle.name === _item.style.name
        );

        if (existingCartItem) {
            console.log("Update cart");
            let quantity = 0;
            if (amount) {
                quantity =
                    parseInt(existingCartItem.quantity) + parseInt(amount);
            } else {
                quantity = parseInt(existingCartItem.quantity) + 1;
            }
            dispatch({
                type: UPDATE_CART_QUANTITY,
                cartItem: {
                    ...existingCartItem,
                    quantity: quantity,
                },
            });
            // If item is not already in the cart add one of item
        } else {
            console.log("add to cart");
            let quantity = 1;
            if (amount) {
                quantity = parseInt(amount);
            }
            dispatch({
                type: ADD_TO_CART,
                cartItem: {
                    product: product,
                    style: selectedStyle,
                    quantity: quantity,
                },
            });
        }
    }


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
                        className="rounded-t-xl"
                    ></img>
                    <div className="m-5">
                        <div className="card">
                            <div className="card-body">
                                <div className=" [color:#979291]">
                                    {product.description}
                                </div>
                                <div className="m-5 [color:#979291]">
                                    {product.notes}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* {product ? (
          <div className="container my-1">
            <Link to="/products">← Back to Products</Link>
  
            <h2>{product.name}</h2>
  
            <p>{product.description}</p>
  
            <p>
              <strong>Price:</strong>${product.price}{' '}
              <button>Add to Cart</button>
              <button>Remove from Cart</button>
            </p>
  
            <img
              src={`/imgs/${product.image}`}
              alt={product.name}
            />
          </div>
        ) : null} */}
        </>
    );
}
;

