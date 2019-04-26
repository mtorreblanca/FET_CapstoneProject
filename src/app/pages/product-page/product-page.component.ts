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
        console.log(this.items$);
      });
  }

}
