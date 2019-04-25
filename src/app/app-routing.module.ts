import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ShoppingPageComponent } from './pages/shopping-page/shopping-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';

const routes: Routes = [

  //  rubric13 The home page is accessible at http://localhost:8080/#
  { path: '', component: HomePageComponent},
  //  rubric34 The home page is accessible at http://localhost:8080/#/shopping
  { path: 'shopping', component: ShoppingPageComponent },
  { path: 'product/:id', component: ProductPageComponent },
  { path: 'cart', component: CartPageComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
