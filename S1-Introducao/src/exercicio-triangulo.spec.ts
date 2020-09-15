import { Triangle } from './exercicio-triangulo'

import { assert } from 'console'

describe('Class Triângulo', () => {
  test('Verifica se o triângulo é válido (1 lado > soma de dois lados)', () => {
    expect(() => { 
      new Triangle(15, 5, 3) 
    }).toThrow('Triangulo Invalido')
  })    

  test('Verifica se o triângulo é válido (Lados negativos)', () => {
    expect(() => { 
      new Triangle(-5, -5, -5) 
    }).toThrow('Triangulo Invalido')
  })    

  test('Verifica se um triangulo equilatero é classificado corretamente', () => {
    let triangle = new Triangle(3, 3, 3)
    let tType = triangle.triangleType()
    expect(tType).toEqual('equilatero')
  })

  test('Verifica se um triangulo isosceles é classificado corretamente', () => {
    let triangle = new Triangle(8, 3, 8)
    let tType = triangle.triangleType()
    expect(tType).toEqual('isosceles')
  })

  test('Verifica se um triangulo escaleno é classificado corretamente', () => {
    let triangle = new Triangle(5, 3, 4)
    let tType = triangle.triangleType()
    expect(tType).toEqual('escaleno')
  })
})