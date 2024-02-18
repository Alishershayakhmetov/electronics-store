import Header from "../context/header";
import Search from "../components/search";
import Footer from "../context/footer";
import "../css/search.css";
import "../css/searchfilter.css";
import "../css/productlist.css";

export default function SearchPage() {
  return (
    <>
      <Header />
      <Search />
      <Footer />
    </>
  );
}
