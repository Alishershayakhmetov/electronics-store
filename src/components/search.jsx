import SearchFilter from "./searchfilter";
import ProductList from "./productlist";

export default function Search() {
  return (
    <main style={{ paddingBottom: "16px" }}>
      <section style={{ maxWidth: "1232px", margin: " auto " }}>
        <ul> {/* page path */}</ul>
        <div className="catalog-main-div">
          <div className="catalog-left-grid">
            <SearchFilter /> {/* filter  */}
          </div>
          <div className="catalog-right-grid">
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
