import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }
  login(userdata:any)
  {
    return this.http.post("http://localhost:3000/login",userdata);
  }
  getAllState()
  {
    return this.http.get("http://localhost:3000/state/allstate");

  }

  getAllCitiesbysid(sid:any)
  {
    return this.http.get("http://localhost:3000/city/allcities/"+sid);

  }

  getAllCollegebycid(cid:any)
  {
    return this.http.get("http://localhost:3000/allcollege/"+cid);

  }
  getCollegeByCid(cid:any)
  {
    return this.http.get("http://localhost:3000/college/getcollegebycid/"+cid);
  }
  getStateById(id:any)
  {
    return this.http.get("http://localhost:3000/statebyid/"+id);

  }
}
