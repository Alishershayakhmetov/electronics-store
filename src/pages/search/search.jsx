import SearchFilter from "./searchfilter";
import ProductList from "./productlist";
import style from "./search.module.css";
import PathMaker from "../../components/pathmaker/pathMaker";
import Block from "../../components/block";

export default function Search() {
  return (
    <main style={{ paddingBottom: "16px", backgroundColor: "#F4F4F4" }}>
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
              <ProductList />
              <div> {/* pagination */}</div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
