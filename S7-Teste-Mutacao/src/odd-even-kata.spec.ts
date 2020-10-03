import { isEven, isPrime, isOdd, getOddEvenKata } from './odd-even-kata'
import { assert } from 'console'

const expectedMainResultCT: (string | number)[] = ['Odd', 2, 3, 'Even', 5, 
'Even', 7, 'Even', 'Odd', 'Even', 11, 'Even', 13, 'Even', 'Odd', 'Even', 17, 
'Even', 19, 'Even' ]

const expectedMainResultCT2: (string | number)[] = ['Erro','Erro','Odd', 2, 3]

describe('Validação Número Par', () => {
  test('Deve validar se um número é par e retornar true', () => {
    expect(isEven(6)).toEqual(true)
  })
})

describe('Validação Número Impar', () => {
  test('Deve validar se um número é ímpar e retornar true', () => {
    expect(isOdd(9)).toEqual(true)
  })
  // Novo caso de teste após rodar teste mutante
  test('Deve validar se um número não é ímpar e retornar false', () => {
    expect(isOdd(2)).toEqual(false)
  })
  // Novo caso de teste após rodar teste mutante
  test('Deve retornar falso se o número < 1', () => {
    expect(isOdd(-5)).toEqual(false)
  })
})

describe('Validação Número é Primo', () => {
  test('Deve validar se um número é primo e retornar true', () => {
    expect(isPrime(3)).toEqual(true)
  })
  // Novo caso de teste após rodar teste mutante
  test('Deve validar se um número não é primo e retornar false', () => {
    expect(isPrime(4)).toEqual(false)
  })

  // Novo caso de teste após rodar teste mutante
  test('Deve retornar falso para valor = 0', () => {
    expect(isPrime(0)).toEqual(false)
  })
  // Novo caso de teste após rodar teste mutante
  test('Deve retornar falso para valores < 0', () => {
    expect(isPrime(-1)).toEqual(false)
  })
})

describe('Validação Lista saída da função principal', () => {
  test('Deve validar se a saída para o range selecionado é valido', () => {
    expect(getOddEvenKata(1,20)).toEqual(expectedMainResultCT)
  })
  // Novo caso de teste após rodar teste mutante
  test('Deve validar se a saída para o range com nums negativos é válido', () => {
    expect(getOddEvenKata(-1,3)).toEqual(expectedMainResultCT2)
  })
  
})