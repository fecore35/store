import { Routes, Route } from "react-router-dom";

import Header from "components/Header";
import Footer from "components/Footer";
import HomeView from "views/HomeView";
import CartView from "views/CartView";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="cart" element={<CartView />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
