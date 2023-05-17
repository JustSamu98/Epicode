import React, { useState, useEffect } from "react";
import SingleCard from "./SingleCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MyBadge from "./MyBadge";
import SearchBar from "./SearchBar";
//import data from '../data/scifi.json'
import { PacmanLoader } from "react-spinners";

const Main = () => {
  //per la searchBar
  const [renderBooks, setRenderBooks] = useState([]);
  const [books, setBooks] = useState([]);

  //stato spinner
  const [loading, setLoading] = useState(false);
  //stato errori
  const [error, setError] = useState(null); //null quando non sappiamo come inizializzarlo

  //array dei libri
  const getBooks = async () => {
    setLoading(true);
    try {
      const data = await fetch("https://epibooks.onrender.com");
      const response = await data.json();
      setBooks(response);
      setRenderBooks(response);
      setLoading(false);
    } catch (error) {
      if (error) {
        setError("Errore su ricezione dati");
      }
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <>
      <Container>
        <MyBadge str="Ciao" color="primary" />
        <MyBadge str="ok?" color="secondary" />
        {error && <h1>{error}</h1> /*Se ci sono errori*/} 
        {
          loading && !error && ( //se sta caricando e non ci sono errori
            <PacmanLoader color="#36d7b7" className="mt-3 mb-5"/>
          ) /*se sta caricando parte lo spinner*/
        }
        {!loading && !error && ( //se loading è false e non ci sono errori mostrami tutto 
          <div>
            <SearchBar
              books={books}
              setRenderBooks={setRenderBooks}
            />

            <Container>
              {/*<Row>
                    <Col className='d-flex flex-wrap gap-3 justify-content-center align-content-center'>
                        {data.map((book) => { 
                            return (
                                <SingleCard
                                    key={book.asin}
                                    asin={book.asin}
                                    category={book.category}
                                    img={book.img}
                                    price={book.price}
                                    title={book.title}
                                />
                            )
                        })}
                    </Col>
                </Row>*/}
              <Row>
                <Col className="d-flex flex-wrap gap-3 justify-content-center align-content-center">
                  {renderBooks &&
                    renderBooks.map((book) => {
                      //controlli se library esiste e mappi i dati
                      return (
                        <SingleCard
                          key={book.asin}
                          asin={book.asin}
                          category={book.category}
                          img={book.img}
                          price={book.price}
                          title={book.title}
                        />
                      );
                    })}
                </Col>
              </Row>
            </Container>
          </div>
        )}
      </Container>
    </>
  );
};

export default Main;
