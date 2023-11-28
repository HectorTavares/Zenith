import { Product } from "@/types";
import axios from "axios";

export const useProductApi = () => {
  const getProducts = async () => {
    const response = await axios.get(
      // "https://zenith-store-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=price&orderBy=DESC"
      "https://fakestoreapi.com/products"
    );
    return response.data as Product[];
  };

  return { getProducts };
};
