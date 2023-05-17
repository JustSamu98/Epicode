import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom"; //permette di rendere cliccabile un qualunque elemento della nostra pagina
import CommentModal from "./CommentModal";


/*const SingleCard = ({asin, category, img, price, title}) => {
  return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} height={400}/>
        <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{category}</Card.Text>
        <Card.Text>{price}</Card.Text>
        <Card.Text>{asin}</Card.Text>
        </Card.Body>
    </Card>
  )
}*/

const SingleCard = ({ asin, category, img, price, title }) => {
  const [selected, setSelected] = useState(false); //selezione card

  //modale
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);

  //facciamo il toggle di questo stato
  const toggleSelected = () => {
    setSelected(!selected); // al contrario di ciò che è attualmente
  };

  const toggleModal = () => setIsCommentModalOpen(!isCommentModalOpen);

  return (
    <>
      <Card
        className={`${selected ? "border border-danger shadow" : null}`} //riga che permette il cambio colore del bordo dell'onClick toggleSelected
        //se selected è true, applica quella classe, altrimenti null, quindi niente
        onClick={toggleSelected}
        style={{ width: "18rem" }}
      >
        <Card.Img variant="top" src={img} height={400} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{category}</Card.Text>
          <Card.Text>{price}</Card.Text>
          <Card.Text>{asin}</Card.Text>
          <Link to={`/book/${asin}` /*rotta dinamica in base al libro*/}>
            <Button variant="primary" onClick={toggleModal}>
              Dettagli
            </Button>
          </Link>
        </Card.Body>
        <Button onClick={toggleModal}>Commenti</Button>
        {isCommentModalOpen && <CommentModal asin={asin} closeFunction={toggleModal} />} 
      </Card>
    </>
  );
};

export default SingleCard;
