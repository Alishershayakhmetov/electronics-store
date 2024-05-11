import SearchFilter from "./searchfilter";
import ProductList from "./productlist";
import style from "./search.module.css";
import PathMaker from "../../components/pathmaker/pathMaker";
import Block from "../../components/block";
import Pagination from "../../components/Pagination/pagination";
import axios from "axios";
import { useState, useEffect } from "react";
import { useGetCatalogQuery } from "../../store/slices/catalogSlice";
import { useLocation, useParams } from "react-router-dom";

export default function Search() {
  const path = useLocation().pathname.slice(9);
  const searchParams = new URLSearchParams(useLocation().search);
  const pageNumber = parseInt(searchParams.get("page")) - 1 || 0;

  const {
    data: response,
    error,
    isError,
    isLoading,
  } = useGetCatalogQuery({ path, pageNumber });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return (
      <>
        <div>Error: {error.error}</div>
        <div>{error.status}</div>
        <div>Error fetching product data. Please try again later.</div>
      </>
    );
  }

  return (
    <main style={{ padding: "16px 0", backgroundColor: "#F4F4F4" }}>
      <section style={{ maxWidth: "1232px", margin: " auto " }}>
        <PathMaker path={["main", path]} />
        <div className={style.catalogMainDiv}>
          <div className={style.catalogLeftGrid}>
            <Block>
              <SearchFilter /> {/* filter  */}
            </Block>
          </div>
          <div className={style.catalogRightGrid}>
            {" "}
            {/* products */}
            <div> {/*ad banner */}</div>
            <article>
              {" "}
              {/* list of products */}
              <header> {/* sort */}</header>
              <Block>
                {response &&
                response.products &&
                response.products.length > 0 ? (
                  <ProductList data={response.products} />
                ) : (
                  <div>No products found</div>
                )}
              </Block>
              <div>
                {" "}
                {/* pagination */}
                <Pagination count={Math.ceil(response.totalProducts / 12)} />
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
