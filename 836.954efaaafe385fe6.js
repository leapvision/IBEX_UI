"use strict";(self.webpackChunkibex=self.webpackChunkibex||[]).push([[836],{7836:(b,c,i)=>{i.r(c),i.d(c,{AccountModule:()=>g});var m=i(6895),o=i(9158),d=i(4650);const v=[{path:"auth",loadChildren:()=>Promise.resolve().then(i.bind(i,872)).then(l=>l.AuthModule)}];let f=(()=>{class l{}return l.\u0275fac=function(p){return new(p||l)},l.\u0275mod=d.\u0275\u0275defineNgModule({type:l}),l.\u0275inj=d.\u0275\u0275defineInjector({imports:[o.Bz.forChild(v),o.Bz]}),l})();var s=i(872);let g=(()=>{class l{}return l.\u0275fac=function(p){return new(p||l)},l.\u0275mod=d.\u0275\u0275defineNgModule({type:l}),l.\u0275inj=d.\u0275\u0275defineInjector({imports:[m.CommonModule,f,s.AuthModule]}),l})()},872:(b,c,i)=>{i.r(c),i.d(c,{AuthModule:()=>G});var m=i(6895),o=i(4006),d=i(5876),v=i(2269),f=i(9668),s=i(9158),g=i(7224),l=i(2340),e=i(4650),p=i(263),x=i(2293),S=i(150);function E(t,a){if(1&t&&(e.\u0275\u0275elementStart(0,"ngb-alert",39),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&t){const n=e.\u0275\u0275nextContext();e.\u0275\u0275property("dismissible",!1),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(n.error)}}function I(t,a){1&t&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"Email is required"),e.\u0275\u0275elementEnd())}function C(t,a){1&t&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"Email must be a valid email address"),e.\u0275\u0275elementEnd())}function w(t,a){if(1&t&&(e.\u0275\u0275elementStart(0,"div",40),e.\u0275\u0275template(1,I,2,0,"div",41),e.\u0275\u0275template(2,C,2,0,"div",41),e.\u0275\u0275elementEnd()),2&t){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.f.email.errors.required),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.f.email.errors.email)}}function M(t,a){1&t&&(e.\u0275\u0275elementStart(0,"span"),e.\u0275\u0275text(1,"Password is required"),e.\u0275\u0275elementEnd())}function F(t,a){if(1&t&&(e.\u0275\u0275elementStart(0,"div",40),e.\u0275\u0275template(1,M,2,0,"span",41),e.\u0275\u0275elementEnd()),2&t){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.f.password.errors.required)}}function L(t,a){1&t&&(e.\u0275\u0275elementStart(0,"div",18)(1,"label",19),e.\u0275\u0275text(2,"Operator Name "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"select",42)(4,"option",28),e.\u0275\u0275text(5,"--Please Select--"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"option",43),e.\u0275\u0275text(7,"Operator 1"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"option",43),e.\u0275\u0275text(9,"Operator 2"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(10,"option",43),e.\u0275\u0275text(11,"Operator 3"),e.\u0275\u0275elementEnd()()())}function O(t,a){1&t&&(e.\u0275\u0275elementStart(0,"div",18)(1,"label",19),e.\u0275\u0275text(2,"Line "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"select",42)(4,"option",28),e.\u0275\u0275text(5,"--Please Select--"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"option",43),e.\u0275\u0275text(7,"Line 1"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"option",43),e.\u0275\u0275text(9,"Line 2"),e.\u0275\u0275elementEnd()()())}function T(t,a){if(1&t&&(e.\u0275\u0275elementStart(0,"div",18)(1,"label",19),e.\u0275\u0275text(2,"Process "),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(3,"ng-select",44),e.\u0275\u0275elementEnd()),2&t){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(3),e.\u0275\u0275property("items",n.processList)("multiple",!0)}}const y=function(t){return{"is-invalid":t}};function A(t,a){if(1&t&&(e.\u0275\u0275elementStart(0,"ngb-alert",25),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&t){const n=e.\u0275\u0275nextContext();e.\u0275\u0275property("dismissible",!1),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(n.error)}}function j(t,a){1&t&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"Email is required"),e.\u0275\u0275elementEnd())}function N(t,a){1&t&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"Email must be a valid email address"),e.\u0275\u0275elementEnd())}function B(t,a){if(1&t&&(e.\u0275\u0275elementStart(0,"div",26),e.\u0275\u0275template(1,j,2,0,"div",27),e.\u0275\u0275template(2,N,2,0,"div",27),e.\u0275\u0275elementEnd()),2&t){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.f.email.errors.required),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.f.email.errors.email)}}const R=function(t){return{"is-invalid":t}},z=[{path:"",component:(()=>{class t{constructor(n,r,u,h,W){this.formBuilder=n,this.route=r,this.router=u,this.authenticationService=h,this.authFackservice=W,this.submitted=!1,this.error="",this.showOperatorFlag=!1,this.year=(new Date).getFullYear()}ngOnInit(){this.loginForm=this.formBuilder.group({email:["admin@themesbrand.com",[o.kI.required,o.kI.email]],password:["123456",[o.kI.required]],role:["",[o.kI.required]]}),this.processList=["Scrap Purchase","Incoming Inspection","Storage of Raw Materials","Material Segmentation","MTO - Material Loading","MTO - Melting","MTO - Flux Mixing","MTO - Slag Removal","MTO - Composition Check","Transfer to MWO","MWO - Slag Removal","MWO - Composition Check","MWO - Ingots Pouring","MWO - Visual Inspection","Buffing/Polishing","Heat Number Printing"],this.returnUrl=this.route.snapshot.queryParams.returnUrl||"/"}get f(){return this.loginForm.controls}onSubmit(){this.submitted=!0,!this.loginForm.invalid&&("firebase"===l.N.defaultauth?this.authenticationService.login(this.f.email.value,this.f.password.value).then(n=>{this.router.navigate(["/dashboard"])}).catch(n=>{this.error=n||""}):this.authFackservice.login(this.f.email.value,this.f.password.value).pipe((0,g.P)()).subscribe(n=>{"Admin"==this.f.role.value?this.router.navigate(["/pages/panel/admin"]):"Supervisor"==this.f.role.value?this.router.navigate(["/pages/panel/supervisor"]):"Operator"==this.f.role.value&&this.router.navigate(["/pages/mto/loadingofrm"])},n=>{this.error=n||""}))}showOperator(){this.showOperatorFlag="Operator"==this.f.role.value&&!this.showOperatorFlag}}return t.\u0275fac=function(n){return new(n||t)(e.\u0275\u0275directiveInject(o.QS),e.\u0275\u0275directiveInject(s.gz),e.\u0275\u0275directiveInject(s.F0),e.\u0275\u0275directiveInject(p.$),e.\u0275\u0275directiveInject(x.g))},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["app-login"]],decls:60,vars:14,consts:[[1,"account-pages","my-5","pt-sm-5"],[1,"container"],[1,"row","justify-content-center"],[1,"col-md-8","col-lg-6","col-xl-5"],[1,"card","overflow-hidden"],[1,"bg-soft","bg-primary"],[1,"row"],[1,"col-7"],[1,"text-primary","p-4"],[1,"text-primary"],[1,"card-body","pt-0"],["routerLink","/"],[1,"avatar-md","profile-user-wid","mb-4"],[1,"avatar-title","rounded-circle","bg-light"],["src","assets/images/Ibex_Icon.png","alt","","height","54",1,"rounded-circle"],[1,"p-2"],[1,"form-horizontal",3,"formGroup","ngSubmit"],["type","danger",3,"dismissible",4,"ngIf"],[1,"mb-3"],["for","email"],["type","email","formControlName","email","id","email","placeholder","Email",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["for","password"],[1,"input-group","auth-pass-inputgroup"],["type","password","formControlName","password","placeholder","Enter password","aria-label","Password","aria-describedby","password-addon",1,"form-control",3,"ngClass"],["type","button","id","password-addon",1,"btn","btn-light","ms-0"],[1,"mdi","mdi-eye-outline"],["id","ddlCreditCardType","name","ddlCreditCardType","formControlName","role",1,"form-control",3,"change"],["value",""],["value","Admin"],["value","Supervisor"],["value","Operator"],["class","mb-3",4,"ngIf"],[1,"mt-3","d-grid"],["type","submit",1,"btn","btn-primary"],[1,"mt-4","text-center"],["routerLink","/account/reset-password",1,"text-muted"],[1,"mdi","mdi-lock","mr-1"],[1,"mt-5","text-center"],["type","danger",3,"dismissible"],[1,"invalid-feedback"],[4,"ngIf"],["id","ddlCreditCardType","name","ddlCreditCardType",1,"form-control"],["value","AE"],[3,"items","multiple"]],template:function(n,r){1&n&&(e.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"div",8)(9,"h5",9),e.\u0275\u0275text(10,"Welcome Back !"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"p"),e.\u0275\u0275text(12,"Sign in to IBEX Engineering"),e.\u0275\u0275elementEnd()()()()(),e.\u0275\u0275elementStart(13,"div",10)(14,"div")(15,"a",11)(16,"div",12)(17,"span",13),e.\u0275\u0275element(18,"img",14),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(19,"div",15)(20,"form",16),e.\u0275\u0275listener("ngSubmit",function(){return r.onSubmit()}),e.\u0275\u0275template(21,E,2,2,"ngb-alert",17),e.\u0275\u0275elementStart(22,"div",18)(23,"label",19),e.\u0275\u0275text(24,"Email"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(25,"input",20),e.\u0275\u0275template(26,w,3,2,"div",21),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(27,"div",18)(28,"label",22),e.\u0275\u0275text(29,"Password"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(30,"div",23),e.\u0275\u0275element(31,"input",24),e.\u0275\u0275elementStart(32,"button",25),e.\u0275\u0275element(33,"i",26),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(34,F,2,1,"div",21),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(35,"div",18)(36,"label",19),e.\u0275\u0275text(37,"Login as "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(38,"select",27),e.\u0275\u0275listener("change",function(){return r.showOperator()}),e.\u0275\u0275elementStart(39,"option",28),e.\u0275\u0275text(40,"--Please Select--"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(41,"option",29),e.\u0275\u0275text(42,"Admin"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(43,"option",30),e.\u0275\u0275text(44,"Supervisor"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(45,"option",31),e.\u0275\u0275text(46,"Operator"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275template(47,L,12,0,"div",32),e.\u0275\u0275template(48,O,10,0,"div",32),e.\u0275\u0275template(49,T,4,2,"div",32),e.\u0275\u0275elementStart(50,"div",33)(51,"button",34),e.\u0275\u0275text(52,"Log In"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(53,"div",35)(54,"a",36),e.\u0275\u0275element(55,"i",37),e.\u0275\u0275text(56," Forgot your password?"),e.\u0275\u0275elementEnd()()()()()(),e.\u0275\u0275elementStart(57,"div",38)(58,"p"),e.\u0275\u0275text(59),e.\u0275\u0275elementEnd()()()()()()),2&n&&(e.\u0275\u0275advance(20),e.\u0275\u0275property("formGroup",r.loginForm),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",r.error),e.\u0275\u0275advance(4),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(10,y,r.submitted&&r.f.email.errors)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",r.submitted&&r.f.email.errors),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(12,y,r.submitted&&r.f.password.errors)),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngIf",r.submitted&&r.f.password.errors),e.\u0275\u0275advance(13),e.\u0275\u0275property("ngIf",r.showOperatorFlag),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",r.showOperatorFlag),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",r.showOperatorFlag),e.\u0275\u0275advance(10),e.\u0275\u0275textInterpolate1("\xa9 ",r.year," IBEX Engineering."))},dependencies:[m.NgClass,m.NgIf,o._Y,o.YN,o.Kr,o.Fj,o.EJ,o.JJ,o.JL,o.sg,o.u,d.xm,s.yS,S.w9]}),t})()},{path:"reset-password",component:(()=>{class t{constructor(n,r,u,h){this.formBuilder=n,this.route=r,this.router=u,this.authenticationService=h,this.submitted=!1,this.error="",this.success="",this.loading=!1,this.year=(new Date).getFullYear()}ngOnInit(){this.resetForm=this.formBuilder.group({email:["",[o.kI.required,o.kI.email]]})}ngAfterViewInit(){}get f(){return this.resetForm.controls}onSubmit(){this.success="",this.submitted=!0,!this.resetForm.invalid&&"firebase"===l.N.defaultauth&&this.authenticationService.resetPassword(this.f.email.value).catch(n=>{this.error=n||""})}}return t.\u0275fac=function(n){return new(n||t)(e.\u0275\u0275directiveInject(o.QS),e.\u0275\u0275directiveInject(s.gz),e.\u0275\u0275directiveInject(s.F0),e.\u0275\u0275directiveInject(p.$))},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["app-passwordreset"]],decls:36,vars:7,consts:[[1,"account-pages","my-5","pt-sm-5"],[1,"container"],[1,"row","justify-content-center"],[1,"col-md-8","col-lg-6","col-xl-5"],[1,"card","overflow-hidden"],[1,"bg-soft","bg-primary"],[1,"row"],[1,"col-7"],[1,"text-primary","p-4"],[1,"text-primary"],[1,"card-body","pt-0"],["routerLink","/"],[1,"avatar-md","profile-user-wid","mb-4"],[1,"avatar-title","rounded-circle","bg-light"],["src","assets/images/Ibex_Icon.png","alt","","height","54",1,"rounded-circle"],["name","resetForm","novalidate","",1,"needs-validation",3,"formGroup","ngSubmit"],["type","danger",3,"dismissible",4,"ngIf"],[1,"mb-3"],["for","email"],["type","email","formControlName","email","id","email","placeholder","Email",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],[1,"text-end"],["type","submit",1,"btn","btn-primary","w-md"],[1,"mt-5","text-center"],["routerLink","/",1,"fw-medium","text-primary"],["type","danger",3,"dismissible"],[1,"invalid-feedback"],[4,"ngIf"]],template:function(n,r){1&n&&(e.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"div",8)(9,"h5",9),e.\u0275\u0275text(10," Reset Password"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"p"),e.\u0275\u0275text(12,"IBEX ENGINEERING"),e.\u0275\u0275elementEnd()()()()(),e.\u0275\u0275elementStart(13,"div",10)(14,"div")(15,"a",11)(16,"div",12)(17,"span",13),e.\u0275\u0275element(18,"img",14),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(19,"form",15),e.\u0275\u0275listener("ngSubmit",function(){return r.onSubmit()}),e.\u0275\u0275template(20,A,2,2,"ngb-alert",16),e.\u0275\u0275elementStart(21,"div",17)(22,"label",18),e.\u0275\u0275text(23,"Email"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(24,"input",19),e.\u0275\u0275template(25,B,3,2,"div",20),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(26,"div",21)(27,"button",22),e.\u0275\u0275text(28,"Reset"),e.\u0275\u0275elementEnd()()()()(),e.\u0275\u0275elementStart(29,"div",23)(30,"p"),e.\u0275\u0275text(31,"Remember It ? "),e.\u0275\u0275elementStart(32,"a",24),e.\u0275\u0275text(33," Sign In here"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(34,"p"),e.\u0275\u0275text(35),e.\u0275\u0275elementEnd()()()()()()),2&n&&(e.\u0275\u0275advance(19),e.\u0275\u0275property("formGroup",r.resetForm),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",r.error),e.\u0275\u0275advance(4),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(5,R,r.submitted&&r.f.email.errors)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",r.submitted&&r.f.email.errors),e.\u0275\u0275advance(10),e.\u0275\u0275textInterpolate1("\xa9 ",r.year," IBEX Engineering."))},dependencies:[m.NgClass,m.NgIf,o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u,d.xm,s.yS]}),t})()}];let J=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[s.Bz.forChild(z),s.Bz]}),t})(),G=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[m.CommonModule,o.UX,o.u5,d._A,f.v,J,v.bB,S.A0]}),t})()}}]);