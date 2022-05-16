import { Game } from './game';

describe('Game', () => {
  it('should create an instance', () => {
    expect(new Game()).toBeTruthy();
  });

  test('init test', () => {
    const game = new Game();
    game.buy(1,0);
    expect(game.total).toBe(100);
  });

  test('second test', () => {
    const game = new Game();
    game.buy(1,1);
    expect(game.total).toBe(190);
  });
});
