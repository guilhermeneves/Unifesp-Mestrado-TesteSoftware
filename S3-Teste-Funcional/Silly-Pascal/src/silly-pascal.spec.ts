import { isValid } from './silly-pascal'
import { assert } from 'console'

describe('Silly Pascal IsValid ID', () => {
  test('Tamanho do Identificador (1 <= |ID| <= 6)', () => {
    expect(isValid('Ident1')).toEqual(true)
  })

  test('Tamanho do Identificador (|ID| > 6)', () => {
    expect(isValid('Identificador1')).toEqual(false)
  })

  test('Tamanho do Identificador (|ID| = 0)', () => {
    expect(isValid('')).toEqual(false)
  })

  test('Primeiro Caractere do Identificador deve ser uma letra', () => {
    expect(isValid('1Ident')).toEqual(false)
  })

  test('Contém apenas caracteres válidos (Letras e Números)', () => {
    expect(isValid('Ident#')).toEqual(false)
  })
})