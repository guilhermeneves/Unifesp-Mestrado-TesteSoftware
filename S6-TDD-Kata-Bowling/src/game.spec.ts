import { Game } from './game'
import { assert } from 'console'

describe('Bowling Game', () => {
  test('Should score 0 for gutter game', () => {
    const g: Game = new Game()
    //Array(20).fill(0).map(() => { g.roll() })
    expect(g.score()).toBe(0)
  })
})