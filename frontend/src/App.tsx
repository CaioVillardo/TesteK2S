import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.scss";
import Movie from "./components/card/Movie";
import Navbar from "./components/navbar/Navbar";
import Search from "./pages/Search/Search";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <BrowserRouter>
        <Routes>
            <Route path="/search" element={<Search />} />
            <Route path="movie/:title" element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
