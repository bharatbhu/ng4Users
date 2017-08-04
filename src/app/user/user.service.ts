import { Http } from '@angular/http';
import { User } from './user';
import { Injectable } from '@angular/core';
import 'rxjs';
import { Observable } from 'rxjs';
@Injectable()
export class UserService {

  constructor(private _http: Http) { }
  create(user: User){
    return this._http.post("/users", user).toPromise()
  }
  destroy(user: User) {
    return this._http.delete("/users"+user._id, user).toPromise()
  }
  update(user: User) {
    return this._http.put("/users"+user._id, user).toPromise()
  }
  getUsers(){
    return this._http.get("/users").toPromise()
  }
  getUser(user: User) {
    return this._http.get("/users"+user._id)
  }
}
