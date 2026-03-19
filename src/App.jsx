import { Outlet } from "react-router";
import "./App.css";
import { Footer } from "./Components/Home/Footer/Footer";
import { Header } from "./Components/Home/Header/Header";
import { useState } from "react";

function App() {
  const [itemsToCart, setItemsToCart] = useState([]);
  return (
    <>
      <main>
        <Header count={itemsToCart.length} />
        <Outlet context={{ itemsToCart, setItemsToCart }} />
      </main>
      <Footer />
    </>
  );
}

export default App;
