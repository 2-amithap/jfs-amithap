import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import {User} from "../_models";
import {ApiResponse} from "../_models/api.response";
import {Customer} from "../_models/customer"

@Injectable()
export class ApiService {
    public firstPage: string = "";
    public prevPage: string = "";
    public nextPage: string = "";
    public lastPage: string = "";
    private extractData(res: Response) {
        let body = res;
        return body || { };
      }

API_URL  =  'http://localhost:8080/user-portal';
constructor(private  httpClient:  HttpClient) {}
// getCustomer(){
//     return  this.httpClient.get(`${this.API_URL}/customer`);
//     console.log("inside customer service URL")
//     console.log(this.httpClient.get(`${this.API_URL}/customer`));
// }

getCustomer(): Observable<any> {
    return this.httpClient.get(`${this.API_URL}/customer`).pipe(
      map(this.extractData));
  }
// public getCustomer1(): Observable<Customer[]> {
//     return this.httpClient
//       .get(this.API_URL + '/todos')
//       .map(response => {
//         const customer = response.json();
//         return customer.map((customer) => new Customer(customer));
//       })
//       .catch(this.handleError);
//   }

public getCustomers(url?: string){

    if(url){
      return this.httpClient.get<Customer[]>(url,{ observe: 'response' }).pipe(tap(res => {
        this.retrieve_pagination_links(res);
      }));
    }

    return this.httpClient.get<Customer[]>(`${this.API_URL}/customer?page=1`,
    { observe: 'response' }).pipe(tap(res => {
      this.retrieve_pagination_links(res); 
    }));
    
  }
  public retrieve_pagination_links(response){
    const linkHeader = this.parse_link_header(response.headers.get('Link'));
    this.firstPage = linkHeader["first"];
    this.lastPage =  linkHeader["last"];
    this.prevPage =  linkHeader["prev"];
    this.nextPage =  linkHeader["next"];
}
public parse_link_header(header) {
    if (header.length == 0) {
      return ;
    }

    let parts = header.split(',');
    var links = {};
    parts.forEach( p => {
      let section = p.split(';');
      var url = section[0].replace(/<(.*)>/, '$1').trim();
      var name = section[1].replace(/rel="(.*)"/, '$1').trim();
      links[name] = url;

    }); 
    return links;
  }

}
