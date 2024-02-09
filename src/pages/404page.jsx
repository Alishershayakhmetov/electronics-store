import Error404 from "../components/404comp";
import Header from "../context/header";
import Footer from "../context/footer";

export default function Error404Page() {
  return (
    <>
      <Header />
      <Error404 />
      <Footer />
    </>
  );
}
