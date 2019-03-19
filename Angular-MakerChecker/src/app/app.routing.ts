import { Routes, RouterModule } from '@angular/router';
import { MakerComponent} from './maker/maker.component'
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import { Role } from './_models/role';
import {CheckerComponent} from './checker/checker.component'

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { 
        path: 'checker', 
        component: CheckerComponent, 
        canActivate: [AuthGuard], 
        data: { roles: [Role.Checker] } 
    },
    { 
        path: 'maker', 
        component: MakerComponent, 
        canActivate: [AuthGuard], 
        data: { roles: [Role.Maker] } 
    },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);