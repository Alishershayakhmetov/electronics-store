import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8003/api/catalog/api/cart",
  }),
  endpoints: (builder) => ({
    addToCart: builder.mutation({
      query: ({ product_id, lang }) => ({
        url: `/add-to-cart?lang=${lang}`,
        method: "POST",
        body: { product_id },
        credentials: "include", // Add credentials option here
        headers: {
          Accept: "text/plain;charset=UTF-8",
        },
      }),
    }),
    getAllProducts: builder.query({
      query: (language) => ({
        url: `/getAllProducts?lang=${language}`,
        method: "GET",
        credentials: "include", // Add credentials option here
      }),
    }),
  }),
});

export const { useAddToCartMutation, useGetAllProductsQuery } = cartApi;
