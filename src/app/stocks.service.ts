import {Injectable} from '@angular/core';
 
@Injectable()
export class StocksService{
    getStocks() : string [] {
        return ['APPLE', 'IBM', 'GOOGLE'];
    }
}