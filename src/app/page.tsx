"use client";

import "./style.scss";
import { Header, Footer, ProductCard, Checkout } from "@/components";
import { Product } from "@/types";
import CardSkeleton from "@/components/skeleton";
import { useGetProductsQuery } from "@/reducers";
import { useAppDispatch } from "@/hooks";
import { useEffect } from "react";
import { setProducts } from "@/reducers";

export default function Home() {
  const { data, error, isLoading } = useGetProductsQuery({});

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      // Dispatch da ação para atualizar os dados na store
      dispatch(setProducts(data));
    }
  }, [data, dispatch]);

  return (
    <main className="home">
      <Checkout />
      <Header />
      <section className="content">
        <div className="products">
          {error ? (
            <div className="error">
              <p>
                <strong>Erro:</strong> Ocorreu um erro inesperado.
              </p>
            </div>
          ) : null}
          {isLoading ? (
            <>
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </>
          ) : null}
          {data?.map((product: Product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
