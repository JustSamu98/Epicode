// Da sistemare il book[0] che funziona solo la prima volta

import React from 'react'
import { useParams } from 'react-router-dom' //cattura tutto quello che c'è dopo lo slash
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

const BookDetail = () => {
    const {asin} = useParams() //su app.js

    const [book, setBook] = useState([]) //valore di lettura, e funzione che ce lo fa scrivere
    //se in uno stato non sai cosa ti arriva lo inizializzi a null
    //console.log(book)

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
        {loading && <div>caricamento</div>}
        {!loading && error && <div>si è verificato un errore</div>}
        {!loading && !error && book && //se book è pieno fai sta roba
            <div>
                <img src={book[0].img} width={300}/>
                <h1>{book[0].title}</h1>
                <Link to="/">
                    <Button variant="primary">Home</Button>
                </Link>
            </div>
        }
    </>
  )
}

export default BookDetail