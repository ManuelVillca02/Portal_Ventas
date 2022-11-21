import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { ProductsComponent } from 'src/app/component/products/products.component';
import { CartService } from 'src/app/service/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.component.html',
  styleUrls: ['./detailproduct.component.scss']
})
export class DetailproductComponent implements OnInit {

  public detailList: any;
  public filterCategory: any;
  public product: any;
  constructor(private api: ApiService, private cartService: CartService, private router : Router) { }

  ngOnInit(): void {
    this.api.getProduct()
      .subscribe(res => {
        this.detailList = res;
        this.filterCategory = res;
        this.detailList.map((a: any, index: any) => {

          console.log(a.id);
          if (a.id == sessionStorage.getItem('detailid')) {
            this.product = a;

          }
          Object.assign(a, { quantity: 1, total: a.price });
        });
      });

  }

  addtocart(item: any) {
    this.cartService.addtoCart(item);
    alert("Producto añadido al carrito");
    this.router.navigate(['products']);
  }

  backClose(){
    this.router.navigate(['products']);
  }

}
