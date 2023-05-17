import React from 'react';
import { StarFill } from 'react-bootstrap-icons';

const RatingSystem = ({stars}) => {
  return (
    <>
        {
            // va spreddato, vuol dire prenditi eventualmente quello che c'è dentro l'array, DA USARE SE NO NON FUNZIONA
            [...Array(stars)].map((star, index) =>{ //crei un array con il numero di stelle
                return <StarFill key={index}/>
            }) 
        }
    </>
  )
}

export default RatingSystem