import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  const [characters, setCharacters] = useState([])
  const [selectedCharacter, setSelectedCharacter] = useState(null)
  // ❗ Create effects to fetch the data and put it in state
  useEffect(() => {
    // axios.get(`${urlPeople}`)
    //   .then(res => {
    //     setCharacters(res.data)
    //   })
    const getStuff = async () => {
      try {
        const charRes = await axios.get(`${urlPeople}`);
        const planRes = await axios.get(`${urlPlanets}`);

        charRes.data.forEach((char) => {
          const newHome = planRes.data.find(planet => planet.id === char.homeworld)
          char.planetInfo = newHome
        })
        setCharacters(charRes.data)
      }
      catch (err) {
        console.log(err);
      }
    }
    getStuff();
  },[])
  
  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */
      characters.map((char) => {
        return <Character key={char.id} info={char} 

          />
      })
      }
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
