import{S as le,i as ae,s as se,M as ie,e as Z,a as k,k as m,q as I,y as T,O as ne,N as re,h as l,c as R,l as p,m as v,r as F,z as U,n as d,G as $,b as o,A as w,g as H,d as G,B as M,H as Q}from"../chunks/index.2b5a13c2.js";import{F as K}from"../chunks/Field.f51df3cd.js";import{H as ee}from"../chunks/Highlight.873da638.js";import{h as te}from"../chunks/vbscript-html.2e1caaa5.js";import{h as oe}from"../chunks/vs2015.657c0888.js";import{p as fe,a as me}from"../chunks/PageTitle.50d2d268.js";function pe(x){let t,s,f;return{c(){t=m("label"),s=m("input"),f=I(`
      Remember me`),this.h()},l(a){t=p(a,"LABEL",{});var n=v(t);s=p(n,"INPUT",{type:!0,name:!0}),f=F(n,`
      Remember me`),n.forEach(l),this.h()},h(){d(s,"type","checkbox"),d(s,"name","checkbox01")},m(a,n){o(a,t,n),$(t,s),$(t,f)},p:Q,d(a){a&&l(t)}}}function ce(x){let t,s,f,a,n;return{c(){t=m("label"),s=m("input"),f=I(`
      
      I agree to the `),a=m("a"),n=I("terms and conditions"),this.h()},l(b){t=p(b,"LABEL",{});var u=v(t);s=p(u,"INPUT",{type:!0}),f=F(u,`
      
      I agree to the `),a=p(u,"A",{href:!0});var h=v(a);n=F(h,"terms and conditions"),h.forEach(l),u.forEach(l),this.h()},h(){d(s,"type","checkbox"),d(a,"href","#")},m(b,u){o(b,t,u),$(t,s),$(t,f),$(t,a),$(a,n)},p:Q,d(b){b&&l(t)}}}function ue(x){let t,s,f;return{c(){t=m("label"),s=m("input"),f=I(`
    Remember me`),this.h()},l(a){t=p(a,"LABEL",{class:!0});var n=v(t);s=p(n,"INPUT",{type:!0}),f=F(n,`
    Remember me`),n.forEach(l),this.h()},h(){d(s,"type","checkbox"),s.disabled=!0,d(t,"class","disabled")},m(a,n){o(a,t,n),$(t,s),$(t,f)},p:Q,d(a){a&&l(t)}}}function $e(x){let t,s,f,a,n,b,u,h,_,g,y;return{c(){t=m("label"),s=m("input"),f=I(`
    Going`),a=k(),n=m("label"),b=m("input"),u=I(`
    Not going`),h=k(),_=m("label"),g=m("input"),y=I(`
    Maybe`),this.h()},l(r){t=p(r,"LABEL",{});var c=v(t);s=p(c,"INPUT",{type:!0,name:!0}),f=F(c,`
    Going`),c.forEach(l),a=R(r),n=p(r,"LABEL",{});var L=v(n);b=p(L,"INPUT",{type:!0,name:!0}),u=F(L,`
    Not going`),L.forEach(l),h=R(r),_=p(r,"LABEL",{class:!0});var E=v(_);g=p(E,"INPUT",{type:!0,name:!0}),y=F(E,`
    Maybe`),E.forEach(l),this.h()},h(){d(s,"type","radio"),d(s,"name","rsvp"),d(b,"type","radio"),d(b,"name","rsvp"),d(g,"type","radio"),d(g,"name","rsvp"),g.disabled=!0,d(_,"class","disabled")},m(r,c){o(r,t,c),$(t,s),$(t,f),o(r,a,c),o(r,n,c),$(n,b),$(n,u),o(r,h,c),o(r,_,c),$(_,g),$(_,y)},p:Q,d(r){r&&l(t),r&&l(a),r&&l(n),r&&l(h),r&&l(_)}}}function be(x){let t,s,f,a,n,b,u,h,_,g,y,r,c,L,E,N,j,P,W,z,B,O,A,C,J;return h=new K({props:{class:"checkbox",$$slots:{default:[pe]},$$scope:{ctx:x}}}),y=new K({props:{class:"checkbox",$$slots:{default:[ce]},$$scope:{ctx:x}}}),c=new K({props:{label:"Remember me",class:"checkbox",$$slots:{default:[ue]},$$scope:{ctx:x}}}),N=new ee({props:{language:te,code:`<Field class="checkbox">
  <label>
    <input type="checkbox" name="checkbox01" />
    Remember me
  </label>
</Field>
<Field class="checkbox">
  <label>
    <input type="checkbox" />
    I agree to the <a href="#">terms and conditions</a>
  </label>
</Field>
<Field label="Remember me" class="checkbox">
  <label class="disabled">
    <input type="checkbox" disabled />
    Remember me
  </label>
</Field>`}}),B=new K({props:{label:"Control",class:"radio",$$slots:{default:[$e]},$$scope:{ctx:x}}}),C=new ee({props:{language:te,code:`<Field label="Control" class="radio">
  <label>
    <input type="radio" name="rsvp" />
    Going
  </label>
  <label>
    <input type="radio" name="rsvp" />
    Not going
  </label>
  <label class="disabled">
    <input type="radio" name="rsvp" disabled />
    Maybe
  </label>
</Field>`}}),{c(){t=new ie(!1),s=Z(),f=k(),a=m("h2"),n=I("Checkbox Basic"),b=k(),u=m("div"),T(h.$$.fragment),_=k(),g=m("div"),T(y.$$.fragment),r=k(),T(c.$$.fragment),L=k(),E=m("figure"),T(N.$$.fragment),j=k(),P=m("h2"),W=I("Radio Basic"),z=k(),T(B.$$.fragment),O=k(),A=m("figure"),T(C.$$.fragment),this.h()},l(e){const i=ne("svelte-fyjslq",document.head);t=re(i,!1),s=Z(),i.forEach(l),f=R(e),a=p(e,"H2",{});var q=v(a);n=F(q,"Checkbox Basic"),q.forEach(l),b=R(e),u=p(e,"DIV",{});var S=v(u);U(h.$$.fragment,S),S.forEach(l),_=R(e),g=p(e,"DIV",{});var D=v(g);U(y.$$.fragment,D),D.forEach(l),r=R(e),U(c.$$.fragment,e),L=R(e),E=p(e,"FIGURE",{class:!0});var V=v(E);U(N.$$.fragment,V),V.forEach(l),j=R(e),P=p(e,"H2",{});var X=v(P);W=F(X,"Radio Basic"),X.forEach(l),z=R(e),U(B.$$.fragment,e),O=R(e),A=p(e,"FIGURE",{class:!0});var Y=v(A);U(C.$$.fragment,Y),Y.forEach(l),this.h()},h(){t.a=s,d(E,"class","highlight"),d(A,"class","highlight")},m(e,i){t.m(oe,document.head),$(document.head,s),o(e,f,i),o(e,a,i),$(a,n),o(e,b,i),o(e,u,i),w(h,u,null),o(e,_,i),o(e,g,i),w(y,g,null),o(e,r,i),w(c,e,i),o(e,L,i),o(e,E,i),w(N,E,null),o(e,j,i),o(e,P,i),$(P,W),o(e,z,i),w(B,e,i),o(e,O,i),o(e,A,i),w(C,A,null),J=!0},p(e,[i]){const q={};i&1&&(q.$$scope={dirty:i,ctx:e}),h.$set(q);const S={};i&1&&(S.$$scope={dirty:i,ctx:e}),y.$set(S);const D={};i&1&&(D.$$scope={dirty:i,ctx:e}),c.$set(D);const V={};i&1&&(V.$$scope={dirty:i,ctx:e}),B.$set(V)},i(e){J||(H(h.$$.fragment,e),H(y.$$.fragment,e),H(c.$$.fragment,e),H(N.$$.fragment,e),H(B.$$.fragment,e),H(C.$$.fragment,e),J=!0)},o(e){G(h.$$.fragment,e),G(y.$$.fragment,e),G(c.$$.fragment,e),G(N.$$.fragment,e),G(B.$$.fragment,e),G(C.$$.fragment,e),J=!1},d(e){l(s),e&&t.d(),e&&l(f),e&&l(a),e&&l(b),e&&l(u),M(h),e&&l(_),e&&l(g),M(y),e&&l(r),M(c,e),e&&l(L),e&&l(E),M(N),e&&l(j),e&&l(P),e&&l(z),M(B,e),e&&l(O),e&&l(A),M(C)}}}function he(x){return fe.set("Checkbox & Radio"),me.set('&gt; <a href="/components/field">Components</a> &gt; <a href="/components/checkbox">Checkbox & Radio</a>'),[]}class xe extends le{constructor(t){super(),ae(this,t,he,be,se,{})}}export{xe as default};
