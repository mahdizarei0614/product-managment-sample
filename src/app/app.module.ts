import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import {UrlAddress} from './core/http/lib';
import {AppComponent} from './app.component';
import {CompanyListComponent} from './modules/management/pages/company-list/company-list.component';
import {AppRoutingModule} from './app-routing.module';
import {HeaderComponent} from './shared/layout/header/header.component';
import { CompaniesGridViewComponent } from './shared/components/companies-grid-view/companies-grid-view.component';
import { CompanyProductsListComponent } from './modules/management/pages/company-products-list/company-products-list.component';
import { ProductsGridViewComponent } from './shared/components/products-grid-view/products-grid-view.component';
import { FooterComponent } from './shared/layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    HeaderComponent,
    CompaniesGridViewComponent,
    CompanyProductsListComponent,
    ProductsGridViewComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    UrlAddress
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
