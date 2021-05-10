// To get more acquainted with `while`, your task is to write a function,
// `countDown`, that takes in any positive integer and, starting from that number,
// counts down to zero using `console.log()`. So, when written if you were to run:
function countDown(m){
  let i = m;
  while (i>=0) {
    console.log(i)
    i--
  }
  }
  countDown(10)
function writeCards(array, string){
    const newArray = []
    for(let i = 0 ; i < array.length; i++){
    newArray.push(`Thank you, ${array[i]}, for the wonderful ${string} gift!`);
    }
    return newArray;
}

function countdown(number){
    while (number >= 0){
    console.log(number--)
    }
} 