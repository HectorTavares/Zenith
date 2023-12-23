/* eslint-disable @next/next/no-img-element */
"use client";
import { useAppDispatch, useAppSelector } from "@/hooks";
import "./style.scss";
import { openSidebar } from "@/reducers";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const Header = ({}) => {
  const dispatch = useAppDispatch();
  const { push } = useRouter();
  const cart = useAppSelector((store) => store.cart);

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0) || 0;

  return (
    <header className="header">
      <button onClick={() => push("/")} className="logo">
        <h1>Zenith</h1>
        <p>Store</p>
      </button>
      <button onClick={() => dispatch(openSidebar())} className="cart">
        <Image width={18} height={19} src="./cart.svg" alt="cart" />
        {totalQuantity}
      </button>
    </header>
  );
};
