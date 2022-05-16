export class Game {
        private Total = 0;
        buy(books: number){
            this.Total += books * 100;
        }
    get total() {
        return this.Total
    }
}