import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const catalogApi = createApi({
  reducerPath: "catalogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8003/api/catalog/api/catalog/",
  }),
  endpoints: (builder) => ({
    getCatalog: builder.query({
      query: ({ path, pageNumber }) => `${path}/${pageNumber}`,
    }),
  }),
});

export const { useGetCatalogQuery } = catalogApi;
