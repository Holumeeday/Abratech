import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {ShopComponent} from './shop/shop.component';
import {RefrenceComponent} from './refrence/refrence.component';
import { ServicesComponent } from './services/services.component';
import { CalloutComponent } from './callout/callout.component';


const routes: Routes = [
  {path:'home', component: HomeComponent},
  { path: 'about', component: AboutComponent },
  {path:'shop', component:ShopComponent},
  {path:'refrence', component:RefrenceComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  // { path: 'secondary', component: SecondaryComponent },
  {path:'services', component:ServicesComponent},
  {path:'callout', component:CalloutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
