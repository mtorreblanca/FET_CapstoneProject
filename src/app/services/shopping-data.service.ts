import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingDataService {

  private itemsUrl = 'https://webmppcapstone.blob.core.windows.net/data/itemsdata.json';
  private cartItems = new BehaviorSubject([]);
  currentCartItems = this.cartItems.asObservable();
  constructor(
    private http: HttpClient,
  ) { }

  /** GET items from the server */
  getItems(): Observable<any> {
    return this.http.get<any>(this.itemsUrl);
  }

  addItem(item) {
    this.cartItems.next(this.cartItems.getValue().concat([item]));
  }
}
