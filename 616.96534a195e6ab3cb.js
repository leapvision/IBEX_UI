"use strict";(self.webpackChunkibex=self.webpackChunkibex||[]).push([[616],{4616:(B,c,n)=>{n.r(c),n.d(c,{PackingModule:()=>M});var s=n(6895),m=n(4006),o=n(9158),e=n(4650),g=n(7054),v=n(9234),p=n(7408),i=n(9189);function u(t,r){1&t&&(e.\u0275\u0275elementStart(0,"b"),e.\u0275\u0275text(1,"1"),e.\u0275\u0275elementEnd())}function b(t,r){1&t&&(e.\u0275\u0275elementStart(0,"b"),e.\u0275\u0275text(1,"2"),e.\u0275\u0275elementEnd())}function x(t,r){1&t&&(e.\u0275\u0275elementStart(0,"b"),e.\u0275\u0275text(1,"3"),e.\u0275\u0275elementEnd())}const S=[{path:"",component:(()=>{class t{constructor(a){this.packingService=a,this.packingHeadingArray=this.packingService.getPackingReport().heading,this.packingBodyArray=this.packingService.getPackingReport().body}ngOnInit(){this.breadCrumbItems=[{label:"Packing"},{label:"Ingots",active:!0}]}}return t.\u0275fac=function(a){return new(a||t)(e.\u0275\u0275directiveInject(g.A))},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["app-packingingots"]],features:[e.\u0275\u0275ProvidersFeature([s.DecimalPipe])],decls:127,vars:5,consts:[[1,"container-fluid"],["title","",3,"breadcrumbItems"],[1,"row"],[1,"col-lg-12","align-items-center"],[1,"card"],[1,"card-body"],[1,"card-title","mb-4","text-center"],[3,"navBarLayout"],["stepTitle","Add Heat Numbers"],["awWizardStepSymbol",""],[1,"row","mb-4","mt-4","justify-content-center"],[1,"col-12"],[1,"card","border","border-primary","card-body"],[1,"card-title","text-center"],[1,"row","mb-4","text-center","mt-4"],["for","horizontal-firstname-input",1,"col-sm-12"],[1,"col-sm-4"],[1,"card","bg-success","border","border-success","card-body"],[1,"card-title","text-white","text-center"],[1,"list-inline","wizard","mb-0"],[1,"next","list-inline-item","float-end"],["awNextStep","",1,"btn","btn-primary"],["stepTitle","Ingot Final Inspection"],[1,"row","mb-4","justify-content-center","mt-4"],[1,"row","mb-4"],["for","horizontal-password-input",1,"col-sm-3","col-form-label"],[1,"col-sm-9"],["type","number",1,"form-control"],["type","text",1,"form-control"],[1,"previous","list-inline-item"],["awPreviousStep","",1,"btn","btn-primary"],["stepTitle","Confirm"],[1,"row","justify-content-center"],[1,"col-xl","col-sm-6"],[1,"mt-3","mb-0","text-center"],["type","button","routerLink","/pages/dispatch/fas",1,"btn","btn-ibex","btn-lg","w-md","text-black"],[3,"HeadingArray","BodyArray","source"]],template:function(a,d){1&a&&(e.\u0275\u0275elementStart(0,"div",0),e.\u0275\u0275element(1,"app-page-title",1),e.\u0275\u0275elementStart(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h4",6),e.\u0275\u0275text(7,"Ingot Packing"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"aw-wizard",7)(9,"aw-wizard-step",8),e.\u0275\u0275template(10,u,2,0,"ng-template",9),e.\u0275\u0275elementStart(11,"div",10)(12,"div",11)(13,"div",12)(14,"h3",13),e.\u0275\u0275text(15,"Pallet Number - 1"),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(16,"form")(17,"div",14)(18,"label",15),e.\u0275\u0275text(19,"Choose Heat Number 1"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(20,"div",2)(21,"div",16)(22,"div",17)(23,"h3",18),e.\u0275\u0275text(24," IBEX-MW-01-1001-221222 "),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(25,"div",16)(26,"div",12)(27,"h3",13),e.\u0275\u0275text(28," IBEX-MW-01-1002-221220 "),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(29,"div",16)(30,"div",12)(31,"h3",13),e.\u0275\u0275text(32," IBEX-MW-02-1003-221210 "),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(33,"div",14)(34,"label",15),e.\u0275\u0275text(35,"Choose Heat Number 2"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(36,"div",2)(37,"div",16)(38,"div",12)(39,"h3",13),e.\u0275\u0275text(40," IBEX-MW-01-1002-221220 "),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(41,"div",16)(42,"div",17)(43,"h3",18),e.\u0275\u0275text(44," IBEX-MW-02-1002-221220 "),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(45,"div",16)(46,"div",12)(47,"h3",13),e.\u0275\u0275text(48," IBEX-MW-02-1003-221210 "),e.\u0275\u0275elementEnd()()()()(),e.\u0275\u0275elementStart(49,"ul",19)(50,"li",20)(51,"button",21),e.\u0275\u0275text(52,"Next"),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(53,"aw-wizard-step",22),e.\u0275\u0275template(54,b,2,0,"ng-template",9),e.\u0275\u0275elementStart(55,"div",23)(56,"div",11)(57,"div",12)(58,"h3",13),e.\u0275\u0275text(59,"Pallet Number - 1"),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(60,"form")(61,"div",24)(62,"label",25),e.\u0275\u0275text(63,"Total weight with Pallet(KG)"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(64,"div",26),e.\u0275\u0275element(65,"input",27),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(66,"div",24)(67,"label",25),e.\u0275\u0275text(68,"Pallet Weight(KG)"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(69,"div",26),e.\u0275\u0275element(70,"input",27),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(71,"div",24)(72,"label",25),e.\u0275\u0275text(73,"Ingot Weight(KG)"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(74,"div",26),e.\u0275\u0275element(75,"input",27),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(76,"div",24)(77,"label",25),e.\u0275\u0275text(78,"Remarks"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(79,"div",26),e.\u0275\u0275element(80,"input",28),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(81,"ul",19)(82,"li",29)(83,"button",30),e.\u0275\u0275text(84," Previous "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(85,"li",20)(86,"button",21),e.\u0275\u0275text(87,"Next"),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(88,"aw-wizard-step",31),e.\u0275\u0275template(89,x,2,0,"ng-template",9),e.\u0275\u0275elementStart(90,"div",32)(91,"div",33)(92,"div",34)(93,"div",17)(94,"h3",18),e.\u0275\u0275text(95," Pallet Number - 1 "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(96,"div",17)(97,"h3",18),e.\u0275\u0275text(98," Heat Number 1 - IBEX-MW-01-1001-221222 "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(99,"div",17)(100,"h3",18),e.\u0275\u0275text(101," Heat Number 2 - IBEX-MW-01-1002-221220 "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(102,"div",17)(103,"h3",18),e.\u0275\u0275text(104," Total Weight With Pallet - 962 KG "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(105,"div",17)(106,"h3",18),e.\u0275\u0275text(107," Pallet Weight - 12 KG "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(108,"div",17)(109,"h3",18),e.\u0275\u0275text(110," Ingot Weight - 950 KG "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(111,"div",17)(112,"h3",18),e.\u0275\u0275text(113," Remakrs - None "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(114,"a",35),e.\u0275\u0275text(115," Push to FAS "),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(116,"br"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(117,"ul",19)(118,"li",29)(119,"button",30),e.\u0275\u0275text(120," Previous "),e.\u0275\u0275elementEnd()()()()()()()(),e.\u0275\u0275elementStart(121,"div",3)(122,"div",4)(123,"div",5)(124,"h4",13),e.\u0275\u0275text(125,"Packing Report"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(126,"app-table",36),e.\u0275\u0275elementEnd()()()()()),2&a&&(e.\u0275\u0275advance(1),e.\u0275\u0275property("breadcrumbItems",d.breadCrumbItems),e.\u0275\u0275advance(7),e.\u0275\u0275property("navBarLayout","large-empty-symbols"),e.\u0275\u0275advance(118),e.\u0275\u0275property("HeadingArray",d.packingHeadingArray)("BodyArray",d.packingBodyArray)("source",!1))},dependencies:[m._Y,m.JL,m.F,o.yS,v.V,p.a,i.Pl,i.GZ,i.j,i.ei,i.O6],styles:[".bg-card[_ngcontent-%COMP%]{background-color:#25413733}.btn-ibex[_ngcontent-%COMP%]{background-color:#fa7f17}"]}),t})()}];let h=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[o.Bz.forChild(S),o.Bz]}),t})();var E=n(9668),f=n(1819),y=n(1244),P=n(139),I=n(9182),l=n(5876),k=n(7303),C=n(4466);let M=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[s.CommonModule,m.u5,m.UX,h,E.v,l.XC,l.HK,l.Oz,l.mH,f.y,y.X,C.m,k.t,l.M,l.ZS,l.jF,i.O,l.dT,l.Gs,P.A0,I.Ti]}),t})()}}]);