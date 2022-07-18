import { Component, OnInit } from '@angular/core';
import { Category } from '../model/Category.model';
import { Post } from '../model/post.model';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-category-home',
  templateUrl: './category-home.component.html',
  styleUrls: ['./category-home.component.css']
})
export class CategoryHomeComponent implements OnInit {

  categories:Category[];
  errorMsg:string;
  // reach out to the service and fetch the data from service
  constructor(private categoryService:CategoryService) {
    
   }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(data=>{
      this.categories = data;
    },
    error=>{
      this.errorMsg='Could not load the categories. Try refreshing or contact administrator';
    }
    );
  }

}
