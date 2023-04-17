import React, { useState, useEffect } from "react";
import {
    Card,
    CardBody,
    Button,
} from "@material-tailwind/react";
import { useStoreContext } from '../utils/state';
import { UPDATE_PRODUCTS } from '../utils/actions';
import { QUERY_PRODUCTS } from "../utils/queries";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { idbPromise } from '../utils/helpers';

export default function Products() {
    const [state, dispatch] = useStoreContext();
    const { currentCategory } = state;

    const { loading, data } = useQuery(QUERY_PRODUCTS);

        useEffect(() => {
            if (data) {
              dispatch({
                type: UPDATE_PRODUCTS,
                products: data.products,
              });
              data.products.forEach((product) => {
                idbPromise('products', 'put', product);
              });
            } else if (!loading) {
              idbPromise('products', 'get').then((products) => {
                dispatch({
                  type: UPDATE_PRODUCTS,
                  products: products,
                });
              });
            }
          }, [data, loading, dispatch]);
        
          function filterProducts() {
            if (!currentCategory) {
              return state.products;
            }
        
            return state.products.filter(
              (product) => product.category._id === currentCategory
            );

    }
    return (
        <div className="container justify-center flex flex-wrap">
            {/* {!products && <p>{status}</p>} */}
            {state.products && state.products.map((product) => {
                return (
                    <Card key={product._id} className="w-full max-w-[26rem] shadow-lg m-10 rounded-md">
                        <CardBody className="[background-color:#f5bcb1] rounded-md">
                            <div className="mb-3">
                                <img
                                    src={`/imgs/${product.image}`}
                                    alt={product.name}
                                    className="rounded-t-xl"
                                ></img>
                                <div className="font-medium [color:#979291]">
                                    <h4 className="m-4">{product.name}</h4>
                                </div>
                            </div>
                            <div className="group mt-8 flex justify-center items-center gap-3 p-4">
                                <Button className="[background-color:#979291] px-4 py-2 rounded-lg">
                                    <Link to={`/productdetails/${product._id}`}>
                                        Details
                                    </Link>
                                </Button>
                            </div>
                        </CardBody>
                    </Card>
                );
            })}
        </div>
    );
}
