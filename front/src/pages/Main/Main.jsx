import { useState, useEffect } from "react";
import axios from "../../axios";

export const Main = () => {
  const [fruits, setFruits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("/")
      .then((res) => setFruits(res.data.fruits))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="p-4 bg-white rounded shadow" style={{ minWidth: "300px" }}>
        <h1 className="text-center mb-3">Фрукты</h1>
        <ul className="mb-0 ps-3 list-unstyled">
          {fruits.map((f) => (
            <li key={f.id} className="py-1">
              {f.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
