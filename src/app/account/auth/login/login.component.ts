import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from "@angular/forms";

import { AuthenticationService } from "../../../core/services/auth.service";
import { AuthfakeauthenticationService } from "../../../core/services/authfake.service";

import { ActivatedRoute, Router } from "@angular/router";
import { first } from "rxjs/operators";

import { environment } from "../../../../environments/environment";
import { AuthService } from "src/app/core/services/auth/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})

/**
 * Login component
 */
export class LoginComponent implements OnInit {
  responseData: any;

  loginForm: UntypedFormGroup;
  submitted = false;
  error = "";
  returnUrl: string;
  showOperatorFlag = false;

  processList;

  show: boolean = false;

  // set the current year
  year: number = new Date().getFullYear();

  // tslint:disable-next-line: max-line-length
  constructor(
    private formBuilder: UntypedFormBuilder,
    // private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private authFackservice: AuthfakeauthenticationService,
    private authService: AuthService
  ) {
    localStorage.removeItem("ibexUserData");
  }

  Login = new FormGroup({
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
  });

  ngOnInit() {
    this.Login = this.formBuilder.group({
      email: ["ibex_admin@gmail.com", [Validators.required, Validators.email]],
      password: ["adminadmin", [Validators.required]],
    });

    // reset login status
    // this.authenticationService.logout();
    // get return url from route parameters or default to '/'
    // tslint:disable-next-line: no-string-literal
    // this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
  }

  onSubmitLogIn() {
    if (this.Login.valid) {
      console.log(this.Login.value.email.split("@")[0]);
      let userFormData = {
        // "username" : this.Login.get('email').value,
        username: this.Login.value.email.split("@")[0],
        password: this.Login.value.password,
      };
      console.log(userFormData);
      this.authService.proceedLogin(userFormData).subscribe((result) => {
        if (result != null) {
          this.responseData = result;
          console.log(this.responseData);
          const userData = {
            access_token: this.responseData.access,
            refresh_token: this.responseData.refresh,
            role: this.responseData.groups?.name,
          };
          localStorage.setItem("ibexUserData", JSON.stringify(userData));
          this.router.navigate(["/pages/dashboard/admin/graph"]);
        }
      });
    }
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  /**
   * Form submit
   */
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    } else {
      if (environment.defaultauth === "firebase") {
        this.authenticationService
          .login(this.f.email.value, this.f.password.value)
          .then((res: any) => {
            this.router.navigate(["/dashboard"]);
          })
          .catch((error) => {
            this.error = error ? error : "";
          });
      } else {
        this.authFackservice
          .login(this.f.email.value, this.f.password.value)
          .pipe(first())
          .subscribe(
            (data) => {
              console.log(data);
              if (data["email"] === "admin@ibex.com") {
                this.router.navigate(["/pages/dashboard/admin/graph"]);
              } else if (data["email"] === "supervisor@ibex.com") {
                this.router.navigate(["/pages/dashboard/supervisor"]);
              }
            },
            (error) => {
              this.error = error ? error : "";
            }
          );
      }
    }
  }

  showOperator() {
    if (this.f.role.value == "Operator") {
      this.showOperatorFlag = !this.showOperatorFlag;
    } else {
      this.showOperatorFlag = false;
    }
  }

  showpassword() {
    this.show = !this.show;
  }
}
