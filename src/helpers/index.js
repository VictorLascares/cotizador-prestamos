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

export { formatMoney };
