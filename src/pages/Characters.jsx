import "./css/characters.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export const Characters = ({ getFavorite, setFavorite, isInFavorite }) => {
  const [characters, setCharacters] = useState([]);
  const [ page, setPage ] = useState(1)
  const navigate = useNavigate()

  useEffect(() => {
    fetchApi(page);
  }, [page]);


  const fetchApi = async (page) => {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/?page=${page}`
    );
    setCharacters([...characters, ...response.data.results]);
  };

  // Create a function to add favorites and put it to onclick
  const addToFav = async(id) => {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
      );
    setFavorite([...getFavorite, response.data])

    // setActive(true)
  }

  

  const deleteFav = (id)=> {
    setFavorite(getFavorite.filter(char => char.id !== id))
}

  // Create a function that will disable the button once clicked
  const renderBtn = (id) => {
    return isInFavorite(id) ?
    <button onClick={() => deleteFav(id)} className="delete">Delete</button> :
    <button onClick={()=> addToFav(id)} className="favorite">Add to Favorites</button> 
  }

  return (
    <>
      <div className="character-container">
        {/* <Link to="main-characters">See Main Character</Link>
        <Outlet context={{characters, setCharacters}}/> */}
        <div className="char">
          {characters.map((char, idx) => (
            <div className="char-container" key={idx}>
              <img src={char.image} alt={char.name} className="char-img" />
              <div className="char-info">
                <h4>{char.name}</h4> 
                <button className="see-details" onClick={() => navigate(`/characters/${char.id}`)}>
                  See Details
                </button>
                {
                  renderBtn(char.id)
                }
                {/* <button onClick={()=> addToFav(char.id)} >Add to Favorites</button> */}
              </div>
            </div>
          ))}
        </div>
          <button className="see-more" onClick={() => setPage(page + 1)}>See more</button>
          {/* <button className="arrow" onClick={() => navigate("/characters")}>&#8593;</button> */}
      </div>
    </>
  );
};
