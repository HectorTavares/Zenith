import { useAppDispatch } from "@/hooks";
import "./style.scss";
import { Product } from "@/types";
import { addItem } from "@/reducers";
import { useRouter } from "next/navigation";
import Image from "next/image";

export const ProductCard = ({ product }: { product: Product }) => {
  const { push } = useRouter();
  const dispatch = useAppDispatch();

  return (
    <div className="card" onClick={() => push(`/product/${product.id}`)}>
      <Image
        width={500}
        height={500}
        className="card-image"
        src={product.thumbnail}
        alt={product.title}
      />
      <div className="content">
        <div className="title-price-container">
          <h2 className="title">{product.title}</h2>
          <div className="price">R${product.price}</div>
        </div>

        <p className="description">{product.description}</p>
      </div>
      <button onClick={() => dispatch(addItem(product))} className="buy-button">
        <Image
          width={14}
          height={16}
          src="./shopping-bag.svg"
          alt="shopping bag icon"
        />
        <p>COMPRAR</p>
      </button>
    </div>
  );
};
