/*let randomNumbersArray=[];

for (let i=0; i<50; i++){
randomNumbersArray.push(Math.floor(Math.random() * 101));
}

function howManyEvens(randomNumbers){

  let evenNumbers = []

  for (i = 0; i <= randomNumbers.length; i++){
    if (randomNumbers[i] % 2 === 0){
      evenNumbers.push(randomNumbers[i])
    }
  }

  console.log(`There is ${evenNumbers.length} even elements in the array.`)
}

console.log(randomNumbersArray);
howManyEvens(randomNumbersArray);
*/

let randomNumbersArray=[];

for (let i=0; i<50; i++){
randomNumbersArray.push(Math.floor(Math.random() * 101));
}

function howManyEvens(randomNumbers){

  let evenNumbers = 0

  for (i = 0; i < randomNumbers.length; i++){
    if (randomNumbers[i] % 2 === 0){ 
      evenNumbers = evenNumbers + 1; 
    }
  }

  console.log(`There is ${evenNumbers} even elements in the array.`)
}

console.log(randomNumbersArray);
howManyEvens(randomNumbersArray);