import { useState, useEffect } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import { formatMoney, calculateTotalPay } from "./helpers";

function App() {
  const [amount, setAmount] = useState(10000);
  const [term, setTerm] = useState("6");
  const [total, setTotal] = useState(calculateTotalPay(amount, term));
  const [payment, setPayment] = useState(0);

  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;

  useEffect(() => {
    setTotal(calculateTotalPay(amount, term));

    // Calcular el pago mensual
    setPayment(total / Number(term))
  }, [amount, term]);

  useEffect(() => {
    // Calcular el pago mensual
    setPayment(total / Number(term))
  }, [total]);

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
        {formatMoney(amount)}
      </p>

      <h2 className="text-2xl font-extrabold text-gray-500 text-center">
        Elige un <span className="text-indigo-600">plazo</span> a pagar
      </h2>

      <select
        className="mt-5 w-full p-2 bg-white border border-gray-300 rounded-lg text-center text-xl font-bold text-gray-500"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      >
        <option value="6">6 Meses</option>
        <option value="12">12 Meses</option>
        <option value="24">24 Meses</option>
      </select>

      <div className="my-5 space-y-3 bg-gray-50 p-5">
        <h2 className="text-2xl font-extrabold text-gray-500 text-center">
          Resumen <span className="text-indigo-600">de pagos</span>
        </h2>

        <p className="text-xl text-gray-500 text-center font-bold">
          {term} meses
        </p>
        <p className="text-xl text-gray-500 text-center font-bold">
          {formatMoney(total)} total a pagar
        </p>
        <p className="text-xl text-gray-500 text-center font-bold">
          {formatMoney(payment)} mensuales
        </p>
      </div>
    </div>
  );
}

export default App;
