import{S as Xe,i as xe,s as et,k as d,l as v,m,h as t,p as K,n as c,b as o,B as Ke,O as Ne,P as Qe,Y as ee,Z as te,L as nt,e as We,a as _,q as Y,w as H,R as ot,M as ut,c as p,r as Z,x as C,G as b,y as I,_ as ie,f as R,t as z,z as B}from"../../../../../chunks/index-17062e8d.js";import{E as Re}from"../../../../../chunks/Editor-a5094334.js";import{H as ze}from"../../../../../chunks/HighlightSvelte-c2da2fbe.js";import{h as ft}from"../../../../../chunks/vs2015-657c0888.js";import{p as dt,a as vt}from"../../../../../chunks/PageTitle-e61efea4.js";function mt(i){let s,a;return{c(){s=d("div"),this.h()},l(r){s=v(r,"DIV",{style:!0,class:!0});var n=m(s);n.forEach(t),this.h()},h(){K(s,"width",i[1]+i[4]),K(s,"height",i[2]+i[5]),c(s,"class",a="sun-editor-editable "+i[3]+" svelte-1n3305g")},m(r,n){o(r,s,n),s.innerHTML=i[0]},p(r,[n]){n&1&&(s.innerHTML=r[0]),n&18&&K(s,"width",r[1]+r[4]),n&36&&K(s,"height",r[2]+r[5]),n&8&&a!==(a="sun-editor-editable "+r[3]+" svelte-1n3305g")&&c(s,"class",a)},i:Ke,o:Ke,d(r){r&&t(s)}}}function ht(i,s,a){let{value:r=""}=s,{width:n="100%"}=s,{height:g="auto"}=s,w,h,F=new RegExp(/^[0-9]+$/),{inheritsClass:$=s.class?s.class:""}=s;return i.$$set=u=>{a(7,s=Ne(Ne({},s),Qe(u))),"value"in u&&a(0,r=u.value),"width"in u&&a(1,n=u.width),"height"in u&&a(2,g=u.height),"inheritsClass"in u&&a(3,$=u.inheritsClass)},i.$$.update=()=>{i.$$.dirty&2&&a(4,w=F.test(n)?"px":""),i.$$.dirty&4&&a(5,h=F.test(g)?"px":"")},s=Qe(s),[r,n,g,$,w,h]}class Be extends Xe{constructor(s){super(),xe(this,s,ht,mt,et,{value:0,width:1,height:2,inheritsClass:3})}}function _t(i){let s,a,r,n,g,w,h,F,$,u,E,le,f,q,P,ue,N,Ee,fe,Q,we,de,S,W,k,$e,Se,X,U,y,ke,ve,M,L,me,x,ye,he,G,Ve,T,De,He,_e,V,Ce,pe,A,D,Ie,ge,j,J,be;function tt(e){i[4](e)}let Fe={placeholder:"Description"};i[0]!==void 0&&(Fe.value=i[0]),h=new Re({props:Fe}),ee.push(()=>te(h,"value",tt,i[0]));function it(e){i[5](e)}let Ue={};i[0]!==void 0&&(Ue.value=i[0]),E=new Be({props:Ue}),ee.push(()=>te(E,"value",it,i[0])),P=new ze({props:{code:`<script lang="ts">let txt;
<\/script>
<Editor bind:value={txt} placeholder="Description" />
<EditorView bind:value={txt} />`}});function lt(e){i[6](e)}let Ge={height:"300"};i[1]!==void 0&&(Ge.value=i[1]),k=new Re({props:Ge}),ee.push(()=>te(k,"value",lt,i[1]));function st(e){i[7](e)}let Te={width:"100%",height:"300"};i[1]!==void 0&&(Te.value=i[1]),y=new Be({props:Te}),ee.push(()=>te(y,"value",st,i[1])),L=new ze({props:{code:`<script lang="ts">
  let txt2;
<\/script>
<div class="columns">
  <div class="column">
    <Editor bind:value={txt2} height="300" />
  </div>
  <div class="column">
    <div style="border:1px solid #EEE;border-radius:4px;padding:5px;">
      <EditorView bind:value={txt2} width="100%" height="300" />
    </div>
  </div>
</div>`}});function rt(e){i[8](e)}let qe={toolbar:i[3]};i[2]!==void 0&&(qe.value=i[2]),V=new Re({props:qe}),ee.push(()=>te(V,"value",rt,i[2]));function at(e){i[9](e)}let Pe={};return i[2]!==void 0&&(Pe.value=i[2]),D=new Be({props:Pe}),ee.push(()=>te(D,"value",at,i[2])),J=new ze({props:{code:`<script lang="ts">
  let toolbar = [
    [
      "undo",
      "redo",
      "font",
      "fontSize",
      "formatBlock",
      "paragraphStyle",
      "blockquote",
    ],
    [
      "bold",
      "underline",
      "italic",
      "strike",
      "subscript",
      "superscript",
      "fontColor",
      "hiliteColor",
      "textStyle",
      "removeFormat",
    ],
    ["outdent", "indent", "align", "horizontalRule", "list", "lineHeight"],
    ["table", "link", "image", "video", "audio", "imageGallery"],
    [
      "fullScreen",
      "showBlocks",
      "codeView",
      "preview",
      "print",
      "save",
      "template",
    ],
  ];
<\/script>
<Editor bind:value={txt3} {toolbar} />
<EditorView bind:value={txt3} />`}}),{c(){s=new nt(!1),a=We(),r=_(),n=d("h2"),g=Y("Basic"),w=_(),H(h.$$.fragment),$=_(),u=d("div"),H(E.$$.fragment),f=_(),q=d("figure"),H(P.$$.fragment),ue=_(),N=d("h2"),Ee=Y("Size"),fe=_(),Q=d("p"),we=Y("Default width is 100% and default height is auto"),de=_(),S=d("div"),W=d("div"),H(k.$$.fragment),Se=_(),X=d("div"),U=d("div"),H(y.$$.fragment),ve=_(),M=d("figure"),H(L.$$.fragment),me=_(),x=d("h2"),ye=Y("Toolbar"),he=_(),G=d("p"),Ve=Y("Using SunEditor ("),T=d("a"),De=Y("Readme"),He=Y(")"),_e=_(),H(V.$$.fragment),pe=_(),A=d("div"),H(D.$$.fragment),ge=_(),j=d("figure"),H(J.$$.fragment),this.h()},l(e){const l=ot("svelte-fyjslq",document.head);s=ut(l,!1),a=We(),l.forEach(t),r=p(e),n=v(e,"H2",{});var se=m(n);g=Z(se,"Basic"),se.forEach(t),w=p(e),C(h.$$.fragment,e),$=p(e),u=v(e,"DIV",{class:!0});var re=m(u);C(E.$$.fragment,re),re.forEach(t),f=p(e),q=v(e,"FIGURE",{class:!0});var ae=m(q);C(P.$$.fragment,ae),ae.forEach(t),ue=p(e),N=v(e,"H2",{});var ne=m(N);Ee=Z(ne,"Size"),ne.forEach(t),fe=p(e),Q=v(e,"P",{});var oe=m(Q);we=Z(oe,"Default width is 100% and default height is auto"),oe.forEach(t),de=p(e),S=v(e,"DIV",{class:!0});var O=m(S);W=v(O,"DIV",{class:!0});var Me=m(W);C(k.$$.fragment,Me),Me.forEach(t),Se=p(O),X=v(O,"DIV",{class:!0});var Le=m(X);U=v(Le,"DIV",{style:!0});var Ae=m(U);C(y.$$.fragment,Ae),Ae.forEach(t),Le.forEach(t),O.forEach(t),ve=p(e),M=v(e,"FIGURE",{class:!0});var je=m(M);C(L.$$.fragment,je),je.forEach(t),me=p(e),x=v(e,"H2",{});var Je=m(x);ye=Z(Je,"Toolbar"),Je.forEach(t),he=p(e),G=v(e,"P",{});var ce=m(G);Ve=Z(ce,"Using SunEditor ("),T=v(ce,"A",{href:!0,target:!0,rel:!0});var Oe=m(T);De=Z(Oe,"Readme"),Oe.forEach(t),He=Z(ce,")"),ce.forEach(t),_e=p(e),C(V.$$.fragment,e),pe=p(e),A=v(e,"DIV",{class:!0});var Ye=m(A);C(D.$$.fragment,Ye),Ye.forEach(t),ge=p(e),j=v(e,"FIGURE",{class:!0});var Ze=m(j);C(J.$$.fragment,Ze),Ze.forEach(t),this.h()},h(){s.a=a,c(u,"class","mt-2"),c(q,"class","highlight"),c(W,"class","column"),K(U,"border","1px solid #EEE"),K(U,"border-radius","4px"),K(U,"padding","5px"),c(X,"class","column"),c(S,"class","columns"),c(M,"class","highlight"),c(T,"href","https://github.com/JiHong88/SunEditor/blob/master/README.md"),c(T,"target","_blank"),c(T,"rel","noreferrer"),c(A,"class","mt-2"),c(j,"class","highlight")},m(e,l){s.m(ft,document.head),b(document.head,a),o(e,r,l),o(e,n,l),b(n,g),o(e,w,l),I(h,e,l),o(e,$,l),o(e,u,l),I(E,u,null),o(e,f,l),o(e,q,l),I(P,q,null),o(e,ue,l),o(e,N,l),b(N,Ee),o(e,fe,l),o(e,Q,l),b(Q,we),o(e,de,l),o(e,S,l),b(S,W),I(k,W,null),b(S,Se),b(S,X),b(X,U),I(y,U,null),o(e,ve,l),o(e,M,l),I(L,M,null),o(e,me,l),o(e,x,l),b(x,ye),o(e,he,l),o(e,G,l),b(G,Ve),b(G,T),b(T,De),b(G,He),o(e,_e,l),I(V,e,l),o(e,pe,l),o(e,A,l),I(D,A,null),o(e,ge,l),o(e,j,l),I(J,j,null),be=!0},p(e,[l]){const se={};!F&&l&1&&(F=!0,se.value=e[0],ie(()=>F=!1)),h.$set(se);const re={};!le&&l&1&&(le=!0,re.value=e[0],ie(()=>le=!1)),E.$set(re);const ae={};!$e&&l&2&&($e=!0,ae.value=e[1],ie(()=>$e=!1)),k.$set(ae);const ne={};!ke&&l&2&&(ke=!0,ne.value=e[1],ie(()=>ke=!1)),y.$set(ne);const oe={};!Ce&&l&4&&(Ce=!0,oe.value=e[2],ie(()=>Ce=!1)),V.$set(oe);const O={};!Ie&&l&4&&(Ie=!0,O.value=e[2],ie(()=>Ie=!1)),D.$set(O)},i(e){be||(R(h.$$.fragment,e),R(E.$$.fragment,e),R(P.$$.fragment,e),R(k.$$.fragment,e),R(y.$$.fragment,e),R(L.$$.fragment,e),R(V.$$.fragment,e),R(D.$$.fragment,e),R(J.$$.fragment,e),be=!0)},o(e){z(h.$$.fragment,e),z(E.$$.fragment,e),z(P.$$.fragment,e),z(k.$$.fragment,e),z(y.$$.fragment,e),z(L.$$.fragment,e),z(V.$$.fragment,e),z(D.$$.fragment,e),z(J.$$.fragment,e),be=!1},d(e){t(a),e&&s.d(),e&&t(r),e&&t(n),e&&t(w),B(h,e),e&&t($),e&&t(u),B(E),e&&t(f),e&&t(q),B(P),e&&t(ue),e&&t(N),e&&t(fe),e&&t(Q),e&&t(de),e&&t(S),B(k),B(y),e&&t(ve),e&&t(M),B(L),e&&t(me),e&&t(x),e&&t(he),e&&t(G),e&&t(_e),B(V,e),e&&t(pe),e&&t(A),B(D),e&&t(ge),e&&t(j),B(J)}}}function pt(i,s,a){dt.set("Editor"),vt.set('&gt; <a href="/components/field">Components</a> &gt; <a href="/components/editor">Editor</a>');let r,n,g,w=[["undo","redo","font","fontSize","formatBlock","paragraphStyle","blockquote"],["bold","underline","italic","strike","subscript","superscript","fontColor","hiliteColor","textStyle","removeFormat"],["outdent","indent","align","horizontalRule","list","lineHeight"],["table","link","image","video","audio","imageGallery"],["fullScreen","showBlocks","codeView","preview","print","save","template"]];function h(f){r=f,a(0,r)}function F(f){r=f,a(0,r)}function $(f){n=f,a(1,n)}function u(f){n=f,a(1,n)}function E(f){g=f,a(2,g)}function le(f){g=f,a(2,g)}return[r,n,g,w,h,F,$,u,E,le]}class $t extends Xe{constructor(s){super(),xe(this,s,pt,_t,et,{})}}export{$t as default};
