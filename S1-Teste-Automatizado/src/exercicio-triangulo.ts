// ####### Exercicio Triangulo #######
// ####### Teste automatizado  #######
// ####### Jest + Typescript   #######

export class Triangle {
  private side1: number
  private side2: number
  private side3: number

  constructor (side1: number, side2: number, side3: number) {
    if (side1 <= 0 || side2 <= 0 || side3 <= 0 ||
        side1 + side2 <= side3 ||
        side2 + side3 <= side1 ||
        side1 + side3 <= side2) {
      throw new Error('Triangulo Invalido')
    }
    this.side1 = side1
    this.side2 = side2
    this.side3 = side3
  }

  triangleType (): string {
    return (this.side1 === this.side2 && this.side2 === this.side3) && 'equilatero'
           || (this.side1 === this.side2 || this.side1 === this.side3 
           || this.side2 === this.side3) && 'isosceles' || 'escaleno'
  }    
}
