import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import RatingSystem from "./RatingSystem";
import { nanoid } from "@reduxjs/toolkit";
import { Button } from "react-bootstrap";
import AddCommentNoModal from "./AddCommentNoModal";

const CommentNoModal = ({ book, asin }) => {
  const [comments, setComments] = useState([]);

  const getSingleBooks = async () => {
    try {
      const data = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${book}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDYyOTM3YTc3NTgzYzAwMTRkMmNjYzQiLCJpYXQiOjE2ODQxODE4ODIsImV4cCI6MTY4NTM5MTQ4Mn0.31ykjTeGCVxh3MPzSX4o01MNwwBL3Bsy7Zi3kpyxkpw",
            // Dopo Bearer metto token preso nel server striveschool
          },
        }
      );
      const response = await data.json();
      setComments(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleBooks();
  }, [book]);

  
  const deleteComment = async (commentId, refreshFunction) => {
    try {
      const data = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${commentId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJkN2E4OGIxNGE1MTAwMTQ2NjNmZDIiLCJpYXQiOjE2ODM2NDAyNTMsImV4cCI6MTY4NDg0OTg1M30.RJR7z5DaG1h9smRFnqFXPj1AGNSYMXHCWeHFrZFCjh0",
          },
          method: "DELETE",
        }
      );
      await data.json();
    } catch (error) {
      if (error) console.log("Errore nella cancellazione del commento!");
    }
  };

  return (
    <ListGroup>
      {book.length > 0 &&
        comments.map(
          (
            comment //book.length per non visualizzare commenti se non ho selezionato libri
          ) => (
            <ListGroup.Item
              key={nanoid()}
              className="d-flex justify-content-between alingh-items-start"
            >
              <div className="ms-2 me-auto">
                <div>{comment.comment}</div>
                <div>relativo al libro: {comment.elementId}</div>
                <div></div>
              </div>
              <div className="ms-2 me-auto">
                <RatingSystem stars={comment.rate} />
              </div>
              <Button
                variant="primary"
                size="sm"
                onClick={() => deleteComment(comment._id)}
              >
                Delete comment
              </Button>
            </ListGroup.Item>
          )
        )}
      {book.length > 0 && (
        <ListGroup.Item>
          <AddCommentNoModal asin={book} refreshFunction={getSingleBooks}/>
        </ListGroup.Item>
      )}
    </ListGroup>
  );
};

export default CommentNoModal;
