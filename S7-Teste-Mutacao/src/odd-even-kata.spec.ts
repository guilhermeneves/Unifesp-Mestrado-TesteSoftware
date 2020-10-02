import { isEven, isPrime, isOdd, getOddEvenKata } from './odd-even-kata'
import { assert } from 'console'

const expectedMainResultCT: (string | number)[] = ['Odd', 2, 3, 'Even', 5, 
'Even', 7, 'Even', 'Odd', 'Even', 11, 'Even', 13, 'Even', 'Odd', 'Even', 17, 
'Even', 19, 'Even' ];

describe('Validação Número Par', () => {
  test('Deve validar se um número é par e retornar true', () => {
    expect(isEven(6)).toEqual(true)
  })
})

describe('Validação Número Impar', () => {
  test('Deve validar se um número é ímpar e retornar true', () => {
    expect(isOdd(9)).toEqual(true)
  })
})

describe('Validação Número é Primo', () => {
  test('Deve validar se um número é primo e retornar true', () => {
    expect(isPrime(3)).toEqual(true)
  })
})

describe('Validação Lista saída da função principal', () => {
  test('Deve validar se a saída para o range selecionado é valido', () => {
    expect(getOddEvenKata(1,20)).toEqual(expectedMainResultCT)
  })
})