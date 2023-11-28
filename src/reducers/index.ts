export { productReducer } from "./product/product-slice";
export { useGetProductsQuery } from "./product/product-slice";

export { cartReducer } from "./cart/cart-slice";
export {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} from "./cart/cart-slice";

export { sidebarReducer } from "./sidebar/sidebar-slice";
export { closeSidebar, openSidebar } from "./sidebar/sidebar-slice";
