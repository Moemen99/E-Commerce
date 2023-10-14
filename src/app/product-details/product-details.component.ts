import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { OwlOptions } from 'ngx-owl-carousel-o/public_api';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private _ActivatedRoute:ActivatedRoute ,private _ProductsService:ProductsService){}
productDetails:any;
productId :any ;
 ngOnInit(): void {
   this._ActivatedRoute.paramMap.subscribe((params)=>{
    console.log(params.get('id'));
    this.productId= params.get('id');
   })
   this._ProductsService.getProductDetails(this.productId).subscribe({
    next:(response) => this.productDetails= response.data,
    
   });
 }
 customOptions: OwlOptions = {
  loop: true,
  mouseDrag: false,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 4
    }
  },
  nav: true
}

}
