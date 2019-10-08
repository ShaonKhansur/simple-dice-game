const diceDom = document.querySelector(".dice");
diceDom.addEventListener("click", diceClick);
const numbers = [];


function diceClick() {
  const randomNumber = Math.ceil(Math.random()*6);
  diceDom.src = 'dice-'+randomNumber+'.png'; 
  console.log(randomNumber);
  numbers.push(randomNumber);

  for(let i =numbers.length; i>=0; i--) {
    if((numbers[i]===numbers[i-1]) && (numbers[i-1] === numbers[i-2])) {
      const score = numbers.reduce((a,b)=> {return a+b})
      alert(numbers[i]+' repeated 3 times, your score '+score);
      console.log(numbers);
    } else if((numbers[i] * numbers[i-1]) ===(numbers[i]* numbers[i])) {
      const score = numbers.reduce((a,b)=> {return a+b})
      alert(numbers[i]+' repeated 2 times, your score '+score);
      console.log(numbers);
    }
  }

}
// 1*1 = 1
// 2*2 = 4
// 3*3 = 9
// 4*4 = 16
// 5*5 = 25
// 6*6 = 36

// for(let i =arr.length; i>=0; i--) {
//   console.log(arr[i]);
//   for(let j = arr.length-1; j>=0; j--) {
//     console.log(arr[j]);
//     for(let k = arr.length-2; k>=0; k--) {
//       if((arr[i] === arr[j]) && (arr[j] === arr[k])) {
//         alert(arr[i]+'repeated 3 times');
//         break;
//       }
//     }
//   }
// }