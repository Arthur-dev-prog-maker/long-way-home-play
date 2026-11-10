var np=0,su=1,ip=2;var Ys=1,sp=2,Wr=3,Pi=0,Sn=1,bn=2,Zs=0,qr=1,Fn=2,ru=3,ou=4,rp=5;var Ks=100,op=101,ap=102,lp=103,cp=104,hp=200,up=201,fp=202,dp=203,au=204,lu=205,pp=206,mp=207,gp=208,xp=209,_p=210,yp=211,vp=212,Mp=213,Sp=214,pl=0,ml=1,gl=2,wr=3,xl=4,_l=5,yl=6,vl=7,pa=0,bp=1,Tp=2,Li=0,cu=1,hu=2,uu=3,ma=4,fu=5,du=6,pu=7,qh="attached",Ep="detached",mu=300,Js=301,Yr=302,Wl=303,ql=304,Ai=1e3,si=1001,Ar=1002,Qt=1003,Yl=1004;var $s=1005;var an=1006,Zr=1007;var li=1008;var Xn=1009,gu=1010,xu=1011,Kr=1012,Zl=1013,Mi=1014,$n=1015,Si=1016,Kl=1017,Jl=1018,js=1020,_u=35902,yu=35899,vu=1021,Mu=1022,ci=1023,Yi=1026,ts=1027,$l=1028,jl=1029,vs=1030,Ql=1031;var ec=1033,ga=33776,xa=33777,_a=33778,ya=33779,tc=35840,nc=35841,ic=35842,sc=35843,rc=36196,oc=37492,ac=37496,lc=37488,cc=37489,va=37490,hc=37491,uc=37808,fc=37809,dc=37810,pc=37811,mc=37812,gc=37813,xc=37814,_c=37815,yc=37816,vc=37817,Mc=37818,Sc=37819,bc=37820,Tc=37821,Ec=36492,wc=36494,Ac=36495,Rc=36283,Cc=36284,Ma=36285,Ic=36286,Pc=2200,wp=2201,Ap=2202,Ns=2300,Ds=2301,fl=2302,Yh=2303,Cs=2400,Is=2401,Po=2402,Lc=2500,Rp=2501,Su=0,Sa=1,Jr=2,Cp=3200;var $r=0,Ip=1,ns="",Xt="srgb",Un="srgb-linear",Lo="linear",At="srgb";var dl=7680;var Pp=519,Lp=512,Np=513,Dp=514,bu=515,Up=516,Op=517,Tu=518,Eu=519,wu=35044;var Au="300 es",ri=2e3,Rr=2001;function F0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function B0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Cr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Fp(){let i=Cr("canvas");return i.style.display="block",i}var ld={},Ir=null;function No(...i){let e="THREE."+i.shift();Ir?Ir("log",e,...i):console.log(e,...i)}function Bp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Oe(...i){i=Bp(i);let e="THREE."+i.shift();if(Ir)Ir("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ye(...i){i=Bp(i);let e="THREE."+i.shift();if(Ir)Ir("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ls(...i){let e=i.join(" ");e in ld||(ld[e]=!0,Oe(...i))}function kp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var zp={[pl]:pl,[gl]:yl,[xl]:xl,[wr]:_l,[ml]:ml,[yl]:gl,[vl]:vl,[_l]:wr},yi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cd=1234567,Ao=Math.PI/180,Us=180/Math.PI;function bi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Rn[i&255]+Rn[i>>8&255]+Rn[i>>16&255]+Rn[i>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[t&63|128]+Rn[t>>8&255]+"-"+Rn[t>>16&255]+Rn[t>>24&255]+Rn[n&255]+Rn[n>>8&255]+Rn[n>>16&255]+Rn[n>>24&255]).toLowerCase()}function dt(i,e,t){return Math.max(e,Math.min(t,i))}function Ru(i,e){return(i%e+e)%e}function k0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function z0(i,e,t){return i!==e?(t-i)/(e-i):0}function Ro(i,e,t){return(1-t)*i+t*e}function H0(i,e,t,n){return Ro(i,e,1-Math.exp(-t*n))}function G0(i,e=1){return e-Math.abs(Ru(i,e*2)-e)}function V0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function X0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function W0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function q0(i,e){return i+Math.random()*(e-i)}function Y0(i){return i*(.5-Math.random())}function Z0(i){i!==void 0&&(cd=i);let e=cd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function K0(i){return i*Ao}function J0(i){return i*Us}function $0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function j0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Cu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Q0(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),f=r((e-n)/2),d=o((e-n)/2),u=r((n-e)/2),p=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*f,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*f,a*c);break;case"ZXZ":i.set(l*f,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*p,l*u,a*c);break;case"YXY":i.set(l*u,a*h,l*p,a*c);break;case"ZYZ":i.set(l*p,l*u,a*h,a*c);break;default:Oe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Nc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Iu(i,e){if(e.constructor===Float32Array)return i;let t=Nc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Pu(i,e){if(e.constructor===Float32Array)return i;let t=Nc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var Dc={DEG2RAD:Ao,RAD2DEG:Us,generateUUID:bi,clamp:dt,euclideanModulo:Ru,mapLinear:k0,inverseLerp:z0,lerp:Ro,damp:H0,pingpong:G0,smoothstep:V0,smootherstep:X0,randInt:W0,randFloat:q0,randFloatSpread:Y0,seededRandom:Z0,degToRad:K0,radToDeg:J0,isPowerOfTwo:$0,ceilPowerOfTwo:j0,floorPowerOfTwo:Cu,setQuaternionFromProperEuler:Q0,normalize:Pu,denormalize:Iu},Fu=class Fu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Fu.prototype.isVector2=!0;var re=Fu,Bt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],d=r[o+0],u=r[o+1],p=r[o+2],x=r[o+3];if(f!==x||l!==d||c!==u||h!==p){let m=l*d+c*u+h*p+f*x;m<0&&(d=-d,u=-u,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){let _=Math.acos(m),v=Math.sin(_);g=Math.sin(g*_)/v,a=Math.sin(a*_)/v,l=l*g+d*a,c=c*g+u*a,h=h*g+p*a,f=f*g+x*a}else{l=l*g+d*a,c=c*g+u*a,h=h*g+p*a,f=f*g+x*a;let _=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=_,c*=_,h*=_,f*=_}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[o],d=r[o+1],u=r[o+2],p=r[o+3];return e[t]=a*p+h*f+l*u-c*d,e[t+1]=l*p+h*d+c*f-a*u,e[t+2]=c*p+h*u+a*d-l*f,e[t+3]=h*p-a*f-l*d-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),f=a(r/2),d=l(n/2),u=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*f+c*u*p,this._y=c*u*f-d*h*p,this._z=c*h*p+d*u*f,this._w=c*h*f-d*u*p;break;case"YXZ":this._x=d*h*f+c*u*p,this._y=c*u*f-d*h*p,this._z=c*h*p-d*u*f,this._w=c*h*f+d*u*p;break;case"ZXY":this._x=d*h*f-c*u*p,this._y=c*u*f+d*h*p,this._z=c*h*p+d*u*f,this._w=c*h*f-d*u*p;break;case"ZYX":this._x=d*h*f-c*u*p,this._y=c*u*f+d*h*p,this._z=c*h*p-d*u*f,this._w=c*h*f+d*u*p;break;case"YZX":this._x=d*h*f+c*u*p,this._y=c*u*f+d*h*p,this._z=c*h*p-d*u*f,this._w=c*h*f-d*u*p;break;case"XZY":this._x=d*h*f-c*u*p,this._y=c*u*f-d*h*p,this._z=c*h*p+d*u*f,this._w=c*h*f+d*u*p;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10],d=n+a+f;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-s)*u}else if(n>a&&n>f){let u=2*Math.sqrt(1+n-a-f);this._w=(h-l)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+c)/u}else if(a>f){let u=2*Math.sqrt(1+a-n-f);this._w=(r-c)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+f-n-a);this._w=(o-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Bu=class Bu{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),f=2*(r*n-o*t);return this.x=t+l*c+o*f-a*h,this.y=n+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _h.copy(this).projectOnVector(e),this.sub(_h)}reflect(e){return this.sub(_h.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Bu.prototype.isVector3=!0;var L=Bu,_h=new L,hd=new Bt,ku=class ku{constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],u=n[5],p=n[8],x=s[0],m=s[3],g=s[6],_=s[1],v=s[4],M=s[7],b=s[2],w=s[5],y=s[8];return r[0]=o*x+a*_+l*b,r[3]=o*m+a*v+l*w,r[6]=o*g+a*M+l*y,r[1]=c*x+h*_+f*b,r[4]=c*m+h*v+f*w,r[7]=c*g+h*M+f*y,r[2]=d*x+u*_+p*b,r[5]=d*m+u*v+p*w,r[8]=d*g+u*M+p*y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,d=a*l-h*r,u=c*r-o*l,p=t*f+n*d+s*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=f*x,e[1]=(s*c-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=d*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=u*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Ls("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(yh.makeScale(e,t)),this}rotate(e){return Ls("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(yh.makeRotation(-e)),this}translate(e,t){return Ls("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(yh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ku.prototype.isMatrix3=!0;var $e=ku,yh=new $e,ud=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fd=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function eg(){let i={enabled:!0,workingColorSpace:Un,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===At&&(s.r=qi(s.r),s.g=qi(s.g),s.b=qi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===At&&(s.r=Er(s.r),s.g=Er(s.g),s.b=Er(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ns?Lo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Un]:{primaries:e,whitePoint:n,transfer:Lo,toXYZ:ud,fromXYZ:fd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:e,whitePoint:n,transfer:At,toXYZ:ud,fromXYZ:fd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}}),i}var ft=eg();function qi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Er(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ar,Ml=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ar===void 0&&(ar=Cr("canvas")),ar.width=e.width,ar.height=e.height;let s=ar.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ar}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Cr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=qi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(qi(t[n]/255)*255):t[n]=qi(t[n]);return{data:t,width:e.width,height:e.height}}else return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},tg=0,Pr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:tg++}),this.uuid=bi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(vh(s[o].image)):r.push(vh(s[o]))}else r=vh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function vh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ml.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}var ng=0,Mh=new L,ln=class i extends yi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=si,s=si,r=an,o=li,a=ci,l=Xn,c=i.DEFAULT_ANISOTROPY,h=ns){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ng++}),this.uuid=bi(),this.name="",this.source=new Pr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Mh).x}get height(){return this.source.getSize(Mh).y}get depth(){return this.source.getSize(Mh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Oe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Oe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ai:e.x=e.x-Math.floor(e.x);break;case si:e.x=e.x<0?0:1;break;case Ar:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ai:e.y=e.y-Math.floor(e.y);break;case si:e.y=e.y<0?0:1;break;case Ar:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=mu;ln.DEFAULT_ANISOTROPY=1;var zu=class zu{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],u=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+u+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,M=(u+1)/2,b=(g+1)/2,w=(h+d)/4,y=(f+x)/4,S=(p+m)/4;return v>M&&v>b?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=w/n,r=y/n):M>b?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=w/s,r=S/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=y/r,s=S/r),this.set(n,s,r,t),this}let _=Math.sqrt((m-p)*(m-p)+(f-x)*(f-x)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-p)/_,this.y=(f-x)/_,this.z=(d-h)/_,this.w=Math.acos((c+u+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};zu.prototype.isVector4=!0;var It=zu,Sl=class extends yi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new ln({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Pr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zn=class extends Sl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Do=class extends ln{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var bl=class extends ln{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Xl=class Xl{constructor(e,t,n,s,r,o,a,l,c,h,f,d,u,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,f,d,u,p,x,m)}set(e,t,n,s,r,o,a,l,c,h,f,d,u,p,x,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=f,g[14]=d,g[3]=u,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/lr.setFromMatrixColumn(e,0).length(),r=1/lr.setFromMatrixColumn(e,1).length(),o=1/lr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let d=o*h,u=o*f,p=a*h,x=a*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=u+p*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=p+u*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,u=l*f,p=c*h,x=c*f;t[0]=d+x*a,t[4]=p*a-u,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=u*a-p,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,u=l*f,p=c*h,x=c*f;t[0]=d-x*a,t[4]=-o*f,t[8]=p+u*a,t[1]=u+p*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,u=o*f,p=a*h,x=a*f;t[0]=l*h,t[4]=p*c-u,t[8]=d*c+x,t[1]=l*f,t[5]=x*c+d,t[9]=u*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,u=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=x-d*f,t[8]=p*f+u,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=u*f+p,t[10]=d-x*f}else if(e.order==="XZY"){let d=o*l,u=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=d*f+x,t[5]=o*h,t[9]=u*f-p,t[2]=p*f-u,t[6]=a*h,t[10]=x*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ig,e,sg)}lookAt(e,t,n){let s=this.elements;return qn.subVectors(e,t),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),cs.crossVectors(n,qn),cs.lengthSq()===0&&(Math.abs(n.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),cs.crossVectors(n,qn)),cs.normalize(),Oa.crossVectors(qn,cs),s[0]=cs.x,s[4]=Oa.x,s[8]=qn.x,s[1]=cs.y,s[5]=Oa.y,s[9]=qn.y,s[2]=cs.z,s[6]=Oa.z,s[10]=qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],u=n[13],p=n[2],x=n[6],m=n[10],g=n[14],_=n[3],v=n[7],M=n[11],b=n[15],w=s[0],y=s[4],S=s[8],N=s[12],C=s[1],O=s[5],R=s[9],D=s[13],P=s[2],k=s[6],A=s[10],U=s[14],J=s[3],G=s[7],Y=s[11],j=s[15];return r[0]=o*w+a*C+l*P+c*J,r[4]=o*y+a*O+l*k+c*G,r[8]=o*S+a*R+l*A+c*Y,r[12]=o*N+a*D+l*U+c*j,r[1]=h*w+f*C+d*P+u*J,r[5]=h*y+f*O+d*k+u*G,r[9]=h*S+f*R+d*A+u*Y,r[13]=h*N+f*D+d*U+u*j,r[2]=p*w+x*C+m*P+g*J,r[6]=p*y+x*O+m*k+g*G,r[10]=p*S+x*R+m*A+g*Y,r[14]=p*N+x*D+m*U+g*j,r[3]=_*w+v*C+M*P+b*J,r[7]=_*y+v*O+M*k+b*G,r[11]=_*S+v*R+M*A+b*Y,r[15]=_*N+v*D+M*U+b*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],u=e[14],p=e[3],x=e[7],m=e[11],g=e[15],_=l*u-c*d,v=a*u-c*f,M=a*d-l*f,b=o*u-c*h,w=o*d-l*h,y=o*f-a*h;return t*(x*_-m*v+g*M)-n*(p*_-m*b+g*w)+s*(p*v-x*b+g*y)-r*(p*M-x*w+m*y)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],u=e[11],p=e[12],x=e[13],m=e[14],g=e[15],_=t*a-n*o,v=t*l-s*o,M=t*c-r*o,b=n*l-s*a,w=n*c-r*a,y=s*c-r*l,S=h*x-f*p,N=h*m-d*p,C=h*g-u*p,O=f*m-d*x,R=f*g-u*x,D=d*g-u*m,P=_*D-v*R+M*O+b*C-w*N+y*S;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/P;return e[0]=(a*D-l*R+c*O)*k,e[1]=(s*R-n*D-r*O)*k,e[2]=(x*y-m*w+g*b)*k,e[3]=(d*w-f*y-u*b)*k,e[4]=(l*C-o*D-c*N)*k,e[5]=(t*D-s*C+r*N)*k,e[6]=(m*M-p*y-g*v)*k,e[7]=(h*y-d*M+u*v)*k,e[8]=(o*R-a*C+c*S)*k,e[9]=(n*C-t*R-r*S)*k,e[10]=(p*w-x*M+g*_)*k,e[11]=(f*M-h*w-u*_)*k,e[12]=(a*N-o*O-l*S)*k,e[13]=(t*O-n*N+s*S)*k,e[14]=(x*v-p*b-m*_)*k,e[15]=(h*b-f*v+d*_)*k,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,f=a+a,d=r*c,u=r*h,p=r*f,x=o*h,m=o*f,g=a*f,_=l*c,v=l*h,M=l*f,b=n.x,w=n.y,y=n.z;return s[0]=(1-(x+g))*b,s[1]=(u+M)*b,s[2]=(p-v)*b,s[3]=0,s[4]=(u-M)*w,s[5]=(1-(d+g))*w,s[6]=(m+_)*w,s[7]=0,s[8]=(p+v)*y,s[9]=(m-_)*y,s[10]=(1-(d+x))*y,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=lr.set(s[0],s[1],s[2]).length(),a=lr.set(s[4],s[5],s[6]).length(),l=lr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),mi.copy(this);let c=1/o,h=1/a,f=1/l;return mi.elements[0]*=c,mi.elements[1]*=c,mi.elements[2]*=c,mi.elements[4]*=h,mi.elements[5]*=h,mi.elements[6]*=h,mi.elements[8]*=f,mi.elements[9]*=f,mi.elements[10]*=f,t.setFromRotationMatrix(mi),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=ri,l=!1){let c=this.elements,h=2*r/(t-e),f=2*r/(n-s),d=(t+e)/(t-e),u=(n+s)/(n-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===ri)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Rr)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=ri,l=!1){let c=this.elements,h=2/(t-e),f=2/(n-s),d=-(t+e)/(t-e),u=-(n+s)/(n-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===ri)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===Rr)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Xl.prototype.isMatrix4=!0;var We=Xl,lr=new L,mi=new We,ig=new L(0,0,0),sg=new L(1,1,1),cs=new L,Oa=new L,qn=new L,dd=new We,pd=new Bt,yn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],d=s[6],u=s[10];switch(t){case"XYZ":this._y=Math.asin(dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(dt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-dt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return dd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pd.setFromEuler(this),this.setFromQuaternion(pd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};yn.DEFAULT_ORDER="XYZ";var Uo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},rg=0,md=new L,cr=new Bt,ki=new We,Fa=new L,po=new L,og=new L,ag=new Bt,gd=new L(1,0,0),xd=new L(0,1,0),_d=new L(0,0,1),yd={type:"added"},lg={type:"removed"},hr={type:"childadded",child:null},Sh={type:"childremoved",child:null},Ut=class i extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rg++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new yn,n=new Bt,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new We},normalMatrix:{value:new $e}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Uo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return cr.setFromAxisAngle(e,t),this.quaternion.multiply(cr),this}rotateOnWorldAxis(e,t){return cr.setFromAxisAngle(e,t),this.quaternion.premultiply(cr),this}rotateX(e){return this.rotateOnAxis(gd,e)}rotateY(e){return this.rotateOnAxis(xd,e)}rotateZ(e){return this.rotateOnAxis(_d,e)}translateOnAxis(e,t){return md.copy(e).applyQuaternion(this.quaternion),this.position.add(md.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gd,e)}translateY(e){return this.translateOnAxis(xd,e)}translateZ(e){return this.translateOnAxis(_d,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Fa.copy(e):Fa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(po,Fa,this.up):ki.lookAt(Fa,po,this.up),this.quaternion.setFromRotationMatrix(ki),s&&(ki.extractRotation(s.matrixWorld),cr.setFromRotationMatrix(ki),this.quaternion.premultiply(cr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ye("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yd),hr.child=e,this.dispatchEvent(hr),hr.child=null):Ye("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lg),Sh.child=e,this.dispatchEvent(Sh),Sh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yd),hr.child=e,this.dispatchEvent(hr),hr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(po,e,og),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(po,ag,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),d=o(e.skeletons),u=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ut.DEFAULT_UP=new L(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ct=class extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}},cg={type:"move"},Lr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,p=.005;c.inputState.pinching&&d>u+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=u-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(cg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ct;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Hp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hs={h:0,s:0,l:0},Ba={h:0,s:0,l:0};function bh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Me=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ft.workingColorSpace){if(e=Ru(e,1),t=dt(t,0,1),n=dt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=bh(o,r,e+1/3),this.g=bh(o,r,e),this.b=bh(o,r,e-1/3)}return ft.colorSpaceToWorking(this,s),this}setStyle(e,t=Xt){function n(r){r!==void 0&&parseFloat(r)<1&&Oe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Oe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){let n=Hp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}copyLinearToSRGB(e){return this.r=Er(e.r),this.g=Er(e.g),this.b=Er(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return ft.workingToColorSpace(Cn.copy(this),e),Math.round(dt(Cn.r*255,0,255))*65536+Math.round(dt(Cn.g*255,0,255))*256+Math.round(dt(Cn.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.workingToColorSpace(Cn.copy(this),t);let n=Cn.r,s=Cn.g,r=Cn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ft.workingColorSpace){return ft.workingToColorSpace(Cn.copy(this),t),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=Xt){ft.workingToColorSpace(Cn.copy(this),e);let t=Cn.r,n=Cn.g,s=Cn.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(hs),this.setHSL(hs.h+e,hs.s+t,hs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(hs),e.getHSL(Ba);let n=Ro(hs.h,Ba.h,t),s=Ro(hs.s,Ba.s,t),r=Ro(hs.l,Ba.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Cn=new Me;Me.NAMES=Hp;var Oo=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Me(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Nr=class extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},gi=new L,zi=new L,Th=new L,Hi=new L,ur=new L,fr=new L,vd=new L,Eh=new L,wh=new L,Ah=new L,Rh=new It,Ch=new It,Ih=new It,Wi=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),gi.subVectors(e,t),s.cross(gi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){gi.subVectors(s,t),zi.subVectors(n,t),Th.subVectors(e,t);let o=gi.dot(gi),a=gi.dot(zi),l=gi.dot(Th),c=zi.dot(zi),h=zi.dot(Th),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let d=1/f,u=(c*l-a*h)*d,p=(o*h-a*l)*d;return r.set(1-u-p,p,u)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Hi)===null?!1:Hi.x>=0&&Hi.y>=0&&Hi.x+Hi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Hi.x),l.addScaledVector(o,Hi.y),l.addScaledVector(a,Hi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Rh.setScalar(0),Ch.setScalar(0),Ih.setScalar(0),Rh.fromBufferAttribute(e,t),Ch.fromBufferAttribute(e,n),Ih.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Rh,r.x),o.addScaledVector(Ch,r.y),o.addScaledVector(Ih,r.z),o}static isFrontFacing(e,t,n,s){return gi.subVectors(n,t),zi.subVectors(e,t),gi.cross(zi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gi.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),gi.cross(zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;ur.subVectors(s,n),fr.subVectors(r,n),Eh.subVectors(e,n);let l=ur.dot(Eh),c=fr.dot(Eh);if(l<=0&&c<=0)return t.copy(n);wh.subVectors(e,s);let h=ur.dot(wh),f=fr.dot(wh);if(h>=0&&f<=h)return t.copy(s);let d=l*f-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(n).addScaledVector(ur,o);Ah.subVectors(e,r);let u=ur.dot(Ah),p=fr.dot(Ah);if(p>=0&&u<=p)return t.copy(r);let x=u*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(fr,a);let m=h*p-u*f;if(m<=0&&f-h>=0&&u-p>=0)return vd.subVectors(r,s),a=(f-h)/(f-h+(u-p)),t.copy(s).addScaledVector(vd,a);let g=1/(m+x+d);return o=x*g,a=d*g,t.copy(n).addScaledVector(ur,o).addScaledVector(fr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},vn=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(xi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(xi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=xi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,xi):xi.fromBufferAttribute(r,o),xi.applyMatrix4(e.matrixWorld),this.expandByPoint(xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ka.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ka.copy(n.boundingBox)),ka.applyMatrix4(e.matrixWorld),this.union(ka)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xi),xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mo),za.subVectors(this.max,mo),dr.subVectors(e.a,mo),pr.subVectors(e.b,mo),mr.subVectors(e.c,mo),us.subVectors(pr,dr),fs.subVectors(mr,pr),Es.subVectors(dr,mr);let t=[0,-us.z,us.y,0,-fs.z,fs.y,0,-Es.z,Es.y,us.z,0,-us.x,fs.z,0,-fs.x,Es.z,0,-Es.x,-us.y,us.x,0,-fs.y,fs.x,0,-Es.y,Es.x,0];return!Ph(t,dr,pr,mr,za)||(t=[1,0,0,0,1,0,0,0,1],!Ph(t,dr,pr,mr,za))?!1:(Ha.crossVectors(us,fs),t=[Ha.x,Ha.y,Ha.z],Ph(t,dr,pr,mr,za))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Gi=[new L,new L,new L,new L,new L,new L,new L,new L],xi=new L,ka=new vn,dr=new L,pr=new L,mr=new L,us=new L,fs=new L,Es=new L,mo=new L,za=new L,Ha=new L,ws=new L;function Ph(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ws.fromArray(i,r);let a=s.x*Math.abs(ws.x)+s.y*Math.abs(ws.y)+s.z*Math.abs(ws.z),l=e.dot(ws),c=t.dot(ws),h=n.dot(ws);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var sn=new L,Ga=new re,hg=0,qt=class extends yi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=wu,this.updateRanges=[],this.gpuType=$n,this.version=0,this._normalizationScale=e!==void 0?Nc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ga.fromBufferAttribute(this,t),Ga.applyMatrix3(e),this.setXY(t,Ga.x,Ga.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Iu(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Pu(e,this.array)}};var Fo=class extends qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Bo=class extends qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Je=class extends qt{constructor(e,t,n){super(new Float32Array(e),t,n)}},ug=new vn,go=new L,Lh=new L,zn=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):ug.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;go.subVectors(e,this.center);let t=go.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(go,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(go.copy(e.center).add(Lh)),this.expandByPoint(go.copy(e.center).sub(Lh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},fg=0,ii=new We,Nh=new Ut,gr=new L,Yn=new vn,xo=new vn,mn=new L,Pt=class i extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fg++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(F0(e)?Bo:Fo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $e().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ii.makeRotationFromQuaternion(e),this.applyMatrix4(ii),this}rotateX(e){return ii.makeRotationX(e),this.applyMatrix4(ii),this}rotateY(e){return ii.makeRotationY(e),this.applyMatrix4(ii),this}rotateZ(e){return ii.makeRotationZ(e),this.applyMatrix4(ii),this}translate(e,t,n){return ii.makeTranslation(e,t,n),this.applyMatrix4(ii),this}scale(e,t,n){return ii.makeScale(e,t,n),this.applyMatrix4(ii),this}lookAt(e){return Nh.lookAt(e),Nh.updateMatrix(),this.applyMatrix4(Nh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gr).negate(),this.translate(gr.x,gr.y,gr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Je(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Yn.setFromBufferAttribute(r),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(Yn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];xo.setFromBufferAttribute(a),this.morphTargetsRelative?(mn.addVectors(Yn.min,xo.min),Yn.expandByPoint(mn),mn.addVectors(Yn.max,xo.max),Yn.expandByPoint(mn)):(Yn.expandByPoint(xo.min),Yn.expandByPoint(xo.max))}Yn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)mn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(mn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)mn.fromBufferAttribute(a,c),l&&(gr.fromBufferAttribute(e,c),mn.add(gr)),s=Math.max(s,n.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new qt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let N=0;N<n.count;N++)a[N]=new L,l[N]=new L;let h=new L,f=new L,d=new L,u=new re,p=new re,x=new re,m=new L,g=new L;function _(N,C,O){c[N]=c[C]=c[O]=1,h.fromBufferAttribute(n,N),f.fromBufferAttribute(n,C),d.fromBufferAttribute(n,O),u.fromBufferAttribute(r,N),p.fromBufferAttribute(r,C),x.fromBufferAttribute(r,O),f.sub(h),d.sub(h),p.sub(u),x.sub(u);let R=1/(p.x*x.y-x.x*p.y);isFinite(R)&&(m.copy(f).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(R),g.copy(d).multiplyScalar(p.x).addScaledVector(f,-x.x).multiplyScalar(R),a[N].add(m),a[C].add(m),a[O].add(m),l[N].add(g),l[C].add(g),l[O].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let N=0,C=v.length;N<C;++N){let O=v[N],R=O.start,D=O.count;for(let P=R,k=R+D;P<k;P+=3)_(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let M=new L,b=new L,w=new L,y=new L;function S(N){w.fromBufferAttribute(s,N),y.copy(w);let C=a[N];M.copy(C),M.sub(w.multiplyScalar(w.dot(C))).normalize(),b.crossVectors(y,C);let R=b.dot(l[N])<0?-1:1;o.setXYZW(N,M.x,M.y,M.z,R)}for(let N=0,C=n.count;N<C;++N)c[N]&&S(N);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,f=new L;if(e)for(let d=0,u=e.count;d<u;d+=3){let p=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,u=t.count;d<u;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mn.fromBufferAttribute(e,t),mn.normalize(),e.setXYZ(t,mn.x,mn.y,mn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,f=a.normalized,d=new c.constructor(l.length*h),u=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?u=l[x]*a.data.stride+a.offset:u=l[x]*h;for(let g=0;g<h;g++)d[p++]=c[u++]}return new qt(d,h,f)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let d=c[h],u=e(d,n);l.push(u)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){let u=c[f];h.push(u.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Os=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=wu,this.updateRanges=[],this.version=0,this.uuid=bi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Md(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Md(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Md(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=bi()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var Dn=new L,ms=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?Nc(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyMatrix4(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyNormalMatrix(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.transformDirection(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){No("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){No("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Iu(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Pu(e,this.data.array)}},Dh=new L,dg=new L,pg=new $e,_i=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Dh.subVectors(n,t).cross(dg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Dh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||pg.getNormalMatrix(e),s=this.coplanarPoint(Dh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},mg=0,Mn=class extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mg++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=qr,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=au,this.blendDst=lu,this.blendEquation=Ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=dl,this.stencilZFail=dl,this.stencilZPass=dl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Oe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Oe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Me().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new _i().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new re().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new re().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Hn=class extends Mn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},xr,_o=new L,_r=new L,yr=new L,vr=new re,yo=new re,Gp=new We,Va=new L,vo=new L,Xa=new L,Sd=new re,Uh=new re,bd=new re,Kn=class extends Ut{constructor(e=new Hn){if(super(),this.isSprite=!0,this.type="Sprite",xr===void 0){xr=new Pt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Os(t,5);xr.setIndex([0,1,2,0,2,3]),xr.setAttribute("position",new ms(n,3,0,!1)),xr.setAttribute("uv",new ms(n,2,3,!1))}this.geometry=xr,this.material=e,this.center=new re(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ye('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_r.setFromMatrixScale(this.matrixWorld),Gp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),yr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_r.multiplyScalar(-yr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Wa(Va.set(-.5,-.5,0),yr,o,_r,s,r),Wa(vo.set(.5,-.5,0),yr,o,_r,s,r),Wa(Xa.set(.5,.5,0),yr,o,_r,s,r),Sd.set(0,0),Uh.set(1,0),bd.set(1,1);let a=e.ray.intersectTriangle(Va,vo,Xa,!1,_o);if(a===null&&(Wa(vo.set(-.5,.5,0),yr,o,_r,s,r),Uh.set(0,1),a=e.ray.intersectTriangle(Va,Xa,vo,!1,_o),a===null))return;let l=e.ray.origin.distanceTo(_o);l<e.near||l>e.far||t.push({distance:l,point:_o.clone(),uv:Wi.getInterpolation(_o,Va,vo,Xa,Sd,Uh,bd,new re),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Wa(i,e,t,n,s,r){vr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(yo.x=r*vr.x-s*vr.y,yo.y=s*vr.x+r*vr.y):yo.copy(vr),i.copy(e),i.x+=yo.x,i.y+=yo.y,i.applyMatrix4(Gp)}var Vi=new L,Oh=new L,qa=new L,Ya=new L,Fs=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vi.copy(this.origin).addScaledVector(this.direction,t),Vi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Oh.copy(e).add(t).multiplyScalar(.5),qa.copy(t).sub(e).normalize(),Ya.copy(this.origin).sub(Oh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(qa),a=Ya.dot(this.direction),l=-Ya.dot(qa),c=Ya.lengthSq(),h=Math.abs(1-o*o),f,d,u,p;if(h>0)if(f=o*l-a,d=o*a-l,p=r*h,f>=0)if(d>=-p)if(d<=p){let x=1/h;f*=x,d*=x,u=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;else d<=-p?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c):d<=p?(f=0,d=Math.min(Math.max(-r,-l),r),u=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Oh).addScaledVector(qa,d),u}intersectSphere(e,t){if(e.radius<0)return null;Vi.subVectors(e.center,this.origin);let n=Vi.dot(this.direction),s=Vi.dot(Vi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Vi)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,f=e.x-o.x,d=e.y-o.y,u=e.z-o.z,p=t.x-o.x,x=t.y-o.y,m=t.z-o.z,g=n.x-o.x,_=n.y-o.y,v=n.z-o.z,M=Math.abs(l),b=Math.abs(c),w=Math.abs(h),y,S,N,C,O,R,D,P,k,A,U,J;if(M>=b&&M>=w?(N=l,R=f,k=p,J=g,l>=0?(y=c,S=h,C=d,O=u,D=x,P=m,A=_,U=v):(y=h,S=c,C=u,O=d,D=m,P=x,A=v,U=_)):b>=w?(N=c,R=d,k=x,J=_,c>=0?(y=h,S=l,C=u,O=f,D=m,P=p,A=v,U=g):(y=l,S=h,C=f,O=u,D=p,P=m,A=g,U=v)):(N=h,R=u,k=m,J=v,h>=0?(y=l,S=c,C=f,O=d,D=p,P=x,A=g,U=_):(y=c,S=l,C=d,O=f,D=x,P=p,A=_,U=g)),N===0)return null;let G=y/N,Y=S/N,j=1/N,oe=C-G*R,Re=O-Y*R,Z=D-G*k,fe=P-Y*k,Ae=A-G*J,ze=U-Y*J,Se=Ae*fe-ze*Z,Ve=oe*ze-Re*Ae,kt=Z*Re-fe*oe;if(s){if(Se<0||Ve<0||kt<0)return null}else if((Se<0||Ve<0||kt<0)&&(Se>0||Ve>0||kt>0))return null;let qe=Se+Ve+kt;if(qe===0)return null;let ut=j*(Se*R+Ve*k+kt*J);return(qe>0?ut<0:ut>0)?null:this.at(ut/qe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Rt=class extends Mn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=pa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Td=new We,As=new Fs,Za=new zn,Ed=new L,Ka=new L,Ja=new L,$a=new L,Fh=new L,ja=new L,wd=new L,Qa=new L,et=class extends Ut{constructor(e=new Pt,t=new Rt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ja.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(Fh.fromBufferAttribute(f,e),o?ja.addScaledVector(Fh,h):ja.addScaledVector(Fh.sub(t),h))}t.add(ja)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Za.copy(n.boundingSphere),Za.applyMatrix4(r),As.copy(e.ray).recast(e.near),!(Za.containsPoint(As.origin)===!1&&(As.intersectSphere(Za,Ed)===null||As.origin.distanceToSquared(Ed)>(e.far-e.near)**2))&&(Td.copy(r).invert(),As.copy(e.ray).applyMatrix4(Td),!(n.boundingBox!==null&&As.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,As)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=o[m.materialIndex],_=Math.max(m.start,u.start),v=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let M=_,b=v;M<b;M+=3){let w=a.getX(M),y=a.getX(M+1),S=a.getX(M+2);s=el(this,g,e,n,c,h,f,w,y,S),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,u.start),x=Math.min(a.count,u.start+u.count);for(let m=p,g=x;m<g;m+=3){let _=a.getX(m),v=a.getX(m+1),M=a.getX(m+2);s=el(this,o,e,n,c,h,f,_,v,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=o[m.materialIndex],_=Math.max(m.start,u.start),v=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let M=_,b=v;M<b;M+=3){let w=M,y=M+1,S=M+2;s=el(this,g,e,n,c,h,f,w,y,S),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,u.start),x=Math.min(l.count,u.start+u.count);for(let m=p,g=x;m<g;m+=3){let _=m,v=m+1,M=m+2;s=el(this,o,e,n,c,h,f,_,v,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function gg(i,e,t,n,s,r,o,a){let l;if(e.side===Sn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Pi,a),l===null)return null;Qa.copy(a),Qa.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Qa);return c<t.near||c>t.far?null:{distance:c,point:Qa.clone(),object:i}}function el(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Ka),i.getVertexPosition(l,Ja),i.getVertexPosition(c,$a);let h=gg(i,e,t,n,Ka,Ja,$a,wd);if(h){let f=new L;Wi.getBarycoord(wd,Ka,Ja,$a,f),s&&(h.uv=Wi.getInterpolatedAttribute(s,a,l,c,f,new re)),r&&(h.uv1=Wi.getInterpolatedAttribute(r,a,l,c,f,new re)),o&&(h.normal=Wi.getInterpolatedAttribute(o,a,l,c,f,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new L,materialIndex:0};Wi.getNormal(Ka,Ja,$a,d.normal),h.face=d,h.barycoord=f}return h}var Mo=new It,Ad=new It,Rd=new It,xg=new It,Cd=new We,tl=new L,Bh=new zn,Id=new We,kh=new Fs,ko=class extends et{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=qh,this.bindMatrix=new We,this.bindMatrixInverse=new We,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new vn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,tl),this.boundingBox.expandByPoint(tl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new zn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,tl),this.boundingSphere.expandByPoint(tl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bh.copy(this.boundingSphere),Bh.applyMatrix4(s),e.ray.intersectsSphere(Bh)!==!1&&(Id.copy(s).invert(),kh.copy(e.ray).applyMatrix4(Id),!(this.boundingBox!==null&&kh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,kh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new It,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===qh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ep?this.bindMatrixInverse.copy(this.bindMatrix).invert():Oe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Ad.fromBufferAttribute(s.attributes.skinIndex,e),Rd.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Mo.copy(t),t.set(0,0,0,0)):(Mo.set(t.x,t.y,t.z,1),t.set(0,0,0)),Mo.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=Rd.getComponent(r);if(o!==0){let a=Ad.getComponent(r);Cd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(xg.copy(Mo).applyMatrix4(Cd),o)}}return t.isVector4&&(t.w=Mo.w),t.applyMatrix4(this.bindMatrixInverse)}},Dr=class extends Ut{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ur=class extends ln{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Qt,h=Qt,f,d){super(null,o,a,l,c,h,s,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Pd=new We,_g=new We,zo=class i{constructor(e=[],t=[]){this.uuid=bi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Oe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new We)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new We;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:_g;Pd.multiplyMatrices(a,t[r]),Pd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Ur(t,e,e,ci,$n);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(Oe("Skeleton: No bone found with UUID:",r),o=new Dr),this.bones.push(o),this.boneInverses.push(new We().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},Zi=class extends qt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Mr=new We,Ld=new We,nl=[],Nd=new vn,yg=new We,So=new et,bo=new zn,vi=class extends et{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Zi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,yg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new vn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Mr),Nd.copy(e.boundingBox).applyMatrix4(Mr),this.boundingBox.union(Nd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new zn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Mr),bo.copy(e.boundingSphere).applyMatrix4(Mr),this.boundingSphere.union(bo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(So.geometry=this.geometry,So.material=this.material,So.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bo.copy(this.boundingSphere),bo.applyMatrix4(n),e.ray.intersectsSphere(bo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Mr),Ld.multiplyMatrices(n,Mr),So.matrixWorld=Ld,So.raycast(e,nl);for(let o=0,a=nl.length;o<a;o++){let l=nl[o];l.instanceId=r,l.object=this,t.push(l)}nl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Zi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ur(new Float32Array(s*this.count),s,this.count,$l,$n));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Rs=new zn,vg=new re(.5,.5),il=new L,gs=class{constructor(e=new _i,t=new _i,n=new _i,s=new _i,r=new _i,o=new _i){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ri,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],f=r[5],d=r[6],u=r[7],p=r[8],x=r[9],m=r[10],g=r[11],_=r[12],v=r[13],M=r[14],b=r[15];if(s[0].setComponents(c-o,u-h,g-p,b-_).normalize(),s[1].setComponents(c+o,u+h,g+p,b+_).normalize(),s[2].setComponents(c+a,u+f,g+x,b+v).normalize(),s[3].setComponents(c-a,u-f,g-x,b-v).normalize(),n)s[4].setComponents(l,d,m,M).normalize(),s[5].setComponents(c-l,u-d,g-m,b-M).normalize();else if(s[4].setComponents(c-l,u-d,g-m,b-M).normalize(),t===ri)s[5].setComponents(c+l,u+d,g+m,b+M).normalize();else if(t===Rr)s[5].setComponents(l,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rs)}intersectsSprite(e){Rs.center.set(0,0,0);let t=vg.distanceTo(e.center);return Rs.radius=.7071067811865476+t,Rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(il.x=s.normal.x>0?e.max.x:e.min.x,il.y=s.normal.y>0?e.max.y:e.min.y,il.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(il)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Dd=new We,Tl=class i{constructor(){this.coordinateSystem=ri,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Dd.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new gs),n[s].setFromProjectionMatrix(Dd,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new gs),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var Or=class extends Mn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},El=new L,wl=new L,Ud=new We,To=new Fs,sl=new zn,zh=new L,Od=new L,Bs=class extends Ut{constructor(e=new Pt,t=new Or){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)El.fromBufferAttribute(t,s-1),wl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=El.distanceTo(wl);e.setAttribute("lineDistance",new Je(n,1))}else Oe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sl.copy(n.boundingSphere),sl.applyMatrix4(s),sl.radius+=r,e.ray.intersectsSphere(sl)===!1)return;Ud.copy(s).invert(),To.copy(e.ray).applyMatrix4(Ud);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let u=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=u,m=p-1;x<m;x+=c){let g=h.getX(x),_=h.getX(x+1),v=rl(this,e,To,l,g,_,x);v&&t.push(v)}if(this.isLineLoop){let x=h.getX(p-1),m=h.getX(u),g=rl(this,e,To,l,x,m,p-1);g&&t.push(g)}}else{let u=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let x=u,m=p-1;x<m;x+=c){let g=rl(this,e,To,l,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){let x=rl(this,e,To,l,p-1,u,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function rl(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(El.fromBufferAttribute(a,s),wl.fromBufferAttribute(a,r),t.distanceSqToSegment(El,wl,zh,Od)>n)return;zh.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(zh);if(!(c<e.near||c>e.far))return{distance:c,point:Od.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Fd=new L,Bd=new L,Ho=class extends Bs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Fd.fromBufferAttribute(t,s),Bd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Fd.distanceTo(Bd);e.setAttribute("lineDistance",new Je(n,1))}else Oe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Go=class extends Bs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},xs=class extends Mn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},kd=new We,Zh=new Fs,ol=new zn,al=new L,ks=class extends Ut{constructor(e=new Pt,t=new xs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ol.copy(n.boundingSphere),ol.applyMatrix4(s),ol.radius+=r,e.ray.intersectsSphere(ol)===!1)return;kd.copy(s).invert(),Zh.copy(e.ray).applyMatrix4(kd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),u=Math.min(c.count,o.start+o.count);for(let p=d,x=u;p<x;p++){let m=c.getX(p);al.fromBufferAttribute(f,m),zd(al,m,l,s,e,t,this)}}else{let d=Math.max(0,o.start),u=Math.min(f.count,o.start+o.count);for(let p=d,x=u;p<x;p++)al.fromBufferAttribute(f,p),zd(al,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function zd(i,e,t,n,s,r,o){let a=Zh.distanceSqToPoint(i);if(a<t){let l=new L;Zh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Vo=class extends ln{constructor(e=[],t=Js,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},zs=class extends ln{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ki=class extends ln{constructor(e,t,n=Mi,s,r,o,a=Qt,l=Qt,c,h=Yi,f=1){if(h!==Yi&&h!==ts)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:f};super(d,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Pr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Xo=class extends Ki{constructor(e,t=Mi,n=Js,s,r,o=Qt,a=Qt,l,c=Yi){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Wo=class extends ln{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ke=class i extends Pt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],d=0,u=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Je(c,3)),this.setAttribute("normal",new Je(h,3)),this.setAttribute("uv",new Je(f,2));function p(x,m,g,_,v,M,b,w,y,S,N){let C=M/y,O=b/S,R=M/2,D=b/2,P=w/2,k=y+1,A=S+1,U=0,J=0,G=new L;for(let Y=0;Y<A;Y++){let j=Y*O-D;for(let oe=0;oe<k;oe++){let Re=oe*C-R;G[x]=Re*_,G[m]=j*v,G[g]=P,c.push(G.x,G.y,G.z),G[x]=0,G[m]=0,G[g]=w>0?1:-1,h.push(G.x,G.y,G.z),f.push(oe/y),f.push(1-Y/S),U+=1}}for(let Y=0;Y<S;Y++)for(let j=0;j<y;j++){let oe=d+j+k*Y,Re=d+j+k*(Y+1),Z=d+(j+1)+k*(Y+1),fe=d+(j+1)+k*Y;l.push(oe,Re,fe),l.push(Re,Z,fe),J+=6}a.addGroup(u,J,N),u+=J,d+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Fr=class i extends Pt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=t/2,f=Math.PI/2*e,d=t,u=2*f+d,p=n*2+r,x=s+1,m=new L,g=new L;for(let _=0;_<=p;_++){let v=0,M=0,b=0,w=0;if(_<=n){let N=_/n,C=N*Math.PI/2;M=-h-e*Math.cos(C),b=e*Math.sin(C),w=-e*Math.cos(C),v=N*f}else if(_<=n+r){let N=(_-n)/r;M=-h+N*t,b=e,w=0,v=f+N*d}else{let N=(_-n-r)/n,C=N*Math.PI/2;M=h+e*Math.sin(C),b=e*Math.cos(C),w=e*Math.sin(C),v=f+d+N*f}let y=Math.max(0,Math.min(1,v/u)),S=0;_===0?S=.5/s:_===p&&(S=-.5/s);for(let N=0;N<=s;N++){let C=N/s,O=C*Math.PI*2,R=Math.sin(O),D=Math.cos(O);g.x=-b*D,g.y=M,g.z=b*R,a.push(g.x,g.y,g.z),m.set(-b*D,w,b*R),m.normalize(),l.push(m.x,m.y,m.z),c.push(C+S,y)}if(_>0){let N=(_-1)*x;for(let C=0;C<s;C++){let O=N+C,R=N+C+1,D=_*x+C,P=_*x+C+1;o.push(O,R,D),o.push(R,P,D)}}}this.setIndex(o),this.setAttribute("position",new Je(a,3)),this.setAttribute("normal",new Je(l,3)),this.setAttribute("uv",new Je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},oi=class i extends Pt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new L,h=new re;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=t;f++,d+=3){let u=n+f/t*s;c.x=e*Math.cos(u),c.y=e*Math.sin(u),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Je(o,3)),this.setAttribute("normal",new Je(a,3)),this.setAttribute("uv",new Je(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},rt=class i extends Pt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],d=[],u=[],p=0,x=[],m=n/2,g=0;_(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Je(f,3)),this.setAttribute("normal",new Je(d,3)),this.setAttribute("uv",new Je(u,2));function _(){let M=new L,b=new L,w=0,y=(t-e)/n;for(let S=0;S<=r;S++){let N=[],C=S/r,O=C*(t-e)+e;for(let R=0;R<=s;R++){let D=R/s,P=D*l+a,k=Math.sin(P),A=Math.cos(P);b.x=O*k,b.y=-C*n+m,b.z=O*A,f.push(b.x,b.y,b.z),M.set(k,y,A).normalize(),d.push(M.x,M.y,M.z),u.push(D,1-C),N.push(p++)}x.push(N)}for(let S=0;S<s;S++)for(let N=0;N<r;N++){let C=x[N][S],O=x[N+1][S],R=x[N+1][S+1],D=x[N][S+1];(e>0||N!==0)&&(h.push(C,O,D),w+=3),(t>0||N!==r-1)&&(h.push(O,R,D),w+=3)}c.addGroup(g,w,0),g+=w}function v(M){let b=p,w=new re,y=new L,S=0,N=M===!0?e:t,C=M===!0?1:-1;for(let R=1;R<=s;R++)f.push(0,m*C,0),d.push(0,C,0),u.push(.5,.5),p++;let O=p;for(let R=0;R<=s;R++){let P=R/s*l+a,k=Math.cos(P),A=Math.sin(P);y.x=N*A,y.y=m*C,y.z=N*k,f.push(y.x,y.y,y.z),d.push(0,C,0),w.x=k*.5+.5,w.y=A*.5*C+.5,u.push(w.x,w.y),p++}for(let R=0;R<s;R++){let D=b+R,P=O+R;M===!0?h.push(P,P+1,D):h.push(P+1,P,D),S+=3}c.addGroup(g,S,M===!0?1:2),g+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Gn=class i extends rt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},qo=class i extends Pt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Je(r,3)),this.setAttribute("normal",new Je(r.slice(),3)),this.setAttribute("uv",new Je(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let v=new L,M=new L,b=new L;for(let w=0;w<t.length;w+=3)u(t[w+0],v),u(t[w+1],M),u(t[w+2],b),l(v,M,b,_)}function l(_,v,M,b){let w=b+1,y=[];for(let S=0;S<=w;S++){y[S]=[];let N=_.clone().lerp(M,S/w),C=v.clone().lerp(M,S/w),O=w-S;for(let R=0;R<=O;R++)R===0&&S===w?y[S][R]=N:y[S][R]=N.clone().lerp(C,R/O)}for(let S=0;S<w;S++)for(let N=0;N<2*(w-S)-1;N++){let C=Math.floor(N/2);N%2===0?(d(y[S][C+1]),d(y[S+1][C]),d(y[S][C])):(d(y[S][C+1]),d(y[S+1][C+1]),d(y[S+1][C]))}}function c(_){let v=new L;for(let M=0;M<r.length;M+=3)v.x=r[M+0],v.y=r[M+1],v.z=r[M+2],v.normalize().multiplyScalar(_),r[M+0]=v.x,r[M+1]=v.y,r[M+2]=v.z}function h(){let _=new L;for(let v=0;v<r.length;v+=3){_.x=r[v+0],_.y=r[v+1],_.z=r[v+2];let M=m(_)/2/Math.PI+.5,b=g(_)/Math.PI+.5;o.push(M,1-b)}p(),f()}function f(){for(let _=0;_<o.length;_+=6){let v=o[_+0],M=o[_+2],b=o[_+4],w=Math.max(v,M,b),y=Math.min(v,M,b);w>.9&&y<.1&&(v<.2&&(o[_+0]+=1),M<.2&&(o[_+2]+=1),b<.2&&(o[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function u(_,v){let M=_*3;v.x=e[M+0],v.y=e[M+1],v.z=e[M+2]}function p(){let _=new L,v=new L,M=new L,b=new L,w=new re,y=new re,S=new re;for(let N=0,C=0;N<r.length;N+=9,C+=6){_.set(r[N+0],r[N+1],r[N+2]),v.set(r[N+3],r[N+4],r[N+5]),M.set(r[N+6],r[N+7],r[N+8]),w.set(o[C+0],o[C+1]),y.set(o[C+2],o[C+3]),S.set(o[C+4],o[C+5]),b.copy(_).add(v).add(M).divideScalar(3);let O=m(b);x(w,C+0,_,O),x(y,C+2,v,O),x(S,C+4,M,O)}}function x(_,v,M,b){b<0&&_.x===1&&(o[v]=_.x-1),M.x===0&&M.z===0&&(o[v]=b/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function g(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var Jn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Oe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,u=(o-h)/d;return(s+u)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new re:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new L,s=[],r=[],o=[],a=new L,l=new We;for(let u=0;u<=e;u++){let p=u/e;s[u]=this.getTangentAt(p,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(s[u-1],s[u]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(dt(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,p))}o[u].crossVectors(s[u],r[u])}if(t===!0){let u=Math.acos(dt(r[0].dot(r[e]),-1,1));u/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(u=-u);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],u*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Br=class extends Jn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new re){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,u=c-this.aY;l=d*h-u*f+this.aX,c=d*f+u*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Al=class extends Br{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Lu(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+f)+(l-a)/f;d*=h,u*=h,s(o,a,d,u)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Hd=new L,Gd=new L,Hh=new Lu,Gh=new Lu,Vh=new Lu,kr=class extends Jn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Gd.subVectors(s[0],s[1]).add(s[0]),c=Gd);let f=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Hd.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Hd),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(f),u),x=Math.pow(f.distanceToSquared(d),u),m=Math.pow(d.distanceToSquared(h),u);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),Hh.initNonuniformCatmullRom(c.x,f.x,d.x,h.x,p,x,m),Gh.initNonuniformCatmullRom(c.y,f.y,d.y,h.y,p,x,m),Vh.initNonuniformCatmullRom(c.z,f.z,d.z,h.z,p,x,m)}else this.curveType==="catmullrom"&&(Hh.initCatmullRom(c.x,f.x,d.x,h.x,this.tension),Gh.initCatmullRom(c.y,f.y,d.y,h.y,this.tension),Vh.initCatmullRom(c.z,f.z,d.z,h.z,this.tension));return n.set(Hh.calc(l),Gh.calc(l),Vh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Vd(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function Mg(i,e){let t=1-i;return t*t*e}function Sg(i,e){return 2*(1-i)*i*e}function bg(i,e){return i*i*e}function Co(i,e,t,n){return Mg(i,e)+Sg(i,t)+bg(i,n)}function Tg(i,e){let t=1-i;return t*t*t*e}function Eg(i,e){let t=1-i;return 3*t*t*i*e}function wg(i,e){return 3*(1-i)*i*i*e}function Ag(i,e){return i*i*i*e}function Io(i,e,t,n,s){return Tg(i,e)+Eg(i,t)+wg(i,n)+Ag(i,s)}var Yo=class extends Jn{constructor(e=new re,t=new re,n=new re,s=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new re){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Io(e,s.x,r.x,o.x,a.x),Io(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Rl=class extends Jn{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Io(e,s.x,r.x,o.x,a.x),Io(e,s.y,r.y,o.y,a.y),Io(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Zo=class extends Jn{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Cl=class extends Jn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ko=class extends Jn{constructor(e=new re,t=new re,n=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new re){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Co(e,s.x,r.x,o.x),Co(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Jo=class extends Jn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Co(e,s.x,r.x,o.x),Co(e,s.y,r.y,o.y),Co(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$o=class extends Jn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(Vd(a,l.x,c.x,h.x,f.x),Vd(a,l.y,c.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new re().fromArray(s))}return this}},Il=Object.freeze({__proto__:null,ArcCurve:Al,CatmullRomCurve3:kr,CubicBezierCurve:Yo,CubicBezierCurve3:Rl,EllipseCurve:Br,LineCurve:Zo,LineCurve3:Cl,QuadraticBezierCurve:Ko,QuadraticBezierCurve3:Jo,SplineCurve:$o}),Pl=class extends Jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Il[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Il[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},jo=class extends Pl{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Zo(this.currentPoint.clone(),new re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Ko(this.currentPoint.clone(),new re(e,t),new re(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Yo(this.currentPoint.clone(),new re(e,t),new re(n,s),new re(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new $o(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new Br(e,t,n,s,r,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Hs=class extends jo{constructor(e){super(e),this.uuid=bi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new jo().fromJSON(s))}return this}};function Rg(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Vp(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Ng(i,e,r,t)),i.length>80*t){a=i[0],l=i[1];let h=a,f=l;for(let d=t;d<s;d+=t){let u=i[d],p=i[d+1];u<a&&(a=u),p<l&&(l=p),u>h&&(h=u),p>f&&(f=p)}c=Math.max(h-a,f-l),c=c!==0?32767/c:0}return Qo(r,o,t,a,l,c,0),o}function Vp(i,e,t,n,s){let r;if(s===Xg(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Xd(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Xd(o/n|0,i[o],i[o+1],r);return r&&zr(r,r.next)&&(ta(r),r=r.next),r}function Gs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(zr(t,t.next)||Wt(t.prev,t,t.next)===0)){if(ta(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Qo(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Bg(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Ig(i,n,s,r):Cg(i)){e.push(l.i,i.i,c.i),ta(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Pg(Gs(i),e),Qo(i,e,t,n,s,r,2)):o===2&&Lg(i,e,t,n,s,r):Qo(Gs(i),e,t,n,s,r,1);break}}}function Cg(i){let e=i.prev,t=i,n=i.next;if(Wt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(s,r,o),f=Math.min(a,l,c),d=Math.max(s,r,o),u=Math.max(a,l,c),p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=d&&p.y>=f&&p.y<=u&&Eo(s,a,r,l,o,c,p.x,p.y)&&Wt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Ig(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Wt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,f=r.y,d=o.y,u=Math.min(a,l,c),p=Math.min(h,f,d),x=Math.max(a,l,c),m=Math.max(h,f,d),g=Kh(u,p,e,t,n),_=Kh(x,m,e,t,n),v=i.prevZ,M=i.nextZ;for(;v&&v.z>=g&&M&&M.z<=_;){if(v.x>=u&&v.x<=x&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&Eo(a,h,l,f,c,d,v.x,v.y)&&Wt(v.prev,v,v.next)>=0||(v=v.prevZ,M.x>=u&&M.x<=x&&M.y>=p&&M.y<=m&&M!==s&&M!==o&&Eo(a,h,l,f,c,d,M.x,M.y)&&Wt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;v&&v.z>=g;){if(v.x>=u&&v.x<=x&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&Eo(a,h,l,f,c,d,v.x,v.y)&&Wt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;M&&M.z<=_;){if(M.x>=u&&M.x<=x&&M.y>=p&&M.y<=m&&M!==s&&M!==o&&Eo(a,h,l,f,c,d,M.x,M.y)&&Wt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Pg(i,e){let t=i;do{let n=t.prev,s=t.next.next;!zr(n,s)&&Wp(n,t,t.next,s)&&ea(n,s)&&ea(s,n)&&(e.push(n.i,t.i,s.i),ta(t),ta(t.next),t=i=s),t=t.next}while(t!==i);return Gs(t)}function Lg(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Hg(o,a)){let l=qp(o,a);o=Gs(o,o.next),l=Gs(l,l.next),Qo(o,e,t,n,s,r,0),Qo(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Ng(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Vp(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(zg(c))}s.sort(Dg);for(let r=0;r<s.length;r++)t=Ug(s[r],t);return t}function Dg(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Ug(i,e){let t=Og(i,e);if(!t)return e;let n=qp(t,i);return Gs(n,n.next),Gs(t,t.next)}function Og(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(zr(i,t))return t;do{if(zr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r&&(r=f,o=t.x<t.next.x?t:t.next,f===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Xp(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let f=Math.abs(s-t.y)/(n-t.x);ea(t,i)&&(f<h||f===h&&(t.x>o.x||t.x===o.x&&Fg(o,t)))&&(o=t,h=f)}t=t.next}while(t!==a);return o}function Fg(i,e){return Wt(i.prev,i,e.prev)<0&&Wt(e.next,i,i.next)<0}function Bg(i,e,t,n){let s=i;do s.z===0&&(s.z=Kh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,kg(s)}function kg(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Kh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function zg(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Xp(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Eo(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Xp(i,e,t,n,s,r,o,a)}function Hg(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Gg(i,e)&&(ea(i,e)&&ea(e,i)&&Vg(i,e)&&(Wt(i.prev,i,e.prev)||Wt(i,e.prev,e))||zr(i,e)&&Wt(i.prev,i,i.next)>0&&Wt(e.prev,e,e.next)>0)}function Wt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function zr(i,e){return i.x===e.x&&i.y===e.y}function Wp(i,e,t,n){let s=cl(Wt(i,e,t)),r=cl(Wt(i,e,n)),o=cl(Wt(t,n,i)),a=cl(Wt(t,n,e));return!!(s!==r&&o!==a||s===0&&ll(i,t,e)||r===0&&ll(i,n,e)||o===0&&ll(t,i,n)||a===0&&ll(t,e,n))}function ll(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function cl(i){return i>0?1:i<0?-1:0}function Gg(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Wp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ea(i,e){return Wt(i.prev,i,i.next)<0?Wt(i,e,i.next)>=0&&Wt(i,i.prev,e)>=0:Wt(i,e,i.prev)<0||Wt(i,i.next,e)<0}function Vg(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function qp(i,e){let t=Jh(i.i,i.x,i.y),n=Jh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Xd(i,e,t,n){let s=Jh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ta(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Jh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Xg(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var $h=class{static triangulate(e,t,n=2){return Rg(e,t,n)}},Ps=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Wd(e),qd(n,e);let o=e.length;t.forEach(Wd);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,qd(n,t[l]);let a=$h.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Wd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function qd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Hr=class i extends Pt{constructor(e=new Hs([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Je(s,3)),this.setAttribute("uv",new Je(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,u=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:u-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:Wg,v,M=!1,b,w,y,S;if(g){v=g.getSpacedPoints(h),M=!0,d=!1;let ie=g.isCatmullRomCurve3?g.closed:!1;b=g.computeFrenetFrames(h,ie),w=new L,y=new L,S=new L}d||(m=0,u=0,p=0,x=0);let N=a.extractPoints(c),C=N.shape,O=N.holes;if(!Ps.isClockWise(C)){C=C.reverse();for(let ie=0,de=O.length;ie<de;ie++){let ce=O[ie];Ps.isClockWise(ce)&&(O[ie]=ce.reverse())}}function D(ie){let ce=10000000000000001e-36,we=ie[0];for(let ve=1;ve<=ie.length;ve++){let st=ve%ie.length,Fe=ie[st],xt=Fe.x-we.x,_t=Fe.y-we.y,bt=xt*xt+_t*_t,z=Math.max(Math.abs(Fe.x),Math.abs(Fe.y),Math.abs(we.x),Math.abs(we.y)),tn=ce*z*z;if(bt<=tn){ie.splice(st,1),ve--;continue}we=Fe}}D(C),O.forEach(D);let P=O.length,k=C;for(let ie=0;ie<P;ie++){let de=O[ie];C=C.concat(de)}function A(ie,de,ce){return de||Ye("ExtrudeGeometry: vec does not exist"),ie.clone().addScaledVector(de,ce)}let U=C.length;function J(ie,de,ce){let we,ve,st,Fe=ie.x-de.x,xt=ie.y-de.y,_t=ce.x-ie.x,bt=ce.y-ie.y,z=Fe*Fe+xt*xt,tn=Fe*bt-xt*_t;if(Math.abs(tn)>Number.EPSILON){let mt=Math.sqrt(z),Nt=Math.sqrt(_t*_t+bt*bt),xe=de.x-xt/mt,$t=de.y+Fe/mt,Xe=ce.x-bt/Nt,Ke=ce.y+_t/Nt,I=((Xe-xe)*bt-(Ke-$t)*_t)/(Fe*bt-xt*_t);we=xe+Fe*I-ie.x,ve=$t+xt*I-ie.y;let T=we*we+ve*ve;if(T<=2)return new re(we,ve);st=Math.sqrt(T/2)}else{let mt=!1;Fe>Number.EPSILON?_t>Number.EPSILON&&(mt=!0):Fe<-Number.EPSILON?_t<-Number.EPSILON&&(mt=!0):Math.sign(xt)===Math.sign(bt)&&(mt=!0),mt?(we=-xt,ve=Fe,st=Math.sqrt(z)):(we=Fe,ve=xt,st=Math.sqrt(z/2))}return new re(we/st,ve/st)}let G=[];for(let ie=0,de=k.length,ce=de-1,we=ie+1;ie<de;ie++,ce++,we++)ce===de&&(ce=0),we===de&&(we=0),G[ie]=J(k[ie],k[ce],k[we]);let Y=[],j,oe=G.concat();for(let ie=0,de=P;ie<de;ie++){let ce=O[ie];j=[];for(let we=0,ve=ce.length,st=ve-1,Fe=we+1;we<ve;we++,st++,Fe++)st===ve&&(st=0),Fe===ve&&(Fe=0),j[we]=J(ce[we],ce[st],ce[Fe]);Y.push(j),oe=oe.concat(j)}let Re;if(m===0)Re=Ps.triangulateShape(k,O);else{let ie=[],de=[];for(let ce=0;ce<m;ce++){let we=ce/m,ve=u*Math.cos(we*Math.PI/2),st=p*Math.sin(we*Math.PI/2)+x;for(let Fe=0,xt=k.length;Fe<xt;Fe++){let _t=A(k[Fe],G[Fe],st);Ve(_t.x,_t.y,-ve),we===0&&ie.push(_t)}for(let Fe=0,xt=P;Fe<xt;Fe++){let _t=O[Fe];j=Y[Fe];let bt=[];for(let z=0,tn=_t.length;z<tn;z++){let mt=A(_t[z],j[z],st);Ve(mt.x,mt.y,-ve),we===0&&bt.push(mt)}we===0&&de.push(bt)}}Re=Ps.triangulateShape(ie,de)}let Z=Re.length,fe=p+x;for(let ie=0;ie<U;ie++){let de=d?A(C[ie],oe[ie],fe):C[ie];M?(y.copy(b.normals[0]).multiplyScalar(de.x),w.copy(b.binormals[0]).multiplyScalar(de.y),S.copy(v[0]).add(y).add(w),Ve(S.x,S.y,S.z)):Ve(de.x,de.y,0)}for(let ie=1;ie<=h;ie++)for(let de=0;de<U;de++){let ce=d?A(C[de],oe[de],fe):C[de];M?(y.copy(b.normals[ie]).multiplyScalar(ce.x),w.copy(b.binormals[ie]).multiplyScalar(ce.y),S.copy(v[ie]).add(y).add(w),Ve(S.x,S.y,S.z)):Ve(ce.x,ce.y,f/h*ie)}for(let ie=m-1;ie>=0;ie--){let de=ie/m,ce=u*Math.cos(de*Math.PI/2),we=p*Math.sin(de*Math.PI/2)+x;for(let ve=0,st=k.length;ve<st;ve++){let Fe=A(k[ve],G[ve],we);Ve(Fe.x,Fe.y,f+ce)}for(let ve=0,st=O.length;ve<st;ve++){let Fe=O[ve];j=Y[ve];for(let xt=0,_t=Fe.length;xt<_t;xt++){let bt=A(Fe[xt],j[xt],we);M?Ve(bt.x,bt.y+v[h-1].y,v[h-1].x+ce):Ve(bt.x,bt.y,f+ce)}}}Ae(),ze();function Ae(){let ie=s.length/3;if(d){let de=0,ce=U*de;for(let we=0;we<Z;we++){let ve=Re[we];kt(ve[2]+ce,ve[1]+ce,ve[0]+ce)}de=h+m*2,ce=U*de;for(let we=0;we<Z;we++){let ve=Re[we];kt(ve[0]+ce,ve[1]+ce,ve[2]+ce)}}else{for(let de=0;de<Z;de++){let ce=Re[de];kt(ce[2],ce[1],ce[0])}for(let de=0;de<Z;de++){let ce=Re[de];kt(ce[0]+U*h,ce[1]+U*h,ce[2]+U*h)}}n.addGroup(ie,s.length/3-ie,0)}function ze(){let ie=s.length/3,de=0;Se(k,de),de+=k.length;for(let ce=0,we=O.length;ce<we;ce++){let ve=O[ce];Se(ve,de),de+=ve.length}n.addGroup(ie,s.length/3-ie,1)}function Se(ie,de){let ce=ie.length;for(;--ce>=0;){let we=ce,ve=ce-1;ve<0&&(ve=ie.length-1);for(let st=0,Fe=h+m*2;st<Fe;st++){let xt=U*st,_t=U*(st+1),bt=de+we+xt,z=de+ve+xt,tn=de+ve+_t,mt=de+we+_t;qe(bt,z,tn,mt)}}}function Ve(ie,de,ce){l.push(ie),l.push(de),l.push(ce)}function kt(ie,de,ce){ut(ie),ut(de),ut(ce);let we=s.length/3,ve=_.generateTopUV(n,s,we-3,we-2,we-1);gt(ve[0]),gt(ve[1]),gt(ve[2])}function qe(ie,de,ce,we){ut(ie),ut(de),ut(we),ut(de),ut(ce),ut(we);let ve=s.length/3,st=_.generateSideWallUV(n,s,ve-6,ve-3,ve-2,ve-1);gt(st[0]),gt(st[1]),gt(st[3]),gt(st[1]),gt(st[2]),gt(st[3])}function ut(ie){s.push(l[ie*3+0]),s.push(l[ie*3+1]),s.push(l[ie*3+2])}function gt(ie){r.push(ie.x),r.push(ie.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return qg(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Il[s.type]().fromJSON(s)),new i(n,e.options)}},Wg={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new re(r,o),new re(a,l),new re(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],f=e[n*3+2],d=e[s*3],u=e[s*3+1],p=e[s*3+2],x=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new re(o,1-l),new re(c,1-f),new re(d,1-p),new re(x,1-g)]:[new re(a,1-l),new re(h,1-f),new re(u,1-p),new re(m,1-g)]}};function qg(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ri=class i extends qo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var _s=class i extends qo{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},In=class i extends Pt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,f=e/a,d=t/l,u=[],p=[],x=[],m=[];for(let g=0;g<h;g++){let _=g*d-o;for(let v=0;v<c;v++){let M=v*f-r;p.push(M,-_,0),x.push(0,0,1),m.push(v/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<a;_++){let v=_+c*g,M=_+c*(g+1),b=_+1+c*(g+1),w=_+1+c*g;u.push(v,M,w),u.push(M,b,w)}this.setIndex(u),this.setAttribute("position",new Je(p,3)),this.setAttribute("normal",new Je(x,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Mt=class i extends Pt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new L,d=new L,u=[],p=[],x=[],m=[];for(let g=0;g<=n;g++){let _=[],v=g/n,M=o+v*a,b=e*Math.cos(M),w=Math.sqrt(e*e-b*b),y=0;g===0&&o===0?y=.5/t:g===n&&l===Math.PI&&(y=-.5/t);for(let S=0;S<=t;S++){let N=S/t,C=s+N*r;f.x=-w*Math.cos(C),f.y=b,f.z=w*Math.sin(C),p.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),m.push(N+y,1-v),_.push(c++)}h.push(_)}for(let g=0;g<n;g++)for(let _=0;_<t;_++){let v=h[g][_+1],M=h[g][_],b=h[g+1][_],w=h[g+1][_+1];(g!==0||o>0)&&u.push(v,M,w),(g!==n-1||l<Math.PI)&&u.push(M,b,w)}this.setIndex(u),this.setAttribute("position",new Je(p,3)),this.setAttribute("normal",new Je(x,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var cn=class i extends Pt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],f=[],d=new L,u=new L,p=new L;for(let x=0;x<=n;x++){let m=o+x/n*a;for(let g=0;g<=s;g++){let _=g/s*r;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),c.push(u.x,u.y,u.z),d.x=e*Math.cos(_),d.y=e*Math.sin(_),p.subVectors(u,d).normalize(),h.push(p.x,p.y,p.z),f.push(g/s),f.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=s;m++){let g=(s+1)*x+m-1,_=(s+1)*(x-1)+m-1,v=(s+1)*(x-1)+m,M=(s+1)*x+m;l.push(g,_,M),l.push(_,v,M)}this.setIndex(l),this.setAttribute("position",new Je(c,3)),this.setAttribute("normal",new Je(h,3)),this.setAttribute("uv",new Je(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}},na=class i extends Pt{constructor(e=1,t=.4,n=64,s=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:s,p:r,q:o},n=Math.floor(n),s=Math.floor(s);let a=[],l=[],c=[],h=[],f=new L,d=new L,u=new L,p=new L,x=new L,m=new L,g=new L;for(let v=0;v<=n;++v){let M=v/n*r*Math.PI*2;_(M,r,o,e,u),_(M+.01,r,o,e,p),m.subVectors(p,u),g.addVectors(p,u),x.crossVectors(m,g),g.crossVectors(x,m),x.normalize(),g.normalize();for(let b=0;b<=s;++b){let w=b/s*Math.PI*2,y=-t*Math.cos(w),S=t*Math.sin(w);f.x=u.x+(y*g.x+S*x.x),f.y=u.y+(y*g.y+S*x.y),f.z=u.z+(y*g.z+S*x.z),l.push(f.x,f.y,f.z),d.subVectors(f,u).normalize(),c.push(d.x,d.y,d.z),h.push(v/n),h.push(b/s)}}for(let v=1;v<=n;v++)for(let M=1;M<=s;M++){let b=(s+1)*(v-1)+(M-1),w=(s+1)*v+(M-1),y=(s+1)*v+M,S=(s+1)*(v-1)+M;a.push(b,w,S),a.push(w,y,S)}this.setIndex(a),this.setAttribute("position",new Je(l,3)),this.setAttribute("normal",new Je(c,3)),this.setAttribute("uv",new Je(h,2));function _(v,M,b,w,y){let S=Math.cos(v),N=Math.sin(v),C=b/M*v,O=Math.cos(C);y.x=w*(2+O)*.5*S,y.y=w*(2+O)*N*.5,y.z=w*Math.sin(C)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},ia=class i extends Pt{constructor(e=new Jo(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new L,l=new L,c=new re,h=new L,f=[],d=[],u=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new Je(f,3)),this.setAttribute("normal",new Je(d,3)),this.setAttribute("uv",new Je(u,2));function x(){for(let v=0;v<t;v++)m(v);m(r===!1?t:0),_(),g()}function m(v){h=e.getPointAt(v/t,h);let M=o.normals[v],b=o.binormals[v];for(let w=0;w<=s;w++){let y=w/s*Math.PI*2,S=Math.sin(y),N=-Math.cos(y);l.x=N*M.x+S*b.x,l.y=N*M.y+S*b.y,l.z=N*M.z+S*b.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,f.push(a.x,a.y,a.z)}}function g(){for(let v=1;v<=t;v++)for(let M=1;M<=s;M++){let b=(s+1)*(v-1)+(M-1),w=(s+1)*v+(M-1),y=(s+1)*v+M,S=(s+1)*(v-1)+M;p.push(b,w,S),p.push(w,y,S)}}function _(){for(let v=0;v<=t;v++)for(let M=0;M<=s;M++)c.x=v/t,c.y=M/s,u.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Il[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Qs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Yd(s))s.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Yd(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Pn(i){let e={};for(let t=0;t<i.length;t++){let n=Qs(i[t]);for(let s in n)e[s]=n[s]}return e}function Yd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Yg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Nu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}var Yp={clone:Qs,merge:Pn},Zg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ai=class extends Mn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zg,this.fragmentShader=Kg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qs(e.uniforms),this.uniformsGroups=Yg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Me().setHex(s.value);break;case"v2":this.uniforms[n].value=new re().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new It().fromArray(s.value);break;case"m3":this.uniforms[n].value=new $e().fromArray(s.value);break;case"m4":this.uniforms[n].value=new We().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ll=class extends ai{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},gn=class extends Mn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$r,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},On=class extends gn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new re(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Me(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Ls('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Ls('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},sa=class extends Mn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Me(16777215),this.specular=new Me(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$r,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=pa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Yt=class extends Mn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$r,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=pa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Nl=class extends Mn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Dl=class extends Mn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ps(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function wo(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function Jg(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Zd(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function $g(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var Ci=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ul=class extends Ci{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cs,endingEnd:Cs}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Is:r=e,a=2*t-n;break;case Po:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Is:o=e,l=2*n-t;break;case Po:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,u=this._weightNext,p=(n-t)/(s-t),x=p*p,m=x*p,g=-d*m+2*d*x-d*p,_=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*p+1,v=(-1-u)*m+(1.5+u)*x+.5*p,M=u*m-u*x;for(let b=0;b!==a;++b)r[b]=g*o[h+b]+_*o[c+b]+v*o[l+b]+M*o[f+b];return r}},ra=class extends Ci{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),f=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*f+o[l+d]*h;return r}},Ol=class extends Ci{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Fl=class extends Ci{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,f=this.outTangents;if(!h||!f){let p=(n-t)/(s-t),x=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*p;return r}let d=a*2,u=e-1;for(let p=0;p!==a;++p){let x=o[c+p],m=o[l+p],g=u*d+p*2,_=f[g],v=f[g+1],M=e*d+p*2,b=h[M],w=h[M+1],y=Qg(n,t,_,b,s);r[p]=Zp(y,x,v,w,m)}return r}};function Zp(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function jg(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Qg(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=Zp(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let l=jg(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Vn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ps(t,this.TimeBufferType),this.values=ps(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ps(e.times,Array),values:ps(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),wo(e.settings)&&(n.settings={inTangents:ps(e.settings.inTangents,Array),outTangents:ps(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ol(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ra(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ul(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Fl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ns:t=this.InterpolantFactoryMethodDiscrete;break;case Ds:t=this.InterpolantFactoryMethodLinear;break;case fl:t=this.InterpolantFactoryMethodSmooth;break;case Yh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Oe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ns;case this.InterpolantFactoryMethodLinear:return Ds;case this.InterpolantFactoryMethodSmooth:return fl;case this.InterpolantFactoryMethodBezier:return Yh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;wo(this.settings)&&(Kd(this.settings.inTangents,e),Kd(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;wo(this.settings)&&(Jd(this.settings.inTangents,e),Jd(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ye("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ye("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Ye("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ye("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&B0(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Ye("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===fl,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let f=a*n,d=f-n,u=f+n;for(let p=0;p!==n;++p){let x=t[f+p];if(x!==t[d+p]||x!==t[u+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*n,d=o*n;for(let u=0;u!==n;++u)t[d+u]=t[f+u]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,wo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Kd(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function Jd(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Vn.prototype.ValueTypeName="";Vn.prototype.TimeBufferType=Float32Array;Vn.prototype.ValueBufferType=Float32Array;Vn.prototype.DefaultInterpolation=Ds;var Ji=class extends Vn{constructor(e,t,n){super(e,t,n)}};Ji.prototype.ValueTypeName="bool";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=Ns;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var oa=class extends Vn{constructor(e,t,n,s){super(e,t,n,s)}};oa.prototype.ValueTypeName="color";var $i=class extends Vn{constructor(e,t,n,s){super(e,t,n,s)}};$i.prototype.ValueTypeName="number";var Bl=class extends Ci{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Bt.slerpFlat(r,0,o,c-a,o,c,l);return r}},ji=class extends Vn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Bl(this.times,this.values,this.getValueSize(),e)}};ji.prototype.ValueTypeName="quaternion";ji.prototype.InterpolantFactoryMethodSmooth=void 0;var Qi=class extends Vn{constructor(e,t,n){super(e,t,n)}};Qi.prototype.ValueTypeName="string";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=Ns;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var ys=class extends Vn{constructor(e,t,n,s){super(e,t,n,s)}};ys.prototype.ValueTypeName="vector";var Vs=class{constructor(e="",t=-1,n=[],s=Lc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=bi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(tx(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Vn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=Jg(l);l=Zd(l,1,h),c=Zd(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new $i(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let f=h[1],d=s[f];d||(s[f]=d=[]),d.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function ex(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return $i;case"vector":case"vector2":case"vector3":case"vector4":return ys;case"color":return oa;case"quaternion":return ji;case"bool":case"boolean":return Ji;case"string":return Qi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function tx(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=ex(i.type);if(i.times===void 0){let n=[],s=[];$g(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),wo(i.settings)&&(t.settings={inTangents:ps(i.settings.inTangents,Float32Array),outTangents:ps(i.settings.outTangents,Float32Array)}),t}var wi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&($d(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!$d(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function $d(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var kl=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){let u=c[f],p=c[f+1];if(u.global&&(u.lastIndex=0),u.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Kp=new kl,Ii=class{constructor(e){this.manager=e!==void 0?e:Kp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Ii.DEFAULT_MATERIAL_NAME="__DEFAULT";var Xi={},jh=class extends Error{constructor(e,t){super(e),this.response=t}},Gr=class extends Ii{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=wi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Xi[e]!==void 0){Xi[e].push({onLoad:t,onProgress:n,onError:s});return}Xi[e]=[],Xi[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Oe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Xi[e],f=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),u=d?parseInt(d):0,p=u!==0,x=0,m=new ReadableStream({start(g){_();function _(){f.read().then(({done:v,value:M})=>{if(v)g.close();else{x+=M.byteLength;let b=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:u});for(let w=0,y=h.length;w<y;w++){let S=h[w];S.onProgress&&S.onProgress(b)}g.enqueue(M),_()}},v=>{g.error(v)})}}});return new Response(m)}else throw new jh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{let f=/charset="?([^;"\s]*)"?/i.exec(a),d=f&&f[1]?f[1].toLowerCase():void 0,u=new TextDecoder(d);return c.arrayBuffer().then(p=>u.decode(p))}}}).then(c=>{wi.add(`file:${e}`,c);let h=Xi[e];delete Xi[e];for(let f=0,d=h.length;f<d;f++){let u=h[f];u.onLoad&&u.onLoad(c)}}).catch(c=>{let h=Xi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Xi[e];for(let f=0,d=h.length;f<d;f++){let u=h[f];u.onError&&u.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Sr=new WeakMap,zl=class extends Ii{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=wi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let f=Sr.get(o);f===void 0&&(f=[],Sr.set(o,f)),f.push({onLoad:t,onError:s})}return o}let a=Cr("img");function l(){h(),t&&t(this);let f=Sr.get(this)||[];for(let d=0;d<f.length;d++){let u=f[d];u.onLoad&&u.onLoad(this)}Sr.delete(this),r.manager.itemEnd(e)}function c(f){h(),s&&s(f),wi.remove(`image:${e}`);let d=Sr.get(this)||[];for(let u=0;u<d.length;u++){let p=d[u];p.onError&&p.onError(f)}Sr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),wi.add(`image:${e}`,a),r.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};var aa=class extends Ii{constructor(e){super(e)}load(e,t,n,s){let r=new ln,o=new zl(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Xs=class extends Ut{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},la=class extends Xs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Me(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Xh=new We,jd=new L,Qd=new L,Vr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.mapType=Xn,this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gs,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;jd.setFromMatrixPosition(e.matrixWorld),t.position.copy(jd),Qd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Xh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Xh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Rr||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Xh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},hl=new L,ul=new Bt,Ei=new L,ca=class extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(hl,ul,Ei),Ei.x===1&&Ei.y===1&&Ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(hl,ul,Ei.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(hl,ul,Ei),Ei.x===1&&Ei.y===1&&Ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(hl,ul,Ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ds=new L,ep=new re,tp=new re,on=class extends ca{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Us*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ao*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Us*2*Math.atan(Math.tan(Ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ds.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ds.x,ds.y).multiplyScalar(-e/ds.z),ds.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ds.x,ds.y).multiplyScalar(-e/ds.z)}getViewSize(e,t){return this.getViewBounds(e,ep,tp),t.subVectors(tp,ep)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ao*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Qh=class extends Vr{constructor(){super(new on(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Us*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},ha=class extends Xs{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Qh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},eu=class extends Vr{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0}},ua=class extends Xs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new eu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ws=class extends ca{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},tu=class extends Vr{constructor(){super(new Ws(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},qs=class extends Xs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new tu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var es=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Wh=new WeakMap,fa=class extends Ii{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Oe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Oe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=wi.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{Wh.has(o)===!0?(s&&s(Wh.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return wi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Wh.set(l,c),wi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});wi.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var br=-90,Tr=1,Xr=class extends Ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new on(br,Tr,e,t);s.layers=this.layers,this.add(s);let r=new on(br,Tr,e,t);r.layers=this.layers,this.add(r);let o=new on(br,Tr,e,t);o.layers=this.layers,this.add(o);let a=new on(br,Tr,e,t);a.layers=this.layers,this.add(a);let l=new on(br,Tr,e,t);l.layers=this.layers,this.add(l);let c=new on(br,Tr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ri)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Rr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=x,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,d,u),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Hl=class extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Gl=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,s,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){Bt.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let o=this._workIndex*r;Bt.multiplyQuaternionsFlat(e,o,e,t,e,n),Bt.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){let o=1-s;for(let a=0;a!==r;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*s}}},Du="\\[\\]\\.:\\/",nx=new RegExp("["+Du+"]","g"),Uu="[^"+Du+"]",ix="[^"+Du.replace("\\.","")+"]",sx=/((?:WC+[\/:])*)/.source.replace("WC",Uu),rx=/(WCOD+)?/.source.replace("WCOD",ix),ox=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Uu),ax=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Uu),lx=new RegExp("^"+sx+rx+ox+ax+"$"),cx=["material","materials","bones","map"],nu=class{constructor(e,t,n){let s=n||Lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Lt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(nx,"")}static parseTrackName(e){let t=lx.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);cx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Oe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ye("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ye("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ye("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ye("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ye("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;Ye("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Lt.Composite=nu;Lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Lt.prototype.GetterByBindingType=[Lt.prototype._getValue_direct,Lt.prototype._getValue_array,Lt.prototype._getValue_arrayElement,Lt.prototype._getValue_toArray];Lt.prototype.SetterByBindingTypeAndVersioning=[[Lt.prototype._setValue_direct,Lt.prototype._setValue_direct_setNeedsUpdate,Lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_array,Lt.prototype._setValue_array_setNeedsUpdate,Lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_arrayElement,Lt.prototype._setValue_arrayElement_setNeedsUpdate,Lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_fromArray,Lt.prototype._setValue_fromArray_setNeedsUpdate,Lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Vl=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,o=r.length,a=new Array(o),l={endingStart:Cs,endingEnd:Cs};for(let c=0;c!==o;++c){let h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=wp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Rp:for(let h=0,f=l.length;h!==f;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case Lc:default:for(let h=0,f=l.length;h!==f;++h)l[h].evaluate(o),c[h].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,o=n===Ap;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===Pc){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){let a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=r,this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=Is,s.endingEnd=Is):(e?s.endingStart=this.zeroSlopeAtStart?Is:Cs:s.endingStart=Po,t?s.endingEnd=this.zeroSlopeAtEnd?Is:Cs:s.endingEnd=Po)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}},hx=new Float32Array(1),da=class extends yi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let f=0;f!==r;++f){let d=s[f],u=d.name,p=h[u];if(p!==void 0)++p.referenceCount,o[f]=p;else{if(p=o[f],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,u));continue}let x=t&&t._propertyBindings[f].binding.parsedPath;p=new Gl(Lt.create(n,u,x),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,u),o[f]=p}a[f].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;let f=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete f[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new ra(new Float32Array(2),new Float32Array(2),1,hx),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,o=typeof e=="string"?Vs.findByName(s,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Lc),l!==void 0){let f=l.actionByRoot[r];if(f!==void 0&&f.blendMode===n)return f;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let h=new Vl(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?Vs.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(s,e,r,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let h=c._cacheIndex,f=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,f._cacheIndex=h,t[h]=f,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Hu=class Hu{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Hu.prototype.isMatrix2=!0;var iu=Hu;function Ou(i,e,t,n){let s=ux(n);switch(t){case vu:return i*e;case $l:return i*e/s.components*s.byteLength;case jl:return i*e/s.components*s.byteLength;case vs:return i*e*2/s.components*s.byteLength;case Ql:return i*e*2/s.components*s.byteLength;case Mu:return i*e*3/s.components*s.byteLength;case ci:return i*e*4/s.components*s.byteLength;case ec:return i*e*4/s.components*s.byteLength;case ga:case xa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case _a:case ya:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case nc:case sc:return Math.max(i,16)*Math.max(e,8)/4;case tc:case ic:return Math.max(i,8)*Math.max(e,8)/2;case rc:case oc:case lc:case cc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ac:case va:case hc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case uc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case dc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case pc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case mc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case gc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case xc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case _c:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case yc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case vc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Mc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Sc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case bc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Tc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ec:case wc:case Ac:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Rc:case Cc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ma:case Ic:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ux(i){switch(i){case Xn:case gu:return{byteLength:1,components:1};case Kr:case xu:case Si:return{byteLength:2,components:1};case Kl:case Jl:return{byteLength:2,components:4};case Mi:case Zl:case $n:return{byteLength:4,components:1};case _u:case yu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function xm(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function dx(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,f=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=i.SHORT;else if(c instanceof Uint32Array)u=i.UNSIGNED_INT;else if(c instanceof Int32Array)u=i.INT;else if(c instanceof Int8Array)u=i.BYTE;else if(c instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,h);else{f.sort((u,p)=>u.start-p.start);let d=0;for(let u=1;u<f.length;u++){let p=f[d],x=f[u];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,f[d]=x)}f.length=d+1;for(let u=0,p=f.length;u<p;u++){let x=f[u];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var px=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mx=`#ifdef USE_ALPHAHASH
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
#endif`,gx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_x=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vx=`#ifdef USE_AOMAP
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
#endif`,Mx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sx=`#ifdef USE_BATCHING
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
#endif`,bx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ex=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ax=`#ifdef USE_IRIDESCENCE
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
#endif`,Rx=`#ifdef USE_BUMPMAP
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
#endif`,Cx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ix=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Px=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Dx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ux=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ox=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Fx=`#define PI 3.141592653589793
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
} // validated`,Bx=`vec3 transformedNormal = objectNormal;
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
#endif`,kx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wx=`#ifdef USE_ENVMAP
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
#endif`,qx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Yx=`#ifdef USE_ENVMAP
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
#endif`,Zx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kx=`#ifdef USE_ENVMAP
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
#endif`,Jx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$x=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,e_=`#ifdef USE_GRADIENTMAP
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
}`,t_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,n_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,i_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,s_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,r_=`#ifdef USE_ENVMAP
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
#endif`,o_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,a_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,l_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,c_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,h_=`PhysicalMaterial material;
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
#endif`,u_=`uniform sampler2D dfgLUT;
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
}`,f_=`
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
#endif`,d_=`#if defined( RE_IndirectDiffuse )
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
#endif`,p_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,m_=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,g_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,x_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,__=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,v_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,M_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,S_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,b_=`#if defined( USE_POINTS_UV )
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
#endif`,T_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,E_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,w_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,A_=`#if defined( USE_MORPHCOLORS )
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
#endif`,R_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C_=`#ifdef USE_MORPHTARGETS
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
#endif`,I_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,L_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,N_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,O_=`#ifdef USE_NORMALMAP
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
#endif`,F_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,B_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,k_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,z_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,H_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,G_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,V_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,X_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,W_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,q_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Y_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Z_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,K_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,J_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,j_=`float getShadowMask() {
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
}`,Q_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ey=`#ifdef USE_SKINNING
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
#endif`,ty=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ny=`#ifdef USE_SKINNING
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
#endif`,iy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ry=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ay=`#ifdef USE_TRANSMISSION
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
#endif`,ly=`#ifdef USE_TRANSMISSION
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
#endif`,cy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,dy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,py=`uniform sampler2D t2D;
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
}`,my=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gy=`uniform float backgroundBlurriness;
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
}`,xy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_y=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yy=`#include <common>
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
}`,vy=`#if DEPTH_PACKING == 3200
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
}`,My=`#define DISTANCE
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
}`,Sy=`#define DISTANCE
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
}`,by=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ty=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ey=`uniform float scale;
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
}`,wy=`uniform vec3 diffuse;
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
}`,Ay=`#include <common>
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
}`,Ry=`uniform vec3 diffuse;
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
}`,Cy=`#define LAMBERT
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
}`,Iy=`#define LAMBERT
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
}`,Py=`#define MATCAP
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
}`,Ly=`#define MATCAP
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
}`,Ny=`#define NORMAL
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
}`,Dy=`#define NORMAL
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
}`,Uy=`#define PHONG
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
}`,Oy=`#define PHONG
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
}`,Fy=`#define STANDARD
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
}`,By=`#define STANDARD
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
}`,ky=`#define TOON
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
}`,zy=`#define TOON
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
}`,Hy=`uniform float size;
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
}`,Gy=`uniform vec3 diffuse;
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
}`,Vy=`#include <common>
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
}`,Xy=`uniform vec3 color;
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
}`,Wy=`uniform float rotation;
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
}`,qy=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:px,alphahash_pars_fragment:mx,alphamap_fragment:gx,alphamap_pars_fragment:xx,alphatest_fragment:_x,alphatest_pars_fragment:yx,aomap_fragment:vx,aomap_pars_fragment:Mx,batching_pars_vertex:Sx,batching_vertex:bx,begin_vertex:Tx,beginnormal_vertex:Ex,bsdfs:wx,iridescence_fragment:Ax,bumpmap_pars_fragment:Rx,clipping_planes_fragment:Cx,clipping_planes_pars_fragment:Ix,clipping_planes_pars_vertex:Px,clipping_planes_vertex:Lx,color_fragment:Nx,color_pars_fragment:Dx,color_pars_vertex:Ux,color_vertex:Ox,common:Fx,defaultnormal_vertex:Bx,displacementmap_pars_vertex:kx,displacementmap_vertex:zx,emissivemap_fragment:Hx,emissivemap_pars_fragment:Gx,colorspace_fragment:Vx,colorspace_pars_fragment:Xx,envmap_fragment:Wx,envmap_common_pars_fragment:qx,envmap_pars_fragment:Yx,envmap_pars_vertex:Zx,envmap_physical_pars_fragment:r_,envmap_vertex:Kx,fog_vertex:Jx,fog_pars_vertex:$x,fog_fragment:jx,fog_pars_fragment:Qx,gradientmap_pars_fragment:e_,lightmap_pars_fragment:t_,lights_lambert_fragment:n_,lights_lambert_pars_fragment:i_,lights_pars_begin:s_,lights_toon_fragment:o_,lights_toon_pars_fragment:a_,lights_phong_fragment:l_,lights_phong_pars_fragment:c_,lights_physical_fragment:h_,lights_physical_pars_fragment:u_,lights_fragment_begin:f_,lights_fragment_maps:d_,lights_fragment_end:p_,lightprobes_pars_fragment:m_,logdepthbuf_fragment:g_,logdepthbuf_pars_fragment:x_,logdepthbuf_pars_vertex:__,logdepthbuf_vertex:y_,map_fragment:v_,map_pars_fragment:M_,map_particle_fragment:S_,map_particle_pars_fragment:b_,metalnessmap_fragment:T_,metalnessmap_pars_fragment:E_,morphinstance_vertex:w_,morphcolor_vertex:A_,morphnormal_vertex:R_,morphtarget_pars_vertex:C_,morphtarget_vertex:I_,normal_fragment_begin:P_,normal_fragment_maps:L_,normal_pars_fragment:N_,normal_pars_vertex:D_,normal_vertex:U_,normalmap_pars_fragment:O_,clearcoat_normal_fragment_begin:F_,clearcoat_normal_fragment_maps:B_,clearcoat_pars_fragment:k_,iridescence_pars_fragment:z_,opaque_fragment:H_,packing:G_,premultiplied_alpha_fragment:V_,project_vertex:X_,dithering_fragment:W_,dithering_pars_fragment:q_,roughnessmap_fragment:Y_,roughnessmap_pars_fragment:Z_,shadowmap_pars_fragment:K_,shadowmap_pars_vertex:J_,shadowmap_vertex:$_,shadowmask_pars_fragment:j_,skinbase_vertex:Q_,skinning_pars_vertex:ey,skinning_vertex:ty,skinnormal_vertex:ny,specularmap_fragment:iy,specularmap_pars_fragment:sy,tonemapping_fragment:ry,tonemapping_pars_fragment:oy,transmission_fragment:ay,transmission_pars_fragment:ly,uv_pars_fragment:cy,uv_pars_vertex:hy,uv_vertex:uy,worldpos_vertex:fy,background_vert:dy,background_frag:py,backgroundCube_vert:my,backgroundCube_frag:gy,cube_vert:xy,cube_frag:_y,depth_vert:yy,depth_frag:vy,distance_vert:My,distance_frag:Sy,equirect_vert:by,equirect_frag:Ty,linedashed_vert:Ey,linedashed_frag:wy,meshbasic_vert:Ay,meshbasic_frag:Ry,meshlambert_vert:Cy,meshlambert_frag:Iy,meshmatcap_vert:Py,meshmatcap_frag:Ly,meshnormal_vert:Ny,meshnormal_frag:Dy,meshphong_vert:Uy,meshphong_frag:Oy,meshphysical_vert:Fy,meshphysical_frag:By,meshtoon_vert:ky,meshtoon_frag:zy,points_vert:Hy,points_frag:Gy,shadow_vert:Vy,shadow_frag:Xy,sprite_vert:Wy,sprite_frag:qy},Te={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},Di={basic:{uniforms:Pn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Pn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Me(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Pn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Pn([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Pn([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new Me(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Pn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Pn([Te.points,Te.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Pn([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Pn([Te.common,Te.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Pn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Pn([Te.sprite,Te.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:Pn([Te.common,Te.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:Pn([Te.lights,Te.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Di.physical={uniforms:Pn([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new $e},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};var Uc={r:0,b:0,g:0},Yy=new We,_m=new $e;_m.set(-1,0,0,0,1,0,0,0,1);function Zy(i,e,t,n,s,r){let o=new Me(0),a=s===!0?0:1,l,c,h=null,f=0,d=null;function u(_){let v=_.isScene===!0?_.background:null;if(v&&v.isTexture){let M=_.backgroundBlurriness>0;v=e.get(v,M)}return v}function p(_){let v=!1,M=u(_);M===null?m(o,a):M&&M.isColor&&(m(M,1),v=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||v)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(_,v){let M=u(v);M&&M.isCubeTexture?(c===void 0&&(c=new et(new ke(1,1,1),new ai({name:"BackgroundCubeMaterial",uniforms:Qs(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,w,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Yy.makeRotationFromEuler(v.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(_m),c.material.toneMapped=ft.getTransfer(M.colorSpace)!==At,(h!==M||f!==M.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,d=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new et(new In(2,2),new ai({name:"BackgroundMaterial",uniforms:Qs(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=ft.getTransfer(M.colorSpace)!==At,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,f=M.version,d=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,v){_.getRGB(Uc,Nu(i)),t.buffers.color.setClear(Uc.r,Uc.g,Uc.b,v,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,v=1){o.set(_),a=v,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,m(o,a)},render:p,addToRenderList:x,dispose:g}}function Ky(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(O,R,D,P,k){let A=!1,U=f(O,P,D,R);r!==U&&(r=U,c(r.object)),A=u(O,P,D,k),A&&p(O,P,D,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(A||o)&&(o=!1,M(O,R,D,P),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return i.createVertexArray()}function c(O){return i.bindVertexArray(O)}function h(O){return i.deleteVertexArray(O)}function f(O,R,D,P){let k=P.wireframe===!0,A=n[R.id];A===void 0&&(A={},n[R.id]=A);let U=O.isInstancedMesh===!0?O.id:0,J=A[U];J===void 0&&(J={},A[U]=J);let G=J[D.id];G===void 0&&(G={},J[D.id]=G);let Y=G[k];return Y===void 0&&(Y=d(l()),G[k]=Y),Y}function d(O){let R=[],D=[],P=[];for(let k=0;k<t;k++)R[k]=0,D[k]=0,P[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:D,attributeDivisors:P,object:O,attributes:{},index:null}}function u(O,R,D,P){let k=r.attributes,A=R.attributes,U=0,J=D.getAttributes();for(let G in J)if(J[G].location>=0){let j=k[G],oe=A[G];if(oe===void 0&&(G==="instanceMatrix"&&O.instanceMatrix&&(oe=O.instanceMatrix),G==="instanceColor"&&O.instanceColor&&(oe=O.instanceColor)),j===void 0||j.attribute!==oe||oe&&j.data!==oe.data)return!0;U++}return r.attributesNum!==U||r.index!==P}function p(O,R,D,P){let k={},A=R.attributes,U=0,J=D.getAttributes();for(let G in J)if(J[G].location>=0){let j=A[G];j===void 0&&(G==="instanceMatrix"&&O.instanceMatrix&&(j=O.instanceMatrix),G==="instanceColor"&&O.instanceColor&&(j=O.instanceColor));let oe={};oe.attribute=j,j&&j.data&&(oe.data=j.data),k[G]=oe,U++}r.attributes=k,r.attributesNum=U,r.index=P}function x(){let O=r.newAttributes;for(let R=0,D=O.length;R<D;R++)O[R]=0}function m(O){g(O,0)}function g(O,R){let D=r.newAttributes,P=r.enabledAttributes,k=r.attributeDivisors;D[O]=1,P[O]===0&&(i.enableVertexAttribArray(O),P[O]=1),k[O]!==R&&(i.vertexAttribDivisor(O,R),k[O]=R)}function _(){let O=r.newAttributes,R=r.enabledAttributes;for(let D=0,P=R.length;D<P;D++)R[D]!==O[D]&&(i.disableVertexAttribArray(D),R[D]=0)}function v(O,R,D,P,k,A,U){U===!0?i.vertexAttribIPointer(O,R,D,k,A):i.vertexAttribPointer(O,R,D,P,k,A)}function M(O,R,D,P){x();let k=P.attributes,A=D.getAttributes(),U=R.defaultAttributeValues;for(let J in A){let G=A[J];if(G.location>=0){let Y=k[J];if(Y===void 0&&(J==="instanceMatrix"&&O.instanceMatrix&&(Y=O.instanceMatrix),J==="instanceColor"&&O.instanceColor&&(Y=O.instanceColor)),Y!==void 0){let j=Y.normalized,oe=Y.itemSize,Re=e.get(Y);if(Re===void 0)continue;let Z=Re.buffer,fe=Re.type,Ae=Re.bytesPerElement,ze=fe===i.INT||fe===i.UNSIGNED_INT||Y.gpuType===Zl;if(Y.isInterleavedBufferAttribute){let Se=Y.data,Ve=Se.isInterleavedBuffer===!0?Se.stride:Se.itemSize,kt=Y.offset;if(Se.isInstancedInterleavedBuffer||Se.isInstancedBufferAttribute){for(let qe=0;qe<G.locationSize;qe++)g(G.location+qe,Se.meshPerAttribute);O.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let qe=0;qe<G.locationSize;qe++)m(G.location+qe);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let qe=0;qe<G.locationSize;qe++)v(G.location+qe,oe/G.locationSize,fe,j,Ve*Ae,(kt+oe/G.locationSize*qe)*Ae,ze)}else{if(Y.isInstancedBufferAttribute){for(let Se=0;Se<G.locationSize;Se++)g(G.location+Se,Y.meshPerAttribute);O.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let Se=0;Se<G.locationSize;Se++)m(G.location+Se);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let Se=0;Se<G.locationSize;Se++)v(G.location+Se,oe/G.locationSize,fe,j,oe*Ae,oe/G.locationSize*Se*Ae,ze)}}else if(U!==void 0){let j=U[J];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(G.location,j);break;case 3:i.vertexAttrib3fv(G.location,j);break;case 4:i.vertexAttrib4fv(G.location,j);break;default:i.vertexAttrib1fv(G.location,j)}}}}_()}function b(){N();for(let O in n){let R=n[O];for(let D in R){let P=R[D];for(let k in P){let A=P[k];for(let U in A)h(A[U].object),delete A[U];delete P[k]}}delete n[O]}}function w(O){if(n[O.id]===void 0)return;let R=n[O.id];for(let D in R){let P=R[D];for(let k in P){let A=P[k];for(let U in A)h(A[U].object),delete A[U];delete P[k]}}delete n[O.id]}function y(O){for(let R in n){let D=n[R];for(let P in D){let k=D[P];if(k[O.id]===void 0)continue;let A=k[O.id];for(let U in A)h(A[U].object),delete A[U];delete k[O.id]}}}function S(O){for(let R in n){let D=n[R],P=O.isInstancedMesh===!0?O.id:0,k=D[P];if(k!==void 0){for(let A in k){let U=k[A];for(let J in U)h(U[J].object),delete U[J];delete k[A]}delete D[P],Object.keys(D).length===0&&delete n[R]}}}function N(){C(),o=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:N,resetDefaultState:C,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfObject:S,releaseStatesOfProgram:y,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function Jy(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let u=0;u<h;u++)d+=c[u];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function $y(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let y=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(y){return!(y!==ci&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(y){let S=y===Si&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(y!==Xn&&y!==$n&&!S&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(y){if(y==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Oe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&Oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&Oe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:u,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:M,maxSamples:b,samples:w}}function jy(i){let e=this,t=null,n=0,s=!1,r=!1,o=new _i,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let u=f.length!==0||d||n!==0||s;return s=d,n=f.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,u){let p=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,g=i.get(f);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let _=r?0:n,v=_*4,M=g.clippingState||null;l.value=M,M=h(p,d,v,u);for(let b=0;b!==v;++b)M[b]=t[b];g.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,u,p){let x=f!==null?f.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=u+x*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<g)&&(m=new Float32Array(g));for(let v=0,M=u;v!==x;++v,M+=4)o.copy(f[v]).applyMatrix4(_,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var Ea=class extends Zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Vo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ke(5,5,5),r=new ai({name:"CubemapFromEquirect",uniforms:Qs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Sn,blending:Zs});r.uniforms.tEquirect.value=t;let o=new et(s,r),a=t.minFilter;return t.minFilter===li&&(t.minFilter=an),new Xr(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Jp=256,Qy=3,ev=20,ym=256,vm=16,tv=3,nv=new L,iv=new Me,Qr=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Xr(1,10,null),this._boxMesh=new et(new ke(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=nv}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,d=l.autoClearColor,u=l.autoClearDepth,p=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(iv));let m=new Xr(n,s,h);return m.position.copy(a),m.update(l,e),l.autoClear=f,l.autoClearColor=d,l.autoClearDepth=u,l.autoClearStencil=p,e.background=x,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Jp,Cu(e))}_fromTexture(e,t){e.mapping===Js||e.mapping===Yr?this._setSize(e.image.length===0?Jp:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=$p(e,!1,!1),n=Math.log2(e)-Qy;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=$p(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Js||e.mapping===Yr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qp()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=jp()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=sv(),this._integrationMaterial=rv());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/vm);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-tv)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(ym*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=ov());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function $p(i,e,t){return new Ea(i,{minFilter:li,generateMipmaps:e,type:Si,colorSpace:Un,depthBuffer:t})}function wa(i,e,t){return new ai({name:i,uniforms:e,vertexShader:ht.cube_vert,fragmentShader:t,side:Sn,blending:Zs,depthTest:!1,depthWrite:!1})}function sv(){return wa("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${ym}u

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
	`)}function rv(){return wa("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:vm}},`

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
	`)}function ov(){return wa("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${ev}
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
	`)}function jp(){return wa("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Qp(){return wa("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function av(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,u=!1){return d==null?null:u?o(d):r(d)}function r(d){if(d&&d.isTexture){let u=d.mapping;if(u===Wl||u===ql)if(e.has(d)){let p=e.get(d).texture;return a(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let x=new Ea(p.height);return x.fromEquirectangularTexture(i,d),e.set(d,x),d.addEventListener("dispose",c),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let u=d.mapping,p=u===Wl||u===ql,x=u===Js||u===Yr;if(p||x){let m=t.get(d),g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new Qr(i)),m=p?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let _=d.image;return p&&_&&_.height>0||x&&_&&l(_)?(n===null&&(n=new Qr(i)),m=p?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,u){return u===Wl?d.mapping=Js:u===ql&&(d.mapping=Yr),d}function l(d){let u=0,p=6;for(let x=0;x<p;x++)d[x]!==void 0&&u++;return u===p}function c(d){let u=d.target;u.removeEventListener("dispose",c);let p=e.get(u);p!==void 0&&(e.delete(u),p.dispose())}function h(d){let u=d.target;u.removeEventListener("dispose",h);let p=t.get(u);p!==void 0&&(t.delete(u),p.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function lv(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ls("WebGLRenderer: "+n+" extension not supported."),s}}}function cv(i,e,t,n){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let x=r.get(p);x&&(e.remove(x),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,x){return s[x.id]!==void 0||(x.addEventListener("dispose",a),s[x.id]=new WeakRef(x),o.register(x,x.id,x),t.memory.geometries++),x}function h(p){let x=p.attributes;for(let m in x)e.update(x[m],i.ARRAY_BUFFER)}function f(p){let x=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let _=x!==null?x.array.length:m.array.length/3-1,v=m.count>=65535?Bo:Fo,M=new v(Math.ceil(_/3)*6,1),b=M.array;if(x!==null){let y=x.array;g=x.version;for(let S=0,N=0;S<_;S+=3){let C=y[S+0],O=y[S+1],R=y[S+2];b[N++]=C,b[N++]=O,b[N++]=O,b[N++]=R,b[N++]=R,b[N++]=C}}else{g=m.version;for(let y=0,S=0;y<_;y+=3){let N=y+0,C=y+1,O=y+2;b[S++]=N,b[S++]=C,b[S++]=C,b[S++]=O,b[S++]=O,b[S++]=N}}M.version=g;let w=r.get(p);w&&e.remove(w),r.set(p,M)}function d(p){let x=r.get(p);if(x){let m=p.index;m!==null&&x.version<m.version&&f(p)}else f(p);return r.get(p)}function u(){for(let p in s){let x=s[p].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:d,dispose:u}}function hv(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*o),t.update(d,n,1)}function c(f,d,u){u!==0&&(i.drawElementsInstanced(n,d,r,f*o,u),t.update(d,n,u))}function h(f,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,u);let x=0;for(let m=0;m<u;m++)x+=d[m];t.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function uv(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:Ye("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function fv(i,e,t){let n=new WeakMap,s=new It;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==f){let N=function(){y.dispose(),n.delete(a),a.removeEventListener("dispose",N)};d!==void 0&&d.texture.dispose();let u=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],v=0;u===!0&&(v=1),p===!0&&(v=2),x===!0&&(v=3);let M=a.attributes.position.count*v,b=1;M>e.maxTextureSize&&(b=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let w=new Float32Array(M*b*4*f),y=new Do(w,M,b,f);y.type=$n,y.needsUpdate=!0;let S=v*4;for(let C=0;C<f;C++){let O=m[C],R=g[C],D=_[C],P=M*b*4*C;for(let k=0;k<O.count;k++){let A=k*S;u===!0&&(s.fromBufferAttribute(O,k),w[P+A+0]=s.x,w[P+A+1]=s.y,w[P+A+2]=s.z,w[P+A+3]=0),p===!0&&(s.fromBufferAttribute(R,k),w[P+A+4]=s.x,w[P+A+5]=s.y,w[P+A+6]=s.z,w[P+A+7]=0),x===!0&&(s.fromBufferAttribute(D,k),w[P+A+8]=s.x,w[P+A+9]=s.y,w[P+A+10]=s.z,w[P+A+11]=D.itemSize===4?s.w:1)}}d={count:f,texture:y,size:new re(M,b)},n.set(a,d),a.addEventListener("dispose",N)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let u=0;for(let x=0;x<c.length;x++)u+=c[x];let p=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function dv(i,e,t,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,f=c.geometry,d=e.get(c,f);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return d}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var pv={[cu]:"LINEAR_TONE_MAPPING",[hu]:"REINHARD_TONE_MAPPING",[uu]:"CINEON_TONE_MAPPING",[ma]:"ACES_FILMIC_TONE_MAPPING",[du]:"AGX_TONE_MAPPING",[pu]:"NEUTRAL_TONE_MAPPING",[fu]:"CUSTOM_TONE_MAPPING"};function mv(i,e,t,n,s,r){let o=new Zn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Pt;h.setAttribute("position",new Je([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Je([0,2,0,0,2,0],2));let f=new Ll({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new et(h,f),u=new Ws(-1,1,1,-1,0,1),p=null,x=null,m=!1,g,_=null,v=[],M=!1;this.setSize=function(b,w){o.setSize(b,w),a!==null&&a.setSize(b,w),l!==null&&l.setSize(b,w);for(let y=0;y<v.length;y++){let S=v[y];S.setSize&&S.setSize(b,w)}},this.setEffects=function(b){v=b,M=v.length>0&&v[0].isRenderPass===!0;let w=o.width,y=o.height;v.length>0&&a===null&&(a=new Zn(w,y,{type:Si,depthBuffer:!1,stencilBuffer:!1}),l=new Zn(w,y,{type:Si,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&v.some(N=>N.needsDepthTexture===!0);S!==(o.depthTexture!==null)&&(S===!0&&c===null&&(c=new Ki(w,y),r===!0&&(c.format=ts,c.type=js)),o.dispose(),o.depthTexture=S?c:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S);for(let N=0;N<v.length;N++){let C=v[N];C.setSize&&C.setSize(w,y),S&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(b,w){if(m||b.toneMapping===Li&&v.length===0)return!1;if(_=w,w!==null){let y=w.width,S=w.height;(o.width!==y||o.height!==S)&&this.setSize(y,S)}return M===!1&&b.setRenderTarget(o),g=b.toneMapping,b.toneMapping=Li,!0},this.hasRenderPass=function(){return M},this.end=function(b,w){b.toneMapping=g,m=!0;let y=o,S=a;for(let N=0;N<v.length;N++){let C=v[N];C.enabled!==!1&&(C.render(b,S,y,w),C.needsSwap!==!1&&(y=S,S=S===a?l:a))}if(p!==b.outputColorSpace||x!==b.toneMapping){p=b.outputColorSpace,x=b.toneMapping,f.defines={},ft.getTransfer(p)===At&&(f.defines.SRGB_TRANSFER="");let N=pv[x];N&&(f.defines[N]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=y.texture,b.setRenderTarget(_),b.render(d,u),_=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),f.dispose()}}var Mm=new ln,Sm=new Ki(1,1),bm=new Xo(1),Tm=new Do,Em=new bl,wm=new Vo,em=[],tm=[],nm=new Float32Array(16),im=new Float32Array(9),sm=new Float32Array(4);function eo(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=em[s];if(r===void 0&&(r=new Float32Array(s),em[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function hn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function un(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Bc(i,e){let t=tm[e];t===void 0&&(t=new Int32Array(e),tm[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function gv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function xv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2fv(this.addr,e),un(t,e)}}function _v(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;i.uniform3fv(this.addr,e),un(t,e)}}function yv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4fv(this.addr,e),un(t,e)}}function vv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),un(t,e)}else{if(hn(t,n))return;sm.set(n),i.uniformMatrix2fv(this.addr,!1,sm),un(t,n)}}function Mv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),un(t,e)}else{if(hn(t,n))return;im.set(n),i.uniformMatrix3fv(this.addr,!1,im),un(t,n)}}function Sv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),un(t,e)}else{if(hn(t,n))return;nm.set(n),i.uniformMatrix4fv(this.addr,!1,nm),un(t,n)}}function bv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Tv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2iv(this.addr,e),un(t,e)}}function Ev(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;i.uniform3iv(this.addr,e),un(t,e)}}function wv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4iv(this.addr,e),un(t,e)}}function Av(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Rv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2uiv(this.addr,e),un(t,e)}}function Cv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;i.uniform3uiv(this.addr,e),un(t,e)}}function Iv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4uiv(this.addr,e),un(t,e)}}function kc(i){return i.version===0&&(i.compareFunction=Eu,i.needsUpdate=!0),i}function Pv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=kc(Sm):r=Mm,t.setTexture2D(e||r,s)}function Lv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Em,s)}function Nv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=kc(bm):r=wm,t.setTextureCube(e||r,s)}function Dv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Tm,s)}function Uv(i){switch(i){case 5126:return gv;case 35664:return xv;case 35665:return _v;case 35666:return yv;case 35674:return vv;case 35675:return Mv;case 35676:return Sv;case 5124:case 35670:return bv;case 35667:case 35671:return Tv;case 35668:case 35672:return Ev;case 35669:case 35673:return wv;case 5125:return Av;case 36294:return Rv;case 36295:return Cv;case 36296:return Iv;case 35678:case 36198:case 36298:case 36306:case 35682:return Pv;case 35679:case 36299:case 36307:return Lv;case 35680:case 36300:case 36308:case 36293:return Nv;case 36289:case 36303:case 36311:case 36292:return Dv}}function Ov(i,e){i.uniform1fv(this.addr,e)}function Fv(i,e){let t=eo(e,this.size,2);i.uniform2fv(this.addr,t)}function Bv(i,e){let t=eo(e,this.size,3);i.uniform3fv(this.addr,t)}function kv(i,e){let t=eo(e,this.size,4);i.uniform4fv(this.addr,t)}function zv(i,e){let t=eo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Hv(i,e){let t=eo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Gv(i,e){let t=eo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Vv(i,e){i.uniform1iv(this.addr,e)}function Xv(i,e){i.uniform2iv(this.addr,e)}function Wv(i,e){i.uniform3iv(this.addr,e)}function qv(i,e){i.uniform4iv(this.addr,e)}function Yv(i,e){i.uniform1uiv(this.addr,e)}function Zv(i,e){i.uniform2uiv(this.addr,e)}function Kv(i,e){i.uniform3uiv(this.addr,e)}function Jv(i,e){i.uniform4uiv(this.addr,e)}function $v(i,e,t){let n=this.cache,s=e.length,r=Bc(t,s);hn(n,r)||(i.uniform1iv(this.addr,r),un(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=kc(Sm):o=Mm;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function jv(i,e,t){let n=this.cache,s=e.length,r=Bc(t,s);hn(n,r)||(i.uniform1iv(this.addr,r),un(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Em,r[o])}function Qv(i,e,t){let n=this.cache,s=e.length,r=Bc(t,s);hn(n,r)||(i.uniform1iv(this.addr,r),un(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=kc(bm):o=wm;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function eM(i,e,t){let n=this.cache,s=e.length,r=Bc(t,s);hn(n,r)||(i.uniform1iv(this.addr,r),un(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Tm,r[o])}function tM(i){switch(i){case 5126:return Ov;case 35664:return Fv;case 35665:return Bv;case 35666:return kv;case 35674:return zv;case 35675:return Hv;case 35676:return Gv;case 5124:case 35670:return Vv;case 35667:case 35671:return Xv;case 35668:case 35672:return Wv;case 35669:case 35673:return qv;case 5125:return Yv;case 36294:return Zv;case 36295:return Kv;case 36296:return Jv;case 35678:case 36198:case 36298:case 36306:case 35682:return $v;case 35679:case 36299:case 36307:return jv;case 35680:case 36300:case 36308:case 36293:return Qv;case 36289:case 36303:case 36311:case 36292:return eM}}var Xu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Uv(t.type)}},Wu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=tM(t.type)}},qu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Gu=/(\w+)(\])?(\[|\.)?/g;function rm(i,e){i.seq.push(e),i.map[e.id]=e}function nM(i,e,t){let n=i.name,s=n.length;for(Gu.lastIndex=0;;){let r=Gu.exec(n),o=Gu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){rm(t,c===void 0?new Xu(a,i,e):new Wu(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new qu(a),rm(t,f)),t=f}}}var jr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);nM(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function om(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var iM=37297,sM=0;function rM(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var am=new $e;function oM(i){ft._getMatrix(am,ft.workingColorSpace,i);let e=`mat3( ${am.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(i)){case Lo:return[e,"LinearTransferOETF"];case At:return[e,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function lm(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+rM(i.getShaderSource(e),a)}else return r}function aM(i,e){let t=oM(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var lM={[cu]:"Linear",[hu]:"Reinhard",[uu]:"Cineon",[ma]:"ACESFilmic",[du]:"AgX",[pu]:"Neutral",[fu]:"Custom"};function cM(i,e){let t=lM[e];return t===void 0?(Oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Oc=new L;function hM(){ft.getLuminanceCoefficients(Oc);let i=Oc.x.toFixed(4),e=Oc.y.toFixed(4),t=Oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ta).join(`
`)}function fM(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function dM(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ta(i){return i!==""}function cm(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function hm(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var pM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yu(i){return i.replace(pM,mM)}function mM(i,e){let t=ht[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Yu(t)}var gM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function um(i){return i.replace(gM,xM)}function xM(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function fm(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var _M={[Ys]:"SHADOWMAP_TYPE_PCF",[Wr]:"SHADOWMAP_TYPE_VSM"};function yM(i){return _M[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var vM={[Yr]:"ENVMAP_MODE_REFRACTION"};function MM(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":vM[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var SM={[pa]:"ENVMAP_BLENDING_MULTIPLY",[bp]:"ENVMAP_BLENDING_MIX",[Tp]:"ENVMAP_BLENDING_ADD"};function bM(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":SM[i.combine]||"ENVMAP_BLENDING_NONE"}function TM(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=yM(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=MM(t),f=bM(t),d=uM(t),u=fM(r),p=s.createProgram(),x,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(Ta).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(Ta).join(`
`),m.length>0&&(m+=`
`)):(x=[fm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ta).join(`
`),m=[fm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Li?"#define TONE_MAPPING":"",t.toneMapping!==Li?ht.tonemapping_pars_fragment:"",t.toneMapping!==Li?cM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,aM("linearToOutputTexel",t.outputColorSpace),hM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ta).join(`
`)),o=Yu(o),o=cm(o,t),o=hm(o,t),a=Yu(a),a=cm(a,t),a=hm(a,t),o=um(o),a=um(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===Au?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Au?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=g+x+o,v=g+m+a,M=om(s,s.VERTEX_SHADER,_),b=om(s,s.FRAGMENT_SHADER,v);s.attachShader(p,M),s.attachShader(p,b),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function w(C){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(p)||"",R=s.getShaderInfoLog(M)||"",D=s.getShaderInfoLog(b)||"",P=O.trim(),k=R.trim(),A=D.trim(),U=!0,J=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(U=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,M,b);else{let G=lm(s,M,"vertex"),Y=lm(s,b,"fragment");Ye("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+P+`
`+G+`
`+Y)}else P!==""?Oe("WebGLProgram: Program Info Log:",P):(k===""||A==="")&&(J=!1);J&&(C.diagnostics={runnable:U,programLog:P,vertexShader:{log:k,prefix:x},fragmentShader:{log:A,prefix:m}})}s.deleteShader(M),s.deleteShader(b),y=new jr(s,p),S=dM(s,p)}let y;this.getUniforms=function(){return y===void 0&&w(this),y};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(p,iM)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sM++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=b,this}var EM=0,Zu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ku(e),t.set(e,n)),n}},Ku=class{constructor(e){this.id=EM++,this.code=e,this.usedTimes=0}};function wM(i){return i===vs||i===va||i===Ma}function AM(i,e,t,n,s,r){let o=new Uo,a=new Zu,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(y){return l.add(y),y===0?"uv":`uv${y}`}function p(y,S,N,C,O,R){let D=C.fog,P=O.geometry,k=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?C.environment:null,A=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,U=e.get(y.envMap||k,A),J=d[y.type],G=n.precision;y.precision!==null&&(G=n.getMaxPrecision(y.precision),G!==y.precision&&Oe("WebGLProgram.getParameters:",y.precision,"not supported, using",G,"instead."));let Y=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,j=Y!==void 0?Y.length:0,oe=0;P.morphAttributes.position!==void 0&&(oe=1),P.morphAttributes.normal!==void 0&&(oe=2),P.morphAttributes.color!==void 0&&(oe=3);let Re,Z,fe,Ae;if(J){let be=Di[J];Re=be.vertexShader,Z=be.fragmentShader}else{Re=y.vertexShader,Z=y.fragmentShader;let be=a.getVertexShaderStage(y),Ct=a.getFragmentShaderStage(y);a.update(y,be,Ct),fe=be.id,Ae=Ct.id}let ze=i.getRenderTarget(),Se=i.state.buffers.depth.getReversed(),Ve=O.isInstancedMesh===!0,kt=O.isBatchedMesh===!0,qe=!!y.map,ut=!!y.matcap,gt=!!U,ie=gt&&U.isPMREMTexture===!0,de=!!y.aoMap,ce=!!y.lightMap,we=!!y.bumpMap&&y.wireframe===!1,ve=!!y.normalMap,st=!!y.displacementMap,Fe=!!y.emissiveMap,xt=!!y.metalnessMap,_t=!!y.roughnessMap,bt=y.anisotropy>0,z=y.clearcoat>0,tn=y.diffuseRoughness>0,mt=y.dispersion>0,Nt=y.retroreflectivity>0,xe=y.iridescence>0,$t=y.sheen>0,Xe=y.transmission>0,Ke=bt&&!!y.anisotropyMap,I=z&&!!y.clearcoatMap,T=z&&!!y.clearcoatNormalMap,X=z&&!!y.clearcoatRoughnessMap,se=tn&&!!y.diffuseRoughnessMap,ne=xe&&!!y.iridescenceMap,he=xe&&!!y.iridescenceThicknessMap,_e=$t&&!!y.sheenColorMap,$=$t&&!!y.sheenRoughnessMap,Q=!!y.specularMap,pe=!!y.specularColorMap,F=!!y.specularIntensityMap,te=Xe&&!!y.transmissionMap,K=Xe&&!!y.thicknessMap,me=!!y.gradientMap,le=!!y.alphaMap,ue=y.alphaTest>0,Be=!!y.alphaHash,lt=!!y.extensions,ae=Li;y.toneMapped&&(ze===null||ze.isXRRenderTarget===!0)&&(ae=i.toneMapping);let Ge=ie?U.isCompressedCubeTexture?U.image[0].mipmaps:U.mipmaps:null,ot={shaderID:J,shaderType:y.type,shaderName:y.name,vertexShader:Re,fragmentShader:Z,defines:y.defines,customVertexShaderID:fe,customFragmentShaderID:Ae,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:G,batching:kt,batchingColor:kt&&O._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&O.instanceColor!==null,instancingMorph:Ve&&O.morphTexture!==null,outputColorSpace:ze===null?i.outputColorSpace:ze.isXRRenderTarget===!0?ze.texture.colorSpace:ft.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:qe,matcap:ut,envMap:gt,envMapMode:gt&&U.mapping,envMapPMREM:ie,envMapMaxLod:ie?Ge.length-1:null,envMapSize:ie?Ge[0].width:null,aoMap:de,lightMap:ce,bumpMap:we,normalMap:ve,displacementMap:st,emissiveMap:Fe,normalMapObjectSpace:ve&&y.normalMapType===Ip,normalMapTangentSpace:ve&&y.normalMapType===$r,packedNormalMap:ve&&y.normalMapType===$r&&wM(y.normalMap.format),metalnessMap:xt,roughnessMap:_t,anisotropy:bt,anisotropyMap:Ke,clearcoat:z,clearcoatMap:I,clearcoatNormalMap:T,clearcoatRoughnessMap:X,diffuseRoughness:tn,diffuseRoughnessMap:se,dispersion:mt,retroreflection:Nt,iridescence:xe,iridescenceMap:ne,iridescenceThicknessMap:he,sheen:$t,sheenColorMap:_e,sheenRoughnessMap:$,specularMap:Q,specularColorMap:pe,specularIntensityMap:F,transmission:Xe,transmissionMap:te,thicknessMap:K,gradientMap:me,opaque:y.transparent===!1&&y.blending===qr&&y.alphaToCoverage===!1,alphaMap:le,alphaTest:ue,alphaHash:Be,combine:y.combine,mapUv:qe&&u(y.map.channel),aoMapUv:de&&u(y.aoMap.channel),lightMapUv:ce&&u(y.lightMap.channel),bumpMapUv:we&&u(y.bumpMap.channel),normalMapUv:ve&&u(y.normalMap.channel),displacementMapUv:st&&u(y.displacementMap.channel),emissiveMapUv:Fe&&u(y.emissiveMap.channel),metalnessMapUv:xt&&u(y.metalnessMap.channel),roughnessMapUv:_t&&u(y.roughnessMap.channel),anisotropyMapUv:Ke&&u(y.anisotropyMap.channel),clearcoatMapUv:I&&u(y.clearcoatMap.channel),clearcoatNormalMapUv:T&&u(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&u(y.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:se&&u(y.diffuseRoughnessMap.channel),iridescenceMapUv:ne&&u(y.iridescenceMap.channel),iridescenceThicknessMapUv:he&&u(y.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&u(y.sheenColorMap.channel),sheenRoughnessMapUv:$&&u(y.sheenRoughnessMap.channel),specularMapUv:Q&&u(y.specularMap.channel),specularColorMapUv:pe&&u(y.specularColorMap.channel),specularIntensityMapUv:F&&u(y.specularIntensityMap.channel),transmissionMapUv:te&&u(y.transmissionMap.channel),thicknessMapUv:K&&u(y.thicknessMap.channel),alphaMapUv:le&&u(y.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(ve||bt),vertexNormals:!!P.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!P.attributes.uv&&(qe||le),fog:!!D,useFog:y.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||P.attributes.normal===void 0&&ve===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Se,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:oe,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:R.filter(be=>be.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:ae,decodeVideoTexture:qe&&y.map.isVideoTexture===!0&&ft.getTransfer(y.map.colorSpace)===At,decodeVideoTextureEmissive:Fe&&y.emissiveMap.isVideoTexture===!0&&ft.getTransfer(y.emissiveMap.colorSpace)===At,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===bn,flipSided:y.side===Sn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:lt&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&y.extensions.multiDraw===!0||kt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ot.vertexUv1s=l.has(1),ot.vertexUv2s=l.has(2),ot.vertexUv3s=l.has(3),l.clear(),ot}function x(y){let S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(let N in y.defines)S.push(N),S.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(m(S,y),g(S,y),S.push(i.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function m(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapPMREM),y.push(S.envMapMaxLod),y.push(S.envMapSize),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.diffuseRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.numSunLights),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numSunLightShadows),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.numLightProbeGrids),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function g(y,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.diffuseRoughness&&o.enable(25),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function _(y){let S=d[y.type],N;if(S){let C=Di[S];N=Yp.clone(C.uniforms)}else N=y.uniforms;return N}function v(y,S){let N=h.get(S);return N!==void 0?++N.usedTimes:(N=new TM(i,S,y,s),c.push(N),h.set(S,N)),N}function M(y){if(--y.usedTimes===0){let S=c.indexOf(y);c[S]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function b(y){a.remove(y)}function w(){a.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:_,acquireProgram:v,releaseProgram:M,releaseShaderCache:b,programs:c,dispose:w}}function RM(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function CM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function dm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function pm(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d){let u=0;return d.isInstancedMesh&&(u+=2),d.isSkinnedMesh&&(u+=1),u}function a(d,u,p,x,m,g){let _=i[e];return _===void 0?(_={id:d.id,object:d,geometry:u,material:p,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:g},i[e]=_):(_.id=d.id,_.object=d,_.geometry=u,_.material=p,_.materialVariant=o(d),_.groupOrder=x,_.renderOrder=d.renderOrder,_.z=m,_.group=g),e++,_}function l(d,u,p,x,m,g,_){_.reversedDepth===!0&&(m=-m);let v=a(d,u,p,x,m,g);p.transmission>0?n.push(v):p.transparent===!0?s.push(v):t.push(v)}function c(d,u,p,x,m,g){let _=a(d,u,p,x,m,g);p.transmission>0?n.unshift(_):p.transparent===!0?s.unshift(_):t.unshift(_)}function h(d,u){t.length>1&&t.sort(d||CM),n.length>1&&n.sort(u||dm),s.length>1&&s.sort(u||dm)}function f(){for(let d=e,u=i.length;d<u;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function IM(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new pm,i.set(n,[o])):s>=r.length?(o=new pm,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function PM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new Me};break;case"SpotLight":t={position:new L,direction:new L,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":t={color:new Me,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function LM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var NM=0;function DM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function UM(i){let e=new PM,t=LM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let s=new L,r=new We,o=new We;function a(c){let h=0,f=0,d=0;for(let R=0;R<9;R++)n.probe[R].set(0,0,0);let u=0,p=0,x=0,m=0,g=0,_=0,v=0,M=0,b=0,w=0,y=0,S=0,N=0,C=0;c.sort(DM);for(let R=0,D=c.length;R<D;R++){let P=c[R],k=P.color,A=P.intensity,U=P.distance,J=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===vs?J=P.shadow.map.texture:J=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=k.r*A,f+=k.g*A,d+=k.b*A;else if(P.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(P.sh.coefficients[G],A);C++}else if(P.isSunLight){let G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Y=P.shadow,j=t.get(P);j.shadowIntensity=Y.intensity,j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),n.sunShadow[p]=j,n.sunShadowMap[p]=J;let oe=Y.getViewportCount();for(let Re=0;Re<oe;Re++)n.sunShadowMatrix[x+Re]=Y.getMatrix(Re),n.sunShadowCascade[x+Re]=Y._cascadeData[Re];x+=oe,p++}n.sun[u]=G,u++}else if(P.isDirectionalLight){let G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Y=P.shadow,j=t.get(P);j.shadowIntensity=Y.intensity,j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,n.directionalShadow[m]=j,n.directionalShadowMap[m]=J,n.directionalShadowMatrix[m]=P.shadow.matrix,b++}n.directional[m]=G,m++}else if(P.isSpotLight){let G=e.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(k).multiplyScalar(A),G.distance=U,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,n.spot[_]=G;let Y=P.shadow;if(P.map&&(n.spotLightMap[S]=P.map,S++,Y.updateMatrices(P),P.castShadow&&N++),n.spotLightMatrix[_]=Y.matrix,P.castShadow){let j=t.get(P);j.shadowIntensity=Y.intensity,j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,n.spotShadow[_]=j,n.spotShadowMap[_]=J,y++}_++}else if(P.isRectAreaLight){let G=e.get(P);G.color.copy(k).multiplyScalar(A),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),n.rectArea[v]=G,v++}else if(P.isPointLight){let G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){let Y=P.shadow,j=t.get(P);j.shadowIntensity=Y.intensity,j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,j.shadowCameraNear=Y.camera.near,j.shadowCameraFar=Y.camera.far,n.pointShadow[g]=j,n.pointShadowMap[g]=J,n.pointShadowMatrix[g]=P.shadow.matrix,w++}n.point[g]=G,g++}else if(P.isHemisphereLight){let G=e.get(P);G.skyColor.copy(P.color).multiplyScalar(A),G.groundColor.copy(P.groundColor).multiplyScalar(A),n.hemi[M]=G,M++}}v>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Te.LTC_FLOAT_1,n.rectAreaLTC2=Te.LTC_FLOAT_2):(n.rectAreaLTC1=Te.LTC_HALF_1,n.rectAreaLTC2=Te.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;let O=n.hash;(O.sunLength!==u||O.directionalLength!==m||O.pointLength!==g||O.spotLength!==_||O.rectAreaLength!==v||O.hemiLength!==M||O.numSunShadows!==p||O.numDirectionalShadows!==b||O.numPointShadows!==w||O.numSpotShadows!==y||O.numSpotMaps!==S||O.numLightProbes!==C)&&(n.sun.length=u,n.directional.length=m,n.spot.length=_,n.rectArea.length=v,n.point.length=g,n.hemi.length=M,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=y,n.spotShadowMap.length=y,n.spotLightMatrix.length=y+S-N,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=C,O.sunLength=u,O.directionalLength=m,O.pointLength=g,O.spotLength=_,O.rectAreaLength=v,O.hemiLength=M,O.numSunShadows=p,O.numDirectionalShadows=b,O.numPointShadows=w,O.numSpotShadows=y,O.numSpotMaps=S,O.numLightProbes=C,n.version=NM++)}function l(c,h){let f=0,d=0,u=0,p=0,x=0,m=0,g=h.matrixWorldInverse;for(let _=0,v=c.length;_<v;_++){let M=c[_];if(M.isSunLight){let b=n.sun[f];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(g),f++}else if(M.isDirectionalLight){let b=n.directional[d];b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),d++}else if(M.isSpotLight){let b=n.spot[p];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),p++}else if(M.isRectAreaLight){let b=n.rectArea[x];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(g),o.identity(),r.copy(M.matrixWorld),r.premultiply(g),o.extractRotation(r),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(M.isPointLight){let b=n.point[u];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(g),u++}else if(M.isHemisphereLight){let b=n.hemi[m];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function mm(i){let e=new UM(i),t=[],n=[],s=[];function r(f){h.camera=f,t.length=0,n.length=0,s.length=0}function o(f){f.isLightProbeGrid?s.push(f):t.push(f)}function a(f){n.push(f)}function l(){e.setup(t),s.sort((f,d)=>f.priority-d.priority||f.id-d.id)}function c(f){e.setupView(t,f)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function OM(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new mm(i),e.set(s,[a])):r>=o.length?(a=new mm(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var FM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BM=`uniform sampler2D shadow_pass;
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
}`,kM=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],zM=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],gm=new We,ba=new L,Vu=new L;function HM(i,e,t){let n=new gs,s=new re,r=new re,o=new It,a=new Nl,l=new Dl,c={},h=t.maxTextureSize,f={[Pi]:Sn,[Sn]:Pi,[bn]:bn},d=new ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:FM,fragmentShader:BM}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let p=new Pt;p.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new et(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ys;let g=this.type;this.render=function(w,y,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===sp&&(Oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ys);let N=i.getRenderTarget(),C=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),R=i.state;R.setBlending(Zs),R.buffers.depth.getReversed()===!0?R.buffers.color.setClear(0,0,0,0):R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);let D=g!==this.type;D&&y.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(k=>k.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,k=w.length;P<k;P++){let A=w[P],U=A.shadow;if(U===void 0){Oe("WebGLShadowMap:",A,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);let J=U.getFrameExtents();s.multiply(J),r.copy(U.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/J.x),s.x=r.x*J.x,U.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/J.y),s.y=r.y*J.y,U.mapSize.y=r.y));let G=i.state.buffers.depth.getReversed();if(U.camera._reversedDepth=G,U.map===null||D===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===Wr){if(A.isPointLight){Oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new Zn(s.x,s.y,{format:vs,type:Si,minFilter:an,magFilter:an,generateMipmaps:!1}),U.map.texture.name=A.name+".shadowMap",U.map.depthTexture=new Ki(s.x,s.y,$n),U.map.depthTexture.name=A.name+".shadowMapDepth",U.map.depthTexture.format=Yi,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Qt,U.map.depthTexture.magFilter=Qt}else A.isPointLight?(U.map=new Ea(s.x),U.map.depthTexture=new Xo(s.x,Mi)):(U.map=new Zn(s.x,s.y),U.map.depthTexture=new Ki(s.x,s.y,Mi)),U.map.depthTexture.name=A.name+".shadowMap",U.map.depthTexture.format=Yi,this.type===Ys?(U.map.depthTexture.compareFunction=G?Tu:bu,U.map.depthTexture.minFilter=an,U.map.depthTexture.magFilter=an):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Qt,U.map.depthTexture.magFilter=Qt);U.camera.updateProjectionMatrix()}U.map.isWebGLCubeRenderTarget!==!0&&(U.map.width!==s.x||U.map.height!==s.y)&&U.map.setSize(s.x,s.y);let Y=U.map.isWebGLCubeRenderTarget?6:U.getViewportCount();A.isPointLight!==!0&&U.updateMatrices(A,S);let j=(U.camera.layers.mask&4294967294)!==0?U.camera.layers:S.layers;for(let oe=0;oe<Y;oe++){let Re=U.getCamera(oe);if(A.isPointLight){let Z=U.camera,fe=U.matrix,Ae=A.distance||Z.far;Ae!==Z.far&&(Z.far=Ae,Z.updateProjectionMatrix()),ba.setFromMatrixPosition(A.matrixWorld),Z.position.copy(ba),Vu.copy(Z.position),Vu.add(kM[oe]),Z.up.copy(zM[oe]),Z.lookAt(Vu),Z.updateMatrixWorld(),fe.makeTranslation(-ba.x,-ba.y,-ba.z),gm.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),U._frustum.setFromProjectionMatrix(gm,Z.coordinateSystem,Z.reversedDepth)}if(U.map.isWebGLCubeRenderTarget)i.setRenderTarget(U.map,oe),i.clear();else{oe===0&&(i.setRenderTarget(U.map),i.clear());let Z=U.getViewport(oe);o.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),R.viewport(o)}n=U.getFrustum(oe),M(y,S,Re,A,j,this.type)}U.isPointLightShadow!==!0&&this.type===Wr&&_(U,S),U.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(N,C,O)};function _(w,y){let S=e.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,u.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),w.mapPass===null?w.mapPass=new Zn(s.x,s.y,{format:vs,type:Si}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(y,null,S,d,x,null),u.uniforms.shadow_pass.value=w.mapPass.texture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(y,null,S,u,x,null)}function v(w,y,S,N){let C=null,O=S.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(O!==void 0)C=O;else if(C=S.isPointLight===!0?l:a,i.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){let R=C.uuid,D=y.uuid,P=c[R];P===void 0&&(P={},c[R]=P);let k=P[D];k===void 0&&(k=C.clone(),P[D]=k,y.addEventListener("dispose",b)),C=k}if(C.visible=y.visible,C.wireframe=y.wireframe,N===Wr?C.side=y.shadowSide!==null?y.shadowSide:y.side:C.side=y.shadowSide!==null?y.shadowSide:f[y.side],C.alphaMap=y.alphaMap,C.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,C.map=y.map,C.clipShadows=y.clipShadows,C.clippingPlanes=y.clippingPlanes,C.clipIntersection=y.clipIntersection,C.displacementMap=y.displacementMap,C.displacementScale=y.displacementScale,C.displacementBias=y.displacementBias,C.wireframeLinewidth=y.wireframeLinewidth,C.linewidth=y.linewidth,S.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let R=i.properties.get(C);R.light=S}return C}function M(w,y,S,N,C,O){if(w.visible===!1)return;if(w.layers.test(C)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&O===Wr)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,w.matrixWorld);let P=e.update(w),k=w.material;if(Array.isArray(k)){let A=P.groups;for(let U=0,J=A.length;U<J;U++){let G=A[U],Y=k[G.materialIndex];if(Y&&Y.visible){let j=v(w,Y,N,O);w.onBeforeShadow(i,w,y,S,P,j,G),i.renderBufferDirect(S,null,P,j,w,G),w.onAfterShadow(i,w,y,S,P,j,G)}}}else if(k.visible){let A=v(w,k,N,O);w.onBeforeShadow(i,w,y,S,P,A,null),i.renderBufferDirect(S,null,P,A,w,null),w.onAfterShadow(i,w,y,S,P,A,null)}}let D=w.children;for(let P=0,k=D.length;P<k;P++)M(D[P],y,S,N,C,O)}function b(w){w.target.removeEventListener("dispose",b);for(let S in c){let N=c[S],C=w.target.uuid;C in N&&(N[C].dispose(),delete N[C])}}}function GM(i,e){function t(){let F=!1,te=new It,K=null,me=new It(0,0,0,0);return{setMask:function(le){K!==le&&!F&&(i.colorMask(le,le,le,le),K=le)},setLocked:function(le){F=le},setClear:function(le,ue,Be,lt,ae){ae===!0&&(le*=lt,ue*=lt,Be*=lt),te.set(le,ue,Be,lt),me.equals(te)===!1&&(i.clearColor(le,ue,Be,lt),me.copy(te))},reset:function(){F=!1,K=null,me.set(-1,0,0,0)}}}function n(){let F=!1,te=!1,K=null,me=null,le=null;return{setReversed:function(ue){if(te!==ue){let Be=e.get("EXT_clip_control");ue?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),te=ue;let lt=le;le=null,this.setClear(lt)}},getReversed:function(){return te},setTest:function(ue){ue?Se(i.DEPTH_TEST):Ve(i.DEPTH_TEST)},setMask:function(ue){K!==ue&&!F&&(i.depthMask(ue),K=ue)},setFunc:function(ue){if(te&&(ue=zp[ue]),me!==ue){switch(ue){case pl:i.depthFunc(i.NEVER);break;case ml:i.depthFunc(i.ALWAYS);break;case gl:i.depthFunc(i.LESS);break;case wr:i.depthFunc(i.LEQUAL);break;case xl:i.depthFunc(i.EQUAL);break;case _l:i.depthFunc(i.GEQUAL);break;case yl:i.depthFunc(i.GREATER);break;case vl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}me=ue}},setLocked:function(ue){F=ue},setClear:function(ue){le!==ue&&(le=ue,te&&(ue=1-ue),i.clearDepth(ue))},reset:function(){F=!1,K=null,me=null,le=null,te=!1}}}function s(){let F=!1,te=null,K=null,me=null,le=null,ue=null,Be=null,lt=null,ae=null;return{setTest:function(Ge){F||(Ge?Se(i.STENCIL_TEST):Ve(i.STENCIL_TEST))},setMask:function(Ge){te!==Ge&&!F&&(i.stencilMask(Ge),te=Ge)},setFunc:function(Ge,ot,be){(K!==Ge||me!==ot||le!==be)&&(i.stencilFunc(Ge,ot,be),K=Ge,me=ot,le=be)},setOp:function(Ge,ot,be){(ue!==Ge||Be!==ot||lt!==be)&&(i.stencilOp(Ge,ot,be),ue=Ge,Be=ot,lt=be)},setLocked:function(Ge){F=Ge},setClear:function(Ge){ae!==Ge&&(i.clearStencil(Ge),ae=Ge)},reset:function(){F=!1,te=null,K=null,me=null,le=null,ue=null,Be=null,lt=null,ae=null}}}let r=new t,o=new n,a=new s,l={},c=new WeakMap,h={},f={},d={},u=new WeakMap,p=[],x=null,m=!1,g=null,_=null,v=null,M=null,b=null,w=null,y=null,S=new Me(0,0,0),N=0,C=!1,O=null,R=null,D=null,P=null,k=null,A=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,J=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(G)[1]),U=J>=1):G.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),U=J>=2);let Y=null,j={},oe=i.getParameter(i.SCISSOR_BOX),Re=i.getParameter(i.VIEWPORT),Z=new It().fromArray(oe),fe=new It().fromArray(Re);function Ae(F,te,K,me){let le=new Uint8Array(4),ue=i.createTexture();i.bindTexture(F,ue),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Be=0;Be<K;Be++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(te,0,i.RGBA,1,1,me,0,i.RGBA,i.UNSIGNED_BYTE,le):i.texImage2D(te+Be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,le);return ue}let ze={};ze[i.TEXTURE_2D]=Ae(i.TEXTURE_2D,i.TEXTURE_2D,1),ze[i.TEXTURE_CUBE_MAP]=Ae(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ze[i.TEXTURE_2D_ARRAY]=Ae(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ze[i.TEXTURE_3D]=Ae(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Se(i.DEPTH_TEST),o.setFunc(wr),we(!1),ve(su),Se(i.CULL_FACE),de(Zs);function Se(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function Ve(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function kt(F,te){return d[F]!==te?(i.bindFramebuffer(F,te),d[F]=te,F===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=te),F===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=te),!0):!1}function qe(F,te){let K=p,me=!1;if(F){K=u.get(te),K===void 0&&(K=[],u.set(te,K));let le=F.textures;if(K.length!==le.length||K[0]!==i.COLOR_ATTACHMENT0){for(let ue=0,Be=le.length;ue<Be;ue++)K[ue]=i.COLOR_ATTACHMENT0+ue;K.length=le.length,me=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,me=!0);me&&i.drawBuffers(K)}function ut(F){return x!==F?(i.useProgram(F),x=F,!0):!1}let gt={[Ks]:i.FUNC_ADD,[op]:i.FUNC_SUBTRACT,[ap]:i.FUNC_REVERSE_SUBTRACT};gt[lp]=i.MIN,gt[cp]=i.MAX;let ie={[hp]:i.ZERO,[up]:i.ONE,[fp]:i.SRC_COLOR,[au]:i.SRC_ALPHA,[_p]:i.SRC_ALPHA_SATURATE,[gp]:i.DST_COLOR,[pp]:i.DST_ALPHA,[dp]:i.ONE_MINUS_SRC_COLOR,[lu]:i.ONE_MINUS_SRC_ALPHA,[xp]:i.ONE_MINUS_DST_COLOR,[mp]:i.ONE_MINUS_DST_ALPHA,[yp]:i.CONSTANT_COLOR,[vp]:i.ONE_MINUS_CONSTANT_COLOR,[Mp]:i.CONSTANT_ALPHA,[Sp]:i.ONE_MINUS_CONSTANT_ALPHA};function de(F,te,K,me,le,ue,Be,lt,ae,Ge){if(F===Zs){m===!0&&(Ve(i.BLEND),m=!1);return}if(m===!1&&(Se(i.BLEND),m=!0),F!==rp){if(F!==g||Ge!==C){if((_!==Ks||b!==Ks)&&(i.blendEquation(i.FUNC_ADD),_=Ks,b=Ks),Ge)switch(F){case qr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fn:i.blendFunc(i.ONE,i.ONE);break;case ru:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ou:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ye("WebGLState: Invalid blending: ",F);break}else switch(F){case qr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ru:Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ou:Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ye("WebGLState: Invalid blending: ",F);break}v=null,M=null,w=null,y=null,S.set(0,0,0),N=0,g=F,C=Ge}return}le=le||te,ue=ue||K,Be=Be||me,(te!==_||le!==b)&&(i.blendEquationSeparate(gt[te],gt[le]),_=te,b=le),(K!==v||me!==M||ue!==w||Be!==y)&&(i.blendFuncSeparate(ie[K],ie[me],ie[ue],ie[Be]),v=K,M=me,w=ue,y=Be),(lt.equals(S)===!1||ae!==N)&&(i.blendColor(lt.r,lt.g,lt.b,ae),S.copy(lt),N=ae),g=F,C=!1}function ce(F,te){F.side===bn?Ve(i.CULL_FACE):Se(i.CULL_FACE);let K=F.side===Sn;te&&(K=!K),we(K),F.blending===qr&&F.transparent===!1?de(Zs):de(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let me=F.stencilWrite;a.setTest(me),me&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Fe(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Se(i.SAMPLE_ALPHA_TO_COVERAGE):Ve(i.SAMPLE_ALPHA_TO_COVERAGE)}function we(F){O!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),O=F)}function ve(F){F!==np?(Se(i.CULL_FACE),F!==R&&(F===su?i.cullFace(i.BACK):F===ip?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ve(i.CULL_FACE),R=F}function st(F){F!==D&&(U&&i.lineWidth(F),D=F)}function Fe(F,te,K){F?(Se(i.POLYGON_OFFSET_FILL),(P!==te||k!==K)&&(P=te,k=K,o.getReversed()&&(te=-te,K=-K),i.polygonOffset(te,K))):Ve(i.POLYGON_OFFSET_FILL)}function xt(F){F?Se(i.SCISSOR_TEST):Ve(i.SCISSOR_TEST)}function _t(F){F===void 0&&(F=i.TEXTURE0+A-1),Y!==F&&(i.activeTexture(F),Y=F)}function bt(F,te,K){K===void 0&&(Y===null?K=i.TEXTURE0+A-1:K=Y);let me=j[K];me===void 0&&(me={type:void 0,texture:void 0},j[K]=me),(me.type!==F||me.texture!==te)&&(Y!==K&&(i.activeTexture(K),Y=K),i.bindTexture(F,te||ze[F]),me.type=F,me.texture=te)}function z(){let F=j[Y];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function tn(){try{i.compressedTexImage2D(...arguments)}catch(F){Ye("WebGLState:",F)}}function mt(){try{i.compressedTexImage3D(...arguments)}catch(F){Ye("WebGLState:",F)}}function Nt(){try{i.texSubImage2D(...arguments)}catch(F){Ye("WebGLState:",F)}}function xe(){try{i.texSubImage3D(...arguments)}catch(F){Ye("WebGLState:",F)}}function $t(){try{i.compressedTexSubImage2D(...arguments)}catch(F){Ye("WebGLState:",F)}}function Xe(){try{i.compressedTexSubImage3D(...arguments)}catch(F){Ye("WebGLState:",F)}}function Ke(){try{i.texStorage2D(...arguments)}catch(F){Ye("WebGLState:",F)}}function I(){try{i.texStorage3D(...arguments)}catch(F){Ye("WebGLState:",F)}}function T(){try{i.texImage2D(...arguments)}catch(F){Ye("WebGLState:",F)}}function X(){try{i.texImage3D(...arguments)}catch(F){Ye("WebGLState:",F)}}function se(F){return f[F]!==void 0?f[F]:i.getParameter(F)}function ne(F,te){f[F]!==te&&(i.pixelStorei(F,te),f[F]=te)}function he(F){Z.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Z.copy(F))}function _e(F){fe.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),fe.copy(F))}function $(F,te){let K=c.get(te);K===void 0&&(K=new WeakMap,c.set(te,K));let me=K.get(F);me===void 0&&(me=i.getUniformBlockIndex(te,F.name),i.uniformBlockBinding(te,me,me),K.set(F,me))}function Q(F,te,K){let le=c.get(te).get(F);l[le]!==K&&(i.bindBufferBase(i.UNIFORM_BUFFER,le,K),l[le]=K)}function pe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},Y=null,j={},d={},l={},u=new WeakMap,p=[],x=null,m=!1,g=null,_=null,v=null,M=null,b=null,w=null,y=null,S=new Me(0,0,0),N=0,C=!1,O=null,R=null,D=null,P=null,k=null,Z.set(0,0,i.canvas.width,i.canvas.height),fe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Se,disable:Ve,bindFramebuffer:kt,drawBuffers:qe,useProgram:ut,setBlending:de,setMaterial:ce,setFlipSided:we,setCullFace:ve,setLineWidth:st,setPolygonOffset:Fe,setScissorTest:xt,activeTexture:_t,bindTexture:bt,unbindTexture:z,compressedTexImage2D:tn,compressedTexImage3D:mt,texImage2D:T,texImage3D:X,pixelStorei:ne,getParameter:se,updateUBOMapping:$,uniformBlockBinding:Q,texStorage2D:Ke,texStorage3D:I,texSubImage2D:Nt,texSubImage3D:xe,compressedTexSubImage2D:$t,compressedTexSubImage3D:Xe,scissor:he,viewport:_e,reset:pe}}function VM(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new re,h=new WeakMap,f=new Set,d,u=new WeakMap,p=new Set,x=new FinalizationRegistry(I=>p.delete(I)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,T){return m?new OffscreenCanvas(I,T):Cr("canvas")}function _(I,T,X){let se=1,ne=Ke(I);if((ne.width>X||ne.height>X)&&(se=X/Math.max(ne.width,ne.height)),se<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let he=Math.floor(se*ne.width),_e=Math.floor(se*ne.height);d===void 0&&(d=g(he,_e));let $=T?g(he,_e):d;return $.width=he,$.height=_e,$.getContext("2d").drawImage(I,0,0,he,_e),Oe("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+he+"x"+_e+")."),$}else return"data"in I&&Oe("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),I;return I}function v(I){return I.generateMipmaps}function M(I){i.generateMipmap(I)}function b(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(I,T,X,se,ne,he=!1){if(I!==null){if(i[I]!==void 0)return i[I];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let _e;se&&(_e=e.get("EXT_texture_norm16"),_e||Oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=T;if(T===i.RED&&(X===i.FLOAT&&($=i.R32F),X===i.HALF_FLOAT&&($=i.R16F),X===i.UNSIGNED_BYTE&&($=i.R8),X===i.UNSIGNED_SHORT&&_e&&($=_e.R16_EXT),X===i.SHORT&&_e&&($=_e.R16_SNORM_EXT)),T===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&($=i.R8UI),X===i.UNSIGNED_SHORT&&($=i.R16UI),X===i.UNSIGNED_INT&&($=i.R32UI),X===i.BYTE&&($=i.R8I),X===i.SHORT&&($=i.R16I),X===i.INT&&($=i.R32I)),T===i.RG&&(X===i.FLOAT&&($=i.RG32F),X===i.HALF_FLOAT&&($=i.RG16F),X===i.UNSIGNED_BYTE&&($=i.RG8),X===i.UNSIGNED_SHORT&&_e&&($=_e.RG16_EXT),X===i.SHORT&&_e&&($=_e.RG16_SNORM_EXT)),T===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&($=i.RG8UI),X===i.UNSIGNED_SHORT&&($=i.RG16UI),X===i.UNSIGNED_INT&&($=i.RG32UI),X===i.BYTE&&($=i.RG8I),X===i.SHORT&&($=i.RG16I),X===i.INT&&($=i.RG32I)),T===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&($=i.RGB8UI),X===i.UNSIGNED_SHORT&&($=i.RGB16UI),X===i.UNSIGNED_INT&&($=i.RGB32UI),X===i.BYTE&&($=i.RGB8I),X===i.SHORT&&($=i.RGB16I),X===i.INT&&($=i.RGB32I)),T===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&($=i.RGBA8UI),X===i.UNSIGNED_SHORT&&($=i.RGBA16UI),X===i.UNSIGNED_INT&&($=i.RGBA32UI),X===i.BYTE&&($=i.RGBA8I),X===i.SHORT&&($=i.RGBA16I),X===i.INT&&($=i.RGBA32I)),T===i.RGB&&(X===i.UNSIGNED_SHORT&&_e&&($=_e.RGB16_EXT),X===i.SHORT&&_e&&($=_e.RGB16_SNORM_EXT),X===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),T===i.RGBA){let Q=he?Lo:ft.getTransfer(ne);X===i.FLOAT&&($=i.RGBA32F),X===i.HALF_FLOAT&&($=i.RGBA16F),X===i.UNSIGNED_BYTE&&($=Q===At?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT&&_e&&($=_e.RGBA16_EXT),X===i.SHORT&&_e&&($=_e.RGBA16_SNORM_EXT),X===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function y(I,T){let X;return I?T===null||T===Mi||T===js?X=i.DEPTH24_STENCIL8:T===$n?X=i.DEPTH32F_STENCIL8:T===Kr&&(X=i.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Mi||T===js?X=i.DEPTH_COMPONENT24:T===$n?X=i.DEPTH_COMPONENT32F:T===Kr&&(X=i.DEPTH_COMPONENT16),X}function S(I,T){return v(I)===!0||I.isFramebufferTexture&&I.minFilter!==Qt&&I.minFilter!==an?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function N(I){let T=new WeakRef(I);n.get(I).__ref=T,p.add(T),x.register(I,T,T)}function C(I){let T=n.get(I).__ref;T!==void 0&&(p.delete(T),x.unregister(T))}function O(I){D(I.target)}function R(I){P(I.target)}function D(I){I.removeEventListener("dispose",O),C(I),A(I),I.isVideoTexture&&h.delete(I),I.isHTMLTexture&&f.delete(I)}function P(I){I.removeEventListener("dispose",R),C(I),J(I)}function k(){for(let I of p){let T=I.deref();T!==void 0&&(T.isRenderTarget===!0?P(T):D(T))}p.clear(),f.clear()}function A(I){let T=n.get(I);if(T.__webglInit===void 0)return;let X=I.source,se=u.get(X);if(se){let ne=se[T.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&U(I),Object.keys(se).length===0&&u.delete(X)}n.remove(I)}function U(I){let T=n.get(I);i.deleteTexture(T.__webglTexture);let X=I.source,se=u.get(X);delete se[T.__cacheKey],o.memory.textures--}function J(I){let T=n.get(I);T.__depthDisposeCallback&&T.__depthDisposeCallback();let X=I.depthTexture;if(X&&X.renderTarget===I&&D(X),I.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(T.__webglFramebuffer[ne]))for(let he=0;he<T.__webglFramebuffer[ne].length;he++)i.deleteFramebuffer(T.__webglFramebuffer[ne][he]);else i.deleteFramebuffer(T.__webglFramebuffer[ne]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[ne])}else{if(Array.isArray(T.__webglFramebuffer))for(let ne=0;ne<T.__webglFramebuffer.length;ne++)i.deleteFramebuffer(T.__webglFramebuffer[ne]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ne=0;ne<T.__webglColorRenderbuffer.length;ne++)T.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[ne]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let se=I.textures;for(let ne=0,he=se.length;ne<he;ne++){let _e=n.get(se[ne]);_e.__webglTexture&&(i.deleteTexture(_e.__webglTexture),o.memory.textures--),n.remove(se[ne])}n.remove(I)}let G=0;function Y(){G=0}function j(){return G}function oe(I){G=I}function Re(){let I=G;return I>=s.maxTextures&&Oe("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),G+=1,I}function Z(I){let T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.mipmapsAutoUpdate),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function fe(I,T){let X=n.get(I);if(I.isVideoTexture&&$t(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&X.__version!==I.version){let se=I.image;if(se===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)Oe("WebGLRenderer: Texture marked for update but image is incomplete");else{ce(X,I,T);return}}else I.isExternalTexture&&(X.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+T)}function Ae(I,T){let X=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&X.__version!==I.version){ce(X,I,T);return}else I.isExternalTexture&&(X.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+T)}function ze(I,T){let X=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&X.__version!==I.version){ce(X,I,T);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+T)}function Se(I,T){let X=n.get(I);if(I.version>0&&X.__version!==I.version){we(X,I,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+T)}let Ve={[Ai]:i.REPEAT,[si]:i.CLAMP_TO_EDGE,[Ar]:i.MIRRORED_REPEAT},kt={[Qt]:i.NEAREST,[Yl]:i.NEAREST_MIPMAP_NEAREST,[$s]:i.NEAREST_MIPMAP_LINEAR,[an]:i.LINEAR,[Zr]:i.LINEAR_MIPMAP_NEAREST,[li]:i.LINEAR_MIPMAP_LINEAR},qe={[Lp]:i.NEVER,[Eu]:i.ALWAYS,[Np]:i.LESS,[bu]:i.LEQUAL,[Dp]:i.EQUAL,[Tu]:i.GEQUAL,[Up]:i.GREATER,[Op]:i.NOTEQUAL};function ut(I,T){if(T.type===$n&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===an||T.magFilter===Zr||T.magFilter===$s||T.magFilter===li||T.minFilter===an||T.minFilter===Zr||T.minFilter===$s||T.minFilter===li)&&Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,Ve[T.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,Ve[T.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,Ve[T.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,kt[T.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,kt[T.minFilter]),T.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,qe[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Qt||T.minFilter!==$s&&T.minFilter!==li||T.type===$n&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function gt(I,T){let X=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",O),N(T));let se=T.source,ne=u.get(se);ne===void 0&&(ne={},u.set(se,ne));let he=Z(T);if(he!==I.__cacheKey){ne[he]===void 0&&(ne[he]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),ne[he].usedTimes++;let _e=ne[I.__cacheKey];_e!==void 0&&(ne[I.__cacheKey].usedTimes--,_e.usedTimes===0&&U(T)),I.__cacheKey=he,I.__webglTexture=ne[he].texture}return X}function ie(I,T,X){return Math.floor(Math.floor(I/X)/T)}function de(I,T,X,se){let he=I.updateRanges;if(he.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,X,se,T.data);else{he.sort((F,te)=>F.start-te.start);let _e=0;for(let F=1;F<he.length;F++){let te=he[_e],K=he[F],me=te.start+te.count,le=ie(K.start,T.width,4),ue=ie(te.start,T.width,4);K.start<=me+1&&le===ue&&ie(K.start+K.count-1,T.width,4)===le?te.count=Math.max(te.count,K.start+K.count-te.start):(++_e,he[_e]=K)}he.length=_e+1;let $=t.getParameter(i.UNPACK_ROW_LENGTH),Q=t.getParameter(i.UNPACK_SKIP_PIXELS),pe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let F=0,te=he.length;F<te;F++){let K=he[F],me=Math.floor(K.start/4),le=Math.ceil(K.count/4),ue=me%T.width,Be=Math.floor(me/T.width),lt=le,ae=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ue),t.pixelStorei(i.UNPACK_SKIP_ROWS,Be),t.texSubImage2D(i.TEXTURE_2D,0,ue,Be,lt,ae,X,se,T.data)}I.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,$),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(i.UNPACK_SKIP_ROWS,pe)}}function ce(I,T,X){let se=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(se=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(se=i.TEXTURE_3D);let ne=gt(I,T),he=T.source;t.bindTexture(se,I.__webglTexture,i.TEXTURE0+X);let _e=n.get(he);if(he.version!==_e.__version||ne===!0){if(t.activeTexture(i.TEXTURE0+X),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let ae=ft.getPrimaries(ft.workingColorSpace),Ge=T.colorSpace===ns?null:ft.getPrimaries(T.colorSpace),ot=T.colorSpace===ns||ae===Ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot)}t.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment);let Q=_(T.image,!1,s.maxTextureSize);Q=Xe(T,Q);let pe=r.convert(T.format,T.colorSpace),F=r.convert(T.type),te=w(T.internalFormat,pe,F,T.normalized,T.colorSpace,T.isVideoTexture);ut(se,T);let K,me=T.mipmaps,le=T.isVideoTexture!==!0,ue=_e.__version===void 0||ne===!0,Be=he.dataReady,lt=S(T,Q);if(T.isDepthTexture)te=y(T.format===ts,T.type),ue&&(le?t.texStorage2D(i.TEXTURE_2D,1,te,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,te,Q.width,Q.height,0,pe,F,null));else if(T.isDataTexture)if(me.length>0){le&&ue&&t.texStorage2D(i.TEXTURE_2D,lt,te,me[0].width,me[0].height);for(let ae=0,Ge=me.length;ae<Ge;ae++)K=me[ae],le?Be&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,K.width,K.height,pe,F,K.data):t.texImage2D(i.TEXTURE_2D,ae,te,K.width,K.height,0,pe,F,K.data);T.generateMipmaps=!1}else le?(ue&&t.texStorage2D(i.TEXTURE_2D,lt,te,Q.width,Q.height),Be&&de(T,Q,pe,F)):t.texImage2D(i.TEXTURE_2D,0,te,Q.width,Q.height,0,pe,F,Q.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){le&&ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,lt,te,me[0].width,me[0].height,Q.depth);for(let ae=0,Ge=me.length;ae<Ge;ae++)if(K=me[ae],T.format!==ci)if(pe!==null)if(le){if(Be)if(T.layerUpdates.size>0){let ot=Ou(K.width,K.height,T.format,T.type);for(let be of T.layerUpdates){let Ct=K.data.subarray(be*ot/K.data.BYTES_PER_ELEMENT,(be+1)*ot/K.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,be,K.width,K.height,1,pe,Ct)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,K.width,K.height,Q.depth,pe,K.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,te,K.width,K.height,Q.depth,0,K.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else le?Be&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,K.width,K.height,Q.depth,pe,F,K.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,te,K.width,K.height,Q.depth,0,pe,F,K.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{le&&ue&&t.texStorage2D(i.TEXTURE_2D,lt,te,me[0].width,me[0].height);for(let ae=0,Ge=me.length;ae<Ge;ae++)K=me[ae],T.format!==ci?pe!==null?le?Be&&t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,K.width,K.height,pe,K.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,te,K.width,K.height,0,K.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?Be&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,K.width,K.height,pe,F,K.data):t.texImage2D(i.TEXTURE_2D,ae,te,K.width,K.height,0,pe,F,K.data)}else if(T.isDataArrayTexture)if(le){if(ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,lt,te,Q.width,Q.height,Q.depth),Be)if(T.layerUpdates.size>0){let ae=Ou(Q.width,Q.height,T.format,T.type);for(let Ge of T.layerUpdates){let ot=Q.data.subarray(Ge*ae/Q.data.BYTES_PER_ELEMENT,(Ge+1)*ae/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ge,Q.width,Q.height,1,pe,F,ot)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,pe,F,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,te,Q.width,Q.height,Q.depth,0,pe,F,Q.data);else if(T.isData3DTexture)le?(ue&&t.texStorage3D(i.TEXTURE_3D,lt,te,Q.width,Q.height,Q.depth),Be&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,pe,F,Q.data)):t.texImage3D(i.TEXTURE_3D,0,te,Q.width,Q.height,Q.depth,0,pe,F,Q.data);else if(T.isFramebufferTexture){if(ue)if(le)t.texStorage2D(i.TEXTURE_2D,lt,te,Q.width,Q.height);else{let ae=Q.width,Ge=Q.height;for(let ot=0;ot<lt;ot++)t.texImage2D(i.TEXTURE_2D,ot,te,ae,Ge,0,pe,F,null),ae>>=1,Ge>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in i){let ae=i.canvas;if(ae.hasAttribute("layoutsubtree")||ae.setAttribute("layoutsubtree","true"),Q.parentNode!==ae){ae.appendChild(Q),f.add(T),ae.onpaint=Ge=>{let ot=Ge.changedElements;for(let be of f)ot.includes(be.image)&&(be.needsUpdate=!0)},ae.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Q);else{let ot=i.RGBA,be=i.RGBA,Ct=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ot,be,Ct,Q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(me.length>0){if(le&&ue){let ae=Ke(me[0]);t.texStorage2D(i.TEXTURE_2D,lt,te,ae.width,ae.height)}for(let ae=0,Ge=me.length;ae<Ge;ae++)K=me[ae],le?Be&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,pe,F,K):t.texImage2D(i.TEXTURE_2D,ae,te,pe,F,K);T.generateMipmaps=!1}else if(le){if(ue){let ae=Ke(Q);t.texStorage2D(i.TEXTURE_2D,lt,te,ae.width,ae.height)}Be&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe,F,Q)}else t.texImage2D(i.TEXTURE_2D,0,te,pe,F,Q);v(T)&&T.mipmapsAutoUpdate===!0&&M(se),_e.__version=he.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function we(I,T,X){if(T.image.length!==6)return;let se=gt(I,T),ne=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+X);let he=n.get(ne);if(ne.version!==he.__version||se===!0){t.activeTexture(i.TEXTURE0+X);let _e=ft.getPrimaries(ft.workingColorSpace),$=T.colorSpace===ns?null:ft.getPrimaries(T.colorSpace),Q=T.colorSpace===ns||_e===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let pe=T.isCompressedTexture||T.image[0].isCompressedTexture,F=T.image[0]&&T.image[0].isDataTexture,te=[];for(let be=0;be<6;be++)!pe&&!F?te[be]=_(T.image[be],!0,s.maxCubemapSize):te[be]=F?T.image[be].image:T.image[be],te[be]=Xe(T,te[be]);let K=te[0],me=r.convert(T.format,T.colorSpace),le=r.convert(T.type),ue=w(T.internalFormat,me,le,T.normalized,T.colorSpace),Be=T.isVideoTexture!==!0,lt=he.__version===void 0||se===!0,ae=ne.dataReady,Ge=S(T,K);ut(i.TEXTURE_CUBE_MAP,T);let ot;if(T.isDepthTexture){if(ue=y(T.format===ts,T.type),lt)if(Be)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,ue,K.width,K.height);else for(let be=0;be<6;be++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ue,K.width,K.height,0,me,le,null)}else if(pe){Be&&lt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ge,ue,K.width,K.height);for(let be=0;be<6;be++){ot=te[be].mipmaps;for(let Ct=0;Ct<ot.length;Ct++){let dn=ot[Ct];T.format!==ci?me!==null?Be?ae&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ct,0,0,dn.width,dn.height,me,dn.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ct,ue,dn.width,dn.height,0,dn.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ct,0,0,dn.width,dn.height,me,le,dn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ct,ue,dn.width,dn.height,0,me,le,dn.data)}}}else{if(ot=T.mipmaps,Be&&lt){ot.length>0&&Ge++;let be=Ke(te[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ge,ue,be.width,be.height)}for(let be=0;be<6;be++)if(F){Be?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,te[be].width,te[be].height,me,le,te[be].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ue,te[be].width,te[be].height,0,me,le,te[be].data);for(let Ct=0;Ct<ot.length;Ct++){let as=ot[Ct].image[be].image;Be?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ct+1,0,0,as.width,as.height,me,le,as.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ct+1,ue,as.width,as.height,0,me,le,as.data)}}else{Be?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,me,le,te[be]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ue,me,le,te[be]);for(let Ct=0;Ct<ot.length;Ct++){let dn=ot[Ct];Be?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ct+1,0,0,me,le,dn.image[be]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ct+1,ue,me,le,dn.image[be])}}}v(T)&&T.mipmapsAutoUpdate===!0&&M(i.TEXTURE_CUBE_MAP),he.__version=ne.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function ve(I,T,X,se,ne,he){let _e=r.convert(X.format,X.colorSpace),$=r.convert(X.type),Q=w(X.internalFormat,_e,$,X.normalized,X.colorSpace),pe=n.get(T),F=n.get(X);if(F.__renderTarget=T,!pe.__hasExternalTextures){let te=Math.max(1,T.width>>he),K=Math.max(1,T.height>>he);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,he,Q,te,K,T.depth,0,_e,$,null):t.texImage2D(ne,he,Q,te,K,0,_e,$,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),xe(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,ne,F.__webglTexture,0,Nt(T)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,se,ne,F.__webglTexture,he),t.bindFramebuffer(i.FRAMEBUFFER,null)}function st(I,T,X){if(i.bindRenderbuffer(i.RENDERBUFFER,I),T.depthBuffer){let se=T.depthTexture,ne=se&&se.isDepthTexture?se.type:null,he=y(T.stencilBuffer,ne),_e=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;xe(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Nt(T),he,T.width,T.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt(T),he,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,he,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,I)}else{let se=T.textures;for(let ne=0;ne<se.length;ne++){let he=se[ne],_e=r.convert(he.format,he.colorSpace),$=r.convert(he.type),Q=w(he.internalFormat,_e,$,he.normalized,he.colorSpace);xe(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Nt(T),Q,T.width,T.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt(T),Q,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Q,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Fe(I,T,X){let se=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ne=n.get(T.depthTexture);ne.__renderTarget=T;let he=se?T.depthTexture.image[0]:T.depthTexture.image;(!ne.__webglTexture||he.width!==T.width||he.height!==T.height)&&(he.width=T.width,he.height=T.height,T.depthTexture.needsUpdate=!0),se?Se(T.depthTexture,0):fe(T.depthTexture,0);let _e=ne.__webglTexture,$=Nt(T),Q=se?i.TEXTURE_CUBE_MAP_POSITIVE_X+X:i.TEXTURE_2D,pe=T.depthTexture.format===ts?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===Yi)xe(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pe,Q,_e,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,pe,Q,_e,0);else if(T.depthTexture.format===ts)xe(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pe,Q,_e,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,pe,Q,_e,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function xt(I){let T=n.get(I),X=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){let se=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),se){let ne=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,se.removeEventListener("dispose",ne)};se.addEventListener("dispose",ne),T.__depthDisposeCallback=ne}T.__boundDepthTexture=se}if(I.depthTexture&&!T.__autoAllocateDepthBuffer)if(X)for(let se=0;se<6;se++)Fe(T.__webglFramebuffer[se],I,se);else I.texture.mipmaps.length>0?Fe(T.__webglFramebuffer[0],I,0):Fe(T.__webglFramebuffer,I,0);else if(X){T.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[se]),T.__webglDepthbuffer[se]===void 0)T.__webglDepthbuffer[se]=i.createRenderbuffer(),st(T.__webglDepthbuffer[se],I,!1);else{let ne=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=T.__webglDepthbuffer[se];i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,he)}}else if(I.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),st(T.__webglDepthbuffer,I,!1);else{let ne=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,he)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function _t(I,T,X){let se=n.get(I);T!==void 0&&ve(se.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&xt(I)}function bt(I){let T=I.texture,X=n.get(I),se=n.get(T);I.addEventListener("dispose",R),N(I);let ne=I.textures,he=I.isWebGLCubeRenderTarget===!0,_e=ne.length>1;if(_e||(se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture()),se.__version=T.version,o.memory.textures++),he){X.__webglFramebuffer=[];for(let $=0;$<6;$++)if(T.mipmaps.length>0){X.__webglFramebuffer[$]=[];for(let Q=0;Q<T.mipmaps.length;Q++)X.__webglFramebuffer[$][Q]=i.createFramebuffer()}else X.__webglFramebuffer[$]=i.createFramebuffer()}else{if(T.mipmaps.length>0){X.__webglFramebuffer=[];for(let $=0;$<T.mipmaps.length;$++)X.__webglFramebuffer[$]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(_e)for(let $=0,Q=ne.length;$<Q;$++){let pe=n.get(ne[$]);pe.__webglTexture===void 0&&(pe.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&xe(I)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let $=0;$<ne.length;$++){let Q=ne[$];X.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[$]);let pe=r.convert(Q.format,Q.colorSpace),F=r.convert(Q.type),te=w(Q.internalFormat,pe,F,Q.normalized,Q.colorSpace,I.isXRRenderTarget===!0),K=Nt(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,K,te,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,X.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),st(X.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(he){t.bindTexture(i.TEXTURE_CUBE_MAP,se.__webglTexture),ut(i.TEXTURE_CUBE_MAP,T);for(let $=0;$<6;$++)if(T.mipmaps.length>0)for(let Q=0;Q<T.mipmaps.length;Q++)ve(X.__webglFramebuffer[$][Q],I,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Q);else ve(X.__webglFramebuffer[$],I,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);v(T)?M(i.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}else if(_e){for(let $=0,Q=ne.length;$<Q;$++){let pe=ne[$],F=n.get(pe),te=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(te=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(te,F.__webglTexture),ut(te,pe),ve(X.__webglFramebuffer,I,pe,i.COLOR_ATTACHMENT0+$,te,0),v(pe)&&M(te)}t.unbindTexture()}else{let $=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&($=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture($,se.__webglTexture),ut($,T),T.mipmaps.length>0)for(let Q=0;Q<T.mipmaps.length;Q++)ve(X.__webglFramebuffer[Q],I,T,i.COLOR_ATTACHMENT0,$,Q);else ve(X.__webglFramebuffer,I,T,i.COLOR_ATTACHMENT0,$,0);v(T)?M($):T.mipmaps.length>0&&i.texParameteri($,i.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}I.depthBuffer&&xt(I)}function z(I){let T=I.textures;for(let X=0,se=T.length;X<se;X++){let ne=T[X];if(v(ne)&&ne.mipmapsAutoUpdate===!0){let he=b(I),_e=n.get(ne).__webglTexture;t.bindTexture(he,_e),M(he),t.unbindTexture()}}}let tn=[];function mt(I){if(I.samples>0){if(xe(I)===!1){let T=I.textures,X=I.width,se=I.height,ne=i.COLOR_BUFFER_BIT,he=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=n.get(I),$=T.length>1;if($)for(let pe=0;pe<T.length;pe++)t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let pe=0;pe<T.length;pe++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_e.__webglColorRenderbuffer[pe]);let F=n.get(T[pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,F,0)}i.blitFramebuffer(0,0,X,se,0,0,X,se,ne,i.NEAREST),l===!0&&(tn.length=0,tn.push(i.COLOR_ATTACHMENT0+pe),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&tn.push(he),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,tn))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let pe=0;pe<T.length;pe++){t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,_e.__webglColorRenderbuffer[pe]);let F=n.get(T[pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,F,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let T=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function Nt(I){return Math.min(s.maxSamples,I.samples)}function xe(I){let T=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function $t(I){let T=o.render.frame;h.get(I)!==T&&(h.set(I,T),I.update())}function Xe(I,T){let X=I.colorSpace,se=I.format,ne=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||X!==Un&&X!==ns&&(ft.getTransfer(X)===At?(se!==ci||ne!==Xn)&&Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ye("WebGLTextures: Unsupported texture color space:",X)),T}function Ke(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=Re,this.resetTextureUnits=Y,this.getTextureUnits=j,this.setTextureUnits=oe,this.setTexture2D=fe,this.setTexture2DArray=Ae,this.setTexture3D=ze,this.setTextureCube=Se,this.rebindTextures=_t,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=xe,this.dispose=k}function XM(i,e){function t(n,s=ns){let r,o=ft.getTransfer(s);if(n===Xn)return i.UNSIGNED_BYTE;if(n===Kl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Jl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===_u)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===yu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===gu)return i.BYTE;if(n===xu)return i.SHORT;if(n===Kr)return i.UNSIGNED_SHORT;if(n===Zl)return i.INT;if(n===Mi)return i.UNSIGNED_INT;if(n===$n)return i.FLOAT;if(n===Si)return i.HALF_FLOAT;if(n===vu)return i.ALPHA;if(n===Mu)return i.RGB;if(n===ci)return i.RGBA;if(n===Yi)return i.DEPTH_COMPONENT;if(n===ts)return i.DEPTH_STENCIL;if(n===$l)return i.RED;if(n===jl)return i.RED_INTEGER;if(n===vs)return i.RG;if(n===Ql)return i.RG_INTEGER;if(n===ec)return i.RGBA_INTEGER;if(n===ga||n===xa||n===_a||n===ya)if(o===At)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ga)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ga)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_a)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ya)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===tc||n===nc||n===ic||n===sc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===tc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===nc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ic)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===sc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===rc||n===oc||n===ac||n===lc||n===cc||n===va||n===hc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===rc||n===oc)return o===At?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ac)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===lc)return r.COMPRESSED_R11_EAC;if(n===cc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===va)return r.COMPRESSED_RG11_EAC;if(n===hc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===uc||n===fc||n===dc||n===pc||n===mc||n===gc||n===xc||n===_c||n===yc||n===vc||n===Mc||n===Sc||n===bc||n===Tc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===uc)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fc)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===dc)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===pc)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===mc)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===gc)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xc)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_c)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yc)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vc)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Mc)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Sc)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===bc)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Tc)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ec||n===wc||n===Ac)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ec)return o===At?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===wc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ac)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Rc||n===Cc||n===Ma||n===Ic)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Rc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Cc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ma)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ic)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===js?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var WM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qM=`
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

}`,Ju=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Wo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ai({vertexShader:WM,fragmentShader:qM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new et(new In(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$u=class extends yi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,d=null,u=null,p=null,x=typeof XRWebGLBinding<"u",m=new Ju,g={},_=t.getContextAttributes(),v=null,M=null,b=[],w=[],y=new re,S=null,N=null,C=new on;C.viewport=new It;let O=new on;O.viewport=new It;let R=[C,O],D=new Hl,P=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let fe=b[Z];return fe===void 0&&(fe=new Lr,b[Z]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(Z){let fe=b[Z];return fe===void 0&&(fe=new Lr,b[Z]=fe),fe.getGripSpace()},this.getHand=function(Z){let fe=b[Z];return fe===void 0&&(fe=new Lr,b[Z]=fe),fe.getHandSpace()};function A(Z){let fe=w.indexOf(Z.inputSource);if(fe===-1)return;let Ae=b[fe];Ae!==void 0&&(Ae.update(Z.inputSource,Z.frame,c||o),Ae.dispatchEvent({type:Z.type,data:Z.inputSource}))}function U(){s.removeEventListener("select",A),s.removeEventListener("selectstart",A),s.removeEventListener("selectend",A),s.removeEventListener("squeeze",A),s.removeEventListener("squeezestart",A),s.removeEventListener("squeezeend",A),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",J);for(let Z=0;Z<b.length;Z++){let fe=w[Z];fe!==null&&(w[Z]=null,b[Z].disconnect(fe))}P=null,k=null,m.reset();for(let Z in g)delete g[Z];if(e.setRenderTarget(v),u=null,d=null,f=null,s=null,M=null,Re.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(y.width,y.height,!1),N!==null){let Z=N.camera;Z.fov=N.fov,Z.zoom=N.zoom,Z.updateProjectionMatrix(),N=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(v=e.getRenderTarget(),s.addEventListener("select",A),s.addEventListener("selectstart",A),s.addEventListener("selectend",A),s.addEventListener("squeeze",A),s.addEventListener("squeezestart",A),s.addEventListener("squeezeend",A),s.addEventListener("end",U),s.addEventListener("inputsourceschange",J),_.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(y),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,ze=null,Se=null;_.depth&&(Se=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ae=_.stencil?ts:Yi,ze=_.stencil?js:Mi);let Ve={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(Ve),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Zn(d.textureWidth,d.textureHeight,{format:ci,type:Xn,depthTexture:new Ki(d.textureWidth,d.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Ae={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,Ae),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),M=new Zn(u.framebufferWidth,u.framebufferHeight,{format:ci,type:Xn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Re.setContext(s),Re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J(Z){for(let fe=0;fe<Z.removed.length;fe++){let Ae=Z.removed[fe],ze=w.indexOf(Ae);ze>=0&&(w[ze]=null,b[ze].disconnect(Ae))}for(let fe=0;fe<Z.added.length;fe++){let Ae=Z.added[fe],ze=w.indexOf(Ae);if(ze===-1){for(let Ve=0;Ve<b.length;Ve++)if(Ve>=w.length){w.push(Ae),ze=Ve;break}else if(w[Ve]===null){w[Ve]=Ae,ze=Ve;break}if(ze===-1)break}let Se=b[ze];Se&&Se.connect(Ae)}}function G(Z,fe){fe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(fe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let fe=Z.near,Ae=Z.far;m.texture!==null&&(m.depthNear>0&&(fe=m.depthNear),m.depthFar>0&&(Ae=m.depthFar)),D.near=O.near=C.near=fe,D.far=O.far=C.far=Ae,(P!==D.near||k!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),P=D.near,k=D.far),D.layers.mask=Z.layers.mask|6,C.layers.mask=D.layers.mask&-5,O.layers.mask=D.layers.mask&-3;let ze=Z.parent,Se=D.cameras;G(D,ze);for(let Ve=0;Ve<Se.length;Ve++)G(Se[Ve],ze);D.projectionMatrix.copy(C.projectionMatrix),D.projectionMatrixInverse.copy(C.projectionMatrixInverse),N===null&&Z.isPerspectiveCamera&&(N={camera:Z,fov:Z.fov,zoom:Z.zoom}),Y(Z,D,ze)};function Y(Z,fe,Ae){Ae===null?Z.matrix.copy(fe.matrixWorld):(Z.matrix.copy(Ae.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(fe.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(fe.projectionMatrix),Z.projectionMatrixInverse.copy(fe.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Us*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&u===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(Z){return g[Z]};let j=null;function oe(Z,fe){if(h=fe.getViewerPose(c||o),p=fe,h!==null){let Ae=h.views;u!==null&&(e.setRenderTargetFramebuffer(M,u.framebuffer),e.setRenderTarget(M));let ze=!1;Ae.length!==D.cameras.length&&(D.cameras.length=0,ze=!0);for(let qe=0;qe<Ae.length;qe++){let ut=Ae[qe],gt=null;if(u!==null)gt=u.getViewport(ut);else{let de=f.getViewSubImage(d,ut);gt=de.viewport,qe===0&&(e.setRenderTargetTextures(M,de.colorTexture,de.depthStencilTexture),e.setRenderTarget(M))}let ie=R[qe];ie===void 0&&(ie=new on,ie.layers.enable(qe),ie.viewport=new It,R[qe]=ie),ie.matrix.fromArray(ut.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(ut.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(gt.x,gt.y,gt.width,gt.height),qe===0&&(D.matrix.copy(ie.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),ze===!0&&D.cameras.push(ie)}let Se=s.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=n.getBinding();let qe=f.getDepthInformation(Ae[0]);qe&&qe.isValid&&qe.texture&&m.init(qe,s.renderState)}if(Se&&Se.includes("camera-access")&&x){e.state.unbindTexture(),f=n.getBinding();for(let qe=0;qe<Ae.length;qe++){let ut=Ae[qe].camera;if(ut){let gt=g[ut];gt||(gt=new Wo,g[ut]=gt);let ie=f.getCameraImage(ut);gt.sourceTexture=ie}}}}for(let Ae=0;Ae<b.length;Ae++){let ze=w[Ae],Se=b[Ae];ze!==null&&Se!==void 0&&Se.update(ze,fe,c||o)}j&&j(Z,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),p=null}let Re=new xm;Re.setAnimationLoop(oe),this.setAnimationLoop=function(Z){j=Z},this.dispose=function(){}}},YM=new We,Am=new $e;Am.set(-1,0,0,0,1,0,0,0,1);function ZM(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Nu(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,_,v,M){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),f(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&u(m,g,M)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,_,v):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Sn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Sn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let _=e.get(g),v=_.envMap,M=_.envMapRotation;v&&(m.envMap.value=v,m.envMapRotation.value.setFromMatrix4(YM.makeRotationFromEuler(M)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Am),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,_,v){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*_,m.scale.value=v*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function f(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function u(m,g,_){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Sn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let _=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function KM(i,e,t,n){let s={},r={};function o(_,v){let M=v.program;n.uniformBlockBinding(_,M,s[_.id])}function a(_,v){let M=s[_.id];M===void 0&&(p(_),M=l(_),s[_.id]=M,_.addEventListener("dispose",m));let b=v.program;n.updateUBOMapping(_,b);let w=e.render.frame;r[_.id]!==w&&(c(_),r[_.id]=w)}function l(_){let v=i.createBuffer(),M=_.__size,b=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,M,b),i.bindBuffer(i.UNIFORM_BUFFER,null),v}function c(_){let v=s[_.id],M=_.uniforms,b=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let w=0,y=M.length;w<y;w++){let S=M[w];if(Array.isArray(S))for(let N=0,C=S.length;N<C;N++)h(S[N],w,N,b);else h(S,w,0,b)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(_,v,M,b){if(d(_,v,M,b)===!0){let w=_.__offset,y=_.value;if(Array.isArray(y)){let S=0;for(let N=0;N<y.length;N++){let C=y[N],O=x(C,!0);f(C,_.__data,S),S+=O.storage/Float32Array.BYTES_PER_ELEMENT}}else f(y,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,w,_.__data)}}function f(_,v,M){typeof _=="number"||typeof _=="boolean"?v[M]=_:_.isMatrix3?(v[M]=_.elements[0],v[M+1]=_.elements[1],v[M+2]=_.elements[2],v[M+3]=0,v[M+4]=_.elements[3],v[M+5]=_.elements[4],v[M+6]=_.elements[5],v[M+7]=0,v[M+8]=_.elements[6],v[M+9]=_.elements[7],v[M+10]=_.elements[8],v[M+11]=0):ArrayBuffer.isView(_)?v.set(_.subarray(0,v.length-M),M):_.toArray(v,M)}function d(_,v,M,b){let w=_.value,y=v+"_"+M;if(Array.isArray(w)){b[y]===void 0&&(b[y]=[]);let S=b[y],N=!1;for(let C=0;C<w.length;C++)u(w[C],S,C)===!0&&(N=!0);return N}return u(w,b,y)}function u(_,v,M){if(v[M]===void 0)return typeof _=="number"||typeof _=="boolean"?v[M]=_:ArrayBuffer.isView(_)?v[M]=_.slice():v[M]=_.clone(),!0;{let b=v[M];if(typeof _=="number"||typeof _=="boolean"){if(b!==_)return v[M]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(b.equals(_)===!1)return b.copy(_),!0}}return!1}function p(_){let v=_.uniforms,M=0,b=16;for(let y=0,S=v.length;y<S;y++){let N=Array.isArray(v[y])?v[y]:[v[y]];for(let C=0,O=N.length;C<O;C++){let R=N[C],D=Array.isArray(R.value)?R.value:[R.value],P=Array.isArray(v[y])||Array.isArray(R.value),k=M;for(let U=0,J=D.length;U<J;U++){let G=D[U],Y=x(G,P),j=M%b,oe=j%Y.boundary,Re=j+oe;M+=oe,Re!==0&&b-Re<Y.storage&&(M+=b-Re),U===0&&(k=M),M+=Y.storage}let A=R.type==="int"?Int32Array:R.type==="uint"?Uint32Array:Float32Array;R.__data=new A((M-k)/Float32Array.BYTES_PER_ELEMENT),R.__offset=k}}let w=M%b;return w>0&&(M+=b-w),_.__size=M,_.__cache={},this}function x(_,v){let M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=16,M.storage=48):_.isMatrix4?(M.boundary=16,M.storage=64):_.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(M.boundary=16,M.storage=_.byteLength):Oe("WebGLRenderer: Unsupported uniform value type.",_),v===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function m(_){let v=_.target;v.removeEventListener("dispose",m),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function g(){for(let _ in s)i.deleteBuffer(s[_]);s={},r={}}return{bind:o,update:a,dispose:g}}var JM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ni=null;function $M(){return Ni===null&&(Ni=new Ur(JM,16,16,vs,Si),Ni.name="DFG_LUT",Ni.minFilter=an,Ni.magFilter=an,Ni.wrapS=si,Ni.wrapT=si,Ni.generateMipmaps=!1,Ni.needsUpdate=!0),Ni}var Fc=class{constructor(e={}){let{canvas:t=Fp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:u=Xn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=u,m=new Set([ec,Ql,jl]),g=new Set([Xn,Mi,Kr,js,Kl,Jl]),_=new Uint32Array(4),v=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},b=null,w=null,y=[],S=[],N=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,O=!1,R=null,D=null,P=null,k=null;this._outputColorSpace=Xt;let A=0,U=0,J=null,G=-1,Y=null,j=new It,oe=new It,Re=null,Z=new Me(0),fe=0,Ae=t.width,ze=t.height,Se=1,Ve=null,kt=null,qe=new It(0,0,Ae,ze),ut=new It(0,0,Ae,ze),gt=!1,ie=new gs,de=new Tl,ce=!1,we=!1,ve=new We,st=new L,Fe=new It,xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},_t=!1;function bt(){return J===null?Se:1}let z=n;function tn(E,B){return t.getContext(E,B)}let mt,Nt,xe,$t,Xe,Ke,I,T,X,se,ne,he,_e,$,Q,pe,F,te,K,me,le,ue,Be;try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ge,!1),t.addEventListener("webglcontextrestored",ot,!1),t.addEventListener("webglcontextcreationerror",be,!1),z===null){let B="webgl2";if(z=tn(B,E),z===null)throw tn(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}lt()}catch(E){throw t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",be,!1),Ye("WebGLRenderer: "+E.message),E}function lt(){mt=new lv(z),mt.init(),le=new XM(z,mt),Nt=new $y(z,mt,e,le),xe=new GM(z,mt),Nt.reversedDepthBuffer&&d&&xe.buffers.depth.setReversed(!0),D=z.createFramebuffer(),P=z.createFramebuffer(),k=z.createFramebuffer(),$t=new uv(z),Xe=new RM,Ke=new VM(z,mt,xe,Xe,Nt,le,$t),I=new av(C),T=new dx(z),ue=new Ky(z,T),X=new cv(z,T,$t,ue),se=new dv(z,X,T,ue,$t),te=new fv(z,Nt,Ke),Q=new jy(Xe),ne=new AM(C,I,mt,Nt,ue,Q),he=new ZM(C,Xe),_e=new IM,$=new OM(mt),F=new Zy(C,I,xe,se,p,l),pe=new HM(C,se,Nt),Be=new KM(z,$t,Nt,xe),K=new Jy(z,mt,$t),me=new hv(z,mt,$t),$t.programs=ne.programs,C.capabilities=Nt,C.extensions=mt,C.properties=Xe,C.renderLists=_e,C.shadowMap=pe,C.state=xe,C.info=$t}x!==Xn&&(N=new mv(x,t.width,t.height,a,s,r));let ae=new $u(C,z);this.xr=ae,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let E=mt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=mt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(E){E!==void 0&&(Se=E,this.setSize(Ae,ze,!1))},this.getSize=function(E){return E.set(Ae,ze)},this.setSize=function(E,B,q=!0){if(ae.isPresenting){Oe("WebGLRenderer: Can't change size while VR device is presenting.");return}Ae=E,ze=B,t.width=Math.floor(E*Se),t.height=Math.floor(B*Se),q===!0&&(t.style.width=E+"px",t.style.height=B+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(Ae*Se,ze*Se).floor()},this.setDrawingBufferSize=function(E,B,q){Ae=E,ze=B,Se=q,t.width=Math.floor(E*q),t.height=Math.floor(B*q),this.setViewport(0,0,E,B)},this.setEffects=function(E){if(x===Xn){Ye("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let B=0;B<E.length;B++)if(E[B].isOutputPass===!0){Oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(j)},this.getViewport=function(E){return E.copy(qe)},this.setViewport=function(E,B,q,V){E.isVector4?qe.set(E.x,E.y,E.z,E.w):qe.set(E,B,q,V),xe.viewport(j.copy(qe).multiplyScalar(bt()).round())},this.getScissor=function(E){return E.copy(ut)},this.setScissor=function(E,B,q,V){E.isVector4?ut.set(E.x,E.y,E.z,E.w):ut.set(E,B,q,V),xe.scissor(oe.copy(ut).multiplyScalar(bt()).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(E){xe.setScissorTest(gt=E)},this.setOpaqueSort=function(E){Ve=E},this.setTransparentSort=function(E){kt=E},this.getClearColor=function(E){return E.copy(F.getClearColor())},this.setClearColor=function(){F.setClearColor(...arguments)},this.getClearAlpha=function(){return F.getClearAlpha()},this.setClearAlpha=function(){F.setClearAlpha(...arguments)},this.clear=function(E=!0,B=!0,q=!0){let V=0;if(E){let W=!1;if(J!==null){let ye=J.texture.format;W=m.has(ye)}if(W){let ye=J.texture.type,Ce=g.has(ye),ge=F.getClearColor(),Ee=F.getClearAlpha(),De=ge.r,nt=ge.g,yt=ge.b;Ce?(_[0]=De,_[1]=nt,_[2]=yt,_[3]=Ee,z.clearBufferuiv(z.COLOR,0,_)):(v[0]=De,v[1]=nt,v[2]=yt,v[3]=Ee,z.clearBufferiv(z.COLOR,0,v))}else V|=z.COLOR_BUFFER_BIT}B&&(V|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(V|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&z.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),R=E},this.dispose=function(){t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",be,!1),F.dispose(),_e.dispose(),$.dispose(),Ke.dispose(),Xe.dispose(),I.dispose(),se.dispose(),X.dispose(),ue.dispose(),Be.dispose(),ne.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",jf),ae.removeEventListener("sessionend",Qf),Ss.stop()};function Ge(E){E.preventDefault(),No("WebGLRenderer: Context Lost."),O=!0}function ot(){No("WebGLRenderer: Context Restored."),O=!1;let E=$t.autoReset,B=pe.enabled,q=pe.autoUpdate,V=pe.needsUpdate,W=pe.type;lt(),$t.autoReset=E,pe.enabled=B,pe.autoUpdate=q,pe.needsUpdate=V,pe.type=W}function be(E){Ye("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ct(E){let B=E.target;B.removeEventListener("dispose",Ct),dn(B)}function dn(E){as(E),Xe.remove(E)}function as(E){let B=Xe.get(E).programs;B!==void 0&&(B.forEach(function(q){ne.releaseProgram(q)}),E.isShaderMaterial&&ne.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,q,V,W,ye){B===null&&(B=xt);let Ce=W.isMesh&&W.matrixWorld.determinantAffine()<0,ge=D0(E,B,q,V,W);xe.setMaterial(V,Ce);let Ee=q.index,De=1;if(V.wireframe===!0){if(Ee=X.getWireframeAttribute(q),Ee===void 0)return;De=2}let nt=q.drawRange,yt=q.attributes.position,Le=nt.start*De,vt=(nt.start+nt.count)*De;ye!==null&&(Le=Math.max(Le,ye.start*De),vt=Math.min(vt,(ye.start+ye.count)*De)),Ee!==null?(Le=Math.max(Le,0),vt=Math.min(vt,Ee.count)):yt!=null&&(Le=Math.max(Le,0),vt=Math.min(vt,yt.count));let nn=vt-Le;if(nn<0||nn===1/0)return;ue.setup(W,V,ge,q,Ee);let Ft,Dt=K;if(Ee!==null&&(Ft=T.get(Ee),Dt=me,Dt.setIndex(Ft)),W.isMesh)V.wireframe===!0?(xe.setLineWidth(V.wireframeLinewidth*bt()),Dt.setMode(z.LINES)):Dt.setMode(z.TRIANGLES);else if(W.isLine){let wn=V.linewidth;wn===void 0&&(wn=1),xe.setLineWidth(wn*bt()),W.isLineSegments?Dt.setMode(z.LINES):W.isLineLoop?Dt.setMode(z.LINE_LOOP):Dt.setMode(z.LINE_STRIP)}else W.isPoints?Dt.setMode(z.POINTS):W.isSprite&&Dt.setMode(z.TRIANGLES);if(W.isBatchedMesh)if(mt.get("WEBGL_multi_draw"))Dt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let wn=W._multiDrawStarts,Ne=W._multiDrawCounts,Nn=W._multiDrawCount,Et=Ee?T.get(Ee).bytesPerElement:1,bs=Xe.get(V).currentProgram.getUniforms();for(let An=0;An<Nn;An++)bs.setValue(z,"_gl_DrawID",An),Dt.render(wn[An]/Et,Ne[An])}else if(W.isInstancedMesh)Dt.renderInstances(Le,nn,W.count);else if(q.isInstancedBufferGeometry){let wn=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ne=Math.min(q.instanceCount,wn);Dt.renderInstances(Le,nn,Ne)}else Dt.render(Le,nn)};function $f(E,B,q,V){R!==null&&E.isNodeMaterial&&R.setObject(V,E),ce===!0&&Q.setState(E,q,!1),E.transparent===!0&&E.side===bn&&E.forceSinglePass===!1?(E.side=Sn,E.needsUpdate=!0,fo(E,B,V),E.side=Pi,E.needsUpdate=!0,fo(E,B,V),E.side=bn):fo(E,B,V)}this.compile=function(E,B,q=null){q===null&&(q=E),R!==null&&R.renderStart(E,B,q),w=$.get(q),w.init(B),S.push(w),q.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),E!==q&&E.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),w.setupLights(),R!==null&&R.updateLights(w.state.lightsArray),we=this.localClippingEnabled,ce=Q.init(this.clippingPlanes,we),ce===!0&&Q.setGlobalState(this.clippingPlanes,B),R!==null&&pe.render(w.state.shadowsArray,q,B);let V=new Set;return E.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let ye=W.material;if(ye)if(Array.isArray(ye))for(let Ce=0;Ce<ye.length;Ce++){let ge=ye[Ce];$f(ge,q,B,W),V.add(ge)}else $f(ye,q,B,W),V.add(ye)}),w=S.pop(),R!==null&&R.renderEnd(),V},this.compileAsync=function(E,B,q=null){let V=this.compile(E,B,q);return new Promise(W=>{function ye(){if(V.forEach(function(Ce){let Ee=Xe.get(Ce).currentProgram;(Ee===void 0||Ee.isReady())&&V.delete(Ce)}),V.size===0){W(E);return}setTimeout(ye,10)}mt.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let gh=null;function L0(E){gh&&gh(E)}function jf(){Ss.stop()}function Qf(){Ss.start()}let Ss=new xm;Ss.setAnimationLoop(L0),typeof self<"u"&&Ss.setContext(self),this.setAnimationLoop=function(E){gh=E,ae.setAnimationLoop(E),E===null?Ss.stop():Ss.start()},ae.addEventListener("sessionstart",jf),ae.addEventListener("sessionend",Qf),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;R!==null&&R.renderStart(E,B);let q=ae.enabled===!0&&ae.isPresenting===!0,V=N!==null&&(J===null||q)&&N.begin(C,J);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(B),B=ae.getCamera()),E.isScene===!0&&E.onBeforeRender(C,E,B,J),w=$.get(E,S.length),w.init(B),w.state.textureUnits=Ke.getTextureUnits(),S.push(w),ve.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),B.isArrayCamera?de.setFromArrayCamera(B):ie.setFromProjectionMatrix(ve,ri,B.reversedDepth),we=this.localClippingEnabled,ce=Q.init(this.clippingPlanes,we),b=_e.get(E,y.length),b.init(),y.push(b),this.info.render.frame++,ae.enabled===!0&&ae.isPresenting===!0){let Ce=C.xr.getDepthSensingMesh();Ce!==null&&xh(Ce,B,-1/0,C.sortObjects)}xh(E,B,0,C.sortObjects),b.finish(),R!==null&&R.updateLights(w.state.lightsArray),C.sortObjects===!0&&b.sort(Ve,kt),_t=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,_t&&F.addToRenderList(b,E),this.info.autoReset===!0&&this.info.reset(),ce===!0&&Q.beginShadows();let W=w.state.shadowsArray;if(pe.render(W,E,B),ce===!0&&Q.endShadows(),(V&&N.hasRenderPass())===!1){let Ce=b.opaque,ge=b.transmissive;if(w.setupLights(),B.isArrayCamera){let Ee=B.cameras;if(ge.length>0)for(let De=0,nt=Ee.length;De<nt;De++){let yt=Ee[De];td(Ce,ge,E,yt)}_t&&F.render(E);for(let De=0,nt=Ee.length;De<nt;De++){let yt=Ee[De];ed(b,E,yt,yt.viewport)}}else ge.length>0&&td(Ce,ge,E,B),_t&&F.render(E),ed(b,E,B)}J!==null&&U===0&&(Ke.updateMultisampleRenderTarget(J),Ke.updateRenderTargetMipmap(J)),V&&N.end(C),E.isScene===!0&&E.onAfterRender(C,E,B),ue.resetDefaultState(),G=-1,Y=null,S.pop(),S.length>0?(w=S[S.length-1],Ke.setTextureUnits(w.state.textureUnits),ce===!0&&Q.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,y.pop(),y.length>0?b=y[y.length-1]:b=null,R!==null&&R.renderEnd()};function xh(E,B,q,V){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){let Ce=B.isArrayCamera?de:ie;if(!E.frustumCulled||E.intersectsFrustum(Ce)){V&&Fe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ve);let ge=se.update(E),Ee=E.material;Ee.visible&&b.push(E,ge,Ee,q,Fe.z,null,B)}}else if(E.isMesh||E.isLine||E.isPoints){let Ce=B.isArrayCamera?de:ie;if(!E.frustumCulled||E.intersectsFrustum(Ce)){let ge=se.update(E),Ee=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Fe.copy(E.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Fe.copy(ge.boundingSphere.center)),Fe.applyMatrix4(E.matrixWorld).applyMatrix4(ve)),Array.isArray(Ee)){let De=ge.groups;for(let nt=0,yt=De.length;nt<yt;nt++){let Le=De[nt],vt=Ee[Le.materialIndex];vt&&vt.visible&&b.push(E,ge,vt,q,Fe.z,Le,B)}}else Ee.visible&&b.push(E,ge,Ee,q,Fe.z,null,B)}}}let ye=E.children;for(let Ce=0,ge=ye.length;Ce<ge;Ce++)xh(ye[Ce],B,q,V)}function ed(E,B,q,V){let{opaque:W,transmissive:ye,transparent:Ce}=E;w.setupLightsView(q),ce===!0&&Q.setGlobalState(C.clippingPlanes,q),V&&xe.viewport(j.copy(V)),W.length>0&&Da(W,B,q),ye.length>0&&Da(ye,B,q),Ce.length>0&&Da(Ce,B,q),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function td(E,B,q,V){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[V.id]===void 0){let Le=mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[V.id]=new Zn(1,1,{generateMipmaps:!0,type:Le?Si:Xn,minFilter:li,samples:Math.max(4,Nt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ft.workingColorSpace})}let ye=w.state.transmissionRenderTarget[V.id],Ce=V.viewport||j;ye.setSize(Ce.z*C.transmissionResolutionScale,Ce.w*C.transmissionResolutionScale);let ge=C.getRenderTarget(),Ee=C.getActiveCubeFace(),De=C.getActiveMipmapLevel();C.setRenderTarget(ye),C.getClearColor(Z),fe=C.getClearAlpha(),fe<1&&C.setClearColor(16777215,.5),C.clear(),_t&&F.render(q);let nt=C.toneMapping;C.toneMapping=Li;let yt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),w.setupLightsView(V),ce===!0&&Q.setGlobalState(C.clippingPlanes,V),Da(E,q,V),Ke.updateMultisampleRenderTarget(ye),Ke.updateRenderTargetMipmap(ye),mt.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let vt=0,nn=B.length;vt<nn;vt++){let Ft=B[vt],{object:Dt,geometry:wn,material:Ne,group:Nn}=Ft;if(Ne.side===bn&&Dt.layers.test(V.layers)){let Et=Ne.side;Ne.side=Sn,Ne.needsUpdate=!0,nd(Dt,q,V,wn,Ne,Nn),Ne.side=Et,Ne.needsUpdate=!0,Le=!0}}Le===!0&&(Ke.updateMultisampleRenderTarget(ye),Ke.updateRenderTargetMipmap(ye))}C.setRenderTarget(ge,Ee,De),C.setClearColor(Z,fe),yt!==void 0&&(V.viewport=yt),C.toneMapping=nt}function Da(E,B,q){let V=B.isScene===!0?B.overrideMaterial:null;for(let W=0,ye=E.length;W<ye;W++){let Ce=E[W],{object:ge,geometry:Ee,group:De}=Ce,nt=Ce.material;nt.allowOverride===!0&&V!==null&&(nt=V),ge.layers.test(q.layers)&&nd(ge,B,q,Ee,nt,De)}}function nd(E,B,q,V,W,ye){R!==null&&W.isNodeMaterial&&R.setObject(E,W),E.onBeforeRender(C,B,q,V,W,ye),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(C,B,q,V,E,ye),W.transparent===!0&&W.side===bn&&W.forceSinglePass===!1?(W.side=Sn,W.needsUpdate=!0,C.renderBufferDirect(q,B,V,W,E,ye),W.side=Pi,W.needsUpdate=!0,C.renderBufferDirect(q,B,V,W,E,ye),W.side=bn):C.renderBufferDirect(q,B,V,W,E,ye),E.onAfterRender(C,B,q,V,W,ye)}function id(E){let B=0;for(let q of E)q.texture!==null&&B++;return B}function fo(E,B,q){B.isScene!==!0&&(B=xt);let V=Xe.get(E),W=w.state.lights,ye=w.state.shadowsArray,Ce=W.state.version,ge=ne.getParameters(E,W.state,ye,B,q,w.state.lightProbeGridArray),Ee=ne.getProgramCacheKey(ge),De=V.programs;V.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?B.environment:null,V.fog=B.fog;let nt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;V.envMap=I.get(E.envMap||V.environment,nt),V.envMapRotation=V.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,De===void 0&&(E.addEventListener("dispose",Ct),De=new Map,V.programs=De,V.programVariants=new Map);let yt=De.get(Ee);if(yt!==void 0){if(V.currentProgram===yt&&V.lightsStateVersion===Ce)return rd(E,ge),yt}else ge.uniforms=ne.getUniforms(E),R!==null&&E.isNodeMaterial&&R.build(E,q,ge),E.onBeforeCompile(ge,C),yt=ne.acquireProgram(ge,Ee),De.set(Ee,yt),V.uniforms=ge.uniforms;let Le=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Le.clippingPlanes=Q.uniform),rd(E,ge),V.needsLights=O0(E),V.lightsStateVersion=Ce,V.needsLights&&(Le.ambientLightColor.value=W.state.ambient,Le.lightProbe.value=W.state.probe,Le.sunLights.value=W.state.sun,Le.sunLightShadows.value=W.state.sunShadow,Le.directionalLights.value=W.state.directional,Le.directionalLightShadows.value=W.state.directionalShadow,Le.spotLights.value=W.state.spot,Le.spotLightShadows.value=W.state.spotShadow,Le.rectAreaLights.value=W.state.rectArea,Le.ltc_1.value=W.state.rectAreaLTC1,Le.ltc_2.value=W.state.rectAreaLTC2,Le.pointLights.value=W.state.point,Le.pointLightShadows.value=W.state.pointShadow,Le.hemisphereLights.value=W.state.hemi,Le.sunShadowMatrix.value=W.state.sunShadowMatrix,Le.sunShadowCascade.value=W.state.sunShadowCascade,Le.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Le.spotLightMatrix.value=W.state.spotLightMatrix,Le.spotLightMap.value=W.state.spotLightMap,Le.pointShadowMatrix.value=W.state.pointShadowMatrix),V.numLightProbeGrids=id(w.state.lightProbeGridArray),V.currentProgram=yt,V.uniformsList=null,yt}function N0(E,B,q,V,W){let ye=Xe.get(E),Ce=ye.currentProgram.id+","+V+","+W,ge=ye.programVariants.get(Ce);return ge===void 0?(ge=fo(E,B,q),ye.programVariants.set(Ce,ge)):(ye.currentProgram=ge,ye.uniformsList=null,ye.outputColorSpace=V,ye.toneMapping=W),ge}function sd(E){if(E.uniformsList===null){let B=E.currentProgram.getUniforms();E.uniformsList=jr.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function rd(E,B){let q=Xe.get(E);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.batchingColor=B.batchingColor,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.instancingMorph=B.instancingMorph,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function D0(E,B,q,V,W){B.isScene!==!0&&(B=xt),Ke.resetTextureUnits();let ye=B.fog,Ce=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?B.environment:null,ge=J===null?C.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:ft.workingColorSpace,Ee=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,De=I.get(V.envMap||Ce,Ee),nt=V.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,yt=!!q.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Le=!!q.morphAttributes.position,vt=!!q.morphAttributes.normal,nn=!!q.morphAttributes.color,Ft=Li;V.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ft=C.toneMapping);let Dt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,wn=Dt!==void 0?Dt.length:0,Ne=Xe.get(V),Nn=w.state.lights;if(ce===!0&&(we===!0||E!==Y)){let Vt=E===Y&&V.id===G;Q.setState(V,E,Vt)}let Et=!1,bs=!1;V.version===Ne.__version?Ne.needsLights&&Ne.lightsStateVersion!==Nn.state.version||W.isBatchedMesh&&Ne.batching===!1||!W.isBatchedMesh&&Ne.batching===!0||W.isBatchedMesh&&Ne.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Ne.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Ne.instancing===!1||!W.isInstancedMesh&&Ne.instancing===!0||W.isSkinnedMesh&&Ne.skinning===!1||!W.isSkinnedMesh&&Ne.skinning===!0||W.isInstancedMesh&&Ne.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ne.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ne.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ne.instancingMorph===!1&&W.morphTexture!==null||Ne.envMap!==De||V.fog===!0&&Ne.fog!==ye||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==Q.numPlanes||Ne.numIntersection!==Q.numIntersection)||Ne.vertexAlphas!==nt||Ne.vertexTangents!==yt||Ne.morphTargets!==Le||Ne.morphNormals!==vt||Ne.morphColors!==nn||Ne.morphTargetsCount!==wn||Ne.numLightProbeGrids!==id(w.state.lightProbeGridArray)?Et=!0:(Ne.outputColorSpace!==ge||Ne.toneMapping!==Ft)&&(bs=!0):(Et=!0,Ne.__version=V.version);let An=Ne.currentProgram;(Et===!0||bs===!0)&&(An=bs===!0?N0(V,B,W,ge,Ft):fo(V,B,W),R&&V.isNodeMaterial&&R.onUpdateProgram(V,An,Ne));let Ua=!1,ls=!1,Ts=!1,St=An.getUniforms(),_n=Ne.uniforms;if(xe.useProgram(An.program)&&(Ua=!0,ls=!0,Ts=!0),V.id!==G&&(G=V.id,ls=!0),Ua||Y!==E){xe.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),St.setValue(z,"projectionMatrix",E.projectionMatrix),St.setValue(z,"viewMatrix",E.matrixWorldInverse);let pn=St.map.cameraPosition;pn!==void 0&&pn.setValue(z,st.setFromMatrixPosition(E.matrixWorld)),Nt.logarithmicDepthBuffer&&St.setValue(z,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&St.setValue(z,"isOrthographic",E.isOrthographicCamera===!0),Y!==E&&(Y=E,ls=!0,Ts=!0)}if(Ne.needsLights&&(Nn.state.sunShadowMap.length>0&&St.setValue(z,"sunShadowMap",Nn.state.sunShadowMap,Ke),Nn.state.directionalShadowMap.length>0&&St.setValue(z,"directionalShadowMap",Nn.state.directionalShadowMap,Ke),Nn.state.spotShadowMap.length>0&&St.setValue(z,"spotShadowMap",Nn.state.spotShadowMap,Ke),Nn.state.pointShadowMap.length>0&&St.setValue(z,"pointShadowMap",Nn.state.pointShadowMap,Ke)),W.isSkinnedMesh){St.setOptional(z,W,"bindMatrix"),St.setOptional(z,W,"bindMatrixInverse");let Vt=W.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),St.setValue(z,"boneTexture",Vt.boneTexture,Ke))}W.isBatchedMesh&&(St.setOptional(z,W,"batchingTexture"),St.setValue(z,"batchingTexture",W._matricesTexture,Ke),St.setOptional(z,W,"batchingIdTexture"),St.setValue(z,"batchingIdTexture",W._indirectTexture,Ke),St.setOptional(z,W,"batchingColorTexture"),W._colorsTexture!==null&&St.setValue(z,"batchingColorTexture",W._colorsTexture,Ke));let pi=q.morphAttributes;if((pi.position!==void 0||pi.normal!==void 0||pi.color!==void 0)&&te.update(W,q,An),(ls||Ne.receiveShadow!==W.receiveShadow)&&(Ne.receiveShadow=W.receiveShadow,St.setValue(z,"receiveShadow",W.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&B.environment!==null&&(_n.envMapIntensity.value=B.environmentIntensity),_n.dfgLUT!==void 0&&(_n.dfgLUT.value=$M()),ls){if(St.setValue(z,"toneMappingExposure",C.toneMappingExposure),Ne.needsLights&&U0(_n,Ts),ye&&V.fog===!0&&he.refreshFogUniforms(_n,ye),he.refreshMaterialUniforms(_n,V,Se,ze,w.state.transmissionRenderTarget[E.id]),Ne.needsLights&&Ne.numLightProbeGrids>0){let Vt=M,pn=0;for(let Bi of w.state.lightProbeGridArray)Bi.texture!==null&&(Vt.textures[pn]=Bi.texture,Vt.min[pn]=Bi.boundingBox.min,Vt.max[pn]=Bi.boundingBox.max,Vt.resolution[pn]=Bi.resolution,pn++);for(let Bi in Vt)Vt[Bi].length=pn;_n.probesSH.value=Vt.textures,_n.probesMin.value=Vt.min,_n.probesMax.value=Vt.max,_n.probesResolution.value=Vt.resolution}jr.upload(z,sd(Ne),_n,Ke)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(jr.upload(z,sd(Ne),_n,Ke),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&St.setValue(z,"center",W.center),St.setValue(z,"modelViewMatrix",W.modelViewMatrix),St.setValue(z,"normalMatrix",W.normalMatrix),St.setValue(z,"modelMatrix",W.matrixWorld),V.uniformsGroups!==void 0){let Vt=V.uniformsGroups;for(let pn=0,Bi=Vt.length;pn<Bi;pn++){let ad=Vt[pn];Be.update(ad,An),Be.bind(ad,An)}}return An}function U0(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.sunLights.needsUpdate=B,E.sunLightShadows.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function O0(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(E,B,q){let V=Xe.get(E);V.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),Xe.get(E.texture).__webglTexture=B,Xe.get(E.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:q,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,B){let q=Xe.get(E);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(E,B=0,q=0){J=E,A=B,U=q;let V=null,W=!1,ye=!1;if(E){let ge=Xe.get(E);if(ge.__useDefaultFramebuffer!==void 0){xe.bindFramebuffer(z.FRAMEBUFFER,ge.__webglFramebuffer),j.copy(E.viewport),oe.copy(E.scissor),Re=E.scissorTest,xe.viewport(j),xe.scissor(oe),xe.setScissorTest(Re),G=-1;return}else if(ge.__webglFramebuffer===void 0)Ke.setupRenderTarget(E);else if(ge.__hasExternalTextures)Ke.rebindTextures(E,Xe.get(E.texture).__webglTexture,Xe.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let nt=E.depthTexture;if(ge.__boundDepthTexture!==nt){if(nt!==null&&Xe.has(nt)&&(E.width!==nt.image.width||E.height!==nt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ke.setupDepthRenderbuffer(E)}}let Ee=E.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(ye=!0);let De=Xe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(De[B])?V=De[B][q]:V=De[B],W=!0):E.samples>0&&Ke.useMultisampledRTT(E)===!1?V=Xe.get(E).__webglMultisampledFramebuffer:Array.isArray(De)?V=De[q]:V=De,j.copy(E.viewport),oe.copy(E.scissor),Re=E.scissorTest}else j.copy(qe).multiplyScalar(Se).floor(),oe.copy(ut).multiplyScalar(Se).floor(),Re=gt;if(q!==0&&(V=D),xe.bindFramebuffer(z.FRAMEBUFFER,V)&&xe.drawBuffers(E,V),xe.viewport(j),xe.scissor(oe),xe.setScissorTest(Re),W){let ge=Xe.get(E.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+B,ge.__webglTexture,q)}else if(ye){let ge=B;for(let Ee=0;Ee<E.textures.length;Ee++){let De=Xe.get(E.textures[Ee]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Ee,De.__webglTexture,q,ge)}}else if(E!==null&&q!==0){let ge=Xe.get(E.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ge.__webglTexture,q)}G=-1};function od(E){let B=Xe.get(E);return(B.__readFormat!==E.format||B.__readType!==E.type)&&(B.__readFormat=E.format,B.__readType=E.type,B.__formatReadable=Nt.textureFormatReadable(E.format),B.__typeReadable=Nt.textureTypeReadable(E.type)),B}this.readRenderTargetPixels=function(E,B,q,V,W,ye,Ce,ge=0){if(!(E&&E.isWebGLRenderTarget)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Xe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ee=Ee[Ce],Array.isArray(Ee)&&(Ee=Ee[0])),Ee){xe.bindFramebuffer(z.FRAMEBUFFER,Ee);try{let De=E.textures[ge],nt=De.format,yt=De.type;E.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+ge);let Le=od(De);if(Le.__formatReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Le.__typeReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-V&&q>=0&&q<=E.height-W&&z.readPixels(B,q,V,W,le.convert(nt),le.convert(yt),ye)}finally{let De=J!==null?Xe.get(J).__webglFramebuffer:null;xe.bindFramebuffer(z.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(E,B,q,V,W,ye,Ce,ge=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=Xe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ee=Ee[Ce],Array.isArray(Ee)&&(Ee=Ee[0])),Ee)if(B>=0&&B<=E.width-V&&q>=0&&q<=E.height-W){xe.bindFramebuffer(z.FRAMEBUFFER,Ee);let De=E.textures[ge],nt=De.format,yt=De.type;E.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+ge);let Le=od(De);if(Le.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Le.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let vt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,vt),z.bufferData(z.PIXEL_PACK_BUFFER,ye.byteLength,z.STREAM_READ),z.readPixels(B,q,V,W,le.convert(nt),le.convert(yt),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let nn=J!==null?Xe.get(J).__webglFramebuffer:null;xe.bindFramebuffer(z.FRAMEBUFFER,nn);let Ft=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await kp(z,Ft,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,vt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,ye),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(vt),z.deleteSync(Ft),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,B=null,q=0){let V=Math.pow(2,-q),W=Math.floor(E.image.width*V),ye=Math.floor(E.image.height*V),Ce=B!==null?B.x:0,ge=B!==null?B.y:0;Ke.setTexture2D(E,0),z.copyTexSubImage2D(z.TEXTURE_2D,q,0,0,Ce,ge,W,ye),xe.unbindTexture()},this.copyTextureToTexture=function(E,B,q=null,V=null,W=0,ye=0){let Ce,ge,Ee,De,nt,yt,Le,vt,nn,Ft=E.isCompressedTexture?E.mipmaps[ye]:E.image;if(q!==null)Ce=q.max.x-q.min.x,ge=q.max.y-q.min.y,Ee=q.isBox3?q.max.z-q.min.z:1,De=q.min.x,nt=q.min.y,yt=q.isBox3?q.min.z:0;else{let St=Math.pow(2,-W);Ce=Math.floor(Ft.width*St),ge=Math.floor(Ft.height*St),E.isDataArrayTexture?Ee=Ft.depth:E.isData3DTexture?Ee=Math.floor(Ft.depth*St):Ee=1,De=0,nt=0,yt=0}V!==null?(Le=V.x,vt=V.y,nn=V.z):(Le=0,vt=0,nn=0);let Dt=le.convert(B.format),wn=le.convert(B.type),Ne;B.isData3DTexture?(Ke.setTexture3D(B,0),Ne=z.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Ke.setTexture2DArray(B,0),Ne=z.TEXTURE_2D_ARRAY):(Ke.setTexture2D(B,0),Ne=z.TEXTURE_2D),xe.activeTexture(z.TEXTURE0),xe.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,B.flipY),xe.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),xe.pixelStorei(z.UNPACK_ALIGNMENT,B.unpackAlignment);let Nn=xe.getParameter(z.UNPACK_ROW_LENGTH),Et=xe.getParameter(z.UNPACK_IMAGE_HEIGHT),bs=xe.getParameter(z.UNPACK_SKIP_PIXELS),An=xe.getParameter(z.UNPACK_SKIP_ROWS),Ua=xe.getParameter(z.UNPACK_SKIP_IMAGES);xe.pixelStorei(z.UNPACK_ROW_LENGTH,Ft.width),xe.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ft.height),xe.pixelStorei(z.UNPACK_SKIP_PIXELS,De),xe.pixelStorei(z.UNPACK_SKIP_ROWS,nt),xe.pixelStorei(z.UNPACK_SKIP_IMAGES,yt);let ls=E.isDataArrayTexture||E.isData3DTexture,Ts=B.isDataArrayTexture||B.isData3DTexture;if(E.isDepthTexture){let St=Xe.get(E),_n=Xe.get(B),pi=Xe.get(St.__renderTarget),Vt=Xe.get(_n.__renderTarget);xe.bindFramebuffer(z.READ_FRAMEBUFFER,pi.__webglFramebuffer),xe.bindFramebuffer(z.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let pn=0;pn<Ee;pn++)ls&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Xe.get(E).__webglTexture,W,yt+pn),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Xe.get(B).__webglTexture,ye,nn+pn)),z.blitFramebuffer(De,nt,De+Ce,nt+ge,Le,vt,Le+Ce,vt+ge,z.DEPTH_BUFFER_BIT,z.NEAREST);xe.bindFramebuffer(z.READ_FRAMEBUFFER,null),xe.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(W!==0||E.isRenderTargetTexture||Xe.has(E)){let St=Xe.get(E),_n=Xe.get(B);xe.bindFramebuffer(z.READ_FRAMEBUFFER,P),xe.bindFramebuffer(z.DRAW_FRAMEBUFFER,k);for(let pi=0;pi<Ee;pi++)ls?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,St.__webglTexture,W,yt+pi):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,St.__webglTexture,W),Ts?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,_n.__webglTexture,ye,nn+pi):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,_n.__webglTexture,ye),W!==0?z.blitFramebuffer(De,nt,De+Ce,nt+ge,Le,vt,Le+Ce,vt+ge,z.COLOR_BUFFER_BIT,z.NEAREST):Ts?z.copyTexSubImage3D(Ne,ye,Le,vt,nn+pi,De,nt,Ce,ge):z.copyTexSubImage2D(Ne,ye,Le,vt,De,nt,Ce,ge);xe.bindFramebuffer(z.READ_FRAMEBUFFER,null),xe.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Ts?E.isDataTexture||E.isData3DTexture?z.texSubImage3D(Ne,ye,Le,vt,nn,Ce,ge,Ee,Dt,wn,Ft.data):B.isCompressedArrayTexture?z.compressedTexSubImage3D(Ne,ye,Le,vt,nn,Ce,ge,Ee,Dt,Ft.data):z.texSubImage3D(Ne,ye,Le,vt,nn,Ce,ge,Ee,Dt,wn,Ft):E.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,ye,Le,vt,Ce,ge,Dt,wn,Ft.data):E.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,ye,Le,vt,Ft.width,Ft.height,Dt,Ft.data):z.texSubImage2D(z.TEXTURE_2D,ye,Le,vt,Ce,ge,Dt,wn,Ft);xe.pixelStorei(z.UNPACK_ROW_LENGTH,Nn),xe.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Et),xe.pixelStorei(z.UNPACK_SKIP_PIXELS,bs),xe.pixelStorei(z.UNPACK_SKIP_ROWS,An),xe.pixelStorei(z.UNPACK_SKIP_IMAGES,Ua),ye===0&&B.generateMipmaps===!0&&B.mipmapsAutoUpdate===!0&&z.generateMipmap(Ne),xe.unbindTexture()},this.initRenderTarget=function(E){Xe.get(E).__webglFramebuffer===void 0&&Ke.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Ke.setTextureCube(E,0):E.isData3DTexture?Ke.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ke.setTexture2DArray(E,0):Ke.setTexture2D(E,0),xe.unbindTexture()},this.resetState=function(){A=0,U=0,J=null,xe.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}};function to(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Pt;l.morphTargetsRelative=a;let c=0;for(let h=0;h<i.length;++h){let f=i[h],d=0,u=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in f.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(f.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in f.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(f.morphAttributes[p].length!==i[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(f.morphAttributes[p]),u++}if(u!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0,f=[];for(let d=0;d<i.length;++d){let u=i[d].index;for(let p=0;p<u.count;++p)f.push(u.getX(p)+h);h+=i[d].attributes.position.count}l.setIndex(f)}for(let h in r){let f=Rm(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in o){let f=o[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<f;++d){let u=[];for(let x=0;x<o[h].length;++x)u.push(o[h][x][d]);let p=Rm(u);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function Rm(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new qt(o,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let f=l/t;for(let d=0,u=h.count;d<u;d++)for(let p=0;p<t;p++){let x=h.getComponent(d,p);a.setComponent(d+f,p,x)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function ju(i,e){if(e===Su)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Jr||e===Sa){let t=i.getIndex();if(t===null){let r=[],o=i.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Jr)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Cm=new We,Im=new Bt,Pm=new yn,Lm=new L,Nm=new L;function je(i,e,t=0,n=0,s=0,r=0,o=0,a=0,l=1,c=1,h=1){let f=i.index?i.toNonIndexed():i.clone();Pm.set(r,o,a),Im.setFromEuler(Pm),Nm.set(t,n,s),Lm.set(l,c,h),Cm.compose(Nm,Im,Lm),f.applyMatrix4(Cm);let d=new Me(e),u=f.attributes.position.count,p=new Float32Array(u*3);for(let x=0;x<u;x++)p[x*3]=d.r,p[x*3+1]=d.g,p[x*3+2]=d.b;return f.setAttribute("color",new qt(p,3)),f.attributes.uv||f.setAttribute("uv",new qt(new Float32Array(u*2),2)),f}function Wn(i){return to(i,!1)}var jn=new ke(1,1,1),en=(i,e,t,n=7)=>new rt(i,e,t,n),ss=(i,e=0)=>new Ri(i,e),Qu=(i,e,t=6)=>new Gn(i,e,t),Dm={tree:()=>Wn([je(en(.16,.22,2.6),"#6b4a2e",0,1.3,0),je(ss(1.6,1),"#4f8f3a",0,3.4,0,0,0,0,1,.9,1),je(ss(1.1,1),"#5fa244",.6,4.1,.3),je(ss(1,1),"#467f33",-.7,3.7,-.4)]),palm:()=>{let i=[je(en(.16,.24,3.2),"#9c7a52",0,1.6,0,0,0,.05),je(en(.12,.16,3.2),"#a78457",.16,4.7,0,0,0,.12),je(ss(.35,0),"#7a5a33",.36,6.3,0)];for(let e=0;e<8;e++){let t=e/8*Math.PI*2;i.push(je(Qu(.35,3.2,4),e%2?"#3f8f3a":"#4ea545",.36+Math.cos(t)*1.4,6,Math.sin(t)*1.4,Math.sin(t)*1.25,0,-Math.cos(t)*1.25,1,1,.25))}return Wn(i)},car:()=>Wn([je(jn,"#ffffff",0,.62,0,0,0,0,1.8,.7,4.3),je(jn,"#ffffff",0,1.18,-.15,0,0,0,1.6,.55,2.2),je(jn,"#26313d",0,1.2,-.15,0,0,0,1.64,.4,2),je(en(.34,.34,.25,6),"#151515",.85,.34,1.35,0,0,Math.PI/2),je(en(.34,.34,.25,6),"#151515",-.85,.34,1.35,0,0,Math.PI/2),je(en(.34,.34,.25,6),"#151515",.85,.34,-1.35,0,0,Math.PI/2),je(en(.34,.34,.25,6),"#151515",-.85,.34,-1.35,0,0,Math.PI/2)]),lamp:()=>Wn([je(en(.07,.1,6,6),"#3b4148",0,3,0),je(jn,"#3b4148",.6,6,0,0,0,0,1.3,.1,.12),je(jn,"#fff4c8",1.15,5.9,0,0,0,0,.45,.14,.3)]),waterTower:()=>{let i=[je(en(1.6,1.6,3.2,10),"#7a5638",0,4.2,0),je(Qu(1.75,1.3,10),"#4a3a2c",0,6.45,0)];for(let[e,t]of[[1,1],[-1,1],[1,-1],[-1,-1]])i.push(je(en(.07,.07,2.6,4),"#3a2f28",e*1.1,1.3,t*1.1));return Wn(i)},sage:()=>Wn([je(ss(.6,0),"#8a9a6a",0,.35,0,0,0,0,1,.6,1),je(ss(.45,0),"#77885a",.4,.3,.2)]),joshua:()=>{let i=[je(en(.18,.26,3,5),"#7b6a4f",0,1.5,0)];for(let e=0;e<4;e++){let t=e*1.7,n=Math.cos(t)*.7,s=Math.sin(t)*.7;i.push(je(en(.11,.14,1.6,5),"#7b6a4f",n*.6,3.2,s*.6,s*.8,0,-n*.8)),i.push(je(ss(.4,0),"#5a7a3e",n*1.2,4,s*1.2,0,0,0,.8,1.3,.8))}return Wn(i)},rock:()=>Wn([je(ss(1,0),"#a6876a",0,.4,0,0,0,0,1.3,.7,1),je(ss(.6,0),"#957659",.8,.25,.4)]),cactus:()=>Wn([je(en(.25,.3,3,7),"#4c8a4a",0,1.5,0),je(en(.15,.15,1.1,6),"#4c8a4a",.5,1.7,0,0,0,Math.PI/2),je(en(.15,.15,1,6),"#4c8a4a",.95,2.2,0)]),bench:()=>Wn([je(jn,"#7a5a3a",0,.45,0,0,0,0,1.8,.08,.5),je(jn,"#7a5a3a",0,.75,-.23,0,0,0,1.8,.4,.06),je(jn,"#333",.8,.22,0,0,0,0,.08,.45,.45),je(jn,"#333",-.8,.22,0,0,0,0,.08,.45,.45)]),umbrella:()=>Wn([je(en(.04,.04,2.3,5),"#ddd",0,1.15,0),je(Qu(1.4,.6,8),"#ffffff",0,2.35,0),je(en(.5,.5,.05,8),"#eee",0,.75,0),je(en(.05,.05,.75,5),"#ccc",0,.37,0)]),flood:()=>Wn([je(en(.12,.16,9,6),"#555b63",0,4.5,0),je(jn,"#3a3f45",0,9,0,0,0,0,1.6,.6,.4),je(jn,"#fffbe8",0,9,.21,0,0,0,1.4,.45,.02)]),ac:()=>Wn([je(jn,"#b8bcc0",0,.7,0,0,0,0,2.4,1.4,1.8),je(en(.6,.6,.1,10),"#555",0,1.42,.2)]),flag:()=>Wn([je(en(.04,.05,7,5),"#ccc",0,3.5,0),je(jn,"#ffffff",.62,6.4,0,0,0,0,1.2,.8,.03)])};var ef=class{constructor(){this.p=[],this.n=[],this.uv=[],this.c=[],this.i=[]}quad(e,t,n,s,r,o){let a=this.p.length/3,l=t[0]-e[0],c=t[1]-e[1],h=t[2]-e[2],f=n[0]-e[0],d=n[1]-e[1],u=n[2]-e[2],p=c*u-h*d,x=h*f-l*u,m=l*d-c*f,g=Math.hypot(p,x,m)||1;p/=g,x/=g,m/=g;for(let _ of[e,t,n,s])this.p.push(_[0],_[1],_[2]),this.n.push(p,x,m),this.c.push(r.r,r.g,r.b);for(let _=0;_<8;_++)this.uv.push(o?o[_]:.01);this.i.push(a,a+1,a+2,a,a+2,a+3)}tri(e,t,n,s){let r=this.p.length/3,o=t[0]-e[0],a=t[1]-e[1],l=t[2]-e[2],c=n[0]-e[0],h=n[1]-e[1],f=n[2]-e[2],d=a*f-l*h,u=l*c-o*f,p=o*h-a*c,x=Math.hypot(d,u,p)||1;d/=x,u/=x,p/=x;for(let m of[e,t,n])this.p.push(m[0],m[1],m[2]),this.n.push(d,u,p),this.c.push(s.r,s.g,s.b),this.uv.push(.01,.01);this.i.push(r,r+1,r+2)}geometry(){let e=new Pt;return e.setAttribute("position",new Je(this.p,3)),e.setAttribute("normal",new Je(this.n,3)),e.setAttribute("uv",new Je(this.uv,2)),e.setAttribute("color",new Je(this.c,3)),e.setIndex(this.i),e.computeBoundingSphere(),e}get empty(){return this.i.length===0}},Om=160,tf=(i,e,t=Om)=>Math.floor(i/t)+","+Math.floor(e/t),jM=Om*3,er=class{constructor(){this.cells=new Map}_cell(e,t){let n=tf(e,t),s=this.cells.get(n);return s||(s=new ef,this.cells.set(n,s)),s}quad(e,t,n,s,r,o){this._cell((e[0]+n[0])/2,(e[2]+n[2])/2).quad(e,t,n,s,r,o)}tri(e,t,n,s){this._cell((e[0]+t[0]+n[0])/3,(e[2]+t[2]+n[2])/3).tri(e,t,n,s)}geometries(){let e=[];for(let t of this.cells.values())t.empty||e.push(t.geometry());return e}get empty(){for(let e of this.cells.values())if(!e.empty)return!1;return!0}};function jt(i,e,t,n=!0){let s=document.createElement("canvas");s.width=i,s.height=e,t(s.getContext("2d"),i,e);let r=new zs(s);return r.colorSpace=Xt,n&&(r.wrapS=r.wrapT=Ai),r.anisotropy=4,r}function Fm(i){let e=i>0?i%2147483647:1;return()=>(e=e*16807%2147483647)/2147483647}function Um(i,e){let t=Fm(i==="glass"?7:3),n=[];for(let o=0;o<16;o++)n.push(t()<e);let s=jt(256,256,o=>{o.fillStyle="#ffffff",o.fillRect(0,0,256,256);for(let a=0;a<16;a++){let l=a%4*64,c=Math.floor(a/4)*64,h=40+Math.floor(t()*30);if(i==="glass"){let f=o.createLinearGradient(l,c,l+64,c+64);f.addColorStop(0,`rgb(${h+60},${h+90},${h+120})`),f.addColorStop(1,`rgb(${h},${h+30},${h+60})`),o.fillStyle=f,o.fillRect(l+3,c+6,58,54)}else o.fillStyle=`rgb(${h},${h+12},${h+28})`,o.fillRect(l+16,c+14,32,38),o.fillStyle="rgba(255,255,255,.18)",o.fillRect(l+16,c+14,32,5),o.fillStyle="rgba(0,0,0,.12)",o.fillRect(l+12,c+52,40,4)}}),r=jt(256,256,o=>{o.fillStyle="#000",o.fillRect(0,0,256,256);for(let a=0;a<16;a++){if(!n[a])continue;let l=a%4*64,c=Math.floor(a/4)*64;o.fillStyle=a%3?"#ffd79a":"#fff1cf",i==="glass"?o.fillRect(l+3,c+6,58,54):o.fillRect(l+16,c+14,32,38)}});return{map:s,emi:r}}var zc=class{constructor(e,t){this.scene=e,this.cfg=t,this.root=new ct,e.add(this.root),this.boxes=[],this.grid=new Map,this.CELL=16,this.water=[],this.bridges=[],this.loops=[],this.plazas=[],this.mapOps=[],this.ground=new er,this.masonry=new er,this.glass=new er,this.flat=new er,this.props={},this.disposables=[],this.anim=[],this.bounds=t.bounds,this.R=Fm(t.seed||1),this.winLit=t.winLit||0}rand(e=0,t=1){return e+(t-e)*this.R()}pick(e){return e[Math.floor(this.R()*e.length)]}addBox(e,t,n,s,r,o=0){n<e&&([e,n]=[n,e]),s<t&&([t,s]=[s,t]);let a={x0:e,z0:t,x1:n,z1:s,y0:o,y1:r};this.boxes.push(a);let l=this.CELL;for(let c=Math.floor(e/l);c<=Math.floor(n/l);c++)for(let h=Math.floor(t/l);h<=Math.floor(s/l);h++){let f=c*100003+h,d=this.grid.get(f);d||this.grid.set(f,d=[]),d.push(a)}return a}near(e,t,n=2){let s=this.CELL,r=new Set;for(let o=Math.floor((e-n)/s);o<=Math.floor((e+n)/s);o++)for(let a=Math.floor((t-n)/s);a<=Math.floor((t+n)/s);a++){let l=this.grid.get(o*100003+a);if(l)for(let c of l)r.add(c)}return r}solid(e,t,n){for(let s of this.near(e,n,.1))if(e>s.x0&&e<s.x1&&n>s.z0&&n<s.z1&&t>s.y0&&t<s.y1)return!0;return!1}groundAt(e,t,n,s=.25,r=.45){let o=0;for(let a of this.near(e,t,s))e+s*.6>a.x0&&e-s*.6<a.x1&&t+s*.6>a.z0&&t-s*.6<a.z1&&a.y1<=n+r&&a.y1>o&&(o=a.y1);return o}ceilingAt(e,t,n,s,r=.25){let o=1/0;for(let a of this.near(e,t,r))e+r>a.x0&&e-r<a.x1&&t+r>a.z0&&t-r<a.z1&&a.y0>=n+.2&&a.y0<o&&(o=a.y0);return o}pushOut(e,t,n,s=.45){let r=!1;for(let h of this.near(e.x,e.z,t+1)){if(e.y>=h.y1-s||e.y+n<=h.y0)continue;let f=Math.max(h.x0,Math.min(e.x,h.x1)),d=Math.max(h.z0,Math.min(e.z,h.z1)),u=e.x-f,p=e.z-d,x=u*u+p*p;if(!(x>=t*t))if(r=!0,x>1e-8){let m=Math.sqrt(x),g=(t-m)/m;e.x+=u*g,e.z+=p*g}else{let m=e.x-h.x0,g=h.x1-e.x,_=e.z-h.z0,v=h.z1-e.z,M=Math.min(m,g,_,v);M===m?e.x=h.x0-t:M===g?e.x=h.x1+t:M===_?e.z=h.z0-t:e.z=h.z1+t}}let[o,a,l,c]=this.bounds;return e.x<o+t&&(e.x=o+t,r=!0),e.x>l-t&&(e.x=l-t,r=!0),e.z<a+t&&(e.z=a+t,r=!0),e.z>c-t&&(e.z=c-t,r=!0),r}clearLine(e,t,n,s,r,o){let a=Math.hypot(s-e,o-n),l=Math.max(1,Math.ceil(a/2.5));for(let c=1;c<l;c++){let h=c/l,f=e+(s-e)*h,d=t+(r-t)*h,u=n+(o-n)*h;if(this.solid(f,d,u))return!1}return!0}inWater(e,t){for(let n of this.bridges)if(e>n[0]&&e<n[2]&&t>n[1]&&t<n[3])return!1;for(let n of this.water)if(e>n[0]&&e<n[2]&&t>n[1]&&t<n[3])return!0;return!1}rect(e,t,n,s,r,o,a=!0,l=this.ground){let c=new Me(o);l.quad([e,r,s],[n,r,s],[n,r,t],[e,r,t],c),a&&this.mapOps.push({t:"r",x0:e,z0:t,x1:n,z1:s,c:a===!0?o:a})}poly(e,t,n,s=!0){let r=new Me(n);for(let o=1;o<e.length-1;o++){let a=[e[0][0],t,e[0][1]],l=[e[o][0],t,e[o][1]],c=[e[o+1][0],t,e[o+1][1]];(l[0]-a[0])*(c[2]-a[2])-(l[2]-a[2])*(c[0]-a[0])<0?this.ground.tri(a,l,c,r):this.ground.tri(a,c,l,r)}s&&this.mapOps.push({t:"p",pts:e,c:s===!0?n:s})}road(e,t,n,s,r={}){let o=r.color||this.cfg.asphalt||"#3a3d42";if(this.rect(e,t,n,s,.02,o,this.cfg.mapRoad||"#5b6270"),r.paint===!1)return;let a=n-e>s-t,l=r.paintColor||"#e8d36a";if(a){let c=(t+s)/2;for(let h=e+2;h<n-4;h+=9)this.rect(h,c-.12,h+4,c+.12,.035,l,!1)}else{let c=(e+n)/2;for(let h=t+2;h<s-4;h+=9)this.rect(c-.12,h,c+.12,h+4,.035,l,!1)}}roadSeg(e,t,n,s,r,o={}){let a=n-e,l=s-t,c=Math.hypot(a,l),h=-l/c*r/2,f=a/c*r/2;if(this.poly([[e+h,t+f],[n+h,s+f],[n-h,s-f],[e-h,t-f]],o.y||.025,o.color||this.cfg.asphalt||"#3a3d42",o.map||this.cfg.mapRoad||"#5b6270"),o.paint!==!1){let d=a/c,u=l/c;for(let p=2;p<c-4;p+=10){let x=[e+d*p,t+u*p],m=[e+d*(p+4),t+u*(p+4)],g=-u*.12,_=d*.12;this.poly([[x[0]+g,x[1]+_],[m[0]+g,m[1]+_],[m[0]-g,m[1]-_],[x[0]-g,x[1]-_]],(o.y||.025)+.012,o.paintColor||"#e8d36a",!1)}}}crosswalk(e,t,n,s){for(let r=-n/2+.8;r<n/2-.8;r+=1.6)s==="x"?this.rect(e+r-.4,t-2,e+r+.4,t+2,.04,"#e9e9e4",!1):this.rect(e-2,t+r-.4,e+2,t+r+.4,.04,"#e9e9e4",!1)}park(e,t,n,s,r={}){this.rect(e,t,n,s,.03,r.color||"#5e9a48",r.map||"#4d7f3c");let o=r.trees??Math.floor((n-e)*(s-t)/900);for(let a=0;a<o;a++){let l=this.rand(e+3,n-3),c=this.rand(t+3,s-3);r.avoid&&r.avoid.some(h=>l>h[0]&&l<h[2]&&c>h[1]&&c<h[3])||this.prop(r.palms?"palm":"tree",l,c,this.rand(0,6.28),this.rand(.8,1.25))}r.plaza!==!1&&this.plazas.push({r:[e+2,t+2,n-2,s-2],n:r.people??Math.ceil((n-e)*(s-t)/2500)})}plaza(e,t,n,s,r,o=10,a){r&&this.rect(e,t,n,s,.03,r,a||r),this.plazas.push({r:[e,t,n,s],n:o})}waterRect(e,t,n,s,r){this.water.push([e,t,n,s]);let o=new Me(r||this.cfg.waterColor||"#2f6f9a");this.waterBuf=this.waterBuf||new er,this.waterBuf.quad([e,.05,s],[n,.05,s],[n,.05,t],[e,.05,t],o),this.mapOps.push({t:"r",x0:e,z0:t,x1:n,z1:s,c:"#2d6b96"})}bridge(e,t,n,s,r="#55606a"){this.bridges.push([e,t,n,s]),this.rect(e,t,n,s,.12,this.cfg.asphalt||"#3a3d42",this.cfg.mapRoad||"#5b6270"),n-e>s-t?(this.solidBox(e,t,n,t+.4,1.1,r),this.solidBox(e,s-.4,n,s,1.1,r)):(this.solidBox(e,t,e+.4,s,1.1,r),this.solidBox(n-.4,t,n,s,1.1,r))}boxMesh(e,t,n,s,r,o,a,l="masonry",c={}){let h=l==="glass"?this.glass:l==="flat"?this.flat:this.masonry,f=new Me(a),d=f.clone().multiplyScalar(c.roofMul??.78),u=l==="glass"?13:14,p=l==="glass"?14:14.4,x=l==="flat"?0:1,m=w=>w/u*x,g=r/p*x,_=o/p*x,v=c.uOff||0,M=n-e,b=s-t;h.quad([e,r,s],[n,r,s],[n,o,s],[e,o,s],f,[v,g,v+m(M),g,v+m(M),_,v,_]),h.quad([n,r,t],[e,r,t],[e,o,t],[n,o,t],f,[v,g,v+m(M),g,v+m(M),_,v,_]),h.quad([n,r,s],[n,r,t],[n,o,t],[n,o,s],f,[v,g,v+m(b),g,v+m(b),_,v,_]),h.quad([e,r,t],[e,r,s],[e,o,s],[e,o,t],f,[v,g,v+m(b),g,v+m(b),_,v,_]),c.noTop||h.quad([e,o,s],[n,o,s],[n,o,t],[e,o,t],d),c.bottom&&h.quad([e,r,t],[n,r,t],[n,r,s],[e,r,s],d),c.collide!==!1&&this.addBox(e,t,n,s,o,r)}solidBox(e,t,n,s,r,o,a=0,l=!0){this.boxMesh(e,t,n,s,a,a+r,o,"flat",{collide:l})}building(e,t,n,s,r,o={}){let a=o.style||(r>70&&this.R()<.55?"glass":"masonry"),l=o.color||this.pick(this.cfg.palette[a]||this.cfg.palette.masonry),c=n-e,h=s-t,f=Math.floor(this.R()*4)/4;if(r>55&&o.setback!==!1&&Math.min(c,h)>18&&this.R()<(o.setbackChance??.6)){let d=r*this.rand(.35,.6),u=Math.min(c,h)*this.rand(.12,.22);if(this.boxMesh(e,t,n,s,0,d,l,a,{uOff:f}),this.R()<.5&&r>120){let p=d+(r-d)*.6,x=u*1.9;this.boxMesh(e+u,t+u,n-u,s-u,d,p,l,a,{uOff:f}),this.boxMesh(e+x,t+x,n-x,s-x,p,r,l,a,{uOff:f})}else this.boxMesh(e+u,t+u,n-u,s-u,d,r,l,a,{uOff:f})}else this.boxMesh(e,t,n,s,0,r,l,a,{uOff:f});if(this.mapOps.push({t:"b",x0:e,z0:t,x1:n,z1:s}),o.rooftop!==!1&&r<70&&c>8&&h>8){let d=(r>55,r);if(this.R()<.55){let u=this.rand(e+3,n-3),p=this.rand(t+3,s-3);this.prop("ac",u,p,0,1,d),this.addBox(u-1.2,p-.9,u+1.2,p+.9,d+1.4,d)}if(this.cfg.waterTowers&&this.R()<this.cfg.waterTowers){let u=this.rand(e+3,n-3),p=this.rand(t+3,s-3);this.prop("waterTower",u,p,0,1,d)}}return{x0:e,z0:t,x1:n,z1:s,h:r,style:a,color:l}}block(e,t,n,s,r={}){let o=[],a=r.lot||[16,34],l=r.depth||32,c=n-e,h=s-t,f=r.hMin??15,d=r.hMax??60,u=()=>{let x=Math.pow(this.R(),r.skew??1.6),m=f+(d-f)*x;return this.R()<(r.lowChance??.12)&&(m=this.rand(7,13)),m},p=(x,m,g,_)=>{r.avoid&&r.avoid(x,m,g,_)||o.push(this.building(x,m,g,_,u(),r))};if(Math.min(c,h)<l*2.1)if(c>=h)for(let x=e;x<n-4;){let m=Math.min(this.rand(a[0],a[1]),n-x);p(x,t,x+m-(r.gap??0),s),x+=m}else for(let x=t;x<s-4;){let m=Math.min(this.rand(a[0],a[1]),s-x);p(e,x,n,x+m-(r.gap??0)),x+=m}else{for(let x=e;x<n-4;){let m=Math.min(this.rand(a[0],a[1]),n-x);p(x,t,x+m,t+l),p(x,s-l,x+m,s),x+=m}for(let x=t+l;x<s-l-4;){let m=Math.min(this.rand(a[0],a[1]),s-l-x);p(e,x,e+l,x+m),p(n-l,x,n,x+m),x+=m}r.court&&this.rect(e+l,t+l,n-l,s-l,.03,r.court,!1)}return r.walk!==!1&&this.loops.push({r:[e-2.5,t-2.5,n+2.5,s+2.5],n:r.people}),o}prop(e,t,n,s=0,r=1,o=0,a){if((this.props[e]=this.props[e]||[]).push({x:t,y:o,z:n,rot:s,s:r,color:a}),(e==="tree"||e==="palm"||e==="joshua")&&this.addBox(t-.25*r,n-.25*r,t+.25*r,n+.25*r,o+3*r,o),e==="car"){let l=Math.abs(Math.cos(s)),c=Math.abs(Math.sin(s)),h=.9*l+2.15*c,f=.9*c+2.15*l;this.addBox(t-h,n-f,t+h,n+f,o+1.45,o)}}parkCars(e,t,n,s,r=.5,o){let a=n-e>s-t,l=o||this.cfg.carColors||["#c43c3c","#2f5fa8","#e8e8e8","#222","#8a8f96","#d9b44a"];if(a)for(let c=e+6;c<n-6;c+=6.2)this.R()<r&&this.prop("car",c,t+1.4,Math.PI/2,1,0,this.pick(l)),this.R()<r&&this.prop("car",c,s-1.4,-Math.PI/2,1,0,this.pick(l));else for(let c=t+6;c<s-6;c+=6.2)this.R()<r&&this.prop("car",e+1.4,c,0,1,0,this.pick(l)),this.R()<r&&this.prop("car",n-1.4,c,Math.PI,1,0,this.pick(l))}lamps(e,t,n,s,r=30){if(n-e>s-t)for(let a=e+8;a<n;a+=r)this.prop("lamp",a,t-1,Math.PI/2),this.prop("lamp",a+r/2,s+1,-Math.PI/2);else for(let a=t+8;a<s;a+=r)this.prop("lamp",e-1,a,0),this.prop("lamp",n+1,a+r/2,Math.PI)}mesh(e){return this.root.add(e),e.traverse(t=>{t.isMesh&&(t.castShadow=t.castShadow!==!1,t.receiveShadow=!0)}),e}mapRect(e,t,n,s,r){this.mapOps.push({t:"r",x0:e,z0:t,x1:n,z1:s,c:r})}mapBuilding(e,t,n,s){this.mapOps.push({t:"b",x0:e,z0:t,x1:n,z1:s})}finish(){let e=this.cfg,t=new Yt({vertexColors:!0}),[n,s,r,o]=this.bounds,a=2500,l=new et(new In(r-n+a*2,o-s+a*2),new Yt({color:e.outerGround||e.groundColor}));l.rotation.x=-Math.PI/2,l.position.set((n+r)/2,-.02,(s+o)/2),l.receiveShadow=!0,this.root.add(l),this.rect(n,s,r,o,.005,e.groundColor,!1);for(let p of this.ground.geometries()){let x=new et(p,t);x.receiveShadow=!0,this.root.add(x)}if(this.waterBuf){let p=new sa({vertexColors:!0,shininess:90,specular:8952234});for(let x of this.waterBuf.geometries()){let m=new et(x,p);m.receiveShadow=!0,this.root.add(m)}}let c=Um("masonry",this.winLit?.32:0),h=Um("glass",this.winLit?.28:0),f=(p,x)=>{if(p.empty)return;let m=new Yt({vertexColors:!0,map:x.map});this.winLit&&(m.emissiveMap=x.emi,m.emissive=new Me(16777215),m.emissiveIntensity=this.winLit);for(let g of p.geometries()){let _=new et(g,m);_.castShadow=!0,_.receiveShadow=!0,this.root.add(_)}};f(this.masonry,c),f(this.glass,h),f(this.flat,{map:null,emi:null});let d=new Ut,u=new Me;for(let p in this.props){let x=this.props[p];if(!x.length)continue;let m=Dm[p](),g=new Yt({vertexColors:!0});(p==="lamp"||p==="flood")&&(g.emissive=new Me(this.cfg.night?10061909:0));let _=new Map;for(let v of x){let M=tf(v.x,v.z,jM);(_.get(M)||_.set(M,[]).get(M)).push(v)}for(let v of _.values()){let M=new vi(m,g,v.length);v.forEach((b,w)=>{d.position.set(b.x,b.y,b.z),d.rotation.set(0,b.rot,0),d.scale.setScalar(b.s),d.updateMatrix(),M.setMatrixAt(w,d.matrix),M.setColorAt(w,u.set(b.color||"#ffffff"))}),M.castShadow=p!=="sage",M.receiveShadow=!0,M.computeBoundingSphere(),this.root.add(M)}}this.mergeStatic(),this.buildMinimap(),this.indexCullables()}indexCullables(){this.root.updateMatrixWorld(!0),this.cull=[];for(let e of this.root.children){if(!e.isMesh||e.userData.dynamic)continue;let t=e.geometry;t.boundingSphere||t.computeBoundingSphere();let n=t.boundingSphere;if(!n||n.radius>400)continue;let s=n.center.clone().applyMatrix4(e.matrixWorld);this.cull.push({m:e,x:s.x,z:s.z,r:n.radius})}}cullFar(e,t){let n=e.position.x,s=e.position.z;for(let r of this.cull){let o=Math.hypot(r.x-n,r.z-s)-r.r;r.m.visible=o<t}}mergeStatic(){this.root.updateMatrixWorld(!0);let e=new Map;for(let t of[...this.root.children]){if(!t.isMesh||t.isInstancedMesh||t.userData.dynamic||Array.isArray(t.material)||t.geometry.userData.merged)continue;let n=t.geometry,s=t.getWorldPosition(new L),r=t.material.uuid+"|"+Object.keys(n.attributes).sort().join(",")+"|"+t.castShadow+"|"+tf(s.x,s.z);(e.get(r)||e.set(r,[]).get(r)).push(t)}for(let t of e.values()){if(t.length<2)continue;let n=t.map(o=>{let a=o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone();a.applyMatrix4(o.matrixWorld);for(let l of Object.keys(a.morphAttributes))delete a.morphAttributes[l];return a}),s=to(n,!1);if(n.forEach(o=>o.dispose()),!s)continue;s.userData.merged=!0,s.computeBoundingSphere();let r=new et(s,t[0].material);r.castShadow=t[0].castShadow,r.receiveShadow=!0,r.renderOrder=t[0].renderOrder,this.root.add(r);for(let o of t)this.root.remove(o),o.geometry.dispose()}}buildMinimap(){let[e,t,n,s]=this.bounds,r=1024,o=r/Math.max(n-e,s-t),a=document.createElement("canvas");a.width=Math.ceil((n-e)*o),a.height=Math.ceil((s-t)*o);let l=a.getContext("2d");l.fillStyle=this.cfg.mapGround||"#9aa3ad",l.fillRect(0,0,a.width,a.height);let c=f=>(f-e)*o,h=f=>(f-t)*o;for(let f of this.mapOps)f.t==="r"?(l.fillStyle=f.c,l.fillRect(c(f.x0),h(f.z0),(f.x1-f.x0)*o+.5,(f.z1-f.z0)*o+.5)):f.t==="p"&&(l.fillStyle=f.c,l.beginPath(),f.pts.forEach((d,u)=>u?l.lineTo(c(d[0]),h(d[1])):l.moveTo(c(d[0]),h(d[1]))),l.closePath(),l.fill());l.fillStyle=this.cfg.mapBuilding||"#2b3240";for(let f of this.mapOps)f.t==="b"&&l.fillRect(c(f.x0),h(f.z0),(f.x1-f.x0)*o,(f.z1-f.z0)*o);this.minimap={canvas:a,sc:o,x0:e,z0:t}}dispose(){this.root.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(n=>{for(let s of["map","emissiveMap","envMap"])n[s]&&n[s].dispose();n.dispose()})}),this.scene.remove(this.root)}};var tr=new Map;function Ie(i,e={}){let t="l"+i+JSON.stringify(e);if(tr.has(t))return tr.get(t);let n=new Yt({color:i,...e});return tr.set(t,n),n}function rs(i){let e="g"+i;if(tr.has(e))return tr.get(e);let t=new Rt({color:i});return tr.set(e,t),t}function Bm(){tr.clear(),Vc=[]}function He(i,e,t,n=0,s=0,r=0,o=0,a=0,l=0,c=1,h=1,f=1){let d=new et(e,t);return d.position.set(n,s,r),d.rotation.set(o,a,l),d.scale.set(c,h,f),d.castShadow=!0,d.receiveShadow=!0,i.root.add(d),d}function tt(i,e,t,n,s,r,o,a,l=!0){let c=He(i,new ke(n-e,o-r,s-t),a,(e+n)/2,(r+o)/2,(t+s)/2);return l&&i.addBox(e,t,n,s,o,r),c}function QM(i,e={}){let t=!!e.vertical,n=e.fs||64,s=e.pad??14,r=t?i.split(""):[i],o=t?n+s*2:Math.ceil(i.length*n*.62)+s*2,a=t?r.length*n*.95+s*2:n+s*2;return jt(Math.min(2048,o),Math.min(2048,a),(l,c,h)=>{l.fillStyle=e.bg||"#000",l.fillRect(0,0,c,h),l.font=`${e.weight||"bold"} ${n}px ${e.font||"Arial, sans-serif"}`,l.textAlign="center",l.textBaseline="middle",e.glow&&(l.shadowColor=e.glow,l.shadowBlur=n*.35),l.fillStyle=e.fg||"#fff",t?r.forEach((f,d)=>l.fillText(f,c/2,s+n*.5+d*n*.95)):l.fillText(i,c/2,h/2+2),e.border&&(l.shadowBlur=0,l.strokeStyle=e.border,l.lineWidth=6,l.strokeRect(4,4,c-8,h-8))},!1)}function os(i,e,t,n,s,r,o,a,l={}){let c=QM(e,l),h=new et(new In(r,o),l.lit===!1?new Yt({map:c}):new Rt({map:c}));return h.position.set(t,n,s),h.rotation.y=a,i.root.add(h),h}var eS=[["ZORP COLA","#e8242c","#fff"],["GALAXY FONE","#121a3a","#5ef0ff"],["NEBULA+","#5a1e8c","#ffd84a"],["MOON MILK","#f4f0e6","#2b3a8a"],["ORBIT AIR","#ff7a1a","#fff"],["STARDUST","#0c0c0c","#ff4fb8"],["COMET JEANS","#1d4fa8","#fff"],["CRATER BURGER","#ffcc22","#c01818"],["PULSAR TV","#00a86b","#fff"],["ROCKET RIDE","#e8e8e8","#e8242c"],["ASTRO SNAX","#ff3a3a","#ffe94a"],["LUNAR BANK","#0a2a5a","#e8e8e8"],["SATURN SODA","#b02cd6","#fff"],["TOP HAT SHOW","#111","#ffcf4a"],["WARP 9","#17d0e8","#081a2a"],["FUSION FIT","#ff2e63","#fff"]],Hc=null,Vc=[];function tS(){return Hc||(Hc=eS.map(([i,e,t],n)=>jt(512,256,(s,r,o)=>{let a=s.createLinearGradient(0,0,r,o);a.addColorStop(0,e),a.addColorStop(1,nS(e,n%2?-40:40)),s.fillStyle=a,s.fillRect(0,0,r,o),s.globalAlpha=.25,s.fillStyle=t;for(let l=0;l<6;l++)s.beginPath(),s.arc((l*97+n*53)%r,(l*61+n*29)%o,20+l*13%60,0,7),s.fill();s.globalAlpha=1,s.fillStyle=t,s.font=`bold ${i.length>9?62:80}px Arial Black, Arial, sans-serif`,s.textAlign="center",s.textBaseline="middle",s.shadowColor=t,s.shadowBlur=16,s.fillText(i,r/2,o/2)},!1)),Hc)}function nS(i,e){let t=new Me(i);return t.offsetHSL(0,0,e/255),"#"+t.getHexString()}function Gc(i,e,t,n,s,r,o,a){let l=tS(),c=a%l.length;Vc[c]=Vc[c]||new Rt({map:l[c]});let h=new et(new In(s,r),Vc[c]);return h.castShadow=!1,h.position.set(e,t,n),h.rotation.y=o,i.root.add(h),h}function nf(i,e,t,n=6,s=45,r=0,o=[0,1,2,3]){let a=r;for(let l of o){let c=l<2?e.x1-e.x0:e.z1-e.z0;if(!(c<8))for(let h=0;h<t;h++){let f=Math.min(c*i.rand(.55,.9),30),d=Math.min(f*i.rand(.45,.8),18),u=i.rand(n,Math.max(n,Math.min(s,e.h-d/2-1))),p=i.rand(-(c-f)/2,(c-f)/2);l===0&&Gc(i,(e.x0+e.x1)/2+p,u,e.z1+.15,f,d,0,a++),l===1&&Gc(i,(e.x0+e.x1)/2+p,u,e.z0-.15,f,d,Math.PI,a++),l===2&&Gc(i,e.x1+.15,u,(e.z0+e.z1)/2+p,f,d,Math.PI/2,a++),l===3&&Gc(i,e.x0-.15,u,(e.z0+e.z1)/2+p,f,d,-Math.PI/2,a++)}}}function Xc(i,e,t,n,s,r,o,a=[]){let[l,c,h,f]=e;for(let d=0;d<n;d++){let u=Math.floor(i.R()*4),p,x;if(u===0?(p=i.rand(l-t,h+t),x=i.rand(c-t,c-40)):u===1?(p=i.rand(l-t,h+t),x=i.rand(f+40,f+t)):u===2?(p=i.rand(l-t,l-40),x=i.rand(c,f)):(p=i.rand(h+40,h+t),x=i.rand(c,f)),a.some(_=>p>_[0]&&p<_[2]&&x>_[1]&&x<_[3]))continue;let m=i.rand(20,45),g=s+Math.pow(i.R(),2)*(r-s);i.boxMesh(p-m/2,x-m/2,p+m/2,x+m/2,0,g,i.pick(o),g>80?"glass":"masonry",{collide:!1})}}function km(i,e,t,n,s,r,o){let a=new Gn(1,1,6,1);for(let l=0;l<r;l++){let c=l/r*Math.PI*2+i.rand(-.05,.05),h=i.rand(n,s),f=i.rand(90,260),d=i.rand(180,380),u=He(i,a,Ie(i.pick(o),{flatShading:!0}),e+Math.cos(c)*h,f/2-5,t+Math.sin(c)*h,0,i.rand(0,3),0,d,f,d*i.rand(.6,1));u.castShadow=!1}}function Wc(i,e,t,n,s,r=0,o={}){let a=new ct;a.position.set(e,t,n),a.rotation.set(r,o.ry||0,r*.4);let l=new gn({color:"#b8bfd0",metalness:.7,roughness:.35}),c=new gn({color:"#5a6274",metalness:.6,roughness:.5}),h=new Rt({color:o.lights||"#3ff0ff"}),f=(u,p,x,m,g,_=1,v=1,M=1)=>{let b=new et(u,p);return b.position.set(x,m,g),b.scale.set(_,v,M),b.castShadow=!0,b.receiveShadow=!0,a.add(b),b};f(new Mt(s,32,12),l,0,0,0,1,.22,1),f(new cn(s*.98,s*.05,8,40),c,0,0,0).rotation.x=Math.PI/2;let d=f(new Mt(s*.38,24,12,0,Math.PI*2,0,Math.PI/2),new gn({color:o.domeColor||"#7fd6ff",metalness:.1,roughness:.1,transparent:!0,opacity:.75}),0,s*.12,0);for(let u=0;u<12;u++){let p=u/12*Math.PI*2;f(new Mt(s*.04,8,6),h,Math.cos(p)*s*.85,-s*.02,Math.sin(p)*s*.85)}return f(new rt(s*.25,s*.32,s*.1,20),c,0,-s*.2,0),i.root.add(a),{group:a,dome:d,lights:h}}function qc(i,e,t,n,s,r,o){He(i,new Gn(n*.72,r,4),o,e,s+r/2,t,0,Math.PI/4,0)}var rn=4;function Ui(i,e,t,n,s,r){i.road(e-t/2,n,e+t/2,s,r)}function Ti(i,e,t,n,s,r){i.road(n,e-t/2,s,e+t/2,r)}function Zc(i,e,t){for(let[n,s]of e)for(let[r,o]of t)i.crosswalk(n,r-o/2-2.5,s,"x"),i.crosswalk(n,r+o/2+2.5,s,"x"),i.crosswalk(n-s/2-2.5,r,o,"z"),i.crosswalk(n+s/2+2.5,r,o,"z")}function sf(i,e,t){for(let n=0;n<i.length-1;n++)for(let s=0;s<e.length-1;s++){let r=i[n][0]+i[n][1]/2+rn,o=i[n+1][0]-i[n+1][1]/2-rn,a=e[s][0]+e[s][1]/2+rn,l=e[s+1][0]-e[s+1][1]/2-rn;o-r>4&&l-a>4&&t(n,s,r,a,o,l)}}var Gm=(i,e)=>i[0]<e[2]&&i[2]>e[0]&&i[1]<e[3]&&i[3]>e[1];function iS(i,e,t=8,n){return jt(64,256,(s,r,o)=>{s.fillStyle=i,s.fillRect(0,0,r,o);for(let a=0;a<t;a++)if(s.fillStyle=e,s.fillRect(0,a*o/t,r,o/t*.4),n){s.fillStyle=n;for(let l=0;l<4;l++)(a*7+l*3)%5<2&&s.fillRect(l*16+3,a*o/t+o/t*.5,10,o/t*.35)}})}function sS(i){let e=i.bounds,t=[[-402,20],[-201,18],[0,24],[100,18],[201,30],[410,26],[620,44]],n=[[-560,26],[-402,18],[-302,24],[-201,20],[0,20],[201,20],[402,20],[520,20]],s=[[-1180,18],[-1005,18],[-864,14],[-804,16],[-655,0]],r=[-655,-585];i.waterRect(680,-3e3,3e3,3e3,"#2f7fa6"),i.waterRect(-3e3,r[0],680,r[1],"#2c6a8a"),i.rect(642,e[1],680,e[3],.03,"#d9cdb2","#cdbf9f"),i.plaza(645,-540,676,400,null,10);for(let[A,U]of t)Ui(i,A,U,r[1],e[3]);for(let[A,U]of n)A===-201||A===0||A===201?(Ti(i,A,U,e[0],186),Ti(i,A,U,423,598)):A===402?(Ti(i,A,U,e[0],186),Ti(i,A,U,423,620)):Ti(i,A,U,e[0],642);Zc(i,t.filter(([A])=>A<=201),n.filter(([A])=>A!==520));let o=[[-402,20],[-201,18],[0,24],[100,18],[201,30],[330,16],[410,26],[620,44]];for(let[A,U]of o)Ui(i,A,U,e[1],r[0]);for(let[A,U]of s)U&&Ti(i,A,U,e[0],642);Zc(i,o.filter(([A])=>A<=410),s.filter(([,A])=>A));for(let[A,U]of o)i.bridge(A-U/2,r[0],A+U/2,r[1]);let a=Ie("#d8cdb4");for(let A of[184,218])for(let U of[-660,-580])tt(i,A-3,U-3,A+3,U+3,0,9,a);i.plaza(e[0],-585,642,-577,"#b9ab90",26,"#b9ab90");for(let A=-440;A<640;A+=22)i.prop("tree",A,-581,0,.7);for(let A=-430;A<640;A+=40)i.prop("bench",A,-579,Math.PI);let l={};i.park(216+rn,-290+rn,397-rn,191-rn,{trees:0,plaza:!1,color:"#62a04a"}),i.plaza(220,-285,300,-150,"#c9c3b6",34,"#c9c3b6");let c=new gn({color:"#e8ecf2",metalness:1,roughness:.06});i.reflective=[c],He(i,new rt(6.5,7,.8,40),Ie("#9aa3ad"),262,.4,-215),He(i,new cn(5.2,.85,20,64),c,262,6.6,-215,0,.35,0),He(i,new Mt(1.7,40,20),c,262,6.6,-215),i.addBox(255.5,-221.5,268.5,-208.5,.8,0),i.addBox(260.5,-217,263.5,-213,12.6,.8),i.mapRect(255,-222,269,-208,"#dfe6ee"),l.bean=[262,12.7,-215];let h=new gn({color:"#d6dbe2",metalness:.9,roughness:.25});i.reflective.push(h),tt(i,304,-282,322,-242,0,1.5,Ie("#8a7a66")),tt(i,300,-286,306,-238,0,12,Ie("#b6ab9a"));for(let A=0;A<9;A++){let U=He(i,new cn(10+A*1.3,.35,4,18,Math.PI*(.55+A%3*.15)),h,304,16+A%4,-262+(A-4)*4.2,0,Math.PI/2+(A%2?.3:-.3),A*.5);U.castShadow=!1}i.park(324,-296,396,-150,{trees:0,plaza:!0,people:22,color:"#6fb354"});let f=[];for(let A=330;A<=392;A+=15.5)f.push(new rt(.4,.4,150,6).rotateX(Math.PI/2).translate(A,19,-223));for(let A=-290;A<=-156;A+=16.5)f.push(new rt(.4,.4,66,6).rotateZ(Math.PI/2).translate(361,19,A));for(let A of f){let U=He(i,A,h);U.castShadow=!1}for(let[A,U]of[[328,-292],[394,-292],[328,-154],[394,-154]])tt(i,A-1,U-1,A+1,U+1,0,19,Ie("#9aa2ab"));let d=jt(128,256,(A,U,J)=>{let G=A.createLinearGradient(0,0,0,J);G.addColorStop(0,"#1b3a5c"),G.addColorStop(1,"#0d1f33"),A.fillStyle=G,A.fillRect(0,0,U,J),A.fillStyle="#7cf2c8";let Y=6;["..####..",".######.","########",".#.#.#..","..#..#.."].forEach((oe,Re)=>[...oe].forEach((Z,fe)=>{Z==="#"&&A.fillRect(40+fe*Y,60+Re*Y,Y-1,Y-1)})),A.fillStyle="rgba(255,230,120,.9)";for(let oe=0;oe<18;oe++)A.fillRect(oe*37%120+4,120+oe*53%120,4,4);A.fillStyle="rgba(255,255,255,.10)";for(let oe=0;oe<J;oe+=6)A.fillRect(0,oe,U,2)},!1);for(let A of[40,160]){tt(i,236,A-3.5,252,A+3.5,0,15,new Yt({color:"#cfe0e8",emissive:"#203038"}));let U=new et(new In(14,14),new Rt({map:d}));U.position.set(244,7.5,A+(A<100?3.55:-3.55)),U.rotation.y=A<100?0:Math.PI,i.root.add(U)}i.rect(236,44,252,156,.05,"#2b2f36","#2b2f36"),i.rect(237,46,251,154,.07,"#6fa8c8",!1),i.plaza(222,30,300,175,null,18),i.rect(320,20,395,180,.04,"#6a8f3e","#557a33");for(let A=0;A<60;A++)i.rect(...(()=>{let U=i.rand(322,390),J=i.rand(22,176);return[U,J,U+3,J+3]})(),.05,i.pick(["#8a5fc0","#d96aa0","#e8c94a","#7a4aa0"]),!1);let u=Ie("#cfc6ae"),p=Ie("#b3a98f");tt(i,222,226,330,398,0,13,u),tt(i,214,268,222,356,0,1.2,p),tt(i,218,268,222,356,1.2,2.4,p);for(let A=274;A<=350;A+=9.5)tt(i,218,A-.8,220,A+.8,2.4,11,u);tt(i,216,266,224,358,11,13,p);let x=new Hs;x.moveTo(-30,0),x.lineTo(30,0),x.lineTo(0,6),x.lineTo(-30,0),He(i,new Hr(x,{depth:6,bevelEnabled:!1}),u,216,13,312,0,-Math.PI/2,0),i.mapBuilding(214,226,330,398);let m=Ie("#5f6346");for(let A of[262,362])tt(i,205,A-2,213,A+2,0,2.2,p),He(i,new ke(5,1.8,1.8),m,209,3.3,A),He(i,new Mt(1.2,10,8),m,206.8,4.4,A),He(i,new ke(1,.8,.9),m,205.6,4.2,A);i.plaza(203,262,216,365,null,10),tt(i,340,300,402,398,0,14,Ie("#eef1f2")),He(i,new ke(70,.6,104),Ie("#f6f7f8"),371,14.6,349),i.addBox(336,297,406,401,14.9,14.3),i.mapBuilding(340,300,402,398),l.coil=[276,13.6,312],i.building(118,-290,182,-213,30,{color:"#d9c9a3",style:"masonry",setback:!1}),i.building(226,-470,262,-420,183,{color:"#bdb6a8",style:"masonry",setback:!1}),He(i,new rt(.6,.8,40,6),Ie("#ddd"),244,203,-445);let g=i.building(268,-480,304,-432,230,{color:"#c2bdb6",style:"glass",setback:!1});for(let A=0;A<4;A++){let U=3+A*3.5;i.boxMesh(268+U,-480+U,304-U,-432-U,230+A*9,239+A*9,"#c2bdb6","flat")}qc(i,286,-456,6,266,40,Ie("#c2bdb6")),i.building(342,-480,398,-424,346,{color:"#f2f1ea",style:"masonry",setback:!1}),i.building(454,-545,500,-508,363,{color:"#7fb3d6",style:"glass",setbackChance:1}),i.building(440,-480,476,-436,262,{color:"#d6e2ea",style:"glass",setback:!1}),i.building(520,-540,600,-500,190,{color:"#9fb2c6",style:"glass"}),i.building(520,-470,600,-420,150,{color:"#a9bccf",style:"glass"}),i.park(426,-390,598,-320,{trees:10,people:8}),i.building(-46,-390,-14,-330,26,{color:"#c9a58a",style:"masonry",setback:!1,rooftop:!1}),He(i,new ke(2,.6,26),rs("#ffd86b"),-12,6.2,-360);let v=os(i,"PALACE",-11,15,-360,3.2,17,Math.PI/2,{vertical:!0,fg:"#fff3c4",bg:"#c01e1e",glow:"#ffe08a",fs:72}).clone();v.rotation.y=0,v.position.set(-12.5,15,-358.5),v.scale.set(.5,1,1),i.root.add(v);let M=Ie("#3f4a3c");for(let A=-402;A<=e[3];A+=18)for(let U of[91,109])tt(i,U-.5,A-.5,U+.5,A+.5,0,6,M);tt(i,92,-409,108,e[3],6,6.8,M);for(let A=e[0];A<=92;A+=18)for(let U of[-411,-393])tt(i,A-.5,U-.5,A+.5,U+.5,0,6,M);tt(i,e[0],-410,92,-394,6,6.8,M);let b=Ie("#c9ced6");for(let A=0;A<4;A++){let U=60+A*15;tt(i,95.5,U,99.5,U+14.2,6.8,10.3,b),He(i,new ke(4.05,.9,13.6),Ie("#2a3440"),97.5,9.1,U+7.1)}let w=new Yt({map:iS("#e9e6dc","#a9a59a",6)});w.map.repeat.set(4,22);for(let A of[-140,-84])He(i,new rt(16,16,179,20),w,A,89.5,-715),i.addBox(A-13,-728,A+13,-702,179),i.mapRect(A-16,-731,A+16,-699,"#2b3240");let y=[[22,-738,82,-668,100],[28,-732,76,-674,220],[34,-726,70,-680,360]],S=0;for(let[A,U,J,G,Y]of y)i.boxMesh(A,U,J,G,S,Y,"#a8b4c0","glass"),S=Y;He(i,new rt(.8,1.4,63,6),Ie("#ccd"),52,391,-703),i.mapBuilding(22,-738,82,-668);let N="#f4f1e8";i.building(122,-735,186,-665,62,{color:N,style:"masonry",setback:!1,rooftop:!1}),i.boxMesh(160,-712,182,-690,62,110,N,"masonry"),i.boxMesh(164,-708,178,-694,110,124,N,"flat"),He(i,new rt(3,5,10,8),Ie(N),171,129,-701);let C=jt(64,64,A=>{A.fillStyle="#fff",A.beginPath(),A.arc(32,32,30,0,7),A.fill(),A.strokeStyle="#222",A.lineWidth=3,A.stroke(),A.beginPath(),A.moveTo(32,32),A.lineTo(32,12),A.moveTo(32,32),A.lineTo(46,38),A.stroke()},!1);for(let[A,U,J]of[[171,-689.9,0],[171,-712.1,Math.PI],[182.1,-701,Math.PI/2],[159.9,-701,-Math.PI/2]]){let G=new et(new oi(4,20),new Rt({map:C}));G.position.set(A,100,U),G.rotation.y=J,i.root.add(G)}i.building(122,-800,186,-742,52,{color:N,style:"masonry",setback:!1});let O="#d9cdb0";i.building(216,-790,270,-702,112,{color:O,style:"masonry",setback:!1,rooftop:!1}),i.boxMesh(230,-760,256,-732,112,132,O,"masonry");for(let[A,U]of[[230,-760],[256,-760],[230,-732],[256,-732],[243,-760],[243,-732],[230,-746],[256,-746]])i.boxMesh(A-1.2,U-1.2,A+1.2,U+1.2,112,140,O,"flat",{collide:!1}),qc(i,A,U,2.4,140,6,Ie(O));i.plaza(216,-698,272,-662,"#c9c1b0",5,"#c9c1b0"),i.building(318,-800,360,-700,191,{color:"#e2d7bf",style:"masonry",setbackChance:1});let R=[[214,-302,642,201],[214,210,642,520],[118,-290,182,-213],[216,-490,410,-420],[430,-560,642,-310],[-46,-390,-14,-330],[-160,-740,-60,-690],[20,-740,84,-665],[118,-805,190,-660],[214,-800,275,-660],[310,-805,365,-695]],D=(A,U,J,G,Y,j,oe={})=>{R.some(Re=>Re[0]<=A+1&&Re[2]>=J-1&&Re[1]<=U+1&&Re[3]>=G-1)||i.block(A,U,J,G,{hMin:Y,hMax:j,lot:[18,36],depth:30,avoid:(Re,Z,fe,Ae)=>R.some(ze=>Gm([Re,Z,fe,Ae],ze)),...oe})};sf(t,n,(A,U,J,G,Y,j)=>{let oe=(J+Y)/2;if(oe>214){j<-302&&D(J,G,Y,j,40,160);return}D(J,G,Y,j,oe>150?35:45,oe>150?110:230,{people:oe>150?90:40})}),sf(o,s,(A,U,J,G,Y,j)=>{let oe=(J+Y)/2;oe>420||D(J,G,Y,j,30,oe>150&&oe<300?140:180,{people:oe>150&&oe<260?70:30})}),i.block(434,-1170,598,-1018,{hMin:40,hMax:200}),i.block(434,-995,598,-876,{hMin:40,hMax:180}),i.block(434,-856,598,-680,{hMin:30,hMax:170}),i.park(423+rn,-290+rn,598-rn,191-rn,{trees:45,people:14,color:"#6ba851"}),i.rect(450,-240,570,-80,.04,"#9aa3ab",!1),i.park(334,210,598,520,{trees:40,people:10}),i.park(214,402,330,520,{trees:10,people:4});for(let A=-1170;A<500;A+=14)A>r[0]-4&&A<r[1]+4||(i.prop("tree",183,A,0,.75),(A<-310||A>400)&&i.prop("tree",219,A,0,.75));i.lamps(186-.1,-1170,216,-660,34),i.lamps(186,-560,216,500,34);for(let[A,U]of t.slice(0,4))i.parkCars(A-U/2,-545,A+U/2,500,.22);for(let[A,U]of n.slice(1,7))i.parkCars(e[0],A-U/2,185,A+U/2,.22);let P=[[0,0,442],[1,0,368],[2,0,270],[0,1,442],[1,1,442],[2,1,330],[0,2,270],[1,2,368],[2,2,207]];for(let[A,U,J]of P)i.boxMesh(-830+A*23,330+U*23,-830+(A+1)*23,330+(U+1)*23,0,J,"#2a2c30","glass",{collide:!1});for(let A of[12,36])He(i,new rt(.8,1.2,85,6),Ie("#eee"),-830+A,484,352);He(i,new rt(20,33,344,4),Ie("#2a2a2e"),201,172,-1820,0,Math.PI/4,0);for(let A of[-6,6])He(i,new rt(.6,1,90,6),Ie("#ddd"),201+A,389,-1820);He(i,new ke(1e3,6,55),Ie("#c9b79c"),1250,3,-1055);let k=He(i,new cn(30,.9,6,40),Ie("#e8e8e8"),1e3,38,-1055,0,Math.PI/2,0);for(let A=0;A<12;A++)He(i,new rt(.3,.3,60,4),Ie("#e8e8e8"),1e3,38,-1055,A*Math.PI/12,0,0);return k.userData.dynamic=!0,i.anim.push(A=>{k.rotation.x=A*.05}),Xc(i,e,600,160,30,230,i.cfg.palette.masonry.concat(i.cfg.palette.glass),[[680,-3e3,3e3,3e3]]),{spawn:[243,0,-675,0],goal:{pos:l.coil,label:"Gravity coil"},log:l.bean,checkpoints:[[243,0,-675],[201,0,-540],[235,0,-240],[290,0,100],[205,2.4,315]]}}function rS(i){let e=i.bounds,t=R=>-(R-42)*80.6,n=[[-810,30],[-560,28],[-280,30],[0,30],[128,24],[254,40]],s=[];for(let R=55;R>=39;R--)s.push([t(R),R===42?30:18,R]);let r=s.map(R=>[R[0],R[1]]),o=[[-386,280],[-560,-322],[-741,-1080]],a=R=>R>-322?-(386+(280-R)/602*174):-(560+(-322-R)/758*181);for(let[R,D]of n)R===254?(Ui(i,R,D,e[1],-255),Ui(i,R,D,14,e[3])):Ui(i,R,D,e[1],e[3]);for(let[R,D,P]of s){let k=[[e[0],e[2]]];if(P===41){Ti(i,R,D,e[0],-295),Ti(i,R,D,15,e[2]);continue}if(P>=43&&P<=45){Ti(i,R,D,e[0],190);continue}for(let[A,U]of k)Ti(i,R,D,A,U)}i.roadSeg(o[0][0],o[0][1],o[1][0],o[1][1],24,{color:"#8f8a86",map:"#b7aaa0",paint:!1}),i.roadSeg(o[1][0],o[1][1],o[2][0],o[2][1],22),i.roadSeg(-386,280,-430,152,22),Zc(i,n.filter(([R])=>R<200),r);for(let R=10;R>-400;R-=34){let D=a(R);i.plaza(D-11,R-16,D+11,R+16,null,9)}let l={};i.park(-261,19,-110,148,{trees:40,people:30,color:"#5f9a46",avoid:[[-230,45,-140,125]]}),i.rect(-230,45,-140,125,.04,"#6fb354",!1);let c=Ie("#ece6d9"),h=Ie("#d6cebe");tt(i,-100,26,-22,146,0,24,c),tt(i,-62,60,-22,112,24,30,h),i.mapBuilding(-100,26,-22,146);for(let R=50;R<=122;R+=6)tt(i,-21,R-.7,-19.5,R+.7,2,20,c);tt(i,-21,44,-15,128,0,2,h);for(let R of[56,116])tt(i,-14,R-2,-10,R+2,0,2.5,h),He(i,new ke(1.6,1.6,3.6),Ie("#e2dccd"),-12,3.3,R),He(i,new Mt(1,8,6),Ie("#e2dccd"),-12,4.2,R-1.6);i.plaza(-18,30,-16,140,null,8),i.building(-335,-70,-297,-18,366,{color:"#c8d6df",style:"glass",setbackChance:1});let f=i.building(-540,-62,-500,-17,111,{color:"#9aa0a6",style:"masonry",setback:!1,rooftop:!1});nf(i,f,4,14,100,3,[0,2,3]),He(i,new rt(.4,.5,18,6),Ie("#ccc"),-520,120,-40),He(i,new Ri(2,1),new Rt({color:"#cfe8ff"}),-520,124,-40);let d=new Yt({color:"#d0202c",emissive:"#6a0010"});for(let R=0;R<7;R++)tt(i,-578,-372-R*3.6,-560,-368-R*3.6-3.6+3.6,0,.55*(R+1),d);l.tkts=[-569,4.2,-394],Ui(i,-150,12,t(51)+9,t(48)-9,{color:"#8f8a86",paint:!1});let u="#cfc5b0",p=i.building(-262,-626,-160,-590,259,{color:u,style:"masonry",setback:!1,rooftop:!1});i.boxMesh(-262,-632,-160,-584,0,60,u,"masonry"),i.boxMesh(-250,-623,-170,-593,259,266,u,"flat"),i.building(-80,-632,-18,-614,28,{color:u,style:"masonry",setback:!1}),i.building(-80,-596,-18,-578,28,{color:u,style:"masonry",setback:!1}),i.rect(-80,-612,-18,-598,.04,"#6fa055",!1),i.plaza(-80,-611,-18,-599,null,14),i.rect(-142,-630,-92,-580,.04,"#dfeef6","#dfeef6"),i.plaza(-140,-628,-94,-582,null,22);for(let R=0;R<26;R++){let D=R/26*Math.PI*2;i.prop("flag",-117+Math.cos(D)*29,-605+Math.sin(D)*29,D,1,0,["#e8242c","#2f5fa8","#f2c230","#2fa85f","#ffffff","#7a3fb8"][R%6])}let x=new gn({color:"#d4a52c",metalness:.9,roughness:.3});i.reflective.push(x),tt(i,-146,-610,-140,-600,0,3,Ie("#8a8a8a")),He(i,new Ri(1.6,1),x,-143,4.4,-605,0,0,0,1.4,.7,1),He(i,new cn(3.5,.18,6,24),x,-143,4.5,-605,0,Math.PI/2,0);let m=Ie("#1f5a2e");for(let R=0;R<5;R++)He(i,new Gn(7-R*1.2,7,10),m,-152,4+R*4.2,-605);He(i,new rt(1,1.2,3,8),Ie("#5a3a2a"),-152,1.5,-605),i.addBox(-155,-608,-149,-602,24);let g=[];for(let R=0;R<90;R++){let D=Math.random(),P=(1-D)*6.6+.3,k=Math.random()*6.28;g.push(new Mt(.22,4,3).translate(-152+Math.cos(k)*P,2+D*22,-605+Math.sin(k)*P))}for(let R of g)He(i,R,rs(["#ffd84a","#ff4a4a","#5ef0ff","#ffffff"][Math.floor(Math.random()*4)])).castShadow=!1;He(i,new _s(1.4),rs("#fff2a8"),-152,25.5,-605),l.crystal=[-117,.6,-605],tt(i,-16,-694,-8,-686,0,3,Ie("#7a7a7a")),He(i,new ke(1.6,4,1.2),x,-12,5,-690);for(let R=0;R<3;R++)He(i,new cn(3,.15,6,24),x,-12,9.5,-690,R*1.05,R*.6,0);i.building(-265,-717,-200,-655,30,{color:"#c9b29a",style:"masonry",setback:!1,rooftop:!1}),He(i,new ke(1.5,1.2,50),rs("#ff2a3a"),-266,6,-686),os(i,"ROCKET CITY",-266.2,16,-660,3.4,18,-Math.PI/2,{vertical:!0,fg:"#ff3344",bg:"#140508",glow:"#ff4455",fs:64});let _=Ie("#ebe6da");tt(i,36,-712,106,-659,0,33,_),i.mapBuilding(22,-712,106,-659);let v=new Hs;v.moveTo(-26,0),v.lineTo(26,0),v.lineTo(0,14),v.lineTo(-26,0),He(i,new Hr(v,{depth:70,bevelEnabled:!1}),Ie("#7d8a86"),36,33,-685.5,0,Math.PI/2,0);for(let R of[-707,-664])tt(i,22,R-5,34,R+5,0,62,_),qc(i,28,R,9,62,40,_);tt(i,22,-697,34,-674,0,30,_);let M=Ie("#d8cbb0");tt(i,196,-150,312,-16,0,32,M),i.mapBuilding(196,-150,312,-16);let b=jt(256,128,R=>{R.fillStyle="#d8cbb0",R.fillRect(0,0,256,128),R.fillStyle="#3a4a58";for(let D=0;D<3;D++)R.beginPath(),R.moveTo(22+D*78,120),R.lineTo(22+D*78,50),R.arc(55+D*78,50,33,Math.PI,0),R.lineTo(88+D*78,120),R.fill();R.fillStyle="#e8d070",R.beginPath(),R.arc(128,20,12,0,7),R.fill()},!1),w=new et(new In(100,30),new Yt({map:b}));w.position.set(254,15,-15.8),i.root.add(w),He(i,new ke(20,7,4),Ie("#6f8a6a"),254,35,-18),i.building(212,-240,296,-168,246,{color:"#b9b4aa",style:"glass",setback:!1});let y=[[-35,610,95,680,85],[-20,620,80,670,200],[0,630,60,660,320],[15,637,45,653,350]],S=0;for(let[R,D,P,k,A]of y)i.boxMesh(R,D,P,k,S,A,"#c9bfa6","masonry",{collide:!1}),S=A;He(i,new rt(.8,2.5,60,6),Ie("#ddd"),30,380,645);let N=[[365,-10,415,40,180],[372,-3,408,33,230],[378,3,402,27,255]];S=0;for(let[R,D,P,k,A]of N)i.boxMesh(R,D,P,k,S,A,"#c7ccd2","masonry",{collide:!1}),S=A;for(let R=0;R<5;R++)He(i,new rt(10-R*2,11-R*2,9,8),new gn({color:"#d8dde4",metalness:.9,roughness:.3}),390,259+R*8,15);He(i,new rt(.3,1.2,40,6),Ie("#ddd"),390,318,15);let C=[[-265,15,-10,161],[-345,-75,-290,-10],[-545,-65,-495,-12],[-582,-405,-556,-366],[-265,-642,-15,-572],[-268,-720,-195,-650],[18,-717,112,-654],[190,-255,320,-10]],O=(R,D,P,k)=>{for(let A of[D,(D+k)/2,k]){let U=a(A);if(U>R-13&&U<P+13)return!0}return!1};sf(n,r,(R,D,P,k,A,U)=>{let J=P<-270&&A>-560&&k>-420&&U<30,G=P>-280&&A<0&&k>-730&&U<-480,Y=i.block(P,k,A,U,{hMin:J?30:35,hMax:G?150:J?180:210,lot:[16,30],depth:28,skew:1.4,lowChance:.1,avoid:(j,oe,Re,Z)=>C.some(fe=>Gm([j,oe,Re,Z],fe))||O(j,oe,Re,Z),color:G?u:void 0,people:J?80:40});J&&Y.forEach((j,oe)=>nf(i,j,2,7,48,oe*3))});for(let[R,D]of n)i.parkCars(R-D/2,e[1],R+D/2,e[3],.22,["#f2c230","#f2c230","#f2c230","#2a2a2a","#e8e8e8","#3a4a6a"]);for(let[R,D]of n)i.lamps(R-D/2-1,e[1],R+D/2+1,e[3],40);return Xc(i,e,700,260,60,280,i.cfg.palette.masonry.concat(i.cfg.palette.glass),[[-60,600,110,700],[355,-20,425,50]]),{spawn:[-790,0,150,Math.PI/2],goal:{pos:l.crystal,label:"Nav crystal"},log:l.tkts,checkpoints:[[-790,0,150],[-545,0,18],[-569,3.85,-392],[-262,0,-380],[-12,0,-605]]}}var nr=["#f7c6d0","#bfe8e0","#fde2a6","#cfe0f8","#f9d1b0","#e3d4f3","#ffffff","#c8f0d0","#ffd6e8","#fff1c1"],zm=["#ff4fb8","#3ff0ff","#ffd84a","#7cff6a","#ff6a3a","#b67aff"],Hm=["OCEAN VIEW","STARLITE","THE PALMS","CORAL","FLAMINGO","TROPICS","SEA BREEZE","MOONGLOW","PELICAN","SUNRISE","NAUTILUS","BLUE WAVE","COMET","SAND DOLLAR","MERMAID"];function oS(i,e,t,n,s,r,o){let a=nr[o%nr.length],l=zm[o%zm.length];i.building(e,t,n,s,r,{color:a,style:"masonry",setback:!1,rooftop:!1});for(let f=4;f<r-1;f+=3.4)i.boxMesh(n,t+1,n+.9,s-1,f,f+.25,"#ffffff","flat",{collide:!1});let c=(t+s)/2;i.boxMesh(n-1,c-1.2,n+1.4,c+1.2,0,r+5,a,"flat");let h=Hm[o%Hm.length];os(i,h,n+1.45,r/2+2.5,c,1.9,Math.min(r+3,h.length*1.4),Math.PI/2,{vertical:!0,fg:l,bg:"#1a1020",glow:l,fs:56,pad:8}),He(i,new ke(.25,.25,s-t-2),rs(l),n+.2,r+.1,c).castShadow=!1,He(i,new ke(.25,.25,s-t-2),rs(l),n+.95,4.3,c).castShadow=!1}function aS(i,e,t,n,s){let r=Ie("#e8e2d6");for(let[l,c]of[[-1.3,-1.3],[1.3,-1.3],[-1.3,1.3],[1.3,1.3]])tt(i,e+l-.12,t+c-.12,e+l+.12,t+c+.12,0,1.9,r);tt(i,e-1.8,t-2.2,e+1.8,t+2.2,1.9,2.1,Ie("#d8d0c0"));let o=jt(128,64,l=>{let c=n.length;n.forEach((h,f)=>{l.fillStyle=h,l.fillRect(0,f*64/c,128,64/c+1)}),l.fillStyle="rgba(255,255,255,.85)",l.fillRect(48,22,32,20)},!1),a=new et(new ke(3,2.4,3),new Yt({map:o}));a.position.set(e,3.3,t),a.castShadow=!0,i.root.add(a),i.addBox(e-1.5,t-1.5,e+1.5,t+1.5,4.5,2.1),He(i,new ke(3.6,.25,3.6),Ie(n[0]),e,4.6,t,0,0,.12);for(let l=0;l<4;l++)tt(i,e-2.2-(l+1)*1.1,t-.8,e-1.8-l*1.1,t+.8,0,1.9-l*.45,Ie("#d8d0c0"));i.mapRect(e-2,t-2,e+2,t+2,n[0])}function lS(i){let e=i.bounds,t=d=>-(d-5)*155,n=[];for(let d=5;d<=17;d++)n.push([t(d),d===5?26:d===17?24:16,d]);let s=-1470,r=-1780,o=[[-600,14],[-520,12],[-445,12],[-370,12],[-290,20],[-115,18],[0,14]];i.waterRect(262,-4e3,4e3,4e3,"#2fa0b8"),i.rect(88,e[1],262,e[3],.02,"#f0dfb4","#ecd9a8"),i.rect(256,e[1],262,e[3],.035,"#d9c79a",!1),i.park(11,t(15)+8,86,40,{trees:0,plaza:!1,color:"#76b25a"}),i.rect(70,e[1],80,40,.04,"#e6d9c0","#e6d9c0");for(let d=30;d>t(15);d-=12)i.prop("palm",20+i.rand(-3,3),d,i.rand(0,6),i.rand(.9,1.2)),i.R()<.6&&i.prop("palm",55+i.rand(-8,8),d+6,i.rand(0,6),i.rand(.9,1.3));i.plaza(12,t(15)+10,86,30,null,26);for(let[d,u]of o)d===0?Ui(i,d,u,t(15)-8,e[3]):d===-370?Ui(i,d,u,e[1],t(12)):Ui(i,d,u,e[1],e[3]);for(let[d,u,p]of n)Ti(i,d,u,e[0],p<=15?7:-106);i.rect(-600,r-12,-298,r+12,.04,"#e9e2d4","#e9e2d4"),i.plaza(-596,r-10,-302,r+10,null,46);for(let d=-590;d<-300;d+=14)i.prop("palm",d,r,i.rand(0,6),.9);i.rect(-438,s-7,-298,s+7,.04,"#e8b4a0","#e8b4a0"),i.plaza(-436,s-6,-300,s+6,null,16),Zc(i,o,n.map(d=>[d[0],d[1]]));for(let d=20;d>e[1]+20;d-=9)i.R()<.55&&i.prop("umbrella",i.rand(110,240),d,0,1,0,i.pick(["#ff6a8a","#3fb8ff","#ffd84a","#ffffff","#7cff6a","#ff8a3a"]));for(let d=0;d>e[1];d-=90)i.plaza(100,d-40,250,d,null,9);let a=["#e8242c","#ff8a1a","#ffd84a","#2fa85f","#2f5fa8","#7a3fb8"],l=[["#ffb3c6","#ffffff"],["#7fe3d8","#ffd84a"],["#ffd84a","#ff6a3a"],["#b7a4ff","#ffffff"],["#3fb8ff","#ff6a8a"],["#7cff6a","#2f5fa8"],["#ff8a3a","#ffffff"]];for(let d=5;d<=16;d++)aS(i,172,t(d)-20,d===12?a:l[d%l.length],d);let c=jt(256,64,d=>{d.fillStyle="#fbfbf7",d.fillRect(0,0,256,64),d.fillStyle="#2a6fa8",d.fillRect(0,52,256,8);for(let u=0;u<7;u++)d.beginPath(),d.arc(20+u*36,28,10,0,7),d.fill()},!1),h=new et(new ke(22,7,30),[new Yt({map:c}),new Yt({map:c}),Ie("#f2f2ee"),Ie("#f2f2ee"),new Yt({map:c}),new Yt({map:c})]);h.position.set(52,3.5,t(10)),h.castShadow=!0,i.root.add(h),i.addBox(41,t(10)-15,63,t(10)+15,7),i.mapBuilding(41,t(10)-15,63,t(10)+15),He(i,new rt(4,4,9,16),Ie("#f6f6f2"),63,4.5,t(10)),i.addBox(60,t(10)-4,67,t(10)+4,9),He(i,new ke(.4,.4,30),rs("#3ff0ff"),63.3,7.1,t(10)).castShadow=!1;let f=0;for(let d=0;d<n.length-1;d++){let u=n[d][0]-n[d][1]/2-rn,p=n[d+1][0]+n[d+1][1]/2+rn,x=n[d][2];for(let m=0;m<o.length-1;m++){let g=o[m][0]+o[m][1]/2+rn,_=o[m+1][0]-o[m+1][1]/2-rn;if(o[m][0]===-115){if(x>=15){i.block(g,p,90,u,{hMin:25,hMax:80,color:void 0,palette:nr,lot:[30,50],depth:40});continue}for(let y=p;y<u-6;){let S=Math.min(i.rand(22,36),u-y);if(S<10)break;oS(i,_-30,y+.8,_,y+S-.8,i.rand(11,18),f++),i.R()<.8&&i.building(g,y+1,_-34,y+S-1,i.rand(9,26),{color:i.pick(nr),style:"masonry",setback:!1}),y+=S}i.loops.push({r:[g-2.5,p-2.5,_+2.5,u+2.5],n:120});for(let y=p+4;y<u-4;y+=7)i.R()<.6&&i.prop("umbrella",_+3.2,y,0,.7,0,i.pick(["#ffffff","#ff6a8a","#3fb8ff","#ffd84a"]));i.plaza(_+1,p,_+4,u,null,6);continue}if(o[m+1][0]===0)continue;let v=p<s+20&&u>s-20||p<r+30&&u>r-30,M=o[m][0]===-290;if(p<r&&u>r&&g<-298){i.block(g,p,_,r-12-rn,{hMin:7,hMax:16,palette:nr,color:void 0,lot:[14,24],depth:24,people:30}),i.block(g,r+12+rn,_,u,{hMin:7,hMax:16,lot:[14,24],depth:24,people:30});continue}if(p<s&&u>s&&g<-298&&_>-440){i.block(g,p,_,s-7-rn,{hMin:8,hMax:12,color:"#f2b8a4",lot:[12,20],depth:20}),i.block(g,s+7+rn,_,u,{hMin:8,hMax:12,color:"#f7c9b0",lot:[12,20],depth:20});continue}let b=M?30:o[m][0]===-600||o[m][0]===-520?14:16;i.block(g,p,_,u,{hMin:M?9:7,hMax:b,lot:M?[18,32]:[14,22],depth:M?30:20,color:v?"#f4bba6":void 0,people:M?60:20,lowChance:.3}).forEach(y=>{y.h<16&&i.R()<.35&&i.prop("palm",i.rand(y.x0,y.x1),y.z1+2.5,i.rand(0,6),.8)})}}i.lamps(-8,e[1],8,e[3],30);for(let[d,u]of o.slice(0,6))i.parkCars(d-u/2,e[1],d+u/2,e[3],.18,["#ff6a8a","#3fb8ff","#ffffff","#ffd84a","#2a2a2a","#b7a4ff","#7fe3d8"]);return Xc(i,e,500,90,25,140,nr,[[262,-4e3,4e3,4e3]]),{spawn:[40,0,-15,Math.PI],goal:{pos:[172,4.75,t(12)-20],label:"Power core"},log:[52,9.3,t(10)],checkpoints:[[40,0,-15],[-5,0,t(8)],[80,0,t(10)+30],[140,0,t(11)],[140,0,t(12)]]}}function Vm(i,e){for(let t=0;t<e;t++){let n=i.rand(i.bounds[0],i.bounds[2]),s=i.rand(i.bounds[1],i.bounds[3]);i.props.sage=i.props.sage||[],i.props.sage.push({x:n,y:0,z:s,rot:i.rand(0,6),s:i.rand(.6,1.4)})}for(let t=0;t<e/8;t++)i.prop("joshua",i.rand(i.bounds[0],i.bounds[2]),i.rand(i.bounds[1],i.bounds[3]),i.rand(0,6),i.rand(.8,1.4));for(let t=0;t<e/10;t++){let n=i.rand(i.bounds[0],i.bounds[2]),s=i.rand(i.bounds[1],i.bounds[3]),r=i.rand(.6,2.2);i.prop("rock",n,s,i.rand(0,6),r),i.addBox(n-r,s-r*.8,n+r,s+r*.8,r*.7)}km(i,0,0,1300,1900,34,["#b48a6a","#9a7a66","#a8826e","#8a6e62","#c29a76"])}function cS(i){Vm(i,900);let e=[[-900,-260],[900,240]];i.roadSeg(e[0][0],e[0][1],e[1][0],e[1][1],11,{color:"#4a4a4e"});let t=a=>-260+(a+900)/1800*500;i.roadSeg(-120,t(-120),-200,520,8,{color:"#b89c74",map:"#c9b08a",paint:!1}),i.roadSeg(-200,520,-250,690,8,{color:"#b89c74",map:"#c9b08a",paint:!1});let n=Ie("#8a5a3a");tt(i,-40,t(-40)-48,4,t(-40)-26,0,4.4,n),i.mapBuilding(-40,t(-40)-48,4,t(-40)-26),He(i,new ke(46,.4,24),Ie("#6a4a32"),-18,4.6,t(-40)-37),os(i,"EARTHLINGS WELCOME",-18,6.6,t(-40)-25.6,14,2.2,0,{fg:"#ffe9a0",bg:"#3a2412",fs:56,glow:"#ffcc55"}),i.plaza(-50,t(-40)-24,20,t(-40)-8,"#b5a080",16,"#b5a080"),tt(i,10,t(10)-22,13,t(10)-14,0,2.6,Ie("#c8c4b8")),He(i,new rt(.2,.2,9,6),Ie("#444"),11.5,5,t(10)-12,-.6,0,0),Wc(i,11.5,6.6,t(10)-7,3,.3,{lights:"#ffd84a"});for(let a=0;a<12;a++){let l=i.rand(30,320),c=t(l)-i.rand(30,160),h=i.rand(5,9),f=i.rand(14,20);tt(i,l,c,l+h,c+f,0,3.3,Ie(i.pick(["#e8e4da","#d9d2c2","#c9c2b0","#e2dccd"]))),i.mapBuilding(l,c,l+h,c+f),i.loops.push({r:[l-3,c-3,l+h+3,c+f+3],n:2})}for(let a=0;a<10;a++)i.prop("car",i.rand(-48,15),t(0)-i.rand(10,22),i.rand(0,6),1,0,i.pick(["#e8e8e8","#8a4a2a","#3a4a6a","#c8b070"]));let s=180,r=t(180)-12;tt(i,s-3.2,r-.2,s-2.8,r+.2,0,3.4,Ie("#555")),tt(i,s+2.8,r-.2,s+3.2,r+.2,0,3.4,Ie("#555")),os(i,"EXTRATERRESTRIAL HWY",s,3.6,r+.25,7,1.6,0,{fg:"#fff",bg:"#5a3a22",fs:54,lit:!1,border:"#fff"}),os(i,"EXTRATERRESTRIAL HWY",s,3.6,r-.25,7,1.6,Math.PI,{fg:"#fff",bg:"#5a3a22",fs:54,lit:!1,border:"#fff"});for(let a=-780;a<=780;a+=40)tt(i,a-.15,519.85,a+.15,520.15,0,1.6,Ie("#ff7a1a"));for(let a of[-420,-320,-80,40])os(i,"RESTRICTED AREA  NO TRESPASSING",a,1.8,518,6,1.4,Math.PI,{fg:"#c01818",bg:"#f2efe6",fs:40,lit:!1,border:"#c01818"});for(let a=-350;a<=-50;a+=4)Math.abs(a+200)>6&&tt(i,a-2,519.9,a+2,520.1,0,2.9,Ie("#9aa0a6"));i.mapRect(-350,519,-50,521,"#9aa0a6"),tt(i,-192,505,-184,512,0,3,Ie("#d8d2c2")),i.prop("car",-170,470,.8,1,0,"#f2f2f2"),i.prop("car",120,470,-.4,1,0,"#f2f2f2"),i.plaza(-185,470,-150,500,null,3),i.plaza(110,455,135,485,null,2),i.poly(Array.from({length:16},(a,l)=>[520+Math.cos(l/16*6.283)*9,-560+Math.sin(l/16*6.283)*9]),.03,"#9c7c5a","#9c7c5a");for(let a=0;a<14;a++){let l=a/14*6.283;i.prop("rock",520+Math.cos(l)*16,-560+Math.sin(l)*16,l,i.rand(.6,1.1))}i.poly([[-330,640],[-170,640],[-150,760],[-350,760]],.03,"#c4a67e","#c4a67e");let o=Wc(i,-250,1.5,700,9,.22,{lights:"#3a5a60"});return i.addBox(-258,692,-242,708,3.2),{spawn:[520,0,-560,Math.PI*.85],goal:{pos:[-250,.5,688],label:"The ship",radius:13},log:[180,0,t(180)-9],checkpoints:[[520,0,-560],[-10,0,t(-10)-14],[-160,0,300],[-200,0,490]],ship:o}}function hS(i){Vm(i,600),i.poly([[-760,-760],[760,-760],[700,-260],[200,-180],[-500,-230],[-760,-300]],.025,"#e2d8c2","#e2d8c2"),i.road(-30,-680,30,640,{color:"#3a3a3e",paintColor:"#f2f2f2"});for(let l=-670;l<640;l+=30)for(let c of[-30.5,30.5])He(i,new ke(.6,.3,.6),rs(l<-600?"#3aff6a":"#fff2c8"),c,.2,l).castShadow=!1;i.road(-200,-40,-30,-20,{paint:!1}),i.road(-200,180,-30,200,{paint:!1}),i.road(-560,-40,-200,420,{color:"#4a4a4e",paint:!1});let e=Ie("#d8dbe0"),t=Ie("#9aa2ac"),n=[];for(let l=0;l<6;l++){let c=-20+l*70,h=-190,f=-130;tt(i,h,c,f,c+50,0,18,e),i.mapBuilding(h,c,f,c+50),He(i,new In(44,15),t,f+.1,7.5,c+25,0,Math.PI/2,0),os(i,String(13+l),f+.2,16,c+25,5,2.6,Math.PI/2,{fg:"#1a1a1a",bg:"#d8dbe0",fs:80,lit:!1}),n.push([h,c])}for(let l=0;l<4;l++){let c=40+l*90;i.building(-330,c,-240,c+50,i.rand(10,18),{color:"#cbbf9f",style:"masonry",setback:!1}),i.loops.push({r:[-333,c-3,-237,c+53]})}for(let l=0;l<3;l++){let c=-40+l*80;i.building(-520,c,-440,c+40,12,{color:"#bfb59a",style:"masonry",setback:!1})}tt(i,-110,470,-100,480,0,30,Ie("#c9c2b0")),He(i,new ke(14,6,14),new Rt({color:"#3a9a7a"}),-105,33,475),i.addBox(-112,468,-98,482,36,30);for(let[l,c]of[[220,80],[260,300]]){tt(i,l-1,c-1,l+1,c+1,0,12,Ie("#9aa0a6"));let h=He(i,new Mt(7,16,8,0,Math.PI*2,0,Math.PI/3),Ie("#e8e8e8",{side:bn}),l,14,c,-1.1,0,0);h.userData.dynamic=!0,i.anim.push(f=>{h.rotation.y=f*.4})}let s=new Rt({color:"#fff2c8",transparent:!0,opacity:.32,depthWrite:!1,blending:Fn}),r=new Rt({color:"#fff2c8",transparent:!0,opacity:.08,depthWrite:!1,blending:Fn,side:bn}),o=[[-125,0],[-125,140],[-125,280],[-125,420],[60,-380],[180,-380],[60,-480],[180,-480],[120,-330],[-220,300],[-60,520]];for(let[l,c]of o){i.prop("flood",l,c,0);let h=new et(new oi(16,24),s);h.rotation.x=-Math.PI/2,h.position.set(l,.08,c+6),i.root.add(h);let f=new et(new Gn(16,9,20,1,!0),r);f.position.set(l,4.5,c+4),i.root.add(f)}let a=Wc(i,120,2.2,-430,9,.02,{lights:"#3ff0ff"});i.addBox(111,-439,129,-421,3.4);for(let l=0;l<6;l++){let c=l/6*6.283,h=120+Math.cos(c)*34,f=-430+Math.sin(c)*34;tt(i,h-4,f-3,h+4,f+3,0,3,Ie("#f2f2ee"))}i.plaza(80,-470,160,-390,null,26);for(let l=0;l<14;l++)i.prop("car",i.rand(-520,-350),i.rand(-60,420),i.rand(0,6),1,0,i.pick(["#f2f2f2","#2a2a2a","#6f7a52"]));return i.plaza(-200,-40,-40,420,null,26),i.plaza(-120,440,-60,520,null,8),{spawn:[380,0,740,Math.PI*1.15],goal:{pos:[120,.5,-418],label:"The ship",radius:14},log:[-160,18.4,375],checkpoints:[[380,0,740],[-60,0,560],[-110,0,200],[40,0,-200]],ship:a}}var Yc={masonry:["#c9b9a0","#b8a68c","#a8977f","#d6c8b0","#9b8a76","#c2b5a5","#8d7b6a","#d8d0c4","#b3a18a","#7f6d5d"],glass:["#8fb0c8","#a9bccf","#7f98ad","#b8c8d6","#6d8aa0","#9ab0c0"]},Qn=[{id:"nevada",name:"Nevada",place:"Rachel, NV \xB7 Extraterrestrial Highway",bounds:[-800,-800,800,800],seed:51,groundColor:"#d6b98d",outerGround:"#cfae80",mapGround:"#d6b98d",mapRoad:"#4a4a4e",asphalt:"#4a4a4e",palette:Yc,light:{sky:["#2f6fca","#a9cdef","#e5d2ae"],sunDir:[.45,.85,.35],sun:["#fff1d8",2.7],hemi:["#d2e6ff","#b8976a",1.35],fog:"#dbe5ee",fogNear:350,fogFar:2400},civ:{count:34,visR:30,panic:14,palette:{shirt:["#e8e8e8","#3a6fd1","#d94c4c","#6f7a52","#f2c230","#8a5a3a"],pants:["#2c3550","#6f6a52","#3b3b3b","#a8956c"]}},build:cS},{id:"chicago",name:"Chicago",place:"Millennium Park \xB7 Michigan Ave \xB7 the river",bounds:[-460,-1190,720,520],seed:312,groundColor:"#b9b6ae",outerGround:"#a9a69e",mapGround:"#c9c6be",palette:Yc,light:{sky:["#2f6fd0","#9dc8f0","#dfe9f3"],sunDir:[.5,.72,.45],sun:["#fff0d6",2.5],hemi:["#d6e8ff","#8a8a80",1.25],fog:"#c8dcec",fogNear:280,fogFar:1900},civ:{count:230,visR:22,panic:9},build:sS},{id:"nyc",name:"New York",place:"Times Square \xB7 Bryant Park \xB7 Rockefeller Center",bounds:[-870,-1080,330,300],seed:212,waterTowers:.3,groundColor:"#aeaaa4",outerGround:"#9a968f",mapGround:"#bdb9b2",palette:Yc,winLit:.35,light:{sky:["#34457f","#ee9f66","#f2bc8c"],sunDir:[-.72,.22,.4],sun:["#ffbe78",2.4],hemi:["#b8c4f0","#8a7a6a",1.75],fog:"#cf9e86",fogNear:220,fogFar:1500},civ:{count:290,visR:20,panic:7},build:rS},{id:"miami",name:"Miami",place:"South Beach \xB7 Ocean Drive \xB7 Lincoln Road",bounds:[-640,-1900,300,60],seed:305,groundColor:"#d8d2c4",outerGround:"#cfc6b4",mapGround:"#ddd6c6",palette:{masonry:nr,glass:["#bfe8e0","#cfe0f8","#a8d8e8"]},winLit:.4,light:{sky:["#4a5fa8","#f7a070","#f8c89a"],sunDir:[-.86,.16,.2],sun:["#ffb070",2.4],hemi:["#bcc4f0","#c9a080",1.25],fog:"#f0b898",fogNear:240,fogFar:1700},civ:{count:220,visR:24,panic:9,palette:{shirt:["#ff6a8a","#3fb8ff","#ffffff","#ffd84a","#7cff6a","#ff8a3a","#b67aff","#f2f2f2","#2a2a2a"],pants:["#f2f2f2","#2c3550","#d9c7a0","#3fb8ff","#ff6a8a"]}},build:lS},{id:"area51",name:"Area 51",place:"Groom Lake, NV \xB7 after dark",bounds:[-800,-800,800,800],seed:5151,night:!0,winLit:.9,groundColor:"#bfae8c",outerGround:"#b3a280",mapGround:"#bfae8c",mapRoad:"#3a3a3e",asphalt:"#3a3a3e",palette:Yc,light:{sky:["#050918","#16204a","#262a44"],stars:!0,moon:"#f2f0ff",moonDir:[.35,.55,-.6],sunDir:[.35,.55,-.6],sunDisk:"#000000",sun:["#a8bcff",1.7],hemi:["#6a7ac0","#5a4a30",1.7],fog:"#121a34",fogNear:160,fogFar:1300},civ:{count:95,visR:24,panic:15,palette:{shirt:["#f2f2f2","#f2f2f2","#c8b68a","#6f7a52","#2b3a55"],pants:["#2b2b2b","#6f6a52","#c8b68a"],hair:["#1c1a18","#3b2a1e","#6b6b6b","#c9a36a"]}},build:hS}];var no=[{id:"nevada",name:"Nevada",title:"The Crash Site",card:"You woke up alone in the desert. Past the fence is the ship your great-grandmother flew here. Get to it, and find out why it never left.",endKick:"Level 1 complete",endTitle:"The ship sleeps",endStory:"Three pieces gone, scattered to Chicago, New York and Miami. The lights inside won\u2019t wake without them.",log:"Day 1. The landing was not a landing. The hull cracked and three systems scattered on impact. The locals arrived before the smoke cleared.",music:{bpm:118,prog:[{r:33,v:[60,64,67,71]},{r:29,v:[57,60,64,67]},{r:26,v:[60,64,65,69]},{r:28,v:[59,62,64,69]}],bass:[0,null,null,0,null,null,12,null,0,null,null,7,null,10,null,null],stab:[0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0],stabType:"keys",clap:!0,lead:[[0,69,6],[8,72,4],[12,71,2],[14,69,2],[16,67,8],[28,64,4],[32,65,6],[40,69,4],[44,67,4],[48,64,12]],leadType:"twang"}},{id:"chicago",name:"Chicago",title:"The Gravity Coil",card:"The first piece, the gravity coil, ended up on a rooftop in the Loop. The streets are watched. The roofs mostly aren\u2019t.",endKick:"Level 2 complete",endTitle:"Coil recovered",endStory:"It hums when you hold it, like it remembers the ship. One down. New York next.",log:"Day 40. They took the gravity coil east, to a city on a lake that hums all night. I followed the hum.",music:{bpm:122,prog:[{r:29,v:[60,63,67,68]},{r:34,v:[61,65,68,72]},{r:27,v:[62,65,67,70]},{r:36,v:[58,63,67,70]}],bass:[0,null,0,null,null,null,12,null,0,null,null,0,null,null,10,12],stab:[0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0],stabType:"organ",clap:!0,lead:[[2,72,2],[4,75,2],[7,77,3],[12,75,2],[14,72,2],[18,70,2],[20,72,4],[34,72,2],[36,75,2],[39,79,3],[44,77,2],[46,75,2],[50,72,6]],leadType:"keys"}},{id:"nyc",name:"New York",title:"The Nav Crystal",card:"The navigation crystal is in Manhattan, where there are a lot more people looking. You can\u2019t go around all of them. Put them to sleep.",endKick:"Level 3 complete",endTitle:"Crystal recovered",endStory:"It throws a map of stars across your hands, then goes dark again. One more piece. Miami.",log:"Day 212. The crystal is under a million windows. Too many eyes for me. Maybe not for someone smaller.",music:{bpm:120,prog:[{r:26,v:[64,65,69,72]},{r:31,v:[65,69,71,76]},{r:36,v:[62,64,67,71]},{r:33,v:[61,64,67,70]}],bass:[0,null,null,null,7,null,null,null,12,null,null,null,10,null,7,null],stab:[0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0],stabType:"keys",clap:!0,lead:[[0,74,3],[4,77,2],[6,76,2],[8,74,4],[14,72,2],[16,69,8],[32,74,3],[36,77,2],[38,79,2],[40,81,6],[48,79,2],[50,77,2],[52,76,4],[56,74,8]],leadType:"horn"}},{id:"miami",name:"Miami",title:"The Power Core",card:"The power core is in Miami, out where the lights are bright and the cover is thin. Don\u2019t walk the open stretches. Blink across them.",endKick:"Level 4 complete",endTitle:"Core recovered",endStory:"It\u2019s warm, and getting warmer. All three pieces. Back to the desert.",log:"Day 300. The core is somewhere warm. I am too slow now, so I am leaving these logs where only our kind would look.",music:{bpm:124,prog:[{r:31,v:[65,69,70,74]},{r:36,v:[64,67,70,74]},{r:29,v:[64,67,69,72]},{r:34,v:[62,65,69,70]}],bass:[0,null,null,7,null,null,12,null,0,null,null,7,null,null,12,null],stab:[1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1],stabType:"piano",clap:!0,clave:[0,3,6,10,12],conga:[7,14,15],lead:[[0,74,2],[3,77,2],[6,79,2],[8,77,2],[10,74,2],[12,72,4],[16,70,2],[19,72,2],[22,74,6],[32,74,2],[35,77,2],[38,81,2],[40,79,2],[42,77,2],[44,74,4],[48,72,2],[50,70,2],[52,69,8]],leadType:"mallet"}},{id:"area51",name:"Area 51",title:"The Long Way Home",card:"Three pieces. One ship. They doubled the guard while you were gone, and the floodlights are on. Everything you\u2019ve learned, all at once.",endKick:"Level 5 complete",endTitle:"Liftoff",endStory:"",log:"Last entry. If you found these, you are my blood. Fix her gently. She remembers the way home.",music:{bpm:112,prog:[{r:39,v:[62,65,67,70]},{r:37,v:[60,63,65,68]},{r:36,v:[62,63,67,70]},{r:32,v:[60,62,67,68]}],bass:[0,null,null,null,null,null,null,null,0,null,null,12,null,null,null,null],stab:[0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0],stabType:"keys",clap:!1,lead:[[0,67,3],[3,70,3],[6,77,4],[10,74,3],[13,69,6],[32,67,3,-12],[35,70,3,-12],[38,77,4,-12],[42,74,3,-12],[45,69,8,-12]],leadType:"signal",leadAlways:!0}}];function Xm(i){for(let t of i.children)t.isGroup&&Xm(t);let e=new Map;for(let t of[...i.children])t.isMesh&&(t.updateMatrix(),(e.get(t.material)||e.set(t.material,[]).get(t.material)).push(t));for(let[t,n]of e){if(n.length<2)continue;let s=n.map(a=>{let l=a.geometry.index?a.geometry.toNonIndexed():a.geometry.clone();return l.applyMatrix4(a.matrix),l}),r=to(s,!1);if(!r)continue;let o=new et(r,t);o.castShadow=!0,i.add(o);for(let a of n)i.remove(a),a.geometry.dispose()}}var zt={skin:"#93cf3a",spot:"#5e9b2b",hoodie:"#c8322b",hoodieDark:"#9a231f",stripe:"#f2ebe3",tee:"#efe6da",denim:"#3b4766",denimDark:"#2a3350",glove:"#26262c",shoe:"#f1ece4",shoeDark:"#2d2a2e",shoeRed:"#b8312a",pack:"#6e5641",packDark:"#4a3a2c",glow:"#3ff0ff",brow:"#4a2f1f",eye:"#ffffff",iris:"#262a36",mouth:"#5a1720",tongue:"#e8737a"};function Tt(i,e={}){let t=new gn({color:i,roughness:e.r??.75,metalness:e.m??0,emissiveIntensity:e.ei??1,map:e.map||null});return e.e&&(t.emissive=new Me(e.e)),t}function Pe(i,e,t,n=0,s=0,r=0,o=0,a=0,l=0,c=1,h=1,f=1){let d=new et(e,t);return d.position.set(n,s,r),d.rotation.set(o,a,l),d.scale.set(c,h,f),d.castShadow=!0,i.add(d),d}function uS(){return jt(512,256,(i,e,t)=>{i.fillStyle=zt.skin,i.fillRect(0,0,e,t);let n=(()=>{let s=11;return()=>(s=s*16807%2147483647)/2147483647})();for(let s=0;s<46;s++){let r=Math.pow(n(),1.5)*t*.55,o=n()*e,a=5+n()*11;r>t*.32&&Math.abs(o-e*.25)<e*.12||(i.fillStyle=n()<.5?zt.spot:"#6aa833",i.globalAlpha=.35+n()*.3,i.beginPath(),i.ellipse(o,r,a*1.3,a,n()*3,0,Math.PI*2),i.fill())}i.globalAlpha=.35,i.fillStyle="#e88b6a";for(let s of[e*.19,e*.31])i.beginPath(),i.ellipse(s,t*.58,20,12,0,0,Math.PI*2),i.fill();i.globalAlpha=1},!1)}function fS(){return jt(64,80,i=>{i.fillStyle=zt.tee,i.fillRect(0,0,64,80);let e=(t,n,s)=>{i.fillStyle=s,i.fillRect(t*4,n*4,4,4)};for(let t=6;t<=9;t++)for(let n=4;n<=5;n++)e(t,n,"#58c8f0");for(let t=3;t<=12;t++)e(t,6,"#9a5cd6");for(let t=2;t<=13;t++)e(t,7,"#7a3fb8");for(let t=4;t<=11;t++)e(t,8,"#5a2c90");[4,7,10].forEach(t=>e(t,7,"#ffd84a"));for(let t=9;t<=16;t++)for(let n=7-Math.floor((t-9)/2);n<=8+Math.floor((t-9)/2);n++)e(n,t,"#ffe27a");e(7,13,"#3a2a10"),e(8,13,"#3a2a10"),e(7,14,"#3a2a10"),[[2,2],[13,3],[3,12],[12,11]].forEach(([t,n])=>e(t,n,"#f0b84a"))},!1)}function dS(){return jt(64,64,i=>{i.fillStyle=zt.stripe,i.beginPath(),i.arc(32,32,30,0,7),i.fill(),i.strokeStyle=zt.shoeRed,i.lineWidth=5,i.beginPath(),i.ellipse(32,32,26,9,-.3,0,7),i.stroke(),i.fillStyle=zt.shoeRed,i.beginPath(),i.arc(32,32,12,0,7),i.fill(),i.fillStyle="#ffd84a",i.beginPath();for(let e=0;e<10;e++){let t=e*Math.PI/5-Math.PI/2,n=e%2?4:9;i.lineTo(32+Math.cos(t)*n,32+Math.sin(t)*n)}i.fill()},!1)}function Wm(){let i={skin:Tt(zt.skin,{r:.55}),head:Tt("#ffffff",{r:.5,map:uS()}),hoodie:Tt(zt.hoodie,{r:.85}),hoodieDark:Tt(zt.hoodieDark,{r:.9}),stripe:Tt(zt.stripe),tee:Tt("#ffffff",{map:fS()}),patch:Tt("#ffffff",{map:dS()}),denim:Tt(zt.denim,{r:.95}),denimDark:Tt(zt.denimDark,{r:.95}),glove:Tt(zt.glove,{r:.6}),shoe:Tt(zt.shoe,{r:.6}),shoeDark:Tt(zt.shoeDark),shoeRed:Tt(zt.shoeRed),pack:Tt(zt.pack,{r:.8}),packDark:Tt(zt.packDark),paper:Tt("#d9c39a"),glow:Tt("#0a3a40",{e:zt.glow,ei:1.6}),eye:Tt(zt.eye,{r:.2}),iris:Tt(zt.iris,{r:.2}),brow:Tt(zt.brow),mouth:Tt(zt.mouth),tongue:Tt(zt.tongue),bulb:Tt("#fff6a0",{e:"#ffe45a",ei:2.2,r:.2}),metal:Tt("#b9c0c8",{r:.3,m:.6}),ufoDome:Tt("#7fd6ff",{r:.2}),ufoLight:Tt("#ffd84a",{e:"#ffcc33",ei:1.5})},e=new ct;e.name="alien";let t=new ct;t.position.y=.5,e.add(t);let n=[];for(let _ of[1,-1]){let v=new ct;v.position.set(_*.085,0,0),t.add(v),Pe(v,new rt(.1,.115,.3,10),i.denim,0,-.16,0),Pe(v,new rt(.09,.08,.07,10),i.denimDark,0,-.34,0),Pe(v,new ke(.035,.09,.1),i.denimDark,_*.115,-.19,.01),Pe(v,new ke(.006,.012,.06),i.glow,_*.134,-.165,.01),Pe(v,new rt(.04,.04,.06,8),i.skin,0,-.39,0);let M=new ct;M.position.set(0,-.44,.03),v.add(M),Pe(M,new ke(.14,.045,.27),i.shoe,0,-.035,0),Pe(M,new ke(.142,.012,.272),i.shoeRed,0,-.008,0),Pe(M,new ke(.128,.085,.23),i.shoe,0,.03,-.005),Pe(M,new ke(.13,.05,.08),i.shoeDark,0,.02,.085),Pe(M,new ke(.13,.07,.07),i.shoeRed,0,.03,-.09),Pe(M,new ke(.09,.05,.08),i.shoeRed,0,.085,-.03,-.3),Pe(M,new ke(.004,.012,.09),i.glow,_*.071,-.035,.04),Pe(M,new cn(.022,.006,6,14),i.shoeRed,_*.066,.035,0,0,Math.PI/2,.4).scale.set(1,.55,1),Pe(M,new Mt(.011,6,4),i.shoeRed,_*.066,.035,0);for(let w=0;w<3;w++)Pe(M,new ke(.08,.008,.012),i.stripe,0,.076-w*.005,.04-w*.03);n.push(v)}let s=new ct;s.position.y=0,t.add(s),Pe(s,new Fr(.155,.1,6,14),i.hoodie,0,.2,0,0,0,0,1,1,.8),Pe(s,new rt(.15,.135,.07,14),i.hoodieDark,0,.035,0,0,0,0,1,1,.82),Pe(s,new rt(.128,.115,.05,14),Tt(zt.tee),0,0,0,0,0,0,1,1,.85),Pe(s,new ke(.03,.08,.012),Tt("#d8d0c2"),.02,-.03,.098),Pe(s,new In(.135,.2),i.tee,0,.2,.1245),Pe(s,new ke(.008,.25,.01),i.metal,.072,.19,.118,0,.35),Pe(s,new ke(.008,.25,.01),i.metal,-.072,.19,.118,0,-.35),Pe(s,new oi(.03,14),i.patch,.105,.28,.093,0,.75),Pe(s,new cn(.11,.05,8,16),i.hoodie,0,.385,-.035,Math.PI/2-.25);for(let _ of[1,-1])Pe(s,new rt(.006,.006,.12,4),i.stripe,_*.045,.31,.12);let r=new ct;r.position.set(0,.22,-.13),s.add(r),Pe(r,new ke(.25,.27,.12),i.pack,0,0,-.06),Pe(r,new ke(.21,.08,.04),i.packDark,0,-.08,-.13),Pe(r,new cn(.06,.014,8,20),i.glow,0,.03,-.122),Pe(r,new oi(.047,16),Tt("#18242a"),0,.03,-.121,0,Math.PI),Pe(r,new oi(.02,12),i.glow,0,.03,-.123,0,Math.PI);for(let _ of[1,-1])Pe(r,new ke(.012,.12,.03),i.glow,_*.128,.02,-.06),Pe(r,new ke(.035,.3,.02),i.packDark,_*.075,.02,.2,.15);for(let _=0;_<3;_++)Pe(r,new ke(.085,.13,.008),i.paper,-.06+_*.02,.17,-.04-_*.02,-.1,0,.25-_*.15);let o=new ct;o.position.set(.07,-.13,-.12),r.add(o),Pe(o,new cn(.012,.003,4,10),i.metal,0,0,0),Pe(o,new rt(.003,.003,.04,4),i.metal,0,-.025,0),Pe(o,new Mt(.04,12,6),i.metal,0,-.06,0,0,0,0,1,.32,1),Pe(o,new Mt(.018,10,6,0,Math.PI*2,0,Math.PI/2),i.ufoDome,0,-.055,0);for(let _=0;_<4;_++)Pe(o,new Mt(.006,4,3),i.ufoLight,Math.cos(_*1.57)*.032,-.063,Math.sin(_*1.57)*.032);let a=[];for(let _ of[1,-1]){let v=new ct;v.position.set(_*.165,.33,0),s.add(v),Pe(v,new Mt(.075,10,8),i.hoodie,0,-.01,0),Pe(v,new Fr(.062,.15,4,10),i.hoodie,0,-.12,0);for(let b of[-.075,-.105])Pe(v,new rt(.0645,.0645,.016,10),i.stripe,0,b,0);Pe(v,new rt(.055,.05,.04,10),i.hoodieDark,0,-.23,0),Pe(v,new rt(.03,.03,.03,8),i.skin,0,-.26,0),Pe(v,new rt(.036,.036,.03,10),i.glove,0,-.28,0),Pe(v,new ke(.03,.014,.008),i.glow,_*.005,-.28,.036);let M=new ct;M.position.y=-.33,v.add(M),Pe(M,new Mt(.052,10,8),i.glove,0,0,0,0,0,0,.9,1,1.05);for(let b=0;b<3;b++)Pe(M,new Mt(.016,6,5),i.skin,_*.005,-.05,.02-b*.022);Pe(M,new Mt(.017,6,5),i.skin,-_*.035,-.02,.035),a.push(v)}let l=new ct;l.position.y=.44,s.add(l),Pe(l,new rt(.045,.055,.06,10),i.skin,0,0,0);let c=Pe(l,new Mt(.25,28,20),i.head,0,.24,0,0,-Math.PI/2,0,1.03,.96,.97);c.name="skull";for(let _ of[1,-1]){Pe(l,new Mt(.085,16,12),i.eye,_*.095,.215,.195,0,0,0,1,1.12,.55),Pe(l,new Mt(.056,14,10),i.iris,_*.09,.205,.226,0,0,0,1,1.1,.45),Pe(l,new Mt(.017,6,5),i.eye,_*.09+.022,.235,.252),Pe(l,new Mt(.008,5,4),i.eye,_*.09-.02,.185,.25),Pe(l,new ke(.105,.026,.03),i.brow,_*.095,.315,.205,.25,0,_*.33);let v=new ct;v.position.set(_*.22,.27,-.02),v.rotation.set(0,0,_*(-Math.PI/2+.32)),l.add(v),Pe(v,new Gn(.085,.3,10),i.skin,0,.14,0,0,0,0,1,1,.45),Pe(v,new Gn(.05,.2,8),Tt("#79b430"),0,.12,.022,0,0,0,1,1,.25)}let h=new ct;h.position.set(.015,.105,.225),h.rotation.x=-.25,l.add(h),Pe(h,new oi(.06,14,Math.PI,Math.PI),i.mouth,0,.012,0,0,0,0,1,.75,1),Pe(h,new oi(.03,10,Math.PI,Math.PI),i.tongue,.01,-.012,.002),Pe(h,new ke(.1,.012,.01),i.eye,0,.008,.003),Pe(h,new cn(.06,.007,4,14,Math.PI),Tt("#5d8f26"),0,.012,0,0,0,Math.PI,1,.75,1);let f=new ct;f.position.set(0,.46,-.02),l.add(f);let d=new kr([new L(0,0,0),new L(0,.16,-.02),new L(.05,.29,-.01),new L(.16,.32,0),new L(.24,.25,.01),new L(.26,.17,.01)]);Pe(f,new ia(d,24,.017,6),i.skin),Pe(f,new rt(.022,.03,.035,8),Tt("#d9c25a",{r:.4,m:.4}),.26,.15,.01);let u=Pe(f,new Mt(.058,16,12),i.bulb,.26,.095,.01),p=jt(64,64,_=>{let v=_.createRadialGradient(32,32,2,32,32,32);v.addColorStop(0,"rgba(255,240,150,1)"),v.addColorStop(.35,"rgba(255,220,90,.45)"),v.addColorStop(1,"rgba(255,200,60,0)"),_.fillStyle=v,_.fillRect(0,0,64,64)},!1),x=new Kn(new Hn({map:p,blending:Fn,depthWrite:!1,transparent:!0}));x.scale.setScalar(.32),x.position.copy(u.position),f.add(x),Xm(e),e.scale.setScalar(.92),e.traverse(_=>{_.isMesh&&(_.castShadow=!0)});let m={ph:0,sway:0,swayV:0,swayZ:0,swayZV:0,lastSpeed:0,blink:0,keyV:0,key:0};function g(_,v){let M=v.speed||0,b=Math.min(1,M/8);m.ph+=_*(M>.2?3.2+M*1.05:1.6);let w=Math.sin(m.ph),y=0,S=0,N=0,C=0,O=.12,R=[0,0];v.grounded?M>.2?(y=w*(.45+b*.4),S=-w*(.45+b*.55),N=b*.18,C=Math.abs(Math.cos(m.ph))*(.02+b*.035)):C=Math.sin(m.ph)*.006:v.floating?(y=Math.sin(m.ph*.6)*.15,O=1.05+Math.sin(m.ph)*.08,N=.05,R=[-.15,.15]):(y=0,R=[-.65,.35],O=.6,S=-.4,N=v.vy>0?-.05:.08),n[0].rotation.x=y+R[0],n[1].rotation.x=-y+R[1],a[0].rotation.set(S,0,O),a[1].rotation.set(-S,0,-O),v.casting&&(a[1].rotation.set(-1.9,0,-.3),a[0].rotation.set(-.6,0,.4)),v.cower&&(a[0].rotation.set(-2.6,0,.5),a[1].rotation.set(-2.6,0,-.5)),t.position.y=.5+C,s.rotation.x=N,l.rotation.x=-N*.6+(M<.2&&v.grounded?Math.sin(m.ph*.35)*.04:0),l.rotation.y=M<.2&&v.grounded?Math.sin(m.ph*.23)*.25:0;let D=(M-m.lastSpeed)/Math.max(_,.001);m.lastSpeed=M;let P=-Math.max(-.5,Math.min(.5,D*.02))+(v.grounded?0:(v.vy||0)*-.02);m.swayV+=((P-m.sway)*60-m.swayV*6)*_,m.sway+=m.swayV*_,m.swayZV+=((Math.sin(m.ph)*b*.12-m.swayZ)*50-m.swayZV*5)*_,m.swayZ+=m.swayZV*_,f.rotation.set(m.sway,0,m.swayZ),m.keyV+=((-s.rotation.x-m.key)*40-m.keyV*3+w*b*6)*_,m.key+=m.keyV*_,o.rotation.x=m.key;let k=v.floating||v.casting?3.6:2.2;i.bulb.emissiveIntensity+=(k-i.bulb.emissiveIntensity)*Math.min(1,_*8),x.scale.setScalar(.3+(i.bulb.emissiveIntensity-2.2)*.14+Math.sin(m.ph*2)*.02),i.glow.emissiveIntensity=1.4+Math.sin(performance.now()*.004)*.3}return{root:e,update:g,bulbWorld:()=>u.getWorldPosition(new L)}}function qm(i){let e=new Map,t=new Map,n=i.clone();return Ym(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Ym(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Ym(i.children[n],e.children[n],t)}var Kc=class extends Ii{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new uf(t)}),this.register(function(t){return new ff(t)}),this.register(function(t){return new df(t)}),this.register(function(t){return new Sf(t)}),this.register(function(t){return new bf(t)}),this.register(function(t){return new Tf(t)}),this.register(function(t){return new mf(t)}),this.register(function(t){return new gf(t)}),this.register(function(t){return new xf(t)}),this.register(function(t){return new _f(t)}),this.register(function(t){return new hf(t)}),this.register(function(t){return new yf(t)}),this.register(function(t){return new pf(t)}),this.register(function(t){return new Mf(t)}),this.register(function(t){return new vf(t)}),this.register(function(t){return new lf(t)}),this.register(function(t){return new Jc(t,pt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Jc(t,pt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Ef(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=es.extractUrlBase(e);o=es.resolveURL(c,this.path)}else o=es.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Gr(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===jm){try{o[pt.KHR_BINARY_GLTF]=new wf(e)}catch(f){s&&s(f);return}r=JSON.parse(o[pt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Nf(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let f=this.pluginCallbacks[h](c);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[f.name]=f,o[f.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let f=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(f){case pt.KHR_MATERIALS_UNLIT:o[f]=new cf;break;case pt.KHR_DRACO_MESH_COMPRESSION:o[f]=new Af(r,this.dracoLoader);break;case pt.KHR_TEXTURE_TRANSFORM:o[f]=new Rf;break;case pt.KHR_MESH_QUANTIZATION:o[f]=new Cf;break;default:d.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function pS(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Zt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var pt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},lf=class{constructor(e){this.parser=e,this.name=pt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new Me(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Un);let f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new qs(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ua(h),c.distance=f;break;case"spot":c=new ha(h),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Oi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},cf=class{constructor(){this.name=pt.KHR_MATERIALS_UNLIT}getMaterialType(){return Rt}extendParams(e,t,n){let s=[];e.color=new Me(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Un),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Xt))}return Promise.all(s)}},hf=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},uf=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?On:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new re(r,r)}return Promise.all(s)}},ff=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?On:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(s)}},df=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?On:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},pf=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?On:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},mf=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?On:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new Me(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Un)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Xt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},gf=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?On:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},xf=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?On:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Me().setRGB(r[0],r[1],r[2],Un),Promise.all(s)}},_f=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_IOR}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?On:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},yf=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?On:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Me().setRGB(r[0],r[1],r[2],Un),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Xt)),Promise.all(s)}},vf=class{constructor(e){this.parser=e,this.name=pt.EXT_MATERIALS_BUMP}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?On:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},Mf=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?On:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},Sf=class{constructor(e){this.parser=e,this.name=pt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},bf=class{constructor(e){this.parser=e,this.name=pt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},Tf=class{constructor(e){this.parser=e,this.name=pt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},Jc=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,f=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,f,d,s.mode,s.filter).then(function(u){return u.buffer}):o.ready.then(function(){let u=new ArrayBuffer(h*f);return o.decodeGltfBuffer(new Uint8Array(u),h,f,d,s.mode,s.filter),u})})}else return null}},Ef=class{constructor(e){this.name=pt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==hi.TRIANGLES&&c.mode!==hi.TRIANGLE_STRIP&&c.mode!==hi.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),f=h.isGroup?h.children:[h],d=c[0].count,u=[];for(let p of f){let x=new We,m=new L,g=new Bt,_=new L(1,1,1),v=new vi(p.geometry,p.material,d);for(let b=0;b<d;b++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,b),l.SCALE&&_.fromBufferAttribute(l.SCALE,b),v.setMatrixAt(b,x.compose(m,g,_));let M=null;for(let b in l)if(b==="_COLOR_0"){let w=l[b];v.instanceColor=new Zi(w.array,w.itemSize,w.normalized)}else if(b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"){if(M===null){let y=v.geometry;M=new Pt,M.name=y.name;for(let S in y.attributes)M.setAttribute(S,y.attributes[S]);for(let S in y.morphAttributes)M.morphAttributes[S]=y.morphAttributes[S];y.index!==null&&M.setIndex(y.index),M.morphTargetsRelative=y.morphTargetsRelative;for(let S of y.groups)M.addGroup(S.start,S.count,S.materialIndex);y.boundingBox!==null&&(M.boundingBox=y.boundingBox.clone()),y.boundingSphere!==null&&(M.boundingSphere=y.boundingSphere.clone()),M.drawRange.start=y.drawRange.start,M.drawRange.count=y.drawRange.count,M.userData=Object.assign({},y.userData),v.geometry=M}let w=l[b];M.setAttribute(b,new Zi(w.array,w.itemSize,w.normalized))}Ut.prototype.copy.call(v,p),this.parser.assignFinalMaterial(v),u.push(v)}return h.isGroup?(h.clear(),h.add(...u),h):u[0]}))}},jm="glTF",Aa=12,Zm={JSON:1313821514,BIN:5130562},wf=class{constructor(e){this.name=pt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Aa),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==jm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Aa,r=new DataView(e,Aa),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===Zm.JSON){let c=new Uint8Array(e,Aa+o,a);this.content=n.decode(c)}else if(l===Zm.BIN){let c=Aa+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Af=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=pt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let f=Pf[h]||h.toLowerCase();a[f]=o[h]}for(let h in e.attributes){let f=Pf[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[e.attributes[h]],u=io[d.componentType];c[f]=u.name,l[f]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(f,d){s.decodeDracoFile(h,function(u){for(let p in u.attributes){let x=u.attributes[p],m=l[p];m!==void 0&&(x.normalized=m)}f(u)},a,c,Un,d)})})}},Rf=class{constructor(){this.name=pt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Cf=class{constructor(){this.name=pt.KHR_MESH_QUANTIZATION}},$c=class extends Ci{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=s-t,f=(n-t)/h,d=f*f,u=d*f,p=e*c,x=p-c,m=-2*u+3*d,g=u-d,_=1-m,v=g-d+f;for(let M=0;M!==a;M++){let b=o[x+M+a],w=o[x+M+l]*h,y=o[p+M+a],S=o[p+M]*h;r[M]=_*b+v*w+m*y+g*S}return r}},mS=new Bt,If=class extends $c{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return mS.fromArray(r).normalize().toArray(r),r}},hi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},io={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Km={9728:Qt,9729:an,9984:Yl,9985:Zr,9986:$s,9987:li},Jm={33071:si,33648:Ar,10497:Ai},rf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Pf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ms={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},gS={CUBICSPLINE:void 0,LINEAR:Ds,STEP:Ns},of={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function xS(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new gn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Pi})),i.DefaultMaterial}function ir(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Oi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function _S(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let f=e[c];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(s=!0),f.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let f=e[c];if(n){let d=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):i.attributes.position;o.push(d)}if(s){let d=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):i.attributes.normal;a.push(d)}if(r){let d=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],f=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=f),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function yS(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function vS(i){let e,t=i.extensions&&i.extensions[pt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+af(t.attributes):e=i.indices+":"+af(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+af(i.targets[n]);return e}function af(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Lf(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function MS(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var SS=new We,Nf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new pS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?(this.textureLoader=new aa(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new fa(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Gr(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return ir(r,a,s),Oi(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[pt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(es.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=rf[s.type],a=io[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new qt(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=rf[s.type],c=io[s.componentType],h=c.BYTES_PER_ELEMENT,f=h*l,d=s.byteOffset||0,u=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0,x,m;if(u&&u!==f){let g=Math.floor(d/u),_="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count,v=t.cache.get(_);v||(x=new c(a,g*u,s.count*u/h),v=new Os(x,u/h),t.cache.add(_,v)),m=new ms(v,l,d%u/h,p)}else a===null?x=new c(s.count*l):x=new c(a,d,s.count*l),m=new qt(x,l,p);if(s.sparse!==void 0){let g=rf.SCALAR,_=io[s.sparse.indices.componentType],v=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,b=new _(o[1],v,s.sparse.count*g),w=new c(o[2],M,s.sparse.count*l);a!==null&&(m=new qt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let y=0,S=b.length;y<S;y++){let N=b[y];if(m.setX(N,w[y*l]),l>=2&&m.setY(N,w[y*l+1]),l>=3&&m.setZ(N,w[y*l+2]),l>=4&&m.setW(N,w[y*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Km[d.magFilter]||an,h.minFilter=Km[d.minFilter]||li,h.wrapS=Jm[d.wrapS]||Ai,h.wrapT=Jm[d.wrapT]||Ai,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Qt&&h.minFilter!==an,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1,h;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)h=n.getDependency("bufferView",o.bufferView).then(function(d){return new Promise(function(u,p){t.parse(d,u,p)})});else{if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(d){c=!0;let u=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(u),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(l).then(function(d){return new Promise(function(u,p){let x=u;t.isImageBitmapLoader===!0&&(x=function(m){let g=new ln(m);g.needsUpdate=!0,u(g)}),t.load(es.resolveURL(d,r.path),x,void 0,p)})})}let f=h.then(function(d){return c===!0&&a.revokeObjectURL(l),Oi(d,o),d.userData.mimeType=o.mimeType||MS(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=f,f}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[pt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[pt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[pt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new xs,Mn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Or,Mn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return gn}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[pt.KHR_MATERIALS_UNLIT]){let f=s[pt.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),c.push(f.extendParams(a,r,t))}else{let f=r.pbrMetallicRoughness||{};if(a.color=new Me(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){let d=f.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Un),a.opacity=d[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",f.baseColorTexture,Xt)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=bn);let h=r.alphaMode||of.OPAQUE;if(h===of.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===of.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Rt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new re(1,1),r.normalTexture.scale!==void 0)){let f=r.normalTexture.scale;a.normalScale.set(f,f)}if(r.occlusionTexture!==void 0&&o!==Rt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Rt){let f=r.emissiveFactor;a.emissive=new Me().setRGB(f[0],f[1],f[2],Un)}return r.emissiveTexture!==void 0&&o!==Rt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Xt)),Promise.all(c).then(function(){let f=new o(a);return r.name&&(f.name=r.name),Oi(f,r),t.associations.set(f,{materials:e}),r.extensions&&ir(s,f,r),f})}createUniqueName(e){let t=Lt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[pt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return $m(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=vS(c),f=s[h];if(f)o.push(f.promise);else{let d;c.extensions&&c.extensions[pt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=$m(new Pt,c,t),c.mode===hi.TRIANGLE_STRIP?d=d.then(u=>ju(u,Sa)):c.mode===hi.TRIANGLE_FAN&&(d=d.then(u=>ju(u,Jr))),s[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?xS(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],f=[];for(let u=0,p=h.length;u<p;u++){let x=h[u],m=o[u],g,_=c[u];if(m.mode===hi.TRIANGLES||m.mode===hi.TRIANGLE_STRIP||m.mode===hi.TRIANGLE_FAN||m.mode===void 0){let v=r.isSkinnedMesh===!0,M=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");v&&M===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=v&&M?new ko(x,_):new et(x,_),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(m.mode===hi.LINES)g=new Ho(x,_);else if(m.mode===hi.LINE_STRIP)g=new Bs(x,_);else if(m.mode===hi.LINE_LOOP)g=new Go(x,_);else if(m.mode===hi.POINTS)g=new ks(x,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&yS(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),Oi(g,r),m.extensions&&ir(s,g,m),t.assignFinalMaterial(g),f.push(g)}for(let u=0,p=f.length;u<p;u++)t.associations.set(f[u],{meshes:e,primitives:u});if(f.length===1)return r.extensions&&ir(s,f[0],r),f[0];let d=new ct;r.extensions&&ir(s,d,r),t.associations.set(d,{meshes:e});for(let u=0,p=f.length;u<p;u++)d.add(f[u]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new on(Dc.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Ws(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Oi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let f=o[c];if(f){a.push(f);let d=new We;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new zo(a,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let f=0,d=s.channels.length;f<d;f++){let u=s.channels[f],p=s.samplers[u.sampler],x=u.target,m=x.node,g=s.parameters!==void 0?s.parameters[p.input]:p.input,_=s.parameters!==void 0?s.parameters[p.output]:p.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",_)),c.push(p),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(f){let d=f[0],u=f[1],p=f[2],x=f[3],m=f[4],g=[];for(let v=0,M=d.length;v<M;v++){let b=d[v],w=u[v],y=p[v],S=x[v],N=m[v];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();let C=n._createAnimationTracks(b,w,y,S,N);if(C)for(let O=0;O<C.length;O++)g.push(C[O])}let _=new Vs(r,void 0,g);return Oi(_,s),_})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],f=c[1],d=c[2];d!==null&&h.traverse(function(u){u.isSkinnedMesh&&u.bind(d,SS)});for(let u=0,p=f.length;u<p;u++)h.add(f[u]);if(h.userData.pivot!==void 0&&f.length>0){let u=h.userData.pivot,p=f[0];h.pivot=new L().fromArray(u),h.position.x-=u[0],h.position.y-=u[1],h.position.z-=u[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new Dr:c.length>1?h=new ct:c.length===1?h=c[0]:h=new Ut,h!==c[0])for(let f=0,d=c.length;f<d;f++)h.add(c[f]);if(r.name&&(h.userData.name=r.name,h.name=o),Oi(h,r),r.extensions&&ir(n,h,r),r.matrix!==void 0){let f=new We;f.fromArray(r.matrix),h.applyMatrix4(f)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let f=s.associations.get(h);s.associations.set(h,{...f})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new ct;n.name&&(r.name=s.createUniqueName(n.name)),Oi(r,n),n.extensions&&ir(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,f=l.length;h<f;h++){let d=l[h];d.parent!==null?r.add(qm(d)):r.add(d)}let c=h=>{let f=new Map;for(let[d,u]of s.associations)(d instanceof Mn||d instanceof ln)&&f.set(d,u);return h.traverse(d=>{let u=s.associations.get(d);u!=null&&f.set(d,u)}),f};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];function c(u){u.morphTargetInfluences&&l.push(u.name?u.name:u.uuid)}Ms[r.path]===Ms.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let h;switch(Ms[r.path]){case Ms.weights:h=$i;break;case Ms.rotation:h=ji;break;case Ms.translation:case Ms.scale:h=ys;break;default:n.itemSize===1?h=$i:h=ys;break}let f=s.interpolation!==void 0?gS[s.interpolation]:Ds,d=this._getArrayFromAccessor(n);for(let u=0,p=l.length;u<p;u++){let x=new h(l[u]+"."+Ms[r.path],t.array,d,f);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Lf(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof ji?If:$c;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function bS(i,e,t){let n=e.attributes,s=new vn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),a.normalized){let h=Lf(io[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new L,l=new L;for(let c=0,h=r.length;c<h;c++){let f=r[c];if(f.POSITION!==void 0){let d=t.json.accessors[f.POSITION],u=d.min,p=d.max;if(u!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(u[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(u[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(u[2]),Math.abs(p[2]))),d.normalized){let x=Lf(io[d.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new zn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function $m(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=Pf[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return ft.workingColorSpace!==Un&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ft.workingColorSpace}" not supported.`),Oi(i,e),bS(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?_S(i,e.targets,t):i})}var TS=new Kc,Qm=i=>new Promise((e,t)=>TS.load(i,e,void 0,t)),e0={hips:["Hips","mixamorigHips","hips","pelvis"],spine:["Spine","mixamorigSpine","spine"],head:["Head","mixamorigHead","head"],legL:["LeftUpLeg","mixamorigLeftUpLeg","thigh_l","L_Thigh"],legR:["RightUpLeg","mixamorigRightUpLeg","thigh_r","R_Thigh"],armL:["LeftArm","mixamorigLeftArm","upperarm_l","L_UpperArm"],armR:["RightArm","mixamorigRightArm","upperarm_r","R_UpperArm"]};function ES(i,e){let t=null;return i.traverse(n=>{!t&&n.isBone&&e.some(s=>n.name===s||n.name.endsWith(":"+s))&&(t=n)}),t}async function t0(i,e={}){let t=await Qm(i),n=t.scene;n.traverse(D=>{D.isMesh&&(D.castShadow=!0,D.receiveShadow=!1,D.frustumCulled=!1,D.material&&(D.material.envMapIntensity=.6))});let s=new vn().setFromObject(n),r=s.max.y-s.min.y||1,o=(e.height||1.05)/r;n.scale.setScalar(o),n.position.y=-s.min.y*o;let a=new ct;a.add(n);let l=new da(n),c={},h=(D,P)=>{for(let k of D.tracks){if(!/hips\.position$/i.test(k.name))continue;let A=k.values,U=A[0],J=A[1],G=A[2];for(let Y=0;Y<A.length;Y+=3)A[Y]=U,A[Y+2]=G,P||(A[Y+1]=J)}return D},f=(D,P)=>{P&&!c[D]&&(c[D]=l.clipAction(h(P,D!=="jump")))};for(let D of t.animations){let P=D.name.toLowerCase();/idle|stand/.test(P)?f("idle",D):/run|sprint/.test(P)?f("run",D):/walk/.test(P)?f("walk",D):/jump/.test(P)?f("jump",D):/float|fly|swim/.test(P)?f("float",D):/cast|spell|point/.test(P)&&f("cast",D)}e.clips&&await Promise.all(Object.entries(e.clips).map(async([D,P])=>{try{let k=await Qm(P);f(D,k.animations[0])}catch(k){console.warn("hero clip failed",D,k)}}));let d=null,u=(D,P=.18)=>{let k=c[D]||null;k!==d&&(k&&(k.reset().setEffectiveWeight(1).fadeIn(P).play(),D==="jump"&&(k.setLoop(Pc,1),k.clampWhenFinished=!0,k.time=e.jumpStart??.55)),d&&d.fadeOut(P),d=k)},p={};for(let D in e0)p[D]=ES(n,e0[D]);let x={};for(let D in p)p[D]&&(x[D]=p[D].quaternion.clone());let m=new Bt,g=new yn,_=(()=>{let D=document.createElement("canvas");D.width=D.height=64;let P=D.getContext("2d"),k=P.createRadialGradient(32,32,2,32,32,32);return k.addColorStop(0,"rgba(255,240,150,1)"),k.addColorStop(.35,"rgba(255,220,90,.45)"),k.addColorStop(1,"rgba(255,200,60,0)"),P.fillStyle=k,P.fillRect(0,0,64,64),new zs(D)})(),v=new Kn(new Hn({map:_,blending:Fn,depthWrite:!1,transparent:!0}));v.scale.setScalar(.3);let M=new L(...e.bulb||[0,.27,.08]).multiplyScalar(e.height||1.05),b=new L,w=new Bt,y=new Bt,S=new L;a.add(v);let N=()=>{if(!p.head){v.position.set(0,.95*(e.height||1.05),.05);return}a.updateMatrixWorld(!0),p.head.getWorldPosition(b),a.worldToLocal(b),v.position.copy(b).add(M)},C={ph:0,glow:1},O=(D,P,k,A,U)=>{D&&(m.setFromEuler(g.set(k,A,U)),D.quaternion.copy(x[P]).multiply(m))};function R(D,P){let k=P.speed||0,A=P.grounded?P.casting&&c.cast?"cast":k>4&&c.run?"run":k>.2?c.walk?"walk":c.run?"run":null:c.idle?"idle":null:P.floating&&c.float?"float":c.jump?"jump":null;if(u(A),d&&(A==="run"||A==="walk")&&(d.timeScale=Math.max(.6,Math.min(1.6,k/(A==="run"?7:2.5)))),l.update(D),!d){C.ph+=D*(k>.2?3.2+k*1.05:1.6);let J=Math.sin(C.ph),G=Math.min(1,k/8),Y=P.grounded&&k>.2?J*(.45+G*.4):P.grounded?0:.3,j=P.grounded&&k>.2?J*(.4+G*.5):0;O(p.legL,"legL",Y,0,0),O(p.legR,"legR",-Y,0,0),O(p.armL,"armL",-j,0,0),O(p.armR,"armR",P.casting?-1.6:j,0,0),O(p.spine,"spine",G*.15,0,0),p.hips&&(p.hips.position.y+=0)}N();let U=P.floating||P.casting?1.6:1;C.glow+=(U-C.glow)*Math.min(1,D*8),v.scale.setScalar(.22*C.glow+Math.sin(performance.now()*.004)*.012)}return{root:a,update:R,bulbWorld:()=>v.getWorldPosition(new L),clips:Object.keys(c)}}var ee={ctx:null,master:null,mGain:null,sGain:null,padBus:null,filt:null,tGain:null,muted:!1,tense:!1,agV:null,gridV:null,stepT:0,beat:0,nextT:0,timer:null},wS=.38,n0=.6,Uf=null,ro=.5,sr={paused:!1},oo=i=>440*Math.pow(2,(i-69)/12);function i0(i){Uf=i,ro=60/i.bpm,ee.step=0,ee.delay&&(ee.delay.delayTime.value=ro*.75)}function jc(){if(ee.ctx)return;let i=window.AudioContext||window.webkitAudioContext;if(!i)return;let e=ee.ctx=new i;e.resume&&e.resume();let t=e.createDynamicsCompressor();t.threshold.value=-18,t.knee.value=20,t.ratio.value=8,ee.master=e.createGain(),ee.master.gain.value=ee.muted?0:n0,ee.master.connect(t),t.connect(e.destination),ee.sGain=e.createGain(),ee.sGain.gain.value=.9,ee.sGain.connect(ee.master),ee.mGain=e.createGain(),ee.mGain.gain.value=wS,ee.mGain.connect(ee.master),ee.filt=e.createBiquadFilter(),ee.filt.type="lowpass",ee.filt.frequency.value=1500,ee.leadBus=e.createGain(),ee.leadBus.gain.value=1,ee.leadBus.connect(ee.mGain),ee.delay=e.createDelay(1.5),ee.delay.delayTime.value=ro*.75;let n=e.createGain();n.gain.value=.32;let s=e.createBiquadFilter();s.type="lowpass",s.frequency.value=2400;let r=e.createGain();r.gain.value=.45,ee.leadBus.connect(ee.delay),ee.delay.connect(s),s.connect(n),n.connect(ee.delay),s.connect(r),r.connect(ee.mGain),ee.padBus=e.createGain(),ee.padBus.gain.value=1,ee.padBus.connect(ee.filt),ee.filt.connect(ee.mGain),NS()}function ao(i,e,t,n,s){i.setValueAtTime(1e-4,e),i.linearRampToValueAtTime(n,e+t),i.exponentialRampToValueAtTime(1e-4,e+t+s)}function Kt(i){let e=ee.ctx,t=i.at||e.currentTime,n=i.a||.005,s=e.createOscillator(),r=e.createGain();s.type=i.type||"sine",s.frequency.setValueAtTime(i.f,t),i.f2&&s.frequency.exponentialRampToValueAtTime(i.f2,t+n+i.dur),ao(r.gain,t,n,i.vol,i.dur),s.connect(r),r.connect(i.bus||ee.sGain),s.start(t),s.stop(t+n+i.dur+.1)}var Ra=null;function Fi(i){let e=ee.ctx,t=i.at||e.currentTime,n=i.a||.004;if(!Ra){let a=e.createBuffer(1,e.sampleRate*.5,e.sampleRate),l=a.getChannelData(0);for(let c=0;c<l.length;c++)l[c]=Math.random()*2-1;Ra=a}let s=e.createBufferSource();s.buffer=Ra,s.loop=!0;let r=e.createBiquadFilter();r.type=i.ft||"lowpass",r.frequency.value=i.fq||800,i.q&&(r.Q.value=i.q);let o=e.createGain();ao(o.gain,t,n,i.vol,i.dur),s.connect(r),r.connect(o),o.connect(ee.sGain),s.start(t),s.stop(t+n+i.dur+.1)}var AS={scream(i){let e=ee.ctx,t=e.currentTime,n=(i||1)*(520+Math.random()*180),s=e.createOscillator(),r=e.createGain(),o=e.createBiquadFilter();s.type="sawtooth",s.frequency.setValueAtTime(n*.8,t),s.frequency.linearRampToValueAtTime(n*1.25,t+.12),s.frequency.exponentialRampToValueAtTime(n*.7,t+.7);let a=e.createOscillator(),l=e.createGain();a.frequency.value=9,l.gain.value=n*.04,a.connect(l),l.connect(s.frequency),o.type="bandpass",o.frequency.value=1100,o.Q.value=1.6,ao(r.gain,t,.03,.07,.65),s.connect(o),o.connect(r),r.connect(ee.sGain),s.start(t),a.start(t),s.stop(t+.8),a.stop(t+.8)},gasp(){Fi({dur:.18,vol:.06,fq:1800,ft:"bandpass",q:1.2})},siren(){let i=ee.ctx,e=i.currentTime;for(let t=0;t<4;t++)Kt({f:700,f2:1100,type:"square",vol:.05,dur:.35,at:e+t*.4})},jump(){Kt({f:240,f2:390,vol:.09,dur:.09})},land(i){Fi({dur:.09,vol:i?.28:.09,fq:i?260:180}),Kt({f:i?70:90,vol:i?.22:.07,dur:.12})},stepTick(i){Fi({dur:.03,vol:i?.08:.028,fq:i?2200:500,ft:"bandpass",q:1.4})},coin(){Kt({f:1046.5,vol:.09,dur:.07}),Kt({f:1568,vol:.075,dur:.12,at:ee.ctx.currentTime+.06})},ckpt(){[523.25,659.25,784].forEach((i,e)=>Kt({f:i,type:"triangle",vol:.09,dur:.22,at:ee.ctx.currentTime+e*.09}))},cast(){Kt({f:320,f2:880,vol:.06,dur:.48}),Kt({f:323,f2:886,vol:.06,dur:.48})},sleep(){Kt({f:660,f2:440,type:"triangle",vol:.11,dur:.3}),Kt({f:440,f2:330,type:"triangle",vol:.09,dur:.4,at:ee.ctx.currentTime+.22})},blink(){Kt({f:1100,f2:180,type:"sawtooth",vol:.11,dur:.09}),Fi({dur:.05,vol:.07,fq:3e3,ft:"highpass"})},sus(){Kt({f:440,vol:.13,dur:.28,a:.01}),Kt({f:466.16,vol:.13,dur:.28,a:.01})},alert(){[220,261.63,311.13].forEach(i=>Kt({f:i,f2:i*.5,type:"sawtooth",vol:.11,dur:.5,a:.008})),Fi({dur:.25,vol:.18,fq:900})},zap(){Kt({f:120,f2:60,type:"square",vol:.12,dur:.3}),Fi({dur:.2,vol:.16,fq:2400,ft:"bandpass",q:2})},splash(){Fi({dur:.35,vol:.2,fq:900})},respawn(){Fi({dur:.3,vol:.07,fq:600,ft:"highpass"}),Kt({f:200,f2:520,vol:.06,dur:.3})},wakeTick(){Kt({f:880,type:"square",vol:.045,dur:.05}),Kt({f:880,type:"square",vol:.045,dur:.05,at:ee.ctx.currentTime+.12})},part(){[523.25,783.99,1046.5,1567.98].forEach((i,e)=>Kt({f:i,type:"triangle",vol:.09,dur:.4,at:ee.ctx.currentTime+e*.08}))},win(){[392,493.88,587.33,784,987.77].forEach((i,e)=>Kt({f:i,type:"triangle",vol:.1,dur:.5,at:ee.ctx.currentTime+e*.13}))},launch(){Kt({f:55,f2:440,type:"sawtooth",vol:.12,dur:2.6,a:.4}),Fi({dur:2.4,vol:.16,fq:500,a:.6}),[392,493.88,587.33,784,987.77,1174.66].forEach((i,e)=>Kt({f:i,type:"triangle",vol:.08,dur:.6,at:ee.ctx.currentTime+1.6+e*.14}))},uiBlip(){Kt({f:520,vol:.06,dur:.06})}};function Ht(i,e){!ee.ctx||ee.muted||AS[i](e)}function Ca(i){ee.mGain&&ee.mGain.gain.setTargetAtTime(i,ee.ctx.currentTime,.08)}function Of(i){if(!ee.ctx||ee.tense===i)return;ee.tense=i;let e=ee.ctx.currentTime;ee.tGain&&ee.tGain.gain.setTargetAtTime(i?.09:1e-4,e,.4),ee.filt.frequency.setTargetAtTime(i?3600:1500,e,.5)}function s0(){if(!ee.ctx||ee.agV)return;let i=ee.ctx,e=i.createOscillator(),t=i.createOscillator(),n=i.createGain(),s=i.createOscillator(),r=i.createGain();e.type=t.type="triangle",e.frequency.value=164,t.frequency.value=166.5,n.gain.value=1e-4,n.gain.setTargetAtTime(ee.muted?0:.06,i.currentTime,.05),s.frequency.value=5.5,r.gain.value=6,s.connect(r),r.connect(e.frequency),r.connect(t.frequency),e.connect(n),t.connect(n),n.connect(ee.sGain),e.start(),t.start(),s.start(),ee.agV={stop(){n.gain.setTargetAtTime(1e-4,i.currentTime,.1),setTimeout(()=>{try{e.stop(),t.stop(),s.stop()}catch{}},400)}}}function Ia(){ee.agV&&(ee.agV.stop(),ee.agV=null)}function Jt(i,e,t,n,s,r,o){let a=ee.ctx,l=a.createOscillator(),c=a.createGain();return l.type=n,l.frequency.value=i,ao(c.gain,e,r,s,t),l.connect(c),c.connect(o),l.start(e),l.stop(e+r+t+.1),l}function Df(i,e,t,n,s,r){let o=ee.ctx;Ra||Fi({dur:.001,vol:1e-4});let a=o.createBufferSource();a.buffer=Ra,a.loop=!0,a.playbackRate.value=.8+Math.random()*.4;let l=o.createBiquadFilter();l.type=n,l.frequency.value=s,r&&(l.Q.value=r);let c=o.createGain();ao(c.gain,i,.002,t,e),a.connect(l),l.connect(c),c.connect(ee.mGain),a.start(i),a.stop(i+e+.1)}var so={kick(i,e){let t=ee.ctx,n=t.createOscillator(),s=t.createGain();n.type="sine",n.frequency.setValueAtTime(150,i),n.frequency.exponentialRampToValueAtTime(44,i+.12),s.gain.setValueAtTime(1e-4,i),s.gain.linearRampToValueAtTime(e,i+.004),s.gain.exponentialRampToValueAtTime(1e-4,i+.32),n.connect(s),s.connect(ee.mGain),n.start(i),n.stop(i+.4),Jt(2200,i,.012,"sine",e*.12,.001,ee.mGain),ee.padBus.gain.setValueAtTime(.32,i),ee.padBus.gain.setTargetAtTime(1,i+.03,.09)},hat(i,e){Df(i,e?.11:.035,e?.05:.018,"highpass",7600)},clap(i){Df(i,.13,.07,"bandpass",1400,.9),Df(i+.012,.08,.05,"bandpass",1700,.9)},rim(i){Jt(1750,i,.025,"square",.025,.001,ee.mGain)},conga(i,e){let t=ee.ctx,n=t.createOscillator(),s=t.createGain(),r=e?340:230;n.type="sine",n.frequency.setValueAtTime(r,i),n.frequency.exponentialRampToValueAtTime(r*.82,i+.12),ao(s.gain,i,.003,.09,.16),n.connect(s),s.connect(ee.mGain),n.start(i),n.stop(i+.3)}};function RS(i,e,t){Jt(oo(i),e,t,"sine",.2,.008,ee.mGain),Jt(oo(i+12),e,t*.8,"triangle",.05,.008,ee.mGain)}function CS(i,e,t){for(let n of i){let s=oo(n);t==="organ"?(Jt(s,e,.22,"square",.012,.004,ee.padBus),Jt(s,e,.26,"sine",.03,.004,ee.padBus)):t==="piano"?(Jt(s,e,.18,"triangle",.03,.002,ee.padBus),Jt(s*2,e,.08,"sine",.008,.002,ee.padBus)):(Jt(s,e,.55,"sine",.04,.004,ee.padBus),Jt(s*2,e,.25,"sine",.011,.003,ee.padBus),Jt(s*3,e,.08,"sine",.004,.002,ee.padBus))}}function IS(i,e,t){for(let n of i)Jt(oo(n-12),e,t,"triangle",.008,.6,ee.padBus),Jt(oo(n)*1.004,e,t,"sine",.008,.7,ee.padBus)}function PS(i,e,t,n){let s=ee.ctx,r=oo(i),o=ee.leadBus;if(n==="twang"){let a=Jt(r,e,t*.9,"triangle",.06,.01,o);a.frequency.setValueAtTime(r*.94,e),a.frequency.exponentialRampToValueAtTime(r,e+.09),Jt(r*2,e,t*.5,"sine",.012,.01,o)}else if(n==="horn"){let a=Jt(r,e,t*.9,"sawtooth",.03,.04,o),l=s.createOscillator(),c=s.createGain();l.frequency.value=5.2,c.gain.value=r*.012,l.connect(c),c.connect(a.frequency),l.start(e+.12),l.stop(e+t+.2)}else n==="mallet"?(Jt(r,e,.32,"sine",.07,.002,o),Jt(r*4,e,.06,"sine",.012,.001,o)):n==="signal"?(Jt(r,e,t*.95,"sine",.06,.03,o),Jt(r*1.5,e,t*.8,"triangle",.012,.05,o),Jt(r/2,e,t,"triangle",.02,.06,o)):(Jt(r,e,t*.7,"triangle",.05,.003,o),Jt(r*2,e,t*.35,"sine",.014,.002,o))}function LS(i,e){let t=Uf,n=i%16,s=Math.floor(i/16)%4,r=Math.floor(i/64),o=ro/4,a=t.prog[s],l=n%2===1?o*.12:0,c=e+l;n%4===0&&so.kick(e,t.leadType==="signal"?.42:.55),t.clap&&(n===4||n===12)&&so.clap(e),n%4===2?so.hat(e,!0):n%2===1&&so.hat(c,!1);let h=t.bass[n];if(h!=null&&RS(a.r+h,c,o*1.7),t.stab[n]&&CS(a.v,c,t.stabType),n===0&&IS(a.v,e,ro*4),t.clave&&t.clave.includes(n)&&so.rim(c),t.conga&&t.conga.includes(n)&&so.conga(c,n>=14),t.leadAlways||r%2===1){let f=i%64;for(let d of t.lead)d[0]===f&&PS(d[1]+(d[3]||0),c,d[2]*o,t.leadType)}}function NS(){let i=ee.ctx,e=i.createOscillator(),t=i.createOscillator(),n=i.createGain(),s=i.createOscillator(),r=i.createGain();e.frequency.value=622.25,t.frequency.value=659.25,n.gain.value=1e-4,s.frequency.value=7,r.gain.value=.03,s.connect(r),r.connect(n.gain),e.connect(n),t.connect(n),n.connect(ee.padBus),e.start(),t.start(),s.start(),ee.tGain=n,ee.step=0,ee.nextT=i.currentTime+.15,ee.timer=setInterval(()=>{if(ee.ctx){if(sr.paused||!Uf){ee.nextT=Math.max(ee.nextT,ee.ctx.currentTime+.1);return}for(ee.nextT=Math.max(ee.nextT,ee.ctx.currentTime+.02);ee.nextT<ee.ctx.currentTime+.3;)LS(ee.step,ee.nextT),ee.step++,ee.nextT+=ro/4}},60)}function r0(){ee.muted=!ee.muted,ee.master&&ee.master.gain.setTargetAtTime(ee.muted?0:n0,ee.ctx.currentTime,.02),ee.muted||Ht("uiBlip")}function o0(){return ee.muted}var Qc=["#f2d2b6","#e0b08c","#c68b62","#a86b44","#7d4a2c","#5a3420","#f6dcc8"],a0=["#1c1a18","#3b2a1e","#5a3d25","#8a6a3a","#c9a36a","#2a2a2a","#6b6b6b","#a33a2a"],DS=1.62;function Pa(i,e,t,n){let s=new ke(i,e,t);return s.translate(0,n,0),s}var US=28900,eh=class{constructor(e,t,n){this.world=e,this.scene=t,this.cfg=n,this.R=e.R,this.civs=[],this.group=new ct,t.add(this.group);let s=n.count,r=l=>{let c=new vi(l,new Yt({color:16777215}),s);return c.castShadow=!0,c.receiveShadow=!1,c.frustumCulled=!1,this.group.add(c),c};this.parts={torso:r(Pa(.42,.6,.24,.3)),head:r(new Mt(.13,10,8)),hair:r(new Mt(.138,10,6,0,Math.PI*2,0,Math.PI*.55)),legL:r(Pa(.17,.86,.19,-.43)),legR:r(Pa(.17,.86,.19,-.43)),armL:r(Pa(.12,.62,.13,-.31)),armR:r(Pa(.12,.62,.13,-.31))},this.spawn(),this.baseCol={};for(let l in this.parts)this.parts[l].instanceColor&&(this.baseCol[l]=Float32Array.from(this.parts[l].instanceColor.array));let o=jt(64,64,l=>{l.fillStyle="#ffd23a",l.strokeStyle="#7a1a00",l.lineWidth=6,l.font="bold 58px sans-serif",l.textAlign="center",l.strokeText("!",32,54),l.fillText("!",32,54)},!1),a=jt(64,64,l=>{l.fillStyle="#9ff7ff",l.strokeStyle="#0a3050",l.lineWidth=5,l.font="bold 40px sans-serif",l.textAlign="center",l.strokeText("z",24,54),l.fillText("z",24,54),l.font="bold 28px sans-serif",l.strokeText("z",46,26),l.fillText("z",46,26)},!1);this.pool=[];for(let l=0;l<18;l++){let c=new Kn(new Hn({map:o,depthTest:!1,transparent:!0}));c.scale.setScalar(.7),c.visible=!1,c.renderOrder=10,this.group.add(c),this.pool.push(c)}this.exTex=o,this.zTex=a,this.screamT=0,this.m4=new We,this.m4b=new We,this.m4c=new We,this.v=new L,this.q=new Bt,this.e=new yn,this.sc=new L}spawn(){let e=this.world,t=this.cfg,n=this.R,s=t.palette||{shirt:["#d94c4c","#3a6fd1","#f0f0ea","#2c2c2c","#e6b33a","#4fa36b","#9a5fc7","#e87ea1","#7a8a99","#f28d35"],pants:["#2c3550","#3b3b3b","#5a4a3a","#7d8899","#1d1d1d","#a8956c"]},r=[],o=t.count;for(let f of e.plazas){let d=Math.min(o,Math.round(f.n*(t.plazaMul||1)));for(let u=0;u<d;u++)r.push({type:"plaza",r:f.r});o-=d}let a=e.loops.filter(f=>f.r[2]-f.r[0]>6&&f.r[3]-f.r[1]>6),l=a.map(f=>f.n??2*(f.r[2]-f.r[0]+(f.r[3]-f.r[1]))),c=l.reduce((f,d)=>f+d,0)||1;for(let f=0;f<o&&a.length;f++){let d=n()*c,u=0;for(;d>l[u]&&u<l.length-1;)d-=l[u],u++;r.push({type:"loop",r:a[u].r})}let h=new Me;r.forEach((f,d)=>{let u={i:d,home:f,state:"walk",t:0,ph:n()*6,speed:1.1+n()*.6,scale:.88+n()*.22,dir:n()<.5?1:-1,s:0,off:(n()-.5)*1.6,x:0,y:0,z:0,yaw:0,tx:0,tz:0,idle:0,look:n()*.25,alarmCool:0,fleeX:0,fleeZ:0,sleepT:0,ind:null,pose:n()<.15?"phone":"",hop:0};if(f.type==="loop"){let g=2*(f.r[2]-f.r[0]+(f.r[3]-f.r[1]));u.s=n()*g,this.loopPos(u)}else u.x=f.r[0]+n()*(f.r[2]-f.r[0]),u.z=f.r[1]+n()*(f.r[3]-f.r[1]),u.state="wander",this.newTarget(u),u.idle=n()*3;let p=this.parts;p.torso.setColorAt(d,h.set(s.shirt[Math.floor(n()*s.shirt.length)]));let x=h.clone();p.armL.setColorAt(d,n()<.3?h.set(Qc[Math.floor(n()*Qc.length)]):x),p.armR.setColorAt(d,p.armL.instanceColor?(()=>{let g=new Me;return p.armL.getColorAt(d,g),g})():x);let m=h.set(s.pants[Math.floor(n()*s.pants.length)]).clone();p.legL.setColorAt(d,m),p.legR.setColorAt(d,m),p.head.setColorAt(d,h.set(Qc[Math.floor(n()*Qc.length)])),p.hair.setColorAt(d,h.set(s.hair?s.hair[Math.floor(n()*s.hair.length)]:a0[Math.floor(n()*a0.length)])),u.init={x:u.x,z:u.z,s:u.s,state:u.state},this.civs.push(u)});for(let f in this.parts)this.parts[f].instanceColor&&(this.parts[f].instanceColor.needsUpdate=!0)}reset(){for(let e of this.civs)Object.assign(e,{x:e.init.x,z:e.init.z,s:e.init.s,state:e.init.state,t:0,alarmCool:0,sleepT:0,y:0,hop:0}),e.home.type==="loop"?this.loopPos(e):this.newTarget(e)}loopPos(e){let[t,n,s,r]=e.home.r,o=s-t,a=r-n,l=2*(o+a),c=(e.s%l+l)%l,h,f,d,u=e.off;c<o?(h=t+c,f=n-u,d=Math.PI/2):(c-=o)<a?(h=s+u,f=n+c,d=0):(c-=a)<o?(h=s-c,f=r+u,d=-Math.PI/2):(c-=o,h=t-u,f=r-c,d=Math.PI),e.x=h,e.z=f,e.yaw=e.dir>0?d:d+Math.PI}nearestS(e){let[t,n,s,r]=e.home.r,o=s-t,a=r-n,l=[[Math.max(0,Math.min(o,e.x-t)),Math.abs(e.z-n)],[o+Math.max(0,Math.min(a,e.z-n)),Math.abs(e.x-s)],[o+a+Math.max(0,Math.min(o,s-e.x)),Math.abs(e.z-r)],[2*o+a+Math.max(0,Math.min(a,r-e.z)),Math.abs(e.x-t)]];return l.sort((c,h)=>c[1]-h[1]),l[0][0]}newTarget(e){let t=e.home.r,n=this.R;e.tx=t[0]+n()*(t[2]-t[0]),e.tz=t[1]+n()*(t[3]-t[1])}sleepAround(e,t,n){let s=0;for(let r of this.civs)r.state!=="sleep"&&(r.x-e)**2+(r.z-t)**2<n*n&&(r.state="sleep",r.sleepT=this.cfg.sleepT||18,r.t=0,s++);return s}awakeNear(e,t,n){for(let s of this.civs)if(s.state!=="sleep"&&(s.x-e)**2+(s.z-t)**2<n*n)return!0;return!1}scare(e,t,n,s){e.state=s?"notice":"flee",e.t=0,e.hop=s?.25:0;let r=e.x-t,o=e.z-n,a=Math.hypot(r,o)||1;e.fleeX=r/a,e.fleeZ=o/a,e.fleeSpeed=4.2+this.R()*1.8,e.yaw=Math.atan2(-r,-o)}update(e,t,n){let s=this.world,r=this.cfg,o=this.R,a=0,l=0;this.screamT-=e;let c=r.visR||22,h=c*c,f=Math.cos((r.fov||70)*Math.PI/180),d=[];for(let u of this.civs){u.t+=e,u.alarmCool-=e,u.ph+=e*(u.state==="flee"?11:u.state==="walk"||u.state==="return"||u.state==="wander"&&u.idle<=0?6.2*u.speed/1.4:1.5);let p=t.x-u.x,x=t.z-u.z,m=p*p+x*x;if(t.active&&u.state!=="sleep"&&u.state!=="notice"&&m<h&&Math.abs(t.y-u.y)<(r.seeUp||7)&&(u.look-=e,u.look<=0)){u.look=.15+o()*.12;let _=Math.sqrt(m),v=Math.sin(u.yaw),M=Math.cos(u.yaw),b=(v*p+M*x)/(_||1),w=u.state!=="flee"&&u.state!=="cower";if((_<4.5||b>f)&&s.clearLine(u.x,u.y+DS,u.z,t.x,t.y+.7,t.z))if(w){let y=u.alarmCool<=0;u.alarmCool=25,this.scare(u,t.x,t.z,!0),y&&a++}else u.fleeX=-p/(_||1),u.fleeZ=-x/(_||1),u.t=Math.min(u.t,1),u.state==="cower"&&(u.state="flee",u.t=0)}let g=0;switch(u.state){case"walk":{u.s+=u.speed*e*u.dir,this.loopPos(u),g=u.speed;break}case"wander":{if(u.idle>0){u.idle-=e,g=0;break}let _=u.tx-u.x,v=u.tz-u.z,M=Math.hypot(_,v);if(M<.6){u.idle=1+o()*4,this.newTarget(u);break}u.yaw=Math.atan2(_,v),u.x+=_/M*u.speed*e,u.z+=v/M*u.speed*e,g=u.speed,this.v.set(u.x,u.y,u.z),s.pushOut(this.v,.3,1.7)&&this.newTarget(u),u.x=this.v.x,u.z=this.v.z;break}case"notice":{u.yaw=Math.atan2(p,x),u.t>.55&&(u.state="flee",u.t=0,d.push(u));break}case"flee":{l++;let _=u.fleeSpeed*(u.t<.3?u.t/.3:1),v=Math.sin(u.ph*.13+u.i)*.35,M=u.fleeX*Math.cos(v)-u.fleeZ*Math.sin(v),b=u.fleeX*Math.sin(v)+u.fleeZ*Math.cos(v);if(u.x+=M*_*e,u.z+=b*_*e,u.yaw=Math.atan2(M,b),g=_,this.v.set(u.x,u.y,u.z),s.pushOut(this.v,.3,1.7)){let w=u.fleeX;u.fleeX=u.fleeX*.8-u.fleeZ*.6*(u.i%2?1:-1),u.fleeZ=u.fleeZ*.8+w*.6*(u.i%2?1:-1);let y=Math.hypot(u.fleeX,u.fleeZ)||1;u.fleeX/=y,u.fleeZ/=y}u.x=this.v.x,u.z=this.v.z,s.inWater(u.x,u.z)&&(u.fleeX=-u.fleeX,u.fleeZ=-u.fleeZ,u.x+=u.fleeX,u.z+=u.fleeZ),u.t>4.5&&m>784&&(u.state="cower",u.t=0),u.t>9&&(u.state="cower",u.t=0);break}case"cower":{u.t>2.6&&(u.state="return",u.t=0);break}case"return":{if(u.home.type==="plaza"){let b=u.home.r;if(u.x>b[0]&&u.x<b[2]&&u.z>b[1]&&u.z<b[3]){u.state="wander",u.idle=1;break}u.tx=(b[0]+b[2])/2,u.tz=(b[1]+b[3])/2}else if(u.t<.05){u.s=this.nearestS(u);let b=u.x,w=u.z;this.loopPos(u),u.tx=u.x,u.tz=u.z,u.x=b,u.z=w}let _=u.tx-u.x,v=u.tz-u.z,M=Math.hypot(_,v);if(M<.8||u.t>30&&m>3600){u.home.type==="loop"?(u.state="walk",this.loopPos(u)):(u.x=u.tx,u.z=u.tz,u.state="wander");break}u.yaw=Math.atan2(_,v),u.x+=_/M*u.speed*1.1*e,u.z+=v/M*u.speed*1.1*e,g=u.speed,this.v.set(u.x,u.y,u.z),s.pushOut(this.v,.3,1.7),u.x=this.v.x,u.z=this.v.z;break}case"sleep":{u.sleepT-=e,u.sleepT<=0&&(u.state="return",u.t=0);break}}u.mv=g,u.hop>0&&(u.hop=Math.max(0,u.hop-e))}for(let u of d){this.screamT<=0&&Math.hypot(u.x-t.x,u.z-t.z)<45&&(Ht("scream",u.scale<.95?1.25:.9+this.R()*.3),this.screamT=.35);for(let p of this.civs){if(p===u||p.state==="flee"||p.state==="notice"||p.state==="sleep"||p.state==="cower")continue;let x=p.x-u.x,m=p.z-u.z;x*x+m*m<64&&(this.scare(p,t.x,t.z,!1),p.fleeSpeed*=.9)}}return this.draw(n),{witnesses:a,fleeing:l}}draw(e){let t=this.parts,n=this.m4,s=this.m4b,r=this.m4c,o=this.q,a=this.e,l=this.v,c=this.sc;this._leg||(this._leg=(x,m,g)=>{s.makeRotationX(g),s.setPosition(m*.1,.86,0),r.multiplyMatrices(n,s),x.setMatrixAt(this._ci,r)},this._arm=(x,m,g,_)=>{a.set(g,0,_,"XYZ"),o.setFromEuler(a),s.makeRotationFromQuaternion(o),s.setPosition(m*.27,1.42,0),r.multiplyMatrices(n,s),x.setMatrixAt(this._ci,r)});let h=0,f=0,d=!1;this._slotOf||(this._slotOf=new Int32Array(this.civs.length).fill(-1));for(let x of this.pool)x.visible=!1;let u=e.position.x,p=e.position.z;for(let x of this.civs){if((x.x-u)**2+(x.z-p)**2>US)continue;let g=f++;if(this._slotOf[g]!==x.i){this._slotOf[g]=x.i;for(let O in this.baseCol){let R=t[O].instanceColor.array,D=this.baseCol[O];R[g*3]=D[x.i*3],R[g*3+1]=D[x.i*3+1],R[g*3+2]=D[x.i*3+2]}d=!0}let _=x.state==="sleep",v=x.state==="cower";a.set(_?-Math.PI/2:x.state==="flee"?.18:0,x.yaw,0,"YXZ"),o.setFromEuler(a);let M=_?.14:x.y+(x.hop>0?Math.sin((.25-x.hop)/.25*Math.PI)*.22:0);l.set(x.x,M,x.z),c.set(x.scale,x.scale*(v?.72:1),x.scale),n.compose(l,o,c),_&&r.makeTranslation(0,0,0);let b=Math.sin(x.ph),w=Math.min(1.1,x.mv*.28),y=x.state==="flee",S=x.state==="notice";s.makeTranslation(0,.86,0),r.multiplyMatrices(n,s),t.torso.setMatrixAt(g,r),s.makeTranslation(0,1.6,0),r.multiplyMatrices(n,s),t.head.setMatrixAt(g,r),t.hair.setMatrixAt(g,r);let N=this._leg,C=this._arm;if(this._ci=g,N(t.legL,1,b*w*.7+(v?-.9:0)),N(t.legR,-1,-b*w*.7+(v?-.9:0)),y?(C(t.armL,1,-2.7+Math.sin(x.ph*1.3)*.5,.35),C(t.armR,-1,-2.7+Math.cos(x.ph*1.3)*.5,-.35)):S?(C(t.armL,1,-1.2,.6),C(t.armR,-1,-1.2,-.6)):v?(C(t.armL,1,-2.9,.9),C(t.armR,-1,-2.9,-.9)):x.pose==="phone"&&x.mv<.2?(C(t.armL,1,0,.08),C(t.armR,-1,-1.9,.3)):(C(t.armL,1,-b*w*.6,.08),C(t.armR,-1,b*w*.6,-.08)),h<this.pool.length&&(S||y&&x.t<1.6||_)){let O=this.pool[h++];O.visible=!0,O.material.map=_?this.zTex:this.exTex,O.position.set(x.x,(_?.9:2.25*x.scale)+(_?Math.sin(x.t*2)*.1:0),x.z)}}for(let x in t)t[x].count=f,t[x].instanceMatrix.needsUpdate=!0,d&&t[x].instanceColor&&(t[x].instanceColor.needsUpdate=!0)}dispose(){this.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}),this.scene.remove(this.group)}};function Ff(i,e){let t=new ct;i.add(t);let n=new Mt(2200,32,16),s=new ai({side:Sn,depthWrite:!1,fog:!1,uniforms:{top:{value:new Me(e.sky[0])},mid:{value:new Me(e.sky[1])},bot:{value:new Me(e.sky[2])},sunDir:{value:new L(...e.sunDir).normalize()},sunCol:{value:new Me(e.sunDisk||"#fff4d0")},sunSize:{value:e.sunSize??.9985}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 top, mid, bot, sunDir, sunCol; uniform float sunSize; varying vec3 vP;
      void main(){ float h = vP.y; vec3 c = h > 0.0 ? mix(mid, top, pow(clamp(h*1.6,0.0,1.0), 0.7)) : mix(mid, bot, clamp(-h*6.0,0.0,1.0));
        float s = dot(normalize(vP), normalize(sunDir)); c += sunCol * smoothstep(sunSize, 1.0, s) * 1.5 + sunCol * pow(max(s,0.0), 24.0) * 0.25;
        gl_FragColor = vec4(c, 1.0); }`});if(t.add(new et(n,s)),e.stars){let h=new Float32Array(4200);for(let d=0;d<1400;d++){let u=Math.random()*2-1,p=Math.random()*6.283,x=Math.sqrt(1-u*u),m=Math.abs(u)*.95+.05;h[d*3]=Math.cos(p)*x*2e3,h[d*3+1]=m*2e3,h[d*3+2]=Math.sin(p)*x*2e3}let f=new Pt;f.setAttribute("position",new qt(h,3)),t.add(new ks(f,new xs({color:16777215,size:2.2,sizeAttenuation:!1,fog:!1,transparent:!0,opacity:.85})))}if(e.moon){let c=new et(new Mt(40,16,12),new Rt({color:e.moon,fog:!1}));c.position.set(...new L(...e.moonDir).normalize().multiplyScalar(1900).toArray()),t.add(c)}let r=new la(e.hemi[0],e.hemi[1],e.hemi[2]);t.add(r);let o=new qs(e.sun[0],e.sun[1]);o.castShadow=!0,o.shadow.mapSize.set(1024,1024);let a=o.shadow.camera;a.left=-38,a.right=38,a.top=38,a.bottom=-38,a.near=1,a.far=400,o.shadow.bias=-6e-4,o.shadow.normalBias=.04,i.add(o),i.add(o.target);let l=new L(...e.sunDir).normalize();return i.fog=new Oo(e.fog,e.fogNear,e.fogFar),{group:t,sun:o,follow(c){t.position.set(c.x,0,c.z),o.position.set(c.x+l.x*180,l.y*180,c.z+l.z*180),o.target.position.set(c.x,0,c.z)},dispose(){i.remove(t),i.remove(o),i.remove(o.target),t.traverse(c=>{c.geometry&&c.geometry.dispose(),c.material&&c.material.dispose()}),o.dispose()}}}var it={mx:0,my:0,camDX:0,camDY:0,jump:!1,jumpPressed:!1,power:!1,powerPressed:!1,keys:new Set};function l0(i,e){let t={id:null,ox:0,oy:0},n={id:null,x:0,y:0},s=60,r=e.joyBase,o=e.joyKnob,a=(d,u)=>{let p=m=>{m.preventDefault(),m.stopPropagation(),it[u]||(it[u+"Pressed"]=!0),it[u]=!0,d.classList.add("down")},x=m=>{m.preventDefault(),m.stopPropagation(),it[u]=!1,d.classList.remove("down")};d.addEventListener("touchstart",p,{passive:!1}),d.addEventListener("touchend",x,{passive:!1}),d.addEventListener("touchcancel",x,{passive:!1}),d.addEventListener("mousedown",p),d.addEventListener("mouseup",x),d.addEventListener("mouseleave",x)};a(e.btnJump,"jump"),a(e.btnPower,"power"),i.addEventListener("touchstart",d=>{d.preventDefault();for(let u of d.changedTouches)u.clientX<window.innerWidth*.45&&t.id===null?(t.id=u.identifier,t.ox=u.clientX,t.oy=u.clientY,r.style.display="block",r.style.left=u.clientX-s+"px",r.style.top=u.clientY-s+"px",o.style.transform="translate(0px,0px)"):n.id===null&&(n.id=u.identifier,n.x=u.clientX,n.y=u.clientY)},{passive:!1}),i.addEventListener("touchmove",d=>{d.preventDefault();for(let u of d.changedTouches)if(u.identifier===t.id){let p=u.clientX-t.ox,x=u.clientY-t.oy,m=Math.hypot(p,x);m>s&&(p*=s/m,x*=s/m),it.mx=p/s,it.my=x/s,o.style.transform=`translate(${p}px,${x}px)`}else u.identifier===n.id&&(it.camDX+=u.clientX-n.x,it.camDY+=u.clientY-n.y,n.x=u.clientX,n.y=u.clientY)},{passive:!1});let l=d=>{for(let u of d.changedTouches)u.identifier===t.id&&(t.id=null,it.mx=it.my=0,r.style.display="none"),u.identifier===n.id&&(n.id=null)};i.addEventListener("touchend",l),i.addEventListener("touchcancel",l);let c=!1,h=0,f=0;i.addEventListener("mousedown",d=>{c=!0,h=d.clientX,f=d.clientY}),window.addEventListener("mouseup",()=>{c=!1}),window.addEventListener("mousemove",d=>{c&&(it.camDX+=d.clientX-h,it.camDY+=d.clientY-f,h=d.clientX,f=d.clientY)}),window.addEventListener("keydown",d=>{let u=d.key.toLowerCase();it.keys.has(u)||(it.keys.add(u),u===" "&&(it.jump=!0,it.jumpPressed=!0,d.preventDefault()),(u==="e"||u==="shift")&&(it.power=!0,it.powerPressed=!0))}),window.addEventListener("keyup",d=>{let u=d.key.toLowerCase();it.keys.delete(u),u===" "&&(it.jump=!1),(u==="e"||u==="shift")&&(it.power=!1)})}function Bf(){let i=it.mx,e=it.my,t=it.keys;(t.has("w")||t.has("arrowup"))&&(e-=1),(t.has("s")||t.has("arrowdown"))&&(e+=1),(t.has("a")||t.has("arrowleft"))&&(i-=1),(t.has("d")||t.has("arrowright"))&&(i+=1);let n=Math.hypot(i,e);return n>1&&(i/=n,e/=n),[i,e]}function c0(){it.jumpPressed=!1,it.powerPressed=!1,it.camDX=0,it.camDY=0}function h0(){it.mx=it.my=0,it.jump=it.power=!1,it.keys.clear()}var zf=new URLSearchParams(location.search).has("perf"),ei=null,lo=[],th=0,nh=!1,oh="",ih=0,sh=0,rh=1/0,kf=0,Hf="";function f0(){zf&&(ei=document.createElement("div"),ei.style.cssText="position:fixed;left:max(10px,env(safe-area-inset-left));bottom:10px;z-index:50;font:11px/1.35 ui-monospace,Menlo,monospace;color:#9fffb0;background:rgba(0,0,0,.72);padding:6px 8px;border-radius:8px;white-space:pre;pointer-events:auto;max-width:70vw",ei.textContent="perf: waiting for play\u2026",ei.addEventListener("click",i=>{i.stopPropagation();let e=oh||ei.textContent;navigator.clipboard&&navigator.clipboard.writeText(e).then(()=>u0("copied"),()=>u0("copy failed"))}),document.body.appendChild(ei))}function u0(i){if(!ei)return;let e=ei.style.color;ei.style.color="#fff",ei.dataset.msg=i,setTimeout(()=>{ei.style.color=e},400)}function d0(i){zf&&(Hf=i,lo=[],th=0,nh=!1,oh="",ih=0,sh=0,rh=1/0)}function p0(i,e,t,n){if(!zf||!ei)return;let s=e.info.render,r=e.getPixelRatio();if(t&&!nh&&(th+=i,lo.push(i),s.calls>ih&&(ih=s.calls),s.triangles>sh&&(sh=s.triangles),r<rh&&(rh=r),th>=60&&OS(r,n)),kf+=i,kf<.5)return;kf=0;let o=lo.slice(-60),a=o.length?o.length/o.reduce((h,f)=>h+f,0):0,l=o.length?Math.max(...o)*1e3:0,c=`${Hf||"\u2014"}
fps ${a.toFixed(0)}  worst ${l.toFixed(0)}ms
calls ${s.calls}  tris ${(s.triangles/1e3).toFixed(0)}k
res x${r.toFixed(2)}  crowd ${n}`+(nh?`

BASELINE (tap to copy)
${oh}`:t?`
baseline in ${Math.max(0,60-th).toFixed(0)}s`:`
(paused)`);ei.textContent=c}function OS(i,e){nh=!0;let t=lo.length,n=lo.reduce((l,c)=>l+c,0),s=[...lo].sort((l,c)=>c-l),r=s.slice(0,Math.max(1,Math.floor(t*.01))),o=r.length/r.reduce((l,c)=>l+c,0),a=navigator.userAgent.match(/\(([^)]+)\)/)?.[1]||navigator.userAgent;oh=[`level: ${Hf}`,`avg fps: ${(t/n).toFixed(1)}`,`1% low fps: ${o.toFixed(1)}`,`worst frame: ${(s[0]*1e3).toFixed(0)} ms`,`max draw calls: ${ih}`,`max triangles: ${(sh/1e3).toFixed(0)}k`,`lowest res scale: x${rh.toFixed(2)} (start x${Math.min(window.devicePixelRatio||1,1.6).toFixed(2)})`,`crowd: ${e}`,`screen: ${screen.width}x${screen.height} @${window.devicePixelRatio}`,`device: ${a}`].join(`
`)}var Ot={walk:4.2,run:8.6,accel:34,airAccel:14,jumpV:8.6,grav:24,agMax:2.6,agRise:5.6,glideV:-2.6,radius:.3,height:1.15,blinkDist:11,blinkCD:1.3,sleepR:9,sleepCD:2.4,camDist:5.4},Ze=i=>document.getElementById(i),_0="lwh3d_save",fi={unlocked:1,best:{}};try{let i=JSON.parse(localStorage.getItem(_0)||"null");i&&i.unlocked&&(fi=i)}catch{}var FS=()=>{try{localStorage.setItem(_0,JSON.stringify(fi))}catch{}},Na=new URLSearchParams(location.search),BS=Na.get("q")?Na.get("q")==="mobile":matchMedia("(pointer: coarse)").matches||/Android|iPhone|iPad/i.test(navigator.userAgent),m0=700,qf=3e3,y0=Ze("gl"),di=new Fc({canvas:y0,antialias:!0,powerPreference:"high-performance"}),lh=Math.min(window.devicePixelRatio||1,1.6);di.setPixelRatio(lh);di.outputColorSpace=Xt;di.toneMapping=ma;di.toneMappingExposure=1.05;di.shadowMap.enabled=!0;di.shadowMap.type=Ys;var fn=new Nr,Tn=new on(62,1,.3,2600);function Kf(){di.setSize(window.innerWidth,window.innerHeight,!1),Tn.aspect=window.innerWidth/window.innerHeight,Tn.fov=Tn.aspect<1?75:62,Tn.updateProjectionMatrix()}window.addEventListener("resize",Kf);Kf();var kS=new Qr(di),ui=Wm();fn.add(ui.root);if(Na.get("hero")!=="proc"){let i=new vn().setFromObject(ui.root).getSize(new L).y;t0("assets/hero.glb?v="+(window.__BUILD||""),{height:i,clips:{run:"assets/hero_run.glb",jump:"assets/hero_jump.glb"}}).then(e=>{e.root.position.copy(ui.root.position),e.root.rotation.copy(ui.root.rotation),e.root.visible=ui.root.visible,fn.remove(ui.root),ui=e,fn.add(e.root),console.log("hero glb loaded, clips:",e.clips.join(",")||"none")}).catch(e=>console.info("hero.glb not used:",e&&e.message?e.message:e))}var En=0,ti=Qn[0],at=null,Ln=null,hh=null,Bn=null,La=null,wt="loading",H={pos:new L,vel:new L,yaw:0,grounded:!0,coyote:0,ag:Ot.agMax,floating:!1,airT:0,blinkCD:0,powerCD:0,cast:0,cp:new L,cpYaw:0},Gt={yaw:0,pitch:.32,lastDrag:-10,dist:Ot.camDist,pos:new L},Ue={t:0,time:0,panic:0,witnesses:0,coins:0,logs:0,caughtT:0,launchT:0,cpIndex:0,toastT:0,hintT:0},or=null,co=[],ho=[],xn=null,ni=null,Jf=[],Yf=jt(64,64,i=>{let e=i.createRadialGradient(32,32,1,32,32,32);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.3,"rgba(255,255,255,.5)"),e.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=e,i.fillRect(0,0,64,64)},!1),v0=new ct;fn.add(v0);for(let i=0;i<40;i++){let e=new Kn(new Hn({map:Yf,color:4190463,blending:Fn,depthWrite:!1,transparent:!0}));e.visible=!1,v0.add(e),Jf.push({s:e,v:new L,life:0})}function rr(i,e,t=14,n=4){let s=0;for(let r of Jf)if(!(r.life>0)&&(r.life=.5+Math.random()*.4,r.s.visible=!0,r.s.material.color.set(e),r.s.position.copy(i),r.s.scale.setScalar(.5),r.v.set((Math.random()-.5)*n,Math.random()*n,(Math.random()-.5)*n),++s>=t))break}function Gf(i,e=80,t=1.2){let n=new et(new rt(t,t,e,12,1,!0),new Rt({color:i,transparent:!0,opacity:.22,blending:Fn,depthWrite:!1,side:bn,fog:!1}));return n.position.y=e/2,n}function zS(){at&&at.dispose(),Ln&&Ln.dispose(),hh&&hh.dispose();for(let i of[or,xn,ni,...ho.map(e=>e.g)])i&&(fn.remove(i),i.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material!==void 0&&e.material.dispose?.()}));ho=[],or=null,xn=null,ni=null,La&&(La.dispose(),La=null),Bm()}function M0(i){if(zS(),En=i,ti=Qn[i],d0(ti.name),at=new zc(fn,{...ti,night:ti.night}),at.reflective=[],Bn=ti.build(at),at.finish(),hh=Ff(fn,ti.light),qf=ti.light.fogFar,BS&&fn.fog&&(fn.fog.far=Math.min(fn.fog.far,m0),fn.fog.near=Math.min(fn.fog.near,m0*.3),qf=fn.fog.far),at.reflective.length){let a=new Nr,l=Ff(a,ti.light);La=kS.fromScene(a,.02,.1,5e3).texture,l.dispose();for(let c of at.reflective)c.envMap=La,c.needsUpdate=!0}Ln=new eh(at,fn,{...ti.civ,plazaMul:1});let e=[],t=at.R;for(let a=0;a<400&&e.length<32;a++){let l,c;if(t()<.5&&at.loops.length){let h=at.loops[Math.floor(t()*at.loops.length)].r,f=Math.floor(t()*4);l=f<2?h[0]+t()*(h[2]-h[0]):h[f===2?0:2],c=f>=2?h[1]+t()*(h[3]-h[1]):h[f===0?1:3]}else if(at.plazas.length){let h=at.plazas[Math.floor(t()*at.plazas.length)].r;l=h[0]+t()*(h[2]-h[0]),c=h[1]+t()*(h[3]-h[1])}else continue;at.inWater(l,c)||at.solid(l,.8,c)||e.push([l,at.groundAt(l,c,.5)+1,c])}let n=at.boxes.filter(a=>a.y1>5&&a.y1<14&&a.y0===0&&(a.x1-a.x0)*(a.z1-a.z0)>80);for(let a=0;a<8&&n.length;a++){let l=n[Math.floor(t()*n.length)],c=(l.x0+l.x1)/2,h=(l.z0+l.z1)/2;e.push([c,at.groundAt(c,h,l.y1+.2)+1,h])}co=e.map(a=>({p:new L(...a),got:!1})),or=new vi(new _s(.32),new Rt({color:"#ffe45a"}),co.length),or.frustumCulled=!1,fn.add(or),ho=Bn.checkpoints.map((a,l)=>{let c=new ct;c.position.set(...a);let h=new et(new cn(1.6,.12,8,32),new Rt({color:"#3ff0ff"}));h.rotation.x=Math.PI/2,h.position.y=.15,c.add(h);let f=Gf("#3ff0ff",14,.9);return c.add(f),l===0&&(c.visible=!1),fn.add(c),{g:c,ring:h,beam:f,on:l===0,pos:new L(...a)}}),xn=new ct,xn.position.set(...Bn.goal.pos);let s=["#c08bff","#c08bff","#5ef0ff","#ffa040","#ffe45a"][i];if(En===0||En===4)xn.add(Gf("#ffe45a",140,2.5));else{let a=En===1?new na(.35,.12,48,8):En===2?new _s(.5):new Ri(.45,1),l=new et(a,new Rt({color:s}));l.position.y=1,l.name="core",xn.add(l);let c=new Kn(new Hn({map:Yf,color:s,blending:Fn,depthWrite:!1,transparent:!0}));c.scale.setScalar(3),c.position.y=1,xn.add(c),xn.add(Gf(s,140,1.6))}fn.add(xn),ni=new ct,ni.position.set(...Bn.log);let r=new et(new ke(.5,.7,.08),new Rt({color:"#3ff0ff"}));r.position.y=.8,r.name="tab",ni.add(r);let o=new Kn(new Hn({map:Yf,color:"#3ff0ff",blending:Fn,depthWrite:!1,transparent:!0}));o.scale.setScalar(2),o.position.y=.8,ni.add(o),fn.add(ni),Bn.ship&&(Bn.ship.group.visible=!0),dh(!0),Ue.time=0,Ue.panic=0,Ue.witnesses=0,Ue.coins=0,Ue.logs=0,i0(no[i].music)}function dh(i){let e=Bn.spawn;if(i){H.cp.set(e[0],e[1],e[2]),H.cpYaw=e[3],Ue.cpIndex=0;for(let[t,n]of ho.entries())n.on=t===0,S0(n)}H.pos.copy(H.cp),H.pos.y=at.groundAt(H.pos.x,H.pos.z,H.pos.y+1),H.vel.set(0,0,0),H.yaw=H.cpYaw,H.grounded=!0,H.ag=Ot.agMax,H.floating=!1,H.cast=0,Gt.yaw=H.yaw+Math.PI,Gt.pitch=.32,Ue.grace=3,ui.root.visible=!0}function S0(i){i.ring.material.color.set(i.on?"#5aff8a":"#3ff0ff"),i.beam.material.color.set(i.on?"#5aff8a":"#3ff0ff"),i.beam.material.opacity=i.on?.08:.22}function kn(i){for(let e of["ovTitle","ovLevels","ovCard","ovPause","ovEnd","ovCaught"])Ze(e).hidden=e!==i;Ze("hud").classList.toggle("hidden",i!==null&&i!=="ovCaught")}function uh(i,e,t=5.5){let n=Ze("toast");n.innerHTML=(i?"<b>"+i+"</b>":"")+e,n.hidden=!1,Ue.toastT=t}var b0=["Hold JUMP in the air to float. POWER blinks you forward when nobody is close.","The roofs are quieter than Michigan Ave. Float up onto the low ones and stay out of sight.","Times Square is packed. Walk up to a crowd and tap POWER to put everyone nearby to sleep.","The beach is wide open. Blink across the gaps and use the lifeguard towers as cover.","The base is crawling with staff around the ship. Sleep them in groups, then make a run for it."];function ph(i){let e=no[i],t=Qn[i];Ze("cardKick").textContent=`Level ${i+1} \xB7 ${t.place}`,Ze("cardTitle").textContent=e.title,Ze("cardText").textContent=e.card,Ze("cardTip").textContent=b0[i],Ze("btnGo").onclick=()=>{jc(),w0(),E0(i)},kn("ovCard"),wt="card"}function mh(){let i=Ze("levelGrid");i.innerHTML="",Qn.forEach((e,t)=>{let n=document.createElement("button");n.className="lv",n.disabled=t>=fi.unlocked;let s=fi.best[e.id];n.innerHTML=`${t+1}. ${e.name}<small>${s?T0(s.time)+" \xB7 \u2726"+s.coins:t>=fi.unlocked?"Locked":no[t].title}</small>`,n.onclick=()=>{Ht("uiBlip"),ph(t)},i.appendChild(n)})}var T0=i=>`${Math.floor(i/60)}:${String(Math.floor(i%60)).padStart(2,"0")}`;function E0(i){Ze("loadingText").textContent=`Loading ${Qn[i].name}\u2026`,Ze("loading").hidden=!1,setTimeout(()=>{i!==En||!at?M0(i):(Ln.reset(),fh()),fh(),Ze("loading").hidden=!0,kn(null),wt="play",sr.paused=!1,Ca(.38),Ze("hint").textContent=b0[i],Ue.hintT=9},30)}function fh(){dh(!0),Ln.reset(),Ue.time=0,Ue.panic=0,Ue.witnesses=0,Ue.coins=0,Ue.logs=0;for(let i of co)i.got=!1;ni.visible=!0,xn.visible=!0,Bn.ship&&(Bn.ship.group.position.y=En===4?2.2:Bn.ship.group.position.y)}function w0(){let i=document.documentElement;try{!document.fullscreenElement&&i.requestFullscreen&&i.requestFullscreen({navigationUI:"hide"}).then(()=>{try{screen.orientation.lock("landscape").catch(()=>{})}catch{}}).catch(()=>{})}catch{}}Ze("btnPlay").onclick=()=>{jc(),Ht("uiBlip");let i=0;for(let e=0;e<fi.unlocked&&e<Qn.length&&(i=e,!!fi.best[Qn[e].id]);e++);ph(i)};Ze("btnLevels").onclick=()=>{jc(),Ht("uiBlip"),mh(),kn("ovLevels")};Ze("btnLvBack").onclick=()=>{kn("ovTitle"),wt="title"};Ze("btnCardBack").onclick=()=>{mh(),kn("ovLevels")};Ze("btnPause").onclick=()=>{wt==="play"&&(wt="paused",sr.paused=!0,Ia(),h0(),kn("ovPause"))};Ze("btnResume").onclick=()=>{wt="play",sr.paused=!1,kn(null)};Ze("btnRestart").onclick=()=>{kn(null),fh(),wt="play",sr.paused=!1};Ze("btnQuit").onclick=()=>{sr.paused=!1,mh(),kn("ovLevels"),wt="title"};Ze("btnMute").onclick=()=>{r0(),Ze("btnMute").textContent="Sound: "+(o0()?"off":"on")};Ze("btnFs").onclick=w0;Ze("btnReplay").onclick=()=>ph(En);Ze("btnEndLevels").onclick=()=>{mh(),kn("ovLevels"),wt="title"};Ze("btnNext").onclick=()=>{En+1<Qn.length&&ph(En+1)};document.addEventListener("visibilitychange",()=>{document.hidden&&wt==="play"&&Ze("btnPause").onclick()});l0(y0,{joyBase:Ze("joyBase"),joyKnob:Ze("joyKnob"),btnJump:Ze("btnJump"),btnPower:Ze("btnPower")});var ch=new L;function A0(i){let[e,t]=Bf(),n=-Math.sin(Gt.yaw),s=-Math.cos(Gt.yaw),r=Math.cos(Gt.yaw),o=-Math.sin(Gt.yaw),a=n*-t+r*e,l=s*-t+o*e,c=Math.min(1,Math.hypot(a,l));c>.01&&(a/=c,l/=c);let h=c<.72?Ot.walk*(c/.72):Ot.run,f=H.grounded?Ot.accel:Ot.airAccel,d=a*h,u=l*h;if(H.vel.x+=Math.max(-f*i,Math.min(f*i,d-H.vel.x)),H.vel.z+=Math.max(-f*i,Math.min(f*i,u-H.vel.z)),H.cast>0&&(H.vel.x*=.5,H.vel.z*=.5),c>.05){let b=Math.atan2(a,l)-H.yaw;b=Math.atan2(Math.sin(b),Math.cos(b)),H.yaw+=b*Math.min(1,i*12)}H.coyote-=i,it.jumpPressed&&(H.grounded||H.coyote>0)&&(H.vel.y=Ot.jumpV,H.grounded=!1,H.coyote=0,H.airT=0,Ht("jump"));let p=H.floating;H.floating=!1,H.grounded||(H.airT+=i,it.jump&&(H.airT>.22||H.vel.y<1.5)?H.ag>0?(H.floating=!0,H.ag-=i,H.vel.y+=(Ot.agRise-H.vel.y)*Math.min(1,i*6)):(H.vel.y=Math.max(H.vel.y-Ot.grav*i,Ot.glideV),H.floating=!0):H.vel.y=Math.max(H.vel.y-Ot.grav*i,-40)),H.floating&&!p&&s0(),!H.floating&&p&&Ia(),H.pos.x+=H.vel.x*i,H.pos.z+=H.vel.z*i,at.pushOut(H.pos,Ot.radius,Ot.height),H.pos.y+=H.vel.y*i;let x=at.ceilingAt(H.pos.x,H.pos.z,H.pos.y-H.vel.y*i,Ot.height,Ot.radius*.8);H.vel.y>0&&H.pos.y+Ot.height>x&&(H.pos.y=x-Ot.height,H.vel.y=0);let m=at.groundAt(H.pos.x,H.pos.z,H.pos.y,Ot.radius,.5);if(H.pos.y<=m+.001?(!H.grounded&&H.vel.y<-13?Ht("land",!0):H.grounded||Ht("land",!1),H.pos.y=m,H.vel.y<0&&(H.vel.y=0),H.grounded=!0,H.ag=Ot.agMax,H.coyote=.12):H.grounded&&H.pos.y-m<.55&&H.vel.y<=0?H.pos.y=m:H.grounded&&(H.grounded=!1,H.airT=.3),at.inWater(H.pos.x,H.pos.z)&&H.pos.y<.4){Ht("splash"),rr(H.pos.clone().setY(.3),"#9fe8ff",18,5),uh("","Splash. Aliens don\u2019t swim. Back to the last checkpoint.",3),dh(!1),Ht("respawn");return}H.blinkCD-=i,H.powerCD-=i,H.cast-=i;let g=Ln.awakeNear(H.pos.x,H.pos.z,Ot.sleepR),_=Ze("btnPower"),v=g?"SLEEP":"BLINK";if(_.textContent!==v&&(_.textContent=v),_.classList.toggle("cool",g?H.powerCD>0:H.blinkCD>0),it.powerPressed){if(g&&H.powerCD<=0){let M=Ln.sleepAround(H.pos.x,H.pos.z,Ot.sleepR);H.powerCD=Ot.sleepCD,H.cast=.45,Ht("cast"),setTimeout(()=>Ht("sleep"),200),rr(H.pos.clone().setY(H.pos.y+1.3),"#9ff7ff",20,7),M>2&&uh("",`${M} people out cold.`,2)}else if(!g&&H.blinkCD<=0){let M=Math.sin(H.yaw),b=Math.cos(H.yaw),w=0;for(let y=.5;y<=Ot.blinkDist;y+=.5){let S=H.pos.x+M*y,N=H.pos.z+b*y;if(at.solid(S,H.pos.y+.5,N)||at.solid(S,H.pos.y+1,N)||at.inWater(S,N)&&H.pos.y<.5||S<at.bounds[0]+1||S>at.bounds[2]-1||N<at.bounds[1]+1||N>at.bounds[3]-1)break;w=y}w>.6&&(rr(H.pos.clone().setY(H.pos.y+.6),"#3ff0ff",12,3),H.pos.x+=M*(w-.3),H.pos.z+=b*(w-.3),rr(H.pos.clone().setY(H.pos.y+.6),"#3ff0ff",12,3),Ht("blink"),H.blinkCD=Ot.blinkCD)}}}function Zf(i){(it.camDX||it.camDY)&&(Gt.yaw-=it.camDX*.0065,Gt.pitch=Math.max(-.05,Math.min(1.15,Gt.pitch+it.camDY*.0045)),Gt.lastDrag=Ue.t);let[,e]=Bf(),t=Math.hypot(H.vel.x,H.vel.z);if(Ue.t-Gt.lastDrag>1.2&&t>1&&e<-.3){let d=H.yaw+Math.PI-Gt.yaw;d=Math.atan2(Math.sin(d),Math.cos(d)),Gt.yaw+=d*Math.min(1,i*1.4)}let n=H.pos.x,s=H.pos.y+1.15,r=H.pos.z,o=Math.cos(Gt.pitch),a=H.floating?Ot.camDist+1.2:Ot.camDist;Gt.dist+=(a-Gt.dist)*Math.min(1,i*3);let l=Math.sin(Gt.yaw)*o,c=Math.sin(Gt.pitch),h=Math.cos(Gt.yaw)*o,f=Gt.dist;for(let d=.6;d<=Gt.dist;d+=.35)if(at.solid(n+l*d,s+c*d,r+h*d)){f=Math.max(.8,d-.45);break}Tn.position.set(n+l*f,Math.max(s+c*f,at.groundAt(n+l*f,r+h*f,s+c*f)+.35),r+h*f),Tn.lookAt(n,s+.25,r)}var R0=Ze("mini"),Qe=R0.getContext("2d"),uo={},ah=(i,e)=>{uo[i]!==e&&(uo[i]=e,Ze(i).textContent=e)},g0=(i,e,t)=>{let n=i+e;uo[n]!==t&&(uo[n]=t,Ze(i).style[e]=t)};function HS(){let i=Gt.yaw,e=xn.position,t=e.x-H.pos.x,n=e.z-H.pos.z,s=Math.hypot(t,n),r=t*Math.cos(i)-n*Math.sin(i),o=t*Math.sin(i)+n*Math.cos(i);g0("objArrow","transform",`rotate(${Math.atan2(r,-o).toFixed(2)}rad)`),ah("objLabel",Bn.goal.label),ah("objDist",s>1e3?(s/1e3).toFixed(1)+" km":Math.round(s)+" m"),g0("panicFill","width",Math.min(100,Ue.panic).toFixed(1)+"%");let a=Ue.panic>70;uo.hot!==a&&(uo.hot=a,Ze("panic").classList.toggle("hot",a)),ah("coinN",`${Ue.coins}/${co.length}`),ah("logN",`${Ue.logs}/1`);let l=at.minimap,c=R0.width,h=c/2,f=h/230/l.sc;Qe.save(),Qe.clearRect(0,0,c,c),Qe.beginPath(),Qe.arc(h,h,h-2,0,7),Qe.clip(),Qe.fillStyle=ti.outerGround,Qe.fillRect(0,0,c,c),Qe.translate(h,h),Qe.rotate(i),Qe.scale(f,f);let d=v=>(v-l.x0)*l.sc,u=v=>(v-l.z0)*l.sc;Qe.translate(-d(H.pos.x),-u(H.pos.z)),Qe.drawImage(l.canvas,0,0);let p=1/f;for(let v of Ln.civs)Math.abs(v.x-H.pos.x)>240||Math.abs(v.z-H.pos.z)>240||(Qe.fillStyle=v.state==="flee"||v.state==="notice"?"#ff3a3a":v.state==="sleep"?"#5ef0ff":"#ffffff",Qe.fillRect(d(v.x)-2*p,u(v.z)-2*p,4*p,4*p));for(let v of ho)v.on||(Qe.fillStyle="#3ff0ff",Qe.beginPath(),Qe.arc(d(v.pos.x),u(v.pos.z),4*p,0,7),Qe.fill());Qe.restore();let x=r*(h/230),m=o*(h/230),g=Math.hypot(x,m);g>h-12&&(x*=(h-12)/g,m*=(h-12)/g),Qe.fillStyle="#ffe45a",Qe.strokeStyle="#3a2600",Qe.lineWidth=3,Qe.beginPath(),Qe.arc(h+x,h+m,8,0,7),Qe.fill(),Qe.stroke();let _=H.yaw-(Gt.yaw+Math.PI);Qe.save(),Qe.translate(h,h),Qe.rotate(-_+Math.PI),Qe.fillStyle="#93cf3a",Qe.strokeStyle="#102000",Qe.lineWidth=3,Qe.beginPath(),Qe.moveTo(0,-11),Qe.lineTo(8,8),Qe.lineTo(0,4),Qe.lineTo(-8,8),Qe.closePath(),Qe.stroke(),Qe.fill(),Qe.restore(),Qe.fillStyle="#fff",Qe.font="bold 20px sans-serif",Qe.textAlign="center",Qe.textBaseline="middle",Qe.fillText("N",h+Math.sin(-i)*(h-14)*-1,h-Math.cos(i)*(h-14))}function C0(i){Ue.time+=i;let e=Ln.update(i,{x:H.pos.x,y:H.pos.y,z:H.pos.z,active:wt==="play"&&Ue.grace<=0},Tn);Ue.grace-=i,e.witnesses&&(Ue.panic+=e.witnesses*ti.civ.panic,Ue.witnesses+=e.witnesses),Ue.panic=Math.max(0,Ue.panic-i*(e.fleeing?.6:2.6)),Of(Ue.panic>55),Ue.panic>=100&&wt==="play"&&(wt="caught",Ue.caughtT=0,Ht("alert"),Ht("siren"),Ia(),Ze("flash").style.opacity=1,kn("ovCaught"),Ca(.12));let t=ch,n=new We,s=new Bt,r=new L;co.forEach((l,c)=>{!l.got&&l.p.distanceToSquared(t.set(H.pos.x,H.pos.y+.6,H.pos.z))<1.6&&(l.got=!0,Ue.coins++,Ht("coin"),rr(l.p,"#ffe45a",8,3)),s.setFromAxisAngle(new L(0,1,0),Ue.t*2+c),r.setScalar(l.got?1e-4:1),n.compose(new L(l.p.x,l.p.y+Math.sin(Ue.t*2.5+c)*.15,l.p.z),s,r),or.setMatrixAt(c,n)}),or.instanceMatrix.needsUpdate=!0,ho.forEach((l,c)=>{l.ring.rotation.z+=i,!l.on&&l.pos.distanceTo(ch.set(H.pos.x,l.pos.y,H.pos.z))<3&&Math.abs(H.pos.y-l.pos.y)<3&&(l.on=!0,S0(l),H.cp.copy(l.pos),H.cpYaw=H.yaw,Ht("ckpt"),uh("","Checkpoint",1.6))}),ni.visible&&(ni.getObjectByName("tab").rotation.y+=i*1.5,ni.position.y=Bn.log[1]+Math.sin(Ue.t*2)*.12,ni.position.distanceTo(ch.set(H.pos.x,H.pos.y+.3,H.pos.z))<1.8&&(ni.visible=!1,Ue.logs=1,Ht("ckpt"),uh("Ship\u2019s log \xB7 "+ti.name,no[En].log,8)));let o=xn.getObjectByName("core");o&&(o.rotation.y+=i*1.6,o.rotation.x+=i*.7,o.position.y=1+Math.sin(Ue.t*2)*.15);let a=Bn.goal.radius||1.6;xn.visible&&Math.hypot(xn.position.x-H.pos.x,xn.position.z-H.pos.z)<a&&Math.abs(xn.position.y-H.pos.y)<2.5&&GS();for(let l of at.anim)l(Ue.t)}function GS(){if(Ia(),Of(!1),En===4){wt="launch",Ue.launchT=0,Ht("part"),setTimeout(()=>Ht("launch"),900),ui.root.visible=!1,xn.visible=!1,rr(H.pos.clone().setY(1),"#ffe45a",30,6);return}Ht(En===0?"win":"part"),xn.visible=!1,rr(H.pos.clone().setY(1),"#ffe45a",30,6),I0()}function I0(){wt="end";let i=ti.id,e=fi.best[i];!e||Ue.time<e.time?fi.best[i]={time:Ue.time,coins:Math.max(Ue.coins,e?e.coins:0)}:fi.best[i].coins=Math.max(e.coins,Ue.coins),fi.unlocked=Math.max(fi.unlocked,Math.min(Qn.length,En+2)),FS();let t=no[En];Ze("endKick").textContent=t.endKick,Ze("endTitle").textContent=t.endTitle,Ze("endStory").textContent=En===4?"The ship remembered the way. Thanks for playing Long Way Home.":t.endStory,Ze("endStats").innerHTML=`<div><b>${T0(Ue.time)}</b>time</div><div><b>${Ue.coins}/${co.length}</b>stardust</div><div><b>${Ue.witnesses}</b>people spooked</div>`,Ze("btnNext").hidden=En>=Qn.length-1,kn("ovEnd"),Ca(.2)}var x0=performance.now(),Vf=0,Xf=0,Wf=0;function P0(i){requestAnimationFrame(P0);let e=Math.min(.05,(i-x0)/1e3);if(x0=i,Ue.t+=e,!!at){if(Vf+=e,Xf++,Wf+=e,Wf>2.5){let t=Xf/Vf;t<34&&lh>.9&&(lh-=.15,di.setPixelRatio(lh),Kf()),Vf=0,Xf=0,Wf=0,window.__fps=t}if(wt==="play")A0(e),Zf(e),C0(e);else if(wt==="caught")Ue.caughtT+=e,Ln.update(e,{x:H.pos.x,y:H.pos.y,z:H.pos.z,active:!1},Tn),Zf(e),Ue.caughtT>2.4&&(Ze("flash").style.opacity=0,Ue.panic=0,Ln.reset(),dh(!1),Ht("respawn"),kn(null),wt="play",Ca(.38));else if(wt==="launch"){Ue.launchT+=e;let t=Bn.ship.group,n=Ue.launchT;t.position.y=2.2+Math.max(0,n-1)**2*2.2,t.rotation.y+=e*(1+n*2),t.rotation.x*=.98,Bn.ship.lights.color.setHSL(n*.3%1,1,.6),Tn.position.lerp(ch.set(t.position.x+30,8+n*3,t.position.z+34),e*1.5),Tn.lookAt(t.position),Ln.update(e,{x:0,y:-999,z:0,active:!1},Tn),n>6&&I0()}else if(wt==="title"||wt==="card"||wt==="end"||wt==="loading"){let t=Ue.t*.2;Tn.position.set(H.pos.x+Math.sin(t)*4.6,H.pos.y+1.5,H.pos.z+Math.cos(t)*4.6),Tn.lookAt(H.pos.x-Math.cos(t)*1.7,H.pos.y+1.3,H.pos.z+Math.sin(t)*1.7),Ln.update(e,{x:H.pos.x,y:H.pos.y,z:H.pos.z,active:!1},Tn)}for(let t of Jf)t.life<=0||(t.life-=e,t.s.position.addScaledVector(t.v,e),t.v.y-=6*e,t.s.scale.setScalar(Math.max(.01,t.life)*.9),t.life<=0&&(t.s.visible=!1));Ue.toastT>0&&(Ue.toastT-=e,Ue.toastT<=0&&(Ze("toast").hidden=!0)),Ue.hintT>0&&(Ue.hintT-=e,Ue.hintT<=0&&(Ze("hint").textContent="")),ui.root.position.copy(H.pos),ui.root.rotation.y=H.yaw,ui.update(e,{speed:wt==="play"?Math.hypot(H.vel.x,H.vel.z):0,grounded:H.grounded,vy:H.vel.y,floating:H.floating,casting:H.cast>0}),hh.follow(H.pos),at.cullFar(Tn,qf+40),di.render(fn,Tn),p0(e,di,wt==="play",Ln?Ln.civs.length:0),wt==="play"&&HS(),c0()}}function VS(){f0();let i=Math.min(Qn.length-1,Number(Na.get("level")||0));M0(i),wt="title",kn("ovTitle"),Ze("hud").classList.add("hidden"),Na.has("play")&&(kn(null),wt="play",fh()),requestAnimationFrame(P0)}window.__game={sim(i){let e=.016666666666666666;for(let t=0;t<i*60;t++)Ue.t+=e,wt==="play"&&(A0(e),Zf(e),C0(e)),it.jumpPressed=!1,it.powerPressed=!1},renderer:di,camera:Tn,P:H,G:Ue,cam:Gt,get world(){return at},get crowd(){return Ln},input:it,startLevel:E0,LEVELS:Qn,setState:i=>{wt=i},get state(){return wt}};VS();"serviceWorker"in navigator&&navigator.serviceWorker.register("../sw.js").catch(()=>{});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
