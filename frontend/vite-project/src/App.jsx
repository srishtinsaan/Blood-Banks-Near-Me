import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"


function App() {
  const [database, setdatabase] = useState([])
  const [enteredPIN, setPIN] = useState(0)
  const [banksPresent, setBanksPresent] = useState([])

  useEffect(() => {
    axios.get('/api/bloodbanks')
    .then((response) => {
      setdatabase(response.data)
    })
    .catch((error) => {
      console.log(error);
      
    })
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    setBanksPresent(database.filter((bank) => bank["Pincode"] === enteredPIN))
  }

  return (
<div>
      <form action="" onSubmit={handleSubmit}>
        <input type="number" onChange={(e) => setPIN(Number(e.target.value))}/>
        <button type="submit">Search</button>  
      </form>
      
      
      <p>Total blood banks in India are : {database.length}</p>
      {
        banksPresent
        .map((bank, index) => (
          <div key={index}>
            <h2>{bank["Blood Bank Name"]}</h2>
          </div>
        ))
      }
    </div>
  )
}

export default App
