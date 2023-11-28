/* eslint-disable @next/next/no-img-element */
import { useAppDispatch, useAppSelector } from "@/hooks";
import "./style.scss";
import { openSidebar } from "@/reducers";
export const Header = ({}) => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((store) => store.cart);

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0) || 0;

  return (
    <header className="header">
      <div className="logo">
        <h1>Zenith</h1>
        <p>Store</p>
      </div>
      <button onClick={() => dispatch(openSidebar())} className="cart">
        <img src="./cart.svg" alt="" />
        {totalQuantity}
      </button>
    </header>
  );
};
