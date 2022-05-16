import { Game } from './game';

describe('Game', () => {
  let game: Game;
  beforeEach(() => {
    game = new Game();
  });

  it('should create an instance', () => {
    expect(new Game()).toBeTruthy();
  });

  test('init test', () => {
    game.buy(1,0,0,0,0);
    expect(game.total).toBe(100);
  });

  test('second test', () => {
    game.buy(1,1,0,0,0);
    expect(game.total).toBe(190);
  });

  test('third test', () => {
    game.buy(1,2,0,0,0);
    expect(game.total).toBe(290);
  });
  test('fourth test', () => {
    game.buy(1,2,1,1,1);
    expect(game.total).toBe(475);
  });
});
