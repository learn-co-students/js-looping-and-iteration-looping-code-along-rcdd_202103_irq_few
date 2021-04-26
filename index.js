// Code your solutions in this file

const Cards = ["Lisa","Kaitlin","Jan"];
function  writeCards(Cards) {
const  newarray=[];
  for (let i = 0; i < Cards.length; i++) {
    newarray.push (`Thank you, ${Cards[i]}, for the wonderful surprise gift!`);

  }


  return newarray ;
}

 writeCards(Cards);
function  countDown(max) {

  for (let i = max; i >= 0; i--) {
    console.log(i);
  }
}
countDown (10);
