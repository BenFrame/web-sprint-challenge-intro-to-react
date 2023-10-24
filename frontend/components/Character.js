import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'

const StyledCharacter = styled.div``

function Character({info}) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  const[homeworld, setHomeworld] = useState(false)
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const toggleHomeWorld = (()=> setHomeworld(!homeworld))

  return (
    <StyledCharacter className= 'character-card' onClick={toggleHomeWorld}>
      {/* Use the same markup with the same attributes as in the mock */
      <>
      <h3 className = 'character-name'>{info.name}</h3>
      { homeworld && <p>Planet: <span className = "character-planet">{info.planetInfo.name}</span> </p> }
      </>
      }
    </StyledCharacter>
  )
}

export default Character
