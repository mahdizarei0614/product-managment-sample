import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyListComponent} from './modules/management/pages/company-list/company-list.component';
import {CompanyProductsListComponent} from './modules/management/pages/company-products-list/company-products-list.component';

const routes: Routes = [
  { path: 'company-list', component: CompanyListComponent},
  { path: 'company-list/:id', component: CompanyProductsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
