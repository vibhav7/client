export default function validateFutureDate(value) {
  const currentDate = new Date();
  const inputDate = new Date(value)
  if (currentDate > inputDate) {
    return false
  } else {
    return true
  }
}