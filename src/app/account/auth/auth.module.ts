import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { UIModule } from '../../shared/ui/ui.module';
import { LoginComponent } from './login/login.component';

import { AuthRoutingModule } from './auth-routing';
import { PasswordresetComponent } from './passwordreset/passwordreset.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { SupervisorLoginComponent } from './supervisorlogin/supervisorlogin.component';


@NgModule({
  declarations: [LoginComponent,  PasswordresetComponent, SupervisorLoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbAlertModule,
    UIModule,
    AuthRoutingModule,
    CarouselModule,
    NgSelectModule
  ]
})
export class AuthModule { }
