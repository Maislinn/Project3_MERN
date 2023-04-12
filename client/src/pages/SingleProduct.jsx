import React from "react";
import { useParams } from "react-router-dom";
import { useStoreContext } from "../utils/state";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../utils/actions";
import { QUERY_SINGLE_PRODUCT, QUERY_PRODUCTS } from "../utils/queries";
import { useQuery } from "@apollo/client";

// Display images from the database
function Images({ images }) {
    if (images.length > 0) {
        return (
            <>
                <img
                    alt="tree"
                    className="w-screen object-cover rounded-md shadow-lg"
                    src={`/${images[0].original}`}
                />
            </>
        );
    } else {
        return (
            <>
                <img src="" alt=""></img>
            </>
        );
    }
}

function SingleProduct() {
    const { id } = useParams();
    let [product, setProduct] = React.useState([]);
    const [selectedStyleName, setSelectedStyleName] = React.useState(0);
    const [quantity, setQuantity] = React.useState(1);
    const [state, dispatch] = useStoreContext();
    const { cart } = state;
    const { loading, error } = useQuery(QUERY_SINGLE_PRODUCT, {
        variables: { id },
        onCompleted: (data) => {
            if (data && data.getProduct) {
                setProduct(data.getProduct);
                setSelectedStyleName(data.getProduct.styles[0].name);
            }
        },
    });

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

    function handleInput(event) {
        if (event.target.value.length === 0) {
            setQuantity(1)
            return
        }
        const result = event.target.value.replace(/\D/g, "");
        if (result) {
            setQuantity(result);
        } 
    }
    // Styles renderer
    function StyleFeats({ style }) {
        if (style) {
            return (
                <div className="mb-4">
                    <div className="text-green text-lg font-bold">
                        ${style.price}
                    </div>

                    <div className="">
                        <input
                            type="text"
                            placeholder="Amount"
                            value={quantity ? `${quantity}` : ""}
                            // value={`${quantity ? quantity : ""}`}
                            onChange={handleInput}
                        ></input>
                    </div>
                    {/* {style.reducedPrice}
                {style.height.value}
                {style.height.unit}
                {style.weight.value}
                {style.weight.unit} */}
                </div>
            );
        }
        return <></>;
    }


    if (loading) {
        return <h2>Loading</h2>;
    }
    if (error) {
        return <p>{error}</p>;
    }
    if (!product || !product._id) {
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
            <div className="pb-12 mb-40 mt-10 [background-color:#f0afa3]">
                <h2 className="text-3xl m-5 col-span-4 text-center [color:#979291]">
                    {product.name}
                </h2>
                <div className="flex flex-col md:flex-row justify-center items-center">
                    <div className=" rounded-md p-3 m-5">
                        <Images images={product.images} />
                    </div>
                    <div className=" rounded-md p-3 m-5">
                        <Images images={product.images} />
                    </div>
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
                        <div className="flex justify-center items-center flex-col [color:#979291]">
                            <div className="m-5 text-left flex flex-wrap gap-4">
                                {[]
                                    .concat(product.styles)
                                    .sort(
                                        (a, b) =>
                                            a.height.value - b.height.value
                                    )
                                    .map((style) => {
                                        return (
                                            <div
                                                key={style.name}
                                                className="radio"
                                            >
                                                <button
                                                    className={`px-4 py-2 rounded ${
                                                        selectedStyleName ==
                                                        style.name
                                                            ? "bg-red-400"
                                                            : "bg-orange-300 "
                                                    }`}
                                                    onClick={() => {
                                                        setSelectedStyleName(
                                                            style.name
                                                        );
                                                    }}
                                                >
                                                    {style.height.value} ft
                                                </button>
                                            </div>
                                        );
                                    })}
                            </div>
                            {StyleFeats({
                                style: product.styles.find(
                                    (s) => s.name === selectedStyleName
                                ),
                            })}

                            <button
                                onClick={() => {
                                    addToCart(quantity);
                                }}
                                className=" [color:#f0afa3] [background-color:#979291] font-bold
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
            </div>
        </>
    );
}

export default SingleProduct;

{
    /* TODO: REMOVE Testing cart */
}
{
    /* <p>{cart.length}</p>
                {cart.map((i) => {
                    return <>{i.productQuantity}</>;
                })} */
}
{
    /* TODO: REMOVE Testing cart */
}
