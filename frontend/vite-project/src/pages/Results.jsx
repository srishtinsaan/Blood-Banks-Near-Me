import { useSearchParams } from "react-router-dom";
import FormResults from "../components/FormResults";

function Results({banks}) {

    const [searchParams] = useSearchParams();
    const pincode = searchParams.get("pincode");
    console.log(pincode);
    
  return (
    <div>
      <h2>Results for Pincode: {pincode}</h2>
      {/* Fetch blood banks from DB using pincode */}
      <FormResults banks={banks}/>
    </div>
  )
}

export default Results
