import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./slices/productSlice";
import { catalogApi } from "./slices/catalogSlice";
import { cartApi } from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [catalogApi.reducerPath]: catalogApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productsApi.middleware,
      catalogApi.middleware,
      cartApi.middleware
    ),
});
