// Code your solutions in this file

function countDown(i) {
  while (i >= 0) {
    console.log(i--);
  }
}

function writeCards(names, event) {
  return names.map((name) => {
    return `Thank you, ${name}, for the wonderful ${event} gift!`;
  })
}