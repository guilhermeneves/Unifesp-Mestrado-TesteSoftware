export class Game {
  private rolls: number[] = Array(21).fill(0)
  private currentRoll: number = 0


  score (): number {
    let score = 0
    score = this.rolls.reduce((partial, curr) => partial + curr , 0)
    return score
  }

  roll (pins: number): void {
    this.rolls[this.currentRoll++] = pins
  }

}
