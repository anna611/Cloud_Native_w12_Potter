export class Game {
        private Total = 0;
        buy(book1: number,book2: number){
            this.Total += book1 * 100;
        }
    get total() {
        return this.Total;
    }
}