import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyNavBarComponent } from './components/my-nav-bar/my-nav-bar.component';
import { MyProductListComponent } from './components/my-product-list/my-product-list.component';
import { MyFooterComponent } from './components/my-footer/my-footer.component';
import { FiltreProductsPipe } from './pipes/filtre-products.pipe';



@NgModule({
  declarations: [
    AppComponent,
    MyNavBarComponent,
    MyProductListComponent,
    MyFooterComponent,
    FiltreProductsPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
