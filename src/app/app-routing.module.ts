import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LanguageResolver } from './core/services/language-resolver';


import { AirlineComponent } from './features/airline/airline.component';
import { UsersComponent } from './features/users/users.component';
import { Customers } from './features/customers/customers';
import { CardFormComponent } from './features/card-form/card-form.component';

const routes: Routes = [ 
  { path: '', redirectTo: 'airline', pathMatch: 'full' },
  { path: 'airline', resolve: {Items:LanguageResolver}, component: AirlineComponent, data: {state: 'airline'} },
  { path: 'users', resolve: {Items:LanguageResolver}, component: UsersComponent, data: {state: 'users'} },
  { path: 'customers', resolve: {Items:LanguageResolver}, component: Customers, data: {state: 'customers'} },
  { path: 'card-form', resolve: {Items:LanguageResolver}, component: CardFormComponent, data: {state: 'card-form'} },
  { path: 'services', loadChildren: () => import('./features/services/services.module').then(m => m.ServicesModule) },
  { path: 'products', loadChildren: () => import('./features/products/products.module').then(m => m.ProductsModule) },

  //{ path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
