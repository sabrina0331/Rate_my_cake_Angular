import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAllCakes(){
    return this._http.get('/allCakes')
  }
  addCake(newCake){
    return this._http.post('/createCake',newCake)
  }
  addRate(id,rating){
    return this._http.post('/newRate/'+id,rating)
  }
  showOne(cake){
    return this._http.get(`/cake/${cake._id}`,cake)
    
  }
}
