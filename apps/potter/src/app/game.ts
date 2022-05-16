export class Game {
        private Total = 0;
        private count = 0;
        buy(book1: number,book2: number,book3: number,book4: number,book5: number){
            let books: number[] = [book1,book2,book3,book4,book5];
            this.count = this.SumBook(books);
            this.Total += this.count * 100;
            if( this.count > 1){
            this.Total = this.Total*(1-(this.count-1)*0.05);
            }

        }
    get total() {
        return this.Total;
    }
    public SumBook(arr:number[]){
        return arr.reduce((a,b)=>a+b);  
    }
}