import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../../review/model/review.model';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProductApi:string;
  getReviewApi:string;

  constructor(private http:HttpClient) { 
    this.getProductApi="http://localhost:8888/product/";
    this.getReviewApi="http://localhost:8888/review/product/"
  }

  public getAllProducts(cid:number) : Observable<Product[]>{
    return this.http.get<Product[]>(this.getProductApi + cid);  
  }

  public getReviewByProductId(pid: any):Observable<Review[]> {
    return this.http.get<Review[]>(this.getReviewApi + pid);  
  }
}
