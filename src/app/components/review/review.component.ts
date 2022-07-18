import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product/service/product.service';
import { Review } from './model/review.model';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  reviews:Review[];
  ratings:number[];
  pid:number;
  reviewsArray:Review[];
  showReviewForm:boolean;

  constructor(private actRoute:ActivatedRoute, private productService:ProductService) { 

  }

  ngOnInit(): void {
    this.showReviewForm=false;
    this.ratings =[0,0,0,0,0];
    this.actRoute.params.subscribe(params=>{
      this.productService.getReviewByProductId(params.pid).subscribe(data=>{
        this.pid=params.pid;
        this.reviews=data;
        this.reviewsArray = data;
        this.ratings[0] = this.reviews.filter(r=> r.rating === 5).length;
        this.ratings[1] = this.reviews.filter(r=> r.rating === 4).length;
        this.ratings[2] = this.reviews.filter(r=> r.rating === 3).length;
        this.ratings[3] = this.reviews.filter(r=> r.rating === 2).length;
        this.ratings[4] = this.reviews.filter(r=> r.rating === 1).length;
      })
    });

  }

  getReviewSort=(rating)=>{
    this.reviewsArray = this.reviews.filter(r=>r.rating=== rating );
  }
  getAllReviews=()=>{
    this.reviewsArray = this.reviews;
  }

  postReview=()=>{
    this.showReviewForm=true;
  }

  onchangeRating=(event$)=>{
    console.log(event$);
  }
}
