/* eslint-disable @next/next/no-img-element */
import { useAppDispatch } from "@/hooks";
import "./style.scss";
import { Product } from "@/types";
import { addItem } from "@/reducers";

export const ProductCard = ({ product }: { product: Product }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="card">
      <img className="card-image" src={product.image} alt={product.title} />
      <div className="content">
        <div className="title-price-container">
          <h2 className="title">{product.title}</h2>
          <div className="price">R${product.price}</div>
        </div>

        {/* <p className="description">{product.description}</p> */}
      </div>
      <button onClick={() => dispatch(addItem(product))} className="buy-button">
        <img src="./shopping-bag.svg" alt="shopping bag icon" />
        <p>COMPRAR</p>
      </button>
    </div>
  );
};
