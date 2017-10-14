export default function parseAmount(str) {
  let a = +(str.replace(',', '.'));
  return a * 100;
}
