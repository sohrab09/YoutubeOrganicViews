import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Checkout from './Components/Checkout/Checkout';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout/views/:id" element={<Checkout />} />
        <Route path="/checkout/subscriber/:id" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
