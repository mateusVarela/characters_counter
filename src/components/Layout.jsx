import React from "react";
import { useState } from "react";
import './layout.css'

function Layout () {

  const [length, setLength] = useState(0)
  const [number, setNumber] = useState(0)
  const [whiteSpaces, setWhiteSpaces] = useState(0)

  const calculateCharacters = (value) => {
    setLength(value.length)
    const numbersCount = value.match(/\d/g) ? value.match(/\d/g).length : 0
    setNumber(numbersCount)

    const spacesCount  = value.replace(/\t/g, " ").split(" ").length - 1;
    setWhiteSpaces(spacesCount)
  }

  return (
    <div className='display'>
      <span className="gradient">
        Digite ou cole <algo className=""></algo>
      </span>
      <input onKeyUp={e => calculateCharacters(e.target.value)} className="input-text"/>
      <span>
        Caracteres: {length}
      </span>
      <span>
        Números: {number}
      </span>
      <span>
        Espaçoes em branco: {whiteSpaces}
      </span>
    </div>
  )
}

export default Layout;