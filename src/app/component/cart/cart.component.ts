import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;
  constructor(private cartService : CartService, private router : Router) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }

  goCheckout(){
    if(sessionStorage.getItem('name')!=''){
      this.router.navigate(['checkout']);
    }else{
      alert("Debes Iniciar Sesión");
    }
  }

}