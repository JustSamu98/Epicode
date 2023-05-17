import React, { useState } from "react";
import { PacmanLoader } from "react-spinners";

const AddCommentNoModal = ({ asin, refreshFunction }) => {
  const [comment, setComment] = useState('');
  const [rate, setRate] = useState("1");
  const [loading, setLoading] = useState(false);

  const handleCommentSubmit = async (e) => {
    e.preventDefault(); //per non refereshare la pagina
    setLoading(true);

    try {
      const data = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify({
            comment: comment,
            rate: rate,
            elementId: asin,
          }),

          headers: {
            Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDY1NjQ2M2E2YzBiMjAwMTQzOGQzZDEiLCJpYXQiOjE2ODQzNjY0MzYsImV4cCI6MTY4NTU3NjAzNn0.7SYzQon50_m8Ofwc7widxB1Pq3lVDQUSLapqYzJ2Sec",
            "Content-Type": "application/json",
          },
        }
      );
      const response = await data.json();
      console.log(response);
      console.log("Commento aggiunto!");
      setComment(""); //svuoto commneto scritto
      setRate("1"); //metto nuovamente a default stelline
      setLoading(false);
      refreshFunction(); //per aggiungere recensione
    } catch (error) {
      console.log(error);
      alert("Error");
    }
  };


  
  return (
    <div>
      <h4>Add comment</h4>
      <form onSubmit={handleCommentSubmit}>
        <div className="form-group">
          <label htmlFor="rate">Stars:</label>
          <select
            className="form-control"
            id="rate"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="comment">Comment:</label>
          <textarea
            className="form-control"
            id="comment"
            rows="3"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Send
        </button>
        {loading && (
          <div className="d-flex justify-content-center align-items-center">
            <PacmanLoader color="#36d7b7" className="mt-3 mb-5" />
          </div>
        )}
      </form>
    </div>
  );
};

export default AddCommentNoModal;
