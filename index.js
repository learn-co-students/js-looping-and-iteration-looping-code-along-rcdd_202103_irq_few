// Code your solutions in this file
const countDown=(n)=>{
  while (n>=0){
    console.log(n);
    n--;
  }
}

countDown(10);

const writeCards=(names,event)=>{
  
  for(let i=0;i<names.length;i++){
    names[i]=`Thank you, ${names[i]}, for the wonderful ${event} gift!`;
  }
  
  return names;
}