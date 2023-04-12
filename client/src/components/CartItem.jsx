import React from 'react';
import { useStoreContext } from '../utils/state';
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from '../utils/actions';



const CartItem = ({ cartItem }) => {

  const [, dispatch] = useStoreContext();

  const removeFromCart = cartItem => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: cartItem.product._id
    });
  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === '0') {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: cartItem.product._id
      });
      idbPromise('cart', 'delete', { ...cartItem });

    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: cartItem.product._id,
        quantity: parseInt(value)
      });
      idbPromise('cart', 'put', { ...cartItem, quantity: parseInt(value) });

    }
  }

  return (
    <div className="flex-row">
      <div>
        <div>{cartItem.product.name}, ${cartItem.style.price}</div>
        <div>
          <span>Qty:{cartItem.quantity}</span>
          <span
            role="img"
            aria-label="trash"
            onClick={() => removeFromCart(cartItem)}
          >
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;