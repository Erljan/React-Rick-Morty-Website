import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Characters } from "./pages/Characters";
import { Navigator } from "./pages/NavBar";
import { SeeDetails } from "./pages/SeeDetails";
import { AboutPage } from "./pages/AboutPage";
import { MainChar } from "./pages/MainChar";
import { ErrorPage } from "./pages/ErrorPage";
import { Favorites } from "./pages/Favorites";

export const App = () => {
  const [ getFavorites, setFavorites ] = useState([])

  // Create a isInFavorite function
  const isInFavorite = (id) => Boolean(getFavorites.filter(char => char.id === id).length)
  

  return (
    <>
      <Navigator />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="characters" element={<Characters getFavorite={getFavorites} setFavorite={setFavorites} isInFavorite={isInFavorite}/>} >
          <Route path="main-characters" element={<MainChar/>}/>
        </Route>
        <Route path="about" element={<AboutPage />} />
        <Route path="favorites" element={<Favorites getFavorite={getFavorites} setFavorite={setFavorites} />} />
        <Route path="characters/:charId" element={<SeeDetails/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </>
  );
};

// export default App
