// import React from 'react'
import "./css/detail.css"
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const SeeDetails = () => {
  const [getCharId, setCharId] = useState("");
  const { charId } = useParams();

  useEffect(() => {
    const fetchChar = async () => {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/${charId}`
      );
      setCharId(response.data);
    };

    fetchChar();
    // console.log(getCharId);
  }, []);

if(getCharId === ""){
    return <p>Loading...</p>
}

  return (
    <>
      <div className="see-container" >
        <div className="detail-container">
        <img src={getCharId.image} alt={getCharId.name} className="getCharId-img" />
        <div className="getCharId-info">
          <h3 style={{textDecoration: "underline"}}>{getCharId.name}</h3>
          <p>Location: {getCharId.location.name}</p>
          <p>Status: {getCharId.status}</p>
          <p>Gender: {getCharId.gender}</p>
          <p>Origin: {getCharId.origin.name}</p>
          <p>Species: {getCharId.species}</p>

        </div>

        </div>
      </div>
    </>
  );
};
