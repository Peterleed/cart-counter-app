import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./redux/cartSlice";

const CartCounter = () => {
  const cartCount = useSelector((state) => state.cart.cartCount);
  const dispatch = useDispatch();

  return (
    <div className="cart-counter">
      <h1>Cart Counter</h1>
      <p>Items in Cart: {cartCount}</p>
      <div>
        <button onClick={() => dispatch(increment())}>Add to Cart</button>
        <button onClick={() => dispatch(decrement())}>Remove from Cart</button>
        <button onClick={() => dispatch(reset())}>Reset Cart</button>
      </div>
    </div>
  );
};

export default CartCounter;
