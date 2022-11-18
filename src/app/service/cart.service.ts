import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList: any = []
  public productList = new BehaviorSubject<any>([]);
  public emailSession : any;
  public search = new BehaviorSubject<string>("");

  constructor() { }
  getProducts() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product: any) {
    var isEdit = false;
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        a.quantity = a.quantity + 1;
        a.total = a.quantity * a.price;
        isEdit = true;
      }
    })
    if (!isEdit) {
      this.cartItemList.push(product);
      this.productList.next(this.cartItemList);
      this.getTotalPrice();
      console.log(this.cartItemList)
    }
  }

  trunc (x : any, posiciones = 0) {
    var s = x.toString()
    var l = s.length
    var decimalLength = s.indexOf('.') + 1
    var numStr = s.substr(0, decimalLength + posiciones)
    return Number(numStr)
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.total;
      grandTotal = this.trunc(grandTotal, 2);
    })
    return grandTotal;
  }
  removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItemList.splice(index, 1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllCart() {
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }

  addSession(email: any, firstName : any, lastName : any) {
    sessionStorage.setItem('email', email); 
    sessionStorage.setItem('name', firstName);
    sessionStorage.setItem('lname', lastName);
    this.productList.next(this.emailSession);
    this.productList.next(this.cartItemList);
  }

  logOutSession(){
    sessionStorage.setItem('email', ''); 
    sessionStorage.setItem('name', '');
    sessionStorage.setItem('lname', '');
    this.productList.next(this.emailSession);
    this.productList.next(this.cartItemList);
  }
}
