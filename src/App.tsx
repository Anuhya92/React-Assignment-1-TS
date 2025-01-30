import "./App.css";
import Header from "./components/Header/Header";
import Gallery from "./pages/Gallery/Gallery";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Counter from "./pages/Counter/Counter";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
