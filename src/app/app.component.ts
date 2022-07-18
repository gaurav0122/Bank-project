import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
 
  //constructors are used to inject the services...
  constructor() {

  }

  //Lifecycle Hook : Called when the component is about to initialize instance variables
  ngOnInit(): void {
      
  }

  //Lifecycle hook that gets called whenever the control moves away from this component
  //switching to another screen. 
  ngOnDestroy(): void {

  }
}
