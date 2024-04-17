import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8003/api/catalog/api/product/",
  }),
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: ({ urlpath, lang }) => `${urlpath}/${lang}`,
    }),
  }),
});

export const { useGetProductQuery } = productsApi;
