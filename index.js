// Code your solutions in this file
function writeCards(array, name){
  let newArray = [];
  for(let i=0; i<array.length; i++){
    newArray[i] = `Thank you, ${array[i]}, for the wonderful surprise gift!`;
  }
  return newArray;
}

function countDown(num){
  while(num>=0){
    console.log(num);
    num--;
  }
}