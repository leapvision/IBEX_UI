"use strict";(self.webpackChunkibex=self.webpackChunkibex||[]).push([[985],{4985:(N,f,l)=>{l.r(f),l.d(f,{ScrapManagementModule:()=>oe});var c=l(6895),o=l(4006),_=l(9158);const b=[{slNo:"1",date:"22/12/2022",alloyName:"AM50A",source:"Steel Line India",weight:"700"},{slNo:"2",date:"20/12/2022",alloyName:"AM50A",source:"CMR",weight:"500"},{slNo:"3",date:"12/12/2022",alloyName:"AZ91D",source:"Sunland",weight:"200"}];var h=l(591),u=l(8929),E=l(1086),S=l(2994),w=l(13),I=l(7545),T=l(8583),e=l(4650);let M=(()=>{class n{constructor(t){this.pipe=t,this._loading$=new h.X(!0),this._search$=new u.xQ,this._tables$=new h.X([]),this._total$=new h.X(0),this._state={page:1,pageSize:10,searchTerm:"",sortColumn:"",sortDirection:"",startIndex:0,endIndex:9,totalRecords:0},this._search$.pipe((0,S.b)(()=>this._loading$.next(!0)),(0,w.b)(200),(0,I.w)(()=>this._search()),(0,T.g)(200),(0,S.b)(()=>this._loading$.next(!1))).subscribe(r=>{this._tables$.next(r.tables),this._total$.next(r.total)}),this._search$.next()}get tables$(){return this._tables$.asObservable()}get total$(){return this._total$.asObservable()}get loading$(){return this._loading$.asObservable()}get page(){return this._state.page}get pageSize(){return this._state.pageSize}get searchTerm(){return this._state.searchTerm}get startIndex(){return this._state.startIndex}get endIndex(){return this._state.endIndex}get totalRecords(){return this._state.totalRecords}set page(t){this._set({page:t})}set pageSize(t){this._set({pageSize:t})}set startIndex(t){this._set({startIndex:t})}set endIndex(t){this._set({endIndex:t})}set totalRecords(t){this._set({totalRecords:t})}set searchTerm(t){this._set({searchTerm:t})}set sortColumn(t){this._set({sortColumn:t})}set sortDirection(t){this._set({sortDirection:t})}_set(t){Object.assign(this._state,t),this._search$.next()}_search(){const{sortColumn:t,sortDirection:r,page:i,searchTerm:x}=this._state;let p=function V(n,a,t){return""===t||""===a?n:[...n].sort((r,s)=>{const i=((n,a)=>n<a?-1:n>a?1:0)(`${r[a]}`,`${s[a]}`);return"asc"===t?i:-i})}(b,t,r);p=p.filter(C=>function B(n,a,t){return n.slNo.toLowerCase().includes(a.toLowerCase())||n.date.toLowerCase().includes(a)||n.alloyName.toLowerCase().includes(a)||n.source.toLowerCase().includes(a)||n.weight.toLowerCase().includes(a)}(C,x));const y=p.length;return this.totalRecords=p.length,this._state.startIndex=(i-1)*this.pageSize+1,this._state.endIndex=(i-1)*this.pageSize+this.pageSize,this.endIndex>this.totalRecords&&(this.endIndex=this.totalRecords),p=p.slice(this._state.startIndex-1,this._state.endIndex),(0,E.of)({tables:p,total:y})}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275inject(c.DecimalPipe))},n.\u0275prov=e.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const R={asc:"desc",desc:"","":"asc"};let A=(()=>{class n{constructor(){this.direction="",this.sort=new e.EventEmitter}rotate(){this.direction=R[this.direction],this.sort.emit({column:this.sortable,direction:this.direction})}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275dir=e.\u0275\u0275defineDirective({type:n,selectors:[["th","sortable",""]],hostVars:4,hostBindings:function(t,r){1&t&&e.\u0275\u0275listener("click",function(){return r.rotate()}),2&t&&e.\u0275\u0275classProp("asc","asc"===r.direction)("desc","desc"===r.direction)},inputs:{sortable:"sortable",direction:"direction"},outputs:{sort:"sort"}}),n})();var $=l(9234),m=l(5876);function L(n,a){1&n&&(e.\u0275\u0275elementStart(0,"span"),e.\u0275\u0275text(1,"+"),e.\u0275\u0275elementEnd())}function F(n,a){1&n&&(e.\u0275\u0275elementStart(0,"span"),e.\u0275\u0275text(1,"-"),e.\u0275\u0275elementEnd())}function j(n,a){1&n&&(e.\u0275\u0275elementStart(0,"tr",33),e.\u0275\u0275element(1,"td",28),e.\u0275\u0275elementStart(2,"td",34)(3,"div",35)(4,"div",36)(5,"div",37)(6,"h3",38),e.\u0275\u0275text(7," Al (%) "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"p",39),e.\u0275\u0275text(9,"5.00"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(10,"div",36)(11,"div",37)(12,"h3",38),e.\u0275\u0275text(13," Zn (%) "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(14,"p",39),e.\u0275\u0275text(15,"0.060"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(16,"div",36)(17,"div",40)(18,"h3",38),e.\u0275\u0275text(19," Mn (%) "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(20,"p",39),e.\u0275\u0275text(21,"0.292"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(22,"div",36)(23,"div",37)(24,"h3",38),e.\u0275\u0275text(25," Si (%) "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(26,"p",39),e.\u0275\u0275text(27,"0.018"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(28,"div",36)(29,"div",37)(30,"h3",38),e.\u0275\u0275text(31," Fe (%) "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(32,"p",39),e.\u0275\u0275text(33,"0.0026"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(34,"div",36)(35,"div",37)(36,"h3",38),e.\u0275\u0275text(37," Cu (%) "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(38,"p",39),e.\u0275\u0275text(39," <0.0004 "),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(40,"div",36)(41,"div",37)(42,"h3",38),e.\u0275\u0275text(43," Ni (%) "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(44,"p",39),e.\u0275\u0275text(45,"0.0010"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(46,"div",36)(47,"div",37)(48,"h3",38),e.\u0275\u0275text(49," Be (%) "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(50,"p",39),e.\u0275\u0275text(51,"0.0006"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(52,"div",36)(53,"div",41)(54,"h3",38),e.\u0275\u0275text(55," Ca (%) "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(56,"p",39),e.\u0275\u0275text(57,"0.0018"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(58,"div",36)(59,"div",41)(60,"h3",38),e.\u0275\u0275text(61," Cd (%) "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(62,"p",39),e.\u0275\u0275text(63,"0.0001"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(64,"div",36)(65,"div",37)(66,"h3",38),e.\u0275\u0275text(67," Ag (%) "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(68,"p",39),e.\u0275\u0275text(69,"0.0006"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(70,"div",36)(71,"div",37)(72,"h3",38),e.\u0275\u0275text(73," La (%) "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(74,"p",39),e.\u0275\u0275text(75,"0.0015"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(76,"div",36)(77,"div",37)(78,"h3",38),e.\u0275\u0275text(79," Zr (%) "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(80,"p",39),e.\u0275\u0275text(81,"0.0015"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(82,"div",36)(83,"div",37)(84,"h3",38),e.\u0275\u0275text(85," Na (%) "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(86,"p",39),e.\u0275\u0275text(87," ~0.0080 "),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(88,"div",36)(89,"div",37)(90,"h3",38),e.\u0275\u0275text(91," P (%) "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(92,"p",39),e.\u0275\u0275text(93,"0.0080"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(94,"div",36)(95,"div",37)(96,"h3",38),e.\u0275\u0275text(97," Pb (%) "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(98,"p",39),e.\u0275\u0275text(99,"0.0040"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(100,"div",36)(101,"div",37)(102,"h3",38),e.\u0275\u0275text(103," Sn (%) "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(104,"p",39),e.\u0275\u0275text(105,"0.011"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(106,"div",36)(107,"div",37)(108,"h3",38),e.\u0275\u0275text(109," Mg (%) "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(110,"p",39),e.\u0275\u0275text(111,"94.6"),e.\u0275\u0275elementEnd()()()()()())}function k(n,a){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"tbody")(1,"tr")(2,"td",28)(3,"a",29),e.\u0275\u0275listener("click",function(){const i=e.\u0275\u0275restoreView(t).index,x=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(x.changeValue(i))}),e.\u0275\u0275template(4,L,2,0,"span",30),e.\u0275\u0275template(5,F,2,0,"span",30),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(6,"td"),e.\u0275\u0275element(7,"ngb-highlight",31),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"td"),e.\u0275\u0275element(9,"ngb-highlight",31),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(10,"td"),e.\u0275\u0275element(11,"ngb-highlight",31),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(12,"td"),e.\u0275\u0275element(13,"ngb-highlight",31),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(14,"td"),e.\u0275\u0275element(15,"ngb-highlight",31),e.\u0275\u0275elementEnd()(),e.\u0275\u0275template(16,j,112,0,"tr",32),e.\u0275\u0275elementEnd()}if(2&n){const t=a.$implicit,r=a.index,s=e.\u0275\u0275nextContext();e.\u0275\u0275advance(4),e.\u0275\u0275property("ngIf",s.hideme[r]),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!s.hideme[r]),e.\u0275\u0275advance(2),e.\u0275\u0275property("result",t.slNo)("term",s.service.searchTerm),e.\u0275\u0275advance(2),e.\u0275\u0275property("result",t.date)("term",s.service.searchTerm),e.\u0275\u0275advance(2),e.\u0275\u0275property("result",t.alloyName)("term",s.service.searchTerm),e.\u0275\u0275advance(2),e.\u0275\u0275property("result",t.source)("term",s.service.searchTerm),e.\u0275\u0275advance(2),e.\u0275\u0275property("result",t.weight)("term",s.service.searchTerm),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!s.hideme[r])}}let H=(()=>{class n{constructor(t){this.service=t,this.hideme=[],this.isCollapsed=!0,this.tables$=t.tables$,this.total$=t.total$}ngOnInit(){this.breadCrumbItems=[{label:"Scrap Management"},{label:"Inward Scrap",active:!0}],this._fetchData()}changeValue(t){this.hideme[t]=!this.hideme[t]}_fetchData(){this.tableData=b;for(let t=0;t<=this.tableData.length;t++)this.hideme.push(!0)}onSort({column:t,direction:r}){this.headers.forEach(s=>{s.sortable!==t&&(s.direction="")}),this.service.sortColumn=t,this.service.sortDirection=r}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(M))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["app-scrapinspection"]],viewQuery:function(t,r){if(1&t&&e.\u0275\u0275viewQuery(A,5),2&t){let s;e.\u0275\u0275queryRefresh(s=e.\u0275\u0275loadQuery())&&(r.headers=s)}},features:[e.\u0275\u0275ProvidersFeature([M,c.DecimalPipe])],decls:53,vars:18,consts:[[1,"container-fluid"],["title","",3,"breadcrumbItems"],[1,"row"],[1,"col-12"],[1,"card"],[1,"card-body"],[1,"card-title"],[1,"row","mb-md-2"],[1,"col-sm-12","col-md-6"],["id","tickets-table_length",1,"dataTables_length"],[1,"d-inline-flex","align-items-center"],["name","tickets-table_length","aria-controls","tickets-table","name","pageSize",1,"form-control","form-control-sm","mx-2",3,"ngModel","ngModelChange"],[3,"ngValue"],["id","tickets-table_filter",1,"dataTables_filter","text-md-end"],["type","text","name","searchTerm","aria-controls","tickets-table",1,"form-control","form-control-sm","ms-2",3,"ngModel","ngModelChange"],[1,"table-responsive"],["id","basic-datatable",1,"table","table-bordered","dt-responsive","nowrap","datatables","no-footer","dtr-inline"],["sortable","slNo",3,"sort"],["sortable","date",3,"sort"],["sortable","alloyName",3,"sort"],["sortable","source",3,"sort"],["sortable","weight",3,"sort"],[4,"ngFor","ngForOf"],[1,"row","justify-content-md-between","align-items-md-center","mt-2"],[1,"col-sm-12","col-md-5"],["id","tickets-table_info","role","status","aria-live","polite",1,"dataTables_info","mb-2"],[1,"text-md-right","float-md-end","pagination-rounded"],[3,"collectionSize","page","pageSize","pageChange"],["align","center"],[1,"expand-row",3,"click"],[4,"ngIf"],[3,"result","term"],["class","sub-table no-bg",4,"ngIf"],[1,"sub-table","no-bg"],["colspan","15",1,"p-0"],[1,"row","m-1"],[1,"col-lg-2","col-sm-4"],[1,"card","bg-success","border","border-success","card-body"],[1,"card-title","text-white","text-center"],[1,"card-text","text-white","text-center"],["ngbPopover","Value out of range","triggers","mouseenter:mouseleave",1,"card","bg-warning","border","border-warning","card-body"],[1,"card","bg-danger","border","border-danger","card-body"]],template:function(t,r){1&t&&(e.\u0275\u0275elementStart(0,"div",0),e.\u0275\u0275element(1,"app-page-title",1),e.\u0275\u0275elementStart(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h4",6),e.\u0275\u0275text(7,"Chemical Composition Check"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"div",7)(9,"div",8)(10,"div",9)(11,"label",10),e.\u0275\u0275text(12,"Show "),e.\u0275\u0275elementStart(13,"select",11),e.\u0275\u0275listener("ngModelChange",function(i){return r.service.pageSize=i}),e.\u0275\u0275elementStart(14,"option",12),e.\u0275\u0275text(15,"10"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(16,"option",12),e.\u0275\u0275text(17,"25"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(18,"option",12),e.\u0275\u0275text(19,"50"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(20,"option",12),e.\u0275\u0275text(21,"100"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275text(22," entries"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(23,"div",8)(24,"div",13)(25,"label",10),e.\u0275\u0275text(26,"Search: "),e.\u0275\u0275elementStart(27,"input",14),e.\u0275\u0275listener("ngModelChange",function(i){return r.service.searchTerm=i}),e.\u0275\u0275elementEnd()()()()(),e.\u0275\u0275elementStart(28,"div",15)(29,"table",16)(30,"thead")(31,"tr"),e.\u0275\u0275element(32,"th"),e.\u0275\u0275elementStart(33,"th",17),e.\u0275\u0275listener("sort",function(i){return r.onSort(i)}),e.\u0275\u0275text(34,"Sl No"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(35,"th",18),e.\u0275\u0275listener("sort",function(i){return r.onSort(i)}),e.\u0275\u0275text(36,"Date"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(37,"th",19),e.\u0275\u0275listener("sort",function(i){return r.onSort(i)}),e.\u0275\u0275text(38," Alloy Name "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(39,"th",20),e.\u0275\u0275listener("sort",function(i){return r.onSort(i)}),e.\u0275\u0275text(40,"Source"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(41,"th",21),e.\u0275\u0275listener("sort",function(i){return r.onSort(i)}),e.\u0275\u0275text(42,"Weight"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275template(43,k,17,13,"tbody",22),e.\u0275\u0275pipe(44,"async"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(45,"div",23)(46,"div",24)(47,"div",25),e.\u0275\u0275text(48),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(49,"div",24)(50,"div",26)(51,"ngb-pagination",27),e.\u0275\u0275listener("pageChange",function(i){return r.service.page=i}),e.\u0275\u0275pipe(52,"async"),e.\u0275\u0275elementEnd()()()()()()()()()),2&t&&(e.\u0275\u0275advance(1),e.\u0275\u0275property("breadcrumbItems",r.breadCrumbItems),e.\u0275\u0275advance(12),e.\u0275\u0275property("ngModel",r.service.pageSize),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngValue",10),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngValue",25),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngValue",50),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngValue",100),e.\u0275\u0275advance(7),e.\u0275\u0275property("ngModel",r.service.searchTerm),e.\u0275\u0275advance(16),e.\u0275\u0275property("ngForOf",e.\u0275\u0275pipeBind1(44,14,r.tables$)),e.\u0275\u0275advance(5),e.\u0275\u0275textInterpolate3(" Showing ",r.service.startIndex," to ",r.service.endIndex," of ",r.service.totalRecords," entries "),e.\u0275\u0275advance(3),e.\u0275\u0275property("collectionSize",e.\u0275\u0275pipeBind1(52,16,r.total$))("page",r.service.page)("pageSize",r.service.pageSize))},dependencies:[c.NgForOf,c.NgIf,o.YN,o.Kr,o.Fj,o.EJ,o.JJ,o.On,$.V,m._h,m.N9,m.o8,c.AsyncPipe],styles:[".bg-card[_ngcontent-%COMP%]{background-color:#25413733}.btn-ibex[_ngcontent-%COMP%]{background-color:#fa7f17}.expand-row[_ngcontent-%COMP%]{cursor:pointer}"]}),n})();const K={asc:"desc",desc:"","":"asc"};let Q=(()=>{class n{constructor(){this.direction="",this.sort=new e.EventEmitter}rotate(){this.direction=K[this.direction],this.sort.emit({column:this.sortable,direction:this.direction})}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275dir=e.\u0275\u0275defineDirective({type:n,selectors:[["th","sortable",""]],hostVars:4,hostBindings:function(t,r){1&t&&e.\u0275\u0275listener("click",function(){return r.rotate()}),2&t&&e.\u0275\u0275classProp("asc","asc"===r.direction)("desc","desc"===r.direction)},inputs:{sortable:"sortable",direction:"direction"},outputs:{sort:"sort"}}),n})();const P=[{status:"Completed",date:"03 Mar, 2020",type:"Buy",coin:"Bitcoin",value:"1.00952 BTC",usd:"$ 9067.62"},{status:"Completed",date:"04 Mar, 2020",type:"Buy",coin:"Litecoin",value:"0.00214 LTC",usd:"$ 9067.62"},{status:"Pending",date:"05 Mar, 2020",type:"Sell",coin:"Bitcoin",value:"1.00952 BTC",usd:"$ 9067.62"},{status:"Completed",date:"03 Mar, 2020",type:"Sell",coin:"Ethereum",value:"0.00413 ETH",usd:"$ 2123.01"},{status:"Completed",date:"08 Mar, 2020",type:"Buy",coin:"Litecoin",value:"1.00124 LTC",usd:"$ 1802.62"},{status:"Pending",date:"06 Mar, 2020",type:"Sell",coin:"Ethereum",value:"0.00413 ETH",usd:"$ 2123.01"},{status:"Failed",date:"05 Mar, 2020",type:"Buy",coin:"Bitcoin",value:"1.00952 BTC",usd:"$ 9067.62"},{status:"Completed",date:"03 Mar, 2020",type:"Buy",coin:"Ethereum",value:"0.00413 ETH",usd:"$ 2123.01"},{status:"Pending",date:"10 Mar, 2020",type:"Buy",coin:"Bitcoin",value:"1.00952 BTC",usd:"$ 9067.62"},{status:"Pending",date:"18 Mar, 2020",type:"Buy",coin:"Litecoin",value:"0.00224 LTC",usd:"$ 1773.01"},{status:"Completed",date:"03 Mar, 2020",type:"Buy",coin:"Bitcoin",value:"1.00952 BTC",usd:"$ 9423.73"},{status:"Pending",date:"15 Mar, 2020",type:"Sell",coin:"Ethereum",value:"0.00413 ETH",usd:"$ 2123.01"},{status:"Completed",date:"03 Mar, 2020",type:"Sell",coin:"Bitcoin",value:"1.00952 BTC",usd:"$ 9067.62"},{status:"Failed",date:"01 Mar, 2020",type:"Sell",coin:"Litecoin",value:"1.00217 LTC",usd:"$ 9067.62"}];let z=(()=>{class n{constructor(t){this.pipe=t,this._loading$=new h.X(!0),this._search$=new u.xQ,this._orders$=new h.X([]),this._total$=new h.X(0),this._state={page:1,pageSize:10,searchTerm:"",sortColumn:"",sortDirection:"",startIndex:1,endIndex:10,totalRecords:0,coin:"",type:"",status:""},this._search$.pipe((0,S.b)(()=>this._loading$.next(!0)),(0,w.b)(200),(0,I.w)(()=>this._search()),(0,T.g)(200),(0,S.b)(()=>this._loading$.next(!1))).subscribe(r=>{this._orders$.next(r.orders),this._total$.next(r.total)}),this._search$.next()}get orders$(){return this._orders$.asObservable()}get total$(){return this._total$.asObservable()}get loading$(){return this._loading$.asObservable()}get page(){return this._state.page}get pageSize(){return this._state.pageSize}get searchTerm(){return this._state.searchTerm}get startIndex(){return this._state.startIndex}get endIndex(){return this._state.endIndex}get totalRecords(){return this._state.totalRecords}get coin(){return this._state.coin}get type(){return this._state.type}get status(){return this._state.type}set page(t){this._set({page:t})}set pageSize(t){this._set({pageSize:t})}set startIndex(t){this._set({startIndex:t})}set endIndex(t){this._set({endIndex:t})}set totalRecords(t){this._set({totalRecords:t})}set searchTerm(t){this._set({searchTerm:t})}set sortColumn(t){this._set({sortColumn:t})}set sortDirection(t){this._set({sortDirection:t})}set coin(t){this._set({coin:t})}set type(t){this._set({type:t})}set status(t){this._set({status:t})}_set(t){Object.assign(this._state,t),this._search$.next()}_search(){const{sortColumn:t,sortDirection:r,page:i,searchTerm:x,coin:p,type:y,status:C}=this._state;let d=function W(n,a,t){return""===t?n:[...n].sort((r,s)=>{const i=function X(n,a){return n<a?-1:n>a?1:0}(r[a],s[a]);return"asc"===t?i:-i})}(P,t,r);d=d.filter(g=>function G(n,a,t){return n.status.toLowerCase().includes(a)||n.date.toLowerCase().includes(a)||n.type.toLowerCase().includes(a)||n.coin.toLowerCase().includes(a)||n.value.toLowerCase().includes(a)||n.usd.toLowerCase().includes(a)}(g,x)),p&&(d=d.filter(g=>g.coin==p)),y&&(d=d.filter(g=>g.type==y)),C&&(d=d.filter(g=>g.status==C));const de=d.length;return this.totalRecords=d.length,this._state.startIndex=(i-1)*this.pageSize,this._state.endIndex=(i-1)*this.pageSize+this.pageSize,this.endIndex>this.totalRecords&&(this.endIndex=this.totalRecords),d=d.slice(this._state.startIndex,this._state.endIndex),(0,E.of)({orders:d,total:de})}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275inject(c.DecimalPipe))},n.\u0275prov=e.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var v=l(9189),D=l(150);function J(n,a){1&n&&(e.\u0275\u0275elementStart(0,"b"),e.\u0275\u0275text(1,"1"),e.\u0275\u0275elementEnd())}function U(n,a){1&n&&(e.\u0275\u0275elementStart(0,"b"),e.\u0275\u0275text(1,"2"),e.\u0275\u0275elementEnd())}function Z(n,a){1&n&&(e.\u0275\u0275elementStart(0,"b"),e.\u0275\u0275text(1,"3"),e.\u0275\u0275elementEnd())}const Y=function(n,a,t){return{"bg-success":n,"bg-warning":a,"bg-danger":t}};function q(n,a){if(1&n&&(e.\u0275\u0275elementStart(0,"tr")(1,"td"),e.\u0275\u0275element(2,"ngb-highlight",62),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"td"),e.\u0275\u0275element(4,"ngb-highlight",62),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"td"),e.\u0275\u0275element(6,"ngb-highlight",62),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"td"),e.\u0275\u0275element(8,"ngb-highlight",62),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(9,"td"),e.\u0275\u0275element(10,"ngb-highlight",62),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"td"),e.\u0275\u0275element(12,"ngb-highlight",63),e.\u0275\u0275elementEnd()()),2&n){const t=a.$implicit,r=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(2),e.\u0275\u0275property("result",t.date)("term",r.service.searchTerm),e.\u0275\u0275advance(2),e.\u0275\u0275property("result",t.type)("term",r.service.searchTerm),e.\u0275\u0275advance(2),e.\u0275\u0275property("result",t.coin)("term",r.service.searchTerm),e.\u0275\u0275advance(2),e.\u0275\u0275property("result",t.value)("term",r.service.searchTerm),e.\u0275\u0275advance(2),e.\u0275\u0275property("result",t.usd)("term",r.service.searchTerm),e.\u0275\u0275advance(2),e.\u0275\u0275property("result",t.status)("term",r.service.searchTerm)("ngClass",e.\u0275\u0275pureFunction3(13,Y,"Completed"===t.status,"Pending"===t.status,"Failed"===t.status))}}function ee(n,a){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",41)(1,"div",42)(2,"div",43)(3,"label",44),e.\u0275\u0275text(4,"Show "),e.\u0275\u0275elementStart(5,"select",45),e.\u0275\u0275listener("ngModelChange",function(s){e.\u0275\u0275restoreView(t);const i=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(i.service.pageSize=s)}),e.\u0275\u0275elementStart(6,"option",46),e.\u0275\u0275text(7,"10"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"option",46),e.\u0275\u0275text(9,"25"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(10,"option",46),e.\u0275\u0275text(11,"50"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(12,"option",46),e.\u0275\u0275text(13,"100"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275text(14," entries"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(15,"div",42)(16,"div",47)(17,"label",44),e.\u0275\u0275text(18,"Search: "),e.\u0275\u0275elementStart(19,"input",48),e.\u0275\u0275listener("ngModelChange",function(s){e.\u0275\u0275restoreView(t);const i=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(i.service.searchTerm=s)}),e.\u0275\u0275elementEnd()()()()(),e.\u0275\u0275elementStart(20,"table",49)(21,"thead")(22,"tr")(23,"th",50),e.\u0275\u0275listener("sort",function(s){e.\u0275\u0275restoreView(t);const i=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(i.onSort(s))}),e.\u0275\u0275text(24,"Date"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(25,"th",51),e.\u0275\u0275listener("sort",function(s){e.\u0275\u0275restoreView(t);const i=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(i.onSort(s))}),e.\u0275\u0275text(26,"Type"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(27,"th",52),e.\u0275\u0275listener("sort",function(s){e.\u0275\u0275restoreView(t);const i=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(i.onSort(s))}),e.\u0275\u0275text(28,"Coin"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(29,"th",53),e.\u0275\u0275listener("sort",function(s){e.\u0275\u0275restoreView(t);const i=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(i.onSort(s))}),e.\u0275\u0275text(30,"Value"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(31,"th",54),e.\u0275\u0275listener("sort",function(s){e.\u0275\u0275restoreView(t);const i=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(i.onSort(s))}),e.\u0275\u0275text(32,"Value in USD"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(33,"th",55),e.\u0275\u0275listener("sort",function(s){e.\u0275\u0275restoreView(t);const i=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(i.onSort(s))}),e.\u0275\u0275text(34,"Status"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(35,"tbody"),e.\u0275\u0275template(36,q,13,17,"tr",56),e.\u0275\u0275pipe(37,"async"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(38,"div",57)(39,"div",58)(40,"div",59),e.\u0275\u0275text(41),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(42,"div",58)(43,"div",60)(44,"ngb-pagination",61),e.\u0275\u0275listener("pageChange",function(s){e.\u0275\u0275restoreView(t);const i=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(i.service.page=s)}),e.\u0275\u0275pipe(45,"async"),e.\u0275\u0275elementEnd()()()()}if(2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(5),e.\u0275\u0275property("ngModel",t.service.pageSize),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngValue",10),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngValue",25),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngValue",50),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngValue",100),e.\u0275\u0275advance(7),e.\u0275\u0275property("ngModel",t.service.searchTerm),e.\u0275\u0275advance(17),e.\u0275\u0275property("ngForOf",e.\u0275\u0275pipeBind1(37,13,t.orders$)),e.\u0275\u0275advance(5),e.\u0275\u0275textInterpolate3(" Showing ",t.service.startIndex+1," to ",t.service.endIndex," of ",t.service.totalRecords," entries "),e.\u0275\u0275advance(3),e.\u0275\u0275property("collectionSize",e.\u0275\u0275pipeBind1(45,15,t.total$))("page",t.service.page)("pageSize",t.service.pageSize)}}const te=[{path:"scrappurchase",component:(()=>{class n{constructor(t){this.service=t,this.grnNumbers=[],this.orders$=t.orders$,this.total$=t.total$}ngOnInit(){this.breadCrumbItems=[{label:"Scrap Management"},{label:"Inward Scrap",active:!0}],this.grnNumbers=["1","2","3","4","5"],this.ordersData=P}onSort({column:t,direction:r}){this.headers.forEach(s=>{s.sortable!==t&&(s.direction="")}),this.service.sortColumn=t,this.service.sortDirection=r}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(z))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["app-scrappurchase"]],viewQuery:function(t,r){if(1&t&&e.\u0275\u0275viewQuery(Q,5),2&t){let s;e.\u0275\u0275queryRefresh(s=e.\u0275\u0275loadQuery())&&(r.headers=s)}},features:[e.\u0275\u0275ProvidersFeature([z,c.DecimalPipe])],decls:153,vars:6,consts:[[1,"container-fluid"],["title","",3,"breadcrumbItems"],[1,"row"],[1,"col-lg-6","align-items-center"],[1,"card"],[1,"card-body"],[1,"card-title","mb-4","text-center"],[3,"navBarLayout"],["stepTitle","Scrap Details"],["awWizardStepSymbol",""],[1,"row","mt-3","justify-content-center"],[1,"row","mb-4"],["for","horizontal-password-input",1,"col-sm-3","col-form-label"],[1,"col-sm-9"],[3,"items"],["for","horizontal-firstname-input",1,"col-sm-3","col-form-label"],["type","text","value","AM50A",1,"form-control",3,"disabled"],["for","horizontal-email-input",1,"col-sm-3","col-form-label"],["type","text","value","Steel Line India",1,"form-control",3,"disabled"],["type","text","value","700KG",1,"form-control",3,"disabled"],[1,"list-inline","wizard","mb-0"],[1,"next","list-inline-item","float-end"],["awNextStep","",1,"btn","btn-primary"],["stepTitle","Remarks"],["type","text",1,"form-control"],[1,"previous","list-inline-item"],["awPreviousStep","",1,"btn","btn-primary"],["stepTitle","Confirm"],[1,"row","justify-content-center"],[1,"col-xl","col-sm-6"],[1,"mt-3","mb-0","text-center"],[1,"card","bg-success","border","border-success","card-body"],[1,"card-title","text-white","text-center"],["type","button",1,"btn","btn-ibex","btn-lg","w-md","text-black"],["routerLink","/pages/scrapmanagement/scrapinspection",1,"btn","btn-primary"],[1,"col-lg-6"],[1,"card-title","text-center"],[1,"table-responsive"],[1,"table","mb-0","table-hover"],["scope","row"],["TaskContent",""],[1,"row","mb-md-2","mt-4"],[1,"col-sm-12","col-md-6"],["id","tickets-table_length",1,"dataTables_length"],[1,"d-inline-flex","align-items-center"],["name","tickets-table_length","aria-controls","tickets-table","name","pageSize",1,"custom-select","custom-select-sm","form-control","form-control-sm","mx-2",3,"ngModel","ngModelChange"],[3,"ngValue"],["id","tickets-table_filter",1,"dataTables_filter","text-md-end"],["type","text","name","searchTerm","aria-controls","tickets-table",1,"form-control","form-control-sm","ms-2",3,"ngModel","ngModelChange"],["id","basic-datatable",1,"table","datatables","dt-responsive","nowrap"],["sortable","date",3,"sort"],["sortable","type",3,"sort"],["sortable","coin",3,"sort"],["sortable","value",3,"sort"],["sortable","usd",3,"sort"],["sortable","status",3,"sort"],[4,"ngFor","ngForOf"],[1,"row","justify-content-md-between","align-items-md-center","mt-2"],[1,"col-sm-12","col-md-5"],["id","tickets-table_info","role","status","aria-live","polite",1,"dataTables_info","mb-2"],[1,"text-md-right","float-md-end","pagination-rounded"],[3,"collectionSize","page","pageSize","pageChange"],[3,"result","term"],[1,"badge","font-size-10",3,"result","term","ngClass"]],template:function(t,r){1&t&&(e.\u0275\u0275elementStart(0,"div",0),e.\u0275\u0275element(1,"app-page-title",1),e.\u0275\u0275elementStart(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h4",6),e.\u0275\u0275text(7,"Inward Scrap"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"aw-wizard",7)(9,"aw-wizard-step",8),e.\u0275\u0275template(10,J,2,0,"ng-template",9),e.\u0275\u0275elementStart(11,"div",10)(12,"form")(13,"div",11)(14,"label",12),e.\u0275\u0275text(15,"Select GRN No"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(16,"div",13),e.\u0275\u0275element(17,"ng-select",14),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(18,"div",11)(19,"label",15),e.\u0275\u0275text(20,"Alloy Name"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(21,"div",13),e.\u0275\u0275element(22,"input",16),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(23,"div",11)(24,"label",17),e.\u0275\u0275text(25,"Source"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(26,"div",13),e.\u0275\u0275element(27,"input",18),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(28,"div",11)(29,"label",17),e.\u0275\u0275text(30,"Weight"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(31,"div",13),e.\u0275\u0275element(32,"input",19),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(33,"ul",20)(34,"li",21)(35,"button",22),e.\u0275\u0275text(36,"Next"),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(37,"aw-wizard-step",23),e.\u0275\u0275template(38,U,2,0,"ng-template",9),e.\u0275\u0275elementStart(39,"form")(40,"div",11)(41,"label",15),e.\u0275\u0275text(42,"Remarks"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(43,"div",13),e.\u0275\u0275element(44,"input",24),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(45,"ul",20)(46,"li",25)(47,"button",26),e.\u0275\u0275text(48," Previous "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(49,"li",21)(50,"button",22),e.\u0275\u0275text(51,"Next"),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(52,"aw-wizard-step",27),e.\u0275\u0275template(53,Z,2,0,"ng-template",9),e.\u0275\u0275elementStart(54,"div",28)(55,"div",29)(56,"div",30)(57,"div",31)(58,"h3",32),e.\u0275\u0275text(59," GRN No - 1 "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(60,"div",31)(61,"h3",32),e.\u0275\u0275text(62,"AM50A"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(63,"div",31)(64,"h3",32),e.\u0275\u0275text(65," Steel Line India "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(66,"div",31)(67,"h3",32),e.\u0275\u0275text(68,"700KG"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(69,"div",31)(70,"h3",32),e.\u0275\u0275text(71,"REMARKS"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(72,"button",33),e.\u0275\u0275text(73," Add Purchase "),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(74,"br"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(75,"ul",20)(76,"li",25)(77,"button",26),e.\u0275\u0275text(78," Previous "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(79,"li",21)(80,"a",34),e.\u0275\u0275text(81,"Next Process "),e.\u0275\u0275elementEnd()()()()()()()(),e.\u0275\u0275elementStart(82,"div",35)(83,"div",4)(84,"div",5)(85,"h4",36),e.\u0275\u0275text(86,"Inward Scrap Report"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(87,"div",37)(88,"table",38)(89,"thead")(90,"tr")(91,"th"),e.\u0275\u0275text(92,"Sl No"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(93,"th"),e.\u0275\u0275text(94,"Date"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(95,"th"),e.\u0275\u0275text(96,"GRN No"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(97,"th"),e.\u0275\u0275text(98,"Alloy Name"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(99,"th"),e.\u0275\u0275text(100,"Source"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(101,"th"),e.\u0275\u0275text(102,"Weight(KG)"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(103,"th"),e.\u0275\u0275text(104,"Remarks"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(105,"tbody")(106,"tr")(107,"th",39),e.\u0275\u0275text(108,"1"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(109,"td"),e.\u0275\u0275text(110,"22/12/2022"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(111,"td"),e.\u0275\u0275text(112,"1"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(113,"td"),e.\u0275\u0275text(114,"AM50A"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(115,"td"),e.\u0275\u0275text(116,"Steel Line India"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(117,"td"),e.\u0275\u0275text(118,"700"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(119,"td"),e.\u0275\u0275text(120,"-"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(121,"tr")(122,"th",39),e.\u0275\u0275text(123,"2"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(124,"td"),e.\u0275\u0275text(125,"20/12/2022"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(126,"td"),e.\u0275\u0275text(127,"2"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(128,"td"),e.\u0275\u0275text(129,"AM50A"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(130,"td"),e.\u0275\u0275text(131,"CMR"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(132,"td"),e.\u0275\u0275text(133,"500"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(134,"td"),e.\u0275\u0275text(135,"-"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(136,"tr")(137,"th",39),e.\u0275\u0275text(138,"3"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(139,"td"),e.\u0275\u0275text(140,"12/12/2022"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(141,"td"),e.\u0275\u0275text(142,"3"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(143,"td"),e.\u0275\u0275text(144,"AZ91D"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(145,"td"),e.\u0275\u0275text(146,"Sunland"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(147,"td"),e.\u0275\u0275text(148,"200"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(149,"td"),e.\u0275\u0275text(150,"-"),e.\u0275\u0275elementEnd()()()()()()()()()(),e.\u0275\u0275template(151,ee,46,17,"ng-template",null,40,e.\u0275\u0275templateRefExtractor)),2&t&&(e.\u0275\u0275advance(1),e.\u0275\u0275property("breadcrumbItems",r.breadCrumbItems),e.\u0275\u0275advance(7),e.\u0275\u0275property("navBarLayout","large-empty-symbols"),e.\u0275\u0275advance(9),e.\u0275\u0275property("items",r.grnNumbers),e.\u0275\u0275advance(5),e.\u0275\u0275property("disabled",!0),e.\u0275\u0275advance(5),e.\u0275\u0275property("disabled",!0),e.\u0275\u0275advance(5),e.\u0275\u0275property("disabled",!0))},dependencies:[c.NgClass,c.NgForOf,o._Y,o.YN,o.Kr,o.Fj,o.EJ,o.JJ,o.JL,o.On,o.F,_.yS,$.V,m._h,m.N9,v.Pl,v.GZ,v.j,v.ei,v.O6,D.w9,c.AsyncPipe],styles:[".bg-card[_ngcontent-%COMP%]{background-color:#25413733}.btn-ibex[_ngcontent-%COMP%]{background-color:#fa7f17}"]}),n})()},{path:"scrapinspection",component:H}];let ne=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[_.Bz.forChild(te),_.Bz]}),n})();var re=l(9668),ae=l(1819),se=l(1244),ie=l(7303),le=l(4466);let oe=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[c.CommonModule,o.u5,o.UX,ne,re.v,m.XC,m.HK,m.Oz,m.mH,ae.y,se.X,le.m,ie.t,m.M,m.ZS,m.jF,v.O,m.dT,D.A0]}),n})()},4466:(N,f,l)=>{l.d(f,{m:()=>h});var c=l(6895),o=l(9668),_=l(1819),b=l(4650);let h=(()=>{class u{}return u.\u0275fac=function(S){return new(S||u)},u.\u0275mod=b.\u0275\u0275defineNgModule({type:u}),u.\u0275inj=b.\u0275\u0275defineInjector({imports:[c.CommonModule,o.v,_.y]}),u})()}}]);