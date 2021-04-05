
const gifts = ["teddy bear", "drone", "doll"];
 let array1;
function writeCards(names,event) {
  let array = [];
  for (let i = 0; i < names.length; i++) {
    array [i] =`Thank you, ${names[i]}, for the wonderful ${event} gift!`;
  }

  return array;
}

writeCards(["Lisa", "Kaitlin", "Jan"], "surprise");


function countDown(num){
  let sum;
  while(num>=0){
    console.log(num)
    sum+=num;
    num--;
  }
}
countDown(10);