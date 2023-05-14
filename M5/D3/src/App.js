import { BrowserRouter, Routes, Route } from "react-router-dom"; //per gestire le rotte
import Home from "./pages/Home";
import BookDetail from "./components/BookDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" /*vuol dire punta alla radice del sito*/ element={<Home/>} />
          <Route  path="/book/:asin" /*il :asin è una variabile ed è dinamico*/ element={<BookDetail/>}/> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
