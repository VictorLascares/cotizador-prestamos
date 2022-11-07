import { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";

function App() {
  const [amount, setAmount] = useState(10000);
  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;

  function handleChange(e) {
    setAmount(Number(e.target.value));
  }

  function handleClickDecrement() {
    const value = amount - STEP;

    if (value < MIN) {
      alert("Cantidad no válida");
      return;
    }
    setAmount(value);
  }

  function handleClickIncrease() {
    const value = amount + STEP;
    if (value > MAX) {
      alert("Cantidad no válida");
      return;
    }
    setAmount(value);
  }

  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />

      <div className="flex justify-between my-14">
        <Button fn={handleClickDecrement}>&#8722;</Button>
        <Button fn={handleClickIncrease}>&#43;</Button>
      </div>
      <input
        type="range"
        className="w-full bg-gray-200 accent-lime-500 hover:accent-lime-600"
        onChange={handleChange}
        min={MIN}
        max={MAX}
        step={STEP}
        value={amount}
      />
      <p className="text-center my-10 text-5xl font-extrabold text-indigo-600">
        {amount}
      </p>
    </div>
  );
}

export default App;
