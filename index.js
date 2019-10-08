const diceDom = document.querySelector(".dice");
diceDom.addEventListener("click", diceClick);
const numbers = [];
let randomNumber;
const previousNumber = [randomNumber];

function diceClick() {
  randomNumber = Math.ceil(Math.random() * 6);
  diceDom.src = "dice-" + randomNumber + ".png";

  if (previousNumber.length === 1) {
    previousNumber.pop();
    previousNumber.push(randomNumber);
  } else {
    previousNumber.push(randomNumber);
  }
  // console.log(previousNumber);
  if (randomNumber !== 6) {
    console.log(randomNumber);
    numbers.push(randomNumber);
  } else {
    console.log("Six");
    numbers.push(randomNumber);
    for (let i = 0; i <= numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
        for (let k = j + 1; k < numbers.length; k++) {
          if((numbers[i] && numbers[j])=== (numbers[j] && numbers[k])) {
            alert(numbers[i]+' repeated three times');
            console.log(numbers);
            break;
          }
        }
      }
    }
  }
}
