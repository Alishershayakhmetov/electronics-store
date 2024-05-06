import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8003/api/catalog/api/cart",
  }),
  endpoints: (builder) => ({
    addToCart: builder.mutation({
      query: (productId) => ({
        url: "/add-to-cart",
        method: "POST",
        body: { productId },
        credentials: "include", // Add credentials option here
      }),
    }),
  }),
});

export const { useAddToCartMutation } = cartApi;
