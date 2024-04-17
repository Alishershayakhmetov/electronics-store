import SearchFilter from "./searchfilter";
import ProductList from "./productlist";
import style from "./search.module.css";
import PathMaker from "../../components/pathmaker/pathMaker";
import Block from "../../components/block";
import Pagination from "../../components/Pagination/pagination";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Search() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8003/api/catalog/api/catalog/smartphones-and-gadgets"
        );
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data. Please try again later.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <main style={{ padding: "16px 0", backgroundColor: "#F4F4F4" }}>
      <section style={{ maxWidth: "1232px", margin: " auto " }}>
        <PathMaker path={["main", "smartphones"]} />
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
                <ProductList data={products} />
              </Block>
              <div>
                {" "}
                {/* pagination */}
                <Pagination count={Math.ceil(products.length / 12)} />
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
