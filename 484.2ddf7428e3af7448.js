"use strict";(self.webpackChunkibex=self.webpackChunkibex||[]).push([[484],{7484:(R,m,n)=>{n.r(m),n.d(m,{ScrapManagementModule:()=>P});var d=n(6895),c=n(4006),s=n(9158),e=n(4650);let g=(()=>{class t{constructor(){this.headingArray=[[{heading:"Sl No",rowspan:"1"},{heading:"Date",rowspan:"1"},{heading:"Alloy Name",rowspan:"1"},{heading:"Source",rowspan:"1"},{heading:"Weight(KG)",rowspan:"1"}]],this.bodyArray=[[{value:"22/12/2022"},{value:"AM50A"},{value:"Steel Line India"},{value:"700"}],[{value:"20/12/2022"},{value:"AM50A"},{value:"CMR"},{value:"500"}],[{value:"10/12/2022"},{value:"AZ91D"},{value:"Sunland"},{value:"200"}]],this.samplesArray=[{name:"Al (%)",value:5,good:!0},{name:"Zn (%)",value:.06,good:!0},{name:"Mn (%)",value:.292,ok:!0},{name:"Si (%)",value:.018,good:!0},{name:"Fe (%)",value:.0026,good:!0},{name:"Cu (%)",value:4e-4,good:!0},{name:"Ni (%)",value:.001,good:!0},{name:"Be (%)",value:6e-4,good:!0},{name:"Ca (%)",value:.0018,bad:!0},{name:"Cd (%)",value:1e-4,bad:!0},{name:"Ag (%)",value:6e-4,good:!0},{name:"La (%)",value:.0015,good:!0},{name:"Zr (%)",value:.0015,good:!0},{name:"Na (%)",value:.008,good:!0},{name:"P (%)",value:.008,good:!0},{name:"Pb (%)",value:.004,good:!0},{name:"Sn (%)",value:.011,good:!0},{name:"Mg (%)",value:94.6,good:!0}]}getScrapInspectionReport(){return{heading:this.headingArray,body:this.bodyArray}}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275prov=e.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var p=n(9234),u=n(7408);let h=(()=>{class t{constructor(a){this.scrapinspectionService=a,this.hideme=[],this.isCollapsed=!0,this.scrapinspectionHeadingArray=this.scrapinspectionService.getScrapInspectionReport().heading,this.scrapinspectionBodyArray=this.scrapinspectionService.getScrapInspectionReport().body,this.parentReports=[{spectroReports:!0,name:"Sample Spectro Reports",samples:[{name:"Sample 1",data:this.scrapinspectionService.samplesArray}]}]}ngOnInit(){this.breadCrumbItems=[{label:"Scrap Management"},{label:"Inward Scrap",active:!0}]}changeValue(a){this.hideme[a]=!this.hideme[a]}}return t.\u0275fac=function(a){return new(a||t)(e.\u0275\u0275directiveInject(g))},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["app-scrapinspection"]],features:[e.\u0275\u0275ProvidersFeature([d.DecimalPipe])],decls:9,vars:5,consts:[[1,"container-fluid"],["title","",3,"breadcrumbItems"],[1,"row"],[1,"col-12"],[1,"card"],[1,"card-body"],[1,"card-title"],[3,"HeadingArray","BodyArray","ParentReports","source"]],template:function(a,o){1&a&&(e.\u0275\u0275elementStart(0,"div",0),e.\u0275\u0275element(1,"app-page-title",1),e.\u0275\u0275elementStart(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h4",6),e.\u0275\u0275text(7,"Chemical Composition Check"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(8,"app-table",7),e.\u0275\u0275elementEnd()()()()()),2&a&&(e.\u0275\u0275advance(1),e.\u0275\u0275property("breadcrumbItems",o.breadCrumbItems),e.\u0275\u0275advance(7),e.\u0275\u0275property("HeadingArray",o.scrapinspectionHeadingArray)("BodyArray",o.scrapinspectionBodyArray)("ParentReports",o.parentReports)("source",!0))},dependencies:[p.V,u.a],styles:[".bg-card[_ngcontent-%COMP%]{background-color:#25413733}.btn-ibex[_ngcontent-%COMP%]{background-color:#fa7f17}"]}),t})(),S=(()=>{class t{constructor(){this.headingArray=[[{heading:"Sl No",rowspan:"1"},{heading:"Date",rowspan:"1"},{heading:"GRN No",rowspan:"1"},{heading:"Alloy Name",rowspan:"1"},{heading:"Source",rowspan:"1"},{heading:"Weight(KG)",rowspan:"1"},{heading:"Remarks",rowspan:"1"}]],this.bodyArray=[[{value:"22/12/2022"},{value:"1"},{value:"AM50A"},{value:"Steel Line India"},{value:"700"},{value:"-"}],[{value:"20/12/2022"},{value:"2"},{value:"AM50A"},{value:"CMR"},{value:"500"},{value:"-"}],[{value:"10/12/2022"},{value:"3"},{value:"AM50A"},{value:"Sunland"},{value:"200"},{value:"-"}]]}getScrapPurchaseReport(){return{heading:this.headingArray,body:this.bodyArray}}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275prov=e.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var i=n(9189),v=n(139);function b(t,r){1&t&&(e.\u0275\u0275elementStart(0,"b"),e.\u0275\u0275text(1,"1"),e.\u0275\u0275elementEnd())}function y(t,r){1&t&&(e.\u0275\u0275elementStart(0,"b"),e.\u0275\u0275text(1,"2"),e.\u0275\u0275elementEnd())}function f(t,r){1&t&&(e.\u0275\u0275elementStart(0,"b"),e.\u0275\u0275text(1,"3"),e.\u0275\u0275elementEnd())}const A=[{path:"scrappurchase",component:(()=>{class t{constructor(a){this.scrappurchaseService=a,this.grnNumbers=[],this.scrappurchaseHeadingArray=this.scrappurchaseService.getScrapPurchaseReport().heading,this.scrappurchaseBodyArray=this.scrappurchaseService.getScrapPurchaseReport().body}ngOnInit(){this.breadCrumbItems=[{label:"Scrap Management"},{label:"Inward Scrap",active:!0}],this.grnNumbers=["1","2","3","4","5"]}}return t.\u0275fac=function(a){return new(a||t)(e.\u0275\u0275directiveInject(S))},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["app-scrappurchase"]],features:[e.\u0275\u0275ProvidersFeature([d.DecimalPipe])],decls:88,vars:9,consts:[[1,"container-fluid"],["title","",3,"breadcrumbItems"],[1,"row"],[1,"col-lg-12","align-items-center"],[1,"card"],[1,"card-body"],[1,"card-title","mb-4","text-center"],[3,"navBarLayout"],["stepTitle","Scrap Details"],["awWizardStepSymbol",""],[1,"row","mt-3","justify-content-center"],[1,"row","mb-4"],["for","horizontal-password-input",1,"col-sm-3","col-form-label"],[1,"col-sm-9"],[3,"items"],["for","horizontal-firstname-input",1,"col-sm-3","col-form-label"],["type","text","value","AM50A",1,"form-control",3,"disabled"],["for","horizontal-email-input",1,"col-sm-3","col-form-label"],["type","text","value","Steel Line India",1,"form-control",3,"disabled"],["type","text","value","700",1,"form-control",3,"disabled"],[1,"list-inline","wizard","mb-0"],[1,"next","list-inline-item","float-end"],["awNextStep","",1,"btn","btn-primary"],["stepTitle","Remarks"],["type","text",1,"form-control"],[1,"previous","list-inline-item"],["awPreviousStep","",1,"btn","btn-primary"],["stepTitle","Confirm"],[1,"row","justify-content-center"],[1,"col-xl","col-sm-6"],[1,"mt-3","mb-0","text-center"],[1,"card","bg-success","border","border-success","card-body"],[1,"card-title","text-white","text-center"],["type","button",1,"btn","btn-ibex","btn-lg","w-md","text-black"],["routerLink","/pages/scrapmanagement/scrapinspection",1,"btn","btn-primary"],[1,"col-lg-12"],[1,"card-title","text-center"],[3,"HeadingArray","BodyArray","source"]],template:function(a,o){1&a&&(e.\u0275\u0275elementStart(0,"div",0),e.\u0275\u0275element(1,"app-page-title",1),e.\u0275\u0275elementStart(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h4",6),e.\u0275\u0275text(7,"Inward Scrap"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"aw-wizard",7)(9,"aw-wizard-step",8),e.\u0275\u0275template(10,b,2,0,"ng-template",9),e.\u0275\u0275elementStart(11,"div",10)(12,"form")(13,"div",11)(14,"label",12),e.\u0275\u0275text(15,"Select GRN No"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(16,"div",13),e.\u0275\u0275element(17,"ng-select",14),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(18,"div",11)(19,"label",15),e.\u0275\u0275text(20,"Alloy Name"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(21,"div",13),e.\u0275\u0275element(22,"input",16),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(23,"div",11)(24,"label",17),e.\u0275\u0275text(25,"Source"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(26,"div",13),e.\u0275\u0275element(27,"input",18),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(28,"div",11)(29,"label",17),e.\u0275\u0275text(30,"Weight(KG)"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(31,"div",13),e.\u0275\u0275element(32,"input",19),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(33,"ul",20)(34,"li",21)(35,"button",22),e.\u0275\u0275text(36,"Next"),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(37,"aw-wizard-step",23),e.\u0275\u0275template(38,y,2,0,"ng-template",9),e.\u0275\u0275elementStart(39,"form")(40,"div",11)(41,"label",15),e.\u0275\u0275text(42,"Remarks"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(43,"div",13),e.\u0275\u0275element(44,"input",24),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(45,"ul",20)(46,"li",25)(47,"button",26),e.\u0275\u0275text(48," Previous "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(49,"li",21)(50,"button",22),e.\u0275\u0275text(51,"Next"),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(52,"aw-wizard-step",27),e.\u0275\u0275template(53,f,2,0,"ng-template",9),e.\u0275\u0275elementStart(54,"div",28)(55,"div",29)(56,"div",30)(57,"div",31)(58,"h3",32),e.\u0275\u0275text(59," GRN No - 1 "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(60,"div",31)(61,"h3",32),e.\u0275\u0275text(62,"AM50A"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(63,"div",31)(64,"h3",32),e.\u0275\u0275text(65," Steel Line India "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(66,"div",31)(67,"h3",32),e.\u0275\u0275text(68,"700KG"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(69,"div",31)(70,"h3",32),e.\u0275\u0275text(71,"REMARKS"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(72,"button",33),e.\u0275\u0275text(73," Confirm "),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(74,"br"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(75,"ul",20)(76,"li",25)(77,"button",26),e.\u0275\u0275text(78," Previous "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(79,"li",21)(80,"a",34),e.\u0275\u0275text(81,"Next Process "),e.\u0275\u0275elementEnd()()()()()()()(),e.\u0275\u0275elementStart(82,"div",35)(83,"div",4)(84,"div",5)(85,"h4",36),e.\u0275\u0275text(86,"Inward Scrap Report"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(87,"app-table",37),e.\u0275\u0275elementEnd()()()()()),2&a&&(e.\u0275\u0275advance(1),e.\u0275\u0275property("breadcrumbItems",o.breadCrumbItems),e.\u0275\u0275advance(7),e.\u0275\u0275property("navBarLayout","large-empty-symbols"),e.\u0275\u0275advance(9),e.\u0275\u0275property("items",o.grnNumbers),e.\u0275\u0275advance(5),e.\u0275\u0275property("disabled",!0),e.\u0275\u0275advance(5),e.\u0275\u0275property("disabled",!0),e.\u0275\u0275advance(5),e.\u0275\u0275property("disabled",!0),e.\u0275\u0275advance(55),e.\u0275\u0275property("HeadingArray",o.scrappurchaseHeadingArray)("BodyArray",o.scrappurchaseBodyArray)("source",!1))},dependencies:[c._Y,c.JL,c.F,s.yS,p.V,u.a,i.Pl,i.GZ,i.j,i.ei,i.O6,v.w9],styles:[".bg-card[_ngcontent-%COMP%]{background-color:#25413733}.btn-ibex[_ngcontent-%COMP%]{background-color:#fa7f17}"]}),t})()},{path:"scrapinspection",component:h}];let x=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[s.Bz.forChild(A),s.Bz]}),t})();var C=n(9668),I=n(1819),M=n(1244),l=n(5876),w=n(7303),E=n(4466);let P=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[d.CommonModule,c.u5,c.UX,x,C.v,l.XC,l.HK,l.Oz,l.mH,I.y,M.X,E.m,w.t,l.M,l.ZS,l.jF,i.O,l.dT,v.A0]}),t})()}}]);