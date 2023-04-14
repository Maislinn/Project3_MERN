import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useStoreContext } from "../utils/state";
import { useQuery } from "@apollo/client";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../utils/actions";
import { QUERY_SINGLE_PRODUCT, QUERY_PRODUCTS } from "../utils/queries";

export default function Product() {
    const [state, dispatch] = useStoreContext();
    const { id } = useParams();
  
    const [product, setProduct] = useState([]);
  
    const { loading, data } = useQuery(QUERY_PRODUCTS,
        {onCompleted: (data) => {
            if (data && data.getProduct) {
                setProduct(data.getProduct);
                setSelectedStyleName(data.getProduct.styles[0].name);
            }}
        },);
  
    const { products } = state;
  
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
  
    return (
      <>
        {product ? (
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
              src={`/images/${product.image}`}
              alt={product.name}
            />
          </div>
        ) : null}
      </>
    );
  }
;  