import { BrowserRouter, Routes, Route } from "react-router-dom"; //per gestire le rotte
import Home from "./pages/Home";
import BookDetail from "./components/BookDetail";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" /*vuol dire punta alla radice del sito*/ element={<Home/>} />
          <Route  path="/book/:asin" /*il :asin è una variabile ed è dinamico*/ element={<BookDetail/>}/> 
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
