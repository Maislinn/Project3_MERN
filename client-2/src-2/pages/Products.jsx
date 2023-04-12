import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Tooltip,
    IconButton,
} from "@material-tailwind/react";
import React from "react";
import { QUERY_SINGLE_PRODUCT, QUERY_PRODUCTS } from "../utils/queries";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";


export default function Example() {
    const [products, setProducts] = React.useState([]);
    const { loading, error } = useQuery(QUERY_PRODUCTS, {
        onCompleted: (data) => {
            if (data && data.getProducts) {
                setProducts(data.getProducts);
            }
        },
    });

    if (loading) {
        return <h2>Loading</h2>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!products) {
        return (
            <>
                <div className="m-10 flex flex-col justify-center align-center">
                    <h1 className="text-center">Service Not Found</h1>
                </div>
            </>
        );
    }

    return (
        <div className="container justify-center flex flex-wrap">
            {products.map((product) => {
                return (
                    <Card key={product._id} className="w-full max-w-[26rem] shadow-lg m-10 rounded-md">
                        <CardBody className="[background-color:#f0afa3] rounded-md">
                            <div className="mb-3">
                                <img
                                    src={`/${product.images[0].original}`}
                                    alt={`${product.images[0].original}`}
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
