import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cakes: any;
  newCake: any;
  rating: any;
  cake: any =[];
  errors: any;


constructor(private _httpService: HttpService){
  // this.show = false;
}

ngOnInit(){
  this.newCake ={baker:"", imageUrl:""}
  this.rating = {rating: "", comment: ""}
  this.showAllCakes()
}

showAllCakes(){
  let allCake = this._httpService.getAllCakes();
  allCake.subscribe(data=>{
    this.cakes = data;
    })
  }
createCake(){
  let add = this._httpService.addCake(this.newCake);
  add.subscribe(data=> {
    if(data['errors']){
      this.errors = data['errors']
    }
    this.newCake = {baker: "", imageUrl: ""}
    this.showAllCakes();
  })
}
rateCake(id,rateform){
  let rate ={
    rating: rateform.controls['rating']['value'],
    comment:rateform.controls['comment']['value']
  }
  this._httpService.addRate(id,rate).subscribe(data=>{
  })
  this.showAllCakes();
  }
  
showCake(cake){
  let show = this._httpService.showOne(cake)
  show.subscribe(data=>{
    this.cake = data;
  })
  // this.show = true;
  }
}