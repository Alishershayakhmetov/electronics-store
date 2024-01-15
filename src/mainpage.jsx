import Header from './components/header';
import './css/header.css';
import Major from './components/major';
import './css/major.css';
import Footer from './components/footer';
import './css/footer.css';

export default function MainPage() {
  return (
    <>
      <Header />
      <Major />
      <Footer />  
    </>
  );
}