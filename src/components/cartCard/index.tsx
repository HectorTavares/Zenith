/* eslint-disable @next/next/no-img-element */
import "./style.scss";
import { CartItem } from "@/types";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "@/reducers/cart/cart-slice";

import { useAppDispatch } from "@/hooks";
import Image from "next/image";

export const CartCard = ({ cartItem }: { cartItem: CartItem }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="cartCard" key={cartItem.id}>
      <Image
        width={200}
        height={150}
        className="cartCard-image"
        src={cartItem.thumbnail}
        alt=""
      />
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

      <p className="price">
        R$ {(cartItem.quantity * cartItem.price).toFixed(2)}
      </p>

      <button
        onClick={() => dispatch(removeItem(cartItem))}
        className="close-button"
      >
        X
      </button>
    </div>
  );
};
