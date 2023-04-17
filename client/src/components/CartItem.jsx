// import React from 'react';
// import { useStoreContext } from '../utils/state';
// import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from '../utils/actions';



// const CartItem = ({ cartItem }) => {

//   const [, dispatch] = useStoreContext();

//   const removeFromCart = cartItem => {
//     dispatch({
//       type: REMOVE_FROM_CART,
//       _id: cartItem.product._id
//     });
//   };

//   const onChange = (e) => {
//     const value = e.target.value;
//     if (value === '0') {
//       dispatch({
//         type: REMOVE_FROM_CART,
//         _id: cartItem.product._id
//       });
//       idbPromise('cart', 'delete', { ...cartItem });

//     } else {
//       dispatch({
//         type: UPDATE_CART_QUANTITY,
//         _id: cartItem.product._id,
//         quantity: parseInt(value)
//       });
//       idbPromise('cart', 'put', { ...cartItem, quantity: parseInt(value) });

//     }
//   }

//   return (
//     <div className="flex-row">
//       <div>
//         <div>{cartItem.product.name}</div>
//         <div>
//           <span>Qty:{cartItem.quantity}</span>
//           <span
//             role="img"
//             aria-label="trash"
//             onClick={() => removeFromCart(cartItem)}
//           >
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CartItem;

// 🦄 rbk: added CartItem from client-origin
import React from 'react';
import { useStoreContext } from "../utils/state";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../utils/actions";
import { idbPromise } from "../utils/helpers";

const CartItem = ({ item }) => {

  const [, dispatch] = useStoreContext();

  const removeFromCart = item => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id
    });
    idbPromise('cart', 'delete', { ...item });

  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === '0') {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id
      });
      idbPromise('cart', 'delete', { ...item });

    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value)
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });

    }
  }

  return (
    <div className="flex-row">
      <div>
        <img
          src={`/images/${item.image}`}
          alt=""
        />
      </div>
      <div>
        <div>{item.name}, ${item.price}</div>
        <div>
          <span>Qty:</span>
          <input
            type="number"
            placeholder="1"
            value={item.purchaseQuantity}
            onChange={onChange}
          />
          <span
            role="img"
            aria-label="trash"
            onClick={() => removeFromCart(item)}
          >
            🗑️
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
