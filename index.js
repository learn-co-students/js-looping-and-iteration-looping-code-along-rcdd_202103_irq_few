// Code your solutions in this file

function writeCards(cards, event){
  let finalEvent = [];
  let eventName ;
  for (let i=0; i<cards.length; i++)
  {
    eventName=`Thank you, ${cards[i]}, for the wonderful ${event} gift!`;
    finalEvent.push(eventName);
  }
  return finalEvent;
} 

writeCards(["Lisa", "Kaitlin", "Jan"], "surprise");

function countDown(number){
   
   while(number>=0)
   {
     console.log(number);
     number--;
   }

}
countDown(10);