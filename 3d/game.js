var ap=0,lu=1,lp=2;var js=1,cp=2,Jr=3,Di=0,Sn=1,bn=2,Qs=0,$r=1,Bn=2,cu=3,hu=4,hp=5;var er=100,up=101,fp=102,dp=103,pp=104,mp=200,gp=201,xp=202,_p=203,uu=204,fu=205,yp=206,vp=207,Mp=208,Sp=209,bp=210,Tp=211,Ep=212,wp=213,Ap=214,yl=0,vl=1,Ml=2,Pr=3,Sl=4,bl=5,Tl=6,El=7,va=0,Rp=1,Cp=2,Ui=0,du=1,pu=2,mu=3,Ma=4,gu=5,xu=6,_u=7,Jh="attached",Ip="detached",yu=300,tr=301,jr=302,Jl=303,$l=304,Ii=1e3,ri=1001,Lr=1002,Qt=1003,jl=1004;var nr=1005;var an=1006,Qr=1007;var ci=1008;var Wn=1009,vu=1010,Mu=1011,eo=1012,Ql=1013,Ti=1014,jn=1015,Ei=1016,ec=1017,tc=1018,ir=1020,Su=35902,bu=35899,Tu=1021,Eu=1022,hi=1023,$i=1026,rs=1027,nc=1028,ic=1029,Ts=1030,sc=1031;var rc=1033,Sa=33776,ba=33777,Ta=33778,Ea=33779,oc=35840,ac=35841,lc=35842,cc=35843,hc=36196,uc=37492,fc=37496,dc=37488,pc=37489,wa=37490,mc=37491,gc=37808,xc=37809,_c=37810,yc=37811,vc=37812,Mc=37813,Sc=37814,bc=37815,Tc=37816,Ec=37817,wc=37818,Ac=37819,Rc=37820,Cc=37821,Ic=36492,Pc=36494,Lc=36495,Nc=36283,Dc=36284,Aa=36285,Uc=36286,Oc=2200,Pp=2201,Lp=2202,Bs=2300,ks=2301,xl=2302,$h=2303,Ds=2400,Us=2401,Fo=2402,Fc=2500,Np=2501,wu=0,Ra=1,to=2,Dp=3200;var no=0,Up=1,os="",Wt="srgb",On="srgb-linear",Bo="linear",Ct="srgb";var _l=7680;var Op=519,Fp=512,Bp=513,kp=514,Au=515,Hp=516,zp=517,Ru=518,Cu=519,Iu=35044;var Pu="300 es",oi=2e3,Nr=2001;function G0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function V0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Dr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Gp(){let i=Dr("canvas");return i.style.display="block",i}var dd={},Ur=null;function ko(...i){let e="THREE."+i.shift();Ur?Ur("log",e,...i):console.log(e,...i)}function Vp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Oe(...i){i=Vp(i);let e="THREE."+i.shift();if(Ur)Ur("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ze(...i){i=Vp(i);let e="THREE."+i.shift();if(Ur)Ur("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Fs(...i){let e=i.join(" ");e in dd||(dd[e]=!0,Oe(...i))}function Xp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Wp={[yl]:yl,[Ml]:Tl,[Sl]:Sl,[Pr]:bl,[vl]:vl,[Tl]:Ml,[El]:El,[bl]:Pr},Si=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pd=1234567,No=Math.PI/180,Hs=180/Math.PI;function wi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Cn[i&255]+Cn[i>>8&255]+Cn[i>>16&255]+Cn[i>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[t&63|128]+Cn[t>>8&255]+"-"+Cn[t>>16&255]+Cn[t>>24&255]+Cn[n&255]+Cn[n>>8&255]+Cn[n>>16&255]+Cn[n>>24&255]).toLowerCase()}function pt(i,e,t){return Math.max(e,Math.min(t,i))}function Lu(i,e){return(i%e+e)%e}function X0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function W0(i,e,t){return i!==e?(t-i)/(e-i):0}function Do(i,e,t){return(1-t)*i+t*e}function q0(i,e,t,n){return Do(i,e,1-Math.exp(-t*n))}function Y0(i,e=1){return e-Math.abs(Lu(i,e*2)-e)}function Z0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function K0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function J0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function $0(i,e){return i+Math.random()*(e-i)}function j0(i){return i*(.5-Math.random())}function Q0(i){i!==void 0&&(pd=i);let e=pd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function eg(i){return i*No}function tg(i){return i*Hs}function ng(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function ig(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Nu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function sg(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),p=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*p,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*p,a*c);break;case"ZYZ":i.set(l*p,l*d,a*h,a*c);break;default:Oe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Bc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Du(i,e){if(e.constructor===Float32Array)return i;let t=Bc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Uu(i,e){if(e.constructor===Float32Array)return i;let t=Bc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var kc={DEG2RAD:No,RAD2DEG:Hs,generateUUID:wi,clamp:pt,euclideanModulo:Lu,mapLinear:X0,inverseLerp:W0,lerp:Do,damp:q0,pingpong:Y0,smoothstep:Z0,smootherstep:K0,randInt:J0,randFloat:$0,randFloatSpread:j0,seededRandom:Q0,degToRad:eg,radToDeg:tg,isPowerOfTwo:ng,ceilPowerOfTwo:ig,floorPowerOfTwo:Nu,setQuaternionFromProperEuler:sg,normalize:Uu,denormalize:Du},zu=class zu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};zu.prototype.isVector2=!0;var oe=zu,kt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],p=r[o+2],x=r[o+3];if(u!==x||l!==f||c!==d||h!==p){let m=l*f+c*d+h*p+u*x;m<0&&(f=-f,d=-d,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){let v=Math.acos(m),S=Math.sin(v);g=Math.sin(g*v)/S,a=Math.sin(a*v)/S,l=l*g+f*a,c=c*g+d*a,h=h*g+p*a,u=u*g+x*a}else{l=l*g+f*a,c=c*g+d*a,h=h*g+p*a,u=u*g+x*a;let v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return e[t]=a*p+h*u+l*d-c*f,e[t+1]=l*p+h*f+c*u-a*d,e[t+2]=c*p+h*d+a*f-l*u,e[t+3]=h*p-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Gu=class Gu{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(md.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(md.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Sh.copy(this).projectOnVector(e),this.sub(Sh)}reflect(e){return this.sub(Sh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Gu.prototype.isVector3=!0;var L=Gu,Sh=new L,md=new kt,Vu=class Vu{constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],x=s[0],m=s[3],g=s[6],v=s[1],S=s[4],M=s[7],E=s[2],_=s[5],y=s[8];return r[0]=o*x+a*v+l*E,r[3]=o*m+a*S+l*_,r[6]=o*g+a*M+l*y,r[1]=c*x+h*v+u*E,r[4]=c*m+h*S+u*_,r[7]=c*g+h*M+u*y,r[2]=f*x+d*v+p*E,r[5]=f*m+d*S+p*_,r[8]=f*g+d*M+p*y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,p=t*u+n*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=u*x,e[1]=(s*c-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=f*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=d*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Fs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(bh.makeScale(e,t)),this}rotate(e){return Fs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(bh.makeRotation(-e)),this}translate(e,t){return Fs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(bh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Vu.prototype.isMatrix3=!0;var je=Vu,bh=new je,gd=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xd=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rg(){let i={enabled:!0,workingColorSpace:On,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ct&&(s.r=Ji(s.r),s.g=Ji(s.g),s.b=Ji(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ct&&(s.r=Ir(s.r),s.g=Ir(s.g),s.b=Ir(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===os?Bo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[On]:{primaries:e,whitePoint:n,transfer:Bo,toXYZ:gd,fromXYZ:xd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Wt},outputColorSpaceConfig:{drawingBufferColorSpace:Wt}},[Wt]:{primaries:e,whitePoint:n,transfer:Ct,toXYZ:gd,fromXYZ:xd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Wt}}}),i}var dt=rg();function Ji(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ir(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var fr,wl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{fr===void 0&&(fr=Dr("canvas")),fr.width=e.width,fr.height=e.height;let s=fr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=fr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Dr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ji(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ji(t[n]/255)*255):t[n]=Ji(t[n]);return{data:t,width:e.width,height:e.height}}else return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},og=0,Or=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:og++}),this.uuid=wi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Th(s[o].image)):r.push(Th(s[o]))}else r=Th(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Th(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?wl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}var ag=0,Eh=new L,ln=class i extends Si{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ri,s=ri,r=an,o=ci,a=hi,l=Wn,c=i.DEFAULT_ANISOTROPY,h=os){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ag++}),this.uuid=wi(),this.name="",this.source=new Or(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Eh).x}get height(){return this.source.getSize(Eh).y}get depth(){return this.source.getSize(Eh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Oe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Oe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ii:e.x=e.x-Math.floor(e.x);break;case ri:e.x=e.x<0?0:1;break;case Lr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ii:e.y=e.y-Math.floor(e.y);break;case ri:e.y=e.y<0?0:1;break;case Lr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=yu;ln.DEFAULT_ANISOTROPY=1;var Xu=class Xu{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,M=(d+1)/2,E=(g+1)/2,_=(h+f)/4,y=(u+x)/4,b=(p+m)/4;return S>M&&S>E?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=_/n,r=y/n):M>E?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=_/s,r=b/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=y/r,s=b/r),this.set(n,s,r,t),this}let v=Math.sqrt((m-p)*(m-p)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(u-x)/v,this.z=(f-h)/v,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this.w=pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this.w=pt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Xu.prototype.isVector4=!0;var Lt=Xu,Al=class extends Si{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new ln({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Or(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kn=class extends Al{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ho=class extends ln{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Rl=class extends ln{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Kl=class Kl{constructor(e,t,n,s,r,o,a,l,c,h,u,f,d,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,f,d,p,x,m)}set(e,t,n,s,r,o,a,l,c,h,u,f,d,p,x,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/dr.setFromMatrixColumn(e,0).length(),r=1/dr.setFromMatrixColumn(e,1).length(),o=1/dr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,p=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+p*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=p+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,p=c*h,x=c*u;t[0]=f+x*a,t[4]=p*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-p,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,p=c*h,x=c*u;t[0]=f-x*a,t[4]=-o*u,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,d=o*u,p=a*h,x=a*u;t[0]=l*h,t[4]=p*c-d,t[8]=f*c+x,t[1]=l*u,t[5]=x*c+f,t[9]=d*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=x-f*u,t[8]=p*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+p,t[10]=f-x*u}else if(e.order==="XZY"){let f=o*l,d=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+x,t[5]=o*h,t[9]=d*u-p,t[2]=p*u-d,t[6]=a*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lg,e,cg)}lookAt(e,t,n){let s=this.elements;return Yn.subVectors(e,t),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),ds.crossVectors(n,Yn),ds.lengthSq()===0&&(Math.abs(n.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),ds.crossVectors(n,Yn)),ds.normalize(),za.crossVectors(Yn,ds),s[0]=ds.x,s[4]=za.x,s[8]=Yn.x,s[1]=ds.y,s[5]=za.y,s[9]=Yn.y,s[2]=ds.z,s[6]=za.z,s[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],x=n[6],m=n[10],g=n[14],v=n[3],S=n[7],M=n[11],E=n[15],_=s[0],y=s[4],b=s[8],N=s[12],C=s[1],D=s[5],R=s[9],U=s[13],I=s[2],B=s[6],A=s[10],O=s[14],J=s[3],G=s[7],q=s[11],j=s[15];return r[0]=o*_+a*C+l*I+c*J,r[4]=o*y+a*D+l*B+c*G,r[8]=o*b+a*R+l*A+c*q,r[12]=o*N+a*U+l*O+c*j,r[1]=h*_+u*C+f*I+d*J,r[5]=h*y+u*D+f*B+d*G,r[9]=h*b+u*R+f*A+d*q,r[13]=h*N+u*U+f*O+d*j,r[2]=p*_+x*C+m*I+g*J,r[6]=p*y+x*D+m*B+g*G,r[10]=p*b+x*R+m*A+g*q,r[14]=p*N+x*U+m*O+g*j,r[3]=v*_+S*C+M*I+E*J,r[7]=v*y+S*D+M*B+E*G,r[11]=v*b+S*R+M*A+E*q,r[15]=v*N+S*U+M*O+E*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],p=e[3],x=e[7],m=e[11],g=e[15],v=l*d-c*f,S=a*d-c*u,M=a*f-l*u,E=o*d-c*h,_=o*f-l*h,y=o*u-a*h;return t*(x*v-m*S+g*M)-n*(p*v-m*E+g*_)+s*(p*S-x*E+g*y)-r*(p*M-x*_+m*y)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],p=e[12],x=e[13],m=e[14],g=e[15],v=t*a-n*o,S=t*l-s*o,M=t*c-r*o,E=n*l-s*a,_=n*c-r*a,y=s*c-r*l,b=h*x-u*p,N=h*m-f*p,C=h*g-d*p,D=u*m-f*x,R=u*g-d*x,U=f*g-d*m,I=v*U-S*R+M*D+E*C-_*N+y*b;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/I;return e[0]=(a*U-l*R+c*D)*B,e[1]=(s*R-n*U-r*D)*B,e[2]=(x*y-m*_+g*E)*B,e[3]=(f*_-u*y-d*E)*B,e[4]=(l*C-o*U-c*N)*B,e[5]=(t*U-s*C+r*N)*B,e[6]=(m*M-p*y-g*S)*B,e[7]=(h*y-f*M+d*S)*B,e[8]=(o*R-a*C+c*b)*B,e[9]=(n*C-t*R-r*b)*B,e[10]=(p*_-x*M+g*v)*B,e[11]=(u*M-h*_-d*v)*B,e[12]=(a*N-o*D-l*b)*B,e[13]=(t*D-n*N+s*b)*B,e[14]=(x*S-p*E-m*v)*B,e[15]=(h*E-u*S+f*v)*B,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,p=r*u,x=o*h,m=o*u,g=a*u,v=l*c,S=l*h,M=l*u,E=n.x,_=n.y,y=n.z;return s[0]=(1-(x+g))*E,s[1]=(d+M)*E,s[2]=(p-S)*E,s[3]=0,s[4]=(d-M)*_,s[5]=(1-(f+g))*_,s[6]=(m+v)*_,s[7]=0,s[8]=(p+S)*y,s[9]=(m-v)*y,s[10]=(1-(f+x))*y,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=dr.set(s[0],s[1],s[2]).length(),a=dr.set(s[4],s[5],s[6]).length(),l=dr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),_i.copy(this);let c=1/o,h=1/a,u=1/l;return _i.elements[0]*=c,_i.elements[1]*=c,_i.elements[2]*=c,_i.elements[4]*=h,_i.elements[5]*=h,_i.elements[6]*=h,_i.elements[8]*=u,_i.elements[9]*=u,_i.elements[10]*=u,t.setFromRotationMatrix(_i),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=oi,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===oi)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Nr)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=oi,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),f=-(t+e)/(t-e),d=-(n+s)/(n-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===oi)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===Nr)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Kl.prototype.isMatrix4=!0;var Ve=Kl,dr=new L,_i=new Ve,lg=new L(0,0,0),cg=new L(1,1,1),ds=new L,za=new L,Yn=new L,_d=new Ve,yd=new kt,yn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(pt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-pt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _d.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_d,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yd.setFromEuler(this),this.setFromQuaternion(yd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};yn.DEFAULT_ORDER="XYZ";var zo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},hg=0,vd=new L,pr=new kt,Vi=new Ve,Ga=new L,vo=new L,ug=new L,fg=new kt,Md=new L(1,0,0),Sd=new L(0,1,0),bd=new L(0,0,1),Td={type:"added"},dg={type:"removed"},mr={type:"childadded",child:null},wh={type:"childremoved",child:null},Ft=class i extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hg++}),this.uuid=wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new yn,n=new kt,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ve},normalMatrix:{value:new je}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.multiply(pr),this}rotateOnWorldAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.premultiply(pr),this}rotateX(e){return this.rotateOnAxis(Md,e)}rotateY(e){return this.rotateOnAxis(Sd,e)}rotateZ(e){return this.rotateOnAxis(bd,e)}translateOnAxis(e,t){return vd.copy(e).applyQuaternion(this.quaternion),this.position.add(vd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Md,e)}translateY(e){return this.translateOnAxis(Sd,e)}translateZ(e){return this.translateOnAxis(bd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ga.copy(e):Ga.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(vo,Ga,this.up):Vi.lookAt(Ga,vo,this.up),this.quaternion.setFromRotationMatrix(Vi),s&&(Vi.extractRotation(s.matrixWorld),pr.setFromRotationMatrix(Vi),this.quaternion.premultiply(pr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Td),mr.child=e,this.dispatchEvent(mr),mr.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dg),wh.child=e,this.dispatchEvent(wh),wh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Td),mr.child=e,this.dispatchEvent(mr),mr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vo,e,ug),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vo,fg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ft.DEFAULT_UP=new L(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ct=class extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}},pg={type:"move"},Fr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(pg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ct;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},qp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ps={h:0,s:0,l:0},Va={h:0,s:0,l:0};function Ah(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var xe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=dt.workingColorSpace){if(e=Lu(e,1),t=pt(t,0,1),n=pt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ah(o,r,e+1/3),this.g=Ah(o,r,e),this.b=Ah(o,r,e-1/3)}return dt.colorSpaceToWorking(this,s),this}setStyle(e,t=Wt){function n(r){r!==void 0&&parseFloat(r)<1&&Oe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Oe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){let n=qp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ji(e.r),this.g=Ji(e.g),this.b=Ji(e.b),this}copyLinearToSRGB(e){return this.r=Ir(e.r),this.g=Ir(e.g),this.b=Ir(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return dt.workingToColorSpace(In.copy(this),e),Math.round(pt(In.r*255,0,255))*65536+Math.round(pt(In.g*255,0,255))*256+Math.round(pt(In.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(In.copy(this),t);let n=In.r,s=In.g,r=In.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(In.copy(this),t),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=Wt){dt.workingToColorSpace(In.copy(this),e);let t=In.r,n=In.g,s=In.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ps),this.setHSL(ps.h+e,ps.s+t,ps.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ps),e.getHSL(Va);let n=Do(ps.h,Va.h,t),s=Do(ps.s,Va.s,t),r=Do(ps.l,Va.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},In=new xe;xe.NAMES=qp;var Go=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new xe(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Br=class extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},yi=new L,Xi=new L,Rh=new L,Wi=new L,gr=new L,xr=new L,Ed=new L,Ch=new L,Ih=new L,Ph=new L,Lh=new Lt,Nh=new Lt,Dh=new Lt,Ki=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),yi.subVectors(e,t),s.cross(yi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){yi.subVectors(s,t),Xi.subVectors(n,t),Rh.subVectors(e,t);let o=yi.dot(yi),a=yi.dot(Xi),l=yi.dot(Rh),c=Xi.dot(Xi),h=Xi.dot(Rh),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,p=(o*h-a*l)*f;return r.set(1-d-p,p,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Wi)===null?!1:Wi.x>=0&&Wi.y>=0&&Wi.x+Wi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Wi.x),l.addScaledVector(o,Wi.y),l.addScaledVector(a,Wi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Lh.setScalar(0),Nh.setScalar(0),Dh.setScalar(0),Lh.fromBufferAttribute(e,t),Nh.fromBufferAttribute(e,n),Dh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Lh,r.x),o.addScaledVector(Nh,r.y),o.addScaledVector(Dh,r.z),o}static isFrontFacing(e,t,n,s){return yi.subVectors(n,t),Xi.subVectors(e,t),yi.cross(Xi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),Xi.subVectors(this.a,this.b),yi.cross(Xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;gr.subVectors(s,n),xr.subVectors(r,n),Ch.subVectors(e,n);let l=gr.dot(Ch),c=xr.dot(Ch);if(l<=0&&c<=0)return t.copy(n);Ih.subVectors(e,s);let h=gr.dot(Ih),u=xr.dot(Ih);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(n).addScaledVector(gr,o);Ph.subVectors(e,r);let d=gr.dot(Ph),p=xr.dot(Ph);if(p>=0&&d<=p)return t.copy(r);let x=d*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(xr,a);let m=h*p-d*u;if(m<=0&&u-h>=0&&d-p>=0)return Ed.subVectors(r,s),a=(u-h)/(u-h+(d-p)),t.copy(s).addScaledVector(Ed,a);let g=1/(m+x+f);return o=x*g,a=f*g,t.copy(n).addScaledVector(gr,o).addScaledVector(xr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},vn=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(vi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(vi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,vi):vi.fromBufferAttribute(r,o),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xa.copy(n.boundingBox)),Xa.applyMatrix4(e.matrixWorld),this.union(Xa)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Mo),Wa.subVectors(this.max,Mo),_r.subVectors(e.a,Mo),yr.subVectors(e.b,Mo),vr.subVectors(e.c,Mo),ms.subVectors(yr,_r),gs.subVectors(vr,yr),Is.subVectors(_r,vr);let t=[0,-ms.z,ms.y,0,-gs.z,gs.y,0,-Is.z,Is.y,ms.z,0,-ms.x,gs.z,0,-gs.x,Is.z,0,-Is.x,-ms.y,ms.x,0,-gs.y,gs.x,0,-Is.y,Is.x,0];return!Uh(t,_r,yr,vr,Wa)||(t=[1,0,0,0,1,0,0,0,1],!Uh(t,_r,yr,vr,Wa))?!1:(qa.crossVectors(ms,gs),t=[qa.x,qa.y,qa.z],Uh(t,_r,yr,vr,Wa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},qi=[new L,new L,new L,new L,new L,new L,new L,new L],vi=new L,Xa=new vn,_r=new L,yr=new L,vr=new L,ms=new L,gs=new L,Is=new L,Mo=new L,Wa=new L,qa=new L,Ps=new L;function Uh(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ps.fromArray(i,r);let a=s.x*Math.abs(Ps.x)+s.y*Math.abs(Ps.y)+s.z*Math.abs(Ps.z),l=e.dot(Ps),c=t.dot(Ps),h=n.dot(Ps);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var sn=new L,Ya=new oe,mg=0,Dt=class extends Si{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Iu,this.updateRanges=[],this.gpuType=jn,this.version=0,this._normalizationScale=e!==void 0?Bc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ya.fromBufferAttribute(this,t),Ya.applyMatrix3(e),this.setXY(t,Ya.x,Ya.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Du(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Uu(e,this.array)}};var Vo=class extends Dt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Xo=class extends Dt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var $e=class extends Dt{constructor(e,t,n){super(new Float32Array(e),t,n)}},gg=new vn,So=new L,Oh=new L,zn=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):gg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;So.subVectors(e,this.center);let t=So.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(So,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Oh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(So.copy(e.center).add(Oh)),this.expandByPoint(So.copy(e.center).sub(Oh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},xg=0,si=new Ve,Fh=new Ft,Mr=new L,Zn=new vn,bo=new vn,mn=new L,Rt=class i extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xg++}),this.uuid=wi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(G0(e)?Xo:Vo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,t,n){return si.makeTranslation(e,t,n),this.applyMatrix4(si),this}scale(e,t,n){return si.makeScale(e,t,n),this.applyMatrix4(si),this}lookAt(e){return Fh.lookAt(e),Fh.updateMatrix(),this.applyMatrix4(Fh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new $e(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Zn.setFromBufferAttribute(r),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];bo.setFromBufferAttribute(a),this.morphTargetsRelative?(mn.addVectors(Zn.min,bo.min),Zn.expandByPoint(mn),mn.addVectors(Zn.max,bo.max),Zn.expandByPoint(mn)):(Zn.expandByPoint(bo.min),Zn.expandByPoint(bo.max))}Zn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)mn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(mn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)mn.fromBufferAttribute(a,c),l&&(Mr.fromBufferAttribute(e,c),mn.add(Mr)),s=Math.max(s,n.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Dt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let N=0;N<n.count;N++)a[N]=new L,l[N]=new L;let h=new L,u=new L,f=new L,d=new oe,p=new oe,x=new oe,m=new L,g=new L;function v(N,C,D){c[N]=c[C]=c[D]=1,h.fromBufferAttribute(n,N),u.fromBufferAttribute(n,C),f.fromBufferAttribute(n,D),d.fromBufferAttribute(r,N),p.fromBufferAttribute(r,C),x.fromBufferAttribute(r,D),u.sub(h),f.sub(h),p.sub(d),x.sub(d);let R=1/(p.x*x.y-x.x*p.y);isFinite(R)&&(m.copy(u).multiplyScalar(x.y).addScaledVector(f,-p.y).multiplyScalar(R),g.copy(f).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(R),a[N].add(m),a[C].add(m),a[D].add(m),l[N].add(g),l[C].add(g),l[D].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let N=0,C=S.length;N<C;++N){let D=S[N],R=D.start,U=D.count;for(let I=R,B=R+U;I<B;I+=3)v(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let M=new L,E=new L,_=new L,y=new L;function b(N){_.fromBufferAttribute(s,N),y.copy(_);let C=a[N];M.copy(C),M.sub(_.multiplyScalar(_.dot(C))).normalize(),E.crossVectors(y,C);let R=E.dot(l[N])<0?-1:1;o.setXYZW(N,M.x,M.y,M.z,R)}for(let N=0,C=n.count;N<C;++N)c[N]&&b(N);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Dt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let f=0,d=e.count;f<d;f+=3){let p=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mn.fromBufferAttribute(e,t),mn.normalize(),e.setXYZ(t,mn.x,mn.y,mn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let g=0;g<h;g++)f[p++]=c[d++]}return new Dt(f,h,u)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},zs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Iu,this.updateRanges=[],this.version=0,this.uuid=wi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=wd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=wd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function wd(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=wi()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var Un=new L,ys=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?Bc(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.applyMatrix4(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.applyNormalMatrix(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.transformDirection(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){ko("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Dt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ko("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Du(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Uu(e,this.data.array)}},Bh=new L,_g=new L,yg=new je,Mi=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Bh.subVectors(n,t).cross(_g.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Bh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||yg.getNormalMatrix(e),s=this.coplanarPoint(Bh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},vg=0,Mn=class extends Si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vg++}),this.uuid=wi(),this.name="",this.type="Material",this.blending=$r,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uu,this.blendDst=fu,this.blendEquation=er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=Pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Op,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_l,this.stencilZFail=_l,this.stencilZPass=_l,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Oe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Oe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new xe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Mi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new oe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new oe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Gn=class extends Mn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Sr,To=new L,br=new L,Tr=new L,Er=new oe,Eo=new oe,Yp=new Ve,Za=new L,wo=new L,Ka=new L,Ad=new oe,kh=new oe,Rd=new oe,Jn=class extends Ft{constructor(e=new Gn){if(super(),this.isSprite=!0,this.type="Sprite",Sr===void 0){Sr=new Rt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new zs(t,5);Sr.setIndex([0,1,2,0,2,3]),Sr.setAttribute("position",new ys(n,3,0,!1)),Sr.setAttribute("uv",new ys(n,2,3,!1))}this.geometry=Sr,this.material=e,this.center=new oe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ze('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),br.setFromMatrixScale(this.matrixWorld),Yp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Tr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&br.multiplyScalar(-Tr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Ja(Za.set(-.5,-.5,0),Tr,o,br,s,r),Ja(wo.set(.5,-.5,0),Tr,o,br,s,r),Ja(Ka.set(.5,.5,0),Tr,o,br,s,r),Ad.set(0,0),kh.set(1,0),Rd.set(1,1);let a=e.ray.intersectTriangle(Za,wo,Ka,!1,To);if(a===null&&(Ja(wo.set(-.5,.5,0),Tr,o,br,s,r),kh.set(0,1),a=e.ray.intersectTriangle(Za,Ka,wo,!1,To),a===null))return;let l=e.ray.origin.distanceTo(To);l<e.near||l>e.far||t.push({distance:l,point:To.clone(),uv:Ki.getInterpolation(To,Za,wo,Ka,Ad,kh,Rd,new oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Ja(i,e,t,n,s,r){Er.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Eo.x=r*Er.x-s*Er.y,Eo.y=s*Er.x+r*Er.y):Eo.copy(Er),i.copy(e),i.x+=Eo.x,i.y+=Eo.y,i.applyMatrix4(Yp)}var Yi=new L,Hh=new L,$a=new L,ja=new L,Gs=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yi.copy(this.origin).addScaledVector(this.direction,t),Yi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Hh.copy(e).add(t).multiplyScalar(.5),$a.copy(t).sub(e).normalize(),ja.copy(this.origin).sub(Hh);let r=e.distanceTo(t)*.5,o=-this.direction.dot($a),a=ja.dot(this.direction),l=-ja.dot($a),c=ja.lengthSq(),h=Math.abs(1-o*o),u,f,d,p;if(h>0)if(u=o*l-a,f=o*a-l,p=r*h,u>=0)if(f>=-p)if(f<=p){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Hh).addScaledVector($a,f),d}intersectSphere(e,t){if(e.radius<0)return null;Yi.subVectors(e.center,this.origin);let n=Yi.dot(this.direction),s=Yi.dot(Yi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Yi)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=e.x-o.x,f=e.y-o.y,d=e.z-o.z,p=t.x-o.x,x=t.y-o.y,m=t.z-o.z,g=n.x-o.x,v=n.y-o.y,S=n.z-o.z,M=Math.abs(l),E=Math.abs(c),_=Math.abs(h),y,b,N,C,D,R,U,I,B,A,O,J;if(M>=E&&M>=_?(N=l,R=u,B=p,J=g,l>=0?(y=c,b=h,C=f,D=d,U=x,I=m,A=v,O=S):(y=h,b=c,C=d,D=f,U=m,I=x,A=S,O=v)):E>=_?(N=c,R=f,B=x,J=v,c>=0?(y=h,b=l,C=d,D=u,U=m,I=p,A=S,O=g):(y=l,b=h,C=u,D=d,U=p,I=m,A=g,O=S)):(N=h,R=d,B=m,J=S,h>=0?(y=l,b=c,C=u,D=f,U=p,I=x,A=g,O=v):(y=c,b=l,C=f,D=u,U=x,I=p,A=v,O=g)),N===0)return null;let G=y/N,q=b/N,j=1/N,ae=C-G*R,Ce=D-q*R,Z=U-G*B,de=I-q*B,Re=A-G*J,He=O-q*J,be=Re*de-He*Z,Xe=ae*He-Ce*Re,Ht=Z*Ce-de*ae;if(s){if(be<0||Xe<0||Ht<0)return null}else if((be<0||Xe<0||Ht<0)&&(be>0||Xe>0||Ht>0))return null;let qe=be+Xe+Ht;if(qe===0)return null;let ft=j*(be*R+Xe*B+Ht*J);return(qe>0?ft<0:ft>0)?null:this.at(ft/qe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},It=class extends Mn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=va,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Cd=new Ve,Ls=new Gs,Qa=new zn,Id=new L,el=new L,tl=new L,nl=new L,zh=new L,il=new L,Pd=new L,sl=new L,tt=class extends Ft{constructor(e=new Rt,t=new It){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){il.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(zh.fromBufferAttribute(u,e),o?il.addScaledVector(zh,h):il.addScaledVector(zh.sub(t),h))}t.add(il)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qa.copy(n.boundingSphere),Qa.applyMatrix4(r),Ls.copy(e.ray).recast(e.near),!(Qa.containsPoint(Ls.origin)===!1&&(Ls.intersectSphere(Qa,Id)===null||Ls.origin.distanceToSquared(Id)>(e.far-e.near)**2))&&(Cd.copy(r).invert(),Ls.copy(e.ray).applyMatrix4(Cd),!(n.boundingBox!==null&&Ls.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ls)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let m=f[p],g=o[m.materialIndex],v=Math.max(m.start,d.start),S=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let M=v,E=S;M<E;M+=3){let _=a.getX(M),y=a.getX(M+1),b=a.getX(M+2);s=rl(this,g,e,n,c,h,u,_,y,b),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=p,g=x;m<g;m+=3){let v=a.getX(m),S=a.getX(m+1),M=a.getX(m+2);s=rl(this,o,e,n,c,h,u,v,S,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let m=f[p],g=o[m.materialIndex],v=Math.max(m.start,d.start),S=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=v,E=S;M<E;M+=3){let _=M,y=M+1,b=M+2;s=rl(this,g,e,n,c,h,u,_,y,b),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=p,g=x;m<g;m+=3){let v=m,S=m+1,M=m+2;s=rl(this,o,e,n,c,h,u,v,S,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Mg(i,e,t,n,s,r,o,a){let l;if(e.side===Sn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Di,a),l===null)return null;sl.copy(a),sl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(sl);return c<t.near||c>t.far?null:{distance:c,point:sl.clone(),object:i}}function rl(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,el),i.getVertexPosition(l,tl),i.getVertexPosition(c,nl);let h=Mg(i,e,t,n,el,tl,nl,Pd);if(h){let u=new L;Ki.getBarycoord(Pd,el,tl,nl,u),s&&(h.uv=Ki.getInterpolatedAttribute(s,a,l,c,u,new oe)),r&&(h.uv1=Ki.getInterpolatedAttribute(r,a,l,c,u,new oe)),o&&(h.normal=Ki.getInterpolatedAttribute(o,a,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new L,materialIndex:0};Ki.getNormal(el,tl,nl,f.normal),h.face=f,h.barycoord=u}return h}var Ao=new Lt,Ld=new Lt,Nd=new Lt,Sg=new Lt,Dd=new Ve,ol=new L,Gh=new zn,Ud=new Ve,Vh=new Gs,Wo=class extends tt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Jh,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new vn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ol),this.boundingBox.expandByPoint(ol)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new zn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ol),this.boundingSphere.expandByPoint(ol)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gh.copy(this.boundingSphere),Gh.applyMatrix4(s),e.ray.intersectsSphere(Gh)!==!1&&(Ud.copy(s).invert(),Vh.copy(e.ray).applyMatrix4(Ud),!(this.boundingBox!==null&&Vh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Vh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Lt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Jh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ip?this.bindMatrixInverse.copy(this.bindMatrix).invert():Oe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Ld.fromBufferAttribute(s.attributes.skinIndex,e),Nd.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Ao.copy(t),t.set(0,0,0,0)):(Ao.set(t.x,t.y,t.z,1),t.set(0,0,0)),Ao.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=Nd.getComponent(r);if(o!==0){let a=Ld.getComponent(r);Dd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Sg.copy(Ao).applyMatrix4(Dd),o)}}return t.isVector4&&(t.w=Ao.w),t.applyMatrix4(this.bindMatrixInverse)}},kr=class extends Ft{constructor(){super(),this.isBone=!0,this.type="Bone"}},Hr=class extends ln{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Qt,h=Qt,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Od=new Ve,bg=new Ve,qo=class i{constructor(e=[],t=[]){this.uuid=wi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Oe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ve;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:bg;Od.multiplyMatrices(a,t[r]),Od.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Hr(t,e,e,hi,jn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(Oe("Skeleton: No bone found with UUID:",r),o=new kr),this.bones.push(o),this.boneInverses.push(new Ve().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},ji=class extends Dt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},wr=new Ve,Fd=new Ve,al=[],Bd=new vn,Tg=new Ve,Ro=new tt,Co=new zn,bi=class extends tt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ji(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Tg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new vn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,wr),Bd.copy(e.boundingBox).applyMatrix4(wr),this.boundingBox.union(Bd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new zn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,wr),Co.copy(e.boundingSphere).applyMatrix4(wr),this.boundingSphere.union(Co)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Ro.geometry=this.geometry,Ro.material=this.material,Ro.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Co.copy(this.boundingSphere),Co.applyMatrix4(n),e.ray.intersectsSphere(Co)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,wr),Fd.multiplyMatrices(n,wr),Ro.matrixWorld=Fd,Ro.raycast(e,al);for(let o=0,a=al.length;o<a;o++){let l=al[o];l.instanceId=r,l.object=this,t.push(l)}al.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ji(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Hr(new Float32Array(s*this.count),s,this.count,nc,jn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ns=new zn,Eg=new oe(.5,.5),ll=new L,vs=class{constructor(e=new Mi,t=new Mi,n=new Mi,s=new Mi,r=new Mi,o=new Mi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=oi,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],p=r[8],x=r[9],m=r[10],g=r[11],v=r[12],S=r[13],M=r[14],E=r[15];if(s[0].setComponents(c-o,d-h,g-p,E-v).normalize(),s[1].setComponents(c+o,d+h,g+p,E+v).normalize(),s[2].setComponents(c+a,d+u,g+x,E+S).normalize(),s[3].setComponents(c-a,d-u,g-x,E-S).normalize(),n)s[4].setComponents(l,f,m,M).normalize(),s[5].setComponents(c-l,d-f,g-m,E-M).normalize();else if(s[4].setComponents(c-l,d-f,g-m,E-M).normalize(),t===oi)s[5].setComponents(c+l,d+f,g+m,E+M).normalize();else if(t===Nr)s[5].setComponents(l,f,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ns)}intersectsSprite(e){Ns.center.set(0,0,0);let t=Eg.distanceTo(e.center);return Ns.radius=.7071067811865476+t,Ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ns)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ll.x=s.normal.x>0?e.max.x:e.min.x,ll.y=s.normal.y>0?e.max.y:e.min.y,ll.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ll)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},kd=new Ve,Cl=class i{constructor(){this.coordinateSystem=oi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];kd.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new vs),n[s].setFromProjectionMatrix(kd,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new vs),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var zr=class extends Mn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Il=new L,Pl=new L,Hd=new Ve,Io=new Gs,cl=new zn,Xh=new L,zd=new L,Vs=class extends Ft{constructor(e=new Rt,t=new zr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Il.fromBufferAttribute(t,s-1),Pl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Il.distanceTo(Pl);e.setAttribute("lineDistance",new $e(n,1))}else Oe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cl.copy(n.boundingSphere),cl.applyMatrix4(s),cl.radius+=r,e.ray.intersectsSphere(cl)===!1)return;Hd.copy(s).invert(),Io.copy(e.ray).applyMatrix4(Hd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=d,m=p-1;x<m;x+=c){let g=h.getX(x),v=h.getX(x+1),S=hl(this,e,Io,l,g,v,x);S&&t.push(S)}if(this.isLineLoop){let x=h.getX(p-1),m=h.getX(d),g=hl(this,e,Io,l,x,m,p-1);g&&t.push(g)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let x=d,m=p-1;x<m;x+=c){let g=hl(this,e,Io,l,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){let x=hl(this,e,Io,l,p-1,d,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function hl(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Il.fromBufferAttribute(a,s),Pl.fromBufferAttribute(a,r),t.distanceSqToSegment(Il,Pl,Xh,zd)>n)return;Xh.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Xh);if(!(c<e.near||c>e.far))return{distance:c,point:zd.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Gd=new L,Vd=new L,Yo=class extends Vs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Gd.fromBufferAttribute(t,s),Vd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Gd.distanceTo(Vd);e.setAttribute("lineDistance",new $e(n,1))}else Oe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Zo=class extends Vs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ms=class extends Mn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Xd=new Ve,jh=new Gs,ul=new zn,fl=new L,Xs=class extends Ft{constructor(e=new Rt,t=new Ms){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ul.copy(n.boundingSphere),ul.applyMatrix4(s),ul.radius+=r,e.ray.intersectsSphere(ul)===!1)return;Xd.copy(s).invert(),jh.copy(e.ray).applyMatrix4(Xd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=f,x=d;p<x;p++){let m=c.getX(p);fl.fromBufferAttribute(u,m),Wd(fl,m,l,s,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let p=f,x=d;p<x;p++)fl.fromBufferAttribute(u,p),Wd(fl,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Wd(i,e,t,n,s,r,o){let a=jh.distanceSqToPoint(i);if(a<t){let l=new L;jh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Ko=class extends ln{constructor(e=[],t=tr,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ws=class extends ln{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Qi=class extends ln{constructor(e,t,n=Ti,s,r,o,a=Qt,l=Qt,c,h=$i,u=1){if(h!==$i&&h!==rs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Or(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Jo=class extends Qi{constructor(e,t=Ti,n=tr,s,r,o=Qt,a=Qt,l,c=$i){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},$o=class extends ln{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ke=class i extends Rt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new $e(c,3)),this.setAttribute("normal",new $e(h,3)),this.setAttribute("uv",new $e(u,2));function p(x,m,g,v,S,M,E,_,y,b,N){let C=M/y,D=E/b,R=M/2,U=E/2,I=_/2,B=y+1,A=b+1,O=0,J=0,G=new L;for(let q=0;q<A;q++){let j=q*D-U;for(let ae=0;ae<B;ae++){let Ce=ae*C-R;G[x]=Ce*v,G[m]=j*S,G[g]=I,c.push(G.x,G.y,G.z),G[x]=0,G[m]=0,G[g]=_>0?1:-1,h.push(G.x,G.y,G.z),u.push(ae/y),u.push(1-q/b),O+=1}}for(let q=0;q<b;q++)for(let j=0;j<y;j++){let ae=f+j+B*q,Ce=f+j+B*(q+1),Z=f+(j+1)+B*(q+1),de=f+(j+1)+B*q;l.push(ae,Ce,de),l.push(Ce,Z,de),J+=6}a.addGroup(d,J,N),d+=J,f+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Gr=class i extends Rt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=t/2,u=Math.PI/2*e,f=t,d=2*u+f,p=n*2+r,x=s+1,m=new L,g=new L;for(let v=0;v<=p;v++){let S=0,M=0,E=0,_=0;if(v<=n){let N=v/n,C=N*Math.PI/2;M=-h-e*Math.cos(C),E=e*Math.sin(C),_=-e*Math.cos(C),S=N*u}else if(v<=n+r){let N=(v-n)/r;M=-h+N*t,E=e,_=0,S=u+N*f}else{let N=(v-n-r)/n,C=N*Math.PI/2;M=h+e*Math.sin(C),E=e*Math.cos(C),_=e*Math.sin(C),S=u+f+N*u}let y=Math.max(0,Math.min(1,S/d)),b=0;v===0?b=.5/s:v===p&&(b=-.5/s);for(let N=0;N<=s;N++){let C=N/s,D=C*Math.PI*2,R=Math.sin(D),U=Math.cos(D);g.x=-E*U,g.y=M,g.z=E*R,a.push(g.x,g.y,g.z),m.set(-E*U,_,E*R),m.normalize(),l.push(m.x,m.y,m.z),c.push(C+b,y)}if(v>0){let N=(v-1)*x;for(let C=0;C<s;C++){let D=N+C,R=N+C+1,U=v*x+C,I=v*x+C+1;o.push(D,R,U),o.push(R,I,U)}}}this.setIndex(o),this.setAttribute("position",new $e(a,3)),this.setAttribute("normal",new $e(l,3)),this.setAttribute("uv",new $e(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},ai=class i extends Rt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new L,h=new oe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=n+u/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new $e(o,3)),this.setAttribute("normal",new $e(a,3)),this.setAttribute("uv",new $e(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ye=class i extends Rt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],p=0,x=[],m=n/2,g=0;v(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new $e(u,3)),this.setAttribute("normal",new $e(f,3)),this.setAttribute("uv",new $e(d,2));function v(){let M=new L,E=new L,_=0,y=(t-e)/n;for(let b=0;b<=r;b++){let N=[],C=b/r,D=C*(t-e)+e;for(let R=0;R<=s;R++){let U=R/s,I=U*l+a,B=Math.sin(I),A=Math.cos(I);E.x=D*B,E.y=-C*n+m,E.z=D*A,u.push(E.x,E.y,E.z),M.set(B,y,A).normalize(),f.push(M.x,M.y,M.z),d.push(U,1-C),N.push(p++)}x.push(N)}for(let b=0;b<s;b++)for(let N=0;N<r;N++){let C=x[N][b],D=x[N+1][b],R=x[N+1][b+1],U=x[N][b+1];(e>0||N!==0)&&(h.push(C,D,U),_+=3),(t>0||N!==r-1)&&(h.push(D,R,U),_+=3)}c.addGroup(g,_,0),g+=_}function S(M){let E=p,_=new oe,y=new L,b=0,N=M===!0?e:t,C=M===!0?1:-1;for(let R=1;R<=s;R++)u.push(0,m*C,0),f.push(0,C,0),d.push(.5,.5),p++;let D=p;for(let R=0;R<=s;R++){let I=R/s*l+a,B=Math.cos(I),A=Math.sin(I);y.x=N*A,y.y=m*C,y.z=N*B,u.push(y.x,y.y,y.z),f.push(0,C,0),_.x=B*.5+.5,_.y=A*.5*C+.5,d.push(_.x,_.y),p++}for(let R=0;R<s;R++){let U=E+R,I=D+R;M===!0?h.push(I,I+1,U):h.push(I+1,I,U),b+=3}c.addGroup(g,b,M===!0?1:2),g+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Vn=class i extends Ye{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},jo=class i extends Rt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new $e(r,3)),this.setAttribute("normal",new $e(r.slice(),3)),this.setAttribute("uv",new $e(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let S=new L,M=new L,E=new L;for(let _=0;_<t.length;_+=3)d(t[_+0],S),d(t[_+1],M),d(t[_+2],E),l(S,M,E,v)}function l(v,S,M,E){let _=E+1,y=[];for(let b=0;b<=_;b++){y[b]=[];let N=v.clone().lerp(M,b/_),C=S.clone().lerp(M,b/_),D=_-b;for(let R=0;R<=D;R++)R===0&&b===_?y[b][R]=N:y[b][R]=N.clone().lerp(C,R/D)}for(let b=0;b<_;b++)for(let N=0;N<2*(_-b)-1;N++){let C=Math.floor(N/2);N%2===0?(f(y[b][C+1]),f(y[b+1][C]),f(y[b][C])):(f(y[b][C+1]),f(y[b+1][C+1]),f(y[b+1][C]))}}function c(v){let S=new L;for(let M=0;M<r.length;M+=3)S.x=r[M+0],S.y=r[M+1],S.z=r[M+2],S.normalize().multiplyScalar(v),r[M+0]=S.x,r[M+1]=S.y,r[M+2]=S.z}function h(){let v=new L;for(let S=0;S<r.length;S+=3){v.x=r[S+0],v.y=r[S+1],v.z=r[S+2];let M=m(v)/2/Math.PI+.5,E=g(v)/Math.PI+.5;o.push(M,1-E)}p(),u()}function u(){for(let v=0;v<o.length;v+=6){let S=o[v+0],M=o[v+2],E=o[v+4],_=Math.max(S,M,E),y=Math.min(S,M,E);_>.9&&y<.1&&(S<.2&&(o[v+0]+=1),M<.2&&(o[v+2]+=1),E<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function d(v,S){let M=v*3;S.x=e[M+0],S.y=e[M+1],S.z=e[M+2]}function p(){let v=new L,S=new L,M=new L,E=new L,_=new oe,y=new oe,b=new oe;for(let N=0,C=0;N<r.length;N+=9,C+=6){v.set(r[N+0],r[N+1],r[N+2]),S.set(r[N+3],r[N+4],r[N+5]),M.set(r[N+6],r[N+7],r[N+8]),_.set(o[C+0],o[C+1]),y.set(o[C+2],o[C+3]),b.set(o[C+4],o[C+5]),E.copy(v).add(S).add(M).divideScalar(3);let D=m(E);x(_,C+0,v,D),x(y,C+2,S,D),x(b,C+4,M,D)}}function x(v,S,M,E){E<0&&v.x===1&&(o[S]=v.x-1),M.x===0&&M.z===0&&(o[S]=E/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var $n=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Oe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new oe:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new L,s=[],r=[],o=[],a=new L,l=new Ve;for(let d=0;d<=e;d++){let p=d/e;s[d]=this.getTangentAt(p,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(pt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(pt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],d*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Vr=class extends $n{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new oe){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ll=class extends Vr{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ou(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var qd=new L,Yd=new L,Wh=new Ou,qh=new Ou,Yh=new Ou,Xr=class extends $n{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Yd.subVectors(s[0],s[1]).add(s[0]),c=Yd);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(qd.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=qd),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),Wh.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,p,x,m),qh.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,p,x,m),Yh.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,p,x,m)}else this.curveType==="catmullrom"&&(Wh.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),qh.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Yh.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Wh.calc(l),qh.calc(l),Yh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Zd(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function wg(i,e){let t=1-i;return t*t*e}function Ag(i,e){return 2*(1-i)*i*e}function Rg(i,e){return i*i*e}function Uo(i,e,t,n){return wg(i,e)+Ag(i,t)+Rg(i,n)}function Cg(i,e){let t=1-i;return t*t*t*e}function Ig(i,e){let t=1-i;return 3*t*t*i*e}function Pg(i,e){return 3*(1-i)*i*i*e}function Lg(i,e){return i*i*i*e}function Oo(i,e,t,n,s){return Cg(i,e)+Ig(i,t)+Pg(i,n)+Lg(i,s)}var Qo=class extends $n{constructor(e=new oe,t=new oe,n=new oe,s=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new oe){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Oo(e,s.x,r.x,o.x,a.x),Oo(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Nl=class extends $n{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Oo(e,s.x,r.x,o.x,a.x),Oo(e,s.y,r.y,o.y,a.y),Oo(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ea=class extends $n{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Dl=class extends $n{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ta=class extends $n{constructor(e=new oe,t=new oe,n=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new oe){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Uo(e,s.x,r.x,o.x),Uo(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},na=class extends $n{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Uo(e,s.x,r.x,o.x),Uo(e,s.y,r.y,o.y),Uo(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ia=class extends $n{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Zd(a,l.x,c.x,h.x,u.x),Zd(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new oe().fromArray(s))}return this}},Ul=Object.freeze({__proto__:null,ArcCurve:Ll,CatmullRomCurve3:Xr,CubicBezierCurve:Qo,CubicBezierCurve3:Nl,EllipseCurve:Vr,LineCurve:ea,LineCurve3:Dl,QuadraticBezierCurve:ta,QuadraticBezierCurve3:na,SplineCurve:ia}),Ol=class extends $n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ul[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Ul[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},sa=class extends Ol{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ea(this.currentPoint.clone(),new oe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new ta(this.currentPoint.clone(),new oe(e,t),new oe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Qo(this.currentPoint.clone(),new oe(e,t),new oe(n,s),new oe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ia(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new Vr(e,t,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},qs=class extends sa{constructor(e){super(e),this.uuid=wi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new sa().fromJSON(s))}return this}};function Ng(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Zp(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Bg(i,e,r,t)),i.length>80*t){a=i[0],l=i[1];let h=a,u=l;for(let f=t;f<s;f+=t){let d=i[f],p=i[f+1];d<a&&(a=d),p<l&&(l=p),d>h&&(h=d),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return ra(r,o,t,a,l,c,0),o}function Zp(i,e,t,n,s){let r;if(s===Kg(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Kd(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Kd(o/n|0,i[o],i[o+1],r);return r&&Wr(r,r.next)&&(aa(r),r=r.next),r}function Ys(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Wr(t,t.next)||qt(t.prev,t,t.next)===0)){if(aa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ra(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Vg(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Ug(i,n,s,r):Dg(i)){e.push(l.i,i.i,c.i),aa(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Og(Ys(i),e),ra(i,e,t,n,s,r,2)):o===2&&Fg(i,e,t,n,s,r):ra(Ys(i),e,t,n,s,r,1);break}}}function Dg(i){let e=i.prev,t=i,n=i.next;if(qt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c),p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&Po(s,a,r,l,o,c,p.x,p.y)&&qt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Ug(i,e,t,n){let s=i.prev,r=i,o=i.next;if(qt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,l,c),p=Math.min(h,u,f),x=Math.max(a,l,c),m=Math.max(h,u,f),g=Qh(d,p,e,t,n),v=Qh(x,m,e,t,n),S=i.prevZ,M=i.nextZ;for(;S&&S.z>=g&&M&&M.z<=v;){if(S.x>=d&&S.x<=x&&S.y>=p&&S.y<=m&&S!==s&&S!==o&&Po(a,h,l,u,c,f,S.x,S.y)&&qt(S.prev,S,S.next)>=0||(S=S.prevZ,M.x>=d&&M.x<=x&&M.y>=p&&M.y<=m&&M!==s&&M!==o&&Po(a,h,l,u,c,f,M.x,M.y)&&qt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;S&&S.z>=g;){if(S.x>=d&&S.x<=x&&S.y>=p&&S.y<=m&&S!==s&&S!==o&&Po(a,h,l,u,c,f,S.x,S.y)&&qt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;M&&M.z<=v;){if(M.x>=d&&M.x<=x&&M.y>=p&&M.y<=m&&M!==s&&M!==o&&Po(a,h,l,u,c,f,M.x,M.y)&&qt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Og(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Wr(n,s)&&Jp(n,t,t.next,s)&&oa(n,s)&&oa(s,n)&&(e.push(n.i,t.i,s.i),aa(t),aa(t.next),t=i=s),t=t.next}while(t!==i);return Ys(t)}function Fg(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&qg(o,a)){let l=$p(o,a);o=Ys(o,o.next),l=Ys(l,l.next),ra(o,e,t,n,s,r,0),ra(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Bg(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Zp(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Wg(c))}s.sort(kg);for(let r=0;r<s.length;r++)t=Hg(s[r],t);return t}function kg(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Hg(i,e){let t=zg(i,e);if(!t)return e;let n=$p(t,i);return Ys(n,n.next),Ys(t,t.next)}function zg(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(Wr(i,t))return t;do{if(Wr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Kp(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);oa(t,i)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&Gg(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function Gg(i,e){return qt(i.prev,i,e.prev)<0&&qt(e.next,i,i.next)<0}function Vg(i,e,t,n){let s=i;do s.z===0&&(s.z=Qh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Xg(s)}function Xg(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Qh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Wg(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Kp(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Po(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Kp(i,e,t,n,s,r,o,a)}function qg(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Yg(i,e)&&(oa(i,e)&&oa(e,i)&&Zg(i,e)&&(qt(i.prev,i,e.prev)||qt(i,e.prev,e))||Wr(i,e)&&qt(i.prev,i,i.next)>0&&qt(e.prev,e,e.next)>0)}function qt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Wr(i,e){return i.x===e.x&&i.y===e.y}function Jp(i,e,t,n){let s=pl(qt(i,e,t)),r=pl(qt(i,e,n)),o=pl(qt(t,n,i)),a=pl(qt(t,n,e));return!!(s!==r&&o!==a||s===0&&dl(i,t,e)||r===0&&dl(i,n,e)||o===0&&dl(t,i,n)||a===0&&dl(t,e,n))}function dl(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function pl(i){return i>0?1:i<0?-1:0}function Yg(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Jp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function oa(i,e){return qt(i.prev,i,i.next)<0?qt(i,e,i.next)>=0&&qt(i,i.prev,e)>=0:qt(i,e,i.prev)<0||qt(i,i.next,e)<0}function Zg(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function $p(i,e){let t=eu(i.i,i.x,i.y),n=eu(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Kd(i,e,t,n){let s=eu(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function aa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function eu(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Kg(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var tu=class{static triangulate(e,t,n=2){return Ng(e,t,n)}},Os=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Jd(e),$d(n,e);let o=e.length;t.forEach(Jd);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,$d(n,t[l]);let a=tu.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Jd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function $d(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var qr=class i extends Rt{constructor(e=new qs([new oe(.5,.5),new oe(-.5,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new $e(s,3)),this.setAttribute("uv",new $e(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:Jg,S,M=!1,E,_,y,b;if(g){S=g.getSpacedPoints(h),M=!0,f=!1;let ie=g.isCatmullRomCurve3?g.closed:!1;E=g.computeFrenetFrames(h,ie),_=new L,y=new L,b=new L}f||(m=0,d=0,p=0,x=0);let N=a.extractPoints(c),C=N.shape,D=N.holes;if(!Os.isClockWise(C)){C=C.reverse();for(let ie=0,pe=D.length;ie<pe;ie++){let he=D[ie];Os.isClockWise(he)&&(D[ie]=he.reverse())}}function U(ie){let he=10000000000000001e-36,Ae=ie[0];for(let Se=1;Se<=ie.length;Se++){let rt=Se%ie.length,Fe=ie[rt],_t=Fe.x-Ae.x,yt=Fe.y-Ae.y,Et=_t*_t+yt*yt,H=Math.max(Math.abs(Fe.x),Math.abs(Fe.y),Math.abs(Ae.x),Math.abs(Ae.y)),tn=he*H*H;if(Et<=tn){ie.splice(rt,1),Se--;continue}Ae=Fe}}U(C),D.forEach(U);let I=D.length,B=C;for(let ie=0;ie<I;ie++){let pe=D[ie];C=C.concat(pe)}function A(ie,pe,he){return pe||Ze("ExtrudeGeometry: vec does not exist"),ie.clone().addScaledVector(pe,he)}let O=C.length;function J(ie,pe,he){let Ae,Se,rt,Fe=ie.x-pe.x,_t=ie.y-pe.y,yt=he.x-ie.x,Et=he.y-ie.y,H=Fe*Fe+_t*_t,tn=Fe*Et-_t*yt;if(Math.abs(tn)>Number.EPSILON){let gt=Math.sqrt(H),Ut=Math.sqrt(yt*yt+Et*Et),ye=pe.x-_t/gt,$t=pe.y+Fe/gt,We=he.x-Et/Ut,Je=he.y+yt/Ut,P=((We-ye)*Et-(Je-$t)*yt)/(Fe*Et-_t*yt);Ae=ye+Fe*P-ie.x,Se=$t+_t*P-ie.y;let T=Ae*Ae+Se*Se;if(T<=2)return new oe(Ae,Se);rt=Math.sqrt(T/2)}else{let gt=!1;Fe>Number.EPSILON?yt>Number.EPSILON&&(gt=!0):Fe<-Number.EPSILON?yt<-Number.EPSILON&&(gt=!0):Math.sign(_t)===Math.sign(Et)&&(gt=!0),gt?(Ae=-_t,Se=Fe,rt=Math.sqrt(H)):(Ae=Fe,Se=_t,rt=Math.sqrt(H/2))}return new oe(Ae/rt,Se/rt)}let G=[];for(let ie=0,pe=B.length,he=pe-1,Ae=ie+1;ie<pe;ie++,he++,Ae++)he===pe&&(he=0),Ae===pe&&(Ae=0),G[ie]=J(B[ie],B[he],B[Ae]);let q=[],j,ae=G.concat();for(let ie=0,pe=I;ie<pe;ie++){let he=D[ie];j=[];for(let Ae=0,Se=he.length,rt=Se-1,Fe=Ae+1;Ae<Se;Ae++,rt++,Fe++)rt===Se&&(rt=0),Fe===Se&&(Fe=0),j[Ae]=J(he[Ae],he[rt],he[Fe]);q.push(j),ae=ae.concat(j)}let Ce;if(m===0)Ce=Os.triangulateShape(B,D);else{let ie=[],pe=[];for(let he=0;he<m;he++){let Ae=he/m,Se=d*Math.cos(Ae*Math.PI/2),rt=p*Math.sin(Ae*Math.PI/2)+x;for(let Fe=0,_t=B.length;Fe<_t;Fe++){let yt=A(B[Fe],G[Fe],rt);Xe(yt.x,yt.y,-Se),Ae===0&&ie.push(yt)}for(let Fe=0,_t=I;Fe<_t;Fe++){let yt=D[Fe];j=q[Fe];let Et=[];for(let H=0,tn=yt.length;H<tn;H++){let gt=A(yt[H],j[H],rt);Xe(gt.x,gt.y,-Se),Ae===0&&Et.push(gt)}Ae===0&&pe.push(Et)}}Ce=Os.triangulateShape(ie,pe)}let Z=Ce.length,de=p+x;for(let ie=0;ie<O;ie++){let pe=f?A(C[ie],ae[ie],de):C[ie];M?(y.copy(E.normals[0]).multiplyScalar(pe.x),_.copy(E.binormals[0]).multiplyScalar(pe.y),b.copy(S[0]).add(y).add(_),Xe(b.x,b.y,b.z)):Xe(pe.x,pe.y,0)}for(let ie=1;ie<=h;ie++)for(let pe=0;pe<O;pe++){let he=f?A(C[pe],ae[pe],de):C[pe];M?(y.copy(E.normals[ie]).multiplyScalar(he.x),_.copy(E.binormals[ie]).multiplyScalar(he.y),b.copy(S[ie]).add(y).add(_),Xe(b.x,b.y,b.z)):Xe(he.x,he.y,u/h*ie)}for(let ie=m-1;ie>=0;ie--){let pe=ie/m,he=d*Math.cos(pe*Math.PI/2),Ae=p*Math.sin(pe*Math.PI/2)+x;for(let Se=0,rt=B.length;Se<rt;Se++){let Fe=A(B[Se],G[Se],Ae);Xe(Fe.x,Fe.y,u+he)}for(let Se=0,rt=D.length;Se<rt;Se++){let Fe=D[Se];j=q[Se];for(let _t=0,yt=Fe.length;_t<yt;_t++){let Et=A(Fe[_t],j[_t],Ae);M?Xe(Et.x,Et.y+S[h-1].y,S[h-1].x+he):Xe(Et.x,Et.y,u+he)}}}Re(),He();function Re(){let ie=s.length/3;if(f){let pe=0,he=O*pe;for(let Ae=0;Ae<Z;Ae++){let Se=Ce[Ae];Ht(Se[2]+he,Se[1]+he,Se[0]+he)}pe=h+m*2,he=O*pe;for(let Ae=0;Ae<Z;Ae++){let Se=Ce[Ae];Ht(Se[0]+he,Se[1]+he,Se[2]+he)}}else{for(let pe=0;pe<Z;pe++){let he=Ce[pe];Ht(he[2],he[1],he[0])}for(let pe=0;pe<Z;pe++){let he=Ce[pe];Ht(he[0]+O*h,he[1]+O*h,he[2]+O*h)}}n.addGroup(ie,s.length/3-ie,0)}function He(){let ie=s.length/3,pe=0;be(B,pe),pe+=B.length;for(let he=0,Ae=D.length;he<Ae;he++){let Se=D[he];be(Se,pe),pe+=Se.length}n.addGroup(ie,s.length/3-ie,1)}function be(ie,pe){let he=ie.length;for(;--he>=0;){let Ae=he,Se=he-1;Se<0&&(Se=ie.length-1);for(let rt=0,Fe=h+m*2;rt<Fe;rt++){let _t=O*rt,yt=O*(rt+1),Et=pe+Ae+_t,H=pe+Se+_t,tn=pe+Se+yt,gt=pe+Ae+yt;qe(Et,H,tn,gt)}}}function Xe(ie,pe,he){l.push(ie),l.push(pe),l.push(he)}function Ht(ie,pe,he){ft(ie),ft(pe),ft(he);let Ae=s.length/3,Se=v.generateTopUV(n,s,Ae-3,Ae-2,Ae-1);xt(Se[0]),xt(Se[1]),xt(Se[2])}function qe(ie,pe,he,Ae){ft(ie),ft(pe),ft(Ae),ft(pe),ft(he),ft(Ae);let Se=s.length/3,rt=v.generateSideWallUV(n,s,Se-6,Se-3,Se-2,Se-1);xt(rt[0]),xt(rt[1]),xt(rt[3]),xt(rt[1]),xt(rt[2]),xt(rt[3])}function ft(ie){s.push(l[ie*3+0]),s.push(l[ie*3+1]),s.push(l[ie*3+2])}function xt(ie){r.push(ie.x),r.push(ie.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return $g(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Ul[s.type]().fromJSON(s)),new i(n,e.options)}},Jg={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new oe(r,o),new oe(a,l),new oe(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[s*3],d=e[s*3+1],p=e[s*3+2],x=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new oe(o,1-l),new oe(c,1-u),new oe(f,1-p),new oe(x,1-g)]:[new oe(a,1-l),new oe(h,1-u),new oe(d,1-p),new oe(m,1-g)]}};function $g(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Pi=class i extends jo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Ss=class i extends jo{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Pn=class i extends Rt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,f=t/l,d=[],p=[],x=[],m=[];for(let g=0;g<h;g++){let v=g*f-o;for(let S=0;S<c;S++){let M=S*u-r;p.push(M,-v,0),x.push(0,0,1),m.push(S/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<a;v++){let S=v+c*g,M=v+c*(g+1),E=v+1+c*(g+1),_=v+1+c*g;d.push(S,M,_),d.push(M,E,_)}this.setIndex(d),this.setAttribute("position",new $e(p,3)),this.setAttribute("normal",new $e(x,3)),this.setAttribute("uv",new $e(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var ht=class i extends Rt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new L,f=new L,d=[],p=[],x=[],m=[];for(let g=0;g<=n;g++){let v=[],S=g/n,M=o+S*a,E=e*Math.cos(M),_=Math.sqrt(e*e-E*E),y=0;g===0&&o===0?y=.5/t:g===n&&l===Math.PI&&(y=-.5/t);for(let b=0;b<=t;b++){let N=b/t,C=s+N*r;u.x=-_*Math.cos(C),u.y=E,u.z=_*Math.sin(C),p.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(N+y,1-S),v.push(c++)}h.push(v)}for(let g=0;g<n;g++)for(let v=0;v<t;v++){let S=h[g][v+1],M=h[g][v],E=h[g+1][v],_=h[g+1][v+1];(g!==0||o>0)&&d.push(S,M,_),(g!==n-1||l<Math.PI)&&d.push(M,E,_)}this.setIndex(d),this.setAttribute("position",new $e(p,3)),this.setAttribute("normal",new $e(x,3)),this.setAttribute("uv",new $e(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var cn=class i extends Rt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],f=new L,d=new L,p=new L;for(let x=0;x<=n;x++){let m=o+x/n*a;for(let g=0;g<=s;g++){let v=g/s*r;d.x=(e+t*Math.cos(m))*Math.cos(v),d.y=(e+t*Math.cos(m))*Math.sin(v),d.z=t*Math.sin(m),c.push(d.x,d.y,d.z),f.x=e*Math.cos(v),f.y=e*Math.sin(v),p.subVectors(d,f).normalize(),h.push(p.x,p.y,p.z),u.push(g/s),u.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=s;m++){let g=(s+1)*x+m-1,v=(s+1)*(x-1)+m-1,S=(s+1)*(x-1)+m,M=(s+1)*x+m;l.push(g,v,M),l.push(v,S,M)}this.setIndex(l),this.setAttribute("position",new $e(c,3)),this.setAttribute("normal",new $e(h,3)),this.setAttribute("uv",new $e(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}},la=class i extends Rt{constructor(e=1,t=.4,n=64,s=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:s,p:r,q:o},n=Math.floor(n),s=Math.floor(s);let a=[],l=[],c=[],h=[],u=new L,f=new L,d=new L,p=new L,x=new L,m=new L,g=new L;for(let S=0;S<=n;++S){let M=S/n*r*Math.PI*2;v(M,r,o,e,d),v(M+.01,r,o,e,p),m.subVectors(p,d),g.addVectors(p,d),x.crossVectors(m,g),g.crossVectors(x,m),x.normalize(),g.normalize();for(let E=0;E<=s;++E){let _=E/s*Math.PI*2,y=-t*Math.cos(_),b=t*Math.sin(_);u.x=d.x+(y*g.x+b*x.x),u.y=d.y+(y*g.y+b*x.y),u.z=d.z+(y*g.z+b*x.z),l.push(u.x,u.y,u.z),f.subVectors(u,d).normalize(),c.push(f.x,f.y,f.z),h.push(S/n),h.push(E/s)}}for(let S=1;S<=n;S++)for(let M=1;M<=s;M++){let E=(s+1)*(S-1)+(M-1),_=(s+1)*S+(M-1),y=(s+1)*S+M,b=(s+1)*(S-1)+M;a.push(E,_,b),a.push(_,y,b)}this.setIndex(a),this.setAttribute("position",new $e(l,3)),this.setAttribute("normal",new $e(c,3)),this.setAttribute("uv",new $e(h,2));function v(S,M,E,_,y){let b=Math.cos(S),N=Math.sin(S),C=E/M*S,D=Math.cos(C);y.x=_*(2+D)*.5*b,y.y=_*(2+D)*N*.5,y.z=_*Math.sin(C)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},ca=class i extends Rt{constructor(e=new na(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new L,l=new L,c=new oe,h=new L,u=[],f=[],d=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new $e(u,3)),this.setAttribute("normal",new $e(f,3)),this.setAttribute("uv",new $e(d,2));function x(){for(let S=0;S<t;S++)m(S);m(r===!1?t:0),v(),g()}function m(S){h=e.getPointAt(S/t,h);let M=o.normals[S],E=o.binormals[S];for(let _=0;_<=s;_++){let y=_/s*Math.PI*2,b=Math.sin(y),N=-Math.cos(y);l.x=N*M.x+b*E.x,l.y=N*M.y+b*E.y,l.z=N*M.z+b*E.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function g(){for(let S=1;S<=t;S++)for(let M=1;M<=s;M++){let E=(s+1)*(S-1)+(M-1),_=(s+1)*S+(M-1),y=(s+1)*S+M,b=(s+1)*(S-1)+M;p.push(E,_,b),p.push(_,y,b)}}function v(){for(let S=0;S<=t;S++)for(let M=0;M<=s;M++)c.x=S/t,c.y=M/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Ul[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function sr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(jd(s))s.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(jd(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Ln(i){let e={};for(let t=0;t<i.length;t++){let n=sr(i[t]);for(let s in n)e[s]=n[s]}return e}function jd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function jg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Fu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}var jp={clone:sr,merge:Ln},Qg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ex=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,li=class extends Mn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qg,this.fragmentShader=ex,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sr(e.uniforms),this.uniformsGroups=jg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new xe().setHex(s.value);break;case"v2":this.uniforms[n].value=new oe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Lt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new je().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ve().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Fl=class extends li{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},gn=class extends Mn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=no,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Fn=class extends gn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new oe(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Fs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Fs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},ha=class extends Mn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new xe(16777215),this.specular=new xe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=no,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=va,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Yt=class extends Mn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=no,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=va,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Bl=class extends Mn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},kl=class extends Mn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function _s(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Lo(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function tx(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Qd(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function nx(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var Li=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Hl=class extends Li{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ds,endingEnd:Ds}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Us:r=e,a=2*t-n;break;case Fo:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Us:o=e,l=2*n-t;break;case Fo:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-t)/(s-t),x=p*p,m=x*p,g=-f*m+2*f*x-f*p,v=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*p+1,S=(-1-d)*m+(1.5+d)*x+.5*p,M=d*m-d*x;for(let E=0;E!==a;++E)r[E]=g*o[h+E]+v*o[c+E]+S*o[l+E]+M*o[u+E];return r}},ua=class extends Li{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},zl=class extends Li{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Gl=class extends Li{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-t)/(s-t),x=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*p;return r}let f=a*2,d=e-1;for(let p=0;p!==a;++p){let x=o[c+p],m=o[l+p],g=d*f+p*2,v=u[g],S=u[g+1],M=e*f+p*2,E=h[M],_=h[M+1],y=sx(n,t,v,E,s);r[p]=Qp(y,x,S,_,m)}return r}};function Qp(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function ix(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function sx(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=Qp(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let l=ix(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Xn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_s(t,this.TimeBufferType),this.values=_s(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:_s(e.times,Array),values:_s(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Lo(e.settings)&&(n.settings={inTangents:_s(e.settings.inTangents,Array),outTangents:_s(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new zl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ua(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Hl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Gl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Bs:t=this.InterpolantFactoryMethodDiscrete;break;case ks:t=this.InterpolantFactoryMethodLinear;break;case xl:t=this.InterpolantFactoryMethodSmooth;break;case $h:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Oe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Bs;case this.InterpolantFactoryMethodLinear:return ks;case this.InterpolantFactoryMethodSmooth:return xl;case this.InterpolantFactoryMethodBezier:return $h}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Lo(this.settings)&&(ep(this.settings.inTangents,e),ep(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Lo(this.settings)&&(tp(this.settings.inTangents,e),tp(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ze("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ze("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Ze("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ze("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&V0(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Ze("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===xl,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){let x=t[u+p];if(x!==t[f+p]||x!==t[d+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Lo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function ep(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function tp(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Xn.prototype.ValueTypeName="";Xn.prototype.TimeBufferType=Float32Array;Xn.prototype.ValueBufferType=Float32Array;Xn.prototype.DefaultInterpolation=ks;var es=class extends Xn{constructor(e,t,n){super(e,t,n)}};es.prototype.ValueTypeName="bool";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=Bs;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;var fa=class extends Xn{constructor(e,t,n,s){super(e,t,n,s)}};fa.prototype.ValueTypeName="color";var ts=class extends Xn{constructor(e,t,n,s){super(e,t,n,s)}};ts.prototype.ValueTypeName="number";var Vl=class extends Li{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)kt.slerpFlat(r,0,o,c-a,o,c,l);return r}},ns=class extends Xn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Vl(this.times,this.values,this.getValueSize(),e)}};ns.prototype.ValueTypeName="quaternion";ns.prototype.InterpolantFactoryMethodSmooth=void 0;var is=class extends Xn{constructor(e,t,n){super(e,t,n)}};is.prototype.ValueTypeName="string";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=Bs;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;var bs=class extends Xn{constructor(e,t,n,s){super(e,t,n,s)}};bs.prototype.ValueTypeName="vector";var Zs=class{constructor(e="",t=-1,n=[],s=Fc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=wi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(ox(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Xn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=tx(l);l=Qd(l,1,h),c=Qd(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new ts(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],f=s[u];f||(s[u]=f=[]),f.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function rx(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ts;case"vector":case"vector2":case"vector3":case"vector4":return bs;case"color":return fa;case"quaternion":return ns;case"bool":case"boolean":return es;case"string":return is}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function ox(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=rx(i.type);if(i.times===void 0){let n=[],s=[];nx(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),Lo(i.settings)&&(t.settings={inTangents:_s(i.settings.inTangents,Float32Array),outTangents:_s(i.settings.outTangents,Float32Array)}),t}var Ci={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(np(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!np(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function np(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Xl=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},em=new Xl,Ni=class{constructor(e){this.manager=e!==void 0?e:em,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Ni.DEFAULT_MATERIAL_NAME="__DEFAULT";var Zi={},nu=class extends Error{constructor(e,t){super(e),this.response=t}},Yr=class extends Ni{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ci.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Zi[e]!==void 0){Zi[e].push({onLoad:t,onProgress:n,onError:s});return}Zi[e]=[],Zi[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Oe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Zi[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,p=d!==0,x=0,m=new ReadableStream({start(g){v();function v(){u.read().then(({done:S,value:M})=>{if(S)g.close();else{x+=M.byteLength;let E=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:d});for(let _=0,y=h.length;_<y;_++){let b=h[_];b.onProgress&&b.onProgress(E)}g.enqueue(M),v()}},S=>{g.error(S)})}}});return new Response(m)}else throw new nu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{Ci.add(`file:${e}`,c);let h=Zi[e];delete Zi[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{let h=Zi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Zi[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ar=new WeakMap,Wl=class extends Ni{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ci.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=Ar.get(o);u===void 0&&(u=[],Ar.set(o,u)),u.push({onLoad:t,onError:s})}return o}let a=Dr("img");function l(){h(),t&&t(this);let u=Ar.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}Ar.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),Ci.remove(`image:${e}`);let f=Ar.get(this)||[];for(let d=0;d<f.length;d++){let p=f[d];p.onError&&p.onError(u)}Ar.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ci.add(`image:${e}`,a),r.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};var da=class extends Ni{constructor(e){super(e)}load(e,t,n,s){let r=new ln,o=new Wl(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Ks=class extends Ft{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},pa=class extends Ks{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Zh=new Ve,ip=new L,sp=new L,Zr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.mapType=Wn,this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vs,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ip.setFromMatrixPosition(e.matrixWorld),t.position.copy(ip),sp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Zh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Zh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Nr||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Zh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ml=new L,gl=new kt,Ri=new L,ma=class extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ml,gl,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ml,gl,Ri.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ml,gl,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ml,gl,Ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},xs=new L,rp=new oe,op=new oe,on=class extends ma{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Hs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(No*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hs*2*Math.atan(Math.tan(No*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){xs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xs.x,xs.y).multiplyScalar(-e/xs.z),xs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xs.x,xs.y).multiplyScalar(-e/xs.z)}getViewSize(e,t){return this.getViewBounds(e,rp,op),t.subVectors(op,rp)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(No*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},iu=class extends Zr{constructor(){super(new on(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Hs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},ga=class extends Ks{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new iu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},su=class extends Zr{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0}},xa=class extends Ks{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new su}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Js=class extends ma{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ru=class extends Zr{constructor(){super(new Js(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$s=class extends Ks{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new ru}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ss=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Kh=new WeakMap,_a=class extends Ni{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Oe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Oe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ci.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{Kh.has(o)===!0?(s&&s(Kh.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ci.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Kh.set(l,c),Ci.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Ci.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Rr=-90,Cr=1,Kr=class extends Ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new on(Rr,Cr,e,t);s.layers=this.layers,this.add(s);let r=new on(Rr,Cr,e,t);r.layers=this.layers,this.add(r);let o=new on(Rr,Cr,e,t);o.layers=this.layers,this.add(o);let a=new on(Rr,Cr,e,t);a.layers=this.layers,this.add(a);let l=new on(Rr,Cr,e,t);l.layers=this.layers,this.add(l);let c=new on(Rr,Cr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===oi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Nr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=x,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},ql=class extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Yl=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,s,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){kt.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let o=this._workIndex*r;kt.multiplyQuaternionsFlat(e,o,e,t,e,n),kt.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){let o=1-s;for(let a=0;a!==r;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*s}}},Bu="\\[\\]\\.:\\/",ax=new RegExp("["+Bu+"]","g"),ku="[^"+Bu+"]",lx="[^"+Bu.replace("\\.","")+"]",cx=/((?:WC+[\/:])*)/.source.replace("WC",ku),hx=/(WCOD+)?/.source.replace("WCOD",lx),ux=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ku),fx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ku),dx=new RegExp("^"+cx+hx+ux+fx+"$"),px=["material","materials","bones","map"],ou=class{constructor(e,t,n){let s=n||Nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Nt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ax,"")}static parseTrackName(e){let t=dx.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);px.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Oe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;Ze("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Nt.Composite=ou;Nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Nt.prototype.GetterByBindingType=[Nt.prototype._getValue_direct,Nt.prototype._getValue_array,Nt.prototype._getValue_arrayElement,Nt.prototype._getValue_toArray];Nt.prototype.SetterByBindingTypeAndVersioning=[[Nt.prototype._setValue_direct,Nt.prototype._setValue_direct_setNeedsUpdate,Nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_array,Nt.prototype._setValue_array_setNeedsUpdate,Nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_arrayElement,Nt.prototype._setValue_arrayElement_setNeedsUpdate,Nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_fromArray,Nt.prototype._setValue_fromArray_setNeedsUpdate,Nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Zl=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,o=r.length,a=new Array(o),l={endingStart:Ds,endingEnd:Ds};for(let c=0;c!==o;++c){let h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Pp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Np:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case Fc:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,o=n===Lp;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===Oc){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){let a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=r,this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=Us,s.endingEnd=Us):(e?s.endingStart=this.zeroSlopeAtStart?Us:Ds:s.endingStart=Fo,t?s.endingEnd=this.zeroSlopeAtEnd?Us:Ds:s.endingEnd=Fo)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}},mx=new Float32Array(1),ya=class extends Si{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){let f=s[u],d=f.name,p=h[d];if(p!==void 0)++p.referenceCount,o[u]=p;else{if(p=o[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,d));continue}let x=t&&t._propertyBindings[u].binding.parsedPath;p=new Yl(Nt.create(n,d,x),f.ValueTypeName,f.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,d),o[u]=p}a[u].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;let u=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete u[f],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new ua(new Float32Array(2),new Float32Array(2),1,mx),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,o=typeof e=="string"?Zs.findByName(s,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Fc),l!==void 0){let u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let h=new Zl(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?Zs.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(s,e,r,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Wu=class Wu{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Wu.prototype.isMatrix2=!0;var au=Wu;function Hu(i,e,t,n){let s=gx(n);switch(t){case Tu:return i*e;case nc:return i*e/s.components*s.byteLength;case ic:return i*e/s.components*s.byteLength;case Ts:return i*e*2/s.components*s.byteLength;case sc:return i*e*2/s.components*s.byteLength;case Eu:return i*e*3/s.components*s.byteLength;case hi:return i*e*4/s.components*s.byteLength;case rc:return i*e*4/s.components*s.byteLength;case Sa:case ba:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ta:case Ea:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ac:case cc:return Math.max(i,16)*Math.max(e,8)/4;case oc:case lc:return Math.max(i,8)*Math.max(e,8)/2;case hc:case uc:case dc:case pc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case fc:case wa:case mc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case gc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case _c:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case yc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case vc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Mc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Sc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case bc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Tc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ec:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case wc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ac:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Rc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Cc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ic:case Pc:case Lc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Nc:case Dc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Aa:case Uc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function gx(i){switch(i){case Wn:case vu:return{byteLength:1,components:1};case eo:case Mu:case Ei:return{byteLength:2,components:1};case ec:case tc:return{byteLength:2,components:4};case Ti:case Ql:case jn:return{byteLength:4,components:1};case Su:case bu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Sm(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function _x(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],x=u[d];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let x=u[d];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var yx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Mx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ex=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ax=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Rx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ix=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Px=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Lx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Nx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Dx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ux=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ox=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,kx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Hx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Gx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Vx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Xx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,$x=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,jx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Qx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,e_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,t_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,n_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,i_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,s_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,r_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,o_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,a_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,l_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,c_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,h_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,u_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,f_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,d_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,p_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,m_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,g_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,x_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,__=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,y_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,v_=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,M_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,S_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,E_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,w_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,A_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,R_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,C_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,I_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,P_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,L_=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,N_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,U_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,O_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,F_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,B_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,z_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,G_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,V_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,X_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,W_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,q_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Y_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Z_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,K_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,J_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,j_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Q_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ey=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ty=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ny=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,iy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ry=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,oy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ay=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ly=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,py=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,my=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_y=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,My=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,by=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ty=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ey=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,wy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ay=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Ry=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Py=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ly=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ny=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Oy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Fy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,By=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ky=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Hy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Vy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Yy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ky=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$y=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ut={alphahash_fragment:yx,alphahash_pars_fragment:vx,alphamap_fragment:Mx,alphamap_pars_fragment:Sx,alphatest_fragment:bx,alphatest_pars_fragment:Tx,aomap_fragment:Ex,aomap_pars_fragment:wx,batching_pars_vertex:Ax,batching_vertex:Rx,begin_vertex:Cx,beginnormal_vertex:Ix,bsdfs:Px,iridescence_fragment:Lx,bumpmap_pars_fragment:Nx,clipping_planes_fragment:Dx,clipping_planes_pars_fragment:Ux,clipping_planes_pars_vertex:Ox,clipping_planes_vertex:Fx,color_fragment:Bx,color_pars_fragment:kx,color_pars_vertex:Hx,color_vertex:zx,common:Gx,defaultnormal_vertex:Vx,displacementmap_pars_vertex:Xx,displacementmap_vertex:Wx,emissivemap_fragment:qx,emissivemap_pars_fragment:Yx,colorspace_fragment:Zx,colorspace_pars_fragment:Kx,envmap_fragment:Jx,envmap_common_pars_fragment:$x,envmap_pars_fragment:jx,envmap_pars_vertex:Qx,envmap_physical_pars_fragment:h_,envmap_vertex:e_,fog_vertex:t_,fog_pars_vertex:n_,fog_fragment:i_,fog_pars_fragment:s_,gradientmap_pars_fragment:r_,lightmap_pars_fragment:o_,lights_lambert_fragment:a_,lights_lambert_pars_fragment:l_,lights_pars_begin:c_,lights_toon_fragment:u_,lights_toon_pars_fragment:f_,lights_phong_fragment:d_,lights_phong_pars_fragment:p_,lights_physical_fragment:m_,lights_physical_pars_fragment:g_,lights_fragment_begin:x_,lights_fragment_maps:__,lights_fragment_end:y_,lightprobes_pars_fragment:v_,logdepthbuf_fragment:M_,logdepthbuf_pars_fragment:S_,logdepthbuf_pars_vertex:b_,logdepthbuf_vertex:T_,map_fragment:E_,map_pars_fragment:w_,map_particle_fragment:A_,map_particle_pars_fragment:R_,metalnessmap_fragment:C_,metalnessmap_pars_fragment:I_,morphinstance_vertex:P_,morphcolor_vertex:L_,morphnormal_vertex:N_,morphtarget_pars_vertex:D_,morphtarget_vertex:U_,normal_fragment_begin:O_,normal_fragment_maps:F_,normal_pars_fragment:B_,normal_pars_vertex:k_,normal_vertex:H_,normalmap_pars_fragment:z_,clearcoat_normal_fragment_begin:G_,clearcoat_normal_fragment_maps:V_,clearcoat_pars_fragment:X_,iridescence_pars_fragment:W_,opaque_fragment:q_,packing:Y_,premultiplied_alpha_fragment:Z_,project_vertex:K_,dithering_fragment:J_,dithering_pars_fragment:$_,roughnessmap_fragment:j_,roughnessmap_pars_fragment:Q_,shadowmap_pars_fragment:ey,shadowmap_pars_vertex:ty,shadowmap_vertex:ny,shadowmask_pars_fragment:iy,skinbase_vertex:sy,skinning_pars_vertex:ry,skinning_vertex:oy,skinnormal_vertex:ay,specularmap_fragment:ly,specularmap_pars_fragment:cy,tonemapping_fragment:hy,tonemapping_pars_fragment:uy,transmission_fragment:fy,transmission_pars_fragment:dy,uv_pars_fragment:py,uv_pars_vertex:my,uv_vertex:gy,worldpos_vertex:xy,background_vert:_y,background_frag:yy,backgroundCube_vert:vy,backgroundCube_frag:My,cube_vert:Sy,cube_frag:by,depth_vert:Ty,depth_frag:Ey,distance_vert:wy,distance_frag:Ay,equirect_vert:Ry,equirect_frag:Cy,linedashed_vert:Iy,linedashed_frag:Py,meshbasic_vert:Ly,meshbasic_frag:Ny,meshlambert_vert:Dy,meshlambert_frag:Uy,meshmatcap_vert:Oy,meshmatcap_frag:Fy,meshnormal_vert:By,meshnormal_frag:ky,meshphong_vert:Hy,meshphong_frag:zy,meshphysical_vert:Gy,meshphysical_frag:Vy,meshtoon_vert:Xy,meshtoon_frag:Wy,points_vert:qy,points_frag:Yy,shadow_vert:Zy,shadow_frag:Ky,sprite_vert:Jy,sprite_frag:$y},Ee={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},Fi={basic:{uniforms:Ln([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:Ln([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new xe(0)},envMapIntensity:{value:1}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:Ln([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:Ln([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:Ln([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new xe(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:Ln([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:Ln([Ee.points,Ee.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:Ln([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:Ln([Ee.common,Ee.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:Ln([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:Ln([Ee.sprite,Ee.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distance:{uniforms:Ln([Ee.common,Ee.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distance_vert,fragmentShader:ut.distance_frag},shadow:{uniforms:Ln([Ee.lights,Ee.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};Fi.physical={uniforms:Ln([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new je},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};var Hc={r:0,b:0,g:0},jy=new Ve,bm=new je;bm.set(-1,0,0,0,1,0,0,0,1);function Qy(i,e,t,n,s,r){let o=new xe(0),a=s===!0?0:1,l,c,h=null,u=0,f=null;function d(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){let M=v.backgroundBlurriness>0;S=e.get(S,M)}return S}function p(v){let S=!1,M=d(v);M===null?m(o,a):M&&M.isColor&&(m(M,1),S=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(v,S){let M=d(S);M&&M.isCubeTexture?(c===void 0&&(c=new tt(new ke(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:sr(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,_,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(jy.makeRotationFromEuler(S.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(bm),c.material.toneMapped=dt.getTransfer(M.colorSpace)!==Ct,(h!==M||u!==M.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,u=M.version,f=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new tt(new Pn(2,2),new li({name:"BackgroundMaterial",uniforms:sr(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=dt.getTransfer(M.colorSpace)!==Ct,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,u=M.version,f=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,S){v.getRGB(Hc,Fu(i)),t.buffers.color.setClear(Hc.r,Hc.g,Hc.b,S,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,S=1){o.set(v),a=S,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:p,addToRenderList:x,dispose:g}}function ev(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(D,R,U,I,B){let A=!1,O=u(D,I,U,R);r!==O&&(r=O,c(r.object)),A=d(D,I,U,B),A&&p(D,I,U,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(A||o)&&(o=!1,M(D,R,U,I),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function h(D){return i.deleteVertexArray(D)}function u(D,R,U,I){let B=I.wireframe===!0,A=n[R.id];A===void 0&&(A={},n[R.id]=A);let O=D.isInstancedMesh===!0?D.id:0,J=A[O];J===void 0&&(J={},A[O]=J);let G=J[U.id];G===void 0&&(G={},J[U.id]=G);let q=G[B];return q===void 0&&(q=f(l()),G[B]=q),q}function f(D){let R=[],U=[],I=[];for(let B=0;B<t;B++)R[B]=0,U[B]=0,I[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:U,attributeDivisors:I,object:D,attributes:{},index:null}}function d(D,R,U,I){let B=r.attributes,A=R.attributes,O=0,J=U.getAttributes();for(let G in J)if(J[G].location>=0){let j=B[G],ae=A[G];if(ae===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(ae=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(ae=D.instanceColor)),j===void 0||j.attribute!==ae||ae&&j.data!==ae.data)return!0;O++}return r.attributesNum!==O||r.index!==I}function p(D,R,U,I){let B={},A=R.attributes,O=0,J=U.getAttributes();for(let G in J)if(J[G].location>=0){let j=A[G];j===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(j=D.instanceColor));let ae={};ae.attribute=j,j&&j.data&&(ae.data=j.data),B[G]=ae,O++}r.attributes=B,r.attributesNum=O,r.index=I}function x(){let D=r.newAttributes;for(let R=0,U=D.length;R<U;R++)D[R]=0}function m(D){g(D,0)}function g(D,R){let U=r.newAttributes,I=r.enabledAttributes,B=r.attributeDivisors;U[D]=1,I[D]===0&&(i.enableVertexAttribArray(D),I[D]=1),B[D]!==R&&(i.vertexAttribDivisor(D,R),B[D]=R)}function v(){let D=r.newAttributes,R=r.enabledAttributes;for(let U=0,I=R.length;U<I;U++)R[U]!==D[U]&&(i.disableVertexAttribArray(U),R[U]=0)}function S(D,R,U,I,B,A,O){O===!0?i.vertexAttribIPointer(D,R,U,B,A):i.vertexAttribPointer(D,R,U,I,B,A)}function M(D,R,U,I){x();let B=I.attributes,A=U.getAttributes(),O=R.defaultAttributeValues;for(let J in A){let G=A[J];if(G.location>=0){let q=B[J];if(q===void 0&&(J==="instanceMatrix"&&D.instanceMatrix&&(q=D.instanceMatrix),J==="instanceColor"&&D.instanceColor&&(q=D.instanceColor)),q!==void 0){let j=q.normalized,ae=q.itemSize,Ce=e.get(q);if(Ce===void 0)continue;let Z=Ce.buffer,de=Ce.type,Re=Ce.bytesPerElement,He=de===i.INT||de===i.UNSIGNED_INT||q.gpuType===Ql;if(q.isInterleavedBufferAttribute){let be=q.data,Xe=be.isInterleavedBuffer===!0?be.stride:be.itemSize,Ht=q.offset;if(be.isInstancedInterleavedBuffer||be.isInstancedBufferAttribute){for(let qe=0;qe<G.locationSize;qe++)g(G.location+qe,be.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let qe=0;qe<G.locationSize;qe++)m(G.location+qe);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let qe=0;qe<G.locationSize;qe++)S(G.location+qe,ae/G.locationSize,de,j,Xe*Re,(Ht+ae/G.locationSize*qe)*Re,He)}else{if(q.isInstancedBufferAttribute){for(let be=0;be<G.locationSize;be++)g(G.location+be,q.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let be=0;be<G.locationSize;be++)m(G.location+be);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let be=0;be<G.locationSize;be++)S(G.location+be,ae/G.locationSize,de,j,ae*Re,ae/G.locationSize*be*Re,He)}}else if(O!==void 0){let j=O[J];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(G.location,j);break;case 3:i.vertexAttrib3fv(G.location,j);break;case 4:i.vertexAttrib4fv(G.location,j);break;default:i.vertexAttrib1fv(G.location,j)}}}}v()}function E(){N();for(let D in n){let R=n[D];for(let U in R){let I=R[U];for(let B in I){let A=I[B];for(let O in A)h(A[O].object),delete A[O];delete I[B]}}delete n[D]}}function _(D){if(n[D.id]===void 0)return;let R=n[D.id];for(let U in R){let I=R[U];for(let B in I){let A=I[B];for(let O in A)h(A[O].object),delete A[O];delete I[B]}}delete n[D.id]}function y(D){for(let R in n){let U=n[R];for(let I in U){let B=U[I];if(B[D.id]===void 0)continue;let A=B[D.id];for(let O in A)h(A[O].object),delete A[O];delete B[D.id]}}}function b(D){for(let R in n){let U=n[R],I=D.isInstancedMesh===!0?D.id:0,B=U[I];if(B!==void 0){for(let A in B){let O=B[A];for(let J in O)h(O[J].object),delete O[J];delete B[A]}delete U[I],Object.keys(U).length===0&&delete n[R]}}}function N(){C(),o=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:N,resetDefaultState:C,dispose:E,releaseStatesOfGeometry:_,releaseStatesOfObject:b,releaseStatesOfProgram:y,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function tv(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];t.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function nv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let y=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(y){return!(y!==hi&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(y){let b=y===Ei&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(y!==Wn&&y!==jn&&!b&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(y){if(y==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Oe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&Oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&Oe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),_=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:M,maxSamples:E,samples:_}}function iv(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Mi,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,g=i.get(u);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let v=r?0:n,S=v*4,M=g.clippingState||null;l.value=M,M=h(p,f,S,d);for(let E=0;E!==S;++E)M[E]=t[E];g.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,p){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=d+x*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<g)&&(m=new Float32Array(g));for(let S=0,M=d;S!==x;++S,M+=4)o.copy(u[S]).applyMatrix4(v,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var Pa=class extends Kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ko(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ke(5,5,5),r=new li({name:"CubemapFromEquirect",uniforms:sr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Sn,blending:Qs});r.uniforms.tEquirect.value=t;let o=new tt(s,r),a=t.minFilter;return t.minFilter===ci&&(t.minFilter=an),new Kr(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},tm=256,sv=3,rv=20,Tm=256,Em=16,ov=3,av=new L,lv=new xe,so=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Kr(1,10,null),this._boxMesh=new tt(new ke(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=av}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,f=l.autoClearColor,d=l.autoClearDepth,p=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(lv));let m=new Kr(n,s,h);return m.position.copy(a),m.update(l,e),l.autoClear=u,l.autoClearColor=f,l.autoClearDepth=d,l.autoClearStencil=p,e.background=x,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=im(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(tm,Nu(e))}_fromTexture(e,t){e.mapping===tr||e.mapping===jr?this._setSize(e.image.length===0?tm:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=nm(e,!1,!1),n=Math.log2(e)-sv;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=nm(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===tr||e.mapping===jr?(this._cubemapMaterial===null&&(this._cubemapMaterial=sm()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=im()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=cv(),this._integrationMaterial=hv());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Em);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-ov)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(Tm*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=uv());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function nm(i,e,t){return new Pa(i,{minFilter:ci,generateMipmaps:e,type:Ei,colorSpace:On,depthBuffer:t})}function La(i,e,t){return new li({name:i,uniforms:e,vertexShader:ut.cube_vert,fragmentShader:t,side:Sn,blending:Qs,depthTest:!1,depthWrite:!1})}function cv(){return La("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Tm}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function hv(){return La("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Em}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function uv(){return La("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${rv}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function im(){return La("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function sm(){return La("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function fv(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===Jl||d===$l)if(e.has(f)){let p=e.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let x=new Pa(p.height);return x.fromEquirectangularTexture(i,f),e.set(f,x),f.addEventListener("dispose",c),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,p=d===Jl||d===$l,x=d===tr||d===jr;if(p||x){let m=t.get(f),g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new so(i)),m=p?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{let v=f.image;return p&&v&&v.height>0||x&&v&&l(v)?(n===null&&(n=new so(i)),m=p?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function a(f,d){return d===Jl?f.mapping=tr:d===$l&&(f.mapping=jr),f}function l(f){let d=0,p=6;for(let x=0;x<p;x++)f[x]!==void 0&&d++;return d===p}function c(f){let d=f.target;d.removeEventListener("dispose",c);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function dv(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Fs("WebGLRenderer: "+n+" extension not supported."),s}}}function pv(i,e,t,n){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let x=r.get(p);x&&(e.remove(x),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,x){return s[x.id]!==void 0||(x.addEventListener("dispose",a),s[x.id]=new WeakRef(x),o.register(x,x.id,x),t.memory.geometries++),x}function h(p){let x=p.attributes;for(let m in x)e.update(x[m],i.ARRAY_BUFFER)}function u(p){let x=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let v=x!==null?x.array.length:m.array.length/3-1,S=m.count>=65535?Xo:Vo,M=new S(Math.ceil(v/3)*6,1),E=M.array;if(x!==null){let y=x.array;g=x.version;for(let b=0,N=0;b<v;b+=3){let C=y[b+0],D=y[b+1],R=y[b+2];E[N++]=C,E[N++]=D,E[N++]=D,E[N++]=R,E[N++]=R,E[N++]=C}}else{g=m.version;for(let y=0,b=0;y<v;y+=3){let N=y+0,C=y+1,D=y+2;E[b++]=N,E[b++]=C,E[b++]=C,E[b++]=D,E[b++]=D,E[b++]=N}}M.version=g;let _=r.get(p);_&&e.remove(_),r.set(p,M)}function f(p){let x=r.get(p);if(x){let m=p.index;m!==null&&x.version<m.version&&u(p)}else u(p);return r.get(p)}function d(){for(let p in s){let x=s[p].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:f,dispose:d}}function mv(i,e,t){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*o),t.update(f,n,1)}function c(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,u*o,d),t.update(f,n,d))}function h(u,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let x=0;for(let m=0;m<d;m++)x+=f[m];t.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function gv(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:Ze("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function xv(i,e,t){let n=new WeakMap,s=new Lt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let N=function(){y.dispose(),n.delete(a),a.removeEventListener("dispose",N)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],S=0;d===!0&&(S=1),p===!0&&(S=2),x===!0&&(S=3);let M=a.attributes.position.count*S,E=1;M>e.maxTextureSize&&(E=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let _=new Float32Array(M*E*4*u),y=new Ho(_,M,E,u);y.type=jn,y.needsUpdate=!0;let b=S*4;for(let C=0;C<u;C++){let D=m[C],R=g[C],U=v[C],I=M*E*4*C;for(let B=0;B<D.count;B++){let A=B*b;d===!0&&(s.fromBufferAttribute(D,B),_[I+A+0]=s.x,_[I+A+1]=s.y,_[I+A+2]=s.z,_[I+A+3]=0),p===!0&&(s.fromBufferAttribute(R,B),_[I+A+4]=s.x,_[I+A+5]=s.y,_[I+A+6]=s.z,_[I+A+7]=0),x===!0&&(s.fromBufferAttribute(U,B),_[I+A+8]=s.x,_[I+A+9]=s.y,_[I+A+10]=s.z,_[I+A+11]=U.itemSize===4?s.w:1)}}f={count:u,texture:y,size:new oe(M,E)},n.set(a,f),a.addEventListener("dispose",N)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function _v(i,e,t,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var yv={[du]:"LINEAR_TONE_MAPPING",[pu]:"REINHARD_TONE_MAPPING",[mu]:"CINEON_TONE_MAPPING",[Ma]:"ACES_FILMIC_TONE_MAPPING",[xu]:"AGX_TONE_MAPPING",[_u]:"NEUTRAL_TONE_MAPPING",[gu]:"CUSTOM_TONE_MAPPING"};function vv(i,e,t,n,s,r){let o=new Kn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Rt;h.setAttribute("position",new $e([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new $e([0,2,0,0,2,0],2));let u=new Fl({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new tt(h,u),d=new Js(-1,1,1,-1,0,1),p=null,x=null,m=!1,g,v=null,S=[],M=!1;this.setSize=function(E,_){o.setSize(E,_),a!==null&&a.setSize(E,_),l!==null&&l.setSize(E,_);for(let y=0;y<S.length;y++){let b=S[y];b.setSize&&b.setSize(E,_)}},this.setEffects=function(E){S=E,M=S.length>0&&S[0].isRenderPass===!0;let _=o.width,y=o.height;S.length>0&&a===null&&(a=new Kn(_,y,{type:Ei,depthBuffer:!1,stencilBuffer:!1}),l=new Kn(_,y,{type:Ei,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&S.some(N=>N.needsDepthTexture===!0);b!==(o.depthTexture!==null)&&(b===!0&&c===null&&(c=new Qi(_,y),r===!0&&(c.format=rs,c.type=ir)),o.dispose(),o.depthTexture=b?c:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b);for(let N=0;N<S.length;N++){let C=S[N];C.setSize&&C.setSize(_,y),b&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(E,_){if(m||E.toneMapping===Ui&&S.length===0)return!1;if(v=_,_!==null){let y=_.width,b=_.height;(o.width!==y||o.height!==b)&&this.setSize(y,b)}return M===!1&&E.setRenderTarget(o),g=E.toneMapping,E.toneMapping=Ui,!0},this.hasRenderPass=function(){return M},this.end=function(E,_){E.toneMapping=g,m=!0;let y=o,b=a;for(let N=0;N<S.length;N++){let C=S[N];C.enabled!==!1&&(C.render(E,b,y,_),C.needsSwap!==!1&&(y=b,b=b===a?l:a))}if(p!==E.outputColorSpace||x!==E.toneMapping){p=E.outputColorSpace,x=E.toneMapping,u.defines={},dt.getTransfer(p)===Ct&&(u.defines.SRGB_TRANSFER="");let N=yv[x];N&&(u.defines[N]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=y.texture,E.setRenderTarget(v),E.render(f,d),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var wm=new ln,Am=new Qi(1,1),Rm=new Jo(1),Cm=new Ho,Im=new Rl,Pm=new Ko,rm=[],om=[],am=new Float32Array(16),lm=new Float32Array(9),cm=new Float32Array(4);function ro(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=rm[s];if(r===void 0&&(r=new Float32Array(s),rm[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function hn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function un(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Vc(i,e){let t=om[e];t===void 0&&(t=new Int32Array(e),om[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Mv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Sv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2fv(this.addr,e),un(t,e)}}function bv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;i.uniform3fv(this.addr,e),un(t,e)}}function Tv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4fv(this.addr,e),un(t,e)}}function Ev(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),un(t,e)}else{if(hn(t,n))return;cm.set(n),i.uniformMatrix2fv(this.addr,!1,cm),un(t,n)}}function wv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),un(t,e)}else{if(hn(t,n))return;lm.set(n),i.uniformMatrix3fv(this.addr,!1,lm),un(t,n)}}function Av(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),un(t,e)}else{if(hn(t,n))return;am.set(n),i.uniformMatrix4fv(this.addr,!1,am),un(t,n)}}function Rv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Cv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2iv(this.addr,e),un(t,e)}}function Iv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;i.uniform3iv(this.addr,e),un(t,e)}}function Pv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4iv(this.addr,e),un(t,e)}}function Lv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Nv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2uiv(this.addr,e),un(t,e)}}function Dv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;i.uniform3uiv(this.addr,e),un(t,e)}}function Uv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4uiv(this.addr,e),un(t,e)}}function Xc(i){return i.version===0&&(i.compareFunction=Cu,i.needsUpdate=!0),i}function Ov(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Xc(Am):r=wm,t.setTexture2D(e||r,s)}function Fv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Im,s)}function Bv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Xc(Rm):r=Pm,t.setTextureCube(e||r,s)}function kv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Cm,s)}function Hv(i){switch(i){case 5126:return Mv;case 35664:return Sv;case 35665:return bv;case 35666:return Tv;case 35674:return Ev;case 35675:return wv;case 35676:return Av;case 5124:case 35670:return Rv;case 35667:case 35671:return Cv;case 35668:case 35672:return Iv;case 35669:case 35673:return Pv;case 5125:return Lv;case 36294:return Nv;case 36295:return Dv;case 36296:return Uv;case 35678:case 36198:case 36298:case 36306:case 35682:return Ov;case 35679:case 36299:case 36307:return Fv;case 35680:case 36300:case 36308:case 36293:return Bv;case 36289:case 36303:case 36311:case 36292:return kv}}function zv(i,e){i.uniform1fv(this.addr,e)}function Gv(i,e){let t=ro(e,this.size,2);i.uniform2fv(this.addr,t)}function Vv(i,e){let t=ro(e,this.size,3);i.uniform3fv(this.addr,t)}function Xv(i,e){let t=ro(e,this.size,4);i.uniform4fv(this.addr,t)}function Wv(i,e){let t=ro(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function qv(i,e){let t=ro(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Yv(i,e){let t=ro(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Zv(i,e){i.uniform1iv(this.addr,e)}function Kv(i,e){i.uniform2iv(this.addr,e)}function Jv(i,e){i.uniform3iv(this.addr,e)}function $v(i,e){i.uniform4iv(this.addr,e)}function jv(i,e){i.uniform1uiv(this.addr,e)}function Qv(i,e){i.uniform2uiv(this.addr,e)}function eM(i,e){i.uniform3uiv(this.addr,e)}function tM(i,e){i.uniform4uiv(this.addr,e)}function nM(i,e,t){let n=this.cache,s=e.length,r=Vc(t,s);hn(n,r)||(i.uniform1iv(this.addr,r),un(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Xc(Am):o=wm;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function iM(i,e,t){let n=this.cache,s=e.length,r=Vc(t,s);hn(n,r)||(i.uniform1iv(this.addr,r),un(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Im,r[o])}function sM(i,e,t){let n=this.cache,s=e.length,r=Vc(t,s);hn(n,r)||(i.uniform1iv(this.addr,r),un(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=Xc(Rm):o=Pm;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function rM(i,e,t){let n=this.cache,s=e.length,r=Vc(t,s);hn(n,r)||(i.uniform1iv(this.addr,r),un(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Cm,r[o])}function oM(i){switch(i){case 5126:return zv;case 35664:return Gv;case 35665:return Vv;case 35666:return Xv;case 35674:return Wv;case 35675:return qv;case 35676:return Yv;case 5124:case 35670:return Zv;case 35667:case 35671:return Kv;case 35668:case 35672:return Jv;case 35669:case 35673:return $v;case 5125:return jv;case 36294:return Qv;case 36295:return eM;case 36296:return tM;case 35678:case 36198:case 36298:case 36306:case 35682:return nM;case 35679:case 36299:case 36307:return iM;case 35680:case 36300:case 36308:case 36293:return sM;case 36289:case 36303:case 36311:case 36292:return rM}}var Zu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Hv(t.type)}},Ku=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=oM(t.type)}},Ju=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},qu=/(\w+)(\])?(\[|\.)?/g;function hm(i,e){i.seq.push(e),i.map[e.id]=e}function aM(i,e,t){let n=i.name,s=n.length;for(qu.lastIndex=0;;){let r=qu.exec(n),o=qu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){hm(t,c===void 0?new Zu(a,i,e):new Ku(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Ju(a),hm(t,u)),t=u}}}var io=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);aM(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function um(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var lM=37297,cM=0;function hM(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var fm=new je;function uM(i){dt._getMatrix(fm,dt.workingColorSpace,i);let e=`mat3( ${fm.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(i)){case Bo:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function dm(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+hM(i.getShaderSource(e),a)}else return r}function fM(i,e){let t=uM(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var dM={[du]:"Linear",[pu]:"Reinhard",[mu]:"Cineon",[Ma]:"ACESFilmic",[xu]:"AgX",[_u]:"Neutral",[gu]:"Custom"};function pM(i,e){let t=dM[e];return t===void 0?(Oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var zc=new L;function mM(){dt.getLuminanceCoefficients(zc);let i=zc.x.toFixed(4),e=zc.y.toFixed(4),t=zc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ia).join(`
`)}function xM(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function _M(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ia(i){return i!==""}function pm(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function mm(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var yM=/^[ \t]*#include +<([\w\d./]+)>/gm;function $u(i){return i.replace(yM,vM)}function vM(i,e){let t=ut[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return $u(t)}var MM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gm(i){return i.replace(MM,SM)}function SM(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xm(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var bM={[js]:"SHADOWMAP_TYPE_PCF",[Jr]:"SHADOWMAP_TYPE_VSM"};function TM(i){return bM[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var EM={[jr]:"ENVMAP_MODE_REFRACTION"};function wM(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":EM[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var AM={[va]:"ENVMAP_BLENDING_MULTIPLY",[Rp]:"ENVMAP_BLENDING_MIX",[Cp]:"ENVMAP_BLENDING_ADD"};function RM(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":AM[i.combine]||"ENVMAP_BLENDING_NONE"}function CM(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=TM(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=wM(t),u=RM(t),f=gM(t),d=xM(r),p=s.createProgram(),x,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Ia).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Ia).join(`
`),m.length>0&&(m+=`
`)):(x=[xm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ia).join(`
`),m=[xm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ui?"#define TONE_MAPPING":"",t.toneMapping!==Ui?ut.tonemapping_pars_fragment:"",t.toneMapping!==Ui?pM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,fM("linearToOutputTexel",t.outputColorSpace),mM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ia).join(`
`)),o=$u(o),o=pm(o,t),o=mm(o,t),a=$u(a),a=pm(a,t),a=mm(a,t),o=gm(o),a=gm(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===Pu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=g+x+o,S=g+m+a,M=um(s,s.VERTEX_SHADER,v),E=um(s,s.FRAGMENT_SHADER,S);s.attachShader(p,M),s.attachShader(p,E),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function _(C){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(p)||"",R=s.getShaderInfoLog(M)||"",U=s.getShaderInfoLog(E)||"",I=D.trim(),B=R.trim(),A=U.trim(),O=!0,J=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,M,E);else{let G=dm(s,M,"vertex"),q=dm(s,E,"fragment");Ze("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+I+`
`+G+`
`+q)}else I!==""?Oe("WebGLProgram: Program Info Log:",I):(B===""||A==="")&&(J=!1);J&&(C.diagnostics={runnable:O,programLog:I,vertexShader:{log:B,prefix:x},fragmentShader:{log:A,prefix:m}})}s.deleteShader(M),s.deleteShader(E),y=new io(s,p),b=_M(s,p)}let y;this.getUniforms=function(){return y===void 0&&_(this),y};let b;this.getAttributes=function(){return b===void 0&&_(this),b};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(p,lM)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cM++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=E,this}var IM=0,ju=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Qu(e),t.set(e,n)),n}},Qu=class{constructor(e){this.id=IM++,this.code=e,this.usedTimes=0}};function PM(i){return i===Ts||i===wa||i===Aa}function LM(i,e,t,n,s,r){let o=new zo,a=new ju,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(y){return l.add(y),y===0?"uv":`uv${y}`}function p(y,b,N,C,D,R){let U=C.fog,I=D.geometry,B=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?C.environment:null,A=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,O=e.get(y.envMap||B,A),J=f[y.type],G=n.precision;y.precision!==null&&(G=n.getMaxPrecision(y.precision),G!==y.precision&&Oe("WebGLProgram.getParameters:",y.precision,"not supported, using",G,"instead."));let q=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,j=q!==void 0?q.length:0,ae=0;I.morphAttributes.position!==void 0&&(ae=1),I.morphAttributes.normal!==void 0&&(ae=2),I.morphAttributes.color!==void 0&&(ae=3);let Ce,Z,de,Re;if(J){let Te=Fi[J];Ce=Te.vertexShader,Z=Te.fragmentShader}else{Ce=y.vertexShader,Z=y.fragmentShader;let Te=a.getVertexShaderStage(y),Pt=a.getFragmentShaderStage(y);a.update(y,Te,Pt),de=Te.id,Re=Pt.id}let He=i.getRenderTarget(),be=i.state.buffers.depth.getReversed(),Xe=D.isInstancedMesh===!0,Ht=D.isBatchedMesh===!0,qe=!!y.map,ft=!!y.matcap,xt=!!O,ie=xt&&O.isPMREMTexture===!0,pe=!!y.aoMap,he=!!y.lightMap,Ae=!!y.bumpMap&&y.wireframe===!1,Se=!!y.normalMap,rt=!!y.displacementMap,Fe=!!y.emissiveMap,_t=!!y.metalnessMap,yt=!!y.roughnessMap,Et=y.anisotropy>0,H=y.clearcoat>0,tn=y.diffuseRoughness>0,gt=y.dispersion>0,Ut=y.retroreflectivity>0,ye=y.iridescence>0,$t=y.sheen>0,We=y.transmission>0,Je=Et&&!!y.anisotropyMap,P=H&&!!y.clearcoatMap,T=H&&!!y.clearcoatNormalMap,X=H&&!!y.clearcoatRoughnessMap,re=tn&&!!y.diffuseRoughnessMap,ne=ye&&!!y.iridescenceMap,ue=ye&&!!y.iridescenceThicknessMap,ve=$t&&!!y.sheenColorMap,$=$t&&!!y.sheenRoughnessMap,Q=!!y.specularMap,me=!!y.specularColorMap,F=!!y.specularIntensityMap,te=We&&!!y.transmissionMap,K=We&&!!y.thicknessMap,ge=!!y.gradientMap,ce=!!y.alphaMap,fe=y.alphaTest>0,Be=!!y.alphaHash,lt=!!y.extensions,le=Ui;y.toneMapped&&(He===null||He.isXRRenderTarget===!0)&&(le=i.toneMapping);let Ge=ie?O.isCompressedCubeTexture?O.image[0].mipmaps:O.mipmaps:null,at={shaderID:J,shaderType:y.type,shaderName:y.name,vertexShader:Ce,fragmentShader:Z,defines:y.defines,customVertexShaderID:de,customFragmentShaderID:Re,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:G,batching:Ht,batchingColor:Ht&&D._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&D.instanceColor!==null,instancingMorph:Xe&&D.morphTexture!==null,outputColorSpace:He===null?i.outputColorSpace:He.isXRRenderTarget===!0?He.texture.colorSpace:dt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:qe,matcap:ft,envMap:xt,envMapMode:xt&&O.mapping,envMapPMREM:ie,envMapMaxLod:ie?Ge.length-1:null,envMapSize:ie?Ge[0].width:null,aoMap:pe,lightMap:he,bumpMap:Ae,normalMap:Se,displacementMap:rt,emissiveMap:Fe,normalMapObjectSpace:Se&&y.normalMapType===Up,normalMapTangentSpace:Se&&y.normalMapType===no,packedNormalMap:Se&&y.normalMapType===no&&PM(y.normalMap.format),metalnessMap:_t,roughnessMap:yt,anisotropy:Et,anisotropyMap:Je,clearcoat:H,clearcoatMap:P,clearcoatNormalMap:T,clearcoatRoughnessMap:X,diffuseRoughness:tn,diffuseRoughnessMap:re,dispersion:gt,retroreflection:Ut,iridescence:ye,iridescenceMap:ne,iridescenceThicknessMap:ue,sheen:$t,sheenColorMap:ve,sheenRoughnessMap:$,specularMap:Q,specularColorMap:me,specularIntensityMap:F,transmission:We,transmissionMap:te,thicknessMap:K,gradientMap:ge,opaque:y.transparent===!1&&y.blending===$r&&y.alphaToCoverage===!1,alphaMap:ce,alphaTest:fe,alphaHash:Be,combine:y.combine,mapUv:qe&&d(y.map.channel),aoMapUv:pe&&d(y.aoMap.channel),lightMapUv:he&&d(y.lightMap.channel),bumpMapUv:Ae&&d(y.bumpMap.channel),normalMapUv:Se&&d(y.normalMap.channel),displacementMapUv:rt&&d(y.displacementMap.channel),emissiveMapUv:Fe&&d(y.emissiveMap.channel),metalnessMapUv:_t&&d(y.metalnessMap.channel),roughnessMapUv:yt&&d(y.roughnessMap.channel),anisotropyMapUv:Je&&d(y.anisotropyMap.channel),clearcoatMapUv:P&&d(y.clearcoatMap.channel),clearcoatNormalMapUv:T&&d(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&d(y.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:re&&d(y.diffuseRoughnessMap.channel),iridescenceMapUv:ne&&d(y.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&d(y.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&d(y.sheenColorMap.channel),sheenRoughnessMapUv:$&&d(y.sheenRoughnessMap.channel),specularMapUv:Q&&d(y.specularMap.channel),specularColorMapUv:me&&d(y.specularColorMap.channel),specularIntensityMapUv:F&&d(y.specularIntensityMap.channel),transmissionMapUv:te&&d(y.transmissionMap.channel),thicknessMapUv:K&&d(y.thicknessMap.channel),alphaMapUv:ce&&d(y.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Se||Et),vertexNormals:!!I.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!I.attributes.uv&&(qe||ce),fog:!!U,useFog:y.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||I.attributes.normal===void 0&&Se===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:be,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:ae,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:R.filter(Te=>Te.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:le,decodeVideoTexture:qe&&y.map.isVideoTexture===!0&&dt.getTransfer(y.map.colorSpace)===Ct,decodeVideoTextureEmissive:Fe&&y.emissiveMap.isVideoTexture===!0&&dt.getTransfer(y.emissiveMap.colorSpace)===Ct,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===bn,flipSided:y.side===Sn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:lt&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&y.extensions.multiDraw===!0||Ht)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return at.vertexUv1s=l.has(1),at.vertexUv2s=l.has(2),at.vertexUv3s=l.has(3),l.clear(),at}function x(y){let b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(let N in y.defines)b.push(N),b.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(m(b,y),g(b,y),b.push(i.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function m(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapPMREM),y.push(b.envMapMaxLod),y.push(b.envMapSize),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.diffuseRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.numSunLights),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numSunLightShadows),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.numLightProbeGrids),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function g(y,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.diffuseRoughness&&o.enable(25),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function v(y){let b=f[y.type],N;if(b){let C=Fi[b];N=jp.clone(C.uniforms)}else N=y.uniforms;return N}function S(y,b){let N=h.get(b);return N!==void 0?++N.usedTimes:(N=new CM(i,b,y,s),c.push(N),h.set(b,N)),N}function M(y){if(--y.usedTimes===0){let b=c.indexOf(y);c[b]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function E(y){a.remove(y)}function _(){a.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:v,acquireProgram:S,releaseProgram:M,releaseShaderCache:E,programs:c,dispose:_}}function NM(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function DM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function _m(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ym(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,x,m,g){let v=i[e];return v===void 0?(v={id:f.id,object:f,geometry:d,material:p,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:m,group:g},i[e]=v):(v.id=f.id,v.object=f,v.geometry=d,v.material=p,v.materialVariant=o(f),v.groupOrder=x,v.renderOrder=f.renderOrder,v.z=m,v.group=g),e++,v}function l(f,d,p,x,m,g,v){v.reversedDepth===!0&&(m=-m);let S=a(f,d,p,x,m,g);p.transmission>0?n.push(S):p.transparent===!0?s.push(S):t.push(S)}function c(f,d,p,x,m,g){let v=a(f,d,p,x,m,g);p.transmission>0?n.unshift(v):p.transparent===!0?s.unshift(v):t.unshift(v)}function h(f,d){t.length>1&&t.sort(f||DM),n.length>1&&n.sort(d||_m),s.length>1&&s.sort(d||_m)}function u(){for(let f=e,d=i.length;f<d;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function UM(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new ym,i.set(n,[o])):s>=r.length?(o=new ym,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function OM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new xe};break;case"SpotLight":t={position:new L,direction:new L,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":t={color:new xe,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function FM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var BM=0;function kM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function HM(i){let e=new OM,t=FM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let s=new L,r=new Ve,o=new Ve;function a(c){let h=0,u=0,f=0;for(let R=0;R<9;R++)n.probe[R].set(0,0,0);let d=0,p=0,x=0,m=0,g=0,v=0,S=0,M=0,E=0,_=0,y=0,b=0,N=0,C=0;c.sort(kM);for(let R=0,U=c.length;R<U;R++){let I=c[R],B=I.color,A=I.intensity,O=I.distance,J=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Ts?J=I.shadow.map.texture:J=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=B.r*A,u+=B.g*A,f+=B.b*A;else if(I.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(I.sh.coefficients[G],A);C++}else if(I.isSunLight){let G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let q=I.shadow,j=t.get(I);j.shadowIntensity=q.intensity,j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize.copy(q.mapSize).multiply(q.getFrameExtents()),n.sunShadow[p]=j,n.sunShadowMap[p]=J;let ae=q.getViewportCount();for(let Ce=0;Ce<ae;Ce++)n.sunShadowMatrix[x+Ce]=q.getMatrix(Ce),n.sunShadowCascade[x+Ce]=q._cascadeData[Ce];x+=ae,p++}n.sun[d]=G,d++}else if(I.isDirectionalLight){let G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let q=I.shadow,j=t.get(I);j.shadowIntensity=q.intensity,j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,n.directionalShadow[m]=j,n.directionalShadowMap[m]=J,n.directionalShadowMatrix[m]=I.shadow.matrix,E++}n.directional[m]=G,m++}else if(I.isSpotLight){let G=e.get(I);G.position.setFromMatrixPosition(I.matrixWorld),G.color.copy(B).multiplyScalar(A),G.distance=O,G.coneCos=Math.cos(I.angle),G.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),G.decay=I.decay,n.spot[v]=G;let q=I.shadow;if(I.map&&(n.spotLightMap[b]=I.map,b++,q.updateMatrices(I),I.castShadow&&N++),n.spotLightMatrix[v]=q.matrix,I.castShadow){let j=t.get(I);j.shadowIntensity=q.intensity,j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,n.spotShadow[v]=j,n.spotShadowMap[v]=J,y++}v++}else if(I.isRectAreaLight){let G=e.get(I);G.color.copy(B).multiplyScalar(A),G.halfWidth.set(I.width*.5,0,0),G.halfHeight.set(0,I.height*.5,0),n.rectArea[S]=G,S++}else if(I.isPointLight){let G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),G.distance=I.distance,G.decay=I.decay,I.castShadow){let q=I.shadow,j=t.get(I);j.shadowIntensity=q.intensity,j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,j.shadowCameraNear=q.camera.near,j.shadowCameraFar=q.camera.far,n.pointShadow[g]=j,n.pointShadowMap[g]=J,n.pointShadowMatrix[g]=I.shadow.matrix,_++}n.point[g]=G,g++}else if(I.isHemisphereLight){let G=e.get(I);G.skyColor.copy(I.color).multiplyScalar(A),G.groundColor.copy(I.groundColor).multiplyScalar(A),n.hemi[M]=G,M++}}S>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ee.LTC_FLOAT_1,n.rectAreaLTC2=Ee.LTC_FLOAT_2):(n.rectAreaLTC1=Ee.LTC_HALF_1,n.rectAreaLTC2=Ee.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let D=n.hash;(D.sunLength!==d||D.directionalLength!==m||D.pointLength!==g||D.spotLength!==v||D.rectAreaLength!==S||D.hemiLength!==M||D.numSunShadows!==p||D.numDirectionalShadows!==E||D.numPointShadows!==_||D.numSpotShadows!==y||D.numSpotMaps!==b||D.numLightProbes!==C)&&(n.sun.length=d,n.directional.length=m,n.spot.length=v,n.rectArea.length=S,n.point.length=g,n.hemi.length=M,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=_,n.pointShadowMap.length=_,n.pointShadowMatrix.length=_,n.spotShadow.length=y,n.spotShadowMap.length=y,n.spotLightMatrix.length=y+b-N,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=C,D.sunLength=d,D.directionalLength=m,D.pointLength=g,D.spotLength=v,D.rectAreaLength=S,D.hemiLength=M,D.numSunShadows=p,D.numDirectionalShadows=E,D.numPointShadows=_,D.numSpotShadows=y,D.numSpotMaps=b,D.numLightProbes=C,n.version=BM++)}function l(c,h){let u=0,f=0,d=0,p=0,x=0,m=0,g=h.matrixWorldInverse;for(let v=0,S=c.length;v<S;v++){let M=c[v];if(M.isSunLight){let E=n.sun[u];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(g),u++}else if(M.isDirectionalLight){let E=n.directional[f];E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),f++}else if(M.isSpotLight){let E=n.spot[p];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),p++}else if(M.isRectAreaLight){let E=n.rectArea[x];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(g),o.identity(),r.copy(M.matrixWorld),r.premultiply(g),o.extractRotation(r),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),x++}else if(M.isPointLight){let E=n.point[d];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(g),d++}else if(M.isHemisphereLight){let E=n.hemi[m];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function vm(i){let e=new HM(i),t=[],n=[],s=[];function r(u){h.camera=u,t.length=0,n.length=0,s.length=0}function o(u){u.isLightProbeGrid?s.push(u):t.push(u)}function a(u){n.push(u)}function l(){e.setup(t),s.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function c(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function zM(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new vm(i),e.set(s,[a])):r>=o.length?(a=new vm(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var GM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,XM=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],WM=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Mm=new Ve,Ca=new L,Yu=new L;function qM(i,e,t){let n=new vs,s=new oe,r=new oe,o=new Lt,a=new Bl,l=new kl,c={},h=t.maxTextureSize,u={[Di]:Sn,[Sn]:Di,[bn]:bn},f=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:GM,fragmentShader:VM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new Rt;p.setAttribute("position",new Dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new tt(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=js;let g=this.type;this.render=function(_,y,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||_.length===0)return;this.type===cp&&(Oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=js);let N=i.getRenderTarget(),C=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),R=i.state;R.setBlending(Qs),R.buffers.depth.getReversed()===!0?R.buffers.color.setClear(0,0,0,0):R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);let U=g!==this.type;U&&y.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(B=>B.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,B=_.length;I<B;I++){let A=_[I],O=A.shadow;if(O===void 0){Oe("WebGLShadowMap:",A,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let J=O.getFrameExtents();s.multiply(J),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/J.x),s.x=r.x*J.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/J.y),s.y=r.y*J.y,O.mapSize.y=r.y));let G=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=G,O.map===null||U===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Jr){if(A.isPointLight){Oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Kn(s.x,s.y,{format:Ts,type:Ei,minFilter:an,magFilter:an,generateMipmaps:!1}),O.map.texture.name=A.name+".shadowMap",O.map.depthTexture=new Qi(s.x,s.y,jn),O.map.depthTexture.name=A.name+".shadowMapDepth",O.map.depthTexture.format=$i,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Qt,O.map.depthTexture.magFilter=Qt}else A.isPointLight?(O.map=new Pa(s.x),O.map.depthTexture=new Jo(s.x,Ti)):(O.map=new Kn(s.x,s.y),O.map.depthTexture=new Qi(s.x,s.y,Ti)),O.map.depthTexture.name=A.name+".shadowMap",O.map.depthTexture.format=$i,this.type===js?(O.map.depthTexture.compareFunction=G?Ru:Au,O.map.depthTexture.minFilter=an,O.map.depthTexture.magFilter=an):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Qt,O.map.depthTexture.magFilter=Qt);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y)&&O.map.setSize(s.x,s.y);let q=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();A.isPointLight!==!0&&O.updateMatrices(A,b);let j=(O.camera.layers.mask&4294967294)!==0?O.camera.layers:b.layers;for(let ae=0;ae<q;ae++){let Ce=O.getCamera(ae);if(A.isPointLight){let Z=O.camera,de=O.matrix,Re=A.distance||Z.far;Re!==Z.far&&(Z.far=Re,Z.updateProjectionMatrix()),Ca.setFromMatrixPosition(A.matrixWorld),Z.position.copy(Ca),Yu.copy(Z.position),Yu.add(XM[ae]),Z.up.copy(WM[ae]),Z.lookAt(Yu),Z.updateMatrixWorld(),de.makeTranslation(-Ca.x,-Ca.y,-Ca.z),Mm.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Mm,Z.coordinateSystem,Z.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,ae),i.clear();else{ae===0&&(i.setRenderTarget(O.map),i.clear());let Z=O.getViewport(ae);o.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),R.viewport(o)}n=O.getFrustum(ae),M(y,b,Ce,A,j,this.type)}O.isPointLightShadow!==!0&&this.type===Jr&&v(O,b),O.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(N,C,D)};function v(_,y){let b=e.update(x);f.defines.VSM_SAMPLES!==_.blurSamples&&(f.defines.VSM_SAMPLES=_.blurSamples,d.defines.VSM_SAMPLES=_.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),_.mapPass===null?_.mapPass=new Kn(s.x,s.y,{format:Ts,type:Ei}):(_.mapPass.width!==_.map.width||_.mapPass.height!==_.map.height)&&_.mapPass.setSize(_.map.width,_.map.height),f.uniforms.shadow_pass.value=_.map.depthTexture,f.uniforms.resolution.value.set(_.map.width,_.map.height),f.uniforms.radius.value=_.radius,i.setRenderTarget(_.mapPass),i.clear(),i.renderBufferDirect(y,null,b,f,x,null),d.uniforms.shadow_pass.value=_.mapPass.texture,d.uniforms.resolution.value.set(_.map.width,_.map.height),d.uniforms.radius.value=_.radius,i.setRenderTarget(_.map),i.clear(),i.renderBufferDirect(y,null,b,d,x,null)}function S(_,y,b,N){let C=null,D=b.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(D!==void 0)C=D;else if(C=b.isPointLight===!0?l:a,i.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){let R=C.uuid,U=y.uuid,I=c[R];I===void 0&&(I={},c[R]=I);let B=I[U];B===void 0&&(B=C.clone(),I[U]=B,y.addEventListener("dispose",E)),C=B}if(C.visible=y.visible,C.wireframe=y.wireframe,N===Jr?C.side=y.shadowSide!==null?y.shadowSide:y.side:C.side=y.shadowSide!==null?y.shadowSide:u[y.side],C.alphaMap=y.alphaMap,C.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,C.map=y.map,C.clipShadows=y.clipShadows,C.clippingPlanes=y.clippingPlanes,C.clipIntersection=y.clipIntersection,C.displacementMap=y.displacementMap,C.displacementScale=y.displacementScale,C.displacementBias=y.displacementBias,C.wireframeLinewidth=y.wireframeLinewidth,C.linewidth=y.linewidth,b.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let R=i.properties.get(C);R.light=b}return C}function M(_,y,b,N,C,D){if(_.visible===!1)return;if(_.layers.test(C)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&D===Jr)&&(!_.frustumCulled||_.intersectsFrustum(n))){_.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,_.matrixWorld);let I=e.update(_),B=_.material;if(Array.isArray(B)){let A=I.groups;for(let O=0,J=A.length;O<J;O++){let G=A[O],q=B[G.materialIndex];if(q&&q.visible){let j=S(_,q,N,D);_.onBeforeShadow(i,_,y,b,I,j,G),i.renderBufferDirect(b,null,I,j,_,G),_.onAfterShadow(i,_,y,b,I,j,G)}}}else if(B.visible){let A=S(_,B,N,D);_.onBeforeShadow(i,_,y,b,I,A,null),i.renderBufferDirect(b,null,I,A,_,null),_.onAfterShadow(i,_,y,b,I,A,null)}}let U=_.children;for(let I=0,B=U.length;I<B;I++)M(U[I],y,b,N,C,D)}function E(_){_.target.removeEventListener("dispose",E);for(let b in c){let N=c[b],C=_.target.uuid;C in N&&(N[C].dispose(),delete N[C])}}}function YM(i,e){function t(){let F=!1,te=new Lt,K=null,ge=new Lt(0,0,0,0);return{setMask:function(ce){K!==ce&&!F&&(i.colorMask(ce,ce,ce,ce),K=ce)},setLocked:function(ce){F=ce},setClear:function(ce,fe,Be,lt,le){le===!0&&(ce*=lt,fe*=lt,Be*=lt),te.set(ce,fe,Be,lt),ge.equals(te)===!1&&(i.clearColor(ce,fe,Be,lt),ge.copy(te))},reset:function(){F=!1,K=null,ge.set(-1,0,0,0)}}}function n(){let F=!1,te=!1,K=null,ge=null,ce=null;return{setReversed:function(fe){if(te!==fe){let Be=e.get("EXT_clip_control");fe?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),te=fe;let lt=ce;ce=null,this.setClear(lt)}},getReversed:function(){return te},setTest:function(fe){fe?be(i.DEPTH_TEST):Xe(i.DEPTH_TEST)},setMask:function(fe){K!==fe&&!F&&(i.depthMask(fe),K=fe)},setFunc:function(fe){if(te&&(fe=Wp[fe]),ge!==fe){switch(fe){case yl:i.depthFunc(i.NEVER);break;case vl:i.depthFunc(i.ALWAYS);break;case Ml:i.depthFunc(i.LESS);break;case Pr:i.depthFunc(i.LEQUAL);break;case Sl:i.depthFunc(i.EQUAL);break;case bl:i.depthFunc(i.GEQUAL);break;case Tl:i.depthFunc(i.GREATER);break;case El:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ge=fe}},setLocked:function(fe){F=fe},setClear:function(fe){ce!==fe&&(ce=fe,te&&(fe=1-fe),i.clearDepth(fe))},reset:function(){F=!1,K=null,ge=null,ce=null,te=!1}}}function s(){let F=!1,te=null,K=null,ge=null,ce=null,fe=null,Be=null,lt=null,le=null;return{setTest:function(Ge){F||(Ge?be(i.STENCIL_TEST):Xe(i.STENCIL_TEST))},setMask:function(Ge){te!==Ge&&!F&&(i.stencilMask(Ge),te=Ge)},setFunc:function(Ge,at,Te){(K!==Ge||ge!==at||ce!==Te)&&(i.stencilFunc(Ge,at,Te),K=Ge,ge=at,ce=Te)},setOp:function(Ge,at,Te){(fe!==Ge||Be!==at||lt!==Te)&&(i.stencilOp(Ge,at,Te),fe=Ge,Be=at,lt=Te)},setLocked:function(Ge){F=Ge},setClear:function(Ge){le!==Ge&&(i.clearStencil(Ge),le=Ge)},reset:function(){F=!1,te=null,K=null,ge=null,ce=null,fe=null,Be=null,lt=null,le=null}}}let r=new t,o=new n,a=new s,l={},c=new WeakMap,h={},u={},f={},d=new WeakMap,p=[],x=null,m=!1,g=null,v=null,S=null,M=null,E=null,_=null,y=null,b=new xe(0,0,0),N=0,C=!1,D=null,R=null,U=null,I=null,B=null,A=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,J=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(G)[1]),O=J>=1):G.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),O=J>=2);let q=null,j={},ae=i.getParameter(i.SCISSOR_BOX),Ce=i.getParameter(i.VIEWPORT),Z=new Lt().fromArray(ae),de=new Lt().fromArray(Ce);function Re(F,te,K,ge){let ce=new Uint8Array(4),fe=i.createTexture();i.bindTexture(F,fe),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Be=0;Be<K;Be++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(te,0,i.RGBA,1,1,ge,0,i.RGBA,i.UNSIGNED_BYTE,ce):i.texImage2D(te+Be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ce);return fe}let He={};He[i.TEXTURE_2D]=Re(i.TEXTURE_2D,i.TEXTURE_2D,1),He[i.TEXTURE_CUBE_MAP]=Re(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),He[i.TEXTURE_2D_ARRAY]=Re(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),He[i.TEXTURE_3D]=Re(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),be(i.DEPTH_TEST),o.setFunc(Pr),Ae(!1),Se(lu),be(i.CULL_FACE),pe(Qs);function be(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function Xe(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function Ht(F,te){return f[F]!==te?(i.bindFramebuffer(F,te),f[F]=te,F===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=te),F===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=te),!0):!1}function qe(F,te){let K=p,ge=!1;if(F){K=d.get(te),K===void 0&&(K=[],d.set(te,K));let ce=F.textures;if(K.length!==ce.length||K[0]!==i.COLOR_ATTACHMENT0){for(let fe=0,Be=ce.length;fe<Be;fe++)K[fe]=i.COLOR_ATTACHMENT0+fe;K.length=ce.length,ge=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,ge=!0);ge&&i.drawBuffers(K)}function ft(F){return x!==F?(i.useProgram(F),x=F,!0):!1}let xt={[er]:i.FUNC_ADD,[up]:i.FUNC_SUBTRACT,[fp]:i.FUNC_REVERSE_SUBTRACT};xt[dp]=i.MIN,xt[pp]=i.MAX;let ie={[mp]:i.ZERO,[gp]:i.ONE,[xp]:i.SRC_COLOR,[uu]:i.SRC_ALPHA,[bp]:i.SRC_ALPHA_SATURATE,[Mp]:i.DST_COLOR,[yp]:i.DST_ALPHA,[_p]:i.ONE_MINUS_SRC_COLOR,[fu]:i.ONE_MINUS_SRC_ALPHA,[Sp]:i.ONE_MINUS_DST_COLOR,[vp]:i.ONE_MINUS_DST_ALPHA,[Tp]:i.CONSTANT_COLOR,[Ep]:i.ONE_MINUS_CONSTANT_COLOR,[wp]:i.CONSTANT_ALPHA,[Ap]:i.ONE_MINUS_CONSTANT_ALPHA};function pe(F,te,K,ge,ce,fe,Be,lt,le,Ge){if(F===Qs){m===!0&&(Xe(i.BLEND),m=!1);return}if(m===!1&&(be(i.BLEND),m=!0),F!==hp){if(F!==g||Ge!==C){if((v!==er||E!==er)&&(i.blendEquation(i.FUNC_ADD),v=er,E=er),Ge)switch(F){case $r:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bn:i.blendFunc(i.ONE,i.ONE);break;case cu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ze("WebGLState: Invalid blending: ",F);break}else switch(F){case $r:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case cu:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hu:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",F);break}S=null,M=null,_=null,y=null,b.set(0,0,0),N=0,g=F,C=Ge}return}ce=ce||te,fe=fe||K,Be=Be||ge,(te!==v||ce!==E)&&(i.blendEquationSeparate(xt[te],xt[ce]),v=te,E=ce),(K!==S||ge!==M||fe!==_||Be!==y)&&(i.blendFuncSeparate(ie[K],ie[ge],ie[fe],ie[Be]),S=K,M=ge,_=fe,y=Be),(lt.equals(b)===!1||le!==N)&&(i.blendColor(lt.r,lt.g,lt.b,le),b.copy(lt),N=le),g=F,C=!1}function he(F,te){F.side===bn?Xe(i.CULL_FACE):be(i.CULL_FACE);let K=F.side===Sn;te&&(K=!K),Ae(K),F.blending===$r&&F.transparent===!1?pe(Qs):pe(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let ge=F.stencilWrite;a.setTest(ge),ge&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Fe(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?be(i.SAMPLE_ALPHA_TO_COVERAGE):Xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(F){D!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),D=F)}function Se(F){F!==ap?(be(i.CULL_FACE),F!==R&&(F===lu?i.cullFace(i.BACK):F===lp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Xe(i.CULL_FACE),R=F}function rt(F){F!==U&&(O&&i.lineWidth(F),U=F)}function Fe(F,te,K){F?(be(i.POLYGON_OFFSET_FILL),(I!==te||B!==K)&&(I=te,B=K,o.getReversed()&&(te=-te,K=-K),i.polygonOffset(te,K))):Xe(i.POLYGON_OFFSET_FILL)}function _t(F){F?be(i.SCISSOR_TEST):Xe(i.SCISSOR_TEST)}function yt(F){F===void 0&&(F=i.TEXTURE0+A-1),q!==F&&(i.activeTexture(F),q=F)}function Et(F,te,K){K===void 0&&(q===null?K=i.TEXTURE0+A-1:K=q);let ge=j[K];ge===void 0&&(ge={type:void 0,texture:void 0},j[K]=ge),(ge.type!==F||ge.texture!==te)&&(q!==K&&(i.activeTexture(K),q=K),i.bindTexture(F,te||He[F]),ge.type=F,ge.texture=te)}function H(){let F=j[q];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function tn(){try{i.compressedTexImage2D(...arguments)}catch(F){Ze("WebGLState:",F)}}function gt(){try{i.compressedTexImage3D(...arguments)}catch(F){Ze("WebGLState:",F)}}function Ut(){try{i.texSubImage2D(...arguments)}catch(F){Ze("WebGLState:",F)}}function ye(){try{i.texSubImage3D(...arguments)}catch(F){Ze("WebGLState:",F)}}function $t(){try{i.compressedTexSubImage2D(...arguments)}catch(F){Ze("WebGLState:",F)}}function We(){try{i.compressedTexSubImage3D(...arguments)}catch(F){Ze("WebGLState:",F)}}function Je(){try{i.texStorage2D(...arguments)}catch(F){Ze("WebGLState:",F)}}function P(){try{i.texStorage3D(...arguments)}catch(F){Ze("WebGLState:",F)}}function T(){try{i.texImage2D(...arguments)}catch(F){Ze("WebGLState:",F)}}function X(){try{i.texImage3D(...arguments)}catch(F){Ze("WebGLState:",F)}}function re(F){return u[F]!==void 0?u[F]:i.getParameter(F)}function ne(F,te){u[F]!==te&&(i.pixelStorei(F,te),u[F]=te)}function ue(F){Z.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Z.copy(F))}function ve(F){de.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),de.copy(F))}function $(F,te){let K=c.get(te);K===void 0&&(K=new WeakMap,c.set(te,K));let ge=K.get(F);ge===void 0&&(ge=i.getUniformBlockIndex(te,F.name),i.uniformBlockBinding(te,ge,ge),K.set(F,ge))}function Q(F,te,K){let ce=c.get(te).get(F);l[ce]!==K&&(i.bindBufferBase(i.UNIFORM_BUFFER,ce,K),l[ce]=K)}function me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},q=null,j={},f={},l={},d=new WeakMap,p=[],x=null,m=!1,g=null,v=null,S=null,M=null,E=null,_=null,y=null,b=new xe(0,0,0),N=0,C=!1,D=null,R=null,U=null,I=null,B=null,Z.set(0,0,i.canvas.width,i.canvas.height),de.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:be,disable:Xe,bindFramebuffer:Ht,drawBuffers:qe,useProgram:ft,setBlending:pe,setMaterial:he,setFlipSided:Ae,setCullFace:Se,setLineWidth:rt,setPolygonOffset:Fe,setScissorTest:_t,activeTexture:yt,bindTexture:Et,unbindTexture:H,compressedTexImage2D:tn,compressedTexImage3D:gt,texImage2D:T,texImage3D:X,pixelStorei:ne,getParameter:re,updateUBOMapping:$,uniformBlockBinding:Q,texStorage2D:Je,texStorage3D:P,texSubImage2D:Ut,texSubImage3D:ye,compressedTexSubImage2D:$t,compressedTexSubImage3D:We,scissor:ue,viewport:ve,reset:me}}function ZM(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new oe,h=new WeakMap,u=new Set,f,d=new WeakMap,p=new Set,x=new FinalizationRegistry(P=>p.delete(P)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,T){return m?new OffscreenCanvas(P,T):Dr("canvas")}function v(P,T,X){let re=1,ne=Je(P);if((ne.width>X||ne.height>X)&&(re=X/Math.max(ne.width,ne.height)),re<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ue=Math.floor(re*ne.width),ve=Math.floor(re*ne.height);f===void 0&&(f=g(ue,ve));let $=T?g(ue,ve):f;return $.width=ue,$.height=ve,$.getContext("2d").drawImage(P,0,0,ue,ve),Oe("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+ue+"x"+ve+")."),$}else return"data"in P&&Oe("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),P;return P}function S(P){return P.generateMipmaps}function M(P){i.generateMipmap(P)}function E(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(P,T,X,re,ne,ue=!1){if(P!==null){if(i[P]!==void 0)return i[P];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ve;re&&(ve=e.get("EXT_texture_norm16"),ve||Oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=T;if(T===i.RED&&(X===i.FLOAT&&($=i.R32F),X===i.HALF_FLOAT&&($=i.R16F),X===i.UNSIGNED_BYTE&&($=i.R8),X===i.UNSIGNED_SHORT&&ve&&($=ve.R16_EXT),X===i.SHORT&&ve&&($=ve.R16_SNORM_EXT)),T===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&($=i.R8UI),X===i.UNSIGNED_SHORT&&($=i.R16UI),X===i.UNSIGNED_INT&&($=i.R32UI),X===i.BYTE&&($=i.R8I),X===i.SHORT&&($=i.R16I),X===i.INT&&($=i.R32I)),T===i.RG&&(X===i.FLOAT&&($=i.RG32F),X===i.HALF_FLOAT&&($=i.RG16F),X===i.UNSIGNED_BYTE&&($=i.RG8),X===i.UNSIGNED_SHORT&&ve&&($=ve.RG16_EXT),X===i.SHORT&&ve&&($=ve.RG16_SNORM_EXT)),T===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&($=i.RG8UI),X===i.UNSIGNED_SHORT&&($=i.RG16UI),X===i.UNSIGNED_INT&&($=i.RG32UI),X===i.BYTE&&($=i.RG8I),X===i.SHORT&&($=i.RG16I),X===i.INT&&($=i.RG32I)),T===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&($=i.RGB8UI),X===i.UNSIGNED_SHORT&&($=i.RGB16UI),X===i.UNSIGNED_INT&&($=i.RGB32UI),X===i.BYTE&&($=i.RGB8I),X===i.SHORT&&($=i.RGB16I),X===i.INT&&($=i.RGB32I)),T===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&($=i.RGBA8UI),X===i.UNSIGNED_SHORT&&($=i.RGBA16UI),X===i.UNSIGNED_INT&&($=i.RGBA32UI),X===i.BYTE&&($=i.RGBA8I),X===i.SHORT&&($=i.RGBA16I),X===i.INT&&($=i.RGBA32I)),T===i.RGB&&(X===i.UNSIGNED_SHORT&&ve&&($=ve.RGB16_EXT),X===i.SHORT&&ve&&($=ve.RGB16_SNORM_EXT),X===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),T===i.RGBA){let Q=ue?Bo:dt.getTransfer(ne);X===i.FLOAT&&($=i.RGBA32F),X===i.HALF_FLOAT&&($=i.RGBA16F),X===i.UNSIGNED_BYTE&&($=Q===Ct?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT&&ve&&($=ve.RGBA16_EXT),X===i.SHORT&&ve&&($=ve.RGBA16_SNORM_EXT),X===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function y(P,T){let X;return P?T===null||T===Ti||T===ir?X=i.DEPTH24_STENCIL8:T===jn?X=i.DEPTH32F_STENCIL8:T===eo&&(X=i.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ti||T===ir?X=i.DEPTH_COMPONENT24:T===jn?X=i.DEPTH_COMPONENT32F:T===eo&&(X=i.DEPTH_COMPONENT16),X}function b(P,T){return S(P)===!0||P.isFramebufferTexture&&P.minFilter!==Qt&&P.minFilter!==an?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function N(P){let T=new WeakRef(P);n.get(P).__ref=T,p.add(T),x.register(P,T,T)}function C(P){let T=n.get(P).__ref;T!==void 0&&(p.delete(T),x.unregister(T))}function D(P){U(P.target)}function R(P){I(P.target)}function U(P){P.removeEventListener("dispose",D),C(P),A(P),P.isVideoTexture&&h.delete(P),P.isHTMLTexture&&u.delete(P)}function I(P){P.removeEventListener("dispose",R),C(P),J(P)}function B(){for(let P of p){let T=P.deref();T!==void 0&&(T.isRenderTarget===!0?I(T):U(T))}p.clear(),u.clear()}function A(P){let T=n.get(P);if(T.__webglInit===void 0)return;let X=P.source,re=d.get(X);if(re){let ne=re[T.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&O(P),Object.keys(re).length===0&&d.delete(X)}n.remove(P)}function O(P){let T=n.get(P);i.deleteTexture(T.__webglTexture);let X=P.source,re=d.get(X);delete re[T.__cacheKey],o.memory.textures--}function J(P){let T=n.get(P);T.__depthDisposeCallback&&T.__depthDisposeCallback();let X=P.depthTexture;if(X&&X.renderTarget===P&&U(X),P.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(T.__webglFramebuffer[ne]))for(let ue=0;ue<T.__webglFramebuffer[ne].length;ue++)i.deleteFramebuffer(T.__webglFramebuffer[ne][ue]);else i.deleteFramebuffer(T.__webglFramebuffer[ne]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[ne])}else{if(Array.isArray(T.__webglFramebuffer))for(let ne=0;ne<T.__webglFramebuffer.length;ne++)i.deleteFramebuffer(T.__webglFramebuffer[ne]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ne=0;ne<T.__webglColorRenderbuffer.length;ne++)T.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[ne]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let re=P.textures;for(let ne=0,ue=re.length;ne<ue;ne++){let ve=n.get(re[ne]);ve.__webglTexture&&(i.deleteTexture(ve.__webglTexture),o.memory.textures--),n.remove(re[ne])}n.remove(P)}let G=0;function q(){G=0}function j(){return G}function ae(P){G=P}function Ce(){let P=G;return P>=s.maxTextures&&Oe("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),G+=1,P}function Z(P){let T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.mipmapsAutoUpdate),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function de(P,T){let X=n.get(P);if(P.isVideoTexture&&$t(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&X.__version!==P.version){let re=P.image;if(re===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)Oe("WebGLRenderer: Texture marked for update but image is incomplete");else{he(X,P,T);return}}else P.isExternalTexture&&(X.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+T)}function Re(P,T){let X=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){he(X,P,T);return}else P.isExternalTexture&&(X.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+T)}function He(P,T){let X=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){he(X,P,T);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+T)}function be(P,T){let X=n.get(P);if(P.version>0&&X.__version!==P.version){Ae(X,P,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+T)}let Xe={[Ii]:i.REPEAT,[ri]:i.CLAMP_TO_EDGE,[Lr]:i.MIRRORED_REPEAT},Ht={[Qt]:i.NEAREST,[jl]:i.NEAREST_MIPMAP_NEAREST,[nr]:i.NEAREST_MIPMAP_LINEAR,[an]:i.LINEAR,[Qr]:i.LINEAR_MIPMAP_NEAREST,[ci]:i.LINEAR_MIPMAP_LINEAR},qe={[Fp]:i.NEVER,[Cu]:i.ALWAYS,[Bp]:i.LESS,[Au]:i.LEQUAL,[kp]:i.EQUAL,[Ru]:i.GEQUAL,[Hp]:i.GREATER,[zp]:i.NOTEQUAL};function ft(P,T){if(T.type===jn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===an||T.magFilter===Qr||T.magFilter===nr||T.magFilter===ci||T.minFilter===an||T.minFilter===Qr||T.minFilter===nr||T.minFilter===ci)&&Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,Xe[T.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,Xe[T.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,Xe[T.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,Ht[T.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,Ht[T.minFilter]),T.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,qe[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Qt||T.minFilter!==nr&&T.minFilter!==ci||T.type===jn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function xt(P,T){let X=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",D),N(T));let re=T.source,ne=d.get(re);ne===void 0&&(ne={},d.set(re,ne));let ue=Z(T);if(ue!==P.__cacheKey){ne[ue]===void 0&&(ne[ue]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),ne[ue].usedTimes++;let ve=ne[P.__cacheKey];ve!==void 0&&(ne[P.__cacheKey].usedTimes--,ve.usedTimes===0&&O(T)),P.__cacheKey=ue,P.__webglTexture=ne[ue].texture}return X}function ie(P,T,X){return Math.floor(Math.floor(P/X)/T)}function pe(P,T,X,re){let ue=P.updateRanges;if(ue.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,X,re,T.data);else{ue.sort((F,te)=>F.start-te.start);let ve=0;for(let F=1;F<ue.length;F++){let te=ue[ve],K=ue[F],ge=te.start+te.count,ce=ie(K.start,T.width,4),fe=ie(te.start,T.width,4);K.start<=ge+1&&ce===fe&&ie(K.start+K.count-1,T.width,4)===ce?te.count=Math.max(te.count,K.start+K.count-te.start):(++ve,ue[ve]=K)}ue.length=ve+1;let $=t.getParameter(i.UNPACK_ROW_LENGTH),Q=t.getParameter(i.UNPACK_SKIP_PIXELS),me=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let F=0,te=ue.length;F<te;F++){let K=ue[F],ge=Math.floor(K.start/4),ce=Math.ceil(K.count/4),fe=ge%T.width,Be=Math.floor(ge/T.width),lt=ce,le=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,fe),t.pixelStorei(i.UNPACK_SKIP_ROWS,Be),t.texSubImage2D(i.TEXTURE_2D,0,fe,Be,lt,le,X,re,T.data)}P.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,$),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(i.UNPACK_SKIP_ROWS,me)}}function he(P,T,X){let re=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(re=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(re=i.TEXTURE_3D);let ne=xt(P,T),ue=T.source;t.bindTexture(re,P.__webglTexture,i.TEXTURE0+X);let ve=n.get(ue);if(ue.version!==ve.__version||ne===!0){if(t.activeTexture(i.TEXTURE0+X),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let le=dt.getPrimaries(dt.workingColorSpace),Ge=T.colorSpace===os?null:dt.getPrimaries(T.colorSpace),at=T.colorSpace===os||le===Ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,at)}t.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment);let Q=v(T.image,!1,s.maxTextureSize);Q=We(T,Q);let me=r.convert(T.format,T.colorSpace),F=r.convert(T.type),te=_(T.internalFormat,me,F,T.normalized,T.colorSpace,T.isVideoTexture);ft(re,T);let K,ge=T.mipmaps,ce=T.isVideoTexture!==!0,fe=ve.__version===void 0||ne===!0,Be=ue.dataReady,lt=b(T,Q);if(T.isDepthTexture)te=y(T.format===rs,T.type),fe&&(ce?t.texStorage2D(i.TEXTURE_2D,1,te,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,te,Q.width,Q.height,0,me,F,null));else if(T.isDataTexture)if(ge.length>0){ce&&fe&&t.texStorage2D(i.TEXTURE_2D,lt,te,ge[0].width,ge[0].height);for(let le=0,Ge=ge.length;le<Ge;le++)K=ge[le],ce?Be&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,K.width,K.height,me,F,K.data):t.texImage2D(i.TEXTURE_2D,le,te,K.width,K.height,0,me,F,K.data);T.generateMipmaps=!1}else ce?(fe&&t.texStorage2D(i.TEXTURE_2D,lt,te,Q.width,Q.height),Be&&pe(T,Q,me,F)):t.texImage2D(i.TEXTURE_2D,0,te,Q.width,Q.height,0,me,F,Q.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ce&&fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,lt,te,ge[0].width,ge[0].height,Q.depth);for(let le=0,Ge=ge.length;le<Ge;le++)if(K=ge[le],T.format!==hi)if(me!==null)if(ce){if(Be)if(T.layerUpdates.size>0){let at=Hu(K.width,K.height,T.format,T.type);for(let Te of T.layerUpdates){let Pt=K.data.subarray(Te*at/K.data.BYTES_PER_ELEMENT,(Te+1)*at/K.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,Te,K.width,K.height,1,me,Pt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,K.width,K.height,Q.depth,me,K.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,le,te,K.width,K.height,Q.depth,0,K.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ce?Be&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,K.width,K.height,Q.depth,me,F,K.data):t.texImage3D(i.TEXTURE_2D_ARRAY,le,te,K.width,K.height,Q.depth,0,me,F,K.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{ce&&fe&&t.texStorage2D(i.TEXTURE_2D,lt,te,ge[0].width,ge[0].height);for(let le=0,Ge=ge.length;le<Ge;le++)K=ge[le],T.format!==hi?me!==null?ce?Be&&t.compressedTexSubImage2D(i.TEXTURE_2D,le,0,0,K.width,K.height,me,K.data):t.compressedTexImage2D(i.TEXTURE_2D,le,te,K.width,K.height,0,K.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?Be&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,K.width,K.height,me,F,K.data):t.texImage2D(i.TEXTURE_2D,le,te,K.width,K.height,0,me,F,K.data)}else if(T.isDataArrayTexture)if(ce){if(fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,lt,te,Q.width,Q.height,Q.depth),Be)if(T.layerUpdates.size>0){let le=Hu(Q.width,Q.height,T.format,T.type);for(let Ge of T.layerUpdates){let at=Q.data.subarray(Ge*le/Q.data.BYTES_PER_ELEMENT,(Ge+1)*le/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ge,Q.width,Q.height,1,me,F,at)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,me,F,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,te,Q.width,Q.height,Q.depth,0,me,F,Q.data);else if(T.isData3DTexture)ce?(fe&&t.texStorage3D(i.TEXTURE_3D,lt,te,Q.width,Q.height,Q.depth),Be&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,me,F,Q.data)):t.texImage3D(i.TEXTURE_3D,0,te,Q.width,Q.height,Q.depth,0,me,F,Q.data);else if(T.isFramebufferTexture){if(fe)if(ce)t.texStorage2D(i.TEXTURE_2D,lt,te,Q.width,Q.height);else{let le=Q.width,Ge=Q.height;for(let at=0;at<lt;at++)t.texImage2D(i.TEXTURE_2D,at,te,le,Ge,0,me,F,null),le>>=1,Ge>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in i){let le=i.canvas;if(le.hasAttribute("layoutsubtree")||le.setAttribute("layoutsubtree","true"),Q.parentNode!==le){le.appendChild(Q),u.add(T),le.onpaint=Ge=>{let at=Ge.changedElements;for(let Te of u)at.includes(Te.image)&&(Te.needsUpdate=!0)},le.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Q);else{let at=i.RGBA,Te=i.RGBA,Pt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,at,Te,Pt,Q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ge.length>0){if(ce&&fe){let le=Je(ge[0]);t.texStorage2D(i.TEXTURE_2D,lt,te,le.width,le.height)}for(let le=0,Ge=ge.length;le<Ge;le++)K=ge[le],ce?Be&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,me,F,K):t.texImage2D(i.TEXTURE_2D,le,te,me,F,K);T.generateMipmaps=!1}else if(ce){if(fe){let le=Je(Q);t.texStorage2D(i.TEXTURE_2D,lt,te,le.width,le.height)}Be&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me,F,Q)}else t.texImage2D(i.TEXTURE_2D,0,te,me,F,Q);S(T)&&T.mipmapsAutoUpdate===!0&&M(re),ve.__version=ue.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Ae(P,T,X){if(T.image.length!==6)return;let re=xt(P,T),ne=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+X);let ue=n.get(ne);if(ne.version!==ue.__version||re===!0){t.activeTexture(i.TEXTURE0+X);let ve=dt.getPrimaries(dt.workingColorSpace),$=T.colorSpace===os?null:dt.getPrimaries(T.colorSpace),Q=T.colorSpace===os||ve===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let me=T.isCompressedTexture||T.image[0].isCompressedTexture,F=T.image[0]&&T.image[0].isDataTexture,te=[];for(let Te=0;Te<6;Te++)!me&&!F?te[Te]=v(T.image[Te],!0,s.maxCubemapSize):te[Te]=F?T.image[Te].image:T.image[Te],te[Te]=We(T,te[Te]);let K=te[0],ge=r.convert(T.format,T.colorSpace),ce=r.convert(T.type),fe=_(T.internalFormat,ge,ce,T.normalized,T.colorSpace),Be=T.isVideoTexture!==!0,lt=ue.__version===void 0||re===!0,le=ne.dataReady,Ge=b(T,K);ft(i.TEXTURE_CUBE_MAP,T);let at;if(T.isDepthTexture){if(fe=y(T.format===rs,T.type),lt)if(Be)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,fe,K.width,K.height);else for(let Te=0;Te<6;Te++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,fe,K.width,K.height,0,ge,ce,null)}else if(me){Be&&lt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ge,fe,K.width,K.height);for(let Te=0;Te<6;Te++){at=te[Te].mipmaps;for(let Pt=0;Pt<at.length;Pt++){let dn=at[Pt];T.format!==hi?ge!==null?Be?le&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Pt,0,0,dn.width,dn.height,ge,dn.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Pt,fe,dn.width,dn.height,0,dn.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Pt,0,0,dn.width,dn.height,ge,ce,dn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Pt,fe,dn.width,dn.height,0,ge,ce,dn.data)}}}else{if(at=T.mipmaps,Be&&lt){at.length>0&&Ge++;let Te=Je(te[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ge,fe,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(F){Be?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,te[Te].width,te[Te].height,ge,ce,te[Te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,fe,te[Te].width,te[Te].height,0,ge,ce,te[Te].data);for(let Pt=0;Pt<at.length;Pt++){let us=at[Pt].image[Te].image;Be?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Pt+1,0,0,us.width,us.height,ge,ce,us.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Pt+1,fe,us.width,us.height,0,ge,ce,us.data)}}else{Be?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,ge,ce,te[Te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,fe,ge,ce,te[Te]);for(let Pt=0;Pt<at.length;Pt++){let dn=at[Pt];Be?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Pt+1,0,0,ge,ce,dn.image[Te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Pt+1,fe,ge,ce,dn.image[Te])}}}S(T)&&T.mipmapsAutoUpdate===!0&&M(i.TEXTURE_CUBE_MAP),ue.__version=ne.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Se(P,T,X,re,ne,ue){let ve=r.convert(X.format,X.colorSpace),$=r.convert(X.type),Q=_(X.internalFormat,ve,$,X.normalized,X.colorSpace),me=n.get(T),F=n.get(X);if(F.__renderTarget=T,!me.__hasExternalTextures){let te=Math.max(1,T.width>>ue),K=Math.max(1,T.height>>ue);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,ue,Q,te,K,T.depth,0,ve,$,null):t.texImage2D(ne,ue,Q,te,K,0,ve,$,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),ye(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,ne,F.__webglTexture,0,Ut(T)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,re,ne,F.__webglTexture,ue),t.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(P,T,X){if(i.bindRenderbuffer(i.RENDERBUFFER,P),T.depthBuffer){let re=T.depthTexture,ne=re&&re.isDepthTexture?re.type:null,ue=y(T.stencilBuffer,ne),ve=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ye(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ut(T),ue,T.width,T.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut(T),ue,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ue,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ve,i.RENDERBUFFER,P)}else{let re=T.textures;for(let ne=0;ne<re.length;ne++){let ue=re[ne],ve=r.convert(ue.format,ue.colorSpace),$=r.convert(ue.type),Q=_(ue.internalFormat,ve,$,ue.normalized,ue.colorSpace);ye(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ut(T),Q,T.width,T.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut(T),Q,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Q,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Fe(P,T,X){let re=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ne=n.get(T.depthTexture);ne.__renderTarget=T;let ue=re?T.depthTexture.image[0]:T.depthTexture.image;(!ne.__webglTexture||ue.width!==T.width||ue.height!==T.height)&&(ue.width=T.width,ue.height=T.height,T.depthTexture.needsUpdate=!0),re?be(T.depthTexture,0):de(T.depthTexture,0);let ve=ne.__webglTexture,$=Ut(T),Q=re?i.TEXTURE_CUBE_MAP_POSITIVE_X+X:i.TEXTURE_2D,me=T.depthTexture.format===rs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===$i)ye(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,me,Q,ve,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,me,Q,ve,0);else if(T.depthTexture.format===rs)ye(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,me,Q,ve,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,me,Q,ve,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function _t(P){let T=n.get(P),X=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){let re=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),re){let ne=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,re.removeEventListener("dispose",ne)};re.addEventListener("dispose",ne),T.__depthDisposeCallback=ne}T.__boundDepthTexture=re}if(P.depthTexture&&!T.__autoAllocateDepthBuffer)if(X)for(let re=0;re<6;re++)Fe(T.__webglFramebuffer[re],P,re);else P.texture.mipmaps.length>0?Fe(T.__webglFramebuffer[0],P,0):Fe(T.__webglFramebuffer,P,0);else if(X){T.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[re]),T.__webglDepthbuffer[re]===void 0)T.__webglDepthbuffer[re]=i.createRenderbuffer(),rt(T.__webglDepthbuffer[re],P,!1);else{let ne=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=T.__webglDepthbuffer[re];i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,ue)}}else if(P.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),rt(T.__webglDepthbuffer,P,!1);else{let ne=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,ue)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function yt(P,T,X){let re=n.get(P);T!==void 0&&Se(re.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&_t(P)}function Et(P){let T=P.texture,X=n.get(P),re=n.get(T);P.addEventListener("dispose",R),N(P);let ne=P.textures,ue=P.isWebGLCubeRenderTarget===!0,ve=ne.length>1;if(ve||(re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture()),re.__version=T.version,o.memory.textures++),ue){X.__webglFramebuffer=[];for(let $=0;$<6;$++)if(T.mipmaps.length>0){X.__webglFramebuffer[$]=[];for(let Q=0;Q<T.mipmaps.length;Q++)X.__webglFramebuffer[$][Q]=i.createFramebuffer()}else X.__webglFramebuffer[$]=i.createFramebuffer()}else{if(T.mipmaps.length>0){X.__webglFramebuffer=[];for(let $=0;$<T.mipmaps.length;$++)X.__webglFramebuffer[$]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(ve)for(let $=0,Q=ne.length;$<Q;$++){let me=n.get(ne[$]);me.__webglTexture===void 0&&(me.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&ye(P)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let $=0;$<ne.length;$++){let Q=ne[$];X.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[$]);let me=r.convert(Q.format,Q.colorSpace),F=r.convert(Q.type),te=_(Q.internalFormat,me,F,Q.normalized,Q.colorSpace,P.isXRRenderTarget===!0),K=Ut(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,K,te,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,X.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(X.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ue){t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture),ft(i.TEXTURE_CUBE_MAP,T);for(let $=0;$<6;$++)if(T.mipmaps.length>0)for(let Q=0;Q<T.mipmaps.length;Q++)Se(X.__webglFramebuffer[$][Q],P,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Q);else Se(X.__webglFramebuffer[$],P,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);S(T)?M(i.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}else if(ve){for(let $=0,Q=ne.length;$<Q;$++){let me=ne[$],F=n.get(me),te=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(te=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(te,F.__webglTexture),ft(te,me),Se(X.__webglFramebuffer,P,me,i.COLOR_ATTACHMENT0+$,te,0),S(me)&&M(te)}t.unbindTexture()}else{let $=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&($=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture($,re.__webglTexture),ft($,T),T.mipmaps.length>0)for(let Q=0;Q<T.mipmaps.length;Q++)Se(X.__webglFramebuffer[Q],P,T,i.COLOR_ATTACHMENT0,$,Q);else Se(X.__webglFramebuffer,P,T,i.COLOR_ATTACHMENT0,$,0);S(T)?M($):T.mipmaps.length>0&&i.texParameteri($,i.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}P.depthBuffer&&_t(P)}function H(P){let T=P.textures;for(let X=0,re=T.length;X<re;X++){let ne=T[X];if(S(ne)&&ne.mipmapsAutoUpdate===!0){let ue=E(P),ve=n.get(ne).__webglTexture;t.bindTexture(ue,ve),M(ue),t.unbindTexture()}}}let tn=[];function gt(P){if(P.samples>0){if(ye(P)===!1){let T=P.textures,X=P.width,re=P.height,ne=i.COLOR_BUFFER_BIT,ue=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=n.get(P),$=T.length>1;if($)for(let me=0;me<T.length;me++)t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let me=0;me<T.length;me++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ve.__webglColorRenderbuffer[me]);let F=n.get(T[me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,F,0)}i.blitFramebuffer(0,0,X,re,0,0,X,re,ne,i.NEAREST),l===!0&&(tn.length=0,tn.push(i.COLOR_ATTACHMENT0+me),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&tn.push(ue),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,tn))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let me=0;me<T.length;me++){t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,ve.__webglColorRenderbuffer[me]);let F=n.get(T[me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,F,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let T=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function Ut(P){return Math.min(s.maxSamples,P.samples)}function ye(P){let T=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function $t(P){let T=o.render.frame;h.get(P)!==T&&(h.set(P,T),P.update())}function We(P,T){let X=P.colorSpace,re=P.format,ne=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||X!==On&&X!==os&&(dt.getTransfer(X)===Ct?(re!==hi||ne!==Wn)&&Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",X)),T}function Je(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=Ce,this.resetTextureUnits=q,this.getTextureUnits=j,this.setTextureUnits=ae,this.setTexture2D=de,this.setTexture2DArray=Re,this.setTexture3D=He,this.setTextureCube=be,this.rebindTextures=yt,this.setupRenderTarget=Et,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=ye,this.dispose=B}function KM(i,e){function t(n,s=os){let r,o=dt.getTransfer(s);if(n===Wn)return i.UNSIGNED_BYTE;if(n===ec)return i.UNSIGNED_SHORT_4_4_4_4;if(n===tc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Su)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===bu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===vu)return i.BYTE;if(n===Mu)return i.SHORT;if(n===eo)return i.UNSIGNED_SHORT;if(n===Ql)return i.INT;if(n===Ti)return i.UNSIGNED_INT;if(n===jn)return i.FLOAT;if(n===Ei)return i.HALF_FLOAT;if(n===Tu)return i.ALPHA;if(n===Eu)return i.RGB;if(n===hi)return i.RGBA;if(n===$i)return i.DEPTH_COMPONENT;if(n===rs)return i.DEPTH_STENCIL;if(n===nc)return i.RED;if(n===ic)return i.RED_INTEGER;if(n===Ts)return i.RG;if(n===sc)return i.RG_INTEGER;if(n===rc)return i.RGBA_INTEGER;if(n===Sa||n===ba||n===Ta||n===Ea)if(o===Ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Sa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Sa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ba)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ta)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ea)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===oc||n===ac||n===lc||n===cc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===oc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ac)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===lc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===cc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===hc||n===uc||n===fc||n===dc||n===pc||n===wa||n===mc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===hc||n===uc)return o===Ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===fc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===dc)return r.COMPRESSED_R11_EAC;if(n===pc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===wa)return r.COMPRESSED_RG11_EAC;if(n===mc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===gc||n===xc||n===_c||n===yc||n===vc||n===Mc||n===Sc||n===bc||n===Tc||n===Ec||n===wc||n===Ac||n===Rc||n===Cc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===gc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_c)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===yc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===vc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Mc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Sc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===bc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Tc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ec)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ac)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Rc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Cc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ic||n===Pc||n===Lc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ic)return o===Ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Pc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Lc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Nc||n===Dc||n===Aa||n===Uc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Nc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Dc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Aa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Uc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ir?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var JM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$M=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ef=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new $o(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new li({vertexShader:JM,fragmentShader:$M,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new tt(new Pn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},tf=class extends Si{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null,x=typeof XRWebGLBinding<"u",m=new ef,g={},v=t.getContextAttributes(),S=null,M=null,E=[],_=[],y=new oe,b=null,N=null,C=new on;C.viewport=new Lt;let D=new on;D.viewport=new Lt;let R=[C,D],U=new ql,I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let de=E[Z];return de===void 0&&(de=new Fr,E[Z]=de),de.getTargetRaySpace()},this.getControllerGrip=function(Z){let de=E[Z];return de===void 0&&(de=new Fr,E[Z]=de),de.getGripSpace()},this.getHand=function(Z){let de=E[Z];return de===void 0&&(de=new Fr,E[Z]=de),de.getHandSpace()};function A(Z){let de=_.indexOf(Z.inputSource);if(de===-1)return;let Re=E[de];Re!==void 0&&(Re.update(Z.inputSource,Z.frame,c||o),Re.dispatchEvent({type:Z.type,data:Z.inputSource}))}function O(){s.removeEventListener("select",A),s.removeEventListener("selectstart",A),s.removeEventListener("selectend",A),s.removeEventListener("squeeze",A),s.removeEventListener("squeezestart",A),s.removeEventListener("squeezeend",A),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",J);for(let Z=0;Z<E.length;Z++){let de=_[Z];de!==null&&(_[Z]=null,E[Z].disconnect(de))}I=null,B=null,m.reset();for(let Z in g)delete g[Z];if(e.setRenderTarget(S),d=null,f=null,u=null,s=null,M=null,Ce.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(y.width,y.height,!1),N!==null){let Z=N.camera;Z.fov=N.fov,Z.zoom=N.zoom,Z.updateProjectionMatrix(),N=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",A),s.addEventListener("selectstart",A),s.addEventListener("selectend",A),s.addEventListener("squeeze",A),s.addEventListener("squeezestart",A),s.addEventListener("squeezeend",A),s.addEventListener("end",O),s.addEventListener("inputsourceschange",J),v.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(y),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,He=null,be=null;v.depth&&(be=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Re=v.stencil?rs:$i,He=v.stencil?ir:Ti);let Xe={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Xe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new Kn(f.textureWidth,f.textureHeight,{format:hi,type:Wn,depthTexture:new Qi(f.textureWidth,f.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Re={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,Re),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Kn(d.framebufferWidth,d.framebufferHeight,{format:hi,type:Wn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ce.setContext(s),Ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J(Z){for(let de=0;de<Z.removed.length;de++){let Re=Z.removed[de],He=_.indexOf(Re);He>=0&&(_[He]=null,E[He].disconnect(Re))}for(let de=0;de<Z.added.length;de++){let Re=Z.added[de],He=_.indexOf(Re);if(He===-1){for(let Xe=0;Xe<E.length;Xe++)if(Xe>=_.length){_.push(Re),He=Xe;break}else if(_[Xe]===null){_[Xe]=Re,He=Xe;break}if(He===-1)break}let be=E[He];be&&be.connect(Re)}}function G(Z,de){de===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(de.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let de=Z.near,Re=Z.far;m.texture!==null&&(m.depthNear>0&&(de=m.depthNear),m.depthFar>0&&(Re=m.depthFar)),U.near=D.near=C.near=de,U.far=D.far=C.far=Re,(I!==U.near||B!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),I=U.near,B=U.far),U.layers.mask=Z.layers.mask|6,C.layers.mask=U.layers.mask&-5,D.layers.mask=U.layers.mask&-3;let He=Z.parent,be=U.cameras;G(U,He);for(let Xe=0;Xe<be.length;Xe++)G(be[Xe],He);U.projectionMatrix.copy(C.projectionMatrix),U.projectionMatrixInverse.copy(C.projectionMatrixInverse),N===null&&Z.isPerspectiveCamera&&(N={camera:Z,fov:Z.fov,zoom:Z.zoom}),q(Z,U,He)};function q(Z,de,Re){Re===null?Z.matrix.copy(de.matrixWorld):(Z.matrix.copy(Re.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(de.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(de.projectionMatrix),Z.projectionMatrixInverse.copy(de.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Hs*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(Z){return g[Z]};let j=null;function ae(Z,de){if(h=de.getViewerPose(c||o),p=de,h!==null){let Re=h.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let He=!1;Re.length!==U.cameras.length&&(U.cameras.length=0,He=!0);for(let qe=0;qe<Re.length;qe++){let ft=Re[qe],xt=null;if(d!==null)xt=d.getViewport(ft);else{let pe=u.getViewSubImage(f,ft);xt=pe.viewport,qe===0&&(e.setRenderTargetTextures(M,pe.colorTexture,pe.depthStencilTexture),e.setRenderTarget(M))}let ie=R[qe];ie===void 0&&(ie=new on,ie.layers.enable(qe),ie.viewport=new Lt,R[qe]=ie),ie.matrix.fromArray(ft.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(ft.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(xt.x,xt.y,xt.width,xt.height),qe===0&&(U.matrix.copy(ie.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),He===!0&&U.cameras.push(ie)}let be=s.enabledFeatures;if(be&&be.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let qe=u.getDepthInformation(Re[0]);qe&&qe.isValid&&qe.texture&&m.init(qe,s.renderState)}if(be&&be.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let qe=0;qe<Re.length;qe++){let ft=Re[qe].camera;if(ft){let xt=g[ft];xt||(xt=new $o,g[ft]=xt);let ie=u.getCameraImage(ft);xt.sourceTexture=ie}}}}for(let Re=0;Re<E.length;Re++){let He=_[Re],be=E[Re];He!==null&&be!==void 0&&be.update(He,de,c||o)}j&&j(Z,de),de.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:de}),p=null}let Ce=new Sm;Ce.setAnimationLoop(ae),this.setAnimationLoop=function(Z){j=Z},this.dispose=function(){}}},jM=new Ve,Lm=new je;Lm.set(-1,0,0,0,1,0,0,0,1);function QM(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Fu(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,v,S,M){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&d(m,g,M)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,v,S):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Sn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Sn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let v=e.get(g),S=v.envMap,M=v.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(jM.makeRotationFromEuler(M)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Lm),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,v,S){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*v,m.scale.value=S*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,v){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Sn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let v=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function e1(i,e,t,n){let s={},r={};function o(v,S){let M=S.program;n.uniformBlockBinding(v,M,s[v.id])}function a(v,S){let M=s[v.id];M===void 0&&(p(v),M=l(v),s[v.id]=M,v.addEventListener("dispose",m));let E=S.program;n.updateUBOMapping(v,E);let _=e.render.frame;r[v.id]!==_&&(c(v),r[v.id]=_)}function l(v){let S=i.createBuffer(),M=v.__size,E=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,M,E),i.bindBuffer(i.UNIFORM_BUFFER,null),S}function c(v){let S=s[v.id],M=v.uniforms,E=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let _=0,y=M.length;_<y;_++){let b=M[_];if(Array.isArray(b))for(let N=0,C=b.length;N<C;N++)h(b[N],_,N,E);else h(b,_,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(v,S,M,E){if(f(v,S,M,E)===!0){let _=v.__offset,y=v.value;if(Array.isArray(y)){let b=0;for(let N=0;N<y.length;N++){let C=y[N],D=x(C,!0);u(C,v.__data,b),b+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else u(y,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,v.__data)}}function u(v,S,M){typeof v=="number"||typeof v=="boolean"?S[M]=v:v.isMatrix3?(S[M]=v.elements[0],S[M+1]=v.elements[1],S[M+2]=v.elements[2],S[M+3]=0,S[M+4]=v.elements[3],S[M+5]=v.elements[4],S[M+6]=v.elements[5],S[M+7]=0,S[M+8]=v.elements[6],S[M+9]=v.elements[7],S[M+10]=v.elements[8],S[M+11]=0):ArrayBuffer.isView(v)?S.set(v.subarray(0,S.length-M),M):v.toArray(S,M)}function f(v,S,M,E){let _=v.value,y=S+"_"+M;if(Array.isArray(_)){E[y]===void 0&&(E[y]=[]);let b=E[y],N=!1;for(let C=0;C<_.length;C++)d(_[C],b,C)===!0&&(N=!0);return N}return d(_,E,y)}function d(v,S,M){if(S[M]===void 0)return typeof v=="number"||typeof v=="boolean"?S[M]=v:ArrayBuffer.isView(v)?S[M]=v.slice():S[M]=v.clone(),!0;{let E=S[M];if(typeof v=="number"||typeof v=="boolean"){if(E!==v)return S[M]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(E.equals(v)===!1)return E.copy(v),!0}}return!1}function p(v){let S=v.uniforms,M=0,E=16;for(let y=0,b=S.length;y<b;y++){let N=Array.isArray(S[y])?S[y]:[S[y]];for(let C=0,D=N.length;C<D;C++){let R=N[C],U=Array.isArray(R.value)?R.value:[R.value],I=Array.isArray(S[y])||Array.isArray(R.value),B=M;for(let O=0,J=U.length;O<J;O++){let G=U[O],q=x(G,I),j=M%E,ae=j%q.boundary,Ce=j+ae;M+=ae,Ce!==0&&E-Ce<q.storage&&(M+=E-Ce),O===0&&(B=M),M+=q.storage}let A=R.type==="int"?Int32Array:R.type==="uint"?Uint32Array:Float32Array;R.__data=new A((M-B)/Float32Array.BYTES_PER_ELEMENT),R.__offset=B}}let _=M%E;return _>0&&(M+=E-_),v.__size=M,v.__cache={},this}function x(v,S){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=16,M.storage=48):v.isMatrix4?(M.boundary=16,M.storage=64):v.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):Oe("WebGLRenderer: Unsupported uniform value type.",v),S===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function m(v){let S=v.target;S.removeEventListener("dispose",m),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function g(){for(let v in s)i.deleteBuffer(s[v]);s={},r={}}return{bind:o,update:a,dispose:g}}var t1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Oi=null;function n1(){return Oi===null&&(Oi=new Hr(t1,16,16,Ts,Ei),Oi.name="DFG_LUT",Oi.minFilter=an,Oi.magFilter=an,Oi.wrapS=ri,Oi.wrapT=ri,Oi.generateMipmaps=!1,Oi.needsUpdate=!0),Oi}var Gc=class{constructor(e={}){let{canvas:t=Gp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Wn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=d,m=new Set([rc,sc,ic]),g=new Set([Wn,Ti,eo,ir,ec,tc]),v=new Uint32Array(4),S=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},E=null,_=null,y=[],b=[],N=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,D=!1,R=null,U=null,I=null,B=null;this._outputColorSpace=Wt;let A=0,O=0,J=null,G=-1,q=null,j=new Lt,ae=new Lt,Ce=null,Z=new xe(0),de=0,Re=t.width,He=t.height,be=1,Xe=null,Ht=null,qe=new Lt(0,0,Re,He),ft=new Lt(0,0,Re,He),xt=!1,ie=new vs,pe=new Cl,he=!1,Ae=!1,Se=new Ve,rt=new L,Fe=new Lt,_t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},yt=!1;function Et(){return J===null?be:1}let H=n;function tn(w,k){return t.getContext(w,k)}let gt,Ut,ye,$t,We,Je,P,T,X,re,ne,ue,ve,$,Q,me,F,te,K,ge,ce,fe,Be;try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ge,!1),t.addEventListener("webglcontextrestored",at,!1),t.addEventListener("webglcontextcreationerror",Te,!1),H===null){let k="webgl2";if(H=tn(k,w),H===null)throw tn(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}lt()}catch(w){throw t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),Ze("WebGLRenderer: "+w.message),w}function lt(){gt=new dv(H),gt.init(),ce=new KM(H,gt),Ut=new nv(H,gt,e,ce),ye=new YM(H,gt),Ut.reversedDepthBuffer&&f&&ye.buffers.depth.setReversed(!0),U=H.createFramebuffer(),I=H.createFramebuffer(),B=H.createFramebuffer(),$t=new gv(H),We=new NM,Je=new ZM(H,gt,ye,We,Ut,ce,$t),P=new fv(C),T=new _x(H),fe=new ev(H,T),X=new pv(H,T,$t,fe),re=new _v(H,X,T,fe,$t),te=new xv(H,Ut,Je),Q=new iv(We),ne=new LM(C,P,gt,Ut,fe,Q),ue=new QM(C,We),ve=new UM,$=new zM(gt),F=new Qy(C,P,ye,re,p,l),me=new qM(C,re,Ut),Be=new e1(H,$t,Ut,ye),K=new tv(H,gt,$t),ge=new mv(H,gt,$t),$t.programs=ne.programs,C.capabilities=Ut,C.extensions=gt,C.properties=We,C.renderLists=ve,C.shadowMap=me,C.state=ye,C.info=$t}x!==Wn&&(N=new vv(x,t.width,t.height,a,s,r));let le=new tf(C,H);this.xr=le,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let w=gt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=gt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return be},this.setPixelRatio=function(w){w!==void 0&&(be=w,this.setSize(Re,He,!1))},this.getSize=function(w){return w.set(Re,He)},this.setSize=function(w,k,Y=!0){if(le.isPresenting){Oe("WebGLRenderer: Can't change size while VR device is presenting.");return}Re=w,He=k,t.width=Math.floor(w*be),t.height=Math.floor(k*be),Y===!0&&(t.style.width=w+"px",t.style.height=k+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(Re*be,He*be).floor()},this.setDrawingBufferSize=function(w,k,Y){Re=w,He=k,be=Y,t.width=Math.floor(w*Y),t.height=Math.floor(k*Y),this.setViewport(0,0,w,k)},this.setEffects=function(w){if(x===Wn){Ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let k=0;k<w.length;k++)if(w[k].isOutputPass===!0){Oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(j)},this.getViewport=function(w){return w.copy(qe)},this.setViewport=function(w,k,Y,V){w.isVector4?qe.set(w.x,w.y,w.z,w.w):qe.set(w,k,Y,V),ye.viewport(j.copy(qe).multiplyScalar(Et()).round())},this.getScissor=function(w){return w.copy(ft)},this.setScissor=function(w,k,Y,V){w.isVector4?ft.set(w.x,w.y,w.z,w.w):ft.set(w,k,Y,V),ye.scissor(ae.copy(ft).multiplyScalar(Et()).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(w){ye.setScissorTest(xt=w)},this.setOpaqueSort=function(w){Xe=w},this.setTransparentSort=function(w){Ht=w},this.getClearColor=function(w){return w.copy(F.getClearColor())},this.setClearColor=function(){F.setClearColor(...arguments)},this.getClearAlpha=function(){return F.getClearAlpha()},this.setClearAlpha=function(){F.setClearAlpha(...arguments)},this.clear=function(w=!0,k=!0,Y=!0){let V=0;if(w){let W=!1;if(J!==null){let Me=J.texture.format;W=m.has(Me)}if(W){let Me=J.texture.type,Ie=g.has(Me),_e=F.getClearColor(),we=F.getClearAlpha(),Ue=_e.r,it=_e.g,vt=_e.b;Ie?(v[0]=Ue,v[1]=it,v[2]=vt,v[3]=we,H.clearBufferuiv(H.COLOR,0,v)):(S[0]=Ue,S[1]=it,S[2]=vt,S[3]=we,H.clearBufferiv(H.COLOR,0,S))}else V|=H.COLOR_BUFFER_BIT}k&&(V|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(V|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&H.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),R=w},this.dispose=function(){t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),F.dispose(),ve.dispose(),$.dispose(),Je.dispose(),We.dispose(),P.dispose(),re.dispose(),X.dispose(),fe.dispose(),Be.dispose(),ne.dispose(),le.dispose(),le.removeEventListener("sessionstart",id),le.removeEventListener("sessionend",sd),As.stop()};function Ge(w){w.preventDefault(),ko("WebGLRenderer: Context Lost."),D=!0}function at(){ko("WebGLRenderer: Context Restored."),D=!1;let w=$t.autoReset,k=me.enabled,Y=me.autoUpdate,V=me.needsUpdate,W=me.type;lt(),$t.autoReset=w,me.enabled=k,me.autoUpdate=Y,me.needsUpdate=V,me.type=W}function Te(w){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Pt(w){let k=w.target;k.removeEventListener("dispose",Pt),dn(k)}function dn(w){us(w),We.remove(w)}function us(w){let k=We.get(w).programs;k!==void 0&&(k.forEach(function(Y){ne.releaseProgram(Y)}),w.isShaderMaterial&&ne.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,Y,V,W,Me){k===null&&(k=_t);let Ie=W.isMesh&&W.matrixWorld.determinantAffine()<0,_e=k0(w,k,Y,V,W);ye.setMaterial(V,Ie);let we=Y.index,Ue=1;if(V.wireframe===!0){if(we=X.getWireframeAttribute(Y),we===void 0)return;Ue=2}let it=Y.drawRange,vt=Y.attributes.position,Ne=it.start*Ue,Mt=(it.start+it.count)*Ue;Me!==null&&(Ne=Math.max(Ne,Me.start*Ue),Mt=Math.min(Mt,(Me.start+Me.count)*Ue)),we!==null?(Ne=Math.max(Ne,0),Mt=Math.min(Mt,we.count)):vt!=null&&(Ne=Math.max(Ne,0),Mt=Math.min(Mt,vt.count));let nn=Mt-Ne;if(nn<0||nn===1/0)return;fe.setup(W,V,_e,Y,we);let Bt,Ot=K;if(we!==null&&(Bt=T.get(we),Ot=ge,Ot.setIndex(Bt)),W.isMesh)V.wireframe===!0?(ye.setLineWidth(V.wireframeLinewidth*Et()),Ot.setMode(H.LINES)):Ot.setMode(H.TRIANGLES);else if(W.isLine){let An=V.linewidth;An===void 0&&(An=1),ye.setLineWidth(An*Et()),W.isLineSegments?Ot.setMode(H.LINES):W.isLineLoop?Ot.setMode(H.LINE_LOOP):Ot.setMode(H.LINE_STRIP)}else W.isPoints?Ot.setMode(H.POINTS):W.isSprite&&Ot.setMode(H.TRIANGLES);if(W.isBatchedMesh)if(gt.get("WEBGL_multi_draw"))Ot.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let An=W._multiDrawStarts,De=W._multiDrawCounts,Dn=W._multiDrawCount,At=we?T.get(we).bytesPerElement:1,Rs=We.get(V).currentProgram.getUniforms();for(let Rn=0;Rn<Dn;Rn++)Rs.setValue(H,"_gl_DrawID",Rn),Ot.render(An[Rn]/At,De[Rn])}else if(W.isInstancedMesh)Ot.renderInstances(Ne,nn,W.count);else if(Y.isInstancedBufferGeometry){let An=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,De=Math.min(Y.instanceCount,An);Ot.renderInstances(Ne,nn,De)}else Ot.render(Ne,nn)};function nd(w,k,Y,V){R!==null&&w.isNodeMaterial&&R.setObject(V,w),he===!0&&Q.setState(w,Y,!1),w.transparent===!0&&w.side===bn&&w.forceSinglePass===!1?(w.side=Sn,w.needsUpdate=!0,yo(w,k,V),w.side=Di,w.needsUpdate=!0,yo(w,k,V),w.side=bn):yo(w,k,V)}this.compile=function(w,k,Y=null){Y===null&&(Y=w),R!==null&&R.renderStart(w,k,Y),_=$.get(Y),_.init(k),b.push(_),Y.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(_.pushLight(W),W.castShadow&&_.pushShadow(W))}),w!==Y&&w.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(_.pushLight(W),W.castShadow&&_.pushShadow(W))}),_.setupLights(),R!==null&&R.updateLights(_.state.lightsArray),Ae=this.localClippingEnabled,he=Q.init(this.clippingPlanes,Ae),he===!0&&Q.setGlobalState(this.clippingPlanes,k),R!==null&&me.render(_.state.shadowsArray,Y,k);let V=new Set;return w.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let Me=W.material;if(Me)if(Array.isArray(Me))for(let Ie=0;Ie<Me.length;Ie++){let _e=Me[Ie];nd(_e,Y,k,W),V.add(_e)}else nd(Me,Y,k,W),V.add(Me)}),_=b.pop(),R!==null&&R.renderEnd(),V},this.compileAsync=function(w,k,Y=null){let V=this.compile(w,k,Y);return new Promise(W=>{function Me(){if(V.forEach(function(Ie){let we=We.get(Ie).currentProgram;(we===void 0||we.isReady())&&V.delete(Ie)}),V.size===0){W(w);return}setTimeout(Me,10)}gt.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let vh=null;function F0(w){vh&&vh(w)}function id(){As.stop()}function sd(){As.start()}let As=new Sm;As.setAnimationLoop(F0),typeof self<"u"&&As.setContext(self),this.setAnimationLoop=function(w){vh=w,le.setAnimationLoop(w),w===null?As.stop():As.start()},le.addEventListener("sessionstart",id),le.addEventListener("sessionend",sd),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;R!==null&&R.renderStart(w,k);let Y=le.enabled===!0&&le.isPresenting===!0,V=N!==null&&(J===null||Y)&&N.begin(C,J);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(le.cameraAutoUpdate===!0&&le.updateCamera(k),k=le.getCamera()),w.isScene===!0&&w.onBeforeRender(C,w,k,J),_=$.get(w,b.length),_.init(k),_.state.textureUnits=Je.getTextureUnits(),b.push(_),Se.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),k.isArrayCamera?pe.setFromArrayCamera(k):ie.setFromProjectionMatrix(Se,oi,k.reversedDepth),Ae=this.localClippingEnabled,he=Q.init(this.clippingPlanes,Ae),E=ve.get(w,y.length),E.init(),y.push(E),this.info.render.frame++,le.enabled===!0&&le.isPresenting===!0){let Ie=C.xr.getDepthSensingMesh();Ie!==null&&Mh(Ie,k,-1/0,C.sortObjects)}Mh(w,k,0,C.sortObjects),E.finish(),R!==null&&R.updateLights(_.state.lightsArray),C.sortObjects===!0&&E.sort(Xe,Ht),yt=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,yt&&F.addToRenderList(E,w),this.info.autoReset===!0&&this.info.reset(),he===!0&&Q.beginShadows();let W=_.state.shadowsArray;if(me.render(W,w,k),he===!0&&Q.endShadows(),(V&&N.hasRenderPass())===!1){let Ie=E.opaque,_e=E.transmissive;if(_.setupLights(),k.isArrayCamera){let we=k.cameras;if(_e.length>0)for(let Ue=0,it=we.length;Ue<it;Ue++){let vt=we[Ue];od(Ie,_e,w,vt)}yt&&F.render(w);for(let Ue=0,it=we.length;Ue<it;Ue++){let vt=we[Ue];rd(E,w,vt,vt.viewport)}}else _e.length>0&&od(Ie,_e,w,k),yt&&F.render(w),rd(E,w,k)}J!==null&&O===0&&(Je.updateMultisampleRenderTarget(J),Je.updateRenderTargetMipmap(J)),V&&N.end(C),w.isScene===!0&&w.onAfterRender(C,w,k),fe.resetDefaultState(),G=-1,q=null,b.pop(),b.length>0?(_=b[b.length-1],Je.setTextureUnits(_.state.textureUnits),he===!0&&Q.setGlobalState(C.clippingPlanes,_.state.camera)):_=null,y.pop(),y.length>0?E=y[y.length-1]:E=null,R!==null&&R.renderEnd()};function Mh(w,k,Y,V){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)Y=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)_.pushLight(w),w.castShadow&&_.pushShadow(w);else if(w.isSprite){let Ie=k.isArrayCamera?pe:ie;if(!w.frustumCulled||w.intersectsFrustum(Ie)){V&&Fe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Se);let _e=re.update(w),we=w.material;we.visible&&E.push(w,_e,we,Y,Fe.z,null,k)}}else if(w.isMesh||w.isLine||w.isPoints){let Ie=k.isArrayCamera?pe:ie;if(!w.frustumCulled||w.intersectsFrustum(Ie)){let _e=re.update(w),we=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Fe.copy(w.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Fe.copy(_e.boundingSphere.center)),Fe.applyMatrix4(w.matrixWorld).applyMatrix4(Se)),Array.isArray(we)){let Ue=_e.groups;for(let it=0,vt=Ue.length;it<vt;it++){let Ne=Ue[it],Mt=we[Ne.materialIndex];Mt&&Mt.visible&&E.push(w,_e,Mt,Y,Fe.z,Ne,k)}}else we.visible&&E.push(w,_e,we,Y,Fe.z,null,k)}}}let Me=w.children;for(let Ie=0,_e=Me.length;Ie<_e;Ie++)Mh(Me[Ie],k,Y,V)}function rd(w,k,Y,V){let{opaque:W,transmissive:Me,transparent:Ie}=w;_.setupLightsView(Y),he===!0&&Q.setGlobalState(C.clippingPlanes,Y),V&&ye.viewport(j.copy(V)),W.length>0&&ka(W,k,Y),Me.length>0&&ka(Me,k,Y),Ie.length>0&&ka(Ie,k,Y),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function od(w,k,Y,V){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(_.state.transmissionRenderTarget[V.id]===void 0){let Ne=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");_.state.transmissionRenderTarget[V.id]=new Kn(1,1,{generateMipmaps:!0,type:Ne?Ei:Wn,minFilter:ci,samples:Math.max(4,Ut.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:dt.workingColorSpace})}let Me=_.state.transmissionRenderTarget[V.id],Ie=V.viewport||j;Me.setSize(Ie.z*C.transmissionResolutionScale,Ie.w*C.transmissionResolutionScale);let _e=C.getRenderTarget(),we=C.getActiveCubeFace(),Ue=C.getActiveMipmapLevel();C.setRenderTarget(Me),C.getClearColor(Z),de=C.getClearAlpha(),de<1&&C.setClearColor(16777215,.5),C.clear(),yt&&F.render(Y);let it=C.toneMapping;C.toneMapping=Ui;let vt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),_.setupLightsView(V),he===!0&&Q.setGlobalState(C.clippingPlanes,V),ka(w,Y,V),Je.updateMultisampleRenderTarget(Me),Je.updateRenderTargetMipmap(Me),gt.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let Mt=0,nn=k.length;Mt<nn;Mt++){let Bt=k[Mt],{object:Ot,geometry:An,material:De,group:Dn}=Bt;if(De.side===bn&&Ot.layers.test(V.layers)){let At=De.side;De.side=Sn,De.needsUpdate=!0,ad(Ot,Y,V,An,De,Dn),De.side=At,De.needsUpdate=!0,Ne=!0}}Ne===!0&&(Je.updateMultisampleRenderTarget(Me),Je.updateRenderTargetMipmap(Me))}C.setRenderTarget(_e,we,Ue),C.setClearColor(Z,de),vt!==void 0&&(V.viewport=vt),C.toneMapping=it}function ka(w,k,Y){let V=k.isScene===!0?k.overrideMaterial:null;for(let W=0,Me=w.length;W<Me;W++){let Ie=w[W],{object:_e,geometry:we,group:Ue}=Ie,it=Ie.material;it.allowOverride===!0&&V!==null&&(it=V),_e.layers.test(Y.layers)&&ad(_e,k,Y,we,it,Ue)}}function ad(w,k,Y,V,W,Me){R!==null&&W.isNodeMaterial&&R.setObject(w,W),w.onBeforeRender(C,k,Y,V,W,Me),w.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),W.onBeforeRender(C,k,Y,V,w,Me),W.transparent===!0&&W.side===bn&&W.forceSinglePass===!1?(W.side=Sn,W.needsUpdate=!0,C.renderBufferDirect(Y,k,V,W,w,Me),W.side=Di,W.needsUpdate=!0,C.renderBufferDirect(Y,k,V,W,w,Me),W.side=bn):C.renderBufferDirect(Y,k,V,W,w,Me),w.onAfterRender(C,k,Y,V,W,Me)}function ld(w){let k=0;for(let Y of w)Y.texture!==null&&k++;return k}function yo(w,k,Y){k.isScene!==!0&&(k=_t);let V=We.get(w),W=_.state.lights,Me=_.state.shadowsArray,Ie=W.state.version,_e=ne.getParameters(w,W.state,Me,k,Y,_.state.lightProbeGridArray),we=ne.getProgramCacheKey(_e),Ue=V.programs;V.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?k.environment:null,V.fog=k.fog;let it=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;V.envMap=P.get(w.envMap||V.environment,it),V.envMapRotation=V.environment!==null&&w.envMap===null?k.environmentRotation:w.envMapRotation,Ue===void 0&&(w.addEventListener("dispose",Pt),Ue=new Map,V.programs=Ue,V.programVariants=new Map);let vt=Ue.get(we);if(vt!==void 0){if(V.currentProgram===vt&&V.lightsStateVersion===Ie)return hd(w,_e),vt}else _e.uniforms=ne.getUniforms(w),R!==null&&w.isNodeMaterial&&R.build(w,Y,_e),w.onBeforeCompile(_e,C),vt=ne.acquireProgram(_e,we),Ue.set(we,vt),V.uniforms=_e.uniforms;let Ne=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ne.clippingPlanes=Q.uniform),hd(w,_e),V.needsLights=z0(w),V.lightsStateVersion=Ie,V.needsLights&&(Ne.ambientLightColor.value=W.state.ambient,Ne.lightProbe.value=W.state.probe,Ne.sunLights.value=W.state.sun,Ne.sunLightShadows.value=W.state.sunShadow,Ne.directionalLights.value=W.state.directional,Ne.directionalLightShadows.value=W.state.directionalShadow,Ne.spotLights.value=W.state.spot,Ne.spotLightShadows.value=W.state.spotShadow,Ne.rectAreaLights.value=W.state.rectArea,Ne.ltc_1.value=W.state.rectAreaLTC1,Ne.ltc_2.value=W.state.rectAreaLTC2,Ne.pointLights.value=W.state.point,Ne.pointLightShadows.value=W.state.pointShadow,Ne.hemisphereLights.value=W.state.hemi,Ne.sunShadowMatrix.value=W.state.sunShadowMatrix,Ne.sunShadowCascade.value=W.state.sunShadowCascade,Ne.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ne.spotLightMatrix.value=W.state.spotLightMatrix,Ne.spotLightMap.value=W.state.spotLightMap,Ne.pointShadowMatrix.value=W.state.pointShadowMatrix),V.numLightProbeGrids=ld(_.state.lightProbeGridArray),V.currentProgram=vt,V.uniformsList=null,vt}function B0(w,k,Y,V,W){let Me=We.get(w),Ie=Me.currentProgram.id+","+V+","+W,_e=Me.programVariants.get(Ie);return _e===void 0?(_e=yo(w,k,Y),Me.programVariants.set(Ie,_e)):(Me.currentProgram=_e,Me.uniformsList=null,Me.outputColorSpace=V,Me.toneMapping=W),_e}function cd(w){if(w.uniformsList===null){let k=w.currentProgram.getUniforms();w.uniformsList=io.seqWithValue(k.seq,w.uniforms)}return w.uniformsList}function hd(w,k){let Y=We.get(w);Y.outputColorSpace=k.outputColorSpace,Y.batching=k.batching,Y.batchingColor=k.batchingColor,Y.instancing=k.instancing,Y.instancingColor=k.instancingColor,Y.instancingMorph=k.instancingMorph,Y.skinning=k.skinning,Y.morphTargets=k.morphTargets,Y.morphNormals=k.morphNormals,Y.morphColors=k.morphColors,Y.morphTargetsCount=k.morphTargetsCount,Y.numClippingPlanes=k.numClippingPlanes,Y.numIntersection=k.numClipIntersection,Y.vertexAlphas=k.vertexAlphas,Y.vertexTangents=k.vertexTangents,Y.toneMapping=k.toneMapping}function k0(w,k,Y,V,W){k.isScene!==!0&&(k=_t),Je.resetTextureUnits();let Me=k.fog,Ie=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?k.environment:null,_e=J===null?C.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:dt.workingColorSpace,we=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ue=P.get(V.envMap||Ie,we),it=V.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,vt=!!Y.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ne=!!Y.morphAttributes.position,Mt=!!Y.morphAttributes.normal,nn=!!Y.morphAttributes.color,Bt=Ui;V.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Bt=C.toneMapping);let Ot=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,An=Ot!==void 0?Ot.length:0,De=We.get(V),Dn=_.state.lights;if(he===!0&&(Ae===!0||w!==q)){let Xt=w===q&&V.id===G;Q.setState(V,w,Xt)}let At=!1,Rs=!1;V.version===De.__version?De.needsLights&&De.lightsStateVersion!==Dn.state.version||W.isBatchedMesh&&De.batching===!1||!W.isBatchedMesh&&De.batching===!0||W.isBatchedMesh&&De.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&De.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&De.instancing===!1||!W.isInstancedMesh&&De.instancing===!0||W.isSkinnedMesh&&De.skinning===!1||!W.isSkinnedMesh&&De.skinning===!0||W.isInstancedMesh&&De.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&De.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&De.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&De.instancingMorph===!1&&W.morphTexture!==null||De.envMap!==Ue||V.fog===!0&&De.fog!==Me||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==Q.numPlanes||De.numIntersection!==Q.numIntersection)||De.vertexAlphas!==it||De.vertexTangents!==vt||De.morphTargets!==Ne||De.morphNormals!==Mt||De.morphColors!==nn||De.morphTargetsCount!==An||De.numLightProbeGrids!==ld(_.state.lightProbeGridArray)?At=!0:(De.outputColorSpace!==_e||De.toneMapping!==Bt)&&(Rs=!0):(At=!0,De.__version=V.version);let Rn=De.currentProgram;(At===!0||Rs===!0)&&(Rn=Rs===!0?B0(V,k,W,_e,Bt):yo(V,k,W),R&&V.isNodeMaterial&&R.onUpdateProgram(V,Rn,De));let Ha=!1,fs=!1,Cs=!1,St=Rn.getUniforms(),_n=De.uniforms;if(ye.useProgram(Rn.program)&&(Ha=!0,fs=!0,Cs=!0),V.id!==G&&(G=V.id,fs=!0),Ha||q!==w){ye.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),St.setValue(H,"projectionMatrix",w.projectionMatrix),St.setValue(H,"viewMatrix",w.matrixWorldInverse);let pn=St.map.cameraPosition;pn!==void 0&&pn.setValue(H,rt.setFromMatrixPosition(w.matrixWorld)),Ut.logarithmicDepthBuffer&&St.setValue(H,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&St.setValue(H,"isOrthographic",w.isOrthographicCamera===!0),q!==w&&(q=w,fs=!0,Cs=!0)}if(De.needsLights&&(Dn.state.sunShadowMap.length>0&&St.setValue(H,"sunShadowMap",Dn.state.sunShadowMap,Je),Dn.state.directionalShadowMap.length>0&&St.setValue(H,"directionalShadowMap",Dn.state.directionalShadowMap,Je),Dn.state.spotShadowMap.length>0&&St.setValue(H,"spotShadowMap",Dn.state.spotShadowMap,Je),Dn.state.pointShadowMap.length>0&&St.setValue(H,"pointShadowMap",Dn.state.pointShadowMap,Je)),W.isSkinnedMesh){St.setOptional(H,W,"bindMatrix"),St.setOptional(H,W,"bindMatrixInverse");let Xt=W.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),St.setValue(H,"boneTexture",Xt.boneTexture,Je))}W.isBatchedMesh&&(St.setOptional(H,W,"batchingTexture"),St.setValue(H,"batchingTexture",W._matricesTexture,Je),St.setOptional(H,W,"batchingIdTexture"),St.setValue(H,"batchingIdTexture",W._indirectTexture,Je),St.setOptional(H,W,"batchingColorTexture"),W._colorsTexture!==null&&St.setValue(H,"batchingColorTexture",W._colorsTexture,Je));let xi=Y.morphAttributes;if((xi.position!==void 0||xi.normal!==void 0||xi.color!==void 0)&&te.update(W,Y,Rn),(fs||De.receiveShadow!==W.receiveShadow)&&(De.receiveShadow=W.receiveShadow,St.setValue(H,"receiveShadow",W.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&k.environment!==null&&(_n.envMapIntensity.value=k.environmentIntensity),_n.dfgLUT!==void 0&&(_n.dfgLUT.value=n1()),fs){if(St.setValue(H,"toneMappingExposure",C.toneMappingExposure),De.needsLights&&H0(_n,Cs),Me&&V.fog===!0&&ue.refreshFogUniforms(_n,Me),ue.refreshMaterialUniforms(_n,V,be,He,_.state.transmissionRenderTarget[w.id]),De.needsLights&&De.numLightProbeGrids>0){let Xt=M,pn=0;for(let Gi of _.state.lightProbeGridArray)Gi.texture!==null&&(Xt.textures[pn]=Gi.texture,Xt.min[pn]=Gi.boundingBox.min,Xt.max[pn]=Gi.boundingBox.max,Xt.resolution[pn]=Gi.resolution,pn++);for(let Gi in Xt)Xt[Gi].length=pn;_n.probesSH.value=Xt.textures,_n.probesMin.value=Xt.min,_n.probesMax.value=Xt.max,_n.probesResolution.value=Xt.resolution}io.upload(H,cd(De),_n,Je)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(io.upload(H,cd(De),_n,Je),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&St.setValue(H,"center",W.center),St.setValue(H,"modelViewMatrix",W.modelViewMatrix),St.setValue(H,"normalMatrix",W.normalMatrix),St.setValue(H,"modelMatrix",W.matrixWorld),V.uniformsGroups!==void 0){let Xt=V.uniformsGroups;for(let pn=0,Gi=Xt.length;pn<Gi;pn++){let fd=Xt[pn];Be.update(fd,Rn),Be.bind(fd,Rn)}}return Rn}function H0(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.sunLights.needsUpdate=k,w.sunLightShadows.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function z0(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(w,k,Y){let V=We.get(w);V.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),We.get(w.texture).__webglTexture=k,We.get(w.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:Y,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,k){let Y=We.get(w);Y.__webglFramebuffer=k,Y.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(w,k=0,Y=0){J=w,A=k,O=Y;let V=null,W=!1,Me=!1;if(w){let _e=We.get(w);if(_e.__useDefaultFramebuffer!==void 0){ye.bindFramebuffer(H.FRAMEBUFFER,_e.__webglFramebuffer),j.copy(w.viewport),ae.copy(w.scissor),Ce=w.scissorTest,ye.viewport(j),ye.scissor(ae),ye.setScissorTest(Ce),G=-1;return}else if(_e.__webglFramebuffer===void 0)Je.setupRenderTarget(w);else if(_e.__hasExternalTextures)Je.rebindTextures(w,We.get(w.texture).__webglTexture,We.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let it=w.depthTexture;if(_e.__boundDepthTexture!==it){if(it!==null&&We.has(it)&&(w.width!==it.image.width||w.height!==it.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Je.setupDepthRenderbuffer(w)}}let we=w.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(Me=!0);let Ue=We.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ue[k])?V=Ue[k][Y]:V=Ue[k],W=!0):w.samples>0&&Je.useMultisampledRTT(w)===!1?V=We.get(w).__webglMultisampledFramebuffer:Array.isArray(Ue)?V=Ue[Y]:V=Ue,j.copy(w.viewport),ae.copy(w.scissor),Ce=w.scissorTest}else j.copy(qe).multiplyScalar(be).floor(),ae.copy(ft).multiplyScalar(be).floor(),Ce=xt;if(Y!==0&&(V=U),ye.bindFramebuffer(H.FRAMEBUFFER,V)&&ye.drawBuffers(w,V),ye.viewport(j),ye.scissor(ae),ye.setScissorTest(Ce),W){let _e=We.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+k,_e.__webglTexture,Y)}else if(Me){let _e=k;for(let we=0;we<w.textures.length;we++){let Ue=We.get(w.textures[we]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+we,Ue.__webglTexture,Y,_e)}}else if(w!==null&&Y!==0){let _e=We.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,_e.__webglTexture,Y)}G=-1};function ud(w){let k=We.get(w);return(k.__readFormat!==w.format||k.__readType!==w.type)&&(k.__readFormat=w.format,k.__readType=w.type,k.__formatReadable=Ut.textureFormatReadable(w.format),k.__typeReadable=Ut.textureTypeReadable(w.type)),k}this.readRenderTargetPixels=function(w,k,Y,V,W,Me,Ie,_e=0){if(!(w&&w.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=We.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ie!==void 0&&(we=we[Ie],Array.isArray(we)&&(we=we[0])),we){ye.bindFramebuffer(H.FRAMEBUFFER,we);try{let Ue=w.textures[_e],it=Ue.format,vt=Ue.type;w.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+_e);let Ne=ud(Ue);if(Ne.__formatReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ne.__typeReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-V&&Y>=0&&Y<=w.height-W&&H.readPixels(k,Y,V,W,ce.convert(it),ce.convert(vt),Me)}finally{let Ue=J!==null?We.get(J).__webglFramebuffer:null;ye.bindFramebuffer(H.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(w,k,Y,V,W,Me,Ie,_e=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=We.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ie!==void 0&&(we=we[Ie],Array.isArray(we)&&(we=we[0])),we)if(k>=0&&k<=w.width-V&&Y>=0&&Y<=w.height-W){ye.bindFramebuffer(H.FRAMEBUFFER,we);let Ue=w.textures[_e],it=Ue.format,vt=Ue.type;w.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+_e);let Ne=ud(Ue);if(Ne.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ne.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Mt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Mt),H.bufferData(H.PIXEL_PACK_BUFFER,Me.byteLength,H.STREAM_READ),H.readPixels(k,Y,V,W,ce.convert(it),ce.convert(vt),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let nn=J!==null?We.get(J).__webglFramebuffer:null;ye.bindFramebuffer(H.FRAMEBUFFER,nn);let Bt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Xp(H,Bt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Mt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Me),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(Mt),H.deleteSync(Bt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,k=null,Y=0){let V=Math.pow(2,-Y),W=Math.floor(w.image.width*V),Me=Math.floor(w.image.height*V),Ie=k!==null?k.x:0,_e=k!==null?k.y:0;Je.setTexture2D(w,0),H.copyTexSubImage2D(H.TEXTURE_2D,Y,0,0,Ie,_e,W,Me),ye.unbindTexture()},this.copyTextureToTexture=function(w,k,Y=null,V=null,W=0,Me=0){let Ie,_e,we,Ue,it,vt,Ne,Mt,nn,Bt=w.isCompressedTexture?w.mipmaps[Me]:w.image;if(Y!==null)Ie=Y.max.x-Y.min.x,_e=Y.max.y-Y.min.y,we=Y.isBox3?Y.max.z-Y.min.z:1,Ue=Y.min.x,it=Y.min.y,vt=Y.isBox3?Y.min.z:0;else{let St=Math.pow(2,-W);Ie=Math.floor(Bt.width*St),_e=Math.floor(Bt.height*St),w.isDataArrayTexture?we=Bt.depth:w.isData3DTexture?we=Math.floor(Bt.depth*St):we=1,Ue=0,it=0,vt=0}V!==null?(Ne=V.x,Mt=V.y,nn=V.z):(Ne=0,Mt=0,nn=0);let Ot=ce.convert(k.format),An=ce.convert(k.type),De;k.isData3DTexture?(Je.setTexture3D(k,0),De=H.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Je.setTexture2DArray(k,0),De=H.TEXTURE_2D_ARRAY):(Je.setTexture2D(k,0),De=H.TEXTURE_2D),ye.activeTexture(H.TEXTURE0),ye.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,k.flipY),ye.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),ye.pixelStorei(H.UNPACK_ALIGNMENT,k.unpackAlignment);let Dn=ye.getParameter(H.UNPACK_ROW_LENGTH),At=ye.getParameter(H.UNPACK_IMAGE_HEIGHT),Rs=ye.getParameter(H.UNPACK_SKIP_PIXELS),Rn=ye.getParameter(H.UNPACK_SKIP_ROWS),Ha=ye.getParameter(H.UNPACK_SKIP_IMAGES);ye.pixelStorei(H.UNPACK_ROW_LENGTH,Bt.width),ye.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Bt.height),ye.pixelStorei(H.UNPACK_SKIP_PIXELS,Ue),ye.pixelStorei(H.UNPACK_SKIP_ROWS,it),ye.pixelStorei(H.UNPACK_SKIP_IMAGES,vt);let fs=w.isDataArrayTexture||w.isData3DTexture,Cs=k.isDataArrayTexture||k.isData3DTexture;if(w.isDepthTexture){let St=We.get(w),_n=We.get(k),xi=We.get(St.__renderTarget),Xt=We.get(_n.__renderTarget);ye.bindFramebuffer(H.READ_FRAMEBUFFER,xi.__webglFramebuffer),ye.bindFramebuffer(H.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer);for(let pn=0;pn<we;pn++)fs&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,We.get(w).__webglTexture,W,vt+pn),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,We.get(k).__webglTexture,Me,nn+pn)),H.blitFramebuffer(Ue,it,Ue+Ie,it+_e,Ne,Mt,Ne+Ie,Mt+_e,H.DEPTH_BUFFER_BIT,H.NEAREST);ye.bindFramebuffer(H.READ_FRAMEBUFFER,null),ye.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(W!==0||w.isRenderTargetTexture||We.has(w)){let St=We.get(w),_n=We.get(k);ye.bindFramebuffer(H.READ_FRAMEBUFFER,I),ye.bindFramebuffer(H.DRAW_FRAMEBUFFER,B);for(let xi=0;xi<we;xi++)fs?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,St.__webglTexture,W,vt+xi):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,St.__webglTexture,W),Cs?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,_n.__webglTexture,Me,nn+xi):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,_n.__webglTexture,Me),W!==0?H.blitFramebuffer(Ue,it,Ue+Ie,it+_e,Ne,Mt,Ne+Ie,Mt+_e,H.COLOR_BUFFER_BIT,H.NEAREST):Cs?H.copyTexSubImage3D(De,Me,Ne,Mt,nn+xi,Ue,it,Ie,_e):H.copyTexSubImage2D(De,Me,Ne,Mt,Ue,it,Ie,_e);ye.bindFramebuffer(H.READ_FRAMEBUFFER,null),ye.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Cs?w.isDataTexture||w.isData3DTexture?H.texSubImage3D(De,Me,Ne,Mt,nn,Ie,_e,we,Ot,An,Bt.data):k.isCompressedArrayTexture?H.compressedTexSubImage3D(De,Me,Ne,Mt,nn,Ie,_e,we,Ot,Bt.data):H.texSubImage3D(De,Me,Ne,Mt,nn,Ie,_e,we,Ot,An,Bt):w.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Me,Ne,Mt,Ie,_e,Ot,An,Bt.data):w.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Me,Ne,Mt,Bt.width,Bt.height,Ot,Bt.data):H.texSubImage2D(H.TEXTURE_2D,Me,Ne,Mt,Ie,_e,Ot,An,Bt);ye.pixelStorei(H.UNPACK_ROW_LENGTH,Dn),ye.pixelStorei(H.UNPACK_IMAGE_HEIGHT,At),ye.pixelStorei(H.UNPACK_SKIP_PIXELS,Rs),ye.pixelStorei(H.UNPACK_SKIP_ROWS,Rn),ye.pixelStorei(H.UNPACK_SKIP_IMAGES,Ha),Me===0&&k.generateMipmaps===!0&&k.mipmapsAutoUpdate===!0&&H.generateMipmap(De),ye.unbindTexture()},this.initRenderTarget=function(w){We.get(w).__webglFramebuffer===void 0&&Je.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Je.setTextureCube(w,0):w.isData3DTexture?Je.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Je.setTexture2DArray(w,0):Je.setTexture2D(w,0),ye.unbindTexture()},this.resetState=function(){A=0,O=0,J=null,ye.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}};function oo(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Rt;l.morphTargetsRelative=a;let c=0;for(let h=0;h<i.length;++h){let u=i[h],f=0,d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[p].length!==i[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p]),d++}if(d!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0,u=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let p=0;p<d.count;++p)u.push(d.getX(p)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Nm(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][f]);let p=Nm(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function Nm(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new Dt(o,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let f=0,d=h.count;f<d;f++)for(let p=0;p<t;p++){let x=h.getComponent(f,p);a.setComponent(f+u,p,x)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function nf(i,e){if(e===wu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===to||e===Ra){let t=i.getIndex();if(t===null){let r=[],o=i.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===to)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Dm=new Ve,Um=new kt,Om=new yn,Fm=new L,Bm=new L;function Qe(i,e,t=0,n=0,s=0,r=0,o=0,a=0,l=1,c=1,h=1){let u=i.index?i.toNonIndexed():i.clone();Om.set(r,o,a),Um.setFromEuler(Om),Bm.set(t,n,s),Fm.set(l,c,h),Dm.compose(Bm,Um,Fm),u.applyMatrix4(Dm);let f=new xe(e),d=u.attributes.position.count,p=new Float32Array(d*3);for(let x=0;x<d;x++)p[x*3]=f.r,p[x*3+1]=f.g,p[x*3+2]=f.b;return u.setAttribute("color",new Dt(p,3)),u.attributes.uv||u.setAttribute("uv",new Dt(new Float32Array(d*2),2)),u}function qn(i){return oo(i,!1)}var Qn=new ke(1,1,1),en=(i,e,t,n=7)=>new Ye(i,e,t,n),ls=(i,e=0)=>new Pi(i,e),sf=(i,e,t=6)=>new Vn(i,e,t),km={tree:()=>qn([Qe(en(.16,.22,2.6),"#6b4a2e",0,1.3,0),Qe(ls(1.6,1),"#4f8f3a",0,3.4,0,0,0,0,1,.9,1),Qe(ls(1.1,1),"#5fa244",.6,4.1,.3),Qe(ls(1,1),"#467f33",-.7,3.7,-.4)]),palm:()=>{let i=[Qe(en(.16,.24,3.2),"#9c7a52",0,1.6,0,0,0,.05),Qe(en(.12,.16,3.2),"#a78457",.16,4.7,0,0,0,.12),Qe(ls(.35,0),"#7a5a33",.36,6.3,0)];for(let e=0;e<8;e++){let t=e/8*Math.PI*2;i.push(Qe(sf(.35,3.2,4),e%2?"#3f8f3a":"#4ea545",.36+Math.cos(t)*1.4,6,Math.sin(t)*1.4,Math.sin(t)*1.25,0,-Math.cos(t)*1.25,1,1,.25))}return qn(i)},car:()=>qn([Qe(Qn,"#ffffff",0,.62,0,0,0,0,1.8,.7,4.3),Qe(Qn,"#ffffff",0,1.18,-.15,0,0,0,1.6,.55,2.2),Qe(Qn,"#26313d",0,1.2,-.15,0,0,0,1.64,.4,2),Qe(en(.34,.34,.25,6),"#151515",.85,.34,1.35,0,0,Math.PI/2),Qe(en(.34,.34,.25,6),"#151515",-.85,.34,1.35,0,0,Math.PI/2),Qe(en(.34,.34,.25,6),"#151515",.85,.34,-1.35,0,0,Math.PI/2),Qe(en(.34,.34,.25,6),"#151515",-.85,.34,-1.35,0,0,Math.PI/2)]),lamp:()=>qn([Qe(en(.07,.1,6,6),"#3b4148",0,3,0),Qe(Qn,"#3b4148",.6,6,0,0,0,0,1.3,.1,.12),Qe(Qn,"#fff4c8",1.15,5.9,0,0,0,0,.45,.14,.3)]),waterTower:()=>{let i=[Qe(en(1.6,1.6,3.2,10),"#7a5638",0,4.2,0),Qe(sf(1.75,1.3,10),"#4a3a2c",0,6.45,0)];for(let[e,t]of[[1,1],[-1,1],[1,-1],[-1,-1]])i.push(Qe(en(.07,.07,2.6,4),"#3a2f28",e*1.1,1.3,t*1.1));return qn(i)},sage:()=>qn([Qe(ls(.6,0),"#8a9a6a",0,.35,0,0,0,0,1,.6,1),Qe(ls(.45,0),"#77885a",.4,.3,.2)]),joshua:()=>{let i=[Qe(en(.18,.26,3,5),"#7b6a4f",0,1.5,0)];for(let e=0;e<4;e++){let t=e*1.7,n=Math.cos(t)*.7,s=Math.sin(t)*.7;i.push(Qe(en(.11,.14,1.6,5),"#7b6a4f",n*.6,3.2,s*.6,s*.8,0,-n*.8)),i.push(Qe(ls(.4,0),"#5a7a3e",n*1.2,4,s*1.2,0,0,0,.8,1.3,.8))}return qn(i)},rock:()=>qn([Qe(ls(1,0),"#a6876a",0,.4,0,0,0,0,1.3,.7,1),Qe(ls(.6,0),"#957659",.8,.25,.4)]),cactus:()=>qn([Qe(en(.25,.3,3,7),"#4c8a4a",0,1.5,0),Qe(en(.15,.15,1.1,6),"#4c8a4a",.5,1.7,0,0,0,Math.PI/2),Qe(en(.15,.15,1,6),"#4c8a4a",.95,2.2,0)]),bench:()=>qn([Qe(Qn,"#7a5a3a",0,.45,0,0,0,0,1.8,.08,.5),Qe(Qn,"#7a5a3a",0,.75,-.23,0,0,0,1.8,.4,.06),Qe(Qn,"#333",.8,.22,0,0,0,0,.08,.45,.45),Qe(Qn,"#333",-.8,.22,0,0,0,0,.08,.45,.45)]),umbrella:()=>qn([Qe(en(.04,.04,2.3,5),"#ddd",0,1.15,0),Qe(sf(1.4,.6,8),"#ffffff",0,2.35,0),Qe(en(.5,.5,.05,8),"#eee",0,.75,0),Qe(en(.05,.05,.75,5),"#ccc",0,.37,0)]),flood:()=>qn([Qe(en(.12,.16,9,6),"#555b63",0,4.5,0),Qe(Qn,"#3a3f45",0,9,0,0,0,0,1.6,.6,.4),Qe(Qn,"#fffbe8",0,9,.21,0,0,0,1.4,.45,.02)]),ac:()=>qn([Qe(Qn,"#b8bcc0",0,.7,0,0,0,0,2.4,1.4,1.8),Qe(en(.6,.6,.1,10),"#555",0,1.42,.2)]),flag:()=>qn([Qe(en(.04,.05,7,5),"#ccc",0,3.5,0),Qe(Qn,"#ffffff",.62,6.4,0,0,0,0,1.2,.8,.03)])};var rf=class{constructor(){this.p=[],this.n=[],this.uv=[],this.c=[],this.i=[]}quad(e,t,n,s,r,o){let a=this.p.length/3,l=t[0]-e[0],c=t[1]-e[1],h=t[2]-e[2],u=n[0]-e[0],f=n[1]-e[1],d=n[2]-e[2],p=c*d-h*f,x=h*u-l*d,m=l*f-c*u,g=Math.hypot(p,x,m)||1;p/=g,x/=g,m/=g;for(let v of[e,t,n,s])this.p.push(v[0],v[1],v[2]),this.n.push(p,x,m),this.c.push(r.r,r.g,r.b);for(let v=0;v<8;v++)this.uv.push(o?o[v]:.01);this.i.push(a,a+1,a+2,a,a+2,a+3)}tri(e,t,n,s){let r=this.p.length/3,o=t[0]-e[0],a=t[1]-e[1],l=t[2]-e[2],c=n[0]-e[0],h=n[1]-e[1],u=n[2]-e[2],f=a*u-l*h,d=l*c-o*u,p=o*h-a*c,x=Math.hypot(f,d,p)||1;f/=x,d/=x,p/=x;for(let m of[e,t,n])this.p.push(m[0],m[1],m[2]),this.n.push(f,d,p),this.c.push(s.r,s.g,s.b),this.uv.push(.01,.01);this.i.push(r,r+1,r+2)}geometry(){let e=new Rt;return e.setAttribute("position",new $e(this.p,3)),e.setAttribute("normal",new $e(this.n,3)),e.setAttribute("uv",new $e(this.uv,2)),e.setAttribute("color",new $e(this.c,3)),e.setIndex(this.i),e.computeBoundingSphere(),e}get empty(){return this.i.length===0}},zm=160,of=(i,e,t=zm)=>Math.floor(i/t)+","+Math.floor(e/t),i1=zm*3,rr=class{constructor(){this.cells=new Map}_cell(e,t){let n=of(e,t),s=this.cells.get(n);return s||(s=new rf,this.cells.set(n,s)),s}quad(e,t,n,s,r,o){this._cell((e[0]+n[0])/2,(e[2]+n[2])/2).quad(e,t,n,s,r,o)}tri(e,t,n,s){this._cell((e[0]+t[0]+n[0])/3,(e[2]+t[2]+n[2])/3).tri(e,t,n,s)}geometries(){let e=[];for(let t of this.cells.values())t.empty||e.push(t.geometry());return e}get empty(){for(let e of this.cells.values())if(!e.empty)return!1;return!0}};function jt(i,e,t,n=!0){let s=document.createElement("canvas");s.width=i,s.height=e,t(s.getContext("2d"),i,e);let r=new Ws(s);return r.colorSpace=Wt,n&&(r.wrapS=r.wrapT=Ii),r.anisotropy=4,r}function Gm(i){let e=i>0?i%2147483647:1;return()=>(e=e*16807%2147483647)/2147483647}function Hm(i,e){let t=Gm(i==="glass"?7:3),n=[];for(let o=0;o<16;o++)n.push(t()<e);let s=jt(256,256,o=>{o.fillStyle="#ffffff",o.fillRect(0,0,256,256);for(let a=0;a<16;a++){let l=a%4*64,c=Math.floor(a/4)*64,h=40+Math.floor(t()*30);if(i==="glass"){let u=o.createLinearGradient(l,c,l+64,c+64);u.addColorStop(0,`rgb(${h+60},${h+90},${h+120})`),u.addColorStop(1,`rgb(${h},${h+30},${h+60})`),o.fillStyle=u,o.fillRect(l+3,c+6,58,54)}else o.fillStyle=`rgb(${h},${h+12},${h+28})`,o.fillRect(l+16,c+14,32,38),o.fillStyle="rgba(255,255,255,.18)",o.fillRect(l+16,c+14,32,5),o.fillStyle="rgba(0,0,0,.12)",o.fillRect(l+12,c+52,40,4)}}),r=jt(256,256,o=>{o.fillStyle="#000",o.fillRect(0,0,256,256);for(let a=0;a<16;a++){if(!n[a])continue;let l=a%4*64,c=Math.floor(a/4)*64;o.fillStyle=a%3?"#ffd79a":"#fff1cf",i==="glass"?o.fillRect(l+3,c+6,58,54):o.fillRect(l+16,c+14,32,38)}});return{map:s,emi:r}}var Wc=class{constructor(e,t){this.scene=e,this.cfg=t,this.root=new ct,e.add(this.root),this.boxes=[],this.grid=new Map,this.CELL=16,this.water=[],this.bridges=[],this.loops=[],this.plazas=[],this.mapOps=[],this.ground=new rr,this.masonry=new rr,this.glass=new rr,this.flat=new rr,this.props={},this.disposables=[],this.anim=[],this.bounds=t.bounds,this.R=Gm(t.seed||1),this.winLit=t.winLit||0}rand(e=0,t=1){return e+(t-e)*this.R()}pick(e){return e[Math.floor(this.R()*e.length)]}addBox(e,t,n,s,r,o=0){n<e&&([e,n]=[n,e]),s<t&&([t,s]=[s,t]);let a={x0:e,z0:t,x1:n,z1:s,y0:o,y1:r};this.boxes.push(a);let l=this.CELL;for(let c=Math.floor(e/l);c<=Math.floor(n/l);c++)for(let h=Math.floor(t/l);h<=Math.floor(s/l);h++){let u=c*100003+h,f=this.grid.get(u);f||this.grid.set(u,f=[]),f.push(a)}return a}near(e,t,n=2){let s=this.CELL,r=new Set;for(let o=Math.floor((e-n)/s);o<=Math.floor((e+n)/s);o++)for(let a=Math.floor((t-n)/s);a<=Math.floor((t+n)/s);a++){let l=this.grid.get(o*100003+a);if(l)for(let c of l)r.add(c)}return r}solid(e,t,n){for(let s of this.near(e,n,.1))if(e>s.x0&&e<s.x1&&n>s.z0&&n<s.z1&&t>s.y0&&t<s.y1)return!0;return!1}groundAt(e,t,n,s=.25,r=.45){let o=0;for(let a of this.near(e,t,s))e+s*.6>a.x0&&e-s*.6<a.x1&&t+s*.6>a.z0&&t-s*.6<a.z1&&a.y1<=n+r&&a.y1>o&&(o=a.y1);return o}ceilingAt(e,t,n,s,r=.25){let o=1/0;for(let a of this.near(e,t,r))e+r>a.x0&&e-r<a.x1&&t+r>a.z0&&t-r<a.z1&&a.y0>=n+.2&&a.y0<o&&(o=a.y0);return o}pushOut(e,t,n,s=.45){let r=!1;for(let h of this.near(e.x,e.z,t+1)){if(e.y>=h.y1-s||e.y+n<=h.y0)continue;let u=Math.max(h.x0,Math.min(e.x,h.x1)),f=Math.max(h.z0,Math.min(e.z,h.z1)),d=e.x-u,p=e.z-f,x=d*d+p*p;if(!(x>=t*t))if(r=!0,x>1e-8){let m=Math.sqrt(x),g=(t-m)/m;e.x+=d*g,e.z+=p*g}else{let m=e.x-h.x0,g=h.x1-e.x,v=e.z-h.z0,S=h.z1-e.z,M=Math.min(m,g,v,S);M===m?e.x=h.x0-t:M===g?e.x=h.x1+t:M===v?e.z=h.z0-t:e.z=h.z1+t}}let[o,a,l,c]=this.bounds;return e.x<o+t&&(e.x=o+t,r=!0),e.x>l-t&&(e.x=l-t,r=!0),e.z<a+t&&(e.z=a+t,r=!0),e.z>c-t&&(e.z=c-t,r=!0),r}clearLine(e,t,n,s,r,o){let a=Math.hypot(s-e,o-n),l=Math.max(1,Math.ceil(a/2.5));for(let c=1;c<l;c++){let h=c/l,u=e+(s-e)*h,f=t+(r-t)*h,d=n+(o-n)*h;if(this.solid(u,f,d))return!1}return!0}wallDist(e,t,n,s=3){let r=1/0;for(let o of this.near(e,n,s+1)){if(o.y1<t+1.2||o.y0>t+.4)continue;let a=Math.max(o.x0,Math.min(e,o.x1)),l=Math.max(o.z0,Math.min(n,o.z1)),c=Math.hypot(e-a,n-l);c<r&&(r=c)}return r}enclosed(e,t,n,s=4.5){if(this.wallDist(e,t,n,2)<=1.3)return!0;let r=t+.9,o=(a,l)=>{for(let c=.7;c<=s;c+=.95)if(this.solid(e+a*c,r,n+l*c))return!0;return!1};return o(1,0)&&o(-1,0)||o(0,1)&&o(0,-1)}inWater(e,t){for(let n of this.bridges)if(e>n[0]&&e<n[2]&&t>n[1]&&t<n[3])return!1;for(let n of this.water)if(e>n[0]&&e<n[2]&&t>n[1]&&t<n[3])return!0;return!1}rect(e,t,n,s,r,o,a=!0,l=this.ground){let c=new xe(o);l.quad([e,r,s],[n,r,s],[n,r,t],[e,r,t],c),a&&this.mapOps.push({t:"r",x0:e,z0:t,x1:n,z1:s,c:a===!0?o:a})}poly(e,t,n,s=!0){let r=new xe(n);for(let o=1;o<e.length-1;o++){let a=[e[0][0],t,e[0][1]],l=[e[o][0],t,e[o][1]],c=[e[o+1][0],t,e[o+1][1]];(l[0]-a[0])*(c[2]-a[2])-(l[2]-a[2])*(c[0]-a[0])<0?this.ground.tri(a,l,c,r):this.ground.tri(a,c,l,r)}s&&this.mapOps.push({t:"p",pts:e,c:s===!0?n:s})}road(e,t,n,s,r={}){let o=r.color||this.cfg.asphalt||"#3a3d42";if(this.rect(e,t,n,s,.02,o,this.cfg.mapRoad||"#5b6270"),r.paint===!1)return;let a=n-e>s-t,l=r.paintColor||"#e8d36a";if(a){let c=(t+s)/2;for(let h=e+2;h<n-4;h+=9)this.rect(h,c-.12,h+4,c+.12,.035,l,!1)}else{let c=(e+n)/2;for(let h=t+2;h<s-4;h+=9)this.rect(c-.12,h,c+.12,h+4,.035,l,!1)}}roadSeg(e,t,n,s,r,o={}){let a=n-e,l=s-t,c=Math.hypot(a,l),h=-l/c*r/2,u=a/c*r/2;if(this.poly([[e+h,t+u],[n+h,s+u],[n-h,s-u],[e-h,t-u]],o.y||.025,o.color||this.cfg.asphalt||"#3a3d42",o.map||this.cfg.mapRoad||"#5b6270"),o.paint!==!1){let f=a/c,d=l/c;for(let p=2;p<c-4;p+=10){let x=[e+f*p,t+d*p],m=[e+f*(p+4),t+d*(p+4)],g=-d*.12,v=f*.12;this.poly([[x[0]+g,x[1]+v],[m[0]+g,m[1]+v],[m[0]-g,m[1]-v],[x[0]-g,x[1]-v]],(o.y||.025)+.012,o.paintColor||"#e8d36a",!1)}}}crosswalk(e,t,n,s){for(let r=-n/2+.8;r<n/2-.8;r+=1.6)s==="x"?this.rect(e+r-.4,t-2,e+r+.4,t+2,.04,"#e9e9e4",!1):this.rect(e-2,t+r-.4,e+2,t+r+.4,.04,"#e9e9e4",!1)}park(e,t,n,s,r={}){this.rect(e,t,n,s,.03,r.color||"#5e9a48",r.map||"#4d7f3c");let o=r.trees??Math.floor((n-e)*(s-t)/900);for(let a=0;a<o;a++){let l=this.rand(e+3,n-3),c=this.rand(t+3,s-3);r.avoid&&r.avoid.some(h=>l>h[0]&&l<h[2]&&c>h[1]&&c<h[3])||this.prop(r.palms?"palm":"tree",l,c,this.rand(0,6.28),this.rand(.8,1.25))}r.plaza!==!1&&this.plazas.push({r:[e+2,t+2,n-2,s-2],n:r.people??Math.ceil((n-e)*(s-t)/2500)})}plaza(e,t,n,s,r,o=10,a){r&&this.rect(e,t,n,s,.03,r,a||r),this.plazas.push({r:[e,t,n,s],n:o})}waterRect(e,t,n,s,r){this.water.push([e,t,n,s]);let o=new xe(r||this.cfg.waterColor||"#2f6f9a");this.waterBuf=this.waterBuf||new rr,this.waterBuf.quad([e,.05,s],[n,.05,s],[n,.05,t],[e,.05,t],o),this.mapOps.push({t:"r",x0:e,z0:t,x1:n,z1:s,c:"#2d6b96"})}bridge(e,t,n,s,r="#55606a"){this.bridges.push([e,t,n,s]),this.rect(e,t,n,s,.12,this.cfg.asphalt||"#3a3d42",this.cfg.mapRoad||"#5b6270"),n-e>s-t?(this.solidBox(e,t,n,t+.4,1.1,r),this.solidBox(e,s-.4,n,s,1.1,r)):(this.solidBox(e,t,e+.4,s,1.1,r),this.solidBox(n-.4,t,n,s,1.1,r))}boxMesh(e,t,n,s,r,o,a,l="masonry",c={}){let h=l==="glass"?this.glass:l==="flat"?this.flat:this.masonry,u=new xe(a),f=u.clone().multiplyScalar(c.roofMul??.78),d=l==="glass"?13:14,p=l==="glass"?14:14.4,x=l==="flat"?0:1,m=_=>_/d*x,g=r/p*x,v=o/p*x,S=c.uOff||0,M=n-e,E=s-t;h.quad([e,r,s],[n,r,s],[n,o,s],[e,o,s],u,[S,g,S+m(M),g,S+m(M),v,S,v]),h.quad([n,r,t],[e,r,t],[e,o,t],[n,o,t],u,[S,g,S+m(M),g,S+m(M),v,S,v]),h.quad([n,r,s],[n,r,t],[n,o,t],[n,o,s],u,[S,g,S+m(E),g,S+m(E),v,S,v]),h.quad([e,r,t],[e,r,s],[e,o,s],[e,o,t],u,[S,g,S+m(E),g,S+m(E),v,S,v]),c.noTop||h.quad([e,o,s],[n,o,s],[n,o,t],[e,o,t],f),c.bottom&&h.quad([e,r,t],[n,r,t],[n,r,s],[e,r,s],f),c.collide!==!1&&this.addBox(e,t,n,s,o,r)}solidBox(e,t,n,s,r,o,a=0,l=!0){this.boxMesh(e,t,n,s,a,a+r,o,"flat",{collide:l})}building(e,t,n,s,r,o={}){let a=o.style||(r>70&&this.R()<.55?"glass":"masonry"),l=o.color||this.pick(this.cfg.palette[a]||this.cfg.palette.masonry),c=n-e,h=s-t,u=Math.floor(this.R()*4)/4;if(r>55&&o.setback!==!1&&Math.min(c,h)>18&&this.R()<(o.setbackChance??.6)){let f=r*this.rand(.35,.6),d=Math.min(c,h)*this.rand(.12,.22);if(this.boxMesh(e,t,n,s,0,f,l,a,{uOff:u}),this.R()<.5&&r>120){let p=f+(r-f)*.6,x=d*1.9;this.boxMesh(e+d,t+d,n-d,s-d,f,p,l,a,{uOff:u}),this.boxMesh(e+x,t+x,n-x,s-x,p,r,l,a,{uOff:u})}else this.boxMesh(e+d,t+d,n-d,s-d,f,r,l,a,{uOff:u})}else this.boxMesh(e,t,n,s,0,r,l,a,{uOff:u});if(this.mapOps.push({t:"b",x0:e,z0:t,x1:n,z1:s}),o.rooftop!==!1&&r<70&&c>8&&h>8){let f=(r>55,r);if(this.R()<.55){let d=this.rand(e+3,n-3),p=this.rand(t+3,s-3);this.prop("ac",d,p,0,1,f),this.addBox(d-1.2,p-.9,d+1.2,p+.9,f+1.4,f)}if(this.cfg.waterTowers&&this.R()<this.cfg.waterTowers){let d=this.rand(e+3,n-3),p=this.rand(t+3,s-3);this.prop("waterTower",d,p,0,1,f)}}return{x0:e,z0:t,x1:n,z1:s,h:r,style:a,color:l}}block(e,t,n,s,r={}){let o=[],a=r.lot||[16,34],l=r.depth||32,c=n-e,h=s-t,u=r.hMin??15,f=r.hMax??60,d=()=>{let x=Math.pow(this.R(),r.skew??1.6),m=u+(f-u)*x;return this.R()<(r.lowChance??.12)&&(m=this.rand(7,13)),m},p=(x,m,g,v)=>{r.avoid&&r.avoid(x,m,g,v)||o.push(this.building(x,m,g,v,d(),r))};if(Math.min(c,h)<l*2.1)if(c>=h)for(let x=e;x<n-4;){let m=Math.min(this.rand(a[0],a[1]),n-x);p(x,t,x+m-(r.gap??0),s),x+=m}else for(let x=t;x<s-4;){let m=Math.min(this.rand(a[0],a[1]),s-x);p(e,x,n,x+m-(r.gap??0)),x+=m}else{for(let x=e;x<n-4;){let m=Math.min(this.rand(a[0],a[1]),n-x);p(x,t,x+m,t+l),p(x,s-l,x+m,s),x+=m}for(let x=t+l;x<s-l-4;){let m=Math.min(this.rand(a[0],a[1]),s-l-x);p(e,x,e+l,x+m),p(n-l,x,n,x+m),x+=m}r.court&&this.rect(e+l,t+l,n-l,s-l,.03,r.court,!1)}return r.walk!==!1&&this.loops.push({r:[e-2.5,t-2.5,n+2.5,s+2.5],n:r.people}),o}prop(e,t,n,s=0,r=1,o=0,a){if((this.props[e]=this.props[e]||[]).push({x:t,y:o,z:n,rot:s,s:r,color:a}),(e==="tree"||e==="palm"||e==="joshua")&&this.addBox(t-.25*r,n-.25*r,t+.25*r,n+.25*r,o+3*r,o),e==="car"){let l=Math.abs(Math.cos(s)),c=Math.abs(Math.sin(s)),h=.9*l+2.15*c,u=.9*c+2.15*l;this.addBox(t-h,n-u,t+h,n+u,o+1.45,o)}}parkCars(e,t,n,s,r=.5,o){let a=n-e>s-t,l=o||this.cfg.carColors||["#c43c3c","#2f5fa8","#e8e8e8","#222","#8a8f96","#d9b44a"];if(a)for(let c=e+6;c<n-6;c+=6.2)this.R()<r&&this.prop("car",c,t+1.4,Math.PI/2,1,0,this.pick(l)),this.R()<r&&this.prop("car",c,s-1.4,-Math.PI/2,1,0,this.pick(l));else for(let c=t+6;c<s-6;c+=6.2)this.R()<r&&this.prop("car",e+1.4,c,0,1,0,this.pick(l)),this.R()<r&&this.prop("car",n-1.4,c,Math.PI,1,0,this.pick(l))}lamps(e,t,n,s,r=30){if(n-e>s-t)for(let a=e+8;a<n;a+=r)this.prop("lamp",a,t-1,Math.PI/2),this.prop("lamp",a+r/2,s+1,-Math.PI/2);else for(let a=t+8;a<s;a+=r)this.prop("lamp",e-1,a,0),this.prop("lamp",n+1,a+r/2,Math.PI)}mesh(e){return this.root.add(e),e.traverse(t=>{t.isMesh&&(t.castShadow=t.castShadow!==!1,t.receiveShadow=!0)}),e}mapRect(e,t,n,s,r){this.mapOps.push({t:"r",x0:e,z0:t,x1:n,z1:s,c:r})}mapBuilding(e,t,n,s){this.mapOps.push({t:"b",x0:e,z0:t,x1:n,z1:s})}finish(){let e=this.cfg,t=new Yt({vertexColors:!0}),[n,s,r,o]=this.bounds,a=2500,l=new tt(new Pn(r-n+a*2,o-s+a*2),new Yt({color:e.outerGround||e.groundColor}));l.rotation.x=-Math.PI/2,l.position.set((n+r)/2,-.02,(s+o)/2),l.receiveShadow=!0,this.root.add(l),this.rect(n,s,r,o,.005,e.groundColor,!1);for(let p of this.ground.geometries()){let x=new tt(p,t);x.receiveShadow=!0,this.root.add(x)}if(this.waterBuf){let p=new ha({vertexColors:!0,shininess:90,specular:8952234});for(let x of this.waterBuf.geometries()){let m=new tt(x,p);m.receiveShadow=!0,this.root.add(m)}}let c=Hm("masonry",this.winLit?.32:0),h=Hm("glass",this.winLit?.28:0),u=(p,x)=>{if(p.empty)return;let m=new Yt({vertexColors:!0,map:x.map});this.winLit&&(m.emissiveMap=x.emi,m.emissive=new xe(16777215),m.emissiveIntensity=this.winLit);for(let g of p.geometries()){let v=new tt(g,m);v.castShadow=!0,v.receiveShadow=!0,this.root.add(v)}};u(this.masonry,c),u(this.glass,h),u(this.flat,{map:null,emi:null});let f=new Ft,d=new xe;for(let p in this.props){let x=this.props[p];if(!x.length)continue;let m=km[p](),g=new Yt({vertexColors:!0});(p==="lamp"||p==="flood")&&(g.emissive=new xe(this.cfg.night?10061909:0));let v=new Map;for(let S of x){let M=of(S.x,S.z,i1);(v.get(M)||v.set(M,[]).get(M)).push(S)}for(let S of v.values()){let M=new bi(m,g,S.length);S.forEach((E,_)=>{f.position.set(E.x,E.y,E.z),f.rotation.set(0,E.rot,0),f.scale.setScalar(E.s),f.updateMatrix(),M.setMatrixAt(_,f.matrix),M.setColorAt(_,d.set(E.color||"#ffffff"))}),M.castShadow=p!=="sage",M.receiveShadow=!0,M.computeBoundingSphere(),this.root.add(M)}}this.mergeStatic(),this.buildMinimap(),this.indexCullables()}indexCullables(){this.root.updateMatrixWorld(!0),this.cull=[];for(let e of this.root.children){if(!e.isMesh||e.userData.dynamic)continue;let t=e.geometry;t.boundingSphere||t.computeBoundingSphere();let n=t.boundingSphere;if(!n||n.radius>400)continue;let s=n.center.clone().applyMatrix4(e.matrixWorld);this.cull.push({m:e,x:s.x,z:s.z,r:n.radius})}}cullFar(e,t){let n=e.position.x,s=e.position.z;for(let r of this.cull){let o=Math.hypot(r.x-n,r.z-s)-r.r;r.m.visible=o<t}}mergeStatic(){this.root.updateMatrixWorld(!0);let e=new Map;for(let t of[...this.root.children]){if(!t.isMesh||t.isInstancedMesh||t.userData.dynamic||Array.isArray(t.material)||t.geometry.userData.merged)continue;let n=t.geometry,s=t.getWorldPosition(new L),r=t.material.uuid+"|"+Object.keys(n.attributes).sort().join(",")+"|"+t.castShadow+"|"+of(s.x,s.z);(e.get(r)||e.set(r,[]).get(r)).push(t)}for(let t of e.values()){if(t.length<2)continue;let n=t.map(o=>{let a=o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone();a.applyMatrix4(o.matrixWorld);for(let l of Object.keys(a.morphAttributes))delete a.morphAttributes[l];return a}),s=oo(n,!1);if(n.forEach(o=>o.dispose()),!s)continue;s.userData.merged=!0,s.computeBoundingSphere();let r=new tt(s,t[0].material);r.castShadow=t[0].castShadow,r.receiveShadow=!0,r.renderOrder=t[0].renderOrder,this.root.add(r);for(let o of t)this.root.remove(o),o.geometry.dispose()}}buildMinimap(){let[e,t,n,s]=this.bounds,r=1024,o=r/Math.max(n-e,s-t),a=document.createElement("canvas");a.width=Math.ceil((n-e)*o),a.height=Math.ceil((s-t)*o);let l=a.getContext("2d");l.fillStyle=this.cfg.mapGround||"#9aa3ad",l.fillRect(0,0,a.width,a.height);let c=u=>(u-e)*o,h=u=>(u-t)*o;for(let u of this.mapOps)u.t==="r"?(l.fillStyle=u.c,l.fillRect(c(u.x0),h(u.z0),(u.x1-u.x0)*o+.5,(u.z1-u.z0)*o+.5)):u.t==="p"&&(l.fillStyle=u.c,l.beginPath(),u.pts.forEach((f,d)=>d?l.lineTo(c(f[0]),h(f[1])):l.moveTo(c(f[0]),h(f[1]))),l.closePath(),l.fill());l.fillStyle=this.cfg.mapBuilding||"#2b3240";for(let u of this.mapOps)u.t==="b"&&l.fillRect(c(u.x0),h(u.z0),(u.x1-u.x0)*o,(u.z1-u.z0)*o);this.minimap={canvas:a,sc:o,x0:e,z0:t}}dispose(){this.root.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(n=>{for(let s of["map","emissiveMap","envMap"])n[s]&&n[s].dispose();n.dispose()})}),this.scene.remove(this.root)}};var or=new Map;function Pe(i,e={}){let t="l"+i+JSON.stringify(e);if(or.has(t))return or.get(t);let n=new Yt({color:i,...e});return or.set(t,n),n}function cs(i){let e="g"+i;if(or.has(e))return or.get(e);let t=new It({color:i});return or.set(e,t),t}function Vm(){or.clear(),Zc=[]}function ze(i,e,t,n=0,s=0,r=0,o=0,a=0,l=0,c=1,h=1,u=1){let f=new tt(e,t);return f.position.set(n,s,r),f.rotation.set(o,a,l),f.scale.set(c,h,u),f.castShadow=!0,f.receiveShadow=!0,i.root.add(f),f}function nt(i,e,t,n,s,r,o,a,l=!0){let c=ze(i,new ke(n-e,o-r,s-t),a,(e+n)/2,(r+o)/2,(t+s)/2);return l&&i.addBox(e,t,n,s,o,r),c}function s1(i,e={}){let t=!!e.vertical,n=e.fs||64,s=e.pad??14,r=t?i.split(""):[i],o=t?n+s*2:Math.ceil(i.length*n*.62)+s*2,a=t?r.length*n*.95+s*2:n+s*2;return jt(Math.min(2048,o),Math.min(2048,a),(l,c,h)=>{l.fillStyle=e.bg||"#000",l.fillRect(0,0,c,h),l.font=`${e.weight||"bold"} ${n}px ${e.font||"Arial, sans-serif"}`,l.textAlign="center",l.textBaseline="middle",e.glow&&(l.shadowColor=e.glow,l.shadowBlur=n*.35),l.fillStyle=e.fg||"#fff",t?r.forEach((u,f)=>l.fillText(u,c/2,s+n*.5+f*n*.95)):l.fillText(i,c/2,h/2+2),e.border&&(l.shadowBlur=0,l.strokeStyle=e.border,l.lineWidth=6,l.strokeRect(4,4,c-8,h-8))},!1)}function hs(i,e,t,n,s,r,o,a,l={}){let c=s1(e,l),h=new tt(new Pn(r,o),l.lit===!1?new Yt({map:c}):new It({map:c}));return h.position.set(t,n,s),h.rotation.y=a,i.root.add(h),h}var r1=[["ZORP COLA","#e8242c","#fff"],["GALAXY FONE","#121a3a","#5ef0ff"],["NEBULA+","#5a1e8c","#ffd84a"],["MOON MILK","#f4f0e6","#2b3a8a"],["ORBIT AIR","#ff7a1a","#fff"],["STARDUST","#0c0c0c","#ff4fb8"],["COMET JEANS","#1d4fa8","#fff"],["CRATER BURGER","#ffcc22","#c01818"],["PULSAR TV","#00a86b","#fff"],["ROCKET RIDE","#e8e8e8","#e8242c"],["ASTRO SNAX","#ff3a3a","#ffe94a"],["LUNAR BANK","#0a2a5a","#e8e8e8"],["SATURN SODA","#b02cd6","#fff"],["TOP HAT SHOW","#111","#ffcf4a"],["WARP 9","#17d0e8","#081a2a"],["FUSION FIT","#ff2e63","#fff"]],qc=null,Zc=[];function o1(){return qc||(qc=r1.map(([i,e,t],n)=>jt(512,256,(s,r,o)=>{let a=s.createLinearGradient(0,0,r,o);a.addColorStop(0,e),a.addColorStop(1,a1(e,n%2?-40:40)),s.fillStyle=a,s.fillRect(0,0,r,o),s.globalAlpha=.25,s.fillStyle=t;for(let l=0;l<6;l++)s.beginPath(),s.arc((l*97+n*53)%r,(l*61+n*29)%o,20+l*13%60,0,7),s.fill();s.globalAlpha=1,s.fillStyle=t,s.font=`bold ${i.length>9?62:80}px Arial Black, Arial, sans-serif`,s.textAlign="center",s.textBaseline="middle",s.shadowColor=t,s.shadowBlur=16,s.fillText(i,r/2,o/2)},!1)),qc)}function a1(i,e){let t=new xe(i);return t.offsetHSL(0,0,e/255),"#"+t.getHexString()}function Yc(i,e,t,n,s,r,o,a){let l=o1(),c=a%l.length;Zc[c]=Zc[c]||new It({map:l[c]});let h=new tt(new Pn(s,r),Zc[c]);return h.castShadow=!1,h.position.set(e,t,n),h.rotation.y=o,i.root.add(h),h}function af(i,e,t,n=6,s=45,r=0,o=[0,1,2,3]){let a=r;for(let l of o){let c=l<2?e.x1-e.x0:e.z1-e.z0;if(!(c<8))for(let h=0;h<t;h++){let u=Math.min(c*i.rand(.55,.9),30),f=Math.min(u*i.rand(.45,.8),18),d=i.rand(n,Math.max(n,Math.min(s,e.h-f/2-1))),p=i.rand(-(c-u)/2,(c-u)/2);l===0&&Yc(i,(e.x0+e.x1)/2+p,d,e.z1+.15,u,f,0,a++),l===1&&Yc(i,(e.x0+e.x1)/2+p,d,e.z0-.15,u,f,Math.PI,a++),l===2&&Yc(i,e.x1+.15,d,(e.z0+e.z1)/2+p,u,f,Math.PI/2,a++),l===3&&Yc(i,e.x0-.15,d,(e.z0+e.z1)/2+p,u,f,-Math.PI/2,a++)}}}function Kc(i,e,t,n,s,r,o,a=[]){let[l,c,h,u]=e;for(let f=0;f<n;f++){let d=Math.floor(i.R()*4),p,x;if(d===0?(p=i.rand(l-t,h+t),x=i.rand(c-t,c-40)):d===1?(p=i.rand(l-t,h+t),x=i.rand(u+40,u+t)):d===2?(p=i.rand(l-t,l-40),x=i.rand(c,u)):(p=i.rand(h+40,h+t),x=i.rand(c,u)),a.some(v=>p>v[0]&&p<v[2]&&x>v[1]&&x<v[3]))continue;let m=i.rand(20,45),g=s+Math.pow(i.R(),2)*(r-s);i.boxMesh(p-m/2,x-m/2,p+m/2,x+m/2,0,g,i.pick(o),g>80?"glass":"masonry",{collide:!1})}}function Xm(i,e,t,n,s,r,o){let a=new Vn(1,1,6,1);for(let l=0;l<r;l++){let c=l/r*Math.PI*2+i.rand(-.05,.05),h=i.rand(n,s),u=i.rand(90,260),f=i.rand(180,380),d=ze(i,a,Pe(i.pick(o),{flatShading:!0}),e+Math.cos(c)*h,u/2-5,t+Math.sin(c)*h,0,i.rand(0,3),0,f,u,f*i.rand(.6,1));d.castShadow=!1}}function Jc(i,e,t,n,s,r=0,o={}){let a=new ct;a.position.set(e,t,n),a.rotation.set(r,o.ry||0,r*.4);let l=new gn({color:"#b8bfd0",metalness:.7,roughness:.35}),c=new gn({color:"#5a6274",metalness:.6,roughness:.5}),h=new It({color:o.lights||"#3ff0ff"}),u=(d,p,x,m,g,v=1,S=1,M=1)=>{let E=new tt(d,p);return E.position.set(x,m,g),E.scale.set(v,S,M),E.castShadow=!0,E.receiveShadow=!0,a.add(E),E};u(new ht(s,32,12),l,0,0,0,1,.22,1),u(new cn(s*.98,s*.05,8,40),c,0,0,0).rotation.x=Math.PI/2;let f=u(new ht(s*.38,24,12,0,Math.PI*2,0,Math.PI/2),new gn({color:o.domeColor||"#7fd6ff",metalness:.1,roughness:.1,transparent:!0,opacity:.75}),0,s*.12,0);for(let d=0;d<12;d++){let p=d/12*Math.PI*2;u(new ht(s*.04,8,6),h,Math.cos(p)*s*.85,-s*.02,Math.sin(p)*s*.85)}return u(new Ye(s*.25,s*.32,s*.1,20),c,0,-s*.2,0),i.root.add(a),{group:a,dome:f,lights:h}}function $c(i,e,t,n,s,r,o){ze(i,new Vn(n*.72,r,4),o,e,s+r/2,t,0,Math.PI/4,0)}var rn=4;function Bi(i,e,t,n,s,r){i.road(e-t/2,n,e+t/2,s,r)}function Ai(i,e,t,n,s,r){i.road(n,e-t/2,s,e+t/2,r)}function Qc(i,e,t){for(let[n,s]of e)for(let[r,o]of t)i.crosswalk(n,r-o/2-2.5,s,"x"),i.crosswalk(n,r+o/2+2.5,s,"x"),i.crosswalk(n-s/2-2.5,r,o,"z"),i.crosswalk(n+s/2+2.5,r,o,"z")}function lf(i,e,t){for(let n=0;n<i.length-1;n++)for(let s=0;s<e.length-1;s++){let r=i[n][0]+i[n][1]/2+rn,o=i[n+1][0]-i[n+1][1]/2-rn,a=e[s][0]+e[s][1]/2+rn,l=e[s+1][0]-e[s+1][1]/2-rn;o-r>4&&l-a>4&&t(n,s,r,a,o,l)}}var Ym=(i,e)=>i[0]<e[2]&&i[2]>e[0]&&i[1]<e[3]&&i[3]>e[1];function l1(i,e,t=8,n){return jt(64,256,(s,r,o)=>{s.fillStyle=i,s.fillRect(0,0,r,o);for(let a=0;a<t;a++)if(s.fillStyle=e,s.fillRect(0,a*o/t,r,o/t*.4),n){s.fillStyle=n;for(let l=0;l<4;l++)(a*7+l*3)%5<2&&s.fillRect(l*16+3,a*o/t+o/t*.5,10,o/t*.35)}})}function c1(i){let e=i.bounds,t=[[-402,20],[-201,18],[0,24],[100,18],[201,30],[410,26],[620,44]],n=[[-560,26],[-402,18],[-302,24],[-201,20],[0,20],[201,20],[402,20],[520,20]],s=[[-1180,18],[-1005,18],[-864,14],[-804,16],[-655,0]],r=[-655,-585];i.waterRect(680,-3e3,3e3,3e3,"#2f7fa6"),i.waterRect(-3e3,r[0],680,r[1],"#2c6a8a"),i.rect(642,e[1],680,e[3],.03,"#d9cdb2","#cdbf9f"),i.plaza(645,-540,676,400,null,10);for(let[A,O]of t)Bi(i,A,O,r[1],e[3]);for(let[A,O]of n)A===-201||A===0||A===201?(Ai(i,A,O,e[0],186),Ai(i,A,O,423,598)):A===402?(Ai(i,A,O,e[0],186),Ai(i,A,O,423,620)):Ai(i,A,O,e[0],642);Qc(i,t.filter(([A])=>A<=201),n.filter(([A])=>A!==520));let o=[[-402,20],[-201,18],[0,24],[100,18],[201,30],[330,16],[410,26],[620,44]];for(let[A,O]of o)Bi(i,A,O,e[1],r[0]);for(let[A,O]of s)O&&Ai(i,A,O,e[0],642);Qc(i,o.filter(([A])=>A<=410),s.filter(([,A])=>A));for(let[A,O]of o)i.bridge(A-O/2,r[0],A+O/2,r[1]);let a=Pe("#d8cdb4");for(let A of[184,218])for(let O of[-660,-580])nt(i,A-3,O-3,A+3,O+3,0,9,a);i.plaza(e[0],-585,642,-577,"#b9ab90",26,"#b9ab90");for(let A=-440;A<640;A+=22)i.prop("tree",A,-581,0,.7);for(let A=-430;A<640;A+=40)i.prop("bench",A,-579,Math.PI);let l={};i.park(216+rn,-290+rn,397-rn,191-rn,{trees:0,plaza:!1,color:"#62a04a"}),i.plaza(220,-285,300,-150,"#c9c3b6",34,"#c9c3b6");let c=new gn({color:"#e8ecf2",metalness:1,roughness:.06});i.reflective=[c],ze(i,new Ye(6.5,7,.8,40),Pe("#9aa3ad"),262,.4,-215),ze(i,new cn(5.2,.85,20,64),c,262,6.6,-215,0,.35,0),ze(i,new ht(1.7,40,20),c,262,6.6,-215),i.addBox(255.5,-221.5,268.5,-208.5,.8,0),i.addBox(260.5,-217,263.5,-213,12.6,.8),i.mapRect(255,-222,269,-208,"#dfe6ee"),l.bean=[262,12.7,-215];let h=new gn({color:"#d6dbe2",metalness:.9,roughness:.25});i.reflective.push(h),nt(i,304,-282,322,-242,0,1.5,Pe("#8a7a66")),nt(i,300,-286,306,-238,0,12,Pe("#b6ab9a"));for(let A=0;A<9;A++){let O=ze(i,new cn(10+A*1.3,.35,4,18,Math.PI*(.55+A%3*.15)),h,304,16+A%4,-262+(A-4)*4.2,0,Math.PI/2+(A%2?.3:-.3),A*.5);O.castShadow=!1}i.park(324,-296,396,-150,{trees:0,plaza:!0,people:22,color:"#6fb354"});let u=[];for(let A=330;A<=392;A+=15.5)u.push(new Ye(.4,.4,150,6).rotateX(Math.PI/2).translate(A,19,-223));for(let A=-290;A<=-156;A+=16.5)u.push(new Ye(.4,.4,66,6).rotateZ(Math.PI/2).translate(361,19,A));for(let A of u){let O=ze(i,A,h);O.castShadow=!1}for(let[A,O]of[[328,-292],[394,-292],[328,-154],[394,-154]])nt(i,A-1,O-1,A+1,O+1,0,19,Pe("#9aa2ab"));let f=jt(128,256,(A,O,J)=>{let G=A.createLinearGradient(0,0,0,J);G.addColorStop(0,"#1b3a5c"),G.addColorStop(1,"#0d1f33"),A.fillStyle=G,A.fillRect(0,0,O,J),A.fillStyle="#7cf2c8";let q=6;["..####..",".######.","########",".#.#.#..","..#..#.."].forEach((ae,Ce)=>[...ae].forEach((Z,de)=>{Z==="#"&&A.fillRect(40+de*q,60+Ce*q,q-1,q-1)})),A.fillStyle="rgba(255,230,120,.9)";for(let ae=0;ae<18;ae++)A.fillRect(ae*37%120+4,120+ae*53%120,4,4);A.fillStyle="rgba(255,255,255,.10)";for(let ae=0;ae<J;ae+=6)A.fillRect(0,ae,O,2)},!1);for(let A of[40,160]){nt(i,236,A-3.5,252,A+3.5,0,15,new Yt({color:"#cfe0e8",emissive:"#203038"}));let O=new tt(new Pn(14,14),new It({map:f}));O.position.set(244,7.5,A+(A<100?3.55:-3.55)),O.rotation.y=A<100?0:Math.PI,i.root.add(O)}i.rect(236,44,252,156,.05,"#2b2f36","#2b2f36"),i.rect(237,46,251,154,.07,"#6fa8c8",!1),i.plaza(222,30,300,175,null,18),i.rect(320,20,395,180,.04,"#6a8f3e","#557a33");for(let A=0;A<60;A++)i.rect(...(()=>{let O=i.rand(322,390),J=i.rand(22,176);return[O,J,O+3,J+3]})(),.05,i.pick(["#8a5fc0","#d96aa0","#e8c94a","#7a4aa0"]),!1);let d=Pe("#cfc6ae"),p=Pe("#b3a98f");nt(i,222,226,330,398,0,13,d),nt(i,214,268,222,356,0,1.2,p),nt(i,218,268,222,356,1.2,2.4,p);for(let A=274;A<=350;A+=9.5)nt(i,218,A-.8,220,A+.8,2.4,11,d);nt(i,216,266,224,358,11,13,p);let x=new qs;x.moveTo(-30,0),x.lineTo(30,0),x.lineTo(0,6),x.lineTo(-30,0),ze(i,new qr(x,{depth:6,bevelEnabled:!1}),d,216,13,312,0,-Math.PI/2,0),i.mapBuilding(214,226,330,398);let m=Pe("#5f6346");for(let A of[262,362])nt(i,205,A-2,213,A+2,0,2.2,p),ze(i,new ke(5,1.8,1.8),m,209,3.3,A),ze(i,new ht(1.2,10,8),m,206.8,4.4,A),ze(i,new ke(1,.8,.9),m,205.6,4.2,A);i.plaza(203,262,216,365,null,10),nt(i,340,300,402,398,0,14,Pe("#eef1f2")),ze(i,new ke(70,.6,104),Pe("#f6f7f8"),371,14.6,349),i.addBox(336,297,406,401,14.9,14.3),i.mapBuilding(340,300,402,398),l.coil=[276,13.6,312],i.building(118,-290,182,-213,30,{color:"#d9c9a3",style:"masonry",setback:!1}),i.building(226,-470,262,-420,183,{color:"#bdb6a8",style:"masonry",setback:!1}),ze(i,new Ye(.6,.8,40,6),Pe("#ddd"),244,203,-445);let g=i.building(268,-480,304,-432,230,{color:"#c2bdb6",style:"glass",setback:!1});for(let A=0;A<4;A++){let O=3+A*3.5;i.boxMesh(268+O,-480+O,304-O,-432-O,230+A*9,239+A*9,"#c2bdb6","flat")}$c(i,286,-456,6,266,40,Pe("#c2bdb6")),i.building(342,-480,398,-424,346,{color:"#f2f1ea",style:"masonry",setback:!1}),i.building(454,-545,500,-508,363,{color:"#7fb3d6",style:"glass",setbackChance:1}),i.building(440,-480,476,-436,262,{color:"#d6e2ea",style:"glass",setback:!1}),i.building(520,-540,600,-500,190,{color:"#9fb2c6",style:"glass"}),i.building(520,-470,600,-420,150,{color:"#a9bccf",style:"glass"}),i.park(426,-390,598,-320,{trees:10,people:8}),i.building(-46,-390,-14,-330,26,{color:"#c9a58a",style:"masonry",setback:!1,rooftop:!1}),ze(i,new ke(2,.6,26),cs("#ffd86b"),-12,6.2,-360);let S=hs(i,"PALACE",-11,15,-360,3.2,17,Math.PI/2,{vertical:!0,fg:"#fff3c4",bg:"#c01e1e",glow:"#ffe08a",fs:72}).clone();S.rotation.y=0,S.position.set(-12.5,15,-358.5),S.scale.set(.5,1,1),i.root.add(S);let M=Pe("#3f4a3c");for(let A=-402;A<=e[3];A+=18)for(let O of[91,109])nt(i,O-.5,A-.5,O+.5,A+.5,0,6,M);nt(i,92,-409,108,e[3],6,6.8,M);for(let A=e[0];A<=92;A+=18)for(let O of[-411,-393])nt(i,A-.5,O-.5,A+.5,O+.5,0,6,M);nt(i,e[0],-410,92,-394,6,6.8,M);let E=Pe("#c9ced6");for(let A=0;A<4;A++){let O=60+A*15;nt(i,95.5,O,99.5,O+14.2,6.8,10.3,E),ze(i,new ke(4.05,.9,13.6),Pe("#2a3440"),97.5,9.1,O+7.1)}let _=new Yt({map:l1("#e9e6dc","#a9a59a",6)});_.map.repeat.set(4,22);for(let A of[-140,-84])ze(i,new Ye(16,16,179,20),_,A,89.5,-715),i.addBox(A-13,-728,A+13,-702,179),i.mapRect(A-16,-731,A+16,-699,"#2b3240");let y=[[22,-738,82,-668,100],[28,-732,76,-674,220],[34,-726,70,-680,360]],b=0;for(let[A,O,J,G,q]of y)i.boxMesh(A,O,J,G,b,q,"#a8b4c0","glass"),b=q;ze(i,new Ye(.8,1.4,63,6),Pe("#ccd"),52,391,-703),i.mapBuilding(22,-738,82,-668);let N="#f4f1e8";i.building(122,-735,186,-665,62,{color:N,style:"masonry",setback:!1,rooftop:!1}),i.boxMesh(160,-712,182,-690,62,110,N,"masonry"),i.boxMesh(164,-708,178,-694,110,124,N,"flat"),ze(i,new Ye(3,5,10,8),Pe(N),171,129,-701);let C=jt(64,64,A=>{A.fillStyle="#fff",A.beginPath(),A.arc(32,32,30,0,7),A.fill(),A.strokeStyle="#222",A.lineWidth=3,A.stroke(),A.beginPath(),A.moveTo(32,32),A.lineTo(32,12),A.moveTo(32,32),A.lineTo(46,38),A.stroke()},!1);for(let[A,O,J]of[[171,-689.9,0],[171,-712.1,Math.PI],[182.1,-701,Math.PI/2],[159.9,-701,-Math.PI/2]]){let G=new tt(new ai(4,20),new It({map:C}));G.position.set(A,100,O),G.rotation.y=J,i.root.add(G)}i.building(122,-800,186,-742,52,{color:N,style:"masonry",setback:!1});let D="#d9cdb0";i.building(216,-790,270,-702,112,{color:D,style:"masonry",setback:!1,rooftop:!1}),i.boxMesh(230,-760,256,-732,112,132,D,"masonry");for(let[A,O]of[[230,-760],[256,-760],[230,-732],[256,-732],[243,-760],[243,-732],[230,-746],[256,-746]])i.boxMesh(A-1.2,O-1.2,A+1.2,O+1.2,112,140,D,"flat",{collide:!1}),$c(i,A,O,2.4,140,6,Pe(D));i.plaza(216,-698,272,-662,"#c9c1b0",5,"#c9c1b0"),i.building(318,-800,360,-700,191,{color:"#e2d7bf",style:"masonry",setbackChance:1});let R=[[214,-302,642,201],[214,210,642,520],[118,-290,182,-213],[216,-490,410,-420],[430,-560,642,-310],[-46,-390,-14,-330],[-160,-740,-60,-690],[20,-740,84,-665],[118,-805,190,-660],[214,-800,275,-660],[310,-805,365,-695]],U=(A,O,J,G,q,j,ae={})=>{R.some(Ce=>Ce[0]<=A+1&&Ce[2]>=J-1&&Ce[1]<=O+1&&Ce[3]>=G-1)||i.block(A,O,J,G,{hMin:q,hMax:j,lot:[18,36],depth:30,avoid:(Ce,Z,de,Re)=>R.some(He=>Ym([Ce,Z,de,Re],He)),...ae})};lf(t,n,(A,O,J,G,q,j)=>{let ae=(J+q)/2;if(ae>214){j<-302&&U(J,G,q,j,40,160);return}U(J,G,q,j,ae>150?35:45,ae>150?110:230,{people:ae>150?90:40})}),lf(o,s,(A,O,J,G,q,j)=>{let ae=(J+q)/2;ae>420||U(J,G,q,j,30,ae>150&&ae<300?140:180,{people:ae>150&&ae<260?70:30})}),i.block(434,-1170,598,-1018,{hMin:40,hMax:200}),i.block(434,-995,598,-876,{hMin:40,hMax:180}),i.block(434,-856,598,-680,{hMin:30,hMax:170}),i.park(423+rn,-290+rn,598-rn,191-rn,{trees:45,people:14,color:"#6ba851"}),i.rect(450,-240,570,-80,.04,"#9aa3ab",!1),i.park(334,210,598,520,{trees:40,people:10}),i.park(214,402,330,520,{trees:10,people:4});for(let A=-1170;A<500;A+=14)A>r[0]-4&&A<r[1]+4||(i.prop("tree",183,A,0,.75),(A<-310||A>400)&&i.prop("tree",219,A,0,.75));i.lamps(186-.1,-1170,216,-660,34),i.lamps(186,-560,216,500,34);for(let[A,O]of t.slice(0,4))i.parkCars(A-O/2,-545,A+O/2,500,.22);for(let[A,O]of n.slice(1,7))i.parkCars(e[0],A-O/2,185,A+O/2,.22);let I=[[0,0,442],[1,0,368],[2,0,270],[0,1,442],[1,1,442],[2,1,330],[0,2,270],[1,2,368],[2,2,207]];for(let[A,O,J]of I)i.boxMesh(-830+A*23,330+O*23,-830+(A+1)*23,330+(O+1)*23,0,J,"#2a2c30","glass",{collide:!1});for(let A of[12,36])ze(i,new Ye(.8,1.2,85,6),Pe("#eee"),-830+A,484,352);ze(i,new Ye(20,33,344,4),Pe("#2a2a2e"),201,172,-1820,0,Math.PI/4,0);for(let A of[-6,6])ze(i,new Ye(.6,1,90,6),Pe("#ddd"),201+A,389,-1820);ze(i,new ke(1e3,6,55),Pe("#c9b79c"),1250,3,-1055);let B=ze(i,new cn(30,.9,6,40),Pe("#e8e8e8"),1e3,38,-1055,0,Math.PI/2,0);for(let A=0;A<12;A++)ze(i,new Ye(.3,.3,60,4),Pe("#e8e8e8"),1e3,38,-1055,A*Math.PI/12,0,0);return B.userData.dynamic=!0,i.anim.push(A=>{B.rotation.x=A*.05}),Kc(i,e,600,160,30,230,i.cfg.palette.masonry.concat(i.cfg.palette.glass),[[680,-3e3,3e3,3e3]]),{spawn:[243,0,-675,0],goal:{pos:l.coil,label:"Gravity coil"},log:l.bean,checkpoints:[[243,0,-675],[201,0,-540],[218,0,-390],[220.5,0,-236.1],[262.5,0,-70],[290,0,100],[247.5,0,207.5],[185.7,2.4,309.8]]}}function h1(i){let e=i.bounds,t=R=>-(R-42)*80.6,n=[[-810,30],[-560,28],[-280,30],[0,30],[128,24],[254,40]],s=[];for(let R=55;R>=39;R--)s.push([t(R),R===42?30:18,R]);let r=s.map(R=>[R[0],R[1]]),o=[[-386,280],[-560,-322],[-741,-1080]],a=R=>R>-322?-(386+(280-R)/602*174):-(560+(-322-R)/758*181);for(let[R,U]of n)R===254?(Bi(i,R,U,e[1],-255),Bi(i,R,U,14,e[3])):Bi(i,R,U,e[1],e[3]);for(let[R,U,I]of s){let B=[[e[0],e[2]]];if(I===41){Ai(i,R,U,e[0],-295),Ai(i,R,U,15,e[2]);continue}if(I>=43&&I<=45){Ai(i,R,U,e[0],190);continue}for(let[A,O]of B)Ai(i,R,U,A,O)}i.roadSeg(o[0][0],o[0][1],o[1][0],o[1][1],24,{color:"#8f8a86",map:"#b7aaa0",paint:!1}),i.roadSeg(o[1][0],o[1][1],o[2][0],o[2][1],22),i.roadSeg(-386,280,-430,152,22),Qc(i,n.filter(([R])=>R<200),r);for(let R=10;R>-400;R-=34){let U=a(R);i.plaza(U-11,R-16,U+11,R+16,null,9)}let l={};i.park(-261,19,-110,148,{trees:40,people:30,color:"#5f9a46",avoid:[[-230,45,-140,125]]}),i.rect(-230,45,-140,125,.04,"#6fb354",!1);let c=Pe("#ece6d9"),h=Pe("#d6cebe");nt(i,-100,26,-22,146,0,24,c),nt(i,-62,60,-22,112,24,30,h),i.mapBuilding(-100,26,-22,146);for(let R=50;R<=122;R+=6)nt(i,-21,R-.7,-19.5,R+.7,2,20,c);nt(i,-21,44,-15,128,0,2,h);for(let R of[56,116])nt(i,-14,R-2,-10,R+2,0,2.5,h),ze(i,new ke(1.6,1.6,3.6),Pe("#e2dccd"),-12,3.3,R),ze(i,new ht(1,8,6),Pe("#e2dccd"),-12,4.2,R-1.6);i.plaza(-18,30,-16,140,null,8),i.building(-335,-70,-297,-18,366,{color:"#c8d6df",style:"glass",setbackChance:1});let u=i.building(-540,-62,-500,-17,111,{color:"#9aa0a6",style:"masonry",setback:!1,rooftop:!1});af(i,u,4,14,100,3,[0,2,3]),ze(i,new Ye(.4,.5,18,6),Pe("#ccc"),-520,120,-40),ze(i,new Pi(2,1),new It({color:"#cfe8ff"}),-520,124,-40);let f=new Yt({color:"#d0202c",emissive:"#6a0010"});for(let R=0;R<7;R++)nt(i,-578,-372-R*3.6,-560,-368-R*3.6-3.6+3.6,0,.55*(R+1),f);l.tkts=[-569,4.2,-394],Bi(i,-150,12,t(51)+9,t(48)-9,{color:"#8f8a86",paint:!1});let d="#cfc5b0",p=i.building(-262,-626,-160,-590,259,{color:d,style:"masonry",setback:!1,rooftop:!1});i.boxMesh(-262,-632,-160,-584,0,60,d,"masonry"),i.boxMesh(-250,-623,-170,-593,259,266,d,"flat"),i.building(-80,-632,-18,-614,28,{color:d,style:"masonry",setback:!1}),i.building(-80,-596,-18,-578,28,{color:d,style:"masonry",setback:!1}),i.rect(-80,-612,-18,-598,.04,"#6fa055",!1),i.plaza(-80,-611,-18,-599,null,14),i.rect(-142,-630,-92,-580,.04,"#dfeef6","#dfeef6"),i.plaza(-140,-628,-94,-582,null,22);for(let R=0;R<26;R++){let U=R/26*Math.PI*2;i.prop("flag",-117+Math.cos(U)*29,-605+Math.sin(U)*29,U,1,0,["#e8242c","#2f5fa8","#f2c230","#2fa85f","#ffffff","#7a3fb8"][R%6])}let x=new gn({color:"#d4a52c",metalness:.9,roughness:.3});i.reflective.push(x),nt(i,-146,-610,-140,-600,0,3,Pe("#8a8a8a")),ze(i,new Pi(1.6,1),x,-143,4.4,-605,0,0,0,1.4,.7,1),ze(i,new cn(3.5,.18,6,24),x,-143,4.5,-605,0,Math.PI/2,0);let m=Pe("#1f5a2e");for(let R=0;R<5;R++)ze(i,new Vn(7-R*1.2,7,10),m,-152,4+R*4.2,-605);ze(i,new Ye(1,1.2,3,8),Pe("#5a3a2a"),-152,1.5,-605),i.addBox(-155,-608,-149,-602,24);let g=[];for(let R=0;R<90;R++){let U=Math.random(),I=(1-U)*6.6+.3,B=Math.random()*6.28;g.push(new ht(.22,4,3).translate(-152+Math.cos(B)*I,2+U*22,-605+Math.sin(B)*I))}for(let R of g)ze(i,R,cs(["#ffd84a","#ff4a4a","#5ef0ff","#ffffff"][Math.floor(Math.random()*4)])).castShadow=!1;ze(i,new Ss(1.4),cs("#fff2a8"),-152,25.5,-605),l.crystal=[-117,.6,-605],nt(i,-16,-694,-8,-686,0,3,Pe("#7a7a7a")),ze(i,new ke(1.6,4,1.2),x,-12,5,-690);for(let R=0;R<3;R++)ze(i,new cn(3,.15,6,24),x,-12,9.5,-690,R*1.05,R*.6,0);i.building(-265,-717,-200,-655,30,{color:"#c9b29a",style:"masonry",setback:!1,rooftop:!1}),ze(i,new ke(1.5,1.2,50),cs("#ff2a3a"),-266,6,-686),hs(i,"ROCKET CITY",-266.2,16,-660,3.4,18,-Math.PI/2,{vertical:!0,fg:"#ff3344",bg:"#140508",glow:"#ff4455",fs:64});let v=Pe("#ebe6da");nt(i,36,-712,106,-659,0,33,v),i.mapBuilding(22,-712,106,-659);let S=new qs;S.moveTo(-26,0),S.lineTo(26,0),S.lineTo(0,14),S.lineTo(-26,0),ze(i,new qr(S,{depth:70,bevelEnabled:!1}),Pe("#7d8a86"),36,33,-685.5,0,Math.PI/2,0);for(let R of[-707,-664])nt(i,22,R-5,34,R+5,0,62,v),$c(i,28,R,9,62,40,v);nt(i,22,-697,34,-674,0,30,v);let M=Pe("#d8cbb0");nt(i,196,-150,312,-16,0,32,M),i.mapBuilding(196,-150,312,-16);let E=jt(256,128,R=>{R.fillStyle="#d8cbb0",R.fillRect(0,0,256,128),R.fillStyle="#3a4a58";for(let U=0;U<3;U++)R.beginPath(),R.moveTo(22+U*78,120),R.lineTo(22+U*78,50),R.arc(55+U*78,50,33,Math.PI,0),R.lineTo(88+U*78,120),R.fill();R.fillStyle="#e8d070",R.beginPath(),R.arc(128,20,12,0,7),R.fill()},!1),_=new tt(new Pn(100,30),new Yt({map:E}));_.position.set(254,15,-15.8),i.root.add(_),ze(i,new ke(20,7,4),Pe("#6f8a6a"),254,35,-18),i.building(212,-240,296,-168,246,{color:"#b9b4aa",style:"glass",setback:!1});let y=[[-35,610,95,680,85],[-20,620,80,670,200],[0,630,60,660,320],[15,637,45,653,350]],b=0;for(let[R,U,I,B,A]of y)i.boxMesh(R,U,I,B,b,A,"#c9bfa6","masonry",{collide:!1}),b=A;ze(i,new Ye(.8,2.5,60,6),Pe("#ddd"),30,380,645);let N=[[365,-10,415,40,180],[372,-3,408,33,230],[378,3,402,27,255]];b=0;for(let[R,U,I,B,A]of N)i.boxMesh(R,U,I,B,b,A,"#c7ccd2","masonry",{collide:!1}),b=A;for(let R=0;R<5;R++)ze(i,new Ye(10-R*2,11-R*2,9,8),new gn({color:"#d8dde4",metalness:.9,roughness:.3}),390,259+R*8,15);ze(i,new Ye(.3,1.2,40,6),Pe("#ddd"),390,318,15);let C=[[-265,15,-10,161],[-345,-75,-290,-10],[-545,-65,-495,-12],[-582,-405,-556,-366],[-265,-642,-15,-572],[-268,-720,-195,-650],[18,-717,112,-654],[190,-255,320,-10]],D=(R,U,I,B)=>{for(let A of[U,(U+B)/2,B]){let O=a(A);if(O>R-13&&O<I+13)return!0}return!1};lf(n,r,(R,U,I,B,A,O)=>{let J=I<-270&&A>-560&&B>-420&&O<30,G=I>-280&&A<0&&B>-730&&O<-480,q=i.block(I,B,A,O,{hMin:J?30:35,hMax:G?150:J?180:210,lot:[16,30],depth:28,skew:1.4,lowChance:.1,avoid:(j,ae,Ce,Z)=>C.some(de=>Ym([j,ae,Ce,Z],de))||D(j,ae,Ce,Z),color:G?d:void 0,people:J?80:40});J&&q.forEach((j,ae)=>af(i,j,2,7,48,ae*3))});for(let[R,U]of n)i.parkCars(R-U/2,e[1],R+U/2,e[3],.22,["#f2c230","#f2c230","#f2c230","#2a2a2a","#e8e8e8","#3a4a6a"]);for(let[R,U]of n)i.lamps(R-U/2-1,e[1],R+U/2+1,e[3],40);return Kc(i,e,700,260,60,280,i.cfg.palette.masonry.concat(i.cfg.palette.glass),[[-60,600,110,700],[355,-20,425,50]]),{spawn:[-790,0,150,Math.PI/2],goal:{pos:l.crystal,label:"Nav crystal"},log:l.tkts,checkpoints:[[-790,0,150],[-667.5,0,84],[-545,0,18],[-557,0,-187],[-569,3.85,-392],[-415.3,0,-392],[-262,0,-380],[-137,0,-492.5],[-12,0,-605]]}}var ar=["#f7c6d0","#bfe8e0","#fde2a6","#cfe0f8","#f9d1b0","#e3d4f3","#ffffff","#c8f0d0","#ffd6e8","#fff1c1"],Wm=["#ff4fb8","#3ff0ff","#ffd84a","#7cff6a","#ff6a3a","#b67aff"],qm=["OCEAN VIEW","STARLITE","THE PALMS","CORAL","FLAMINGO","TROPICS","SEA BREEZE","MOONGLOW","PELICAN","SUNRISE","NAUTILUS","BLUE WAVE","COMET","SAND DOLLAR","MERMAID"];function u1(i,e,t,n,s,r,o){let a=ar[o%ar.length],l=Wm[o%Wm.length];i.building(e,t,n,s,r,{color:a,style:"masonry",setback:!1,rooftop:!1});for(let u=4;u<r-1;u+=3.4)i.boxMesh(n,t+1,n+.9,s-1,u,u+.25,"#ffffff","flat",{collide:!1});let c=(t+s)/2;i.boxMesh(n-1,c-1.2,n+1.4,c+1.2,0,r+5,a,"flat");let h=qm[o%qm.length];hs(i,h,n+1.45,r/2+2.5,c,1.9,Math.min(r+3,h.length*1.4),Math.PI/2,{vertical:!0,fg:l,bg:"#1a1020",glow:l,fs:56,pad:8}),ze(i,new ke(.25,.25,s-t-2),cs(l),n+.2,r+.1,c).castShadow=!1,ze(i,new ke(.25,.25,s-t-2),cs(l),n+.95,4.3,c).castShadow=!1}function f1(i,e,t,n,s){let r=Pe("#e8e2d6");for(let[l,c]of[[-1.3,-1.3],[1.3,-1.3],[-1.3,1.3],[1.3,1.3]])nt(i,e+l-.12,t+c-.12,e+l+.12,t+c+.12,0,1.9,r);nt(i,e-1.8,t-2.2,e+1.8,t+2.2,1.9,2.1,Pe("#d8d0c0"));let o=jt(128,64,l=>{let c=n.length;n.forEach((h,u)=>{l.fillStyle=h,l.fillRect(0,u*64/c,128,64/c+1)}),l.fillStyle="rgba(255,255,255,.85)",l.fillRect(48,22,32,20)},!1),a=new tt(new ke(3,2.4,3),new Yt({map:o}));a.position.set(e,3.3,t),a.castShadow=!0,i.root.add(a),i.addBox(e-1.5,t-1.5,e+1.5,t+1.5,4.5,2.1),ze(i,new ke(3.6,.25,3.6),Pe(n[0]),e,4.6,t,0,0,.12);for(let l=0;l<4;l++)nt(i,e-2.2-(l+1)*1.1,t-.8,e-1.8-l*1.1,t+.8,0,1.9-l*.45,Pe("#d8d0c0"));i.mapRect(e-2,t-2,e+2,t+2,n[0])}function d1(i){let e=i.bounds,t=f=>-(f-5)*155,n=[];for(let f=5;f<=17;f++)n.push([t(f),f===5?26:f===17?24:16,f]);let s=-1470,r=-1780,o=[[-600,14],[-520,12],[-445,12],[-370,12],[-290,20],[-115,18],[0,14]];i.waterRect(262,-4e3,4e3,4e3,"#2fa0b8"),i.rect(88,e[1],262,e[3],.02,"#f0dfb4","#ecd9a8"),i.rect(256,e[1],262,e[3],.035,"#d9c79a",!1),i.park(11,t(15)+8,86,40,{trees:0,plaza:!1,color:"#76b25a"}),i.rect(70,e[1],80,40,.04,"#e6d9c0","#e6d9c0");for(let f=30;f>t(15);f-=12)i.prop("palm",20+i.rand(-3,3),f,i.rand(0,6),i.rand(.9,1.2)),i.R()<.6&&i.prop("palm",55+i.rand(-8,8),f+6,i.rand(0,6),i.rand(.9,1.3));i.plaza(12,t(15)+10,86,30,null,26);for(let[f,d]of o)f===0?Bi(i,f,d,t(15)-8,e[3]):f===-370?Bi(i,f,d,e[1],t(12)):Bi(i,f,d,e[1],e[3]);for(let[f,d,p]of n)Ai(i,f,d,e[0],p<=15?7:-106);i.rect(-600,r-12,-298,r+12,.04,"#e9e2d4","#e9e2d4"),i.plaza(-596,r-10,-302,r+10,null,46);for(let f=-590;f<-300;f+=14)i.prop("palm",f,r,i.rand(0,6),.9);i.rect(-438,s-7,-298,s+7,.04,"#e8b4a0","#e8b4a0"),i.plaza(-436,s-6,-300,s+6,null,16),Qc(i,o,n.map(f=>[f[0],f[1]]));for(let f=20;f>e[1]+20;f-=9)i.R()<.55&&i.prop("umbrella",i.rand(110,240),f,0,1,0,i.pick(["#ff6a8a","#3fb8ff","#ffd84a","#ffffff","#7cff6a","#ff8a3a"]));for(let f=0;f>e[1];f-=90)i.plaza(100,f-40,250,f,null,9);let a=["#e8242c","#ff8a1a","#ffd84a","#2fa85f","#2f5fa8","#7a3fb8"],l=[["#ffb3c6","#ffffff"],["#7fe3d8","#ffd84a"],["#ffd84a","#ff6a3a"],["#b7a4ff","#ffffff"],["#3fb8ff","#ff6a8a"],["#7cff6a","#2f5fa8"],["#ff8a3a","#ffffff"]];for(let f=5;f<=16;f++)f1(i,172,t(f)-20,f===12?a:l[f%l.length],f);let c=jt(256,64,f=>{f.fillStyle="#fbfbf7",f.fillRect(0,0,256,64),f.fillStyle="#2a6fa8",f.fillRect(0,52,256,8);for(let d=0;d<7;d++)f.beginPath(),f.arc(20+d*36,28,10,0,7),f.fill()},!1),h=new tt(new ke(22,7,30),[new Yt({map:c}),new Yt({map:c}),Pe("#f2f2ee"),Pe("#f2f2ee"),new Yt({map:c}),new Yt({map:c})]);h.position.set(52,3.5,t(10)),h.castShadow=!0,i.root.add(h),i.addBox(41,t(10)-15,63,t(10)+15,7),i.mapBuilding(41,t(10)-15,63,t(10)+15),ze(i,new Ye(4,4,9,16),Pe("#f6f6f2"),63,4.5,t(10)),i.addBox(60,t(10)-4,67,t(10)+4,9),ze(i,new ke(.4,.4,30),cs("#3ff0ff"),63.3,7.1,t(10)).castShadow=!1;let u=0;for(let f=0;f<n.length-1;f++){let d=n[f][0]-n[f][1]/2-rn,p=n[f+1][0]+n[f+1][1]/2+rn,x=n[f][2];for(let m=0;m<o.length-1;m++){let g=o[m][0]+o[m][1]/2+rn,v=o[m+1][0]-o[m+1][1]/2-rn;if(o[m][0]===-115){if(x>=15){i.block(g,p,90,d,{hMin:25,hMax:80,color:void 0,palette:ar,lot:[30,50],depth:40});continue}for(let y=p;y<d-6;){let b=Math.min(i.rand(22,36),d-y);if(b<10)break;u1(i,v-30,y+.8,v,y+b-.8,i.rand(11,18),u++),i.R()<.8&&i.building(g,y+1,v-34,y+b-1,i.rand(9,26),{color:i.pick(ar),style:"masonry",setback:!1}),y+=b}i.loops.push({r:[g-2.5,p-2.5,v+2.5,d+2.5],n:120});for(let y=p+4;y<d-4;y+=7)i.R()<.6&&i.prop("umbrella",v+3.2,y,0,.7,0,i.pick(["#ffffff","#ff6a8a","#3fb8ff","#ffd84a"]));i.plaza(v+1,p,v+4,d,null,6);continue}if(o[m+1][0]===0)continue;let S=p<s+20&&d>s-20||p<r+30&&d>r-30,M=o[m][0]===-290;if(p<r&&d>r&&g<-298){i.block(g,p,v,r-12-rn,{hMin:7,hMax:16,palette:ar,color:void 0,lot:[14,24],depth:24,people:30}),i.block(g,r+12+rn,v,d,{hMin:7,hMax:16,lot:[14,24],depth:24,people:30});continue}if(p<s&&d>s&&g<-298&&v>-440){i.block(g,p,v,s-7-rn,{hMin:8,hMax:12,color:"#f2b8a4",lot:[12,20],depth:20}),i.block(g,s+7+rn,v,d,{hMin:8,hMax:12,color:"#f7c9b0",lot:[12,20],depth:20});continue}let E=M?30:o[m][0]===-600||o[m][0]===-520?14:16;i.block(g,p,v,d,{hMin:M?9:7,hMax:E,lot:M?[18,32]:[14,22],depth:M?30:20,color:S?"#f4bba6":void 0,people:M?60:20,lowChance:.3}).forEach(y=>{y.h<16&&i.R()<.35&&i.prop("palm",i.rand(y.x0,y.x1),y.z1+2.5,i.rand(0,6),.8)})}}i.lamps(-8,e[1],8,e[3],30);for(let[f,d]of o.slice(0,6))i.parkCars(f-d/2,e[1],f+d/2,e[3],.18,["#ff6a8a","#3fb8ff","#ffffff","#ffd84a","#2a2a2a","#b7a4ff","#7fe3d8"]);return Kc(i,e,500,90,25,140,ar,[[262,-4e3,4e3,4e3]]),{spawn:[40,0,-15,Math.PI],goal:{pos:[172,4.75,t(12)-20],label:"Power core"},log:[52,9.3,t(10)],checkpoints:[[40,0,-15],[17.5,0,-240],[-5,0,t(8)],[37.5,0,-605],[80,0,t(10)+30],[140,0,t(11)],[140,0,t(12)]]}}function Zm(i,e){for(let t=0;t<e;t++){let n=i.rand(i.bounds[0],i.bounds[2]),s=i.rand(i.bounds[1],i.bounds[3]);i.props.sage=i.props.sage||[],i.props.sage.push({x:n,y:0,z:s,rot:i.rand(0,6),s:i.rand(.6,1.4)})}for(let t=0;t<e/8;t++)i.prop("joshua",i.rand(i.bounds[0],i.bounds[2]),i.rand(i.bounds[1],i.bounds[3]),i.rand(0,6),i.rand(.8,1.4));for(let t=0;t<e/10;t++){let n=i.rand(i.bounds[0],i.bounds[2]),s=i.rand(i.bounds[1],i.bounds[3]),r=i.rand(.6,2.2);i.prop("rock",n,s,i.rand(0,6),r),i.addBox(n-r,s-r*.8,n+r,s+r*.8,r*.7)}Xm(i,0,0,1300,1900,34,["#b48a6a","#9a7a66","#a8826e","#8a6e62","#c29a76"])}function p1(i){Zm(i,900);let e=[[-900,-260],[900,240]];i.roadSeg(e[0][0],e[0][1],e[1][0],e[1][1],11,{color:"#4a4a4e"});let t=a=>-260+(a+900)/1800*500;i.roadSeg(-120,t(-120),-200,520,8,{color:"#b89c74",map:"#c9b08a",paint:!1}),i.roadSeg(-200,520,-250,690,8,{color:"#b89c74",map:"#c9b08a",paint:!1});let n=Pe("#8a5a3a");nt(i,-40,t(-40)-48,4,t(-40)-26,0,4.4,n),i.mapBuilding(-40,t(-40)-48,4,t(-40)-26),ze(i,new ke(46,.4,24),Pe("#6a4a32"),-18,4.6,t(-40)-37),hs(i,"EARTHLINGS WELCOME",-18,6.6,t(-40)-25.6,14,2.2,0,{fg:"#ffe9a0",bg:"#3a2412",fs:56,glow:"#ffcc55"}),i.plaza(-50,t(-40)-24,20,t(-40)-8,"#b5a080",16,"#b5a080"),nt(i,10,t(10)-22,13,t(10)-14,0,2.6,Pe("#c8c4b8")),ze(i,new Ye(.2,.2,9,6),Pe("#444"),11.5,5,t(10)-12,-.6,0,0),Jc(i,11.5,6.6,t(10)-7,3,.3,{lights:"#ffd84a"});for(let a=0;a<12;a++){let l=i.rand(30,320),c=t(l)-i.rand(30,160),h=i.rand(5,9),u=i.rand(14,20);nt(i,l,c,l+h,c+u,0,3.3,Pe(i.pick(["#e8e4da","#d9d2c2","#c9c2b0","#e2dccd"]))),i.mapBuilding(l,c,l+h,c+u),i.loops.push({r:[l-3,c-3,l+h+3,c+u+3],n:2})}for(let a=0;a<10;a++)i.prop("car",i.rand(-48,15),t(0)-i.rand(10,22),i.rand(0,6),1,0,i.pick(["#e8e8e8","#8a4a2a","#3a4a6a","#c8b070"]));let s=180,r=t(180)-12;nt(i,s-3.2,r-.2,s-2.8,r+.2,0,3.4,Pe("#555")),nt(i,s+2.8,r-.2,s+3.2,r+.2,0,3.4,Pe("#555")),hs(i,"EXTRATERRESTRIAL HWY",s,3.6,r+.25,7,1.6,0,{fg:"#fff",bg:"#5a3a22",fs:54,lit:!1,border:"#fff"}),hs(i,"EXTRATERRESTRIAL HWY",s,3.6,r-.25,7,1.6,Math.PI,{fg:"#fff",bg:"#5a3a22",fs:54,lit:!1,border:"#fff"});for(let a=-780;a<=780;a+=40)nt(i,a-.15,519.85,a+.15,520.15,0,1.6,Pe("#ff7a1a"));for(let a of[-420,-320,-80,40])hs(i,"RESTRICTED AREA  NO TRESPASSING",a,1.8,518,6,1.4,Math.PI,{fg:"#c01818",bg:"#f2efe6",fs:40,lit:!1,border:"#c01818"});for(let a=-350;a<=-50;a+=4)Math.abs(a+200)>6&&nt(i,a-2,519.9,a+2,520.1,0,2.9,Pe("#9aa0a6"));i.mapRect(-350,519,-50,521,"#9aa0a6"),nt(i,-192,505,-184,512,0,3,Pe("#d8d2c2")),i.prop("car",-170,470,.8,1,0,"#f2f2f2"),i.prop("car",120,470,-.4,1,0,"#f2f2f2"),i.plaza(-185,470,-150,500,null,3),i.plaza(110,455,135,485,null,2),i.poly(Array.from({length:16},(a,l)=>[520+Math.cos(l/16*6.283)*9,-560+Math.sin(l/16*6.283)*9]),.03,"#9c7c5a","#9c7c5a");for(let a=0;a<14;a++){let l=a/14*6.283;i.prop("rock",520+Math.cos(l)*16,-560+Math.sin(l)*16,l,i.rand(.6,1.1))}i.poly([[-330,640],[-170,640],[-150,760],[-350,760]],.03,"#c4a67e","#c4a67e");let o=Jc(i,-250,1.5,700,9,.22,{lights:"#3a5a60"});return i.addBox(-258,692,-242,708,3.2),{spawn:[520,0,-560,Math.PI*.85],goal:{pos:[-250,.5,688],label:"The ship",radius:13},log:[180,0,t(180)-9],checkpoints:[[520,0,-560],[255,0,-293.4],[7.3,0,-16.8],[-85,0,136.6],[-160,0,300],[-200,0,490]],ship:o}}function m1(i){Zm(i,600),i.poly([[-760,-760],[760,-760],[700,-260],[200,-180],[-500,-230],[-760,-300]],.025,"#e2d8c2","#e2d8c2"),i.road(-30,-680,30,640,{color:"#3a3a3e",paintColor:"#f2f2f2"});for(let l=-670;l<640;l+=30)for(let c of[-30.5,30.5])ze(i,new ke(.6,.3,.6),cs(l<-600?"#3aff6a":"#fff2c8"),c,.2,l).castShadow=!1;i.road(-200,-40,-30,-20,{paint:!1}),i.road(-200,180,-30,200,{paint:!1}),i.road(-560,-40,-200,420,{color:"#4a4a4e",paint:!1});let e=Pe("#d8dbe0"),t=Pe("#9aa2ac"),n=[];for(let l=0;l<6;l++){let c=-20+l*70,h=-190,u=-130;nt(i,h,c,u,c+50,0,18,e),i.mapBuilding(h,c,u,c+50),ze(i,new Pn(44,15),t,u+.1,7.5,c+25,0,Math.PI/2,0),hs(i,String(13+l),u+.2,16,c+25,5,2.6,Math.PI/2,{fg:"#1a1a1a",bg:"#d8dbe0",fs:80,lit:!1}),n.push([h,c])}for(let l=0;l<4;l++){let c=40+l*90;i.building(-330,c,-240,c+50,i.rand(10,18),{color:"#cbbf9f",style:"masonry",setback:!1}),i.loops.push({r:[-333,c-3,-237,c+53]})}for(let l=0;l<3;l++){let c=-40+l*80;i.building(-520,c,-440,c+40,12,{color:"#bfb59a",style:"masonry",setback:!1})}nt(i,-110,470,-100,480,0,30,Pe("#c9c2b0")),ze(i,new ke(14,6,14),new It({color:"#3a9a7a"}),-105,33,475),i.addBox(-112,468,-98,482,36,30);for(let[l,c]of[[220,80],[260,300]]){nt(i,l-1,c-1,l+1,c+1,0,12,Pe("#9aa0a6"));let h=ze(i,new ht(7,16,8,0,Math.PI*2,0,Math.PI/3),Pe("#e8e8e8",{side:bn}),l,14,c,-1.1,0,0);h.userData.dynamic=!0,i.anim.push(u=>{h.rotation.y=u*.4})}let s=new It({color:"#fff2c8",transparent:!0,opacity:.32,depthWrite:!1,blending:Bn}),r=new It({color:"#fff2c8",transparent:!0,opacity:.08,depthWrite:!1,blending:Bn,side:bn}),o=[[-125,0],[-125,140],[-125,280],[-125,420],[60,-380],[180,-380],[60,-480],[180,-480],[120,-330],[-220,300],[-60,520]];for(let[l,c]of o){i.prop("flood",l,c,0);let h=new tt(new ai(16,24),s);h.rotation.x=-Math.PI/2,h.position.set(l,.08,c+6),i.root.add(h);let u=new tt(new Vn(16,9,20,1,!0),r);u.position.set(l,4.5,c+4),i.root.add(u)}let a=Jc(i,120,2.2,-430,9,.02,{lights:"#3ff0ff"});i.addBox(111,-439,129,-421,3.4);for(let l=0;l<6;l++){let c=l/6*6.283,h=120+Math.cos(c)*34,u=-430+Math.sin(c)*34;nt(i,h-4,u-3,h+4,u+3,0,3,Pe("#f2f2ee"))}i.plaza(80,-470,160,-390,null,26);for(let l=0;l<14;l++)i.prop("car",i.rand(-520,-350),i.rand(-60,420),i.rand(0,6),1,0,i.pick(["#f2f2f2","#2a2a2a","#6f7a52"]));return i.plaza(-200,-40,-40,420,null,26),i.plaza(-120,440,-60,520,null,8),{spawn:[380,0,740,Math.PI*1.15],goal:{pos:[120,.5,-418],label:"The ship",radius:14},log:[-160,18.4,375],checkpoints:[[380,0,740],[160,0,650],[-60,0,560],[-85,0,380],[-110,0,200],[-35,0,0],[40,0,-200]],ship:a}}var jc={masonry:["#c9b9a0","#b8a68c","#a8977f","#d6c8b0","#9b8a76","#c2b5a5","#8d7b6a","#d8d0c4","#b3a18a","#7f6d5d"],glass:["#8fb0c8","#a9bccf","#7f98ad","#b8c8d6","#6d8aa0","#9ab0c0"]},ei=[{id:"nevada",name:"Nevada",place:"Rachel, NV \xB7 Extraterrestrial Highway",bounds:[-800,-800,800,800],seed:51,groundColor:"#d6b98d",outerGround:"#cfae80",mapGround:"#d6b98d",mapRoad:"#4a4a4e",asphalt:"#4a4a4e",palette:jc,light:{sky:["#2f6fca","#a9cdef","#e5d2ae"],sunDir:[.45,.85,.35],sun:["#fff1d8",2.7],hemi:["#d2e6ff","#b8976a",1.35],fog:"#dbe5ee",fogNear:350,fogFar:2400},civ:{count:34,visR:30,panicMax:40,palette:{shirt:["#e8e8e8","#3a6fd1","#d94c4c","#6f7a52","#f2c230","#8a5a3a"],pants:["#2c3550","#6f6a52","#3b3b3b","#a8956c"]}},build:p1},{id:"chicago",name:"Chicago",place:"Millennium Park \xB7 Michigan Ave \xB7 the river",bounds:[-460,-1190,720,520],seed:312,groundColor:"#b9b6ae",outerGround:"#a9a69e",mapGround:"#c9c6be",palette:jc,light:{sky:["#2f6fd0","#9dc8f0","#dfe9f3"],sunDir:[.5,.72,.45],sun:["#fff0d6",2.5],hemi:["#d6e8ff","#8a8a80",1.25],fog:"#c8dcec",fogNear:280,fogFar:1900},civ:{count:230,visR:22,panicMax:33},build:c1},{id:"nyc",name:"New York",place:"Times Square \xB7 Bryant Park \xB7 Rockefeller Center",bounds:[-870,-1080,330,300],seed:212,waterTowers:.3,groundColor:"#aeaaa4",outerGround:"#9a968f",mapGround:"#bdb9b2",palette:jc,winLit:.35,light:{sky:["#34457f","#ee9f66","#f2bc8c"],sunDir:[-.72,.22,.4],sun:["#ffbe78",2.4],hemi:["#b8c4f0","#8a7a6a",1.75],fog:"#cf9e86",fogNear:220,fogFar:1500},civ:{count:290,visR:20,panicMax:26},build:h1},{id:"miami",name:"Miami",place:"South Beach \xB7 Ocean Drive \xB7 Lincoln Road",bounds:[-640,-1900,300,60],seed:305,groundColor:"#d8d2c4",outerGround:"#cfc6b4",mapGround:"#ddd6c6",palette:{masonry:ar,glass:["#bfe8e0","#cfe0f8","#a8d8e8"]},winLit:.4,light:{sky:["#4a5fa8","#f7a070","#f8c89a"],sunDir:[-.86,.16,.2],sun:["#ffb070",2.4],hemi:["#bcc4f0","#c9a080",1.25],fog:"#f0b898",fogNear:240,fogFar:1700},civ:{count:220,visR:24,panicMax:33,palette:{shirt:["#ff6a8a","#3fb8ff","#ffffff","#ffd84a","#7cff6a","#ff8a3a","#b67aff","#f2f2f2","#2a2a2a"],pants:["#f2f2f2","#2c3550","#d9c7a0","#3fb8ff","#ff6a8a"]}},build:d1},{id:"area51",name:"Area 51",place:"Groom Lake, NV \xB7 after dark",bounds:[-800,-800,800,800],seed:5151,night:!0,winLit:.9,groundColor:"#bfae8c",outerGround:"#b3a280",mapGround:"#bfae8c",mapRoad:"#3a3a3e",asphalt:"#3a3a3e",palette:jc,light:{sky:["#050918","#16204a","#262a44"],stars:!0,moon:"#f2f0ff",moonDir:[.35,.55,-.6],sunDir:[.35,.55,-.6],sunDisk:"#000000",sun:["#a8bcff",1.7],hemi:["#6a7ac0","#5a4a30",1.7],fog:"#121a34",fogNear:160,fogFar:1300},civ:{count:95,visR:24,panicMax:40,palette:{shirt:["#f2f2f2","#f2f2f2","#c8b68a","#6f7a52","#2b3a55"],pants:["#2b2b2b","#6f6a52","#c8b68a"],hair:["#1c1a18","#3b2a1e","#6b6b6b","#c9a36a"]}},build:m1}];var ao=[{id:"nevada",name:"Nevada",title:"The Crash Site",card:"You woke up alone in the desert. Past the fence is the ship your great-grandmother flew here. Get to it, and find out why it never left.",endKick:"Level 1 complete",endTitle:"The ship sleeps",endStory:"Three pieces gone, scattered to Chicago, New York and Miami. The lights inside won\u2019t wake without them.",log:"Day 1. The landing was not a landing. The hull cracked and three systems scattered on impact. The locals arrived before the smoke cleared.",music:{bpm:118,prog:[{r:33,v:[60,64,67,71]},{r:29,v:[57,60,64,67]},{r:26,v:[60,64,65,69]},{r:28,v:[59,62,64,69]}],bass:[0,null,null,0,null,null,12,null,0,null,null,7,null,10,null,null],stab:[0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0],stabType:"keys",clap:!0,lead:[[0,69,6],[8,72,4],[12,71,2],[14,69,2],[16,67,8],[28,64,4],[32,65,6],[40,69,4],[44,67,4],[48,64,12]],leadType:"twang"}},{id:"chicago",name:"Chicago",title:"The Gravity Coil",card:"The first piece, the gravity coil, ended up on a rooftop in the Loop. The streets are watched. The roofs mostly aren\u2019t.",endKick:"Level 2 complete",endTitle:"Coil recovered",endStory:"It hums when you hold it, like it remembers the ship. One down. New York next.",log:"Day 40. They took the gravity coil east, to a city on a lake that hums all night. I followed the hum.",music:{bpm:122,prog:[{r:29,v:[60,63,67,68]},{r:34,v:[61,65,68,72]},{r:27,v:[62,65,67,70]},{r:36,v:[58,63,67,70]}],bass:[0,null,0,null,null,null,12,null,0,null,null,0,null,null,10,12],stab:[0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0],stabType:"organ",clap:!0,lead:[[2,72,2],[4,75,2],[7,77,3],[12,75,2],[14,72,2],[18,70,2],[20,72,4],[34,72,2],[36,75,2],[39,79,3],[44,77,2],[46,75,2],[50,72,6]],leadType:"keys"}},{id:"nyc",name:"New York",title:"The Nav Crystal",card:"The navigation crystal is in Manhattan, where there are a lot more people looking. You can\u2019t go around all of them. Put them to sleep.",endKick:"Level 3 complete",endTitle:"Crystal recovered",endStory:"It throws a map of stars across your hands, then goes dark again. One more piece. Miami.",log:"Day 212. The crystal is under a million windows. Too many eyes for me. Maybe not for someone smaller.",music:{bpm:120,prog:[{r:26,v:[64,65,69,72]},{r:31,v:[65,69,71,76]},{r:36,v:[62,64,67,71]},{r:33,v:[61,64,67,70]}],bass:[0,null,null,null,7,null,null,null,12,null,null,null,10,null,7,null],stab:[0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0],stabType:"keys",clap:!0,lead:[[0,74,3],[4,77,2],[6,76,2],[8,74,4],[14,72,2],[16,69,8],[32,74,3],[36,77,2],[38,79,2],[40,81,6],[48,79,2],[50,77,2],[52,76,4],[56,74,8]],leadType:"horn"}},{id:"miami",name:"Miami",title:"The Power Core",card:"The power core is in Miami, out where the lights are bright and the cover is thin. Don\u2019t walk the open stretches. Blink across them.",endKick:"Level 4 complete",endTitle:"Core recovered",endStory:"It\u2019s warm, and getting warmer. All three pieces. Back to the desert.",log:"Day 300. The core is somewhere warm. I am too slow now, so I am leaving these logs where only our kind would look.",music:{bpm:124,prog:[{r:31,v:[65,69,70,74]},{r:36,v:[64,67,70,74]},{r:29,v:[64,67,69,72]},{r:34,v:[62,65,69,70]}],bass:[0,null,null,7,null,null,12,null,0,null,null,7,null,null,12,null],stab:[1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1],stabType:"piano",clap:!0,clave:[0,3,6,10,12],conga:[7,14,15],lead:[[0,74,2],[3,77,2],[6,79,2],[8,77,2],[10,74,2],[12,72,4],[16,70,2],[19,72,2],[22,74,6],[32,74,2],[35,77,2],[38,81,2],[40,79,2],[42,77,2],[44,74,4],[48,72,2],[50,70,2],[52,69,8]],leadType:"mallet"}},{id:"area51",name:"Area 51",title:"The Long Way Home",card:"Three pieces. One ship. They doubled the guard while you were gone, and the floodlights are on. Everything you\u2019ve learned, all at once.",endKick:"Level 5 complete",endTitle:"Liftoff",endStory:"",log:"Last entry. If you found these, you are my blood. Fix her gently. She remembers the way home.",music:{bpm:112,prog:[{r:39,v:[62,65,67,70]},{r:37,v:[60,63,65,68]},{r:36,v:[62,63,67,70]},{r:32,v:[60,62,67,68]}],bass:[0,null,null,null,null,null,null,null,0,null,null,12,null,null,null,null],stab:[0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0],stabType:"keys",clap:!1,lead:[[0,67,3],[3,70,3],[6,77,4],[10,74,3],[13,69,6],[32,67,3,-12],[35,70,3,-12],[38,77,4,-12],[42,74,3,-12],[45,69,8,-12]],leadType:"signal",leadAlways:!0}}];function Km(i){for(let t of i.children)t.isGroup&&Km(t);let e=new Map;for(let t of[...i.children])t.isMesh&&(t.updateMatrix(),(e.get(t.material)||e.set(t.material,[]).get(t.material)).push(t));for(let[t,n]of e){if(n.length<2)continue;let s=n.map(a=>{let l=a.geometry.index?a.geometry.toNonIndexed():a.geometry.clone();return l.applyMatrix4(a.matrix),l}),r=oo(s,!1);if(!r)continue;let o=new tt(r,t);o.castShadow=!0,i.add(o);for(let a of n)i.remove(a),a.geometry.dispose()}}var zt={skin:"#93cf3a",spot:"#5e9b2b",hoodie:"#c8322b",hoodieDark:"#9a231f",stripe:"#f2ebe3",tee:"#efe6da",denim:"#3b4766",denimDark:"#2a3350",glove:"#26262c",shoe:"#f1ece4",shoeDark:"#2d2a2e",shoeRed:"#b8312a",pack:"#6e5641",packDark:"#4a3a2c",glow:"#3ff0ff",brow:"#4a2f1f",eye:"#ffffff",iris:"#262a36",mouth:"#5a1720",tongue:"#e8737a"};function wt(i,e={}){let t=new gn({color:i,roughness:e.r??.75,metalness:e.m??0,emissiveIntensity:e.ei??1,map:e.map||null});return e.e&&(t.emissive=new xe(e.e)),t}function Le(i,e,t,n=0,s=0,r=0,o=0,a=0,l=0,c=1,h=1,u=1){let f=new tt(e,t);return f.position.set(n,s,r),f.rotation.set(o,a,l),f.scale.set(c,h,u),f.castShadow=!0,i.add(f),f}function g1(){return jt(512,256,(i,e,t)=>{i.fillStyle=zt.skin,i.fillRect(0,0,e,t);let n=(()=>{let s=11;return()=>(s=s*16807%2147483647)/2147483647})();for(let s=0;s<46;s++){let r=Math.pow(n(),1.5)*t*.55,o=n()*e,a=5+n()*11;r>t*.32&&Math.abs(o-e*.25)<e*.12||(i.fillStyle=n()<.5?zt.spot:"#6aa833",i.globalAlpha=.35+n()*.3,i.beginPath(),i.ellipse(o,r,a*1.3,a,n()*3,0,Math.PI*2),i.fill())}i.globalAlpha=.35,i.fillStyle="#e88b6a";for(let s of[e*.19,e*.31])i.beginPath(),i.ellipse(s,t*.58,20,12,0,0,Math.PI*2),i.fill();i.globalAlpha=1},!1)}function x1(){return jt(64,80,i=>{i.fillStyle=zt.tee,i.fillRect(0,0,64,80);let e=(t,n,s)=>{i.fillStyle=s,i.fillRect(t*4,n*4,4,4)};for(let t=6;t<=9;t++)for(let n=4;n<=5;n++)e(t,n,"#58c8f0");for(let t=3;t<=12;t++)e(t,6,"#9a5cd6");for(let t=2;t<=13;t++)e(t,7,"#7a3fb8");for(let t=4;t<=11;t++)e(t,8,"#5a2c90");[4,7,10].forEach(t=>e(t,7,"#ffd84a"));for(let t=9;t<=16;t++)for(let n=7-Math.floor((t-9)/2);n<=8+Math.floor((t-9)/2);n++)e(n,t,"#ffe27a");e(7,13,"#3a2a10"),e(8,13,"#3a2a10"),e(7,14,"#3a2a10"),[[2,2],[13,3],[3,12],[12,11]].forEach(([t,n])=>e(t,n,"#f0b84a"))},!1)}function _1(){return jt(64,64,i=>{i.fillStyle=zt.stripe,i.beginPath(),i.arc(32,32,30,0,7),i.fill(),i.strokeStyle=zt.shoeRed,i.lineWidth=5,i.beginPath(),i.ellipse(32,32,26,9,-.3,0,7),i.stroke(),i.fillStyle=zt.shoeRed,i.beginPath(),i.arc(32,32,12,0,7),i.fill(),i.fillStyle="#ffd84a",i.beginPath();for(let e=0;e<10;e++){let t=e*Math.PI/5-Math.PI/2,n=e%2?4:9;i.lineTo(32+Math.cos(t)*n,32+Math.sin(t)*n)}i.fill()},!1)}function Jm(){let i={skin:wt(zt.skin,{r:.55}),head:wt("#ffffff",{r:.5,map:g1()}),hoodie:wt(zt.hoodie,{r:.85}),hoodieDark:wt(zt.hoodieDark,{r:.9}),stripe:wt(zt.stripe),tee:wt("#ffffff",{map:x1()}),patch:wt("#ffffff",{map:_1()}),denim:wt(zt.denim,{r:.95}),denimDark:wt(zt.denimDark,{r:.95}),glove:wt(zt.glove,{r:.6}),shoe:wt(zt.shoe,{r:.6}),shoeDark:wt(zt.shoeDark),shoeRed:wt(zt.shoeRed),pack:wt(zt.pack,{r:.8}),packDark:wt(zt.packDark),paper:wt("#d9c39a"),glow:wt("#0a3a40",{e:zt.glow,ei:1.6}),eye:wt(zt.eye,{r:.2}),iris:wt(zt.iris,{r:.2}),brow:wt(zt.brow),mouth:wt(zt.mouth),tongue:wt(zt.tongue),bulb:wt("#fff6a0",{e:"#ffe45a",ei:2.2,r:.2}),metal:wt("#b9c0c8",{r:.3,m:.6}),ufoDome:wt("#7fd6ff",{r:.2}),ufoLight:wt("#ffd84a",{e:"#ffcc33",ei:1.5})},e=new ct;e.name="alien";let t=new ct;t.position.y=.5,e.add(t);let n=[];for(let v of[1,-1]){let S=new ct;S.position.set(v*.085,0,0),t.add(S),Le(S,new Ye(.1,.115,.3,10),i.denim,0,-.16,0),Le(S,new Ye(.09,.08,.07,10),i.denimDark,0,-.34,0),Le(S,new ke(.035,.09,.1),i.denimDark,v*.115,-.19,.01),Le(S,new ke(.006,.012,.06),i.glow,v*.134,-.165,.01),Le(S,new Ye(.04,.04,.06,8),i.skin,0,-.39,0);let M=new ct;M.position.set(0,-.44,.03),S.add(M),Le(M,new ke(.14,.045,.27),i.shoe,0,-.035,0),Le(M,new ke(.142,.012,.272),i.shoeRed,0,-.008,0),Le(M,new ke(.128,.085,.23),i.shoe,0,.03,-.005),Le(M,new ke(.13,.05,.08),i.shoeDark,0,.02,.085),Le(M,new ke(.13,.07,.07),i.shoeRed,0,.03,-.09),Le(M,new ke(.09,.05,.08),i.shoeRed,0,.085,-.03,-.3),Le(M,new ke(.004,.012,.09),i.glow,v*.071,-.035,.04),Le(M,new cn(.022,.006,6,14),i.shoeRed,v*.066,.035,0,0,Math.PI/2,.4).scale.set(1,.55,1),Le(M,new ht(.011,6,4),i.shoeRed,v*.066,.035,0);for(let _=0;_<3;_++)Le(M,new ke(.08,.008,.012),i.stripe,0,.076-_*.005,.04-_*.03);n.push(S)}let s=new ct;s.position.y=0,t.add(s),Le(s,new Gr(.155,.1,6,14),i.hoodie,0,.2,0,0,0,0,1,1,.8),Le(s,new Ye(.15,.135,.07,14),i.hoodieDark,0,.035,0,0,0,0,1,1,.82),Le(s,new Ye(.128,.115,.05,14),wt(zt.tee),0,0,0,0,0,0,1,1,.85),Le(s,new ke(.03,.08,.012),wt("#d8d0c2"),.02,-.03,.098),Le(s,new Pn(.135,.2),i.tee,0,.2,.1245),Le(s,new ke(.008,.25,.01),i.metal,.072,.19,.118,0,.35),Le(s,new ke(.008,.25,.01),i.metal,-.072,.19,.118,0,-.35),Le(s,new ai(.03,14),i.patch,.105,.28,.093,0,.75),Le(s,new cn(.11,.05,8,16),i.hoodie,0,.385,-.035,Math.PI/2-.25);for(let v of[1,-1])Le(s,new Ye(.006,.006,.12,4),i.stripe,v*.045,.31,.12);let r=new ct;r.position.set(0,.22,-.13),s.add(r),Le(r,new ke(.25,.27,.12),i.pack,0,0,-.06),Le(r,new ke(.21,.08,.04),i.packDark,0,-.08,-.13),Le(r,new cn(.06,.014,8,20),i.glow,0,.03,-.122),Le(r,new ai(.047,16),wt("#18242a"),0,.03,-.121,0,Math.PI),Le(r,new ai(.02,12),i.glow,0,.03,-.123,0,Math.PI);for(let v of[1,-1])Le(r,new ke(.012,.12,.03),i.glow,v*.128,.02,-.06),Le(r,new ke(.035,.3,.02),i.packDark,v*.075,.02,.2,.15);for(let v=0;v<3;v++)Le(r,new ke(.085,.13,.008),i.paper,-.06+v*.02,.17,-.04-v*.02,-.1,0,.25-v*.15);let o=new ct;o.position.set(.07,-.13,-.12),r.add(o),Le(o,new cn(.012,.003,4,10),i.metal,0,0,0),Le(o,new Ye(.003,.003,.04,4),i.metal,0,-.025,0),Le(o,new ht(.04,12,6),i.metal,0,-.06,0,0,0,0,1,.32,1),Le(o,new ht(.018,10,6,0,Math.PI*2,0,Math.PI/2),i.ufoDome,0,-.055,0);for(let v=0;v<4;v++)Le(o,new ht(.006,4,3),i.ufoLight,Math.cos(v*1.57)*.032,-.063,Math.sin(v*1.57)*.032);let a=[];for(let v of[1,-1]){let S=new ct;S.position.set(v*.165,.33,0),s.add(S),Le(S,new ht(.075,10,8),i.hoodie,0,-.01,0),Le(S,new Gr(.062,.15,4,10),i.hoodie,0,-.12,0);for(let E of[-.075,-.105])Le(S,new Ye(.0645,.0645,.016,10),i.stripe,0,E,0);Le(S,new Ye(.055,.05,.04,10),i.hoodieDark,0,-.23,0),Le(S,new Ye(.03,.03,.03,8),i.skin,0,-.26,0),Le(S,new Ye(.036,.036,.03,10),i.glove,0,-.28,0),Le(S,new ke(.03,.014,.008),i.glow,v*.005,-.28,.036);let M=new ct;M.position.y=-.33,S.add(M),Le(M,new ht(.052,10,8),i.glove,0,0,0,0,0,0,.9,1,1.05);for(let E=0;E<3;E++)Le(M,new ht(.016,6,5),i.skin,v*.005,-.05,.02-E*.022);Le(M,new ht(.017,6,5),i.skin,-v*.035,-.02,.035),a.push(S)}let l=new ct;l.position.y=.44,s.add(l),Le(l,new Ye(.045,.055,.06,10),i.skin,0,0,0);let c=Le(l,new ht(.25,28,20),i.head,0,.24,0,0,-Math.PI/2,0,1.03,.96,.97);c.name="skull";for(let v of[1,-1]){Le(l,new ht(.085,16,12),i.eye,v*.095,.215,.195,0,0,0,1,1.12,.55),Le(l,new ht(.056,14,10),i.iris,v*.09,.205,.226,0,0,0,1,1.1,.45),Le(l,new ht(.017,6,5),i.eye,v*.09+.022,.235,.252),Le(l,new ht(.008,5,4),i.eye,v*.09-.02,.185,.25),Le(l,new ke(.105,.026,.03),i.brow,v*.095,.315,.205,.25,0,v*.33);let S=new ct;S.position.set(v*.22,.27,-.02),S.rotation.set(0,0,v*(-Math.PI/2+.32)),l.add(S),Le(S,new Vn(.085,.3,10),i.skin,0,.14,0,0,0,0,1,1,.45),Le(S,new Vn(.05,.2,8),wt("#79b430"),0,.12,.022,0,0,0,1,1,.25)}let h=new ct;h.position.set(.015,.105,.225),h.rotation.x=-.25,l.add(h),Le(h,new ai(.06,14,Math.PI,Math.PI),i.mouth,0,.012,0,0,0,0,1,.75,1),Le(h,new ai(.03,10,Math.PI,Math.PI),i.tongue,.01,-.012,.002),Le(h,new ke(.1,.012,.01),i.eye,0,.008,.003),Le(h,new cn(.06,.007,4,14,Math.PI),wt("#5d8f26"),0,.012,0,0,0,Math.PI,1,.75,1);let u=new ct;u.position.set(0,.46,-.02),l.add(u);let f=new Xr([new L(0,0,0),new L(0,.16,-.02),new L(.05,.29,-.01),new L(.16,.32,0),new L(.24,.25,.01),new L(.26,.17,.01)]);Le(u,new ca(f,24,.017,6),i.skin),Le(u,new Ye(.022,.03,.035,8),wt("#d9c25a",{r:.4,m:.4}),.26,.15,.01);let d=Le(u,new ht(.058,16,12),i.bulb,.26,.095,.01),p=jt(64,64,v=>{let S=v.createRadialGradient(32,32,2,32,32,32);S.addColorStop(0,"rgba(255,240,150,1)"),S.addColorStop(.35,"rgba(255,220,90,.45)"),S.addColorStop(1,"rgba(255,200,60,0)"),v.fillStyle=S,v.fillRect(0,0,64,64)},!1),x=new Jn(new Gn({map:p,blending:Bn,depthWrite:!1,transparent:!0}));x.scale.setScalar(.32),x.position.copy(d.position),u.add(x),Km(e),e.scale.setScalar(.92),e.traverse(v=>{v.isMesh&&(v.castShadow=!0)});let m={ph:0,sway:0,swayV:0,swayZ:0,swayZV:0,lastSpeed:0,blink:0,keyV:0,key:0};function g(v,S){let M=S.speed||0,E=Math.min(1,M/8);m.ph+=v*(M>.2?3.2+M*1.05:1.6);let _=Math.sin(m.ph),y=0,b=0,N=0,C=0,D=.12,R=[0,0];S.grounded?M>.2?(y=_*(.45+E*.4),b=-_*(.45+E*.55),N=E*.18,C=Math.abs(Math.cos(m.ph))*(.02+E*.035)):C=Math.sin(m.ph)*.006:S.floating?(y=Math.sin(m.ph*.6)*.15,D=1.05+Math.sin(m.ph)*.08,N=.05,R=[-.15,.15]):(y=0,R=[-.65,.35],D=.6,b=-.4,N=S.vy>0?-.05:.08),n[0].rotation.x=y+R[0],n[1].rotation.x=-y+R[1],a[0].rotation.set(b,0,D),a[1].rotation.set(-b,0,-D),S.casting&&(a[1].rotation.set(-1.9,0,-.3),a[0].rotation.set(-.6,0,.4)),S.cower&&(a[0].rotation.set(-2.6,0,.5),a[1].rotation.set(-2.6,0,-.5)),t.position.y=.5+C,s.rotation.x=N,l.rotation.x=-N*.6+(M<.2&&S.grounded?Math.sin(m.ph*.35)*.04:0),l.rotation.y=M<.2&&S.grounded?Math.sin(m.ph*.23)*.25:0;let U=(M-m.lastSpeed)/Math.max(v,.001);m.lastSpeed=M;let I=-Math.max(-.5,Math.min(.5,U*.02))+(S.grounded?0:(S.vy||0)*-.02);m.swayV+=((I-m.sway)*60-m.swayV*6)*v,m.sway+=m.swayV*v,m.swayZV+=((Math.sin(m.ph)*E*.12-m.swayZ)*50-m.swayZV*5)*v,m.swayZ+=m.swayZV*v,u.rotation.set(m.sway,0,m.swayZ),m.keyV+=((-s.rotation.x-m.key)*40-m.keyV*3+_*E*6)*v,m.key+=m.keyV*v,o.rotation.x=m.key;let B=S.floating||S.casting?3.6:S.hidden?.9:S.sneaking?1.5:2.2;i.bulb.emissiveIntensity+=(B-i.bulb.emissiveIntensity)*Math.min(1,v*8),x.scale.setScalar(.3+(i.bulb.emissiveIntensity-2.2)*.14+Math.sin(m.ph*2)*.02),i.glow.emissiveIntensity=1.4+Math.sin(performance.now()*.004)*.3}return{root:e,update:g,bulbWorld:()=>d.getWorldPosition(new L)}}function $m(i){let e=new Map,t=new Map,n=i.clone();return jm(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function jm(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)jm(i.children[n],e.children[n],t)}var eh=class extends Ni{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new mf(t)}),this.register(function(t){return new gf(t)}),this.register(function(t){return new xf(t)}),this.register(function(t){return new wf(t)}),this.register(function(t){return new Af(t)}),this.register(function(t){return new Rf(t)}),this.register(function(t){return new yf(t)}),this.register(function(t){return new vf(t)}),this.register(function(t){return new Mf(t)}),this.register(function(t){return new Sf(t)}),this.register(function(t){return new pf(t)}),this.register(function(t){return new bf(t)}),this.register(function(t){return new _f(t)}),this.register(function(t){return new Ef(t)}),this.register(function(t){return new Tf(t)}),this.register(function(t){return new ff(t)}),this.register(function(t){return new th(t,mt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new th(t,mt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Cf(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=ss.extractUrlBase(e);o=ss.resolveURL(c,this.path)}else o=ss.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Yr(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===i0){try{o[mt.KHR_BINARY_GLTF]=new If(e)}catch(u){s&&s(u);return}r=JSON.parse(o[mt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Ff(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case mt.KHR_MATERIALS_UNLIT:o[u]=new df;break;case mt.KHR_DRACO_MESH_COMPRESSION:o[u]=new Pf(r,this.dracoLoader);break;case mt.KHR_TEXTURE_TRANSFORM:o[u]=new Lf;break;case mt.KHR_MESH_QUANTIZATION:o[u]=new Nf;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function y1(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Zt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var mt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},ff=class{constructor(e){this.parser=e,this.name=mt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new xe(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],On);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new $s(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new xa(h),c.distance=u;break;case"spot":c=new ga(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),ki(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},df=class{constructor(){this.name=mt.KHR_MATERIALS_UNLIT}getMaterialType(){return It}extendParams(e,t,n){let s=[];e.color=new xe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],On),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Wt))}return Promise.all(s)}},pf=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},mf=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new oe(r,r)}return Promise.all(s)}},gf=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(s)}},xf=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},_f=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},yf=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new xe(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],On)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Wt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},vf=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},Mf=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new xe().setRGB(r[0],r[1],r[2],On),Promise.all(s)}},Sf=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_IOR}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},bf=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new xe().setRGB(r[0],r[1],r[2],On),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Wt)),Promise.all(s)}},Tf=class{constructor(e){this.parser=e,this.name=mt.EXT_MATERIALS_BUMP}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},Ef=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},wf=class{constructor(e){this.parser=e,this.name=mt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Af=class{constructor(e){this.parser=e,this.name=mt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},Rf=class{constructor(e){this.parser=e,this.name=mt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},th=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,s.mode,s.filter),d})})}else return null}},Cf=class{constructor(e){this.name=mt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==ui.TRIANGLES&&c.mode!==ui.TRIANGLE_STRIP&&c.mode!==ui.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,d=[];for(let p of u){let x=new Ve,m=new L,g=new kt,v=new L(1,1,1),S=new bi(p.geometry,p.material,f);for(let E=0;E<f;E++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,E),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,E),l.SCALE&&v.fromBufferAttribute(l.SCALE,E),S.setMatrixAt(E,x.compose(m,g,v));let M=null;for(let E in l)if(E==="_COLOR_0"){let _=l[E];S.instanceColor=new ji(_.array,_.itemSize,_.normalized)}else if(E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"){if(M===null){let y=S.geometry;M=new Rt,M.name=y.name;for(let b in y.attributes)M.setAttribute(b,y.attributes[b]);for(let b in y.morphAttributes)M.morphAttributes[b]=y.morphAttributes[b];y.index!==null&&M.setIndex(y.index),M.morphTargetsRelative=y.morphTargetsRelative;for(let b of y.groups)M.addGroup(b.start,b.count,b.materialIndex);y.boundingBox!==null&&(M.boundingBox=y.boundingBox.clone()),y.boundingSphere!==null&&(M.boundingSphere=y.boundingSphere.clone()),M.drawRange.start=y.drawRange.start,M.drawRange.count=y.drawRange.count,M.userData=Object.assign({},y.userData),S.geometry=M}let _=l[E];M.setAttribute(E,new ji(_.array,_.itemSize,_.normalized))}Ft.prototype.copy.call(S,p),this.parser.assignFinalMaterial(S),d.push(S)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},i0="glTF",Na=12,Qm={JSON:1313821514,BIN:5130562},If=class{constructor(e){this.name=mt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Na),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==i0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Na,r=new DataView(e,Na),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===Qm.JSON){let c=new Uint8Array(e,Na+o,a);this.content=n.decode(c)}else if(l===Qm.BIN){let c=Na+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Pf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=mt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=Uf[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Uf[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[e.attributes[h]],d=lo[f.componentType];c[u]=d.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(d){for(let p in d.attributes){let x=d.attributes[p],m=l[p];m!==void 0&&(x.normalized=m)}u(d)},a,c,On,f)})})}},Lf=class{constructor(){this.name=mt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Nf=class{constructor(){this.name=mt.KHR_MESH_QUANTIZATION}},nh=class extends Li{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=s-t,u=(n-t)/h,f=u*u,d=f*u,p=e*c,x=p-c,m=-2*d+3*f,g=d-f,v=1-m,S=g-f+u;for(let M=0;M!==a;M++){let E=o[x+M+a],_=o[x+M+l]*h,y=o[p+M+a],b=o[p+M]*h;r[M]=v*E+S*_+m*y+g*b}return r}},v1=new kt,Df=class extends nh{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return v1.fromArray(r).normalize().toArray(r),r}},ui={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},lo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},e0={9728:Qt,9729:an,9984:jl,9985:Qr,9986:nr,9987:ci},t0={33071:ri,33648:Lr,10497:Ii},cf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Uf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Es={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},M1={CUBICSPLINE:void 0,LINEAR:ks,STEP:Bs},hf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function S1(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new gn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Di})),i.DefaultMaterial}function lr(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ki(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function b1(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(f)}if(s){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],f=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function T1(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function E1(i){let e,t=i.extensions&&i.extensions[mt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+uf(t.attributes):e=i.indices+":"+uf(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+uf(i.targets[n]);return e}function uf(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Of(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function w1(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var A1=new Ve,Ff=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new y1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?(this.textureLoader=new da(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new _a(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Yr(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return lr(r,a,s),ki(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[mt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(ss.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=cf[s.type],a=lo[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Dt(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=cf[s.type],c=lo[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0,x,m;if(d&&d!==u){let g=Math.floor(f/d),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count,S=t.cache.get(v);S||(x=new c(a,g*d,s.count*d/h),S=new zs(x,d/h),t.cache.add(v,S)),m=new ys(S,l,f%d/h,p)}else a===null?x=new c(s.count*l):x=new c(a,f,s.count*l),m=new Dt(x,l,p);if(s.sparse!==void 0){let g=cf.SCALAR,v=lo[s.sparse.indices.componentType],S=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,E=new v(o[1],S,s.sparse.count*g),_=new c(o[2],M,s.sparse.count*l);a!==null&&(m=new Dt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let y=0,b=E.length;y<b;y++){let N=E[y];if(m.setX(N,_[y*l]),l>=2&&m.setY(N,_[y*l+1]),l>=3&&m.setZ(N,_[y*l+2]),l>=4&&m.setW(N,_[y*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=e0[f.magFilter]||an,h.minFilter=e0[f.minFilter]||ci,h.wrapS=t0[f.wrapS]||Ii,h.wrapT=t0[f.wrapT]||Ii,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Qt&&h.minFilter!==an,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1,h;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)h=n.getDependency("bufferView",o.bufferView).then(function(f){return new Promise(function(d,p){t.parse(f,d,p)})});else{if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(f){c=!0;let d=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(l).then(function(f){return new Promise(function(d,p){let x=d;t.isImageBitmapLoader===!0&&(x=function(m){let g=new ln(m);g.needsUpdate=!0,d(g)}),t.load(ss.resolveURL(f,r.path),x,void 0,p)})})}let u=h.then(function(f){return c===!0&&a.revokeObjectURL(l),ki(f,o),f.userData.mimeType=o.mimeType||w1(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[mt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[mt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[mt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Ms,Mn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new zr,Mn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return gn}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[mt.KHR_MATERIALS_UNLIT]){let u=s[mt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new xe(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],On),a.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Wt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=bn);let h=r.alphaMode||hf.OPAQUE;if(h===hf.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===hf.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==It&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new oe(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==It&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==It){let u=r.emissiveFactor;a.emissive=new xe().setRGB(u[0],u[1],u[2],On)}return r.emissiveTexture!==void 0&&o!==It&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Wt)),Promise.all(c).then(function(){let u=new o(a);return r.name&&(u.name=r.name),ki(u,r),t.associations.set(u,{materials:e}),r.extensions&&lr(s,u,r),u})}createUniqueName(e){let t=Nt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[mt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return n0(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=E1(c),u=s[h];if(u)o.push(u.promise);else{let f;c.extensions&&c.extensions[mt.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=n0(new Rt,c,t),c.mode===ui.TRIANGLE_STRIP?f=f.then(d=>nf(d,Ra)):c.mode===ui.TRIANGLE_FAN&&(f=f.then(d=>nf(d,to))),s[h]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?S1(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,p=h.length;d<p;d++){let x=h[d],m=o[d],g,v=c[d];if(m.mode===ui.TRIANGLES||m.mode===ui.TRIANGLE_STRIP||m.mode===ui.TRIANGLE_FAN||m.mode===void 0){let S=r.isSkinnedMesh===!0,M=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");S&&M===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=S&&M?new Wo(x,v):new tt(x,v),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(m.mode===ui.LINES)g=new Yo(x,v);else if(m.mode===ui.LINE_STRIP)g=new Vs(x,v);else if(m.mode===ui.LINE_LOOP)g=new Zo(x,v);else if(m.mode===ui.POINTS)g=new Xs(x,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&T1(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),ki(g,r),m.extensions&&lr(s,g,m),t.assignFinalMaterial(g),u.push(g)}for(let d=0,p=u.length;d<p;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&lr(s,u[0],r),u[0];let f=new ct;r.extensions&&lr(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,p=u.length;d<p;d++)f.add(u[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new on(kc.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Js(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ki(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let f=new Ve;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new qo(a,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){let d=s.channels[u],p=s.samplers[d.sampler],x=d.target,m=x.node,g=s.parameters!==void 0?s.parameters[p.input]:p.input,v=s.parameters!==void 0?s.parameters[p.output]:p.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",v)),c.push(p),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],p=u[2],x=u[3],m=u[4],g=[];for(let S=0,M=f.length;S<M;S++){let E=f[S],_=d[S],y=p[S],b=x[S],N=m[S];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();let C=n._createAnimationTracks(E,_,y,b,N);if(C)for(let D=0;D<C.length;D++)g.push(C[D])}let v=new Zs(r,void 0,g);return ki(v,s),v})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,A1)});for(let d=0,p=u.length;d<p;d++)h.add(u[d]);if(h.userData.pivot!==void 0&&u.length>0){let d=h.userData.pivot,p=u[0];h.pivot=new L().fromArray(d),h.position.x-=d[0],h.position.y-=d[1],h.position.z-=d[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new kr:c.length>1?h=new ct:c.length===1?h=c[0]:h=new Ft,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),ki(h,r),r.extensions&&lr(n,h,r),r.matrix!==void 0){let u=new Ve;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new ct;n.name&&(r.name=s.createUniqueName(n.name)),ki(r,n),n.extensions&&lr(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++){let f=l[h];f.parent!==null?r.add($m(f)):r.add(f)}let c=h=>{let u=new Map;for(let[f,d]of s.associations)(f instanceof Mn||f instanceof ln)&&u.set(f,d);return h.traverse(f=>{let d=s.associations.get(f);d!=null&&u.set(f,d)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];function c(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}Es[r.path]===Es.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let h;switch(Es[r.path]){case Es.weights:h=ts;break;case Es.rotation:h=ns;break;case Es.translation:case Es.scale:h=bs;break;default:n.itemSize===1?h=ts:h=bs;break}let u=s.interpolation!==void 0?M1[s.interpolation]:ks,f=this._getArrayFromAccessor(n);for(let d=0,p=l.length;d<p;d++){let x=new h(l[d]+"."+Es[r.path],t.array,f,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Of(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof ns?Df:nh;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function R1(i,e,t){let n=e.attributes,s=new vn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),a.normalized){let h=Of(lo[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new L,l=new L;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,p=f.max;if(d!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(p[2]))),f.normalized){let x=Of(lo[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new zn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function n0(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=Uf[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return dt.workingColorSpace!==On&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${dt.workingColorSpace}" not supported.`),ki(i,e),R1(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?b1(i,e.targets,t):i})}var C1=new eh,s0=i=>new Promise((e,t)=>C1.load(i,e,void 0,t)),r0={hips:["Hips","mixamorigHips","hips","pelvis"],spine:["Spine","mixamorigSpine","spine"],head:["Head","mixamorigHead","head"],legL:["LeftUpLeg","mixamorigLeftUpLeg","thigh_l","L_Thigh"],legR:["RightUpLeg","mixamorigRightUpLeg","thigh_r","R_Thigh"],armL:["LeftArm","mixamorigLeftArm","upperarm_l","L_UpperArm"],armR:["RightArm","mixamorigRightArm","upperarm_r","R_UpperArm"]};function I1(i,e){let t=null;return i.traverse(n=>{!t&&n.isBone&&e.some(s=>n.name===s||n.name.endsWith(":"+s))&&(t=n)}),t}async function o0(i,e={}){let t=await s0(i),n=t.scene;n.traverse(U=>{U.isMesh&&(U.castShadow=!0,U.receiveShadow=!1,U.frustumCulled=!1,U.material&&(U.material.envMapIntensity=.6))});let s=new vn().setFromObject(n),r=s.max.y-s.min.y||1,o=(e.height||1.05)/r;n.scale.setScalar(o),n.position.y=-s.min.y*o;let a=new ct;a.add(n);let l=new ya(n),c={},h=(U,I)=>{for(let B of U.tracks){if(!/hips\.position$/i.test(B.name))continue;let A=B.values,O=A[0],J=A[1],G=A[2];for(let q=0;q<A.length;q+=3)A[q]=O,A[q+2]=G,I||(A[q+1]=J)}return U},u=(U,I)=>{I&&!c[U]&&(c[U]=l.clipAction(h(I,U!=="jump")))};for(let U of t.animations){let I=U.name.toLowerCase();/idle|stand/.test(I)?u("idle",U):/run|sprint/.test(I)?u("run",U):/walk/.test(I)?u("walk",U):/jump/.test(I)?u("jump",U):/float|fly|swim/.test(I)?u("float",U):/cast|spell|point/.test(I)&&u("cast",U)}e.clips&&await Promise.all(Object.entries(e.clips).map(async([U,I])=>{try{let B=await s0(I);u(U,B.animations[0])}catch(B){console.warn("hero clip failed",U,B)}}));let f=null,d=(U,I=.18)=>{let B=c[U]||null;B!==f&&(B&&(B.reset().setEffectiveWeight(1).fadeIn(I).play(),U==="jump"&&(B.setLoop(Oc,1),B.clampWhenFinished=!0,B.time=e.jumpStart??.55)),f&&f.fadeOut(I),f=B)},p={};for(let U in r0)p[U]=I1(n,r0[U]);let x={};for(let U in p)p[U]&&(x[U]=p[U].quaternion.clone());let m=new kt,g=new yn,v=(()=>{let U=document.createElement("canvas");U.width=U.height=64;let I=U.getContext("2d"),B=I.createRadialGradient(32,32,2,32,32,32);return B.addColorStop(0,"rgba(255,240,150,1)"),B.addColorStop(.35,"rgba(255,220,90,.45)"),B.addColorStop(1,"rgba(255,200,60,0)"),I.fillStyle=B,I.fillRect(0,0,64,64),new Ws(U)})(),S=new Jn(new Gn({map:v,blending:Bn,depthWrite:!1,transparent:!0}));S.scale.setScalar(.3);let M=new L(...e.bulb||[0,.27,.08]).multiplyScalar(e.height||1.05),E=new L,_=new kt,y=new kt,b=new L;a.add(S);let N=()=>{if(!p.head){S.position.set(0,.95*(e.height||1.05),.05);return}a.updateMatrixWorld(!0),p.head.getWorldPosition(E),a.worldToLocal(E),S.position.copy(E).add(M)},C={ph:0,glow:1},D=(U,I,B,A,O)=>{U&&(m.setFromEuler(g.set(B,A,O)),U.quaternion.copy(x[I]).multiply(m))};function R(U,I){let B=I.speed||0,A=I.grounded?I.casting&&c.cast?"cast":B>4&&c.run?"run":B>.2?c.walk?"walk":c.run?"run":null:c.idle?"idle":null:I.floating&&c.float?"float":c.jump?"jump":null;if(d(A),f&&(A==="run"||A==="walk")&&(f.timeScale=Math.max(.6,Math.min(1.6,B/(A==="run"?7:2.5)))),l.update(U),!f){C.ph+=U*(B>.2?3.2+B*1.05:1.6);let J=Math.sin(C.ph),G=Math.min(1,B/8),q=I.grounded&&B>.2?J*(.45+G*.4):I.grounded?0:.3,j=I.grounded&&B>.2?J*(.4+G*.5):0;D(p.legL,"legL",q,0,0),D(p.legR,"legR",-q,0,0),D(p.armL,"armL",-j,0,0),D(p.armR,"armR",I.casting?-1.6:j,0,0),D(p.spine,"spine",G*.15,0,0),p.hips&&(p.hips.position.y+=0)}N();let O=I.floating||I.casting?1.6:I.hidden?.45:I.sneaking?.7:1;C.glow+=(O-C.glow)*Math.min(1,U*8),S.scale.setScalar(.22*C.glow+Math.sin(performance.now()*.004)*.012)}return{root:a,update:R,bulbWorld:()=>S.getWorldPosition(new L),clips:Object.keys(c)}}var ee={ctx:null,master:null,mGain:null,sGain:null,padBus:null,filt:null,tGain:null,muted:!1,tense:!1,agV:null,gridV:null,stepT:0,beat:0,nextT:0,timer:null},P1=.38,a0=.6,kf=null,ho=.5,cr={paused:!1},uo=i=>440*Math.pow(2,(i-69)/12);function l0(i){kf=i,ho=60/i.bpm,ee.step=0,ee.delay&&(ee.delay.delayTime.value=ho*.75)}function ih(){if(ee.ctx)return;let i=window.AudioContext||window.webkitAudioContext;if(!i)return;let e=ee.ctx=new i;e.resume&&e.resume();let t=e.createDynamicsCompressor();t.threshold.value=-18,t.knee.value=20,t.ratio.value=8,ee.master=e.createGain(),ee.master.gain.value=ee.muted?0:a0,ee.master.connect(t),t.connect(e.destination),ee.sGain=e.createGain(),ee.sGain.gain.value=.9,ee.sGain.connect(ee.master),ee.mGain=e.createGain(),ee.mGain.gain.value=P1,ee.mGain.connect(ee.master),ee.filt=e.createBiquadFilter(),ee.filt.type="lowpass",ee.filt.frequency.value=1500,ee.leadBus=e.createGain(),ee.leadBus.gain.value=1,ee.leadBus.connect(ee.mGain),ee.delay=e.createDelay(1.5),ee.delay.delayTime.value=ho*.75;let n=e.createGain();n.gain.value=.32;let s=e.createBiquadFilter();s.type="lowpass",s.frequency.value=2400;let r=e.createGain();r.gain.value=.45,ee.leadBus.connect(ee.delay),ee.delay.connect(s),s.connect(n),n.connect(ee.delay),s.connect(r),r.connect(ee.mGain),ee.padBus=e.createGain(),ee.padBus.gain.value=1,ee.padBus.connect(ee.filt),ee.filt.connect(ee.mGain),B1()}function fo(i,e,t,n,s){i.setValueAtTime(1e-4,e),i.linearRampToValueAtTime(n,e+t),i.exponentialRampToValueAtTime(1e-4,e+t+s)}function Kt(i){let e=ee.ctx,t=i.at||e.currentTime,n=i.a||.005,s=e.createOscillator(),r=e.createGain();s.type=i.type||"sine",s.frequency.setValueAtTime(i.f,t),i.f2&&s.frequency.exponentialRampToValueAtTime(i.f2,t+n+i.dur),fo(r.gain,t,n,i.vol,i.dur),s.connect(r),r.connect(i.bus||ee.sGain),s.start(t),s.stop(t+n+i.dur+.1)}var Da=null;function Hi(i){let e=ee.ctx,t=i.at||e.currentTime,n=i.a||.004;if(!Da){let a=e.createBuffer(1,e.sampleRate*.5,e.sampleRate),l=a.getChannelData(0);for(let c=0;c<l.length;c++)l[c]=Math.random()*2-1;Da=a}let s=e.createBufferSource();s.buffer=Da,s.loop=!0;let r=e.createBiquadFilter();r.type=i.ft||"lowpass",r.frequency.value=i.fq||800,i.q&&(r.Q.value=i.q);let o=e.createGain();fo(o.gain,t,n,i.vol,i.dur),s.connect(r),r.connect(o),o.connect(ee.sGain),s.start(t),s.stop(t+n+i.dur+.1)}var L1={scream(i){let e=ee.ctx,t=e.currentTime,n=(i||1)*(520+Math.random()*180),s=e.createOscillator(),r=e.createGain(),o=e.createBiquadFilter();s.type="sawtooth",s.frequency.setValueAtTime(n*.8,t),s.frequency.linearRampToValueAtTime(n*1.25,t+.12),s.frequency.exponentialRampToValueAtTime(n*.7,t+.7);let a=e.createOscillator(),l=e.createGain();a.frequency.value=9,l.gain.value=n*.04,a.connect(l),l.connect(s.frequency),o.type="bandpass",o.frequency.value=1100,o.Q.value=1.6,fo(r.gain,t,.03,.07,.65),s.connect(o),o.connect(r),r.connect(ee.sGain),s.start(t),a.start(t),s.stop(t+.8),a.stop(t+.8)},gasp(){Hi({dur:.18,vol:.06,fq:1800,ft:"bandpass",q:1.2})},siren(){let i=ee.ctx,e=i.currentTime;for(let t=0;t<4;t++)Kt({f:700,f2:1100,type:"square",vol:.05,dur:.35,at:e+t*.4})},jump(){Kt({f:240,f2:390,vol:.09,dur:.09})},land(i){Hi({dur:.09,vol:i?.28:.09,fq:i?260:180}),Kt({f:i?70:90,vol:i?.22:.07,dur:.12})},stepTick(i){Hi({dur:.03,vol:i?.08:.028,fq:i?2200:500,ft:"bandpass",q:1.4})},coin(){Kt({f:1046.5,vol:.09,dur:.07}),Kt({f:1568,vol:.075,dur:.12,at:ee.ctx.currentTime+.06})},ckpt(){[523.25,659.25,784].forEach((i,e)=>Kt({f:i,type:"triangle",vol:.09,dur:.22,at:ee.ctx.currentTime+e*.09}))},cast(){Kt({f:320,f2:880,vol:.06,dur:.48}),Kt({f:323,f2:886,vol:.06,dur:.48})},sleep(){Kt({f:660,f2:440,type:"triangle",vol:.11,dur:.3}),Kt({f:440,f2:330,type:"triangle",vol:.09,dur:.4,at:ee.ctx.currentTime+.22})},blink(){Kt({f:1100,f2:180,type:"sawtooth",vol:.11,dur:.09}),Hi({dur:.05,vol:.07,fq:3e3,ft:"highpass"})},sus(){Kt({f:440,vol:.13,dur:.28,a:.01}),Kt({f:466.16,vol:.13,dur:.28,a:.01})},alert(){[220,261.63,311.13].forEach(i=>Kt({f:i,f2:i*.5,type:"sawtooth",vol:.11,dur:.5,a:.008})),Hi({dur:.25,vol:.18,fq:900})},zap(){Kt({f:120,f2:60,type:"square",vol:.12,dur:.3}),Hi({dur:.2,vol:.16,fq:2400,ft:"bandpass",q:2})},splash(){Hi({dur:.35,vol:.2,fq:900})},respawn(){Hi({dur:.3,vol:.07,fq:600,ft:"highpass"}),Kt({f:200,f2:520,vol:.06,dur:.3})},wakeTick(){Kt({f:880,type:"square",vol:.045,dur:.05}),Kt({f:880,type:"square",vol:.045,dur:.05,at:ee.ctx.currentTime+.12})},part(){[523.25,783.99,1046.5,1567.98].forEach((i,e)=>Kt({f:i,type:"triangle",vol:.09,dur:.4,at:ee.ctx.currentTime+e*.08}))},win(){[392,493.88,587.33,784,987.77].forEach((i,e)=>Kt({f:i,type:"triangle",vol:.1,dur:.5,at:ee.ctx.currentTime+e*.13}))},launch(){Kt({f:55,f2:440,type:"sawtooth",vol:.12,dur:2.6,a:.4}),Hi({dur:2.4,vol:.16,fq:500,a:.6}),[392,493.88,587.33,784,987.77,1174.66].forEach((i,e)=>Kt({f:i,type:"triangle",vol:.08,dur:.6,at:ee.ctx.currentTime+1.6+e*.14}))},uiBlip(){Kt({f:520,vol:.06,dur:.06})}};function Gt(i,e){!ee.ctx||ee.muted||L1[i](e)}function Ua(i){ee.mGain&&ee.mGain.gain.setTargetAtTime(i,ee.ctx.currentTime,.08)}function Hf(i){if(!ee.ctx||ee.tense===i)return;ee.tense=i;let e=ee.ctx.currentTime;ee.tGain&&ee.tGain.gain.setTargetAtTime(i?.09:1e-4,e,.4),ee.filt.frequency.setTargetAtTime(i?3600:1500,e,.5)}function c0(){if(!ee.ctx||ee.agV)return;let i=ee.ctx,e=i.createOscillator(),t=i.createOscillator(),n=i.createGain(),s=i.createOscillator(),r=i.createGain();e.type=t.type="triangle",e.frequency.value=164,t.frequency.value=166.5,n.gain.value=1e-4,n.gain.setTargetAtTime(ee.muted?0:.06,i.currentTime,.05),s.frequency.value=5.5,r.gain.value=6,s.connect(r),r.connect(e.frequency),r.connect(t.frequency),e.connect(n),t.connect(n),n.connect(ee.sGain),e.start(),t.start(),s.start(),ee.agV={stop(){n.gain.setTargetAtTime(1e-4,i.currentTime,.1),setTimeout(()=>{try{e.stop(),t.stop(),s.stop()}catch{}},400)}}}function Oa(){ee.agV&&(ee.agV.stop(),ee.agV=null)}function Jt(i,e,t,n,s,r,o){let a=ee.ctx,l=a.createOscillator(),c=a.createGain();return l.type=n,l.frequency.value=i,fo(c.gain,e,r,s,t),l.connect(c),c.connect(o),l.start(e),l.stop(e+r+t+.1),l}function Bf(i,e,t,n,s,r){let o=ee.ctx;Da||Hi({dur:.001,vol:1e-4});let a=o.createBufferSource();a.buffer=Da,a.loop=!0,a.playbackRate.value=.8+Math.random()*.4;let l=o.createBiquadFilter();l.type=n,l.frequency.value=s,r&&(l.Q.value=r);let c=o.createGain();fo(c.gain,i,.002,t,e),a.connect(l),l.connect(c),c.connect(ee.mGain),a.start(i),a.stop(i+e+.1)}var co={kick(i,e){let t=ee.ctx,n=t.createOscillator(),s=t.createGain();n.type="sine",n.frequency.setValueAtTime(150,i),n.frequency.exponentialRampToValueAtTime(44,i+.12),s.gain.setValueAtTime(1e-4,i),s.gain.linearRampToValueAtTime(e,i+.004),s.gain.exponentialRampToValueAtTime(1e-4,i+.32),n.connect(s),s.connect(ee.mGain),n.start(i),n.stop(i+.4),Jt(2200,i,.012,"sine",e*.12,.001,ee.mGain),ee.padBus.gain.setValueAtTime(.32,i),ee.padBus.gain.setTargetAtTime(1,i+.03,.09)},hat(i,e){Bf(i,e?.11:.035,e?.05:.018,"highpass",7600)},clap(i){Bf(i,.13,.07,"bandpass",1400,.9),Bf(i+.012,.08,.05,"bandpass",1700,.9)},rim(i){Jt(1750,i,.025,"square",.025,.001,ee.mGain)},conga(i,e){let t=ee.ctx,n=t.createOscillator(),s=t.createGain(),r=e?340:230;n.type="sine",n.frequency.setValueAtTime(r,i),n.frequency.exponentialRampToValueAtTime(r*.82,i+.12),fo(s.gain,i,.003,.09,.16),n.connect(s),s.connect(ee.mGain),n.start(i),n.stop(i+.3)}};function N1(i,e,t){Jt(uo(i),e,t,"sine",.2,.008,ee.mGain),Jt(uo(i+12),e,t*.8,"triangle",.05,.008,ee.mGain)}function D1(i,e,t){for(let n of i){let s=uo(n);t==="organ"?(Jt(s,e,.22,"square",.012,.004,ee.padBus),Jt(s,e,.26,"sine",.03,.004,ee.padBus)):t==="piano"?(Jt(s,e,.18,"triangle",.03,.002,ee.padBus),Jt(s*2,e,.08,"sine",.008,.002,ee.padBus)):(Jt(s,e,.55,"sine",.04,.004,ee.padBus),Jt(s*2,e,.25,"sine",.011,.003,ee.padBus),Jt(s*3,e,.08,"sine",.004,.002,ee.padBus))}}function U1(i,e,t){for(let n of i)Jt(uo(n-12),e,t,"triangle",.008,.6,ee.padBus),Jt(uo(n)*1.004,e,t,"sine",.008,.7,ee.padBus)}function O1(i,e,t,n){let s=ee.ctx,r=uo(i),o=ee.leadBus;if(n==="twang"){let a=Jt(r,e,t*.9,"triangle",.06,.01,o);a.frequency.setValueAtTime(r*.94,e),a.frequency.exponentialRampToValueAtTime(r,e+.09),Jt(r*2,e,t*.5,"sine",.012,.01,o)}else if(n==="horn"){let a=Jt(r,e,t*.9,"sawtooth",.03,.04,o),l=s.createOscillator(),c=s.createGain();l.frequency.value=5.2,c.gain.value=r*.012,l.connect(c),c.connect(a.frequency),l.start(e+.12),l.stop(e+t+.2)}else n==="mallet"?(Jt(r,e,.32,"sine",.07,.002,o),Jt(r*4,e,.06,"sine",.012,.001,o)):n==="signal"?(Jt(r,e,t*.95,"sine",.06,.03,o),Jt(r*1.5,e,t*.8,"triangle",.012,.05,o),Jt(r/2,e,t,"triangle",.02,.06,o)):(Jt(r,e,t*.7,"triangle",.05,.003,o),Jt(r*2,e,t*.35,"sine",.014,.002,o))}function F1(i,e){let t=kf,n=i%16,s=Math.floor(i/16)%4,r=Math.floor(i/64),o=ho/4,a=t.prog[s],l=n%2===1?o*.12:0,c=e+l;n%4===0&&co.kick(e,t.leadType==="signal"?.42:.55),t.clap&&(n===4||n===12)&&co.clap(e),n%4===2?co.hat(e,!0):n%2===1&&co.hat(c,!1);let h=t.bass[n];if(h!=null&&N1(a.r+h,c,o*1.7),t.stab[n]&&D1(a.v,c,t.stabType),n===0&&U1(a.v,e,ho*4),t.clave&&t.clave.includes(n)&&co.rim(c),t.conga&&t.conga.includes(n)&&co.conga(c,n>=14),t.leadAlways||r%2===1){let u=i%64;for(let f of t.lead)f[0]===u&&O1(f[1]+(f[3]||0),c,f[2]*o,t.leadType)}}function B1(){let i=ee.ctx,e=i.createOscillator(),t=i.createOscillator(),n=i.createGain(),s=i.createOscillator(),r=i.createGain();e.frequency.value=622.25,t.frequency.value=659.25,n.gain.value=1e-4,s.frequency.value=7,r.gain.value=.03,s.connect(r),r.connect(n.gain),e.connect(n),t.connect(n),n.connect(ee.padBus),e.start(),t.start(),s.start(),ee.tGain=n,ee.step=0,ee.nextT=i.currentTime+.15,ee.timer=setInterval(()=>{if(ee.ctx){if(cr.paused||!kf){ee.nextT=Math.max(ee.nextT,ee.ctx.currentTime+.1);return}for(ee.nextT=Math.max(ee.nextT,ee.ctx.currentTime+.02);ee.nextT<ee.ctx.currentTime+.3;)F1(ee.step,ee.nextT),ee.step++,ee.nextT+=ho/4}},60)}function h0(){ee.muted=!ee.muted,ee.master&&ee.master.gain.setTargetAtTime(ee.muted?0:a0,ee.ctx.currentTime,.02),ee.muted||Gt("uiBlip")}function u0(){return ee.muted}var f0=["#f2d2b6","#e0b08c","#c68b62","#a86b44","#7d4a2c","#5a3420","#f6dcc8"],d0=["#1c1a18","#3b2a1e","#5a3d25","#8a6a3a","#c9a36a","#2a2a2a","#6b6b6b","#a33a2a"],k1=1.62;function fi(i,e){i=i.index?i.toNonIndexed():i;let t=i.attributes.position,n=new Float32Array(t.count*3);for(let s=0;s<t.count;s++){let r=e(t.getX(s),t.getY(s),t.getZ(s));n[s*3]=r[0],n[s*3+1]=r[1],n[s*3+2]=r[2]}return i.setAttribute("color",new Dt(n,3)),i}var zi=[1,1,1];function po(i){let e=i.map(l=>l.index?l.toNonIndexed():l),t=0;for(let l of e)t+=l.attributes.position.count;let n=new Float32Array(t*3),s=new Float32Array(t*3),r=new Float32Array(t*3),o=0;for(let l of e)n.set(l.attributes.position.array,o*3),s.set(l.attributes.normal.array,o*3),l.attributes.color?r.set(l.attributes.color.array,o*3):r.fill(1,o*3,(o+l.attributes.position.count)*3),o+=l.attributes.position.count;let a=new Rt;return a.setAttribute("position",new Dt(n,3)),a.setAttribute("normal",new Dt(s,3)),a.setAttribute("color",new Dt(r,3)),a}var ti={torso:()=>{let i=new Ye(.22,.17,.6,10,2);i.scale(1,1,.62),i.translate(0,.3,0);let e=new ht(.22,10,4,0,Math.PI*2,0,Math.PI/2);return e.scale(1,.32,.62),e.translate(0,.6,0),fi(po([i,e]),(t,n,s)=>s>.07&&n>.5&&Math.abs(t)<(n-.44)*.6?[.55,.5,.5]:zi)},hips:()=>fi((()=>{let i=new Ye(.175,.19,.18,10);return i.scale(1,1,.66),i.translate(0,0,0),i})(),(i,e)=>e>.06?[.45,.42,.4]:zi),leg:()=>{let i=new Ye(.085,.07,.8,7);i.translate(0,-.4,0);let e=new ke(.13,.09,.27);return e.translate(0,-.82,.05),po([fi(i,()=>zi),fi(e,()=>[.16,.15,.15])])},arm:()=>fi((()=>{let i=new Ye(.06,.05,.58,6);return i.translate(0,-.29,0),i})(),()=>zi),hand:()=>fi((()=>{let i=new ht(.055,6,5);return i.scale(.9,1.2,.8),i.translate(0,-.64,0),i})(),()=>zi),head:()=>{let i=new ht(.125,16,14);i.scale(.92,1.05,.96);let e=new Ye(.05,.055,.12,6);return e.translate(0,-.15,0),po([fi(i,(n,s,r)=>r>.085&&Math.abs(Math.abs(n)-.042)<.022&&Math.abs(s+0)<.02?[.12,.1,.1]:r>.1&&Math.abs(n)<.03&&Math.abs(s+.06)<.012?[.6,.35,.35]:zi),fi(e,()=>[.92,.9,.9])])},hairShort:()=>fi((()=>{let i=new ht(.135,12,6,0,Math.PI*2,0,Math.PI*.52);return i.scale(.95,1.05,1.02),i.rotateX(-.45),i.translate(0,.02,-.012),i})(),()=>zi),hairLong:()=>{let i=new ht(.138,12,6,0,Math.PI*2,0,Math.PI*.55);i.scale(.96,1.05,1.04),i.rotateX(-.45);let e=new Ye(.12,.1,.26,10,1,!0,Math.PI*.55,Math.PI*.9);return e.translate(0,-.1,-.015),fi(po([i,e]),()=>zi)},hairBun:()=>{let i=new ht(.134,12,6,0,Math.PI*2,0,Math.PI*.5);i.scale(.95,1.04,1.02),i.rotateX(-.45);let e=new ht(.06,8,6);return e.translate(0,.1,-.1),fi(po([i,e]),()=>zi)},cap:()=>{let i=new ht(.14,12,6,0,Math.PI*2,0,Math.PI*.5);i.scale(.98,.9,1.02),i.rotateX(-.2),i.translate(0,.03,0);let e=new Ye(.1,.1,.015,10,1,!1,-Math.PI/2,Math.PI);return e.scale(1,1,1.2),e.translate(0,.03,.1),fi(po([i,e]),()=>zi)}},zf=["hairShort","hairLong","hairBun","cap"],H1=28900,kn={sneakVis:.55,coverVis:.45,sneakBlind:1.5,noiseR:12,tierVis:1.25,tierLook:.7,panicFloor:.33,huntedR:60,airGrace:.25,sleepRefund:1},sh=class{constructor(e,t,n){this.world=e,this.scene=t,this.cfg=n,this.R=e.R,this.civs=[],this.group=new ct,t.add(this.group);let s=n.count,r=l=>{let c=new bi(l,new Yt({color:16777215,vertexColors:!!l.attributes.color}),s);return c.castShadow=!0,c.receiveShadow=!1,c.frustumCulled=!1,this.group.add(c),c};this.parts={torso:r(ti.torso()),hips:r(ti.hips()),head:r(ti.head()),hairShort:r(ti.hairShort()),hairLong:r(ti.hairLong()),hairBun:r(ti.hairBun()),cap:r(ti.cap()),legL:r(ti.leg()),legR:r(ti.leg()),armL:r(ti.arm()),armR:r(ti.arm()),handL:r(ti.hand()),handR:r(ti.hand())};for(let l of["hairShort","hairLong","hairBun","cap","handL","handR"])this.parts[l].castShadow=!1;this.spawn(),this.baseCol={};for(let l in this.parts)this.parts[l].instanceColor&&(this.baseCol[l]=Float32Array.from(this.parts[l].instanceColor.array));let o=jt(64,64,l=>{l.fillStyle="#ffd23a",l.strokeStyle="#7a1a00",l.lineWidth=6,l.font="bold 58px sans-serif",l.textAlign="center",l.strokeText("!",32,54),l.fillText("!",32,54)},!1),a=jt(64,64,l=>{l.fillStyle="#9ff7ff",l.strokeStyle="#0a3050",l.lineWidth=5,l.font="bold 40px sans-serif",l.textAlign="center",l.strokeText("z",24,54),l.fillText("z",24,54),l.font="bold 28px sans-serif",l.strokeText("z",46,26),l.fillText("z",46,26)},!1);this.pool=[];for(let l=0;l<18;l++){let c=new Jn(new Gn({map:o,depthTest:!1,transparent:!0}));c.scale.setScalar(.7),c.visible=!1,c.renderOrder=10,this.group.add(c),this.pool.push(c)}this.exTex=o,this.zTex=a,this.screamT=0,this.m4=new Ve,this.m4b=new Ve,this.m4c=new Ve,this.v=new L,this.q=new kt,this.e=new yn,this.sc=new L}spawn(){let e=this.world,t=this.cfg,n=this.R,s=t.palette||{shirt:["#d94c4c","#3a6fd1","#f0f0ea","#2c2c2c","#e6b33a","#4fa36b","#9a5fc7","#e87ea1","#7a8a99","#f28d35"],pants:["#2c3550","#3b3b3b","#5a4a3a","#7d8899","#1d1d1d","#a8956c"]},r=[],o=t.count;for(let u of e.plazas){let f=Math.min(o,Math.round(u.n*(t.plazaMul||1)));for(let d=0;d<f;d++)r.push({type:"plaza",r:u.r});o-=f}let a=e.loops.filter(u=>u.r[2]-u.r[0]>6&&u.r[3]-u.r[1]>6),l=a.map(u=>u.n??2*(u.r[2]-u.r[0]+(u.r[3]-u.r[1]))),c=l.reduce((u,f)=>u+f,0)||1;for(let u=0;u<o&&a.length;u++){let f=n()*c,d=0;for(;f>l[d]&&d<l.length-1;)f-=l[d],d++;r.push({type:"loop",r:a[d].r})}let h=new xe;r.forEach((u,f)=>{let d={i:f,home:u,state:"walk",t:0,ph:n()*6,speed:1.1+n()*.6,scale:.88+n()*.22,dir:n()<.5?1:-1,s:0,off:(n()-.5)*1.6,x:0,y:0,z:0,yaw:0,tx:0,tz:0,idle:0,look:n()*.25,alarmCool:0,fleeX:0,fleeZ:0,sleepT:0,ind:null,pose:n()<.15?"phone":"",hop:0,owed:0};if(u.type==="loop"){let E=2*(u.r[2]-u.r[0]+(u.r[3]-u.r[1]));d.s=n()*E,this.loopPos(d)}else d.x=u.r[0]+n()*(u.r[2]-u.r[0]),d.z=u.r[1]+n()*(u.r[3]-u.r[1]),d.state="wander",this.newTarget(d),d.idle=n()*3;let p=this.parts;d.wide=.9+n()*.25,d.hair=zf[n()<.12?3:Math.floor(n()*3)];let x=new xe(s.shirt[Math.floor(n()*s.shirt.length)]),m=new xe(f0[Math.floor(n()*f0.length)]),g=new xe(s.pants[Math.floor(n()*s.pants.length)]),v=n()<.3;p.torso.setColorAt(f,x),p.armL.setColorAt(f,v?m:x),p.armR.setColorAt(f,v?m:x),p.handL.setColorAt(f,m),p.handR.setColorAt(f,m),p.hips.setColorAt(f,g),p.legL.setColorAt(f,g),p.legR.setColorAt(f,g),p.head.setColorAt(f,m);let S=new xe(s.hair?s.hair[Math.floor(n()*s.hair.length)]:d0[Math.floor(n()*d0.length)]),M=new xe(s.shirt[Math.floor(n()*s.shirt.length)]);for(let E of zf)p[E].setColorAt(f,E==="cap"?M:S);d.init={x:d.x,z:d.z,s:d.s,state:d.state},this.civs.push(d)});for(let u in this.parts)this.parts[u].instanceColor&&(this.parts[u].instanceColor.needsUpdate=!0)}reset(){for(let e of this.civs)Object.assign(e,{x:e.init.x,z:e.init.z,s:e.init.s,state:e.init.state,t:0,alarmCool:0,sleepT:0,y:0,hop:0}),e.home.type==="loop"?this.loopPos(e):this.newTarget(e)}loopPos(e){let[t,n,s,r]=e.home.r,o=s-t,a=r-n,l=2*(o+a),c=(e.s%l+l)%l,h,u,f,d=e.off;c<o?(h=t+c,u=n-d,f=Math.PI/2):(c-=o)<a?(h=s+d,u=n+c,f=0):(c-=a)<o?(h=s-c,u=r+d,f=-Math.PI/2):(c-=o,h=t-d,u=r-c,f=Math.PI),e.x=h,e.z=u,e.yaw=e.dir>0?f:f+Math.PI}nearestS(e){let[t,n,s,r]=e.home.r,o=s-t,a=r-n,l=[[Math.max(0,Math.min(o,e.x-t)),Math.abs(e.z-n)],[o+Math.max(0,Math.min(a,e.z-n)),Math.abs(e.x-s)],[o+a+Math.max(0,Math.min(o,s-e.x)),Math.abs(e.z-r)],[2*o+a+Math.max(0,Math.min(a,r-e.z)),Math.abs(e.x-t)]];return l.sort((c,h)=>c[1]-h[1]),l[0][0]}newTarget(e){let t=e.home.r,n=this.R;e.tx=t[0]+n()*(t[2]-t[0]),e.tz=t[1]+n()*(t[3]-t[1])}sleepAround(e,t,n){let s=0,r=0;for(let o of this.civs)o.state!=="sleep"&&(o.x-e)**2+(o.z-t)**2<n*n&&(o.state="sleep",o.sleepT=this.cfg.sleepT||18,o.t=0,s++,r+=o.owed*kn.sleepRefund,o.owed=0);return{n:s,refund:r}}awakeNear(e,t,n){for(let s of this.civs)if(s.state!=="sleep"&&(s.x-e)**2+(s.z-t)**2<n*n)return!0;return!1}scare(e,t,n,s){e.state=s?"notice":"flee",e.t=0,e.hop=s?.25:0;let r=e.x-t,o=e.z-n,a=Math.hypot(r,o)||1;e.fleeX=r/a,e.fleeZ=o/a,e.fleeSpeed=4.2+this.R()*1.8,e.yaw=Math.atan2(-r,-o)}update(e,t,n){let s=this.world,r=this.cfg,o=this.R,a=0,l=0,c=0,h=0,u=0,f=!1;this.screamT-=e;let d=(t.sneaking?kn.sneakVis:1)*(t.shade?kn.coverVis:1),p=t.tier>=1?kn.tierVis:1,x=(r.visR||22)*d*p,m=x*x,g=Math.cos((r.fov||70)*Math.PI/180),v=t.tier>=1?kn.tierLook:1,S=r.panicMax||r.panic||30,M=t.noisy?kn.noiseR*kn.noiseR:0,E=[];for(let _ of this.civs){_.t+=e,_.alarmCool-=e,_.ph+=e*(_.state==="flee"?11:_.state==="walk"||_.state==="return"||_.state==="wander"&&_.idle<=0?6.2*_.speed/1.4:1.5);let y=t.x-_.x,b=t.z-_.z,N=y*y+b*b;if(t.active&&!t.airborne&&_.state!=="sleep"&&_.state!=="notice"&&N<m&&Math.abs(t.y-_.y)<(r.seeUp||7)&&(_.look-=e,_.look<=0)){_.look=(.15+o()*.12)*v;let D=Math.sqrt(N),R=Math.sin(_.yaw),U=Math.cos(_.yaw),I=(R*y+U*b)/(D||1),B=_.state!=="flee"&&_.state!=="cower",A=t.sneaking?kn.sneakBlind:4.5,O=N<M;if((D<A||O||I>g)&&s.clearLine(_.x,_.y+k1,_.z,t.x,t.y+.7,t.z))if(B){let J=_.alarmCool<=0;if(_.alarmCool=25,this.scare(_,t.x,t.z,!0),J){a++;let G=Math.max(0,Math.min(1,1-D/(x||1))),q=S*(kn.panicFloor+(1-kn.panicFloor)*G);c+=q,_.owed+=q,h=t.x,u=t.z,f=!0}}else _.fleeX=-y/(D||1),_.fleeZ=-b/(D||1),_.t=Math.min(_.t,1),_.state==="cower"&&(_.state="flee",_.t=0)}let C=0;switch(_.state){case"walk":{_.s+=_.speed*e*_.dir,this.loopPos(_),C=_.speed;break}case"wander":{if(_.idle>0){_.idle-=e,C=0;break}let D=_.tx-_.x,R=_.tz-_.z,U=Math.hypot(D,R);if(U<.6){_.idle=1+o()*4,this.newTarget(_);break}_.yaw=Math.atan2(D,R),_.x+=D/U*_.speed*e,_.z+=R/U*_.speed*e,C=_.speed,this.v.set(_.x,_.y,_.z),s.pushOut(this.v,.3,1.7)&&this.newTarget(_),_.x=this.v.x,_.z=this.v.z;break}case"notice":{_.yaw=Math.atan2(y,b),_.t>.55&&(_.state="flee",_.t=0,E.push(_));break}case"flee":{l++;let D=_.fleeSpeed*(_.t<.3?_.t/.3:1),R=Math.sin(_.ph*.13+_.i)*.35,U=_.fleeX*Math.cos(R)-_.fleeZ*Math.sin(R),I=_.fleeX*Math.sin(R)+_.fleeZ*Math.cos(R);if(_.x+=U*D*e,_.z+=I*D*e,_.yaw=Math.atan2(U,I),C=D,this.v.set(_.x,_.y,_.z),s.pushOut(this.v,.3,1.7)){let B=_.fleeX;_.fleeX=_.fleeX*.8-_.fleeZ*.6*(_.i%2?1:-1),_.fleeZ=_.fleeZ*.8+B*.6*(_.i%2?1:-1);let A=Math.hypot(_.fleeX,_.fleeZ)||1;_.fleeX/=A,_.fleeZ/=A}_.x=this.v.x,_.z=this.v.z,s.inWater(_.x,_.z)&&(_.fleeX=-_.fleeX,_.fleeZ=-_.fleeZ,_.x+=_.fleeX,_.z+=_.fleeZ),_.t>4.5&&N>784&&(_.state="cower",_.t=0),_.t>9&&(_.state="cower",_.t=0);break}case"cower":{_.t>2.6&&(_.state="return",_.t=0);break}case"return":{if(_.home.type==="plaza"){let I=_.home.r;if(_.x>I[0]&&_.x<I[2]&&_.z>I[1]&&_.z<I[3]){_.state="wander",_.idle=1;break}_.tx=(I[0]+I[2])/2,_.tz=(I[1]+I[3])/2}else if(_.t<.05){_.s=this.nearestS(_);let I=_.x,B=_.z;this.loopPos(_),_.tx=_.x,_.tz=_.z,_.x=I,_.z=B}let D=_.tx-_.x,R=_.tz-_.z,U=Math.hypot(D,R);if(U<.8||_.t>30&&N>3600){_.home.type==="loop"?(_.state="walk",this.loopPos(_)):(_.x=_.tx,_.z=_.tz,_.state="wander");break}_.yaw=Math.atan2(D,R),_.x+=D/U*_.speed*1.1*e,_.z+=R/U*_.speed*1.1*e,C=_.speed,this.v.set(_.x,_.y,_.z),s.pushOut(this.v,.3,1.7),_.x=this.v.x,_.z=this.v.z;break}case"sleep":{_.sleepT-=e,_.sleepT<=0&&(_.state="return",_.t=0);break}}_.mv=C,_.hop>0&&(_.hop=Math.max(0,_.hop-e))}for(let _ of E){this.screamT<=0&&Math.hypot(_.x-t.x,_.z-t.z)<45&&(Gt("scream",_.scale<.95?1.25:.9+this.R()*.3),this.screamT=.35);for(let y of this.civs){if(y===_||y.state==="flee"||y.state==="notice"||y.state==="sleep"||y.state==="cower")continue;let b=y.x-_.x,N=y.z-_.z;b*b+N*N<64&&(this.scare(y,t.x,t.z,!1),y.fleeSpeed*=.9)}}if(t.tier>=2&&t.lastSeen){let _=t.lastSeen.x,y=t.lastSeen.z;for(let b of this.civs){if(b.state!=="walk"&&b.state!=="wander"&&b.state!=="return")continue;let N=_-b.x,C=y-b.z,D=N*N+C*C;if(D>kn.huntedR*kn.huntedR||D<4)continue;let U=Math.atan2(N,C)-b.yaw;U=Math.atan2(Math.sin(U),Math.cos(U)),b.yaw+=U*Math.min(1,e*1.6)}}return this.draw(n),{witnesses:a,fleeing:l,panicGain:c,seen:f?{x:h,z:u}:null}}draw(e){let t=this.parts,n=this.m4,s=this.m4b,r=this.m4c,o=this.q,a=this.e,l=this.v,c=this.sc;this._leg||(this._leg=(x,m,g)=>{s.makeRotationX(g),s.setPosition(m*.095,.84,0),r.multiplyMatrices(n,s),x.setMatrixAt(this._ci,r)},this._arm=(x,m,g,v)=>{a.set(g,0,v,"XYZ"),o.setFromEuler(a),s.makeRotationFromQuaternion(o),s.setPosition(m*.24,1.4,0),r.multiplyMatrices(n,s),x.setMatrixAt(this._ci,r),(m>0?t.handL:t.handR).setMatrixAt(this._ci,r)},this._zero=new Ve().makeScale(0,0,0));let h=0,u=0,f=!1;this._slotOf||(this._slotOf=new Int32Array(this.civs.length).fill(-1));for(let x of this.pool)x.visible=!1;let d=e.position.x,p=e.position.z;for(let x of this.civs){if((x.x-d)**2+(x.z-p)**2>H1)continue;let g=u++;if(this._slotOf[g]!==x.i){this._slotOf[g]=x.i;for(let D in this.baseCol){let R=t[D].instanceColor.array,U=this.baseCol[D];R[g*3]=U[x.i*3],R[g*3+1]=U[x.i*3+1],R[g*3+2]=U[x.i*3+2]}f=!0}let v=x.state==="sleep",S=x.state==="cower";a.set(v?-Math.PI/2:x.state==="flee"?.18:0,x.yaw,0,"YXZ"),o.setFromEuler(a);let M=v?.14:x.y+(x.hop>0?Math.sin((.25-x.hop)/.25*Math.PI)*.22:0);l.set(x.x,M,x.z),c.set(x.scale*x.wide,x.scale*(S?.72:1),x.scale*(.85+x.wide*.15)),n.compose(l,o,c),v&&r.makeTranslation(0,0,0);let E=Math.sin(x.ph),_=Math.min(1.1,x.mv*.28),y=x.state==="flee",b=x.state==="notice";s.makeTranslation(0,.86,0),r.multiplyMatrices(n,s),t.torso.setMatrixAt(g,r),t.hips.setMatrixAt(g,r),s.makeTranslation(0,1.62,0),r.multiplyMatrices(n,s),t.head.setMatrixAt(g,r);for(let D of zf)t[D].setMatrixAt(g,D===x.hair?r:this._zero);let N=this._leg,C=this._arm;if(this._ci=g,N(t.legL,1,E*_*.7+(S?-.9:0)),N(t.legR,-1,-E*_*.7+(S?-.9:0)),y?(C(t.armL,1,-2.7+Math.sin(x.ph*1.3)*.5,.35),C(t.armR,-1,-2.7+Math.cos(x.ph*1.3)*.5,-.35)):b?(C(t.armL,1,-1.2,.6),C(t.armR,-1,-1.2,-.6)):S?(C(t.armL,1,-2.9,.9),C(t.armR,-1,-2.9,-.9)):x.pose==="phone"&&x.mv<.2?(C(t.armL,1,0,.08),C(t.armR,-1,-1.9,.3)):(C(t.armL,1,-E*_*.6,.08),C(t.armR,-1,E*_*.6,-.08)),h<this.pool.length&&(b||y&&x.t<1.6||v)){let D=this.pool[h++];D.visible=!0,D.material.map=v?this.zTex:this.exTex,D.position.set(x.x,(v?.9:2.25*x.scale)+(v?Math.sin(x.t*2)*.1:0),x.z)}}for(let x in t)t[x].count=u,t[x].instanceMatrix.needsUpdate=!0,f&&t[x].instanceColor&&(t[x].instanceColor.needsUpdate=!0)}dispose(){this.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}),this.scene.remove(this.group)}};function Gf(i,e){let t=new ct;i.add(t);let n=new ht(2200,32,16),s=new li({side:Sn,depthWrite:!1,fog:!1,uniforms:{top:{value:new xe(e.sky[0])},mid:{value:new xe(e.sky[1])},bot:{value:new xe(e.sky[2])},sunDir:{value:new L(...e.sunDir).normalize()},sunCol:{value:new xe(e.sunDisk||"#fff4d0")},sunSize:{value:e.sunSize??.9985}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 top, mid, bot, sunDir, sunCol; uniform float sunSize; varying vec3 vP;
      void main(){ float h = vP.y; vec3 c = h > 0.0 ? mix(mid, top, pow(clamp(h*1.6,0.0,1.0), 0.7)) : mix(mid, bot, clamp(-h*6.0,0.0,1.0));
        float s = dot(normalize(vP), normalize(sunDir)); c += sunCol * smoothstep(sunSize, 1.0, s) * 1.5 + sunCol * pow(max(s,0.0), 24.0) * 0.25;
        gl_FragColor = vec4(c, 1.0); }`});if(t.add(new tt(n,s)),e.stars){let h=new Float32Array(4200);for(let f=0;f<1400;f++){let d=Math.random()*2-1,p=Math.random()*6.283,x=Math.sqrt(1-d*d),m=Math.abs(d)*.95+.05;h[f*3]=Math.cos(p)*x*2e3,h[f*3+1]=m*2e3,h[f*3+2]=Math.sin(p)*x*2e3}let u=new Rt;u.setAttribute("position",new Dt(h,3)),t.add(new Xs(u,new Ms({color:16777215,size:2.2,sizeAttenuation:!1,fog:!1,transparent:!0,opacity:.85})))}if(e.moon){let c=new tt(new ht(40,16,12),new It({color:e.moon,fog:!1}));c.position.set(...new L(...e.moonDir).normalize().multiplyScalar(1900).toArray()),t.add(c)}let r=new pa(e.hemi[0],e.hemi[1],e.hemi[2]);t.add(r);let o=new $s(e.sun[0],e.sun[1]);o.castShadow=!0,o.shadow.mapSize.set(1024,1024);let a=o.shadow.camera;a.left=-38,a.right=38,a.top=38,a.bottom=-38,a.near=1,a.far=400,o.shadow.bias=-6e-4,o.shadow.normalBias=.04,i.add(o),i.add(o.target);let l=new L(...e.sunDir).normalize();return i.fog=new Go(e.fog,e.fogNear,e.fogFar),{group:t,sun:o,follow(c){t.position.set(c.x,0,c.z),o.position.set(c.x+l.x*180,l.y*180,c.z+l.z*180),o.target.position.set(c.x,0,c.z)},dispose(){i.remove(t),i.remove(o),i.remove(o.target),t.traverse(c=>{c.geometry&&c.geometry.dispose(),c.material&&c.material.dispose()}),o.dispose()}}}var st={mx:0,my:0,camDX:0,camDY:0,jump:!1,jumpPressed:!1,power:!1,powerPressed:!1,keys:new Set};function p0(i,e){let t={id:null,ox:0,oy:0},n={id:null,x:0,y:0},s=60,r=e.joyBase,o=e.joyKnob,a=(f,d)=>{let p=m=>{m.preventDefault(),m.stopPropagation(),st[d]||(st[d+"Pressed"]=!0),st[d]=!0,f.classList.add("down")},x=m=>{m.preventDefault(),m.stopPropagation(),st[d]=!1,f.classList.remove("down")};f.addEventListener("touchstart",p,{passive:!1}),f.addEventListener("touchend",x,{passive:!1}),f.addEventListener("touchcancel",x,{passive:!1}),f.addEventListener("mousedown",p),f.addEventListener("mouseup",x),f.addEventListener("mouseleave",x)};a(e.btnJump,"jump"),a(e.btnPower,"power"),i.addEventListener("touchstart",f=>{f.preventDefault();for(let d of f.changedTouches)d.clientX<window.innerWidth*.45&&t.id===null?(t.id=d.identifier,t.ox=d.clientX,t.oy=d.clientY,r.style.display="block",r.style.left=d.clientX-s+"px",r.style.top=d.clientY-s+"px",o.style.transform="translate(0px,0px)"):n.id===null&&(n.id=d.identifier,n.x=d.clientX,n.y=d.clientY)},{passive:!1}),i.addEventListener("touchmove",f=>{f.preventDefault();for(let d of f.changedTouches)if(d.identifier===t.id){let p=d.clientX-t.ox,x=d.clientY-t.oy,m=Math.hypot(p,x);m>s&&(p*=s/m,x*=s/m),st.mx=p/s,st.my=x/s,o.style.transform=`translate(${p}px,${x}px)`}else d.identifier===n.id&&(st.camDX+=d.clientX-n.x,st.camDY+=d.clientY-n.y,n.x=d.clientX,n.y=d.clientY)},{passive:!1});let l=f=>{for(let d of f.changedTouches)d.identifier===t.id&&(t.id=null,st.mx=st.my=0,r.style.display="none"),d.identifier===n.id&&(n.id=null)};i.addEventListener("touchend",l),i.addEventListener("touchcancel",l);let c=!1,h=0,u=0;i.addEventListener("mousedown",f=>{c=!0,h=f.clientX,u=f.clientY}),window.addEventListener("mouseup",()=>{c=!1}),window.addEventListener("mousemove",f=>{c&&(st.camDX+=f.clientX-h,st.camDY+=f.clientY-u,h=f.clientX,u=f.clientY)}),window.addEventListener("keydown",f=>{let d=f.key.toLowerCase();st.keys.has(d)||(st.keys.add(d),d===" "&&(st.jump=!0,st.jumpPressed=!0,f.preventDefault()),(d==="e"||d==="shift")&&(st.power=!0,st.powerPressed=!0))}),window.addEventListener("keyup",f=>{let d=f.key.toLowerCase();st.keys.delete(d),d===" "&&(st.jump=!1),(d==="e"||d==="shift")&&(st.power=!1)})}function Vf(){let i=st.mx,e=st.my,t=st.keys;(t.has("w")||t.has("arrowup"))&&(e-=1),(t.has("s")||t.has("arrowdown"))&&(e+=1),(t.has("a")||t.has("arrowleft"))&&(i-=1),(t.has("d")||t.has("arrowright"))&&(i+=1);let n=Math.hypot(i,e);return n>1&&(i/=n,e/=n),[i,e]}function m0(){st.jumpPressed=!1,st.powerPressed=!1,st.camDX=0,st.camDY=0}function g0(){st.mx=st.my=0,st.jump=st.power=!1,st.keys.clear()}var Wf=new URLSearchParams(location.search).has("perf"),ni=null,mo=[],rh=0,oh=!1,hh="",ah=0,lh=0,ch=1/0,Xf=0,qf="";function _0(){Wf&&(ni=document.createElement("div"),ni.style.cssText="position:fixed;left:max(10px,env(safe-area-inset-left));bottom:10px;z-index:50;font:11px/1.35 ui-monospace,Menlo,monospace;color:#9fffb0;background:rgba(0,0,0,.72);padding:6px 8px;border-radius:8px;white-space:pre;pointer-events:auto;max-width:70vw",ni.textContent="perf: waiting for play\u2026",ni.addEventListener("click",i=>{i.stopPropagation();let e=hh||ni.textContent;navigator.clipboard&&navigator.clipboard.writeText(e).then(()=>x0("copied"),()=>x0("copy failed"))}),document.body.appendChild(ni))}function x0(i){if(!ni)return;let e=ni.style.color;ni.style.color="#fff",ni.dataset.msg=i,setTimeout(()=>{ni.style.color=e},400)}function y0(i){Wf&&(qf=i,mo=[],rh=0,oh=!1,hh="",ah=0,lh=0,ch=1/0)}function v0(i,e,t,n){if(!Wf||!ni)return;let s=e.info.render,r=e.getPixelRatio();if(t&&!oh&&(rh+=i,mo.push(i),s.calls>ah&&(ah=s.calls),s.triangles>lh&&(lh=s.triangles),r<ch&&(ch=r),rh>=60&&z1(r,n)),Xf+=i,Xf<.5)return;Xf=0;let o=mo.slice(-60),a=o.length?o.length/o.reduce((h,u)=>h+u,0):0,l=o.length?Math.max(...o)*1e3:0,c=`${qf||"\u2014"}
fps ${a.toFixed(0)}  worst ${l.toFixed(0)}ms
calls ${s.calls}  tris ${(s.triangles/1e3).toFixed(0)}k
res x${r.toFixed(2)}  crowd ${n}`+(oh?`

BASELINE (tap to copy)
${hh}`:t?`
baseline in ${Math.max(0,60-rh).toFixed(0)}s`:`
(paused)`);ni.textContent=c}function z1(i,e){oh=!0;let t=mo.length,n=mo.reduce((l,c)=>l+c,0),s=[...mo].sort((l,c)=>c-l),r=s.slice(0,Math.max(1,Math.floor(t*.01))),o=r.length/r.reduce((l,c)=>l+c,0),a=navigator.userAgent.match(/\(([^)]+)\)/)?.[1]||navigator.userAgent;hh=[`level: ${qf}`,`avg fps: ${(t/n).toFixed(1)}`,`1% low fps: ${o.toFixed(1)}`,`worst frame: ${(s[0]*1e3).toFixed(0)} ms`,`max draw calls: ${ah}`,`max triangles: ${(lh/1e3).toFixed(0)}k`,`lowest res scale: x${ch.toFixed(2)} (start x${Math.min(window.devicePixelRatio||1,1.6).toFixed(2)})`,`crowd: ${e}`,`screen: ${screen.width}x${screen.height} @${window.devicePixelRatio}`,`device: ${a}`].join(`
`)}var bt={walk:4.2,run:8.6,accel:34,airAccel:14,jumpV:8.6,grav:24,agMax:2.6,agRise:5.6,glideV:-2.6,radius:.3,height:1.15,blinkDist:11,blinkCD:1.3,sleepR:9,sleepCD:2.4,camDist:5.4,panicHold:4,panicDrain:1.2,tierEdgy:40,tierHunted:75,sneakMag:.72},Ke=i=>document.getElementById(i),b0="lwh3d_save",mi={unlocked:1,best:{}};try{let i=JSON.parse(localStorage.getItem(b0)||"null");i&&i.unlocked&&(mi=i)}catch{}var G1=()=>{try{localStorage.setItem(b0,JSON.stringify(mi))}catch{}},Ba=new URLSearchParams(location.search),V1=Ba.get("q")?Ba.get("q")==="mobile":matchMedia("(pointer: coarse)").matches||/Android|iPhone|iPad/i.test(navigator.userAgent),M0=700,$f=3e3,T0=Ke("gl"),gi=new Gc({canvas:T0,antialias:!0,powerPreference:"high-performance"}),fh=Math.min(window.devicePixelRatio||1,1.6);gi.setPixelRatio(fh);gi.outputColorSpace=Wt;gi.toneMapping=Ma;gi.toneMappingExposure=1.05;gi.shadowMap.enabled=!0;gi.shadowMap.type=js;var fn=new Br,Tn=new on(62,1,.3,2600);function ed(){gi.setSize(window.innerWidth,window.innerHeight,!1),Tn.aspect=window.innerWidth/window.innerHeight,Tn.fov=Tn.aspect<1?75:62,Tn.updateProjectionMatrix()}window.addEventListener("resize",ed);ed();var X1=new so(gi),pi=Jm();fn.add(pi.root);if(Ba.get("hero")!=="proc"){let i=new vn().setFromObject(pi.root).getSize(new L).y;o0("assets/hero.glb?v="+(window.__BUILD||""),{height:i,clips:{run:"assets/hero_run.glb",jump:"assets/hero_jump.glb"}}).then(e=>{e.root.position.copy(pi.root.position),e.root.rotation.copy(pi.root.rotation),e.root.visible=pi.root.visible,fn.remove(pi.root),pi=e,fn.add(e.root),console.log("hero glb loaded, clips:",e.clips.join(",")||"none")}).catch(e=>console.info("hero.glb not used:",e&&e.message?e.message:e))}var wn=0,di=ei[0],ot=null,Nn=null,ph=null,En=null,Fa=null,Tt="loading",z={pos:new L,vel:new L,yaw:0,grounded:!0,coyote:0,ag:bt.agMax,floating:!1,airT:0,blinkCD:0,powerCD:0,cast:0,cp:new L,cpYaw:0,sneaking:!0,noisy:!1,inShade:!1},Vt={yaw:0,pitch:.32,lastDrag:-10,dist:bt.camDist,pos:new L},se={t:0,time:0,panic:0,witnesses:0,coins:0,logs:0,caughtT:0,launchT:0,cpIndex:0,toastT:0,hintT:0,calmT:99,tier:0,lastSeen:null,shadeT:0,lastRefund:0,refundT:0},ur=null,xo=[],_o=[],xn=null,ii=null,td=[],jf=jt(64,64,i=>{let e=i.createRadialGradient(32,32,1,32,32,32);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.3,"rgba(255,255,255,.5)"),e.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=e,i.fillRect(0,0,64,64)},!1),E0=new ct;fn.add(E0);for(let i=0;i<40;i++){let e=new Jn(new Gn({map:jf,color:4190463,blending:Bn,depthWrite:!1,transparent:!0}));e.visible=!1,E0.add(e),td.push({s:e,v:new L,life:0})}function hr(i,e,t=14,n=4){let s=0;for(let r of td)if(!(r.life>0)&&(r.life=.5+Math.random()*.4,r.s.visible=!0,r.s.material.color.set(e),r.s.position.copy(i),r.s.scale.setScalar(.5),r.v.set((Math.random()-.5)*n,Math.random()*n,(Math.random()-.5)*n),++s>=t))break}function Yf(i,e=80,t=1.2){let n=new tt(new Ye(t,t,e,12,1,!0),new It({color:i,transparent:!0,opacity:.22,blending:Bn,depthWrite:!1,side:bn,fog:!1}));return n.position.y=e/2,n}function W1(){ot&&ot.dispose(),Nn&&Nn.dispose(),ph&&ph.dispose();for(let i of[ur,xn,ii,..._o.map(e=>e.g)])i&&(fn.remove(i),i.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material!==void 0&&e.material.dispose?.()}));_o=[],ur=null,xn=null,ii=null,Fa&&(Fa.dispose(),Fa=null),Vm()}function w0(i){if(W1(),wn=i,di=ei[i],y0(di.name),ot=new Wc(fn,{...di,night:di.night}),ot.reflective=[],En=di.build(ot),ot.finish(),ph=Gf(fn,di.light),$f=di.light.fogFar,V1&&fn.fog&&(fn.fog.far=Math.min(fn.fog.far,M0),fn.fog.near=Math.min(fn.fog.near,M0*.3),$f=fn.fog.far),ot.reflective.length){let a=new Br,l=Gf(a,di.light);Fa=X1.fromScene(a,.02,.1,5e3).texture,l.dispose();for(let c of ot.reflective)c.envMap=Fa,c.needsUpdate=!0}Nn=new sh(ot,fn,{...di.civ,plazaMul:1});let e=[],t=ot.R;for(let a=0;a<400&&e.length<32;a++){let l,c;if(t()<.5&&ot.loops.length){let h=ot.loops[Math.floor(t()*ot.loops.length)].r,u=Math.floor(t()*4);l=u<2?h[0]+t()*(h[2]-h[0]):h[u===2?0:2],c=u>=2?h[1]+t()*(h[3]-h[1]):h[u===0?1:3]}else if(ot.plazas.length){let h=ot.plazas[Math.floor(t()*ot.plazas.length)].r;l=h[0]+t()*(h[2]-h[0]),c=h[1]+t()*(h[3]-h[1])}else continue;ot.inWater(l,c)||ot.solid(l,.8,c)||e.push([l,ot.groundAt(l,c,.5)+1,c])}let n=ot.boxes.filter(a=>a.y1>5&&a.y1<14&&a.y0===0&&(a.x1-a.x0)*(a.z1-a.z0)>80);for(let a=0;a<8&&n.length;a++){let l=n[Math.floor(t()*n.length)],c=(l.x0+l.x1)/2,h=(l.z0+l.z1)/2;e.push([c,ot.groundAt(c,h,l.y1+.2)+1,h])}xo=e.map(a=>({p:new L(...a),got:!1})),ur=new bi(new Ss(.32),new It({color:"#ffe45a"}),xo.length),ur.frustumCulled=!1,fn.add(ur),_o=En.checkpoints.map((a,l)=>{let c=new ct;c.position.set(...a);let h=new tt(new cn(1.6,.12,8,32),new It({color:"#3ff0ff"}));h.rotation.x=Math.PI/2,h.position.y=.15,c.add(h);let u=Yf("#3ff0ff",14,.9);return c.add(u),l===0&&(c.visible=!1),fn.add(c),{g:c,ring:h,beam:u,on:l===0,pos:new L(...a)}}),xn=new ct,xn.position.set(...En.goal.pos);let s=["#c08bff","#c08bff","#5ef0ff","#ffa040","#ffe45a"][i];if(wn===0||wn===4)xn.add(Yf("#ffe45a",140,2.5));else{let a=wn===1?new la(.35,.12,48,8):wn===2?new Ss(.5):new Pi(.45,1),l=new tt(a,new It({color:s}));l.position.y=1,l.name="core",xn.add(l);let c=new Jn(new Gn({map:jf,color:s,blending:Bn,depthWrite:!1,transparent:!0}));c.scale.setScalar(3),c.position.y=1,xn.add(c),xn.add(Yf(s,140,1.6))}fn.add(xn),ii=new ct,ii.position.set(...En.log);let r=new tt(new ke(.5,.7,.08),new It({color:"#3ff0ff"}));r.position.y=.8,r.name="tab",ii.add(r);let o=new Jn(new Gn({map:jf,color:"#3ff0ff",blending:Bn,depthWrite:!1,transparent:!0}));o.scale.setScalar(2),o.position.y=.8,ii.add(o),fn.add(ii),En.ship&&(En.ship.group.visible=!0),xh(!0),se.time=0,se.panic=0,se.witnesses=0,se.coins=0,se.logs=0,se.calmT=99,se.tier=0,se.lastSeen=null,se.shadeT=0,se.refundT=0,z.inShade=!1,l0(ao[i].music)}function xh(i){let e=En.spawn;if(i){z.cp.set(e[0],e[1],e[2]),z.cpYaw=e[3],se.cpIndex=0;for(let[t,n]of _o.entries())n.on=t===0,A0(n)}z.pos.copy(z.cp),z.pos.y=ot.groundAt(z.pos.x,z.pos.z,z.pos.y+1),z.vel.set(0,0,0),z.yaw=z.cpYaw,z.grounded=!0,z.ag=bt.agMax,z.floating=!1,z.cast=0,Vt.yaw=z.yaw+Math.PI,Vt.pitch=.32,se.grace=3,pi.root.visible=!0}function A0(i){i.ring.material.color.set(i.on?"#5aff8a":"#3ff0ff"),i.beam.material.color.set(i.on?"#5aff8a":"#3ff0ff"),i.beam.material.opacity=i.on?.08:.22}function Hn(i){for(let e of["ovTitle","ovLevels","ovCard","ovPause","ovEnd","ovCaught"])Ke(e).hidden=e!==i;Ke("hud").classList.toggle("hidden",i!==null&&i!=="ovCaught")}function mh(i,e,t=5.5){let n=Ke("toast");n.innerHTML=(i?"<b>"+i+"</b>":"")+e,n.hidden=!1,se.toastT=t}var R0=["Hold JUMP in the air to float. POWER blinks you forward when nobody is close.","The roofs are quieter than Michigan Ave. Float up onto the low ones and stay out of sight.","Times Square is packed. Walk up to a crowd and tap POWER to put everyone nearby to sleep.","The beach is wide open. Blink across the gaps and use the lifeguard towers as cover.","The base is crawling with staff around the ship. Sleep them in groups, then make a run for it."];function _h(i){let e=ao[i],t=ei[i];Ke("cardKick").textContent=`Level ${i+1} \xB7 ${t.place}`,Ke("cardTitle").textContent=e.title,Ke("cardText").textContent=e.card,Ke("cardTip").textContent=R0[i],Ke("btnGo").onclick=()=>{ih(),P0(),I0(i)},Hn("ovCard"),Tt="card"}function yh(){let i=Ke("levelGrid");i.innerHTML="",ei.forEach((e,t)=>{let n=document.createElement("button");n.className="lv",n.disabled=t>=mi.unlocked;let s=mi.best[e.id];n.innerHTML=`${t+1}. ${e.name}<small>${s?C0(s.time)+" \xB7 \u2726"+s.coins:t>=mi.unlocked?"Locked":ao[t].title}</small>`,n.onclick=()=>{Gt("uiBlip"),_h(t)},i.appendChild(n)})}var C0=i=>`${Math.floor(i/60)}:${String(Math.floor(i%60)).padStart(2,"0")}`;function I0(i){Ke("loadingText").textContent=`Loading ${ei[i].name}\u2026`,Ke("loading").hidden=!1,setTimeout(()=>{i!==wn||!ot?w0(i):(Nn.reset(),gh()),gh(),Ke("loading").hidden=!0,Hn(null),Tt="play",cr.paused=!1,Ua(.38),Ke("hint").textContent=R0[i],se.hintT=9},30)}function gh(){xh(!0),Nn.reset(),se.time=0,se.panic=0,se.witnesses=0,se.coins=0,se.logs=0,se.calmT=99,se.tier=0,se.lastSeen=null,se.shadeT=0,se.refundT=0,z.inShade=!1;for(let i of xo)i.got=!1;ii.visible=!0,xn.visible=!0,En.ship&&(En.ship.group.position.y=wn===4?2.2:En.ship.group.position.y)}function P0(){let i=document.documentElement;try{!document.fullscreenElement&&i.requestFullscreen&&i.requestFullscreen({navigationUI:"hide"}).then(()=>{try{screen.orientation.lock("landscape").catch(()=>{})}catch{}}).catch(()=>{})}catch{}}Ke("btnPlay").onclick=()=>{ih(),Gt("uiBlip");let i=0;for(let e=0;e<mi.unlocked&&e<ei.length&&(i=e,!!mi.best[ei[e].id]);e++);_h(i)};Ke("btnLevels").onclick=()=>{ih(),Gt("uiBlip"),yh(),Hn("ovLevels")};Ke("btnLvBack").onclick=()=>{Hn("ovTitle"),Tt="title"};Ke("btnCardBack").onclick=()=>{yh(),Hn("ovLevels")};Ke("btnPause").onclick=()=>{Tt==="play"&&(Tt="paused",cr.paused=!0,Oa(),g0(),Hn("ovPause"))};Ke("btnResume").onclick=()=>{Tt="play",cr.paused=!1,Hn(null)};Ke("btnRestart").onclick=()=>{Hn(null),gh(),Tt="play",cr.paused=!1};Ke("btnQuit").onclick=()=>{cr.paused=!1,yh(),Hn("ovLevels"),Tt="title"};Ke("btnMute").onclick=()=>{h0(),Ke("btnMute").textContent="Sound: "+(u0()?"off":"on")};Ke("btnFs").onclick=P0;Ke("btnReplay").onclick=()=>_h(wn);Ke("btnEndLevels").onclick=()=>{yh(),Hn("ovLevels"),Tt="title"};Ke("btnNext").onclick=()=>{wn+1<ei.length&&_h(wn+1)};document.addEventListener("visibilitychange",()=>{document.hidden&&Tt==="play"&&Ke("btnPause").onclick()});p0(T0,{joyBase:Ke("joyBase"),joyKnob:Ke("joyKnob"),btnJump:Ke("btnJump"),btnPower:Ke("btnPower")});var dh=new L;function L0(i){let[e,t]=Vf(),n=-Math.sin(Vt.yaw),s=-Math.cos(Vt.yaw),r=Math.cos(Vt.yaw),o=-Math.sin(Vt.yaw),a=n*-t+r*e,l=s*-t+o*e,c=Math.min(1,Math.hypot(a,l));c>.01&&(a/=c,l/=c);let h=c<=bt.sneakMag,u=h?bt.walk*(c/bt.sneakMag):bt.run;z.sneaking=h,z.noisy=!h&&z.grounded;let f=z.grounded?bt.accel:bt.airAccel,d=a*u,p=l*u;if(z.vel.x+=Math.max(-f*i,Math.min(f*i,d-z.vel.x)),z.vel.z+=Math.max(-f*i,Math.min(f*i,p-z.vel.z)),z.cast>0&&(z.vel.x*=.5,z.vel.z*=.5),c>.05){let _=Math.atan2(a,l)-z.yaw;_=Math.atan2(Math.sin(_),Math.cos(_)),z.yaw+=_*Math.min(1,i*12)}z.coyote-=i,st.jumpPressed&&(z.grounded||z.coyote>0)&&(z.vel.y=bt.jumpV,z.grounded=!1,z.coyote=0,z.airT=0,Gt("jump"));let x=z.floating;z.floating=!1,z.grounded||(z.airT+=i,st.jump&&(z.airT>.22||z.vel.y<1.5)?z.ag>0?(z.floating=!0,z.ag-=i,z.vel.y+=(bt.agRise-z.vel.y)*Math.min(1,i*6)):(z.vel.y=Math.max(z.vel.y-bt.grav*i,bt.glideV),z.floating=!0):z.vel.y=Math.max(z.vel.y-bt.grav*i,-40)),z.floating&&!x&&c0(),!z.floating&&x&&Oa(),z.pos.x+=z.vel.x*i,z.pos.z+=z.vel.z*i,ot.pushOut(z.pos,bt.radius,bt.height),z.pos.y+=z.vel.y*i;let m=ot.ceilingAt(z.pos.x,z.pos.z,z.pos.y-z.vel.y*i,bt.height,bt.radius*.8);z.vel.y>0&&z.pos.y+bt.height>m&&(z.pos.y=m-bt.height,z.vel.y=0);let g=ot.groundAt(z.pos.x,z.pos.z,z.pos.y,bt.radius,.5);if(z.pos.y<=g+.001?(!z.grounded&&z.vel.y<-13?Gt("land",!0):z.grounded||Gt("land",!1),z.pos.y=g,z.vel.y<0&&(z.vel.y=0),z.grounded=!0,z.ag=bt.agMax,z.coyote=.12):z.grounded&&z.pos.y-g<.55&&z.vel.y<=0?z.pos.y=g:z.grounded&&(z.grounded=!1,z.airT=.3),ot.inWater(z.pos.x,z.pos.z)&&z.pos.y<.4){Gt("splash"),hr(z.pos.clone().setY(.3),"#9fe8ff",18,5),mh("","Splash. Aliens don\u2019t swim. Back to the last checkpoint.",3),xh(!1),Gt("respawn");return}z.blinkCD-=i,z.powerCD-=i,z.cast-=i;let v=Nn.awakeNear(z.pos.x,z.pos.z,bt.sleepR),S=Ke("btnPower"),M=v?"SLEEP":"BLINK";if(S.textContent!==M&&(S.textContent=M),S.classList.toggle("cool",v?z.powerCD>0:z.blinkCD>0),st.powerPressed){if(v&&z.powerCD<=0){let E=Nn.sleepAround(z.pos.x,z.pos.z,bt.sleepR),_=E.n;E.refund>0&&(se.panic=Math.max(0,se.panic-E.refund),se.lastRefund=E.refund,se.refundT=1.2),z.powerCD=bt.sleepCD,z.cast=.45,Gt("cast"),setTimeout(()=>Gt("sleep"),200),hr(z.pos.clone().setY(z.pos.y+1.3),"#9ff7ff",20,7),_>2&&mh("",`${_} people out cold.`,2)}else if(!v&&z.blinkCD<=0){let E=Math.sin(z.yaw),_=Math.cos(z.yaw),y=0;for(let b=.5;b<=bt.blinkDist;b+=.5){let N=z.pos.x+E*b,C=z.pos.z+_*b;if(ot.solid(N,z.pos.y+.5,C)||ot.solid(N,z.pos.y+1,C)||ot.inWater(N,C)&&z.pos.y<.5||N<ot.bounds[0]+1||N>ot.bounds[2]-1||C<ot.bounds[1]+1||C>ot.bounds[3]-1)break;y=b}y>.6&&(hr(z.pos.clone().setY(z.pos.y+.6),"#3ff0ff",12,3),z.pos.x+=E*(y-.3),z.pos.z+=_*(y-.3),hr(z.pos.clone().setY(z.pos.y+.6),"#3ff0ff",12,3),Gt("blink"),z.blinkCD=bt.blinkCD)}}}function Qf(i){(st.camDX||st.camDY)&&(Vt.yaw-=st.camDX*.0065,Vt.pitch=Math.max(-.05,Math.min(1.15,Vt.pitch+st.camDY*.0045)),Vt.lastDrag=se.t);let[,e]=Vf(),t=Math.hypot(z.vel.x,z.vel.z);if(se.t-Vt.lastDrag>1.2&&t>1&&e<-.3){let f=z.yaw+Math.PI-Vt.yaw;f=Math.atan2(Math.sin(f),Math.cos(f)),Vt.yaw+=f*Math.min(1,i*1.4)}let n=z.pos.x,s=z.pos.y+1.15,r=z.pos.z,o=Math.cos(Vt.pitch),a=z.floating?bt.camDist+1.2:bt.camDist;Vt.dist+=(a-Vt.dist)*Math.min(1,i*3);let l=Math.sin(Vt.yaw)*o,c=Math.sin(Vt.pitch),h=Math.cos(Vt.yaw)*o,u=Vt.dist;for(let f=.6;f<=Vt.dist;f+=.35)if(ot.solid(n+l*f,s+c*f,r+h*f)){u=Math.max(.8,f-.45);break}Tn.position.set(n+l*u,Math.max(s+c*u,ot.groundAt(n+l*u,r+h*u,s+c*u)+.35),r+h*u),Tn.lookAt(n,s+.25,r)}var N0=Ke("mini"),et=N0.getContext("2d"),ws={},go=(i,e)=>{ws[i]!==e&&(ws[i]=e,Ke(i).textContent=e)},uh=(i,e,t)=>{let n=i+e;ws[n]!==t&&(ws[n]=t,Ke(i).style[e]=t)};function q1(){let i=Vt.yaw,e=xn.position,t=e.x-z.pos.x,n=e.z-z.pos.z,s=Math.hypot(t,n),r=t*Math.cos(i)-n*Math.sin(i),o=t*Math.sin(i)+n*Math.cos(i);uh("objArrow","transform",`rotate(${Math.atan2(r,-o).toFixed(2)}rad)`),go("objLabel",En.goal.label),go("objDist",s>1e3?(s/1e3).toFixed(1)+" km":Math.round(s)+" m"),uh("panicFill","width",Math.min(100,se.panic).toFixed(1)+"%");let a=se.tier>=2;ws.hot!==a&&(ws.hot=a,Ke("panic").classList.toggle("hot",a)),go("panicLbl",se.tier>=2?"HUNTED":se.tier>=1?"EDGY":"PANIC"),se.refundT=Math.max(0,se.refundT-1/60);let l=!z.grounded&&z.airT>kn.airGrace,c=se.refundT>0?"\u2212"+Math.round(se.lastRefund)+" PANIC":l?"UNSEEN":z.inShade?"HIDDEN":z.sneaking?"QUIET":"";go("pip",c),uh("pip","opacity",c?"1":"0");let h=c==="HIDDEN"||c==="UNSEEN"||se.refundT>0;ws.pipHid!==h&&(ws.pipHid=h,Ke("pip").classList.toggle("hid",h)),uh("vig","opacity",z.inShade?"1":"0"),go("coinN",`${se.coins}/${xo.length}`),go("logN",`${se.logs}/1`);let u=ot.minimap,f=N0.width,d=f/2,p=d/230/u.sc;et.save(),et.clearRect(0,0,f,f),et.beginPath(),et.arc(d,d,d-2,0,7),et.clip(),et.fillStyle=di.outerGround,et.fillRect(0,0,f,f),et.translate(d,d),et.rotate(i),et.scale(p,p);let x=_=>(_-u.x0)*u.sc,m=_=>(_-u.z0)*u.sc;et.translate(-x(z.pos.x),-m(z.pos.z)),et.drawImage(u.canvas,0,0);let g=1/p;for(let _ of Nn.civs)Math.abs(_.x-z.pos.x)>240||Math.abs(_.z-z.pos.z)>240||(et.fillStyle=_.state==="flee"||_.state==="notice"?"#ff3a3a":_.state==="sleep"?"#5ef0ff":"#ffffff",et.fillRect(x(_.x)-2*g,m(_.z)-2*g,4*g,4*g));for(let _ of _o)_.on||(et.fillStyle="#3ff0ff",et.beginPath(),et.arc(x(_.pos.x),m(_.pos.z),4*g,0,7),et.fill());et.restore();let v=r*(d/230),S=o*(d/230),M=Math.hypot(v,S);M>d-12&&(v*=(d-12)/M,S*=(d-12)/M),et.fillStyle="#ffe45a",et.strokeStyle="#3a2600",et.lineWidth=3,et.beginPath(),et.arc(d+v,d+S,8,0,7),et.fill(),et.stroke();let E=z.yaw-(Vt.yaw+Math.PI);et.save(),et.translate(d,d),et.rotate(-E+Math.PI),et.fillStyle="#93cf3a",et.strokeStyle="#102000",et.lineWidth=3,et.beginPath(),et.moveTo(0,-11),et.lineTo(8,8),et.lineTo(0,4),et.lineTo(-8,8),et.closePath(),et.stroke(),et.fill(),et.restore(),et.fillStyle="#fff",et.font="bold 20px sans-serif",et.textAlign="center",et.textBaseline="middle",et.fillText("N",d+Math.sin(-i)*(d-14)*-1,d-Math.cos(i)*(d-14))}function D0(i){se.time+=i,se.shadeT-=i,se.shadeT<=0&&(se.shadeT=.1,z.inShade=ot.enclosed(z.pos.x,z.pos.y,z.pos.z));let e=Nn.update(i,{x:z.pos.x,y:z.pos.y,z:z.pos.z,active:Tt==="play"&&se.grace<=0,sneaking:z.sneaking,noisy:z.noisy,shade:z.inShade,tier:se.tier,lastSeen:se.lastSeen,airborne:!z.grounded&&z.airT>kn.airGrace},Tn);se.grace-=i,e.panicGain>0?(se.panic+=e.panicGain,se.witnesses+=e.witnesses,se.calmT=0,e.seen&&(se.lastSeen=e.seen)):e.fleeing?se.calmT=0:se.calmT+=i,se.calmT>bt.panicHold&&(se.panic=Math.max(0,se.panic-i*bt.panicDrain)),se.tier=se.panic>=bt.tierHunted?2:se.panic>=bt.tierEdgy?1:0,Hf(se.tier>=1),se.panic>=100&&Tt==="play"&&(Tt="caught",se.caughtT=0,Gt("alert"),Gt("siren"),Oa(),Ke("flash").style.opacity=1,Hn("ovCaught"),Ua(.12));let t=dh,n=new Ve,s=new kt,r=new L;xo.forEach((l,c)=>{!l.got&&l.p.distanceToSquared(t.set(z.pos.x,z.pos.y+.6,z.pos.z))<1.6&&(l.got=!0,se.coins++,Gt("coin"),hr(l.p,"#ffe45a",8,3)),s.setFromAxisAngle(new L(0,1,0),se.t*2+c),r.setScalar(l.got?1e-4:1),n.compose(new L(l.p.x,l.p.y+Math.sin(se.t*2.5+c)*.15,l.p.z),s,r),ur.setMatrixAt(c,n)}),ur.instanceMatrix.needsUpdate=!0,_o.forEach((l,c)=>{l.ring.rotation.z+=i,!l.on&&l.pos.distanceTo(dh.set(z.pos.x,l.pos.y,z.pos.z))<3&&Math.abs(z.pos.y-l.pos.y)<3&&(l.on=!0,A0(l),z.cp.copy(l.pos),z.cpYaw=z.yaw,Gt("ckpt"),mh("","Checkpoint",1.6))}),ii.visible&&(ii.getObjectByName("tab").rotation.y+=i*1.5,ii.position.y=En.log[1]+Math.sin(se.t*2)*.12,ii.position.distanceTo(dh.set(z.pos.x,z.pos.y+.3,z.pos.z))<1.8&&(ii.visible=!1,se.logs=1,Gt("ckpt"),mh("Ship\u2019s log \xB7 "+di.name,ao[wn].log,8)));let o=xn.getObjectByName("core");o&&(o.rotation.y+=i*1.6,o.rotation.x+=i*.7,o.position.y=1+Math.sin(se.t*2)*.15);let a=En.goal.radius||1.6;xn.visible&&Math.hypot(xn.position.x-z.pos.x,xn.position.z-z.pos.z)<a&&Math.abs(xn.position.y-z.pos.y)<2.5&&Y1();for(let l of ot.anim)l(se.t)}function Y1(){if(Oa(),Hf(!1),wn===4){Tt="launch",se.launchT=0,Gt("part"),setTimeout(()=>Gt("launch"),900),pi.root.visible=!1,xn.visible=!1,hr(z.pos.clone().setY(1),"#ffe45a",30,6);return}Gt(wn===0?"win":"part"),xn.visible=!1,hr(z.pos.clone().setY(1),"#ffe45a",30,6),U0()}function U0(){Tt="end";let i=di.id,e=mi.best[i];!e||se.time<e.time?mi.best[i]={time:se.time,coins:Math.max(se.coins,e?e.coins:0)}:mi.best[i].coins=Math.max(e.coins,se.coins),mi.unlocked=Math.max(mi.unlocked,Math.min(ei.length,wn+2)),G1();let t=ao[wn];Ke("endKick").textContent=t.endKick,Ke("endTitle").textContent=t.endTitle,Ke("endStory").textContent=wn===4?"The ship remembered the way. Thanks for playing Long Way Home.":t.endStory,Ke("endStats").innerHTML=`<div><b>${C0(se.time)}</b>time</div><div><b>${se.coins}/${xo.length}</b>stardust</div><div><b>${se.witnesses}</b>people spooked</div>`,Ke("btnNext").hidden=wn>=ei.length-1,Hn("ovEnd"),Ua(.2)}var S0=performance.now(),Zf=0,Kf=0,Jf=0;function O0(i){requestAnimationFrame(O0);let e=Math.min(.05,(i-S0)/1e3);if(S0=i,se.t+=e,!!ot){if(Zf+=e,Kf++,Jf+=e,Jf>2.5){let t=Kf/Zf;t<34&&fh>.9&&(fh-=.15,gi.setPixelRatio(fh),ed()),Zf=0,Kf=0,Jf=0,window.__fps=t}if(Tt==="play")L0(e),Qf(e),D0(e);else if(Tt==="caught")se.caughtT+=e,Nn.update(e,{x:z.pos.x,y:z.pos.y,z:z.pos.z,active:!1},Tn),Qf(e),se.caughtT>2.4&&(Ke("flash").style.opacity=0,se.panic=0,se.calmT=99,se.tier=0,se.lastSeen=null,Nn.reset(),xh(!1),Gt("respawn"),Hn(null),Tt="play",Ua(.38));else if(Tt==="launch"){se.launchT+=e;let t=En.ship.group,n=se.launchT;t.position.y=2.2+Math.max(0,n-1)**2*2.2,t.rotation.y+=e*(1+n*2),t.rotation.x*=.98,En.ship.lights.color.setHSL(n*.3%1,1,.6),Tn.position.lerp(dh.set(t.position.x+30,8+n*3,t.position.z+34),e*1.5),Tn.lookAt(t.position),Nn.update(e,{x:0,y:-999,z:0,active:!1},Tn),n>6&&U0()}else if(Tt==="title"||Tt==="card"||Tt==="end"||Tt==="loading"){let t=se.t*.2;Tn.position.set(z.pos.x+Math.sin(t)*4.6,z.pos.y+1.5,z.pos.z+Math.cos(t)*4.6),Tn.lookAt(z.pos.x-Math.cos(t)*1.7,z.pos.y+1.3,z.pos.z+Math.sin(t)*1.7),Nn.update(e,{x:z.pos.x,y:z.pos.y,z:z.pos.z,active:!1},Tn)}for(let t of td)t.life<=0||(t.life-=e,t.s.position.addScaledVector(t.v,e),t.v.y-=6*e,t.s.scale.setScalar(Math.max(.01,t.life)*.9),t.life<=0&&(t.s.visible=!1));se.toastT>0&&(se.toastT-=e,se.toastT<=0&&(Ke("toast").hidden=!0)),se.hintT>0&&(se.hintT-=e,se.hintT<=0&&(Ke("hint").textContent="")),pi.root.position.copy(z.pos),pi.root.rotation.y=z.yaw,pi.update(e,{speed:Tt==="play"?Math.hypot(z.vel.x,z.vel.z):0,grounded:z.grounded,vy:z.vel.y,floating:z.floating,casting:z.cast>0,sneaking:z.sneaking&&Tt==="play",hidden:z.inShade&&Tt==="play"}),ph.follow(z.pos),ot.cullFar(Tn,$f+40),gi.render(fn,Tn),v0(e,gi,Tt==="play",Nn?Nn.civs.length:0),Tt==="play"&&q1(),m0()}}function Z1(){_0();let i=Math.min(ei.length-1,Number(Ba.get("level")||0));w0(i),Tt="title",Hn("ovTitle"),Ke("hud").classList.add("hidden"),Ba.has("play")&&(Hn(null),Tt="play",gh()),requestAnimationFrame(O0)}window.__game={sim(i){let e=.016666666666666666;for(let t=0;t<i*60;t++)se.t+=e,Tt==="play"&&(L0(e),Qf(e),D0(e)),st.jumpPressed=!1,st.powerPressed=!1},renderer:gi,camera:Tn,P:z,G:se,cam:Vt,get world(){return ot},get crowd(){return Nn},input:st,startLevel:I0,LEVELS:ei,setState:i=>{Tt=i},get state(){return Tt},get cpList(){return En?En.checkpoints.map(i=>[i[0],i[2]]):[]}};Z1();"serviceWorker"in navigator&&navigator.serviceWorker.register("../sw.js").catch(()=>{});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
