import React, {useState, useEffect} from 'react'
import SingleCard from './SingleCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import MyBadge from './MyBadge';
import SearchBar from './SearchBar';
//import data from '../data/scifi.json'

const Main = () => {

    //per la searchBar
    const [renderBooks, setRenderBooks] = useState([]);
    const [books, setBooks] = useState([]);


    const getBooks = async () => {
        try {
            const data = await fetch("https://epibooks.onrender.com")
            const response = await data.json()
            setBooks(response);
            setRenderBooks(response);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getBooks()
    },[]) 

  return (
    <>
        <MyBadge
        str='Ciao'
        color='primary'
        />
        <MyBadge
            str='ok?'
            color='secondary'
        />
    <div>
        <SearchBar 
            books={books} 
            setBooks={setBooks} 
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
                <Col className='d-flex flex-wrap gap-3 justify-content-center align-content-center'>
                    {renderBooks && renderBooks.map((book) => { //controlli se library esiste e mappi i dati 
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
            </Row>
        </Container>
        </div>
    </>
  )
}

export default Main