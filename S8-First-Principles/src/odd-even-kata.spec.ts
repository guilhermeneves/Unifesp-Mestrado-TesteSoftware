import { isEven, isPrime, isOdd, getOddEvenKata } from './odd-even-kata'
import { assert } from 'console'
import readline from 'readline';

let notIsolated: boolean;
const expectedMainResultCT: (string | number)[] = ['Odd', 2, 3, 'Even', 5, 
'Even', 7, 'Even', 'Odd', 'Even', 11, 'Even', 13, 'Even', 'Odd', 'Even', 17, 
'Even', 19, 'Even' ]

const expectedMainResultCT2: (string | number)[] = ['Erro','Erro','Odd', 2, 3]

describe('Validação Número Par', () => {
  test('Deve validar se um número é par e retornar true', () => {
    expect(isEven(6)).toEqual(true)
  })
  // ### 1. Teste Fere Fast Principle
  test.each(Array.from({length: 100000000000}, (_, i) => i).filter(n => n % 2))(
    '.add(%i, %i)',
    (a, expected) => {
      expect(a).toBe(expected);
    },
  )
})
// ### 2. Teste Fere Isolated Principle
describe('Validação Número Impar', () => {
  test('Deve validar se um número é ímpar e retornar true', () => {
    notIsolated = isOdd(9)
    expect(notIsolated).toEqual(true)
  })

  test('Deve validar se um número não é ímpar e retornar false', () => {
    notIsolated = !notIsolated
    expect(notIsolated).toEqual(false)
  })
  // ### 3. Teste fere Repeatable Principle
  test('Deve retornar falso se o número < 1', () => {
    let repeatablePrinciple: number = Math.round(Math.random());
    expect(isOdd(repeatablePrinciple)).toEqual(false)
  })
})

describe('Validação Número é Primo', () => {
  test('Deve validar se um número é primo e retornar true', () => {
  let resp: string = "";

  let leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  // ### 4. Teste fere Self-validating Principle (Interpretacao Manual do Teste)
  leitor.question("Insira um numero primo para testar!\n", function(answer) {
    let resp: string = answer;
    leitor.close();
  });
    expect(parseInt(resp)).toEqual(true)
  })
  // ### 5. Teste fere Timely Principle (Implementado o Sistema sem os Testes)
  test('Deve validar se um número não é primo e retornar false', () => {
    // # TODO
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
