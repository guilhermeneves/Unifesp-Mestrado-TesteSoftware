import { calculaIR } from './imposto-renda'
import { assert } from 'console'

describe('Cálculo de imposto de renda', () => {
  test('deve calcular corretamente para salarios maiores do que 2000.00', () => {
    expect(calculaIR(2020.00)).toEqual(154.0)
  })
})

// Caso de teste para o nó #1 não identificado inicialmente
describe('Cálculo de imposto de renda', () => {
  test('deve calcular corretamente para salarios maiores do que 1000.00 e menor igual a 2000', () => {
    expect(calculaIR(1100.00)).toEqual(15.0)
  })
})

// Caso de teste para o nó #2 não identificado inicialmente
describe('Cálculo de imposto de renda', () => {
  test('deve calcular corretamente para salarios maiores do que 3000.00', () => {
    expect(calculaIR(5000.00)).toEqual(750.0)
  })
})
