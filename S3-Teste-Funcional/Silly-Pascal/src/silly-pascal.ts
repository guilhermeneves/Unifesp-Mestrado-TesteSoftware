// ####### Silly Pascal #######
// O programa deve determinar se um identificador é válido ou não em 
// Silly Pascal (uma variante do Pascal). Um identificador válido deve 
// <<começar com uma letra e conter apenas letras ou dígitos>>. Além disso, 
// <<deve ter no mínimo um caractere e no máximo seis caracteres de comprimento>>

export function isValid(id: string): boolean {
  let sillyPascalPattern = /^(?=.{1,6}$)[a-zA-Z][a-zA-Z0-9]*$/

  return id.match(sillyPascalPattern) ? true : false
}
