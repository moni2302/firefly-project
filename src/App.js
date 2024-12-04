import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ImageCarousel from './components/banner/slideshow'
import ProductList from './components/productList';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './components/AboutUs'


function App() {
  return (
    <div className="App">
     <Header/>
     <ImageCarousel/>
     <ProductList/>
     <AboutUs/>
    </div>
  );
}

export default App;
