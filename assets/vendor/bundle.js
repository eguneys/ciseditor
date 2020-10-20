var Tetris=function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){n(2),n(3),n(4),n(5);const r=n(6);e.exports=r.app},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"files",function(){return E}),n.d(r,"ranks",function(){return O}),n.d(r,"allKeys",function(){return R}),n.d(r,"pos2key",function(){return S}),n.d(r,"key2pos",function(){return P}),n.d(r,"black",function(){return B}),n.d(r,"white",function(){return F}),n.d(r,"asWhite",function(){return K}),n.d(r,"flip",function(){return M}),n.d(r,"readShapes",function(){return j}),n.d(r,"readFen",function(){return $}),n.d(r,"readMoves",function(){return T}),n.d(r,"readPly",function(){return q}),n.d(r,"writeFen",function(){return I}),n.d(r,"fPosToTranslateAbs",function(){return N});var i={};n.r(i),n.d(i,"tag",function(){return J}),n.d(i,"div",function(){return ee}),n.d(i,"updateChildren",function(){return te}),n.d(i,"fTranslateAbs",function(){return ne}),n.d(i,"fAddClass",function(){return re}),n.d(i,"fListen",function(){return ie}),n.d(i,"fHide",function(){return oe}),n.d(i,"fShow",function(){return le});var o={};function l(e){let t={};for(let n in e)t[n]=e[n];return t}function s(e,t){let n={};return Object.keys(e).forEach(r=>{let i=t(r,e[r]),o=Object.keys(i)[0];n[o]=i[o]}),n}function a(e,t){Object.keys(e).forEach(n=>t(n,e[n]))}function u(e){this.index=e,this.char=String.fromCharCode(97+e)}function c(e){this.index=e,this.char=String.fromCharCode(49+e)}n.r(o),n.d(o,"svg",function(){return se}),n.d(o,"renderShape",function(){return ae}),n.d(o,"renderMarker",function(){return de});const f={A:new u(0),B:new u(1),C:new u(2),D:new u(3),E:new u(4),F:new u(5),G:new u(6),H:new u(7),of:e=>new u(7&e.index)},d={of:e=>new c(e.index>>3)};function h(e){this.index=e;let t=f.of(this),n=d.of(this);this.file=t,this.rank=n,this.key=t.char+n.char,this.hore=(e,t)=>{let n=t(this);return n?[n,...e(n)?[]:n.hore(e,t)]:[]},this.righte=e=>this.hore(e,e=>e.right()),this.lefte=e=>this.hore(e,e=>e.left()),this.down=()=>p.at(t.index,n.index-1),this.left=()=>p.at(t.index-1,n.index),this.downLeft=()=>p.at(t.index-1,n.index-1),this.downRight=()=>p.at(t.index+1,n.index-1),this.up=()=>p.at(t.index,n.index+1),this.right=()=>p.at(t.index+1,n.index),this.upLeft=()=>p.at(t.index-1,n.index+1),this.upRight=()=>p.at(t.index+1,n.index+1)}const p={apply:e=>new h(e),atfr:(e,t)=>new h(e.index+8*t.index),at:(e,t)=>0<=e&&e<8&&0<=t&&t<8?new h(e+8*t):null},y=[];for(let e=0;e<64;e++)y.push(e);p.all=y.map(e=>new h(e)),p.allKeys={},p.all.forEach(e=>p.allKeys[e.key]=e),p.fromKey=e=>p.allKeys[e],p.A1=new h(0),p.B1=new h(1),p.C1=new h(2);const m={forsyth:"P",roleString:"pawn"},k={forsyth:"N",roleString:"knight",dirs:[e=>p.at(e.file.index-1,e.rank.index+2),e=>p.at(e.file.index-1,e.rank.index-2),e=>p.at(e.file.index+1,e.rank.index+2),e=>p.at(e.file.index+1,e.rank.index-2),e=>p.at(e.file.index-2,e.rank.index+1),e=>p.at(e.file.index-2,e.rank.index-1),e=>p.at(e.file.index+2,e.rank.index+1),e=>p.at(e.file.index+2,e.rank.index-1)]},w={forsyth:"B",roleString:"bishop",dirs:[e=>e.upLeft(),e=>e.upRight(),e=>e.downLeft(),e=>e.downRight()]},g={color:e=>({role:"rook",color:e}),forsyth:"R",roleString:"rook",dirs:[e=>e.up(),e=>e.down(),e=>e.left(),e=>e.right()]},v={forsyth:"Q",roleString:"queen",dirs:[g.dirs,w.dirs].flat()},b={color:e=>({role:"king",color:e}),forsyth:"K",roleString:"king",dirs:v.dirs},x={all:[b,v,w,g,m,k],allByRole:{}};x.all.forEach(e=>x.allByRole[e.roleString]=e),x.allByForsyth={},x.all.forEach(e=>x.allByForsyth[e.forsyth]=e),x.forsyth=e=>x.allByForsyth[e];const C={key:"g",color:"#15781B",opacity:1,lineWidth:10},E=["a","b","c","d","e","f","g","h"],O=["1","2","3","4","5","6","7","8"],R=Array.prototype.concat(...E.map(e=>O.map(t=>e+t))),S=e=>R[8*e[0]+e[1]],P=e=>[e.charCodeAt(0)-97,e.charCodeAt(1)-49],B="black",F="white";function K(e){return e===F}function M(e){return e===F?B:F}let A={w:F,b:B},L={k:"king",q:"queen",r:"rook",b:"bishop",n:"knight",p:"pawn"};function j(e){if(!e)return[];return e.split(" ").map(e=>{let[t,n]=e.split("-");return{orig:(e=>e)(t),dest:(e=>e)(n),brush:C}})}function $(e){let[t,n,r,i]=e.split(" "),o=A[n],l={};return t.split("/").forEach((e,t)=>{t=7-t;let n=0;for(let r of e){let e,i;(e=L[r])?i=B:(e=L[r.toLowerCase()])&&(i=F),i?(l[S([n,t])]={role:e,color:i},n++):n+=parseInt(r)}}),{pieces:l,color:o}}function T(e){const t=/^(\d*)\.\.\.$/,n=/^(\d*)\.$/;let r,i,o=[];return e.split(" ").forEach(e=>{let l;(l=e.match(t))?(i=2*parseInt(l[0]),r=[null]):(l=e.match(n))?(i=2*parseInt(l[0])-1,r=[]):(l=moveMatch(e))&&(r.push({ply:i,...l}),i++,2===r.length&&(o.push(r),r=[]))}),1===r.length&&o.push(r),{moves:o}}function q(e){return parseInt(e)}function I({pieces:e}){let t="";for(let n=7;n>=0;n--){let r=0;for(let i=0;i<=7;i++){let o;if(o=e[S([i,n])]){r>0&&(t+=r,r=0);let e=x.allByRole[o.role];t+=o.color===F?e.forsyth.toUpperCase():e.forsyth.toLowerCase()}else r++}r>0&&(t+=r),t+="/"}return t}const N=e=>{const t=e.width/8,n=e.height/8;return(e,r)=>((e,t,n,r)=>[(t?e[0]:7-e[0])*n,(t?7-e[1]:e[1])*r])(e,r,t,n)};function V(e){return{value:e}}function W(e){return{invalid:e}}function _(e,t){return e?V(e):W(t)}const H={name:"king",castledKingFile:f.G,castledRookFile:f.F,tripToRook:(e,t)=>e.righte(e=>t.pieces[e.key])},Q={name:"queen",castledKingFile:f.C,castledRookFile:f.D,tripToRook:(e,t)=>e.lefte(e=>t.pieces[e.key])};function D(e,t){this.take=n=>{let r=l(e);return delete r[n.key],new D(r,t)},this.place=(n,r)=>{let i=l(e);return i[r.key]=n,new D(i,t)},this.move=(n,r)=>{let i=l(e);return i[r.key]=i[n.key],delete i[n.key],new D(i,t)},this.taking=(n,r)=>{let i=l(e);return i[r.key]=i[n.key],delete i[n.key],new D(i,t)},this.actorsOf=()=>{let[e,t]=function(e,t){let n=[],r=[];return e.forEach(e=>t(e)?n.push(e):r.push(e)),[n,r]}(Object.values(this.actors),e=>"white"===e.color);return{white:e,black:t}};this.kingPosOf=t=>{let n=Object.keys(e).find(n=>{let r=e[n];return r.color===t&&"king"===r.role});return p.fromKey(n)},this.actorAt=e=>this.actors[e],this.color=t,this.pieces=e,this.actors=s(e,(e,t)=>({[e]:new Y(t,p.fromKey(e),this)}))}function G(e,t){this.board=e,this.color=t;e.actorsOf(t)}function X({piece:e,orig:t,dest:n,situationBefore:r,after:i,capture:o,promotion:l,castle:s,enpassant:a}){this.piece=e,this.orig=t,this.dest=n,this.situationBefore=()=>r,this.after=()=>i,this.before=()=>r.board,this.situationAfter=()=>new G(i,M(e.color))}function Y(e,t,n){let r=e.color;this.color=r,this.pos=t,this.pseudoValidMoves=function(){let o=[];switch(e.role){case"pawn":let d=s()(t),h=d;function f(e){let i=e(d);if(!i)return null;if(!n.pieces[i.key]||n.pieces[i.key].color===r)return null;let o=n.taking(t,i);return c(i,o,{capture:i})}let p=s()(h),y=[];if(p){let e=n.move(t,p);y=c(p,e)}o.push([h&&l(h)||[],y,f(e=>e.left())||[],f(e=>e.right())||[]].flat());break;case"king":o.push(a(b.dirs)),o.push(i());break;case"knight":o.push(a(k.dirs));break;case"bishop":o.push(u(w.dirs));break;case"rook":o.push(u(g.dirs));break;case"queen":o.push(u(v.dirs))}return o.flatMap(e=>e)};const i=()=>o(H).concat(o(Q));function o(e){let t=n.kingPosOf(r);if(!t)return[];let i=e.tripToRook(t,n),o=i[i.length-1],l=p.atfr(e.castledKingFile,t.rank),s=p.atfr(e.castledRookFile,o.rank),a={king:{[t.key]:l},rook:{[o.key]:s},side:e.name};return[c(t,n.take(t).take(o).place(b.color(r),l).place(g.color(r),s),{castle:a})]}function l(e){let r=n.move(t,e);return r?c(e,r):null}function s(){return function(e){return"white"===e?e=>e.up():e=>e.down()}(e.color)}function a(e){return e.flatMap(e=>e(t)||[]).flatMap(e=>{let r=n.move(t,e);return r?[c(e,r)]:[]})}function u(e){let i=[];return e.forEach(e=>(function e(o,l){let s;if(s=l(o)){let o=n.pieces[s.key];if(o){if(o.color!==r){let e=n.taking(t,s);i.push(c(s,e,{capture:s}))}}else{let r=n.move(t,s);r&&i.push(c(s,r)),e(s,l)}}})(t,e)),i}function c(r,i,o){let l,s,a,u;return o&&(l=o.capture,a=o.castle,s=o.promotion,u=o.enpassant),new X({piece:e,orig:t,dest:r,situationBefore:new G(n,e.color),after:i,capture:l,castle:a,promotion:s,enpassant:u})}this.castleOn=o}function z(e,t,n,r,i,o,l){function s(e,t){return!e||e===t}this.san=l,this.dest=e,this.role=t,this.capture=n,this.file=r,this.rank=i,this.promotion=o,this.move=n=>{let o=null;return a(n.board.pieces,(l,a)=>{if(!o&&a.color===n.color&&a.role===t.roleString&&s(r,p.fromKey(l).file.char)&&s(i,p.fromKey(l).rank.char)){let t=new Y(a,p.fromKey(l),n.board);o=t.pseudoValidMoves().find(t=>t.dest.key===e.key)}}),o?V(o):W(`No move found: ${l}`)}}function U(e,t){this.san=t,this.side=e,this.move=t=>{let n=_(t.board.kingPosOf(t.color),"No king found");if(n.invalid)return n;let r=_(t.board.actorAt(n.value.key),"No Actor found");return r.invalid?r:_(r.value.castleOn(e)[0],"Cannot castle")}}function Z(e){const t=/^(\d*)\.\.\.$/,n=/^(\d*)\.$/;let r,i,o=[];return e.split(" ").forEach(e=>{let l;if(l=e.match(t))i=2*parseInt(l[0]),r=[null];else if(l=e.match(n))i=2*parseInt(l[0])-1,r=[];else{let{value:t,invalid:n}=function(e){if("O-O"===e||"o-o"===e||"0-0"===e)return V(new U(H,e));if("O-O-O"===e||"o-o-o"===e||"0-0-0"===e)return V(new U(Q,e));let t=e.match(/^(N|B|R|Q|K|)([a-h]?)([1-8]?)(x?)([a-h][1-8])(=?[NBQR]?)(\+?)(\#?)$/);if(!t)return n(`Couldn't parse ${e}`);let[r,i,o,l,s,a,u,c,f]=t,d=p.fromKey(a);return a?V(new z(d,x.forsyth(i)||m,""!==s,o,l,u,e)):n(`Invalid move ${e}`)}(e);n?(console.warn(n),r.push(null)):(r.push({ply:i,move:t}),i++),2===r.length&&(o.push(r),r=[])}}),1===r.length&&o.push(r),o}function J(e,t=[],n){let[r,...i]=e.split("."),o=document.createElement(r);return i.forEach(e=>{o.classList.add(e)}),t.forEach?t.forEach(e=>{o.appendChild(e)}):o.append(t),n&&n(o),o}D.initial=()=>D.fromFen("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"),D.fromFen=e=>{let{pieces:t,color:n}=$(e);return new D(t,n)},G.apply=()=>new G(D.initial(),"white");const ee=(e,t,n)=>J("div"+e,t,n),te=(e,t)=>{for(e=e.firstChild;e;)t(e),e=e.nextSibling},ne=e=>t=>{t.style.transform=`translate(${e[0]}px,${e[1]}px)`},re=e=>t=>{e.split(".").forEach(e=>{t.classList.add(e)})},ie=(e,t)=>n=>{n.addEventListener(e,()=>{t(n)})},oe=e=>{e.classList.contains("hidden")||e.classList.add("hidden")},le=e=>{e.classList.contains("hidden")&&e.classList.remove("hidden")};function se(e,t=[]){let n=document.createElementNS("http://www.w3.org/2000/svg",e);return t.forEach&&t.forEach(e=>n.appendChild(e)),n}function ae(e,t,n){let r,i=fe(P(e.orig),t);if(e.dest){let o=fe(P(e.dest),t);r=function(e,t,n,r){const i=function(e){return 10/512*e.width}(r),o=ce(t,r),l=ce(n,r),s=l[0]-o[0],a=l[1]-o[1],u=Math.atan2(a,s),c=Math.cos(u)*i,f=Math.sin(u)*i;return he(se("line"),{stroke:e.color,"stroke-width":ue(e,r),"stroke-linecap":"round","marker-end":"url(#arrowhead-"+e.key+")",opacity:e.opacity,x1:o[0],y1:o[1],x2:l[0]-c,y2:l[1]-f})}(e.brush,i,o,n)}else r=function(e,t,n){const r=ce(t,n),i=function(e){return e.width/512*4}(n),o=(n.width+n.height)/32;return he(se("circle"),{stroke:e.color,"stroke-width":i,fill:"none",opacity:e.opacity,cx:r[0],cy:r[1],r:o-i/2})}(e.brush,i,n);return r}function ue(e,t){return(e.lineWidth||10)/512*t.width}function ce(e,t){return[(e[0]+.5)*t.width/8,(7.5-e[1])*t.height/8]}function fe(e,t){return"white"===t?e:[7-e[0],7-e[1]]}function de(e){const t=he(se("marker"),{id:"arrowhead-"+e.key,orient:"auto",markerWidth:4,markerHeight:8,refX:2.05,refY:2.01});return t.appendChild(he(se("path"),{d:"M0,0 V4 L3,2 Z",fill:e.color})),t.setAttribute("mdKey",e.key),t}function he(e,t){for(const n in t)e.setAttribute(n,t[n]);return e}let{ranks:pe,files:ye,key2pos:me,fPosToTranslateAbs:ke}=r,{svg:we,renderMarker:ge,renderShape:ve}=o,{div:be,tag:xe,fTranslateAbs:Ce,fListen:Ee,updateChildren:Oe}=i;function Re(e,t,n){let r,i,o,l,s,a,u,c,f,d,{history:h}=e;this.el=n,this.bounds=()=>c,this.init=e=>{if(r=e.game||"main",i=e.color,o=j(e.shapes),l=parseInt(e.ply),s={},a=[],u=h.moveFor(r,l)){let e=u.value.situationAfter();s=e.board.pieces,a.push(u.value.orig.key),a.push(u.value.dest.key)}i=i||h.colorFor(r),c=n.getBoundingClientRect()},this.syncVisible=()=>{c=n.getBoundingClientRect(),this.isInViewport=function(e){return e.top>=0&&e.left>=0&&e.bottom<=window.innerHeight&&e.right<=window.innerWidth}(c)},this.render=()=>{d&&(d(),n.removeChild(f.wrapper)),this.wrap()},this.wrap=()=>{f=function(e,t,n,r,i){let o=K(e),l=ke(r),s=xe("md-board",[...i.map(e=>{let t=me(e),n=xe("square.last-move",[],Ce(l(t,o)));return n.mdKey=e,n}),...Object.keys(t).map(e=>{let n=me(e),r=t[e],i=xe(`piece.${r.color}.${r.role}`,[],Ce(l(n,o)));return i.mdKey=e,i})]),a=we("svg",[we("defs",[ge(C)]),...n.map(t=>ve(t,e,r))]);return{wrapper:xe("md-wrap",[s,a,xe("coords.ranks."+e,pe.map(e=>xe("coord",e))),xe("coords.files."+e,ye.map(e=>xe("coord",e)))]),board:s,svg:a}}(i,s,o,c,a),n.appendChild(f.wrapper),d=function(e,t){const n=new window.ResizeObserver(t);return n.observe(e),()=>{n.unobserve(e)}}(n,()=>{!function(e,t){let n=t.getBoundingClientRect(),r=ke(n);Oe(t,t=>{Ce(r(me(t.mdKey),e))(t)})}(K(i),f.board),function(e,t,n){let{board:r,svg:i}=e,o=r.getBoundingClientRect(),l=i.firstChild,s=[];for(l=l.nextSibling;l;)s.push(l),l=l.nextSibling;for(const e of s)i.removeChild(e);t.forEach(e=>{i.appendChild(ve(e,n,o))})}(f,o,i)})}}function Se(e,t,n){let r=n.dataset.game||"main initial",i=n.dataset.line,o=n.dataset.color,l=r.split(" ");1===l.length&&l.push("main"),this.game=l[0],this.base=l[1],this.color=o;let s=Z(i);this.flat=s.flat().flatMap(e=>e?[e]:[]);let a=(t,n)=>{e.show(this.game,t,n)},u=()=>{e.hide()};this.wrap=()=>{let t=e.history.lineDepthFor(this.game),r=re(`depth${t}`);(function(e,t,n){let r=e=>r=>{["touchstart","mouseover"].forEach(n=>Ee(n,n=>t(e,n))(r)),["touchend","mouseout"].forEach(e=>Ee(e,n)(r))};return e.flatMap(([e,t])=>{let n=e&&r(e.ply),i=t&&r(t.ply);return e&&t?[xe("strong.moven",(e.ply+1)/2+". "),xe("span.movem",e.move.san+" ",n),xe("span.movem",t.move.san+" ",i)]:e?[xe("strong.moven",(e.ply+1)/2+". "),xe("span.movem",e.move.san+" ",n)]:[xe("strong.moven",t.ply/2+"... "),xe("span.movem",t.move.san+" ",i)]})})(s,a,u).forEach(e=>n.appendChild(e)),r(n)}}function Pe(e,t){let{lines:n}=e,r=function(e,t){let n={};return e.forEach(e=>{let r=t(e),i=Object.keys(r)[0];n[i]||(n[i]=[]),n[i].push(r[i])}),n}(n,e=>({[e.game]:e})),i=Object.keys(r),o={},l={},u={};function c(e,t){let n=o[e].find(e=>e.ply===t);return n||(console.warn(`No move found for ${e} ${t}`),null)}function f(e,t){if(0===t)return G.apply();return c(e,t).value.situationAfter()}function d(e,t){return e.map(({ply:e,move:n})=>{if(!t)return{ply:e,value:null};let{invalid:r,value:i}=n.move(t);return r?(console.warn(r),t=null,{ply:e,value:r}):(t=i.situationAfter(),{ply:e,value:i})}).filter(e=>e)}i.forEach(e=>{u[e]=function e(t){if("initial"===t||!r[t])return"white";let n=r[t][0];return n.color||e(n.base)}(e)}),function e(t,n,i){a(function(e){let t=s(function(e,t){let n={};for(let r in e)t(r,e[r])&&(n[r]=e[r]);return n}(r,(t,n)=>n[0].base===e),(e,t)=>({[e]:t.flatMap(e=>e.flat).sort((e,t)=>e.ply<t.ply?-1:e.ply===t.ply?0:1)}));return s(t,(t,n)=>{let r=f(e,n[0].ply-1);return{[t]:d(n,r)}})}(t),(t,r)=>{o[t]=r,l[t]=n,e(t,n+1)})}("initial",0),this.lineDepthFor=e=>l[e],this.colorFor=e=>u[e],this.situationFor=f,this.moveFor=c}n.d(t,"Ply",function(){return Re}),n.d(t,"MoveLine",function(){return Se}),n.d(t,"History",function(){return Pe}),n.d(t,"makePlys",function(){return Be}),n.d(t,"makeMoveLines",function(){return Fe}),n.d(t,"Play",function(){return Ke}),n.d(t,"app",function(){return Me});const Be=(e,t)=>{let{element:n}=t,r=[];for(let i of n.querySelectorAll("[data-ply]")){let n=new Re(e,t,i);n.init({game:i.dataset.game,color:i.dataset.color,shapes:i.dataset.shapes,ply:i.dataset.ply}),r.push(n)}return r},Fe=(e,t)=>{let{element:n}=t,r=[];for(let i of n.querySelectorAll("[data-line]"))r.push(new Se(e,t,i));return r};function Ke(e){let{element:t}=e,n=this.lines=Fe(this,e),r=(this.history=new Pe(this,e),this.plys=Be(this,e)),i=ee(".hover-ply",[],oe),o=new Re(this,e,i);this.wrap=()=>{t.appendChild(i),n.forEach(e=>e.wrap()),r.forEach(e=>e.wrap())};let l=this.visiblePly=()=>r.filter(e=>e.isInViewport)[0];function s(){r.forEach(e=>e.syncVisible())}this.listen=()=>{!function(e){let t;document.addEventListener("scroll",function(n){clearTimeout(t),t=setTimeout(e,60)},!1)}(s),s()},this.hide=()=>{oe(i)},this.show=(t,n,r)=>{let s=l(),a=[window.pageXOffset,window.pageYOffset];if(s)a[0]+=s.bounds().left,a[1]+=s.bounds().top;else{let{clientWidth:t}=e.element,n=r.getBoundingClientRect(),o=i.getBoundingClientRect();n.left<t/2&&(a[0]+=t-o.width-4)}ne(a)(i),o.init({game:t,ply:n}),o.render(),le(i)}}function Me(e,t){let n=new Ke({element:e});n.wrap(),n.listen()}}]);