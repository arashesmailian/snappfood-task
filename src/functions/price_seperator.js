function reverseString(str) {
  return str.split("").reverse().join("");
}

function price_seperator(num) {
  const emptyStr = "";

  const trimComma = (str) => str.replace(/^[,]+|[,]+$/g, emptyStr);

  const str = num + emptyStr;
  const [integer, decimal] = str.split(".");

  const conversed = reverseString(integer);

  const grouped = trimComma(
    reverseString(conversed.replace(/\d{3}/g, (match) => `${match},`))
  );

  return !decimal ? grouped : `${grouped}.${decimal}`;
}

export { price_seperator };
