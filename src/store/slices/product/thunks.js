import axios from "axios";
import { setProducts, startLoadingProducts } from "./productSlice";

export const getProducts = (id = "", byName = "") => {
    return async (dispatch) => {
        dispatch(startLoadingProducts());

        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}?title=${byName}`;

        const products = await axios
            .get(url)
            .then(({ data }) => data)
            .catch((error) => console.log(error));

        dispatch(setProducts(products));
    };
};
