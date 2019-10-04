(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],{115:function(e,t,a){},117:function(e,t,a){"use strict";a.r(t);var n,r=a(0),o=a.n(r),c=a(9),i=a.n(c),l=a(21),s=a.n(l),u=a(33),m=a(76),d=a(31),p=a(11),b=a(146),f=a(154),g=a(155),h=a(156),x=a(118),v=a(153),y=a(157),E=a(8),w=a(165),O=a(164),j=a(150),C=a(166),k=a(152),S=a(73),N=a.n(S).a.create({baseURL:"https://lb.ltng.link"}),I=a(20);!function(e){e[e.SIGN_IN=0]="SIGN_IN",e[e.SIGN_OUT=1]="SIGN_OUT"}(n||(n={}));var z=function(e){return{type:n.SIGN_IN,payload:e}},L=function(){return{type:n.SIGN_OUT,payload:null}},T=Object(b.a)((function(e){return{modalContainer:{display:"flex",justifyContent:"center",alignItems:"center"},authContainer:Object(E.a)({width:"340px",backgroundColor:"#fefefe",display:"flex",flexWrap:"wrap",justifyContent:"center",padding:"1em",boxSizing:"border-box",borderRadius:"8px",outline:"none",boxShadow:"0px 0px 8px 1px rgba(0,0,0,0.75)"},e.breakpoints.down("xs"),{width:"90%"}),title:{color:"#1b3987"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200,flexBasis:"100%",color:"black"},textFieldInput:{color:"black"},textFieldLabel:{color:"#1b3987"},notchedOutline:{borderRadius:"6px",borderColor:"#1b3987"},textFieldFocus:{borderRadius:"6px",boxShadow:"0px 0px 4px #fff"},authButton:{backgroundColor:"#1b3987",color:"white",marginTop:"16px",width:"calc(100% - 16px)",height:"56px"},changeAuthType:{marginTop:"16px",fontSize:"10px",cursor:"pointer"},messageContainer:{background:"red",borderRadius:"8px",padding:"1em",boxSizing:"border-box",height:"56px",display:"flex",justifyContent:"center",alignItems:"center",fontFamily:"Roboto",textAlign:"center",fontSize:"14px",width:"calc(100% - 16px)"},error:{color:"#731b14",backgroundColor:"#fa9b93"},success:{backgroundColor:"#28a745",color:"#fefefe"},rememberMeContainer:{marginRight:"auto"},rememberMeCheck:{color:"#1b3987","&$checked":{color:"#1b3987"}},checked:{}}}));function F(e){var t=T({}),a=Object(r.useState)(e.open),n=Object(p.a)(a,2),c=n[0],i=n[1],l=Object(r.useState)(""),m=Object(p.a)(l,2),d=m[0],b=m[1],f=Object(r.useState)(""),g=Object(p.a)(f,2),h=g[0],y=g[1],E=Object(r.useState)(!1),S=Object(p.a)(E,2),L=S[0],F=S[1],R=Object(r.useState)(e.authType),B=Object(p.a)(R,2),P=B[0],M=B[1],W=Object(r.useState)(!1),U=Object(p.a)(W,2),A=U[0],G=U[1],_=Object(r.useState)(""),D=Object(p.a)(_,2),H=D[0],$=D[1],J=Object(r.useState)(!1),K=Object(p.a)(J,2),V=K[0],q=K[1],Q=Object(I.b)(),X=function(){var e=Object(u.a)(s.a.mark((function e(t,a){var n,r,o,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=null,r="userName="+encodeURIComponent(t)+"&userPass="+encodeURIComponent(a),o="/user/login?".concat(r),c=N.get,"Create Account"===P&&(o="/user/create?".concat(r),c=N.post),e.prev=5,e.next=8,c(o,{withCredentials:!0});case 8:200===(n=e.sent).status&&(L&&(n.data.rememberMe=!0),Q(z(n.data)),G(!1),Y("Success : Logging in..."),setTimeout((function(){return Z(!1)}),1300)),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(5),G(!0),Y(e.t0.response.data);case 16:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(t,a){return e.apply(this,arguments)}}(),Y=function(e){$(e),q(!0),setTimeout((function(){return q(!1)}),2775),setTimeout((function(){return $("")}),3e3)},Z=function(t){e.onModalClose(t),i(t)};return o.a.createElement(w.a,{"aria-labelledby":"authentication-modal","aria-describedby":"login or create account window",open:c,onClose:function(){return Z(!1)},className:t.modalContainer},o.a.createElement("div",{className:t.authContainer},o.a.createElement(x.a,{variant:"h5",className:t.title},P),o.a.createElement(O.a,{variant:"outlined",id:"user-name",label:"Username",title:"Username",placeholder:"Username",className:t.textField,value:d,onChange:function(e){return b(e.target.value)},margin:"normal",InputLabelProps:{className:t.textFieldLabel},InputProps:{classes:{input:t.textFieldInput,notchedOutline:t.notchedOutline,focused:t.textFieldFocus}}}),o.a.createElement(O.a,{variant:"outlined",id:"user-pass",label:"Password",type:"password",title:"Password",placeholder:"Password",className:t.textField,value:h,onChange:function(e){return y(e.target.value)},margin:"normal",InputLabelProps:{className:t.textFieldLabel},InputProps:{classes:{input:t.textFieldInput,notchedOutline:t.notchedOutline,focused:t.textFieldFocus}}}),o.a.createElement("div",{className:t.rememberMeContainer},o.a.createElement(j.a,{control:o.a.createElement(C.a,{checked:L,value:"rememberMe",className:t.rememberMeCheck,color:"default",onChange:function(){return F(!L)}}),label:"Remember Me"})),""!==H&&o.a.createElement(k.a,{in:V},o.a.createElement("div",{className:t.messageContainer+" "+(A?t.error:t.success)},H)),o.a.createElement(v.a,{className:t.authButton,title:P,variant:"contained",color:"primary",onClick:function(){return X(d,h)}},P),o.a.createElement("div",{className:t.changeAuthType,onClick:function(){return function(e){M("Sign In"===e?"Create Account":"Sign In")}(P)}},"Click to ","Sign In"===P?"Create Account":"Sign In")))}var R=Object(b.a)((function(e){return{modalContainer:{display:"flex",justifyContent:"center",alignItems:"center"},analyticsContainer:Object(E.a)({width:"340px",backgroundColor:"#fefefe",display:"flex",flexWrap:"wrap",justifyContent:"center",padding:"1em",boxSizing:"border-box",borderRadius:"8px",outline:"none",boxShadow:"0px 0px 8px 1px rgba(0,0,0,0.75)"},e.breakpoints.down("xs"),{width:"90%"})}}));function B(e){var t=Object(r.useState)(e.open),a=Object(p.a)(t,2),n=a[0],c=a[1],i=R({});return o.a.createElement(w.a,{"aria-labelledby":"authentication-modal","aria-describedby":"login or create account window",open:n,onClose:function(){return t=!1,e.onModalClose(t),void c(t);var t},className:i.modalContainer},o.a.createElement("div",{className:i.analyticsContainer},"Some Analytics"))}var P=Object(b.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},flex:{display:"flex",alignItems:"center"},icon:{marginRight:"0.3em"},responsiveText:{fontSize:"14px"}}}));function M(){var e=P({}),t=Object(r.useState)(!1),a=Object(p.a)(t,2),n=a[0],c=a[1],i=Object(r.useState)(!1),l=Object(p.a)(i,2),s=l[0],u=l[1],m=Object(r.useState)("Sign In"),d=Object(p.a)(m,2),b=d[0],E=d[1],w=Object(I.b)(),O=Object(I.c)((function(e){return e.user})),j=function(e){c(!0),E(e)};return o.a.createElement(f.a,{position:"sticky"},o.a.createElement(g.a,null,o.a.createElement(h.a,null,o.a.createElement(x.a,{variant:"h6",className:e.title+" "+e.flex+" "+e.responsiveText},o.a.createElement(y.a,{className:e.icon})," LTNG"),O.isSignedIn&&o.a.createElement(o.a.Fragment,null,o.a.createElement(v.a,{color:"inherit",title:"Analytics",className:e.responsiveText,onClick:function(){return u(!0)}},"Analytics"),o.a.createElement(v.a,{color:"inherit",title:"Logout",className:e.responsiveText,onClick:function(){return w(L())}},"Logout")),!O.isSignedIn&&o.a.createElement(o.a.Fragment,null,o.a.createElement(v.a,{color:"inherit",title:"Login",className:e.responsiveText,onClick:function(){return j("Sign In")}},"Login"),o.a.createElement(v.a,{color:"inherit",title:"Sign Up",className:e.responsiveText,onClick:function(){return j("Create Account")}},"Sign Up")))),n&&o.a.createElement(F,{onModalClose:c,open:n,authType:b}),s&&o.a.createElement(B,{onModalClose:u,open:s}))}var W=a(158);function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function A(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var G=o.a.createElement("path",{d:"m27 27h2v2h-2z"}),_=o.a.createElement("path",{d:"m31 27h2v2h-2z"}),D=o.a.createElement("path",{d:"m35 27h2v2h-2z"}),H=o.a.createElement("path",{d:"m27 35h2v2h-2z"}),$=o.a.createElement("path",{d:"m31 35h2v2h-2z"}),J=o.a.createElement("path",{d:"m35 35h2v2h-2z"}),K=o.a.createElement("path",{d:"m47.949 33h5.152c.465 2.279 2.484 4 4.899 4 2.757 0 5-2.243 5-5s-2.243-5-5-5c-2.414 0-4.434 1.721-4.899 4h-5.152c-.228-3.658-1.683-6.981-3.968-9.568l2.694-2.694c1.725 1.412 3.927 2.262 6.325 2.262 5.514 0 10-4.486 10-10s-4.486-10-10-10-10 4.486-10 10c0 2.398.85 4.6 2.262 6.324l-2.694 2.694c-2.587-2.284-5.91-3.74-9.568-3.968v-5.152c2.279-.465 4-2.484 4-4.899 0-2.757-2.243-5-5-5s-5 2.243-5 5c0 2.414 1.721 4.434 4 4.899v5.148c-3.651.226-6.99 1.664-9.586 3.954l-2.676-2.676c1.412-1.724 2.262-3.926 2.262-6.324 0-5.514-4.486-10-10-10s-10 4.486-10 10 4.486 10 10 10c2.398 0 4.6-.85 6.324-2.262l2.683 2.683c-1.874 2.124-3.193 4.755-3.727 7.691-.417-.067-.843-.112-1.28-.112-4.411 0-8 3.589-8 8 0 2.805 1.455 5.274 3.646 6.702-5.593 1.836-9.646 7.099-9.646 13.298v6h28v-6c0-6.199-4.053-11.462-9.646-13.298.354-.231.685-.491.997-.773 3.023 3.225 7.199 5.071 11.649 5.071 4.052 0 7.746-1.526 10.568-4.018l2.694 2.694c-1.412 1.724-2.262 3.926-2.262 6.324 0 5.514 4.486 10 10 10s10-4.486 10-10-4.486-10-10-10c-2.398 0-4.6.85-6.324 2.262l-2.694-2.694c2.284-2.587 3.739-5.91 3.967-9.568zm10.051-4c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm-13.894 10h-4.567c.753-1.764 1.282-3.771 1.411-6h5c-.155 2.175-.805 4.211-1.844 6zm-12.106 6.727c-.884-.734-2.639-2.358-4.182-4.727h8.363c-1.542 2.368-3.297 3.992-4.181 4.727zm-5.324-6.727c-.849-1.732-1.473-3.748-1.624-6h13.895c-.15 2.252-.775 4.268-1.624 6zm-3.625-6c.128 2.229.658 4.236 1.411 6h-1.725c.166-.641.263-1.308.263-2 0-1.458-.398-2.822-1.082-4zm8.949-14.727c.884.734 2.639 2.358 4.182 4.727h-8.363c1.542-2.368 3.297-3.992 4.181-4.727zm5.324 6.727c.849 1.732 1.473 3.748 1.624 6h-13.895c.15-2.252.775-4.268 1.624-6zm3.625 6c-.128-2.229-.658-4.236-1.411-6h4.567c1.039 1.789 1.689 3.825 1.844 6zm7.259-13.609c1.125-1.492 2.895-2.391 4.792-2.391s3.667.9 4.792 2.391c-1.338 1.005-2.994 1.609-4.792 1.609s-3.454-.604-4.792-1.609zm1.792-7.391c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3zm3-7c4.411 0 8 3.589 8 8 0 1.893-.664 3.633-1.768 5.004-.792-.986-1.796-1.763-2.931-2.278 1.034-.917 1.699-2.239 1.699-3.726 0-2.757-2.243-5-5-5s-5 2.243-5 5c0 1.487.665 2.809 1.699 3.726-1.135.516-2.139 1.293-2.931 2.278-1.104-1.371-1.768-3.111-1.768-5.004 0-4.411 3.589-8 8-8zm-10.292 20h-4.155c-1.113-1.963-2.416-3.526-3.53-4.662 3.056.676 5.737 2.348 7.685 4.662zm-13.708-17c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3zm-.027 12.341c-1.113 1.136-2.415 2.697-3.526 4.659h-4.159c1.951-2.323 4.635-3.987 7.685-4.659zm-25.973-7.341c0-4.411 3.589-8 8-8s8 3.589 8 8c0 1.893-.664 3.633-1.768 5.004-.792-.986-1.796-1.763-2.931-2.278 1.034-.917 1.699-2.239 1.699-3.726 0-2.757-2.243-5-5-5s-5 2.243-5 5c0 1.487.665 2.809 1.699 3.726-1.135.515-2.139 1.292-2.931 2.278-1.104-1.372-1.768-3.111-1.768-5.004zm5-1c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3zm-1.792 7.391c1.125-1.492 2.895-2.391 4.792-2.391s3.667.9 4.792 2.391c-1.338 1.005-2.994 1.609-4.792 1.609s-3.454-.604-4.792-1.609zm13.679 7.609h4.575c-.753 1.764-1.282 3.771-1.411 6h-2.777c-.612-.539-1.305-.988-2.061-1.321.281-1.688.857-3.263 1.674-4.679zm-.078 29.854-4.359 5.085 4.294-13.957c.681.294 1.331.648 1.94 1.057l-.614 3.476-2.287 2.287zm-10.879-4.338-.614-3.476c.609-.41 1.259-.763 1.94-1.057l4.294 13.957-4.359-5.085 1.025-2.051zm-5.93 6.484c0-3.32 1.356-6.328 3.543-8.503l.527 2.987 1.713 1.713-.975 1.949 5.018 5.854h-4.826v-5h-2v5h-3zm24 0v4h-3v-5h-2v5h-4.826l5.017-5.854-.975-1.949 1.713-1.713.527-2.987c2.188 2.175 3.544 5.183 3.544 8.503zm-9.155-11.645-2.845 9.245-2.845-9.245c.914-.224 1.863-.355 2.845-.355s1.931.131 2.845.355zm-8.845-8.355c0-3.309 2.691-6 6-6s6 2.691 6 6-2.691 6-6 6-6-2.691-6-6zm12.668 4.411c.088-.133.169-.272.25-.411h3.529c1.115 1.967 2.421 3.533 3.536 4.669-2.805-.616-5.348-2.098-7.315-4.258zm13.356 4.251c1.114-1.136 2.417-2.699 3.53-4.662h4.155c-1.949 2.314-4.63 3.986-7.685 4.662zm13.184 13.729c1.125-1.492 2.895-2.391 4.792-2.391s3.667.9 4.792 2.391c-1.338 1.005-2.994 1.609-4.792 1.609s-3.454-.604-4.792-1.609zm1.792-7.391c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3zm11 1c0 1.893-.664 3.633-1.768 5.004-.792-.986-1.796-1.763-2.931-2.278 1.034-.917 1.699-2.239 1.699-3.726 0-2.757-2.243-5-5-5s-5 2.243-5 5c0 1.487.665 2.809 1.699 3.726-1.135.516-2.139 1.293-2.931 2.278-1.104-1.371-1.768-3.111-1.768-5.004 0-4.411 3.589-8 8-8s8 3.589 8 8z"}),V=function(e){var t=e.svgRef,a=e.title,n=A(e,["svgRef","title"]);return o.a.createElement("svg",U({id:"Layer_5",enableBackground:"new 0 0 64 64",viewBox:"0 0 64 64",width:512,ref:t},n),a?o.a.createElement("title",null,a):null,G,_,D,H,$,J,K)},q=o.a.forwardRef((function(e,t){return o.a.createElement(V,U({svgRef:t},e))})),Q=(a.p,Object(b.a)((function(e){return{gridContainer:{marginTop:"0em",padding:"2em"},flex:{display:"flex",flexWrap:"wrap"},gridTitle:{display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap"},inlineText:{display:"inline"},title:{fontSize:"calc(28px + 6 * ((100vw - 320px) / 480))",fontWeight:900,color:"#252628",marginBottom:"16px"},subtitle:{fontSize:"calc(18px + 6 * ((100vw - 320px) / 680))",fontWeight:400,color:"#56575b"},linkImage:{height:"calc(27vh + 4 * ((100vw - 520px) / 200))",width:"calc(27vh + 4 * ((100vw - 520px) / 200))",fill:"#0b1736"},gridItem:{alignItems:"center",display:"flex",justifyContent:"center"},item1:Object(E.a)({order:2,marginTop:"2em"},e.breakpoints.up("md"),{marginTop:"0em",order:1}),item2:Object(E.a)({overflow:"hidden",order:1},e.breakpoints.up("md"),{order:2})}})));function X(){var e=Q({});return o.a.createElement(g.a,null,o.a.createElement(W.a,{container:!0,className:e.gridContainer},o.a.createElement(W.a,{item:!0,md:8,xs:12,className:e.gridTitle+" "+e.item1+" "+e.gridItem},o.a.createElement("div",{className:e.flex},o.a.createElement(x.a,{variant:"h3",className:e.inlineText+" "+e.title},"Lightning Fast Short Links"),o.a.createElement(x.a,{variant:"h4",className:e.inlineText+" "+e.subtitle},"Create, share, and view analytics of your Lightning Link. Get one for Free today."))),o.a.createElement(W.a,{item:!0,md:4,xs:12,className:e.item2+" "+e.gridItem},o.a.createElement(q,{className:e.linkImage}))))}var Y=a(22),Z=a(149),ee=a(159),te="https://ltng.link/#",ae=Object(b.a)((function(e){return{container:{minHeight:"150px",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",backgroundColor:"#0b1736",paddingTop:"2em",paddingBottom:"2em",boxSizing:"border-box"},flex:{display:"flex",justifyContent:"center",alignItems:"center",color:"white",height:"100%"},textField:{width:"100%",background:"#fefefe",borderRadius:"8px"},textFieldInput:{color:"black"},textFieldLabel:{color:"black"},notchedOutline:{borderRadius:"6px",borderColor:"#1b3987"},textFieldFocus:{borderRadius:"6px",boxShadow:"0px 0px 4px #fff"},shortenButton:{backgroundColor:"#1b3987",color:"white",width:"100%",height:"56px"},item1:Object(E.a)({order:1,paddingBottom:"0px !important"},e.breakpoints.up("md"),{order:1,paddingBottom:"12px !important"}),item2:Object(E.a)({order:2,marginBottom:"12px",paddingBottom:"0px !important"},e.breakpoints.up("md"),{order:2,marginBottom:"0em",paddingBottom:"12px !important"}),urlList:{order:3,width:"calc(100% - 24px)",maxWidth:"1240px",backgroundColor:"#FEFEFE",color:"black",fontSize:"17px",margin:"12px",marginTop:"0px",padding:"0px",fontWeight:300,"& li:not(:last-child):after":{width:"calc(100% - 24px)",content:'""',border:"0.5px solid #b6b6b6",position:"absolute",bottom:"0px",left:"12px"},"&:first-of-type":{borderTopLeftRadius:"6px",borderTopRightRadius:"6px"},"&:last-child":{borderBottomLeftRadius:"6px",borderBottomRightRadius:"6px",content:"none"}},listItem:Object(E.a)({padding:"16px",display:"flex",justifyContent:"space-between",flexWrap:"nowrap"},e.breakpoints.down("xs"),{flexWrap:"wrap"}),urlListDestination:Object(E.a)({color:"black"},e.breakpoints.down("xs"),{marginBottom:"8px"}),urlListSlug:Object(E.a)({color:"#2a5bd7","& a":{textDecoration:"none",color:"#0236b9",fontWeight:400}},e.breakpoints.down("xs"),{width:"100%"}),copyButton:Object(E.a)({marginLeft:"1em",backgroundColor:"#edf2fe",color:"#2a5bd7",boxShadow:"none","&:hover":{backgroundColor:"#cacfd9"},maxHeight:"83px",height:"36px",maxWidth:"71px"},e.breakpoints.down("xs"),{maxWidth:"none",width:"100%",margin:"0px",marginTop:"8px"}),copySuccess:{content:"Copied !important",backgroundColor:"#649949 !important",color:"#fefefe"},errorGrid:{order:3,paddingTop:"0px !important"},errorContainer:{background:"red",borderRadius:"8px",padding:"1em",boxSizing:"border-box",height:"56px",backgroundColor:"#fa9b93",color:"#731b14",display:"flex",justifyContent:"center",alignItems:"center",fontFamily:"Roboto",textAlign:"center"}}}));function ne(){var e=ae({}),t=Object(r.useState)(""),a=Object(p.a)(t,2),n=a[0],c=a[1],i=Object(r.useState)(""),l=Object(p.a)(i,2),m=l[0],d=l[1],b=Object(r.useState)(!1),f=Object(p.a)(b,2),h=f[0],x=f[1],y=Object(r.useState)(!1),E=Object(p.a)(y,2),w=E[0],j=E[1],C=Object(r.useState)([]),S=Object(p.a)(C,2),z=S[0],L=S[1],T=Object(r.useState)(0),F=Object(p.a)(T,2),R=F[0],B=F[1],P=Object(I.c)((function(e){return e.user})),M=function(e){var t=document.createElement("textarea");t.style.position="absolute",t.style.top=document.documentElement.scrollTop.toString()+"px",t.value=e,document.body.appendChild(t),t.focus(),t.select(),document.execCommand("copy"),document.body.removeChild(t)},U=function(e){d(e),x(!0),setTimeout((function(){return x(!1)}),2775),setTimeout((function(){return d("")}),3e3)},A=function(e){return!!new RegExp(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/).test(e)},G=function(e){var t=!1;return z.find((function(a){a.destination===e&&(t=!0)})),t},_=function(){var e=Object(u.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(G(t)){e.next=14;break}if(!A(t)){e.next=11;break}return t=encodeURIComponent(t),a="/shorten?destination=".concat(t),P.isSignedIn&&P.userId&&(a+="&userId=".concat(P.userId)),e.next=7,N.post(a);case 7:200===(n=e.sent).status?(L([].concat(Object(Y.a)(z),[{slug:n.data,destination:t}])),c("")):U("Server Error : ".concat(n.status,". Hang in tight, were working on it!")),e.next=12;break;case 11:U("Unable to create Lightning Link, not a valid URL");case 12:e.next=16;break;case 14:U("Already shortened this link, look below ;)"),c("");case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return o.a.createElement("div",{className:e.container},o.a.createElement(g.a,{className:e.flex},o.a.createElement(W.a,{container:!0,className:e.flex,spacing:3},o.a.createElement(W.a,{item:!0,md:9,xs:12,className:e.item1},o.a.createElement(O.a,{id:"filled-name",placeholder:"Shorten your link",title:"URL to Shorten",autoComplete:"off",className:e.textField,value:n,onChange:function(e){return c(e.target.value)},variant:"outlined",onKeyPress:function(e){return function(e){"Enter"===e.key&&(_(n),e.preventDefault())}(e)},InputLabelProps:{className:e.textFieldLabel},InputProps:{classes:{input:e.textFieldInput,notchedOutline:e.notchedOutline,focused:e.textFieldFocus}},inputProps:{"aria-label":"URL to Shorten"}})),o.a.createElement(W.a,{item:!0,md:3,xs:12,className:e.item2},o.a.createElement(v.a,{title:"Shorten URL",variant:"contained",color:"primary",className:e.shortenButton,onClick:function(){return _(n)}},"Shorten")),""!==m&&o.a.createElement(W.a,{item:!0,xs:12,className:e.errorGrid},o.a.createElement(k.a,{in:h},o.a.createElement("div",{className:e.errorContainer},m))),0!==z.length&&o.a.createElement(Z.a,{className:e.urlList},z.map((function(t,a){return o.a.createElement(ee.a,{className:e.listItem},o.a.createElement("div",{className:e.urlListDestination},t.destination),o.a.createElement("div",{className:e.urlListSlug},o.a.createElement("a",{href:te+"/"+t.slug},te+"/"+t.slug),o.a.createElement(v.a,{title:"Copy to Clipboard",variant:"contained",color:"primary",className:e.copyButton+" "+(R===a&&w?e.copySuccess:""),onClick:function(){return function(e,t){M(t),j(!0),B(e),setTimeout((function(){return j(!1)}),1500)}(a,te+"/"+t.slug)}},R===a&&w?"Copied":"Copy")))}))))))}var re=a(151),oe=Object(b.a)((function(e){return{footer:{position:"fixed",bottom:"0px",width:"100%",backgroundColor:"#2b2e4a",height:"64px",zIndex:1e3,color:"#FEFEFE",padding:"0.5em",boxSizing:"border-box",fontFamily:"Roboto"},icons:{fill:"#eeeeee"},flex:{display:"flex",alignItems:"center",justifyContent:"space-between"}}}));function ce(){var e=oe({});return o.a.createElement("footer",{className:e.footer},o.a.createElement(g.a,{className:e.flex},o.a.createElement("div",null,"Lightning Link - 2019"),o.a.createElement("div",null,o.a.createElement(re.a,{title:"Github Button",onClick:function(){return e="https://github.com/ericellb/Lightning-Link",void window.open(e,"_blank");var e}},o.a.createElement("svg",{className:e.icons,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},o.a.createElement("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"}))))))}var ie=a(80),le=a(163),se=(a(115),a(160)),ue=a(161),me=a(162),de=Object(b.a)((function(e){return{flex:{display:"flex",justifyContent:"center"},centerText:{textAlign:"center",paddingBottom:"64px"},gridCard:{paddingTop:"2em",paddingBottom:"2em",padding:"1em",maxWidth:"80%"},icon:{height:"80px",width:"80px",color:"#1b3987"},title:{fontWeight:900,color:"#252628"},subtitle:{marginTop:"1em",fontWeight:500,color:"#56575b"},linkIcon:{transform:"rotate(135deg)"},iconBolt:{transform:"rotate(0deg)"}}}));function pe(){var e=de({});return o.a.createElement(g.a,{className:e.centerText},o.a.createElement(W.a,{container:!0,className:e.flex},o.a.createElement(W.a,{item:!0,md:4,xs:12,className:e.gridCard},o.a.createElement(se.a,{className:e.icon+" "+e.iconBolt}),o.a.createElement(x.a,{variant:"h4",className:e.title},"Lightning Fast"),o.a.createElement(x.a,{variant:"body1",className:e.subtitle},"Lightning Link was build from the ground to provide super fast, collision free URL generation. We leverage technology to provide Lighting fast redirection.")),o.a.createElement(W.a,{item:!0,md:4,xs:12,className:e.gridCard},o.a.createElement(ue.a,{className:e.icon}),o.a.createElement(x.a,{variant:"h4",className:e.title},"Build relations"),o.a.createElement(x.a,{variant:"body1",className:e.subtitle},"Create, and share persistent links with your audience. Lightning Links are fast and most importantly short. They allow you to better engage with your audience.")),o.a.createElement(W.a,{item:!0,md:4,xs:12,className:e.gridCard},o.a.createElement(me.a,{className:e.icon}),o.a.createElement(x.a,{variant:"h4",className:e.title},"View Analytics"),o.a.createElement(x.a,{variant:"body1",className:e.subtitle},"Monitor and view traffic analytics you are driving to your Lightning Links. Easily be able to view Geographical data on your users and number of visits."))))}var be=a(16),fe=Object(be.b)();var ge=Object(ie.a)({overrides:{MuiTooltip:{tooltip:{fontSize:"14px",backgroundColor:"black"}},MuiSnackbarContent:{root:{backgroundColor:"#2a5bd7",color:"white",fontFamily:"Roboto"}},MuiAppBar:{colorPrimary:{backgroundColor:"#2b2e4a"}}},palette:{type:"dark",primary:{main:"#7289da"},secondary:{main:"#3ca374"}},typography:{fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontSize:14,fontWeightLight:400,fontWeightRegular:500,fontWeightMedium:600}}),he=a(78),xe=a(26),ve=a(79);function ye(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Ee(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ye(a,!0).forEach((function(t){Object(E.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ye(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var we={isSignedIn:!1,userId:"",userName:""},Oe=Object(xe.combineReducers)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.SIGN_IN:return t.payload.rememberMe&&(localStorage.setItem("rememberMe","true"),localStorage.setItem("userId",t.payload.userId),localStorage.setItem("userName",t.payload.userName)),Ee({},e,{isSignedIn:!0,userId:t.payload.userId,userName:t.payload.userName});case n.SIGN_OUT:return localStorage.setItem("rememberMe",""),localStorage.setItem("userId",""),localStorage.setItem("userName",""),Ee({},e,{isSignedIn:!1,userId:"",userName:""});default:return e}}}),je=Object(xe.createStore)(Oe,Object(he.composeWithDevTools)(Object(xe.applyMiddleware)(ve.a)));i.a.render(o.a.createElement(I.a,{store:je},o.a.createElement((function(){var e=Object(I.b)();return Object(r.useEffect)((function(){(function(){var t=Object(u.a)(s.a.mark((function t(){var a,n,r,o;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=localStorage.getItem("rememberMe"),n=localStorage.getItem("userId"),r=localStorage.getItem("userName"),"true"!==a||!n||!r){t.next=16;break}return o=null,t.prev=5,t.next=8,N.get("/user/authed?userId=".concat(n),{withCredentials:!0});case 8:o=t.sent,console.log(o),200===o.status&&!0===o.data&&e(z({userName:r,userId:n})),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(5),console.log("err");case 16:case"end":return t.stop()}}),t,null,[[5,13]])})));return function(){return t.apply(this,arguments)}})()()}),[e]),o.a.createElement(m.a,null,o.a.createElement(d.a,{path:"/",exact:!0},o.a.createElement(le.a,{theme:ge},o.a.createElement(M,null),o.a.createElement(X,null),o.a.createElement(ne,null),o.a.createElement(pe,null),o.a.createElement(ce,null))),o.a.createElement(d.a,{path:"/:slug",component:function(e){var t=e.match;return Object(r.useEffect)((function(){(function(){var e=Object(u.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=null,e.prev=1,e.next=4,N.get("/"+t);case 4:200===(a=e.sent).status&&window.location.replace(a.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),404===e.t0.response.status&&fe.push("/");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}})()(t.params.slug)}),[t.params.slug]),o.a.createElement(o.a.Fragment,null)}}))}),null)),document.getElementById("root"))},88:function(e,t,a){e.exports=a(117)}},[[88,1,2]]]);
//# sourceMappingURL=main.7fdf3e29.chunk.js.map