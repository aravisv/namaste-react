import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryItem from "./CategoryItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="w-6/12 m-auto">
      <div className="text-center">
        <h1 className="font-bold text-xl mb-2">Cart</h1>
      </div>
      {cartItems?.length ? (
        <>
          <div className="border rounded-lg solid border-gray-300 ">
            {cartItems?.map((item) => {
              return <CategoryItem key={item.id} item={item} />;
            })}
          </div>
          <div className="text-center">
            <button
              className="border rounded-md mt-2 p-1 bg-gray-400 text-white cursor-pointer hover:bg-gray-600 m-auto"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
          </div>
        </>
      ) : (
        <div className="text-center">Add items to cart</div>
      )}
    </div>
  );
};

export default Cart;
