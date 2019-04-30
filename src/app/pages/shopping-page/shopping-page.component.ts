import { Component, OnInit } from '@angular/core';
import { ShoppingDataService } from 'src/app/services/shopping-data.service';

@Component({
  selector: 'app-shopping-page',
  templateUrl: './shopping-page.component.html',
  styleUrls: ['./shopping-page.component.css']
})
export class ShoppingPageComponent implements OnInit {

  itemCategory = 'Baby Care';
  itemsFound: any;
  itemsTotal: any;
  itemsStock: any = [];
  forStock: false;
  constructor(private data: ShoppingDataService) { }

  ngOnInit() {
    this.getItems(this.itemCategory);
  }


  getItems(itemCategory) {
    this.itemCategory = itemCategory;
    this.data.getItems()
      .subscribe(items => {
        items.forEach(res => {
          const find = res.subcategories.find(t => t.name === itemCategory);
          if (find) {
            this.itemsFound = find;
            this.itemsTotal = this.itemsFound.items.length;
            if (this.forStock) {
              this.onStock();
            }
          }
        });
      });
  }
  // rubric30 Clicking on the “Add” button inside a grid cell should add 1 unit of the associated product to the shopping cart
  addToCart(item) {
    const newCartItem = {
      name: item.name,
      details: item.description,
      price: item.price,
      quantity: 1,
      imagelink: item.imagelink
    };
    this.data.addItem(newCartItem);
  }

  onStock() {
    if (this.forStock === false) {
      this.getItems(this.itemCategory);
    } else {
      this.itemsStock = [];
      this.itemsFound.items.forEach(item => {
        if (item.stock > 0) {
          this.itemsStock.push(item);
          // rubric29 If the “In Stock Only” toggle is checked, only items that are in stock should be shown in the products grid.
          this.itemsFound.items = this.itemsStock;
        }
      });
    }
  }
}
