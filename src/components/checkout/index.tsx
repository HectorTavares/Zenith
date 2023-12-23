"use client";
import "./style.scss";
import { CartItem } from "@/types";
import { CartCard } from "../cartCard";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { closeSidebar } from "@/reducers";
import { ReduxStoreProvider } from "@/providers/reduxStoreProvider";

export const Checkout = ({}) => {
  const cartItens = useAppSelector((state) => state.cart);
  const isOpen = useAppSelector((state) => state.sidebar.isOpen);

  const dispatch = useAppDispatch();

  const getAllPrices = () => {
    return cartItens.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  return (
    <aside className={`checkout ${isOpen ? "open" : "close"}`}>
      <div className="checkout-top">
        <h2 className="title">Carrinho de compras</h2>{" "}
        <button
          className="close-button"
          onClick={() => dispatch(closeSidebar())}
        >
          X
        </button>
      </div>
      <div className="items">
        {cartItens.map((cartItem: CartItem) => (
          <CartCard key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <div className="checkout-bottom">
        <div className="total-price">
          <p>Total:</p> <p>R${getAllPrices().toFixed(2)}</p>
        </div>
        <button onClick={() => window.alert("Comprou")} className="confirm">
          Finalizar Compra
        </button>
      </div>
    </aside>
  );
};
