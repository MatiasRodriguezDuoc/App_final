"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1375],{1375:(C,l,a)=>{a.r(l),a.d(l,{RegistroPage:()=>h});var _=a(5861),u=a(6814),s=a(95),t=a(3800),p=a(6626),e=a(6689),M=a(2333),m=a(3044);let h=(()=>{var g;class c{suma(o,n){throw new Error("Method not implemented.")}constructor(o,n){this.authService=o,this.router=n,this.correo="",this.password="",this.nombre="",this.apellido="",this.preguntaSecreta="",this.respuestaSecreta="",this.mensajeError=""}ngOnInit(){}registrarse(){var o=this;return(0,_.Z)(function*(){const n=new p.b;n.correo=o.correo,n.password=o.password,n.nombre=o.nombre,n.apellido=o.apellido,n.preguntaSecreta=o.preguntaSecreta,n.respuestaSecreta=o.respuestaSecreta,n.isAdmin=!1;try{yield o.authService.registrarUsuario(n),o.router.navigate(["/inicio"])}catch(i){o.mensajeError="Debe ingresar un correo.",console.error(i)}})()}volverAlInicio(){this.router.navigate(["/inicio"])}}return(g=c).\u0275fac=function(o){return new(o||g)(e.Y36(M.e),e.Y36(m.F0))},g.\u0275cmp=e.Xpm({type:g,selectors:[["app-registro"]],standalone:!0,features:[e.jDz],decls:46,vars:6,consts:[["fullscreen","",1,"background"],[1,"cardcontenido"],[1,"container"],["alt","DUOC UC","src","https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Logo_DuocUC.svg/711px-Logo_DuocUC.svg.png"],[1,"ion-text-center","label"],["position","floating"],["name","nombre","type","text",3,"ngModel","ngModelChange"],["name","apellido","type","text",3,"ngModel","ngModelChange"],["name","correo","type","text",3,"ngModel","ngModelChange"],["name","preguntaSecreta","type","text",3,"ngModel","ngModelChange"],["name","respuestaSecreta","type","text",3,"ngModel","ngModelChange"],["name","password","type","text",3,"ngModel","ngModelChange"],["color","success",3,"click"],["expand","full",3,"click"],[1,"ion-text-center"]],template:function(o,n){1&o&&(e.TgZ(0,"ion-content",0)(1,"ion-card",1)(2,"div",2)(3,"ion-card-header"),e._UZ(4,"ion-img",3),e.TgZ(5,"ion-card-title",4),e._uU(6,"Registro de Usuario"),e.qZA()()()(),e.TgZ(7,"ion-card",1)(8,"div",2)(9,"ion-card-header")(10,"ion-card-header")(11,"ion-card-title"),e._uU(12,"Mis datos"),e.qZA()(),e.TgZ(13,"ion-card-header")(14,"ion-item")(15,"ion-label",5),e._uU(16,"Nombre"),e.qZA(),e.TgZ(17,"ion-input",6),e.NdJ("ngModelChange",function(r){return n.nombre=r}),e.qZA()(),e.TgZ(18,"ion-item")(19,"ion-label",5),e._uU(20,"Apellido"),e.qZA(),e.TgZ(21,"ion-input",7),e.NdJ("ngModelChange",function(r){return n.apellido=r}),e.qZA()(),e.TgZ(22,"ion-item")(23,"ion-label",5),e._uU(24,"Correo"),e.qZA(),e.TgZ(25,"ion-input",8),e.NdJ("ngModelChange",function(r){return n.correo=r}),e.qZA()(),e.TgZ(26,"ion-item")(27,"ion-label",5),e._uU(28,"Pregunta secreta"),e.qZA(),e.TgZ(29,"ion-input",9),e.NdJ("ngModelChange",function(r){return n.preguntaSecreta=r}),e.qZA()(),e.TgZ(30,"ion-item")(31,"ion-label",5),e._uU(32,"Respuesta secreta"),e.qZA(),e.TgZ(33,"ion-input",10),e.NdJ("ngModelChange",function(r){return n.respuestaSecreta=r}),e.qZA()(),e.TgZ(34,"ion-item")(35,"ion-label",5),e._uU(36,"Contrase\xf1a"),e.qZA(),e.TgZ(37,"ion-input",11),e.NdJ("ngModelChange",function(r){return n.password=r}),e.qZA()(),e.TgZ(38,"ion-button",12),e.NdJ("click",function(){return n.registrarse()}),e._uU(39,"Registrarse"),e.qZA(),e.TgZ(40,"ion-button",13),e.NdJ("click",function(){return n.volverAlInicio()}),e._uU(41,"Regresar"),e.qZA()()()()()(),e.TgZ(42,"ion-footer")(43,"div",2)(44,"h6",14),e._uU(45,"Duoc 2023 "),e.qZA()()()),2&o&&(e.xp6(17),e.Q6J("ngModel",n.nombre),e.xp6(4),e.Q6J("ngModel",n.apellido),e.xp6(4),e.Q6J("ngModel",n.correo),e.xp6(4),e.Q6J("ngModel",n.preguntaSecreta),e.xp6(4),e.Q6J("ngModel",n.respuestaSecreta),e.xp6(4),e.Q6J("ngModel",n.password))},dependencies:[t.Pc,t.YG,t.PM,t.Zi,t.Dq,t.W2,t.fr,t.Xz,t.pK,t.Ie,t.Q$,t.j9,u.ez,s.u5,s.JJ,s.On],styles:["ion-content.background[_ngcontent-%COMP%]{--background: url(https://www.sabbagharquitectos.com/wp-content/thumbgen_cache/cdae11f5808c9b83a3d6446aa7003d80.jpg) 0 0/100% 100% no-repeat}ion-input[_ngcontent-%COMP%]{color:#ece5e5;transition:color .2s}ion-input[_ngcontent-%COMP%]:focus{color:#ff0}.cardcontenido[_ngcontent-%COMP%]{float:unset!important;background:rgba(0,0,0,.5);background-repeat:no-repeat;background-size:110%;background-position:0% 14%}.centrado-vertical[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:100%}.texto[_ngcontent-%COMP%]{color:#ffffffd2}.marco[_ngcontent-%COMP%]{border:13px solid gray;padding:16px}.alinear-centro[_ngcontent-%COMP%]{text-align:center;padding-top:8px;padding-bottom:8px}.enlace[_ngcontent-%COMP%]{color:#f3f3fd;text-decoration:underline;cursor:pointer;display:flex;align-items:center;justify-content:center}"]}),c})()}}]);