import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ImageCarousel from './components/banner/slideshow'
import ProductList from './components/productList';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About.js'


function App() {
  return (
    <div className="App">
     <Header/>
     <ImageCarousel/>
     <ProductList/>
     <About/>
    </div>
  );
}

export default App;
