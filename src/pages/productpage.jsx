import Header from "../context/header";
import Product from "../components/product";
import ProductReview from "../components/productReview";
import Footer from "../context/footer";

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
