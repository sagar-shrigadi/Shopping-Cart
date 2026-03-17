import { Outlet } from "react-router";
import "./App.css";
import { Footer } from "./Components/Home/Footer/Footer";
import { Header } from "./Components/Home/Header/Header";

function App() {
  return (
    <>
      <main>
        <Header />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
