document.querySelector("#dice").addEventListener("click", diceClick);
const numbers = [];

function diceClick() {
  let randomNumber = Math.ceil(Math.random() * 6);

  if(randomNumber !== 6) {
    console.log(randomNumber);
    numbers.push(randomNumber);
  } else {
    console.log('Six');
    numbers.push(randomNumber);
    for (let i = 0; i <= numbers.length; i++) {
      if(numbers[i] + numbers[i + 1] === 12) {
        let score = numbers.reduce((a, b) => {return a + b});
        alert('Lose!! 6 repeated! Your Score is ' + score);
        console.log(numbers);
      }
    }
  }
}

