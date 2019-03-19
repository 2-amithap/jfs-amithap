import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import {Router} from "@angular/router";

import { ApiService } from  '../_services/api.service';

@Component({
  templateUrl: './maker.component.html',
  styleUrls: ['./maker.component.css']
})
export class MakerComponent implements OnInit {


  private  customer:  Array<object> = [];
  constructor(private  apiService:  ApiService,private router: Router) {
    }

  
      ngOnInit() {
        this.getCustomer();
    }
    public  getCustomer(){
      this.apiService.getCustomer().subscribe((data:  Array<object>) => {
          this.customer  =  data;
          console.log(data);
      });

  
    }
 
}
  // ngOnInit() {
  //     this.apiService.getUsers()
  //     .subscribe( (data: any)  => {
  //         this.customer = data;
  //     });
  // }


