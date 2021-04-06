// Code your solutions in this file

function writeCards(names, eventName) {
  
  let arr = [];
  
  for (let i = 0; i < names.length; i++) {
    
    arr[i] = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
    
    
  }
  
  return arr;
  
}

writeCards([ 'Lisa', 'Kaitlin', 'Jan' ], 'surprise' );


function countDown(num) {
  
  while(num >= 0){
    console.log(num);
    num--;
  }
  
}

countDown(10);
