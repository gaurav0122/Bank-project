import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { Product } from '../model/product.model';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css']
})
export class ProductHomeComponent implements OnInit {

  categoryId: number;
  products: Product[];
  errorMsg: string;
  cid:number;

  constructor(private productService: ProductService, private actRoute: ActivatedRoute,
              private appservice: AppService) {
  }

  ngOnInit(): void {
    this.actRoute.params.subscribe(params => 
      { 
        this.cid=params.cid;
        this.productService.getAllProducts(params.cid)
        .subscribe(data => { this.products = data; }
          , error => {
           this.errorMsg = 'Error in Loading Products, Please contact Administrator'; })
        ; 
      });
  }

  addToCart=(product:Product)=>{
    // Reach out to cart_product[] and push this object in that array

    //step 1: extract the array out of the subject
    let productArray:Product[]= this.appservice.cart_product.value;

    // step 2 : Push the product into the extracted array
    productArray.push(product);

    // step 3: Update the subject with new value of extracted array
    this.appservice.cart_product.next(productArray);
  }

}
