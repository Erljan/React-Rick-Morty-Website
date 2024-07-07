import "./css/favorite.css";
import { useNavigate } from "react-router-dom";

export const Favorites = ({ getFavorite, setFavorite }) => {
    const navigate = useNavigate()

  const deleteFav = (id) => {
    setFavorite(getFavorite.filter((char) => char.id !== id));
  };
  // console.log(getFavorite)
  return (
    <>
      <div className="fav-container">
        <div className="char">
          {getFavorite.length ? (
            getFavorite.map((char, idx) => (
              <div className="char-container" key={idx}>
                <img src={char.image} alt={char.name} className="char-img" />
                <div className="char-info">
                  <h4>{char.name}</h4>
                  {/* <p>Gender: {char.gender}</p> */}
                  <p>Origin: {char.origin.name}</p>
                  {/* <p>Species: {char.species}</p> */}
                  <button onClick={() => deleteFav(char.id)} className="delete">Delete</button>
                </div>
              </div>
            ))
          ) : (
            <div><h1 style={{color: "white"}}>No favorites</h1> <button onClick={()=> navigate("/characters")} className="favorite">Add favorites</button></div>
          )}
        </div>
      </div>
    </>
  );
};
