import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Category } from '../../category/model/Category.model';
import { CategoryService } from '../../category/service/category.service';
import { Product } from '../../product/model/product.model';

@Component({
  selector: 'app-navbar-home',
  templateUrl: './navbar-home.component.html',
  styleUrls: ['./navbar-home.component.css']
})
export class NavbarHomeComponent implements OnInit {

  categories:Category[];
  errorMsg:string;
  product:Product[];
  count:number;

  constructor(private categoryService:CategoryService, private appService:AppService) { }

  ngOnInit(): void {
    this.count=0;

    this.categoryService.getAllCategories().subscribe(data=>{
      this.categories = data;
    },
    error=>{
      this.errorMsg='Could not load the categories. Try refreshing or contact administrator';
    });

     // subscribe to the cart-product subject
     this.appService.cart_product.subscribe(data=>{
       this.product=data;
       this.count= this.product.length;
     },
     error=>{
      console.log('error');
     });

  }

}
