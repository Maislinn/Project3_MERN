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
    const { loading, data, error } = useQuery(QUERY_PRODUCTS);

    useEffect(() => {
        if (data) {
            setProducts(data.products);
        } else if (loading) {
            setStatus("loading...");
        } 
        setStatus(error)
      }, [data, loading, error]);



    return (
        <div className="container justify-center flex flex-wrap">
            {products.map((product) => {
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
