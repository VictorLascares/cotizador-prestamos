import { useState } from "react"
import Header from "./components/Header"

function App() {
  const [amount, setAmount] = useState(10000);
  console.log(amount);

  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />
      <input 
        type="range"
        className="w-full bg-gray-200 accent-lime-500 hover:accent-lime-600"
      />
    </div>
 )
}

export default App
