// Code your solutions in this file

function writeCards(names,events) {
    let messageArray=[];
    for (let i = 0; i <names.length; i++) {
      messageArray.push('Thank you, '+names[i]+', for the wonderful ' + events+' gift!');
    }
    return messageArray;
  }
  writeCards([ 'Lisa', 'Kaitlin', 'Jan' ], 'surprise');
function countDown(numb){
let i=numb;
while (i>=0){
    console.log(i--);
}
}
countDown(10);