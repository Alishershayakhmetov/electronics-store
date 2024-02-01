import Header from "../context/header";
import "../css/header.css";
import Product from "../components/product";
import "../css/product.css";
import "../css/carousel.css";
import ProductReview from "../components/productReview";
import "../css/productReview.css";
import Footer from "../context/footer";
import "../css/footer.css";

export default function ProductPage() {
  return (
    <>
      <Header />
      <main>
        <Product />
        <ProductReview />
      </main>
      <Footer />
    </>
  );
}
