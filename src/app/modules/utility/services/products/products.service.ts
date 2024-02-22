import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url = 'http://localhost:3002/api/v1/';

  constructor(private http: HttpClient) {
  }

  public loadProducts(page: any, size: any, searchText: any): Observable<any> {
    return this.http.get(this.url + 'products/find-all');
  }

}
