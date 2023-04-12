import {
    UPDATE_PRODUCTS,
    ADD_TO_CART,
    UPDATE_CART_QUANTITY,
    REMOVE_FROM_CART,
    ADD_MULTIPLE_TO_CART,
    CLEAR_CART,
    TOGGLE_CART,
} from "./actions";

// The reducer is a function that accepts the current state and an action. It returns a new state based on that action.
export const productReducer = (state, action) => {
    switch (action.type) {
        // Returns a copy of state with an update products array. We use the action.products property and spread it's contents into the new array.
        case ADD_TO_CART:
            return {
                ...state,
                cartOpen: true,
                cart: [...state.cart, action.cartItem],
            };
        case ADD_MULTIPLE_TO_CART:
            return {
                ...state,
                cart: [...state.cart, ...action.cartItems],
            };
        // Returns a copy of state, sets the cartOpen to true and maps through the items in the cart.
        // If the item's `id` matches the `id` that was provided in the action.payload, we update the purchase quantity.
        case UPDATE_CART_QUANTITY:
            return {
                ...state,
                cartOpen: true,
                cart: state.cart.map((cartItem) => {
                    if (
                        action.cartItem.product._id === cartItem.product._id &&
                        action.cartItem.style.name === cartItem.style.name
                    ) {
                        cartItem.quantity = action.cartItem.quantity;
                    }
                    return cartItem;
                }),
            };

        // First we iterate through each item in the cart and check to see if the `product._id` matches the `action._id`
        // If so, we remove it from our cart and set the updated state to a variable called `newState`
        case REMOVE_FROM_CART:
            let newState = state.cart.filter((product) => {
                return product._id !== action._id;
            });

            // Then we return a copy of state and check to see if the cart is empty.
            // If not, we set the cartOpen status to  `true`. Then we return an updated cart array set to the value of `newState`.
            return {
                ...state,
                cartOpen: newState.length > 0,
                cart: newState,
            };

        case CLEAR_CART:
            return {
                ...state,
                cartOpen: false,
                cart: [],
            };

        case TOGGLE_CART:
            return {
                ...state,
                cartOpen: !state.cartOpen,
            };

        // Return the state as is in the event that the `action.type` passed to our reducer was not accounted for by the developers
        // This saves us from a crash.
        default:
            return state
            
    }

    // If code reaches here, state has changed and we want to update local storage
    // localStorage.setItem('georgia-evergreens-state', newState)
    // return newState
};
