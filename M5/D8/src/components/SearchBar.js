import React, { useState, useEffect } from 'react'
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const SearchBar = ({books, setRenderBooks}) => {

    const [searchTerm, setSearchTerm] = useState('');
    //console.log(searchTerm);

    const handleSearch = () => {
      //e.preventDefault(); //permette di non refreshare la pagina al click di submit

      if(searchTerm !== ""){
        const filteredBooks = books.filter((book) =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setRenderBooks(filteredBooks);
      }else{
        setRenderBooks(books);
      }
    };

    //Per tornare tutte le cards quando si cancella il termine
    useEffect(() => {
      handleSearch();
    }, [searchTerm, books]);
    //Per non far aggiornare la pagina al submit del btn nel form
    const handleSubmit = (e) => {
      e.preventDefault();
      handleSearch();
    };

  return (
    <Container className="mt-3 mb-5">
      <Row>
        <Col sm={12}>
          <Form className="d-flex" onSubmit={handleSubmit}>
            <Form.Control
              /*onChange={(e) =>
                 {e.target.value === "" ? setRenderBooks(books) : setSearchTerm(e.target.value)}}*/
                onChange={(e)=>{
                  setSearchTerm(e.target.value);
                  handleSearch();
                }}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button type='submit'>
              Search
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default SearchBar
