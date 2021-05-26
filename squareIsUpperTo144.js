let numbersArray=[];

for (let i=0; i<20; i++){
numbersArray.push(Math.floor(Math.random() * 21));
}


function squareIsUpperTo144 (numbers){

for (let i=0; i<=numbers.length; i++){
  if (numbers[i] ** 2 > 144){
    console.log(`The number ${numbers[i]} has a square upper to 144`)
  }
}
}

console.log(numbersArray);
squareIsUpperTo144(numbersArray);