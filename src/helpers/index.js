const formatMoney = (value) => {
  const thousands = parseInt(value / 1000);
  const hundreds = parseInt(value % 1000);
  return value == 0
    ? "$0.00 USD"
    : `$${thousands},${hundreds == 0 ? "000" : hundreds}.00 USD`;
};

// Usando API
// const formatMoney2 = (value) => {
//   const formatter = new Intl.NumberFormat("en-US", {
//     style: "currency",
//     currency: "USD",
//   });
//   return formatter.format(value);
// };

const calculateTotalPay = (amount, term) => {
  let total;

  // Mientras mayor es la cantidad, menor es el interes
  if (amount < 5000) {
    total = amount * 1.5;
  } else if (amount >= 5000 && amount < 10000) {
    total = amount * 1.4;
  } else if (amount >= 10000 && amount < 15000) {
    total = amount * 1.3;
  } else {
    total = amount * 1.2;
  }

  // Plazo - mas plazo, mayor interes
  if (term === "6") {
    total *= 1.1;
  } else if (term === "12") {
    total *= 1.2;
  } else {
    total *= 1.3;
  }

  return total;
};

export { formatMoney, calculateTotalPay };
