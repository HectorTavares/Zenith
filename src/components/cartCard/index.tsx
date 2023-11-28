/* eslint-disable @next/next/no-img-element */
import "./style.scss";
import { CartItem } from "@/types";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "@/reducers/cart/cart-slice";

import { useAppDispatch } from "@/hooks";

export const CartCard = ({ cartItem }: { cartItem: CartItem }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="cartCard" key={cartItem.id}>
      <img className="cartCard-image" src={cartItem.image} alt="" />
      <h2 className="name">{cartItem.title}</h2>

      <div className="quantity-button-container">
        <label>Qtd:</label>
        <div className="quantity-buttons">
          <button
            onClick={() => dispatch(decreaseQuantity(cartItem))}
            className="quantity-button "
          >
            -
          </button>
          <p className="quantity-button mid">{cartItem.quantity}</p>
          <button
            onClick={() => dispatch(increaseQuantity(cartItem))}
            className="quantity-button "
          >
            +
          </button>
        </div>
      </div>

      <p className="price">R$ {cartItem.quantity * Number(cartItem.price)}</p>

      <button
        onClick={() => dispatch(removeItem(cartItem))}
        className="close-button"
      >
        X
      </button>
    </div>
  );
};
