function generateTicket(n) {
  let array = new Array(n);
  for (let i = 0; i < n; i++) {
    array[i] = Math.floor(Math.random() * 10);
  }
  return array;
}

function sum(array) {
  return array.reduce((sum, currentValue) => sum + currentValue, 0);
}

export { generateTicket, sum };
