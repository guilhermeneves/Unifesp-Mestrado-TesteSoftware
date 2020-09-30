import { Game } from './game'
import { assert } from 'console'

describe('Bowling Game', () => {
  test('Should score 0 for gutter game', () => {
    const g: Game = new Game()
    Array(20).fill(0).map(() => { g.roll(0) })
    expect(g.score).toBe(0)
  })

  test('should score 20 for all ones game', () => {
    const g: Game = new Game()
    Array(20).fill(0).map(() => { g.roll(1) })
    expect(g.score).toBe(20)
  })
})