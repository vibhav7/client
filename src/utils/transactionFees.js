export default function getTotalTransactionAmount(price) {
  const totalAmount = parseFloat(price * 0.2) + parseFloat(price)
  return totalAmount.toFixed(2)
}

export function getCleverXFees(price) {
  return parseFloat(price * 0.2).toFixed(2)
}