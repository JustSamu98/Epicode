import React from 'react'
import { useParams } from 'react-router-dom' //cattura tutto quello che c'è dopo lo slash
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import {Card} from 'react-bootstrap'
import { PacmanLoader } from "react-spinners";

const BookDetail = () => {
    const {asin} = useParams() //su app.js

    const [book, setBook] = useState([]) //valore di lettura, e funzione che ce lo fa scrivere
    //se in uno stato non sai cosa ti arriva lo inizializzi a null
    console.log(book)

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const getSingleBook = async() => {
        setLoading(true);
        try {
            const data = await fetch(`https://epibooks.onrender.com/${asin}`)
            const response = await data.json()
            setBook(response)
            setLoading(false);
        } catch (error) {
            if(error) setError("Errore")
        }
    }

    useEffect(() => {
        getSingleBook()
    },[])

  return (
    <>
        {loading && <PacmanLoader color="#36d7b7" className="mt-3 mb-5"/>}
        {!loading && error && <div>si è verificato un errore</div>}
        {!loading && !error && book && ( //se book è pieno fai sta roba
            <div>
                <Card style={{ width: '300' }}>
                    <Card.Img variant="top" src={book[0].img}/>
                    <Card.Body>
                    <Card.Title>{book[0].title}</Card.Title>
                    <Link to="/">
                        <Button>Torna alla home page</Button>
                    </Link>
                    </Card.Body>
                </Card>
            </div>
        )}
    </>
  )
}

export default BookDetail