export class Game {
        private Total = 0;
        private count = 0;
        buy(book1: number,book2: number){
            this.Total += (book1+book2)*100;
            this.count = book1 + book2;
            if(this.count > 1){
                this.Total = this.Total * (1-(this.count-1)*0.05);
            }

        }
    get total() {
        return this.Total;
    }
}