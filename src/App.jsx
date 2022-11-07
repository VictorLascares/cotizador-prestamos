import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [amount, setAmount] = useState(10000);

  function handleChange(e) {
    setAmount(e.target.value)
  }

  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />
      <input
        type="range"
        className="w-full bg-gray-200 accent-lime-500 hover:accent-lime-600"
        onChange={ handleChange }
      />
      <p className="text-center my-10 text-5xl font-extrabold text-indigo-600">{ amount }</p>
    </div>
  );
}

export default App;
