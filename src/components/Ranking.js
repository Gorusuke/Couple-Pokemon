import React, { useEffect, useState } from "react";
import ListaRankings from "./ListaRankings";
import "./Ranking.css";
import firebase from "../firebase/firebase";
import "firebase/firestore";
import Spinner from "./Spinner";

const Ranking = ({ salir }) => {
  const db = firebase.firestore();

  const [arreglos, setArreglos] = useState([]);
  const [blank, setBlank] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (db) {
      const player = db
        .collection("Ranking")
        .orderBy("score", "asc")
        .limit(10)
        .onSnapshot((querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          limits(data);
          setLoading(false);
        });
      return player;
    }
  }, [db]);

  const limits = (arr) => {
    if (arr.length === 0) {
      setBlank(true);
      return;
    }

    let ranked = arr.sort(function (x, y) {
      return x.score - y.score;
    });

    if (ranked.length >= 11) {
      ranked.splice(ranked.length - 1, 1);
    }
    setArreglos(ranked);
  };

  return (
    <div className="ranking-position">
      {blank ? (
        <h2>No hay ningún resultado aun</h2>
      ) : loading ? (
        <Spinner spinner2 />
      ) : (
        <div>
          <h2>Ranking De Los Mejores</h2>
          <ul>
            {arreglos.map((arreglo, i) => (
              <ListaRankings key={i} arreglo={arreglo} number={i} />
            ))}
          </ul>
        </div>
      )}
      <div className="button-container">
        <button onClick={salir} className="send-button">
          Salir
        </button>
      </div>
    </div>
  );
};

export default Ranking;
