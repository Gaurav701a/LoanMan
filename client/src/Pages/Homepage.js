import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Compoenets/navbar';
const Homepage = ({roledata}) => {
  const [loandata, setLoandata] = useState({
    loanAmount:'',
    loanPurpose:'',
    status:'pending'
  });
 
  const handleChange=(e)=>{
    setLoandata({
      ...loandata,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = async() => {
    // TODO: Implement the logic to send the money request to the backend
    console.log("laon data",loandata);
 

    // Reset the form fields after submission
   
  };
  return (
    <>
     <Navbar/>

   
<div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Borrow Money</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-600">
            Loan Amount (Rs)
          </label>
          <input
            type="number"
            id="loanAmount"
            name="loanAmount"
            value={loandata.loanAmount}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="loanPurpose" className="block text-sm font-medium text-gray-600">
            Loan Purpose
          </label>
          <input
            type="text"
            id="loanPurpose"
            name="loanPurpose"
            value={loandata.loanPurpose}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </div>
        <button
          type="button"
          onClick={handleSubmit}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit Request
        </button>
      </form>
    </div>
  
     

  
  </>
   



  )
}

export default Homepage