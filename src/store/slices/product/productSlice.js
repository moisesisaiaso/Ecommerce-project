import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: "product",
    initialState: {
        isLoading: false,
        products: [],
    },
    reducers: {
        startLoadingProducts: (state) => {
            state.isLoading = true;
        },
        setProducts: (state, actions) => {
            state.products = actions.payload;
            state.isLoading = false;
        },
    },
});

export const { setProducts, startLoadingProducts } = productSlice.actions;
