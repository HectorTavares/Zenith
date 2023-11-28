"use client";

import "./style.scss";
import { Header, Footer, ProductCard, Checkout } from "@/components";
import { Product } from "@/types";
import CardSkeleton from "@/components/skeleton";
import { useGetProductsQuery } from "@/reducers";

export default function Home() {
  const { data: products, error, isLoading } = useGetProductsQuery({});

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
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </>
          ) : null}
          {products?.map((product: Product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
