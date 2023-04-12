import React from "react";
import { Link } from "react-router-dom";
// import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
// import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
// import { idbPromise } from "../../utils/helpers";

function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

  const {
    _id,
    name,
    image,
    description,
    price,
    // services
  } = item;

  // 🦄 rbk: commented out for now - can remove once booking system is completed
  // // map services to render each as a <li>
  // // 🔮 will need unique key added to <li> as key={_id}
  // const listServices =
  //   services.map((service) =>
  //     <li>{service}</li>);

  // const { cart } = state

  // const addToCart = () => {
  //   const itemInCart = cart.find((cartItem) => cartItem._id === _id)
  //   if (itemInCart) {
  //     dispatch({
  //       type: UPDATE_CART_QUANTITY,
  //       _id: _id,
  //       purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
  //     });
  //     idbPromise('cart', 'put', {
  //       ...itemInCart,
  //       purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
  //     });
  //   } else {
  //     dispatch({
  //       type: ADD_TO_CART,
  //       product: { ...item, purchaseQuantity: 1 }
  //     });
  //     idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
  //   }
  // }

  return (
    <div className="card px-1 py-1">
      <Link to={`/products/${_id}`}>
        {/* 🦄 rbk: add img info to const above as well as product list to render */}
        <img
          alt={name}
          src={`/images/${image}`}
        />
        <p>{name}</p>
      </Link>
      <div>
        <p>{description}</p>
        {/* 🦄 rbk: moved list of services to detail page */}
        {/* <ul>Services provided:
        {listServices}
        </ul> */}
        {/* <div>{quantity} {pluralize("item", quantity)} in stock</div> */}
        <p>${price}</p>
      </div>
      {/* 🦄 rbk: removed add to cart. will have datepicker and add to cart on detail page */}
      {/* <button onClick={addToCart}>Add to cart</button> */}
      <Link to={`/products/${_id}`}>
        <button>
          <p>Click here for more information or to schedule {name}</p>
        </button>
      </Link>
    </div>
  );
}

export default ProductItem;
