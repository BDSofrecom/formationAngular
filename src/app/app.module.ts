import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { MyNavBarComponent } from './components/my-nav-bar/my-nav-bar.component';
import { MyProductListComponent } from './components/my-product-list/my-product-list.component';
import { MyFooterComponent } from './components/my-footer/my-footer.component';
import { FiltreProductsPipe } from './pipes/filtre-products.pipe';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes = [
  {path: '', component: WelcomeComponent},
  {path: 'list', component: MyProductListComponent},
  {path: '**', component: NotFoundComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    MyNavBarComponent,
    MyProductListComponent,
    MyFooterComponent,
    FiltreProductsPipe,
    WelcomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
