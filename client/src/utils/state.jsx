import React, { createContext, useContext, useReducer } from "react";
import { productReducer } from "./reducers";

const StoreContext = createContext();

// Defining App state
const initialState = {
    // Cart items will have a structure --
    // class CartItem {
    //     product: Product
    //     style: Style
    //     quantity: Int
    // }
    cart: [], // an array of CartItem objects
    cartOpen: false,
};

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(productReducer, initialState);
    return <StoreContext.Provider value={[state, dispatch]} {...props} />;
};

function useStoreContext() {
    return useContext(StoreContext);
}

export { StoreProvider, useStoreContext, initialState };
