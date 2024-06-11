import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class VechileService {

   API_URL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getProducts(search: any): Observable<any> {
    return this.http.get(`${this.API_URL}/vehicles?searchField=${search.field}&searchValue=${search.value}`);
  }

  

  postData(data: any): Observable<any> {
    return this.http.post(`${this.API_URL}/vehicle`, data)
}

updateData(data: any, id: string): Observable<any> {
  return this.http.patch(`${this.API_URL}/vehicle/${id}`, data)
}

deleteData(id:any): Observable<any> {
  return this.http.delete(`${this.API_URL}/vehicle/${id}`)
}

}
