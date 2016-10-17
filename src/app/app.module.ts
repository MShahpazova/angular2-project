import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MutualfundsComponent } from './mutualfunds/mutualfunds.component';
import {StocksComponent} from './stocks.component';
import {HighlightDirective} from './highlight.directive';
import {StocksService} from './stocks.service';
import { DateFormatterPipe } from './date-formatter.pipe';
import {routing} from './app.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import {CurrencyService} from './currency.service';
import { BondsDirective } from './bonds.directive';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbAlertConfig} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    MutualfundsComponent,
    StocksComponent,
    HighlightDirective, 
    DateFormatterPipe,
    DashboardComponent,
    BondsDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    NgbModule
    
  ],
  providers: [StocksService, CurrencyService, NgbAlertConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
