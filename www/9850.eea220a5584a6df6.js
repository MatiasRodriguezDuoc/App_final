"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9850],{9850:(C,l,r)=>{r.r(l),r.d(l,{IngresoPage:()=>b});var _=r(5861),d=r(6814),s=r(95),t=r(3800),e=r(6689),p=r(9022),f=r(2333),P=r(3044);let b=(()=>{var i;class u{constructor(o,n,a){this.bd=o,this.authService=n,this.router=a,this.correo="atorres@duocuc.cl",this.password="1234"}ngOnInit(){var o=this;return(0,_.Z)(function*(){o.bd.crearUsuariosDePrueba().then((0,_.Z)(function*(){yield o.bd.leerUsuarios()}))})()}ingresar(){this.authService.login(this.correo,this.password)}recuperarContrasenia(){this.router.navigate(["/correo"])}registrarse(){this.router.navigate(["/registro"])}changeColor(o){const n=document.querySelector(`ion-input[label="${o}"] label`);n&&n.classList.add("green")}resetColor(o){const n=document.querySelector(`ion-input[label="${o}"] label`);n&&n.classList.remove("green")}}return(i=u).\u0275fac=function(o){return new(o||i)(e.Y36(p.T),e.Y36(f.e),e.Y36(P.F0))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-ingreso"]],standalone:!0,features:[e.jDz],decls:29,vars:2,consts:[["fullscreen","",1,"background"],[1,"cardcontenido"],["id","container"],["alt","DUOC UC","src","https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Logo_DuocUC.svg/711px-Logo_DuocUC.svg.png"],[1,"ion-text-center","texto"],["type","text","label","Correo","labelPlacement","floating",3,"ngModel","ngModelChange","focus","blur"],["type","password","label","Contrase\xf1a","labelPlacement","floating",3,"ngModel","ngModelChange","focus","blur"],[3,"click"],[1,"enlace",3,"click"],[1,"container"],[1,"ion-text-center"]],template:function(o,n){1&o&&(e.TgZ(0,"ion-content",0),e._UZ(1,"br")(2,"br"),e.TgZ(3,"ion-card",1)(4,"div",2)(5,"ion-card-header"),e._UZ(6,"img",3),e.TgZ(7,"ion-card-title",4),e._uU(8,"Bienvenido al sistema de asistencia"),e.qZA()()()(),e._UZ(9,"br"),e.TgZ(10,"ion-card",1)(11,"div",2)(12,"ion-card-header")(13,"ion-input",5),e.NdJ("ngModelChange",function(c){return n.correo=c})("focus",function(){return n.changeColor("correo")})("blur",function(){return n.resetColor("correo")}),e.qZA(),e._UZ(14,"br"),e.TgZ(15,"ion-input",6),e.NdJ("ngModelChange",function(c){return n.password=c})("focus",function(){return n.changeColor("password")})("blur",function(){return n.resetColor("password")}),e.qZA(),e._UZ(16,"br"),e.TgZ(17,"ion-button",7),e.NdJ("click",function(){return n.ingresar()}),e._uU(18,"Iniciar Sesi\xf3n"),e.qZA(),e._UZ(19,"br"),e.TgZ(20,"ion-label",8),e.NdJ("click",function(){return n.recuperarContrasenia()}),e._uU(21,"Recuperar Contrase\xf1a"),e.qZA(),e.TgZ(22,"ion-button",7),e.NdJ("click",function(){return n.registrarse()}),e._uU(23,"Registrarse"),e.qZA()()()(),e._UZ(24,"br"),e.qZA(),e.TgZ(25,"ion-footer")(26,"div",9)(27,"h6",10),e._uU(28,"Duoc 2023 "),e.qZA()()()),2&o&&(e.xp6(13),e.Q6J("ngModel",n.correo),e.xp6(2),e.Q6J("ngModel",n.password))},dependencies:[t.Pc,t.YG,t.PM,t.Zi,t.Dq,t.W2,t.fr,t.pK,t.Q$,t.j9,d.ez,s.u5,s.JJ,s.On],styles:["ion-content.background[_ngcontent-%COMP%]{--background: url(https://www.sabbagharquitectos.com/wp-content/thumbgen_cache/cdae11f5808c9b83a3d6446aa7003d80.jpg) 0 0/100% 100% no-repeat}ion-input[_ngcontent-%COMP%]{color:#ece5e5;transition:color .2s}ion-input[_ngcontent-%COMP%]:focus{color:#ff0}.cardcontenido[_ngcontent-%COMP%]{float:unset!important;background:rgba(0,0,0,.5);background-repeat:no-repeat;background-size:110%;background-position:0% 14%}.centrado-vertical[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:100%}.texto[_ngcontent-%COMP%]{color:#ffffffd2}.marco[_ngcontent-%COMP%]{border:13px solid gray;padding:16px}.alinear-centro[_ngcontent-%COMP%]{text-align:center;padding-top:8px;padding-bottom:8px}.enlace[_ngcontent-%COMP%]{color:#f3f3fd;text-decoration:underline;cursor:pointer;display:flex;align-items:center;justify-content:center}"]}),u})()}}]);