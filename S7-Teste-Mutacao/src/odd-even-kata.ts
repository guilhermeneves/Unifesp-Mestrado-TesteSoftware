// ####### The OddEven Kata #######
// Write a program that prints numbers within specified range lets say 1 to 100. 
// If number is odd print 'Odd' instead of the number. If number is even 
// print 'Even' instead of number. Else print number [hint - if number is Prime].

// #### Lets divide into following steps: ####
// - Prints numbers from 1 to 100
// - Print "Even" instead of number, if the number is even, means divisible by 2
// - Print "Odd" instead of number, if the number is odd, means not divisible by 2 
//   but not divisible by itself too [hint - it should not be Prime]
// - Print number, if it does not meet above two conditions, means if number is Prime
// - Make method to accept any number of range [currently  we have 1 to 100]
// - Create a new method to check Odd/Even/Prime of a single supplied method

export function isEven (valor: number): boolean {
  let isEven = (valor > 2 && valor % 2 === 0) ? true : false
  return isEven
}

export function isOdd (valor: number): boolean {
  let isOdd = (valor >= 1 && valor % 2 !== 0) ? true : false
  return isOdd
}

export function isPrime (valor: number): boolean {
  for(let i = 2, s = Math.sqrt(valor); i <= s; i++)
    if(valor % i === 0) return false
  return valor > 1
}

export function getOddEvenKata (valor: number, valor2: number): (string | number)[] {
  let values: (string | number)[] = []; 
  
  for(let i = valor; i <= valor2; i++)
    if(isEven(i))
      values.push('Even')
    else if(isPrime(i))
      values.push(i)
    else if(isOdd(i))
      values.push('Odd')
    else
      values.push('Erro')
  return values
}
