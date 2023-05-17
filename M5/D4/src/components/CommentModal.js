import React from "react";
import { Button, Modal } from "react-bootstrap";
import "../style/commentModal.css";
import { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import RatingSystem from "./RatingSystem";
import AddComment from "./AddComment";
//import useFetch from "../hooks/useFetch"

const CommentModal = ({ asin, closeFunction, refreshFunction }) => {
  //COMMENTATO PERCHE' USIAMO LA FUNZIONE PER LA FETCH
  //stato per memorizzare i commenti
  const [comments, setComments] = useState([]);
  //per il caricamento
  const [loading, setLoading] = useState(false);
  //per gestire gli errori
  const [error, setError] = useState("");

  //funzione per fare fetch e recuperare i commenti
  const getComments = async () => {
    setLoading(true);
    try {
      const data = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${asin}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDYyOTM3YTc3NTgzYzAwMTRkMmNjYzQiLCJpYXQiOjE2ODQxODE4ODIsImV4cCI6MTY4NTM5MTQ4Mn0.31ykjTeGCVxh3MPzSX4o01MNwwBL3Bsy7Zi3kpyxkpw",
            // Dopo Bearer metto token preso nel server striveschool
          },
        }
      );
      const comments = await data.json();
      setComments(comments);
      setLoading(false);
    } catch (error) {
      if (error) {
        setError("Errore caricamento commenti!");
      }
    }
  };

  useEffect(() => {
    getComments();
  }, []);

  //const {data, loading, error} = useFetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`)

  return (
    <div
      className="modal show comment-modal"
      style={{ display: "block" /*, position: "initial"*/ }}
    >
      <Modal.Dialog centered scrollable size="lg">
        <Modal.Header closeButton onClick={closeFunction}>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            {!loading &&
              !error &&
              comments &&
              comments.map((comment) => {
                return (
                  <ListGroup.Item
                    key={asin}
                    className="d-flex justify-content-between alingh-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div>{comment.comment}</div>
                      <div>relativo al libro: {comment.elementId}</div>
                      <div></div>
                    </div>
                    <RatingSystem stars={comment.rate} />
                  </ListGroup.Item>
                );
              })}
            {!loading && !error && (
              <ListGroup.Item>
                <AddComment asin={asin} refreshFunction={getComments}/>
              </ListGroup.Item>
            )}
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeFunction}>
            Close
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default CommentModal;
