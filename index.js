// Code your solutions in this file
function writeCards(array, event){
  const thankYouMessage = [];
  let thankYou ;
  for (let i = 0; i < array.length; i++){
       thankYou = `Thank you, ${array[i]}, for the wonderful ${event} gift!`;
      thankYouMessage.push(thankYou);
  }
  return thankYouMessage;
  
}


function countDown(countDown){
  
  while(countDown >= 0){
    console.log(countDown);
    countDown--;
  }
  
}


writeCards(["Lisa", "Kaitlin", "Jan"], 'surprise');
countDown(10);
