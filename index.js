// Code your solutions in this file
function writeCards(array,name){
  let arr=[];
  for (let i=0;i<array.length;i++){
    arr.push( "Thank you, "+array[i]+", for the wonderful "+name+" gift!");
  }
  return arr;
  
}
writeCards(["Ada", "Brendan", "Ali"], "birthday");

function countDown(num){
  let i=0;
  while(i<=num){
   console.log(num);
   num--;
  }
}
countDown(10);
