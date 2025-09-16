import { useState } from 'react'
import { fetchBloodBanks } from "./utils/helper.js";

function App() {
  const [pincode, setPincode] = useState("");
  const [banksPresent, setbanksPresent] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {

     e.preventDefault();

    try {
      setError(null);

      const res = await fetchBloodBanks(pincode);

      console.log("res:", res);
      console.log("res.data:", res.data)

      setbanksPresent(res.data || [])

    } catch (err) {
      setError(err.message || "Error fetching data")
      setbanksPresent([])
    }
  };

  


  return (
<div>
      <form action="" onSubmit={handleSubmit}>
        <input type="number" value={pincode} placeholder='Enter pincode' 
        onChange={(e) => setPincode(e.target.value)}/>
        <button type="submit">Search</button>  
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      
  
      {
        banksPresent.map((bank, index) => (
          <li key={index}>
            <strong>{bank[" Blood Bank Name"]}</strong> - {bank[" Address"]}
          </li>
        ))
      }
    </div>
  )
}

export default App
