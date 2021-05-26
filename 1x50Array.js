let randomNumbersArray = [];

for (let i = 0; i < 50; i++) {
  randomNumbersArray.push(Math.floor(Math.random() * 101));
}

function eachNumberInTheirPlace(randomNumbers) {

  for (i = 0; i < randomNumbers.length; i++) {

    if (i == [9] || i == [29] || i == [49]) {
      console.log(`${i} - The element ${randomNumbers[i]} is in the position ${i} and their square is ${randomNumbers[i] ** 2}. `)
    }

    else if (i == [19] || i == [39]) {

      if (randomNumbers[i] % 5 == 0)
        console.log(`${i} - The element ${randomNumbers[i]} is in the position ${i} and its a multiple of 5.`)

      else {
        console.log(`${i} - The element ${randomNumbers[i]} is in the position ${i} and it is not a multiple of 5`)
      }
    }

    else if (randomNumbers[i] % 2 == 0) {
      if (randomNumbers[i] == randomNumbers[0]) {
        console.log(`${i} - ${randomNumbers[i]} added with itself equals to ${randomNumbers[i] + randomNumbers[i]}`)
      }
      else {
        console.log(`${i} - ${randomNumbers[i]} added with the past element ${randomNumbers[i - 1]} equals to ${randomNumbers[i] + randomNumbers[i - 1]}.`)
      }
    }

    ///*
    else if (randomNumbers[i] % 2 > 0) {

      let isPrime = true;

      if (randomNumbers[i] == 1) {
        console.log(`${i} - ${randomNumbers[i]} and is neither prime nor composite number.`);
      }

      else if (randomNumbers[i] > 1) {

        for (let j = 2; j < randomNumbers[i]; j++) {
          if (randomNumbers[i] % j == 0) {
            isPrime = false;
            break;
          }
        }

        if (isPrime) {
          console.log(`${i} - ${randomNumbers[i]} is a prime number`)
        }

        else {
            console.log(`${i} - ${randomNumbers[i]}`)
          }
        }
      }
    }
    //*/


  }


console.log(randomNumbersArray);
eachNumberInTheirPlace(randomNumbersArray);