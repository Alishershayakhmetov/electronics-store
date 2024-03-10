import SearchFilter from "./searchfilter";
import ProductList from "./productlist";
import style from "./search.module.css";

export default function Search() {
  return (
    <main style={{ paddingBottom: "16px" }}>
      <section style={{ maxWidth: "1232px", margin: " auto " }}>
        <ul> {/* page path */}</ul>
        <div className={style.catalogMainDiv}>
          <div className={style.catalogLeftGrid}>
            <SearchFilter /> {/* filter  */}
          </div>
          <div className={style.catalogRightGrid}>
            {" "}
            {/* products */}
            <div> {/*ad banner */}</div>
            <article>
              {" "}
              {/* list of products */}
              <header> {/* sort */}</header>
              <ProductList />
              <div> {/* pagination */}</div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
