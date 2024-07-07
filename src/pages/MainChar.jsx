// import React from 'react'
import { useOutletContext } from "react-router-dom"

export const MainChar = () => {
    const {characters, setCharacters} = useOutletContext()

    const getMainChars = characters.filter(char => char.id === 1 || char.id === 2)

    console.log(getMainChars)

  return (
    <div style={{color: "white"}}>Main Character</div>

  )
}
