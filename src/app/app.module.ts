import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {SearchResultsComponent} from './search-results/search-results.component';
import {SearchResultComponent} from './search-result/search-result.component';
import {CartComponent} from './cart/cart.component';
import {BookDetailsComponent} from './book-details/book-details.component';
import {RouterModule, Routes} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {CartItemNumberService} from './cart-item-number.service';

const appRoutes: Routes = [
  {path: '', component: SearchResultsComponent},
  {path: 'results', component: SearchResultsComponent},
  {path: 'details', component: BookDetailsComponent},
  {path: 'cart', component: CartComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchResultsComponent,
    SearchResultComponent,
    CartComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    CartItemNumberService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
