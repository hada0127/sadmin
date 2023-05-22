import{S as kt,i as Ht,s as Bt,w as Y,Z as x,M as Dt,e as gt,a as s,k as o,q as k,y as d,O as It,N as yt,h as t,c as f,l as n,m as a,r as H,z as v,n as c,p as et,G as $,b as r,A as _,_ as ee,g,d as h,B as b}from"../chunks/index.2b5a13c2.js";import{E as A}from"../chunks/Editor.77f2a3a9.js";import{B as Rt}from"../chunks/Button.879704b7.js";import{H as ce}from"../chunks/HighlightSvelte.1f58988f.js";import{h as Vt}from"../chunks/vs2015.657c0888.js";import{p as Gt,a as zt}from"../chunks/PageTitle.50d2d268.js";function Ut(l){let E;return{c(){E=k("Set Focus")},l(u){E=H(u,"Set Focus")},m(u,w){r(u,E,w)},d(u){u&&t(E)}}}function Ct(l){let E,u,w,S,B,te,m,pe,ie,D,F,me,re,I,y,p,le,Te,we,j,Se,J,N,Fe,se,Ae,ke,R,je,He,V,Be,O,Z,De,fe,Je,Ie,ue,Ne,ye,G,oe,z,Oe,Ze,ne,M,U,Ke,Re,K,L,Ve,ae,Le,Ge,P,Qe,T,We,Xe,ze,C,Ye,Ue,Q,q,xe,Ce,W,X,qe;function ht(e){l[6](e)}let tt={placeholder:"Description"};l[0]!==void 0&&(tt.value=l[0]),m=new A({props:tt}),Y.push(()=>x(m,"value",ht));function bt(e){l[7](e)}let it={view:!0};l[0]!==void 0&&(it.value=l[0]),F=new A({props:it}),Y.push(()=>x(F,"value",bt)),y=new ce({props:{code:`<script lang="ts">
  let txt;
<\/script>
<Editor bind:value={txt} placeholder="Description" />
<Editor bind:value={txt} view={true} />`}}),j=new A({props:{value:"test Message",view:!0}}),N=new ce({props:{code:'<Editor value="test Message" view={true} />'}});function Et(e){l[8](e)}let rt={};l[3]!==void 0&&(rt.ref=l[3]),R=new A({props:rt}),Y.push(()=>x(R,"ref",Et)),V=new Rt({props:{$$slots:{default:[Ut]},$$scope:{ctx:l}}}),V.$on("click",l[5]),Z=new ce({props:{code:`<script lang="ts">
  import type SunEditor from 'suneditor/src/lib/core';
  let ref: SunEditor | null = null;
  const setFocus = () => {
    ref && ref.core.focus();
  };
<\/script>
<Editor bind:ref />
<Button on:click={setFocus}>Set Focus</Button>`}});function ct(e){l[9](e)}let lt={height:"300"};l[1]!==void 0&&(lt.value=l[1]),z=new A({props:lt}),Y.push(()=>x(z,"value",ct));function wt(e){l[10](e)}let st={width:"100%",height:"300",view:!0};l[1]!==void 0&&(st.value=l[1]),U=new A({props:st}),Y.push(()=>x(U,"value",wt)),L=new ce({props:{code:`<script lang="ts">
  let txt2;
<\/script>
<div class="columns">
  <div class="column">
    <Editor bind:value={txt2} height="300" />
  </div>
  <div class="column">
    <div style="border:1px solid #EEE;border-radius:4px;padding:5px;">
      <Editor bind:value={txt2} width="100%" height="300" view={true} />
    </div>
  </div>
</div>`}});function St(e){l[11](e)}let ft={toolbar:l[4]};l[2]!==void 0&&(ft.value=l[2]),C=new A({props:ft}),Y.push(()=>x(C,"value",St));function Ft(e){l[12](e)}let ut={view:!0};return l[2]!==void 0&&(ut.value=l[2]),q=new A({props:ut}),Y.push(()=>x(q,"value",Ft)),X=new ce({props:{code:`<script lang="ts">
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
<Editor bind:value={txt3} view={true} />`}}),{c(){E=new Dt(!1),u=gt(),w=s(),S=o("h2"),B=k("Basic"),te=s(),d(m.$$.fragment),ie=s(),D=o("div"),d(F.$$.fragment),re=s(),I=o("figure"),d(y.$$.fragment),p=s(),le=o("h2"),Te=k("View"),we=s(),d(j.$$.fragment),Se=s(),J=o("figure"),d(N.$$.fragment),Fe=s(),se=o("h2"),Ae=k("Focus"),ke=s(),d(R.$$.fragment),He=s(),d(V.$$.fragment),Be=s(),O=o("figure"),d(Z.$$.fragment),De=s(),fe=o("h2"),Je=k("Size"),Ie=s(),ue=o("p"),Ne=k("Default width is 100% and default height is auto"),ye=s(),G=o("div"),oe=o("div"),d(z.$$.fragment),Ze=s(),ne=o("div"),M=o("div"),d(U.$$.fragment),Re=s(),K=o("figure"),d(L.$$.fragment),Ve=s(),ae=o("h2"),Le=k("Toolbar"),Ge=s(),P=o("p"),Qe=k("Using SunEditor ("),T=o("a"),We=k("Readme"),Xe=k(")"),ze=s(),d(C.$$.fragment),Ue=s(),Q=o("div"),d(q.$$.fragment),Ce=s(),W=o("figure"),d(X.$$.fragment),this.h()},l(e){const i=It("svelte-fyjslq",document.head);E=yt(i,!1),u=gt(),i.forEach(t),w=f(e),S=n(e,"H2",{});var $e=a(S);B=H($e,"Basic"),$e.forEach(t),te=f(e),v(m.$$.fragment,e),ie=f(e),D=n(e,"DIV",{class:!0});var de=a(D);v(F.$$.fragment,de),de.forEach(t),re=f(e),I=n(e,"FIGURE",{class:!0});var ve=a(I);v(y.$$.fragment,ve),ve.forEach(t),p=f(e),le=n(e,"H2",{});var _e=a(le);Te=H(_e,"View"),_e.forEach(t),we=f(e),v(j.$$.fragment,e),Se=f(e),J=n(e,"FIGURE",{class:!0});var ge=a(J);v(N.$$.fragment,ge),ge.forEach(t),Fe=f(e),se=n(e,"H2",{});var he=a(se);Ae=H(he,"Focus"),he.forEach(t),ke=f(e),v(R.$$.fragment,e),He=f(e),v(V.$$.fragment,e),Be=f(e),O=n(e,"FIGURE",{class:!0});var be=a(O);v(Z.$$.fragment,be),be.forEach(t),De=f(e),fe=n(e,"H2",{});var Ee=a(fe);Je=H(Ee,"Size"),Ee.forEach(t),Ie=f(e),ue=n(e,"P",{});var ot=a(ue);Ne=H(ot,"Default width is 100% and default height is auto"),ot.forEach(t),ye=f(e),G=n(e,"DIV",{class:!0});var Me=a(G);oe=n(Me,"DIV",{class:!0});var nt=a(oe);v(z.$$.fragment,nt),nt.forEach(t),Ze=f(Me),ne=n(Me,"DIV",{class:!0});var at=a(ne);M=n(at,"DIV",{style:!0});var pt=a(M);v(U.$$.fragment,pt),pt.forEach(t),at.forEach(t),Me.forEach(t),Re=f(e),K=n(e,"FIGURE",{class:!0});var mt=a(K);v(L.$$.fragment,mt),mt.forEach(t),Ve=f(e),ae=n(e,"H2",{});var $t=a(ae);Le=H($t,"Toolbar"),$t.forEach(t),Ge=f(e),P=n(e,"P",{});var Pe=a(P);Qe=H(Pe,"Using SunEditor ("),T=n(Pe,"A",{href:!0,target:!0,rel:!0});var dt=a(T);We=H(dt,"Readme"),dt.forEach(t),Xe=H(Pe,")"),Pe.forEach(t),ze=f(e),v(C.$$.fragment,e),Ue=f(e),Q=n(e,"DIV",{class:!0});var vt=a(Q);v(q.$$.fragment,vt),vt.forEach(t),Ce=f(e),W=n(e,"FIGURE",{class:!0});var _t=a(W);v(X.$$.fragment,_t),_t.forEach(t),this.h()},h(){E.a=u,c(D,"class","mt-2"),c(I,"class","highlight"),c(J,"class","highlight"),c(O,"class","highlight"),c(oe,"class","column"),et(M,"border","1px solid #EEE"),et(M,"border-radius","4px"),et(M,"padding","5px"),c(ne,"class","column"),c(G,"class","columns"),c(K,"class","highlight"),c(T,"href","https://github.com/JiHong88/SunEditor/blob/master/README.md"),c(T,"target","_blank"),c(T,"rel","noreferrer"),c(Q,"class","mt-2"),c(W,"class","highlight")},m(e,i){E.m(Vt,document.head),$(document.head,u),r(e,w,i),r(e,S,i),$(S,B),r(e,te,i),_(m,e,i),r(e,ie,i),r(e,D,i),_(F,D,null),r(e,re,i),r(e,I,i),_(y,I,null),r(e,p,i),r(e,le,i),$(le,Te),r(e,we,i),_(j,e,i),r(e,Se,i),r(e,J,i),_(N,J,null),r(e,Fe,i),r(e,se,i),$(se,Ae),r(e,ke,i),_(R,e,i),r(e,He,i),_(V,e,i),r(e,Be,i),r(e,O,i),_(Z,O,null),r(e,De,i),r(e,fe,i),$(fe,Je),r(e,Ie,i),r(e,ue,i),$(ue,Ne),r(e,ye,i),r(e,G,i),$(G,oe),_(z,oe,null),$(G,Ze),$(G,ne),$(ne,M),_(U,M,null),r(e,Re,i),r(e,K,i),_(L,K,null),r(e,Ve,i),r(e,ae,i),$(ae,Le),r(e,Ge,i),r(e,P,i),$(P,Qe),$(P,T),$(T,We),$(P,Xe),r(e,ze,i),_(C,e,i),r(e,Ue,i),r(e,Q,i),_(q,Q,null),r(e,Ce,i),r(e,W,i),_(X,W,null),qe=!0},p(e,[i]){const $e={};!pe&&i&1&&(pe=!0,$e.value=e[0],ee(()=>pe=!1)),m.$set($e);const de={};!me&&i&1&&(me=!0,de.value=e[0],ee(()=>me=!1)),F.$set(de);const ve={};!je&&i&8&&(je=!0,ve.ref=e[3],ee(()=>je=!1)),R.$set(ve);const _e={};i&8192&&(_e.$$scope={dirty:i,ctx:e}),V.$set(_e);const ge={};!Oe&&i&2&&(Oe=!0,ge.value=e[1],ee(()=>Oe=!1)),z.$set(ge);const he={};!Ke&&i&2&&(Ke=!0,he.value=e[1],ee(()=>Ke=!1)),U.$set(he);const be={};!Ye&&i&4&&(Ye=!0,be.value=e[2],ee(()=>Ye=!1)),C.$set(be);const Ee={};!xe&&i&4&&(xe=!0,Ee.value=e[2],ee(()=>xe=!1)),q.$set(Ee)},i(e){qe||(g(m.$$.fragment,e),g(F.$$.fragment,e),g(y.$$.fragment,e),g(j.$$.fragment,e),g(N.$$.fragment,e),g(R.$$.fragment,e),g(V.$$.fragment,e),g(Z.$$.fragment,e),g(z.$$.fragment,e),g(U.$$.fragment,e),g(L.$$.fragment,e),g(C.$$.fragment,e),g(q.$$.fragment,e),g(X.$$.fragment,e),qe=!0)},o(e){h(m.$$.fragment,e),h(F.$$.fragment,e),h(y.$$.fragment,e),h(j.$$.fragment,e),h(N.$$.fragment,e),h(R.$$.fragment,e),h(V.$$.fragment,e),h(Z.$$.fragment,e),h(z.$$.fragment,e),h(U.$$.fragment,e),h(L.$$.fragment,e),h(C.$$.fragment,e),h(q.$$.fragment,e),h(X.$$.fragment,e),qe=!1},d(e){t(u),e&&E.d(),e&&t(w),e&&t(S),e&&t(te),b(m,e),e&&t(ie),e&&t(D),b(F),e&&t(re),e&&t(I),b(y),e&&t(p),e&&t(le),e&&t(we),b(j,e),e&&t(Se),e&&t(J),b(N),e&&t(Fe),e&&t(se),e&&t(ke),b(R,e),e&&t(He),b(V,e),e&&t(Be),e&&t(O),b(Z),e&&t(De),e&&t(fe),e&&t(Ie),e&&t(ue),e&&t(ye),e&&t(G),b(z),b(U),e&&t(Re),e&&t(K),b(L),e&&t(Ve),e&&t(ae),e&&t(Ge),e&&t(P),e&&t(ze),b(C,e),e&&t(Ue),e&&t(Q),b(q),e&&t(Ce),e&&t(W),b(X)}}}function qt(l,E,u){Gt.set("Editor"),zt.set('&gt; <a href="/components/field">Components</a> &gt; <a href="/components/editor">Editor</a>');let w,S,B,te=[["undo","redo","font","fontSize","formatBlock","paragraphStyle","blockquote"],["bold","underline","italic","strike","subscript","superscript","fontColor","hiliteColor","textStyle","removeFormat"],["outdent","indent","align","horizontalRule","list","lineHeight"],["table","link","image","video","audio","imageGallery"],["fullScreen","showBlocks","codeView","preview","print","save","template"]],m=null;const pe=()=>{m&&m.core.focus()};function ie(p){w=p,u(0,w)}function D(p){w=p,u(0,w)}function F(p){m=p,u(3,m)}function me(p){S=p,u(1,S)}function re(p){S=p,u(1,S)}function I(p){B=p,u(2,B)}function y(p){B=p,u(2,B)}return[w,S,B,m,te,pe,ie,D,F,me,re,I,y]}class Nt extends kt{constructor(E){super(),Ht(this,E,qt,Ct,Bt,{})}}export{Nt as default};
