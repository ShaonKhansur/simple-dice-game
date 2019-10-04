document.querySelector("#dice").addEventListener("click", diceClick);
const numbers = [];

function diceClick() {
  let randomNumber = Math.ceil(Math.random() * 6);

  if (randomNumber) {
    numbers.push(randomNumber);
    if (randomNumber === 6) {
      console.log("Six");
    } else {
      console.log(randomNumber);
      if (numbers) {
        for (let i = 0; i < numbers.length; i++) {
          if (numbers[i] + numbers[i + 1] === 12 ) {
            let score = numbers.reduce((a, b) => {
              return a + b;
            });
            alert("You Loser, Repeated Six. your Score: " + score);
            console.log(numbers);
          }
        }
      }
    }
  }
}

//দুম
// function diceClick() {
//   let randomNumber = Math.ceil(Math.random() * 6);

//   if(randomNumber === 6) {
//     numbers.push(6);
//     console.log('Six');
//     if(numbers) {
//       for(let i = 0; i <= numbers.length; i++) {
//         if ((numbers[i] + numbers[i + 1]) === 12) {
//           let score = numbers.reduce((a, b) => { return a + b })
//           alert('You Loser, Repeated Six. your Score: ' + score);
//           console.log(numbers);
//         }
//       }
//     }
//   } else {
//     console.log(randomNumber);
//   }
// }
// async function getData() {
//   let result = await fetch('https://countriesnode.herokuapp.com/v1/countries');
//   let countries = await result.json();
//   document.querySelector('#list').innerHTML = countries.map(country => {
//     return( `<ul>
//           <li>Country Name: ${country.name}, Currency: ${country.currency}</li>
//     </ul>`)
//   })
//   countries.map(country => console.log(`Country: ${country.name}, Currency: ${country.currency}`))
// };

// getData();
