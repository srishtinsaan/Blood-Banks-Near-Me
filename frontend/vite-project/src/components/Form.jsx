import { useState } from 'react'
import { fetchBloodBanks } from "../utils/helper.js";
import { useNavigate } from "react-router-dom";
import Results from '../pages/Results.jsx';
function Form() {

    const navigate = useNavigate();

    const [pincode, setPincode] = useState("");
    const [banksPresent, setbanksPresent] = useState([]);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {

     e.preventDefault();
     navigate(`/banks?pincode=${pincode}`)

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
    <div className=''>
      <form action="" onSubmit={handleSubmit} 
          className='flex justify-center gap-3 m-9'
      >
        <input type="number" value={pincode} placeholder='Enter pincode' 
        onChange={(e) => setPincode(e.target.value)}
        className="w-64 px-4 py-2 text-black rounded-md  text-white border border-gray-300 "
      />
        <button type="submit" 
        className="px-6 py-2 rounded-md bg-red-600 hover:bg-red-700 transition font-semibold shadow-md"
        onSubmit="">Search</button>  
      </form>

      {error && <p style={{ color: "red" , display: 'flex', justifyContent: 'center', alignItems : 'center'}}>{error}</p>}

      
      {/* Results */}
      <Results banks={banksPresent} />
    </div>
  )
}

export default Form
