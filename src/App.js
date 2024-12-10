import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './components/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
    // <div className="App">
    //  <Header/>
    //  <ImageCarousel/>
    //  <ProductList/>
    //  <AboutUs/>
    //  <LoginPage/>
    // </div>
  );
}

export default App;
