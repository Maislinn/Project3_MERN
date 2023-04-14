import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStoreContext } from "../utils/state";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../utils/actions";
import { QUERY_SINGLE_PRODUCT, QUERY_PRODUCTS } from "../utils/queries";
import { useQuery } from "@apollo/client";

export default function ProductDetails() {
    const [currentProduct, setCurrentProduct] = useState({});
    const [status, setStatus] = useState();
    const { _id } = useParams();
    const [selectedStyleName, setSelectedStyleName] = React.useState(0);
    const [quantity, setQuantity] = React.useState(1);
    const [state, dispatch] = useStoreContext();
    const { cart } = state;
    const { loading, data, error } = useQuery(QUERY_SINGLE_PRODUCT, {
        variables: { _id },
        onCompleted: (data) => {
            if (data && data.product) {
                setCurrentProduct(data.product);
            }
        },
    });
};