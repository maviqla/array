let numbers = []

let first
let second
let third
let fourth


//Captura o valor do array//
function saveNumber() {
  first = parseInt(document.getElementById("first").value)
  second = parseInt(document.getElementById("second").value)
  third = parseInt(document.getElementById("third").value)
  fourth = parseInt(document.getElementById("fourth").value)

  numbers = [first, second, third, fourth];
  document.getElementById('print').innerHTML = numbers
  console.log(numbers);

}

//Inverte as posições//
function invertArray() {
  first = parseInt(document.getElementById("first").value)
  second = parseInt(document.getElementById("second").value)
  third = parseInt(document.getElementById("third").value)
  fourth = parseInt(document.getElementById("fourth").value)
  numbers = [fourth, third, second, first]
  
  document.getElementById('print').innerHTML = numbers
  console.log(numbers)
}

//Ordem Crescente - Bubble-sort//
function crescentArray(numbers) {

  let first = parseInt(document.getElementById("first").value)
  let second = parseInt(document.getElementById("second").value)
  let third = parseInt(document.getElementById("third").value)
  let fourth = parseInt(document.getElementById("fourth").value)

  numbers = [first, second, third, fourth]

  for (let j = 0; j < numbers.length - 1; j++) {
    for (let i = 0; i < numbers.length - 1; i++) {
      if (numbers[i] > numbers[i + 1]) {
        [numbers[i], numbers[i + 1]] = [numbers[i + 1], numbers[i]]
      }
    }

  }
  document.getElementById('print').innerHTML = numbers
  console.log(numbers)
  return numbers;




}
