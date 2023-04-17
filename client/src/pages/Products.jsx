import {
    Card,
    CardBody,
    Button,
} from "@material-tailwind/react";
import React, { useState, useEffect } from "react";
import { QUERY_PRODUCTS } from "../utils/queries";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";


export default function Products() {
    const [products, setProducts] = useState([]);
    const [status, setStatus] = useState();
    const { loading, data, error } = useQuery(QUERY_PRODUCTS, {
        onCompleted: (data) => {
            if (data.products) {
                setProducts(data.products);
            }
        }
    });

    // useEffect(() => {
    //     if (data) {
    //         setProducts(data.products);
    //     } else if (loading) {
    //         setStatus("loading...");
    //     } 
    //     setStatus("something went")
    //   }, [data, loading, error]);


    if (loading) {
        return "Loading...";
    } else if (error) {
        return `Error! ${error.message}`;
    } else if (!products) {
        return (
            <>
                <div className="m-10 flex flex-col justify-center align-center">
                    <h1 className="text-center">Product Not Found</h1>
                </div>
            </>
        );
    }
    return (
        <div className="container justify-center flex flex-wrap">
            {!products && <p>{status}</p>}
            {products && products.map((product) => {
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
                                    <Link to={`/product/${product._id}`}>
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