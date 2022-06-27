import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllBeers from "./pages/AllBeers";
import Onebeer from "./pages/Onebeer";
import RandomBeer from "./pages/RandomBeer";
import CreateBeer from "./pages/CreateBeer";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beers" element={<AllBeers />} />
          <Route path="/beers/:beerId" element={<Onebeer />} />
          <Route path="/random-beer" element={<RandomBeer />} />
          <Route path="/new-beer" element={<CreateBeer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
