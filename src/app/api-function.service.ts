import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiFunctionService {
apiUrl="http://localhost:3000/employees"
  constructor(private http :HttpClient) { }
  get(){
    return this.http.get(this.apiUrl);
  }
  post(object){
   return this.http.post(this.apiUrl,object);
  }
}
