function writeCards(names, eventName) {
  let arr = [];
  for (let i = 0; i < names.length; i++) {
    arr[i] = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
  }
  return arr;
}


function countDown(n){
  let i = 10;
  while(i >=0){
    console.log(i);
    i--;
  }
}
countDown(10);
