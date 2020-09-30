import { Game } from './game'
import { assert } from 'console'

let g: Game = new Game()

beforeEach(() => {
  g = new Game()
})

describe('Bowling Game', () => {
  test('Should score 0 for gutter game', () => {
    Array(20).fill(0).map(() => { g.roll(0) })
    expect(g.score).toBe(0)
  })

  test('should score 20 for all ones game', () => {
    Array(20).fill(0).map(() => { g.roll(1) })
    expect(g.score).toBe(20)
  })
})

function _