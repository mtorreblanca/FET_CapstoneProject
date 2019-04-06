import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ShoppingPageComponent } from './pages/shopping-page/shopping-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'shopping', component: ShoppingPageComponent},
  {path: 'cart', component: CartPageComponent},
  {path: 'about', component: AboutUsComponent},
  {path: 'contact', component: ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
