import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { UserService } from '../_services';
import { Customer } from '../_models/customer';
import { ApiService } from  '../_services/api.service';
import {Router} from "@angular/router";


@Component({
  templateUrl: './checker.component.html',
  styleUrls: ['./checker.component.css']
})
export class CheckerComponent implements OnInit {

  //customer:  Customer[] = [];
  customer:any;

  constructor(private userService: UserService,private  apiService:  ApiService,private router: Router) {}

  ngOnInit() {
      console.info("inside checker ts calling getcustomer method");
      this.apiService.getCustomer().subscribe((data) => {
        this.customer  =  data;
        console.log(data);
        console.info(data);
        
    });
  }
  // ngOnInit(){
  //   this.apiService.getCustomers().subscribe((res)=>{
  //     this.apiService.getCustomers(this.apiService.nextPage).subscribe((res)=>{
  //       console.log(res.body);
  //     });      
  //   });


  // }
}