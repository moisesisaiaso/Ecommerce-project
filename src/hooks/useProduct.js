import axios from "axios";
import { useState } from "react";

export const useProduct = () => {
    const [products, setProducts] = useState();

    const getProducts = (id = "", byName = "") => {
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}?title=${byName}`;

        axios
            .get(url)
            .then(({ data }) => {
                setProducts(data);
                console.log(data);
            })
            .catch((error) => console.log(error));
    };
    return { products, getProducts };
};
