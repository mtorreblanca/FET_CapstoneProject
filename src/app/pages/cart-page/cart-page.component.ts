import { Component, OnInit } from '@angular/core';
import { ShoppingDataService } from 'src/app/services/shopping-data.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  cartItems: any;
  subtotal: any;
  formValid: any = true;
  totalCost: number;

  constructor(private data: ShoppingDataService) { }

  ngOnInit() {
    this.data.currentCartItems.subscribe(items => {
      this.cartItems = items;
      this.subtotalPrice();
    });
  }

  updateQuantity(quantity, index) {
    this.cartItems[index].quantity = quantity;
    this.subtotalPrice();
  }

  removeItem(index) {
    this.cartItems.splice(index, 1);
    this.subtotalPrice();
  }

  subtotalPrice() {
    this.subtotal = 0;
    this.cartItems.forEach(item => {
      this.subtotal = this.subtotal + item.price * item.quantity;
    });
  }

  onSubmit(form) {
    this.formValid = form.valid;
    this.totalCost = this.subtotal * .08 + 5.99;
    console.log(this.totalCost);
    if (form.valid) {
      // rubric51 The checkout button should create an alert based on the users shipping details and total cost.
      alert('Shipping Details:\n' + form.value.firstname
        + '\n' + form.value.lastname
        + '\n' + form.value.address
        + '\n' + form.value.city
        + '\n' + form.value.phone
        + '\nTotal Cost: $' + this.totalCost);
    }
  }

}
