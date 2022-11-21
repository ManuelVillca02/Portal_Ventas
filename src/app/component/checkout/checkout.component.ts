import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  public products : any = [];
  public venta : any = [];
  public grandTotal !: number;
  public first_name : any = sessionStorage.getItem('name');
  public last_name : any = sessionStorage.getItem('lname');
  public email : any = sessionStorage.getItem('email');
  constructor(private http: HttpClient, private cartService : CartService, private router : Router) { }

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
    this.venta.products =  this.products;
    this.venta.email = this.email;
    this.venta.first_name = this.first_name;
    this.venta.last_name = this.last_name;

    //this.http.post<any>("http://localhost:3500/resgitrar-venta", this.venta)
    //.subscribe(res=>{
    //  if(res.isOk==true){
    //    alert("Tu pedido se realizó con éxito");
    //  }else{
//
    //  }
    //},err=>{
    //  alert("wrong");
    //})
  }

}
