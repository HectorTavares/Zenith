"use client";
import { useAppSelector } from "@/hooks";
import "./style.scss";
import { Checkout, Footer, Header, Carousel } from "@/components";
import { useGetProductByIdQuery } from "@/reducers";
import { Rating } from "react-simple-star-rating";
import { useEffect, useMemo, useState } from "react";
import { getArrayByNumber } from "@/utils/getArrayByNumber";
import { useRouter } from "next/navigation";

const Product = ({ params }: { params: { id: string } }) => {
  const product = useAppSelector((store) => store.product);
  const { push } = useRouter();
  // const { data, error, isLoading } = useGetProductByIdQuery(params.id);

  if (!product) {
    push("/");
  }

  const data = useMemo(
    () => product.find((item) => String(item.id) === params.id),
    [product, params.id]
  );

  const [quantity, setQuantity] = useState(1);

  console.log(quantity);

  const totalPrice = data
    ? ((data.discountPercentage / 100) * data.price + data.price).toFixed(2)
    : null;

  console.log(data);

  return (
    <main className="product">
      <Header />
      <Checkout />
      <section className="content">
        {/* {isLoading ? <h1>Loading</h1> : null} */}
        {data === undefined ? <h1> Producto inexistente </h1> : null}

        {data ? (
          <div className="product-details">
            <div className="images">
              <Carousel images={data.images} />
            </div>
            <div className="details">
              <div>
                <h1>{data.title}</h1>
                <div className="rating ">
                  <p>{data.rating} </p>
                  <Rating allowFraction readonly initialValue={data.rating} />
                </div>

                <p>{data.brand}</p>
                <div className="price">
                  {data.discountPercentage && (
                    <span className="discount">
                      -{data.discountPercentage}%
                    </span>
                  )}
                  <span className="actual-price">${data.price}</span>
                </div>
                <p className="total-price">
                  de : <del>${totalPrice}</del>{" "}
                </p>
                <p>{data.description}</p>
              </div>
              <div>
                <div>
                  <h2>choose:</h2>
                  <label htmlFor="quantity">Quantity:</label>
                  <select
                    onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                      setQuantity(Number(event.target.value))
                    }
                    id="quantity"
                    value={quantity}
                  >
                    {getArrayByNumber(data.stock).map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <button>Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </section>
      <Footer />
    </main>
  );
};

export default Product;
