import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../../../core/services/auth.service';
import { AuthfakeauthenticationService } from '../../../core/services/authfake.service';

import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-supervisorlogin',
  templateUrl: './supervisorlogin.component.html',
  styleUrls: ['./supervisorlogin.component.scss']
})

/**
 * Login component
 */
export class SupervisorLoginComponent implements OnInit {

  loginForm: UntypedFormGroup;
  submitted = false;
  error = '';
  returnUrl: string;
  showOperatorFlag = false;

  operatorList;

  // set the currenr year
  year: number = new Date().getFullYear();

  // tslint:disable-next-line: max-line-length
  constructor(private formBuilder: UntypedFormBuilder, private route: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService,
    private authFackservice: AuthfakeauthenticationService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      page: ['',[Validators.required]]
    });

    this.operatorList = ['Operator 1', 'Operator 2','Operator 3','Operator 4'];
    // reset login status
    // this.authenticationService.logout();
    // get return url from route parameters or default to '/'
    // tslint:disable-next-line: no-string-literal
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  /**
   * Form submit
   */
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
      if (this.loginForm.invalid) {
        return;
      } else {
       if(this.f.page.value.includes("Dashboard")){
        this.router.navigate(['/pages/panel/supervisor']);
       }
       else{
        this.router.navigate(['/pages/scrapmanagement/scrappurchase']);
       }
      }
  }

  showOperator(){
    if(this.f.page.value.includes('Dashboard')){
      this.showOperatorFlag = false;
    }
    else{
      this.showOperatorFlag = true;
    }
    
  }
}
