/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(()=>{var gb=Object.create;var fn=Object.defineProperty;var vb=Object.getOwnPropertyDescriptor;var hb=Object.getOwnPropertyNames;var Eb=Object.getPrototypeOf,yb=Object.prototype.hasOwnProperty;var mb=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+e+'" is not supported')});var he=(e,t)=>()=>(e&&(t=e(e=0)),t);var c=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),De=(e,t)=>{for(var r in t)fn(e,r,{get:t[r],enumerable:!0})},Bs=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of hb(t))!yb.call(e,i)&&i!==r&&fn(e,i,{get:()=>t[i],enumerable:!(n=vb(t,i))||n.enumerable});return e};var le=(e,t,r)=>(r=e!=null?gb(Eb(e)):{},Bs(t||!e||!e.__esModule?fn(r,"default",{value:e,enumerable:!0}):r,e)),rt=e=>Bs(fn({},"__esModule",{value:!0}),e);var Ui=c(()=>{"use strict";window.tram=function(e){function t(l,y){var I=new U.Bare;return I.init(l,y)}function r(l){return l.replace(/[A-Z]/g,function(y){return"-"+y.toLowerCase()})}function n(l){var y=parseInt(l.slice(1),16),I=y>>16&255,x=y>>8&255,b=255&y;return[I,x,b]}function i(l,y,I){return"#"+(1<<24|l<<16|y<<8|I).toString(16).slice(1)}function o(){}function a(l,y){f("Type warning: Expected: ["+l+"] Got: ["+typeof y+"] "+y)}function s(l,y,I){f("Units do not match ["+l+"]: "+y+", "+I)}function u(l,y,I){if(y!==void 0&&(I=y),l===void 0)return I;var x=I;return St.test(l)||!ft.test(l)?x=parseInt(l,10):ft.test(l)&&(x=1e3*parseFloat(l)),0>x&&(x=0),x===x?x:I}function f(l){se.debug&&window&&window.console.warn(l)}function h(l){for(var y=-1,I=l?l.length:0,x=[];++y<I;){var b=l[y];b&&x.push(b)}return x}var p=function(l,y,I){function x(ie){return typeof ie=="object"}function b(ie){return typeof ie=="function"}function S(){}function Z(ie,pe){function V(){var Le=new ae;return b(Le.init)&&Le.init.apply(Le,arguments),Le}function ae(){}pe===I&&(pe=ie,ie=Object),V.Bare=ae;var ue,be=S[l]=ie[l],tt=ae[l]=V[l]=new S;return tt.constructor=V,V.mixin=function(Le){return ae[l]=V[l]=Z(V,Le)[l],V},V.open=function(Le){if(ue={},b(Le)?ue=Le.call(V,tt,be,V,ie):x(Le)&&(ue=Le),x(ue))for(var _r in ue)y.call(ue,_r)&&(tt[_r]=ue[_r]);return b(tt.init)||(tt.init=ie),V},V.open(pe)}return Z}("prototype",{}.hasOwnProperty),d={ease:["ease",function(l,y,I,x){var b=(l/=x)*l,S=b*l;return y+I*(-2.75*S*b+11*b*b+-15.5*S+8*b+.25*l)}],"ease-in":["ease-in",function(l,y,I,x){var b=(l/=x)*l,S=b*l;return y+I*(-1*S*b+3*b*b+-3*S+2*b)}],"ease-out":["ease-out",function(l,y,I,x){var b=(l/=x)*l,S=b*l;return y+I*(.3*S*b+-1.6*b*b+2.2*S+-1.8*b+1.9*l)}],"ease-in-out":["ease-in-out",function(l,y,I,x){var b=(l/=x)*l,S=b*l;return y+I*(2*S*b+-5*b*b+2*S+2*b)}],linear:["linear",function(l,y,I,x){return I*l/x+y}],"ease-in-quad":["cubic-bezier(0.550, 0.085, 0.680, 0.530)",function(l,y,I,x){return I*(l/=x)*l+y}],"ease-out-quad":["cubic-bezier(0.250, 0.460, 0.450, 0.940)",function(l,y,I,x){return-I*(l/=x)*(l-2)+y}],"ease-in-out-quad":["cubic-bezier(0.455, 0.030, 0.515, 0.955)",function(l,y,I,x){return(l/=x/2)<1?I/2*l*l+y:-I/2*(--l*(l-2)-1)+y}],"ease-in-cubic":["cubic-bezier(0.550, 0.055, 0.675, 0.190)",function(l,y,I,x){return I*(l/=x)*l*l+y}],"ease-out-cubic":["cubic-bezier(0.215, 0.610, 0.355, 1)",function(l,y,I,x){return I*((l=l/x-1)*l*l+1)+y}],"ease-in-out-cubic":["cubic-bezier(0.645, 0.045, 0.355, 1)",function(l,y,I,x){return(l/=x/2)<1?I/2*l*l*l+y:I/2*((l-=2)*l*l+2)+y}],"ease-in-quart":["cubic-bezier(0.895, 0.030, 0.685, 0.220)",function(l,y,I,x){return I*(l/=x)*l*l*l+y}],"ease-out-quart":["cubic-bezier(0.165, 0.840, 0.440, 1)",function(l,y,I,x){return-I*((l=l/x-1)*l*l*l-1)+y}],"ease-in-out-quart":["cubic-bezier(0.770, 0, 0.175, 1)",function(l,y,I,x){return(l/=x/2)<1?I/2*l*l*l*l+y:-I/2*((l-=2)*l*l*l-2)+y}],"ease-in-quint":["cubic-bezier(0.755, 0.050, 0.855, 0.060)",function(l,y,I,x){return I*(l/=x)*l*l*l*l+y}],"ease-out-quint":["cubic-bezier(0.230, 1, 0.320, 1)",function(l,y,I,x){return I*((l=l/x-1)*l*l*l*l+1)+y}],"ease-in-out-quint":["cubic-bezier(0.860, 0, 0.070, 1)",function(l,y,I,x){return(l/=x/2)<1?I/2*l*l*l*l*l+y:I/2*((l-=2)*l*l*l*l+2)+y}],"ease-in-sine":["cubic-bezier(0.470, 0, 0.745, 0.715)",function(l,y,I,x){return-I*Math.cos(l/x*(Math.PI/2))+I+y}],"ease-out-sine":["cubic-bezier(0.390, 0.575, 0.565, 1)",function(l,y,I,x){return I*Math.sin(l/x*(Math.PI/2))+y}],"ease-in-out-sine":["cubic-bezier(0.445, 0.050, 0.550, 0.950)",function(l,y,I,x){return-I/2*(Math.cos(Math.PI*l/x)-1)+y}],"ease-in-expo":["cubic-bezier(0.950, 0.050, 0.795, 0.035)",function(l,y,I,x){return l===0?y:I*Math.pow(2,10*(l/x-1))+y}],"ease-out-expo":["cubic-bezier(0.190, 1, 0.220, 1)",function(l,y,I,x){return l===x?y+I:I*(-Math.pow(2,-10*l/x)+1)+y}],"ease-in-out-expo":["cubic-bezier(1, 0, 0, 1)",function(l,y,I,x){return l===0?y:l===x?y+I:(l/=x/2)<1?I/2*Math.pow(2,10*(l-1))+y:I/2*(-Math.pow(2,-10*--l)+2)+y}],"ease-in-circ":["cubic-bezier(0.600, 0.040, 0.980, 0.335)",function(l,y,I,x){return-I*(Math.sqrt(1-(l/=x)*l)-1)+y}],"ease-out-circ":["cubic-bezier(0.075, 0.820, 0.165, 1)",function(l,y,I,x){return I*Math.sqrt(1-(l=l/x-1)*l)+y}],"ease-in-out-circ":["cubic-bezier(0.785, 0.135, 0.150, 0.860)",function(l,y,I,x){return(l/=x/2)<1?-I/2*(Math.sqrt(1-l*l)-1)+y:I/2*(Math.sqrt(1-(l-=2)*l)+1)+y}],"ease-in-back":["cubic-bezier(0.600, -0.280, 0.735, 0.045)",function(l,y,I,x,b){return b===void 0&&(b=1.70158),I*(l/=x)*l*((b+1)*l-b)+y}],"ease-out-back":["cubic-bezier(0.175, 0.885, 0.320, 1.275)",function(l,y,I,x,b){return b===void 0&&(b=1.70158),I*((l=l/x-1)*l*((b+1)*l+b)+1)+y}],"ease-in-out-back":["cubic-bezier(0.680, -0.550, 0.265, 1.550)",function(l,y,I,x,b){return b===void 0&&(b=1.70158),(l/=x/2)<1?I/2*l*l*(((b*=1.525)+1)*l-b)+y:I/2*((l-=2)*l*(((b*=1.525)+1)*l+b)+2)+y}]},E={"ease-in-back":"cubic-bezier(0.600, 0, 0.735, 0.045)","ease-out-back":"cubic-bezier(0.175, 0.885, 0.320, 1)","ease-in-out-back":"cubic-bezier(0.680, 0, 0.265, 1)"},T=document,_=window,w="bkwld-tram",m=/[\-\.0-9]/g,C=/[A-Z]/,A="number",R=/^(rgb|#)/,P=/(em|cm|mm|in|pt|pc|px)$/,N=/(em|cm|mm|in|pt|pc|px|%)$/,H=/(deg|rad|turn)$/,z="unitless",$=/(all|none) 0s ease 0s/,J=/^(width|height)$/,te=" ",M=T.createElement("a"),O=["Webkit","Moz","O","ms"],q=["-webkit-","-moz-","-o-","-ms-"],K=function(l){if(l in M.style)return{dom:l,css:l};var y,I,x="",b=l.split("-");for(y=0;y<b.length;y++)x+=b[y].charAt(0).toUpperCase()+b[y].slice(1);for(y=0;y<O.length;y++)if(I=O[y]+x,I in M.style)return{dom:I,css:q[y]+l}},B=t.support={bind:Function.prototype.bind,transform:K("transform"),transition:K("transition"),backface:K("backface-visibility"),timing:K("transition-timing-function")};if(B.transition){var re=B.timing.dom;if(M.style[re]=d["ease-in-back"][0],!M.style[re])for(var ne in E)d[ne][0]=E[ne]}var F=t.frame=function(){var l=_.requestAnimationFrame||_.webkitRequestAnimationFrame||_.mozRequestAnimationFrame||_.oRequestAnimationFrame||_.msRequestAnimationFrame;return l&&B.bind?l.bind(_):function(y){_.setTimeout(y,16)}}(),X=t.now=function(){var l=_.performance,y=l&&(l.now||l.webkitNow||l.msNow||l.mozNow);return y&&B.bind?y.bind(l):Date.now||function(){return+new Date}}(),Y=p(function(l){function y(ee,ce){var ye=h((""+ee).split(te)),fe=ye[0];ce=ce||{};var Ne=j[fe];if(!Ne)return f("Unsupported property: "+fe);if(!ce.weak||!this.props[fe]){var Xe=Ne[0],Fe=this.props[fe];return Fe||(Fe=this.props[fe]=new Xe.Bare),Fe.init(this.$el,ye,Ne,ce),Fe}}function I(ee,ce,ye){if(ee){var fe=typeof ee;if(ce||(this.timer&&this.timer.destroy(),this.queue=[],this.active=!1),fe=="number"&&ce)return this.timer=new oe({duration:ee,context:this,complete:S}),void(this.active=!0);if(fe=="string"&&ce){switch(ee){case"hide":V.call(this);break;case"stop":Z.call(this);break;case"redraw":ae.call(this);break;default:y.call(this,ee,ye&&ye[1])}return S.call(this)}if(fe=="function")return void ee.call(this,this);if(fe=="object"){var Ne=0;tt.call(this,ee,function(Ie,pb){Ie.span>Ne&&(Ne=Ie.span),Ie.stop(),Ie.animate(pb)},function(Ie){"wait"in Ie&&(Ne=u(Ie.wait,0))}),be.call(this),Ne>0&&(this.timer=new oe({duration:Ne,context:this}),this.active=!0,ce&&(this.timer.complete=S));var Xe=this,Fe=!1,ln={};F(function(){tt.call(Xe,ee,function(Ie){Ie.active&&(Fe=!0,ln[Ie.name]=Ie.nextStyle)}),Fe&&Xe.$el.css(ln)})}}}function x(ee){ee=u(ee,0),this.active?this.queue.push({options:ee}):(this.timer=new oe({duration:ee,context:this,complete:S}),this.active=!0)}function b(ee){return this.active?(this.queue.push({options:ee,args:arguments}),void(this.timer.complete=S)):f("No active transition timer. Use start() or wait() before then().")}function S(){if(this.timer&&this.timer.destroy(),this.active=!1,this.queue.length){var ee=this.queue.shift();I.call(this,ee.options,!0,ee.args)}}function Z(ee){this.timer&&this.timer.destroy(),this.queue=[],this.active=!1;var ce;typeof ee=="string"?(ce={},ce[ee]=1):ce=typeof ee=="object"&&ee!=null?ee:this.props,tt.call(this,ce,Le),be.call(this)}function ie(ee){Z.call(this,ee),tt.call(this,ee,_r,fb)}function pe(ee){typeof ee!="string"&&(ee="block"),this.el.style.display=ee}function V(){Z.call(this),this.el.style.display="none"}function ae(){this.el.offsetHeight}function ue(){Z.call(this),e.removeData(this.el,w),this.$el=this.el=null}function be(){var ee,ce,ye=[];this.upstream&&ye.push(this.upstream);for(ee in this.props)ce=this.props[ee],ce.active&&ye.push(ce.string);ye=ye.join(","),this.style!==ye&&(this.style=ye,this.el.style[B.transition.dom]=ye)}function tt(ee,ce,ye){var fe,Ne,Xe,Fe,ln=ce!==Le,Ie={};for(fe in ee)Xe=ee[fe],fe in ge?(Ie.transform||(Ie.transform={}),Ie.transform[fe]=Xe):(C.test(fe)&&(fe=r(fe)),fe in j?Ie[fe]=Xe:(Fe||(Fe={}),Fe[fe]=Xe));for(fe in Ie){if(Xe=Ie[fe],Ne=this.props[fe],!Ne){if(!ln)continue;Ne=y.call(this,fe)}ce.call(this,Ne,Xe)}ye&&Fe&&ye.call(this,Fe)}function Le(ee){ee.stop()}function _r(ee,ce){ee.set(ce)}function fb(ee){this.$el.css(ee)}function We(ee,ce){l[ee]=function(){return this.children?db.call(this,ce,arguments):(this.el&&ce.apply(this,arguments),this)}}function db(ee,ce){var ye,fe=this.children.length;for(ye=0;fe>ye;ye++)ee.apply(this.children[ye],ce);return this}l.init=function(ee){if(this.$el=e(ee),this.el=this.$el[0],this.props={},this.queue=[],this.style="",this.active=!1,se.keepInherited&&!se.fallback){var ce=G(this.el,"transition");ce&&!$.test(ce)&&(this.upstream=ce)}B.backface&&se.hideBackface&&g(this.el,B.backface.css,"hidden")},We("add",y),We("start",I),We("wait",x),We("then",b),We("next",S),We("stop",Z),We("set",ie),We("show",pe),We("hide",V),We("redraw",ae),We("destroy",ue)}),U=p(Y,function(l){function y(I,x){var b=e.data(I,w)||e.data(I,w,new Y.Bare);return b.el||b.init(I),x?b.start(x):b}l.init=function(I,x){var b=e(I);if(!b.length)return this;if(b.length===1)return y(b[0],x);var S=[];return b.each(function(Z,ie){S.push(y(ie,x))}),this.children=S,this}}),D=p(function(l){function y(){var S=this.get();this.update("auto");var Z=this.get();return this.update(S),Z}function I(S,Z,ie){return Z!==void 0&&(ie=Z),S in d?S:ie}function x(S){var Z=/rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(S);return(Z?i(Z[1],Z[2],Z[3]):S).replace(/#(\w)(\w)(\w)$/,"#$1$1$2$2$3$3")}var b={duration:500,ease:"ease",delay:0};l.init=function(S,Z,ie,pe){this.$el=S,this.el=S[0];var V=Z[0];ie[2]&&(V=ie[2]),Q[V]&&(V=Q[V]),this.name=V,this.type=ie[1],this.duration=u(Z[1],this.duration,b.duration),this.ease=I(Z[2],this.ease,b.ease),this.delay=u(Z[3],this.delay,b.delay),this.span=this.duration+this.delay,this.active=!1,this.nextStyle=null,this.auto=J.test(this.name),this.unit=pe.unit||this.unit||se.defaultUnit,this.angle=pe.angle||this.angle||se.defaultAngle,se.fallback||pe.fallback?this.animate=this.fallback:(this.animate=this.transition,this.string=this.name+te+this.duration+"ms"+(this.ease!="ease"?te+d[this.ease][0]:"")+(this.delay?te+this.delay+"ms":""))},l.set=function(S){S=this.convert(S,this.type),this.update(S),this.redraw()},l.transition=function(S){this.active=!0,S=this.convert(S,this.type),this.auto&&(this.el.style[this.name]=="auto"&&(this.update(this.get()),this.redraw()),S=="auto"&&(S=y.call(this))),this.nextStyle=S},l.fallback=function(S){var Z=this.el.style[this.name]||this.convert(this.get(),this.type);S=this.convert(S,this.type),this.auto&&(Z=="auto"&&(Z=this.convert(this.get(),this.type)),S=="auto"&&(S=y.call(this))),this.tween=new L({from:Z,to:S,duration:this.duration,delay:this.delay,ease:this.ease,update:this.update,context:this})},l.get=function(){return G(this.el,this.name)},l.update=function(S){g(this.el,this.name,S)},l.stop=function(){(this.active||this.nextStyle)&&(this.active=!1,this.nextStyle=null,g(this.el,this.name,this.get()));var S=this.tween;S&&S.context&&S.destroy()},l.convert=function(S,Z){if(S=="auto"&&this.auto)return S;var ie,pe=typeof S=="number",V=typeof S=="string";switch(Z){case A:if(pe)return S;if(V&&S.replace(m,"")==="")return+S;ie="number(unitless)";break;case R:if(V){if(S===""&&this.original)return this.original;if(Z.test(S))return S.charAt(0)=="#"&&S.length==7?S:x(S)}ie="hex or rgb string";break;case P:if(pe)return S+this.unit;if(V&&Z.test(S))return S;ie="number(px) or string(unit)";break;case N:if(pe)return S+this.unit;if(V&&Z.test(S))return S;ie="number(px) or string(unit or %)";break;case H:if(pe)return S+this.angle;if(V&&Z.test(S))return S;ie="number(deg) or string(angle)";break;case z:if(pe||V&&N.test(S))return S;ie="number(unitless) or string(unit or %)"}return a(ie,S),S},l.redraw=function(){this.el.offsetHeight}}),v=p(D,function(l,y){l.init=function(){y.init.apply(this,arguments),this.original||(this.original=this.convert(this.get(),R))}}),k=p(D,function(l,y){l.init=function(){y.init.apply(this,arguments),this.animate=this.fallback},l.get=function(){return this.$el[this.name]()},l.update=function(I){this.$el[this.name](I)}}),W=p(D,function(l,y){function I(x,b){var S,Z,ie,pe,V;for(S in x)pe=ge[S],ie=pe[0],Z=pe[1]||S,V=this.convert(x[S],ie),b.call(this,Z,V,ie)}l.init=function(){y.init.apply(this,arguments),this.current||(this.current={},ge.perspective&&se.perspective&&(this.current.perspective=se.perspective,g(this.el,this.name,this.style(this.current)),this.redraw()))},l.set=function(x){I.call(this,x,function(b,S){this.current[b]=S}),g(this.el,this.name,this.style(this.current)),this.redraw()},l.transition=function(x){var b=this.values(x);this.tween=new _e({current:this.current,values:b,duration:this.duration,delay:this.delay,ease:this.ease});var S,Z={};for(S in this.current)Z[S]=S in b?b[S]:this.current[S];this.active=!0,this.nextStyle=this.style(Z)},l.fallback=function(x){var b=this.values(x);this.tween=new _e({current:this.current,values:b,duration:this.duration,delay:this.delay,ease:this.ease,update:this.update,context:this})},l.update=function(){g(this.el,this.name,this.style(this.current))},l.style=function(x){var b,S="";for(b in x)S+=b+"("+x[b]+") ";return S},l.values=function(x){var b,S={};return I.call(this,x,function(Z,ie,pe){S[Z]=ie,this.current[Z]===void 0&&(b=0,~Z.indexOf("scale")&&(b=1),this.current[Z]=this.convert(b,pe))}),S}}),L=p(function(l){function y(V){ie.push(V)===1&&F(I)}function I(){var V,ae,ue,be=ie.length;if(be)for(F(I),ae=X(),V=be;V--;)ue=ie[V],ue&&ue.render(ae)}function x(V){var ae,ue=e.inArray(V,ie);ue>=0&&(ae=ie.slice(ue+1),ie.length=ue,ae.length&&(ie=ie.concat(ae)))}function b(V){return Math.round(V*pe)/pe}function S(V,ae,ue){return i(V[0]+ue*(ae[0]-V[0]),V[1]+ue*(ae[1]-V[1]),V[2]+ue*(ae[2]-V[2]))}var Z={ease:d.ease[1],from:0,to:1};l.init=function(V){this.duration=V.duration||0,this.delay=V.delay||0;var ae=V.ease||Z.ease;d[ae]&&(ae=d[ae][1]),typeof ae!="function"&&(ae=Z.ease),this.ease=ae,this.update=V.update||o,this.complete=V.complete||o,this.context=V.context||this,this.name=V.name;var ue=V.from,be=V.to;ue===void 0&&(ue=Z.from),be===void 0&&(be=Z.to),this.unit=V.unit||"",typeof ue=="number"&&typeof be=="number"?(this.begin=ue,this.change=be-ue):this.format(be,ue),this.value=this.begin+this.unit,this.start=X(),V.autoplay!==!1&&this.play()},l.play=function(){this.active||(this.start||(this.start=X()),this.active=!0,y(this))},l.stop=function(){this.active&&(this.active=!1,x(this))},l.render=function(V){var ae,ue=V-this.start;if(this.delay){if(ue<=this.delay)return;ue-=this.delay}if(ue<this.duration){var be=this.ease(ue,0,1,this.duration);return ae=this.startRGB?S(this.startRGB,this.endRGB,be):b(this.begin+be*this.change),this.value=ae+this.unit,void this.update.call(this.context,this.value)}ae=this.endHex||this.begin+this.change,this.value=ae+this.unit,this.update.call(this.context,this.value),this.complete.call(this.context),this.destroy()},l.format=function(V,ae){if(ae+="",V+="",V.charAt(0)=="#")return this.startRGB=n(ae),this.endRGB=n(V),this.endHex=V,this.begin=0,void(this.change=1);if(!this.unit){var ue=ae.replace(m,""),be=V.replace(m,"");ue!==be&&s("tween",ae,V),this.unit=ue}ae=parseFloat(ae),V=parseFloat(V),this.begin=this.value=ae,this.change=V-ae},l.destroy=function(){this.stop(),this.context=null,this.ease=this.update=this.complete=o};var ie=[],pe=1e3}),oe=p(L,function(l){l.init=function(y){this.duration=y.duration||0,this.complete=y.complete||o,this.context=y.context,this.play()},l.render=function(y){var I=y-this.start;I<this.duration||(this.complete.call(this.context),this.destroy())}}),_e=p(L,function(l,y){l.init=function(I){this.context=I.context,this.update=I.update,this.tweens=[],this.current=I.current;var x,b;for(x in I.values)b=I.values[x],this.current[x]!==b&&this.tweens.push(new L({name:x,from:this.current[x],to:b,duration:I.duration,delay:I.delay,ease:I.ease,autoplay:!1}));this.play()},l.render=function(I){var x,b,S=this.tweens.length,Z=!1;for(x=S;x--;)b=this.tweens[x],b.context&&(b.render(I),this.current[b.name]=b.value,Z=!0);return Z?void(this.update&&this.update.call(this.context)):this.destroy()},l.destroy=function(){if(y.destroy.call(this),this.tweens){var I,x=this.tweens.length;for(I=x;I--;)this.tweens[I].destroy();this.tweens=null,this.current=null}}}),se=t.config={debug:!1,defaultUnit:"px",defaultAngle:"deg",keepInherited:!1,hideBackface:!1,perspective:"",fallback:!B.transition,agentTests:[]};t.fallback=function(l){if(!B.transition)return se.fallback=!0;se.agentTests.push("("+l+")");var y=new RegExp(se.agentTests.join("|"),"i");se.fallback=y.test(navigator.userAgent)},t.fallback("6.0.[2-5] Safari"),t.tween=function(l){return new L(l)},t.delay=function(l,y,I){return new oe({complete:y,duration:l,context:I})},e.fn.tram=function(l){return t.call(null,this,l)};var g=e.style,G=e.css,Q={transform:B.transform&&B.transform.css},j={color:[v,R],background:[v,R,"background-color"],"outline-color":[v,R],"border-color":[v,R],"border-top-color":[v,R],"border-right-color":[v,R],"border-bottom-color":[v,R],"border-left-color":[v,R],"border-width":[D,P],"border-top-width":[D,P],"border-right-width":[D,P],"border-bottom-width":[D,P],"border-left-width":[D,P],"border-spacing":[D,P],"letter-spacing":[D,P],margin:[D,P],"margin-top":[D,P],"margin-right":[D,P],"margin-bottom":[D,P],"margin-left":[D,P],padding:[D,P],"padding-top":[D,P],"padding-right":[D,P],"padding-bottom":[D,P],"padding-left":[D,P],"outline-width":[D,P],opacity:[D,A],top:[D,N],right:[D,N],bottom:[D,N],left:[D,N],"font-size":[D,N],"text-indent":[D,N],"word-spacing":[D,N],width:[D,N],"min-width":[D,N],"max-width":[D,N],height:[D,N],"min-height":[D,N],"max-height":[D,N],"line-height":[D,z],"scroll-top":[k,A,"scrollTop"],"scroll-left":[k,A,"scrollLeft"]},ge={};B.transform&&(j.transform=[W],ge={x:[N,"translateX"],y:[N,"translateY"],rotate:[H],rotateX:[H],rotateY:[H],scale:[A],scaleX:[A],scaleY:[A],skew:[H],skewX:[H],skewY:[H]}),B.transform&&B.backface&&(ge.z=[N,"translateZ"],ge.rotateZ=[H],ge.scaleZ=[A],ge.perspective=[P]);var St=/ms/,ft=/s|\./;return e.tram=t}(window.jQuery)});var Ws=c((_B,Hs)=>{"use strict";var _b=window.$,bb=Ui()&&_b.tram;Hs.exports=function(){var e={};e.VERSION="1.6.0-Webflow";var t={},r=Array.prototype,n=Object.prototype,i=Function.prototype,o=r.push,a=r.slice,s=r.concat,u=n.toString,f=n.hasOwnProperty,h=r.forEach,p=r.map,d=r.reduce,E=r.reduceRight,T=r.filter,_=r.every,w=r.some,m=r.indexOf,C=r.lastIndexOf,A=Array.isArray,R=Object.keys,P=i.bind,N=e.each=e.forEach=function(O,q,K){if(O==null)return O;if(h&&O.forEach===h)O.forEach(q,K);else if(O.length===+O.length){for(var B=0,re=O.length;B<re;B++)if(q.call(K,O[B],B,O)===t)return}else for(var ne=e.keys(O),B=0,re=ne.length;B<re;B++)if(q.call(K,O[ne[B]],ne[B],O)===t)return;return O};e.map=e.collect=function(O,q,K){var B=[];return O==null?B:p&&O.map===p?O.map(q,K):(N(O,function(re,ne,F){B.push(q.call(K,re,ne,F))}),B)},e.find=e.detect=function(O,q,K){var B;return H(O,function(re,ne,F){if(q.call(K,re,ne,F))return B=re,!0}),B},e.filter=e.select=function(O,q,K){var B=[];return O==null?B:T&&O.filter===T?O.filter(q,K):(N(O,function(re,ne,F){q.call(K,re,ne,F)&&B.push(re)}),B)};var H=e.some=e.any=function(O,q,K){q||(q=e.identity);var B=!1;return O==null?B:w&&O.some===w?O.some(q,K):(N(O,function(re,ne,F){if(B||(B=q.call(K,re,ne,F)))return t}),!!B)};e.contains=e.include=function(O,q){return O==null?!1:m&&O.indexOf===m?O.indexOf(q)!=-1:H(O,function(K){return K===q})},e.delay=function(O,q){var K=a.call(arguments,2);return setTimeout(function(){return O.apply(null,K)},q)},e.defer=function(O){return e.delay.apply(e,[O,1].concat(a.call(arguments,1)))},e.throttle=function(O){var q,K,B;return function(){q||(q=!0,K=arguments,B=this,bb.frame(function(){q=!1,O.apply(B,K)}))}},e.debounce=function(O,q,K){var B,re,ne,F,X,Y=function(){var U=e.now()-F;U<q?B=setTimeout(Y,q-U):(B=null,K||(X=O.apply(ne,re),ne=re=null))};return function(){ne=this,re=arguments,F=e.now();var U=K&&!B;return B||(B=setTimeout(Y,q)),U&&(X=O.apply(ne,re),ne=re=null),X}},e.defaults=function(O){if(!e.isObject(O))return O;for(var q=1,K=arguments.length;q<K;q++){var B=arguments[q];for(var re in B)O[re]===void 0&&(O[re]=B[re])}return O},e.keys=function(O){if(!e.isObject(O))return[];if(R)return R(O);var q=[];for(var K in O)e.has(O,K)&&q.push(K);return q},e.has=function(O,q){return f.call(O,q)},e.isObject=function(O){return O===Object(O)},e.now=Date.now||function(){return new Date().getTime()},e.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var z=/(.)^/,$={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},J=/\\|'|\r|\n|\u2028|\u2029/g,te=function(O){return"\\"+$[O]},M=/^\s*(\w|\$)+\s*$/;return e.template=function(O,q,K){!q&&K&&(q=K),q=e.defaults({},q,e.templateSettings);var B=RegExp([(q.escape||z).source,(q.interpolate||z).source,(q.evaluate||z).source].join("|")+"|$","g"),re=0,ne="__p+='";O.replace(B,function(U,D,v,k,W){return ne+=O.slice(re,W).replace(J,te),re=W+U.length,D?ne+=`'+
    ((__t=(`+D+`))==null?'':_.escape(__t))+
    '`:v?ne+=`'+
    ((__t=(`+v+`))==null?'':__t)+
    '`:k&&(ne+=`';
    `+k+`
    __p+='`),U}),ne+=`';
    `;var F=q.variable;if(F){if(!M.test(F))throw new Error("variable is not a bare identifier: "+F)}else ne=`with(obj||{}){
    `+ne+`}
    `,F="obj";ne=`var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
    `+ne+`return __p;
    `;var X;try{X=new Function(q.variable||"obj","_",ne)}catch(U){throw U.source=ne,U}var Y=function(U){return X.call(this,U,e)};return Y.source="function("+F+`){
    `+ne+"}",Y},e}()});var Ge=c((bB,Zs)=>{"use strict";var de={},Bt={},Ht=[],ki=window.Webflow||[],mt=window.jQuery,ze=mt(window),Ib=mt(document),nt=mt.isFunction,je=de._=Ws(),js=de.tram=Ui()&&mt.tram,pn=!1,Bi=!1;js.config.hideBackface=!1;js.config.keepInherited=!0;de.define=function(e,t,r){Bt[e]&&Ks(Bt[e]);var n=Bt[e]=t(mt,je,r)||{};return zs(n),n};de.require=function(e){return Bt[e]};function zs(e){de.env()&&(nt(e.design)&&ze.on("__wf_design",e.design),nt(e.preview)&&ze.on("__wf_preview",e.preview)),nt(e.destroy)&&ze.on("__wf_destroy",e.destroy),e.ready&&nt(e.ready)&&Tb(e)}function Tb(e){if(pn){e.ready();return}je.contains(Ht,e.ready)||Ht.push(e.ready)}function Ks(e){nt(e.design)&&ze.off("__wf_design",e.design),nt(e.preview)&&ze.off("__wf_preview",e.preview),nt(e.destroy)&&ze.off("__wf_destroy",e.destroy),e.ready&&nt(e.ready)&&Ob(e)}function Ob(e){Ht=je.filter(Ht,function(t){return t!==e.ready})}de.push=function(e){if(pn){nt(e)&&e();return}ki.push(e)};de.env=function(e){var t=window.__wf_design,r=typeof t<"u";if(!e)return r;if(e==="design")return r&&t;if(e==="preview")return r&&!t;if(e==="slug")return r&&window.__wf_slug;if(e==="editor")return window.WebflowEditor;if(e==="test")return window.__wf_test;if(e==="frame")return window!==window.top};var dn=navigator.userAgent.toLowerCase(),Ys=de.env.touch="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,wb=de.env.chrome=/chrome/.test(dn)&&/Google/.test(navigator.vendor)&&parseInt(dn.match(/chrome\/(\d+)\./)[1],10),Ab=de.env.ios=/(ipod|iphone|ipad)/.test(dn);de.env.safari=/safari/.test(dn)&&!wb&&!Ab;var Vi;Ys&&Ib.on("touchstart mousedown",function(e){Vi=e.target});de.validClick=Ys?function(e){return e===Vi||mt.contains(e,Vi)}:function(){return!0};var $s="resize.webflow orientationchange.webflow load.webflow",xb="scroll.webflow "+$s;de.resize=Hi(ze,$s);de.scroll=Hi(ze,xb);de.redraw=Hi();function Hi(e,t){var r=[],n={};return n.up=je.throttle(function(i){je.each(r,function(o){o(i)})}),e&&t&&e.on(t,n.up),n.on=function(i){typeof i=="function"&&(je.contains(r,i)||r.push(i))},n.off=function(i){if(!arguments.length){r=[];return}r=je.filter(r,function(o){return o!==i})},n}de.location=function(e){window.location=e};de.env()&&(de.location=function(){});de.ready=function(){pn=!0,Bi?Sb():je.each(Ht,Xs),je.each(ki,Xs),de.resize.up()};function Xs(e){nt(e)&&e()}function Sb(){Bi=!1,je.each(Bt,zs)}var Ct;de.load=function(e){Ct.then(e)};function Qs(){Ct&&(Ct.reject(),ze.off("load",Ct.resolve)),Ct=new mt.Deferred,ze.on("load",Ct.resolve)}de.destroy=function(e){e=e||{},Bi=!0,ze.triggerHandler("__wf_destroy"),e.domready!=null&&(pn=e.domready),je.each(Bt,Ks),de.resize.off(),de.scroll.off(),de.redraw.off(),Ht=[],ki=[],Ct.state()==="pending"&&Qs()};mt(de.ready);Qs();Zs.exports=window.Webflow=de});var Wi=c((IB,br)=>{function Cb(e){return e&&e.__esModule?e:{default:e}}br.exports=Cb,br.exports.__esModule=!0,br.exports.default=br.exports});var gn=c((TB,dt)=>{function Xi(e){return dt.exports=Xi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},dt.exports.__esModule=!0,dt.exports.default=dt.exports,Xi(e)}dt.exports=Xi,dt.exports.__esModule=!0,dt.exports.default=dt.exports});var eu=c((OB,Ir)=>{var Js=gn().default;function Rb(e,t){if(Js(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(Js(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}Ir.exports=Rb,Ir.exports.__esModule=!0,Ir.exports.default=Ir.exports});var tu=c((wB,Tr)=>{var Lb=gn().default,Nb=eu();function Pb(e){var t=Nb(e,"string");return Lb(t)=="symbol"?t:t+""}Tr.exports=Pb,Tr.exports.__esModule=!0,Tr.exports.default=Tr.exports});var ru=c((AB,Or)=>{var qb=tu();function Mb(e,t,r){return t=qb(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Or.exports=Mb,Or.exports.__esModule=!0,Or.exports.default=Or.exports});var uu=c(Oe=>{"use strict";var Fb=Wi().default;Object.defineProperty(Oe,"__esModule",{value:!0});Oe.setLoadHandler=Oe.ready=Oe.init=Oe.getInstance=Oe.destroyInstance=Oe.destroy=Oe.createInstance=void 0;var nu=Fb(ru()),ji;async function Db(){let{Application:e}=await import("https://unpkg.com/@splinetool/runtime/build/runtime.js");ji=e}var Ar=new Map,wr=new Map,Gb=new Event("w-spline-load"),zi=class{constructor(){(0,nu.default)(this,"spline",void 0),(0,nu.default)(this,"container",void 0)}destroy(){var t,r;this.container&&(Ar.delete(this.container),wr.delete(this.container)),(t=this.spline)===null||t===void 0||(r=t.dispose)===null||r===void 0||r.call(t)}async load(t,r){ji||await Db();let n=t.querySelector("canvas"),i=new ji(n);await i.load(r),Ar.set(t,this),this.container=t,this.spline=i,t.dispatchEvent(Gb),wr.has(t)&&(wr.get(t)(i),wr.delete(t))}},iu=()=>Array.from(document.querySelectorAll('[data-animation-type="spline"]')),ou=async(e,t)=>{let r=Ar.get(e);return r==null&&(r=new zi),await r.load(e,t),r};Oe.createInstance=ou;var au=e=>{let t=Ar.get(e);t?.destroy()};Oe.destroyInstance=au;var Ub=e=>Ar.get(e);Oe.getInstance=Ub;var Vb=(e,t)=>{wr.set(e,t)};Oe.setLoadHandler=Vb;var su=()=>{iu().forEach(e=>{let t=e.getAttribute("data-spline-url");t&&ou(e,t)})};Oe.init=su;var kb=()=>{iu().forEach(au)};Oe.destroy=kb;var xB=Oe.ready=su});var lu=c((CB,cu)=>{"use strict";var Bb=Ge(),Rt=uu();Bb.define("spline",cu.exports=function(){return{createInstance:Rt.createInstance,destroyInstance:Rt.destroyInstance,getInstance:Rt.getInstance,setLoadHandler:Rt.setLoadHandler,init:Rt.init,destroy:Rt.destroy,ready:Rt.ready}})});var pu=c((RB,du)=>{"use strict";var fu=Ge();fu.define("brand",du.exports=function(e){var t={},r=document,n=e("html"),i=e("body"),o=".w-webflow-badge",a=window.location,s=/PhantomJS/i.test(navigator.userAgent),u="fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",f;t.ready=function(){var E=n.attr("data-wf-status"),T=n.attr("data-wf-domain")||"";/\.webflow\.io$/i.test(T)&&a.hostname!==T&&(E=!0),E&&!s&&(f=f||p(),d(),setTimeout(d,500),e(r).off(u,h).on(u,h))};function h(){var E=r.fullScreen||r.mozFullScreen||r.webkitIsFullScreen||r.msFullscreenElement||!!r.webkitFullscreenElement;e(f).attr("style",E?"display: none !important;":"")}function p(){var E=e('<a class="w-webflow-badge"></a>').attr("href","https://webflow.com?utm_campaign=brandjs"),T=e("<img>").attr("src","https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt","").css({marginRight:"4px",width:"26px"}),_=e("<img>").attr("src","https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt","Made in Webflow");return E.append(T,_),E[0]}function d(){var E=i.children(o),T=E.length&&E.get(0)===f,_=fu.env("editor");if(T){_&&E.remove();return}E.length&&E.remove(),_||i.append(f)}return t})});var vu=c((LB,gu)=>{"use strict";var Ki=Ge();Ki.define("edit",gu.exports=function(e,t,r){if(r=r||{},(Ki.env("test")||Ki.env("frame"))&&!r.fixture&&!Hb())return{exit:1};var n={},i=e(window),o=e(document.documentElement),a=document.location,s="hashchange",u,f=r.load||d,h=!1;try{h=localStorage&&localStorage.getItem&&localStorage.getItem("WebflowEditor")}catch{}h?f():a.search?(/[?&](edit)(?:[=&?]|$)/.test(a.search)||/\?edit$/.test(a.href))&&f():i.on(s,p).triggerHandler(s);function p(){u||/\?edit/.test(a.hash)&&f()}function d(){u=!0,window.WebflowEditor=!0,i.off(s,p),C(function(R){e.ajax({url:m("https://editor-api.webflow.com/api/editor/view"),data:{siteId:o.attr("data-wf-site")},xhrFields:{withCredentials:!0},dataType:"json",crossDomain:!0,success:E(R)})})}function E(R){return function(P){if(!P){console.error("Could not load editor data");return}P.thirdPartyCookiesSupported=R,T(w(P.scriptPath),function(){window.WebflowEditor(P)})}}function T(R,P){e.ajax({type:"GET",url:R,dataType:"script",cache:!0}).then(P,_)}function _(R,P,N){throw console.error("Could not load editor script: "+P),N}function w(R){return R.indexOf("//")>=0?R:m("https://editor-api.webflow.com"+R)}function m(R){return R.replace(/([^:])\/\//g,"$1/")}function C(R){var P=window.document.createElement("iframe");P.src="https://webflow.com/site/third-party-cookie-check.html",P.style.display="none",P.sandbox="allow-scripts allow-same-origin";var N=function(H){H.data==="WF_third_party_cookies_unsupported"?(A(P,N),R(!1)):H.data==="WF_third_party_cookies_supported"&&(A(P,N),R(!0))};P.onerror=function(){A(P,N),R(!1)},window.addEventListener("message",N,!1),window.document.body.appendChild(P)}function A(R,P){window.removeEventListener("message",P,!1),R.remove()}return n});function Hb(){try{return window.top.__Cypress__}catch{return!1}}});var Eu=c((NB,hu)=>{"use strict";var Wb=Ge();Wb.define("focus-visible",hu.exports=function(){function e(r){var n=!0,i=!1,o=null,a={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function s(A){return!!(A&&A!==document&&A.nodeName!=="HTML"&&A.nodeName!=="BODY"&&"classList"in A&&"contains"in A.classList)}function u(A){var R=A.type,P=A.tagName;return!!(P==="INPUT"&&a[R]&&!A.readOnly||P==="TEXTAREA"&&!A.readOnly||A.isContentEditable)}function f(A){A.getAttribute("data-wf-focus-visible")||A.setAttribute("data-wf-focus-visible","true")}function h(A){A.getAttribute("data-wf-focus-visible")&&A.removeAttribute("data-wf-focus-visible")}function p(A){A.metaKey||A.altKey||A.ctrlKey||(s(r.activeElement)&&f(r.activeElement),n=!0)}function d(){n=!1}function E(A){s(A.target)&&(n||u(A.target))&&f(A.target)}function T(A){s(A.target)&&A.target.hasAttribute("data-wf-focus-visible")&&(i=!0,window.clearTimeout(o),o=window.setTimeout(function(){i=!1},100),h(A.target))}function _(){document.visibilityState==="hidden"&&(i&&(n=!0),w())}function w(){document.addEventListener("mousemove",C),document.addEventListener("mousedown",C),document.addEventListener("mouseup",C),document.addEventListener("pointermove",C),document.addEventListener("pointerdown",C),document.addEventListener("pointerup",C),document.addEventListener("touchmove",C),document.addEventListener("touchstart",C),document.addEventListener("touchend",C)}function m(){document.removeEventListener("mousemove",C),document.removeEventListener("mousedown",C),document.removeEventListener("mouseup",C),document.removeEventListener("pointermove",C),document.removeEventListener("pointerdown",C),document.removeEventListener("pointerup",C),document.removeEventListener("touchmove",C),document.removeEventListener("touchstart",C),document.removeEventListener("touchend",C)}function C(A){A.target.nodeName&&A.target.nodeName.toLowerCase()==="html"||(n=!1,m())}document.addEventListener("keydown",p,!0),document.addEventListener("mousedown",d,!0),document.addEventListener("pointerdown",d,!0),document.addEventListener("touchstart",d,!0),document.addEventListener("visibilitychange",_,!0),w(),r.addEventListener("focus",E,!0),r.addEventListener("blur",T,!0)}function t(){if(typeof document<"u")try{document.querySelector(":focus-visible")}catch{e(document)}}return{ready:t}})});var _u=c((PB,mu)=>{"use strict";var yu=Ge();yu.define("focus",mu.exports=function(){var e=[],t=!1;function r(a){t&&(a.preventDefault(),a.stopPropagation(),a.stopImmediatePropagation(),e.unshift(a))}function n(a){var s=a.target,u=s.tagName;return/^a$/i.test(u)&&s.href!=null||/^(button|textarea)$/i.test(u)&&s.disabled!==!0||/^input$/i.test(u)&&/^(button|reset|submit|radio|checkbox)$/i.test(s.type)&&!s.disabled||!/^(button|input|textarea|select|a)$/i.test(u)&&!Number.isNaN(Number.parseFloat(s.tabIndex))||/^audio$/i.test(u)||/^video$/i.test(u)&&s.controls===!0}function i(a){n(a)&&(t=!0,setTimeout(()=>{for(t=!1,a.target.focus();e.length>0;){var s=e.pop();s.target.dispatchEvent(new MouseEvent(s.type,s))}},0))}function o(){typeof document<"u"&&document.body.hasAttribute("data-wf-focus-within")&&yu.env.safari&&(document.addEventListener("mousedown",i,!0),document.addEventListener("mouseup",r,!0),document.addEventListener("click",r,!0))}return{ready:o}})});var Tu=c((qB,Iu)=>{"use strict";var Yi=window.jQuery,it={},vn=[],bu=".w-ix",hn={reset:function(e,t){t.__wf_intro=null},intro:function(e,t){t.__wf_intro||(t.__wf_intro=!0,Yi(t).triggerHandler(it.types.INTRO))},outro:function(e,t){t.__wf_intro&&(t.__wf_intro=null,Yi(t).triggerHandler(it.types.OUTRO))}};it.triggers={};it.types={INTRO:"w-ix-intro"+bu,OUTRO:"w-ix-outro"+bu};it.init=function(){for(var e=vn.length,t=0;t<e;t++){var r=vn[t];r[0](0,r[1])}vn=[],Yi.extend(it.triggers,hn)};it.async=function(){for(var e in hn){var t=hn[e];hn.hasOwnProperty(e)&&(it.triggers[e]=function(r,n){vn.push([t,n])})}};it.async();Iu.exports=it});var yn=c((MB,Au)=>{"use strict";var $i=Tu();function Ou(e,t){var r=document.createEvent("CustomEvent");r.initCustomEvent(t,!0,!0,null),e.dispatchEvent(r)}var Xb=window.jQuery,En={},wu=".w-ix",jb={reset:function(e,t){$i.triggers.reset(e,t)},intro:function(e,t){$i.triggers.intro(e,t),Ou(t,"COMPONENT_ACTIVE")},outro:function(e,t){$i.triggers.outro(e,t),Ou(t,"COMPONENT_INACTIVE")}};En.triggers={};En.types={INTRO:"w-ix-intro"+wu,OUTRO:"w-ix-outro"+wu};Xb.extend(En.triggers,jb);Au.exports=En});var mn=c((FB,xr)=>{var zb=gn().default;function xu(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,r=new WeakMap;return(xu=function(i){return i?r:t})(e)}function Kb(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||zb(e)!="object"&&typeof e!="function")return{default:e};var r=xu(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(o!=="default"&&{}.hasOwnProperty.call(e,o)){var a=i?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}return n.default=e,r&&r.set(e,n),n}xr.exports=Kb,xr.exports.__esModule=!0,xr.exports.default=xr.exports});var Ee=c((DB,Su)=>{var _n=function(e){return e&&e.Math==Math&&e};Su.exports=_n(typeof globalThis=="object"&&globalThis)||_n(typeof window=="object"&&window)||_n(typeof self=="object"&&self)||_n(typeof global=="object"&&global)||function(){return this}()||Function("return this")()});var Wt=c((GB,Cu)=>{Cu.exports=function(e){try{return!!e()}catch{return!0}}});var Lt=c((UB,Ru)=>{var Yb=Wt();Ru.exports=!Yb(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7})});var bn=c((VB,Lu)=>{var Sr=Function.prototype.call;Lu.exports=Sr.bind?Sr.bind(Sr):function(){return Sr.apply(Sr,arguments)}});var Mu=c(qu=>{"use strict";var Nu={}.propertyIsEnumerable,Pu=Object.getOwnPropertyDescriptor,$b=Pu&&!Nu.call({1:2},1);qu.f=$b?function(t){var r=Pu(this,t);return!!r&&r.enumerable}:Nu});var Qi=c((BB,Fu)=>{Fu.exports=function(e,t){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:t}}});var Ke=c((HB,Gu)=>{var Du=Function.prototype,Zi=Du.bind,Ji=Du.call,Qb=Zi&&Zi.bind(Ji);Gu.exports=Zi?function(e){return e&&Qb(Ji,e)}:function(e){return e&&function(){return Ji.apply(e,arguments)}}});var ku=c((WB,Vu)=>{var Uu=Ke(),Zb=Uu({}.toString),Jb=Uu("".slice);Vu.exports=function(e){return Jb(Zb(e),8,-1)}});var Hu=c((XB,Bu)=>{var eI=Ee(),tI=Ke(),rI=Wt(),nI=ku(),eo=eI.Object,iI=tI("".split);Bu.exports=rI(function(){return!eo("z").propertyIsEnumerable(0)})?function(e){return nI(e)=="String"?iI(e,""):eo(e)}:eo});var to=c((jB,Wu)=>{var oI=Ee(),aI=oI.TypeError;Wu.exports=function(e){if(e==null)throw aI("Can't call method on "+e);return e}});var Cr=c((zB,Xu)=>{var sI=Hu(),uI=to();Xu.exports=function(e){return sI(uI(e))}});var ot=c((KB,ju)=>{ju.exports=function(e){return typeof e=="function"}});var Xt=c((YB,zu)=>{var cI=ot();zu.exports=function(e){return typeof e=="object"?e!==null:cI(e)}});var Rr=c(($B,Ku)=>{var ro=Ee(),lI=ot(),fI=function(e){return lI(e)?e:void 0};Ku.exports=function(e,t){return arguments.length<2?fI(ro[e]):ro[e]&&ro[e][t]}});var $u=c((QB,Yu)=>{var dI=Ke();Yu.exports=dI({}.isPrototypeOf)});var Zu=c((ZB,Qu)=>{var pI=Rr();Qu.exports=pI("navigator","userAgent")||""});var oc=c((JB,ic)=>{var nc=Ee(),no=Zu(),Ju=nc.process,ec=nc.Deno,tc=Ju&&Ju.versions||ec&&ec.version,rc=tc&&tc.v8,Ye,In;rc&&(Ye=rc.split("."),In=Ye[0]>0&&Ye[0]<4?1:+(Ye[0]+Ye[1]));!In&&no&&(Ye=no.match(/Edge\/(\d+)/),(!Ye||Ye[1]>=74)&&(Ye=no.match(/Chrome\/(\d+)/),Ye&&(In=+Ye[1])));ic.exports=In});var io=c((eH,sc)=>{var ac=oc(),gI=Wt();sc.exports=!!Object.getOwnPropertySymbols&&!gI(function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&ac&&ac<41})});var oo=c((tH,uc)=>{var vI=io();uc.exports=vI&&!Symbol.sham&&typeof Symbol.iterator=="symbol"});var ao=c((rH,cc)=>{var hI=Ee(),EI=Rr(),yI=ot(),mI=$u(),_I=oo(),bI=hI.Object;cc.exports=_I?function(e){return typeof e=="symbol"}:function(e){var t=EI("Symbol");return yI(t)&&mI(t.prototype,bI(e))}});var fc=c((nH,lc)=>{var II=Ee(),TI=II.String;lc.exports=function(e){try{return TI(e)}catch{return"Object"}}});var pc=c((iH,dc)=>{var OI=Ee(),wI=ot(),AI=fc(),xI=OI.TypeError;dc.exports=function(e){if(wI(e))return e;throw xI(AI(e)+" is not a function")}});var vc=c((oH,gc)=>{var SI=pc();gc.exports=function(e,t){var r=e[t];return r==null?void 0:SI(r)}});var Ec=c((aH,hc)=>{var CI=Ee(),so=bn(),uo=ot(),co=Xt(),RI=CI.TypeError;hc.exports=function(e,t){var r,n;if(t==="string"&&uo(r=e.toString)&&!co(n=so(r,e))||uo(r=e.valueOf)&&!co(n=so(r,e))||t!=="string"&&uo(r=e.toString)&&!co(n=so(r,e)))return n;throw RI("Can't convert object to primitive value")}});var mc=c((sH,yc)=>{yc.exports=!1});var Tn=c((uH,bc)=>{var _c=Ee(),LI=Object.defineProperty;bc.exports=function(e,t){try{LI(_c,e,{value:t,configurable:!0,writable:!0})}catch{_c[e]=t}return t}});var On=c((cH,Tc)=>{var NI=Ee(),PI=Tn(),Ic="__core-js_shared__",qI=NI[Ic]||PI(Ic,{});Tc.exports=qI});var lo=c((lH,wc)=>{var MI=mc(),Oc=On();(wc.exports=function(e,t){return Oc[e]||(Oc[e]=t!==void 0?t:{})})("versions",[]).push({version:"3.19.0",mode:MI?"pure":"global",copyright:"\xA9 2021 Denis Pushkarev (zloirock.ru)"})});var xc=c((fH,Ac)=>{var FI=Ee(),DI=to(),GI=FI.Object;Ac.exports=function(e){return GI(DI(e))}});var _t=c((dH,Sc)=>{var UI=Ke(),VI=xc(),kI=UI({}.hasOwnProperty);Sc.exports=Object.hasOwn||function(t,r){return kI(VI(t),r)}});var fo=c((pH,Cc)=>{var BI=Ke(),HI=0,WI=Math.random(),XI=BI(1 .toString);Cc.exports=function(e){return"Symbol("+(e===void 0?"":e)+")_"+XI(++HI+WI,36)}});var po=c((gH,qc)=>{var jI=Ee(),zI=lo(),Rc=_t(),KI=fo(),Lc=io(),Pc=oo(),jt=zI("wks"),Nt=jI.Symbol,Nc=Nt&&Nt.for,YI=Pc?Nt:Nt&&Nt.withoutSetter||KI;qc.exports=function(e){if(!Rc(jt,e)||!(Lc||typeof jt[e]=="string")){var t="Symbol."+e;Lc&&Rc(Nt,e)?jt[e]=Nt[e]:Pc&&Nc?jt[e]=Nc(t):jt[e]=YI(t)}return jt[e]}});var Gc=c((vH,Dc)=>{var $I=Ee(),QI=bn(),Mc=Xt(),Fc=ao(),ZI=vc(),JI=Ec(),eT=po(),tT=$I.TypeError,rT=eT("toPrimitive");Dc.exports=function(e,t){if(!Mc(e)||Fc(e))return e;var r=ZI(e,rT),n;if(r){if(t===void 0&&(t="default"),n=QI(r,e,t),!Mc(n)||Fc(n))return n;throw tT("Can't convert object to primitive value")}return t===void 0&&(t="number"),JI(e,t)}});var go=c((hH,Uc)=>{var nT=Gc(),iT=ao();Uc.exports=function(e){var t=nT(e,"string");return iT(t)?t:t+""}});var ho=c((EH,kc)=>{var oT=Ee(),Vc=Xt(),vo=oT.document,aT=Vc(vo)&&Vc(vo.createElement);kc.exports=function(e){return aT?vo.createElement(e):{}}});var Eo=c((yH,Bc)=>{var sT=Lt(),uT=Wt(),cT=ho();Bc.exports=!sT&&!uT(function(){return Object.defineProperty(cT("div"),"a",{get:function(){return 7}}).a!=7})});var yo=c(Wc=>{var lT=Lt(),fT=bn(),dT=Mu(),pT=Qi(),gT=Cr(),vT=go(),hT=_t(),ET=Eo(),Hc=Object.getOwnPropertyDescriptor;Wc.f=lT?Hc:function(t,r){if(t=gT(t),r=vT(r),ET)try{return Hc(t,r)}catch{}if(hT(t,r))return pT(!fT(dT.f,t,r),t[r])}});var Lr=c((_H,jc)=>{var Xc=Ee(),yT=Xt(),mT=Xc.String,_T=Xc.TypeError;jc.exports=function(e){if(yT(e))return e;throw _T(mT(e)+" is not an object")}});var Nr=c(Yc=>{var bT=Ee(),IT=Lt(),TT=Eo(),zc=Lr(),OT=go(),wT=bT.TypeError,Kc=Object.defineProperty;Yc.f=IT?Kc:function(t,r,n){if(zc(t),r=OT(r),zc(n),TT)try{return Kc(t,r,n)}catch{}if("get"in n||"set"in n)throw wT("Accessors not supported");return"value"in n&&(t[r]=n.value),t}});var wn=c((IH,$c)=>{var AT=Lt(),xT=Nr(),ST=Qi();$c.exports=AT?function(e,t,r){return xT.f(e,t,ST(1,r))}:function(e,t,r){return e[t]=r,e}});var _o=c((TH,Qc)=>{var CT=Ke(),RT=ot(),mo=On(),LT=CT(Function.toString);RT(mo.inspectSource)||(mo.inspectSource=function(e){return LT(e)});Qc.exports=mo.inspectSource});var el=c((OH,Jc)=>{var NT=Ee(),PT=ot(),qT=_o(),Zc=NT.WeakMap;Jc.exports=PT(Zc)&&/native code/.test(qT(Zc))});var bo=c((wH,rl)=>{var MT=lo(),FT=fo(),tl=MT("keys");rl.exports=function(e){return tl[e]||(tl[e]=FT(e))}});var An=c((AH,nl)=>{nl.exports={}});var cl=c((xH,ul)=>{var DT=el(),sl=Ee(),Io=Ke(),GT=Xt(),UT=wn(),To=_t(),Oo=On(),VT=bo(),kT=An(),il="Object already initialized",Ao=sl.TypeError,BT=sl.WeakMap,xn,Pr,Sn,HT=function(e){return Sn(e)?Pr(e):xn(e,{})},WT=function(e){return function(t){var r;if(!GT(t)||(r=Pr(t)).type!==e)throw Ao("Incompatible receiver, "+e+" required");return r}};DT||Oo.state?(bt=Oo.state||(Oo.state=new BT),ol=Io(bt.get),wo=Io(bt.has),al=Io(bt.set),xn=function(e,t){if(wo(bt,e))throw new Ao(il);return t.facade=e,al(bt,e,t),t},Pr=function(e){return ol(bt,e)||{}},Sn=function(e){return wo(bt,e)}):(Pt=VT("state"),kT[Pt]=!0,xn=function(e,t){if(To(e,Pt))throw new Ao(il);return t.facade=e,UT(e,Pt,t),t},Pr=function(e){return To(e,Pt)?e[Pt]:{}},Sn=function(e){return To(e,Pt)});var bt,ol,wo,al,Pt;ul.exports={set:xn,get:Pr,has:Sn,enforce:HT,getterFor:WT}});var dl=c((SH,fl)=>{var xo=Lt(),XT=_t(),ll=Function.prototype,jT=xo&&Object.getOwnPropertyDescriptor,So=XT(ll,"name"),zT=So&&function(){}.name==="something",KT=So&&(!xo||xo&&jT(ll,"name").configurable);fl.exports={EXISTS:So,PROPER:zT,CONFIGURABLE:KT}});var El=c((CH,hl)=>{var YT=Ee(),pl=ot(),$T=_t(),gl=wn(),QT=Tn(),ZT=_o(),vl=cl(),JT=dl().CONFIGURABLE,eO=vl.get,tO=vl.enforce,rO=String(String).split("String");(hl.exports=function(e,t,r,n){var i=n?!!n.unsafe:!1,o=n?!!n.enumerable:!1,a=n?!!n.noTargetGet:!1,s=n&&n.name!==void 0?n.name:t,u;if(pl(r)&&(String(s).slice(0,7)==="Symbol("&&(s="["+String(s).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!$T(r,"name")||JT&&r.name!==s)&&gl(r,"name",s),u=tO(r),u.source||(u.source=rO.join(typeof s=="string"?s:""))),e===YT){o?e[t]=r:QT(t,r);return}else i?!a&&e[t]&&(o=!0):delete e[t];o?e[t]=r:gl(e,t,r)})(Function.prototype,"toString",function(){return pl(this)&&eO(this).source||ZT(this)})});var Co=c((RH,yl)=>{var nO=Math.ceil,iO=Math.floor;yl.exports=function(e){var t=+e;return t!==t||t===0?0:(t>0?iO:nO)(t)}});var _l=c((LH,ml)=>{var oO=Co(),aO=Math.max,sO=Math.min;ml.exports=function(e,t){var r=oO(e);return r<0?aO(r+t,0):sO(r,t)}});var Il=c((NH,bl)=>{var uO=Co(),cO=Math.min;bl.exports=function(e){return e>0?cO(uO(e),9007199254740991):0}});var Ol=c((PH,Tl)=>{var lO=Il();Tl.exports=function(e){return lO(e.length)}});var Ro=c((qH,Al)=>{var fO=Cr(),dO=_l(),pO=Ol(),wl=function(e){return function(t,r,n){var i=fO(t),o=pO(i),a=dO(n,o),s;if(e&&r!=r){for(;o>a;)if(s=i[a++],s!=s)return!0}else for(;o>a;a++)if((e||a in i)&&i[a]===r)return e||a||0;return!e&&-1}};Al.exports={includes:wl(!0),indexOf:wl(!1)}});var No=c((MH,Sl)=>{var gO=Ke(),Lo=_t(),vO=Cr(),hO=Ro().indexOf,EO=An(),xl=gO([].push);Sl.exports=function(e,t){var r=vO(e),n=0,i=[],o;for(o in r)!Lo(EO,o)&&Lo(r,o)&&xl(i,o);for(;t.length>n;)Lo(r,o=t[n++])&&(~hO(i,o)||xl(i,o));return i}});var Cn=c((FH,Cl)=>{Cl.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]});var Ll=c(Rl=>{var yO=No(),mO=Cn(),_O=mO.concat("length","prototype");Rl.f=Object.getOwnPropertyNames||function(t){return yO(t,_O)}});var Pl=c(Nl=>{Nl.f=Object.getOwnPropertySymbols});var Ml=c((UH,ql)=>{var bO=Rr(),IO=Ke(),TO=Ll(),OO=Pl(),wO=Lr(),AO=IO([].concat);ql.exports=bO("Reflect","ownKeys")||function(t){var r=TO.f(wO(t)),n=OO.f;return n?AO(r,n(t)):r}});var Dl=c((VH,Fl)=>{var xO=_t(),SO=Ml(),CO=yo(),RO=Nr();Fl.exports=function(e,t){for(var r=SO(t),n=RO.f,i=CO.f,o=0;o<r.length;o++){var a=r[o];xO(e,a)||n(e,a,i(t,a))}}});var Ul=c((kH,Gl)=>{var LO=Wt(),NO=ot(),PO=/#|\.prototype\./,qr=function(e,t){var r=MO[qO(e)];return r==DO?!0:r==FO?!1:NO(t)?LO(t):!!t},qO=qr.normalize=function(e){return String(e).replace(PO,".").toLowerCase()},MO=qr.data={},FO=qr.NATIVE="N",DO=qr.POLYFILL="P";Gl.exports=qr});var kl=c((BH,Vl)=>{var Po=Ee(),GO=yo().f,UO=wn(),VO=El(),kO=Tn(),BO=Dl(),HO=Ul();Vl.exports=function(e,t){var r=e.target,n=e.global,i=e.stat,o,a,s,u,f,h;if(n?a=Po:i?a=Po[r]||kO(r,{}):a=(Po[r]||{}).prototype,a)for(s in t){if(f=t[s],e.noTargetGet?(h=GO(a,s),u=h&&h.value):u=a[s],o=HO(n?s:r+(i?".":"#")+s,e.forced),!o&&u!==void 0){if(typeof f==typeof u)continue;BO(f,u)}(e.sham||u&&u.sham)&&UO(f,"sham",!0),VO(a,s,f,e)}}});var Hl=c((HH,Bl)=>{var WO=No(),XO=Cn();Bl.exports=Object.keys||function(t){return WO(t,XO)}});var Xl=c((WH,Wl)=>{var jO=Lt(),zO=Nr(),KO=Lr(),YO=Cr(),$O=Hl();Wl.exports=jO?Object.defineProperties:function(t,r){KO(t);for(var n=YO(r),i=$O(r),o=i.length,a=0,s;o>a;)zO.f(t,s=i[a++],n[s]);return t}});var zl=c((XH,jl)=>{var QO=Rr();jl.exports=QO("document","documentElement")});var tf=c((jH,ef)=>{var ZO=Lr(),JO=Xl(),Kl=Cn(),e0=An(),t0=zl(),r0=ho(),n0=bo(),Yl=">",$l="<",Mo="prototype",Fo="script",Zl=n0("IE_PROTO"),qo=function(){},Jl=function(e){return $l+Fo+Yl+e+$l+"/"+Fo+Yl},Ql=function(e){e.write(Jl("")),e.close();var t=e.parentWindow.Object;return e=null,t},i0=function(){var e=r0("iframe"),t="java"+Fo+":",r;return e.style.display="none",t0.appendChild(e),e.src=String(t),r=e.contentWindow.document,r.open(),r.write(Jl("document.F=Object")),r.close(),r.F},Rn,Ln=function(){try{Rn=new ActiveXObject("htmlfile")}catch{}Ln=typeof document<"u"?document.domain&&Rn?Ql(Rn):i0():Ql(Rn);for(var e=Kl.length;e--;)delete Ln[Mo][Kl[e]];return Ln()};e0[Zl]=!0;ef.exports=Object.create||function(t,r){var n;return t!==null?(qo[Mo]=ZO(t),n=new qo,qo[Mo]=null,n[Zl]=t):n=Ln(),r===void 0?n:JO(n,r)}});var nf=c((zH,rf)=>{var o0=po(),a0=tf(),s0=Nr(),Do=o0("unscopables"),Go=Array.prototype;Go[Do]==null&&s0.f(Go,Do,{configurable:!0,value:a0(null)});rf.exports=function(e){Go[Do][e]=!0}});var of=c(()=>{"use strict";var u0=kl(),c0=Ro().includes,l0=nf();u0({target:"Array",proto:!0},{includes:function(t){return c0(this,t,arguments.length>1?arguments[1]:void 0)}});l0("includes")});var sf=c(($H,af)=>{var f0=Ee(),d0=Ke();af.exports=function(e,t){return d0(f0[e].prototype[t])}});var cf=c((QH,uf)=>{of();var p0=sf();uf.exports=p0("Array","includes")});var ff=c((ZH,lf)=>{var g0=cf();lf.exports=g0});var pf=c((JH,df)=>{var v0=ff();df.exports=v0});var Uo=c((e5,gf)=>{var h0=typeof global=="object"&&global&&global.Object===Object&&global;gf.exports=h0});var $e=c((t5,vf)=>{var E0=Uo(),y0=typeof self=="object"&&self&&self.Object===Object&&self,m0=E0||y0||Function("return this")();vf.exports=m0});var zt=c((r5,hf)=>{var _0=$e(),b0=_0.Symbol;hf.exports=b0});var _f=c((n5,mf)=>{var Ef=zt(),yf=Object.prototype,I0=yf.hasOwnProperty,T0=yf.toString,Mr=Ef?Ef.toStringTag:void 0;function O0(e){var t=I0.call(e,Mr),r=e[Mr];try{e[Mr]=void 0;var n=!0}catch{}var i=T0.call(e);return n&&(t?e[Mr]=r:delete e[Mr]),i}mf.exports=O0});var If=c((i5,bf)=>{var w0=Object.prototype,A0=w0.toString;function x0(e){return A0.call(e)}bf.exports=x0});var It=c((o5,wf)=>{var Tf=zt(),S0=_f(),C0=If(),R0="[object Null]",L0="[object Undefined]",Of=Tf?Tf.toStringTag:void 0;function N0(e){return e==null?e===void 0?L0:R0:Of&&Of in Object(e)?S0(e):C0(e)}wf.exports=N0});var Vo=c((a5,Af)=>{function P0(e,t){return function(r){return e(t(r))}}Af.exports=P0});var ko=c((s5,xf)=>{var q0=Vo(),M0=q0(Object.getPrototypeOf,Object);xf.exports=M0});var pt=c((u5,Sf)=>{function F0(e){return e!=null&&typeof e=="object"}Sf.exports=F0});var Bo=c((c5,Rf)=>{var D0=It(),G0=ko(),U0=pt(),V0="[object Object]",k0=Function.prototype,B0=Object.prototype,Cf=k0.toString,H0=B0.hasOwnProperty,W0=Cf.call(Object);function X0(e){if(!U0(e)||D0(e)!=V0)return!1;var t=G0(e);if(t===null)return!0;var r=H0.call(t,"constructor")&&t.constructor;return typeof r=="function"&&r instanceof r&&Cf.call(r)==W0}Rf.exports=X0});var Lf=c(Ho=>{"use strict";Object.defineProperty(Ho,"__esModule",{value:!0});Ho.default=j0;function j0(e){var t,r=e.Symbol;return typeof r=="function"?r.observable?t=r.observable:(t=r("observable"),r.observable=t):t="@@observable",t}});var Nf=c((Xo,Wo)=>{"use strict";Object.defineProperty(Xo,"__esModule",{value:!0});var z0=Lf(),K0=Y0(z0);function Y0(e){return e&&e.__esModule?e:{default:e}}var Kt;typeof self<"u"?Kt=self:typeof window<"u"?Kt=window:typeof global<"u"?Kt=global:typeof Wo<"u"?Kt=Wo:Kt=Function("return this")();var $0=(0,K0.default)(Kt);Xo.default=$0});var jo=c(Fr=>{"use strict";Fr.__esModule=!0;Fr.ActionTypes=void 0;Fr.default=Ff;var Q0=Bo(),Z0=Mf(Q0),J0=Nf(),Pf=Mf(J0);function Mf(e){return e&&e.__esModule?e:{default:e}}var qf=Fr.ActionTypes={INIT:"@@redux/INIT"};function Ff(e,t,r){var n;if(typeof t=="function"&&typeof r>"u"&&(r=t,t=void 0),typeof r<"u"){if(typeof r!="function")throw new Error("Expected the enhancer to be a function.");return r(Ff)(e,t)}if(typeof e!="function")throw new Error("Expected the reducer to be a function.");var i=e,o=t,a=[],s=a,u=!1;function f(){s===a&&(s=a.slice())}function h(){return o}function p(_){if(typeof _!="function")throw new Error("Expected listener to be a function.");var w=!0;return f(),s.push(_),function(){if(w){w=!1,f();var C=s.indexOf(_);s.splice(C,1)}}}function d(_){if(!(0,Z0.default)(_))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(typeof _.type>"u")throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(u)throw new Error("Reducers may not dispatch actions.");try{u=!0,o=i(o,_)}finally{u=!1}for(var w=a=s,m=0;m<w.length;m++)w[m]();return _}function E(_){if(typeof _!="function")throw new Error("Expected the nextReducer to be a function.");i=_,d({type:qf.INIT})}function T(){var _,w=p;return _={subscribe:function(C){if(typeof C!="object")throw new TypeError("Expected the observer to be an object.");function A(){C.next&&C.next(h())}A();var R=w(A);return{unsubscribe:R}}},_[Pf.default]=function(){return this},_}return d({type:qf.INIT}),n={dispatch:d,subscribe:p,getState:h,replaceReducer:E},n[Pf.default]=T,n}});var Ko=c(zo=>{"use strict";zo.__esModule=!0;zo.default=ew;function ew(e){typeof console<"u"&&typeof console.error=="function"&&console.error(e);try{throw new Error(e)}catch{}}});var Uf=c(Yo=>{"use strict";Yo.__esModule=!0;Yo.default=ow;var Df=jo(),tw=Bo(),p5=Gf(tw),rw=Ko(),g5=Gf(rw);function Gf(e){return e&&e.__esModule?e:{default:e}}function nw(e,t){var r=t&&t.type,n=r&&'"'+r.toString()+'"'||"an action";return"Given action "+n+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state.'}function iw(e){Object.keys(e).forEach(function(t){var r=e[t],n=r(void 0,{type:Df.ActionTypes.INIT});if(typeof n>"u")throw new Error('Reducer "'+t+'" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');var i="@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".");if(typeof r(void 0,{type:i})>"u")throw new Error('Reducer "'+t+'" returned undefined when probed with a random type. '+("Don't try to handle "+Df.ActionTypes.INIT+' or other actions in "redux/*" ')+"namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")})}function ow(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++){var i=t[n];typeof e[i]=="function"&&(r[i]=e[i])}var o=Object.keys(r);if(!1)var a;var s;try{iw(r)}catch(u){s=u}return function(){var f=arguments.length<=0||arguments[0]===void 0?{}:arguments[0],h=arguments[1];if(s)throw s;if(!1)var p;for(var d=!1,E={},T=0;T<o.length;T++){var _=o[T],w=r[_],m=f[_],C=w(m,h);if(typeof C>"u"){var A=nw(_,h);throw new Error(A)}E[_]=C,d=d||C!==m}return d?E:f}}});var kf=c($o=>{"use strict";$o.__esModule=!0;$o.default=aw;function Vf(e,t){return function(){return t(e.apply(void 0,arguments))}}function aw(e,t){if(typeof e=="function")return Vf(e,t);if(typeof e!="object"||e===null)throw new Error("bindActionCreators expected an object or a function, instead received "+(e===null?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var r=Object.keys(e),n={},i=0;i<r.length;i++){var o=r[i],a=e[o];typeof a=="function"&&(n[o]=Vf(a,t))}return n}});var Zo=c(Qo=>{"use strict";Qo.__esModule=!0;Qo.default=sw;function sw(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];if(t.length===0)return function(o){return o};if(t.length===1)return t[0];var n=t[t.length-1],i=t.slice(0,-1);return function(){return i.reduceRight(function(o,a){return a(o)},n.apply(void 0,arguments))}}});var Bf=c(Jo=>{"use strict";Jo.__esModule=!0;var uw=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};Jo.default=dw;var cw=Zo(),lw=fw(cw);function fw(e){return e&&e.__esModule?e:{default:e}}function dw(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(n){return function(i,o,a){var s=n(i,o,a),u=s.dispatch,f=[],h={getState:s.getState,dispatch:function(d){return u(d)}};return f=t.map(function(p){return p(h)}),u=lw.default.apply(void 0,f)(s.dispatch),uw({},s,{dispatch:u})}}}});var ea=c(He=>{"use strict";He.__esModule=!0;He.compose=He.applyMiddleware=He.bindActionCreators=He.combineReducers=He.createStore=void 0;var pw=jo(),gw=Yt(pw),vw=Uf(),hw=Yt(vw),Ew=kf(),yw=Yt(Ew),mw=Bf(),_w=Yt(mw),bw=Zo(),Iw=Yt(bw),Tw=Ko(),m5=Yt(Tw);function Yt(e){return e&&e.__esModule?e:{default:e}}He.createStore=gw.default;He.combineReducers=hw.default;He.bindActionCreators=yw.default;He.applyMiddleware=_w.default;He.compose=Iw.default});var Qe,ta,at,Ow,ww,Nn,Aw,ra=he(()=>{"use strict";Qe={NAVBAR_OPEN:"NAVBAR_OPEN",NAVBAR_CLOSE:"NAVBAR_CLOSE",TAB_ACTIVE:"TAB_ACTIVE",TAB_INACTIVE:"TAB_INACTIVE",SLIDER_ACTIVE:"SLIDER_ACTIVE",SLIDER_INACTIVE:"SLIDER_INACTIVE",DROPDOWN_OPEN:"DROPDOWN_OPEN",DROPDOWN_CLOSE:"DROPDOWN_CLOSE",MOUSE_CLICK:"MOUSE_CLICK",MOUSE_SECOND_CLICK:"MOUSE_SECOND_CLICK",MOUSE_DOWN:"MOUSE_DOWN",MOUSE_UP:"MOUSE_UP",MOUSE_OVER:"MOUSE_OVER",MOUSE_OUT:"MOUSE_OUT",MOUSE_MOVE:"MOUSE_MOVE",MOUSE_MOVE_IN_VIEWPORT:"MOUSE_MOVE_IN_VIEWPORT",SCROLL_INTO_VIEW:"SCROLL_INTO_VIEW",SCROLL_OUT_OF_VIEW:"SCROLL_OUT_OF_VIEW",SCROLLING_IN_VIEW:"SCROLLING_IN_VIEW",ECOMMERCE_CART_OPEN:"ECOMMERCE_CART_OPEN",ECOMMERCE_CART_CLOSE:"ECOMMERCE_CART_CLOSE",PAGE_START:"PAGE_START",PAGE_FINISH:"PAGE_FINISH",PAGE_SCROLL_UP:"PAGE_SCROLL_UP",PAGE_SCROLL_DOWN:"PAGE_SCROLL_DOWN",PAGE_SCROLL:"PAGE_SCROLL"},ta={ELEMENT:"ELEMENT",CLASS:"CLASS",PAGE:"PAGE"},at={ELEMENT:"ELEMENT",VIEWPORT:"VIEWPORT"},Ow={X_AXIS:"X_AXIS",Y_AXIS:"Y_AXIS"},ww={CHILDREN:"CHILDREN",SIBLINGS:"SIBLINGS",IMMEDIATE_CHILDREN:"IMMEDIATE_CHILDREN"},Nn={FADE_EFFECT:"FADE_EFFECT",SLIDE_EFFECT:"SLIDE_EFFECT",GROW_EFFECT:"GROW_EFFECT",SHRINK_EFFECT:"SHRINK_EFFECT",SPIN_EFFECT:"SPIN_EFFECT",FLY_EFFECT:"FLY_EFFECT",POP_EFFECT:"POP_EFFECT",FLIP_EFFECT:"FLIP_EFFECT",JIGGLE_EFFECT:"JIGGLE_EFFECT",PULSE_EFFECT:"PULSE_EFFECT",DROP_EFFECT:"DROP_EFFECT",BLINK_EFFECT:"BLINK_EFFECT",BOUNCE_EFFECT:"BOUNCE_EFFECT",FLIP_LEFT_TO_RIGHT_EFFECT:"FLIP_LEFT_TO_RIGHT_EFFECT",FLIP_RIGHT_TO_LEFT_EFFECT:"FLIP_RIGHT_TO_LEFT_EFFECT",RUBBER_BAND_EFFECT:"RUBBER_BAND_EFFECT",JELLO_EFFECT:"JELLO_EFFECT",GROW_BIG_EFFECT:"GROW_BIG_EFFECT",SHRINK_BIG_EFFECT:"SHRINK_BIG_EFFECT",PLUGIN_LOTTIE_EFFECT:"PLUGIN_LOTTIE_EFFECT"},Aw={LEFT:"LEFT",RIGHT:"RIGHT",BOTTOM:"BOTTOM",TOP:"TOP",BOTTOM_LEFT:"BOTTOM_LEFT",BOTTOM_RIGHT:"BOTTOM_RIGHT",TOP_RIGHT:"TOP_RIGHT",TOP_LEFT:"TOP_LEFT",CLOCKWISE:"CLOCKWISE",COUNTER_CLOCKWISE:"COUNTER_CLOCKWISE"}});var Ue,xw,Pn=he(()=>{"use strict";Ue={TRANSFORM_MOVE:"TRANSFORM_MOVE",TRANSFORM_SCALE:"TRANSFORM_SCALE",TRANSFORM_ROTATE:"TRANSFORM_ROTATE",TRANSFORM_SKEW:"TRANSFORM_SKEW",STYLE_OPACITY:"STYLE_OPACITY",STYLE_SIZE:"STYLE_SIZE",STYLE_FILTER:"STYLE_FILTER",STYLE_FONT_VARIATION:"STYLE_FONT_VARIATION",STYLE_BACKGROUND_COLOR:"STYLE_BACKGROUND_COLOR",STYLE_BORDER:"STYLE_BORDER",STYLE_TEXT_COLOR:"STYLE_TEXT_COLOR",OBJECT_VALUE:"OBJECT_VALUE",PLUGIN_LOTTIE:"PLUGIN_LOTTIE",PLUGIN_SPLINE:"PLUGIN_SPLINE",PLUGIN_VARIABLE:"PLUGIN_VARIABLE",GENERAL_DISPLAY:"GENERAL_DISPLAY",GENERAL_START_ACTION:"GENERAL_START_ACTION",GENERAL_CONTINUOUS_ACTION:"GENERAL_CONTINUOUS_ACTION",GENERAL_COMBO_CLASS:"GENERAL_COMBO_CLASS",GENERAL_STOP_ACTION:"GENERAL_STOP_ACTION",GENERAL_LOOP:"GENERAL_LOOP",STYLE_BOX_SHADOW:"STYLE_BOX_SHADOW"},xw={ELEMENT:"ELEMENT",ELEMENT_CLASS:"ELEMENT_CLASS",TRIGGER_ELEMENT:"TRIGGER_ELEMENT"}});var Sw,Hf=he(()=>{"use strict";Sw={MOUSE_CLICK_INTERACTION:"MOUSE_CLICK_INTERACTION",MOUSE_HOVER_INTERACTION:"MOUSE_HOVER_INTERACTION",MOUSE_MOVE_INTERACTION:"MOUSE_MOVE_INTERACTION",SCROLL_INTO_VIEW_INTERACTION:"SCROLL_INTO_VIEW_INTERACTION",SCROLLING_IN_VIEW_INTERACTION:"SCROLLING_IN_VIEW_INTERACTION",MOUSE_MOVE_IN_VIEWPORT_INTERACTION:"MOUSE_MOVE_IN_VIEWPORT_INTERACTION",PAGE_IS_SCROLLING_INTERACTION:"PAGE_IS_SCROLLING_INTERACTION",PAGE_LOAD_INTERACTION:"PAGE_LOAD_INTERACTION",PAGE_SCROLLED_INTERACTION:"PAGE_SCROLLED_INTERACTION",NAVBAR_INTERACTION:"NAVBAR_INTERACTION",DROPDOWN_INTERACTION:"DROPDOWN_INTERACTION",ECOMMERCE_CART_INTERACTION:"ECOMMERCE_CART_INTERACTION",TAB_INTERACTION:"TAB_INTERACTION",SLIDER_INTERACTION:"SLIDER_INTERACTION"}});var Cw,Rw,Lw,Nw,Pw,qw,Mw,na,Wf=he(()=>{"use strict";Pn();({TRANSFORM_MOVE:Cw,TRANSFORM_SCALE:Rw,TRANSFORM_ROTATE:Lw,TRANSFORM_SKEW:Nw,STYLE_SIZE:Pw,STYLE_FILTER:qw,STYLE_FONT_VARIATION:Mw}=Ue),na={[Cw]:!0,[Rw]:!0,[Lw]:!0,[Nw]:!0,[Pw]:!0,[qw]:!0,[Mw]:!0}});var Te={};De(Te,{IX2_ACTION_LIST_PLAYBACK_CHANGED:()=>Zw,IX2_ANIMATION_FRAME_CHANGED:()=>jw,IX2_CLEAR_REQUESTED:()=>Hw,IX2_ELEMENT_STATE_CHANGED:()=>Qw,IX2_EVENT_LISTENER_ADDED:()=>Ww,IX2_EVENT_STATE_CHANGED:()=>Xw,IX2_INSTANCE_ADDED:()=>Kw,IX2_INSTANCE_REMOVED:()=>$w,IX2_INSTANCE_STARTED:()=>Yw,IX2_MEDIA_QUERIES_DEFINED:()=>eA,IX2_PARAMETER_CHANGED:()=>zw,IX2_PLAYBACK_REQUESTED:()=>kw,IX2_PREVIEW_REQUESTED:()=>Vw,IX2_RAW_DATA_IMPORTED:()=>Fw,IX2_SESSION_INITIALIZED:()=>Dw,IX2_SESSION_STARTED:()=>Gw,IX2_SESSION_STOPPED:()=>Uw,IX2_STOP_REQUESTED:()=>Bw,IX2_TEST_FRAME_RENDERED:()=>tA,IX2_VIEWPORT_WIDTH_CHANGED:()=>Jw});var Fw,Dw,Gw,Uw,Vw,kw,Bw,Hw,Ww,Xw,jw,zw,Kw,Yw,$w,Qw,Zw,Jw,eA,tA,Xf=he(()=>{"use strict";Fw="IX2_RAW_DATA_IMPORTED",Dw="IX2_SESSION_INITIALIZED",Gw="IX2_SESSION_STARTED",Uw="IX2_SESSION_STOPPED",Vw="IX2_PREVIEW_REQUESTED",kw="IX2_PLAYBACK_REQUESTED",Bw="IX2_STOP_REQUESTED",Hw="IX2_CLEAR_REQUESTED",Ww="IX2_EVENT_LISTENER_ADDED",Xw="IX2_EVENT_STATE_CHANGED",jw="IX2_ANIMATION_FRAME_CHANGED",zw="IX2_PARAMETER_CHANGED",Kw="IX2_INSTANCE_ADDED",Yw="IX2_INSTANCE_STARTED",$w="IX2_INSTANCE_REMOVED",Qw="IX2_ELEMENT_STATE_CHANGED",Zw="IX2_ACTION_LIST_PLAYBACK_CHANGED",Jw="IX2_VIEWPORT_WIDTH_CHANGED",eA="IX2_MEDIA_QUERIES_DEFINED",tA="IX2_TEST_FRAME_RENDERED"});var Re={};De(Re,{ABSTRACT_NODE:()=>JA,AUTO:()=>BA,BACKGROUND:()=>FA,BACKGROUND_COLOR:()=>MA,BAR_DELIMITER:()=>XA,BORDER_COLOR:()=>DA,BOUNDARY_SELECTOR:()=>aA,CHILDREN:()=>jA,COLON_DELIMITER:()=>WA,COLOR:()=>GA,COMMA_DELIMITER:()=>HA,CONFIG_UNIT:()=>gA,CONFIG_VALUE:()=>lA,CONFIG_X_UNIT:()=>fA,CONFIG_X_VALUE:()=>sA,CONFIG_Y_UNIT:()=>dA,CONFIG_Y_VALUE:()=>uA,CONFIG_Z_UNIT:()=>pA,CONFIG_Z_VALUE:()=>cA,DISPLAY:()=>UA,FILTER:()=>LA,FLEX:()=>VA,FONT_VARIATION_SETTINGS:()=>NA,HEIGHT:()=>qA,HTML_ELEMENT:()=>QA,IMMEDIATE_CHILDREN:()=>zA,IX2_ID_DELIMITER:()=>rA,OPACITY:()=>RA,PARENT:()=>YA,PLAIN_OBJECT:()=>ZA,PRESERVE_3D:()=>$A,RENDER_GENERAL:()=>tx,RENDER_PLUGIN:()=>nx,RENDER_STYLE:()=>rx,RENDER_TRANSFORM:()=>ex,ROTATE_X:()=>OA,ROTATE_Y:()=>wA,ROTATE_Z:()=>AA,SCALE_3D:()=>TA,SCALE_X:()=>_A,SCALE_Y:()=>bA,SCALE_Z:()=>IA,SIBLINGS:()=>KA,SKEW:()=>xA,SKEW_X:()=>SA,SKEW_Y:()=>CA,TRANSFORM:()=>vA,TRANSLATE_3D:()=>mA,TRANSLATE_X:()=>hA,TRANSLATE_Y:()=>EA,TRANSLATE_Z:()=>yA,WF_PAGE:()=>nA,WIDTH:()=>PA,WILL_CHANGE:()=>kA,W_MOD_IX:()=>oA,W_MOD_JS:()=>iA});var rA,nA,iA,oA,aA,sA,uA,cA,lA,fA,dA,pA,gA,vA,hA,EA,yA,mA,_A,bA,IA,TA,OA,wA,AA,xA,SA,CA,RA,LA,NA,PA,qA,MA,FA,DA,GA,UA,VA,kA,BA,HA,WA,XA,jA,zA,KA,YA,$A,QA,ZA,JA,ex,tx,rx,nx,jf=he(()=>{"use strict";rA="|",nA="data-wf-page",iA="w-mod-js",oA="w-mod-ix",aA=".w-dyn-item",sA="xValue",uA="yValue",cA="zValue",lA="value",fA="xUnit",dA="yUnit",pA="zUnit",gA="unit",vA="transform",hA="translateX",EA="translateY",yA="translateZ",mA="translate3d",_A="scaleX",bA="scaleY",IA="scaleZ",TA="scale3d",OA="rotateX",wA="rotateY",AA="rotateZ",xA="skew",SA="skewX",CA="skewY",RA="opacity",LA="filter",NA="font-variation-settings",PA="width",qA="height",MA="backgroundColor",FA="background",DA="borderColor",GA="color",UA="display",VA="flex",kA="willChange",BA="AUTO",HA=",",WA=":",XA="|",jA="CHILDREN",zA="IMMEDIATE_CHILDREN",KA="SIBLINGS",YA="PARENT",$A="preserve-3d",QA="HTML_ELEMENT",ZA="PLAIN_OBJECT",JA="ABSTRACT_NODE",ex="RENDER_TRANSFORM",tx="RENDER_GENERAL",rx="RENDER_STYLE",nx="RENDER_PLUGIN"});var zf={};De(zf,{ActionAppliesTo:()=>xw,ActionTypeConsts:()=>Ue,EventAppliesTo:()=>ta,EventBasedOn:()=>at,EventContinuousMouseAxes:()=>Ow,EventLimitAffectedElements:()=>ww,EventTypeConsts:()=>Qe,IX2EngineActionTypes:()=>Te,IX2EngineConstants:()=>Re,InteractionTypeConsts:()=>Sw,QuickEffectDirectionConsts:()=>Aw,QuickEffectIds:()=>Nn,ReducedMotionTypes:()=>na});var Ve=he(()=>{"use strict";ra();Pn();Hf();Wf();Xf();jf();Pn();ra()});var ix,Kf,Yf=he(()=>{"use strict";Ve();({IX2_RAW_DATA_IMPORTED:ix}=Te),Kf=(e=Object.freeze({}),t)=>{switch(t.type){case ix:return t.payload.ixData||Object.freeze({});default:return e}}});var $t=c(me=>{"use strict";Object.defineProperty(me,"__esModule",{value:!0});var ox=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};me.clone=Mn;me.addLast=Zf;me.addFirst=Jf;me.removeLast=ed;me.removeFirst=td;me.insert=rd;me.removeAt=nd;me.replaceAt=id;me.getIn=Fn;me.set=Dn;me.setIn=Gn;me.update=ad;me.updateIn=sd;me.merge=ud;me.mergeDeep=cd;me.mergeIn=ld;me.omit=fd;me.addDefaults=dd;var $f="INVALID_ARGS";function Qf(e){throw new Error(e)}function ia(e){var t=Object.keys(e);return Object.getOwnPropertySymbols?t.concat(Object.getOwnPropertySymbols(e)):t}var ax={}.hasOwnProperty;function Mn(e){if(Array.isArray(e))return e.slice();for(var t=ia(e),r={},n=0;n<t.length;n++){var i=t[n];r[i]=e[i]}return r}function ke(e,t,r){var n=r;n==null&&Qf($f);for(var i=!1,o=arguments.length,a=Array(o>3?o-3:0),s=3;s<o;s++)a[s-3]=arguments[s];for(var u=0;u<a.length;u++){var f=a[u];if(f!=null){var h=ia(f);if(h.length)for(var p=0;p<=h.length;p++){var d=h[p];if(!(e&&n[d]!==void 0)){var E=f[d];t&&qn(n[d])&&qn(E)&&(E=ke(e,t,n[d],E)),!(E===void 0||E===n[d])&&(i||(i=!0,n=Mn(n)),n[d]=E)}}}}return n}function qn(e){var t=typeof e>"u"?"undefined":ox(e);return e!=null&&(t==="object"||t==="function")}function Zf(e,t){return Array.isArray(t)?e.concat(t):e.concat([t])}function Jf(e,t){return Array.isArray(t)?t.concat(e):[t].concat(e)}function ed(e){return e.length?e.slice(0,e.length-1):e}function td(e){return e.length?e.slice(1):e}function rd(e,t,r){return e.slice(0,t).concat(Array.isArray(r)?r:[r]).concat(e.slice(t))}function nd(e,t){return t>=e.length||t<0?e:e.slice(0,t).concat(e.slice(t+1))}function id(e,t,r){if(e[t]===r)return e;for(var n=e.length,i=Array(n),o=0;o<n;o++)i[o]=e[o];return i[t]=r,i}function Fn(e,t){if(!Array.isArray(t)&&Qf($f),e!=null){for(var r=e,n=0;n<t.length;n++){var i=t[n];if(r=r?.[i],r===void 0)return r}return r}}function Dn(e,t,r){var n=typeof t=="number"?[]:{},i=e??n;if(i[t]===r)return i;var o=Mn(i);return o[t]=r,o}function od(e,t,r,n){var i=void 0,o=t[n];if(n===t.length-1)i=r;else{var a=qn(e)&&qn(e[o])?e[o]:typeof t[n+1]=="number"?[]:{};i=od(a,t,r,n+1)}return Dn(e,o,i)}function Gn(e,t,r){return t.length?od(e,t,r,0):r}function ad(e,t,r){var n=e?.[t],i=r(n);return Dn(e,t,i)}function sd(e,t,r){var n=Fn(e,t),i=r(n);return Gn(e,t,i)}function ud(e,t,r,n,i,o){for(var a=arguments.length,s=Array(a>6?a-6:0),u=6;u<a;u++)s[u-6]=arguments[u];return s.length?ke.call.apply(ke,[null,!1,!1,e,t,r,n,i,o].concat(s)):ke(!1,!1,e,t,r,n,i,o)}function cd(e,t,r,n,i,o){for(var a=arguments.length,s=Array(a>6?a-6:0),u=6;u<a;u++)s[u-6]=arguments[u];return s.length?ke.call.apply(ke,[null,!1,!0,e,t,r,n,i,o].concat(s)):ke(!1,!0,e,t,r,n,i,o)}function ld(e,t,r,n,i,o,a){var s=Fn(e,t);s==null&&(s={});for(var u=void 0,f=arguments.length,h=Array(f>7?f-7:0),p=7;p<f;p++)h[p-7]=arguments[p];return h.length?u=ke.call.apply(ke,[null,!1,!1,s,r,n,i,o,a].concat(h)):u=ke(!1,!1,s,r,n,i,o,a),Gn(e,t,u)}function fd(e,t){for(var r=Array.isArray(t)?t:[t],n=!1,i=0;i<r.length;i++)if(ax.call(e,r[i])){n=!0;break}if(!n)return e;for(var o={},a=ia(e),s=0;s<a.length;s++){var u=a[s];r.indexOf(u)>=0||(o[u]=e[u])}return o}function dd(e,t,r,n,i,o){for(var a=arguments.length,s=Array(a>6?a-6:0),u=6;u<a;u++)s[u-6]=arguments[u];return s.length?ke.call.apply(ke,[null,!0,!1,e,t,r,n,i,o].concat(s)):ke(!0,!1,e,t,r,n,i,o)}var sx={clone:Mn,addLast:Zf,addFirst:Jf,removeLast:ed,removeFirst:td,insert:rd,removeAt:nd,replaceAt:id,getIn:Fn,set:Dn,setIn:Gn,update:ad,updateIn:sd,merge:ud,mergeDeep:cd,mergeIn:ld,omit:fd,addDefaults:dd};me.default=sx});var gd,ux,cx,lx,fx,dx,pd,vd,hd=he(()=>{"use strict";Ve();gd=le($t()),{IX2_PREVIEW_REQUESTED:ux,IX2_PLAYBACK_REQUESTED:cx,IX2_STOP_REQUESTED:lx,IX2_CLEAR_REQUESTED:fx}=Te,dx={preview:{},playback:{},stop:{},clear:{}},pd=Object.create(null,{[ux]:{value:"preview"},[cx]:{value:"playback"},[lx]:{value:"stop"},[fx]:{value:"clear"}}),vd=(e=dx,t)=>{if(t.type in pd){let r=[pd[t.type]];return(0,gd.setIn)(e,[r],{...t.payload})}return e}});var Pe,px,gx,vx,hx,Ex,yx,mx,_x,bx,Ix,Ed,Tx,yd,md=he(()=>{"use strict";Ve();Pe=le($t()),{IX2_SESSION_INITIALIZED:px,IX2_SESSION_STARTED:gx,IX2_TEST_FRAME_RENDERED:vx,IX2_SESSION_STOPPED:hx,IX2_EVENT_LISTENER_ADDED:Ex,IX2_EVENT_STATE_CHANGED:yx,IX2_ANIMATION_FRAME_CHANGED:mx,IX2_ACTION_LIST_PLAYBACK_CHANGED:_x,IX2_VIEWPORT_WIDTH_CHANGED:bx,IX2_MEDIA_QUERIES_DEFINED:Ix}=Te,Ed={active:!1,tick:0,eventListeners:[],eventState:{},playbackState:{},viewportWidth:0,mediaQueryKey:null,hasBoundaryNodes:!1,hasDefinedMediaQueries:!1,reducedMotion:!1},Tx=20,yd=(e=Ed,t)=>{switch(t.type){case px:{let{hasBoundaryNodes:r,reducedMotion:n}=t.payload;return(0,Pe.merge)(e,{hasBoundaryNodes:r,reducedMotion:n})}case gx:return(0,Pe.set)(e,"active",!0);case vx:{let{payload:{step:r=Tx}}=t;return(0,Pe.set)(e,"tick",e.tick+r)}case hx:return Ed;case mx:{let{payload:{now:r}}=t;return(0,Pe.set)(e,"tick",r)}case Ex:{let r=(0,Pe.addLast)(e.eventListeners,t.payload);return(0,Pe.set)(e,"eventListeners",r)}case yx:{let{stateKey:r,newState:n}=t.payload;return(0,Pe.setIn)(e,["eventState",r],n)}case _x:{let{actionListId:r,isPlaying:n}=t.payload;return(0,Pe.setIn)(e,["playbackState",r],n)}case bx:{let{width:r,mediaQueries:n}=t.payload,i=n.length,o=null;for(let a=0;a<i;a++){let{key:s,min:u,max:f}=n[a];if(r>=u&&r<=f){o=s;break}}return(0,Pe.merge)(e,{viewportWidth:r,mediaQueryKey:o})}case Ix:return(0,Pe.set)(e,"hasDefinedMediaQueries",!0);default:return e}}});var bd=c((U5,_d)=>{function Ox(){this.__data__=[],this.size=0}_d.exports=Ox});var Un=c((V5,Id)=>{function wx(e,t){return e===t||e!==e&&t!==t}Id.exports=wx});var Dr=c((k5,Td)=>{var Ax=Un();function xx(e,t){for(var r=e.length;r--;)if(Ax(e[r][0],t))return r;return-1}Td.exports=xx});var wd=c((B5,Od)=>{var Sx=Dr(),Cx=Array.prototype,Rx=Cx.splice;function Lx(e){var t=this.__data__,r=Sx(t,e);if(r<0)return!1;var n=t.length-1;return r==n?t.pop():Rx.call(t,r,1),--this.size,!0}Od.exports=Lx});var xd=c((H5,Ad)=>{var Nx=Dr();function Px(e){var t=this.__data__,r=Nx(t,e);return r<0?void 0:t[r][1]}Ad.exports=Px});var Cd=c((W5,Sd)=>{var qx=Dr();function Mx(e){return qx(this.__data__,e)>-1}Sd.exports=Mx});var Ld=c((X5,Rd)=>{var Fx=Dr();function Dx(e,t){var r=this.__data__,n=Fx(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this}Rd.exports=Dx});var Gr=c((j5,Nd)=>{var Gx=bd(),Ux=wd(),Vx=xd(),kx=Cd(),Bx=Ld();function Qt(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Qt.prototype.clear=Gx;Qt.prototype.delete=Ux;Qt.prototype.get=Vx;Qt.prototype.has=kx;Qt.prototype.set=Bx;Nd.exports=Qt});var qd=c((z5,Pd)=>{var Hx=Gr();function Wx(){this.__data__=new Hx,this.size=0}Pd.exports=Wx});var Fd=c((K5,Md)=>{function Xx(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}Md.exports=Xx});var Gd=c((Y5,Dd)=>{function jx(e){return this.__data__.get(e)}Dd.exports=jx});var Vd=c(($5,Ud)=>{function zx(e){return this.__data__.has(e)}Ud.exports=zx});var st=c((Q5,kd)=>{function Kx(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}kd.exports=Kx});var oa=c((Z5,Bd)=>{var Yx=It(),$x=st(),Qx="[object AsyncFunction]",Zx="[object Function]",Jx="[object GeneratorFunction]",eS="[object Proxy]";function tS(e){if(!$x(e))return!1;var t=Yx(e);return t==Zx||t==Jx||t==Qx||t==eS}Bd.exports=tS});var Wd=c((J5,Hd)=>{var rS=$e(),nS=rS["__core-js_shared__"];Hd.exports=nS});var zd=c((eW,jd)=>{var aa=Wd(),Xd=function(){var e=/[^.]+$/.exec(aa&&aa.keys&&aa.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function iS(e){return!!Xd&&Xd in e}jd.exports=iS});var sa=c((tW,Kd)=>{var oS=Function.prototype,aS=oS.toString;function sS(e){if(e!=null){try{return aS.call(e)}catch{}try{return e+""}catch{}}return""}Kd.exports=sS});var $d=c((rW,Yd)=>{var uS=oa(),cS=zd(),lS=st(),fS=sa(),dS=/[\\^$.*+?()[\]{}|]/g,pS=/^\[object .+?Constructor\]$/,gS=Function.prototype,vS=Object.prototype,hS=gS.toString,ES=vS.hasOwnProperty,yS=RegExp("^"+hS.call(ES).replace(dS,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function mS(e){if(!lS(e)||cS(e))return!1;var t=uS(e)?yS:pS;return t.test(fS(e))}Yd.exports=mS});var Zd=c((nW,Qd)=>{function _S(e,t){return e?.[t]}Qd.exports=_S});var Tt=c((iW,Jd)=>{var bS=$d(),IS=Zd();function TS(e,t){var r=IS(e,t);return bS(r)?r:void 0}Jd.exports=TS});var Vn=c((oW,ep)=>{var OS=Tt(),wS=$e(),AS=OS(wS,"Map");ep.exports=AS});var Ur=c((aW,tp)=>{var xS=Tt(),SS=xS(Object,"create");tp.exports=SS});var ip=c((sW,np)=>{var rp=Ur();function CS(){this.__data__=rp?rp(null):{},this.size=0}np.exports=CS});var ap=c((uW,op)=>{function RS(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}op.exports=RS});var up=c((cW,sp)=>{var LS=Ur(),NS="__lodash_hash_undefined__",PS=Object.prototype,qS=PS.hasOwnProperty;function MS(e){var t=this.__data__;if(LS){var r=t[e];return r===NS?void 0:r}return qS.call(t,e)?t[e]:void 0}sp.exports=MS});var lp=c((lW,cp)=>{var FS=Ur(),DS=Object.prototype,GS=DS.hasOwnProperty;function US(e){var t=this.__data__;return FS?t[e]!==void 0:GS.call(t,e)}cp.exports=US});var dp=c((fW,fp)=>{var VS=Ur(),kS="__lodash_hash_undefined__";function BS(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=VS&&t===void 0?kS:t,this}fp.exports=BS});var gp=c((dW,pp)=>{var HS=ip(),WS=ap(),XS=up(),jS=lp(),zS=dp();function Zt(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Zt.prototype.clear=HS;Zt.prototype.delete=WS;Zt.prototype.get=XS;Zt.prototype.has=jS;Zt.prototype.set=zS;pp.exports=Zt});var Ep=c((pW,hp)=>{var vp=gp(),KS=Gr(),YS=Vn();function $S(){this.size=0,this.__data__={hash:new vp,map:new(YS||KS),string:new vp}}hp.exports=$S});var mp=c((gW,yp)=>{function QS(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}yp.exports=QS});var Vr=c((vW,_p)=>{var ZS=mp();function JS(e,t){var r=e.__data__;return ZS(t)?r[typeof t=="string"?"string":"hash"]:r.map}_p.exports=JS});var Ip=c((hW,bp)=>{var eC=Vr();function tC(e){var t=eC(this,e).delete(e);return this.size-=t?1:0,t}bp.exports=tC});var Op=c((EW,Tp)=>{var rC=Vr();function nC(e){return rC(this,e).get(e)}Tp.exports=nC});var Ap=c((yW,wp)=>{var iC=Vr();function oC(e){return iC(this,e).has(e)}wp.exports=oC});var Sp=c((mW,xp)=>{var aC=Vr();function sC(e,t){var r=aC(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this}xp.exports=sC});var kn=c((_W,Cp)=>{var uC=Ep(),cC=Ip(),lC=Op(),fC=Ap(),dC=Sp();function Jt(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Jt.prototype.clear=uC;Jt.prototype.delete=cC;Jt.prototype.get=lC;Jt.prototype.has=fC;Jt.prototype.set=dC;Cp.exports=Jt});var Lp=c((bW,Rp)=>{var pC=Gr(),gC=Vn(),vC=kn(),hC=200;function EC(e,t){var r=this.__data__;if(r instanceof pC){var n=r.__data__;if(!gC||n.length<hC-1)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new vC(n)}return r.set(e,t),this.size=r.size,this}Rp.exports=EC});var ua=c((IW,Np)=>{var yC=Gr(),mC=qd(),_C=Fd(),bC=Gd(),IC=Vd(),TC=Lp();function er(e){var t=this.__data__=new yC(e);this.size=t.size}er.prototype.clear=mC;er.prototype.delete=_C;er.prototype.get=bC;er.prototype.has=IC;er.prototype.set=TC;Np.exports=er});var qp=c((TW,Pp)=>{var OC="__lodash_hash_undefined__";function wC(e){return this.__data__.set(e,OC),this}Pp.exports=wC});var Fp=c((OW,Mp)=>{function AC(e){return this.__data__.has(e)}Mp.exports=AC});var Gp=c((wW,Dp)=>{var xC=kn(),SC=qp(),CC=Fp();function Bn(e){var t=-1,r=e==null?0:e.length;for(this.__data__=new xC;++t<r;)this.add(e[t])}Bn.prototype.add=Bn.prototype.push=SC;Bn.prototype.has=CC;Dp.exports=Bn});var Vp=c((AW,Up)=>{function RC(e,t){for(var r=-1,n=e==null?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}Up.exports=RC});var Bp=c((xW,kp)=>{function LC(e,t){return e.has(t)}kp.exports=LC});var ca=c((SW,Hp)=>{var NC=Gp(),PC=Vp(),qC=Bp(),MC=1,FC=2;function DC(e,t,r,n,i,o){var a=r&MC,s=e.length,u=t.length;if(s!=u&&!(a&&u>s))return!1;var f=o.get(e),h=o.get(t);if(f&&h)return f==t&&h==e;var p=-1,d=!0,E=r&FC?new NC:void 0;for(o.set(e,t),o.set(t,e);++p<s;){var T=e[p],_=t[p];if(n)var w=a?n(_,T,p,t,e,o):n(T,_,p,e,t,o);if(w!==void 0){if(w)continue;d=!1;break}if(E){if(!PC(t,function(m,C){if(!qC(E,C)&&(T===m||i(T,m,r,n,o)))return E.push(C)})){d=!1;break}}else if(!(T===_||i(T,_,r,n,o))){d=!1;break}}return o.delete(e),o.delete(t),d}Hp.exports=DC});var Xp=c((CW,Wp)=>{var GC=$e(),UC=GC.Uint8Array;Wp.exports=UC});var zp=c((RW,jp)=>{function VC(e){var t=-1,r=Array(e.size);return e.forEach(function(n,i){r[++t]=[i,n]}),r}jp.exports=VC});var Yp=c((LW,Kp)=>{function kC(e){var t=-1,r=Array(e.size);return e.forEach(function(n){r[++t]=n}),r}Kp.exports=kC});var eg=c((NW,Jp)=>{var $p=zt(),Qp=Xp(),BC=Un(),HC=ca(),WC=zp(),XC=Yp(),jC=1,zC=2,KC="[object Boolean]",YC="[object Date]",$C="[object Error]",QC="[object Map]",ZC="[object Number]",JC="[object RegExp]",eR="[object Set]",tR="[object String]",rR="[object Symbol]",nR="[object ArrayBuffer]",iR="[object DataView]",Zp=$p?$p.prototype:void 0,la=Zp?Zp.valueOf:void 0;function oR(e,t,r,n,i,o,a){switch(r){case iR:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case nR:return!(e.byteLength!=t.byteLength||!o(new Qp(e),new Qp(t)));case KC:case YC:case ZC:return BC(+e,+t);case $C:return e.name==t.name&&e.message==t.message;case JC:case tR:return e==t+"";case QC:var s=WC;case eR:var u=n&jC;if(s||(s=XC),e.size!=t.size&&!u)return!1;var f=a.get(e);if(f)return f==t;n|=zC,a.set(e,t);var h=HC(s(e),s(t),n,i,o,a);return a.delete(e),h;case rR:if(la)return la.call(e)==la.call(t)}return!1}Jp.exports=oR});var Hn=c((PW,tg)=>{function aR(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e}tg.exports=aR});var we=c((qW,rg)=>{var sR=Array.isArray;rg.exports=sR});var fa=c((MW,ng)=>{var uR=Hn(),cR=we();function lR(e,t,r){var n=t(e);return cR(e)?n:uR(n,r(e))}ng.exports=lR});var og=c((FW,ig)=>{function fR(e,t){for(var r=-1,n=e==null?0:e.length,i=0,o=[];++r<n;){var a=e[r];t(a,r,e)&&(o[i++]=a)}return o}ig.exports=fR});var da=c((DW,ag)=>{function dR(){return[]}ag.exports=dR});var pa=c((GW,ug)=>{var pR=og(),gR=da(),vR=Object.prototype,hR=vR.propertyIsEnumerable,sg=Object.getOwnPropertySymbols,ER=sg?function(e){return e==null?[]:(e=Object(e),pR(sg(e),function(t){return hR.call(e,t)}))}:gR;ug.exports=ER});var lg=c((UW,cg)=>{function yR(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}cg.exports=yR});var dg=c((VW,fg)=>{var mR=It(),_R=pt(),bR="[object Arguments]";function IR(e){return _R(e)&&mR(e)==bR}fg.exports=IR});var kr=c((kW,vg)=>{var pg=dg(),TR=pt(),gg=Object.prototype,OR=gg.hasOwnProperty,wR=gg.propertyIsEnumerable,AR=pg(function(){return arguments}())?pg:function(e){return TR(e)&&OR.call(e,"callee")&&!wR.call(e,"callee")};vg.exports=AR});var Eg=c((BW,hg)=>{function xR(){return!1}hg.exports=xR});var Wn=c((Br,tr)=>{var SR=$e(),CR=Eg(),_g=typeof Br=="object"&&Br&&!Br.nodeType&&Br,yg=_g&&typeof tr=="object"&&tr&&!tr.nodeType&&tr,RR=yg&&yg.exports===_g,mg=RR?SR.Buffer:void 0,LR=mg?mg.isBuffer:void 0,NR=LR||CR;tr.exports=NR});var Xn=c((HW,bg)=>{var PR=9007199254740991,qR=/^(?:0|[1-9]\d*)$/;function MR(e,t){var r=typeof e;return t=t??PR,!!t&&(r=="number"||r!="symbol"&&qR.test(e))&&e>-1&&e%1==0&&e<t}bg.exports=MR});var jn=c((WW,Ig)=>{var FR=9007199254740991;function DR(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=FR}Ig.exports=DR});var Og=c((XW,Tg)=>{var GR=It(),UR=jn(),VR=pt(),kR="[object Arguments]",BR="[object Array]",HR="[object Boolean]",WR="[object Date]",XR="[object Error]",jR="[object Function]",zR="[object Map]",KR="[object Number]",YR="[object Object]",$R="[object RegExp]",QR="[object Set]",ZR="[object String]",JR="[object WeakMap]",eL="[object ArrayBuffer]",tL="[object DataView]",rL="[object Float32Array]",nL="[object Float64Array]",iL="[object Int8Array]",oL="[object Int16Array]",aL="[object Int32Array]",sL="[object Uint8Array]",uL="[object Uint8ClampedArray]",cL="[object Uint16Array]",lL="[object Uint32Array]",ve={};ve[rL]=ve[nL]=ve[iL]=ve[oL]=ve[aL]=ve[sL]=ve[uL]=ve[cL]=ve[lL]=!0;ve[kR]=ve[BR]=ve[eL]=ve[HR]=ve[tL]=ve[WR]=ve[XR]=ve[jR]=ve[zR]=ve[KR]=ve[YR]=ve[$R]=ve[QR]=ve[ZR]=ve[JR]=!1;function fL(e){return VR(e)&&UR(e.length)&&!!ve[GR(e)]}Tg.exports=fL});var Ag=c((jW,wg)=>{function dL(e){return function(t){return e(t)}}wg.exports=dL});var Sg=c((Hr,rr)=>{var pL=Uo(),xg=typeof Hr=="object"&&Hr&&!Hr.nodeType&&Hr,Wr=xg&&typeof rr=="object"&&rr&&!rr.nodeType&&rr,gL=Wr&&Wr.exports===xg,ga=gL&&pL.process,vL=function(){try{var e=Wr&&Wr.require&&Wr.require("util").types;return e||ga&&ga.binding&&ga.binding("util")}catch{}}();rr.exports=vL});var zn=c((zW,Lg)=>{var hL=Og(),EL=Ag(),Cg=Sg(),Rg=Cg&&Cg.isTypedArray,yL=Rg?EL(Rg):hL;Lg.exports=yL});var va=c((KW,Ng)=>{var mL=lg(),_L=kr(),bL=we(),IL=Wn(),TL=Xn(),OL=zn(),wL=Object.prototype,AL=wL.hasOwnProperty;function xL(e,t){var r=bL(e),n=!r&&_L(e),i=!r&&!n&&IL(e),o=!r&&!n&&!i&&OL(e),a=r||n||i||o,s=a?mL(e.length,String):[],u=s.length;for(var f in e)(t||AL.call(e,f))&&!(a&&(f=="length"||i&&(f=="offset"||f=="parent")||o&&(f=="buffer"||f=="byteLength"||f=="byteOffset")||TL(f,u)))&&s.push(f);return s}Ng.exports=xL});var Kn=c((YW,Pg)=>{var SL=Object.prototype;function CL(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||SL;return e===r}Pg.exports=CL});var Mg=c(($W,qg)=>{var RL=Vo(),LL=RL(Object.keys,Object);qg.exports=LL});var Yn=c((QW,Fg)=>{var NL=Kn(),PL=Mg(),qL=Object.prototype,ML=qL.hasOwnProperty;function FL(e){if(!NL(e))return PL(e);var t=[];for(var r in Object(e))ML.call(e,r)&&r!="constructor"&&t.push(r);return t}Fg.exports=FL});var qt=c((ZW,Dg)=>{var DL=oa(),GL=jn();function UL(e){return e!=null&&GL(e.length)&&!DL(e)}Dg.exports=UL});var Xr=c((JW,Gg)=>{var VL=va(),kL=Yn(),BL=qt();function HL(e){return BL(e)?VL(e):kL(e)}Gg.exports=HL});var Vg=c((eX,Ug)=>{var WL=fa(),XL=pa(),jL=Xr();function zL(e){return WL(e,jL,XL)}Ug.exports=zL});var Hg=c((tX,Bg)=>{var kg=Vg(),KL=1,YL=Object.prototype,$L=YL.hasOwnProperty;function QL(e,t,r,n,i,o){var a=r&KL,s=kg(e),u=s.length,f=kg(t),h=f.length;if(u!=h&&!a)return!1;for(var p=u;p--;){var d=s[p];if(!(a?d in t:$L.call(t,d)))return!1}var E=o.get(e),T=o.get(t);if(E&&T)return E==t&&T==e;var _=!0;o.set(e,t),o.set(t,e);for(var w=a;++p<u;){d=s[p];var m=e[d],C=t[d];if(n)var A=a?n(C,m,d,t,e,o):n(m,C,d,e,t,o);if(!(A===void 0?m===C||i(m,C,r,n,o):A)){_=!1;break}w||(w=d=="constructor")}if(_&&!w){var R=e.constructor,P=t.constructor;R!=P&&"constructor"in e&&"constructor"in t&&!(typeof R=="function"&&R instanceof R&&typeof P=="function"&&P instanceof P)&&(_=!1)}return o.delete(e),o.delete(t),_}Bg.exports=QL});var Xg=c((rX,Wg)=>{var ZL=Tt(),JL=$e(),eN=ZL(JL,"DataView");Wg.exports=eN});var zg=c((nX,jg)=>{var tN=Tt(),rN=$e(),nN=tN(rN,"Promise");jg.exports=nN});var Yg=c((iX,Kg)=>{var iN=Tt(),oN=$e(),aN=iN(oN,"Set");Kg.exports=aN});var ha=c((oX,$g)=>{var sN=Tt(),uN=$e(),cN=sN(uN,"WeakMap");$g.exports=cN});var $n=c((aX,nv)=>{var Ea=Xg(),ya=Vn(),ma=zg(),_a=Yg(),ba=ha(),rv=It(),nr=sa(),Qg="[object Map]",lN="[object Object]",Zg="[object Promise]",Jg="[object Set]",ev="[object WeakMap]",tv="[object DataView]",fN=nr(Ea),dN=nr(ya),pN=nr(ma),gN=nr(_a),vN=nr(ba),Mt=rv;(Ea&&Mt(new Ea(new ArrayBuffer(1)))!=tv||ya&&Mt(new ya)!=Qg||ma&&Mt(ma.resolve())!=Zg||_a&&Mt(new _a)!=Jg||ba&&Mt(new ba)!=ev)&&(Mt=function(e){var t=rv(e),r=t==lN?e.constructor:void 0,n=r?nr(r):"";if(n)switch(n){case fN:return tv;case dN:return Qg;case pN:return Zg;case gN:return Jg;case vN:return ev}return t});nv.exports=Mt});var fv=c((sX,lv)=>{var Ia=ua(),hN=ca(),EN=eg(),yN=Hg(),iv=$n(),ov=we(),av=Wn(),mN=zn(),_N=1,sv="[object Arguments]",uv="[object Array]",Qn="[object Object]",bN=Object.prototype,cv=bN.hasOwnProperty;function IN(e,t,r,n,i,o){var a=ov(e),s=ov(t),u=a?uv:iv(e),f=s?uv:iv(t);u=u==sv?Qn:u,f=f==sv?Qn:f;var h=u==Qn,p=f==Qn,d=u==f;if(d&&av(e)){if(!av(t))return!1;a=!0,h=!1}if(d&&!h)return o||(o=new Ia),a||mN(e)?hN(e,t,r,n,i,o):EN(e,t,u,r,n,i,o);if(!(r&_N)){var E=h&&cv.call(e,"__wrapped__"),T=p&&cv.call(t,"__wrapped__");if(E||T){var _=E?e.value():e,w=T?t.value():t;return o||(o=new Ia),i(_,w,r,n,o)}}return d?(o||(o=new Ia),yN(e,t,r,n,i,o)):!1}lv.exports=IN});var Ta=c((uX,gv)=>{var TN=fv(),dv=pt();function pv(e,t,r,n,i){return e===t?!0:e==null||t==null||!dv(e)&&!dv(t)?e!==e&&t!==t:TN(e,t,r,n,pv,i)}gv.exports=pv});var hv=c((cX,vv)=>{var ON=ua(),wN=Ta(),AN=1,xN=2;function SN(e,t,r,n){var i=r.length,o=i,a=!n;if(e==null)return!o;for(e=Object(e);i--;){var s=r[i];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<o;){s=r[i];var u=s[0],f=e[u],h=s[1];if(a&&s[2]){if(f===void 0&&!(u in e))return!1}else{var p=new ON;if(n)var d=n(f,h,u,e,t,p);if(!(d===void 0?wN(h,f,AN|xN,n,p):d))return!1}}return!0}vv.exports=SN});var Oa=c((lX,Ev)=>{var CN=st();function RN(e){return e===e&&!CN(e)}Ev.exports=RN});var mv=c((fX,yv)=>{var LN=Oa(),NN=Xr();function PN(e){for(var t=NN(e),r=t.length;r--;){var n=t[r],i=e[n];t[r]=[n,i,LN(i)]}return t}yv.exports=PN});var wa=c((dX,_v)=>{function qN(e,t){return function(r){return r==null?!1:r[e]===t&&(t!==void 0||e in Object(r))}}_v.exports=qN});var Iv=c((pX,bv)=>{var MN=hv(),FN=mv(),DN=wa();function GN(e){var t=FN(e);return t.length==1&&t[0][2]?DN(t[0][0],t[0][1]):function(r){return r===e||MN(r,e,t)}}bv.exports=GN});var jr=c((gX,Tv)=>{var UN=It(),VN=pt(),kN="[object Symbol]";function BN(e){return typeof e=="symbol"||VN(e)&&UN(e)==kN}Tv.exports=BN});var Zn=c((vX,Ov)=>{var HN=we(),WN=jr(),XN=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,jN=/^\w*$/;function zN(e,t){if(HN(e))return!1;var r=typeof e;return r=="number"||r=="symbol"||r=="boolean"||e==null||WN(e)?!0:jN.test(e)||!XN.test(e)||t!=null&&e in Object(t)}Ov.exports=zN});var xv=c((hX,Av)=>{var wv=kn(),KN="Expected a function";function Aa(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(KN);var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var a=e.apply(this,n);return r.cache=o.set(i,a)||o,a};return r.cache=new(Aa.Cache||wv),r}Aa.Cache=wv;Av.exports=Aa});var Cv=c((EX,Sv)=>{var YN=xv(),$N=500;function QN(e){var t=YN(e,function(n){return r.size===$N&&r.clear(),n}),r=t.cache;return t}Sv.exports=QN});var Lv=c((yX,Rv)=>{var ZN=Cv(),JN=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,eP=/\\(\\)?/g,tP=ZN(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(JN,function(r,n,i,o){t.push(i?o.replace(eP,"$1"):n||r)}),t});Rv.exports=tP});var xa=c((mX,Nv)=>{function rP(e,t){for(var r=-1,n=e==null?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i}Nv.exports=rP});var Gv=c((_X,Dv)=>{var Pv=zt(),nP=xa(),iP=we(),oP=jr(),aP=1/0,qv=Pv?Pv.prototype:void 0,Mv=qv?qv.toString:void 0;function Fv(e){if(typeof e=="string")return e;if(iP(e))return nP(e,Fv)+"";if(oP(e))return Mv?Mv.call(e):"";var t=e+"";return t=="0"&&1/e==-aP?"-0":t}Dv.exports=Fv});var Vv=c((bX,Uv)=>{var sP=Gv();function uP(e){return e==null?"":sP(e)}Uv.exports=uP});var zr=c((IX,kv)=>{var cP=we(),lP=Zn(),fP=Lv(),dP=Vv();function pP(e,t){return cP(e)?e:lP(e,t)?[e]:fP(dP(e))}kv.exports=pP});var ir=c((TX,Bv)=>{var gP=jr(),vP=1/0;function hP(e){if(typeof e=="string"||gP(e))return e;var t=e+"";return t=="0"&&1/e==-vP?"-0":t}Bv.exports=hP});var Jn=c((OX,Hv)=>{var EP=zr(),yP=ir();function mP(e,t){t=EP(t,e);for(var r=0,n=t.length;e!=null&&r<n;)e=e[yP(t[r++])];return r&&r==n?e:void 0}Hv.exports=mP});var ei=c((wX,Wv)=>{var _P=Jn();function bP(e,t,r){var n=e==null?void 0:_P(e,t);return n===void 0?r:n}Wv.exports=bP});var jv=c((AX,Xv)=>{function IP(e,t){return e!=null&&t in Object(e)}Xv.exports=IP});var Kv=c((xX,zv)=>{var TP=zr(),OP=kr(),wP=we(),AP=Xn(),xP=jn(),SP=ir();function CP(e,t,r){t=TP(t,e);for(var n=-1,i=t.length,o=!1;++n<i;){var a=SP(t[n]);if(!(o=e!=null&&r(e,a)))break;e=e[a]}return o||++n!=i?o:(i=e==null?0:e.length,!!i&&xP(i)&&AP(a,i)&&(wP(e)||OP(e)))}zv.exports=CP});var $v=c((SX,Yv)=>{var RP=jv(),LP=Kv();function NP(e,t){return e!=null&&LP(e,t,RP)}Yv.exports=NP});var Zv=c((CX,Qv)=>{var PP=Ta(),qP=ei(),MP=$v(),FP=Zn(),DP=Oa(),GP=wa(),UP=ir(),VP=1,kP=2;function BP(e,t){return FP(e)&&DP(t)?GP(UP(e),t):function(r){var n=qP(r,e);return n===void 0&&n===t?MP(r,e):PP(t,n,VP|kP)}}Qv.exports=BP});var ti=c((RX,Jv)=>{function HP(e){return e}Jv.exports=HP});var Sa=c((LX,eh)=>{function WP(e){return function(t){return t?.[e]}}eh.exports=WP});var rh=c((NX,th)=>{var XP=Jn();function jP(e){return function(t){return XP(t,e)}}th.exports=jP});var ih=c((PX,nh)=>{var zP=Sa(),KP=rh(),YP=Zn(),$P=ir();function QP(e){return YP(e)?zP($P(e)):KP(e)}nh.exports=QP});var Ot=c((qX,oh)=>{var ZP=Iv(),JP=Zv(),eq=ti(),tq=we(),rq=ih();function nq(e){return typeof e=="function"?e:e==null?eq:typeof e=="object"?tq(e)?JP(e[0],e[1]):ZP(e):rq(e)}oh.exports=nq});var Ca=c((MX,ah)=>{var iq=Ot(),oq=qt(),aq=Xr();function sq(e){return function(t,r,n){var i=Object(t);if(!oq(t)){var o=iq(r,3);t=aq(t),r=function(s){return o(i[s],s,i)}}var a=e(t,r,n);return a>-1?i[o?t[a]:a]:void 0}}ah.exports=sq});var Ra=c((FX,sh)=>{function uq(e,t,r,n){for(var i=e.length,o=r+(n?1:-1);n?o--:++o<i;)if(t(e[o],o,e))return o;return-1}sh.exports=uq});var ch=c((DX,uh)=>{var cq=/\s/;function lq(e){for(var t=e.length;t--&&cq.test(e.charAt(t)););return t}uh.exports=lq});var fh=c((GX,lh)=>{var fq=ch(),dq=/^\s+/;function pq(e){return e&&e.slice(0,fq(e)+1).replace(dq,"")}lh.exports=pq});var ri=c((UX,gh)=>{var gq=fh(),dh=st(),vq=jr(),ph=0/0,hq=/^[-+]0x[0-9a-f]+$/i,Eq=/^0b[01]+$/i,yq=/^0o[0-7]+$/i,mq=parseInt;function _q(e){if(typeof e=="number")return e;if(vq(e))return ph;if(dh(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=dh(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=gq(e);var r=Eq.test(e);return r||yq.test(e)?mq(e.slice(2),r?2:8):hq.test(e)?ph:+e}gh.exports=_q});var Eh=c((VX,hh)=>{var bq=ri(),vh=1/0,Iq=17976931348623157e292;function Tq(e){if(!e)return e===0?e:0;if(e=bq(e),e===vh||e===-vh){var t=e<0?-1:1;return t*Iq}return e===e?e:0}hh.exports=Tq});var La=c((kX,yh)=>{var Oq=Eh();function wq(e){var t=Oq(e),r=t%1;return t===t?r?t-r:t:0}yh.exports=wq});var _h=c((BX,mh)=>{var Aq=Ra(),xq=Ot(),Sq=La(),Cq=Math.max;function Rq(e,t,r){var n=e==null?0:e.length;if(!n)return-1;var i=r==null?0:Sq(r);return i<0&&(i=Cq(n+i,0)),Aq(e,xq(t,3),i)}mh.exports=Rq});var Na=c((HX,bh)=>{var Lq=Ca(),Nq=_h(),Pq=Lq(Nq);bh.exports=Pq});var Oh={};De(Oh,{ELEMENT_MATCHES:()=>qq,FLEX_PREFIXED:()=>Pa,IS_BROWSER_ENV:()=>Ze,TRANSFORM_PREFIXED:()=>wt,TRANSFORM_STYLE_PREFIXED:()=>ii,withBrowser:()=>ni});var Th,Ze,ni,qq,Pa,wt,Ih,ii,oi=he(()=>{"use strict";Th=le(Na()),Ze=typeof window<"u",ni=(e,t)=>Ze?e():t,qq=ni(()=>(0,Th.default)(["matches","matchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector","webkitMatchesSelector"],e=>e in Element.prototype)),Pa=ni(()=>{let e=document.createElement("i"),t=["flex","-webkit-flex","-ms-flexbox","-moz-box","-webkit-box"],r="";try{let{length:n}=t;for(let i=0;i<n;i++){let o=t[i];if(e.style.display=o,e.style.display===o)return o}return r}catch{return r}},"flex"),wt=ni(()=>{let e=document.createElement("i");if(e.style.transform==null){let t=["Webkit","Moz","ms"],r="Transform",{length:n}=t;for(let i=0;i<n;i++){let o=t[i]+r;if(e.style[o]!==void 0)return o}}return"transform"},"transform"),Ih=wt.split("transform")[0],ii=Ih?Ih+"TransformStyle":"transformStyle"});var qa=c((WX,Ch)=>{var Mq=4,Fq=.001,Dq=1e-7,Gq=10,Kr=11,ai=1/(Kr-1),Uq=typeof Float32Array=="function";function wh(e,t){return 1-3*t+3*e}function Ah(e,t){return 3*t-6*e}function xh(e){return 3*e}function si(e,t,r){return((wh(t,r)*e+Ah(t,r))*e+xh(t))*e}function Sh(e,t,r){return 3*wh(t,r)*e*e+2*Ah(t,r)*e+xh(t)}function Vq(e,t,r,n,i){var o,a,s=0;do a=t+(r-t)/2,o=si(a,n,i)-e,o>0?r=a:t=a;while(Math.abs(o)>Dq&&++s<Gq);return a}function kq(e,t,r,n){for(var i=0;i<Mq;++i){var o=Sh(t,r,n);if(o===0)return t;var a=si(t,r,n)-e;t-=a/o}return t}Ch.exports=function(t,r,n,i){if(!(0<=t&&t<=1&&0<=n&&n<=1))throw new Error("bezier x values must be in [0, 1] range");var o=Uq?new Float32Array(Kr):new Array(Kr);if(t!==r||n!==i)for(var a=0;a<Kr;++a)o[a]=si(a*ai,t,n);function s(u){for(var f=0,h=1,p=Kr-1;h!==p&&o[h]<=u;++h)f+=ai;--h;var d=(u-o[h])/(o[h+1]-o[h]),E=f+d*ai,T=Sh(E,t,n);return T>=Fq?kq(u,E,t,n):T===0?E:Vq(u,f,f+ai,t,n)}return function(f){return t===r&&n===i?f:f===0?0:f===1?1:si(s(f),r,i)}}});var $r={};De($r,{bounce:()=>TM,bouncePast:()=>OM,ease:()=>Bq,easeIn:()=>Hq,easeInOut:()=>Xq,easeOut:()=>Wq,inBack:()=>gM,inCirc:()=>lM,inCubic:()=>Yq,inElastic:()=>EM,inExpo:()=>sM,inOutBack:()=>hM,inOutCirc:()=>dM,inOutCubic:()=>Qq,inOutElastic:()=>mM,inOutExpo:()=>cM,inOutQuad:()=>Kq,inOutQuart:()=>eM,inOutQuint:()=>nM,inOutSine:()=>aM,inQuad:()=>jq,inQuart:()=>Zq,inQuint:()=>tM,inSine:()=>iM,outBack:()=>vM,outBounce:()=>pM,outCirc:()=>fM,outCubic:()=>$q,outElastic:()=>yM,outExpo:()=>uM,outQuad:()=>zq,outQuart:()=>Jq,outQuint:()=>rM,outSine:()=>oM,swingFrom:()=>bM,swingFromTo:()=>_M,swingTo:()=>IM});function jq(e){return Math.pow(e,2)}function zq(e){return-(Math.pow(e-1,2)-1)}function Kq(e){return(e/=.5)<1?.5*Math.pow(e,2):-.5*((e-=2)*e-2)}function Yq(e){return Math.pow(e,3)}function $q(e){return Math.pow(e-1,3)+1}function Qq(e){return(e/=.5)<1?.5*Math.pow(e,3):.5*(Math.pow(e-2,3)+2)}function Zq(e){return Math.pow(e,4)}function Jq(e){return-(Math.pow(e-1,4)-1)}function eM(e){return(e/=.5)<1?.5*Math.pow(e,4):-.5*((e-=2)*Math.pow(e,3)-2)}function tM(e){return Math.pow(e,5)}function rM(e){return Math.pow(e-1,5)+1}function nM(e){return(e/=.5)<1?.5*Math.pow(e,5):.5*(Math.pow(e-2,5)+2)}function iM(e){return-Math.cos(e*(Math.PI/2))+1}function oM(e){return Math.sin(e*(Math.PI/2))}function aM(e){return-.5*(Math.cos(Math.PI*e)-1)}function sM(e){return e===0?0:Math.pow(2,10*(e-1))}function uM(e){return e===1?1:-Math.pow(2,-10*e)+1}function cM(e){return e===0?0:e===1?1:(e/=.5)<1?.5*Math.pow(2,10*(e-1)):.5*(-Math.pow(2,-10*--e)+2)}function lM(e){return-(Math.sqrt(1-e*e)-1)}function fM(e){return Math.sqrt(1-Math.pow(e-1,2))}function dM(e){return(e/=.5)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1)}function pM(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375}function gM(e){let t=gt;return e*e*((t+1)*e-t)}function vM(e){let t=gt;return(e-=1)*e*((t+1)*e+t)+1}function hM(e){let t=gt;return(e/=.5)<1?.5*(e*e*(((t*=1.525)+1)*e-t)):.5*((e-=2)*e*(((t*=1.525)+1)*e+t)+2)}function EM(e){let t=gt,r=0,n=1;return e===0?0:e===1?1:(r||(r=.3),n<1?(n=1,t=r/4):t=r/(2*Math.PI)*Math.asin(1/n),-(n*Math.pow(2,10*(e-=1))*Math.sin((e-t)*(2*Math.PI)/r)))}function yM(e){let t=gt,r=0,n=1;return e===0?0:e===1?1:(r||(r=.3),n<1?(n=1,t=r/4):t=r/(2*Math.PI)*Math.asin(1/n),n*Math.pow(2,-10*e)*Math.sin((e-t)*(2*Math.PI)/r)+1)}function mM(e){let t=gt,r=0,n=1;return e===0?0:(e/=1/2)===2?1:(r||(r=.3*1.5),n<1?(n=1,t=r/4):t=r/(2*Math.PI)*Math.asin(1/n),e<1?-.5*(n*Math.pow(2,10*(e-=1))*Math.sin((e-t)*(2*Math.PI)/r)):n*Math.pow(2,-10*(e-=1))*Math.sin((e-t)*(2*Math.PI)/r)*.5+1)}function _M(e){let t=gt;return(e/=.5)<1?.5*(e*e*(((t*=1.525)+1)*e-t)):.5*((e-=2)*e*(((t*=1.525)+1)*e+t)+2)}function bM(e){let t=gt;return e*e*((t+1)*e-t)}function IM(e){let t=gt;return(e-=1)*e*((t+1)*e+t)+1}function TM(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375}function OM(e){return e<1/2.75?7.5625*e*e:e<2/2.75?2-(7.5625*(e-=1.5/2.75)*e+.75):e<2.5/2.75?2-(7.5625*(e-=2.25/2.75)*e+.9375):2-(7.5625*(e-=2.625/2.75)*e+.984375)}var Yr,gt,Bq,Hq,Wq,Xq,Ma=he(()=>{"use strict";Yr=le(qa()),gt=1.70158,Bq=(0,Yr.default)(.25,.1,.25,1),Hq=(0,Yr.default)(.42,0,1,1),Wq=(0,Yr.default)(0,0,.58,1),Xq=(0,Yr.default)(.42,0,.58,1)});var Lh={};De(Lh,{applyEasing:()=>AM,createBezierEasing:()=>wM,optimizeFloat:()=>Qr});function Qr(e,t=5,r=10){let n=Math.pow(r,t),i=Number(Math.round(e*n)/n);return Math.abs(i)>1e-4?i:0}function wM(e){return(0,Rh.default)(...e)}function AM(e,t,r){return t===0?0:t===1?1:Qr(r?t>0?r(t):t:t>0&&e&&$r[e]?$r[e](t):t)}var Rh,Fa=he(()=>{"use strict";Ma();Rh=le(qa())});var qh={};De(qh,{createElementState:()=>Ph,ixElements:()=>VM,mergeActionState:()=>Da});function Ph(e,t,r,n,i){let o=r===xM?(0,or.getIn)(i,["config","target","objectId"]):null;return(0,or.mergeIn)(e,[n],{id:n,ref:t,refId:o,refType:r})}function Da(e,t,r,n,i){let o=BM(i);return(0,or.mergeIn)(e,[t,UM,r],n,o)}function BM(e){let{config:t}=e;return kM.reduce((r,n)=>{let i=n[0],o=n[1],a=t[i],s=t[o];return a!=null&&s!=null&&(r[o]=s),r},{})}var or,jX,xM,zX,SM,CM,RM,LM,NM,PM,qM,MM,FM,DM,GM,Nh,UM,VM,kM,Mh=he(()=>{"use strict";or=le($t());Ve();({HTML_ELEMENT:jX,PLAIN_OBJECT:xM,ABSTRACT_NODE:zX,CONFIG_X_VALUE:SM,CONFIG_Y_VALUE:CM,CONFIG_Z_VALUE:RM,CONFIG_VALUE:LM,CONFIG_X_UNIT:NM,CONFIG_Y_UNIT:PM,CONFIG_Z_UNIT:qM,CONFIG_UNIT:MM}=Re),{IX2_SESSION_STOPPED:FM,IX2_INSTANCE_ADDED:DM,IX2_ELEMENT_STATE_CHANGED:GM}=Te,Nh={},UM="refState",VM=(e=Nh,t={})=>{switch(t.type){case FM:return Nh;case DM:{let{elementId:r,element:n,origin:i,actionItem:o,refType:a}=t.payload,{actionTypeId:s}=o,u=e;return(0,or.getIn)(u,[r,n])!==n&&(u=Ph(u,n,a,r,o)),Da(u,r,s,i,o)}case GM:{let{elementId:r,actionTypeId:n,current:i,actionItem:o}=t.payload;return Da(e,r,n,i,o)}default:return e}};kM=[[SM,NM],[CM,PM],[RM,qM],[LM,MM]]});var Fh=c(Ae=>{"use strict";Object.defineProperty(Ae,"__esModule",{value:!0});Ae.renderPlugin=Ae.getPluginOrigin=Ae.getPluginDuration=Ae.getPluginDestination=Ae.getPluginConfig=Ae.createPluginInstance=Ae.clearPlugin=void 0;var HM=e=>e.value;Ae.getPluginConfig=HM;var WM=(e,t)=>{if(t.config.duration!=="auto")return null;let r=parseFloat(e.getAttribute("data-duration"));return r>0?r*1e3:parseFloat(e.getAttribute("data-default-duration"))*1e3};Ae.getPluginDuration=WM;var XM=e=>e||{value:0};Ae.getPluginOrigin=XM;var jM=e=>({value:e.value});Ae.getPluginDestination=jM;var zM=e=>{let t=window.Webflow.require("lottie").createInstance(e);return t.stop(),t.setSubframe(!0),t};Ae.createPluginInstance=zM;var KM=(e,t,r)=>{if(!e)return;let n=t[r.actionTypeId].value/100;e.goToFrame(e.frames*n)};Ae.renderPlugin=KM;var YM=e=>{window.Webflow.require("lottie").createInstance(e).stop()};Ae.clearPlugin=YM});var Gh=c(xe=>{"use strict";Object.defineProperty(xe,"__esModule",{value:!0});xe.renderPlugin=xe.getPluginOrigin=xe.getPluginDuration=xe.getPluginDestination=xe.getPluginConfig=xe.createPluginInstance=xe.clearPlugin=void 0;var $M=e=>document.querySelector(`[data-w-id="${e}"]`),QM=()=>window.Webflow.require("spline"),ZM=(e,t)=>e.filter(r=>!t.includes(r)),JM=(e,t)=>e.value[t];xe.getPluginConfig=JM;var eF=()=>null;xe.getPluginDuration=eF;var Dh=Object.freeze({positionX:0,positionY:0,positionZ:0,rotationX:0,rotationY:0,rotationZ:0,scaleX:1,scaleY:1,scaleZ:1}),tF=(e,t)=>{let r=t.config.value,n=Object.keys(r);if(e){let o=Object.keys(e),a=ZM(n,o);return a.length?a.reduce((u,f)=>(u[f]=Dh[f],u),e):e}return n.reduce((o,a)=>(o[a]=Dh[a],o),{})};xe.getPluginOrigin=tF;var rF=e=>e.value;xe.getPluginDestination=rF;var nF=(e,t)=>{var r;let n=t==null||(r=t.config)===null||r===void 0||(r=r.target)===null||r===void 0?void 0:r.pluginElement;return n?$M(n):null};xe.createPluginInstance=nF;var iF=(e,t,r)=>{let n=QM(),i=n.getInstance(e),o=r.config.target.objectId,a=s=>{if(!s)throw new Error("Invalid spline app passed to renderSpline");let u=o&&s.findObjectById(o);if(!u)return;let{PLUGIN_SPLINE:f}=t;f.positionX!=null&&(u.position.x=f.positionX),f.positionY!=null&&(u.position.y=f.positionY),f.positionZ!=null&&(u.position.z=f.positionZ),f.rotationX!=null&&(u.rotation.x=f.rotationX),f.rotationY!=null&&(u.rotation.y=f.rotationY),f.rotationZ!=null&&(u.rotation.z=f.rotationZ),f.scaleX!=null&&(u.scale.x=f.scaleX),f.scaleY!=null&&(u.scale.y=f.scaleY),f.scaleZ!=null&&(u.scale.z=f.scaleZ)};i?a(i.spline):n.setLoadHandler(e,a)};xe.renderPlugin=iF;var oF=()=>null;xe.clearPlugin=oF});var Ua=c(Ga=>{"use strict";Object.defineProperty(Ga,"__esModule",{value:!0});Ga.normalizeColor=aF;var Uh={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aqua:"#00FFFF",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",bisque:"#FFE4C4",black:"#000000",blanchedalmond:"#FFEBCD",blue:"#0000FF",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#00FFFF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgreen:"#006400",darkgrey:"#A9A9A9",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",fuchsia:"#FF00FF",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",gray:"#808080",green:"#008000",greenyellow:"#ADFF2F",grey:"#808080",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgray:"#D3D3D3",lightgreen:"#90EE90",lightgrey:"#D3D3D3",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",lime:"#00FF00",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#FF00FF",maroon:"#800000",mediumaquamarine:"#66CDAA",mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",navy:"#000080",oldlace:"#FDF5E6",olive:"#808000",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",purple:"#800080",rebeccapurple:"#663399",red:"#FF0000",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",silver:"#C0C0C0",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",teal:"#008080",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",white:"#FFFFFF",whitesmoke:"#F5F5F5",yellow:"#FFFF00",yellowgreen:"#9ACD32"};function aF(e){let t,r,n,i=1,o=e.replace(/\s/g,"").toLowerCase(),s=(typeof Uh[o]=="string"?Uh[o].toLowerCase():null)||o;if(s.startsWith("#")){let u=s.substring(1);u.length===3?(t=parseInt(u[0]+u[0],16),r=parseInt(u[1]+u[1],16),n=parseInt(u[2]+u[2],16)):u.length===6&&(t=parseInt(u.substring(0,2),16),r=parseInt(u.substring(2,4),16),n=parseInt(u.substring(4,6),16))}else if(s.startsWith("rgba")){let u=s.match(/rgba\(([^)]+)\)/)[1].split(",");t=parseInt(u[0],10),r=parseInt(u[1],10),n=parseInt(u[2],10),i=parseFloat(u[3])}else if(s.startsWith("rgb")){let u=s.match(/rgb\(([^)]+)\)/)[1].split(",");t=parseInt(u[0],10),r=parseInt(u[1],10),n=parseInt(u[2],10)}else if(s.startsWith("hsla")){let u=s.match(/hsla\(([^)]+)\)/)[1].split(","),f=parseFloat(u[0]),h=parseFloat(u[1].replace("%",""))/100,p=parseFloat(u[2].replace("%",""))/100;i=parseFloat(u[3]);let d=(1-Math.abs(2*p-1))*h,E=d*(1-Math.abs(f/60%2-1)),T=p-d/2,_,w,m;f>=0&&f<60?(_=d,w=E,m=0):f>=60&&f<120?(_=E,w=d,m=0):f>=120&&f<180?(_=0,w=d,m=E):f>=180&&f<240?(_=0,w=E,m=d):f>=240&&f<300?(_=E,w=0,m=d):(_=d,w=0,m=E),t=Math.round((_+T)*255),r=Math.round((w+T)*255),n=Math.round((m+T)*255)}else if(s.startsWith("hsl")){let u=s.match(/hsl\(([^)]+)\)/)[1].split(","),f=parseFloat(u[0]),h=parseFloat(u[1].replace("%",""))/100,p=parseFloat(u[2].replace("%",""))/100,d=(1-Math.abs(2*p-1))*h,E=d*(1-Math.abs(f/60%2-1)),T=p-d/2,_,w,m;f>=0&&f<60?(_=d,w=E,m=0):f>=60&&f<120?(_=E,w=d,m=0):f>=120&&f<180?(_=0,w=d,m=E):f>=180&&f<240?(_=0,w=E,m=d):f>=240&&f<300?(_=E,w=0,m=d):(_=d,w=0,m=E),t=Math.round((_+T)*255),r=Math.round((w+T)*255),n=Math.round((m+T)*255)}if(Number.isNaN(t)||Number.isNaN(r)||Number.isNaN(n))throw new Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`);return{red:t,green:r,blue:n,alpha:i}}});var Vh=c(Se=>{"use strict";Object.defineProperty(Se,"__esModule",{value:!0});Se.renderPlugin=Se.getPluginOrigin=Se.getPluginDuration=Se.getPluginDestination=Se.getPluginConfig=Se.createPluginInstance=Se.clearPlugin=void 0;var sF=Ua(),uF=(e,t)=>e.value[t];Se.getPluginConfig=uF;var cF=()=>null;Se.getPluginDuration=cF;var lF=(e,t)=>{if(e)return e;let r=t.config.value,n=t.config.target.objectId,i=getComputedStyle(document.documentElement).getPropertyValue(n);if(r.size!=null)return{size:parseInt(i,10)};if(r.red!=null&&r.green!=null&&r.blue!=null)return(0,sF.normalizeColor)(i)};Se.getPluginOrigin=lF;var fF=e=>e.value;Se.getPluginDestination=fF;var dF=()=>null;Se.createPluginInstance=dF;var pF=(e,t,r)=>{let n=r.config.target.objectId,i=r.config.value.unit,{PLUGIN_VARIABLE:o}=t,{size:a,red:s,green:u,blue:f,alpha:h}=o,p;a!=null&&(p=a+i),s!=null&&f!=null&&u!=null&&h!=null&&(p=`rgba(${s}, ${u}, ${f}, ${h})`),p!=null&&document.documentElement.style.setProperty(n,p)};Se.renderPlugin=pF;var gF=(e,t)=>{let r=t.config.target.objectId;document.documentElement.style.removeProperty(r)};Se.clearPlugin=gF});var kh=c(ui=>{"use strict";var ka=mn().default;Object.defineProperty(ui,"__esModule",{value:!0});ui.pluginMethodMap=void 0;var Va=(Ve(),rt(zf)),vF=ka(Fh()),hF=ka(Gh()),EF=ka(Vh()),ZX=ui.pluginMethodMap=new Map([[Va.ActionTypeConsts.PLUGIN_LOTTIE,{...vF}],[Va.ActionTypeConsts.PLUGIN_SPLINE,{...hF}],[Va.ActionTypeConsts.PLUGIN_VARIABLE,{...EF}]])});var Bh={};De(Bh,{clearPlugin:()=>za,createPluginInstance:()=>mF,getPluginConfig:()=>Ha,getPluginDestination:()=>Xa,getPluginDuration:()=>yF,getPluginOrigin:()=>Wa,isPluginType:()=>Ft,renderPlugin:()=>ja});function Ft(e){return Ba.pluginMethodMap.has(e)}var Ba,Dt,Ha,Wa,yF,Xa,mF,ja,za,Ka=he(()=>{"use strict";oi();Ba=le(kh());Dt=e=>t=>{if(!Ze)return()=>null;let r=Ba.pluginMethodMap.get(t);if(!r)throw new Error(`IX2 no plugin configured for: ${t}`);let n=r[e];if(!n)throw new Error(`IX2 invalid plugin method: ${e}`);return n},Ha=Dt("getPluginConfig"),Wa=Dt("getPluginOrigin"),yF=Dt("getPluginDuration"),Xa=Dt("getPluginDestination"),mF=Dt("createPluginInstance"),ja=Dt("renderPlugin"),za=Dt("clearPlugin")});var Wh=c((tj,Hh)=>{function _F(e,t){return e==null||e!==e?t:e}Hh.exports=_F});var jh=c((rj,Xh)=>{function bF(e,t,r,n){var i=-1,o=e==null?0:e.length;for(n&&o&&(r=e[++i]);++i<o;)r=t(r,e[i],i,e);return r}Xh.exports=bF});var Kh=c((nj,zh)=>{function IF(e){return function(t,r,n){for(var i=-1,o=Object(t),a=n(t),s=a.length;s--;){var u=a[e?s:++i];if(r(o[u],u,o)===!1)break}return t}}zh.exports=IF});var $h=c((ij,Yh)=>{var TF=Kh(),OF=TF();Yh.exports=OF});var Ya=c((oj,Qh)=>{var wF=$h(),AF=Xr();function xF(e,t){return e&&wF(e,t,AF)}Qh.exports=xF});var Jh=c((aj,Zh)=>{var SF=qt();function CF(e,t){return function(r,n){if(r==null)return r;if(!SF(r))return e(r,n);for(var i=r.length,o=t?i:-1,a=Object(r);(t?o--:++o<i)&&n(a[o],o,a)!==!1;);return r}}Zh.exports=CF});var $a=c((sj,eE)=>{var RF=Ya(),LF=Jh(),NF=LF(RF);eE.exports=NF});var rE=c((uj,tE)=>{function PF(e,t,r,n,i){return i(e,function(o,a,s){r=n?(n=!1,o):t(r,o,a,s)}),r}tE.exports=PF});var iE=c((cj,nE)=>{var qF=jh(),MF=$a(),FF=Ot(),DF=rE(),GF=we();function UF(e,t,r){var n=GF(e)?qF:DF,i=arguments.length<3;return n(e,FF(t,4),r,i,MF)}nE.exports=UF});var aE=c((lj,oE)=>{var VF=Ra(),kF=Ot(),BF=La(),HF=Math.max,WF=Math.min;function XF(e,t,r){var n=e==null?0:e.length;if(!n)return-1;var i=n-1;return r!==void 0&&(i=BF(r),i=r<0?HF(n+i,0):WF(i,n-1)),VF(e,kF(t,3),i,!0)}oE.exports=XF});var uE=c((fj,sE)=>{var jF=Ca(),zF=aE(),KF=jF(zF);sE.exports=KF});function cE(e,t){return e===t?e!==0||t!==0||1/e===1/t:e!==e&&t!==t}function YF(e,t){if(cE(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;let r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(let i=0;i<r.length;i++)if(!Object.hasOwn(t,r[i])||!cE(e[r[i]],t[r[i]]))return!1;return!0}var Qa,lE=he(()=>{"use strict";Qa=YF});var SE={};De(SE,{cleanupHTMLElement:()=>jD,clearAllStyles:()=>XD,clearObjectCache:()=>dD,getActionListProgress:()=>KD,getAffectedElements:()=>rs,getComputedStyle:()=>_D,getDestinationValues:()=>xD,getElementId:()=>hD,getInstanceId:()=>gD,getInstanceOrigin:()=>TD,getItemConfigByKey:()=>AD,getMaxDurationItemIndex:()=>xE,getNamespacedParameterId:()=>QD,getRenderType:()=>OE,getStyleProp:()=>SD,mediaQueriesEqual:()=>JD,observeStore:()=>mD,reduceListToGroup:()=>YD,reifyState:()=>ED,renderHTMLElement:()=>CD,shallowEqual:()=>Qa,shouldAllowMediaQuery:()=>ZD,shouldNamespaceEventParameter:()=>$D,stringifyTarget:()=>e1});function dD(){ci.clear()}function gD(){return"i"+pD++}function hD(e,t){for(let r in e){let n=e[r];if(n&&n.ref===t)return n.id}return"e"+vD++}function ED({events:e,actionLists:t,site:r}={}){let n=(0,pi.default)(e,(a,s)=>{let{eventTypeId:u}=s;return a[u]||(a[u]={}),a[u][s.id]=s,a},{}),i=r&&r.mediaQueries,o=[];return i?o=i.map(a=>a.key):(i=[],console.warn("IX2 missing mediaQueries in site data")),{ixData:{events:e,actionLists:t,eventTypeMap:n,mediaQueries:i,mediaQueryKeys:o}}}function mD({store:e,select:t,onChange:r,comparator:n=yD}){let{getState:i,subscribe:o}=e,a=o(u),s=t(i());function u(){let f=t(i());if(f==null){a();return}n(f,s)||(s=f,r(s,e))}return a}function pE(e){let t=typeof e;if(t==="string")return{id:e};if(e!=null&&t==="object"){let{id:r,objectId:n,selector:i,selectorGuids:o,appliesTo:a,useEventTarget:s}=e;return{id:r,objectId:n,selector:i,selectorGuids:o,appliesTo:a,useEventTarget:s}}return{}}function rs({config:e,event:t,eventTarget:r,elementRoot:n,elementApi:i}){if(!i)throw new Error("IX2 missing elementApi");let{targets:o}=e;if(Array.isArray(o)&&o.length>0)return o.reduce((M,O)=>M.concat(rs({config:{target:O},event:t,eventTarget:r,elementRoot:n,elementApi:i})),[]);let{getValidDocument:a,getQuerySelector:s,queryDocument:u,getChildElements:f,getSiblingElements:h,matchSelector:p,elementContains:d,isSiblingNode:E}=i,{target:T}=e;if(!T)return[];let{id:_,objectId:w,selector:m,selectorGuids:C,appliesTo:A,useEventTarget:R}=pE(T);if(w)return[ci.has(w)?ci.get(w):ci.set(w,{}).get(w)];if(A===ta.PAGE){let M=a(_);return M?[M]:[]}let N=(t?.action?.config?.affectedElements??{})[_||m]||{},H=!!(N.id||N.selector),z,$,J,te=t&&s(pE(t.target));if(H?(z=N.limitAffectedElements,$=te,J=s(N)):$=J=s({id:_,selector:m,selectorGuids:C}),t&&R){let M=r&&(J||R===!0)?[r]:u(te);if(J){if(R===cD)return u(J).filter(O=>M.some(q=>d(O,q)));if(R===fE)return u(J).filter(O=>M.some(q=>d(q,O)));if(R===dE)return u(J).filter(O=>M.some(q=>E(q,O)))}return M}return $==null||J==null?[]:Ze&&n?u(J).filter(M=>n.contains(M)):z===fE?u($,J):z===uD?f(u($)).filter(p(J)):z===dE?h(u($)).filter(p(J)):u(J)}function _D({element:e,actionItem:t}){if(!Ze)return{};let{actionTypeId:r}=t;switch(r){case lr:case fr:case dr:case pr:case vi:return window.getComputedStyle(e);default:return{}}}function TD(e,t={},r={},n,i){let{getStyle:o}=i,{actionTypeId:a}=n;if(Ft(a))return Wa(a)(t[a],n);switch(n.actionTypeId){case sr:case ur:case cr:case tn:return t[n.actionTypeId]||ns[n.actionTypeId];case rn:return bD(t[n.actionTypeId],n.config.filters);case nn:return ID(t[n.actionTypeId],n.config.fontVariations);case bE:return{value:(0,vt.default)(parseFloat(o(e,fi)),1)};case lr:{let s=o(e,ut),u=o(e,ct),f,h;return n.config.widthUnit===At?f=gE.test(s)?parseFloat(s):parseFloat(r.width):f=(0,vt.default)(parseFloat(s),parseFloat(r.width)),n.config.heightUnit===At?h=gE.test(u)?parseFloat(u):parseFloat(r.height):h=(0,vt.default)(parseFloat(u),parseFloat(r.height)),{widthValue:f,heightValue:h}}case fr:case dr:case pr:return BD({element:e,actionTypeId:n.actionTypeId,computedStyle:r,getStyle:o});case vi:return{value:(0,vt.default)(o(e,di),r.display)};case fD:return t[n.actionTypeId]||{value:0};default:return}}function xD({element:e,actionItem:t,elementApi:r}){if(Ft(t.actionTypeId))return Xa(t.actionTypeId)(t.config);switch(t.actionTypeId){case sr:case ur:case cr:case tn:{let{xValue:n,yValue:i,zValue:o}=t.config;return{xValue:n,yValue:i,zValue:o}}case lr:{let{getStyle:n,setStyle:i,getProperty:o}=r,{widthUnit:a,heightUnit:s}=t.config,{widthValue:u,heightValue:f}=t.config;if(!Ze)return{widthValue:u,heightValue:f};if(a===At){let h=n(e,ut);i(e,ut,""),u=o(e,"offsetWidth"),i(e,ut,h)}if(s===At){let h=n(e,ct);i(e,ct,""),f=o(e,"offsetHeight"),i(e,ct,h)}return{widthValue:u,heightValue:f}}case fr:case dr:case pr:{let{rValue:n,gValue:i,bValue:o,aValue:a,globalSwatchId:s}=t.config;if(s&&s.startsWith("--")){let{getStyle:u}=r,f=u(e,s),h=(0,EE.normalizeColor)(f);return{rValue:h.red,gValue:h.green,bValue:h.blue,aValue:h.alpha}}return{rValue:n,gValue:i,bValue:o,aValue:a}}case rn:return t.config.filters.reduce(OD,{});case nn:return t.config.fontVariations.reduce(wD,{});default:{let{value:n}=t.config;return{value:n}}}}function OE(e){if(/^TRANSFORM_/.test(e))return mE;if(/^STYLE_/.test(e))return es;if(/^GENERAL_/.test(e))return Ja;if(/^PLUGIN_/.test(e))return _E}function SD(e,t){return e===es?t.replace("STYLE_","").toLowerCase():null}function CD(e,t,r,n,i,o,a,s,u){switch(s){case mE:return qD(e,t,r,i,a);case es:return HD(e,t,r,i,o,a);case Ja:return WD(e,i,a);case _E:{let{actionTypeId:f}=i;if(Ft(f))return ja(f)(u,t,i)}}}function qD(e,t,r,n,i){let o=PD.map(s=>{let u=ns[s],{xValue:f=u.xValue,yValue:h=u.yValue,zValue:p=u.zValue,xUnit:d="",yUnit:E="",zUnit:T=""}=t[s]||{};switch(s){case sr:return`${ZF}(${f}${d}, ${h}${E}, ${p}${T})`;case ur:return`${JF}(${f}${d}, ${h}${E}, ${p}${T})`;case cr:return`${eD}(${f}${d}) ${tD}(${h}${E}) ${rD}(${p}${T})`;case tn:return`${nD}(${f}${d}, ${h}${E})`;default:return""}}).join(" "),{setStyle:a}=i;Gt(e,wt,i),a(e,wt,o),DD(n,r)&&a(e,ii,iD)}function MD(e,t,r,n){let i=(0,pi.default)(t,(a,s,u)=>`${a} ${u}(${s}${ND(u,r)})`,""),{setStyle:o}=n;Gt(e,Zr,n),o(e,Zr,i)}function FD(e,t,r,n){let i=(0,pi.default)(t,(a,s,u)=>(a.push(`"${u}" ${s}`),a),[]).join(", "),{setStyle:o}=n;Gt(e,Jr,n),o(e,Jr,i)}function DD({actionTypeId:e},{xValue:t,yValue:r,zValue:n}){return e===sr&&n!==void 0||e===ur&&n!==void 0||e===cr&&(t!==void 0||r!==void 0)}function kD(e,t){let r=e.exec(t);return r?r[1]:""}function BD({element:e,actionTypeId:t,computedStyle:r,getStyle:n}){let i=ts[t],o=n(e,i),a=UD.test(o)?o:r[i],s=kD(VD,a).split(en);return{rValue:(0,vt.default)(parseInt(s[0],10),255),gValue:(0,vt.default)(parseInt(s[1],10),255),bValue:(0,vt.default)(parseInt(s[2],10),255),aValue:(0,vt.default)(parseFloat(s[3]),1)}}function HD(e,t,r,n,i,o){let{setStyle:a}=o;switch(n.actionTypeId){case lr:{let{widthUnit:s="",heightUnit:u=""}=n.config,{widthValue:f,heightValue:h}=r;f!==void 0&&(s===At&&(s="px"),Gt(e,ut,o),a(e,ut,f+s)),h!==void 0&&(u===At&&(u="px"),Gt(e,ct,o),a(e,ct,h+u));break}case rn:{MD(e,r,n.config,o);break}case nn:{FD(e,r,n.config,o);break}case fr:case dr:case pr:{let s=ts[n.actionTypeId],u=Math.round(r.rValue),f=Math.round(r.gValue),h=Math.round(r.bValue),p=r.aValue;Gt(e,s,o),a(e,s,p>=1?`rgb(${u},${f},${h})`:`rgba(${u},${f},${h},${p})`);break}default:{let{unit:s=""}=n.config;Gt(e,i,o),a(e,i,r.value+s);break}}}function WD(e,t,r){let{setStyle:n}=r;switch(t.actionTypeId){case vi:{let{value:i}=t.config;i===oD&&Ze?n(e,di,Pa):n(e,di,i);return}}}function Gt(e,t,r){if(!Ze)return;let n=TE[t];if(!n)return;let{getStyle:i,setStyle:o}=r,a=i(e,ar);if(!a){o(e,ar,n);return}let s=a.split(en).map(IE);s.indexOf(n)===-1&&o(e,ar,s.concat(n).join(en))}function wE(e,t,r){if(!Ze)return;let n=TE[t];if(!n)return;let{getStyle:i,setStyle:o}=r,a=i(e,ar);!a||a.indexOf(n)===-1||o(e,ar,a.split(en).map(IE).filter(s=>s!==n).join(en))}function XD({store:e,elementApi:t}){let{ixData:r}=e.getState(),{events:n={},actionLists:i={}}=r;Object.keys(n).forEach(o=>{let a=n[o],{config:s}=a.action,{actionListId:u}=s,f=i[u];f&&vE({actionList:f,event:a,elementApi:t})}),Object.keys(i).forEach(o=>{vE({actionList:i[o],elementApi:t})})}function vE({actionList:e={},event:t,elementApi:r}){let{actionItemGroups:n,continuousParameterGroups:i}=e;n&&n.forEach(o=>{hE({actionGroup:o,event:t,elementApi:r})}),i&&i.forEach(o=>{let{continuousActionGroups:a}=o;a.forEach(s=>{hE({actionGroup:s,event:t,elementApi:r})})})}function hE({actionGroup:e,event:t,elementApi:r}){let{actionItems:n}=e;n.forEach(i=>{let{actionTypeId:o,config:a}=i,s;Ft(o)?s=u=>za(o)(u,i):s=AE({effect:zD,actionTypeId:o,elementApi:r}),rs({config:a,event:t,elementApi:r}).forEach(s)})}function jD(e,t,r){let{setStyle:n,getStyle:i}=r,{actionTypeId:o}=t;if(o===lr){let{config:a}=t;a.widthUnit===At&&n(e,ut,""),a.heightUnit===At&&n(e,ct,"")}i(e,ar)&&AE({effect:wE,actionTypeId:o,elementApi:r})(e)}function zD(e,t,r){let{setStyle:n}=r;wE(e,t,r),n(e,t,""),t===wt&&n(e,ii,"")}function xE(e){let t=0,r=0;return e.forEach((n,i)=>{let{config:o}=n,a=o.delay+o.duration;a>=t&&(t=a,r=i)}),r}function KD(e,t){let{actionItemGroups:r,useFirstGroupAsInitialState:n}=e,{actionItem:i,verboseTimeElapsed:o=0}=t,a=0,s=0;return r.forEach((u,f)=>{if(n&&f===0)return;let{actionItems:h}=u,p=h[xE(h)],{config:d,actionTypeId:E}=p;i.id===p.id&&(s=a+o);let T=OE(E)===Ja?0:d.duration;a+=d.delay+T}),a>0?Qr(s/a):0}function YD({actionList:e,actionItemId:t,rawData:r}){let{actionItemGroups:n,continuousParameterGroups:i}=e,o=[],a=s=>(o.push((0,gi.mergeIn)(s,["config"],{delay:0,duration:0})),s.id===t);return n&&n.some(({actionItems:s})=>s.some(a)),i&&i.some(s=>{let{continuousActionGroups:u}=s;return u.some(({actionItems:f})=>f.some(a))}),(0,gi.setIn)(r,["actionLists"],{[e.id]:{id:e.id,actionItemGroups:[{actionItems:o}]}})}function $D(e,{basedOn:t}){return e===Qe.SCROLLING_IN_VIEW&&(t===at.ELEMENT||t==null)||e===Qe.MOUSE_MOVE&&t===at.ELEMENT}function QD(e,t){return e+lD+t}function ZD(e,t){return t==null?!0:e.indexOf(t)!==-1}function JD(e,t){return Qa(e&&e.sort(),t&&t.sort())}function e1(e){if(typeof e=="string")return e;if(e.pluginElement&&e.objectId)return e.pluginElement+Za+e.objectId;if(e.objectId)return e.objectId;let{id:t="",selector:r="",useEventTarget:n=""}=e;return t+Za+r+Za+n}var vt,pi,li,gi,EE,$F,QF,ZF,JF,eD,tD,rD,nD,iD,oD,fi,Zr,Jr,ut,ct,yE,aD,sD,fE,uD,dE,cD,di,ar,At,en,lD,Za,mE,Ja,es,_E,sr,ur,cr,tn,bE,rn,nn,lr,fr,dr,pr,vi,fD,IE,ts,TE,ci,pD,vD,yD,gE,bD,ID,OD,wD,AD,ns,RD,LD,ND,PD,GD,UD,VD,AE,CE=he(()=>{"use strict";vt=le(Wh()),pi=le(iE()),li=le(uE()),gi=le($t());Ve();lE();Fa();EE=le(Ua());Ka();oi();({BACKGROUND:$F,TRANSFORM:QF,TRANSLATE_3D:ZF,SCALE_3D:JF,ROTATE_X:eD,ROTATE_Y:tD,ROTATE_Z:rD,SKEW:nD,PRESERVE_3D:iD,FLEX:oD,OPACITY:fi,FILTER:Zr,FONT_VARIATION_SETTINGS:Jr,WIDTH:ut,HEIGHT:ct,BACKGROUND_COLOR:yE,BORDER_COLOR:aD,COLOR:sD,CHILDREN:fE,IMMEDIATE_CHILDREN:uD,SIBLINGS:dE,PARENT:cD,DISPLAY:di,WILL_CHANGE:ar,AUTO:At,COMMA_DELIMITER:en,COLON_DELIMITER:lD,BAR_DELIMITER:Za,RENDER_TRANSFORM:mE,RENDER_GENERAL:Ja,RENDER_STYLE:es,RENDER_PLUGIN:_E}=Re),{TRANSFORM_MOVE:sr,TRANSFORM_SCALE:ur,TRANSFORM_ROTATE:cr,TRANSFORM_SKEW:tn,STYLE_OPACITY:bE,STYLE_FILTER:rn,STYLE_FONT_VARIATION:nn,STYLE_SIZE:lr,STYLE_BACKGROUND_COLOR:fr,STYLE_BORDER:dr,STYLE_TEXT_COLOR:pr,GENERAL_DISPLAY:vi,OBJECT_VALUE:fD}=Ue,IE=e=>e.trim(),ts=Object.freeze({[fr]:yE,[dr]:aD,[pr]:sD}),TE=Object.freeze({[wt]:QF,[yE]:$F,[fi]:fi,[Zr]:Zr,[ut]:ut,[ct]:ct,[Jr]:Jr}),ci=new Map;pD=1;vD=1;yD=(e,t)=>e===t;gE=/px/,bD=(e,t)=>t.reduce((r,n)=>(r[n.type]==null&&(r[n.type]=RD[n.type]),r),e||{}),ID=(e,t)=>t.reduce((r,n)=>(r[n.type]==null&&(r[n.type]=LD[n.type]||n.defaultValue||0),r),e||{});OD=(e,t)=>(t&&(e[t.type]=t.value||0),e),wD=(e,t)=>(t&&(e[t.type]=t.value||0),e),AD=(e,t,r)=>{if(Ft(e))return Ha(e)(r,t);switch(e){case rn:{let n=(0,li.default)(r.filters,({type:i})=>i===t);return n?n.value:0}case nn:{let n=(0,li.default)(r.fontVariations,({type:i})=>i===t);return n?n.value:0}default:return r[t]}};ns={[sr]:Object.freeze({xValue:0,yValue:0,zValue:0}),[ur]:Object.freeze({xValue:1,yValue:1,zValue:1}),[cr]:Object.freeze({xValue:0,yValue:0,zValue:0}),[tn]:Object.freeze({xValue:0,yValue:0})},RD=Object.freeze({blur:0,"hue-rotate":0,invert:0,grayscale:0,saturate:100,sepia:0,contrast:100,brightness:100}),LD=Object.freeze({wght:0,opsz:0,wdth:0,slnt:0}),ND=(e,t)=>{let r=(0,li.default)(t.filters,({type:n})=>n===e);if(r&&r.unit)return r.unit;switch(e){case"blur":return"px";case"hue-rotate":return"deg";default:return"%"}},PD=Object.keys(ns);GD="\\(([^)]+)\\)",UD=/^rgb/,VD=RegExp(`rgba?${GD}`);AE=({effect:e,actionTypeId:t,elementApi:r})=>n=>{switch(t){case sr:case ur:case cr:case tn:e(n,wt,r);break;case rn:e(n,Zr,r);break;case nn:e(n,Jr,r);break;case bE:e(n,fi,r);break;case lr:e(n,ut,r),e(n,ct,r);break;case fr:case dr:case pr:e(n,ts[t],r);break;case vi:e(n,di,r);break}}});var Ut=c(qe=>{"use strict";var gr=mn().default;Object.defineProperty(qe,"__esModule",{value:!0});qe.IX2VanillaUtils=qe.IX2VanillaPlugins=qe.IX2ElementsReducer=qe.IX2Easings=qe.IX2EasingUtils=qe.IX2BrowserSupport=void 0;var t1=gr((oi(),rt(Oh)));qe.IX2BrowserSupport=t1;var r1=gr((Ma(),rt($r)));qe.IX2Easings=r1;var n1=gr((Fa(),rt(Lh)));qe.IX2EasingUtils=n1;var i1=gr((Mh(),rt(qh)));qe.IX2ElementsReducer=i1;var o1=gr((Ka(),rt(Bh)));qe.IX2VanillaPlugins=o1;var a1=gr((CE(),rt(SE)));qe.IX2VanillaUtils=a1});var Ei,ht,s1,u1,c1,l1,f1,d1,hi,RE,p1,g1,is,v1,h1,E1,y1,LE,NE=he(()=>{"use strict";Ve();Ei=le(Ut()),ht=le($t()),{IX2_RAW_DATA_IMPORTED:s1,IX2_SESSION_STOPPED:u1,IX2_INSTANCE_ADDED:c1,IX2_INSTANCE_STARTED:l1,IX2_INSTANCE_REMOVED:f1,IX2_ANIMATION_FRAME_CHANGED:d1}=Te,{optimizeFloat:hi,applyEasing:RE,createBezierEasing:p1}=Ei.IX2EasingUtils,{RENDER_GENERAL:g1}=Re,{getItemConfigByKey:is,getRenderType:v1,getStyleProp:h1}=Ei.IX2VanillaUtils,E1=(e,t)=>{let{position:r,parameterId:n,actionGroups:i,destinationKeys:o,smoothing:a,restingValue:s,actionTypeId:u,customEasingFn:f,skipMotion:h,skipToValue:p}=e,{parameters:d}=t.payload,E=Math.max(1-a,.01),T=d[n];T==null&&(E=1,T=s);let _=Math.max(T,0)||0,w=hi(_-r),m=h?p:hi(r+w*E),C=m*100;if(m===r&&e.current)return e;let A,R,P,N;for(let z=0,{length:$}=i;z<$;z++){let{keyframe:J,actionItems:te}=i[z];if(z===0&&(A=te[0]),C>=J){A=te[0];let M=i[z+1],O=M&&C!==J;R=O?M.actionItems[0]:null,O&&(P=J/100,N=(M.keyframe-J)/100)}}let H={};if(A&&!R)for(let z=0,{length:$}=o;z<$;z++){let J=o[z];H[J]=is(u,J,A.config)}else if(A&&R&&P!==void 0&&N!==void 0){let z=(m-P)/N,$=A.config.easing,J=RE($,z,f);for(let te=0,{length:M}=o;te<M;te++){let O=o[te],q=is(u,O,A.config),re=(is(u,O,R.config)-q)*J+q;H[O]=re}}return(0,ht.merge)(e,{position:m,current:H})},y1=(e,t)=>{let{active:r,origin:n,start:i,immediate:o,renderType:a,verbose:s,actionItem:u,destination:f,destinationKeys:h,pluginDuration:p,instanceDelay:d,customEasingFn:E,skipMotion:T}=e,_=u.config.easing,{duration:w,delay:m}=u.config;p!=null&&(w=p),m=d??m,a===g1?w=0:(o||T)&&(w=m=0);let{now:C}=t.payload;if(r&&n){let A=C-(i+m);if(s){let z=C-i,$=w+m,J=hi(Math.min(Math.max(0,z/$),1));e=(0,ht.set)(e,"verboseTimeElapsed",$*J)}if(A<0)return e;let R=hi(Math.min(Math.max(0,A/w),1)),P=RE(_,R,E),N={},H=null;return h.length&&(H=h.reduce((z,$)=>{let J=f[$],te=parseFloat(n[$])||0,O=(parseFloat(J)-te)*P+te;return z[$]=O,z},{})),N.current=H,N.position=R,R===1&&(N.active=!1,N.complete=!0),(0,ht.merge)(e,N)}return e},LE=(e=Object.freeze({}),t)=>{switch(t.type){case s1:return t.payload.ixInstances||Object.freeze({});case u1:return Object.freeze({});case c1:{let{instanceId:r,elementId:n,actionItem:i,eventId:o,eventTarget:a,eventStateKey:s,actionListId:u,groupIndex:f,isCarrier:h,origin:p,destination:d,immediate:E,verbose:T,continuous:_,parameterId:w,actionGroups:m,smoothing:C,restingValue:A,pluginInstance:R,pluginDuration:P,instanceDelay:N,skipMotion:H,skipToValue:z}=t.payload,{actionTypeId:$}=i,J=v1($),te=h1(J,$),M=Object.keys(d).filter(q=>d[q]!=null&&typeof d[q]!="string"),{easing:O}=i.config;return(0,ht.set)(e,r,{id:r,elementId:n,active:!1,position:0,start:0,origin:p,destination:d,destinationKeys:M,immediate:E,verbose:T,current:null,actionItem:i,actionTypeId:$,eventId:o,eventTarget:a,eventStateKey:s,actionListId:u,groupIndex:f,renderType:J,isCarrier:h,styleProp:te,continuous:_,parameterId:w,actionGroups:m,smoothing:C,restingValue:A,pluginInstance:R,pluginDuration:P,instanceDelay:N,skipMotion:H,skipToValue:z,customEasingFn:Array.isArray(O)&&O.length===4?p1(O):void 0})}case l1:{let{instanceId:r,time:n}=t.payload;return(0,ht.mergeIn)(e,[r],{active:!0,complete:!1,start:n})}case f1:{let{instanceId:r}=t.payload;if(!e[r])return e;let n={},i=Object.keys(e),{length:o}=i;for(let a=0;a<o;a++){let s=i[a];s!==r&&(n[s]=e[s])}return n}case d1:{let r=e,n=Object.keys(e),{length:i}=n;for(let o=0;o<i;o++){let a=n[o],s=e[a],u=s.continuous?E1:y1;r=(0,ht.set)(r,a,u(s,t))}return r}default:return e}}});var m1,_1,b1,PE,qE=he(()=>{"use strict";Ve();({IX2_RAW_DATA_IMPORTED:m1,IX2_SESSION_STOPPED:_1,IX2_PARAMETER_CHANGED:b1}=Te),PE=(e={},t)=>{switch(t.type){case m1:return t.payload.ixParameters||{};case _1:return{};case b1:{let{key:r,value:n}=t.payload;return e[r]=n,e}default:return e}}});var DE={};De(DE,{default:()=>T1});var ME,FE,I1,T1,GE=he(()=>{"use strict";ME=le(ea());Yf();hd();md();FE=le(Ut());NE();qE();({ixElements:I1}=FE.IX2ElementsReducer),T1=(0,ME.combineReducers)({ixData:Kf,ixRequest:vd,ixSession:yd,ixElements:I1,ixInstances:LE,ixParameters:PE})});var VE=c((Sj,UE)=>{var O1=It(),w1=we(),A1=pt(),x1="[object String]";function S1(e){return typeof e=="string"||!w1(e)&&A1(e)&&O1(e)==x1}UE.exports=S1});var BE=c((Cj,kE)=>{var C1=Sa(),R1=C1("length");kE.exports=R1});var WE=c((Rj,HE)=>{var L1="\\ud800-\\udfff",N1="\\u0300-\\u036f",P1="\\ufe20-\\ufe2f",q1="\\u20d0-\\u20ff",M1=N1+P1+q1,F1="\\ufe0e\\ufe0f",D1="\\u200d",G1=RegExp("["+D1+L1+M1+F1+"]");function U1(e){return G1.test(e)}HE.exports=U1});var JE=c((Lj,ZE)=>{var jE="\\ud800-\\udfff",V1="\\u0300-\\u036f",k1="\\ufe20-\\ufe2f",B1="\\u20d0-\\u20ff",H1=V1+k1+B1,W1="\\ufe0e\\ufe0f",X1="["+jE+"]",os="["+H1+"]",as="\\ud83c[\\udffb-\\udfff]",j1="(?:"+os+"|"+as+")",zE="[^"+jE+"]",KE="(?:\\ud83c[\\udde6-\\uddff]){2}",YE="[\\ud800-\\udbff][\\udc00-\\udfff]",z1="\\u200d",$E=j1+"?",QE="["+W1+"]?",K1="(?:"+z1+"(?:"+[zE,KE,YE].join("|")+")"+QE+$E+")*",Y1=QE+$E+K1,$1="(?:"+[zE+os+"?",os,KE,YE,X1].join("|")+")",XE=RegExp(as+"(?="+as+")|"+$1+Y1,"g");function Q1(e){for(var t=XE.lastIndex=0;XE.test(e);)++t;return t}ZE.exports=Q1});var ty=c((Nj,ey)=>{var Z1=BE(),J1=WE(),e2=JE();function t2(e){return J1(e)?e2(e):Z1(e)}ey.exports=t2});var ny=c((Pj,ry)=>{var r2=Yn(),n2=$n(),i2=qt(),o2=VE(),a2=ty(),s2="[object Map]",u2="[object Set]";function c2(e){if(e==null)return 0;if(i2(e))return o2(e)?a2(e):e.length;var t=n2(e);return t==s2||t==u2?e.size:r2(e).length}ry.exports=c2});var oy=c((qj,iy)=>{var l2="Expected a function";function f2(e){if(typeof e!="function")throw new TypeError(l2);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}iy.exports=f2});var ss=c((Mj,ay)=>{var d2=Tt(),p2=function(){try{var e=d2(Object,"defineProperty");return e({},"",{}),e}catch{}}();ay.exports=p2});var us=c((Fj,uy)=>{var sy=ss();function g2(e,t,r){t=="__proto__"&&sy?sy(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}uy.exports=g2});var ly=c((Dj,cy)=>{var v2=us(),h2=Un(),E2=Object.prototype,y2=E2.hasOwnProperty;function m2(e,t,r){var n=e[t];(!(y2.call(e,t)&&h2(n,r))||r===void 0&&!(t in e))&&v2(e,t,r)}cy.exports=m2});var py=c((Gj,dy)=>{var _2=ly(),b2=zr(),I2=Xn(),fy=st(),T2=ir();function O2(e,t,r,n){if(!fy(e))return e;t=b2(t,e);for(var i=-1,o=t.length,a=o-1,s=e;s!=null&&++i<o;){var u=T2(t[i]),f=r;if(u==="__proto__"||u==="constructor"||u==="prototype")return e;if(i!=a){var h=s[u];f=n?n(h,u,s):void 0,f===void 0&&(f=fy(h)?h:I2(t[i+1])?[]:{})}_2(s,u,f),s=s[u]}return e}dy.exports=O2});var vy=c((Uj,gy)=>{var w2=Jn(),A2=py(),x2=zr();function S2(e,t,r){for(var n=-1,i=t.length,o={};++n<i;){var a=t[n],s=w2(e,a);r(s,a)&&A2(o,x2(a,e),s)}return o}gy.exports=S2});var Ey=c((Vj,hy)=>{var C2=Hn(),R2=ko(),L2=pa(),N2=da(),P2=Object.getOwnPropertySymbols,q2=P2?function(e){for(var t=[];e;)C2(t,L2(e)),e=R2(e);return t}:N2;hy.exports=q2});var my=c((kj,yy)=>{function M2(e){var t=[];if(e!=null)for(var r in Object(e))t.push(r);return t}yy.exports=M2});var by=c((Bj,_y)=>{var F2=st(),D2=Kn(),G2=my(),U2=Object.prototype,V2=U2.hasOwnProperty;function k2(e){if(!F2(e))return G2(e);var t=D2(e),r=[];for(var n in e)n=="constructor"&&(t||!V2.call(e,n))||r.push(n);return r}_y.exports=k2});var Ty=c((Hj,Iy)=>{var B2=va(),H2=by(),W2=qt();function X2(e){return W2(e)?B2(e,!0):H2(e)}Iy.exports=X2});var wy=c((Wj,Oy)=>{var j2=fa(),z2=Ey(),K2=Ty();function Y2(e){return j2(e,K2,z2)}Oy.exports=Y2});var xy=c((Xj,Ay)=>{var $2=xa(),Q2=Ot(),Z2=vy(),J2=wy();function eG(e,t){if(e==null)return{};var r=$2(J2(e),function(n){return[n]});return t=Q2(t),Z2(e,r,function(n,i){return t(n,i[0])})}Ay.exports=eG});var Cy=c((jj,Sy)=>{var tG=Ot(),rG=oy(),nG=xy();function iG(e,t){return nG(e,rG(tG(t)))}Sy.exports=iG});var Ly=c((zj,Ry)=>{var oG=Yn(),aG=$n(),sG=kr(),uG=we(),cG=qt(),lG=Wn(),fG=Kn(),dG=zn(),pG="[object Map]",gG="[object Set]",vG=Object.prototype,hG=vG.hasOwnProperty;function EG(e){if(e==null)return!0;if(cG(e)&&(uG(e)||typeof e=="string"||typeof e.splice=="function"||lG(e)||dG(e)||sG(e)))return!e.length;var t=aG(e);if(t==pG||t==gG)return!e.size;if(fG(e))return!oG(e).length;for(var r in e)if(hG.call(e,r))return!1;return!0}Ry.exports=EG});var Py=c((Kj,Ny)=>{var yG=us(),mG=Ya(),_G=Ot();function bG(e,t){var r={};return t=_G(t,3),mG(e,function(n,i,o){yG(r,i,t(n,i,o))}),r}Ny.exports=bG});var My=c((Yj,qy)=>{function IG(e,t){for(var r=-1,n=e==null?0:e.length;++r<n&&t(e[r],r,e)!==!1;);return e}qy.exports=IG});var Dy=c(($j,Fy)=>{var TG=ti();function OG(e){return typeof e=="function"?e:TG}Fy.exports=OG});var Uy=c((Qj,Gy)=>{var wG=My(),AG=$a(),xG=Dy(),SG=we();function CG(e,t){var r=SG(e)?wG:AG;return r(e,xG(t))}Gy.exports=CG});var ky=c((Zj,Vy)=>{var RG=$e(),LG=function(){return RG.Date.now()};Vy.exports=LG});var Wy=c((Jj,Hy)=>{var NG=st(),cs=ky(),By=ri(),PG="Expected a function",qG=Math.max,MG=Math.min;function FG(e,t,r){var n,i,o,a,s,u,f=0,h=!1,p=!1,d=!0;if(typeof e!="function")throw new TypeError(PG);t=By(t)||0,NG(r)&&(h=!!r.leading,p="maxWait"in r,o=p?qG(By(r.maxWait)||0,t):o,d="trailing"in r?!!r.trailing:d);function E(N){var H=n,z=i;return n=i=void 0,f=N,a=e.apply(z,H),a}function T(N){return f=N,s=setTimeout(m,t),h?E(N):a}function _(N){var H=N-u,z=N-f,$=t-H;return p?MG($,o-z):$}function w(N){var H=N-u,z=N-f;return u===void 0||H>=t||H<0||p&&z>=o}function m(){var N=cs();if(w(N))return C(N);s=setTimeout(m,_(N))}function C(N){return s=void 0,d&&n?E(N):(n=i=void 0,a)}function A(){s!==void 0&&clearTimeout(s),f=0,n=u=i=s=void 0}function R(){return s===void 0?a:C(cs())}function P(){var N=cs(),H=w(N);if(n=arguments,i=this,u=N,H){if(s===void 0)return T(u);if(p)return clearTimeout(s),s=setTimeout(m,t),E(u)}return s===void 0&&(s=setTimeout(m,t)),a}return P.cancel=A,P.flush=R,P}Hy.exports=FG});var jy=c((ez,Xy)=>{var DG=Wy(),GG=st(),UG="Expected a function";function VG(e,t,r){var n=!0,i=!0;if(typeof e!="function")throw new TypeError(UG);return GG(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),DG(e,t,{leading:n,maxWait:t,trailing:i})}Xy.exports=VG});var Ky={};De(Ky,{actionListPlaybackChanged:()=>hr,animationFrameChanged:()=>mi,clearRequested:()=>fU,elementStateChanged:()=>Es,eventListenerAdded:()=>yi,eventStateChanged:()=>gs,instanceAdded:()=>vs,instanceRemoved:()=>hs,instanceStarted:()=>_i,mediaQueriesDefined:()=>ms,parameterChanged:()=>vr,playbackRequested:()=>cU,previewRequested:()=>uU,rawDataImported:()=>ls,sessionInitialized:()=>fs,sessionStarted:()=>ds,sessionStopped:()=>ps,stopRequested:()=>lU,testFrameRendered:()=>dU,viewportWidthChanged:()=>ys});var zy,kG,BG,HG,WG,XG,jG,zG,KG,YG,$G,QG,ZG,JG,eU,tU,rU,nU,iU,oU,aU,sU,ls,fs,ds,ps,uU,cU,lU,fU,yi,dU,gs,mi,vr,vs,_i,hs,Es,hr,ys,ms,bi=he(()=>{"use strict";Ve();zy=le(Ut()),{IX2_RAW_DATA_IMPORTED:kG,IX2_SESSION_INITIALIZED:BG,IX2_SESSION_STARTED:HG,IX2_SESSION_STOPPED:WG,IX2_PREVIEW_REQUESTED:XG,IX2_PLAYBACK_REQUESTED:jG,IX2_STOP_REQUESTED:zG,IX2_CLEAR_REQUESTED:KG,IX2_EVENT_LISTENER_ADDED:YG,IX2_TEST_FRAME_RENDERED:$G,IX2_EVENT_STATE_CHANGED:QG,IX2_ANIMATION_FRAME_CHANGED:ZG,IX2_PARAMETER_CHANGED:JG,IX2_INSTANCE_ADDED:eU,IX2_INSTANCE_STARTED:tU,IX2_INSTANCE_REMOVED:rU,IX2_ELEMENT_STATE_CHANGED:nU,IX2_ACTION_LIST_PLAYBACK_CHANGED:iU,IX2_VIEWPORT_WIDTH_CHANGED:oU,IX2_MEDIA_QUERIES_DEFINED:aU}=Te,{reifyState:sU}=zy.IX2VanillaUtils,ls=e=>({type:kG,payload:{...sU(e)}}),fs=({hasBoundaryNodes:e,reducedMotion:t})=>({type:BG,payload:{hasBoundaryNodes:e,reducedMotion:t}}),ds=()=>({type:HG}),ps=()=>({type:WG}),uU=({rawData:e,defer:t})=>({type:XG,payload:{defer:t,rawData:e}}),cU=({actionTypeId:e=Ue.GENERAL_START_ACTION,actionListId:t,actionItemId:r,eventId:n,allowEvents:i,immediate:o,testManual:a,verbose:s,rawData:u})=>({type:jG,payload:{actionTypeId:e,actionListId:t,actionItemId:r,testManual:a,eventId:n,allowEvents:i,immediate:o,verbose:s,rawData:u}}),lU=e=>({type:zG,payload:{actionListId:e}}),fU=()=>({type:KG}),yi=(e,t)=>({type:YG,payload:{target:e,listenerParams:t}}),dU=(e=1)=>({type:$G,payload:{step:e}}),gs=(e,t)=>({type:QG,payload:{stateKey:e,newState:t}}),mi=(e,t)=>({type:ZG,payload:{now:e,parameters:t}}),vr=(e,t)=>({type:JG,payload:{key:e,value:t}}),vs=e=>({type:eU,payload:{...e}}),_i=(e,t)=>({type:tU,payload:{instanceId:e,time:t}}),hs=e=>({type:rU,payload:{instanceId:e}}),Es=(e,t,r,n)=>({type:nU,payload:{elementId:e,actionTypeId:t,current:r,actionItem:n}}),hr=({actionListId:e,isPlaying:t})=>({type:iU,payload:{actionListId:e,isPlaying:t}}),ys=({width:e,mediaQueries:t})=>({type:oU,payload:{width:e,mediaQueries:t}}),ms=()=>({type:aU})});var Me={};De(Me,{elementContains:()=>Is,getChildElements:()=>IU,getClosestElement:()=>on,getProperty:()=>EU,getQuerySelector:()=>bs,getRefType:()=>Ts,getSiblingElements:()=>TU,getStyle:()=>hU,getValidDocument:()=>mU,isSiblingNode:()=>bU,matchSelector:()=>yU,queryDocument:()=>_U,setStyle:()=>vU});function vU(e,t,r){e.style[t]=r}function hU(e,t){return t.startsWith("--")?window.getComputedStyle(document.documentElement).getPropertyValue(t):e.style[t]}function EU(e,t){return e[t]}function yU(e){return t=>t[_s](e)}function bs({id:e,selector:t}){if(e){let r=e;if(e.indexOf(Yy)!==-1){let n=e.split(Yy),i=n[0];if(r=n[1],i!==document.documentElement.getAttribute(Qy))return null}return`[data-w-id="${r}"], [data-w-id^="${r}_instance"]`}return t}function mU(e){return e==null||e===document.documentElement.getAttribute(Qy)?document:null}function _U(e,t){return Array.prototype.slice.call(document.querySelectorAll(t?e+" "+t:e))}function Is(e,t){return e.contains(t)}function bU(e,t){return e!==t&&e.parentNode===t.parentNode}function IU(e){let t=[];for(let r=0,{length:n}=e||[];r<n;r++){let{children:i}=e[r],{length:o}=i;if(o)for(let a=0;a<o;a++)t.push(i[a])}return t}function TU(e=[]){let t=[],r=[];for(let n=0,{length:i}=e;n<i;n++){let{parentNode:o}=e[n];if(!o||!o.children||!o.children.length||r.indexOf(o)!==-1)continue;r.push(o);let a=o.firstElementChild;for(;a!=null;)e.indexOf(a)===-1&&t.push(a),a=a.nextElementSibling}return t}function Ts(e){return e!=null&&typeof e=="object"?e instanceof Element?pU:gU:null}var $y,_s,Yy,pU,gU,Qy,on,Zy=he(()=>{"use strict";$y=le(Ut());Ve();({ELEMENT_MATCHES:_s}=$y.IX2BrowserSupport),{IX2_ID_DELIMITER:Yy,HTML_ELEMENT:pU,PLAIN_OBJECT:gU,WF_PAGE:Qy}=Re;on=Element.prototype.closest?(e,t)=>document.documentElement.contains(e)?e.closest(t):null:(e,t)=>{if(!document.documentElement.contains(e))return null;let r=e;do{if(r[_s]&&r[_s](t))return r;r=r.parentNode}while(r!=null);return null}});var Os=c((nz,em)=>{var OU=st(),Jy=Object.create,wU=function(){function e(){}return function(t){if(!OU(t))return{};if(Jy)return Jy(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}();em.exports=wU});var Ii=c((iz,tm)=>{function AU(){}tm.exports=AU});var Oi=c((oz,rm)=>{var xU=Os(),SU=Ii();function Ti(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=void 0}Ti.prototype=xU(SU.prototype);Ti.prototype.constructor=Ti;rm.exports=Ti});var am=c((az,om)=>{var nm=zt(),CU=kr(),RU=we(),im=nm?nm.isConcatSpreadable:void 0;function LU(e){return RU(e)||CU(e)||!!(im&&e&&e[im])}om.exports=LU});var cm=c((sz,um)=>{var NU=Hn(),PU=am();function sm(e,t,r,n,i){var o=-1,a=e.length;for(r||(r=PU),i||(i=[]);++o<a;){var s=e[o];t>0&&r(s)?t>1?sm(s,t-1,r,n,i):NU(i,s):n||(i[i.length]=s)}return i}um.exports=sm});var fm=c((uz,lm)=>{var qU=cm();function MU(e){var t=e==null?0:e.length;return t?qU(e,1):[]}lm.exports=MU});var pm=c((cz,dm)=>{function FU(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}dm.exports=FU});var hm=c((lz,vm)=>{var DU=pm(),gm=Math.max;function GU(e,t,r){return t=gm(t===void 0?e.length-1:t,0),function(){for(var n=arguments,i=-1,o=gm(n.length-t,0),a=Array(o);++i<o;)a[i]=n[t+i];i=-1;for(var s=Array(t+1);++i<t;)s[i]=n[i];return s[t]=r(a),DU(e,this,s)}}vm.exports=GU});var ym=c((fz,Em)=>{function UU(e){return function(){return e}}Em.exports=UU});var bm=c((dz,_m)=>{var VU=ym(),mm=ss(),kU=ti(),BU=mm?function(e,t){return mm(e,"toString",{configurable:!0,enumerable:!1,value:VU(t),writable:!0})}:kU;_m.exports=BU});var Tm=c((pz,Im)=>{var HU=800,WU=16,XU=Date.now;function jU(e){var t=0,r=0;return function(){var n=XU(),i=WU-(n-r);if(r=n,i>0){if(++t>=HU)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}Im.exports=jU});var wm=c((gz,Om)=>{var zU=bm(),KU=Tm(),YU=KU(zU);Om.exports=YU});var xm=c((vz,Am)=>{var $U=fm(),QU=hm(),ZU=wm();function JU(e){return ZU(QU(e,void 0,$U),e+"")}Am.exports=JU});var Rm=c((hz,Cm)=>{var Sm=ha(),eV=Sm&&new Sm;Cm.exports=eV});var Nm=c((Ez,Lm)=>{function tV(){}Lm.exports=tV});var ws=c((yz,qm)=>{var Pm=Rm(),rV=Nm(),nV=Pm?function(e){return Pm.get(e)}:rV;qm.exports=nV});var Fm=c((mz,Mm)=>{var iV={};Mm.exports=iV});var As=c((_z,Gm)=>{var Dm=Fm(),oV=Object.prototype,aV=oV.hasOwnProperty;function sV(e){for(var t=e.name+"",r=Dm[t],n=aV.call(Dm,t)?r.length:0;n--;){var i=r[n],o=i.func;if(o==null||o==e)return i.name}return t}Gm.exports=sV});var Ai=c((bz,Um)=>{var uV=Os(),cV=Ii(),lV=4294967295;function wi(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=lV,this.__views__=[]}wi.prototype=uV(cV.prototype);wi.prototype.constructor=wi;Um.exports=wi});var km=c((Iz,Vm)=>{function fV(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t}Vm.exports=fV});var Hm=c((Tz,Bm)=>{var dV=Ai(),pV=Oi(),gV=km();function vV(e){if(e instanceof dV)return e.clone();var t=new pV(e.__wrapped__,e.__chain__);return t.__actions__=gV(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}Bm.exports=vV});var jm=c((Oz,Xm)=>{var hV=Ai(),Wm=Oi(),EV=Ii(),yV=we(),mV=pt(),_V=Hm(),bV=Object.prototype,IV=bV.hasOwnProperty;function xi(e){if(mV(e)&&!yV(e)&&!(e instanceof hV)){if(e instanceof Wm)return e;if(IV.call(e,"__wrapped__"))return _V(e)}return new Wm(e)}xi.prototype=EV.prototype;xi.prototype.constructor=xi;Xm.exports=xi});var Km=c((wz,zm)=>{var TV=Ai(),OV=ws(),wV=As(),AV=jm();function xV(e){var t=wV(e),r=AV[t];if(typeof r!="function"||!(t in TV.prototype))return!1;if(e===r)return!0;var n=OV(r);return!!n&&e===n[0]}zm.exports=xV});var Zm=c((Az,Qm)=>{var Ym=Oi(),SV=xm(),CV=ws(),xs=As(),RV=we(),$m=Km(),LV="Expected a function",NV=8,PV=32,qV=128,MV=256;function FV(e){return SV(function(t){var r=t.length,n=r,i=Ym.prototype.thru;for(e&&t.reverse();n--;){var o=t[n];if(typeof o!="function")throw new TypeError(LV);if(i&&!a&&xs(o)=="wrapper")var a=new Ym([],!0)}for(n=a?n:r;++n<r;){o=t[n];var s=xs(o),u=s=="wrapper"?CV(o):void 0;u&&$m(u[0])&&u[1]==(qV|NV|PV|MV)&&!u[4].length&&u[9]==1?a=a[xs(u[0])].apply(a,u[3]):a=o.length==1&&$m(o)?a[s]():a.thru(o)}return function(){var f=arguments,h=f[0];if(a&&f.length==1&&RV(h))return a.plant(h).value();for(var p=0,d=r?t[p].apply(this,f):h;++p<r;)d=t[p].call(this,d);return d}})}Qm.exports=FV});var e_=c((xz,Jm)=>{var DV=Zm(),GV=DV();Jm.exports=GV});var r_=c((Sz,t_)=>{function UV(e,t,r){return e===e&&(r!==void 0&&(e=e<=r?e:r),t!==void 0&&(e=e>=t?e:t)),e}t_.exports=UV});var i_=c((Cz,n_)=>{var VV=r_(),Ss=ri();function kV(e,t,r){return r===void 0&&(r=t,t=void 0),r!==void 0&&(r=Ss(r),r=r===r?r:0),t!==void 0&&(t=Ss(t),t=t===t?t:0),VV(Ss(e),t,r)}n_.exports=kV});var p_,g_,v_,h_,BV,HV,WV,XV,jV,zV,KV,YV,$V,QV,ZV,JV,ek,tk,rk,E_,y_,nk,ik,ok,m_,ak,sk,__,uk,Cs,b_,o_,a_,I_,sn,ck,lt,T_,lk,Be,Je,un,O_,Rs,s_,Ls,fk,an,dk,pk,gk,w_,u_,vk,c_,hk,Ek,yk,l_,Si,Ci,f_,d_,A_,x_=he(()=>{"use strict";p_=le(e_()),g_=le(ei()),v_=le(i_());Ve();Ns();bi();h_=le(Ut()),{MOUSE_CLICK:BV,MOUSE_SECOND_CLICK:HV,MOUSE_DOWN:WV,MOUSE_UP:XV,MOUSE_OVER:jV,MOUSE_OUT:zV,DROPDOWN_CLOSE:KV,DROPDOWN_OPEN:YV,SLIDER_ACTIVE:$V,SLIDER_INACTIVE:QV,TAB_ACTIVE:ZV,TAB_INACTIVE:JV,NAVBAR_CLOSE:ek,NAVBAR_OPEN:tk,MOUSE_MOVE:rk,PAGE_SCROLL_DOWN:E_,SCROLL_INTO_VIEW:y_,SCROLL_OUT_OF_VIEW:nk,PAGE_SCROLL_UP:ik,SCROLLING_IN_VIEW:ok,PAGE_FINISH:m_,ECOMMERCE_CART_CLOSE:ak,ECOMMERCE_CART_OPEN:sk,PAGE_START:__,PAGE_SCROLL:uk}=Qe,Cs="COMPONENT_ACTIVE",b_="COMPONENT_INACTIVE",{COLON_DELIMITER:o_}=Re,{getNamespacedParameterId:a_}=h_.IX2VanillaUtils,I_=e=>t=>typeof t=="object"&&e(t)?!0:t,sn=I_(({element:e,nativeEvent:t})=>e===t.target),ck=I_(({element:e,nativeEvent:t})=>e.contains(t.target)),lt=(0,p_.default)([sn,ck]),T_=(e,t)=>{if(t){let{ixData:r}=e.getState(),{events:n}=r,i=n[t];if(i&&!fk[i.eventTypeId])return i}return null},lk=({store:e,event:t})=>{let{action:r}=t,{autoStopEventId:n}=r.config;return!!T_(e,n)},Be=({store:e,event:t,element:r,eventStateKey:n},i)=>{let{action:o,id:a}=t,{actionListId:s,autoStopEventId:u}=o.config,f=T_(e,u);return f&&Er({store:e,eventId:u,eventTarget:r,eventStateKey:u+o_+n.split(o_)[1],actionListId:(0,g_.default)(f,"action.config.actionListId")}),Er({store:e,eventId:a,eventTarget:r,eventStateKey:n,actionListId:s}),cn({store:e,eventId:a,eventTarget:r,eventStateKey:n,actionListId:s}),i},Je=(e,t)=>(r,n)=>e(r,n)===!0?t(r,n):n,un={handler:Je(lt,Be)},O_={...un,types:[Cs,b_].join(" ")},Rs=[{target:window,types:"resize orientationchange",throttle:!0},{target:document,types:"scroll wheel readystatechange IX2_PAGE_UPDATE",throttle:!0}],s_="mouseover mouseout",Ls={types:Rs},fk={PAGE_START:__,PAGE_FINISH:m_},an=(()=>{let e=window.pageXOffset!==void 0,r=document.compatMode==="CSS1Compat"?document.documentElement:document.body;return()=>({scrollLeft:e?window.pageXOffset:r.scrollLeft,scrollTop:e?window.pageYOffset:r.scrollTop,stiffScrollTop:(0,v_.default)(e?window.pageYOffset:r.scrollTop,0,r.scrollHeight-window.innerHeight),scrollWidth:r.scrollWidth,scrollHeight:r.scrollHeight,clientWidth:r.clientWidth,clientHeight:r.clientHeight,innerWidth:window.innerWidth,innerHeight:window.innerHeight})})(),dk=(e,t)=>!(e.left>t.right||e.right<t.left||e.top>t.bottom||e.bottom<t.top),pk=({element:e,nativeEvent:t})=>{let{type:r,target:n,relatedTarget:i}=t,o=e.contains(n);if(r==="mouseover"&&o)return!0;let a=e.contains(i);return!!(r==="mouseout"&&o&&a)},gk=e=>{let{element:t,event:{config:r}}=e,{clientWidth:n,clientHeight:i}=an(),o=r.scrollOffsetValue,u=r.scrollOffsetUnit==="PX"?o:i*(o||0)/100;return dk(t.getBoundingClientRect(),{left:0,top:u,right:n,bottom:i-u})},w_=e=>(t,r)=>{let{type:n}=t.nativeEvent,i=[Cs,b_].indexOf(n)!==-1?n===Cs:r.isActive,o={...r,isActive:i};return(!r||o.isActive!==r.isActive)&&e(t,o)||o},u_=e=>(t,r)=>{let n={elementHovered:pk(t)};return(r?n.elementHovered!==r.elementHovered:n.elementHovered)&&e(t,n)||n},vk=e=>(t,r)=>{let n={...r,elementVisible:gk(t)};return(r?n.elementVisible!==r.elementVisible:n.elementVisible)&&e(t,n)||n},c_=e=>(t,r={})=>{let{stiffScrollTop:n,scrollHeight:i,innerHeight:o}=an(),{event:{config:a,eventTypeId:s}}=t,{scrollOffsetValue:u,scrollOffsetUnit:f}=a,h=f==="PX",p=i-o,d=Number((n/p).toFixed(2));if(r&&r.percentTop===d)return r;let E=(h?u:o*(u||0)/100)/p,T,_,w=0;r&&(T=d>r.percentTop,_=r.scrollingDown!==T,w=_?d:r.anchorTop);let m=s===E_?d>=w+E:d<=w-E,C={...r,percentTop:d,inBounds:m,anchorTop:w,scrollingDown:T};return r&&m&&(_||C.inBounds!==r.inBounds)&&e(t,C)||C},hk=(e,t)=>e.left>t.left&&e.left<t.right&&e.top>t.top&&e.top<t.bottom,Ek=e=>(t,r)=>{let n={finished:document.readyState==="complete"};return n.finished&&!(r&&r.finshed)&&e(t),n},yk=e=>(t,r)=>{let n={started:!0};return r||e(t),n},l_=e=>(t,r={clickCount:0})=>{let n={clickCount:r.clickCount%2+1};return n.clickCount!==r.clickCount&&e(t,n)||n},Si=(e=!0)=>({...O_,handler:Je(e?lt:sn,w_((t,r)=>r.isActive?un.handler(t,r):r))}),Ci=(e=!0)=>({...O_,handler:Je(e?lt:sn,w_((t,r)=>r.isActive?r:un.handler(t,r)))}),f_={...Ls,handler:vk((e,t)=>{let{elementVisible:r}=t,{event:n,store:i}=e,{ixData:o}=i.getState(),{events:a}=o;return!a[n.action.config.autoStopEventId]&&t.triggered?t:n.eventTypeId===y_===r?(Be(e),{...t,triggered:!0}):t})},d_=.05,A_={[$V]:Si(),[QV]:Ci(),[YV]:Si(),[KV]:Ci(),[tk]:Si(!1),[ek]:Ci(!1),[ZV]:Si(),[JV]:Ci(),[sk]:{types:"ecommerce-cart-open",handler:Je(lt,Be)},[ak]:{types:"ecommerce-cart-close",handler:Je(lt,Be)},[BV]:{types:"click",handler:Je(lt,l_((e,{clickCount:t})=>{lk(e)?t===1&&Be(e):Be(e)}))},[HV]:{types:"click",handler:Je(lt,l_((e,{clickCount:t})=>{t===2&&Be(e)}))},[WV]:{...un,types:"mousedown"},[XV]:{...un,types:"mouseup"},[jV]:{types:s_,handler:Je(lt,u_((e,t)=>{t.elementHovered&&Be(e)}))},[zV]:{types:s_,handler:Je(lt,u_((e,t)=>{t.elementHovered||Be(e)}))},[rk]:{types:"mousemove mouseout scroll",handler:({store:e,element:t,eventConfig:r,nativeEvent:n,eventStateKey:i},o={clientX:0,clientY:0,pageX:0,pageY:0})=>{let{basedOn:a,selectedAxis:s,continuousParameterGroupId:u,reverse:f,restingState:h=0}=r,{clientX:p=o.clientX,clientY:d=o.clientY,pageX:E=o.pageX,pageY:T=o.pageY}=n,_=s==="X_AXIS",w=n.type==="mouseout",m=h/100,C=u,A=!1;switch(a){case at.VIEWPORT:{m=_?Math.min(p,window.innerWidth)/window.innerWidth:Math.min(d,window.innerHeight)/window.innerHeight;break}case at.PAGE:{let{scrollLeft:R,scrollTop:P,scrollWidth:N,scrollHeight:H}=an();m=_?Math.min(R+E,N)/N:Math.min(P+T,H)/H;break}case at.ELEMENT:default:{C=a_(i,u);let R=n.type.indexOf("mouse")===0;if(R&&lt({element:t,nativeEvent:n})!==!0)break;let P=t.getBoundingClientRect(),{left:N,top:H,width:z,height:$}=P;if(!R&&!hk({left:p,top:d},P))break;A=!0,m=_?(p-N)/z:(d-H)/$;break}}return w&&(m>1-d_||m<d_)&&(m=Math.round(m)),(a!==at.ELEMENT||A||A!==o.elementHovered)&&(m=f?1-m:m,e.dispatch(vr(C,m))),{elementHovered:A,clientX:p,clientY:d,pageX:E,pageY:T}}},[uk]:{types:Rs,handler:({store:e,eventConfig:t})=>{let{continuousParameterGroupId:r,reverse:n}=t,{scrollTop:i,scrollHeight:o,clientHeight:a}=an(),s=i/(o-a);s=n?1-s:s,e.dispatch(vr(r,s))}},[ok]:{types:Rs,handler:({element:e,store:t,eventConfig:r,eventStateKey:n},i={scrollPercent:0})=>{let{scrollLeft:o,scrollTop:a,scrollWidth:s,scrollHeight:u,clientHeight:f}=an(),{basedOn:h,selectedAxis:p,continuousParameterGroupId:d,startsEntering:E,startsExiting:T,addEndOffset:_,addStartOffset:w,addOffsetValue:m=0,endOffsetValue:C=0}=r,A=p==="X_AXIS";if(h===at.VIEWPORT){let R=A?o/s:a/u;return R!==i.scrollPercent&&t.dispatch(vr(d,R)),{scrollPercent:R}}else{let R=a_(n,d),P=e.getBoundingClientRect(),N=(w?m:0)/100,H=(_?C:0)/100;N=E?N:1-N,H=T?H:1-H;let z=P.top+Math.min(P.height*N,f),J=P.top+P.height*H-z,te=Math.min(f+J,u),O=Math.min(Math.max(0,f-z),te)/te;return O!==i.scrollPercent&&t.dispatch(vr(R,O)),{scrollPercent:O}}}},[y_]:f_,[nk]:f_,[E_]:{...Ls,handler:c_((e,t)=>{t.scrollingDown&&Be(e)})},[ik]:{...Ls,handler:c_((e,t)=>{t.scrollingDown||Be(e)})},[m_]:{types:"readystatechange IX2_PAGE_UPDATE",handler:Je(sn,Ek(Be))},[__]:{types:"readystatechange IX2_PAGE_UPDATE",handler:Je(sn,yk(Be))}}});var W_={};De(W_,{observeRequests:()=>Gk,startActionGroup:()=>cn,startEngine:()=>Mi,stopActionGroup:()=>Er,stopAllActionGroups:()=>k_,stopEngine:()=>Fi});function Gk(e){Vt({store:e,select:({ixRequest:t})=>t.preview,onChange:kk}),Vt({store:e,select:({ixRequest:t})=>t.playback,onChange:Bk}),Vt({store:e,select:({ixRequest:t})=>t.stop,onChange:Hk}),Vt({store:e,select:({ixRequest:t})=>t.clear,onChange:Wk})}function Uk(e){Vt({store:e,select:({ixSession:t})=>t.mediaQueryKey,onChange:()=>{Fi(e),D_({store:e,elementApi:Me}),Mi({store:e,allowEvents:!0}),G_()}})}function Vk(e,t){let r=Vt({store:e,select:({ixSession:n})=>n.tick,onChange:n=>{t(n),r()}})}function kk({rawData:e,defer:t},r){let n=()=>{Mi({store:r,rawData:e,allowEvents:!0}),G_()};t?setTimeout(n,0):n()}function G_(){document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))}function Bk(e,t){let{actionTypeId:r,actionListId:n,actionItemId:i,eventId:o,allowEvents:a,immediate:s,testManual:u,verbose:f=!0}=e,{rawData:h}=e;if(n&&i&&h&&s){let p=h.actionLists[n];p&&(h=xk({actionList:p,actionItemId:i,rawData:h}))}if(Mi({store:t,rawData:h,allowEvents:a,testManual:u}),n&&r===Ue.GENERAL_START_ACTION||Ps(r)){Er({store:t,actionListId:n}),V_({store:t,actionListId:n,eventId:o});let p=cn({store:t,eventId:o,actionListId:n,immediate:s,verbose:f});f&&p&&t.dispatch(hr({actionListId:n,isPlaying:!s}))}}function Hk({actionListId:e},t){e?Er({store:t,actionListId:e}):k_({store:t}),Fi(t)}function Wk(e,t){Fi(t),D_({store:t,elementApi:Me})}function Mi({store:e,rawData:t,allowEvents:r,testManual:n}){let{ixSession:i}=e.getState();t&&e.dispatch(ls(t)),i.active||(e.dispatch(fs({hasBoundaryNodes:!!document.querySelector(Li),reducedMotion:document.body.hasAttribute("data-wf-ix-vacation")&&window.matchMedia("(prefers-reduced-motion)").matches})),r&&($k(e),Xk(),e.getState().ixSession.hasDefinedMediaQueries&&Uk(e)),e.dispatch(ds()),jk(e,n))}function Xk(){let{documentElement:e}=document;e.className.indexOf(S_)===-1&&(e.className+=` ${S_}`)}function jk(e,t){let r=n=>{let{ixSession:i,ixParameters:o}=e.getState();i.active&&(e.dispatch(mi(n,o)),t?Vk(e,r):requestAnimationFrame(r))};r(window.performance.now())}function Fi(e){let{ixSession:t}=e.getState();if(t.active){let{eventListeners:r}=t;r.forEach(zk),Lk(),e.dispatch(ps())}}function zk({target:e,listenerParams:t}){e.removeEventListener.apply(e,t)}function Kk({store:e,eventStateKey:t,eventTarget:r,eventId:n,eventConfig:i,actionListId:o,parameterGroup:a,smoothing:s,restingValue:u}){let{ixData:f,ixSession:h}=e.getState(),{events:p}=f,d=p[n],{eventTypeId:E}=d,T={},_={},w=[],{continuousActionGroups:m}=a,{id:C}=a;Sk(E,i)&&(C=Ck(t,C));let A=h.hasBoundaryNodes&&r?on(r,Li):null;m.forEach(R=>{let{keyframe:P,actionItems:N}=R;N.forEach(H=>{let{actionTypeId:z}=H,{target:$}=H.config;if(!$)return;let J=$.boundaryMode?A:null,te=Nk($)+qs+z;if(_[te]=Yk(_[te],P,H),!T[te]){T[te]=!0;let{config:M}=H;Ni({config:M,event:d,eventTarget:r,elementRoot:J,elementApi:Me}).forEach(O=>{w.push({element:O,key:te})})}})}),w.forEach(({element:R,key:P})=>{let N=_[P],H=(0,Et.default)(N,"[0].actionItems[0]",{}),{actionTypeId:z}=H,$=qi(z)?Fs(z)(R,H):null,J=Ms({element:R,actionItem:H,elementApi:Me},$);Ds({store:e,element:R,eventId:n,actionListId:o,actionItem:H,destination:J,continuous:!0,parameterId:C,actionGroups:N,smoothing:s,restingValue:u,pluginInstance:$})})}function Yk(e=[],t,r){let n=[...e],i;return n.some((o,a)=>o.keyframe===t?(i=a,!0):!1),i==null&&(i=n.length,n.push({keyframe:t,actionItems:[]})),n[i].actionItems.push(r),n}function $k(e){let{ixData:t}=e.getState(),{eventTypeMap:r}=t;U_(e),(0,yr.default)(r,(i,o)=>{let a=A_[o];if(!a){console.warn(`IX2 event type not configured: ${o}`);return}rB({logic:a,store:e,events:i})});let{ixSession:n}=e.getState();n.eventListeners.length&&Zk(e)}function Zk(e){let t=()=>{U_(e)};Qk.forEach(r=>{window.addEventListener(r,t),e.dispatch(yi(window,[r,t]))}),t()}function U_(e){let{ixSession:t,ixData:r}=e.getState(),n=window.innerWidth;if(n!==t.viewportWidth){let{mediaQueries:i}=r;e.dispatch(ys({width:n,mediaQueries:i}))}}function rB({logic:e,store:t,events:r}){nB(r);let{types:n,handler:i}=e,{ixData:o}=t.getState(),{actionLists:a}=o,s=Jk(r,tB);if(!(0,L_.default)(s))return;(0,yr.default)(s,(p,d)=>{let E=r[d],{action:T,id:_,mediaQueries:w=o.mediaQueryKeys}=E,{actionListId:m}=T.config;Pk(w,o.mediaQueryKeys)||t.dispatch(ms()),T.actionTypeId===Ue.GENERAL_CONTINUOUS_ACTION&&(Array.isArray(E.config)?E.config:[E.config]).forEach(A=>{let{continuousParameterGroupId:R}=A,P=(0,Et.default)(a,`${m}.continuousParameterGroups`,[]),N=(0,R_.default)(P,({id:$})=>$===R),H=(A.smoothing||0)/100,z=(A.restingState||0)/100;N&&p.forEach(($,J)=>{let te=_+qs+J;Kk({store:t,eventStateKey:te,eventTarget:$,eventId:_,eventConfig:A,actionListId:m,parameterGroup:N,smoothing:H,restingValue:z})})}),(T.actionTypeId===Ue.GENERAL_START_ACTION||Ps(T.actionTypeId))&&V_({store:t,actionListId:m,eventId:_})});let u=p=>{let{ixSession:d}=t.getState();eB(s,(E,T,_)=>{let w=r[T],m=d.eventState[_],{action:C,mediaQueries:A=o.mediaQueryKeys}=w;if(!Pi(A,d.mediaQueryKey))return;let R=(P={})=>{let N=i({store:t,element:E,event:w,eventConfig:P,nativeEvent:p,eventStateKey:_},m);qk(N,m)||t.dispatch(gs(_,N))};C.actionTypeId===Ue.GENERAL_CONTINUOUS_ACTION?(Array.isArray(w.config)?w.config:[w.config]).forEach(R):R()})},f=(0,M_.default)(u,Dk),h=({target:p=document,types:d,throttle:E})=>{d.split(" ").filter(Boolean).forEach(T=>{let _=E?f:u;p.addEventListener(T,_),t.dispatch(yi(p,[T,_]))})};Array.isArray(n)?n.forEach(h):typeof n=="string"&&h(e)}function nB(e){if(!Fk)return;let t={},r="";for(let n in e){let{eventTypeId:i,target:o}=e[n],a=bs(o);t[a]||(i===Qe.MOUSE_CLICK||i===Qe.MOUSE_SECOND_CLICK)&&(t[a]=!0,r+=a+"{cursor: pointer;touch-action: manipulation;}")}if(r){let n=document.createElement("style");n.textContent=r,document.body.appendChild(n)}}function V_({store:e,actionListId:t,eventId:r}){let{ixData:n,ixSession:i}=e.getState(),{actionLists:o,events:a}=n,s=a[r],u=o[t];if(u&&u.useFirstGroupAsInitialState){let f=(0,Et.default)(u,"actionItemGroups[0].actionItems",[]),h=(0,Et.default)(s,"mediaQueries",n.mediaQueryKeys);if(!Pi(h,i.mediaQueryKey))return;f.forEach(p=>{let{config:d,actionTypeId:E}=p,T=d?.target?.useEventTarget===!0&&d?.target?.objectId==null?{target:s.target,targets:s.targets}:d,_=Ni({config:T,event:s,elementApi:Me}),w=qi(E);_.forEach(m=>{let C=w?Fs(E)(m,p):null;Ds({destination:Ms({element:m,actionItem:p,elementApi:Me},C),immediate:!0,store:e,element:m,eventId:r,actionItem:p,actionListId:t,pluginInstance:C})})})}}function k_({store:e}){let{ixInstances:t}=e.getState();(0,yr.default)(t,r=>{if(!r.continuous){let{actionListId:n,verbose:i}=r;Gs(r,e),i&&e.dispatch(hr({actionListId:n,isPlaying:!1}))}})}function Er({store:e,eventId:t,eventTarget:r,eventStateKey:n,actionListId:i}){let{ixInstances:o,ixSession:a}=e.getState(),s=a.hasBoundaryNodes&&r?on(r,Li):null;(0,yr.default)(o,u=>{let f=(0,Et.default)(u,"actionItem.config.target.boundaryMode"),h=n?u.eventStateKey===n:!0;if(u.actionListId===i&&u.eventId===t&&h){if(s&&f&&!Is(s,u.element))return;Gs(u,e),u.verbose&&e.dispatch(hr({actionListId:i,isPlaying:!1}))}})}function cn({store:e,eventId:t,eventTarget:r,eventStateKey:n,actionListId:i,groupIndex:o=0,immediate:a,verbose:s}){let{ixData:u,ixSession:f}=e.getState(),{events:h}=u,p=h[t]||{},{mediaQueries:d=u.mediaQueryKeys}=p,E=(0,Et.default)(u,`actionLists.${i}`,{}),{actionItemGroups:T,useFirstGroupAsInitialState:_}=E;if(!T||!T.length)return!1;o>=T.length&&(0,Et.default)(p,"config.loop")&&(o=0),o===0&&_&&o++;let m=(o===0||o===1&&_)&&Ps(p.action?.actionTypeId)?p.config.delay:void 0,C=(0,Et.default)(T,[o,"actionItems"],[]);if(!C.length||!Pi(d,f.mediaQueryKey))return!1;let A=f.hasBoundaryNodes&&r?on(r,Li):null,R=Ok(C),P=!1;return C.forEach((N,H)=>{let{config:z,actionTypeId:$}=N,J=qi($),{target:te}=z;if(!te)return;let M=te.boundaryMode?A:null;Ni({config:z,event:p,eventTarget:r,elementRoot:M,elementApi:Me}).forEach((q,K)=>{let B=J?Fs($)(q,N):null,re=J?Mk($)(q,N):null;P=!0;let ne=R===H&&K===0,F=wk({element:q,actionItem:N}),X=Ms({element:q,actionItem:N,elementApi:Me},B);Ds({store:e,element:q,actionItem:N,eventId:t,eventTarget:r,eventStateKey:n,actionListId:i,groupIndex:o,isCarrier:ne,computedStyle:F,destination:X,immediate:a,verbose:s,pluginInstance:B,pluginDuration:re,instanceDelay:m})})}),P}function Ds(e){let{store:t,computedStyle:r,...n}=e,{element:i,actionItem:o,immediate:a,pluginInstance:s,continuous:u,restingValue:f,eventId:h}=n,p=!u,d=Ik(),{ixElements:E,ixSession:T,ixData:_}=t.getState(),w=bk(E,i),{refState:m}=E[w]||{},C=Ts(i),A=T.reducedMotion&&na[o.actionTypeId],R;if(A&&u)switch(_.events[h]?.eventTypeId){case Qe.MOUSE_MOVE:case Qe.MOUSE_MOVE_IN_VIEWPORT:R=f;break;default:R=.5;break}let P=Ak(i,m,r,o,Me,s);if(t.dispatch(vs({instanceId:d,elementId:w,origin:P,refType:C,skipMotion:A,skipToValue:R,...n})),B_(document.body,"ix2-animation-started",d),a){iB(t,d);return}Vt({store:t,select:({ixInstances:N})=>N[d],onChange:H_}),p&&t.dispatch(_i(d,T.tick))}function Gs(e,t){B_(document.body,"ix2-animation-stopping",{instanceId:e.id,state:t.getState()});let{elementId:r,actionItem:n}=e,{ixElements:i}=t.getState(),{ref:o,refType:a}=i[r]||{};a===F_&&Rk(o,n,Me),t.dispatch(hs(e.id))}function B_(e,t,r){let n=document.createEvent("CustomEvent");n.initCustomEvent(t,!0,!0,r),e.dispatchEvent(n)}function iB(e,t){let{ixParameters:r}=e.getState();e.dispatch(_i(t,0)),e.dispatch(mi(performance.now(),r));let{ixInstances:n}=e.getState();H_(n[t],e)}function H_(e,t){let{active:r,continuous:n,complete:i,elementId:o,actionItem:a,actionTypeId:s,renderType:u,current:f,groupIndex:h,eventId:p,eventTarget:d,eventStateKey:E,actionListId:T,isCarrier:_,styleProp:w,verbose:m,pluginInstance:C}=e,{ixData:A,ixSession:R}=t.getState(),{events:P}=A,N=P[p]||{},{mediaQueries:H=A.mediaQueryKeys}=N;if(Pi(H,R.mediaQueryKey)&&(n||r||i)){if(f||u===_k&&i){t.dispatch(Es(o,s,f,a));let{ixElements:z}=t.getState(),{ref:$,refType:J,refState:te}=z[o]||{},M=te&&te[s];(J===F_||qi(s))&&Tk($,te,M,p,a,w,Me,u,C)}if(i){if(_){let z=cn({store:t,eventId:p,eventTarget:d,eventStateKey:E,actionListId:T,groupIndex:h+1,verbose:m});m&&!z&&t.dispatch(hr({actionListId:T,isPlaying:!1}))}Gs(e,t)}}}var R_,Et,L_,N_,P_,q_,yr,M_,Ri,mk,Ps,qs,Li,F_,_k,S_,Ni,bk,Ms,Vt,Ik,Tk,D_,Ok,wk,Ak,xk,Sk,Ck,Pi,Rk,Lk,Nk,Pk,qk,qi,Fs,Mk,C_,Fk,Dk,Qk,Jk,eB,tB,Ns=he(()=>{"use strict";R_=le(Na()),Et=le(ei()),L_=le(ny()),N_=le(Cy()),P_=le(Ly()),q_=le(Py()),yr=le(Uy()),M_=le(jy());Ve();Ri=le(Ut());bi();Zy();x_();mk=Object.keys(Nn),Ps=e=>mk.includes(e),{COLON_DELIMITER:qs,BOUNDARY_SELECTOR:Li,HTML_ELEMENT:F_,RENDER_GENERAL:_k,W_MOD_IX:S_}=Re,{getAffectedElements:Ni,getElementId:bk,getDestinationValues:Ms,observeStore:Vt,getInstanceId:Ik,renderHTMLElement:Tk,clearAllStyles:D_,getMaxDurationItemIndex:Ok,getComputedStyle:wk,getInstanceOrigin:Ak,reduceListToGroup:xk,shouldNamespaceEventParameter:Sk,getNamespacedParameterId:Ck,shouldAllowMediaQuery:Pi,cleanupHTMLElement:Rk,clearObjectCache:Lk,stringifyTarget:Nk,mediaQueriesEqual:Pk,shallowEqual:qk}=Ri.IX2VanillaUtils,{isPluginType:qi,createPluginInstance:Fs,getPluginDuration:Mk}=Ri.IX2VanillaPlugins,C_=navigator.userAgent,Fk=C_.match(/iPad/i)||C_.match(/iPhone/),Dk=12;Qk=["resize","orientationchange"];Jk=(e,t)=>(0,N_.default)((0,q_.default)(e,t),P_.default),eB=(e,t)=>{(0,yr.default)(e,(r,n)=>{r.forEach((i,o)=>{let a=n+qs+o;t(i,n,a)})})},tB=e=>{let t={target:e.target,targets:e.targets};return Ni({config:t,elementApi:Me})}});var j_=c(yt=>{"use strict";var oB=mn().default,aB=Wi().default;Object.defineProperty(yt,"__esModule",{value:!0});yt.actions=void 0;yt.destroy=X_;yt.init=fB;yt.setEnv=lB;yt.store=void 0;pf();var sB=ea(),uB=aB((GE(),rt(DE))),Us=(Ns(),rt(W_)),cB=oB((bi(),rt(Ky)));yt.actions=cB;var Vs=yt.store=(0,sB.createStore)(uB.default);function lB(e){e()&&(0,Us.observeRequests)(Vs)}function fB(e){X_(),(0,Us.startEngine)({store:Vs,rawData:e,allowEvents:!0})}function X_(){(0,Us.stopEngine)(Vs)}});var $_=c((Gz,Y_)=>{"use strict";var z_=Ge(),K_=j_();K_.setEnv(z_.env);z_.define("ix2",Y_.exports=function(){return K_})});var Z_=c((Uz,Q_)=>{"use strict";var mr=Ge();mr.define("links",Q_.exports=function(e,t){var r={},n=e(window),i,o=mr.env(),a=window.location,s=document.createElement("a"),u="w--current",f=/index\.(html|php)$/,h=/\/$/,p,d;r.ready=r.design=r.preview=E;function E(){i=o&&mr.env("design"),d=mr.env("slug")||a.pathname||"",mr.scroll.off(_),p=[];for(var m=document.links,C=0;C<m.length;++C)T(m[C]);p.length&&(mr.scroll.on(_),_())}function T(m){if(!m.getAttribute("hreflang")){var C=i&&m.getAttribute("href-disabled")||m.getAttribute("href");if(s.href=C,!(C.indexOf(":")>=0)){var A=e(m);if(s.hash.length>1&&s.host+s.pathname===a.host+a.pathname){if(!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash))return;var R=e(s.hash);R.length&&p.push({link:A,sec:R,active:!1});return}if(!(C==="#"||C==="")){var P=s.href===a.href||C===d||f.test(C)&&h.test(d);w(A,u,P)}}}}function _(){var m=n.scrollTop(),C=n.height();t.each(p,function(A){if(!A.link.attr("hreflang")){var R=A.link,P=A.sec,N=P.offset().top,H=P.outerHeight(),z=C*.5,$=P.is(":visible")&&N+H-z>=m&&N+z<=m+C;A.active!==$&&(A.active=$,w(R,u,$))}})}function w(m,C,A){var R=m.hasClass(C);A&&R||!A&&!R||(A?m.addClass(C):m.removeClass(C))}return r})});var eb=c((Vz,J_)=>{"use strict";var Di=Ge();Di.define("scroll",J_.exports=function(e){var t={WF_CLICK_EMPTY:"click.wf-empty-link",WF_CLICK_SCROLL:"click.wf-scroll"},r=window.location,n=T()?null:window.history,i=e(window),o=e(document),a=e(document.body),s=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(M){window.setTimeout(M,15)},u=Di.env("editor")?".w-editor-body":"body",f="header, "+u+" > .header, "+u+" > .w-nav:not([data-no-scroll])",h='a[href="#"]',p='a[href*="#"]:not(.w-tab-link):not('+h+")",d='.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',E=document.createElement("style");E.appendChild(document.createTextNode(d));function T(){try{return!!window.frameElement}catch{return!0}}var _=/^#[a-zA-Z0-9][\w:.-]*$/;function w(M){return _.test(M.hash)&&M.host+M.pathname===r.host+r.pathname}let m=typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)");function C(){return document.body.getAttribute("data-wf-scroll-motion")==="none"||m.matches}function A(M,O){var q;switch(O){case"add":q=M.attr("tabindex"),q?M.attr("data-wf-tabindex-swap",q):M.attr("tabindex","-1");break;case"remove":q=M.attr("data-wf-tabindex-swap"),q?(M.attr("tabindex",q),M.removeAttr("data-wf-tabindex-swap")):M.removeAttr("tabindex");break}M.toggleClass("wf-force-outline-none",O==="add")}function R(M){var O=M.currentTarget;if(!(Di.env("design")||window.$.mobile&&/(?:^|\s)ui-link(?:$|\s)/.test(O.className))){var q=w(O)?O.hash:"";if(q!==""){var K=e(q);K.length&&(M&&(M.preventDefault(),M.stopPropagation()),P(q,M),window.setTimeout(function(){N(K,function(){A(K,"add"),K.get(0).focus({preventScroll:!0}),A(K,"remove")})},M?0:300))}}}function P(M){if(r.hash!==M&&n&&n.pushState&&!(Di.env.chrome&&r.protocol==="file:")){var O=n.state&&n.state.hash;O!==M&&n.pushState({hash:M},"",M)}}function N(M,O){var q=i.scrollTop(),K=H(M);if(q!==K){var B=z(M,q,K),re=Date.now(),ne=function(){var F=Date.now()-re;window.scroll(0,$(q,K,F,B)),F<=B?s(ne):typeof O=="function"&&O()};s(ne)}}function H(M){var O=e(f),q=O.css("position")==="fixed"?O.outerHeight():0,K=M.offset().top-q;if(M.data("scroll")==="mid"){var B=i.height()-q,re=M.outerHeight();re<B&&(K-=Math.round((B-re)/2))}return K}function z(M,O,q){if(C())return 0;var K=1;return a.add(M).each(function(B,re){var ne=parseFloat(re.getAttribute("data-scroll-time"));!isNaN(ne)&&ne>=0&&(K=ne)}),(472.143*Math.log(Math.abs(O-q)+125)-2e3)*K}function $(M,O,q,K){return q>K?O:M+(O-M)*J(q/K)}function J(M){return M<.5?4*M*M*M:(M-1)*(2*M-2)*(2*M-2)+1}function te(){var{WF_CLICK_EMPTY:M,WF_CLICK_SCROLL:O}=t;o.on(O,p,R),o.on(M,h,function(q){q.preventDefault()}),document.head.insertBefore(E,document.head.firstChild)}return{ready:te}})});var rb=c((kz,tb)=>{"use strict";var dB=Ge();dB.define("touch",tb.exports=function(e){var t={},r=window.getSelection;e.event.special.tap={bindType:"click",delegateType:"click"},t.init=function(o){return o=typeof o=="string"?e(o).get(0):o,o?new n(o):null};function n(o){var a=!1,s=!1,u=Math.min(Math.round(window.innerWidth*.04),40),f,h;o.addEventListener("touchstart",p,!1),o.addEventListener("touchmove",d,!1),o.addEventListener("touchend",E,!1),o.addEventListener("touchcancel",T,!1),o.addEventListener("mousedown",p,!1),o.addEventListener("mousemove",d,!1),o.addEventListener("mouseup",E,!1),o.addEventListener("mouseout",T,!1);function p(w){var m=w.touches;m&&m.length>1||(a=!0,m?(s=!0,f=m[0].clientX):f=w.clientX,h=f)}function d(w){if(a){if(s&&w.type==="mousemove"){w.preventDefault(),w.stopPropagation();return}var m=w.touches,C=m?m[0].clientX:w.clientX,A=C-h;h=C,Math.abs(A)>u&&r&&String(r())===""&&(i("swipe",w,{direction:A>0?"right":"left"}),T())}}function E(w){if(a&&(a=!1,s&&w.type==="mouseup")){w.preventDefault(),w.stopPropagation(),s=!1;return}}function T(){a=!1}function _(){o.removeEventListener("touchstart",p,!1),o.removeEventListener("touchmove",d,!1),o.removeEventListener("touchend",E,!1),o.removeEventListener("touchcancel",T,!1),o.removeEventListener("mousedown",p,!1),o.removeEventListener("mousemove",d,!1),o.removeEventListener("mouseup",E,!1),o.removeEventListener("mouseout",T,!1),o=null}this.destroy=_}function i(o,a,s){var u=e.Event(o,{originalEvent:a});e(a.target).trigger(u,s)}return t.instance=t.init(document),t})});var ob=c((Bz,ib)=>{"use strict";var kt=Ge(),pB=yn(),et={ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,ESCAPE:27,SPACE:32,ENTER:13,HOME:36,END:35},nb=!0,gB=/^#[a-zA-Z0-9\-_]+$/;kt.define("dropdown",ib.exports=function(e,t){var r=t.debounce,n={},i=kt.env(),o=!1,a,s=kt.env.touch,u=".w-dropdown",f="w--open",h=pB.triggers,p=900,d="focusout"+u,E="keydown"+u,T="mouseenter"+u,_="mousemove"+u,w="mouseleave"+u,m=(s?"click":"mouseup")+u,C="w-close"+u,A="setting"+u,R=e(document),P;n.ready=N,n.design=function(){o&&O(),o=!1,N()},n.preview=function(){o=!0,N()};function N(){a=i&&kt.env("design"),P=R.find(u),P.each(H)}function H(v,k){var W=e(k),L=e.data(k,u);L||(L=e.data(k,u,{open:!1,el:W,config:{},selectedIdx:-1})),L.toggle=L.el.children(".w-dropdown-toggle"),L.list=L.el.children(".w-dropdown-list"),L.links=L.list.find("a:not(.w-dropdown .w-dropdown a)"),L.complete=B(L),L.mouseLeave=ne(L),L.mouseUpOutside=K(L),L.mouseMoveOutside=F(L),z(L);var oe=L.toggle.attr("id"),_e=L.list.attr("id");oe||(oe="w-dropdown-toggle-"+v),_e||(_e="w-dropdown-list-"+v),L.toggle.attr("id",oe),L.toggle.attr("aria-controls",_e),L.toggle.attr("aria-haspopup","menu"),L.toggle.attr("aria-expanded","false"),L.toggle.find(".w-icon-dropdown-toggle").attr("aria-hidden","true"),L.toggle.prop("tagName")!=="BUTTON"&&(L.toggle.attr("role","button"),L.toggle.attr("tabindex")||L.toggle.attr("tabindex","0")),L.list.attr("id",_e),L.list.attr("aria-labelledby",oe),L.links.each(function(g,G){G.hasAttribute("tabindex")||G.setAttribute("tabindex","0"),gB.test(G.hash)&&G.addEventListener("click",M.bind(null,L))}),L.el.off(u),L.toggle.off(u),L.nav&&L.nav.off(u);var se=J(L,nb);a&&L.el.on(A,$(L)),a||(i&&(L.hovering=!1,M(L)),L.config.hover&&L.toggle.on(T,re(L)),L.el.on(C,se),L.el.on(E,X(L)),L.el.on(d,D(L)),L.toggle.on(m,se),L.toggle.on(E,U(L)),L.nav=L.el.closest(".w-nav"),L.nav.on(C,se))}function z(v){var k=Number(v.el.css("z-index"));v.manageZ=k===p||k===p+1,v.config={hover:v.el.attr("data-hover")==="true"&&!s,delay:v.el.attr("data-delay")}}function $(v){return function(k,W){W=W||{},z(v),W.open===!0&&te(v,!0),W.open===!1&&M(v,{immediate:!0})}}function J(v,k){return r(function(W){if(v.open||W&&W.type==="w-close")return M(v,{forceClose:k});te(v)})}function te(v){if(!v.open){q(v),v.open=!0,v.list.addClass(f),v.toggle.addClass(f),v.toggle.attr("aria-expanded","true"),h.intro(0,v.el[0]),kt.redraw.up(),v.manageZ&&v.el.css("z-index",p+1);var k=kt.env("editor");a||R.on(m,v.mouseUpOutside),v.hovering&&!k&&v.el.on(w,v.mouseLeave),v.hovering&&k&&R.on(_,v.mouseMoveOutside),window.clearTimeout(v.delayId)}}function M(v,{immediate:k,forceClose:W}={}){if(v.open&&!(v.config.hover&&v.hovering&&!W)){v.toggle.attr("aria-expanded","false"),v.open=!1;var L=v.config;if(h.outro(0,v.el[0]),R.off(m,v.mouseUpOutside),R.off(_,v.mouseMoveOutside),v.el.off(w,v.mouseLeave),window.clearTimeout(v.delayId),!L.delay||k)return v.complete();v.delayId=window.setTimeout(v.complete,L.delay)}}function O(){R.find(u).each(function(v,k){e(k).triggerHandler(C)})}function q(v){var k=v.el[0];P.each(function(W,L){var oe=e(L);oe.is(k)||oe.has(k).length||oe.triggerHandler(C)})}function K(v){return v.mouseUpOutside&&R.off(m,v.mouseUpOutside),r(function(k){if(v.open){var W=e(k.target);if(!W.closest(".w-dropdown-toggle").length){var L=e.inArray(v.el[0],W.parents(u))===-1,oe=kt.env("editor");if(L){if(oe){var _e=W.parents().length===1&&W.parents("svg").length===1,se=W.parents(".w-editor-bem-EditorHoverControls").length;if(_e||se)return}M(v)}}}})}function B(v){return function(){v.list.removeClass(f),v.toggle.removeClass(f),v.manageZ&&v.el.css("z-index","")}}function re(v){return function(){v.hovering=!0,te(v)}}function ne(v){return function(){v.hovering=!1,v.links.is(":focus")||M(v)}}function F(v){return r(function(k){if(v.open){var W=e(k.target),L=e.inArray(v.el[0],W.parents(u))===-1;if(L){var oe=W.parents(".w-editor-bem-EditorHoverControls").length,_e=W.parents(".w-editor-bem-RTToolbar").length,se=e(".w-editor-bem-EditorOverlay"),g=se.find(".w-editor-edit-outline").length||se.find(".w-editor-bem-RTToolbar").length;if(oe||_e||g)return;v.hovering=!1,M(v)}}})}function X(v){return function(k){if(!(a||!v.open))switch(v.selectedIdx=v.links.index(document.activeElement),k.keyCode){case et.HOME:return v.open?(v.selectedIdx=0,Y(v),k.preventDefault()):void 0;case et.END:return v.open?(v.selectedIdx=v.links.length-1,Y(v),k.preventDefault()):void 0;case et.ESCAPE:return M(v),v.toggle.focus(),k.stopPropagation();case et.ARROW_RIGHT:case et.ARROW_DOWN:return v.selectedIdx=Math.min(v.links.length-1,v.selectedIdx+1),Y(v),k.preventDefault();case et.ARROW_LEFT:case et.ARROW_UP:return v.selectedIdx=Math.max(-1,v.selectedIdx-1),Y(v),k.preventDefault()}}}function Y(v){v.links[v.selectedIdx]&&v.links[v.selectedIdx].focus()}function U(v){var k=J(v,nb);return function(W){if(!a){if(!v.open)switch(W.keyCode){case et.ARROW_UP:case et.ARROW_DOWN:return W.stopPropagation()}switch(W.keyCode){case et.SPACE:case et.ENTER:return k(),W.stopPropagation(),W.preventDefault()}}}}function D(v){return r(function(k){var{relatedTarget:W,target:L}=k,oe=v.el[0],_e=oe.contains(W)||oe.contains(L);return _e||M(v),k.stopPropagation()})}return n})});var ab=c(ks=>{"use strict";Object.defineProperty(ks,"__esModule",{value:!0});ks.default=vB;function vB(e,t,r,n,i,o,a,s,u,f,h,p,d){return function(E){e(E);var T=E.form,_={name:T.attr("data-name")||T.attr("name")||"Untitled Form",pageId:T.attr("data-wf-page-id")||"",elementId:T.attr("data-wf-element-id")||"",source:t.href,test:r.env(),fields:{},fileUploads:{},dolphin:/pass[\s-_]?(word|code)|secret|login|credentials/i.test(T.html()),trackingCookies:n()};let w=T.attr("data-wf-flow");w&&(_.wfFlow=w),i(E);var m=o(T,_.fields);if(m)return a(m);if(_.fileUploads=s(T),u(E),!f){h(E);return}p.ajax({url:d,type:"POST",data:_,dataType:"json",crossDomain:!0}).done(function(C){C&&C.code===200&&(E.success=!0),h(E)}).fail(function(){h(E)})}}});var ub=c((Wz,sb)=>{"use strict";var Gi=Ge();Gi.define("forms",sb.exports=function(e,t){var r={},n=e(document),i,o=window.location,a=window.XDomainRequest&&!window.atob,s=".w-form",u,f=/e(-)?mail/i,h=/^\S+@\S+$/,p=window.alert,d=Gi.env(),E,T,_,w=/list-manage[1-9]?.com/i,m=t.debounce(function(){p("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")},100);r.ready=r.design=r.preview=function(){C(),!d&&!E&&R()};function C(){u=e("html").attr("data-wf-site"),T="https://webflow.com/api/v1/form/"+u,a&&T.indexOf("https://webflow.com")>=0&&(T=T.replace("https://webflow.com","https://formdata.webflow.com")),_=`${T}/signFile`,i=e(s+" form"),i.length&&i.each(A)}function A(F,X){var Y=e(X),U=e.data(X,s);U||(U=e.data(X,s,{form:Y})),P(U);var D=Y.closest("div.w-form");U.done=D.find("> .w-form-done"),U.fail=D.find("> .w-form-fail"),U.fileUploads=D.find(".w-file-upload"),U.fileUploads.each(function(W){B(W,U)});var v=U.form.attr("aria-label")||U.form.attr("data-name")||"Form";U.done.attr("aria-label")||U.form.attr("aria-label",v),U.done.attr("tabindex","-1"),U.done.attr("role","region"),U.done.attr("aria-label")||U.done.attr("aria-label",v+" success"),U.fail.attr("tabindex","-1"),U.fail.attr("role","region"),U.fail.attr("aria-label")||U.fail.attr("aria-label",v+" failure");var k=U.action=Y.attr("action");if(U.handler=null,U.redirect=Y.attr("data-redirect"),w.test(k)){U.handler=O;return}if(!k){if(u){U.handler=(()=>{let W=ab().default;return W(P,o,Gi,J,K,H,p,z,N,u,q,e,T)})();return}m()}}function R(){E=!0,n.on("submit",s+" form",function(W){var L=e.data(this,s);L.handler&&(L.evt=W,L.handler(L))});let F=".w-checkbox-input",X=".w-radio-input",Y="w--redirected-checked",U="w--redirected-focus",D="w--redirected-focus-visible",v=":focus-visible, [data-wf-focus-visible]",k=[["checkbox",F],["radio",X]];n.on("change",s+' form input[type="checkbox"]:not('+F+")",W=>{e(W.target).siblings(F).toggleClass(Y)}),n.on("change",s+' form input[type="radio"]',W=>{e(`input[name="${W.target.name}"]:not(${F})`).map((oe,_e)=>e(_e).siblings(X).removeClass(Y));let L=e(W.target);L.hasClass("w-radio-input")||L.siblings(X).addClass(Y)}),k.forEach(([W,L])=>{n.on("focus",s+` form input[type="${W}"]:not(`+L+")",oe=>{e(oe.target).siblings(L).addClass(U),e(oe.target).filter(v).siblings(L).addClass(D)}),n.on("blur",s+` form input[type="${W}"]:not(`+L+")",oe=>{e(oe.target).siblings(L).removeClass(`${U} ${D}`)})})}function P(F){var X=F.btn=F.form.find(':input[type="submit"]');F.wait=F.btn.attr("data-wait")||null,F.success=!1,X.prop("disabled",!1),F.label&&X.val(F.label)}function N(F){var X=F.btn,Y=F.wait;X.prop("disabled",!0),Y&&(F.label=X.val(),X.val(Y))}function H(F,X){var Y=null;return X=X||{},F.find(':input:not([type="submit"]):not([type="file"])').each(function(U,D){var v=e(D),k=v.attr("type"),W=v.attr("data-name")||v.attr("name")||"Field "+(U+1);W=encodeURIComponent(W);var L=v.val();if(k==="checkbox")L=v.is(":checked");else if(k==="radio"){if(X[W]===null||typeof X[W]=="string")return;L=F.find('input[name="'+v.attr("name")+'"]:checked').val()||null}typeof L=="string"&&(L=e.trim(L)),X[W]=L,Y=Y||te(v,k,W,L)}),Y}function z(F){var X={};return F.find(':input[type="file"]').each(function(Y,U){var D=e(U),v=D.attr("data-name")||D.attr("name")||"File "+(Y+1),k=D.attr("data-value");typeof k=="string"&&(k=e.trim(k)),X[v]=k}),X}let $={_mkto_trk:"marketo"};function J(){return document.cookie.split("; ").reduce(function(X,Y){let U=Y.split("="),D=U[0];if(D in $){let v=$[D],k=U.slice(1).join("=");X[v]=k}return X},{})}function te(F,X,Y,U){var D=null;return X==="password"?D="Passwords cannot be submitted.":F.attr("required")?U?f.test(F.attr("type"))&&(h.test(U)||(D="Please enter a valid email address for: "+Y)):D="Please fill out the required field: "+Y:Y==="g-recaptcha-response"&&!U&&(D="Please confirm you\u2019re not a robot."),D}function M(F){K(F),q(F)}function O(F){P(F);var X=F.form,Y={};if(/^https/.test(o.href)&&!/^https/.test(F.action)){X.attr("method","post");return}K(F);var U=H(X,Y);if(U)return p(U);N(F);var D;t.each(Y,function(L,oe){f.test(oe)&&(Y.EMAIL=L),/^((full[ _-]?)?name)$/i.test(oe)&&(D=L),/^(first[ _-]?name)$/i.test(oe)&&(Y.FNAME=L),/^(last[ _-]?name)$/i.test(oe)&&(Y.LNAME=L)}),D&&!Y.FNAME&&(D=D.split(" "),Y.FNAME=D[0],Y.LNAME=Y.LNAME||D[1]);var v=F.action.replace("/post?","/post-json?")+"&c=?",k=v.indexOf("u=")+2;k=v.substring(k,v.indexOf("&",k));var W=v.indexOf("id=")+3;W=v.substring(W,v.indexOf("&",W)),Y["b_"+k+"_"+W]="",e.ajax({url:v,data:Y,dataType:"jsonp"}).done(function(L){F.success=L.result==="success"||/already/.test(L.msg),F.success||console.info("MailChimp error: "+L.msg),q(F)}).fail(function(){q(F)})}function q(F){var X=F.form,Y=F.redirect,U=F.success;if(U&&Y){Gi.location(Y);return}F.done.toggle(U),F.fail.toggle(!U),U?F.done.focus():F.fail.focus(),X.toggle(!U),P(F)}function K(F){F.evt&&F.evt.preventDefault(),F.evt=null}function B(F,X){if(!X.fileUploads||!X.fileUploads[F])return;var Y,U=e(X.fileUploads[F]),D=U.find("> .w-file-upload-default"),v=U.find("> .w-file-upload-uploading"),k=U.find("> .w-file-upload-success"),W=U.find("> .w-file-upload-error"),L=D.find(".w-file-upload-input"),oe=D.find(".w-file-upload-label"),_e=oe.children(),se=W.find(".w-file-upload-error-msg"),g=k.find(".w-file-upload-file"),G=k.find(".w-file-remove-link"),Q=g.find(".w-file-upload-file-name"),j=se.attr("data-w-size-error"),ge=se.attr("data-w-type-error"),St=se.attr("data-w-generic-error");if(d||oe.on("click keydown",function(b){b.type==="keydown"&&b.which!==13&&b.which!==32||(b.preventDefault(),L.click())}),oe.find(".w-icon-file-upload-icon").attr("aria-hidden","true"),G.find(".w-icon-file-upload-remove").attr("aria-hidden","true"),d)L.on("click",function(b){b.preventDefault()}),oe.on("click",function(b){b.preventDefault()}),_e.on("click",function(b){b.preventDefault()});else{G.on("click keydown",function(b){if(b.type==="keydown"){if(b.which!==13&&b.which!==32)return;b.preventDefault()}L.removeAttr("data-value"),L.val(""),Q.html(""),D.toggle(!0),k.toggle(!1),oe.focus()}),L.on("change",function(b){Y=b.target&&b.target.files&&b.target.files[0],Y&&(D.toggle(!1),W.toggle(!1),v.toggle(!0),v.focus(),Q.text(Y.name),x()||N(X),X.fileUploads[F].uploading=!0,re(Y,y))});var ft=oe.outerHeight();L.height(ft),L.width(1)}function l(b){var S=b.responseJSON&&b.responseJSON.msg,Z=St;typeof S=="string"&&S.indexOf("InvalidFileTypeError")===0?Z=ge:typeof S=="string"&&S.indexOf("MaxFileSizeError")===0&&(Z=j),se.text(Z),L.removeAttr("data-value"),L.val(""),v.toggle(!1),D.toggle(!0),W.toggle(!0),W.focus(),X.fileUploads[F].uploading=!1,x()||P(X)}function y(b,S){if(b)return l(b);var Z=S.fileName,ie=S.postData,pe=S.fileId,V=S.s3Url;L.attr("data-value",pe),ne(V,ie,Y,Z,I)}function I(b){if(b)return l(b);v.toggle(!1),k.css("display","inline-block"),k.focus(),X.fileUploads[F].uploading=!1,x()||P(X)}function x(){var b=X.fileUploads&&X.fileUploads.toArray()||[];return b.some(function(S){return S.uploading})}}function re(F,X){var Y=new URLSearchParams({name:F.name,size:F.size});e.ajax({type:"GET",url:`${_}?${Y}`,crossDomain:!0}).done(function(U){X(null,U)}).fail(function(U){X(U)})}function ne(F,X,Y,U,D){var v=new FormData;for(var k in X)v.append(k,X[k]);v.append("file",Y,U),e.ajax({type:"POST",url:F,data:v,processData:!1,contentType:!1}).done(function(){D(null)}).fail(function(W){D(W)})}return r})});var lb=c((Xz,cb)=>{"use strict";var xt=Ge(),hB=yn(),Ce={ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,ESCAPE:27,SPACE:32,ENTER:13,HOME:36,END:35};xt.define("navbar",cb.exports=function(e,t){var r={},n=e.tram,i=e(window),o=e(document),a=t.debounce,s,u,f,h,p=xt.env(),d='<div class="w-nav-overlay" data-wf-ignore />',E=".w-nav",T="w--open",_="w--nav-dropdown-open",w="w--nav-dropdown-toggle-open",m="w--nav-dropdown-list-open",C="w--nav-link-open",A=hB.triggers,R=e();r.ready=r.design=r.preview=P,r.destroy=function(){R=e(),N(),u&&u.length&&u.each(J)};function P(){f=p&&xt.env("design"),h=xt.env("editor"),s=e(document.body),u=o.find(E),u.length&&(u.each($),N(),H())}function N(){xt.resize.off(z)}function H(){xt.resize.on(z)}function z(){u.each(D)}function $(g,G){var Q=e(G),j=e.data(G,E);j||(j=e.data(G,E,{open:!1,el:Q,config:{},selectedIdx:-1})),j.menu=Q.find(".w-nav-menu"),j.links=j.menu.find(".w-nav-link"),j.dropdowns=j.menu.find(".w-dropdown"),j.dropdownToggle=j.menu.find(".w-dropdown-toggle"),j.dropdownList=j.menu.find(".w-dropdown-list"),j.button=Q.find(".w-nav-button"),j.container=Q.find(".w-container"),j.overlayContainerId="w-nav-overlay-"+g,j.outside=Y(j);var ge=Q.find(".w-nav-brand");ge&&ge.attr("href")==="/"&&ge.attr("aria-label")==null&&ge.attr("aria-label","home"),j.button.attr("style","-webkit-user-select: text;"),j.button.attr("aria-label")==null&&j.button.attr("aria-label","menu"),j.button.attr("role","button"),j.button.attr("tabindex","0"),j.button.attr("aria-controls",j.overlayContainerId),j.button.attr("aria-haspopup","menu"),j.button.attr("aria-expanded","false"),j.el.off(E),j.button.off(E),j.menu.off(E),O(j),f?(te(j),j.el.on("setting"+E,q(j))):(M(j),j.button.on("click"+E,F(j)),j.menu.on("click"+E,"a",X(j)),j.button.on("keydown"+E,K(j)),j.el.on("keydown"+E,B(j))),D(g,G)}function J(g,G){var Q=e.data(G,E);Q&&(te(Q),e.removeData(G,E))}function te(g){g.overlay&&(se(g,!0),g.overlay.remove(),g.overlay=null)}function M(g){g.overlay||(g.overlay=e(d).appendTo(g.el),g.overlay.attr("id",g.overlayContainerId),g.parent=g.menu.parent(),se(g,!0))}function O(g){var G={},Q=g.config||{},j=G.animation=g.el.attr("data-animation")||"default";G.animOver=/^over/.test(j),G.animDirect=/left$/.test(j)?-1:1,Q.animation!==j&&g.open&&t.defer(ne,g),G.easing=g.el.attr("data-easing")||"ease",G.easing2=g.el.attr("data-easing2")||"ease";var ge=g.el.attr("data-duration");G.duration=ge!=null?Number(ge):400,G.docHeight=g.el.attr("data-doc-height"),g.config=G}function q(g){return function(G,Q){Q=Q||{};var j=i.width();O(g),Q.open===!0&&oe(g,!0),Q.open===!1&&se(g,!0),g.open&&t.defer(function(){j!==i.width()&&ne(g)})}}function K(g){return function(G){switch(G.keyCode){case Ce.SPACE:case Ce.ENTER:return F(g)(),G.preventDefault(),G.stopPropagation();case Ce.ESCAPE:return se(g),G.preventDefault(),G.stopPropagation();case Ce.ARROW_RIGHT:case Ce.ARROW_DOWN:case Ce.HOME:case Ce.END:return g.open?(G.keyCode===Ce.END?g.selectedIdx=g.links.length-1:g.selectedIdx=0,re(g),G.preventDefault(),G.stopPropagation()):(G.preventDefault(),G.stopPropagation())}}}function B(g){return function(G){if(g.open)switch(g.selectedIdx=g.links.index(document.activeElement),G.keyCode){case Ce.HOME:case Ce.END:return G.keyCode===Ce.END?g.selectedIdx=g.links.length-1:g.selectedIdx=0,re(g),G.preventDefault(),G.stopPropagation();case Ce.ESCAPE:return se(g),g.button.focus(),G.preventDefault(),G.stopPropagation();case Ce.ARROW_LEFT:case Ce.ARROW_UP:return g.selectedIdx=Math.max(-1,g.selectedIdx-1),re(g),G.preventDefault(),G.stopPropagation();case Ce.ARROW_RIGHT:case Ce.ARROW_DOWN:return g.selectedIdx=Math.min(g.links.length-1,g.selectedIdx+1),re(g),G.preventDefault(),G.stopPropagation()}}}function re(g){if(g.links[g.selectedIdx]){var G=g.links[g.selectedIdx];G.focus(),X(G)}}function ne(g){g.open&&(se(g,!0),oe(g,!0))}function F(g){return a(function(){g.open?se(g):oe(g)})}function X(g){return function(G){var Q=e(this),j=Q.attr("href");if(!xt.validClick(G.currentTarget)){G.preventDefault();return}j&&j.indexOf("#")===0&&g.open&&se(g)}}function Y(g){return g.outside&&o.off("click"+E,g.outside),function(G){var Q=e(G.target);h&&Q.closest(".w-editor-bem-EditorOverlay").length||U(g,Q)}}var U=a(function(g,G){if(g.open){var Q=G.closest(".w-nav-menu");g.menu.is(Q)||se(g)}});function D(g,G){var Q=e.data(G,E),j=Q.collapsed=Q.button.css("display")!=="none";if(Q.open&&!j&&!f&&se(Q,!0),Q.container.length){var ge=k(Q);Q.links.each(ge),Q.dropdowns.each(ge)}Q.open&&_e(Q)}var v="max-width";function k(g){var G=g.container.css(v);return G==="none"&&(G=""),function(Q,j){j=e(j),j.css(v,""),j.css(v)==="none"&&j.css(v,G)}}function W(g,G){G.setAttribute("data-nav-menu-open","")}function L(g,G){G.removeAttribute("data-nav-menu-open")}function oe(g,G){if(g.open)return;g.open=!0,g.menu.each(W),g.links.addClass(C),g.dropdowns.addClass(_),g.dropdownToggle.addClass(w),g.dropdownList.addClass(m),g.button.addClass(T);var Q=g.config,j=Q.animation;(j==="none"||!n.support.transform||Q.duration<=0)&&(G=!0);var ge=_e(g),St=g.menu.outerHeight(!0),ft=g.menu.outerWidth(!0),l=g.el.height(),y=g.el[0];if(D(0,y),A.intro(0,y),xt.redraw.up(),f||o.on("click"+E,g.outside),G){b();return}var I="transform "+Q.duration+"ms "+Q.easing;if(g.overlay&&(R=g.menu.prev(),g.overlay.show().append(g.menu)),Q.animOver){n(g.menu).add(I).set({x:Q.animDirect*ft,height:ge}).start({x:0}).then(b),g.overlay&&g.overlay.width(ft);return}var x=l+St;n(g.menu).add(I).set({y:-x}).start({y:0}).then(b);function b(){g.button.attr("aria-expanded","true")}}function _e(g){var G=g.config,Q=G.docHeight?o.height():s.height();return G.animOver?g.menu.height(Q):g.el.css("position")!=="fixed"&&(Q-=g.el.outerHeight(!0)),g.overlay&&g.overlay.height(Q),Q}function se(g,G){if(!g.open)return;g.open=!1,g.button.removeClass(T);var Q=g.config;if((Q.animation==="none"||!n.support.transform||Q.duration<=0)&&(G=!0),A.outro(0,g.el[0]),o.off("click"+E,g.outside),G){n(g.menu).stop(),y();return}var j="transform "+Q.duration+"ms "+Q.easing2,ge=g.menu.outerHeight(!0),St=g.menu.outerWidth(!0),ft=g.el.height();if(Q.animOver){n(g.menu).add(j).start({x:St*Q.animDirect}).then(y);return}var l=ft+ge;n(g.menu).add(j).start({y:-l}).then(y);function y(){g.menu.height(""),n(g.menu).set({x:0,y:0}),g.menu.each(L),g.links.removeClass(C),g.dropdowns.removeClass(_),g.dropdownToggle.removeClass(w),g.dropdownList.removeClass(m),g.overlay&&g.overlay.children().length&&(R.length?g.menu.insertAfter(R):g.menu.prependTo(g.parent),g.overlay.attr("style","").hide()),g.el.triggerHandler("w-close"),g.button.attr("aria-expanded","false")}}return r})});lu();pu();vu();Eu();_u();yn();$_();Z_();eb();rb();ob();ub();lb();})();
    /*!
     * tram.js v0.8.2-global
     * Cross-browser CSS3 transitions in JavaScript
     * https://github.com/bkwld/tram
     * MIT License
     */
    /*!
     * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
     *
     * http://underscorejs.org
     * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     * Underscore may be freely distributed under the MIT license.
     * @license MIT
     */
    /*! Bundled license information:
    
    timm/lib/timm.js:
      (*!
       * Timm
       *
       * Immutability helpers with fast reads and acceptable writes.
       *
       * @copyright Guillermo Grau Panea 2016
       * @license MIT
       *)
    */
    /**
     * ----------------------------------------------------------------------
     * Webflow: Interactions 2.0: Init
     */
    
Webflow.require('ix2').init({
    "events": {
        "e": {
            "id": "e",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".social-link",
                "originalId": "a94d5bc1-ca9b-16f5-556e-8d9de5abaaca",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".social-link",
                "originalId": "a94d5bc1-ca9b-16f5-556e-8d9de5abaaca",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709447842804
        },
        "e-2": {
            "id": "e-2",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".social-link",
                "originalId": "a94d5bc1-ca9b-16f5-556e-8d9de5abaaca",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".social-link",
                "originalId": "a94d5bc1-ca9b-16f5-556e-8d9de5abaaca",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709447842804
        },
        "e-3": {
            "id": "e-3",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-4"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".button-arrow",
                "originalId": "65ed7debeefb822fc0c8d416|0824661a-6962-76c5-9464-9d30396404b6",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".button-arrow",
                "originalId": "65ed7debeefb822fc0c8d416|0824661a-6962-76c5-9464-9d30396404b6",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709451190006
        },
        "e-4": {
            "id": "e-4",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-3"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".button-arrow",
                "originalId": "65ed7debeefb822fc0c8d416|0824661a-6962-76c5-9464-9d30396404b6",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".button-arrow",
                "originalId": "65ed7debeefb822fc0c8d416|0824661a-6962-76c5-9464-9d30396404b6",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709451190006
        },
        "e-5": {
            "id": "e-5",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-6"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ed7debeefb822fc0c8d416",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d416",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709454996948
        },
        "e-9": {
            "id": "e-9",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-36"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".dropdown",
                "originalId": "78d94d18-d722-b69b-33f3-3885688e7362",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".dropdown",
                "originalId": "78d94d18-d722-b69b-33f3-3885688e7362",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709471846427
        },
        "e-10": {
            "id": "e-10",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-35"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".dropdown",
                "originalId": "78d94d18-d722-b69b-33f3-3885688e7362",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".dropdown",
                "originalId": "78d94d18-d722-b69b-33f3-3885688e7362",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709471846427
        },
        "e-13": {
            "id": "e-13",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-14"
                }
            },
            "mediaQueries": ["medium", "small", "tiny"],
            "target": {
                "selector": ".burger-button",
                "originalId": "78d94d18-d722-b69b-33f3-3885688e739c",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".burger-button",
                "originalId": "78d94d18-d722-b69b-33f3-3885688e739c",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709523717938
        },
        "e-15": {
            "id": "e-15",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-16"
                }
            },
            "mediaQueries": ["medium", "small", "tiny"],
            "target": {
                "selector": ".close-button",
                "originalId": "78d94d18-d722-b69b-33f3-3885688e7398",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".close-button",
                "originalId": "78d94d18-d722-b69b-33f3-3885688e7398",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709523880614
        },
        "e-17": {
            "id": "e-17",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-18"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ed7debeefb822fc0c8d416",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d416",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709531058104
        },
        "e-18": {
            "id": "e-18",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-17"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ed7debeefb822fc0c8d416",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d416",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709531058104
        },
        "e-19": {
            "id": "e-19",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-20"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ed7debeefb822fc0c8d418",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d418",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709531339215
        },
        "e-20": {
            "id": "e-20",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-19"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ed7debeefb822fc0c8d418",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d418",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709531339250
        },
        "e-25": {
            "id": "e-25",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-26"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ed7debeefb822fc0c8d418",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d418",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709544560309
        },
        "e-27": {
            "id": "e-27",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-28"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ed7debeefb822fc0c8d422",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d422",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709545600116
        },
        "e-29": {
            "id": "e-29",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-30"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ed7debeefb822fc0c8d422",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d422",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709545618329
        },
        "e-30": {
            "id": "e-30",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-29"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ed7debeefb822fc0c8d422",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d422",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709545618360
        },
        "e-31": {
            "id": "e-31",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-40"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".template-card",
                "originalId": "65ed7debeefb822fc0c8d422|96c2886b-5b04-6df3-fee6-5ef5e8a56103",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".template-card",
                "originalId": "65ed7debeefb822fc0c8d422|96c2886b-5b04-6df3-fee6-5ef5e8a56103",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709548144729
        },
        "e-32": {
            "id": "e-32",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-89"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".template-card",
                "originalId": "65ed7debeefb822fc0c8d422|96c2886b-5b04-6df3-fee6-5ef5e8a56103",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".template-card",
                "originalId": "65ed7debeefb822fc0c8d422|96c2886b-5b04-6df3-fee6-5ef5e8a56103",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709548144729
        },
        "e-33": {
            "id": "e-33",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-34"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".question-item",
                "originalId": "65ed7debeefb822fc0c8d422|527166de-7bec-3061-fadc-0b639baef0d7",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".question-item",
                "originalId": "65ed7debeefb822fc0c8d422|527166de-7bec-3061-fadc-0b639baef0d7",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709560278953
        },
        "e-34": {
            "id": "e-34",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-33"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".question-item",
                "originalId": "65ed7debeefb822fc0c8d422|527166de-7bec-3061-fadc-0b639baef0d7",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".question-item",
                "originalId": "65ed7debeefb822fc0c8d422|527166de-7bec-3061-fadc-0b639baef0d7",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709560278953
        },
        "e-35": {
            "id": "e-35",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-36"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ed7debeefb822fc0c8d41d",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d41d",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709628387741
        },
        "e-36": {
            "id": "e-36",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-35"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ed7debeefb822fc0c8d41d",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d41d",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709628387772
        },
        "e-37": {
            "id": "e-37",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-38"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ed7debeefb822fc0c8d417",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d417",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709628423685
        },
        "e-39": {
            "id": "e-39",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-40"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ed7debeefb822fc0c8d417",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d417",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709628472052
        },
        "e-40": {
            "id": "e-40",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-89"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ed7debeefb822fc0c8d417",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d417",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709628472080
        },
        "e-41": {
            "id": "e-41",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-59"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ed7debeefb822fc0c8d41d",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d41d",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709629773264
        },
        "e-43": {
            "id": "e-43",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-44"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".button-outline",
                "originalId": "65ed7debeefb822fc0c8d41a|8c2c7ec7-9045-4e10-d762-d5921a9a18e1",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".button-outline",
                "originalId": "65ed7debeefb822fc0c8d41a|8c2c7ec7-9045-4e10-d762-d5921a9a18e1",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709711105755
        },
        "e-44": {
            "id": "e-44",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-60"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".button-outline",
                "originalId": "65ed7debeefb822fc0c8d41a|8c2c7ec7-9045-4e10-d762-d5921a9a18e1",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".button-outline",
                "originalId": "65ed7debeefb822fc0c8d41a|8c2c7ec7-9045-4e10-d762-d5921a9a18e1",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709711105755
        },
        "e-45": {
            "id": "e-45",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-46"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ed7debeefb822fc0c8d41a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d41a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709712254716
        },
        "e-46": {
            "id": "e-46",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-45"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ed7debeefb822fc0c8d41a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d41a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709712254716
        },
        "e-47": {
            "id": "e-47",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-48"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ed7debeefb822fc0c8d41a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d41a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709712275908
        },
        "e-49": {
            "id": "e-49",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-50"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ed7debeefb822fc0c8d418|7ae4d237-ac38-1b4d-a3a3-e82292210203",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d418|7ae4d237-ac38-1b4d-a3a3-e82292210203",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709713034844
        },
        "e-50": {
            "id": "e-50",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-49"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ed7debeefb822fc0c8d418|7ae4d237-ac38-1b4d-a3a3-e82292210203",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d418|7ae4d237-ac38-1b4d-a3a3-e82292210203",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709713034844
        },
        "e-51": {
            "id": "e-51",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-52"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ed7debeefb822fc0c8d418|f86d2da3-2f46-cd94-ee00-eeb21ff1fc40",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d418|f86d2da3-2f46-cd94-ee00-eeb21ff1fc40",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709716143039
        },
        "e-52": {
            "id": "e-52",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-51"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ed7debeefb822fc0c8d418|f86d2da3-2f46-cd94-ee00-eeb21ff1fc40",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d418|f86d2da3-2f46-cd94-ee00-eeb21ff1fc40",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709716143039
        },
        "e-55": {
            "id": "e-55",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-56"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ed7debeefb822fc0c8d41e|7b207555-8361-c871-5557-cbc7c5ab2459",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d41e|7b207555-8361-c871-5557-cbc7c5ab2459",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709716223215
        },
        "e-56": {
            "id": "e-56",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-55"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ed7debeefb822fc0c8d41e|7b207555-8361-c871-5557-cbc7c5ab2459",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d41e|7b207555-8361-c871-5557-cbc7c5ab2459",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709716223215
        },
        "e-59": {
            "id": "e-59",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-60"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".not-related",
                "originalId": "6533f7b62b811c0f7630dc1b|61d7d94c-d339-dc3a-4a36-46634eb92ea6",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".not-related",
                "originalId": "6533f7b62b811c0f7630dc1b|61d7d94c-d339-dc3a-4a36-46634eb92ea6",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1689507990406
        },
        "e-60": {
            "id": "e-60",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-59"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".not-related",
                "originalId": "6533f7b62b811c0f7630dc1b|61d7d94c-d339-dc3a-4a36-46634eb92ea6",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".not-related",
                "originalId": "6533f7b62b811c0f7630dc1b|61d7d94c-d339-dc3a-4a36-46634eb92ea6",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1689507990407
        },
        "e-61": {
            "id": "e-61",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-26",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-62"
                }
            },
            "mediaQueries": ["main", "tiny"],
            "target": {
                "selector": ".slider-main_button",
                "originalId": "8e440419-1331-05a7-01dd-ef9436b0d04a",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".slider-main_button",
                "originalId": "8e440419-1331-05a7-01dd-ef9436b0d04a",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709780218161
        },
        "e-62": {
            "id": "e-62",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-116"
                }
            },
            "mediaQueries": ["main", "tiny"],
            "target": {
                "selector": ".slider-main_button",
                "originalId": "8e440419-1331-05a7-01dd-ef9436b0d04a",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".slider-main_button",
                "originalId": "8e440419-1331-05a7-01dd-ef9436b0d04a",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709780218162
        },
        "e-63": {
            "id": "e-63",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-64"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "8e440419-1331-05a7-01dd-ef9436b0d056",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "8e440419-1331-05a7-01dd-ef9436b0d056",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709781661750
        },
        "e-64": {
            "id": "e-64",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-63"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "8e440419-1331-05a7-01dd-ef9436b0d056",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "8e440419-1331-05a7-01dd-ef9436b0d056",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709781661750
        },
        "e-65": {
            "id": "e-65",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-66"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ed7debeefb822fc0c8d41e",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d41e",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709782361927
        },
        "e-67": {
            "id": "e-67",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-68"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ed7debeefb822fc0c8d41e",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d41e",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709782379423
        },
        "e-68": {
            "id": "e-68",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-67"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ed7debeefb822fc0c8d41e",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d41e",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709782379424
        },
        "e-71": {
            "id": "e-71",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-72"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ed7debeefb822fc0c8d425|98881565-ff46-a8bb-6e18-af956f479de0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d425|98881565-ff46-a8bb-6e18-af956f479de0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709783046212
        },
        "e-72": {
            "id": "e-72",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-71"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ed7debeefb822fc0c8d425|98881565-ff46-a8bb-6e18-af956f479de0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d425|98881565-ff46-a8bb-6e18-af956f479de0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709783046212
        },
        "e-73": {
            "id": "e-73",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-74"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ed7debeefb822fc0c8d424|5b4024f4-e3c1-e25a-1e88-c531c8e66f93",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d424|5b4024f4-e3c1-e25a-1e88-c531c8e66f93",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709783061965
        },
        "e-74": {
            "id": "e-74",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-73"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ed7debeefb822fc0c8d424|5b4024f4-e3c1-e25a-1e88-c531c8e66f93",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d424|5b4024f4-e3c1-e25a-1e88-c531c8e66f93",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709783061965
        },
        "e-75": {
            "id": "e-75",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-76"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ed7debeefb822fc0c8d424",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d424",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709783069110
        },
        "e-77": {
            "id": "e-77",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-78"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ed7debeefb822fc0c8d424",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d424",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709783087543
        },
        "e-78": {
            "id": "e-78",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-77"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ed7debeefb822fc0c8d424",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d424",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709783087544
        },
        "e-79": {
            "id": "e-79",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-80"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ed7debeefb822fc0c8d425",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d425",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709783163328
        },
        "e-81": {
            "id": "e-81",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-82"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ed7debeefb822fc0c8d425",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d425",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709783173383
        },
        "e-82": {
            "id": "e-82",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-81"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ed7debeefb822fc0c8d425",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d425",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709783173384
        },
        "e-83": {
            "id": "e-83",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-84"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ed7debeefb822fc0c8d426",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d426",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709783224200
        },
        "e-85": {
            "id": "e-85",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-86"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ed7debeefb822fc0c8d426",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d426",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709783232423
        },
        "e-86": {
            "id": "e-86",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-85"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ed7debeefb822fc0c8d426",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d426",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709783232424
        },
        "e-89": {
            "id": "e-89",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small"],
            "target": {
                "id": "65ed7debeefb822fc0c8d425|9b9ab2a6-ca6e-8e26-a7e8-ac89ef30dd85",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "selector": ".grid-timeline.mobile-hidden",
                "originalId": "65ed7debeefb822fc0c8d425|9b9ab2a6-ca6e-8e26-a7e8-ac89ef30dd85",
                "appliesTo": "CLASS"
            }],
            "config": [{
                "continuousParameterGroupId": "a-30-p",
                "smoothing": 90,
                "startsEntering": true,
                "addStartOffset": true,
                "addOffsetValue": 20,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1697179891601
        },
        "e-90": {
            "id": "e-90",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-31",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-91"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".button-secondary.notch",
                "originalId": "6533f7b62b811c0f7630dc22|359c1a3c-6ba7-e256-f432-838eaa41885e",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".button-secondary.notch",
                "originalId": "6533f7b62b811c0f7630dc22|359c1a3c-6ba7-e256-f432-838eaa41885e",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1696960946578
        },
        "e-91": {
            "id": "e-91",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-32",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-90"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".button-secondary.notch",
                "originalId": "6533f7b62b811c0f7630dc22|359c1a3c-6ba7-e256-f432-838eaa41885e",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".button-secondary.notch",
                "originalId": "6533f7b62b811c0f7630dc22|359c1a3c-6ba7-e256-f432-838eaa41885e",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1696960946578
        },
        "e-93": {
            "id": "e-93",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-33",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small"],
            "target": {
                "id": "65ed7debeefb822fc0c8d426|9c176e27-4995-2f6b-10e7-a619683901af",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d426|9c176e27-4995-2f6b-10e7-a619683901af",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-33-p",
                "smoothing": 90,
                "startsEntering": true,
                "addStartOffset": true,
                "addOffsetValue": 20,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1709884105435
        },
        "e-94": {
            "id": "e-94",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-33",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small"],
            "target": {
                "id": "65ed7debeefb822fc0c8d425|9adda155-fdba-0700-60e8-1d22978d81dc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d425|9adda155-fdba-0700-60e8-1d22978d81dc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-33-p",
                "smoothing": 90,
                "startsEntering": true,
                "addStartOffset": true,
                "addOffsetValue": 20,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1709884756477
        },
        "e-95": {
            "id": "e-95",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-33",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small"],
            "target": {
                "id": "65ed7debeefb822fc0c8d426|f1d87c7b-d72f-d6ba-c47c-5fc378b3d7db",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d426|f1d87c7b-d72f-d6ba-c47c-5fc378b3d7db",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-33-p",
                "smoothing": 90,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1709885645986
        },
        "e-97": {
            "id": "e-97",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-33",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small"],
            "target": {
                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a7e0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a7e0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-33-p",
                "smoothing": 90,
                "startsEntering": true,
                "addStartOffset": true,
                "addOffsetValue": 20,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1709889998574
        },
        "e-99": {
            "id": "e-99",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small"],
            "target": {
                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a77e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a77e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-34-p",
                "smoothing": 90,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1709890282027
        },
        "e-100": {
            "id": "e-100",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-101"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ed7debeefb822fc0c8d426|2b9bbe14-c8bb-94c7-fc79-6f06571996a1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d426|2b9bbe14-c8bb-94c7-fc79-6f06571996a1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709952472524
        },
        "e-101": {
            "id": "e-101",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-100"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ed7debeefb822fc0c8d426|2b9bbe14-c8bb-94c7-fc79-6f06571996a1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d426|2b9bbe14-c8bb-94c7-fc79-6f06571996a1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709952472524
        },
        "e-102": {
            "id": "e-102",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-35",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "65ed7debeefb822fc0c8d426|abab80d4-c073-5c5f-6e5a-af5df7df5c13",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d426|abab80d4-c073-5c5f-6e5a-af5df7df5c13",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-35-p",
                "smoothing": 90,
                "startsEntering": false,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1709952832458
        },
        "e-103": {
            "id": "e-103",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-104"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ed7debeefb822fc0c8d426|0660585a-9bd6-704f-861d-49f808c9748b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d426|0660585a-9bd6-704f-861d-49f808c9748b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709953755357
        },
        "e-104": {
            "id": "e-104",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-103"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ed7debeefb822fc0c8d426|0660585a-9bd6-704f-861d-49f808c9748b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d426|0660585a-9bd6-704f-861d-49f808c9748b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709953755357
        },
        "e-105": {
            "id": "e-105",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-36",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ed7debeefb822fc0c8d425|2395707d-5d11-e749-ab86-7bd025d08d64",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d425|2395707d-5d11-e749-ab86-7bd025d08d64",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-36-p",
                "smoothing": 90,
                "startsEntering": false,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1709956499285
        },
        "e-106": {
            "id": "e-106",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-107"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ed7debeefb822fc0c8d41b",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d41b",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709957062718
        },
        "e-107": {
            "id": "e-107",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-106"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ed7debeefb822fc0c8d41b",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d41b",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709957062718
        },
        "e-110": {
            "id": "e-110",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-111"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".certiy-button",
                "originalId": "65ed7debeefb822fc0c8d41b|3f7483d5-5c71-fd7e-8bb4-bd2f007c19a2",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".certiy-button",
                "originalId": "65ed7debeefb822fc0c8d41b|3f7483d5-5c71-fd7e-8bb4-bd2f007c19a2",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709975341550
        },
        "e-111": {
            "id": "e-111",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-39",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-110"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".certiy-button",
                "originalId": "65ed7debeefb822fc0c8d41b|3f7483d5-5c71-fd7e-8bb4-bd2f007c19a2",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".certiy-button",
                "originalId": "65ed7debeefb822fc0c8d41b|3f7483d5-5c71-fd7e-8bb4-bd2f007c19a2",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709975341551
        },
        "e-112": {
            "id": "e-112",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ed7debeefb822fc0c8d41b|b4d56568-23a1-909c-5579-de34b814cacd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d41b|b4d56568-23a1-909c-5579-de34b814cacd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-37-p",
                "smoothing": 90,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1709977566023
        },
        "e-113": {
            "id": "e-113",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-114"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ed7debeefb822fc0c8d40d",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d40d",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1710057829131
        },
        "e-114": {
            "id": "e-114",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-113"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ed7debeefb822fc0c8d40d",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d40d",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1710057829132
        },
        "e-115": {
            "id": "e-115",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-40",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "65ed7debeefb822fc0c8d40d|787f0b0f-ddc8-c2f2-1578-bea7dd83668b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d40d|787f0b0f-ddc8-c2f2-1578-bea7dd83668b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-40-p",
                "smoothing": 90,
                "startsEntering": false,
                "addStartOffset": true,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": true,
                "endOffsetValue": 50
            }],
            "createdOn": 1697615541842
        },
        "e-116": {
            "id": "e-116",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-41",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["medium", "small"],
            "target": {
                "id": "65ed7debeefb822fc0c8d40d|787f0b0f-ddc8-c2f2-1578-bea7dd83668b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d40d|787f0b0f-ddc8-c2f2-1578-bea7dd83668b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-41-p",
                "smoothing": 90,
                "startsEntering": false,
                "addStartOffset": true,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": true,
                "endOffsetValue": 50
            }],
            "createdOn": 1697719048225
        },
        "e-133": {
            "id": "e-133",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-51",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-134"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "5c66c1e4-8e2e-b27d-3e20-48066c79f46e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "5c66c1e4-8e2e-b27d-3e20-48066c79f46e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1710317525469
        },
        "e-134": {
            "id": "e-134",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-52",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-133"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "5c66c1e4-8e2e-b27d-3e20-48066c79f46e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "5c66c1e4-8e2e-b27d-3e20-48066c79f46e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1710317525470
        },
        "e-135": {
            "id": "e-135",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-51",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-136"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".button-arrow",
                "originalId": "5c66c1e4-8e2e-b27d-3e20-48066c79f479",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".button-arrow",
                "originalId": "5c66c1e4-8e2e-b27d-3e20-48066c79f479",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1710317762718
        },
        "e-136": {
            "id": "e-136",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-52",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-135"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".button-arrow",
                "originalId": "5c66c1e4-8e2e-b27d-3e20-48066c79f479",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".button-arrow",
                "originalId": "5c66c1e4-8e2e-b27d-3e20-48066c79f479",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1710317762718
        },
        "e-137": {
            "id": "e-137",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-53",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-138"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".nav_component",
                "originalId": "78d94d18-d722-b69b-33f3-3885688e734e",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".nav_component",
                "originalId": "78d94d18-d722-b69b-33f3-3885688e734e",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1710317898589
        },
        "e-139": {
            "id": "e-139",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-54",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-140"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".main-button",
                "originalId": "65ed7debeefb822fc0c8d424|5b4024f4-e3c1-e25a-1e88-c531c8e66f94",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".main-button",
                "originalId": "65ed7debeefb822fc0c8d424|5b4024f4-e3c1-e25a-1e88-c531c8e66f94",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1710322536736
        },
        "e-140": {
            "id": "e-140",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-55",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-139"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".main-button",
                "originalId": "65ed7debeefb822fc0c8d424|5b4024f4-e3c1-e25a-1e88-c531c8e66f94",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".main-button",
                "originalId": "65ed7debeefb822fc0c8d424|5b4024f4-e3c1-e25a-1e88-c531c8e66f94",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1710322536737
        },
        "e-141": {
            "id": "e-141",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-142"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ed7debeefb822fc0c8d423",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d423",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1710323395148
        },
        "e-142": {
            "id": "e-142",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-141"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ed7debeefb822fc0c8d423",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d423",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1710323395149
        },
        "e-143": {
            "id": "e-143",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-56",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-144"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".footer-link-2",
                "originalId": "63b24a19085eb0cdeda0accb|4f770185-bd02-f5a9-a7cf-79e9bf025d56",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".footer-link-2",
                "originalId": "63b24a19085eb0cdeda0accb|4f770185-bd02-f5a9-a7cf-79e9bf025d56",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1666019254991
        },
        "e-144": {
            "id": "e-144",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-57",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-143"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".footer-link-2",
                "originalId": "63b24a19085eb0cdeda0accb|4f770185-bd02-f5a9-a7cf-79e9bf025d56",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".footer-link-2",
                "originalId": "63b24a19085eb0cdeda0accb|4f770185-bd02-f5a9-a7cf-79e9bf025d56",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1666019254991
        },
        "e-145": {
            "id": "e-145",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-58",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "5c66c1e4-8e2e-b27d-3e20-48066c79f45f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "5c66c1e4-8e2e-b27d-3e20-48066c79f45f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-58-p",
                "smoothing": 100,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1710420384557
        },
        "e-146": {
            "id": "e-146",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-147"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65ed7debeefb822fc0c8d40d",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d40d",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1710420855245
        },
        "e-148": {
            "id": "e-148",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-59",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-149"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "65ed7debeefb822fc0c8d40d|492cac65-7fa2-8fc3-56b3-315766a035f3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d40d|492cac65-7fa2-8fc3-56b3-315766a035f3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1710488502297
        },
        "e-149": {
            "id": "e-149",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-60",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-148"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "65ed7debeefb822fc0c8d40d|492cac65-7fa2-8fc3-56b3-315766a035f3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65ed7debeefb822fc0c8d40d|492cac65-7fa2-8fc3-56b3-315766a035f3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1710488502298
        },
        "e-150": {
            "id": "e-150",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-61",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-151"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "661f5e68199f522310867d27|a171883e-9f00-ff6c-8223-2714b9798d57",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "661f5e68199f522310867d27|a171883e-9f00-ff6c-8223-2714b9798d57",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1713337181601
        },
        "e-151": {
            "id": "e-151",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-62",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-150"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "661f5e68199f522310867d27|a171883e-9f00-ff6c-8223-2714b9798d57",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "661f5e68199f522310867d27|a171883e-9f00-ff6c-8223-2714b9798d57",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1713337181602
        },
        "e-152": {
            "id": "e-152",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-153"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "661f5e68199f522310867d27",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "661f5e68199f522310867d27",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1713337507497
        },
        "e-153": {
            "id": "e-153",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-152"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "661f5e68199f522310867d27",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "661f5e68199f522310867d27",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1713337507498
        },
        "e-154": {
            "id": "e-154",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-155"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "661f5e68199f522310867d27",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "661f5e68199f522310867d27",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1713337539617
        },
        "e-158": {
            "id": "e-158",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-59",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-159"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "661f78b5bcabed04e346e574|46e0cb12-c513-64a1-f432-8cbfe7241e65",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "661f78b5bcabed04e346e574|46e0cb12-c513-64a1-f432-8cbfe7241e65",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1713338700332
        },
        "e-159": {
            "id": "e-159",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-60",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-158"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "661f78b5bcabed04e346e574|46e0cb12-c513-64a1-f432-8cbfe7241e65",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "661f78b5bcabed04e346e574|46e0cb12-c513-64a1-f432-8cbfe7241e65",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1713338700332
        },
        "e-160": {
            "id": "e-160",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-40",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "661f78b5bcabed04e346e574|af1469bc-a67c-5518-5eef-273950534c54",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "661f78b5bcabed04e346e574|af1469bc-a67c-5518-5eef-273950534c54",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-40-p",
                "smoothing": 90,
                "startsEntering": false,
                "addStartOffset": true,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": true,
                "endOffsetValue": 50
            }],
            "createdOn": 1713339118949
        },
        "e-161": {
            "id": "e-161",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-41",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["medium", "small"],
            "target": {
                "id": "661f78b5bcabed04e346e574|af1469bc-a67c-5518-5eef-273950534c54",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "661f78b5bcabed04e346e574|af1469bc-a67c-5518-5eef-273950534c54",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-41-p",
                "smoothing": 90,
                "startsEntering": false,
                "addStartOffset": true,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": true,
                "endOffsetValue": 50
            }],
            "createdOn": 1713339118949
        }
    },
    "actionLists": {
        "a": {
            "id": "a",
            "title": "Social Link Hover In",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".social-link",
                            "selectorGuids": ["2ead4137-2707-44a5-31ad-4d78baa587ff"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".social-link",
                            "selectorGuids": ["2ead4137-2707-44a5-31ad-4d78baa587ff"]
                        },
                        "xValue": 1.2,
                        "yValue": 1.2,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1709447869261
        },
        "a-2": {
            "id": "a-2",
            "title": "Social Link Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-2-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".social-link",
                            "selectorGuids": ["2ead4137-2707-44a5-31ad-4d78baa587ff"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1709447869261
        },
        "a-3": {
            "id": "a-3",
            "title": "Button Arrow Hover In",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-3-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".text-arrow",
                            "selectorGuids": ["7997717e-fcf8-a103-8305-0bbaab98820e"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-3-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-arrow-icon",
                            "selectorGuids": ["84cf50a3-d112-4dc8-2a65-e957c9241db4"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-3-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".text--arrow-absolute",
                            "selectorGuids": ["f7aea23a-33c6-f98f-b0ca-4d2eb802d490"]
                        },
                        "yValue": 101,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-3-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".text-arrow",
                            "selectorGuids": ["7997717e-fcf8-a103-8305-0bbaab98820e"]
                        },
                        "yValue": -101,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-3-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".text--arrow-absolute",
                            "selectorGuids": ["f7aea23a-33c6-f98f-b0ca-4d2eb802d490"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-3-n-6",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-arrow-icon",
                            "selectorGuids": ["84cf50a3-d112-4dc8-2a65-e957c9241db4"]
                        },
                        "zValue": 45,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1709451215512
        },
        "a-4": {
            "id": "a-4",
            "title": "Button Arrow Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-4-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".text-arrow",
                            "selectorGuids": ["7997717e-fcf8-a103-8305-0bbaab98820e"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-4-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".text--arrow-absolute",
                            "selectorGuids": ["f7aea23a-33c6-f98f-b0ca-4d2eb802d490"]
                        },
                        "yValue": 101,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-4-n-6",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-arrow-icon",
                            "selectorGuids": ["84cf50a3-d112-4dc8-2a65-e957c9241db4"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1709451215512
        },
        "a-5": {
            "id": "a-5",
            "title": "Main planet load",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-5-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".blue-planet",
                            "selectorGuids": ["f0fc779e-277d-3867-be5c-98244698cc88"]
                        },
                        "xValue": 0.95,
                        "yValue": 0.95,
                        "locked": true
                    }
                }, {
                    "id": "a-5-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".light-blue-planet",
                            "selectorGuids": ["44e59e24-5325-c8f4-e05d-ddf34fb7e63d"]
                        },
                        "xValue": 0.9,
                        "yValue": 0.9,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-5-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 6000,
                        "target": {
                            "selector": ".blue-planet",
                            "selectorGuids": ["f0fc779e-277d-3867-be5c-98244698cc88"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-5-n-4",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 6000,
                        "target": {
                            "selector": ".light-blue-planet",
                            "selectorGuids": ["44e59e24-5325-c8f4-e05d-ddf34fb7e63d"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-5-n-7",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 6000,
                        "target": {
                            "selector": ".blue-planet",
                            "selectorGuids": ["f0fc779e-277d-3867-be5c-98244698cc88"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-5-n-8",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 6000,
                        "target": {
                            "selector": ".light-blue-planet",
                            "selectorGuids": ["44e59e24-5325-c8f4-e05d-ddf34fb7e63d"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-5-n-5",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 6000,
                        "target": {
                            "selector": ".blue-planet",
                            "selectorGuids": ["f0fc779e-277d-3867-be5c-98244698cc88"]
                        },
                        "xValue": 0.95,
                        "yValue": 0.95,
                        "locked": true
                    }
                }, {
                    "id": "a-5-n-6",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 8000,
                        "target": {
                            "selector": ".light-blue-planet",
                            "selectorGuids": ["44e59e24-5325-c8f4-e05d-ddf34fb7e63d"]
                        },
                        "xValue": 0.9,
                        "yValue": 0.9,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1709455012680
        },
        "a-6": {
            "id": "a-6",
            "title": "Dropdown open",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-6-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown-list",
                            "selectorGuids": ["135828a3-663d-3796-ef2b-1ee873bc95e6"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "locked": true
                    }
                }, {
                    "id": "a-6-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown-list",
                            "selectorGuids": ["135828a3-663d-3796-ef2b-1ee873bc95e6"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-6-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".line-vert",
                            "selectorGuids": ["c4681cc9-476a-8836-269a-1a676c5f7d06"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-6-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown-list",
                            "selectorGuids": ["135828a3-663d-3796-ef2b-1ee873bc95e6"]
                        },
                        "value": "block"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-6-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown-list",
                            "selectorGuids": ["135828a3-663d-3796-ef2b-1ee873bc95e6"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-6-n-4",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".line-vert",
                            "selectorGuids": ["c4681cc9-476a-8836-269a-1a676c5f7d06"]
                        },
                        "zValue": -90,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1709471853617
        },
        "a-7": {
            "id": "a-7",
            "title": "Dropdown close",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-7-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown-list",
                            "selectorGuids": ["135828a3-663d-3796-ef2b-1ee873bc95e6"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "locked": true
                    }
                }, {
                    "id": "a-7-n-4",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".line-vert",
                            "selectorGuids": ["c4681cc9-476a-8836-269a-1a676c5f7d06"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-7-n-6",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown-list",
                            "selectorGuids": ["135828a3-663d-3796-ef2b-1ee873bc95e6"]
                        },
                        "globalSwatchId": "--background-color--background-secondary",
                        "rValue": 38,
                        "bValue": 42,
                        "gValue": 39,
                        "aValue": 1
                    }
                }, {
                    "id": "a-7-n-7",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown-list",
                            "selectorGuids": ["135828a3-663d-3796-ef2b-1ee873bc95e6"]
                        },
                        "globalSwatchId": "--border-color--border-primary",
                        "rValue": 242,
                        "bValue": 242,
                        "gValue": 242,
                        "aValue": 0.3
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-7-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown-list",
                            "selectorGuids": ["135828a3-663d-3796-ef2b-1ee873bc95e6"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1709471853617
        },
        "a-10": {
            "id": "a-10",
            "title": "Burger Menu Open",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-10-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".nav_menu",
                            "selectorGuids": ["e1351820-8d34-15f6-35f2-a0e9263a63a9"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-10-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".nav_menu",
                            "selectorGuids": ["e1351820-8d34-15f6-35f2-a0e9263a63a9"]
                        },
                        "yValue": -101,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-10-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".nav_menu",
                            "selectorGuids": ["e1351820-8d34-15f6-35f2-a0e9263a63a9"]
                        },
                        "value": "flex"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-10-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".nav_menu",
                            "selectorGuids": ["e1351820-8d34-15f6-35f2-a0e9263a63a9"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1709523726198
        },
        "a-11": {
            "id": "a-11",
            "title": "Burger Menu Close",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-11-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "selector": ".nav_menu",
                            "selectorGuids": ["e1351820-8d34-15f6-35f2-a0e9263a63a9"]
                        },
                        "yValue": -101,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-11-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".nav_menu",
                            "selectorGuids": ["e1351820-8d34-15f6-35f2-a0e9263a63a9"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1709523726198
        },
        "a-12": {
            "id": "a-12",
            "title": "Nav scroll Up",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-12-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "selector": ".nav_component",
                            "selectorGuids": ["e1351820-8d34-15f6-35f2-a0e9263a63a5"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1709531064342
        },
        "a-13": {
            "id": "a-13",
            "title": "Nav scroll Down",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-13-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "selector": ".nav_component",
                            "selectorGuids": ["e1351820-8d34-15f6-35f2-a0e9263a63a5"]
                        },
                        "yValue": -101,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1709531064342
        },
        "a-16": {
            "id": "a-16",
            "title": "Template hover in",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-16-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-ration-2-8-3-5",
                            "selectorGuids": ["fe6e42a5-fac2-97e6-45d3-f4cde75f3cf9"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-16-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".template-card",
                            "selectorGuids": ["be6272e9-fde1-6d20-5eaf-069543303cd1"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-16-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-ration-2-8-3-5",
                            "selectorGuids": ["fe6e42a5-fac2-97e6-45d3-f4cde75f3cf9"]
                        },
                        "xValue": 1.2,
                        "yValue": 1.2,
                        "locked": true
                    }
                }, {
                    "id": "a-16-n-4",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".template-card",
                            "selectorGuids": ["be6272e9-fde1-6d20-5eaf-069543303cd1"]
                        },
                        "xValue": 0.93,
                        "yValue": 0.93,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1709548169004
        },
        "a-17": {
            "id": "a-17",
            "title": "Template hover in 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-17-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-ration-2-8-3-5",
                            "selectorGuids": ["fe6e42a5-fac2-97e6-45d3-f4cde75f3cf9"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-17-n-4",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 500,
                        "target": {
                            "selector": ".template-card",
                            "selectorGuids": ["be6272e9-fde1-6d20-5eaf-069543303cd1"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1709548169004
        },
        "a-18": {
            "id": "a-18",
            "title": "Question Open",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-18-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".answer-item",
                            "selectorGuids": ["47af167e-569a-b4c1-b0ac-51a30c19cc50"]
                        },
                        "widthValue": 100,
                        "heightValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-18-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".line-vert.is-yellow",
                            "selectorGuids": ["c4681cc9-476a-8836-269a-1a676c5f7d06", "2dfaf791-cb6e-07ff-fa1a-2b1a96fe8a5e"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-18-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".answer-item",
                            "selectorGuids": ["47af167e-569a-b4c1-b0ac-51a30c19cc50"]
                        },
                        "widthValue": 100,
                        "widthUnit": "%",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }, {
                    "id": "a-18-n-4",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".line-vert.is-yellow",
                            "selectorGuids": ["c4681cc9-476a-8836-269a-1a676c5f7d06", "2dfaf791-cb6e-07ff-fa1a-2b1a96fe8a5e"]
                        },
                        "zValue": -90,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1709560287440
        },
        "a-19": {
            "id": "a-19",
            "title": "Question close",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-19-n-3",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".answer-item",
                            "selectorGuids": ["47af167e-569a-b4c1-b0ac-51a30c19cc50"]
                        },
                        "widthValue": 100,
                        "heightValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-19-n-4",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".line-vert.is-yellow",
                            "selectorGuids": ["c4681cc9-476a-8836-269a-1a676c5f7d06", "2dfaf791-cb6e-07ff-fa1a-2b1a96fe8a5e"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1709560287440
        },
        "a-20": {
            "id": "a-20",
            "title": "button-outline Hover in",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-20-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".bg-button-outline",
                            "selectorGuids": ["359d9de2-28bf-1cc7-d01f-dba8f3e54648"]
                        },
                        "yValue": 101,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-20-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".text-outline",
                            "selectorGuids": ["a5d013c9-944d-a463-97bb-b83c04b4add4"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-20-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".text-outline-absolute",
                            "selectorGuids": ["14a621e4-5c8c-8e6e-5fd8-d7a27e598f58"]
                        },
                        "yValue": 101,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-20-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".bg-button-outline",
                            "selectorGuids": ["359d9de2-28bf-1cc7-d01f-dba8f3e54648"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-20-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".text-outline",
                            "selectorGuids": ["a5d013c9-944d-a463-97bb-b83c04b4add4"]
                        },
                        "yValue": -101,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-20-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".text-outline-absolute",
                            "selectorGuids": ["14a621e4-5c8c-8e6e-5fd8-d7a27e598f58"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1709711119320
        },
        "a-21": {
            "id": "a-21",
            "title": "button-outline Hover out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-21-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".bg-button-outline",
                            "selectorGuids": ["359d9de2-28bf-1cc7-d01f-dba8f3e54648"]
                        },
                        "yValue": -101,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-21-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".text-outline",
                            "selectorGuids": ["a5d013c9-944d-a463-97bb-b83c04b4add4"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-21-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".text-outline-absolute",
                            "selectorGuids": ["14a621e4-5c8c-8e6e-5fd8-d7a27e598f58"]
                        },
                        "yValue": 101,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-21-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".bg-button-outline",
                            "selectorGuids": ["359d9de2-28bf-1cc7-d01f-dba8f3e54648"]
                        },
                        "yValue": 101,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1709711119320
        },
        "a-15": {
            "id": "a-15",
            "title": "CTA hide",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-15-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".cta-sticky",
                            "selectorGuids": ["61bd1a96-f12f-2630-a77a-9336d169accd"]
                        },
                        "yValue": 101,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1709541338049
        },
        "a-14": {
            "id": "a-14",
            "title": "show CTA",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-14-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".cta-sticky",
                            "selectorGuids": ["61bd1a96-f12f-2630-a77a-9336d169accd"]
                        },
                        "yValue": 101,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-14-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "selector": ".cta-sticky",
                            "selectorGuids": ["61bd1a96-f12f-2630-a77a-9336d169accd"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1709541151184
        },
        "a-24": {
            "id": "a-24",
            "title": "hover in",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-24-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "65ed7debeefb822fc0c8d41e|f00d5d21-9f30-bf6b-93be-90e47e56466f"
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-24-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "65ed7debeefb822fc0c8d41e|f00d5d21-9f30-bf6b-93be-90e47e564671"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-24-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "65ed7debeefb822fc0c8d41e|f00d5d21-9f30-bf6b-93be-90e47e564671"
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-24-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "65ed7debeefb822fc0c8d41e|f00d5d21-9f30-bf6b-93be-90e47e564670"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-24-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "65ed7debeefb822fc0c8d41e|f00d5d21-9f30-bf6b-93be-90e47e564670"
                        },
                        "xValue": -50,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-24-n-6",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "65ed7debeefb822fc0c8d41e|f00d5d21-9f30-bf6b-93be-90e47e56466f"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-24-n-7",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 600,
                        "target": {
                            "id": "65ed7debeefb822fc0c8d41e|f00d5d21-9f30-bf6b-93be-90e47e56466f"
                        },
                        "xValue": 0.9,
                        "yValue": 0.9,
                        "locked": true
                    }
                }, {
                    "id": "a-24-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 600,
                        "target": {
                            "id": "65ed7debeefb822fc0c8d41e|f00d5d21-9f30-bf6b-93be-90e47e564671"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-24-n-9",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 600,
                        "target": {
                            "id": "65ed7debeefb822fc0c8d41e|f00d5d21-9f30-bf6b-93be-90e47e564671"
                        },
                        "xValue": 50,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-24-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 600,
                        "target": {
                            "id": "65ed7debeefb822fc0c8d41e|f00d5d21-9f30-bf6b-93be-90e47e564670"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-24-n-11",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 600,
                        "target": {
                            "id": "65ed7debeefb822fc0c8d41e|f00d5d21-9f30-bf6b-93be-90e47e564670"
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-24-n-12",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 600,
                        "target": {
                            "id": "65ed7debeefb822fc0c8d41e|f00d5d21-9f30-bf6b-93be-90e47e56466f"
                        },
                        "zValue": 45,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1689508000195
        },
        "a-25": {
            "id": "a-25",
            "title": "hover out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-25-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "id": "65ed7debeefb822fc0c8d41e|f00d5d21-9f30-bf6b-93be-90e47e56466f"
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-25-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "id": "65ed7debeefb822fc0c8d41e|f00d5d21-9f30-bf6b-93be-90e47e564671"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-25-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "id": "65ed7debeefb822fc0c8d41e|f00d5d21-9f30-bf6b-93be-90e47e564671"
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-25-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "id": "65ed7debeefb822fc0c8d41e|f00d5d21-9f30-bf6b-93be-90e47e564670"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-25-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "id": "65ed7debeefb822fc0c8d41e|f00d5d21-9f30-bf6b-93be-90e47e564670"
                        },
                        "xValue": -50,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-25-n-6",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "id": "65ed7debeefb822fc0c8d41e|f00d5d21-9f30-bf6b-93be-90e47e56466f"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1689508000195
        },
        "a-26": {
            "id": "a-26",
            "title": "slider-button Hover In",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-26-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".slider-main_button",
                            "selectorGuids": ["28fcc527-1bd9-20c1-8a0c-e8876ddc22e8"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-26-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".slider-main_button",
                            "selectorGuids": ["28fcc527-1bd9-20c1-8a0c-e8876ddc22e8"]
                        },
                        "xValue": 0.9,
                        "yValue": 0.9,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1709780243443
        },
        "a-27": {
            "id": "a-27",
            "title": "slider-button Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-27-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".slider-main_button",
                            "selectorGuids": ["28fcc527-1bd9-20c1-8a0c-e8876ddc22e8"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1709780243443
        },
        "a-28": {
            "id": "a-28",
            "title": "Read more button fisrt click",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-28-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "boundaryMode": true,
                            "id": "8e440419-1331-05a7-01dd-ef9436b0d053"
                        },
                        "widthValue": 100,
                        "heightValue": 100,
                        "widthUnit": "%",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-28-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "boundaryMode": true,
                            "id": "8e440419-1331-05a7-01dd-ef9436b0d053"
                        },
                        "widthValue": 100,
                        "widthUnit": "%",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1709781549365
        },
        "a-29": {
            "id": "a-29",
            "title": "Read more button secound-click",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-29-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "boundaryMode": true,
                            "id": "8e440419-1331-05a7-01dd-ef9436b0d053"
                        },
                        "widthValue": 100,
                        "heightValue": 100,
                        "widthUnit": "%",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1709781549365
        },
        "a-30": {
            "id": "a-30",
            "title": "Timeline desktop four",
            "continuousParameterGroups": [{
                "id": "a-30-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-30-n",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d425|9b9ab2a6-ca6e-8e26-a7e8-ac89ef30dd9f"
                            },
                            "heightValue": 0,
                            "widthUnit": "AUTO",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }, {
                        "id": "a-30-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d425|9b9ab2a6-ca6e-8e26-a7e8-ac89ef30dd89"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-30-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d425|9b9ab2a6-ca6e-8e26-a7e8-ac89ef30dd8c"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-30-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d425|9b9ab2a6-ca6e-8e26-a7e8-ac89ef30dda4"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-30-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d425|9b9ab2a6-ca6e-8e26-a7e8-ac89ef30dda7"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-30-n-7",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d425|9b9ab2a6-ca6e-8e26-a7e8-ac89ef30ddb2"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-30-n-8",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d425|9b9ab2a6-ca6e-8e26-a7e8-ac89ef30ddb5"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-30-n-9",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d425|9b9ab2a6-ca6e-8e26-a7e8-ac89ef30dd90"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-30-n-10",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d425|9b9ab2a6-ca6e-8e26-a7e8-ac89ef30dd93"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-30-n-11",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d425|9b9ab2a6-ca6e-8e26-a7e8-ac89ef30dd97"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-30-n-12",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d425|9b9ab2a6-ca6e-8e26-a7e8-ac89ef30dd9a"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-30-n-13",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d425|9b9ab2a6-ca6e-8e26-a7e8-ac89ef30ddb9"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-30-n-14",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d425|9b9ab2a6-ca6e-8e26-a7e8-ac89ef30ddbc"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-30-n-42",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d425|4c928c28-d832-5eb3-4cbb-e80d38a30d98"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-30-n-43",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d425|4c928c28-d832-5eb3-4cbb-e80d38a30d9b"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-30-n-44",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d425|7a67a4be-4fb2-a4c3-ff95-3dae84ecae88"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-30-n-45",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d425|7a67a4be-4fb2-a4c3-ff95-3dae84ecae8b"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 3,
                    "actionItems": [{
                        "id": "a-30-n-15",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d425|9b9ab2a6-ca6e-8e26-a7e8-ac89ef30dd89"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-30-n-17",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d425|9b9ab2a6-ca6e-8e26-a7e8-ac89ef30dda4"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-30-n-18",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d425|9b9ab2a6-ca6e-8e26-a7e8-ac89ef30dda7"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 5,
                    "actionItems": [{
                        "id": "a-30-n-16",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d425|9b9ab2a6-ca6e-8e26-a7e8-ac89ef30dd8c"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 10,
                    "actionItems": [{
                        "id": "a-30-n-20",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d425|9b9ab2a6-ca6e-8e26-a7e8-ac89ef30dd89"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-30-n-21",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d425|9b9ab2a6-ca6e-8e26-a7e8-ac89ef30dda4"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-30-n-22",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d425|9b9ab2a6-ca6e-8e26-a7e8-ac89ef30dda7"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 15,
                    "actionItems": [{
                        "id": "a-30-n-24",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d425|9b9ab2a6-ca6e-8e26-a7e8-ac89ef30dd8c"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 30,
                    "actionItems": [{
                        "id": "a-30-n-25",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d425|9b9ab2a6-ca6e-8e26-a7e8-ac89ef30ddb2"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-30-n-26",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d425|9b9ab2a6-ca6e-8e26-a7e8-ac89ef30ddb5"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-30-n-27",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d425|9b9ab2a6-ca6e-8e26-a7e8-ac89ef30dd90"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-30-n-28",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d425|9b9ab2a6-ca6e-8e26-a7e8-ac89ef30dd93"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 33,
                    "actionItems": [{
                        "id": "a-30-n-29",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d425|9b9ab2a6-ca6e-8e26-a7e8-ac89ef30ddb2"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-30-n-30",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d425|9b9ab2a6-ca6e-8e26-a7e8-ac89ef30dd90"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-30-n-31",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d425|9b9ab2a6-ca6e-8e26-a7e8-ac89ef30dd93"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 37,
                    "actionItems": [{
                        "id": "a-30-n-32",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d425|9b9ab2a6-ca6e-8e26-a7e8-ac89ef30ddb5"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 55,
                    "actionItems": [{
                        "id": "a-30-n-33",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d425|9b9ab2a6-ca6e-8e26-a7e8-ac89ef30dd97"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-30-n-34",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d425|9b9ab2a6-ca6e-8e26-a7e8-ac89ef30dd9a"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-30-n-35",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d425|9b9ab2a6-ca6e-8e26-a7e8-ac89ef30ddb9"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-30-n-36",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d425|9b9ab2a6-ca6e-8e26-a7e8-ac89ef30ddbc"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 58,
                    "actionItems": [{
                        "id": "a-30-n-37",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d425|9b9ab2a6-ca6e-8e26-a7e8-ac89ef30dd97"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-30-n-38",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d425|9b9ab2a6-ca6e-8e26-a7e8-ac89ef30ddb9"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-30-n-39",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d425|9b9ab2a6-ca6e-8e26-a7e8-ac89ef30ddbc"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 61,
                    "actionItems": [{
                        "id": "a-30-n-40",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d425|9b9ab2a6-ca6e-8e26-a7e8-ac89ef30dd9a"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 66,
                    "actionItems": [{
                        "id": "a-30-n-46",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d425|7a67a4be-4fb2-a4c3-ff95-3dae84ecae8b"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-30-n-47",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d425|7a67a4be-4fb2-a4c3-ff95-3dae84ecae88"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-30-n-48",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d425|4c928c28-d832-5eb3-4cbb-e80d38a30d9b"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-30-n-49",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d425|4c928c28-d832-5eb3-4cbb-e80d38a30d98"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 70,
                    "actionItems": [{
                        "id": "a-30-n-50",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d425|4c928c28-d832-5eb3-4cbb-e80d38a30d98"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-30-n-51",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d425|4c928c28-d832-5eb3-4cbb-e80d38a30d9b"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-30-n-52",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d425|7a67a4be-4fb2-a4c3-ff95-3dae84ecae88"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 73,
                    "actionItems": [{
                        "id": "a-30-n-53",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d425|7a67a4be-4fb2-a4c3-ff95-3dae84ecae8b"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-30-n-41",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d425|9b9ab2a6-ca6e-8e26-a7e8-ac89ef30dd9f"
                            },
                            "heightValue": 100,
                            "widthUnit": "AUTO",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }]
                }]
            }],
            "createdOn": 1697179910230
        },
        "a-31": {
            "id": "a-31",
            "title": "Button Secondary Hover in",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-31-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "widthValue": 0,
                        "widthUnit": "px",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-31-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 500,
                        "target": {},
                        "widthUnit": "AUTO",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1696960965234
        },
        "a-32": {
            "id": "a-32",
            "title": "Button Secondary Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-32-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 500,
                        "target": {},
                        "widthValue": 0,
                        "widthUnit": "px",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1696960965234
        },
        "a-33": {
            "id": "a-33",
            "title": "Timeline desktop six",
            "continuousParameterGroups": [{
                "id": "a-33-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-33-n",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|f1d87c7b-d72f-d6ba-c47c-5fc378b3d7fe"
                            },
                            "heightValue": 0,
                            "widthUnit": "AUTO",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }, {
                        "id": "a-33-n-52",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|47df7b02-964a-6ecf-f700-fadd2ee8548b"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-33-n-53",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|f1d87c7b-d72f-d6ba-c47c-5fc378b3d7df"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-33-n-54",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|f1d87c7b-d72f-d6ba-c47c-5fc378b3d803"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-33-n-55",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d426|f1d87c7b-d72f-d6ba-c47c-5fc378b3d807"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-33-n-64",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|f1d87c7b-d72f-d6ba-c47c-5fc378b3d7e6"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-33-n-65",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d426|f1d87c7b-d72f-d6ba-c47c-5fc378b3d7ea"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-33-n-66",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|f1d87c7b-d72f-d6ba-c47c-5fc378b3d80b"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-33-n-67",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|f1d87c7b-d72f-d6ba-c47c-5fc378b3d80e"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-33-n-76",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|f1d87c7b-d72f-d6ba-c47c-5fc378b3d812"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-33-n-77",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d426|f1d87c7b-d72f-d6ba-c47c-5fc378b3d816"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-33-n-78",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|f1d87c7b-d72f-d6ba-c47c-5fc378b3d7ee"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-33-n-79",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|f1d87c7b-d72f-d6ba-c47c-5fc378b3d7f1"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-33-n-88",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|f1d87c7b-d72f-d6ba-c47c-5fc378b3d7f5"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-33-n-89",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d426|f1d87c7b-d72f-d6ba-c47c-5fc378b3d7f9"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-33-n-90",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|f1d87c7b-d72f-d6ba-c47c-5fc378b3d81e"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-33-n-91",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|f1d87c7b-d72f-d6ba-c47c-5fc378b3d821"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-33-n-100",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|bba27fef-95ca-b37b-00a6-ae1908a800f9"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-33-n-101",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d426|bba27fef-95ca-b37b-00a6-ae1908a800fd"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-33-n-102",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|731fbb01-ffad-a12f-9206-878b463391ee"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-33-n-103",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|731fbb01-ffad-a12f-9206-878b463391eb"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-33-n-112",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|5d33be64-4726-f89a-dc36-692cfef61fed"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-33-n-113",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d426|5d33be64-4726-f89a-dc36-692cfef61ff1"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-33-n-114",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|733c3ff8-032c-68c1-b9cf-0c43e0f91d25"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-33-n-115",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|733c3ff8-032c-68c1-b9cf-0c43e0f91d28"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 6,
                    "actionItems": [{
                        "id": "a-33-n-60",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|47df7b02-964a-6ecf-f700-fadd2ee8548b"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-33-n-61",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|f1d87c7b-d72f-d6ba-c47c-5fc378b3d7df"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-33-n-62",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|f1d87c7b-d72f-d6ba-c47c-5fc378b3d803"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-33-n-63",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d426|f1d87c7b-d72f-d6ba-c47c-5fc378b3d807"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 9,
                    "actionItems": [{
                        "id": "a-33-n-57",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|f1d87c7b-d72f-d6ba-c47c-5fc378b3d7df"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-33-n-58",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|f1d87c7b-d72f-d6ba-c47c-5fc378b3d803"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-33-n-59",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d426|f1d87c7b-d72f-d6ba-c47c-5fc378b3d807"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 12,
                    "actionItems": [{
                        "id": "a-33-n-56",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|47df7b02-964a-6ecf-f700-fadd2ee8548b"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 22,
                    "actionItems": [{
                        "id": "a-33-n-68",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|f1d87c7b-d72f-d6ba-c47c-5fc378b3d7e6"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-33-n-69",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d426|f1d87c7b-d72f-d6ba-c47c-5fc378b3d7ea"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-33-n-70",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|f1d87c7b-d72f-d6ba-c47c-5fc378b3d80b"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-33-n-71",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|f1d87c7b-d72f-d6ba-c47c-5fc378b3d80e"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 26,
                    "actionItems": [{
                        "id": "a-33-n-72",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|f1d87c7b-d72f-d6ba-c47c-5fc378b3d7e6"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-33-n-73",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d426|f1d87c7b-d72f-d6ba-c47c-5fc378b3d7ea"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-33-n-74",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|f1d87c7b-d72f-d6ba-c47c-5fc378b3d80b"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 30,
                    "actionItems": [{
                        "id": "a-33-n-75",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|f1d87c7b-d72f-d6ba-c47c-5fc378b3d80e"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 32,
                    "actionItems": [{
                        "id": "a-33-n-80",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|f1d87c7b-d72f-d6ba-c47c-5fc378b3d812"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-33-n-82",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d426|f1d87c7b-d72f-d6ba-c47c-5fc378b3d816"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-33-n-83",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|f1d87c7b-d72f-d6ba-c47c-5fc378b3d7ee"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-33-n-84",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|f1d87c7b-d72f-d6ba-c47c-5fc378b3d7f1"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 37,
                    "actionItems": [{
                        "id": "a-33-n-81",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|f1d87c7b-d72f-d6ba-c47c-5fc378b3d812"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-33-n-85",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d426|f1d87c7b-d72f-d6ba-c47c-5fc378b3d816"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-33-n-86",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|f1d87c7b-d72f-d6ba-c47c-5fc378b3d7ee"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 41,
                    "actionItems": [{
                        "id": "a-33-n-87",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|f1d87c7b-d72f-d6ba-c47c-5fc378b3d7f1"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 46,
                    "actionItems": [{
                        "id": "a-33-n-92",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|f1d87c7b-d72f-d6ba-c47c-5fc378b3d7f5"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-33-n-93",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d426|f1d87c7b-d72f-d6ba-c47c-5fc378b3d7f9"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-33-n-94",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|f1d87c7b-d72f-d6ba-c47c-5fc378b3d81e"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-33-n-95",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|f1d87c7b-d72f-d6ba-c47c-5fc378b3d821"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 52,
                    "actionItems": [{
                        "id": "a-33-n-96",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|f1d87c7b-d72f-d6ba-c47c-5fc378b3d7f5"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-33-n-97",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d426|f1d87c7b-d72f-d6ba-c47c-5fc378b3d7f9"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-33-n-98",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|f1d87c7b-d72f-d6ba-c47c-5fc378b3d81e"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 55,
                    "actionItems": [{
                        "id": "a-33-n-99",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|f1d87c7b-d72f-d6ba-c47c-5fc378b3d821"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 62,
                    "actionItems": [{
                        "id": "a-33-n-104",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|bba27fef-95ca-b37b-00a6-ae1908a800f9"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-33-n-105",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d426|bba27fef-95ca-b37b-00a6-ae1908a800fd"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-33-n-106",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|731fbb01-ffad-a12f-9206-878b463391ee"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-33-n-107",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|731fbb01-ffad-a12f-9206-878b463391eb"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 72,
                    "actionItems": [{
                        "id": "a-33-n-108",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|bba27fef-95ca-b37b-00a6-ae1908a800f9"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-33-n-109",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d426|bba27fef-95ca-b37b-00a6-ae1908a800fd"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-33-n-111",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|731fbb01-ffad-a12f-9206-878b463391eb"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 75,
                    "actionItems": [{
                        "id": "a-33-n-110",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|731fbb01-ffad-a12f-9206-878b463391ee"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 81,
                    "actionItems": [{
                        "id": "a-33-n-116",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|5d33be64-4726-f89a-dc36-692cfef61fed"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-33-n-117",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d426|5d33be64-4726-f89a-dc36-692cfef61ff1"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-33-n-118",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|733c3ff8-032c-68c1-b9cf-0c43e0f91d25"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-33-n-119",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|733c3ff8-032c-68c1-b9cf-0c43e0f91d28"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 86,
                    "actionItems": [{
                        "id": "a-33-n-120",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|5d33be64-4726-f89a-dc36-692cfef61fed"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-33-n-121",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d426|5d33be64-4726-f89a-dc36-692cfef61ff1"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-33-n-122",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|733c3ff8-032c-68c1-b9cf-0c43e0f91d25"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 89,
                    "actionItems": [{
                        "id": "a-33-n-123",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|733c3ff8-032c-68c1-b9cf-0c43e0f91d28"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-33-n-50",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|f1d87c7b-d72f-d6ba-c47c-5fc378b3d7fe"
                            },
                            "heightValue": 100,
                            "widthUnit": "AUTO",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }]
                }]
            }],
            "createdOn": 1697179910230
        },
        "a-34": {
            "id": "a-34",
            "title": "Timeline desktop Seven",
            "continuousParameterGroups": [{
                "id": "a-34-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-34-n",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a7b0"
                            },
                            "heightValue": 0,
                            "widthUnit": "AUTO",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }, {
                        "id": "a-34-n-75",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a785"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-76",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a782"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-77",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a7b5"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-78",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a7b9"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-87",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a789"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-88",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a78d"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-89",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a7bd"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-90",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a7c0"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-99",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a7c4"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-100",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a7c8"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-101",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a794"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-102",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a791"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-111",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a798"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-112",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a79c"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-113",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a7cc"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-114",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a7cf"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-123",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a7d3"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-124",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a7d7"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-125",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a7a3"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-126",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a7a0"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-135",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a7a7"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-136",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a7ab"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-137",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a7db"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-138",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a7de"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-147",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|1c70966f-2c23-beae-9290-cc367a898e41"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-148",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d40d|1c70966f-2c23-beae-9290-cc367a898e45"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-149",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|647e0fcf-b196-14b0-9b7e-174674b16b01"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-150",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|647e0fcf-b196-14b0-9b7e-174674b16b01"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 8,
                    "actionItems": [{
                        "id": "a-34-n-84",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a782"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-85",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a7b5"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-86",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a7b9"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 11,
                    "actionItems": [{
                        "id": "a-34-n-83",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a785"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 18,
                    "actionItems": [{
                        "id": "a-34-n-91",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a789"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-92",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a78d"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-93",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a7bd"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-94",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a7c0"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 22,
                    "actionItems": [{
                        "id": "a-34-n-95",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a789"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-96",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a78d"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-97",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a7bd"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 25,
                    "actionItems": [{
                        "id": "a-34-n-98",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a7c0"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 32,
                    "actionItems": [{
                        "id": "a-34-n-103",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a7c4"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-104",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a7c8"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-105",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a794"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-106",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a791"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 37,
                    "actionItems": [{
                        "id": "a-34-n-107",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a7c4"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-108",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a7c8"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-110",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a791"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 40,
                    "actionItems": [{
                        "id": "a-34-n-109",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a794"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 47,
                    "actionItems": [{
                        "id": "a-34-n-115",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a798"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-116",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a79c"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-117",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a7cc"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-118",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a7cf"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 52,
                    "actionItems": [{
                        "id": "a-34-n-119",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a798"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-120",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a79c"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-121",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a7cc"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 55,
                    "actionItems": [{
                        "id": "a-34-n-122",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a7cf"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 60,
                    "actionItems": [{
                        "id": "a-34-n-127",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a7d3"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-128",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a7d7"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-129",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a7a3"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-130",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a7a0"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 64,
                    "actionItems": [{
                        "id": "a-34-n-131",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a7d3"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-132",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a7d7"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-134",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a7a0"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 67,
                    "actionItems": [{
                        "id": "a-34-n-133",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a7a3"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 70,
                    "actionItems": [{
                        "id": "a-34-n-139",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a7a7"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-140",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a7ab"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-141",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a7db"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-142",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a7de"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 74,
                    "actionItems": [{
                        "id": "a-34-n-143",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a7a7"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-144",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a7ab"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-145",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a7db"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 77,
                    "actionItems": [{
                        "id": "a-34-n-146",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a7de"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 80,
                    "actionItems": [{
                        "id": "a-34-n-151",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|1c70966f-2c23-beae-9290-cc367a898e41"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-152",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d40d|1c70966f-2c23-beae-9290-cc367a898e45"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-153",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|647e0fcf-b196-14b0-9b7e-174674b16b01"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-154",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|647e0fcf-b196-14b0-9b7e-174674b16b01"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 84,
                    "actionItems": [{
                        "id": "a-34-n-155",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|1c70966f-2c23-beae-9290-cc367a898e41"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-156",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d40d|1c70966f-2c23-beae-9290-cc367a898e45"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-157",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|647e0fcf-b196-14b0-9b7e-174674b16b01"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-158",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|647e0fcf-b196-14b0-9b7e-174674b16b01"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-34-n-74",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|01ec8cee-9de1-bd3a-3f5c-78527140a7b0"
                            },
                            "heightValue": 100,
                            "widthUnit": "AUTO",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }]
                }]
            }],
            "createdOn": 1697179910230
        },
        "a-35": {
            "id": "a-35",
            "title": "Webflow Hero Scroll",
            "continuousParameterGroups": [{
                "id": "a-35-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-35-n",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|8897a63f-e3f4-9da9-8653-fdcbbf21d325"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-35-n-3",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|2b9bbe14-c8bb-94c7-fc79-6f06571996a1"
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-35-n-4",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|2b9bbe14-c8bb-94c7-fc79-6f06571996a1"
                            },
                            "xValue": 0,
                            "yValue": 0,
                            "locked": true
                        }
                    }]
                }, {
                    "keyframe": 18,
                    "actionItems": [{
                        "id": "a-35-n-6",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|8897a63f-e3f4-9da9-8653-fdcbbf21d325"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 23,
                    "actionItems": [{
                        "id": "a-35-n-7",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|8897a63f-e3f4-9da9-8653-fdcbbf21d325"
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-35-n-8",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|2b9bbe14-c8bb-94c7-fc79-6f06571996a1"
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-35-n-9",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|2b9bbe14-c8bb-94c7-fc79-6f06571996a1"
                            },
                            "xValue": 0,
                            "yValue": 0,
                            "locked": true
                        }
                    }]
                }, {
                    "keyframe": 32,
                    "actionItems": [{
                        "id": "a-35-n-10",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|2b9bbe14-c8bb-94c7-fc79-6f06571996a1"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-35-n-11",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|2b9bbe14-c8bb-94c7-fc79-6f06571996a1"
                            },
                            "xValue": 1,
                            "yValue": 1,
                            "locked": true
                        }
                    }]
                }, {
                    "keyframe": 50,
                    "actionItems": [{
                        "id": "a-35-n-12",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d426|6d7aea1a-6ea3-c1a4-1b94-b56628b78015"
                            },
                            "xValue": 1,
                            "yValue": 1,
                            "locked": true
                        }
                    }]
                }]
            }],
            "createdOn": 1709952876472
        },
        "a-36": {
            "id": "a-36",
            "title": "UX sroll animation",
            "continuousParameterGroups": [{
                "id": "a-36-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-36-n",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d425|95708521-4b7e-3e02-a1b4-08018cd45074"
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-36-n-3",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d425|8a803bfb-9619-63bb-ffca-39da12ff7cdc"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 25,
                    "actionItems": [{
                        "id": "a-36-n-4",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d425|95708521-4b7e-3e02-a1b4-08018cd45074"
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-36-n-5",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d425|8a803bfb-9619-63bb-ffca-39da12ff7cdc"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 36,
                    "actionItems": [{
                        "id": "a-36-n-6",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d425|8a803bfb-9619-63bb-ffca-39da12ff7cdc"
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-36-n-7",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d425|95708521-4b7e-3e02-a1b4-08018cd45074"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-36-n-2",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d425|95708521-4b7e-3e02-a1b4-08018cd45074"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }]
            }],
            "createdOn": 1709956523459
        },
        "a-38": {
            "id": "a-38",
            "title": "Certify Button Hover in",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-38-n",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".certiy-button",
                            "selectorGuids": ["70e1016d-99a5-0da8-1331-0e0158b122d2"]
                        },
                        "globalSwatchId": "--text-color--text-primary",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }, {
                    "id": "a-38-n-5",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".certify-image",
                            "selectorGuids": ["a0e5b304-0591-a2ab-0f3d-11defec2e4ef"]
                        },
                        "yValue": 0,
                        "locked": false
                    }
                }, {
                    "id": "a-38-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".certify-image",
                            "selectorGuids": ["a0e5b304-0591-a2ab-0f3d-11defec2e4ef"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-38-n-2",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".certiy-button",
                            "selectorGuids": ["70e1016d-99a5-0da8-1331-0e0158b122d2"]
                        },
                        "globalSwatchId": "--border-color--border-secondary",
                        "rValue": 221,
                        "bValue": 55,
                        "gValue": 255,
                        "aValue": 1
                    }
                }, {
                    "id": "a-38-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".certify-image",
                            "selectorGuids": ["a0e5b304-0591-a2ab-0f3d-11defec2e4ef"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-38-n-6",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".certify-image",
                            "selectorGuids": ["a0e5b304-0591-a2ab-0f3d-11defec2e4ef"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1709975377884
        },
        "a-39": {
            "id": "a-39",
            "title": "Certify Button Hover 0ut",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-39-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".certify-image",
                            "selectorGuids": ["a0e5b304-0591-a2ab-0f3d-11defec2e4ef"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-39-n-3",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".certiy-button",
                            "selectorGuids": ["70e1016d-99a5-0da8-1331-0e0158b122d2"]
                        },
                        "globalSwatchId": "--text-color--text-primary",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }, {
                    "id": "a-39-n-5",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".certify-image",
                            "selectorGuids": ["a0e5b304-0591-a2ab-0f3d-11defec2e4ef"]
                        },
                        "xValue": 1,
                        "yValue": 0,
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1709975377884
        },
        "a-37": {
            "id": "a-37",
            "title": "scroll timeline about",
            "continuousParameterGroups": [{
                "id": "a-37-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-37-n",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d41b|b4d56568-23a1-909c-5579-de34b814caf0"
                            },
                            "heightValue": 0,
                            "widthUnit": "AUTO",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }, {
                        "id": "a-37-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d41b|b4d56568-23a1-909c-5579-de34b814caf5"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-37-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d41b|b4d56568-23a1-909c-5579-de34b814caf9"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-37-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d41b|b4d56568-23a1-909c-5579-de34b814cad4"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-37-n-6",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d41b|b4d56568-23a1-909c-5579-de34b814cad1"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-37-n-15",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d41b|b4d56568-23a1-909c-5579-de34b814cad8"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-37-n-16",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d41b|b4d56568-23a1-909c-5579-de34b814cadc"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-37-n-17",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d41b|b4d56568-23a1-909c-5579-de34b814cafd"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-37-n-18",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d41b|b4d56568-23a1-909c-5579-de34b814cb00"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-37-n-27",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d41b|b4d56568-23a1-909c-5579-de34b814cb04"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-37-n-28",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d41b|b4d56568-23a1-909c-5579-de34b814cb08"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-37-n-29",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d41b|b4d56568-23a1-909c-5579-de34b814cae3"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-37-n-30",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d41b|b4d56568-23a1-909c-5579-de34b814cae0"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-37-n-39",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d41b|b4d56568-23a1-909c-5579-de34b814cae7"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-37-n-40",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d41b|b4d56568-23a1-909c-5579-de34b814caeb"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-37-n-41",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d41b|b4d56568-23a1-909c-5579-de34b814cb0c"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-37-n-42",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d41b|b4d56568-23a1-909c-5579-de34b814cb0f"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 3,
                    "actionItems": [{
                        "id": "a-37-n-7",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d41b|b4d56568-23a1-909c-5579-de34b814caf5"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-37-n-8",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d41b|b4d56568-23a1-909c-5579-de34b814caf9"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-37-n-9",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d41b|b4d56568-23a1-909c-5579-de34b814cad4"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-37-n-10",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d41b|b4d56568-23a1-909c-5579-de34b814cad1"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 10,
                    "actionItems": [{
                        "id": "a-37-n-11",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d41b|b4d56568-23a1-909c-5579-de34b814caf5"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-37-n-12",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d41b|b4d56568-23a1-909c-5579-de34b814caf9"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-37-n-13",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d41b|b4d56568-23a1-909c-5579-de34b814cad4"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 15,
                    "actionItems": [{
                        "id": "a-37-n-14",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d41b|b4d56568-23a1-909c-5579-de34b814cad1"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 30,
                    "actionItems": [{
                        "id": "a-37-n-19",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d41b|b4d56568-23a1-909c-5579-de34b814cad8"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-37-n-20",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d41b|b4d56568-23a1-909c-5579-de34b814cadc"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-37-n-21",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d41b|b4d56568-23a1-909c-5579-de34b814cafd"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-37-n-22",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d41b|b4d56568-23a1-909c-5579-de34b814cb00"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 33,
                    "actionItems": [{
                        "id": "a-37-n-23",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d41b|b4d56568-23a1-909c-5579-de34b814cad8"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-37-n-24",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d41b|b4d56568-23a1-909c-5579-de34b814cadc"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-37-n-25",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d41b|b4d56568-23a1-909c-5579-de34b814cafd"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 37,
                    "actionItems": [{
                        "id": "a-37-n-26",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d41b|b4d56568-23a1-909c-5579-de34b814cb00"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 55,
                    "actionItems": [{
                        "id": "a-37-n-31",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d41b|b4d56568-23a1-909c-5579-de34b814cb04"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-37-n-32",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d41b|b4d56568-23a1-909c-5579-de34b814cb08"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-37-n-33",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d41b|b4d56568-23a1-909c-5579-de34b814cae3"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-37-n-34",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d41b|b4d56568-23a1-909c-5579-de34b814cae0"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 58,
                    "actionItems": [{
                        "id": "a-37-n-35",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d41b|b4d56568-23a1-909c-5579-de34b814cb04"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-37-n-36",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d41b|b4d56568-23a1-909c-5579-de34b814cb08"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-37-n-38",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d41b|b4d56568-23a1-909c-5579-de34b814cae0"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 61,
                    "actionItems": [{
                        "id": "a-37-n-37",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d41b|b4d56568-23a1-909c-5579-de34b814cae3"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 66,
                    "actionItems": [{
                        "id": "a-37-n-43",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d41b|b4d56568-23a1-909c-5579-de34b814cae7"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-37-n-44",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d41b|b4d56568-23a1-909c-5579-de34b814caeb"
                            },
                            "yValue": 101,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-37-n-45",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d41b|b4d56568-23a1-909c-5579-de34b814cb0c"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-37-n-46",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d41b|b4d56568-23a1-909c-5579-de34b814cb0f"
                            },
                            "yValue": 110,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 70,
                    "actionItems": [{
                        "id": "a-37-n-47",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d41b|b4d56568-23a1-909c-5579-de34b814cae7"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-37-n-48",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "65ed7debeefb822fc0c8d41b|b4d56568-23a1-909c-5579-de34b814caeb"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-37-n-49",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d41b|b4d56568-23a1-909c-5579-de34b814cb0c"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 73,
                    "actionItems": [{
                        "id": "a-37-n-50",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d41b|b4d56568-23a1-909c-5579-de34b814cb0f"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-37-n-2",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d41b|b4d56568-23a1-909c-5579-de34b814caf0"
                            },
                            "heightValue": 100,
                            "widthUnit": "AUTO",
                            "heightUnit": "%",
                            "locked": false
                        }
                    }]
                }]
            }],
            "createdOn": 1709958255061
        },
        "a-40": {
            "id": "a-40",
            "title": "Hero Image Scroll",
            "continuousParameterGroups": [{
                "id": "a-40-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-40-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|787f0b0f-ddc8-c2f2-1578-bea7dd8366b9"
                            },
                            "xValue": 7,
                            "yValue": -45,
                            "xUnit": "vw",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-40-n-2",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|787f0b0f-ddc8-c2f2-1578-bea7dd8366b9"
                            },
                            "zValue": 35,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }, {
                        "id": "a-40-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|787f0b0f-ddc8-c2f2-1578-bea7dd8366b7"
                            },
                            "xValue": 10,
                            "yValue": -40,
                            "xUnit": "vw",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-40-n-4",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|787f0b0f-ddc8-c2f2-1578-bea7dd8366b7"
                            },
                            "zValue": -15,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }, {
                        "id": "a-40-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|787f0b0f-ddc8-c2f2-1578-bea7dd8366b5"
                            },
                            "xValue": 25,
                            "yValue": 20,
                            "xUnit": "vw",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-40-n-6",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|787f0b0f-ddc8-c2f2-1578-bea7dd8366b5"
                            },
                            "zValue": 24,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }, {
                        "id": "a-40-n-7",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|787f0b0f-ddc8-c2f2-1578-bea7dd8366b3"
                            },
                            "xValue": -15,
                            "yValue": -40,
                            "xUnit": "vw",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-40-n-8",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|787f0b0f-ddc8-c2f2-1578-bea7dd8366b3"
                            },
                            "zValue": 14,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }, {
                        "id": "a-40-n-9",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|787f0b0f-ddc8-c2f2-1578-bea7dd8366b1"
                            },
                            "xValue": -10,
                            "yValue": -45,
                            "xUnit": "vw",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-40-n-10",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|787f0b0f-ddc8-c2f2-1578-bea7dd8366b1"
                            },
                            "zValue": -34,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-40-n-11",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|787f0b0f-ddc8-c2f2-1578-bea7dd8366b9"
                            },
                            "xValue": 0,
                            "yValue": 0,
                            "xUnit": "vw",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-40-n-12",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|787f0b0f-ddc8-c2f2-1578-bea7dd8366b9"
                            },
                            "zValue": 0,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }, {
                        "id": "a-40-n-13",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|787f0b0f-ddc8-c2f2-1578-bea7dd8366b7"
                            },
                            "xValue": 0,
                            "yValue": 0,
                            "xUnit": "vw",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-40-n-14",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|787f0b0f-ddc8-c2f2-1578-bea7dd8366b7"
                            },
                            "zValue": 0,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }, {
                        "id": "a-40-n-15",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|787f0b0f-ddc8-c2f2-1578-bea7dd8366b5"
                            },
                            "xValue": 0,
                            "yValue": 0,
                            "xUnit": "vw",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-40-n-16",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|787f0b0f-ddc8-c2f2-1578-bea7dd8366b5"
                            },
                            "zValue": 0,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }, {
                        "id": "a-40-n-17",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|787f0b0f-ddc8-c2f2-1578-bea7dd8366b3"
                            },
                            "xValue": 0,
                            "yValue": 0,
                            "xUnit": "vw",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-40-n-18",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|787f0b0f-ddc8-c2f2-1578-bea7dd8366b3"
                            },
                            "zValue": 0,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }, {
                        "id": "a-40-n-19",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|787f0b0f-ddc8-c2f2-1578-bea7dd8366b2"
                            },
                            "xValue": 0,
                            "yValue": 0,
                            "xUnit": "vw",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-40-n-20",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|787f0b0f-ddc8-c2f2-1578-bea7dd8366b1"
                            },
                            "xValue": 0,
                            "yValue": 0,
                            "xUnit": "vw",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-40-n-21",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|787f0b0f-ddc8-c2f2-1578-bea7dd8366b1"
                            },
                            "zValue": 0,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }]
                }]
            }],
            "createdOn": 1697615580667
        },
        "a-41": {
            "id": "a-41",
            "title": "Hero Image Scroll tablet landscape",
            "continuousParameterGroups": [{
                "id": "a-41-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-41-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|787f0b0f-ddc8-c2f2-1578-bea7dd8366b9"
                            },
                            "xValue": 7,
                            "yValue": -45,
                            "xUnit": "vw",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-41-n-2",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|787f0b0f-ddc8-c2f2-1578-bea7dd8366b9"
                            },
                            "zValue": 35,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }, {
                        "id": "a-41-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|787f0b0f-ddc8-c2f2-1578-bea7dd8366b7"
                            },
                            "xValue": 20,
                            "yValue": -30,
                            "xUnit": "vw",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-41-n-4",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|787f0b0f-ddc8-c2f2-1578-bea7dd8366b7"
                            },
                            "zValue": -15,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }, {
                        "id": "a-41-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|787f0b0f-ddc8-c2f2-1578-bea7dd8366b5"
                            },
                            "xValue": 25,
                            "yValue": 20,
                            "xUnit": "vw",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-41-n-6",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|787f0b0f-ddc8-c2f2-1578-bea7dd8366b5"
                            },
                            "zValue": 24,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }, {
                        "id": "a-41-n-7",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|787f0b0f-ddc8-c2f2-1578-bea7dd8366b3"
                            },
                            "xValue": -25,
                            "yValue": -30,
                            "xUnit": "vw",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-41-n-8",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|787f0b0f-ddc8-c2f2-1578-bea7dd8366b3"
                            },
                            "zValue": 14,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }, {
                        "id": "a-41-n-9",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|787f0b0f-ddc8-c2f2-1578-bea7dd8366b1"
                            },
                            "xValue": -10,
                            "yValue": -45,
                            "xUnit": "vw",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-41-n-10",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|787f0b0f-ddc8-c2f2-1578-bea7dd8366b1"
                            },
                            "zValue": -34,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-41-n-11",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|787f0b0f-ddc8-c2f2-1578-bea7dd8366b9"
                            },
                            "xValue": 0,
                            "yValue": 0,
                            "xUnit": "vw",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-41-n-12",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|787f0b0f-ddc8-c2f2-1578-bea7dd8366b9"
                            },
                            "zValue": 0,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }, {
                        "id": "a-41-n-13",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|787f0b0f-ddc8-c2f2-1578-bea7dd8366b7"
                            },
                            "xValue": 0,
                            "yValue": 0,
                            "xUnit": "vw",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-41-n-14",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|787f0b0f-ddc8-c2f2-1578-bea7dd8366b7"
                            },
                            "zValue": 0,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }, {
                        "id": "a-41-n-15",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|787f0b0f-ddc8-c2f2-1578-bea7dd8366b5"
                            },
                            "xValue": 0,
                            "yValue": 0,
                            "xUnit": "vw",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-41-n-16",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|787f0b0f-ddc8-c2f2-1578-bea7dd8366b5"
                            },
                            "zValue": 0,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }, {
                        "id": "a-41-n-17",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|787f0b0f-ddc8-c2f2-1578-bea7dd8366b3"
                            },
                            "xValue": 0,
                            "yValue": 0,
                            "xUnit": "vw",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-41-n-18",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|787f0b0f-ddc8-c2f2-1578-bea7dd8366b3"
                            },
                            "zValue": 0,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }, {
                        "id": "a-41-n-19",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|787f0b0f-ddc8-c2f2-1578-bea7dd8366b2"
                            },
                            "xValue": 0,
                            "yValue": 0,
                            "xUnit": "vw",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-41-n-20",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|787f0b0f-ddc8-c2f2-1578-bea7dd8366b1"
                            },
                            "xValue": 0,
                            "yValue": 0,
                            "xUnit": "vw",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-41-n-21",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "65ed7debeefb822fc0c8d40d|787f0b0f-ddc8-c2f2-1578-bea7dd8366b1"
                            },
                            "zValue": 0,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }]
                }]
            }],
            "createdOn": 1697615580667
        },
        "a-51": {
            "id": "a-51",
            "title": "cta button hover in",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-51-n",
                    "actionTypeId": "PLUGIN_SPLINE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "pluginElement": "5c66c1e4-8e2e-b27d-3e20-48066c79f487",
                            "objectId": "bf380167-dbcd-4bf1-9608-1cdd118104a4",
                            "selector": ".cta-itm",
                            "selectorGuids": ["5e829608-779c-954c-a12d-99a317833552"]
                        },
                        "value": {
                            "rotationY": 0
                        }
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-51-n-2",
                    "actionTypeId": "PLUGIN_SPLINE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 1000,
                        "target": {
                            "pluginElement": "5c66c1e4-8e2e-b27d-3e20-48066c79f487",
                            "objectId": "bf380167-dbcd-4bf1-9608-1cdd118104a4",
                            "selector": ".cta-itm",
                            "selectorGuids": ["5e829608-779c-954c-a12d-99a317833552"]
                        },
                        "value": {
                            "rotationY": -6.3
                        }
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1710317541185
        },
        "a-52": {
            "id": "a-52",
            "title": "cta button hover out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-52-n-2",
                    "actionTypeId": "PLUGIN_SPLINE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 1000,
                        "target": {
                            "pluginElement": "5c66c1e4-8e2e-b27d-3e20-48066c79f487",
                            "objectId": "bf380167-dbcd-4bf1-9608-1cdd118104a4",
                            "selector": ".cta-itm",
                            "selectorGuids": ["5e829608-779c-954c-a12d-99a317833552"]
                        },
                        "value": {
                            "rotationY": 0
                        }
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1710317541185
        },
        "a-53": {
            "id": "a-53",
            "title": "New Timed Animation",
            "actionItemGroups": [],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1710317919122
        },
        "a-54": {
            "id": "a-54",
            "title": "Main button hove in",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-54-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".main-button-text-ab",
                            "selectorGuids": ["a0eada4a-5486-ba02-bd4b-7835452f211a"]
                        },
                        "yValue": 101,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-54-n-6",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".wrap-arrow-button",
                            "selectorGuids": ["983dcf2a-e9ff-3819-169e-f90eb37ebd99"]
                        },
                        "widthValue": 0,
                        "widthUnit": "px",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }, {
                    "id": "a-54-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".main-button-text",
                            "selectorGuids": ["dbd15e35-6517-98df-ebbe-69aae6706fc8"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-54-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".main-button-text-ab",
                            "selectorGuids": ["a0eada4a-5486-ba02-bd4b-7835452f211a"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-54-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".main-button-text",
                            "selectorGuids": ["dbd15e35-6517-98df-ebbe-69aae6706fc8"]
                        },
                        "yValue": -101,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-54-n-7",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".wrap-arrow-button",
                            "selectorGuids": ["983dcf2a-e9ff-3819-169e-f90eb37ebd99"]
                        },
                        "widthUnit": "AUTO",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1710321779911
        },
        "a-55": {
            "id": "a-55",
            "title": "Main button hove Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-55-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".main-button-text-ab",
                            "selectorGuids": ["a0eada4a-5486-ba02-bd4b-7835452f211a"]
                        },
                        "yValue": 101,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-55-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".main-button-text",
                            "selectorGuids": ["dbd15e35-6517-98df-ebbe-69aae6706fc8"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-55-n-6",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".wrap-arrow-button",
                            "selectorGuids": ["983dcf2a-e9ff-3819-169e-f90eb37ebd99"]
                        },
                        "widthValue": 0,
                        "widthUnit": "px",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1710321779911
        },
        "a-56": {
            "id": "a-56",
            "title": "Footer Link Hover In",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-56-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuint",
                        "duration": 500,
                        "target": {},
                        "xValue": -101,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-56-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuint",
                        "duration": 600,
                        "target": {},
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1666019259270
        },
        "a-57": {
            "id": "a-57",
            "title": "Footer Link Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-57-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 600,
                        "target": {},
                        "xValue": 101,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-57-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {},
                        "xValue": -101,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1666019259270
        },
        "a-58": {
            "id": "a-58",
            "title": "cta-scroll",
            "continuousParameterGroups": [{
                "id": "a-58-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-58-n",
                        "actionTypeId": "PLUGIN_SPLINE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "pluginElement": "5c66c1e4-8e2e-b27d-3e20-48066c79f487",
                                "objectId": "bf380167-dbcd-4bf1-9608-1cdd118104a4",
                                "useEventTarget": "CHILDREN",
                                "selector": ".cta-itm",
                                "selectorGuids": ["5e829608-779c-954c-a12d-99a317833552"]
                            },
                            "value": {
                                "positionX": -320,
                                "rotationY": 3,
                                "rotationZ": 0
                            }
                        }
                    }]
                }, {
                    "keyframe": 60,
                    "actionItems": [{
                        "id": "a-58-n-2",
                        "actionTypeId": "PLUGIN_SPLINE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "pluginElement": "5c66c1e4-8e2e-b27d-3e20-48066c79f487",
                                "objectId": "bf380167-dbcd-4bf1-9608-1cdd118104a4",
                                "useEventTarget": "CHILDREN",
                                "selector": ".cta-itm",
                                "selectorGuids": ["5e829608-779c-954c-a12d-99a317833552"]
                            },
                            "value": {
                                "positionX": 0,
                                "rotationY": 0,
                                "rotationZ": 0
                            }
                        }
                    }]
                }]
            }],
            "createdOn": 1710420400588
        },
        "a-59": {
            "id": "a-59",
            "title": "Work Button Hover In",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-59-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".main-button-text-ab",
                            "selectorGuids": ["a0eada4a-5486-ba02-bd4b-7835452f211a"]
                        },
                        "yValue": 101,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-59-n-3",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".wrap-arrow-button",
                            "selectorGuids": ["983dcf2a-e9ff-3819-169e-f90eb37ebd99"]
                        },
                        "widthValue": 0,
                        "widthUnit": "px",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }, {
                    "id": "a-59-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".main-button-text",
                            "selectorGuids": ["dbd15e35-6517-98df-ebbe-69aae6706fc8"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-59-n-4",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".wrap-arrow-button",
                            "selectorGuids": ["983dcf2a-e9ff-3819-169e-f90eb37ebd99"]
                        },
                        "widthUnit": "AUTO",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }, {
                    "id": "a-59-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".main-button-text-ab",
                            "selectorGuids": ["a0eada4a-5486-ba02-bd4b-7835452f211a"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-59-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".main-button-text",
                            "selectorGuids": ["dbd15e35-6517-98df-ebbe-69aae6706fc8"]
                        },
                        "yValue": -101,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1710488513446
        },
        "a-60": {
            "id": "a-60",
            "title": "Work Button Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-60-n-4",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".wrap-arrow-button",
                            "selectorGuids": ["983dcf2a-e9ff-3819-169e-f90eb37ebd99"]
                        },
                        "widthValue": 0,
                        "widthUnit": "px",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }, {
                    "id": "a-60-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".main-button-text-ab",
                            "selectorGuids": ["a0eada4a-5486-ba02-bd4b-7835452f211a"]
                        },
                        "yValue": 101,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-60-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".main-button-text",
                            "selectorGuids": ["dbd15e35-6517-98df-ebbe-69aae6706fc8"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1710488513446
        },
        "a-61": {
            "id": "a-61",
            "title": "code card hover in",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-61-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-cloneable.is-rounded",
                            "selectorGuids": ["323e58a1-bbdd-7f89-6775-6464cc54bb16", "92f9584e-d75b-00f7-b7c2-b4767ea0d279"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-61-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-cloneable.is-rounded",
                            "selectorGuids": ["323e58a1-bbdd-7f89-6775-6464cc54bb16", "92f9584e-d75b-00f7-b7c2-b4767ea0d279"]
                        },
                        "xValue": 1.15,
                        "yValue": 1.15,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1713337186975
        },
        "a-62": {
            "id": "a-62",
            "title": "code card hover out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-62-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-cloneable.is-rounded",
                            "selectorGuids": ["323e58a1-bbdd-7f89-6775-6464cc54bb16", "92f9584e-d75b-00f7-b7c2-b4767ea0d279"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1713337186975
        }
    },
    "site": {
        "mediaQueries": [{
            "key": "main",
            "min": 992,
            "max": 10000
        }, {
            "key": "medium",
            "min": 768,
            "max": 991
        }, {
            "key": "small",
            "min": 480,
            "max": 767
        }, {
            "key": "tiny",
            "min": 0,
            "max": 479
        }]
    }
});