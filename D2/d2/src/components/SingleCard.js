import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const SingleCard = ({title, asin, img, price, category}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Title as="h6">{asin}</Card.Title>
        <Card.Text>
            {category}
        </Card.Text>
        <Card.Text>
            {price}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

export default SingleCard