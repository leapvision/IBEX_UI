import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { PasswordresetComponent } from './passwordreset/passwordreset.component';
import { SupervisorLoginComponent } from './supervisorlogin/supervisorlogin.component';


const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'reset-password',
        component: PasswordresetComponent
    },
    {
        path: 'supervisorLogin',
        component: SupervisorLoginComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
