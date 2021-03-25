function generateRandomLetters() {
  const charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let randomString = '';
  for (let i = 2; i > 0; i -= 1) {
    const randomPos = Math.floor(Math.random() * charSet.length);
    randomString += charSet.substring(randomPos, randomPos + 1);
  }
  return randomString;
}

function generateRandomNumbers() {
  return Math.floor(1000 + Math.random() * 9000).toString();
}

function generateInvoiceNumber() {
  return generateRandomLetters() + generateRandomNumbers();
}

export default generateInvoiceNumber;
