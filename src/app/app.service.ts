import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable} from "rxjs";
import { Product } from "./components/product/model/product.model";

@Injectable({
    providedIn: 'root'
  })
export class AppService {
    
  //[] is initial value of cart_product.
  cart_product = new BehaviorSubject([]);
  loggedIn = new BehaviorSubject<boolean>(false);


    constructor( ) {

    }

    ngOnInit(): void {

    }

}