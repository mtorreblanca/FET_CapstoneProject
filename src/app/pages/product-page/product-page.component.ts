import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ShoppingDataService } from 'src/app/services/shopping-data.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  items$: any;
  itemFound: any;

  newCartItem: any;
  quantity: any;
  constructor(private route: ActivatedRoute,
              private data: ShoppingDataService,
              private location: Location
              ) { }

  ngOnInit() {
    this.getItem();
  }

  getItem() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    this.data.getItems()
      .subscribe(items => {
        this.items$ = items;
        items.forEach( res => {
          res.subcategories.forEach( res1 => {
            const find = res1.items.find(t => t.name === id);
            if (find) {
              this.itemFound = find;
              console.log(this.itemFound);
              console.log(this.itemFound.name);
            }
          });
        });
      });
  }

  goBack() {
    this.location.back();
  }

  addToCart() {
    this.newCartItem = {
      name: this.itemFound.name,
      details: this.itemFound.description,
      price: this.itemFound.price,
      quantity: this.quantity,
      imagelink: this.itemFound.imagelink
    };
    this.data.addItem(this.newCartItem);
  }

}
