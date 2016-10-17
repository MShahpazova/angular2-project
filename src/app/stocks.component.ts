import {StocksService} from './stocks.service';
import {Component} from '@angular/core';
@Component({
    selector: 'stocks',
    template: `<h1>Stocks</h1>
    {{title}}
    Test
    <ul>
    <li *ngFor='let stock of stocks'>
        {{stock}}
    </li>
    </ul>`,
})

export class StocksComponent{

    title = 'List of stocks: ';
    stocks;
    // stocks =['Apple', 'IBM', 'GOOG'];

    /**
     *
     */
    constructor(stocksService : StocksService) {
        this.stocks = stocksService.getStocks();
    }
}
