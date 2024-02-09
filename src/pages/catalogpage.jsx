import Header from "../context/header";
import Footer from "../context/footer";
import Catalog from "../components/catalog";
import "../css/catalog.css";

export default function CatalogPage() {
  return (
    <>
      <Header />
      <Catalog />
      <Footer />
    </>
  );
}
