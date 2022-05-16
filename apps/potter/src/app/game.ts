export class Game {
        private Total = 0;
        buy(book1: number,book2: number,book3: number,book4: number,book5: number){
            let books: number[] = [book1,book2,book3,book4,book5];
            this.TotalDiscount(books);
        }
        
    get total() {
        return this.Total;
    }
    public SumBook(arr:number[]){
        return arr.reduce((a,b)=>a+b);  
    }
    public TotalDiscount(arr:number[]){
        let discount: number[] = [0.95,0.9,0.85,0.8,0.75];
        while(this.SumBook(arr) > 0){
            var type_count:number = 0;
            var temp_price:number = 0;
            for(var i = 0;i<arr.length;i++) { 
                if(arr[i] > 0){
                    arr[i]--;
                    type_count++;
                }
             }
            if(type_count > 1){
                temp_price += type_count * 100 * discount[type_count-2];
            }
            else{
                temp_price += type_count * 100; 
            }
            this.Total += temp_price;
        }
    }
}