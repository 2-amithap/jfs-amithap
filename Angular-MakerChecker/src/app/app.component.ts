import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './_services';
import { User } from './_models';
import { Role } from './_models/role';
import {Customer} from './_models/customer'
import { ApiService } from  './_services/api.service';


@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent { 
    currentUser: User;
    customer:  Customer[] = [];   

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private apiService: ApiService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    get isAdmin() {
        return this.currentUser && this.currentUser.role === Role.Checker;
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
    checkerlist(){
        this.apiService.getCustomer().subscribe((data:  Customer[]) => {
            this.customer  =  data;
            console.log(data);
            console.info(data);
            this.router.navigate(['/checker']);
        });
    }
}