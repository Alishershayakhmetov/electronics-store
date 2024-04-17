import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./productSlice";
import { catalogApi } from "./catalogSlice";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [catalogApi.reducerPath]: catalogApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productsApi.middleware,
      catalogApi.middleware
    ),
});
