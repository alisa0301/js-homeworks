export default function doThisEx(str) {
  let bracketStr = "";
  let upperStr = str.toUpperCase();
  for (let i = 0; upperStr.length > i; i++) {
    let char = upperStr.charAt(i);
    let firstI = upperStr.indexOf(char);
    let lastI = upperStr.lastIndexOf(char);
    if (firstI === lastI) {
      bracketStr += "(";
    } else {
      bracketStr += ")";

    }
  }
  return bracketStr;
}
