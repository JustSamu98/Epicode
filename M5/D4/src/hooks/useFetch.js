import { useState, useEffect } from "react";

// funzione che serve per non dover ogni volta rifare la fetch
const useFetch = (endpoint) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const handleFetch = async () => {
    setLoading(true);
    try {
      const data = await fetch(endpoint, {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDYyOTM3YTc3NTgzYzAwMTRkMmNjYzQiLCJpYXQiOjE2ODQxODE4ODIsImV4cCI6MTY4NTM5MTQ4Mn0.31ykjTeGCVxh3MPzSX4o01MNwwBL3Bsy7Zi3kpyxkpw",
          // Dopo Bearer metto token preso nel server striveschool
        },
      });
      const response = await data.json();
      setData(response);
      setData(false);
    } catch (error) {
      if (error) {
        setError("Errore generico del Server!");
      }
    }
  };

  useEffect(() => {
    handleFetch();
  }, [endpoint]); //se cambia endpoint riesegue la fetch, se le [] fossero vuote la esegue solo la prima volta

  return { data, loading, data }; //li destrutturiamo così ci ritorna un componente solo
};

export default useFetch;
