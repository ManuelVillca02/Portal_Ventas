import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  public products : any = [];
  public grandTotal !: number;
  public first_name : any = sessionStorage.getItem('name');
  public last_name : any = sessionStorage.getItem('lname');
  public email : any = sessionStorage.getItem('email');
  constructor(private cartService : CartService, private router : Router) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }

  checkoutGo(){
    alert("Tu pedido se realizó con éxito");
    this.cartService.removeAllCart();
    this.router.navigate(['cart']);
  }

}
