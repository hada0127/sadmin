import{S as Y,i as Z,s as ee,L as te,e as V,a as v,k as u,q as L,w as P,R as le,M as ae,h as l,c as R,l as $,m as k,r as F,x as T,n as d,G as b,b as f,y as U,f as A,t as G,z as H,B as O}from"../../../../../chunks/index-17062e8d.js";import{F as K}from"../../../../../chunks/Field-280e7ed8.js";import{H as W}from"../../../../../chunks/Highlight-bcde8ba6.js";import{h as X}from"../../../../../chunks/vbscript-html-2e1caaa5.js";import{h as se}from"../../../../../chunks/vs2015-657c0888.js";import{p as ie,a as ne}from"../../../../../chunks/PageTitle-e61efea4.js";function re(E){let t,s,o;return{c(){t=u("label"),s=u("input"),o=L(`
    Remember me`),this.h()},l(a){t=$(a,"LABEL",{});var n=k(t);s=$(n,"INPUT",{type:!0,name:!0}),o=F(n,`
    Remember me`),n.forEach(l),this.h()},h(){d(s,"type","checkbox"),d(s,"name","checkbox01")},m(a,n){f(a,t,n),b(t,s),b(t,o)},p:O,d(a){a&&l(t)}}}function oe(E){let t,s,o,a,n;return{c(){t=u("label"),s=u("input"),o=L(`
    
    I agree to the `),a=u("a"),n=L("terms and conditions"),this.h()},l(h){t=$(h,"LABEL",{});var m=k(t);s=$(m,"INPUT",{type:!0}),o=F(m,`
    
    I agree to the `),a=$(m,"A",{href:!0});var _=k(a);n=F(_,"terms and conditions"),_.forEach(l),m.forEach(l),this.h()},h(){d(s,"type","checkbox"),d(a,"href","#")},m(h,m){f(h,t,m),b(t,s),b(t,o),b(t,a),b(a,n)},p:O,d(h){h&&l(t)}}}function fe(E){let t,s,o;return{c(){t=u("label"),s=u("input"),o=L(`
    Remember me`),this.h()},l(a){t=$(a,"LABEL",{class:!0});var n=k(t);s=$(n,"INPUT",{type:!0}),o=F(n,`
    Remember me`),n.forEach(l),this.h()},h(){d(s,"type","checkbox"),s.disabled=!0,d(t,"class","disabled")},m(a,n){f(a,t,n),b(t,s),b(t,o)},p:O,d(a){a&&l(t)}}}function me(E){let t,s,o,a,n,h,m,_,p,x,g;return{c(){t=u("label"),s=u("input"),o=L(`
    Going`),a=v(),n=u("label"),h=u("input"),m=L(`
    Not going`),_=v(),p=u("label"),x=u("input"),g=L(`
    Maybe`),this.h()},l(r){t=$(r,"LABEL",{});var c=k(t);s=$(c,"INPUT",{type:!0,name:!0}),o=F(c,`
    Going`),c.forEach(l),a=R(r),n=$(r,"LABEL",{});var y=k(n);h=$(y,"INPUT",{type:!0,name:!0}),m=F(y,`
    Not going`),y.forEach(l),_=R(r),p=$(r,"LABEL",{class:!0});var B=k(p);x=$(B,"INPUT",{type:!0,name:!0}),g=F(B,`
    Maybe`),B.forEach(l),this.h()},h(){d(s,"type","radio"),d(s,"name","rsvp"),d(h,"type","radio"),d(h,"name","rsvp"),d(x,"type","radio"),d(x,"name","rsvp"),x.disabled=!0,d(p,"class","disabled")},m(r,c){f(r,t,c),b(t,s),b(t,o),f(r,a,c),f(r,n,c),b(n,h),b(n,m),f(r,_,c),f(r,p,c),b(p,x),b(p,g)},p:O,d(r){r&&l(t),r&&l(a),r&&l(n),r&&l(_),r&&l(p)}}}function pe(E){let t,s,o,a,n,h,m,_,p,x,g,r,c,y,B,C,Q,z,I,D,N,w,J;return m=new K({props:{class:"checkbox",$$slots:{default:[re]},$$scope:{ctx:E}}}),p=new K({props:{class:"checkbox",$$slots:{default:[oe]},$$scope:{ctx:E}}}),g=new K({props:{label:"Remember me",class:"checkbox",$$slots:{default:[fe]},$$scope:{ctx:E}}}),y=new W({props:{language:X,code:`<Field class="checkbox">
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
</Field>`}}),I=new K({props:{label:"Control",class:"radio",$$slots:{default:[me]},$$scope:{ctx:E}}}),w=new W({props:{language:X,code:`<Field label="Control" class="radio">
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
</Field>`}}),{c(){t=new te(!1),s=V(),o=v(),a=u("h2"),n=L("Checkbox Basic"),h=v(),P(m.$$.fragment),_=v(),P(p.$$.fragment),x=v(),P(g.$$.fragment),r=v(),c=u("figure"),P(y.$$.fragment),B=v(),C=u("h2"),Q=L("Radio Basic"),z=v(),P(I.$$.fragment),D=v(),N=u("figure"),P(w.$$.fragment),this.h()},l(e){const i=le("svelte-fyjslq",document.head);t=ae(i,!1),s=V(),i.forEach(l),o=R(e),a=$(e,"H2",{});var M=k(a);n=F(M,"Checkbox Basic"),M.forEach(l),h=R(e),T(m.$$.fragment,e),_=R(e),T(p.$$.fragment,e),x=R(e),T(g.$$.fragment,e),r=R(e),c=$(e,"FIGURE",{class:!0});var q=k(c);T(y.$$.fragment,q),q.forEach(l),B=R(e),C=$(e,"H2",{});var S=k(C);Q=F(S,"Radio Basic"),S.forEach(l),z=R(e),T(I.$$.fragment,e),D=R(e),N=$(e,"FIGURE",{class:!0});var j=k(N);T(w.$$.fragment,j),j.forEach(l),this.h()},h(){t.a=s,d(c,"class","highlight"),d(N,"class","highlight")},m(e,i){t.m(se,document.head),b(document.head,s),f(e,o,i),f(e,a,i),b(a,n),f(e,h,i),U(m,e,i),f(e,_,i),U(p,e,i),f(e,x,i),U(g,e,i),f(e,r,i),f(e,c,i),U(y,c,null),f(e,B,i),f(e,C,i),b(C,Q),f(e,z,i),U(I,e,i),f(e,D,i),f(e,N,i),U(w,N,null),J=!0},p(e,[i]){const M={};i&1&&(M.$$scope={dirty:i,ctx:e}),m.$set(M);const q={};i&1&&(q.$$scope={dirty:i,ctx:e}),p.$set(q);const S={};i&1&&(S.$$scope={dirty:i,ctx:e}),g.$set(S);const j={};i&1&&(j.$$scope={dirty:i,ctx:e}),I.$set(j)},i(e){J||(A(m.$$.fragment,e),A(p.$$.fragment,e),A(g.$$.fragment,e),A(y.$$.fragment,e),A(I.$$.fragment,e),A(w.$$.fragment,e),J=!0)},o(e){G(m.$$.fragment,e),G(p.$$.fragment,e),G(g.$$.fragment,e),G(y.$$.fragment,e),G(I.$$.fragment,e),G(w.$$.fragment,e),J=!1},d(e){l(s),e&&t.d(),e&&l(o),e&&l(a),e&&l(h),H(m,e),e&&l(_),H(p,e),e&&l(x),H(g,e),e&&l(r),e&&l(c),H(y),e&&l(B),e&&l(C),e&&l(z),H(I,e),e&&l(D),e&&l(N),H(w)}}}function ce(E){return ie.set("Checkbox & Radio"),ne.set('&gt; <a href="/components/field">Components</a> &gt; <a href="/components/checkbox">Checkbox & Radio</a>'),[]}class ge extends Y{constructor(t){super(),Z(this,t,ce,pe,ee,{})}}export{ge as default};
