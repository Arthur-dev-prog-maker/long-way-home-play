var cf=0,sh=1,hf=2;var fs=1,uf=2,rr=3,Qi=0,un=1,Cn=2,ds=0,ar=1,Gn=2,rh=3,ah=4,ff=5;var ps=100,df=101,pf=102,mf=103,gf=104,xf=200,_f=201,yf=202,vf=203,oh=204,lh=205,Mf=206,Sf=207,bf=208,Ef=209,Tf=210,wf=211,Af=212,Rf=213,Cf=214,_o=0,yo=1,vo=2,Vs=3,Mo=4,So=5,bo=6,Eo=7,Ma=0,If=1,Pf=2,xi=0,ch=1,hh=2,uh=3,Sa=4,fh=5,dh=6,ph=7;var mh=300,ms=301,or=302,jo=303,el=304,Xs=1e3,di=1001,To=1002,an=1003,Lf=1004;var ba=1005;var wn=1006,tl=1007;var Ni=1008;var Nn=1009,gh=1010,xh=1011,lr=1012,nl=1013,li=1014,jn=1015,ci=1016,il=1017,sl=1018,gs=1020,_h=35902,yh=35899,vh=1021,Mh=1022,hi=1023,Ii=1026,Ui=1027,rl=1028,al=1029,ji=1030,ol=1031;var ll=1033,Ea=33776,Ta=33777,wa=33778,Aa=33779,cl=35840,hl=35841,ul=35842,fl=35843,dl=36196,pl=37492,ml=37496,gl=37488,xl=37489,Ra=37490,_l=37491,yl=37808,vl=37809,Ml=37810,Sl=37811,bl=37812,El=37813,Tl=37814,wl=37815,Al=37816,Rl=37817,Cl=37818,Il=37819,Pl=37820,Ll=37821,Dl=36492,Nl=36494,Ul=36495,Fl=36283,Ol=36284,Ca=36285,Bl=36286;var Br=2300,wo=2301,go=2302,Yc=2303,Zc=2400,$c=2401,Jc=2402;var Df=3200;var cr=0,Nf=1,Fi="",hn="srgb",zr="srgb-linear",kr="linear",wt="srgb";var xo=7680;var Uf=519,Ff=512,Of=513,Bf=514,Sh=515,zf=516,kf=517,bh=518,Eh=519,Th=35044;var wh="300 es",Zn=2e3,Ws=2001;function Np(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Up(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Gr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Gf(){let n=Gr("canvas");return n.style.display="block",n}var wu={},qs=null;function Hr(...n){let e="THREE."+n.shift();qs?qs("log",e,...n):console.log(e,...n)}function Hf(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function We(...n){n=Hf(n);let e="THREE."+n.shift();if(qs)qs("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function qe(...n){n=Hf(n);let e="THREE."+n.shift();if(qs)qs("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Ur(...n){let e=n.join(" ");e in wu||(wu[e]=!0,We(...n))}function Vf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Xf={[_o]:_o,[vo]:bo,[Mo]:Mo,[Vs]:So,[yo]:yo,[bo]:vo,[Eo]:Eo,[So]:Vs},pi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Mc=Math.PI/180,Ao=180/Math.PI;function es(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]).toLowerCase()}function pt(n,e,t){return Math.max(e,Math.min(t,n))}function Fp(n,e){return(n%e+e)%e}function Sc(n,e,t){return(1-t)*n+t*e}function Wf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function zl(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function qf(n,e){if(e.constructor===Float32Array)return n;let t=zl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function Yf(n,e){if(e.constructor===Float32Array)return n;let t=zl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var Lh=class Lh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Lh.prototype.isVector2=!0;var ae=Lh,_n=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],f=r[a+0],h=r[a+1],m=r[a+2],x=r[a+3];if(d!==x||l!==f||c!==h||u!==m){let p=l*f+c*h+u*m+d*x;p<0&&(f=-f,h=-h,m=-m,x=-x,p=-p);let g=1-o;if(p<.9995){let _=Math.acos(p),M=Math.sin(_);g=Math.sin(g*_)/M,o=Math.sin(o*_)/M,l=l*g+f*o,c=c*g+h*o,u=u*g+m*o,d=d*g+x*o}else{l=l*g+f*o,c=c*g+h*o,u=u*g+m*o,d=d*g+x*o;let _=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=_,c*=_,u*=_,d*=_}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[a],f=r[a+1],h=r[a+2],m=r[a+3];return e[t]=o*m+u*d+l*h-c*f,e[t+1]=l*m+u*f+c*d-o*h,e[t+2]=c*m+u*h+o*f-l*d,e[t+3]=u*m-o*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),d=o(r/2),f=l(i/2),h=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=f*u*d+c*h*m,this._y=c*h*d-f*u*m,this._z=c*u*m+f*h*d,this._w=c*u*d-f*h*m;break;case"YXZ":this._x=f*u*d+c*h*m,this._y=c*h*d-f*u*m,this._z=c*u*m-f*h*d,this._w=c*u*d+f*h*m;break;case"ZXY":this._x=f*u*d-c*h*m,this._y=c*h*d+f*u*m,this._z=c*u*m+f*h*d,this._w=c*u*d-f*h*m;break;case"ZYX":this._x=f*u*d-c*h*m,this._y=c*h*d+f*u*m,this._z=c*u*m-f*h*d,this._w=c*u*d+f*h*m;break;case"YZX":this._x=f*u*d+c*h*m,this._y=c*h*d+f*u*m,this._z=c*u*m-f*h*d,this._w=c*u*d-f*h*m;break;case"XZY":this._x=f*u*d-c*h*m,this._y=c*h*d-f*u*m,this._z=c*u*m+f*h*d,this._w=c*u*d+f*h*m;break;default:We("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+o+d;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(a-s)*h}else if(i>o&&i>d){let h=2*Math.sqrt(1+i-o-d);this._w=(u-l)/h,this._x=.25*h,this._y=(s+a)/h,this._z=(r+c)/h}else if(o>d){let h=2*Math.sqrt(1+o-i-d);this._w=(r-c)/h,this._x=(s+a)/h,this._y=.25*h,this._z=(l+u)/h}else{let h=2*Math.sqrt(1+d-i-o);this._w=(a-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Dh=class Dh{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Au.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Au.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),d=2*(r*i-a*t);return this.x=t+l*c+a*d-o*u,this.y=i+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return bc.copy(this).projectOnVector(e),this.sub(bc)}reflect(e){return this.sub(bc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Dh.prototype.isVector3=!0;var P=Dh,bc=new P,Au=new _n,Nh=class Nh{constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],m=i[8],x=s[0],p=s[3],g=s[6],_=s[1],M=s[4],v=s[7],T=s[2],A=s[5],y=s[8];return r[0]=a*x+o*_+l*T,r[3]=a*p+o*M+l*A,r[6]=a*g+o*v+l*y,r[1]=c*x+u*_+d*T,r[4]=c*p+u*M+d*A,r[7]=c*g+u*v+d*y,r[2]=f*x+h*_+m*T,r[5]=f*p+h*M+m*A,r[8]=f*g+h*v+m*y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,f=o*l-u*r,h=c*r-a*l,m=t*d+i*f+s*h;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=d*x,e[1]=(s*c-u*i)*x,e[2]=(o*i-s*a)*x,e[3]=f*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=h*x,e[7]=(i*l-c*t)*x,e[8]=(a*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ur("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ec.makeScale(e,t)),this}rotate(e){return Ur("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ec.makeRotation(-e)),this}translate(e,t){return Ur("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ec.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Nh.prototype.isMatrix3=!0;var $e=Nh,Ec=new $e,Ru=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cu=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Op(){let n={enabled:!0,workingColorSpace:zr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===wt&&(s.r=Ci(s.r),s.g=Ci(s.g),s.b=Ci(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===wt&&(s.r=Hs(s.r),s.g=Hs(s.g),s.b=Hs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Fi?kr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[zr]:{primaries:e,whitePoint:i,transfer:kr,toXYZ:Ru,fromXYZ:Cu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:e,whitePoint:i,transfer:wt,toXYZ:Ru,fromXYZ:Cu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}}),n}var _t=Op();function Ci(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Hs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Es,Ro=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Es===void 0&&(Es=Gr("canvas")),Es.width=e.width,Es.height=e.height;let s=Es.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Es}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Gr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ci(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ci(t[i]/255)*255):t[i]=Ci(t[i]);return{data:t,width:e.width,height:e.height}}else return We("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Bp=0,Ys=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=es(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Tc(s[a].image)):r.push(Tc(s[a]))}else r=Tc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Tc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ro.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(We("Texture: Unable to serialize Texture."),{})}var zp=0,wc=new P,An=class n extends pi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=di,s=di,r=wn,a=Ni,o=hi,l=Nn,c=n.DEFAULT_ANISOTROPY,u=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=es(),this.name="",this.source=new Ys(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(wc).x}get height(){return this.source.getSize(wc).y}get depth(){return this.source.getSize(wc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){We(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){We(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xs:e.x=e.x-Math.floor(e.x);break;case di:e.x=e.x<0?0:1;break;case To:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xs:e.y=e.y-Math.floor(e.y);break;case di:e.y=e.y<0?0:1;break;case To:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=mh;An.DEFAULT_ANISOTROPY=1;var Uh=class Uh{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],m=l[9],x=l[2],p=l[6],g=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-x)<.01&&Math.abs(m-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+x)<.1&&Math.abs(m+p)<.1&&Math.abs(c+h+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,v=(h+1)/2,T=(g+1)/2,A=(u+f)/4,y=(d+x)/4,b=(m+p)/4;return M>v&&M>T?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=A/i,r=y/i):v>T?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=A/s,r=b/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=y/r,s=b/r),this.set(i,s,r,t),this}let _=Math.sqrt((p-m)*(p-m)+(d-x)*(d-x)+(f-u)*(f-u));return Math.abs(_)<.001&&(_=1),this.x=(p-m)/_,this.y=(d-x)/_,this.z=(f-u)/_,this.w=Math.acos((c+h+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this.w=pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this.w=pt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Uh.prototype.isVector4=!0;var Ft=Uh,Co=class extends pi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new An({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:wn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ys(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bn=class extends Co{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Vr=class extends An{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Io=class extends An{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Qo=class Qo{constructor(e,t,i,s,r,a,o,l,c,u,d,f,h,m,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,d,f,h,m,x,p)}set(e,t,i,s,r,a,o,l,c,u,d,f,h,m,x,p){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=u,g[10]=d,g[14]=f,g[3]=h,g[7]=m,g[11]=x,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qo().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Ts.setFromMatrixColumn(e,0).length(),r=1/Ts.setFromMatrixColumn(e,1).length(),a=1/Ts.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let f=a*u,h=a*d,m=o*u,x=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=h+m*c,t[5]=f-x*c,t[9]=-o*l,t[2]=x-f*c,t[6]=m+h*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*u,h=l*d,m=c*u,x=c*d;t[0]=f+x*o,t[4]=m*o-h,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=h*o-m,t[6]=x+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*u,h=l*d,m=c*u,x=c*d;t[0]=f-x*o,t[4]=-a*d,t[8]=m+h*o,t[1]=h+m*o,t[5]=a*u,t[9]=x-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*u,h=a*d,m=o*u,x=o*d;t[0]=l*u,t[4]=m*c-h,t[8]=f*c+x,t[1]=l*d,t[5]=x*c+f,t[9]=h*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,h=a*c,m=o*l,x=o*c;t[0]=l*u,t[4]=x-f*d,t[8]=m*d+h,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=h*d+m,t[10]=f-x*d}else if(e.order==="XZY"){let f=a*l,h=a*c,m=o*l,x=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+x,t[5]=a*u,t[9]=h*d-m,t[2]=m*d-h,t[6]=o*u,t[10]=x*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kp,e,Gp)}lookAt(e,t,i){let s=this.elements;return Fn.subVectors(e,t),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),Hi.crossVectors(i,Fn),Hi.lengthSq()===0&&(Math.abs(i.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),Hi.crossVectors(i,Fn)),Hi.normalize(),Ga.crossVectors(Fn,Hi),s[0]=Hi.x,s[4]=Ga.x,s[8]=Fn.x,s[1]=Hi.y,s[5]=Ga.y,s[9]=Fn.y,s[2]=Hi.z,s[6]=Ga.z,s[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],m=i[2],x=i[6],p=i[10],g=i[14],_=i[3],M=i[7],v=i[11],T=i[15],A=s[0],y=s[4],b=s[8],D=s[12],I=s[1],U=s[5],R=s[9],B=s[13],L=s[2],G=s[6],q=s[10],w=s[14],z=s[3],H=s[7],$=s[11],K=s[15];return r[0]=a*A+o*I+l*L+c*z,r[4]=a*y+o*U+l*G+c*H,r[8]=a*b+o*R+l*q+c*$,r[12]=a*D+o*B+l*w+c*K,r[1]=u*A+d*I+f*L+h*z,r[5]=u*y+d*U+f*G+h*H,r[9]=u*b+d*R+f*q+h*$,r[13]=u*D+d*B+f*w+h*K,r[2]=m*A+x*I+p*L+g*z,r[6]=m*y+x*U+p*G+g*H,r[10]=m*b+x*R+p*q+g*$,r[14]=m*D+x*B+p*w+g*K,r[3]=_*A+M*I+v*L+T*z,r[7]=_*y+M*U+v*G+T*H,r[11]=_*b+M*R+v*q+T*$,r[15]=_*D+M*B+v*w+T*K,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],m=e[3],x=e[7],p=e[11],g=e[15],_=l*h-c*f,M=o*h-c*d,v=o*f-l*d,T=a*h-c*u,A=a*f-l*u,y=a*d-o*u;return t*(x*_-p*M+g*v)-i*(m*_-p*T+g*A)+s*(m*M-x*T+g*y)-r*(m*v-x*A+p*y)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-i*(r*u-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],m=e[12],x=e[13],p=e[14],g=e[15],_=t*o-i*a,M=t*l-s*a,v=t*c-r*a,T=i*l-s*o,A=i*c-r*o,y=s*c-r*l,b=u*x-d*m,D=u*p-f*m,I=u*g-h*m,U=d*p-f*x,R=d*g-h*x,B=f*g-h*p,L=_*B-M*R+v*U+T*I-A*D+y*b;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/L;return e[0]=(o*B-l*R+c*U)*G,e[1]=(s*R-i*B-r*U)*G,e[2]=(x*y-p*A+g*T)*G,e[3]=(f*A-d*y-h*T)*G,e[4]=(l*I-a*B-c*D)*G,e[5]=(t*B-s*I+r*D)*G,e[6]=(p*v-m*y-g*M)*G,e[7]=(u*y-f*v+h*M)*G,e[8]=(a*R-o*I+c*b)*G,e[9]=(i*I-t*R-r*b)*G,e[10]=(m*A-x*v+g*_)*G,e[11]=(d*v-u*A-h*_)*G,e[12]=(o*D-a*U-l*b)*G,e[13]=(t*U-i*D+s*b)*G,e[14]=(x*M-m*T-p*_)*G,e[15]=(u*T-d*M+f*_)*G,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,f=r*c,h=r*u,m=r*d,x=a*u,p=a*d,g=o*d,_=l*c,M=l*u,v=l*d,T=i.x,A=i.y,y=i.z;return s[0]=(1-(x+g))*T,s[1]=(h+v)*T,s[2]=(m-M)*T,s[3]=0,s[4]=(h-v)*A,s[5]=(1-(f+g))*A,s[6]=(p+_)*A,s[7]=0,s[8]=(m+M)*y,s[9]=(p-_)*y,s[10]=(1-(f+x))*y,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Ts.set(s[0],s[1],s[2]).length(),o=Ts.set(s[4],s[5],s[6]).length(),l=Ts.set(s[8],s[9],s[10]).length();r<0&&(a=-a),ii.copy(this);let c=1/a,u=1/o,d=1/l;return ii.elements[0]*=c,ii.elements[1]*=c,ii.elements[2]*=c,ii.elements[4]*=u,ii.elements[5]*=u,ii.elements[6]*=u,ii.elements[8]*=d,ii.elements[9]*=d,ii.elements[10]*=d,t.setFromRotationMatrix(ii),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=Zn,l=!1){let c=this.elements,u=2*r/(t-e),d=2*r/(i-s),f=(t+e)/(t-e),h=(i+s)/(i-s),m,x;if(l)m=r/(a-r),x=a*r/(a-r);else if(o===Zn)m=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Ws)m=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Zn,l=!1){let c=this.elements,u=2/(t-e),d=2/(i-s),f=-(t+e)/(t-e),h=-(i+s)/(i-s),m,x;if(l)m=1/(a-r),x=a/(a-r);else if(o===Zn)m=-2/(a-r),x=-(a+r)/(a-r);else if(o===Ws)m=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Qo.prototype.isMatrix4=!0;var ut=Qo,Ts=new P,ii=new ut,kp=new P(0,0,0),Gp=new P(1,1,1),Hi=new P,Ga=new P,Fn=new P,Iu=new ut,Pu=new _n,Rn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],h=s[10];switch(t){case"XYZ":this._y=Math.asin(pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(pt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-pt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:We("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Iu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Iu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pu.setFromEuler(this),this.setFromQuaternion(Pu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Rn.DEFAULT_ORDER="XYZ";var Xr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Hp=0,Lu=new P,ws=new _n,bi=new ut,Ha=new P,Tr=new P,Vp=new P,Xp=new _n,Du=new P(1,0,0),Nu=new P(0,1,0),Uu=new P(0,0,1),Fu={type:"added"},Wp={type:"removed"},As={type:"childadded",child:null},Ac={type:"childremoved",child:null},Kt=class n extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new P,t=new Rn,i=new _n,s=new P(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ut},normalMatrix:{value:new $e}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ws.setFromAxisAngle(e,t),this.quaternion.multiply(ws),this}rotateOnWorldAxis(e,t){return ws.setFromAxisAngle(e,t),this.quaternion.premultiply(ws),this}rotateX(e){return this.rotateOnAxis(Du,e)}rotateY(e){return this.rotateOnAxis(Nu,e)}rotateZ(e){return this.rotateOnAxis(Uu,e)}translateOnAxis(e,t){return Lu.copy(e).applyQuaternion(this.quaternion),this.position.add(Lu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Du,e)}translateY(e){return this.translateOnAxis(Nu,e)}translateZ(e){return this.translateOnAxis(Uu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ha.copy(e):Ha.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(Tr,Ha,this.up):bi.lookAt(Ha,Tr,this.up),this.quaternion.setFromRotationMatrix(bi),s&&(bi.extractRotation(s.matrixWorld),ws.setFromRotationMatrix(bi),this.quaternion.premultiply(ws.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fu),As.child=e,this.dispatchEvent(As),As.child=null):qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wp),Ac.child=e,this.dispatchEvent(Ac),Ac.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fu),As.child=e,this.dispatchEvent(As),As.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,e,Vp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,Xp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),h=a(e.animations),m=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),m.length>0&&(i.nodes=m)}return i.object=s,i;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Kt.DEFAULT_UP=new P(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var vt=class extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}},qp={type:"move"},Zs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,i),g=this._getHandJoint(c,x);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,m=.005;c.inputState.pinching&&f>h+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new vt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Zf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},Va={h:0,s:0,l:0};function Rc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Re=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=_t.workingColorSpace){return this.r=e,this.g=t,this.b=i,_t.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=_t.workingColorSpace){if(e=Fp(e,1),t=pt(t,0,1),i=pt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Rc(a,r,e+1/3),this.g=Rc(a,r,e),this.b=Rc(a,r,e-1/3)}return _t.colorSpaceToWorking(this,s),this}setStyle(e,t=hn){function i(r){r!==void 0&&parseFloat(r)<1&&We("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:We("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);We("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hn){let i=Zf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):We("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}copyLinearToSRGB(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hn){return _t.workingToColorSpace(xn.copy(this),e),Math.round(pt(xn.r*255,0,255))*65536+Math.round(pt(xn.g*255,0,255))*256+Math.round(pt(xn.b*255,0,255))}getHexString(e=hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.workingToColorSpace(xn.copy(this),t);let i=xn.r,s=xn.g,r=xn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=_t.workingColorSpace){return _t.workingToColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=hn){_t.workingToColorSpace(xn.copy(this),e);let t=xn.r,i=xn.g,s=xn.b;return e!==hn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+t,Vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Vi),e.getHSL(Va);let i=Sc(Vi.h,Va.h,t),s=Sc(Vi.s,Va.s,t),r=Sc(Vi.l,Va.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xn=new Re;Re.NAMES=Zf;var Wr=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Re(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},$s=class extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},si=new P,Ei=new P,Cc=new P,Ti=new P,Rs=new P,Cs=new P,Ou=new P,Ic=new P,Pc=new P,Lc=new P,Dc=new Ft,Nc=new Ft,Uc=new Ft,Ri=class n{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),si.subVectors(e,t),s.cross(si);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){si.subVectors(s,t),Ei.subVectors(i,t),Cc.subVectors(e,t);let a=si.dot(si),o=si.dot(Ei),l=si.dot(Cc),c=Ei.dot(Ei),u=Ei.dot(Cc),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let f=1/d,h=(c*l-o*u)*f,m=(a*u-o*l)*f;return r.set(1-h-m,m,h)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ti.x),l.addScaledVector(a,Ti.y),l.addScaledVector(o,Ti.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Dc.setScalar(0),Nc.setScalar(0),Uc.setScalar(0),Dc.fromBufferAttribute(e,t),Nc.fromBufferAttribute(e,i),Uc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Dc,r.x),a.addScaledVector(Nc,r.y),a.addScaledVector(Uc,r.z),a}static isFrontFacing(e,t,i,s){return si.subVectors(i,t),Ei.subVectors(e,t),si.cross(Ei).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),si.cross(Ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Rs.subVectors(s,i),Cs.subVectors(r,i),Ic.subVectors(e,i);let l=Rs.dot(Ic),c=Cs.dot(Ic);if(l<=0&&c<=0)return t.copy(i);Pc.subVectors(e,s);let u=Rs.dot(Pc),d=Cs.dot(Pc);if(u>=0&&d<=u)return t.copy(s);let f=l*d-u*c;if(f<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),t.copy(i).addScaledVector(Rs,a);Lc.subVectors(e,r);let h=Rs.dot(Lc),m=Cs.dot(Lc);if(m>=0&&h<=m)return t.copy(r);let x=h*c-l*m;if(x<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(i).addScaledVector(Cs,o);let p=u*m-h*d;if(p<=0&&d-u>=0&&h-m>=0)return Ou.subVectors(r,s),o=(d-u)/(d-u+(h-m)),t.copy(s).addScaledVector(Ou,o);let g=1/(p+x+f);return a=x*g,o=f*g,t.copy(i).addScaledVector(Rs,a).addScaledVector(Cs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},mi=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ri):ri.fromBufferAttribute(r,a),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Xa.copy(i.boundingBox)),Xa.applyMatrix4(e.matrixWorld),this.union(Xa)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wr),Wa.subVectors(this.max,wr),Is.subVectors(e.a,wr),Ps.subVectors(e.b,wr),Ls.subVectors(e.c,wr),Xi.subVectors(Ps,Is),Wi.subVectors(Ls,Ps),rs.subVectors(Is,Ls);let t=[0,-Xi.z,Xi.y,0,-Wi.z,Wi.y,0,-rs.z,rs.y,Xi.z,0,-Xi.x,Wi.z,0,-Wi.x,rs.z,0,-rs.x,-Xi.y,Xi.x,0,-Wi.y,Wi.x,0,-rs.y,rs.x,0];return!Fc(t,Is,Ps,Ls,Wa)||(t=[1,0,0,0,1,0,0,0,1],!Fc(t,Is,Ps,Ls,Wa))?!1:(qa.crossVectors(Xi,Wi),t=[qa.x,qa.y,qa.z],Fc(t,Is,Ps,Ls,Wa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},wi=[new P,new P,new P,new P,new P,new P,new P,new P],ri=new P,Xa=new mi,Is=new P,Ps=new P,Ls=new P,Xi=new P,Wi=new P,rs=new P,wr=new P,Wa=new P,qa=new P,as=new P;function Fc(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){as.fromArray(n,r);let o=s.x*Math.abs(as.x)+s.y*Math.abs(as.y)+s.z*Math.abs(as.z),l=e.dot(as),c=t.dot(as),u=i.dot(as);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Jt=new P,Ya=new ae,Yp=0,jt=class extends pi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Th,this.updateRanges=[],this.gpuType=jn,this.version=0,this._normalizationScale=e!==void 0?zl(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ya.fromBufferAttribute(this,t),Ya.applyMatrix3(e),this.setXY(t,Ya.x,Ya.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):qf(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Yf(e,this.array)}};var qr=class extends jt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Yr=class extends jt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var et=class extends jt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Zp=new mi,Ar=new P,Oc=new P,Pi=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Zp.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ar.subVectors(e,this.center);let t=Ar.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ar,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Oc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ar.copy(e.center).add(Oc)),this.expandByPoint(Ar.copy(e.center).sub(Oc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},$p=0,Yn=new ut,Bc=new Kt,Ds=new P,On=new mi,Rr=new mi,rn=new P,Nt=class n extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=es(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Np(e)?Yr:qr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new $e().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Yn.makeRotationFromQuaternion(e),this.applyMatrix4(Yn),this}rotateX(e){return Yn.makeRotationX(e),this.applyMatrix4(Yn),this}rotateY(e){return Yn.makeRotationY(e),this.applyMatrix4(Yn),this}rotateZ(e){return Yn.makeRotationZ(e),this.applyMatrix4(Yn),this}translate(e,t,i){return Yn.makeTranslation(e,t,i),this.applyMatrix4(Yn),this}scale(e,t,i){return Yn.makeScale(e,t,i),this.applyMatrix4(Yn),this}lookAt(e){return Bc.lookAt(e),Bc.updateMatrix(),this.applyMatrix4(Bc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new et(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&We("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];On.setFromBufferAttribute(r),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let i=this.boundingSphere.center;if(On.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Rr.setFromBufferAttribute(o),this.morphTargetsRelative?(rn.addVectors(On.min,Rr.min),On.expandByPoint(rn),rn.addVectors(On.max,Rr.max),On.expandByPoint(rn)):(On.expandByPoint(Rr.min),On.expandByPoint(Rr.max))}On.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)rn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(rn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)rn.fromBufferAttribute(o,c),l&&(Ds.fromBufferAttribute(e,c),rn.add(Ds)),s=Math.max(s,i.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new jt(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(i.count);for(let D=0;D<i.count;D++)o[D]=new P,l[D]=new P;let u=new P,d=new P,f=new P,h=new ae,m=new ae,x=new ae,p=new P,g=new P;function _(D,I,U){c[D]=c[I]=c[U]=1,u.fromBufferAttribute(i,D),d.fromBufferAttribute(i,I),f.fromBufferAttribute(i,U),h.fromBufferAttribute(r,D),m.fromBufferAttribute(r,I),x.fromBufferAttribute(r,U),d.sub(u),f.sub(u),m.sub(h),x.sub(h);let R=1/(m.x*x.y-x.x*m.y);isFinite(R)&&(p.copy(d).multiplyScalar(x.y).addScaledVector(f,-m.y).multiplyScalar(R),g.copy(f).multiplyScalar(m.x).addScaledVector(d,-x.x).multiplyScalar(R),o[D].add(p),o[I].add(p),o[U].add(p),l[D].add(g),l[I].add(g),l[U].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let D=0,I=M.length;D<I;++D){let U=M[D],R=U.start,B=U.count;for(let L=R,G=R+B;L<G;L+=3)_(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let v=new P,T=new P,A=new P,y=new P;function b(D){A.fromBufferAttribute(s,D),y.copy(A);let I=o[D];v.copy(I),v.sub(A.multiplyScalar(A.dot(I))).normalize(),T.crossVectors(y,I);let R=T.dot(l[D])<0?-1:1;a.setXYZW(D,v.x,v.y,v.z,R)}for(let D=0,I=i.count;D<I;++D)c[D]&&b(D);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new jt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);let s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,u=new P,d=new P;if(e)for(let f=0,h=e.count;f<h;f+=3){let m=e.getX(f+0),x=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,p),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)rn.fromBufferAttribute(e,t),rn.normalize(),e.setXYZ(t,rn.x,rn.y,rn.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u),h=0,m=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?h=l[x]*o.data.stride+o.offset:h=l[x]*u;for(let g=0;g<u;g++)f[m++]=c[h++]}return new jt(f,u,d)}if(this.index===null)return We("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let f=c[u],h=e(f,i);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){let h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Th,this.updateRanges=[],this.version=0,this.uuid=es()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Bu(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Bu(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function Bu(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=es()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var En=new P,Js=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s,this._normalizationScale=e!==void 0?zl(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)En.fromBufferAttribute(this,t),En.applyMatrix4(e),this.setXYZ(t,En.x,En.y,En.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)En.fromBufferAttribute(this,t),En.applyNormalMatrix(e),this.setXYZ(t,En.x,En.y,En.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)En.fromBufferAttribute(this,t),En.transformDirection(e),this.setXYZ(t,En.x,En.y,En.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Hr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Hr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):qf(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Yf(e,this.data.array)}},zc=new P,Jp=new P,Kp=new $e,ai=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=zc.subVectors(i,t).cross(Jp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(zc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Kp.getNormalMatrix(e),s=this.coplanarPoint(zc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Qp=0,$n=class extends pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=es(),this.name="",this.type="Material",this.blending=ar,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oh,this.blendDst=lh,this.blendEquation=ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xo,this.stencilZFail=xo,this.stencilZPass=xo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){We(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){We(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Re().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ai().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ae().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ae().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Jn=class extends $n{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ns,Cr=new P,Us=new P,Fs=new P,Os=new ae,Ir=new ae,$f=new ut,Za=new P,Pr=new P,$a=new P,zu=new ae,kc=new ae,ku=new ae,oi=class extends Kt{constructor(e=new Jn){if(super(),this.isSprite=!0,this.type="Sprite",Ns===void 0){Ns=new Nt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Zr(t,5);Ns.setIndex([0,1,2,0,2,3]),Ns.setAttribute("position",new Js(i,3,0,!1)),Ns.setAttribute("uv",new Js(i,2,3,!1))}this.geometry=Ns,this.material=e,this.center=new ae(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&qe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Us.setFromMatrixScale(this.matrixWorld),$f.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Fs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Us.multiplyScalar(-Fs.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;Ja(Za.set(-.5,-.5,0),Fs,a,Us,s,r),Ja(Pr.set(.5,-.5,0),Fs,a,Us,s,r),Ja($a.set(.5,.5,0),Fs,a,Us,s,r),zu.set(0,0),kc.set(1,0),ku.set(1,1);let o=e.ray.intersectTriangle(Za,Pr,$a,!1,Cr);if(o===null&&(Ja(Pr.set(-.5,.5,0),Fs,a,Us,s,r),kc.set(0,1),o=e.ray.intersectTriangle(Za,$a,Pr,!1,Cr),o===null))return;let l=e.ray.origin.distanceTo(Cr);l<e.near||l>e.far||t.push({distance:l,point:Cr.clone(),uv:Ri.getInterpolation(Cr,Za,Pr,$a,zu,kc,ku,new ae),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Ja(n,e,t,i,s,r){Os.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Ir.x=r*Os.x-s*Os.y,Ir.y=s*Os.x+r*Os.y):Ir.copy(Os),n.copy(e),n.x+=Ir.x,n.y+=Ir.y,n.applyMatrix4($f)}var Ai=new P,Gc=new P,Ka=new P,Qa=new P,$r=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ai.copy(this.origin).addScaledVector(this.direction,t),Ai.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Gc.copy(e).add(t).multiplyScalar(.5),Ka.copy(t).sub(e).normalize(),Qa.copy(this.origin).sub(Gc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ka),o=Qa.dot(this.direction),l=-Qa.dot(Ka),c=Qa.lengthSq(),u=Math.abs(1-a*a),d,f,h,m;if(u>0)if(d=a*l-o,f=a*o-l,m=r*u,d>=0)if(f>=-m)if(f<=m){let x=1/u;d*=x,f*=x,h=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;else f<=-m?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c):f<=m?(d=0,f=Math.min(Math.max(-r,-l),r),h=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Gc).addScaledVector(Ka,f),h}intersectSphere(e,t){if(e.radius<0)return null;Ai.subVectors(e.center,this.origin);let i=Ai.dot(this.direction),s=Ai.dot(Ai)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,d=e.x-a.x,f=e.y-a.y,h=e.z-a.z,m=t.x-a.x,x=t.y-a.y,p=t.z-a.z,g=i.x-a.x,_=i.y-a.y,M=i.z-a.z,v=Math.abs(l),T=Math.abs(c),A=Math.abs(u),y,b,D,I,U,R,B,L,G,q,w,z;if(v>=T&&v>=A?(D=l,R=d,G=m,z=g,l>=0?(y=c,b=u,I=f,U=h,B=x,L=p,q=_,w=M):(y=u,b=c,I=h,U=f,B=p,L=x,q=M,w=_)):T>=A?(D=c,R=f,G=x,z=_,c>=0?(y=u,b=l,I=h,U=d,B=p,L=m,q=M,w=g):(y=l,b=u,I=d,U=h,B=m,L=p,q=g,w=M)):(D=u,R=h,G=p,z=M,u>=0?(y=l,b=c,I=d,U=f,B=m,L=x,q=g,w=_):(y=c,b=l,I=f,U=d,B=x,L=m,q=_,w=g)),D===0)return null;let H=y/D,$=b/D,K=1/D,ve=I-H*R,Te=U-$*R,Z=B-H*G,me=L-$*G,Ae=q-H*z,ze=w-$*z,Me=Ae*me-ze*Z,He=ve*ze-Te*Ae,Lt=Z*Te-me*ve;if(s){if(Me<0||He<0||Lt<0)return null}else if((Me<0||He<0||Lt<0)&&(Me>0||He>0||Lt>0))return null;let Xe=Me+He+Lt;if(Xe===0)return null;let ct=K*(Me*R+He*G+Lt*z);return(Xe>0?ct<0:ct>0)?null:this.at(ct/Xe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ot=class extends $n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=Ma,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Gu=new ut,os=new $r,ja=new Pi,Hu=new P,eo=new P,to=new P,no=new P,Hc=new P,io=new P,Vu=new P,so=new P,it=class extends Kt{constructor(e=new Nt,t=new Ot){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){io.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],d=r[l];u!==0&&(Hc.fromBufferAttribute(d,e),a?io.addScaledVector(Hc,u):io.addScaledVector(Hc.sub(t),u))}t.add(io)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ja.copy(i.boundingSphere),ja.applyMatrix4(r),os.copy(e.ray).recast(e.near),!(ja.containsPoint(os.origin)===!1&&(os.intersectSphere(ja,Hu)===null||os.origin.distanceToSquared(Hu)>(e.far-e.near)**2))&&(Gu.copy(r).invert(),os.copy(e.ray).applyMatrix4(Gu),!(i.boundingBox!==null&&os.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,os)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,h=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=f.length;m<x;m++){let p=f[m],g=a[p.materialIndex],_=Math.max(p.start,h.start),M=Math.min(o.count,Math.min(p.start+p.count,h.start+h.count));for(let v=_,T=M;v<T;v+=3){let A=o.getX(v),y=o.getX(v+1),b=o.getX(v+2);s=ro(this,g,e,i,c,u,d,A,y,b),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,h.start),x=Math.min(o.count,h.start+h.count);for(let p=m,g=x;p<g;p+=3){let _=o.getX(p),M=o.getX(p+1),v=o.getX(p+2);s=ro(this,a,e,i,c,u,d,_,M,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,x=f.length;m<x;m++){let p=f[m],g=a[p.materialIndex],_=Math.max(p.start,h.start),M=Math.min(l.count,Math.min(p.start+p.count,h.start+h.count));for(let v=_,T=M;v<T;v+=3){let A=v,y=v+1,b=v+2;s=ro(this,g,e,i,c,u,d,A,y,b),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,h.start),x=Math.min(l.count,h.start+h.count);for(let p=m,g=x;p<g;p+=3){let _=p,M=p+1,v=p+2;s=ro(this,a,e,i,c,u,d,_,M,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function jp(n,e,t,i,s,r,a,o){let l;if(e.side===un?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Qi,o),l===null)return null;so.copy(o),so.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(so);return c<t.near||c>t.far?null:{distance:c,point:so.clone(),object:n}}function ro(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,eo),n.getVertexPosition(l,to),n.getVertexPosition(c,no);let u=jp(n,e,t,i,eo,to,no,Vu);if(u){let d=new P;Ri.getBarycoord(Vu,eo,to,no,d),s&&(u.uv=Ri.getInterpolatedAttribute(s,o,l,c,d,new ae)),r&&(u.uv1=Ri.getInterpolatedAttribute(r,o,l,c,d,new ae)),a&&(u.normal=Ri.getInterpolatedAttribute(a,o,l,c,d,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new P,materialIndex:0};Ri.getNormal(eo,to,no,f.normal),u.face=f,u.barycoord=d}return u}var Jr=class extends An{constructor(e=null,t=1,i=1,s,r,a,o,l,c=an,u=an,d,f){super(null,a,o,l,c,u,s,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ks=class extends jt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Bs=new ut,Xu=new ut,ao=[],Wu=new mi,em=new ut,Lr=new it,Dr=new Pi,Li=class extends it{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ks(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,em)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new mi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Bs),Wu.copy(e.boundingBox).applyMatrix4(Bs),this.boundingBox.union(Wu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Bs),Dr.copy(e.boundingSphere).applyMatrix4(Bs),this.boundingSphere.union(Dr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Lr.geometry=this.geometry,Lr.material=this.material,Lr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Dr.copy(this.boundingSphere),Dr.applyMatrix4(i),e.ray.intersectsSphere(Dr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Bs),Xu.multiplyMatrices(i,Bs),Lr.matrixWorld=Xu,Lr.raycast(e,ao);for(let a=0,o=ao.length;a<o;a++){let l=ao[a];l.instanceId=r,l.object=this,t.push(l)}ao.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ks(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Jr(new Float32Array(s*this.count),s,this.count,rl,jn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ls=new Pi,tm=new ae(.5,.5),oo=new P,Yi=class{constructor(e=new ai,t=new ai,i=new ai,s=new ai,r=new ai,a=new ai){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Zn,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],f=r[6],h=r[7],m=r[8],x=r[9],p=r[10],g=r[11],_=r[12],M=r[13],v=r[14],T=r[15];if(s[0].setComponents(c-a,h-u,g-m,T-_).normalize(),s[1].setComponents(c+a,h+u,g+m,T+_).normalize(),s[2].setComponents(c+o,h+d,g+x,T+M).normalize(),s[3].setComponents(c-o,h-d,g-x,T-M).normalize(),i)s[4].setComponents(l,f,p,v).normalize(),s[5].setComponents(c-l,h-f,g-p,T-v).normalize();else if(s[4].setComponents(c-l,h-f,g-p,T-v).normalize(),t===Zn)s[5].setComponents(c+l,h+f,g+p,T+v).normalize();else if(t===Ws)s[5].setComponents(l,f,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(e){ls.center.set(0,0,0);let t=tm.distanceTo(e.center);return ls.radius=.7071067811865476+t,ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(oo.x=s.normal.x>0?e.max.x:e.min.x,oo.y=s.normal.y>0?e.max.y:e.min.y,oo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(oo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},qu=new ut,Po=class n{constructor(){this.coordinateSystem=Zn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];qu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Yi),i[s].setFromProjectionMatrix(qu,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Yi),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var Qs=class extends $n{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Yu=new ut,Kc=new $r,lo=new Pi,co=new P,Kr=class extends Kt{constructor(e=new Nt,t=new Qs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),lo.copy(i.boundingSphere),lo.applyMatrix4(s),lo.radius+=r,e.ray.intersectsSphere(lo)===!1)return;Yu.copy(s).invert(),Kc.copy(e.ray).applyMatrix4(Yu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){let f=Math.max(0,a.start),h=Math.min(c.count,a.start+a.count);for(let m=f,x=h;m<x;m++){let p=c.getX(m);co.fromBufferAttribute(d,p),Zu(co,p,l,s,e,t,this)}}else{let f=Math.max(0,a.start),h=Math.min(d.count,a.start+a.count);for(let m=f,x=h;m<x;m++)co.fromBufferAttribute(d,m),Zu(co,m,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Zu(n,e,t,i,s,r,a){let o=Kc.distanceSqToPoint(n);if(o<t){let l=new P;Kc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Qr=class extends An{constructor(e=[],t=ms,i,s,r,a,o,l,c,u){super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},jr=class extends An{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Di=class extends An{constructor(e,t,i=li,s,r,a,o=an,l=an,c,u=Ii,d=1){if(u!==Ii&&u!==Ui)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:d};super(f,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ys(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ea=class extends Di{constructor(e,t=li,i=ms,s,r,a=an,o=an,l,c=Ii){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ta=class extends An{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Be=class n extends Nt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],d=[],f=0,h=0;m("z","y","x",-1,-1,i,t,e,a,r,0),m("z","y","x",1,-1,i,t,-e,a,r,1),m("x","z","y",1,1,e,i,t,s,a,2),m("x","z","y",1,-1,e,i,-t,s,a,3),m("x","y","z",1,-1,e,t,i,s,r,4),m("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new et(c,3)),this.setAttribute("normal",new et(u,3)),this.setAttribute("uv",new et(d,2));function m(x,p,g,_,M,v,T,A,y,b,D){let I=v/y,U=T/b,R=v/2,B=T/2,L=A/2,G=y+1,q=b+1,w=0,z=0,H=new P;for(let $=0;$<q;$++){let K=$*U-B;for(let ve=0;ve<G;ve++){let Te=ve*I-R;H[x]=Te*_,H[p]=K*M,H[g]=L,c.push(H.x,H.y,H.z),H[x]=0,H[p]=0,H[g]=A>0?1:-1,u.push(H.x,H.y,H.z),d.push(ve/y),d.push(1-$/b),w+=1}}for(let $=0;$<b;$++)for(let K=0;K<y;K++){let ve=f+K+G*$,Te=f+K+G*($+1),Z=f+(K+1)+G*($+1),me=f+(K+1)+G*$;l.push(ve,Te,me),l.push(Te,Z,me),z+=6}o.addGroup(h,z,D),h+=z,f+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},js=class n extends Nt{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],u=t/2,d=Math.PI/2*e,f=t,h=2*d+f,m=i*2+r,x=s+1,p=new P,g=new P;for(let _=0;_<=m;_++){let M=0,v=0,T=0,A=0;if(_<=i){let D=_/i,I=D*Math.PI/2;v=-u-e*Math.cos(I),T=e*Math.sin(I),A=-e*Math.cos(I),M=D*d}else if(_<=i+r){let D=(_-i)/r;v=-u+D*t,T=e,A=0,M=d+D*f}else{let D=(_-i-r)/i,I=D*Math.PI/2;v=u+e*Math.sin(I),T=e*Math.cos(I),A=e*Math.sin(I),M=d+f+D*d}let y=Math.max(0,Math.min(1,M/h)),b=0;_===0?b=.5/s:_===m&&(b=-.5/s);for(let D=0;D<=s;D++){let I=D/s,U=I*Math.PI*2,R=Math.sin(U),B=Math.cos(U);g.x=-T*B,g.y=v,g.z=T*R,o.push(g.x,g.y,g.z),p.set(-T*B,A,T*R),p.normalize(),l.push(p.x,p.y,p.z),c.push(I+b,y)}if(_>0){let D=(_-1)*x;for(let I=0;I<s;I++){let U=D+I,R=D+I+1,B=_*x+I,L=_*x+I+1;a.push(U,R,B),a.push(R,L,B)}}}this.setIndex(a),this.setAttribute("position",new et(o,3)),this.setAttribute("normal",new et(l,3)),this.setAttribute("uv",new et(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Kn=class n extends Nt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new P,u=new ae;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){let h=i+d/t*s;c.x=e*Math.cos(h),c.y=e*Math.sin(h),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[f]/e+1)/2,u.y=(a[f+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new et(a,3)),this.setAttribute("normal",new et(o,3)),this.setAttribute("uv",new et(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},st=class n extends Nt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],f=[],h=[],m=0,x=[],p=i/2,g=0;_(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new et(d,3)),this.setAttribute("normal",new et(f,3)),this.setAttribute("uv",new et(h,2));function _(){let v=new P,T=new P,A=0,y=(t-e)/i;for(let b=0;b<=r;b++){let D=[],I=b/r,U=I*(t-e)+e;for(let R=0;R<=s;R++){let B=R/s,L=B*l+o,G=Math.sin(L),q=Math.cos(L);T.x=U*G,T.y=-I*i+p,T.z=U*q,d.push(T.x,T.y,T.z),v.set(G,y,q).normalize(),f.push(v.x,v.y,v.z),h.push(B,1-I),D.push(m++)}x.push(D)}for(let b=0;b<s;b++)for(let D=0;D<r;D++){let I=x[D][b],U=x[D+1][b],R=x[D+1][b+1],B=x[D][b+1];(e>0||D!==0)&&(u.push(I,U,B),A+=3),(t>0||D!==r-1)&&(u.push(U,R,B),A+=3)}c.addGroup(g,A,0),g+=A}function M(v){let T=m,A=new ae,y=new P,b=0,D=v===!0?e:t,I=v===!0?1:-1;for(let R=1;R<=s;R++)d.push(0,p*I,0),f.push(0,I,0),h.push(.5,.5),m++;let U=m;for(let R=0;R<=s;R++){let L=R/s*l+o,G=Math.cos(L),q=Math.sin(L);y.x=D*q,y.y=p*I,y.z=D*G,d.push(y.x,y.y,y.z),f.push(0,I,0),A.x=G*.5+.5,A.y=q*.5*I+.5,h.push(A.x,A.y),m++}for(let R=0;R<s;R++){let B=T+R,L=U+R;v===!0?u.push(L,L+1,B):u.push(L+1,L,B),b+=3}c.addGroup(g,b,v===!0?1:2),g+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ln=class n extends st{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},na=class n extends Nt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],a=[];o(s),c(i),u(),this.setAttribute("position",new et(r,3)),this.setAttribute("normal",new et(r.slice(),3)),this.setAttribute("uv",new et(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let M=new P,v=new P,T=new P;for(let A=0;A<t.length;A+=3)h(t[A+0],M),h(t[A+1],v),h(t[A+2],T),l(M,v,T,_)}function l(_,M,v,T){let A=T+1,y=[];for(let b=0;b<=A;b++){y[b]=[];let D=_.clone().lerp(v,b/A),I=M.clone().lerp(v,b/A),U=A-b;for(let R=0;R<=U;R++)R===0&&b===A?y[b][R]=D:y[b][R]=D.clone().lerp(I,R/U)}for(let b=0;b<A;b++)for(let D=0;D<2*(A-b)-1;D++){let I=Math.floor(D/2);D%2===0?(f(y[b][I+1]),f(y[b+1][I]),f(y[b][I])):(f(y[b][I+1]),f(y[b+1][I+1]),f(y[b+1][I]))}}function c(_){let M=new P;for(let v=0;v<r.length;v+=3)M.x=r[v+0],M.y=r[v+1],M.z=r[v+2],M.normalize().multiplyScalar(_),r[v+0]=M.x,r[v+1]=M.y,r[v+2]=M.z}function u(){let _=new P;for(let M=0;M<r.length;M+=3){_.x=r[M+0],_.y=r[M+1],_.z=r[M+2];let v=p(_)/2/Math.PI+.5,T=g(_)/Math.PI+.5;a.push(v,1-T)}m(),d()}function d(){for(let _=0;_<a.length;_+=6){let M=a[_+0],v=a[_+2],T=a[_+4],A=Math.max(M,v,T),y=Math.min(M,v,T);A>.9&&y<.1&&(M<.2&&(a[_+0]+=1),v<.2&&(a[_+2]+=1),T<.2&&(a[_+4]+=1))}}function f(_){r.push(_.x,_.y,_.z)}function h(_,M){let v=_*3;M.x=e[v+0],M.y=e[v+1],M.z=e[v+2]}function m(){let _=new P,M=new P,v=new P,T=new P,A=new ae,y=new ae,b=new ae;for(let D=0,I=0;D<r.length;D+=9,I+=6){_.set(r[D+0],r[D+1],r[D+2]),M.set(r[D+3],r[D+4],r[D+5]),v.set(r[D+6],r[D+7],r[D+8]),A.set(a[I+0],a[I+1]),y.set(a[I+2],a[I+3]),b.set(a[I+4],a[I+5]),T.copy(_).add(M).add(v).divideScalar(3);let U=p(T);x(A,I+0,_,U),x(y,I+2,M,U),x(b,I+4,v,U)}}function x(_,M,v,T){T<0&&_.x===1&&(a[M]=_.x-1),v.x===0&&v.z===0&&(a[M]=T/2/Math.PI+.5)}function p(_){return Math.atan2(_.z,-_.x)}function g(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}};var zn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){We("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let u=i[s],f=i[s+1]-u,h=(a-u)/f;return(s+h)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ae:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new P,s=[],r=[],a=[],o=new P,l=new ut;for(let h=0;h<=e;h++){let m=h/e;s[h]=this.getTangentAt(m,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let h=1;h<=e;h++){if(r[h]=r[h-1].clone(),a[h]=a[h-1].clone(),o.crossVectors(s[h-1],s[h]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(pt(s[h-1].dot(s[h]),-1,1));r[h].applyMatrix4(l.makeRotationAxis(o,m))}a[h].crossVectors(s[h],r[h])}if(t===!0){let h=Math.acos(pt(r[0].dot(r[e]),-1,1));h/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(h=-h);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],h*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},er=class extends zn{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ae){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,h=c-this.aY;l=f*u-h*d+this.aX,c=f*d+h*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Lo=class extends er{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Ah(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,d){let f=(a-r)/c-(o-r)/(c+u)+(o-a)/u,h=(o-a)/u-(l-a)/(u+d)+(l-o)/d;f*=u,h*=u,s(a,o,f,h)},calc:function(r){let a=r*r,o=a*r;return n+e*r+t*a+i*o}}}var $u=new P,Ju=new P,Vc=new Ah,Xc=new Ah,Wc=new Ah,tr=class extends zn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new P){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Ju.subVectors(s[0],s[1]).add(s[0]),c=Ju);let d=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:($u.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=$u),this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),h),x=Math.pow(d.distanceToSquared(f),h),p=Math.pow(f.distanceToSquared(u),h);x<1e-4&&(x=1),m<1e-4&&(m=x),p<1e-4&&(p=x),Vc.initNonuniformCatmullRom(c.x,d.x,f.x,u.x,m,x,p),Xc.initNonuniformCatmullRom(c.y,d.y,f.y,u.y,m,x,p),Wc.initNonuniformCatmullRom(c.z,d.z,f.z,u.z,m,x,p)}else this.curveType==="catmullrom"&&(Vc.initCatmullRom(c.x,d.x,f.x,u.x,this.tension),Xc.initCatmullRom(c.y,d.y,f.y,u.y,this.tension),Wc.initCatmullRom(c.z,d.z,f.z,u.z,this.tension));return i.set(Vc.calc(l),Xc.calc(l),Wc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ku(n,e,t,i,s){let r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function nm(n,e){let t=1-n;return t*t*e}function im(n,e){return 2*(1-n)*n*e}function sm(n,e){return n*n*e}function Fr(n,e,t,i){return nm(n,e)+im(n,t)+sm(n,i)}function rm(n,e){let t=1-n;return t*t*t*e}function am(n,e){let t=1-n;return 3*t*t*n*e}function om(n,e){return 3*(1-n)*n*n*e}function lm(n,e){return n*n*n*e}function Or(n,e,t,i,s){return rm(n,e)+am(n,t)+om(n,i)+lm(n,s)}var ia=class extends zn{constructor(e=new ae,t=new ae,i=new ae,s=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ae){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Or(e,s.x,r.x,a.x,o.x),Or(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Do=class extends zn{constructor(e=new P,t=new P,i=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new P){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Or(e,s.x,r.x,a.x,o.x),Or(e,s.y,r.y,a.y,o.y),Or(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},sa=class extends zn{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},No=class extends zn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ra=class extends zn{constructor(e=new ae,t=new ae,i=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ae){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Fr(e,s.x,r.x,a.x),Fr(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},aa=class extends zn{constructor(e=new P,t=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new P){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Fr(e,s.x,r.x,a.x),Fr(e,s.y,r.y,a.y),Fr(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},oa=class extends zn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return i.set(Ku(o,l.x,c.x,u.x,d.x),Ku(o,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ae().fromArray(s))}return this}},Uo=Object.freeze({__proto__:null,ArcCurve:Lo,CatmullRomCurve3:tr,CubicBezierCurve:ia,CubicBezierCurve3:Do,EllipseCurve:er,LineCurve:sa,LineCurve3:No,QuadraticBezierCurve:ra,QuadraticBezierCurve3:aa,SplineCurve:oa}),Fo=class extends zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Uo[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Uo[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},la=class extends Fo{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new sa(this.currentPoint.clone(),new ae(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new ra(this.currentPoint.clone(),new ae(e,t),new ae(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){let o=new ia(this.currentPoint.clone(),new ae(e,t),new ae(i,s),new ae(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new oa(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,a,o,l),this}absellipse(e,t,i,s,r,a,o,l){let c=new er(e,t,i,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},hs=class extends la{constructor(e){super(e),this.uuid=es(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new la().fromJSON(s))}return this}};function cm(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=Jf(n,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=pm(n,e,r,t)),n.length>80*t){o=n[0],l=n[1];let u=o,d=l;for(let f=t;f<s;f+=t){let h=n[f],m=n[f+1];h<o&&(o=h),m<l&&(l=m),h>u&&(u=h),m>d&&(d=m)}c=Math.max(u-o,d-l),c=c!==0?32767/c:0}return ca(r,a,t,o,l,c,0),a}function Jf(n,e,t,i,s){let r;if(s===Tm(n,e,t,i)>0)for(let a=e;a<t;a+=i)r=Qu(a/i|0,n[a],n[a+1],r);else for(let a=t-i;a>=e;a-=i)r=Qu(a/i|0,n[a],n[a+1],r);return r&&nr(r,r.next)&&(ua(r),r=r.next),r}function us(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(nr(t,t.next)||Gt(t.prev,t,t.next)===0)){if(ua(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ca(n,e,t,i,s,r,a){if(!n)return;!a&&r&&ym(n,i,s,r);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?um(n,i,s,r):hm(n)){e.push(l.i,n.i,c.i),ua(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=fm(us(n),e),ca(n,e,t,i,s,r,2)):a===2&&dm(n,e,t,i,s,r):ca(us(n),e,t,i,s,r,1);break}}}function hm(n){let e=n.prev,t=n,i=n.next;if(Gt(e,t,i)>=0)return!1;let s=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,u=Math.min(s,r,a),d=Math.min(o,l,c),f=Math.max(s,r,a),h=Math.max(o,l,c),m=i.next;for(;m!==e;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=h&&Nr(s,o,r,l,a,c,m.x,m.y)&&Gt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function um(n,e,t,i){let s=n.prev,r=n,a=n.next;if(Gt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,d=r.y,f=a.y,h=Math.min(o,l,c),m=Math.min(u,d,f),x=Math.max(o,l,c),p=Math.max(u,d,f),g=Qc(h,m,e,t,i),_=Qc(x,p,e,t,i),M=n.prevZ,v=n.nextZ;for(;M&&M.z>=g&&v&&v.z<=_;){if(M.x>=h&&M.x<=x&&M.y>=m&&M.y<=p&&M!==s&&M!==a&&Nr(o,u,l,d,c,f,M.x,M.y)&&Gt(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=h&&v.x<=x&&v.y>=m&&v.y<=p&&v!==s&&v!==a&&Nr(o,u,l,d,c,f,v.x,v.y)&&Gt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=g;){if(M.x>=h&&M.x<=x&&M.y>=m&&M.y<=p&&M!==s&&M!==a&&Nr(o,u,l,d,c,f,M.x,M.y)&&Gt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=_;){if(v.x>=h&&v.x<=x&&v.y>=m&&v.y<=p&&v!==s&&v!==a&&Nr(o,u,l,d,c,f,v.x,v.y)&&Gt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function fm(n,e){let t=n;do{let i=t.prev,s=t.next.next;!nr(i,s)&&Qf(i,t,t.next,s)&&ha(i,s)&&ha(s,i)&&(e.push(i.i,t.i,s.i),ua(t),ua(t.next),t=n=s),t=t.next}while(t!==n);return us(t)}function dm(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Sm(a,o)){let l=jf(a,o);a=us(a,a.next),l=us(l,l.next),ca(a,e,t,i,s,r,0),ca(l,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function pm(n,e,t,i){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*i,l=r<a-1?e[r+1]*i:n.length,c=Jf(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Mm(c))}s.sort(mm);for(let r=0;r<s.length;r++)t=gm(s[r],t);return t}function mm(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function gm(n,e){let t=xm(n,e);if(!t)return e;let i=jf(t,n);return us(i,i.next),us(t,t.next)}function xm(n,e){let t=e,i=n.x,s=n.y,r=-1/0,a;if(nr(n,t))return t;do{if(nr(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>r&&(r=d,a=t.x<t.next.x?t:t.next,d===i))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;t=a;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Kf(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let d=Math.abs(s-t.y)/(i-t.x);ha(t,n)&&(d<u||d===u&&(t.x>a.x||t.x===a.x&&_m(a,t)))&&(a=t,u=d)}t=t.next}while(t!==o);return a}function _m(n,e){return Gt(n.prev,n,e.prev)<0&&Gt(e.next,n,n.next)<0}function ym(n,e,t,i){let s=n;do s.z===0&&(s.z=Qc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,vm(s)}function vm(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let a=i,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,t*=2}while(e>1);return n}function Qc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Mm(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Kf(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function Nr(n,e,t,i,s,r,a,o){return!(n===a&&e===o)&&Kf(n,e,t,i,s,r,a,o)}function Sm(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!bm(n,e)&&(ha(n,e)&&ha(e,n)&&Em(n,e)&&(Gt(n.prev,n,e.prev)||Gt(n,e.prev,e))||nr(n,e)&&Gt(n.prev,n,n.next)>0&&Gt(e.prev,e,e.next)>0)}function Gt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function nr(n,e){return n.x===e.x&&n.y===e.y}function Qf(n,e,t,i){let s=uo(Gt(n,e,t)),r=uo(Gt(n,e,i)),a=uo(Gt(t,i,n)),o=uo(Gt(t,i,e));return!!(s!==r&&a!==o||s===0&&ho(n,t,e)||r===0&&ho(n,i,e)||a===0&&ho(t,n,i)||o===0&&ho(t,e,i))}function ho(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function uo(n){return n>0?1:n<0?-1:0}function bm(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Qf(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function ha(n,e){return Gt(n.prev,n,n.next)<0?Gt(n,e,n.next)>=0&&Gt(n,n.prev,e)>=0:Gt(n,e,n.prev)<0||Gt(n,n.next,e)<0}function Em(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function jf(n,e){let t=jc(n.i,n.x,n.y),i=jc(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Qu(n,e,t,i){let s=jc(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function ua(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function jc(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Tm(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var eh=class{static triangulate(e,t,i=2){return cm(e,t,i)}},cs=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];ju(e),ef(i,e);let a=e.length;t.forEach(ju);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,ef(i,t[l]);let o=eh.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function ju(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function ef(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var ir=class n extends Nt{constructor(e=new hs([new ae(.5,.5),new ae(-.5,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new et(s,3)),this.setAttribute("uv",new et(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,h=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:h-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:wm,M,v=!1,T,A,y,b;if(g){M=g.getSpacedPoints(u),v=!0,f=!1;let ie=g.isCatmullRomCurve3?g.closed:!1;T=g.computeFrenetFrames(u,ie),A=new P,y=new P,b=new P}f||(p=0,h=0,m=0,x=0);let D=o.extractPoints(c),I=D.shape,U=D.holes;if(!cs.isClockWise(I)){I=I.reverse();for(let ie=0,ue=U.length;ie<ue;ie++){let le=U[ie];cs.isClockWise(le)&&(U[ie]=le.reverse())}}function B(ie){let le=10000000000000001e-36,we=ie[0];for(let ye=1;ye<=ie.length;ye++){let nt=ye%ie.length,Fe=ie[nt],dt=Fe.x-we.x,mt=Fe.y-we.y,St=dt*dt+mt*mt,O=Math.max(Math.abs(Fe.x),Math.abs(Fe.y),Math.abs(we.x),Math.abs(we.y)),Zt=le*O*O;if(St<=Zt){ie.splice(nt,1),ye--;continue}we=Fe}}B(I),U.forEach(B);let L=U.length,G=I;for(let ie=0;ie<L;ie++){let ue=U[ie];I=I.concat(ue)}function q(ie,ue,le){return ue||qe("ExtrudeGeometry: vec does not exist"),ie.clone().addScaledVector(ue,le)}let w=I.length;function z(ie,ue,le){let we,ye,nt,Fe=ie.x-ue.x,dt=ie.y-ue.y,mt=le.x-ie.x,St=le.y-ie.y,O=Fe*Fe+dt*dt,Zt=Fe*St-dt*mt;if(Math.abs(Zt)>Number.EPSILON){let ht=Math.sqrt(O),Rt=Math.sqrt(mt*mt+St*St),ge=ue.x-dt/ht,Wt=ue.y+Fe/ht,Ve=le.x-St/Rt,Ze=le.y+mt/Rt,C=((Ve-ge)*St-(Ze-Wt)*mt)/(Fe*St-dt*mt);we=ge+Fe*C-ie.x,ye=Wt+dt*C-ie.y;let S=we*we+ye*ye;if(S<=2)return new ae(we,ye);nt=Math.sqrt(S/2)}else{let ht=!1;Fe>Number.EPSILON?mt>Number.EPSILON&&(ht=!0):Fe<-Number.EPSILON?mt<-Number.EPSILON&&(ht=!0):Math.sign(dt)===Math.sign(St)&&(ht=!0),ht?(we=-dt,ye=Fe,nt=Math.sqrt(O)):(we=Fe,ye=dt,nt=Math.sqrt(O/2))}return new ae(we/nt,ye/nt)}let H=[];for(let ie=0,ue=G.length,le=ue-1,we=ie+1;ie<ue;ie++,le++,we++)le===ue&&(le=0),we===ue&&(we=0),H[ie]=z(G[ie],G[le],G[we]);let $=[],K,ve=H.concat();for(let ie=0,ue=L;ie<ue;ie++){let le=U[ie];K=[];for(let we=0,ye=le.length,nt=ye-1,Fe=we+1;we<ye;we++,nt++,Fe++)nt===ye&&(nt=0),Fe===ye&&(Fe=0),K[we]=z(le[we],le[nt],le[Fe]);$.push(K),ve=ve.concat(K)}let Te;if(p===0)Te=cs.triangulateShape(G,U);else{let ie=[],ue=[];for(let le=0;le<p;le++){let we=le/p,ye=h*Math.cos(we*Math.PI/2),nt=m*Math.sin(we*Math.PI/2)+x;for(let Fe=0,dt=G.length;Fe<dt;Fe++){let mt=q(G[Fe],H[Fe],nt);He(mt.x,mt.y,-ye),we===0&&ie.push(mt)}for(let Fe=0,dt=L;Fe<dt;Fe++){let mt=U[Fe];K=$[Fe];let St=[];for(let O=0,Zt=mt.length;O<Zt;O++){let ht=q(mt[O],K[O],nt);He(ht.x,ht.y,-ye),we===0&&St.push(ht)}we===0&&ue.push(St)}}Te=cs.triangulateShape(ie,ue)}let Z=Te.length,me=m+x;for(let ie=0;ie<w;ie++){let ue=f?q(I[ie],ve[ie],me):I[ie];v?(y.copy(T.normals[0]).multiplyScalar(ue.x),A.copy(T.binormals[0]).multiplyScalar(ue.y),b.copy(M[0]).add(y).add(A),He(b.x,b.y,b.z)):He(ue.x,ue.y,0)}for(let ie=1;ie<=u;ie++)for(let ue=0;ue<w;ue++){let le=f?q(I[ue],ve[ue],me):I[ue];v?(y.copy(T.normals[ie]).multiplyScalar(le.x),A.copy(T.binormals[ie]).multiplyScalar(le.y),b.copy(M[ie]).add(y).add(A),He(b.x,b.y,b.z)):He(le.x,le.y,d/u*ie)}for(let ie=p-1;ie>=0;ie--){let ue=ie/p,le=h*Math.cos(ue*Math.PI/2),we=m*Math.sin(ue*Math.PI/2)+x;for(let ye=0,nt=G.length;ye<nt;ye++){let Fe=q(G[ye],H[ye],we);He(Fe.x,Fe.y,d+le)}for(let ye=0,nt=U.length;ye<nt;ye++){let Fe=U[ye];K=$[ye];for(let dt=0,mt=Fe.length;dt<mt;dt++){let St=q(Fe[dt],K[dt],we);v?He(St.x,St.y+M[u-1].y,M[u-1].x+le):He(St.x,St.y,d+le)}}}Ae(),ze();function Ae(){let ie=s.length/3;if(f){let ue=0,le=w*ue;for(let we=0;we<Z;we++){let ye=Te[we];Lt(ye[2]+le,ye[1]+le,ye[0]+le)}ue=u+p*2,le=w*ue;for(let we=0;we<Z;we++){let ye=Te[we];Lt(ye[0]+le,ye[1]+le,ye[2]+le)}}else{for(let ue=0;ue<Z;ue++){let le=Te[ue];Lt(le[2],le[1],le[0])}for(let ue=0;ue<Z;ue++){let le=Te[ue];Lt(le[0]+w*u,le[1]+w*u,le[2]+w*u)}}i.addGroup(ie,s.length/3-ie,0)}function ze(){let ie=s.length/3,ue=0;Me(G,ue),ue+=G.length;for(let le=0,we=U.length;le<we;le++){let ye=U[le];Me(ye,ue),ue+=ye.length}i.addGroup(ie,s.length/3-ie,1)}function Me(ie,ue){let le=ie.length;for(;--le>=0;){let we=le,ye=le-1;ye<0&&(ye=ie.length-1);for(let nt=0,Fe=u+p*2;nt<Fe;nt++){let dt=w*nt,mt=w*(nt+1),St=ue+we+dt,O=ue+ye+dt,Zt=ue+ye+mt,ht=ue+we+mt;Xe(St,O,Zt,ht)}}}function He(ie,ue,le){l.push(ie),l.push(ue),l.push(le)}function Lt(ie,ue,le){ct(ie),ct(ue),ct(le);let we=s.length/3,ye=_.generateTopUV(i,s,we-3,we-2,we-1);ft(ye[0]),ft(ye[1]),ft(ye[2])}function Xe(ie,ue,le,we){ct(ie),ct(ue),ct(we),ct(ue),ct(le),ct(we);let ye=s.length/3,nt=_.generateSideWallUV(i,s,ye-6,ye-3,ye-2,ye-1);ft(nt[0]),ft(nt[1]),ft(nt[3]),ft(nt[1]),ft(nt[2]),ft(nt[3])}function ct(ie){s.push(l[ie*3+0]),s.push(l[ie*3+1]),s.push(l[ie*3+2])}function ft(ie){r.push(ie.x),r.push(ie.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Am(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];i.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Uo[s.type]().fromJSON(s)),new n(i,e.options)}},wm={generateTopUV:function(n,e,t,i,s){let r=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new ae(r,a),new ae(o,l),new ae(c,u)]},generateSideWallUV:function(n,e,t,i,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],d=e[i*3+2],f=e[s*3],h=e[s*3+1],m=e[s*3+2],x=e[r*3],p=e[r*3+1],g=e[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new ae(a,1-l),new ae(c,1-d),new ae(f,1-m),new ae(x,1-g)]:[new ae(o,1-l),new ae(u,1-d),new ae(h,1-m),new ae(p,1-g)]}};function Am(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var gi=class n extends na{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Zi=class n extends na{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},yn=class n extends Nt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,d=e/o,f=t/l,h=[],m=[],x=[],p=[];for(let g=0;g<u;g++){let _=g*f-a;for(let M=0;M<c;M++){let v=M*d-r;m.push(v,-_,0),x.push(0,0,1),p.push(M/o),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<o;_++){let M=_+c*g,v=_+c*(g+1),T=_+1+c*(g+1),A=_+1+c*g;h.push(M,v,A),h.push(v,T,A)}this.setIndex(h),this.setAttribute("position",new et(m,3)),this.setAttribute("normal",new et(x,3)),this.setAttribute("uv",new et(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var yt=class n extends Nt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,u=[],d=new P,f=new P,h=[],m=[],x=[],p=[];for(let g=0;g<=i;g++){let _=[],M=g/i,v=a+M*o,T=e*Math.cos(v),A=Math.sqrt(e*e-T*T),y=0;g===0&&a===0?y=.5/t:g===i&&l===Math.PI&&(y=-.5/t);for(let b=0;b<=t;b++){let D=b/t,I=s+D*r;d.x=-A*Math.cos(I),d.y=T,d.z=A*Math.sin(I),m.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),p.push(D+y,1-M),_.push(c++)}u.push(_)}for(let g=0;g<i;g++)for(let _=0;_<t;_++){let M=u[g][_+1],v=u[g][_],T=u[g+1][_],A=u[g+1][_+1];(g!==0||a>0)&&h.push(M,v,A),(g!==i-1||l<Math.PI)&&h.push(v,T,A)}this.setIndex(h),this.setAttribute("position",new et(m,3)),this.setAttribute("normal",new et(x,3)),this.setAttribute("uv",new et(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var on=class n extends Nt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],u=[],d=[],f=new P,h=new P,m=new P;for(let x=0;x<=i;x++){let p=a+x/i*o;for(let g=0;g<=s;g++){let _=g/s*r;h.x=(e+t*Math.cos(p))*Math.cos(_),h.y=(e+t*Math.cos(p))*Math.sin(_),h.z=t*Math.sin(p),c.push(h.x,h.y,h.z),f.x=e*Math.cos(_),f.y=e*Math.sin(_),m.subVectors(h,f).normalize(),u.push(m.x,m.y,m.z),d.push(g/s),d.push(x/i)}}for(let x=1;x<=i;x++)for(let p=1;p<=s;p++){let g=(s+1)*x+p-1,_=(s+1)*(x-1)+p-1,M=(s+1)*(x-1)+p,v=(s+1)*x+p;l.push(g,_,v),l.push(_,M,v)}this.setIndex(l),this.setAttribute("position",new et(c,3)),this.setAttribute("normal",new et(u,3)),this.setAttribute("uv",new et(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}},fa=class n extends Nt{constructor(e=1,t=.4,i=64,s=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:s,p:r,q:a},i=Math.floor(i),s=Math.floor(s);let o=[],l=[],c=[],u=[],d=new P,f=new P,h=new P,m=new P,x=new P,p=new P,g=new P;for(let M=0;M<=i;++M){let v=M/i*r*Math.PI*2;_(v,r,a,e,h),_(v+.01,r,a,e,m),p.subVectors(m,h),g.addVectors(m,h),x.crossVectors(p,g),g.crossVectors(x,p),x.normalize(),g.normalize();for(let T=0;T<=s;++T){let A=T/s*Math.PI*2,y=-t*Math.cos(A),b=t*Math.sin(A);d.x=h.x+(y*g.x+b*x.x),d.y=h.y+(y*g.y+b*x.y),d.z=h.z+(y*g.z+b*x.z),l.push(d.x,d.y,d.z),f.subVectors(d,h).normalize(),c.push(f.x,f.y,f.z),u.push(M/i),u.push(T/s)}}for(let M=1;M<=i;M++)for(let v=1;v<=s;v++){let T=(s+1)*(M-1)+(v-1),A=(s+1)*M+(v-1),y=(s+1)*M+v,b=(s+1)*(M-1)+v;o.push(T,A,b),o.push(A,y,b)}this.setIndex(o),this.setAttribute("position",new et(l,3)),this.setAttribute("normal",new et(c,3)),this.setAttribute("uv",new et(u,2));function _(M,v,T,A,y){let b=Math.cos(M),D=Math.sin(M),I=T/v*M,U=Math.cos(I);y.x=A*(2+U)*.5*b,y.y=A*(2+U)*D*.5,y.z=A*Math.sin(I)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},da=class n extends Nt{constructor(e=new aa(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new P,l=new P,c=new ae,u=new P,d=[],f=[],h=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new et(d,3)),this.setAttribute("normal",new et(f,3)),this.setAttribute("uv",new et(h,2));function x(){for(let M=0;M<t;M++)p(M);p(r===!1?t:0),_(),g()}function p(M){u=e.getPointAt(M/t,u);let v=a.normals[M],T=a.binormals[M];for(let A=0;A<=s;A++){let y=A/s*Math.PI*2,b=Math.sin(y),D=-Math.cos(y);l.x=D*v.x+b*T.x,l.y=D*v.y+b*T.y,l.z=D*v.z+b*T.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=u.x+i*l.x,o.y=u.y+i*l.y,o.z=u.z+i*l.z,d.push(o.x,o.y,o.z)}}function g(){for(let M=1;M<=t;M++)for(let v=1;v<=s;v++){let T=(s+1)*(M-1)+(v-1),A=(s+1)*M+(v-1),y=(s+1)*M+v,b=(s+1)*(M-1)+v;m.push(T,A,b),m.push(A,y,b)}}function _(){for(let M=0;M<=t;M++)for(let v=0;v<=s;v++)c.x=M/t,c.y=v/s,h.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new Uo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function xs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(tf(s))s.isRenderTargetTexture?(We("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(tf(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function vn(n){let e={};for(let t=0;t<n.length;t++){let i=xs(n[t]);for(let s in i)e[s]=i[s]}return e}function tf(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Rm(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Rh(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}var ed={clone:xs,merge:vn},Cm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Im=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Qn=class extends $n{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cm,this.fragmentShader=Im,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xs(e.uniforms),this.uniformsGroups=Rm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Re().setHex(s.value);break;case"v2":this.uniforms[i].value=new ae().fromArray(s.value);break;case"v3":this.uniforms[i].value=new P().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ft().fromArray(s.value);break;case"m3":this.uniforms[i].value=new $e().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ut().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Oo=class extends Qn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Dn=class extends $n{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cr,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var pa=class extends $n{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Re(16777215),this.specular=new Re(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cr,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=Ma,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Ht=class extends $n{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cr,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=Ma,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Bo=class extends $n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Df,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},zo=class extends $n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function zs(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function fo(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var $i=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ko=class extends $i{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zc,endingEnd:Zc}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case $c:r=e,o=2*t-i;break;case Jc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case $c:a=e,l=2*i-t;break;case Jc:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,m=(i-t)/(s-t),x=m*m,p=x*m,g=-f*p+2*f*x-f*m,_=(1+f)*p+(-1.5-2*f)*x+(-.5+f)*m+1,M=(-1-h)*p+(1.5+h)*x+.5*m,v=h*p-h*x;for(let T=0;T!==o;++T)r[T]=g*a[u+T]+_*a[c+T]+M*a[l+T]+v*a[d+T];return r}},Go=class extends $i{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(i-t)/(s-t),d=1-u;for(let f=0;f!==o;++f)r[f]=a[c+f]*d+a[l+f]*u;return r}},Ho=class extends $i{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Vo=class extends $i{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,d=this.outTangents;if(!u||!d){let m=(i-t)/(s-t),x=1-m;for(let p=0;p!==o;++p)r[p]=a[c+p]*x+a[l+p]*m;return r}let f=o*2,h=e-1;for(let m=0;m!==o;++m){let x=a[c+m],p=a[l+m],g=h*f+m*2,_=d[g],M=d[g+1],v=e*f+m*2,T=u[v],A=u[v+1],y=Lm(i,t,_,T,s);r[m]=td(y,x,M,A,p)}return r}};function td(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function Pm(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function Lm(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let o=td(r,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let l=Pm(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var kn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=zs(t,this.TimeBufferType),this.values=zs(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:zs(e.times,Array),values:zs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),fo(e.settings)&&(i.settings={inTangents:zs(e.settings.inTangents,Array),outTangents:zs(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ho(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Go(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ko(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Vo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Br:t=this.InterpolantFactoryMethodDiscrete;break;case wo:t=this.InterpolantFactoryMethodLinear;break;case go:t=this.InterpolantFactoryMethodSmooth;break;case Yc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return We("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Br;case this.InterpolantFactoryMethodLinear:return wo;case this.InterpolantFactoryMethodSmooth:return go;case this.InterpolantFactoryMethodBezier:return Yc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;fo(this.settings)&&(nf(this.settings.inTangents,e),nf(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;fo(this.settings)&&(sf(this.settings.inTangents,e),sf(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(qe("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(qe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){qe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){qe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Up(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){qe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===go,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*i,f=d-i,h=d+i;for(let m=0;m!==i;++m){let x=t[d+m];if(x!==t[f+m]||x!==t[h+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*i,f=a*i;for(let h=0;h!==i;++h)t[f+h]=t[d+h]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,fo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function nf(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function sf(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}kn.prototype.ValueTypeName="";kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=wo;var Ji=class extends kn{constructor(e,t,i){super(e,t,i)}};Ji.prototype.ValueTypeName="bool";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=Br;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var Xo=class extends kn{constructor(e,t,i,s){super(e,t,i,s)}};Xo.prototype.ValueTypeName="color";var Wo=class extends kn{constructor(e,t,i,s){super(e,t,i,s)}};Wo.prototype.ValueTypeName="number";var qo=class extends $i{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)_n.slerpFlat(r,0,a,c-o,a,c,l);return r}},ma=class extends kn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new qo(this.times,this.values,this.getValueSize(),e)}};ma.prototype.ValueTypeName="quaternion";ma.prototype.InterpolantFactoryMethodSmooth=void 0;var Ki=class extends kn{constructor(e,t,i){super(e,t,i)}};Ki.prototype.ValueTypeName="string";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=Br;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Yo=class extends kn{constructor(e,t,i,s){super(e,t,i,s)}};Yo.prototype.ValueTypeName="vector";var Zo=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){let h=c[d],m=c[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},nd=new Zo,$o=class{constructor(e){this.manager=e!==void 0?e:nd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};$o.DEFAULT_MATERIAL_NAME="__DEFAULT";var ga=class extends Kt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},xa=class extends ga{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},qc=new ut,rf=new P,af=new P,Jo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.mapType=Nn,this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yi,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;rf.setFromMatrixPosition(e.matrixWorld),t.position.copy(rf),af.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(af),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){qc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(qc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Ws||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(qc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},po=new P,mo=new _n,fi=new P,_a=class extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=Zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(po,mo,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(po,mo,fi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(po,mo,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(po,mo,fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},qi=new P,of=new ae,lf=new ae,Tn=class extends _a{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ao*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Mc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ao*2*Math.atan(Math.tan(Mc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qi.x,qi.y).multiplyScalar(-e/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qi.x,qi.y).multiplyScalar(-e/qi.z)}getViewSize(e,t){return this.getViewBounds(e,of,lf),t.subVectors(lf,of)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Mc*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var ya=class extends _a{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},th=class extends Jo{constructor(){super(new ya(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},va=class extends ga{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.shadow=new th}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ks=-90,Gs=1,sr=class extends Kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Tn(ks,Gs,e,t);s.layers=this.layers,this.add(s);let r=new Tn(ks,Gs,e,t);r.layers=this.layers,this.add(r);let a=new Tn(ks,Gs,e,t);a.layers=this.layers,this.add(a);let o=new Tn(ks,Gs,e,t);o.layers=this.layers,this.add(o);let l=new Tn(ks,Gs,e,t);l.layers=this.layers,this.add(l);let c=new Tn(ks,Gs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Zn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ws)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=x,e.setRenderTarget(i,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},Ko=class extends Tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Ch="\\[\\]\\.:\\/",Dm=new RegExp("["+Ch+"]","g"),Ih="[^"+Ch+"]",Nm="[^"+Ch.replace("\\.","")+"]",Um=/((?:WC+[\/:])*)/.source.replace("WC",Ih),Fm=/(WCOD+)?/.source.replace("WCOD",Nm),Om=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ih),Bm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ih),zm=new RegExp("^"+Um+Fm+Om+Bm+"$"),km=["material","materials","bones","map"],nh=class{constructor(e,t,i){let s=i||Dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Dt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Dm,"")}static parseTrackName(e){let t=zm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);km.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){We("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){qe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){qe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){qe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){qe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){qe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;qe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Dt.Composite=nh;Dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Dt.prototype.GetterByBindingType=[Dt.prototype._getValue_direct,Dt.prototype._getValue_array,Dt.prototype._getValue_arrayElement,Dt.prototype._getValue_toArray];Dt.prototype.SetterByBindingTypeAndVersioning=[[Dt.prototype._setValue_direct,Dt.prototype._setValue_direct_setNeedsUpdate,Dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_array,Dt.prototype._setValue_array_setNeedsUpdate,Dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_arrayElement,Dt.prototype._setValue_arrayElement_setNeedsUpdate,Dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_fromArray,Dt.prototype._setValue_fromArray_setNeedsUpdate,Dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var fv=new Float32Array(1);var Fh=class Fh{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};Fh.prototype.isMatrix2=!0;var ih=Fh;function Ph(n,e,t,i){let s=Gm(i);switch(t){case vh:return n*e;case rl:return n*e/s.components*s.byteLength;case al:return n*e/s.components*s.byteLength;case ji:return n*e*2/s.components*s.byteLength;case ol:return n*e*2/s.components*s.byteLength;case Mh:return n*e*3/s.components*s.byteLength;case hi:return n*e*4/s.components*s.byteLength;case ll:return n*e*4/s.components*s.byteLength;case Ea:case Ta:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case wa:case Aa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case hl:case fl:return Math.max(n,16)*Math.max(e,8)/4;case cl:case ul:return Math.max(n,8)*Math.max(e,8)/2;case dl:case pl:case gl:case xl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ml:case Ra:case _l:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case yl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case vl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ml:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Sl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case bl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case El:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Tl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case wl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Al:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Rl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Cl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Il:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Pl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ll:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Dl:case Nl:case Ul:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Fl:case Ol:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ca:case Bl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Gm(n){switch(n){case Nn:case gh:return{byteLength:1,components:1};case lr:case xh:case ci:return{byteLength:2,components:1};case il:case sl:return{byteLength:2,components:4};case li:case nl:case jn:return{byteLength:4,components:1};case _h:case yh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?We("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Ed(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Ym(n){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let u=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,u);else{d.sort((h,m)=>h.start-m.start);let f=0;for(let h=1;h<d.length;h++){let m=d[f],x=d[h];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,d[f]=x)}d.length=f+1;for(let h=0,m=d.length;h<m;h++){let x=d[h];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Zm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$m=`#ifdef USE_ALPHAHASH
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
#endif`,Jm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Km=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,e0=`#ifdef USE_AOMAP
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
#endif`,t0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,n0=`#ifdef USE_BATCHING
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
#endif`,i0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,s0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,r0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,a0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,o0=`#ifdef USE_IRIDESCENCE
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
#endif`,l0=`#ifdef USE_BUMPMAP
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
#endif`,c0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,h0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,u0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,f0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,d0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,p0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,m0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,g0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,x0=`#define PI 3.141592653589793
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
} // validated`,_0=`vec3 transformedNormal = objectNormal;
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
#endif`,y0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,v0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,M0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,S0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,b0="gl_FragColor = linearToOutputTexel( gl_FragColor );",E0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,T0=`#ifdef USE_ENVMAP
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
#endif`,w0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,A0=`#ifdef USE_ENVMAP
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
#endif`,R0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,C0=`#ifdef USE_ENVMAP
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
#endif`,I0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,P0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,L0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,D0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,N0=`#ifdef USE_GRADIENTMAP
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
}`,U0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,F0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,O0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,B0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,z0=`#ifdef USE_ENVMAP
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
#endif`,k0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,G0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,H0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,V0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,X0=`PhysicalMaterial material;
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
#endif`,W0=`uniform sampler2D dfgLUT;
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
}`,q0=`
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
#endif`,Y0=`#if defined( RE_IndirectDiffuse )
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
#endif`,Z0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$0=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,J0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,K0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,eg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ng=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ig=`#if defined( USE_POINTS_UV )
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
#endif`,sg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ag=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,og=`#if defined( USE_MORPHCOLORS )
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
#endif`,lg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cg=`#ifdef USE_MORPHTARGETS
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
#endif`,hg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ug=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,gg=`#ifdef USE_NORMALMAP
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
#endif`,xg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_g=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Eg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ag=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ig=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Lg=`float getShadowMask() {
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
}`,Dg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ng=`#ifdef USE_SKINNING
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
#endif`,Ug=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fg=`#ifdef USE_SKINNING
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
#endif`,Og=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gg=`#ifdef USE_TRANSMISSION
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
#endif`,Hg=`#ifdef USE_TRANSMISSION
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
#endif`,Vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Yg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zg=`uniform sampler2D t2D;
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
}`,$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jg=`uniform float backgroundBlurriness;
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
}`,Kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jg=`#include <common>
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
}`,ex=`#if DEPTH_PACKING == 3200
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
}`,tx=`#define DISTANCE
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
}`,nx=`#define DISTANCE
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
}`,ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rx=`uniform float scale;
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
}`,ax=`uniform vec3 diffuse;
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
}`,ox=`#include <common>
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
}`,lx=`uniform vec3 diffuse;
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
}`,cx=`#define LAMBERT
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
}`,hx=`#define LAMBERT
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
}`,ux=`#define MATCAP
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
}`,fx=`#define MATCAP
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
}`,dx=`#define NORMAL
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
}`,px=`#define NORMAL
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
}`,mx=`#define PHONG
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
}`,gx=`#define PHONG
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
}`,xx=`#define STANDARD
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
}`,_x=`#define STANDARD
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
}`,yx=`#define TOON
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
}`,vx=`#define TOON
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
}`,Mx=`uniform float size;
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
}`,Sx=`uniform vec3 diffuse;
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
}`,bx=`#include <common>
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
}`,Ex=`uniform vec3 color;
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
}`,Tx=`uniform float rotation;
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
}`,wx=`uniform vec3 diffuse;
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
}`,lt={alphahash_fragment:Zm,alphahash_pars_fragment:$m,alphamap_fragment:Jm,alphamap_pars_fragment:Km,alphatest_fragment:Qm,alphatest_pars_fragment:jm,aomap_fragment:e0,aomap_pars_fragment:t0,batching_pars_vertex:n0,batching_vertex:i0,begin_vertex:s0,beginnormal_vertex:r0,bsdfs:a0,iridescence_fragment:o0,bumpmap_pars_fragment:l0,clipping_planes_fragment:c0,clipping_planes_pars_fragment:h0,clipping_planes_pars_vertex:u0,clipping_planes_vertex:f0,color_fragment:d0,color_pars_fragment:p0,color_pars_vertex:m0,color_vertex:g0,common:x0,defaultnormal_vertex:_0,displacementmap_pars_vertex:y0,displacementmap_vertex:v0,emissivemap_fragment:M0,emissivemap_pars_fragment:S0,colorspace_fragment:b0,colorspace_pars_fragment:E0,envmap_fragment:T0,envmap_common_pars_fragment:w0,envmap_pars_fragment:A0,envmap_pars_vertex:R0,envmap_physical_pars_fragment:z0,envmap_vertex:C0,fog_vertex:I0,fog_pars_vertex:P0,fog_fragment:L0,fog_pars_fragment:D0,gradientmap_pars_fragment:N0,lightmap_pars_fragment:U0,lights_lambert_fragment:F0,lights_lambert_pars_fragment:O0,lights_pars_begin:B0,lights_toon_fragment:k0,lights_toon_pars_fragment:G0,lights_phong_fragment:H0,lights_phong_pars_fragment:V0,lights_physical_fragment:X0,lights_physical_pars_fragment:W0,lights_fragment_begin:q0,lights_fragment_maps:Y0,lights_fragment_end:Z0,lightprobes_pars_fragment:$0,logdepthbuf_fragment:J0,logdepthbuf_pars_fragment:K0,logdepthbuf_pars_vertex:Q0,logdepthbuf_vertex:j0,map_fragment:eg,map_pars_fragment:tg,map_particle_fragment:ng,map_particle_pars_fragment:ig,metalnessmap_fragment:sg,metalnessmap_pars_fragment:rg,morphinstance_vertex:ag,morphcolor_vertex:og,morphnormal_vertex:lg,morphtarget_pars_vertex:cg,morphtarget_vertex:hg,normal_fragment_begin:ug,normal_fragment_maps:fg,normal_pars_fragment:dg,normal_pars_vertex:pg,normal_vertex:mg,normalmap_pars_fragment:gg,clearcoat_normal_fragment_begin:xg,clearcoat_normal_fragment_maps:_g,clearcoat_pars_fragment:yg,iridescence_pars_fragment:vg,opaque_fragment:Mg,packing:Sg,premultiplied_alpha_fragment:bg,project_vertex:Eg,dithering_fragment:Tg,dithering_pars_fragment:wg,roughnessmap_fragment:Ag,roughnessmap_pars_fragment:Rg,shadowmap_pars_fragment:Cg,shadowmap_pars_vertex:Ig,shadowmap_vertex:Pg,shadowmask_pars_fragment:Lg,skinbase_vertex:Dg,skinning_pars_vertex:Ng,skinning_vertex:Ug,skinnormal_vertex:Fg,specularmap_fragment:Og,specularmap_pars_fragment:Bg,tonemapping_fragment:zg,tonemapping_pars_fragment:kg,transmission_fragment:Gg,transmission_pars_fragment:Hg,uv_pars_fragment:Vg,uv_pars_vertex:Xg,uv_vertex:Wg,worldpos_vertex:qg,background_vert:Yg,background_frag:Zg,backgroundCube_vert:$g,backgroundCube_frag:Jg,cube_vert:Kg,cube_frag:Qg,depth_vert:jg,depth_frag:ex,distance_vert:tx,distance_frag:nx,equirect_vert:ix,equirect_frag:sx,linedashed_vert:rx,linedashed_frag:ax,meshbasic_vert:ox,meshbasic_frag:lx,meshlambert_vert:cx,meshlambert_frag:hx,meshmatcap_vert:ux,meshmatcap_frag:fx,meshnormal_vert:dx,meshnormal_frag:px,meshphong_vert:mx,meshphong_frag:gx,meshphysical_vert:xx,meshphysical_frag:_x,meshtoon_vert:yx,meshtoon_frag:vx,points_vert:Mx,points_frag:Sx,shadow_vert:bx,shadow_frag:Ex,sprite_vert:Tx,sprite_frag:wx},be={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},yi={basic:{uniforms:vn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:vn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Re(0)},envMapIntensity:{value:1}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:vn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:vn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:vn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Re(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:vn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:vn([be.points,be.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:vn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:vn([be.common,be.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:vn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:vn([be.sprite,be.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distance:{uniforms:vn([be.common,be.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distance_vert,fragmentShader:lt.distance_frag},shadow:{uniforms:vn([be.lights,be.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};yi.physical={uniforms:vn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new $e},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};var kl={r:0,b:0,g:0},Ax=new ut,Td=new $e;Td.set(-1,0,0,0,1,0,0,0,1);function Rx(n,e,t,i,s,r){let a=new Re(0),o=s===!0?0:1,l,c,u=null,d=0,f=null;function h(_){let M=_.isScene===!0?_.background:null;if(M&&M.isTexture){let v=_.backgroundBlurriness>0;M=e.get(M,v)}return M}function m(_){let M=!1,v=h(_);v===null?p(a,o):v&&v.isColor&&(p(v,1),M=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(_,M){let v=h(M);v&&v.isCubeTexture?(c===void 0&&(c=new it(new Be(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:xs(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,A,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ax.makeRotationFromEuler(M.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Td),c.material.toneMapped=_t.getTransfer(v.colorSpace)!==wt,(u!==v||d!==v.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,f=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new it(new yn(2,2),new Qn({name:"BackgroundMaterial",uniforms:xs(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=_t.getTransfer(v.colorSpace)!==wt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,f=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,M){_.getRGB(kl,Rh(n)),t.buffers.color.setClear(kl.r,kl.g,kl.b,M,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,M=1){a.set(_),o=M,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,p(a,o)},render:m,addToRenderList:x,dispose:g}}function Cx(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,a=!1;function o(U,R,B,L,G){let q=!1,w=d(U,L,B,R);r!==w&&(r=w,c(r.object)),q=h(U,L,B,G),q&&m(U,L,B,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,v(U,R,B,L),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return n.createVertexArray()}function c(U){return n.bindVertexArray(U)}function u(U){return n.deleteVertexArray(U)}function d(U,R,B,L){let G=L.wireframe===!0,q=i[R.id];q===void 0&&(q={},i[R.id]=q);let w=U.isInstancedMesh===!0?U.id:0,z=q[w];z===void 0&&(z={},q[w]=z);let H=z[B.id];H===void 0&&(H={},z[B.id]=H);let $=H[G];return $===void 0&&($=f(l()),H[G]=$),$}function f(U){let R=[],B=[],L=[];for(let G=0;G<t;G++)R[G]=0,B[G]=0,L[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:B,attributeDivisors:L,object:U,attributes:{},index:null}}function h(U,R,B,L){let G=r.attributes,q=R.attributes,w=0,z=B.getAttributes();for(let H in z)if(z[H].location>=0){let K=G[H],ve=q[H];if(ve===void 0&&(H==="instanceMatrix"&&U.instanceMatrix&&(ve=U.instanceMatrix),H==="instanceColor"&&U.instanceColor&&(ve=U.instanceColor)),K===void 0||K.attribute!==ve||ve&&K.data!==ve.data)return!0;w++}return r.attributesNum!==w||r.index!==L}function m(U,R,B,L){let G={},q=R.attributes,w=0,z=B.getAttributes();for(let H in z)if(z[H].location>=0){let K=q[H];K===void 0&&(H==="instanceMatrix"&&U.instanceMatrix&&(K=U.instanceMatrix),H==="instanceColor"&&U.instanceColor&&(K=U.instanceColor));let ve={};ve.attribute=K,K&&K.data&&(ve.data=K.data),G[H]=ve,w++}r.attributes=G,r.attributesNum=w,r.index=L}function x(){let U=r.newAttributes;for(let R=0,B=U.length;R<B;R++)U[R]=0}function p(U){g(U,0)}function g(U,R){let B=r.newAttributes,L=r.enabledAttributes,G=r.attributeDivisors;B[U]=1,L[U]===0&&(n.enableVertexAttribArray(U),L[U]=1),G[U]!==R&&(n.vertexAttribDivisor(U,R),G[U]=R)}function _(){let U=r.newAttributes,R=r.enabledAttributes;for(let B=0,L=R.length;B<L;B++)R[B]!==U[B]&&(n.disableVertexAttribArray(B),R[B]=0)}function M(U,R,B,L,G,q,w){w===!0?n.vertexAttribIPointer(U,R,B,G,q):n.vertexAttribPointer(U,R,B,L,G,q)}function v(U,R,B,L){x();let G=L.attributes,q=B.getAttributes(),w=R.defaultAttributeValues;for(let z in q){let H=q[z];if(H.location>=0){let $=G[z];if($===void 0&&(z==="instanceMatrix"&&U.instanceMatrix&&($=U.instanceMatrix),z==="instanceColor"&&U.instanceColor&&($=U.instanceColor)),$!==void 0){let K=$.normalized,ve=$.itemSize,Te=e.get($);if(Te===void 0)continue;let Z=Te.buffer,me=Te.type,Ae=Te.bytesPerElement,ze=me===n.INT||me===n.UNSIGNED_INT||$.gpuType===nl;if($.isInterleavedBufferAttribute){let Me=$.data,He=Me.isInterleavedBuffer===!0?Me.stride:Me.itemSize,Lt=$.offset;if(Me.isInstancedInterleavedBuffer||Me.isInstancedBufferAttribute){for(let Xe=0;Xe<H.locationSize;Xe++)g(H.location+Xe,Me.meshPerAttribute);U.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Xe=0;Xe<H.locationSize;Xe++)p(H.location+Xe);n.bindBuffer(n.ARRAY_BUFFER,Z);for(let Xe=0;Xe<H.locationSize;Xe++)M(H.location+Xe,ve/H.locationSize,me,K,He*Ae,(Lt+ve/H.locationSize*Xe)*Ae,ze)}else{if($.isInstancedBufferAttribute){for(let Me=0;Me<H.locationSize;Me++)g(H.location+Me,$.meshPerAttribute);U.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Me=0;Me<H.locationSize;Me++)p(H.location+Me);n.bindBuffer(n.ARRAY_BUFFER,Z);for(let Me=0;Me<H.locationSize;Me++)M(H.location+Me,ve/H.locationSize,me,K,ve*Ae,ve/H.locationSize*Me*Ae,ze)}}else if(w!==void 0){let K=w[z];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(H.location,K);break;case 3:n.vertexAttrib3fv(H.location,K);break;case 4:n.vertexAttrib4fv(H.location,K);break;default:n.vertexAttrib1fv(H.location,K)}}}}_()}function T(){D();for(let U in i){let R=i[U];for(let B in R){let L=R[B];for(let G in L){let q=L[G];for(let w in q)u(q[w].object),delete q[w];delete L[G]}}delete i[U]}}function A(U){if(i[U.id]===void 0)return;let R=i[U.id];for(let B in R){let L=R[B];for(let G in L){let q=L[G];for(let w in q)u(q[w].object),delete q[w];delete L[G]}}delete i[U.id]}function y(U){for(let R in i){let B=i[R];for(let L in B){let G=B[L];if(G[U.id]===void 0)continue;let q=G[U.id];for(let w in q)u(q[w].object),delete q[w];delete G[U.id]}}}function b(U){for(let R in i){let B=i[R],L=U.isInstancedMesh===!0?U.id:0,G=B[L];if(G!==void 0){for(let q in G){let w=G[q];for(let z in w)u(w[z].object),delete w[z];delete G[q]}delete B[L],Object.keys(B).length===0&&delete i[R]}}}function D(){I(),a=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:I,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfObject:b,releaseStatesOfProgram:y,initAttributes:x,enableAttribute:p,disableUnusedAttributes:_}}function Ix(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let f=0;for(let h=0;h<u;h++)f+=c[h];t.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Px(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let y=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(y){return!(y!==hi&&i.convert(y)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(y){let b=y===ci&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(y!==Nn&&y!==jn&&!b&&i.convert(y)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(y){if(y==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(We("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&We("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&We("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),A=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:v,maxSamples:T,samples:A}}function Lx(n){let e=this,t=null,i=0,s=!1,r=!1,a=new ai,o=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let h=d.length!==0||f||i!==0||s;return s=f,i=d.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){let m=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,g=n.get(d);if(!s||m===null||m.length===0||r&&!p)r?u(null):c();else{let _=r?0:i,M=_*4,v=g.clippingState||null;l.value=v,v=u(m,f,M,h);for(let T=0;T!==M;++T)v[T]=t[T];g.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,m){let x=d!==null?d.length:0,p=null;if(x!==0){if(p=l.value,m!==!0||p===null){let g=h+x*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(p===null||p.length<g)&&(p=new Float32Array(g));for(let M=0,v=h;M!==x;++M,v+=4)a.copy(d[M]).applyMatrix4(_,o),a.normal.toArray(p,v),p[v+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}var La=class extends Bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Qr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Be(5,5,5),r=new Qn({name:"CubemapFromEquirect",uniforms:xs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:ds});r.uniforms.tEquirect.value=t;let a=new it(s,r),o=t.minFilter;return t.minFilter===Ni&&(t.minFilter=wn),new sr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},id=256,Dx=3,Nx=20,wd=256,Ad=16,Ux=3,Fx=new P,Ox=new Re,ur=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new sr(1,10,null),this._boxMesh=new it(new Be(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=Fx}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,f=l.autoClearColor,h=l.autoClearDepth,m=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(Ox));let p=new sr(i,s,u);return p.position.copy(o),p.update(l,e),l.autoClear=d,l.autoClearColor=f,l.autoClearDepth=h,l.autoClearStencil=m,e.background=x,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ad(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(id,Wf(e))}_fromTexture(e,t){e.mapping===ms||e.mapping===or?this._setSize(e.image.length===0?id:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=sd(e,!1,!1),i=Math.log2(e)-Dx;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=sd(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ms||e.mapping===or?(this._cubemapMaterial===null&&(this._cubemapMaterial=ad()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=rd()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Bx(),this._integrationMaterial=zx());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Ad);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-Ux)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(wd*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=kx());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function sd(n,e,t){return new La(n,{minFilter:Ni,generateMipmaps:e,type:ci,colorSpace:zr,depthBuffer:t})}function Da(n,e,t){return new Qn({name:n,uniforms:e,vertexShader:lt.cube_vert,fragmentShader:t,side:un,blending:ds,depthTest:!1,depthWrite:!1})}function Bx(){return Da("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${wd}u

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
	`)}function zx(){return Da("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Ad}},`

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
	`)}function kx(){return Da("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Nx}
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
	`)}function rd(){return Da("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function ad(){return Da("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Gx(n){let e=new WeakMap,t=new WeakMap,i=null;function s(f,h=!1){return f==null?null:h?a(f):r(f)}function r(f){if(f&&f.isTexture){let h=f.mapping;if(h===jo||h===el)if(e.has(f)){let m=e.get(f).texture;return o(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let x=new La(m.height);return x.fromEquirectangularTexture(n,f),e.set(f,x),f.addEventListener("dispose",c),o(x.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let h=f.mapping,m=h===jo||h===el,x=h===ms||h===or;if(m||x){let p=t.get(f),g=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return i===null&&(i=new ur(n)),p=m?i.fromEquirectangular(f,p):i.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),p.texture;if(p!==void 0)return p.texture;{let _=f.image;return m&&_&&_.height>0||x&&_&&l(_)?(i===null&&(i=new ur(n)),p=m?i.fromEquirectangular(f):i.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),f.addEventListener("dispose",u),p.texture):null}}}return f}function o(f,h){return h===jo?f.mapping=ms:h===el&&(f.mapping=or),f}function l(f){let h=0,m=6;for(let x=0;x<m;x++)f[x]!==void 0&&h++;return h===m}function c(f){let h=f.target;h.removeEventListener("dispose",c);let m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(f){let h=f.target;h.removeEventListener("dispose",u);let m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function Hx(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Ur("WebGLRenderer: "+i+" extension not supported."),s}}}function Vx(n,e,t,i){let s={},r=new WeakMap,a=new FinalizationRegistry(m=>delete s[m]);function o(m){l(m.target)}function l(m){m.index!==null&&e.remove(m.index);for(let p in m.attributes)e.remove(m.attributes[p]);m.removeEventListener("dispose",o),delete s[m.id],a.unregister(m);let x=r.get(m);x&&(e.remove(x),r.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(m,x){return s[x.id]!==void 0||(x.addEventListener("dispose",o),s[x.id]=new WeakRef(x),a.register(x,x.id,x),t.memory.geometries++),x}function u(m){let x=m.attributes;for(let p in x)e.update(x[p],n.ARRAY_BUFFER)}function d(m){let x=m.index,p=m.attributes.position,g=0;if(p===void 0)return;let _=x!==null?x.array.length:p.array.length/3-1,M=p.count>=65535?Yr:qr,v=new M(Math.ceil(_/3)*6,1),T=v.array;if(x!==null){let y=x.array;g=x.version;for(let b=0,D=0;b<_;b+=3){let I=y[b+0],U=y[b+1],R=y[b+2];T[D++]=I,T[D++]=U,T[D++]=U,T[D++]=R,T[D++]=R,T[D++]=I}}else{g=p.version;for(let y=0,b=0;y<_;y+=3){let D=y+0,I=y+1,U=y+2;T[b++]=D,T[b++]=I,T[b++]=I,T[b++]=U,T[b++]=U,T[b++]=D}}v.version=g;let A=r.get(m);A&&e.remove(A),r.set(m,v)}function f(m){let x=r.get(m);if(x){let p=m.index;p!==null&&x.version<p.version&&d(m)}else d(m);return r.get(m)}function h(){for(let m in s){let x=s[m].deref();x!==void 0&&l(x)}}return{get:c,update:u,getWireframeAttribute:f,dispose:h}}function Xx(n,e,t){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*a),t.update(f,i,1)}function c(d,f,h){h!==0&&(n.drawElementsInstanced(i,f,r,d*a,h),t.update(f,i,h))}function u(d,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,h);let x=0;for(let p=0;p<h;p++)x+=f[p];t.update(x,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Wx(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:qe("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function qx(n,e,t){let i=new WeakMap,s=new Ft;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,f=i.get(o);if(f===void 0||f.count!==d){let D=function(){y.dispose(),i.delete(o),o.removeEventListener("dispose",D)};f!==void 0&&f.texture.dispose();let h=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],M=0;h===!0&&(M=1),m===!0&&(M=2),x===!0&&(M=3);let v=o.attributes.position.count*M,T=1;v>e.maxTextureSize&&(T=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let A=new Float32Array(v*T*4*d),y=new Vr(A,v,T,d);y.type=jn,y.needsUpdate=!0;let b=M*4;for(let I=0;I<d;I++){let U=p[I],R=g[I],B=_[I],L=v*T*4*I;for(let G=0;G<U.count;G++){let q=G*b;h===!0&&(s.fromBufferAttribute(U,G),A[L+q+0]=s.x,A[L+q+1]=s.y,A[L+q+2]=s.z,A[L+q+3]=0),m===!0&&(s.fromBufferAttribute(R,G),A[L+q+4]=s.x,A[L+q+5]=s.y,A[L+q+6]=s.z,A[L+q+7]=0),x===!0&&(s.fromBufferAttribute(B,G),A[L+q+8]=s.x,A[L+q+9]=s.y,A[L+q+10]=s.z,A[L+q+11]=B.itemSize===4?s.w:1)}}f={count:d,texture:y,size:new ae(v,T)},i.set(o,f),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let h=0;for(let x=0;x<c.length;x++)h+=c[x];let m=o.morphTargetsRelative?1:1-h;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Yx(n,e,t,i,s){let r=new WeakMap;function a(c){let u=s.render.frame,d=c.geometry,f=e.get(c,d);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let h=c.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var Zx={[ch]:"LINEAR_TONE_MAPPING",[hh]:"REINHARD_TONE_MAPPING",[uh]:"CINEON_TONE_MAPPING",[Sa]:"ACES_FILMIC_TONE_MAPPING",[dh]:"AGX_TONE_MAPPING",[ph]:"NEUTRAL_TONE_MAPPING",[fh]:"CUSTOM_TONE_MAPPING"};function $x(n,e,t,i,s,r){let a=new Bn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,u=new Nt;u.setAttribute("position",new et([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new et([0,2,0,0,2,0],2));let d=new Oo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new it(u,d),h=new ya(-1,1,1,-1,0,1),m=null,x=null,p=!1,g,_=null,M=[],v=!1;this.setSize=function(T,A){a.setSize(T,A),o!==null&&o.setSize(T,A),l!==null&&l.setSize(T,A);for(let y=0;y<M.length;y++){let b=M[y];b.setSize&&b.setSize(T,A)}},this.setEffects=function(T){M=T,v=M.length>0&&M[0].isRenderPass===!0;let A=a.width,y=a.height;M.length>0&&o===null&&(o=new Bn(A,y,{type:ci,depthBuffer:!1,stencilBuffer:!1}),l=new Bn(A,y,{type:ci,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&M.some(D=>D.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new Di(A,y),r===!0&&(c.format=Ui,c.type=gs)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let D=0;D<M.length;D++){let I=M[D];I.setSize&&I.setSize(A,y),b&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(c)}},this.begin=function(T,A){if(p||T.toneMapping===xi&&M.length===0)return!1;if(_=A,A!==null){let y=A.width,b=A.height;(a.width!==y||a.height!==b)&&this.setSize(y,b)}return v===!1&&T.setRenderTarget(a),g=T.toneMapping,T.toneMapping=xi,!0},this.hasRenderPass=function(){return v},this.end=function(T,A){T.toneMapping=g,p=!0;let y=a,b=o;for(let D=0;D<M.length;D++){let I=M[D];I.enabled!==!1&&(I.render(T,b,y,A),I.needsSwap!==!1&&(y=b,b=b===o?l:o))}if(m!==T.outputColorSpace||x!==T.toneMapping){m=T.outputColorSpace,x=T.toneMapping,d.defines={},_t.getTransfer(m)===wt&&(d.defines.SRGB_TRANSFER="");let D=Zx[x];D&&(d.defines[D]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=y.texture,T.setRenderTarget(_),T.render(f,h),_=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),d.dispose()}}var Rd=new An,Cd=new Di(1,1),Id=new ea(1),Pd=new Vr,Ld=new Io,Dd=new Qr,od=[],ld=[],cd=new Float32Array(16),hd=new Float32Array(9),ud=new Float32Array(4);function fr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=od[s];if(r===void 0&&(r=new Float32Array(s),od[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function en(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function tn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Vl(n,e){let t=ld[e];t===void 0&&(t=new Int32Array(e),ld[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Jx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Kx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2fv(this.addr,e),tn(t,e)}}function Qx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;n.uniform3fv(this.addr,e),tn(t,e)}}function jx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4fv(this.addr,e),tn(t,e)}}function e_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;ud.set(i),n.uniformMatrix2fv(this.addr,!1,ud),tn(t,i)}}function t_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;hd.set(i),n.uniformMatrix3fv(this.addr,!1,hd),tn(t,i)}}function n_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;cd.set(i),n.uniformMatrix4fv(this.addr,!1,cd),tn(t,i)}}function i_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function s_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2iv(this.addr,e),tn(t,e)}}function r_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;n.uniform3iv(this.addr,e),tn(t,e)}}function a_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4iv(this.addr,e),tn(t,e)}}function o_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function l_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2uiv(this.addr,e),tn(t,e)}}function c_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;n.uniform3uiv(this.addr,e),tn(t,e)}}function h_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4uiv(this.addr,e),tn(t,e)}}function Xl(n){return n.version===0&&(n.compareFunction=Eh,n.needsUpdate=!0),n}function u_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Xl(Cd):r=Rd,t.setTexture2D(e||r,s)}function f_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Ld,s)}function d_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Xl(Id):r=Dd,t.setTextureCube(e||r,s)}function p_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Pd,s)}function m_(n){switch(n){case 5126:return Jx;case 35664:return Kx;case 35665:return Qx;case 35666:return jx;case 35674:return e_;case 35675:return t_;case 35676:return n_;case 5124:case 35670:return i_;case 35667:case 35671:return s_;case 35668:case 35672:return r_;case 35669:case 35673:return a_;case 5125:return o_;case 36294:return l_;case 36295:return c_;case 36296:return h_;case 35678:case 36198:case 36298:case 36306:case 35682:return u_;case 35679:case 36299:case 36307:return f_;case 35680:case 36300:case 36308:case 36293:return d_;case 36289:case 36303:case 36311:case 36292:return p_}}function g_(n,e){n.uniform1fv(this.addr,e)}function x_(n,e){let t=fr(e,this.size,2);n.uniform2fv(this.addr,t)}function __(n,e){let t=fr(e,this.size,3);n.uniform3fv(this.addr,t)}function y_(n,e){let t=fr(e,this.size,4);n.uniform4fv(this.addr,t)}function v_(n,e){let t=fr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function M_(n,e){let t=fr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function S_(n,e){let t=fr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function b_(n,e){n.uniform1iv(this.addr,e)}function E_(n,e){n.uniform2iv(this.addr,e)}function T_(n,e){n.uniform3iv(this.addr,e)}function w_(n,e){n.uniform4iv(this.addr,e)}function A_(n,e){n.uniform1uiv(this.addr,e)}function R_(n,e){n.uniform2uiv(this.addr,e)}function C_(n,e){n.uniform3uiv(this.addr,e)}function I_(n,e){n.uniform4uiv(this.addr,e)}function P_(n,e,t){let i=this.cache,s=e.length,r=Vl(t,s);en(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Xl(Cd):a=Rd;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function L_(n,e,t){let i=this.cache,s=e.length,r=Vl(t,s);en(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Ld,r[a])}function D_(n,e,t){let i=this.cache,s=e.length,r=Vl(t,s);en(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=Xl(Id):a=Dd;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function N_(n,e,t){let i=this.cache,s=e.length,r=Vl(t,s);en(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Pd,r[a])}function U_(n){switch(n){case 5126:return g_;case 35664:return x_;case 35665:return __;case 35666:return y_;case 35674:return v_;case 35675:return M_;case 35676:return S_;case 5124:case 35670:return b_;case 35667:case 35671:return E_;case 35668:case 35672:return T_;case 35669:case 35673:return w_;case 5125:return A_;case 36294:return R_;case 36295:return C_;case 36296:return I_;case 35678:case 36198:case 36298:case 36306:case 35682:return P_;case 35679:case 36299:case 36307:return L_;case 35680:case 36300:case 36308:case 36293:return D_;case 36289:case 36303:case 36311:case 36292:return N_}}var zh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=m_(t.type)}},kh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=U_(t.type)}},Gh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},Oh=/(\w+)(\])?(\[|\.)?/g;function fd(n,e){n.seq.push(e),n.map[e.id]=e}function F_(n,e,t){let i=n.name,s=i.length;for(Oh.lastIndex=0;;){let r=Oh.exec(i),a=Oh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){fd(t,c===void 0?new zh(o,n,e):new kh(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new Gh(o),fd(t,d)),t=d}}}var hr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);F_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function dd(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var O_=37297,B_=0;function z_(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var pd=new $e;function k_(n){_t._getMatrix(pd,_t.workingColorSpace,n);let e=`mat3( ${pd.elements.map(t=>t.toFixed(4))} )`;switch(_t.getTransfer(n)){case kr:return[e,"LinearTransferOETF"];case wt:return[e,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function md(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+z_(n.getShaderSource(e),o)}else return r}function G_(n,e){let t=k_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var H_={[ch]:"Linear",[hh]:"Reinhard",[uh]:"Cineon",[Sa]:"ACESFilmic",[dh]:"AgX",[ph]:"Neutral",[fh]:"Custom"};function V_(n,e){let t=H_[e];return t===void 0?(We("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Gl=new P;function X_(){_t.getLuminanceCoefficients(Gl);let n=Gl.x.toFixed(4),e=Gl.y.toFixed(4),t=Gl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function W_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pa).join(`
`)}function q_(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Y_(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Pa(n){return n!==""}function gd(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function xd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Z_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hh(n){return n.replace(Z_,$_)}function $_(n,e){let t=lt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Hh(t)}var J_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _d(n){return n.replace(J_,K_)}function K_(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function yd(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Q_={[fs]:"SHADOWMAP_TYPE_PCF",[rr]:"SHADOWMAP_TYPE_VSM"};function j_(n){return Q_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ey={[or]:"ENVMAP_MODE_REFRACTION"};function ty(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":ey[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ny={[Ma]:"ENVMAP_BLENDING_MULTIPLY",[If]:"ENVMAP_BLENDING_MIX",[Pf]:"ENVMAP_BLENDING_ADD"};function iy(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":ny[n.combine]||"ENVMAP_BLENDING_NONE"}function sy(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=j_(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=ty(t),d=iy(t),f=W_(t),h=q_(r),m=s.createProgram(),x,p,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h].filter(Pa).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h].filter(Pa).join(`
`),p.length>0&&(p+=`
`)):(x=[yd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pa).join(`
`),p=[yd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xi?"#define TONE_MAPPING":"",t.toneMapping!==xi?lt.tonemapping_pars_fragment:"",t.toneMapping!==xi?V_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,G_("linearToOutputTexel",t.outputColorSpace),X_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pa).join(`
`)),a=Hh(a),a=gd(a,t),a=xd(a,t),o=Hh(o),o=gd(o,t),o=xd(o,t),a=_d(a),o=_d(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",t.glslVersion===wh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=g+x+a,M=g+p+o,v=dd(s,s.VERTEX_SHADER,_),T=dd(s,s.FRAGMENT_SHADER,M);s.attachShader(m,v),s.attachShader(m,T),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function A(I){if(n.debug.checkShaderErrors){let U=s.getProgramInfoLog(m)||"",R=s.getShaderInfoLog(v)||"",B=s.getShaderInfoLog(T)||"",L=U.trim(),G=R.trim(),q=B.trim(),w=!0,z=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(w=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,v,T);else{let H=md(s,v,"vertex"),$=md(s,T,"fragment");qe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+L+`
`+H+`
`+$)}else L!==""?We("WebGLProgram: Program Info Log:",L):(G===""||q==="")&&(z=!1);z&&(I.diagnostics={runnable:w,programLog:L,vertexShader:{log:G,prefix:x},fragmentShader:{log:q,prefix:p}})}s.deleteShader(v),s.deleteShader(T),y=new hr(s,m),b=Y_(s,m)}let y;this.getUniforms=function(){return y===void 0&&A(this),y};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(m,O_)),D},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=B_++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=v,this.fragmentShader=T,this}var ry=0,Vh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Xh(e),t.set(e,i)),i}},Xh=class{constructor(e){this.id=ry++,this.code=e,this.usedTimes=0}};function ay(n){return n===ji||n===Ra||n===Ca}function oy(n,e,t,i,s,r){let a=new Xr,o=new Vh,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,b,D,I,U,R){let B=I.fog,L=U.geometry,G=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,q=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,w=e.get(y.envMap||G,q),z=f[y.type],H=i.precision;y.precision!==null&&(H=i.getMaxPrecision(y.precision),H!==y.precision&&We("WebGLProgram.getParameters:",y.precision,"not supported, using",H,"instead."));let $=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,K=$!==void 0?$.length:0,ve=0;L.morphAttributes.position!==void 0&&(ve=1),L.morphAttributes.normal!==void 0&&(ve=2),L.morphAttributes.color!==void 0&&(ve=3);let Te,Z,me,Ae;if(z){let Se=yi[z];Te=Se.vertexShader,Z=Se.fragmentShader}else{Te=y.vertexShader,Z=y.fragmentShader;let Se=o.getVertexShaderStage(y),At=o.getFragmentShaderStage(y);o.update(y,Se,At),me=Se.id,Ae=At.id}let ze=n.getRenderTarget(),Me=n.state.buffers.depth.getReversed(),He=U.isInstancedMesh===!0,Lt=U.isBatchedMesh===!0,Xe=!!y.map,ct=!!y.matcap,ft=!!w,ie=ft&&w.isPMREMTexture===!0,ue=!!y.aoMap,le=!!y.lightMap,we=!!y.bumpMap&&y.wireframe===!1,ye=!!y.normalMap,nt=!!y.displacementMap,Fe=!!y.emissiveMap,dt=!!y.metalnessMap,mt=!!y.roughnessMap,St=y.anisotropy>0,O=y.clearcoat>0,Zt=y.diffuseRoughness>0,ht=y.dispersion>0,Rt=y.retroreflectivity>0,ge=y.iridescence>0,Wt=y.sheen>0,Ve=y.transmission>0,Ze=St&&!!y.anisotropyMap,C=O&&!!y.clearcoatMap,S=O&&!!y.clearcoatNormalMap,X=O&&!!y.clearcoatRoughnessMap,se=Zt&&!!y.diffuseRoughnessMap,ne=ge&&!!y.iridescenceMap,ce=ge&&!!y.iridescenceThicknessMap,xe=Wt&&!!y.sheenColorMap,Q=Wt&&!!y.sheenRoughnessMap,j=!!y.specularMap,fe=!!y.specularColorMap,N=!!y.specularIntensityMap,te=Ve&&!!y.transmissionMap,J=Ve&&!!y.thicknessMap,de=!!y.gradientMap,oe=!!y.alphaMap,he=y.alphaTest>0,Oe=!!y.alphaHash,ot=!!y.extensions,re=xi;y.toneMapped&&(ze===null||ze.isXRRenderTarget===!0)&&(re=n.toneMapping);let ke=ie?w.isCompressedCubeTexture?w.image[0].mipmaps:w.mipmaps:null,rt={shaderID:z,shaderType:y.type,shaderName:y.name,vertexShader:Te,fragmentShader:Z,defines:y.defines,customVertexShaderID:me,customFragmentShaderID:Ae,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:H,batching:Lt,batchingColor:Lt&&U._colorsTexture!==null,instancing:He,instancingColor:He&&U.instanceColor!==null,instancingMorph:He&&U.morphTexture!==null,outputColorSpace:ze===null?n.outputColorSpace:ze.isXRRenderTarget===!0?ze.texture.colorSpace:_t.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Xe,matcap:ct,envMap:ft,envMapMode:ft&&w.mapping,envMapPMREM:ie,envMapMaxLod:ie?ke.length-1:null,envMapSize:ie?ke[0].width:null,aoMap:ue,lightMap:le,bumpMap:we,normalMap:ye,displacementMap:nt,emissiveMap:Fe,normalMapObjectSpace:ye&&y.normalMapType===Nf,normalMapTangentSpace:ye&&y.normalMapType===cr,packedNormalMap:ye&&y.normalMapType===cr&&ay(y.normalMap.format),metalnessMap:dt,roughnessMap:mt,anisotropy:St,anisotropyMap:Ze,clearcoat:O,clearcoatMap:C,clearcoatNormalMap:S,clearcoatRoughnessMap:X,diffuseRoughness:Zt,diffuseRoughnessMap:se,dispersion:ht,retroreflection:Rt,iridescence:ge,iridescenceMap:ne,iridescenceThicknessMap:ce,sheen:Wt,sheenColorMap:xe,sheenRoughnessMap:Q,specularMap:j,specularColorMap:fe,specularIntensityMap:N,transmission:Ve,transmissionMap:te,thicknessMap:J,gradientMap:de,opaque:y.transparent===!1&&y.blending===ar&&y.alphaToCoverage===!1,alphaMap:oe,alphaTest:he,alphaHash:Oe,combine:y.combine,mapUv:Xe&&h(y.map.channel),aoMapUv:ue&&h(y.aoMap.channel),lightMapUv:le&&h(y.lightMap.channel),bumpMapUv:we&&h(y.bumpMap.channel),normalMapUv:ye&&h(y.normalMap.channel),displacementMapUv:nt&&h(y.displacementMap.channel),emissiveMapUv:Fe&&h(y.emissiveMap.channel),metalnessMapUv:dt&&h(y.metalnessMap.channel),roughnessMapUv:mt&&h(y.roughnessMap.channel),anisotropyMapUv:Ze&&h(y.anisotropyMap.channel),clearcoatMapUv:C&&h(y.clearcoatMap.channel),clearcoatNormalMapUv:S&&h(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&h(y.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:se&&h(y.diffuseRoughnessMap.channel),iridescenceMapUv:ne&&h(y.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&h(y.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&h(y.sheenColorMap.channel),sheenRoughnessMapUv:Q&&h(y.sheenRoughnessMap.channel),specularMapUv:j&&h(y.specularMap.channel),specularColorMapUv:fe&&h(y.specularColorMap.channel),specularIntensityMapUv:N&&h(y.specularIntensityMap.channel),transmissionMapUv:te&&h(y.transmissionMap.channel),thicknessMapUv:J&&h(y.thicknessMap.channel),alphaMapUv:oe&&h(y.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(ye||St),vertexNormals:!!L.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!L.attributes.uv&&(Xe||oe),fog:!!B,useFog:y.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||L.attributes.normal===void 0&&ye===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Me,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:ve,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:R.filter(Se=>Se.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:re,decodeVideoTexture:Xe&&y.map.isVideoTexture===!0&&_t.getTransfer(y.map.colorSpace)===wt,decodeVideoTextureEmissive:Fe&&y.emissiveMap.isVideoTexture===!0&&_t.getTransfer(y.emissiveMap.colorSpace)===wt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Cn,flipSided:y.side===un,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ot&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&y.extensions.multiDraw===!0||Lt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return rt.vertexUv1s=l.has(1),rt.vertexUv2s=l.has(2),rt.vertexUv3s=l.has(3),l.clear(),rt}function x(y){let b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(let D in y.defines)b.push(D),b.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(p(b,y),g(b,y),b.push(n.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function p(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapPMREM),y.push(b.envMapMaxLod),y.push(b.envMapSize),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.diffuseRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.numSunLights),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numSunLightShadows),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.numLightProbeGrids),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function g(y,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function _(y){let b=f[y.type],D;if(b){let I=yi[b];D=ed.clone(I.uniforms)}else D=y.uniforms;return D}function M(y,b){let D=u.get(b);return D!==void 0?++D.usedTimes:(D=new sy(n,b,y,s),c.push(D),u.set(b,D)),D}function v(y){if(--y.usedTimes===0){let b=c.indexOf(y);c[b]=c[c.length-1],c.pop(),u.delete(y.cacheKey),y.destroy()}}function T(y){o.remove(y)}function A(){o.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:_,acquireProgram:M,releaseProgram:v,releaseShaderCache:T,programs:c,dispose:A}}function ly(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function cy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function vd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Md(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function o(f,h,m,x,p,g){let _=n[e];return _===void 0?(_={id:f.id,object:f,geometry:h,material:m,materialVariant:a(f),groupOrder:x,renderOrder:f.renderOrder,z:p,group:g},n[e]=_):(_.id=f.id,_.object=f,_.geometry=h,_.material=m,_.materialVariant=a(f),_.groupOrder=x,_.renderOrder=f.renderOrder,_.z=p,_.group=g),e++,_}function l(f,h,m,x,p,g,_){_.reversedDepth===!0&&(p=-p);let M=o(f,h,m,x,p,g);m.transmission>0?i.push(M):m.transparent===!0?s.push(M):t.push(M)}function c(f,h,m,x,p,g){let _=o(f,h,m,x,p,g);m.transmission>0?i.unshift(_):m.transparent===!0?s.unshift(_):t.unshift(_)}function u(f,h){t.length>1&&t.sort(f||cy),i.length>1&&i.sort(h||vd),s.length>1&&s.sort(h||vd)}function d(){for(let f=e,h=n.length;f<h;f++){let m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function hy(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new Md,n.set(i,[a])):s>=r.length?(a=new Md,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function uy(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new Re};break;case"SpotLight":t={position:new P,direction:new P,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function fy(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var dy=0;function py(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function my(n){let e=new uy,t=fy(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);let s=new P,r=new ut,a=new ut;function o(c){let u=0,d=0,f=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let h=0,m=0,x=0,p=0,g=0,_=0,M=0,v=0,T=0,A=0,y=0,b=0,D=0,I=0;c.sort(py);for(let R=0,B=c.length;R<B;R++){let L=c[R],G=L.color,q=L.intensity,w=L.distance,z=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===ji?z=L.shadow.map.texture:z=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=G.r*q,d+=G.g*q,f+=G.b*q;else if(L.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(L.sh.coefficients[H],q);I++}else if(L.isSunLight){let H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let $=L.shadow,K=t.get(L);K.shadowIntensity=$.intensity,K.shadowBias=$.bias,K.shadowNormalBias=$.normalBias,K.shadowRadius=$.radius,K.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),i.sunShadow[m]=K,i.sunShadowMap[m]=z;let ve=$.getViewportCount();for(let Te=0;Te<ve;Te++)i.sunShadowMatrix[x+Te]=$.getMatrix(Te),i.sunShadowCascade[x+Te]=$._cascadeData[Te];x+=ve,m++}i.sun[h]=H,h++}else if(L.isDirectionalLight){let H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let $=L.shadow,K=t.get(L);K.shadowIntensity=$.intensity,K.shadowBias=$.bias,K.shadowNormalBias=$.normalBias,K.shadowRadius=$.radius,K.shadowMapSize=$.mapSize,i.directionalShadow[p]=K,i.directionalShadowMap[p]=z,i.directionalShadowMatrix[p]=L.shadow.matrix,T++}i.directional[p]=H,p++}else if(L.isSpotLight){let H=e.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(G).multiplyScalar(q),H.distance=w,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,i.spot[_]=H;let $=L.shadow;if(L.map&&(i.spotLightMap[b]=L.map,b++,$.updateMatrices(L),L.castShadow&&D++),i.spotLightMatrix[_]=$.matrix,L.castShadow){let K=t.get(L);K.shadowIntensity=$.intensity,K.shadowBias=$.bias,K.shadowNormalBias=$.normalBias,K.shadowRadius=$.radius,K.shadowMapSize=$.mapSize,i.spotShadow[_]=K,i.spotShadowMap[_]=z,y++}_++}else if(L.isRectAreaLight){let H=e.get(L);H.color.copy(G).multiplyScalar(q),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),i.rectArea[M]=H,M++}else if(L.isPointLight){let H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),H.distance=L.distance,H.decay=L.decay,L.castShadow){let $=L.shadow,K=t.get(L);K.shadowIntensity=$.intensity,K.shadowBias=$.bias,K.shadowNormalBias=$.normalBias,K.shadowRadius=$.radius,K.shadowMapSize=$.mapSize,K.shadowCameraNear=$.camera.near,K.shadowCameraFar=$.camera.far,i.pointShadow[g]=K,i.pointShadowMap[g]=z,i.pointShadowMatrix[g]=L.shadow.matrix,A++}i.point[g]=H,g++}else if(L.isHemisphereLight){let H=e.get(L);H.skyColor.copy(L.color).multiplyScalar(q),H.groundColor.copy(L.groundColor).multiplyScalar(q),i.hemi[v]=H,v++}}M>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;let U=i.hash;(U.sunLength!==h||U.directionalLength!==p||U.pointLength!==g||U.spotLength!==_||U.rectAreaLength!==M||U.hemiLength!==v||U.numSunShadows!==m||U.numDirectionalShadows!==T||U.numPointShadows!==A||U.numSpotShadows!==y||U.numSpotMaps!==b||U.numLightProbes!==I)&&(i.sun.length=h,i.directional.length=p,i.spot.length=_,i.rectArea.length=M,i.point.length=g,i.hemi.length=v,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=y,i.spotShadowMap.length=y,i.spotLightMatrix.length=y+b-D,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=I,U.sunLength=h,U.directionalLength=p,U.pointLength=g,U.spotLength=_,U.rectAreaLength=M,U.hemiLength=v,U.numSunShadows=m,U.numDirectionalShadows=T,U.numPointShadows=A,U.numSpotShadows=y,U.numSpotMaps=b,U.numLightProbes=I,i.version=dy++)}function l(c,u){let d=0,f=0,h=0,m=0,x=0,p=0,g=u.matrixWorldInverse;for(let _=0,M=c.length;_<M;_++){let v=c[_];if(v.isSunLight){let T=i.sun[d];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(g),d++}else if(v.isDirectionalLight){let T=i.directional[f];T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(g),f++}else if(v.isSpotLight){let T=i.spot[m];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(g),T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(g),m++}else if(v.isRectAreaLight){let T=i.rectArea[x];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(g),a.identity(),r.copy(v.matrixWorld),r.premultiply(g),a.extractRotation(r),T.halfWidth.set(v.width*.5,0,0),T.halfHeight.set(0,v.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),x++}else if(v.isPointLight){let T=i.point[h];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(g),h++}else if(v.isHemisphereLight){let T=i.hemi[p];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(g),p++}}}return{setup:o,setupView:l,state:i}}function Sd(n){let e=new my(n),t=[],i=[],s=[];function r(d){u.camera=d,t.length=0,i.length=0,s.length=0}function a(d){d.isLightProbeGrid?s.push(d):t.push(d)}function o(d){i.push(d)}function l(){e.setup(t),s.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function c(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function gy(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Sd(n),e.set(s,[o])):r>=a.length?(o=new Sd(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var xy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_y=`uniform sampler2D shadow_pass;
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
}`,yy=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],vy=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],bd=new ut,Ia=new P,Bh=new P;function My(n,e,t){let i=new Yi,s=new ae,r=new ae,a=new Ft,o=new Bo,l=new zo,c={},u=t.maxTextureSize,d={[Qi]:un,[un]:Qi,[Cn]:Cn},f=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:xy,fragmentShader:_y}),h=f.clone();h.defines.HORIZONTAL_PASS=1;let m=new Nt;m.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new it(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fs;let g=this.type;this.render=function(A,y,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;this.type===uf&&(We("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=fs);let D=n.getRenderTarget(),I=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),R=n.state;R.setBlending(ds),R.buffers.depth.getReversed()===!0?R.buffers.color.setClear(0,0,0,0):R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);let B=g!==this.type;B&&y.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(G=>G.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,G=A.length;L<G;L++){let q=A[L],w=q.shadow;if(w===void 0){We("WebGLShadowMap:",q,"has no shadow.");continue}if(w.autoUpdate===!1&&w.needsUpdate===!1)continue;s.copy(w.mapSize);let z=w.getFrameExtents();s.multiply(z),r.copy(w.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/z.x),s.x=r.x*z.x,w.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/z.y),s.y=r.y*z.y,w.mapSize.y=r.y));let H=n.state.buffers.depth.getReversed();if(w.camera._reversedDepth=H,w.map===null||B===!0){if(w.map!==null&&(w.map.depthTexture!==null&&(w.map.depthTexture.dispose(),w.map.depthTexture=null),w.map.dispose()),this.type===rr){if(q.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}w.map=new Bn(s.x,s.y,{format:ji,type:ci,minFilter:wn,magFilter:wn,generateMipmaps:!1}),w.map.texture.name=q.name+".shadowMap",w.map.depthTexture=new Di(s.x,s.y,jn),w.map.depthTexture.name=q.name+".shadowMapDepth",w.map.depthTexture.format=Ii,w.map.depthTexture.compareFunction=null,w.map.depthTexture.minFilter=an,w.map.depthTexture.magFilter=an}else q.isPointLight?(w.map=new La(s.x),w.map.depthTexture=new ea(s.x,li)):(w.map=new Bn(s.x,s.y),w.map.depthTexture=new Di(s.x,s.y,li)),w.map.depthTexture.name=q.name+".shadowMap",w.map.depthTexture.format=Ii,this.type===fs?(w.map.depthTexture.compareFunction=H?bh:Sh,w.map.depthTexture.minFilter=wn,w.map.depthTexture.magFilter=wn):(w.map.depthTexture.compareFunction=null,w.map.depthTexture.minFilter=an,w.map.depthTexture.magFilter=an);w.camera.updateProjectionMatrix()}w.map.isWebGLCubeRenderTarget!==!0&&(w.map.width!==s.x||w.map.height!==s.y)&&w.map.setSize(s.x,s.y);let $=w.map.isWebGLCubeRenderTarget?6:w.getViewportCount();q.isPointLight!==!0&&w.updateMatrices(q,b);let K=(w.camera.layers.mask&4294967294)!==0?w.camera.layers:b.layers;for(let ve=0;ve<$;ve++){let Te=w.getCamera(ve);if(q.isPointLight){let Z=w.camera,me=w.matrix,Ae=q.distance||Z.far;Ae!==Z.far&&(Z.far=Ae,Z.updateProjectionMatrix()),Ia.setFromMatrixPosition(q.matrixWorld),Z.position.copy(Ia),Bh.copy(Z.position),Bh.add(yy[ve]),Z.up.copy(vy[ve]),Z.lookAt(Bh),Z.updateMatrixWorld(),me.makeTranslation(-Ia.x,-Ia.y,-Ia.z),bd.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),w._frustum.setFromProjectionMatrix(bd,Z.coordinateSystem,Z.reversedDepth)}if(w.map.isWebGLCubeRenderTarget)n.setRenderTarget(w.map,ve),n.clear();else{ve===0&&(n.setRenderTarget(w.map),n.clear());let Z=w.getViewport(ve);a.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),R.viewport(a)}i=w.getFrustum(ve),v(y,b,Te,q,K,this.type)}w.isPointLightShadow!==!0&&this.type===rr&&_(w,b),w.needsUpdate=!1}g=this.type,p.needsUpdate=!1,n.setRenderTarget(D,I,U)};function _(A,y){let b=e.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,h.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),A.mapPass===null?A.mapPass=new Bn(s.x,s.y,{format:ji,type:ci}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(y,null,b,f,x,null),h.uniforms.shadow_pass.value=A.mapPass.texture,h.uniforms.resolution.value.set(A.map.width,A.map.height),h.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(y,null,b,h,x,null)}function M(A,y,b,D){let I=null,U=b.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)I=U;else if(I=b.isPointLight===!0?l:o,n.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){let R=I.uuid,B=y.uuid,L=c[R];L===void 0&&(L={},c[R]=L);let G=L[B];G===void 0&&(G=I.clone(),L[B]=G,y.addEventListener("dispose",T)),I=G}if(I.visible=y.visible,I.wireframe=y.wireframe,D===rr?I.side=y.shadowSide!==null?y.shadowSide:y.side:I.side=y.shadowSide!==null?y.shadowSide:d[y.side],I.alphaMap=y.alphaMap,I.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,I.map=y.map,I.clipShadows=y.clipShadows,I.clippingPlanes=y.clippingPlanes,I.clipIntersection=y.clipIntersection,I.displacementMap=y.displacementMap,I.displacementScale=y.displacementScale,I.displacementBias=y.displacementBias,I.wireframeLinewidth=y.wireframeLinewidth,I.linewidth=y.linewidth,b.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let R=n.properties.get(I);R.light=b}return I}function v(A,y,b,D,I,U){if(A.visible===!1)return;if(A.layers.test(I)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&U===rr)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,A.matrixWorld);let L=e.update(A),G=A.material;if(Array.isArray(G)){let q=L.groups;for(let w=0,z=q.length;w<z;w++){let H=q[w],$=G[H.materialIndex];if($&&$.visible){let K=M(A,$,D,U);A.onBeforeShadow(n,A,y,b,L,K,H),n.renderBufferDirect(b,null,L,K,A,H),A.onAfterShadow(n,A,y,b,L,K,H)}}}else if(G.visible){let q=M(A,G,D,U);A.onBeforeShadow(n,A,y,b,L,q,null),n.renderBufferDirect(b,null,L,q,A,null),A.onAfterShadow(n,A,y,b,L,q,null)}}let B=A.children;for(let L=0,G=B.length;L<G;L++)v(B[L],y,b,D,I,U)}function T(A){A.target.removeEventListener("dispose",T);for(let b in c){let D=c[b],I=A.target.uuid;I in D&&(D[I].dispose(),delete D[I])}}}function Sy(n,e){function t(){let N=!1,te=new Ft,J=null,de=new Ft(0,0,0,0);return{setMask:function(oe){J!==oe&&!N&&(n.colorMask(oe,oe,oe,oe),J=oe)},setLocked:function(oe){N=oe},setClear:function(oe,he,Oe,ot,re){re===!0&&(oe*=ot,he*=ot,Oe*=ot),te.set(oe,he,Oe,ot),de.equals(te)===!1&&(n.clearColor(oe,he,Oe,ot),de.copy(te))},reset:function(){N=!1,J=null,de.set(-1,0,0,0)}}}function i(){let N=!1,te=!1,J=null,de=null,oe=null;return{setReversed:function(he){if(te!==he){let Oe=e.get("EXT_clip_control");he?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),te=he;let ot=oe;oe=null,this.setClear(ot)}},getReversed:function(){return te},setTest:function(he){he?Me(n.DEPTH_TEST):He(n.DEPTH_TEST)},setMask:function(he){J!==he&&!N&&(n.depthMask(he),J=he)},setFunc:function(he){if(te&&(he=Xf[he]),de!==he){switch(he){case _o:n.depthFunc(n.NEVER);break;case yo:n.depthFunc(n.ALWAYS);break;case vo:n.depthFunc(n.LESS);break;case Vs:n.depthFunc(n.LEQUAL);break;case Mo:n.depthFunc(n.EQUAL);break;case So:n.depthFunc(n.GEQUAL);break;case bo:n.depthFunc(n.GREATER);break;case Eo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}de=he}},setLocked:function(he){N=he},setClear:function(he){oe!==he&&(oe=he,te&&(he=1-he),n.clearDepth(he))},reset:function(){N=!1,J=null,de=null,oe=null,te=!1}}}function s(){let N=!1,te=null,J=null,de=null,oe=null,he=null,Oe=null,ot=null,re=null;return{setTest:function(ke){N||(ke?Me(n.STENCIL_TEST):He(n.STENCIL_TEST))},setMask:function(ke){te!==ke&&!N&&(n.stencilMask(ke),te=ke)},setFunc:function(ke,rt,Se){(J!==ke||de!==rt||oe!==Se)&&(n.stencilFunc(ke,rt,Se),J=ke,de=rt,oe=Se)},setOp:function(ke,rt,Se){(he!==ke||Oe!==rt||ot!==Se)&&(n.stencilOp(ke,rt,Se),he=ke,Oe=rt,ot=Se)},setLocked:function(ke){N=ke},setClear:function(ke){re!==ke&&(n.clearStencil(ke),re=ke)},reset:function(){N=!1,te=null,J=null,de=null,oe=null,he=null,Oe=null,ot=null,re=null}}}let r=new t,a=new i,o=new s,l={},c=new WeakMap,u={},d={},f={},h=new WeakMap,m=[],x=null,p=!1,g=null,_=null,M=null,v=null,T=null,A=null,y=null,b=new Re(0,0,0),D=0,I=!1,U=null,R=null,B=null,L=null,G=null,q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),w=!1,z=0,H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(H)[1]),w=z>=1):H.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),w=z>=2);let $=null,K={},ve=n.getParameter(n.SCISSOR_BOX),Te=n.getParameter(n.VIEWPORT),Z=new Ft().fromArray(ve),me=new Ft().fromArray(Te);function Ae(N,te,J,de){let oe=new Uint8Array(4),he=n.createTexture();n.bindTexture(N,he),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Oe=0;Oe<J;Oe++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(te,0,n.RGBA,1,1,de,0,n.RGBA,n.UNSIGNED_BYTE,oe):n.texImage2D(te+Oe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,oe);return he}let ze={};ze[n.TEXTURE_2D]=Ae(n.TEXTURE_2D,n.TEXTURE_2D,1),ze[n.TEXTURE_CUBE_MAP]=Ae(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ze[n.TEXTURE_2D_ARRAY]=Ae(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ze[n.TEXTURE_3D]=Ae(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Me(n.DEPTH_TEST),a.setFunc(Vs),we(!1),ye(sh),Me(n.CULL_FACE),ue(ds);function Me(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function He(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function Lt(N,te){return f[N]!==te?(n.bindFramebuffer(N,te),f[N]=te,N===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=te),N===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=te),!0):!1}function Xe(N,te){let J=m,de=!1;if(N){J=h.get(te),J===void 0&&(J=[],h.set(te,J));let oe=N.textures;if(J.length!==oe.length||J[0]!==n.COLOR_ATTACHMENT0){for(let he=0,Oe=oe.length;he<Oe;he++)J[he]=n.COLOR_ATTACHMENT0+he;J.length=oe.length,de=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,de=!0);de&&n.drawBuffers(J)}function ct(N){return x!==N?(n.useProgram(N),x=N,!0):!1}let ft={[ps]:n.FUNC_ADD,[df]:n.FUNC_SUBTRACT,[pf]:n.FUNC_REVERSE_SUBTRACT};ft[mf]=n.MIN,ft[gf]=n.MAX;let ie={[xf]:n.ZERO,[_f]:n.ONE,[yf]:n.SRC_COLOR,[oh]:n.SRC_ALPHA,[Tf]:n.SRC_ALPHA_SATURATE,[bf]:n.DST_COLOR,[Mf]:n.DST_ALPHA,[vf]:n.ONE_MINUS_SRC_COLOR,[lh]:n.ONE_MINUS_SRC_ALPHA,[Ef]:n.ONE_MINUS_DST_COLOR,[Sf]:n.ONE_MINUS_DST_ALPHA,[wf]:n.CONSTANT_COLOR,[Af]:n.ONE_MINUS_CONSTANT_COLOR,[Rf]:n.CONSTANT_ALPHA,[Cf]:n.ONE_MINUS_CONSTANT_ALPHA};function ue(N,te,J,de,oe,he,Oe,ot,re,ke){if(N===ds){p===!0&&(He(n.BLEND),p=!1);return}if(p===!1&&(Me(n.BLEND),p=!0),N!==ff){if(N!==g||ke!==I){if((_!==ps||T!==ps)&&(n.blendEquation(n.FUNC_ADD),_=ps,T=ps),ke)switch(N){case ar:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gn:n.blendFunc(n.ONE,n.ONE);break;case rh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ah:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:qe("WebGLState: Invalid blending: ",N);break}else switch(N){case ar:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case rh:qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ah:qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qe("WebGLState: Invalid blending: ",N);break}M=null,v=null,A=null,y=null,b.set(0,0,0),D=0,g=N,I=ke}return}oe=oe||te,he=he||J,Oe=Oe||de,(te!==_||oe!==T)&&(n.blendEquationSeparate(ft[te],ft[oe]),_=te,T=oe),(J!==M||de!==v||he!==A||Oe!==y)&&(n.blendFuncSeparate(ie[J],ie[de],ie[he],ie[Oe]),M=J,v=de,A=he,y=Oe),(ot.equals(b)===!1||re!==D)&&(n.blendColor(ot.r,ot.g,ot.b,re),b.copy(ot),D=re),g=N,I=!1}function le(N,te){N.side===Cn?He(n.CULL_FACE):Me(n.CULL_FACE);let J=N.side===un;te&&(J=!J),we(J),N.blending===ar&&N.transparent===!1?ue(ds):ue(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let de=N.stencilWrite;o.setTest(de),de&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Fe(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Me(n.SAMPLE_ALPHA_TO_COVERAGE):He(n.SAMPLE_ALPHA_TO_COVERAGE)}function we(N){U!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),U=N)}function ye(N){N!==cf?(Me(n.CULL_FACE),N!==R&&(N===sh?n.cullFace(n.BACK):N===hf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):He(n.CULL_FACE),R=N}function nt(N){N!==B&&(w&&n.lineWidth(N),B=N)}function Fe(N,te,J){N?(Me(n.POLYGON_OFFSET_FILL),(L!==te||G!==J)&&(L=te,G=J,a.getReversed()&&(te=-te,J=-J),n.polygonOffset(te,J))):He(n.POLYGON_OFFSET_FILL)}function dt(N){N?Me(n.SCISSOR_TEST):He(n.SCISSOR_TEST)}function mt(N){N===void 0&&(N=n.TEXTURE0+q-1),$!==N&&(n.activeTexture(N),$=N)}function St(N,te,J){J===void 0&&($===null?J=n.TEXTURE0+q-1:J=$);let de=K[J];de===void 0&&(de={type:void 0,texture:void 0},K[J]=de),(de.type!==N||de.texture!==te)&&($!==J&&(n.activeTexture(J),$=J),n.bindTexture(N,te||ze[N]),de.type=N,de.texture=te)}function O(){let N=K[$];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Zt(){try{n.compressedTexImage2D(...arguments)}catch(N){qe("WebGLState:",N)}}function ht(){try{n.compressedTexImage3D(...arguments)}catch(N){qe("WebGLState:",N)}}function Rt(){try{n.texSubImage2D(...arguments)}catch(N){qe("WebGLState:",N)}}function ge(){try{n.texSubImage3D(...arguments)}catch(N){qe("WebGLState:",N)}}function Wt(){try{n.compressedTexSubImage2D(...arguments)}catch(N){qe("WebGLState:",N)}}function Ve(){try{n.compressedTexSubImage3D(...arguments)}catch(N){qe("WebGLState:",N)}}function Ze(){try{n.texStorage2D(...arguments)}catch(N){qe("WebGLState:",N)}}function C(){try{n.texStorage3D(...arguments)}catch(N){qe("WebGLState:",N)}}function S(){try{n.texImage2D(...arguments)}catch(N){qe("WebGLState:",N)}}function X(){try{n.texImage3D(...arguments)}catch(N){qe("WebGLState:",N)}}function se(N){return d[N]!==void 0?d[N]:n.getParameter(N)}function ne(N,te){d[N]!==te&&(n.pixelStorei(N,te),d[N]=te)}function ce(N){Z.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),Z.copy(N))}function xe(N){me.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),me.copy(N))}function Q(N,te){let J=c.get(te);J===void 0&&(J=new WeakMap,c.set(te,J));let de=J.get(N);de===void 0&&(de=n.getUniformBlockIndex(te,N.name),n.uniformBlockBinding(te,de,de),J.set(N,de))}function j(N,te,J){let oe=c.get(te).get(N);l[oe]!==J&&(n.bindBufferBase(n.UNIFORM_BUFFER,oe,J),l[oe]=J)}function fe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},$=null,K={},f={},l={},h=new WeakMap,m=[],x=null,p=!1,g=null,_=null,M=null,v=null,T=null,A=null,y=null,b=new Re(0,0,0),D=0,I=!1,U=null,R=null,B=null,L=null,G=null,Z.set(0,0,n.canvas.width,n.canvas.height),me.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Me,disable:He,bindFramebuffer:Lt,drawBuffers:Xe,useProgram:ct,setBlending:ue,setMaterial:le,setFlipSided:we,setCullFace:ye,setLineWidth:nt,setPolygonOffset:Fe,setScissorTest:dt,activeTexture:mt,bindTexture:St,unbindTexture:O,compressedTexImage2D:Zt,compressedTexImage3D:ht,texImage2D:S,texImage3D:X,pixelStorei:ne,getParameter:se,updateUBOMapping:Q,uniformBlockBinding:j,texStorage2D:Ze,texStorage3D:C,texSubImage2D:Rt,texSubImage3D:ge,compressedTexSubImage2D:Wt,compressedTexSubImage3D:Ve,scissor:ce,viewport:xe,reset:fe}}function by(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ae,u=new WeakMap,d=new Set,f,h=new WeakMap,m=new Set,x=new FinalizationRegistry(C=>m.delete(C)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return p?new OffscreenCanvas(C,S):Gr("canvas")}function _(C,S,X){let se=1,ne=Ze(C);if((ne.width>X||ne.height>X)&&(se=X/Math.max(ne.width,ne.height)),se<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ce=Math.floor(se*ne.width),xe=Math.floor(se*ne.height);f===void 0&&(f=g(ce,xe));let Q=S?g(ce,xe):f;return Q.width=ce,Q.height=xe,Q.getContext("2d").drawImage(C,0,0,ce,xe),We("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+ce+"x"+xe+")."),Q}else return"data"in C&&We("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),C;return C}function M(C){return C.generateMipmaps}function v(C){n.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(C,S,X,se,ne,ce=!1){if(C!==null){if(n[C]!==void 0)return n[C];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let xe;se&&(xe=e.get("EXT_texture_norm16"),xe||We("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=S;if(S===n.RED&&(X===n.FLOAT&&(Q=n.R32F),X===n.HALF_FLOAT&&(Q=n.R16F),X===n.UNSIGNED_BYTE&&(Q=n.R8),X===n.UNSIGNED_SHORT&&xe&&(Q=xe.R16_EXT),X===n.SHORT&&xe&&(Q=xe.R16_SNORM_EXT)),S===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(Q=n.R8UI),X===n.UNSIGNED_SHORT&&(Q=n.R16UI),X===n.UNSIGNED_INT&&(Q=n.R32UI),X===n.BYTE&&(Q=n.R8I),X===n.SHORT&&(Q=n.R16I),X===n.INT&&(Q=n.R32I)),S===n.RG&&(X===n.FLOAT&&(Q=n.RG32F),X===n.HALF_FLOAT&&(Q=n.RG16F),X===n.UNSIGNED_BYTE&&(Q=n.RG8),X===n.UNSIGNED_SHORT&&xe&&(Q=xe.RG16_EXT),X===n.SHORT&&xe&&(Q=xe.RG16_SNORM_EXT)),S===n.RG_INTEGER&&(X===n.UNSIGNED_BYTE&&(Q=n.RG8UI),X===n.UNSIGNED_SHORT&&(Q=n.RG16UI),X===n.UNSIGNED_INT&&(Q=n.RG32UI),X===n.BYTE&&(Q=n.RG8I),X===n.SHORT&&(Q=n.RG16I),X===n.INT&&(Q=n.RG32I)),S===n.RGB_INTEGER&&(X===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),X===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),X===n.UNSIGNED_INT&&(Q=n.RGB32UI),X===n.BYTE&&(Q=n.RGB8I),X===n.SHORT&&(Q=n.RGB16I),X===n.INT&&(Q=n.RGB32I)),S===n.RGBA_INTEGER&&(X===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),X===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),X===n.UNSIGNED_INT&&(Q=n.RGBA32UI),X===n.BYTE&&(Q=n.RGBA8I),X===n.SHORT&&(Q=n.RGBA16I),X===n.INT&&(Q=n.RGBA32I)),S===n.RGB&&(X===n.UNSIGNED_SHORT&&xe&&(Q=xe.RGB16_EXT),X===n.SHORT&&xe&&(Q=xe.RGB16_SNORM_EXT),X===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),X===n.UNSIGNED_INT_10F_11F_11F_REV&&(Q=n.R11F_G11F_B10F)),S===n.RGBA){let j=ce?kr:_t.getTransfer(ne);X===n.FLOAT&&(Q=n.RGBA32F),X===n.HALF_FLOAT&&(Q=n.RGBA16F),X===n.UNSIGNED_BYTE&&(Q=j===wt?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT&&xe&&(Q=xe.RGBA16_EXT),X===n.SHORT&&xe&&(Q=xe.RGBA16_SNORM_EXT),X===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function y(C,S){let X;return C?S===null||S===li||S===gs?X=n.DEPTH24_STENCIL8:S===jn?X=n.DEPTH32F_STENCIL8:S===lr&&(X=n.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===li||S===gs?X=n.DEPTH_COMPONENT24:S===jn?X=n.DEPTH_COMPONENT32F:S===lr&&(X=n.DEPTH_COMPONENT16),X}function b(C,S){return M(C)===!0||C.isFramebufferTexture&&C.minFilter!==an&&C.minFilter!==wn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function D(C){let S=new WeakRef(C);i.get(C).__ref=S,m.add(S),x.register(C,S,S)}function I(C){let S=i.get(C).__ref;S!==void 0&&(m.delete(S),x.unregister(S))}function U(C){B(C.target)}function R(C){L(C.target)}function B(C){C.removeEventListener("dispose",U),I(C),q(C),C.isVideoTexture&&u.delete(C),C.isHTMLTexture&&d.delete(C)}function L(C){C.removeEventListener("dispose",R),I(C),z(C)}function G(){for(let C of m){let S=C.deref();S!==void 0&&(S.isRenderTarget===!0?L(S):B(S))}m.clear(),d.clear()}function q(C){let S=i.get(C);if(S.__webglInit===void 0)return;let X=C.source,se=h.get(X);if(se){let ne=se[S.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&w(C),Object.keys(se).length===0&&h.delete(X)}i.remove(C)}function w(C){let S=i.get(C);n.deleteTexture(S.__webglTexture);let X=C.source,se=h.get(X);delete se[S.__cacheKey],a.memory.textures--}function z(C){let S=i.get(C);S.__depthDisposeCallback&&S.__depthDisposeCallback();let X=C.depthTexture;if(X&&X.renderTarget===C&&B(X),C.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(S.__webglFramebuffer[ne]))for(let ce=0;ce<S.__webglFramebuffer[ne].length;ce++)n.deleteFramebuffer(S.__webglFramebuffer[ne][ce]);else n.deleteFramebuffer(S.__webglFramebuffer[ne]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[ne])}else{if(Array.isArray(S.__webglFramebuffer))for(let ne=0;ne<S.__webglFramebuffer.length;ne++)n.deleteFramebuffer(S.__webglFramebuffer[ne]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ne=0;ne<S.__webglColorRenderbuffer.length;ne++)S.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[ne]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let se=C.textures;for(let ne=0,ce=se.length;ne<ce;ne++){let xe=i.get(se[ne]);xe.__webglTexture&&(n.deleteTexture(xe.__webglTexture),a.memory.textures--),i.remove(se[ne])}i.remove(C)}let H=0;function $(){H=0}function K(){return H}function ve(C){H=C}function Te(){let C=H;return C>=s.maxTextures&&We("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),H+=1,C}function Z(C){let S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.mipmapsAutoUpdate),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function me(C,S){let X=i.get(C);if(C.isVideoTexture&&Wt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&X.__version!==C.version){let se=C.image;if(se===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{le(X,C,S);return}}else C.isExternalTexture&&(X.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+S)}function Ae(C,S){let X=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){le(X,C,S);return}else C.isExternalTexture&&(X.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+S)}function ze(C,S){let X=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){le(X,C,S);return}t.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+S)}function Me(C,S){let X=i.get(C);if(C.version>0&&X.__version!==C.version){we(X,C,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+S)}let He={[Xs]:n.REPEAT,[di]:n.CLAMP_TO_EDGE,[To]:n.MIRRORED_REPEAT},Lt={[an]:n.NEAREST,[Lf]:n.NEAREST_MIPMAP_NEAREST,[ba]:n.NEAREST_MIPMAP_LINEAR,[wn]:n.LINEAR,[tl]:n.LINEAR_MIPMAP_NEAREST,[Ni]:n.LINEAR_MIPMAP_LINEAR},Xe={[Ff]:n.NEVER,[Eh]:n.ALWAYS,[Of]:n.LESS,[Sh]:n.LEQUAL,[Bf]:n.EQUAL,[bh]:n.GEQUAL,[zf]:n.GREATER,[kf]:n.NOTEQUAL};function ct(C,S){if(S.type===jn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===wn||S.magFilter===tl||S.magFilter===ba||S.magFilter===Ni||S.minFilter===wn||S.minFilter===tl||S.minFilter===ba||S.minFilter===Ni)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,He[S.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,He[S.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,He[S.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,Lt[S.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,Lt[S.minFilter]),S.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,Xe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===an||S.minFilter!==ba&&S.minFilter!==Ni||S.type===jn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let X=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function ft(C,S){let X=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",U),D(S));let se=S.source,ne=h.get(se);ne===void 0&&(ne={},h.set(se,ne));let ce=Z(S);if(ce!==C.__cacheKey){ne[ce]===void 0&&(ne[ce]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,X=!0),ne[ce].usedTimes++;let xe=ne[C.__cacheKey];xe!==void 0&&(ne[C.__cacheKey].usedTimes--,xe.usedTimes===0&&w(S)),C.__cacheKey=ce,C.__webglTexture=ne[ce].texture}return X}function ie(C,S,X){return Math.floor(Math.floor(C/X)/S)}function ue(C,S,X,se){let ce=C.updateRanges;if(ce.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,X,se,S.data);else{ce.sort((N,te)=>N.start-te.start);let xe=0;for(let N=1;N<ce.length;N++){let te=ce[xe],J=ce[N],de=te.start+te.count,oe=ie(J.start,S.width,4),he=ie(te.start,S.width,4);J.start<=de+1&&oe===he&&ie(J.start+J.count-1,S.width,4)===oe?te.count=Math.max(te.count,J.start+J.count-te.start):(++xe,ce[xe]=J)}ce.length=xe+1;let Q=t.getParameter(n.UNPACK_ROW_LENGTH),j=t.getParameter(n.UNPACK_SKIP_PIXELS),fe=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let N=0,te=ce.length;N<te;N++){let J=ce[N],de=Math.floor(J.start/4),oe=Math.ceil(J.count/4),he=de%S.width,Oe=Math.floor(de/S.width),ot=oe,re=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,he),t.pixelStorei(n.UNPACK_SKIP_ROWS,Oe),t.texSubImage2D(n.TEXTURE_2D,0,he,Oe,ot,re,X,se,S.data)}C.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Q),t.pixelStorei(n.UNPACK_SKIP_PIXELS,j),t.pixelStorei(n.UNPACK_SKIP_ROWS,fe)}}function le(C,S,X){let se=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(se=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(se=n.TEXTURE_3D);let ne=ft(C,S),ce=S.source;t.bindTexture(se,C.__webglTexture,n.TEXTURE0+X);let xe=i.get(ce);if(ce.version!==xe.__version||ne===!0){if(t.activeTexture(n.TEXTURE0+X),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let re=_t.getPrimaries(_t.workingColorSpace),ke=S.colorSpace===Fi?null:_t.getPrimaries(S.colorSpace),rt=S.colorSpace===Fi||re===ke?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt)}t.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment);let j=_(S.image,!1,s.maxTextureSize);j=Ve(S,j);let fe=r.convert(S.format,S.colorSpace),N=r.convert(S.type),te=A(S.internalFormat,fe,N,S.normalized,S.colorSpace,S.isVideoTexture);ct(se,S);let J,de=S.mipmaps,oe=S.isVideoTexture!==!0,he=xe.__version===void 0||ne===!0,Oe=ce.dataReady,ot=b(S,j);if(S.isDepthTexture)te=y(S.format===Ui,S.type),he&&(oe?t.texStorage2D(n.TEXTURE_2D,1,te,j.width,j.height):t.texImage2D(n.TEXTURE_2D,0,te,j.width,j.height,0,fe,N,null));else if(S.isDataTexture)if(de.length>0){oe&&he&&t.texStorage2D(n.TEXTURE_2D,ot,te,de[0].width,de[0].height);for(let re=0,ke=de.length;re<ke;re++)J=de[re],oe?Oe&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,J.width,J.height,fe,N,J.data):t.texImage2D(n.TEXTURE_2D,re,te,J.width,J.height,0,fe,N,J.data);S.generateMipmaps=!1}else oe?(he&&t.texStorage2D(n.TEXTURE_2D,ot,te,j.width,j.height),Oe&&ue(S,j,fe,N)):t.texImage2D(n.TEXTURE_2D,0,te,j.width,j.height,0,fe,N,j.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){oe&&he&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ot,te,de[0].width,de[0].height,j.depth);for(let re=0,ke=de.length;re<ke;re++)if(J=de[re],S.format!==hi)if(fe!==null)if(oe){if(Oe)if(S.layerUpdates.size>0){let rt=Ph(J.width,J.height,S.format,S.type);for(let Se of S.layerUpdates){let At=J.data.subarray(Se*rt/J.data.BYTES_PER_ELEMENT,(Se+1)*rt/J.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,Se,J.width,J.height,1,fe,At)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,J.width,J.height,j.depth,fe,J.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,re,te,J.width,J.height,j.depth,0,J.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?Oe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,J.width,J.height,j.depth,fe,N,J.data):t.texImage3D(n.TEXTURE_2D_ARRAY,re,te,J.width,J.height,j.depth,0,fe,N,J.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{oe&&he&&t.texStorage2D(n.TEXTURE_2D,ot,te,de[0].width,de[0].height);for(let re=0,ke=de.length;re<ke;re++)J=de[re],S.format!==hi?fe!==null?oe?Oe&&t.compressedTexSubImage2D(n.TEXTURE_2D,re,0,0,J.width,J.height,fe,J.data):t.compressedTexImage2D(n.TEXTURE_2D,re,te,J.width,J.height,0,J.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?Oe&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,J.width,J.height,fe,N,J.data):t.texImage2D(n.TEXTURE_2D,re,te,J.width,J.height,0,fe,N,J.data)}else if(S.isDataArrayTexture)if(oe){if(he&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ot,te,j.width,j.height,j.depth),Oe)if(S.layerUpdates.size>0){let re=Ph(j.width,j.height,S.format,S.type);for(let ke of S.layerUpdates){let rt=j.data.subarray(ke*re/j.data.BYTES_PER_ELEMENT,(ke+1)*re/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ke,j.width,j.height,1,fe,N,rt)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,fe,N,j.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,te,j.width,j.height,j.depth,0,fe,N,j.data);else if(S.isData3DTexture)oe?(he&&t.texStorage3D(n.TEXTURE_3D,ot,te,j.width,j.height,j.depth),Oe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,fe,N,j.data)):t.texImage3D(n.TEXTURE_3D,0,te,j.width,j.height,j.depth,0,fe,N,j.data);else if(S.isFramebufferTexture){if(he)if(oe)t.texStorage2D(n.TEXTURE_2D,ot,te,j.width,j.height);else{let re=j.width,ke=j.height;for(let rt=0;rt<ot;rt++)t.texImage2D(n.TEXTURE_2D,rt,te,re,ke,0,fe,N,null),re>>=1,ke>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in n){let re=n.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),j.parentNode!==re){re.appendChild(j),d.add(S),re.onpaint=ke=>{let rt=ke.changedElements;for(let Se of d)rt.includes(Se.image)&&(Se.needsUpdate=!0)},re.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,j);else{let rt=n.RGBA,Se=n.RGBA,At=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,rt,Se,At,j)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(de.length>0){if(oe&&he){let re=Ze(de[0]);t.texStorage2D(n.TEXTURE_2D,ot,te,re.width,re.height)}for(let re=0,ke=de.length;re<ke;re++)J=de[re],oe?Oe&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,fe,N,J):t.texImage2D(n.TEXTURE_2D,re,te,fe,N,J);S.generateMipmaps=!1}else if(oe){if(he){let re=Ze(j);t.texStorage2D(n.TEXTURE_2D,ot,te,re.width,re.height)}Oe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe,N,j)}else t.texImage2D(n.TEXTURE_2D,0,te,fe,N,j);M(S)&&S.mipmapsAutoUpdate===!0&&v(se),xe.__version=ce.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function we(C,S,X){if(S.image.length!==6)return;let se=ft(C,S),ne=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+X);let ce=i.get(ne);if(ne.version!==ce.__version||se===!0){t.activeTexture(n.TEXTURE0+X);let xe=_t.getPrimaries(_t.workingColorSpace),Q=S.colorSpace===Fi?null:_t.getPrimaries(S.colorSpace),j=S.colorSpace===Fi||xe===Q?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let fe=S.isCompressedTexture||S.image[0].isCompressedTexture,N=S.image[0]&&S.image[0].isDataTexture,te=[];for(let Se=0;Se<6;Se++)!fe&&!N?te[Se]=_(S.image[Se],!0,s.maxCubemapSize):te[Se]=N?S.image[Se].image:S.image[Se],te[Se]=Ve(S,te[Se]);let J=te[0],de=r.convert(S.format,S.colorSpace),oe=r.convert(S.type),he=A(S.internalFormat,de,oe,S.normalized,S.colorSpace),Oe=S.isVideoTexture!==!0,ot=ce.__version===void 0||se===!0,re=ne.dataReady,ke=b(S,J);ct(n.TEXTURE_CUBE_MAP,S);let rt;if(S.isDepthTexture){if(he=y(S.format===Ui,S.type),ot)if(Oe)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,he,J.width,J.height);else for(let Se=0;Se<6;Se++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,he,J.width,J.height,0,de,oe,null)}else if(fe){Oe&&ot&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ke,he,J.width,J.height);for(let Se=0;Se<6;Se++){rt=te[Se].mipmaps;for(let At=0;At<rt.length;At++){let nn=rt[At];S.format!==hi?de!==null?Oe?re&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,At,0,0,nn.width,nn.height,de,nn.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,At,he,nn.width,nn.height,0,nn.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,At,0,0,nn.width,nn.height,de,oe,nn.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,At,he,nn.width,nn.height,0,de,oe,nn.data)}}}else{if(rt=S.mipmaps,Oe&&ot){rt.length>0&&ke++;let Se=Ze(te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ke,he,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(N){Oe?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,te[Se].width,te[Se].height,de,oe,te[Se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,he,te[Se].width,te[Se].height,0,de,oe,te[Se].data);for(let At=0;At<rt.length;At++){let ki=rt[At].image[Se].image;Oe?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,At+1,0,0,ki.width,ki.height,de,oe,ki.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,At+1,he,ki.width,ki.height,0,de,oe,ki.data)}}else{Oe?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,de,oe,te[Se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,he,de,oe,te[Se]);for(let At=0;At<rt.length;At++){let nn=rt[At];Oe?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,At+1,0,0,de,oe,nn.image[Se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,At+1,he,de,oe,nn.image[Se])}}}M(S)&&S.mipmapsAutoUpdate===!0&&v(n.TEXTURE_CUBE_MAP),ce.__version=ne.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ye(C,S,X,se,ne,ce){let xe=r.convert(X.format,X.colorSpace),Q=r.convert(X.type),j=A(X.internalFormat,xe,Q,X.normalized,X.colorSpace),fe=i.get(S),N=i.get(X);if(N.__renderTarget=S,!fe.__hasExternalTextures){let te=Math.max(1,S.width>>ce),J=Math.max(1,S.height>>ce);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,ce,j,te,J,S.depth,0,xe,Q,null):t.texImage2D(ne,ce,j,te,J,0,xe,Q,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),ge(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,ne,N.__webglTexture,0,Rt(S)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,se,ne,N.__webglTexture,ce),t.bindFramebuffer(n.FRAMEBUFFER,null)}function nt(C,S,X){if(n.bindRenderbuffer(n.RENDERBUFFER,C),S.depthBuffer){let se=S.depthTexture,ne=se&&se.isDepthTexture?se.type:null,ce=y(S.stencilBuffer,ne),xe=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ge(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Rt(S),ce,S.width,S.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,Rt(S),ce,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,ce,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xe,n.RENDERBUFFER,C)}else{let se=S.textures;for(let ne=0;ne<se.length;ne++){let ce=se[ne],xe=r.convert(ce.format,ce.colorSpace),Q=r.convert(ce.type),j=A(ce.internalFormat,xe,Q,ce.normalized,ce.colorSpace);ge(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Rt(S),j,S.width,S.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,Rt(S),j,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,j,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Fe(C,S,X){let se=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ne=i.get(S.depthTexture);ne.__renderTarget=S;let ce=se?S.depthTexture.image[0]:S.depthTexture.image;(!ne.__webglTexture||ce.width!==S.width||ce.height!==S.height)&&(ce.width=S.width,ce.height=S.height,S.depthTexture.needsUpdate=!0),se?Me(S.depthTexture,0):me(S.depthTexture,0);let xe=ne.__webglTexture,Q=Rt(S),j=se?n.TEXTURE_CUBE_MAP_POSITIVE_X+X:n.TEXTURE_2D,fe=S.depthTexture.format===Ui?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(S.depthTexture.format===Ii)ge(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,fe,j,xe,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,fe,j,xe,0);else if(S.depthTexture.format===Ui)ge(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,fe,j,xe,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,fe,j,xe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function dt(C){let S=i.get(C),X=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){let se=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),se){let ne=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,se.removeEventListener("dispose",ne)};se.addEventListener("dispose",ne),S.__depthDisposeCallback=ne}S.__boundDepthTexture=se}if(C.depthTexture&&!S.__autoAllocateDepthBuffer)if(X)for(let se=0;se<6;se++)Fe(S.__webglFramebuffer[se],C,se);else C.texture.mipmaps.length>0?Fe(S.__webglFramebuffer[0],C,0):Fe(S.__webglFramebuffer,C,0);else if(X){S.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[se]),S.__webglDepthbuffer[se]===void 0)S.__webglDepthbuffer[se]=n.createRenderbuffer(),nt(S.__webglDepthbuffer[se],C,!1);else{let ne=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=S.__webglDepthbuffer[se];n.bindRenderbuffer(n.RENDERBUFFER,ce),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,ce)}}else if(C.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),nt(S.__webglDepthbuffer,C,!1);else{let ne=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ce),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,ce)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function mt(C,S,X){let se=i.get(C);S!==void 0&&ye(se.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&dt(C)}function St(C){let S=C.texture,X=i.get(C),se=i.get(S);C.addEventListener("dispose",R),D(C);let ne=C.textures,ce=C.isWebGLCubeRenderTarget===!0,xe=ne.length>1;if(xe||(se.__webglTexture===void 0&&(se.__webglTexture=n.createTexture()),se.__version=S.version,a.memory.textures++),ce){X.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(S.mipmaps.length>0){X.__webglFramebuffer[Q]=[];for(let j=0;j<S.mipmaps.length;j++)X.__webglFramebuffer[Q][j]=n.createFramebuffer()}else X.__webglFramebuffer[Q]=n.createFramebuffer()}else{if(S.mipmaps.length>0){X.__webglFramebuffer=[];for(let Q=0;Q<S.mipmaps.length;Q++)X.__webglFramebuffer[Q]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(xe)for(let Q=0,j=ne.length;Q<j;Q++){let fe=i.get(ne[Q]);fe.__webglTexture===void 0&&(fe.__webglTexture=n.createTexture(),a.memory.textures++)}if(C.samples>0&&ge(C)===!1){X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Q=0;Q<ne.length;Q++){let j=ne[Q];X.__webglColorRenderbuffer[Q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[Q]);let fe=r.convert(j.format,j.colorSpace),N=r.convert(j.type),te=A(j.internalFormat,fe,N,j.normalized,j.colorSpace,C.isXRRenderTarget===!0),J=Rt(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,J,te,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.RENDERBUFFER,X.__webglColorRenderbuffer[Q])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),nt(X.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ce){t.bindTexture(n.TEXTURE_CUBE_MAP,se.__webglTexture),ct(n.TEXTURE_CUBE_MAP,S);for(let Q=0;Q<6;Q++)if(S.mipmaps.length>0)for(let j=0;j<S.mipmaps.length;j++)ye(X.__webglFramebuffer[Q][j],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,j);else ye(X.__webglFramebuffer[Q],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);M(S)?v(n.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}else if(xe){for(let Q=0,j=ne.length;Q<j;Q++){let fe=ne[Q],N=i.get(fe),te=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(te=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(te,N.__webglTexture),ct(te,fe),ye(X.__webglFramebuffer,C,fe,n.COLOR_ATTACHMENT0+Q,te,0),M(fe)&&v(te)}t.unbindTexture()}else{let Q=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Q=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Q,se.__webglTexture),ct(Q,S),S.mipmaps.length>0)for(let j=0;j<S.mipmaps.length;j++)ye(X.__webglFramebuffer[j],C,S,n.COLOR_ATTACHMENT0,Q,j);else ye(X.__webglFramebuffer,C,S,n.COLOR_ATTACHMENT0,Q,0);M(S)?v(Q):S.mipmaps.length>0&&n.texParameteri(Q,n.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}C.depthBuffer&&dt(C)}function O(C){let S=C.textures;for(let X=0,se=S.length;X<se;X++){let ne=S[X];if(M(ne)&&ne.mipmapsAutoUpdate===!0){let ce=T(C),xe=i.get(ne).__webglTexture;t.bindTexture(ce,xe),v(ce),t.unbindTexture()}}}let Zt=[];function ht(C){if(C.samples>0){if(ge(C)===!1){let S=C.textures,X=C.width,se=C.height,ne=n.COLOR_BUFFER_BIT,ce=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=i.get(C),Q=S.length>1;if(Q)for(let fe=0;fe<S.length;fe++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let fe=0;fe<S.length;fe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),Q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[fe]);let N=i.get(S[fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,N,0)}n.blitFramebuffer(0,0,X,se,0,0,X,se,ne,n.NEAREST),l===!0&&(Zt.length=0,Zt.push(n.COLOR_ATTACHMENT0+fe),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&Zt.push(ce),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Zt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Q)for(let fe=0;fe<S.length;fe++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,xe.__webglColorRenderbuffer[fe]);let N=i.get(S[fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,N,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let S=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function Rt(C){return Math.min(s.maxSamples,C.samples)}function ge(C){let S=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Wt(C){let S=a.render.frame;u.get(C)!==S&&(u.set(C,S),C.update())}function Ve(C,S){let X=C.colorSpace,se=C.format,ne=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||X!==zr&&X!==Fi&&(_t.getTransfer(X)===wt?(se!==hi||ne!==Nn)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qe("WebGLTextures: Unsupported texture color space:",X)),S}function Ze(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=Te,this.resetTextureUnits=$,this.getTextureUnits=K,this.setTextureUnits=ve,this.setTexture2D=me,this.setTexture2DArray=Ae,this.setTexture3D=ze,this.setTextureCube=Me,this.rebindTextures=mt,this.setupRenderTarget=St,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=ge,this.dispose=G}function Ey(n,e){function t(i,s=Fi){let r,a=_t.getTransfer(s);if(i===Nn)return n.UNSIGNED_BYTE;if(i===il)return n.UNSIGNED_SHORT_4_4_4_4;if(i===sl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===_h)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===yh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===gh)return n.BYTE;if(i===xh)return n.SHORT;if(i===lr)return n.UNSIGNED_SHORT;if(i===nl)return n.INT;if(i===li)return n.UNSIGNED_INT;if(i===jn)return n.FLOAT;if(i===ci)return n.HALF_FLOAT;if(i===vh)return n.ALPHA;if(i===Mh)return n.RGB;if(i===hi)return n.RGBA;if(i===Ii)return n.DEPTH_COMPONENT;if(i===Ui)return n.DEPTH_STENCIL;if(i===rl)return n.RED;if(i===al)return n.RED_INTEGER;if(i===ji)return n.RG;if(i===ol)return n.RG_INTEGER;if(i===ll)return n.RGBA_INTEGER;if(i===Ea||i===Ta||i===wa||i===Aa)if(a===wt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ea)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ea)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ta)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===wa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Aa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===cl||i===hl||i===ul||i===fl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===cl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===hl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ul)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===fl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===dl||i===pl||i===ml||i===gl||i===xl||i===Ra||i===_l)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===dl||i===pl)return a===wt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ml)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===gl)return r.COMPRESSED_R11_EAC;if(i===xl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ra)return r.COMPRESSED_RG11_EAC;if(i===_l)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===yl||i===vl||i===Ml||i===Sl||i===bl||i===El||i===Tl||i===wl||i===Al||i===Rl||i===Cl||i===Il||i===Pl||i===Ll)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===yl)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===vl)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ml)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Sl)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===bl)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===El)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Tl)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===wl)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Al)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Rl)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Cl)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Il)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Pl)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ll)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Dl||i===Nl||i===Ul)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Dl)return a===wt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Nl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ul)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Fl||i===Ol||i===Ca||i===Bl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Fl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ol)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ca)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Bl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===gs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Ty=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wy=`
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

}`,Wh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new ta(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Qn({vertexShader:Ty,fragmentShader:wy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new it(new yn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},qh=class extends pi{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,m=null,x=typeof XRWebGLBinding<"u",p=new Wh,g={},_=t.getContextAttributes(),M=null,v=null,T=[],A=[],y=new ae,b=null,D=null,I=new Tn;I.viewport=new Ft;let U=new Tn;U.viewport=new Ft;let R=[I,U],B=new Ko,L=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let me=T[Z];return me===void 0&&(me=new Zs,T[Z]=me),me.getTargetRaySpace()},this.getControllerGrip=function(Z){let me=T[Z];return me===void 0&&(me=new Zs,T[Z]=me),me.getGripSpace()},this.getHand=function(Z){let me=T[Z];return me===void 0&&(me=new Zs,T[Z]=me),me.getHandSpace()};function q(Z){let me=A.indexOf(Z.inputSource);if(me===-1)return;let Ae=T[me];Ae!==void 0&&(Ae.update(Z.inputSource,Z.frame,c||a),Ae.dispatchEvent({type:Z.type,data:Z.inputSource}))}function w(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",w),s.removeEventListener("inputsourceschange",z);for(let Z=0;Z<T.length;Z++){let me=A[Z];me!==null&&(A[Z]=null,T[Z].disconnect(me))}L=null,G=null,p.reset();for(let Z in g)delete g[Z];if(e.setRenderTarget(M),h=null,f=null,d=null,s=null,v=null,Te.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(y.width,y.height,!1),D!==null){let Z=D.camera;Z.fov=D.fov,Z.zoom=D.zoom,Z.updateProjectionMatrix(),D=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",w),s.addEventListener("inputsourceschange",z),_.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(y),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,ze=null,Me=null;_.depth&&(Me=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ae=_.stencil?Ui:Ii,ze=_.stencil?gs:li);let He={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(He),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Bn(f.textureWidth,f.textureHeight,{format:hi,type:Nn,depthTexture:new Di(f.textureWidth,f.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Ae={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,t,Ae),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),v=new Bn(h.framebufferWidth,h.framebufferHeight,{format:hi,type:Nn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Te.setContext(s),Te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function z(Z){for(let me=0;me<Z.removed.length;me++){let Ae=Z.removed[me],ze=A.indexOf(Ae);ze>=0&&(A[ze]=null,T[ze].disconnect(Ae))}for(let me=0;me<Z.added.length;me++){let Ae=Z.added[me],ze=A.indexOf(Ae);if(ze===-1){for(let He=0;He<T.length;He++)if(He>=A.length){A.push(Ae),ze=He;break}else if(A[He]===null){A[He]=Ae,ze=He;break}if(ze===-1)break}let Me=T[ze];Me&&Me.connect(Ae)}}function H(Z,me){me===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(me.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let me=Z.near,Ae=Z.far;p.texture!==null&&(p.depthNear>0&&(me=p.depthNear),p.depthFar>0&&(Ae=p.depthFar)),B.near=U.near=I.near=me,B.far=U.far=I.far=Ae,(L!==B.near||G!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),L=B.near,G=B.far),B.layers.mask=Z.layers.mask|6,I.layers.mask=B.layers.mask&-5,U.layers.mask=B.layers.mask&-3;let ze=Z.parent,Me=B.cameras;H(B,ze);for(let He=0;He<Me.length;He++)H(Me[He],ze);B.projectionMatrix.copy(I.projectionMatrix),B.projectionMatrixInverse.copy(I.projectionMatrixInverse),D===null&&Z.isPerspectiveCamera&&(D={camera:Z,fov:Z.fov,zoom:Z.zoom}),$(Z,B,ze)};function $(Z,me,Ae){Ae===null?Z.matrix.copy(me.matrixWorld):(Z.matrix.copy(Ae.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(me.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(me.projectionMatrix),Z.projectionMatrixInverse.copy(me.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ao*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Z)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(B)},this.getCameraTexture=function(Z){return g[Z]};let K=null;function ve(Z,me){if(u=me.getViewerPose(c||a),m=me,u!==null){let Ae=u.views;h!==null&&(e.setRenderTargetFramebuffer(v,h.framebuffer),e.setRenderTarget(v));let ze=!1;Ae.length!==B.cameras.length&&(B.cameras.length=0,ze=!0);for(let Xe=0;Xe<Ae.length;Xe++){let ct=Ae[Xe],ft=null;if(h!==null)ft=h.getViewport(ct);else{let ue=d.getViewSubImage(f,ct);ft=ue.viewport,Xe===0&&(e.setRenderTargetTextures(v,ue.colorTexture,ue.depthStencilTexture),e.setRenderTarget(v))}let ie=R[Xe];ie===void 0&&(ie=new Tn,ie.layers.enable(Xe),ie.viewport=new Ft,R[Xe]=ie),ie.matrix.fromArray(ct.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(ct.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(ft.x,ft.y,ft.width,ft.height),Xe===0&&(B.matrix.copy(ie.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),ze===!0&&B.cameras.push(ie)}let Me=s.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let Xe=d.getDepthInformation(Ae[0]);Xe&&Xe.isValid&&Xe.texture&&p.init(Xe,s.renderState)}if(Me&&Me.includes("camera-access")&&x){e.state.unbindTexture(),d=i.getBinding();for(let Xe=0;Xe<Ae.length;Xe++){let ct=Ae[Xe].camera;if(ct){let ft=g[ct];ft||(ft=new ta,g[ct]=ft);let ie=d.getCameraImage(ct);ft.sourceTexture=ie}}}}for(let Ae=0;Ae<T.length;Ae++){let ze=A[Ae],Me=T[Ae];ze!==null&&Me!==void 0&&Me.update(ze,me,c||a)}K&&K(Z,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),m=null}let Te=new Ed;Te.setAnimationLoop(ve),this.setAnimationLoop=function(Z){K=Z},this.dispose=function(){}}},Ay=new ut,Nd=new $e;Nd.set(-1,0,0,0,1,0,0,0,1);function Ry(n,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function i(p,g){g.color.getRGB(p.fogColor.value,Rh(n)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,_,M,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),d(p,g)):g.isMeshPhongMaterial?(r(p,g),u(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),f(p,g),g.isMeshPhysicalMaterial&&h(p,g,v)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),x(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(a(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?l(p,g,_,M):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===un&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===un&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let _=e.get(g),M=_.envMap,v=_.envMapRotation;M&&(p.envMap.value=M,p.envMapRotation.value.setFromMatrix4(Ay.makeRotationFromEuler(v)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Nd),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,_,M){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*_,p.scale.value=M*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function u(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function d(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function f(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function h(p,g,_){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===un&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function x(p,g){let _=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Cy(n,e,t,i){let s={},r={};function a(_,M){let v=M.program;i.uniformBlockBinding(_,v,s[_.id])}function o(_,M){let v=s[_.id];v===void 0&&(m(_),v=l(_),s[_.id]=v,_.addEventListener("dispose",p));let T=M.program;i.updateUBOMapping(_,T);let A=e.render.frame;r[_.id]!==A&&(c(_),r[_.id]=A)}function l(_){let M=n.createBuffer(),v=_.__size,T=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,v,T),n.bindBuffer(n.UNIFORM_BUFFER,null),M}function c(_){let M=s[_.id],v=_.uniforms,T=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let A=0,y=v.length;A<y;A++){let b=v[A];if(Array.isArray(b))for(let D=0,I=b.length;D<I;D++)u(b[D],A,D,T);else u(b,A,0,T)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(_,M,v,T){if(f(_,M,v,T)===!0){let A=_.__offset,y=_.value;if(Array.isArray(y)){let b=0;for(let D=0;D<y.length;D++){let I=y[D],U=x(I,!0);d(I,_.__data,b),b+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else d(y,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,A,_.__data)}}function d(_,M,v){typeof _=="number"||typeof _=="boolean"?M[v]=_:_.isMatrix3?(M[v]=_.elements[0],M[v+1]=_.elements[1],M[v+2]=_.elements[2],M[v+3]=0,M[v+4]=_.elements[3],M[v+5]=_.elements[4],M[v+6]=_.elements[5],M[v+7]=0,M[v+8]=_.elements[6],M[v+9]=_.elements[7],M[v+10]=_.elements[8],M[v+11]=0):ArrayBuffer.isView(_)?M.set(_.subarray(0,M.length-v),v):_.toArray(M,v)}function f(_,M,v,T){let A=_.value,y=M+"_"+v;if(Array.isArray(A)){T[y]===void 0&&(T[y]=[]);let b=T[y],D=!1;for(let I=0;I<A.length;I++)h(A[I],b,I)===!0&&(D=!0);return D}return h(A,T,y)}function h(_,M,v){if(M[v]===void 0)return typeof _=="number"||typeof _=="boolean"?M[v]=_:ArrayBuffer.isView(_)?M[v]=_.slice():M[v]=_.clone(),!0;{let T=M[v];if(typeof _=="number"||typeof _=="boolean"){if(T!==_)return M[v]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(T.equals(_)===!1)return T.copy(_),!0}}return!1}function m(_){let M=_.uniforms,v=0,T=16;for(let y=0,b=M.length;y<b;y++){let D=Array.isArray(M[y])?M[y]:[M[y]];for(let I=0,U=D.length;I<U;I++){let R=D[I],B=Array.isArray(R.value)?R.value:[R.value],L=Array.isArray(M[y])||Array.isArray(R.value),G=v;for(let w=0,z=B.length;w<z;w++){let H=B[w],$=x(H,L),K=v%T,ve=K%$.boundary,Te=K+ve;v+=ve,Te!==0&&T-Te<$.storage&&(v+=T-Te),w===0&&(G=v),v+=$.storage}let q=R.type==="int"?Int32Array:R.type==="uint"?Uint32Array:Float32Array;R.__data=new q((v-G)/Float32Array.BYTES_PER_ELEMENT),R.__offset=G}}let A=v%T;return A>0&&(v+=T-A),_.__size=v,_.__cache={},this}function x(_,M){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=16,v.storage=48):_.isMatrix4?(v.boundary=16,v.storage=64):_.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(v.boundary=16,v.storage=_.byteLength):We("WebGLRenderer: Unsupported uniform value type.",_),M===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function p(_){let M=_.target;M.removeEventListener("dispose",p),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function g(){for(let _ in s)n.deleteBuffer(s[_]);s={},r={}}return{bind:a,update:o,dispose:g}}var Iy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),_i=null;function Py(){return _i===null&&(_i=new Jr(Iy,16,16,ji,ci),_i.name="DFG_LUT",_i.minFilter=wn,_i.magFilter=wn,_i.wrapS=di,_i.wrapT=di,_i.generateMipmaps=!1,_i.needsUpdate=!0),_i}var Hl=class{constructor(e={}){let{canvas:t=Gf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=Nn}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;let x=h,p=new Set([ll,ol,al]),g=new Set([Nn,li,lr,gs,il,sl]),_=new Uint32Array(4),M=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},T=null,A=null,y=[],b=[],D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,U=!1,R=null,B=null,L=null,G=null;this._outputColorSpace=hn;let q=0,w=0,z=null,H=-1,$=null,K=new Ft,ve=new Ft,Te=null,Z=new Re(0),me=0,Ae=t.width,ze=t.height,Me=1,He=null,Lt=null,Xe=new Ft(0,0,Ae,ze),ct=new Ft(0,0,Ae,ze),ft=!1,ie=new Yi,ue=new Po,le=!1,we=!1,ye=new ut,nt=new P,Fe=new Ft,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},mt=!1;function St(){return z===null?Me:1}let O=i;function Zt(E,F){return t.getContext(E,F)}let ht,Rt,ge,Wt,Ve,Ze,C,S,X,se,ne,ce,xe,Q,j,fe,N,te,J,de,oe,he,Oe;try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",ke,!1),t.addEventListener("webglcontextrestored",rt,!1),t.addEventListener("webglcontextcreationerror",Se,!1),O===null){let F="webgl2";if(O=Zt(F,E),O===null)throw Zt(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ot()}catch(E){throw t.removeEventListener("webglcontextlost",ke,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),qe("WebGLRenderer: "+E.message),E}function ot(){ht=new Hx(O),ht.init(),oe=new Ey(O,ht),Rt=new Px(O,ht,e,oe),ge=new Sy(O,ht),Rt.reversedDepthBuffer&&f&&ge.buffers.depth.setReversed(!0),B=O.createFramebuffer(),L=O.createFramebuffer(),G=O.createFramebuffer(),Wt=new Wx(O),Ve=new ly,Ze=new by(O,ht,ge,Ve,Rt,oe,Wt),C=new Gx(I),S=new Ym(O),he=new Cx(O,S),X=new Vx(O,S,Wt,he),se=new Yx(O,X,S,he,Wt),te=new qx(O,Rt,Ze),j=new Lx(Ve),ne=new oy(I,C,ht,Rt,he,j),ce=new Ry(I,Ve),xe=new hy,Q=new gy(ht),N=new Rx(I,C,ge,se,m,l),fe=new My(I,se,Rt),Oe=new Cy(O,Wt,Rt,ge),J=new Ix(O,ht,Wt),de=new Xx(O,ht,Wt),Wt.programs=ne.programs,I.capabilities=Rt,I.extensions=ht,I.properties=Ve,I.renderLists=xe,I.shadowMap=fe,I.state=ge,I.info=Wt}x!==Nn&&(D=new $x(x,t.width,t.height,o,s,r));let re=new qh(I,O);this.xr=re,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let E=ht.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=ht.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Me},this.setPixelRatio=function(E){E!==void 0&&(Me=E,this.setSize(Ae,ze,!1))},this.getSize=function(E){return E.set(Ae,ze)},this.setSize=function(E,F,Y=!0){if(re.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}Ae=E,ze=F,t.width=Math.floor(E*Me),t.height=Math.floor(F*Me),Y===!0&&(t.style.width=E+"px",t.style.height=F+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(Ae*Me,ze*Me).floor()},this.setDrawingBufferSize=function(E,F,Y){Ae=E,ze=F,Me=Y,t.width=Math.floor(E*Y),t.height=Math.floor(F*Y),this.setViewport(0,0,E,F)},this.setEffects=function(E){if(x===Nn){qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let F=0;F<E.length;F++)if(E[F].isOutputPass===!0){We("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(K)},this.getViewport=function(E){return E.copy(Xe)},this.setViewport=function(E,F,Y,V){E.isVector4?Xe.set(E.x,E.y,E.z,E.w):Xe.set(E,F,Y,V),ge.viewport(K.copy(Xe).multiplyScalar(St()).round())},this.getScissor=function(E){return E.copy(ct)},this.setScissor=function(E,F,Y,V){E.isVector4?ct.set(E.x,E.y,E.z,E.w):ct.set(E,F,Y,V),ge.scissor(ve.copy(ct).multiplyScalar(St()).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(E){ge.setScissorTest(ft=E)},this.setOpaqueSort=function(E){He=E},this.setTransparentSort=function(E){Lt=E},this.getClearColor=function(E){return E.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,Y=!0){let V=0;if(E){let W=!1;if(z!==null){let _e=z.texture.format;W=p.has(_e)}if(W){let _e=z.texture.type,Ce=g.has(_e),pe=N.getClearColor(),Ee=N.getClearAlpha(),Ne=pe.r,je=pe.g,gt=pe.b;Ce?(_[0]=Ne,_[1]=je,_[2]=gt,_[3]=Ee,O.clearBufferuiv(O.COLOR,0,_)):(M[0]=Ne,M[1]=je,M[2]=gt,M[3]=Ee,O.clearBufferiv(O.COLOR,0,M))}else V|=O.COLOR_BUFFER_BIT}F&&(V|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(V|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&O.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),R=E},this.dispose=function(){t.removeEventListener("webglcontextlost",ke,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),N.dispose(),xe.dispose(),Q.dispose(),Ze.dispose(),Ve.dispose(),C.dispose(),se.dispose(),X.dispose(),he.dispose(),Oe.dispose(),ne.dispose(),re.dispose(),re.removeEventListener("sessionstart",gu),re.removeEventListener("sessionend",xu),ns.stop()};function ke(E){E.preventDefault(),Hr("WebGLRenderer: Context Lost."),U=!0}function rt(){Hr("WebGLRenderer: Context Restored."),U=!1;let E=Wt.autoReset,F=fe.enabled,Y=fe.autoUpdate,V=fe.needsUpdate,W=fe.type;ot(),Wt.autoReset=E,fe.enabled=F,fe.autoUpdate=Y,fe.needsUpdate=V,fe.type=W}function Se(E){qe("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function At(E){let F=E.target;F.removeEventListener("dispose",At),nn(F)}function nn(E){ki(E),Ve.remove(E)}function ki(E){let F=Ve.get(E).programs;F!==void 0&&(F.forEach(function(Y){ne.releaseProgram(Y)}),E.isShaderMaterial&&ne.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,Y,V,W,_e){F===null&&(F=dt);let Ce=W.isMesh&&W.matrixWorld.determinantAffine()<0,pe=Pp(E,F,Y,V,W);ge.setMaterial(V,Ce);let Ee=Y.index,Ne=1;if(V.wireframe===!0){if(Ee=X.getWireframeAttribute(Y),Ee===void 0)return;Ne=2}let je=Y.drawRange,gt=Y.attributes.position,Pe=je.start*Ne,xt=(je.start+je.count)*Ne;_e!==null&&(Pe=Math.max(Pe,_e.start*Ne),xt=Math.min(xt,(_e.start+_e.count)*Ne)),Ee!==null?(Pe=Math.max(Pe,0),xt=Math.min(xt,Ee.count)):gt!=null&&(Pe=Math.max(Pe,0),xt=Math.min(xt,gt.count));let $t=xt-Pe;if($t<0||$t===1/0)return;he.setup(W,V,pe,Y,Ee);let Pt,Ct=J;if(Ee!==null&&(Pt=S.get(Ee),Ct=de,Ct.setIndex(Pt)),W.isMesh)V.wireframe===!0?(ge.setLineWidth(V.wireframeLinewidth*St()),Ct.setMode(O.LINES)):Ct.setMode(O.TRIANGLES);else if(W.isLine){let pn=V.linewidth;pn===void 0&&(pn=1),ge.setLineWidth(pn*St()),W.isLineSegments?Ct.setMode(O.LINES):W.isLineLoop?Ct.setMode(O.LINE_LOOP):Ct.setMode(O.LINE_STRIP)}else W.isPoints?Ct.setMode(O.POINTS):W.isSprite&&Ct.setMode(O.TRIANGLES);if(W.isBatchedMesh)if(ht.get("WEBGL_multi_draw"))Ct.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let pn=W._multiDrawStarts,Le=W._multiDrawCounts,bn=W._multiDrawCount,Et=Ee?S.get(Ee).bytesPerElement:1,is=Ve.get(V).currentProgram.getUniforms();for(let mn=0;mn<bn;mn++)is.setValue(O,"_gl_DrawID",mn),Ct.render(pn[mn]/Et,Le[mn])}else if(W.isInstancedMesh)Ct.renderInstances(Pe,$t,W.count);else if(Y.isInstancedBufferGeometry){let pn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Le=Math.min(Y.instanceCount,pn);Ct.renderInstances(Pe,$t,Le)}else Ct.render(Pe,$t)};function mu(E,F,Y,V){R!==null&&E.isNodeMaterial&&R.setObject(V,E),le===!0&&j.setState(E,Y,!1),E.transparent===!0&&E.side===Cn&&E.forceSinglePass===!1?(E.side=un,E.needsUpdate=!0,Er(E,F,V),E.side=Qi,E.needsUpdate=!0,Er(E,F,V),E.side=Cn):Er(E,F,V)}this.compile=function(E,F,Y=null){Y===null&&(Y=E),R!==null&&R.renderStart(E,F,Y),A=Q.get(Y),A.init(F),b.push(A),Y.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(A.pushLight(W),W.castShadow&&A.pushShadow(W))}),E!==Y&&E.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(A.pushLight(W),W.castShadow&&A.pushShadow(W))}),A.setupLights(),R!==null&&R.updateLights(A.state.lightsArray),we=this.localClippingEnabled,le=j.init(this.clippingPlanes,we),le===!0&&j.setGlobalState(this.clippingPlanes,F),R!==null&&fe.render(A.state.shadowsArray,Y,F);let V=new Set;return E.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let _e=W.material;if(_e)if(Array.isArray(_e))for(let Ce=0;Ce<_e.length;Ce++){let pe=_e[Ce];mu(pe,Y,F,W),V.add(pe)}else mu(_e,Y,F,W),V.add(_e)}),A=b.pop(),R!==null&&R.renderEnd(),V},this.compileAsync=function(E,F,Y=null){let V=this.compile(E,F,Y);return new Promise(W=>{function _e(){if(V.forEach(function(Ce){let Ee=Ve.get(Ce).currentProgram;(Ee===void 0||Ee.isReady())&&V.delete(Ce)}),V.size===0){W(E);return}setTimeout(_e,10)}ht.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let yc=null;function Cp(E){yc&&yc(E)}function gu(){ns.stop()}function xu(){ns.start()}let ns=new Ed;ns.setAnimationLoop(Cp),typeof self<"u"&&ns.setContext(self),this.setAnimationLoop=function(E){yc=E,re.setAnimationLoop(E),E===null?ns.stop():ns.start()},re.addEventListener("sessionstart",gu),re.addEventListener("sessionend",xu),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;R!==null&&R.renderStart(E,F);let Y=re.enabled===!0&&re.isPresenting===!0,V=D!==null&&(z===null||Y)&&D.begin(I,z);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(F),F=re.getCamera()),E.isScene===!0&&E.onBeforeRender(I,E,F,z),A=Q.get(E,b.length),A.init(F),A.state.textureUnits=Ze.getTextureUnits(),b.push(A),ye.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?ue.setFromArrayCamera(F):ie.setFromProjectionMatrix(ye,Zn,F.reversedDepth),we=this.localClippingEnabled,le=j.init(this.clippingPlanes,we),T=xe.get(E,y.length),T.init(),y.push(T),this.info.render.frame++,re.enabled===!0&&re.isPresenting===!0){let Ce=I.xr.getDepthSensingMesh();Ce!==null&&vc(Ce,F,-1/0,I.sortObjects)}vc(E,F,0,I.sortObjects),T.finish(),R!==null&&R.updateLights(A.state.lightsArray),I.sortObjects===!0&&T.sort(He,Lt),mt=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,mt&&N.addToRenderList(T,E),this.info.autoReset===!0&&this.info.reset(),le===!0&&j.beginShadows();let W=A.state.shadowsArray;if(fe.render(W,E,F),le===!0&&j.endShadows(),(V&&D.hasRenderPass())===!1){let Ce=T.opaque,pe=T.transmissive;if(A.setupLights(),F.isArrayCamera){let Ee=F.cameras;if(pe.length>0)for(let Ne=0,je=Ee.length;Ne<je;Ne++){let gt=Ee[Ne];yu(Ce,pe,E,gt)}mt&&N.render(E);for(let Ne=0,je=Ee.length;Ne<je;Ne++){let gt=Ee[Ne];_u(T,E,gt,gt.viewport)}}else pe.length>0&&yu(Ce,pe,E,F),mt&&N.render(E),_u(T,E,F)}z!==null&&w===0&&(Ze.updateMultisampleRenderTarget(z),Ze.updateRenderTargetMipmap(z)),V&&D.end(I),E.isScene===!0&&E.onAfterRender(I,E,F),he.resetDefaultState(),H=-1,$=null,b.pop(),b.length>0?(A=b[b.length-1],Ze.setTextureUnits(A.state.textureUnits),le===!0&&j.setGlobalState(I.clippingPlanes,A.state.camera)):A=null,y.pop(),y.length>0?T=y[y.length-1]:T=null,R!==null&&R.renderEnd()};function vc(E,F,Y,V){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)Y=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)A.pushLight(E),E.castShadow&&A.pushShadow(E);else if(E.isSprite){let Ce=F.isArrayCamera?ue:ie;if(!E.frustumCulled||E.intersectsFrustum(Ce)){V&&Fe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ye);let pe=se.update(E),Ee=E.material;Ee.visible&&T.push(E,pe,Ee,Y,Fe.z,null,F)}}else if(E.isMesh||E.isLine||E.isPoints){let Ce=F.isArrayCamera?ue:ie;if(!E.frustumCulled||E.intersectsFrustum(Ce)){let pe=se.update(E),Ee=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Fe.copy(E.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Fe.copy(pe.boundingSphere.center)),Fe.applyMatrix4(E.matrixWorld).applyMatrix4(ye)),Array.isArray(Ee)){let Ne=pe.groups;for(let je=0,gt=Ne.length;je<gt;je++){let Pe=Ne[je],xt=Ee[Pe.materialIndex];xt&&xt.visible&&T.push(E,pe,xt,Y,Fe.z,Pe,F)}}else Ee.visible&&T.push(E,pe,Ee,Y,Fe.z,null,F)}}}let _e=E.children;for(let Ce=0,pe=_e.length;Ce<pe;Ce++)vc(_e[Ce],F,Y,V)}function _u(E,F,Y,V){let{opaque:W,transmissive:_e,transparent:Ce}=E;A.setupLightsView(Y),le===!0&&j.setGlobalState(I.clippingPlanes,Y),V&&ge.viewport(K.copy(V)),W.length>0&&za(W,F,Y),_e.length>0&&za(_e,F,Y),Ce.length>0&&za(Ce,F,Y),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function yu(E,F,Y,V){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[V.id]===void 0){let Pe=ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[V.id]=new Bn(1,1,{generateMipmaps:!0,type:Pe?ci:Nn,minFilter:Ni,samples:Math.max(4,Rt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:_t.workingColorSpace})}let _e=A.state.transmissionRenderTarget[V.id],Ce=V.viewport||K;_e.setSize(Ce.z*I.transmissionResolutionScale,Ce.w*I.transmissionResolutionScale);let pe=I.getRenderTarget(),Ee=I.getActiveCubeFace(),Ne=I.getActiveMipmapLevel();I.setRenderTarget(_e),I.getClearColor(Z),me=I.getClearAlpha(),me<1&&I.setClearColor(16777215,.5),I.clear(),mt&&N.render(Y);let je=I.toneMapping;I.toneMapping=xi;let gt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),A.setupLightsView(V),le===!0&&j.setGlobalState(I.clippingPlanes,V),za(E,Y,V),Ze.updateMultisampleRenderTarget(_e),Ze.updateRenderTargetMipmap(_e),ht.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let xt=0,$t=F.length;xt<$t;xt++){let Pt=F[xt],{object:Ct,geometry:pn,material:Le,group:bn}=Pt;if(Le.side===Cn&&Ct.layers.test(V.layers)){let Et=Le.side;Le.side=un,Le.needsUpdate=!0,vu(Ct,Y,V,pn,Le,bn),Le.side=Et,Le.needsUpdate=!0,Pe=!0}}Pe===!0&&(Ze.updateMultisampleRenderTarget(_e),Ze.updateRenderTargetMipmap(_e))}I.setRenderTarget(pe,Ee,Ne),I.setClearColor(Z,me),gt!==void 0&&(V.viewport=gt),I.toneMapping=je}function za(E,F,Y){let V=F.isScene===!0?F.overrideMaterial:null;for(let W=0,_e=E.length;W<_e;W++){let Ce=E[W],{object:pe,geometry:Ee,group:Ne}=Ce,je=Ce.material;je.allowOverride===!0&&V!==null&&(je=V),pe.layers.test(Y.layers)&&vu(pe,F,Y,Ee,je,Ne)}}function vu(E,F,Y,V,W,_e){R!==null&&W.isNodeMaterial&&R.setObject(E,W),E.onBeforeRender(I,F,Y,V,W,_e),E.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(I,F,Y,V,E,_e),W.transparent===!0&&W.side===Cn&&W.forceSinglePass===!1?(W.side=un,W.needsUpdate=!0,I.renderBufferDirect(Y,F,V,W,E,_e),W.side=Qi,W.needsUpdate=!0,I.renderBufferDirect(Y,F,V,W,E,_e),W.side=Cn):I.renderBufferDirect(Y,F,V,W,E,_e),E.onAfterRender(I,F,Y,V,W,_e)}function Mu(E){let F=0;for(let Y of E)Y.texture!==null&&F++;return F}function Er(E,F,Y){F.isScene!==!0&&(F=dt);let V=Ve.get(E),W=A.state.lights,_e=A.state.shadowsArray,Ce=W.state.version,pe=ne.getParameters(E,W.state,_e,F,Y,A.state.lightProbeGridArray),Ee=ne.getProgramCacheKey(pe),Ne=V.programs;V.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?F.environment:null,V.fog=F.fog;let je=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;V.envMap=C.get(E.envMap||V.environment,je),V.envMapRotation=V.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Ne===void 0&&(E.addEventListener("dispose",At),Ne=new Map,V.programs=Ne,V.programVariants=new Map);let gt=Ne.get(Ee);if(gt!==void 0){if(V.currentProgram===gt&&V.lightsStateVersion===Ce)return bu(E,pe),gt}else pe.uniforms=ne.getUniforms(E),R!==null&&E.isNodeMaterial&&R.build(E,Y,pe),E.onBeforeCompile(pe,I),gt=ne.acquireProgram(pe,Ee),Ne.set(Ee,gt),V.uniforms=pe.uniforms;let Pe=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Pe.clippingPlanes=j.uniform),bu(E,pe),V.needsLights=Dp(E),V.lightsStateVersion=Ce,V.needsLights&&(Pe.ambientLightColor.value=W.state.ambient,Pe.lightProbe.value=W.state.probe,Pe.sunLights.value=W.state.sun,Pe.sunLightShadows.value=W.state.sunShadow,Pe.directionalLights.value=W.state.directional,Pe.directionalLightShadows.value=W.state.directionalShadow,Pe.spotLights.value=W.state.spot,Pe.spotLightShadows.value=W.state.spotShadow,Pe.rectAreaLights.value=W.state.rectArea,Pe.ltc_1.value=W.state.rectAreaLTC1,Pe.ltc_2.value=W.state.rectAreaLTC2,Pe.pointLights.value=W.state.point,Pe.pointLightShadows.value=W.state.pointShadow,Pe.hemisphereLights.value=W.state.hemi,Pe.sunShadowMatrix.value=W.state.sunShadowMatrix,Pe.sunShadowCascade.value=W.state.sunShadowCascade,Pe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Pe.spotLightMatrix.value=W.state.spotLightMatrix,Pe.spotLightMap.value=W.state.spotLightMap,Pe.pointShadowMatrix.value=W.state.pointShadowMatrix),V.numLightProbeGrids=Mu(A.state.lightProbeGridArray),V.currentProgram=gt,V.uniformsList=null,gt}function Ip(E,F,Y,V,W){let _e=Ve.get(E),Ce=_e.currentProgram.id+","+V+","+W,pe=_e.programVariants.get(Ce);return pe===void 0?(pe=Er(E,F,Y),_e.programVariants.set(Ce,pe)):(_e.currentProgram=pe,_e.uniformsList=null,_e.outputColorSpace=V,_e.toneMapping=W),pe}function Su(E){if(E.uniformsList===null){let F=E.currentProgram.getUniforms();E.uniformsList=hr.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function bu(E,F){let Y=Ve.get(E);Y.outputColorSpace=F.outputColorSpace,Y.batching=F.batching,Y.batchingColor=F.batchingColor,Y.instancing=F.instancing,Y.instancingColor=F.instancingColor,Y.instancingMorph=F.instancingMorph,Y.skinning=F.skinning,Y.morphTargets=F.morphTargets,Y.morphNormals=F.morphNormals,Y.morphColors=F.morphColors,Y.morphTargetsCount=F.morphTargetsCount,Y.numClippingPlanes=F.numClippingPlanes,Y.numIntersection=F.numClipIntersection,Y.vertexAlphas=F.vertexAlphas,Y.vertexTangents=F.vertexTangents,Y.toneMapping=F.toneMapping}function Pp(E,F,Y,V,W){F.isScene!==!0&&(F=dt),Ze.resetTextureUnits();let _e=F.fog,Ce=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?F.environment:null,pe=z===null?I.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:_t.workingColorSpace,Ee=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ne=C.get(V.envMap||Ce,Ee),je=V.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,gt=!!Y.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Pe=!!Y.morphAttributes.position,xt=!!Y.morphAttributes.normal,$t=!!Y.morphAttributes.color,Pt=xi;V.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Pt=I.toneMapping);let Ct=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,pn=Ct!==void 0?Ct.length:0,Le=Ve.get(V),bn=A.state.lights;if(le===!0&&(we===!0||E!==$)){let kt=E===$&&V.id===H;j.setState(V,E,kt)}let Et=!1,is=!1;V.version===Le.__version?Le.needsLights&&Le.lightsStateVersion!==bn.state.version||W.isBatchedMesh&&Le.batching===!1||!W.isBatchedMesh&&Le.batching===!0||W.isBatchedMesh&&Le.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Le.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Le.instancing===!1||!W.isInstancedMesh&&Le.instancing===!0||W.isSkinnedMesh&&Le.skinning===!1||!W.isSkinnedMesh&&Le.skinning===!0||W.isInstancedMesh&&Le.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Le.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Le.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Le.instancingMorph===!1&&W.morphTexture!==null||Le.envMap!==Ne||V.fog===!0&&Le.fog!==_e||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==j.numPlanes||Le.numIntersection!==j.numIntersection)||Le.vertexAlphas!==je||Le.vertexTangents!==gt||Le.morphTargets!==Pe||Le.morphNormals!==xt||Le.morphColors!==$t||Le.morphTargetsCount!==pn||Le.numLightProbeGrids!==Mu(A.state.lightProbeGridArray)?Et=!0:(Le.outputColorSpace!==pe||Le.toneMapping!==Pt)&&(is=!0):(Et=!0,Le.__version=V.version);let mn=Le.currentProgram;(Et===!0||is===!0)&&(mn=is===!0?Ip(V,F,W,pe,Pt):Er(V,F,W),R&&V.isNodeMaterial&&R.onUpdateProgram(V,mn,Le));let ka=!1,Gi=!1,ss=!1,Mt=mn.getUniforms(),cn=Le.uniforms;if(ge.useProgram(mn.program)&&(ka=!0,Gi=!0,ss=!0),V.id!==H&&(H=V.id,Gi=!0),ka||$!==E){ge.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Mt.setValue(O,"projectionMatrix",E.projectionMatrix),Mt.setValue(O,"viewMatrix",E.matrixWorldInverse);let sn=Mt.map.cameraPosition;sn!==void 0&&sn.setValue(O,nt.setFromMatrixPosition(E.matrixWorld)),Rt.logarithmicDepthBuffer&&Mt.setValue(O,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Mt.setValue(O,"isOrthographic",E.isOrthographicCamera===!0),$!==E&&($=E,Gi=!0,ss=!0)}if(Le.needsLights&&(bn.state.sunShadowMap.length>0&&Mt.setValue(O,"sunShadowMap",bn.state.sunShadowMap,Ze),bn.state.directionalShadowMap.length>0&&Mt.setValue(O,"directionalShadowMap",bn.state.directionalShadowMap,Ze),bn.state.spotShadowMap.length>0&&Mt.setValue(O,"spotShadowMap",bn.state.spotShadowMap,Ze),bn.state.pointShadowMap.length>0&&Mt.setValue(O,"pointShadowMap",bn.state.pointShadowMap,Ze)),W.isSkinnedMesh){Mt.setOptional(O,W,"bindMatrix"),Mt.setOptional(O,W,"bindMatrixInverse");let kt=W.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),Mt.setValue(O,"boneTexture",kt.boneTexture,Ze))}W.isBatchedMesh&&(Mt.setOptional(O,W,"batchingTexture"),Mt.setValue(O,"batchingTexture",W._matricesTexture,Ze),Mt.setOptional(O,W,"batchingIdTexture"),Mt.setValue(O,"batchingIdTexture",W._indirectTexture,Ze),Mt.setOptional(O,W,"batchingColorTexture"),W._colorsTexture!==null&&Mt.setValue(O,"batchingColorTexture",W._colorsTexture,Ze));let ni=Y.morphAttributes;if((ni.position!==void 0||ni.normal!==void 0||ni.color!==void 0)&&te.update(W,Y,mn),(Gi||Le.receiveShadow!==W.receiveShadow)&&(Le.receiveShadow=W.receiveShadow,Mt.setValue(O,"receiveShadow",W.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&F.environment!==null&&(cn.envMapIntensity.value=F.environmentIntensity),cn.dfgLUT!==void 0&&(cn.dfgLUT.value=Py()),Gi){if(Mt.setValue(O,"toneMappingExposure",I.toneMappingExposure),Le.needsLights&&Lp(cn,ss),_e&&V.fog===!0&&ce.refreshFogUniforms(cn,_e),ce.refreshMaterialUniforms(cn,V,Me,ze,A.state.transmissionRenderTarget[E.id]),Le.needsLights&&Le.numLightProbeGrids>0){let kt=v,sn=0;for(let Si of A.state.lightProbeGridArray)Si.texture!==null&&(kt.textures[sn]=Si.texture,kt.min[sn]=Si.boundingBox.min,kt.max[sn]=Si.boundingBox.max,kt.resolution[sn]=Si.resolution,sn++);for(let Si in kt)kt[Si].length=sn;cn.probesSH.value=kt.textures,cn.probesMin.value=kt.min,cn.probesMax.value=kt.max,cn.probesResolution.value=kt.resolution}hr.upload(O,Su(Le),cn,Ze)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(hr.upload(O,Su(Le),cn,Ze),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Mt.setValue(O,"center",W.center),Mt.setValue(O,"modelViewMatrix",W.modelViewMatrix),Mt.setValue(O,"normalMatrix",W.normalMatrix),Mt.setValue(O,"modelMatrix",W.matrixWorld),V.uniformsGroups!==void 0){let kt=V.uniformsGroups;for(let sn=0,Si=kt.length;sn<Si;sn++){let Tu=kt[sn];Oe.update(Tu,mn),Oe.bind(Tu,mn)}}return mn}function Lp(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.sunLights.needsUpdate=F,E.sunLightShadows.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function Dp(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(E,F,Y){let V=Ve.get(E);V.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),Ve.get(E.texture).__webglTexture=F,Ve.get(E.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:Y,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,F){let Y=Ve.get(E);Y.__webglFramebuffer=F,Y.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,Y=0){z=E,q=F,w=Y;let V=null,W=!1,_e=!1;if(E){let pe=Ve.get(E);if(pe.__useDefaultFramebuffer!==void 0){ge.bindFramebuffer(O.FRAMEBUFFER,pe.__webglFramebuffer),K.copy(E.viewport),ve.copy(E.scissor),Te=E.scissorTest,ge.viewport(K),ge.scissor(ve),ge.setScissorTest(Te),H=-1;return}else if(pe.__webglFramebuffer===void 0)Ze.setupRenderTarget(E);else if(pe.__hasExternalTextures)Ze.rebindTextures(E,Ve.get(E.texture).__webglTexture,Ve.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let je=E.depthTexture;if(pe.__boundDepthTexture!==je){if(je!==null&&Ve.has(je)&&(E.width!==je.image.width||E.height!==je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ze.setupDepthRenderbuffer(E)}}let Ee=E.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(_e=!0);let Ne=Ve.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ne[F])?V=Ne[F][Y]:V=Ne[F],W=!0):E.samples>0&&Ze.useMultisampledRTT(E)===!1?V=Ve.get(E).__webglMultisampledFramebuffer:Array.isArray(Ne)?V=Ne[Y]:V=Ne,K.copy(E.viewport),ve.copy(E.scissor),Te=E.scissorTest}else K.copy(Xe).multiplyScalar(Me).floor(),ve.copy(ct).multiplyScalar(Me).floor(),Te=ft;if(Y!==0&&(V=B),ge.bindFramebuffer(O.FRAMEBUFFER,V)&&ge.drawBuffers(E,V),ge.viewport(K),ge.scissor(ve),ge.setScissorTest(Te),W){let pe=Ve.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+F,pe.__webglTexture,Y)}else if(_e){let pe=F;for(let Ee=0;Ee<E.textures.length;Ee++){let Ne=Ve.get(E.textures[Ee]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Ee,Ne.__webglTexture,Y,pe)}}else if(E!==null&&Y!==0){let pe=Ve.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,pe.__webglTexture,Y)}H=-1};function Eu(E){let F=Ve.get(E);return(F.__readFormat!==E.format||F.__readType!==E.type)&&(F.__readFormat=E.format,F.__readType=E.type,F.__formatReadable=Rt.textureFormatReadable(E.format),F.__typeReadable=Rt.textureTypeReadable(E.type)),F}this.readRenderTargetPixels=function(E,F,Y,V,W,_e,Ce,pe=0){if(!(E&&E.isWebGLRenderTarget)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Ve.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ee=Ee[Ce],Array.isArray(Ee)&&(Ee=Ee[0])),Ee){ge.bindFramebuffer(O.FRAMEBUFFER,Ee);try{let Ne=E.textures[pe],je=Ne.format,gt=Ne.type;E.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+pe);let Pe=Eu(Ne);if(Pe.__formatReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pe.__typeReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-V&&Y>=0&&Y<=E.height-W&&O.readPixels(F,Y,V,W,oe.convert(je),oe.convert(gt),_e)}finally{let Ne=z!==null?Ve.get(z).__webglFramebuffer:null;ge.bindFramebuffer(O.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(E,F,Y,V,W,_e,Ce,pe=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=Ve.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ee=Ee[Ce],Array.isArray(Ee)&&(Ee=Ee[0])),Ee)if(F>=0&&F<=E.width-V&&Y>=0&&Y<=E.height-W){ge.bindFramebuffer(O.FRAMEBUFFER,Ee);let Ne=E.textures[pe],je=Ne.format,gt=Ne.type;E.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+pe);let Pe=Eu(Ne);if(Pe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let xt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,xt),O.bufferData(O.PIXEL_PACK_BUFFER,_e.byteLength,O.STREAM_READ),O.readPixels(F,Y,V,W,oe.convert(je),oe.convert(gt),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let $t=z!==null?Ve.get(z).__webglFramebuffer:null;ge.bindFramebuffer(O.FRAMEBUFFER,$t);let Pt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Vf(O,Pt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,xt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,_e),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(xt),O.deleteSync(Pt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,F=null,Y=0){let V=Math.pow(2,-Y),W=Math.floor(E.image.width*V),_e=Math.floor(E.image.height*V),Ce=F!==null?F.x:0,pe=F!==null?F.y:0;Ze.setTexture2D(E,0),O.copyTexSubImage2D(O.TEXTURE_2D,Y,0,0,Ce,pe,W,_e),ge.unbindTexture()},this.copyTextureToTexture=function(E,F,Y=null,V=null,W=0,_e=0){let Ce,pe,Ee,Ne,je,gt,Pe,xt,$t,Pt=E.isCompressedTexture?E.mipmaps[_e]:E.image;if(Y!==null)Ce=Y.max.x-Y.min.x,pe=Y.max.y-Y.min.y,Ee=Y.isBox3?Y.max.z-Y.min.z:1,Ne=Y.min.x,je=Y.min.y,gt=Y.isBox3?Y.min.z:0;else{let Mt=Math.pow(2,-W);Ce=Math.floor(Pt.width*Mt),pe=Math.floor(Pt.height*Mt),E.isDataArrayTexture?Ee=Pt.depth:E.isData3DTexture?Ee=Math.floor(Pt.depth*Mt):Ee=1,Ne=0,je=0,gt=0}V!==null?(Pe=V.x,xt=V.y,$t=V.z):(Pe=0,xt=0,$t=0);let Ct=oe.convert(F.format),pn=oe.convert(F.type),Le;F.isData3DTexture?(Ze.setTexture3D(F,0),Le=O.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Ze.setTexture2DArray(F,0),Le=O.TEXTURE_2D_ARRAY):(Ze.setTexture2D(F,0),Le=O.TEXTURE_2D),ge.activeTexture(O.TEXTURE0),ge.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,F.flipY),ge.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),ge.pixelStorei(O.UNPACK_ALIGNMENT,F.unpackAlignment);let bn=ge.getParameter(O.UNPACK_ROW_LENGTH),Et=ge.getParameter(O.UNPACK_IMAGE_HEIGHT),is=ge.getParameter(O.UNPACK_SKIP_PIXELS),mn=ge.getParameter(O.UNPACK_SKIP_ROWS),ka=ge.getParameter(O.UNPACK_SKIP_IMAGES);ge.pixelStorei(O.UNPACK_ROW_LENGTH,Pt.width),ge.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Pt.height),ge.pixelStorei(O.UNPACK_SKIP_PIXELS,Ne),ge.pixelStorei(O.UNPACK_SKIP_ROWS,je),ge.pixelStorei(O.UNPACK_SKIP_IMAGES,gt);let Gi=E.isDataArrayTexture||E.isData3DTexture,ss=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){let Mt=Ve.get(E),cn=Ve.get(F),ni=Ve.get(Mt.__renderTarget),kt=Ve.get(cn.__renderTarget);ge.bindFramebuffer(O.READ_FRAMEBUFFER,ni.__webglFramebuffer),ge.bindFramebuffer(O.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let sn=0;sn<Ee;sn++)Gi&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ve.get(E).__webglTexture,W,gt+sn),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ve.get(F).__webglTexture,_e,$t+sn)),O.blitFramebuffer(Ne,je,Ne+Ce,je+pe,Pe,xt,Pe+Ce,xt+pe,O.DEPTH_BUFFER_BIT,O.NEAREST);ge.bindFramebuffer(O.READ_FRAMEBUFFER,null),ge.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(W!==0||E.isRenderTargetTexture||Ve.has(E)){let Mt=Ve.get(E),cn=Ve.get(F);ge.bindFramebuffer(O.READ_FRAMEBUFFER,L),ge.bindFramebuffer(O.DRAW_FRAMEBUFFER,G);for(let ni=0;ni<Ee;ni++)Gi?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Mt.__webglTexture,W,gt+ni):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Mt.__webglTexture,W),ss?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,cn.__webglTexture,_e,$t+ni):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,cn.__webglTexture,_e),W!==0?O.blitFramebuffer(Ne,je,Ne+Ce,je+pe,Pe,xt,Pe+Ce,xt+pe,O.COLOR_BUFFER_BIT,O.NEAREST):ss?O.copyTexSubImage3D(Le,_e,Pe,xt,$t+ni,Ne,je,Ce,pe):O.copyTexSubImage2D(Le,_e,Pe,xt,Ne,je,Ce,pe);ge.bindFramebuffer(O.READ_FRAMEBUFFER,null),ge.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ss?E.isDataTexture||E.isData3DTexture?O.texSubImage3D(Le,_e,Pe,xt,$t,Ce,pe,Ee,Ct,pn,Pt.data):F.isCompressedArrayTexture?O.compressedTexSubImage3D(Le,_e,Pe,xt,$t,Ce,pe,Ee,Ct,Pt.data):O.texSubImage3D(Le,_e,Pe,xt,$t,Ce,pe,Ee,Ct,pn,Pt):E.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,_e,Pe,xt,Ce,pe,Ct,pn,Pt.data):E.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,_e,Pe,xt,Pt.width,Pt.height,Ct,Pt.data):O.texSubImage2D(O.TEXTURE_2D,_e,Pe,xt,Ce,pe,Ct,pn,Pt);ge.pixelStorei(O.UNPACK_ROW_LENGTH,bn),ge.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Et),ge.pixelStorei(O.UNPACK_SKIP_PIXELS,is),ge.pixelStorei(O.UNPACK_SKIP_ROWS,mn),ge.pixelStorei(O.UNPACK_SKIP_IMAGES,ka),_e===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&O.generateMipmap(Le),ge.unbindTexture()},this.initRenderTarget=function(E){Ve.get(E).__webglFramebuffer===void 0&&Ze.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Ze.setTextureCube(E,0):E.isData3DTexture?Ze.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ze.setTexture2DArray(E,0):Ze.setTexture2D(E,0),ge.unbindTexture()},this.resetState=function(){q=0,w=0,z=null,ge.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=_t._getDrawingBufferColorSpace(e),t.unpackColorSpace=_t._getUnpackColorSpace()}};function dr(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new Nt;l.morphTargetsRelative=o;let c=0;for(let u=0;u<n.length;++u){let d=n[u],f=0,h=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in d.attributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(d.attributes[m]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in d.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[m].length!==n[0].morphAttributes[m].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+m+'" morph attribute.'),null;a[m]===void 0&&(a[m]=[]),a[m].push(d.morphAttributes[m]),h++}if(h!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(e){let m;if(t)m=d.index.count;else if(d.attributes.position!==void 0)m=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,u),c+=m}}if(t){let u=0,d=[];for(let f=0;f<n.length;++f){let h=n[f].index;for(let m=0;m<h.count;++m)d.push(h.getX(m)+u);u+=n[f].attributes.position.count}l.setIndex(d)}for(let u in r){let d=Ud(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(let u in a){let d=a[u][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<d;++f){let h=[];for(let x=0;x<a[u].length;++x)h.push(a[u][x][f]);let m=Ud(h);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(m)}}}return l}function Ud(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let a=new e(r),o=new jt(a,t,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let d=l/t;for(let f=0,h=u.count;f<h;f++)for(let m=0;m<t;m++){let x=u.getComponent(f,m);o.setComponent(f+d,m,x)}}else a.set(u.array,l);l+=u.count*t}return s!==void 0&&(o.gpuType=s),o}var Fd=new ut,Od=new _n,Bd=new Rn,zd=new P,kd=new P;function Je(n,e,t=0,i=0,s=0,r=0,a=0,o=0,l=1,c=1,u=1){let d=n.index?n.toNonIndexed():n.clone();Bd.set(r,a,o),Od.setFromEuler(Bd),kd.set(t,i,s),zd.set(l,c,u),Fd.compose(kd,Od,zd),d.applyMatrix4(Fd);let f=new Re(e),h=d.attributes.position.count,m=new Float32Array(h*3);for(let x=0;x<h;x++)m[x*3]=f.r,m[x*3+1]=f.g,m[x*3+2]=f.b;return d.setAttribute("color",new jt(m,3)),d.attributes.uv||d.setAttribute("uv",new jt(new Float32Array(h*2),2)),d}function Un(n){return dr(n,!1)}var Hn=new Be(1,1,1),Yt=(n,e,t,i=7)=>new st(n,e,t,i),Oi=(n,e=0)=>new gi(n,e),Yh=(n,e,t=6)=>new Ln(n,e,t),Gd={tree:()=>Un([Je(Yt(.16,.22,2.6),"#6b4a2e",0,1.3,0),Je(Oi(1.6,1),"#4f8f3a",0,3.4,0,0,0,0,1,.9,1),Je(Oi(1.1,1),"#5fa244",.6,4.1,.3),Je(Oi(1,1),"#467f33",-.7,3.7,-.4)]),palm:()=>{let n=[Je(Yt(.16,.24,3.2),"#9c7a52",0,1.6,0,0,0,.05),Je(Yt(.12,.16,3.2),"#a78457",.16,4.7,0,0,0,.12),Je(Oi(.35,0),"#7a5a33",.36,6.3,0)];for(let e=0;e<8;e++){let t=e/8*Math.PI*2;n.push(Je(Yh(.35,3.2,4),e%2?"#3f8f3a":"#4ea545",.36+Math.cos(t)*1.4,6,Math.sin(t)*1.4,Math.sin(t)*1.25,0,-Math.cos(t)*1.25,1,1,.25))}return Un(n)},car:()=>Un([Je(Hn,"#ffffff",0,.62,0,0,0,0,1.8,.7,4.3),Je(Hn,"#ffffff",0,1.18,-.15,0,0,0,1.6,.55,2.2),Je(Hn,"#26313d",0,1.2,-.15,0,0,0,1.64,.4,2),Je(Yt(.34,.34,.25,6),"#151515",.85,.34,1.35,0,0,Math.PI/2),Je(Yt(.34,.34,.25,6),"#151515",-.85,.34,1.35,0,0,Math.PI/2),Je(Yt(.34,.34,.25,6),"#151515",.85,.34,-1.35,0,0,Math.PI/2),Je(Yt(.34,.34,.25,6),"#151515",-.85,.34,-1.35,0,0,Math.PI/2)]),lamp:()=>Un([Je(Yt(.07,.1,6,6),"#3b4148",0,3,0),Je(Hn,"#3b4148",.6,6,0,0,0,0,1.3,.1,.12),Je(Hn,"#fff4c8",1.15,5.9,0,0,0,0,.45,.14,.3)]),waterTower:()=>{let n=[Je(Yt(1.6,1.6,3.2,10),"#7a5638",0,4.2,0),Je(Yh(1.75,1.3,10),"#4a3a2c",0,6.45,0)];for(let[e,t]of[[1,1],[-1,1],[1,-1],[-1,-1]])n.push(Je(Yt(.07,.07,2.6,4),"#3a2f28",e*1.1,1.3,t*1.1));return Un(n)},sage:()=>Un([Je(Oi(.6,0),"#8a9a6a",0,.35,0,0,0,0,1,.6,1),Je(Oi(.45,0),"#77885a",.4,.3,.2)]),joshua:()=>{let n=[Je(Yt(.18,.26,3,5),"#7b6a4f",0,1.5,0)];for(let e=0;e<4;e++){let t=e*1.7,i=Math.cos(t)*.7,s=Math.sin(t)*.7;n.push(Je(Yt(.11,.14,1.6,5),"#7b6a4f",i*.6,3.2,s*.6,s*.8,0,-i*.8)),n.push(Je(Oi(.4,0),"#5a7a3e",i*1.2,4,s*1.2,0,0,0,.8,1.3,.8))}return Un(n)},rock:()=>Un([Je(Oi(1,0),"#a6876a",0,.4,0,0,0,0,1.3,.7,1),Je(Oi(.6,0),"#957659",.8,.25,.4)]),cactus:()=>Un([Je(Yt(.25,.3,3,7),"#4c8a4a",0,1.5,0),Je(Yt(.15,.15,1.1,6),"#4c8a4a",.5,1.7,0,0,0,Math.PI/2),Je(Yt(.15,.15,1,6),"#4c8a4a",.95,2.2,0)]),bench:()=>Un([Je(Hn,"#7a5a3a",0,.45,0,0,0,0,1.8,.08,.5),Je(Hn,"#7a5a3a",0,.75,-.23,0,0,0,1.8,.4,.06),Je(Hn,"#333",.8,.22,0,0,0,0,.08,.45,.45),Je(Hn,"#333",-.8,.22,0,0,0,0,.08,.45,.45)]),umbrella:()=>Un([Je(Yt(.04,.04,2.3,5),"#ddd",0,1.15,0),Je(Yh(1.4,.6,8),"#ffffff",0,2.35,0),Je(Yt(.5,.5,.05,8),"#eee",0,.75,0),Je(Yt(.05,.05,.75,5),"#ccc",0,.37,0)]),flood:()=>Un([Je(Yt(.12,.16,9,6),"#555b63",0,4.5,0),Je(Hn,"#3a3f45",0,9,0,0,0,0,1.6,.6,.4),Je(Hn,"#fffbe8",0,9,.21,0,0,0,1.4,.45,.02)]),ac:()=>Un([Je(Hn,"#b8bcc0",0,.7,0,0,0,0,2.4,1.4,1.8),Je(Yt(.6,.6,.1,10),"#555",0,1.42,.2)]),flag:()=>Un([Je(Yt(.04,.05,7,5),"#ccc",0,3.5,0),Je(Hn,"#ffffff",.62,6.4,0,0,0,0,1.2,.8,.03)])};var Zh=class{constructor(){this.p=[],this.n=[],this.uv=[],this.c=[],this.i=[]}quad(e,t,i,s,r,a){let o=this.p.length/3,l=t[0]-e[0],c=t[1]-e[1],u=t[2]-e[2],d=i[0]-e[0],f=i[1]-e[1],h=i[2]-e[2],m=c*h-u*f,x=u*d-l*h,p=l*f-c*d,g=Math.hypot(m,x,p)||1;m/=g,x/=g,p/=g;for(let _ of[e,t,i,s])this.p.push(_[0],_[1],_[2]),this.n.push(m,x,p),this.c.push(r.r,r.g,r.b);for(let _=0;_<8;_++)this.uv.push(a?a[_]:.01);this.i.push(o,o+1,o+2,o,o+2,o+3)}tri(e,t,i,s){let r=this.p.length/3,a=t[0]-e[0],o=t[1]-e[1],l=t[2]-e[2],c=i[0]-e[0],u=i[1]-e[1],d=i[2]-e[2],f=o*d-l*u,h=l*c-a*d,m=a*u-o*c,x=Math.hypot(f,h,m)||1;f/=x,h/=x,m/=x;for(let p of[e,t,i])this.p.push(p[0],p[1],p[2]),this.n.push(f,h,m),this.c.push(s.r,s.g,s.b),this.uv.push(.01,.01);this.i.push(r,r+1,r+2)}geometry(){let e=new Nt;return e.setAttribute("position",new et(this.p,3)),e.setAttribute("normal",new et(this.n,3)),e.setAttribute("uv",new et(this.uv,2)),e.setAttribute("color",new et(this.c,3)),e.setIndex(this.i),e.computeBoundingSphere(),e}get empty(){return this.i.length===0}},Vd=160,$h=(n,e,t=Vd)=>Math.floor(n/t)+","+Math.floor(e/t),Ly=Vd*3,_s=class{constructor(){this.cells=new Map}_cell(e,t){let i=$h(e,t),s=this.cells.get(i);return s||(s=new Zh,this.cells.set(i,s)),s}quad(e,t,i,s,r,a){this._cell((e[0]+i[0])/2,(e[2]+i[2])/2).quad(e,t,i,s,r,a)}tri(e,t,i,s){this._cell((e[0]+t[0]+i[0])/3,(e[2]+t[2]+i[2])/3).tri(e,t,i,s)}geometries(){let e=[];for(let t of this.cells.values())t.empty||e.push(t.geometry());return e}get empty(){for(let e of this.cells.values())if(!e.empty)return!1;return!0}};function qt(n,e,t,i=!0){let s=document.createElement("canvas");s.width=n,s.height=e,t(s.getContext("2d"),n,e);let r=new jr(s);return r.colorSpace=hn,i&&(r.wrapS=r.wrapT=Xs),r.anisotropy=4,r}function Xd(n){let e=n>0?n%2147483647:1;return()=>(e=e*16807%2147483647)/2147483647}function Hd(n,e){let t=Xd(n==="glass"?7:3),i=[];for(let a=0;a<16;a++)i.push(t()<e);let s=qt(256,256,a=>{a.fillStyle="#ffffff",a.fillRect(0,0,256,256);for(let o=0;o<16;o++){let l=o%4*64,c=Math.floor(o/4)*64,u=40+Math.floor(t()*30);if(n==="glass"){let d=a.createLinearGradient(l,c,l+64,c+64);d.addColorStop(0,`rgb(${u+60},${u+90},${u+120})`),d.addColorStop(1,`rgb(${u},${u+30},${u+60})`),a.fillStyle=d,a.fillRect(l+3,c+6,58,54)}else a.fillStyle=`rgb(${u},${u+12},${u+28})`,a.fillRect(l+16,c+14,32,38),a.fillStyle="rgba(255,255,255,.18)",a.fillRect(l+16,c+14,32,5),a.fillStyle="rgba(0,0,0,.12)",a.fillRect(l+12,c+52,40,4)}}),r=qt(256,256,a=>{a.fillStyle="#000",a.fillRect(0,0,256,256);for(let o=0;o<16;o++){if(!i[o])continue;let l=o%4*64,c=Math.floor(o/4)*64;a.fillStyle=o%3?"#ffd79a":"#fff1cf",n==="glass"?a.fillRect(l+3,c+6,58,54):a.fillRect(l+16,c+14,32,38)}});return{map:s,emi:r}}var Wl=class{constructor(e,t){this.scene=e,this.cfg=t,this.root=new vt,e.add(this.root),this.boxes=[],this.grid=new Map,this.CELL=16,this.water=[],this.bridges=[],this.loops=[],this.plazas=[],this.mapOps=[],this.ground=new _s,this.masonry=new _s,this.glass=new _s,this.flat=new _s,this.props={},this.disposables=[],this.anim=[],this.bounds=t.bounds,this.R=Xd(t.seed||1),this.winLit=t.winLit||0}rand(e=0,t=1){return e+(t-e)*this.R()}pick(e){return e[Math.floor(this.R()*e.length)]}addBox(e,t,i,s,r,a=0){i<e&&([e,i]=[i,e]),s<t&&([t,s]=[s,t]);let o={x0:e,z0:t,x1:i,z1:s,y0:a,y1:r};this.boxes.push(o);let l=this.CELL;for(let c=Math.floor(e/l);c<=Math.floor(i/l);c++)for(let u=Math.floor(t/l);u<=Math.floor(s/l);u++){let d=c*100003+u,f=this.grid.get(d);f||this.grid.set(d,f=[]),f.push(o)}return o}near(e,t,i=2){let s=this.CELL,r=new Set;for(let a=Math.floor((e-i)/s);a<=Math.floor((e+i)/s);a++)for(let o=Math.floor((t-i)/s);o<=Math.floor((t+i)/s);o++){let l=this.grid.get(a*100003+o);if(l)for(let c of l)r.add(c)}return r}solid(e,t,i){for(let s of this.near(e,i,.1))if(e>s.x0&&e<s.x1&&i>s.z0&&i<s.z1&&t>s.y0&&t<s.y1)return!0;return!1}groundAt(e,t,i,s=.25,r=.45){let a=0;for(let o of this.near(e,t,s))e+s*.6>o.x0&&e-s*.6<o.x1&&t+s*.6>o.z0&&t-s*.6<o.z1&&o.y1<=i+r&&o.y1>a&&(a=o.y1);return a}ceilingAt(e,t,i,s,r=.25){let a=1/0;for(let o of this.near(e,t,r))e+r>o.x0&&e-r<o.x1&&t+r>o.z0&&t-r<o.z1&&o.y0>=i+.2&&o.y0<a&&(a=o.y0);return a}pushOut(e,t,i,s=.45){let r=!1;for(let u of this.near(e.x,e.z,t+1)){if(e.y>=u.y1-s||e.y+i<=u.y0)continue;let d=Math.max(u.x0,Math.min(e.x,u.x1)),f=Math.max(u.z0,Math.min(e.z,u.z1)),h=e.x-d,m=e.z-f,x=h*h+m*m;if(!(x>=t*t))if(r=!0,x>1e-8){let p=Math.sqrt(x),g=(t-p)/p;e.x+=h*g,e.z+=m*g}else{let p=e.x-u.x0,g=u.x1-e.x,_=e.z-u.z0,M=u.z1-e.z,v=Math.min(p,g,_,M);v===p?e.x=u.x0-t:v===g?e.x=u.x1+t:v===_?e.z=u.z0-t:e.z=u.z1+t}}let[a,o,l,c]=this.bounds;return e.x<a+t&&(e.x=a+t,r=!0),e.x>l-t&&(e.x=l-t,r=!0),e.z<o+t&&(e.z=o+t,r=!0),e.z>c-t&&(e.z=c-t,r=!0),r}clearLine(e,t,i,s,r,a){let o=Math.hypot(s-e,a-i),l=Math.max(1,Math.ceil(o/2.5));for(let c=1;c<l;c++){let u=c/l,d=e+(s-e)*u,f=t+(r-t)*u,h=i+(a-i)*u;if(this.solid(d,f,h))return!1}return!0}inWater(e,t){for(let i of this.bridges)if(e>i[0]&&e<i[2]&&t>i[1]&&t<i[3])return!1;for(let i of this.water)if(e>i[0]&&e<i[2]&&t>i[1]&&t<i[3])return!0;return!1}rect(e,t,i,s,r,a,o=!0,l=this.ground){let c=new Re(a);l.quad([e,r,s],[i,r,s],[i,r,t],[e,r,t],c),o&&this.mapOps.push({t:"r",x0:e,z0:t,x1:i,z1:s,c:o===!0?a:o})}poly(e,t,i,s=!0){let r=new Re(i);for(let a=1;a<e.length-1;a++){let o=[e[0][0],t,e[0][1]],l=[e[a][0],t,e[a][1]],c=[e[a+1][0],t,e[a+1][1]];(l[0]-o[0])*(c[2]-o[2])-(l[2]-o[2])*(c[0]-o[0])<0?this.ground.tri(o,l,c,r):this.ground.tri(o,c,l,r)}s&&this.mapOps.push({t:"p",pts:e,c:s===!0?i:s})}road(e,t,i,s,r={}){let a=r.color||this.cfg.asphalt||"#3a3d42";if(this.rect(e,t,i,s,.02,a,this.cfg.mapRoad||"#5b6270"),r.paint===!1)return;let o=i-e>s-t,l=r.paintColor||"#e8d36a";if(o){let c=(t+s)/2;for(let u=e+2;u<i-4;u+=9)this.rect(u,c-.12,u+4,c+.12,.035,l,!1)}else{let c=(e+i)/2;for(let u=t+2;u<s-4;u+=9)this.rect(c-.12,u,c+.12,u+4,.035,l,!1)}}roadSeg(e,t,i,s,r,a={}){let o=i-e,l=s-t,c=Math.hypot(o,l),u=-l/c*r/2,d=o/c*r/2;if(this.poly([[e+u,t+d],[i+u,s+d],[i-u,s-d],[e-u,t-d]],a.y||.025,a.color||this.cfg.asphalt||"#3a3d42",a.map||this.cfg.mapRoad||"#5b6270"),a.paint!==!1){let f=o/c,h=l/c;for(let m=2;m<c-4;m+=10){let x=[e+f*m,t+h*m],p=[e+f*(m+4),t+h*(m+4)],g=-h*.12,_=f*.12;this.poly([[x[0]+g,x[1]+_],[p[0]+g,p[1]+_],[p[0]-g,p[1]-_],[x[0]-g,x[1]-_]],(a.y||.025)+.012,a.paintColor||"#e8d36a",!1)}}}crosswalk(e,t,i,s){for(let r=-i/2+.8;r<i/2-.8;r+=1.6)s==="x"?this.rect(e+r-.4,t-2,e+r+.4,t+2,.04,"#e9e9e4",!1):this.rect(e-2,t+r-.4,e+2,t+r+.4,.04,"#e9e9e4",!1)}park(e,t,i,s,r={}){this.rect(e,t,i,s,.03,r.color||"#5e9a48",r.map||"#4d7f3c");let a=r.trees??Math.floor((i-e)*(s-t)/900);for(let o=0;o<a;o++){let l=this.rand(e+3,i-3),c=this.rand(t+3,s-3);r.avoid&&r.avoid.some(u=>l>u[0]&&l<u[2]&&c>u[1]&&c<u[3])||this.prop(r.palms?"palm":"tree",l,c,this.rand(0,6.28),this.rand(.8,1.25))}r.plaza!==!1&&this.plazas.push({r:[e+2,t+2,i-2,s-2],n:r.people??Math.ceil((i-e)*(s-t)/2500)})}plaza(e,t,i,s,r,a=10,o){r&&this.rect(e,t,i,s,.03,r,o||r),this.plazas.push({r:[e,t,i,s],n:a})}waterRect(e,t,i,s,r){this.water.push([e,t,i,s]);let a=new Re(r||this.cfg.waterColor||"#2f6f9a");this.waterBuf=this.waterBuf||new _s,this.waterBuf.quad([e,.05,s],[i,.05,s],[i,.05,t],[e,.05,t],a),this.mapOps.push({t:"r",x0:e,z0:t,x1:i,z1:s,c:"#2d6b96"})}bridge(e,t,i,s,r="#55606a"){this.bridges.push([e,t,i,s]),this.rect(e,t,i,s,.12,this.cfg.asphalt||"#3a3d42",this.cfg.mapRoad||"#5b6270"),i-e>s-t?(this.solidBox(e,t,i,t+.4,1.1,r),this.solidBox(e,s-.4,i,s,1.1,r)):(this.solidBox(e,t,e+.4,s,1.1,r),this.solidBox(i-.4,t,i,s,1.1,r))}boxMesh(e,t,i,s,r,a,o,l="masonry",c={}){let u=l==="glass"?this.glass:l==="flat"?this.flat:this.masonry,d=new Re(o),f=d.clone().multiplyScalar(c.roofMul??.78),h=l==="glass"?13:14,m=l==="glass"?14:14.4,x=l==="flat"?0:1,p=A=>A/h*x,g=r/m*x,_=a/m*x,M=c.uOff||0,v=i-e,T=s-t;u.quad([e,r,s],[i,r,s],[i,a,s],[e,a,s],d,[M,g,M+p(v),g,M+p(v),_,M,_]),u.quad([i,r,t],[e,r,t],[e,a,t],[i,a,t],d,[M,g,M+p(v),g,M+p(v),_,M,_]),u.quad([i,r,s],[i,r,t],[i,a,t],[i,a,s],d,[M,g,M+p(T),g,M+p(T),_,M,_]),u.quad([e,r,t],[e,r,s],[e,a,s],[e,a,t],d,[M,g,M+p(T),g,M+p(T),_,M,_]),c.noTop||u.quad([e,a,s],[i,a,s],[i,a,t],[e,a,t],f),c.bottom&&u.quad([e,r,t],[i,r,t],[i,r,s],[e,r,s],f),c.collide!==!1&&this.addBox(e,t,i,s,a,r)}solidBox(e,t,i,s,r,a,o=0,l=!0){this.boxMesh(e,t,i,s,o,o+r,a,"flat",{collide:l})}building(e,t,i,s,r,a={}){let o=a.style||(r>70&&this.R()<.55?"glass":"masonry"),l=a.color||this.pick(this.cfg.palette[o]||this.cfg.palette.masonry),c=i-e,u=s-t,d=Math.floor(this.R()*4)/4;if(r>55&&a.setback!==!1&&Math.min(c,u)>18&&this.R()<(a.setbackChance??.6)){let f=r*this.rand(.35,.6),h=Math.min(c,u)*this.rand(.12,.22);if(this.boxMesh(e,t,i,s,0,f,l,o,{uOff:d}),this.R()<.5&&r>120){let m=f+(r-f)*.6,x=h*1.9;this.boxMesh(e+h,t+h,i-h,s-h,f,m,l,o,{uOff:d}),this.boxMesh(e+x,t+x,i-x,s-x,m,r,l,o,{uOff:d})}else this.boxMesh(e+h,t+h,i-h,s-h,f,r,l,o,{uOff:d})}else this.boxMesh(e,t,i,s,0,r,l,o,{uOff:d});if(this.mapOps.push({t:"b",x0:e,z0:t,x1:i,z1:s}),a.rooftop!==!1&&r<70&&c>8&&u>8){let f=(r>55,r);if(this.R()<.55){let h=this.rand(e+3,i-3),m=this.rand(t+3,s-3);this.prop("ac",h,m,0,1,f),this.addBox(h-1.2,m-.9,h+1.2,m+.9,f+1.4,f)}if(this.cfg.waterTowers&&this.R()<this.cfg.waterTowers){let h=this.rand(e+3,i-3),m=this.rand(t+3,s-3);this.prop("waterTower",h,m,0,1,f)}}return{x0:e,z0:t,x1:i,z1:s,h:r,style:o,color:l}}block(e,t,i,s,r={}){let a=[],o=r.lot||[16,34],l=r.depth||32,c=i-e,u=s-t,d=r.hMin??15,f=r.hMax??60,h=()=>{let x=Math.pow(this.R(),r.skew??1.6),p=d+(f-d)*x;return this.R()<(r.lowChance??.12)&&(p=this.rand(7,13)),p},m=(x,p,g,_)=>{r.avoid&&r.avoid(x,p,g,_)||a.push(this.building(x,p,g,_,h(),r))};if(Math.min(c,u)<l*2.1)if(c>=u)for(let x=e;x<i-4;){let p=Math.min(this.rand(o[0],o[1]),i-x);m(x,t,x+p-(r.gap??0),s),x+=p}else for(let x=t;x<s-4;){let p=Math.min(this.rand(o[0],o[1]),s-x);m(e,x,i,x+p-(r.gap??0)),x+=p}else{for(let x=e;x<i-4;){let p=Math.min(this.rand(o[0],o[1]),i-x);m(x,t,x+p,t+l),m(x,s-l,x+p,s),x+=p}for(let x=t+l;x<s-l-4;){let p=Math.min(this.rand(o[0],o[1]),s-l-x);m(e,x,e+l,x+p),m(i-l,x,i,x+p),x+=p}r.court&&this.rect(e+l,t+l,i-l,s-l,.03,r.court,!1)}return r.walk!==!1&&this.loops.push({r:[e-2.5,t-2.5,i+2.5,s+2.5],n:r.people}),a}prop(e,t,i,s=0,r=1,a=0,o){if((this.props[e]=this.props[e]||[]).push({x:t,y:a,z:i,rot:s,s:r,color:o}),(e==="tree"||e==="palm"||e==="joshua")&&this.addBox(t-.25*r,i-.25*r,t+.25*r,i+.25*r,a+3*r,a),e==="car"){let l=Math.abs(Math.cos(s)),c=Math.abs(Math.sin(s)),u=.9*l+2.15*c,d=.9*c+2.15*l;this.addBox(t-u,i-d,t+u,i+d,a+1.45,a)}}parkCars(e,t,i,s,r=.5,a){let o=i-e>s-t,l=a||this.cfg.carColors||["#c43c3c","#2f5fa8","#e8e8e8","#222","#8a8f96","#d9b44a"];if(o)for(let c=e+6;c<i-6;c+=6.2)this.R()<r&&this.prop("car",c,t+1.4,Math.PI/2,1,0,this.pick(l)),this.R()<r&&this.prop("car",c,s-1.4,-Math.PI/2,1,0,this.pick(l));else for(let c=t+6;c<s-6;c+=6.2)this.R()<r&&this.prop("car",e+1.4,c,0,1,0,this.pick(l)),this.R()<r&&this.prop("car",i-1.4,c,Math.PI,1,0,this.pick(l))}lamps(e,t,i,s,r=30){if(i-e>s-t)for(let o=e+8;o<i;o+=r)this.prop("lamp",o,t-1,Math.PI/2),this.prop("lamp",o+r/2,s+1,-Math.PI/2);else for(let o=t+8;o<s;o+=r)this.prop("lamp",e-1,o,0),this.prop("lamp",i+1,o+r/2,Math.PI)}mesh(e){return this.root.add(e),e.traverse(t=>{t.isMesh&&(t.castShadow=t.castShadow!==!1,t.receiveShadow=!0)}),e}mapRect(e,t,i,s,r){this.mapOps.push({t:"r",x0:e,z0:t,x1:i,z1:s,c:r})}mapBuilding(e,t,i,s){this.mapOps.push({t:"b",x0:e,z0:t,x1:i,z1:s})}finish(){let e=this.cfg,t=new Ht({vertexColors:!0}),[i,s,r,a]=this.bounds,o=2500,l=new it(new yn(r-i+o*2,a-s+o*2),new Ht({color:e.outerGround||e.groundColor}));l.rotation.x=-Math.PI/2,l.position.set((i+r)/2,-.02,(s+a)/2),l.receiveShadow=!0,this.root.add(l),this.rect(i,s,r,a,.005,e.groundColor,!1);for(let m of this.ground.geometries()){let x=new it(m,t);x.receiveShadow=!0,this.root.add(x)}if(this.waterBuf){let m=new pa({vertexColors:!0,shininess:90,specular:8952234});for(let x of this.waterBuf.geometries()){let p=new it(x,m);p.receiveShadow=!0,this.root.add(p)}}let c=Hd("masonry",this.winLit?.32:0),u=Hd("glass",this.winLit?.28:0),d=(m,x)=>{if(m.empty)return;let p=new Ht({vertexColors:!0,map:x.map});this.winLit&&(p.emissiveMap=x.emi,p.emissive=new Re(16777215),p.emissiveIntensity=this.winLit);for(let g of m.geometries()){let _=new it(g,p);_.castShadow=!0,_.receiveShadow=!0,this.root.add(_)}};d(this.masonry,c),d(this.glass,u),d(this.flat,{map:null,emi:null});let f=new Kt,h=new Re;for(let m in this.props){let x=this.props[m];if(!x.length)continue;let p=Gd[m](),g=new Ht({vertexColors:!0});(m==="lamp"||m==="flood")&&(g.emissive=new Re(this.cfg.night?10061909:0));let _=new Map;for(let M of x){let v=$h(M.x,M.z,Ly);(_.get(v)||_.set(v,[]).get(v)).push(M)}for(let M of _.values()){let v=new Li(p,g,M.length);M.forEach((T,A)=>{f.position.set(T.x,T.y,T.z),f.rotation.set(0,T.rot,0),f.scale.setScalar(T.s),f.updateMatrix(),v.setMatrixAt(A,f.matrix),v.setColorAt(A,h.set(T.color||"#ffffff"))}),v.castShadow=m!=="sage",v.receiveShadow=!0,v.computeBoundingSphere(),this.root.add(v)}}this.mergeStatic(),this.buildMinimap(),this.indexCullables()}indexCullables(){this.root.updateMatrixWorld(!0),this.cull=[];for(let e of this.root.children){if(!e.isMesh||e.userData.dynamic)continue;let t=e.geometry;t.boundingSphere||t.computeBoundingSphere();let i=t.boundingSphere;if(!i||i.radius>400)continue;let s=i.center.clone().applyMatrix4(e.matrixWorld);this.cull.push({m:e,x:s.x,z:s.z,r:i.radius})}}cullFar(e,t){let i=e.position.x,s=e.position.z;for(let r of this.cull){let a=Math.hypot(r.x-i,r.z-s)-r.r;r.m.visible=a<t}}mergeStatic(){this.root.updateMatrixWorld(!0);let e=new Map;for(let t of[...this.root.children]){if(!t.isMesh||t.isInstancedMesh||t.userData.dynamic||Array.isArray(t.material)||t.geometry.userData.merged)continue;let i=t.geometry,s=t.getWorldPosition(new P),r=t.material.uuid+"|"+Object.keys(i.attributes).sort().join(",")+"|"+t.castShadow+"|"+$h(s.x,s.z);(e.get(r)||e.set(r,[]).get(r)).push(t)}for(let t of e.values()){if(t.length<2)continue;let i=t.map(a=>{let o=a.geometry.index?a.geometry.toNonIndexed():a.geometry.clone();o.applyMatrix4(a.matrixWorld);for(let l of Object.keys(o.morphAttributes))delete o.morphAttributes[l];return o}),s=dr(i,!1);if(i.forEach(a=>a.dispose()),!s)continue;s.userData.merged=!0,s.computeBoundingSphere();let r=new it(s,t[0].material);r.castShadow=t[0].castShadow,r.receiveShadow=!0,r.renderOrder=t[0].renderOrder,this.root.add(r);for(let a of t)this.root.remove(a),a.geometry.dispose()}}buildMinimap(){let[e,t,i,s]=this.bounds,r=1024,a=r/Math.max(i-e,s-t),o=document.createElement("canvas");o.width=Math.ceil((i-e)*a),o.height=Math.ceil((s-t)*a);let l=o.getContext("2d");l.fillStyle=this.cfg.mapGround||"#9aa3ad",l.fillRect(0,0,o.width,o.height);let c=d=>(d-e)*a,u=d=>(d-t)*a;for(let d of this.mapOps)d.t==="r"?(l.fillStyle=d.c,l.fillRect(c(d.x0),u(d.z0),(d.x1-d.x0)*a+.5,(d.z1-d.z0)*a+.5)):d.t==="p"&&(l.fillStyle=d.c,l.beginPath(),d.pts.forEach((f,h)=>h?l.lineTo(c(f[0]),u(f[1])):l.moveTo(c(f[0]),u(f[1]))),l.closePath(),l.fill());l.fillStyle=this.cfg.mapBuilding||"#2b3240";for(let d of this.mapOps)d.t==="b"&&l.fillRect(c(d.x0),u(d.z0),(d.x1-d.x0)*a,(d.z1-d.z0)*a);this.minimap={canvas:o,sc:a,x0:e,z0:t}}dispose(){this.root.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(i=>{for(let s of["map","emissiveMap","envMap"])i[s]&&i[s].dispose();i.dispose()})}),this.scene.remove(this.root)}};var ys=new Map;function De(n,e={}){let t="l"+n+JSON.stringify(e);if(ys.has(t))return ys.get(t);let i=new Ht({color:n,...e});return ys.set(t,i),i}function Bi(n){let e="g"+n;if(ys.has(e))return ys.get(e);let t=new Ot({color:n});return ys.set(e,t),t}function Wd(){ys.clear(),Zl=[]}function Ge(n,e,t,i=0,s=0,r=0,a=0,o=0,l=0,c=1,u=1,d=1){let f=new it(e,t);return f.position.set(i,s,r),f.rotation.set(a,o,l),f.scale.set(c,u,d),f.castShadow=!0,f.receiveShadow=!0,n.root.add(f),f}function Qe(n,e,t,i,s,r,a,o,l=!0){let c=Ge(n,new Be(i-e,a-r,s-t),o,(e+i)/2,(r+a)/2,(t+s)/2);return l&&n.addBox(e,t,i,s,a,r),c}function Dy(n,e={}){let t=!!e.vertical,i=e.fs||64,s=e.pad??14,r=t?n.split(""):[n],a=t?i+s*2:Math.ceil(n.length*i*.62)+s*2,o=t?r.length*i*.95+s*2:i+s*2;return qt(Math.min(2048,a),Math.min(2048,o),(l,c,u)=>{l.fillStyle=e.bg||"#000",l.fillRect(0,0,c,u),l.font=`${e.weight||"bold"} ${i}px ${e.font||"Arial, sans-serif"}`,l.textAlign="center",l.textBaseline="middle",e.glow&&(l.shadowColor=e.glow,l.shadowBlur=i*.35),l.fillStyle=e.fg||"#fff",t?r.forEach((d,f)=>l.fillText(d,c/2,s+i*.5+f*i*.95)):l.fillText(n,c/2,u/2+2),e.border&&(l.shadowBlur=0,l.strokeStyle=e.border,l.lineWidth=6,l.strokeRect(4,4,c-8,u-8))},!1)}function zi(n,e,t,i,s,r,a,o,l={}){let c=Dy(e,l),u=new it(new yn(r,a),l.lit===!1?new Ht({map:c}):new Ot({map:c}));return u.position.set(t,i,s),u.rotation.y=o,n.root.add(u),u}var Ny=[["ZORP COLA","#e8242c","#fff"],["GALAXY FONE","#121a3a","#5ef0ff"],["NEBULA+","#5a1e8c","#ffd84a"],["MOON MILK","#f4f0e6","#2b3a8a"],["ORBIT AIR","#ff7a1a","#fff"],["STARDUST","#0c0c0c","#ff4fb8"],["COMET JEANS","#1d4fa8","#fff"],["CRATER BURGER","#ffcc22","#c01818"],["PULSAR TV","#00a86b","#fff"],["ROCKET RIDE","#e8e8e8","#e8242c"],["ASTRO SNAX","#ff3a3a","#ffe94a"],["LUNAR BANK","#0a2a5a","#e8e8e8"],["SATURN SODA","#b02cd6","#fff"],["TOP HAT SHOW","#111","#ffcf4a"],["WARP 9","#17d0e8","#081a2a"],["FUSION FIT","#ff2e63","#fff"]],ql=null,Zl=[];function Uy(){return ql||(ql=Ny.map(([n,e,t],i)=>qt(512,256,(s,r,a)=>{let o=s.createLinearGradient(0,0,r,a);o.addColorStop(0,e),o.addColorStop(1,Fy(e,i%2?-40:40)),s.fillStyle=o,s.fillRect(0,0,r,a),s.globalAlpha=.25,s.fillStyle=t;for(let l=0;l<6;l++)s.beginPath(),s.arc((l*97+i*53)%r,(l*61+i*29)%a,20+l*13%60,0,7),s.fill();s.globalAlpha=1,s.fillStyle=t,s.font=`bold ${n.length>9?62:80}px Arial Black, Arial, sans-serif`,s.textAlign="center",s.textBaseline="middle",s.shadowColor=t,s.shadowBlur=16,s.fillText(n,r/2,a/2)},!1)),ql)}function Fy(n,e){let t=new Re(n);return t.offsetHSL(0,0,e/255),"#"+t.getHexString()}function Yl(n,e,t,i,s,r,a,o){let l=Uy(),c=o%l.length;Zl[c]=Zl[c]||new Ot({map:l[c]});let u=new it(new yn(s,r),Zl[c]);return u.castShadow=!1,u.position.set(e,t,i),u.rotation.y=a,n.root.add(u),u}function Jh(n,e,t,i=6,s=45,r=0,a=[0,1,2,3]){let o=r;for(let l of a){let c=l<2?e.x1-e.x0:e.z1-e.z0;if(!(c<8))for(let u=0;u<t;u++){let d=Math.min(c*n.rand(.55,.9),30),f=Math.min(d*n.rand(.45,.8),18),h=n.rand(i,Math.max(i,Math.min(s,e.h-f/2-1))),m=n.rand(-(c-d)/2,(c-d)/2);l===0&&Yl(n,(e.x0+e.x1)/2+m,h,e.z1+.15,d,f,0,o++),l===1&&Yl(n,(e.x0+e.x1)/2+m,h,e.z0-.15,d,f,Math.PI,o++),l===2&&Yl(n,e.x1+.15,h,(e.z0+e.z1)/2+m,d,f,Math.PI/2,o++),l===3&&Yl(n,e.x0-.15,h,(e.z0+e.z1)/2+m,d,f,-Math.PI/2,o++)}}}function $l(n,e,t,i,s,r,a,o=[]){let[l,c,u,d]=e;for(let f=0;f<i;f++){let h=Math.floor(n.R()*4),m,x;if(h===0?(m=n.rand(l-t,u+t),x=n.rand(c-t,c-40)):h===1?(m=n.rand(l-t,u+t),x=n.rand(d+40,d+t)):h===2?(m=n.rand(l-t,l-40),x=n.rand(c,d)):(m=n.rand(u+40,u+t),x=n.rand(c,d)),o.some(_=>m>_[0]&&m<_[2]&&x>_[1]&&x<_[3]))continue;let p=n.rand(20,45),g=s+Math.pow(n.R(),2)*(r-s);n.boxMesh(m-p/2,x-p/2,m+p/2,x+p/2,0,g,n.pick(a),g>80?"glass":"masonry",{collide:!1})}}function qd(n,e,t,i,s,r,a){let o=new Ln(1,1,6,1);for(let l=0;l<r;l++){let c=l/r*Math.PI*2+n.rand(-.05,.05),u=n.rand(i,s),d=n.rand(90,260),f=n.rand(180,380),h=Ge(n,o,De(n.pick(a),{flatShading:!0}),e+Math.cos(c)*u,d/2-5,t+Math.sin(c)*u,0,n.rand(0,3),0,f,d,f*n.rand(.6,1));h.castShadow=!1}}function Jl(n,e,t,i,s,r=0,a={}){let o=new vt;o.position.set(e,t,i),o.rotation.set(r,a.ry||0,r*.4);let l=new Dn({color:"#b8bfd0",metalness:.7,roughness:.35}),c=new Dn({color:"#5a6274",metalness:.6,roughness:.5}),u=new Ot({color:a.lights||"#3ff0ff"}),d=(h,m,x,p,g,_=1,M=1,v=1)=>{let T=new it(h,m);return T.position.set(x,p,g),T.scale.set(_,M,v),T.castShadow=!0,T.receiveShadow=!0,o.add(T),T};d(new yt(s,32,12),l,0,0,0,1,.22,1),d(new on(s*.98,s*.05,8,40),c,0,0,0).rotation.x=Math.PI/2;let f=d(new yt(s*.38,24,12,0,Math.PI*2,0,Math.PI/2),new Dn({color:a.domeColor||"#7fd6ff",metalness:.1,roughness:.1,transparent:!0,opacity:.75}),0,s*.12,0);for(let h=0;h<12;h++){let m=h/12*Math.PI*2;d(new yt(s*.04,8,6),u,Math.cos(m)*s*.85,-s*.02,Math.sin(m)*s*.85)}return d(new st(s*.25,s*.32,s*.1,20),c,0,-s*.2,0),n.root.add(o),{group:o,dome:f,lights:u}}function Kl(n,e,t,i,s,r,a){Ge(n,new Ln(i*.72,r,4),a,e,s+r/2,t,0,Math.PI/4,0)}var Qt=4;function vi(n,e,t,i,s,r){n.road(e-t/2,i,e+t/2,s,r)}function ui(n,e,t,i,s,r){n.road(i,e-t/2,s,e+t/2,r)}function jl(n,e,t){for(let[i,s]of e)for(let[r,a]of t)n.crosswalk(i,r-a/2-2.5,s,"x"),n.crosswalk(i,r+a/2+2.5,s,"x"),n.crosswalk(i-s/2-2.5,r,a,"z"),n.crosswalk(i+s/2+2.5,r,a,"z")}function Kh(n,e,t){for(let i=0;i<n.length-1;i++)for(let s=0;s<e.length-1;s++){let r=n[i][0]+n[i][1]/2+Qt,a=n[i+1][0]-n[i+1][1]/2-Qt,o=e[s][0]+e[s][1]/2+Qt,l=e[s+1][0]-e[s+1][1]/2-Qt;a-r>4&&l-o>4&&t(i,s,r,o,a,l)}}var $d=(n,e)=>n[0]<e[2]&&n[2]>e[0]&&n[1]<e[3]&&n[3]>e[1];function Oy(n,e,t=8,i){return qt(64,256,(s,r,a)=>{s.fillStyle=n,s.fillRect(0,0,r,a);for(let o=0;o<t;o++)if(s.fillStyle=e,s.fillRect(0,o*a/t,r,a/t*.4),i){s.fillStyle=i;for(let l=0;l<4;l++)(o*7+l*3)%5<2&&s.fillRect(l*16+3,o*a/t+a/t*.5,10,a/t*.35)}})}function By(n){let e=n.bounds,t=[[-402,20],[-201,18],[0,24],[100,18],[201,30],[410,26],[620,44]],i=[[-560,26],[-402,18],[-302,24],[-201,20],[0,20],[201,20],[402,20],[520,20]],s=[[-1180,18],[-1005,18],[-864,14],[-804,16],[-655,0]],r=[-655,-585];n.waterRect(680,-3e3,3e3,3e3,"#2f7fa6"),n.waterRect(-3e3,r[0],680,r[1],"#2c6a8a"),n.rect(642,e[1],680,e[3],.03,"#d9cdb2","#cdbf9f"),n.plaza(645,-540,676,400,null,10);for(let[w,z]of t)vi(n,w,z,r[1],e[3]);for(let[w,z]of i)w===-201||w===0||w===201?(ui(n,w,z,e[0],186),ui(n,w,z,423,598)):w===402?(ui(n,w,z,e[0],186),ui(n,w,z,423,620)):ui(n,w,z,e[0],642);jl(n,t.filter(([w])=>w<=201),i.filter(([w])=>w!==520));let a=[[-402,20],[-201,18],[0,24],[100,18],[201,30],[330,16],[410,26],[620,44]];for(let[w,z]of a)vi(n,w,z,e[1],r[0]);for(let[w,z]of s)z&&ui(n,w,z,e[0],642);jl(n,a.filter(([w])=>w<=410),s.filter(([,w])=>w));for(let[w,z]of a)n.bridge(w-z/2,r[0],w+z/2,r[1]);let o=De("#d8cdb4");for(let w of[184,218])for(let z of[-660,-580])Qe(n,w-3,z-3,w+3,z+3,0,9,o);n.plaza(e[0],-585,642,-577,"#b9ab90",26,"#b9ab90");for(let w=-440;w<640;w+=22)n.prop("tree",w,-581,0,.7);for(let w=-430;w<640;w+=40)n.prop("bench",w,-579,Math.PI);let l={};n.park(216+Qt,-290+Qt,397-Qt,191-Qt,{trees:0,plaza:!1,color:"#62a04a"}),n.plaza(220,-285,300,-150,"#c9c3b6",34,"#c9c3b6");let c=new Dn({color:"#e8ecf2",metalness:1,roughness:.06});n.reflective=[c];let u=Ge(n,new yt(1,48,24),c,262,5.1,-215,0,0,0,10,4.7,6.5);Ge(n,new yt(1,24,12),c,262,.6,-215,0,0,0,3.5,1.4,2.2),n.addBox(254,-219.5,270,-210.5,9.3,0),n.addBox(251,-218,254,-212,6.5,0),n.addBox(270,-218,273,-212,6.5,0),n.mapRect(252,-221,272,-209,"#dfe6ee"),l.bean=[262,9.8,-215];let d=new Dn({color:"#d6dbe2",metalness:.9,roughness:.25});n.reflective.push(d),Qe(n,304,-282,322,-242,0,1.5,De("#8a7a66")),Qe(n,300,-286,306,-238,0,12,De("#b6ab9a"));for(let w=0;w<9;w++){let z=Ge(n,new on(10+w*1.3,.35,4,18,Math.PI*(.55+w%3*.15)),d,304,16+w%4,-262+(w-4)*4.2,0,Math.PI/2+(w%2?.3:-.3),w*.5);z.castShadow=!1}n.park(324,-296,396,-150,{trees:0,plaza:!0,people:22,color:"#6fb354"});let f=[];for(let w=330;w<=392;w+=15.5)f.push(new st(.4,.4,150,6).rotateX(Math.PI/2).translate(w,19,-223));for(let w=-290;w<=-156;w+=16.5)f.push(new st(.4,.4,66,6).rotateZ(Math.PI/2).translate(361,19,w));for(let w of f){let z=Ge(n,w,d);z.castShadow=!1}for(let[w,z]of[[328,-292],[394,-292],[328,-154],[394,-154]])Qe(n,w-1,z-1,w+1,z+1,0,19,De("#9aa2ab"));let h=qt(128,256,(w,z,H)=>{let $=w.createLinearGradient(0,0,0,H);$.addColorStop(0,"#d7b39a"),$.addColorStop(1,"#b98b6e"),w.fillStyle=$,w.fillRect(0,0,z,H),w.fillStyle="rgba(40,25,20,.75)",w.beginPath(),w.ellipse(40,100,14,8,0,0,7),w.ellipse(88,100,14,8,0,0,7),w.fill(),w.fillStyle="rgba(150,60,60,.8)",w.beginPath(),w.ellipse(64,170,22,10,0,0,7),w.fill(),w.fillStyle="rgba(255,255,255,.12)";for(let K=0;K<H;K+=6)w.fillRect(0,K,z,2)},!1);for(let w of[40,160]){Qe(n,236,w-3.5,252,w+3.5,0,15,new Ht({color:"#cfe0e8",emissive:"#203038"}));let z=new it(new yn(14,14),new Ot({map:h}));z.position.set(244,7.5,w+(w<100?3.55:-3.55)),z.rotation.y=w<100?0:Math.PI,n.root.add(z)}n.rect(236,44,252,156,.05,"#2b2f36","#2b2f36"),n.rect(237,46,251,154,.07,"#6fa8c8",!1),n.plaza(222,30,300,175,null,18),n.rect(320,20,395,180,.04,"#6a8f3e","#557a33");for(let w=0;w<60;w++)n.rect(...(()=>{let z=n.rand(322,390),H=n.rand(22,176);return[z,H,z+3,H+3]})(),.05,n.pick(["#8a5fc0","#d96aa0","#e8c94a","#7a4aa0"]),!1);let m=De("#cfc6ae"),x=De("#b3a98f");Qe(n,222,226,330,398,0,13,m),Qe(n,214,268,222,356,0,1.2,x),Qe(n,218,268,222,356,1.2,2.4,x);for(let w=274;w<=350;w+=9.5)Qe(n,218,w-.8,220,w+.8,2.4,11,m);Qe(n,216,266,224,358,11,13,x);let p=new hs;p.moveTo(-30,0),p.lineTo(30,0),p.lineTo(0,6),p.lineTo(-30,0),Ge(n,new ir(p,{depth:6,bevelEnabled:!1}),m,216,13,312,0,-Math.PI/2,0),n.mapBuilding(214,226,330,398);let g=De("#5f6346");for(let w of[262,362])Qe(n,205,w-2,213,w+2,0,2.2,x),Ge(n,new Be(5,1.8,1.8),g,209,3.3,w),Ge(n,new yt(1.2,10,8),g,206.8,4.4,w),Ge(n,new Be(1,.8,.9),g,205.6,4.2,w);n.plaza(203,262,216,365,null,10),Qe(n,340,300,402,398,0,14,De("#eef1f2")),Ge(n,new Be(70,.6,104),De("#f6f7f8"),371,14.6,349),n.addBox(336,297,406,401,14.9,14.3),n.mapBuilding(340,300,402,398),l.coil=[276,13.6,312],n.building(118,-290,182,-213,30,{color:"#d9c9a3",style:"masonry",setback:!1}),n.building(226,-470,262,-420,183,{color:"#bdb6a8",style:"masonry",setback:!1}),Ge(n,new st(.6,.8,40,6),De("#ddd"),244,203,-445);let _=n.building(268,-480,304,-432,230,{color:"#c2bdb6",style:"glass",setback:!1});for(let w=0;w<4;w++){let z=3+w*3.5;n.boxMesh(268+z,-480+z,304-z,-432-z,230+w*9,239+w*9,"#c2bdb6","flat")}Kl(n,286,-456,6,266,40,De("#c2bdb6")),n.building(342,-480,398,-424,346,{color:"#f2f1ea",style:"masonry",setback:!1}),n.building(454,-545,500,-508,363,{color:"#7fb3d6",style:"glass",setbackChance:1}),n.building(440,-480,476,-436,262,{color:"#d6e2ea",style:"glass",setback:!1}),n.building(520,-540,600,-500,190,{color:"#9fb2c6",style:"glass"}),n.building(520,-470,600,-420,150,{color:"#a9bccf",style:"glass"}),n.park(426,-390,598,-320,{trees:10,people:8}),n.building(-46,-390,-14,-330,26,{color:"#c9a58a",style:"masonry",setback:!1,rooftop:!1}),Ge(n,new Be(2,.6,26),Bi("#ffd86b"),-12,6.2,-360);let v=zi(n,"CHICAGO",-11,15,-360,3.2,17,Math.PI/2,{vertical:!0,fg:"#fff3c4",bg:"#c01e1e",glow:"#ffe08a",fs:72}).clone();v.rotation.y=0,v.position.set(-12.5,15,-358.5),v.scale.set(.5,1,1),n.root.add(v);let T=De("#3f4a3c");for(let w=-402;w<=e[3];w+=18)for(let z of[91,109])Qe(n,z-.5,w-.5,z+.5,w+.5,0,6,T);Qe(n,92,-409,108,e[3],6,6.8,T);for(let w=e[0];w<=92;w+=18)for(let z of[-411,-393])Qe(n,w-.5,z-.5,w+.5,z+.5,0,6,T);Qe(n,e[0],-410,92,-394,6,6.8,T);let A=De("#c9ced6");for(let w=0;w<4;w++){let z=60+w*15;Qe(n,95.5,z,99.5,z+14.2,6.8,10.3,A),Ge(n,new Be(4.05,.9,13.6),De("#2a3440"),97.5,9.1,z+7.1)}let y=new Ht({map:Oy("#e9e6dc","#a9a59a",6)});y.map.repeat.set(4,22);for(let w of[-140,-84])Ge(n,new st(16,16,179,20),y,w,89.5,-715),n.addBox(w-13,-728,w+13,-702,179),n.mapRect(w-16,-731,w+16,-699,"#2b3240");let b=[[22,-738,82,-668,100],[28,-732,76,-674,220],[34,-726,70,-680,360]],D=0;for(let[w,z,H,$,K]of b)n.boxMesh(w,z,H,$,D,K,"#a8b4c0","glass"),D=K;Ge(n,new st(.8,1.4,63,6),De("#ccd"),52,391,-703),n.mapBuilding(22,-738,82,-668);let I="#f4f1e8";n.building(122,-735,186,-665,62,{color:I,style:"masonry",setback:!1,rooftop:!1}),n.boxMesh(160,-712,182,-690,62,110,I,"masonry"),n.boxMesh(164,-708,178,-694,110,124,I,"flat"),Ge(n,new st(3,5,10,8),De(I),171,129,-701);let U=qt(64,64,w=>{w.fillStyle="#fff",w.beginPath(),w.arc(32,32,30,0,7),w.fill(),w.strokeStyle="#222",w.lineWidth=3,w.stroke(),w.beginPath(),w.moveTo(32,32),w.lineTo(32,12),w.moveTo(32,32),w.lineTo(46,38),w.stroke()},!1);for(let[w,z,H]of[[171,-689.9,0],[171,-712.1,Math.PI],[182.1,-701,Math.PI/2],[159.9,-701,-Math.PI/2]]){let $=new it(new Kn(4,20),new Ot({map:U}));$.position.set(w,100,z),$.rotation.y=H,n.root.add($)}n.building(122,-800,186,-742,52,{color:I,style:"masonry",setback:!1});let R="#d9cdb0";n.building(216,-790,270,-702,112,{color:R,style:"masonry",setback:!1,rooftop:!1}),n.boxMesh(230,-760,256,-732,112,132,R,"masonry");for(let[w,z]of[[230,-760],[256,-760],[230,-732],[256,-732],[243,-760],[243,-732],[230,-746],[256,-746]])n.boxMesh(w-1.2,z-1.2,w+1.2,z+1.2,112,140,R,"flat",{collide:!1}),Kl(n,w,z,2.4,140,6,De(R));n.plaza(216,-698,272,-662,"#c9c1b0",5,"#c9c1b0"),n.building(318,-800,360,-700,191,{color:"#e2d7bf",style:"masonry",setbackChance:1});let B=[[214,-302,642,201],[214,210,642,520],[118,-290,182,-213],[216,-490,410,-420],[430,-560,642,-310],[-46,-390,-14,-330],[-160,-740,-60,-690],[20,-740,84,-665],[118,-805,190,-660],[214,-800,275,-660],[310,-805,365,-695]],L=(w,z,H,$,K,ve,Te={})=>{B.some(Z=>Z[0]<=w+1&&Z[2]>=H-1&&Z[1]<=z+1&&Z[3]>=$-1)||n.block(w,z,H,$,{hMin:K,hMax:ve,lot:[18,36],depth:30,avoid:(Z,me,Ae,ze)=>B.some(Me=>$d([Z,me,Ae,ze],Me)),...Te})};Kh(t,i,(w,z,H,$,K,ve)=>{let Te=(H+K)/2;if(Te>214){ve<-302&&L(H,$,K,ve,40,160);return}L(H,$,K,ve,Te>150?35:45,Te>150?110:230,{people:Te>150?90:40})}),Kh(a,s,(w,z,H,$,K,ve)=>{let Te=(H+K)/2;Te>420||L(H,$,K,ve,30,Te>150&&Te<300?140:180,{people:Te>150&&Te<260?70:30})}),n.block(434,-1170,598,-1018,{hMin:40,hMax:200}),n.block(434,-995,598,-876,{hMin:40,hMax:180}),n.block(434,-856,598,-680,{hMin:30,hMax:170}),n.park(423+Qt,-290+Qt,598-Qt,191-Qt,{trees:45,people:14,color:"#6ba851"}),n.rect(450,-240,570,-80,.04,"#9aa3ab",!1),n.park(334,210,598,520,{trees:40,people:10}),n.park(214,402,330,520,{trees:10,people:4});for(let w=-1170;w<500;w+=14)w>r[0]-4&&w<r[1]+4||(n.prop("tree",183,w,0,.75),(w<-310||w>400)&&n.prop("tree",219,w,0,.75));n.lamps(186-.1,-1170,216,-660,34),n.lamps(186,-560,216,500,34);for(let[w,z]of t.slice(0,4))n.parkCars(w-z/2,-545,w+z/2,500,.22);for(let[w,z]of i.slice(1,7))n.parkCars(e[0],w-z/2,185,w+z/2,.22);let G=[[0,0,442],[1,0,368],[2,0,270],[0,1,442],[1,1,442],[2,1,330],[0,2,270],[1,2,368],[2,2,207]];for(let[w,z,H]of G)n.boxMesh(-830+w*23,330+z*23,-830+(w+1)*23,330+(z+1)*23,0,H,"#2a2c30","glass",{collide:!1});for(let w of[12,36])Ge(n,new st(.8,1.2,85,6),De("#eee"),-830+w,484,352);Ge(n,new st(20,33,344,4),De("#2a2a2e"),201,172,-1820,0,Math.PI/4,0);for(let w of[-6,6])Ge(n,new st(.6,1,90,6),De("#ddd"),201+w,389,-1820);Ge(n,new Be(1e3,6,55),De("#c9b79c"),1250,3,-1055);let q=Ge(n,new on(30,.9,6,40),De("#e8e8e8"),1e3,38,-1055,0,Math.PI/2,0);for(let w=0;w<12;w++)Ge(n,new st(.3,.3,60,4),De("#e8e8e8"),1e3,38,-1055,w*Math.PI/12,0,0);return q.userData.dynamic=!0,n.anim.push(w=>{q.rotation.x=w*.05}),$l(n,e,600,160,30,230,n.cfg.palette.masonry.concat(n.cfg.palette.glass),[[680,-3e3,3e3,3e3]]),{spawn:[243,0,-675,0],goal:{pos:l.coil,label:"Gravity coil"},log:l.bean,checkpoints:[[243,0,-675],[201,0,-540],[235,0,-240],[290,0,100],[205,2.4,315]]}}function zy(n){let e=n.bounds,t=R=>-(R-42)*80.6,i=[[-810,30],[-560,28],[-280,30],[0,30],[128,24],[254,40]],s=[];for(let R=55;R>=39;R--)s.push([t(R),R===42?30:18,R]);let r=s.map(R=>[R[0],R[1]]),a=[[-386,280],[-560,-322],[-741,-1080]],o=R=>R>-322?-(386+(280-R)/602*174):-(560+(-322-R)/758*181);for(let[R,B]of i)R===254?(vi(n,R,B,e[1],-255),vi(n,R,B,14,e[3])):vi(n,R,B,e[1],e[3]);for(let[R,B,L]of s){let G=[[e[0],e[2]]];if(L===41){ui(n,R,B,e[0],-295),ui(n,R,B,15,e[2]);continue}if(L>=43&&L<=45){ui(n,R,B,e[0],190);continue}for(let[q,w]of G)ui(n,R,B,q,w)}n.roadSeg(a[0][0],a[0][1],a[1][0],a[1][1],24,{color:"#8f8a86",map:"#b7aaa0",paint:!1}),n.roadSeg(a[1][0],a[1][1],a[2][0],a[2][1],22),n.roadSeg(-386,280,-430,152,22),jl(n,i.filter(([R])=>R<200),r);for(let R=10;R>-400;R-=34){let B=o(R);n.plaza(B-11,R-16,B+11,R+16,null,9)}let l={};n.park(-261,19,-110,148,{trees:40,people:30,color:"#5f9a46",avoid:[[-230,45,-140,125]]}),n.rect(-230,45,-140,125,.04,"#6fb354",!1);let c=De("#ece6d9"),u=De("#d6cebe");Qe(n,-100,26,-22,146,0,24,c),Qe(n,-62,60,-22,112,24,30,u),n.mapBuilding(-100,26,-22,146);for(let R=50;R<=122;R+=6)Qe(n,-21,R-.7,-19.5,R+.7,2,20,c);Qe(n,-21,44,-15,128,0,2,u);for(let R of[56,116])Qe(n,-14,R-2,-10,R+2,0,2.5,u),Ge(n,new Be(1.6,1.6,3.6),De("#e2dccd"),-12,3.3,R),Ge(n,new yt(1,8,6),De("#e2dccd"),-12,4.2,R-1.6);n.plaza(-18,30,-16,140,null,8),n.building(-335,-70,-297,-18,366,{color:"#c8d6df",style:"glass",setbackChance:1});let d=n.building(-540,-62,-500,-17,111,{color:"#9aa0a6",style:"masonry",setback:!1,rooftop:!1});Jh(n,d,4,14,100,3,[0,2,3]),Ge(n,new st(.4,.5,18,6),De("#ccc"),-520,120,-40),Ge(n,new gi(2,1),new Ot({color:"#cfe8ff"}),-520,124,-40);let f=new Ht({color:"#d0202c",emissive:"#6a0010"});for(let R=0;R<7;R++)Qe(n,-578,-372-R*3.6,-560,-368-R*3.6-3.6+3.6,0,.55*(R+1),f);l.tkts=[-569,4.2,-394],vi(n,-150,12,t(51)+9,t(48)-9,{color:"#8f8a86",paint:!1});let h="#cfc5b0",m=n.building(-262,-626,-160,-590,259,{color:h,style:"masonry",setback:!1,rooftop:!1});n.boxMesh(-262,-632,-160,-584,0,60,h,"masonry"),n.boxMesh(-250,-623,-170,-593,259,266,h,"flat"),n.building(-80,-632,-18,-614,28,{color:h,style:"masonry",setback:!1}),n.building(-80,-596,-18,-578,28,{color:h,style:"masonry",setback:!1}),n.rect(-80,-612,-18,-598,.04,"#6fa055",!1),n.plaza(-80,-611,-18,-599,null,14),n.rect(-142,-630,-92,-580,.04,"#dfeef6","#dfeef6"),n.plaza(-140,-628,-94,-582,null,22);for(let R=0;R<26;R++){let B=R/26*Math.PI*2;n.prop("flag",-117+Math.cos(B)*29,-605+Math.sin(B)*29,B,1,0,["#e8242c","#2f5fa8","#f2c230","#2fa85f","#ffffff","#7a3fb8"][R%6])}let x=new Dn({color:"#d4a52c",metalness:.9,roughness:.3});n.reflective.push(x),Qe(n,-146,-610,-140,-600,0,3,De("#8a8a8a")),Ge(n,new gi(1.6,1),x,-143,4.4,-605,0,0,0,1.4,.7,1),Ge(n,new on(3.5,.18,6,24),x,-143,4.5,-605,0,Math.PI/2,0);let p=De("#1f5a2e");for(let R=0;R<5;R++)Ge(n,new Ln(7-R*1.2,7,10),p,-152,4+R*4.2,-605);Ge(n,new st(1,1.2,3,8),De("#5a3a2a"),-152,1.5,-605),n.addBox(-155,-608,-149,-602,24);let g=[];for(let R=0;R<90;R++){let B=Math.random(),L=(1-B)*6.6+.3,G=Math.random()*6.28;g.push(new yt(.22,4,3).translate(-152+Math.cos(G)*L,2+B*22,-605+Math.sin(G)*L))}for(let R of g)Ge(n,R,Bi(["#ffd84a","#ff4a4a","#5ef0ff","#ffffff"][Math.floor(Math.random()*4)])).castShadow=!1;Ge(n,new Zi(1.4),Bi("#fff2a8"),-152,25.5,-605),l.crystal=[-117,.6,-605],Qe(n,-16,-694,-8,-686,0,3,De("#7a7a7a")),Ge(n,new Be(1.6,4,1.2),x,-12,5,-690);for(let R=0;R<3;R++)Ge(n,new on(3,.15,6,24),x,-12,9.5,-690,R*1.05,R*.6,0);n.building(-265,-717,-200,-655,30,{color:"#c9b29a",style:"masonry",setback:!1,rooftop:!1}),Ge(n,new Be(1.5,1.2,50),Bi("#ff2a3a"),-266,6,-686),zi(n,"RADIO CITY",-266.2,16,-660,3.4,18,-Math.PI/2,{vertical:!0,fg:"#ff3344",bg:"#140508",glow:"#ff4455",fs:64});let _=De("#ebe6da");Qe(n,36,-712,106,-659,0,33,_),n.mapBuilding(22,-712,106,-659);let M=new hs;M.moveTo(-26,0),M.lineTo(26,0),M.lineTo(0,14),M.lineTo(-26,0),Ge(n,new ir(M,{depth:70,bevelEnabled:!1}),De("#7d8a86"),36,33,-685.5,0,Math.PI/2,0);for(let R of[-707,-664])Qe(n,22,R-5,34,R+5,0,62,_),Kl(n,28,R,9,62,40,_);Qe(n,22,-697,34,-674,0,30,_);let v=De("#d8cbb0");Qe(n,196,-150,312,-16,0,32,v),n.mapBuilding(196,-150,312,-16);let T=qt(256,128,R=>{R.fillStyle="#d8cbb0",R.fillRect(0,0,256,128),R.fillStyle="#3a4a58";for(let B=0;B<3;B++)R.beginPath(),R.moveTo(22+B*78,120),R.lineTo(22+B*78,50),R.arc(55+B*78,50,33,Math.PI,0),R.lineTo(88+B*78,120),R.fill();R.fillStyle="#e8d070",R.beginPath(),R.arc(128,20,12,0,7),R.fill()},!1),A=new it(new yn(100,30),new Ht({map:T}));A.position.set(254,15,-15.8),n.root.add(A),Ge(n,new Be(20,7,4),De("#6f8a6a"),254,35,-18),n.building(212,-240,296,-168,246,{color:"#b9b4aa",style:"glass",setback:!1});let y=[[-35,610,95,680,85],[-20,620,80,670,200],[0,630,60,660,320],[15,637,45,653,350]],b=0;for(let[R,B,L,G,q]of y)n.boxMesh(R,B,L,G,b,q,"#c9bfa6","masonry",{collide:!1}),b=q;Ge(n,new st(.8,2.5,60,6),De("#ddd"),30,380,645);let D=[[365,-10,415,40,180],[372,-3,408,33,230],[378,3,402,27,255]];b=0;for(let[R,B,L,G,q]of D)n.boxMesh(R,B,L,G,b,q,"#c7ccd2","masonry",{collide:!1}),b=q;for(let R=0;R<5;R++)Ge(n,new st(10-R*2,11-R*2,9,8),new Dn({color:"#d8dde4",metalness:.9,roughness:.3}),390,259+R*8,15);Ge(n,new st(.3,1.2,40,6),De("#ddd"),390,318,15);let I=[[-265,15,-10,161],[-345,-75,-290,-10],[-545,-65,-495,-12],[-582,-405,-556,-366],[-265,-642,-15,-572],[-268,-720,-195,-650],[18,-717,112,-654],[190,-255,320,-10]],U=(R,B,L,G)=>{for(let q of[B,(B+G)/2,G]){let w=o(q);if(w>R-13&&w<L+13)return!0}return!1};Kh(i,r,(R,B,L,G,q,w)=>{let z=L<-270&&q>-560&&G>-420&&w<30,H=L>-280&&q<0&&G>-730&&w<-480,$=n.block(L,G,q,w,{hMin:z?30:35,hMax:H?150:z?180:210,lot:[16,30],depth:28,skew:1.4,lowChance:.1,avoid:(K,ve,Te,Z)=>I.some(me=>$d([K,ve,Te,Z],me))||U(K,ve,Te,Z),color:H?h:void 0,people:z?80:40});z&&$.forEach((K,ve)=>Jh(n,K,2,7,48,ve*3))});for(let[R,B]of i)n.parkCars(R-B/2,e[1],R+B/2,e[3],.22,["#f2c230","#f2c230","#f2c230","#2a2a2a","#e8e8e8","#3a4a6a"]);for(let[R,B]of i)n.lamps(R-B/2-1,e[1],R+B/2+1,e[3],40);return $l(n,e,700,260,60,280,n.cfg.palette.masonry.concat(n.cfg.palette.glass),[[-60,600,110,700],[355,-20,425,50]]),{spawn:[-790,0,150,Math.PI/2],goal:{pos:l.crystal,label:"Nav crystal"},log:l.tkts,checkpoints:[[-790,0,150],[-545,0,18],[-569,3.85,-392],[-262,0,-380],[-12,0,-605]]}}var vs=["#f7c6d0","#bfe8e0","#fde2a6","#cfe0f8","#f9d1b0","#e3d4f3","#ffffff","#c8f0d0","#ffd6e8","#fff1c1"],Yd=["#ff4fb8","#3ff0ff","#ffd84a","#7cff6a","#ff6a3a","#b67aff"],Zd=["OCEAN VIEW","STARLITE","THE PALMS","CORAL","FLAMINGO","TROPICS","SEA BREEZE","MOONGLOW","PELICAN","SUNRISE","NAUTILUS","BLUE WAVE","COMET","SAND DOLLAR","MERMAID"];function ky(n,e,t,i,s,r,a){let o=vs[a%vs.length],l=Yd[a%Yd.length];n.building(e,t,i,s,r,{color:o,style:"masonry",setback:!1,rooftop:!1});for(let d=4;d<r-1;d+=3.4)n.boxMesh(i,t+1,i+.9,s-1,d,d+.25,"#ffffff","flat",{collide:!1});let c=(t+s)/2;n.boxMesh(i-1,c-1.2,i+1.4,c+1.2,0,r+5,o,"flat");let u=Zd[a%Zd.length];zi(n,u,i+1.45,r/2+2.5,c,1.9,Math.min(r+3,u.length*1.4),Math.PI/2,{vertical:!0,fg:l,bg:"#1a1020",glow:l,fs:56,pad:8}),Ge(n,new Be(.25,.25,s-t-2),Bi(l),i+.2,r+.1,c).castShadow=!1,Ge(n,new Be(.25,.25,s-t-2),Bi(l),i+.95,4.3,c).castShadow=!1}function Gy(n,e,t,i,s){let r=De("#e8e2d6");for(let[l,c]of[[-1.3,-1.3],[1.3,-1.3],[-1.3,1.3],[1.3,1.3]])Qe(n,e+l-.12,t+c-.12,e+l+.12,t+c+.12,0,1.9,r);Qe(n,e-1.8,t-2.2,e+1.8,t+2.2,1.9,2.1,De("#d8d0c0"));let a=qt(128,64,l=>{let c=i.length;i.forEach((u,d)=>{l.fillStyle=u,l.fillRect(0,d*64/c,128,64/c+1)}),l.fillStyle="rgba(255,255,255,.85)",l.fillRect(48,22,32,20)},!1),o=new it(new Be(3,2.4,3),new Ht({map:a}));o.position.set(e,3.3,t),o.castShadow=!0,n.root.add(o),n.addBox(e-1.5,t-1.5,e+1.5,t+1.5,4.5,2.1),Ge(n,new Be(3.6,.25,3.6),De(i[0]),e,4.6,t,0,0,.12);for(let l=0;l<4;l++)Qe(n,e-2.2-(l+1)*1.1,t-.8,e-1.8-l*1.1,t+.8,0,1.9-l*.45,De("#d8d0c0"));n.mapRect(e-2,t-2,e+2,t+2,i[0])}function Hy(n){let e=n.bounds,t=f=>-(f-5)*155,i=[];for(let f=5;f<=17;f++)i.push([t(f),f===5?26:f===17?24:16,f]);let s=-1470,r=-1780,a=[[-600,14],[-520,12],[-445,12],[-370,12],[-290,20],[-115,18],[0,14]];n.waterRect(262,-4e3,4e3,4e3,"#2fa0b8"),n.rect(88,e[1],262,e[3],.02,"#f0dfb4","#ecd9a8"),n.rect(256,e[1],262,e[3],.035,"#d9c79a",!1),n.park(11,t(15)+8,86,40,{trees:0,plaza:!1,color:"#76b25a"}),n.rect(70,e[1],80,40,.04,"#e6d9c0","#e6d9c0");for(let f=30;f>t(15);f-=12)n.prop("palm",20+n.rand(-3,3),f,n.rand(0,6),n.rand(.9,1.2)),n.R()<.6&&n.prop("palm",55+n.rand(-8,8),f+6,n.rand(0,6),n.rand(.9,1.3));n.plaza(12,t(15)+10,86,30,null,26);for(let[f,h]of a)f===0?vi(n,f,h,t(15)-8,e[3]):f===-370?vi(n,f,h,e[1],t(12)):vi(n,f,h,e[1],e[3]);for(let[f,h,m]of i)ui(n,f,h,e[0],m<=15?7:-106);n.rect(-600,r-12,-298,r+12,.04,"#e9e2d4","#e9e2d4"),n.plaza(-596,r-10,-302,r+10,null,46);for(let f=-590;f<-300;f+=14)n.prop("palm",f,r,n.rand(0,6),.9);n.rect(-438,s-7,-298,s+7,.04,"#e8b4a0","#e8b4a0"),n.plaza(-436,s-6,-300,s+6,null,16),jl(n,a,i.map(f=>[f[0],f[1]]));for(let f=20;f>e[1]+20;f-=9)n.R()<.55&&n.prop("umbrella",n.rand(110,240),f,0,1,0,n.pick(["#ff6a8a","#3fb8ff","#ffd84a","#ffffff","#7cff6a","#ff8a3a"]));for(let f=0;f>e[1];f-=90)n.plaza(100,f-40,250,f,null,9);let o=["#e8242c","#ff8a1a","#ffd84a","#2fa85f","#2f5fa8","#7a3fb8"],l=[["#ffb3c6","#ffffff"],["#7fe3d8","#ffd84a"],["#ffd84a","#ff6a3a"],["#b7a4ff","#ffffff"],["#3fb8ff","#ff6a8a"],["#7cff6a","#2f5fa8"],["#ff8a3a","#ffffff"]];for(let f=5;f<=16;f++)Gy(n,172,t(f)-20,f===12?o:l[f%l.length],f);let c=qt(256,64,f=>{f.fillStyle="#fbfbf7",f.fillRect(0,0,256,64),f.fillStyle="#2a6fa8",f.fillRect(0,52,256,8);for(let h=0;h<7;h++)f.beginPath(),f.arc(20+h*36,28,10,0,7),f.fill()},!1),u=new it(new Be(22,7,30),[new Ht({map:c}),new Ht({map:c}),De("#f2f2ee"),De("#f2f2ee"),new Ht({map:c}),new Ht({map:c})]);u.position.set(52,3.5,t(10)),u.castShadow=!0,n.root.add(u),n.addBox(41,t(10)-15,63,t(10)+15,7),n.mapBuilding(41,t(10)-15,63,t(10)+15),Ge(n,new st(4,4,9,16),De("#f6f6f2"),63,4.5,t(10)),n.addBox(60,t(10)-4,67,t(10)+4,9),Ge(n,new Be(.4,.4,30),Bi("#3ff0ff"),63.3,7.1,t(10)).castShadow=!1;let d=0;for(let f=0;f<i.length-1;f++){let h=i[f][0]-i[f][1]/2-Qt,m=i[f+1][0]+i[f+1][1]/2+Qt,x=i[f][2];for(let p=0;p<a.length-1;p++){let g=a[p][0]+a[p][1]/2+Qt,_=a[p+1][0]-a[p+1][1]/2-Qt;if(a[p][0]===-115){if(x>=15){n.block(g,m,90,h,{hMin:25,hMax:80,color:void 0,palette:vs,lot:[30,50],depth:40});continue}for(let y=m;y<h-6;){let b=Math.min(n.rand(22,36),h-y);if(b<10)break;ky(n,_-30,y+.8,_,y+b-.8,n.rand(11,18),d++),n.R()<.8&&n.building(g,y+1,_-34,y+b-1,n.rand(9,26),{color:n.pick(vs),style:"masonry",setback:!1}),y+=b}n.loops.push({r:[g-2.5,m-2.5,_+2.5,h+2.5],n:120});for(let y=m+4;y<h-4;y+=7)n.R()<.6&&n.prop("umbrella",_+3.2,y,0,.7,0,n.pick(["#ffffff","#ff6a8a","#3fb8ff","#ffd84a"]));n.plaza(_+1,m,_+4,h,null,6);continue}if(a[p+1][0]===0)continue;let M=m<s+20&&h>s-20||m<r+30&&h>r-30,v=a[p][0]===-290;if(m<r&&h>r&&g<-298){n.block(g,m,_,r-12-Qt,{hMin:7,hMax:16,palette:vs,color:void 0,lot:[14,24],depth:24,people:30}),n.block(g,r+12+Qt,_,h,{hMin:7,hMax:16,lot:[14,24],depth:24,people:30});continue}if(m<s&&h>s&&g<-298&&_>-440){n.block(g,m,_,s-7-Qt,{hMin:8,hMax:12,color:"#f2b8a4",lot:[12,20],depth:20}),n.block(g,s+7+Qt,_,h,{hMin:8,hMax:12,color:"#f7c9b0",lot:[12,20],depth:20});continue}let T=v?30:a[p][0]===-600||a[p][0]===-520?14:16;n.block(g,m,_,h,{hMin:v?9:7,hMax:T,lot:v?[18,32]:[14,22],depth:v?30:20,color:M?"#f4bba6":void 0,people:v?60:20,lowChance:.3}).forEach(y=>{y.h<16&&n.R()<.35&&n.prop("palm",n.rand(y.x0,y.x1),y.z1+2.5,n.rand(0,6),.8)})}}n.lamps(-8,e[1],8,e[3],30);for(let[f,h]of a.slice(0,6))n.parkCars(f-h/2,e[1],f+h/2,e[3],.18,["#ff6a8a","#3fb8ff","#ffffff","#ffd84a","#2a2a2a","#b7a4ff","#7fe3d8"]);return $l(n,e,500,90,25,140,vs,[[262,-4e3,4e3,4e3]]),{spawn:[40,0,-15,Math.PI],goal:{pos:[172,4.75,t(12)-20],label:"Power core"},log:[52,9.3,t(10)],checkpoints:[[40,0,-15],[-5,0,t(8)],[80,0,t(10)+30],[140,0,t(11)],[140,0,t(12)]]}}function Jd(n,e){for(let t=0;t<e;t++){let i=n.rand(n.bounds[0],n.bounds[2]),s=n.rand(n.bounds[1],n.bounds[3]);n.props.sage=n.props.sage||[],n.props.sage.push({x:i,y:0,z:s,rot:n.rand(0,6),s:n.rand(.6,1.4)})}for(let t=0;t<e/8;t++)n.prop("joshua",n.rand(n.bounds[0],n.bounds[2]),n.rand(n.bounds[1],n.bounds[3]),n.rand(0,6),n.rand(.8,1.4));for(let t=0;t<e/10;t++){let i=n.rand(n.bounds[0],n.bounds[2]),s=n.rand(n.bounds[1],n.bounds[3]),r=n.rand(.6,2.2);n.prop("rock",i,s,n.rand(0,6),r),n.addBox(i-r,s-r*.8,i+r,s+r*.8,r*.7)}qd(n,0,0,1300,1900,34,["#b48a6a","#9a7a66","#a8826e","#8a6e62","#c29a76"])}function Vy(n){Jd(n,900);let e=[[-900,-260],[900,240]];n.roadSeg(e[0][0],e[0][1],e[1][0],e[1][1],11,{color:"#4a4a4e"});let t=o=>-260+(o+900)/1800*500;n.roadSeg(-120,t(-120),-200,520,8,{color:"#b89c74",map:"#c9b08a",paint:!1}),n.roadSeg(-200,520,-250,690,8,{color:"#b89c74",map:"#c9b08a",paint:!1});let i=De("#8a5a3a");Qe(n,-40,t(-40)-48,4,t(-40)-26,0,4.4,i),n.mapBuilding(-40,t(-40)-48,4,t(-40)-26),Ge(n,new Be(46,.4,24),De("#6a4a32"),-18,4.6,t(-40)-37),zi(n,"EARTHLINGS WELCOME",-18,6.6,t(-40)-25.6,14,2.2,0,{fg:"#ffe9a0",bg:"#3a2412",fs:56,glow:"#ffcc55"}),n.plaza(-50,t(-40)-24,20,t(-40)-8,"#b5a080",16,"#b5a080"),Qe(n,10,t(10)-22,13,t(10)-14,0,2.6,De("#c8c4b8")),Ge(n,new st(.2,.2,9,6),De("#444"),11.5,5,t(10)-12,-.6,0,0),Jl(n,11.5,6.6,t(10)-7,3,.3,{lights:"#ffd84a"});for(let o=0;o<12;o++){let l=n.rand(30,320),c=t(l)-n.rand(30,160),u=n.rand(5,9),d=n.rand(14,20);Qe(n,l,c,l+u,c+d,0,3.3,De(n.pick(["#e8e4da","#d9d2c2","#c9c2b0","#e2dccd"]))),n.mapBuilding(l,c,l+u,c+d),n.loops.push({r:[l-3,c-3,l+u+3,c+d+3],n:2})}for(let o=0;o<10;o++)n.prop("car",n.rand(-48,15),t(0)-n.rand(10,22),n.rand(0,6),1,0,n.pick(["#e8e8e8","#8a4a2a","#3a4a6a","#c8b070"]));let s=180,r=t(180)-12;Qe(n,s-3.2,r-.2,s-2.8,r+.2,0,3.4,De("#555")),Qe(n,s+2.8,r-.2,s+3.2,r+.2,0,3.4,De("#555")),zi(n,"EXTRATERRESTRIAL HWY",s,3.6,r+.25,7,1.6,0,{fg:"#fff",bg:"#5a3a22",fs:54,lit:!1,border:"#fff"}),zi(n,"EXTRATERRESTRIAL HWY",s,3.6,r-.25,7,1.6,Math.PI,{fg:"#fff",bg:"#5a3a22",fs:54,lit:!1,border:"#fff"});for(let o=-780;o<=780;o+=40)Qe(n,o-.15,519.85,o+.15,520.15,0,1.6,De("#ff7a1a"));for(let o of[-420,-320,-80,40])zi(n,"RESTRICTED AREA  NO TRESPASSING",o,1.8,518,6,1.4,Math.PI,{fg:"#c01818",bg:"#f2efe6",fs:40,lit:!1,border:"#c01818"});for(let o=-350;o<=-50;o+=4)Math.abs(o+200)>6&&Qe(n,o-2,519.9,o+2,520.1,0,2.9,De("#9aa0a6"));n.mapRect(-350,519,-50,521,"#9aa0a6"),Qe(n,-192,505,-184,512,0,3,De("#d8d2c2")),n.prop("car",-170,470,.8,1,0,"#f2f2f2"),n.prop("car",120,470,-.4,1,0,"#f2f2f2"),n.plaza(-185,470,-150,500,null,3),n.plaza(110,455,135,485,null,2),n.poly(Array.from({length:16},(o,l)=>[520+Math.cos(l/16*6.283)*9,-560+Math.sin(l/16*6.283)*9]),.03,"#9c7c5a","#9c7c5a");for(let o=0;o<14;o++){let l=o/14*6.283;n.prop("rock",520+Math.cos(l)*16,-560+Math.sin(l)*16,l,n.rand(.6,1.1))}n.poly([[-330,640],[-170,640],[-150,760],[-350,760]],.03,"#c4a67e","#c4a67e");let a=Jl(n,-250,1.5,700,9,.22,{lights:"#3a5a60"});return n.addBox(-258,692,-242,708,3.2),{spawn:[520,0,-560,Math.PI*.85],goal:{pos:[-250,.5,688],label:"The ship",radius:13},log:[180,0,t(180)-9],checkpoints:[[520,0,-560],[-10,0,t(-10)-14],[-160,0,300],[-200,0,490]],ship:a}}function Xy(n){Jd(n,600),n.poly([[-760,-760],[760,-760],[700,-260],[200,-180],[-500,-230],[-760,-300]],.025,"#e2d8c2","#e2d8c2"),n.road(-30,-680,30,640,{color:"#3a3a3e",paintColor:"#f2f2f2"});for(let l=-670;l<640;l+=30)for(let c of[-30.5,30.5])Ge(n,new Be(.6,.3,.6),Bi(l<-600?"#3aff6a":"#fff2c8"),c,.2,l).castShadow=!1;n.road(-200,-40,-30,-20,{paint:!1}),n.road(-200,180,-30,200,{paint:!1}),n.road(-560,-40,-200,420,{color:"#4a4a4e",paint:!1});let e=De("#d8dbe0"),t=De("#9aa2ac"),i=[];for(let l=0;l<6;l++){let c=-20+l*70,u=-190,d=-130;Qe(n,u,c,d,c+50,0,18,e),n.mapBuilding(u,c,d,c+50),Ge(n,new yn(44,15),t,d+.1,7.5,c+25,0,Math.PI/2,0),zi(n,String(13+l),d+.2,16,c+25,5,2.6,Math.PI/2,{fg:"#1a1a1a",bg:"#d8dbe0",fs:80,lit:!1}),i.push([u,c])}for(let l=0;l<4;l++){let c=40+l*90;n.building(-330,c,-240,c+50,n.rand(10,18),{color:"#cbbf9f",style:"masonry",setback:!1}),n.loops.push({r:[-333,c-3,-237,c+53]})}for(let l=0;l<3;l++){let c=-40+l*80;n.building(-520,c,-440,c+40,12,{color:"#bfb59a",style:"masonry",setback:!1})}Qe(n,-110,470,-100,480,0,30,De("#c9c2b0")),Ge(n,new Be(14,6,14),new Ot({color:"#3a9a7a"}),-105,33,475),n.addBox(-112,468,-98,482,36,30);for(let[l,c]of[[220,80],[260,300]]){Qe(n,l-1,c-1,l+1,c+1,0,12,De("#9aa0a6"));let u=Ge(n,new yt(7,16,8,0,Math.PI*2,0,Math.PI/3),De("#e8e8e8",{side:Cn}),l,14,c,-1.1,0,0);u.userData.dynamic=!0,n.anim.push(d=>{u.rotation.y=d*.4})}let s=new Ot({color:"#fff2c8",transparent:!0,opacity:.32,depthWrite:!1,blending:Gn}),r=new Ot({color:"#fff2c8",transparent:!0,opacity:.08,depthWrite:!1,blending:Gn,side:Cn}),a=[[-125,0],[-125,140],[-125,280],[-125,420],[60,-380],[180,-380],[60,-480],[180,-480],[120,-330],[-220,300],[-60,520]];for(let[l,c]of a){n.prop("flood",l,c,0);let u=new it(new Kn(16,24),s);u.rotation.x=-Math.PI/2,u.position.set(l,.08,c+6),n.root.add(u);let d=new it(new Ln(16,9,20,1,!0),r);d.position.set(l,4.5,c+4),n.root.add(d)}let o=Jl(n,120,2.2,-430,9,.02,{lights:"#3ff0ff"});n.addBox(111,-439,129,-421,3.4);for(let l=0;l<6;l++){let c=l/6*6.283,u=120+Math.cos(c)*34,d=-430+Math.sin(c)*34;Qe(n,u-4,d-3,u+4,d+3,0,3,De("#f2f2ee"))}n.plaza(80,-470,160,-390,null,26);for(let l=0;l<14;l++)n.prop("car",n.rand(-520,-350),n.rand(-60,420),n.rand(0,6),1,0,n.pick(["#f2f2f2","#2a2a2a","#6f7a52"]));return n.plaza(-200,-40,-40,420,null,26),n.plaza(-120,440,-60,520,null,8),{spawn:[380,0,740,Math.PI*1.15],goal:{pos:[120,.5,-418],label:"The ship",radius:14},log:[-160,18.4,375],checkpoints:[[380,0,740],[-60,0,560],[-110,0,200],[40,0,-200]],ship:o}}var Ql={masonry:["#c9b9a0","#b8a68c","#a8977f","#d6c8b0","#9b8a76","#c2b5a5","#8d7b6a","#d8d0c4","#b3a18a","#7f6d5d"],glass:["#8fb0c8","#a9bccf","#7f98ad","#b8c8d6","#6d8aa0","#9ab0c0"]},Vn=[{id:"nevada",name:"Nevada",place:"Rachel, NV \xB7 Extraterrestrial Highway",bounds:[-800,-800,800,800],seed:51,groundColor:"#d6b98d",outerGround:"#cfae80",mapGround:"#d6b98d",mapRoad:"#4a4a4e",asphalt:"#4a4a4e",palette:Ql,light:{sky:["#2f6fca","#a9cdef","#e5d2ae"],sunDir:[.45,.85,.35],sun:["#fff1d8",2.7],hemi:["#d2e6ff","#b8976a",1.35],fog:"#dbe5ee",fogNear:350,fogFar:2400},civ:{count:34,visR:30,panic:14,palette:{shirt:["#e8e8e8","#3a6fd1","#d94c4c","#6f7a52","#f2c230","#8a5a3a"],pants:["#2c3550","#6f6a52","#3b3b3b","#a8956c"]}},build:Vy},{id:"chicago",name:"Chicago",place:"Millennium Park \xB7 Michigan Ave \xB7 the river",bounds:[-460,-1190,720,520],seed:312,groundColor:"#b9b6ae",outerGround:"#a9a69e",mapGround:"#c9c6be",palette:Ql,light:{sky:["#2f6fd0","#9dc8f0","#dfe9f3"],sunDir:[.5,.72,.45],sun:["#fff0d6",2.5],hemi:["#d6e8ff","#8a8a80",1.25],fog:"#c8dcec",fogNear:280,fogFar:1900},civ:{count:230,visR:22,panic:9},build:By},{id:"nyc",name:"New York",place:"Times Square \xB7 Bryant Park \xB7 Rockefeller Center",bounds:[-870,-1080,330,300],seed:212,waterTowers:.3,groundColor:"#aeaaa4",outerGround:"#9a968f",mapGround:"#bdb9b2",palette:Ql,winLit:.35,light:{sky:["#34457f","#ee9f66","#f2bc8c"],sunDir:[-.72,.22,.4],sun:["#ffbe78",2.4],hemi:["#b8c4f0","#8a7a6a",1.75],fog:"#cf9e86",fogNear:220,fogFar:1500},civ:{count:290,visR:20,panic:7},build:zy},{id:"miami",name:"Miami",place:"South Beach \xB7 Ocean Drive \xB7 Lincoln Road",bounds:[-640,-1900,300,60],seed:305,groundColor:"#d8d2c4",outerGround:"#cfc6b4",mapGround:"#ddd6c6",palette:{masonry:vs,glass:["#bfe8e0","#cfe0f8","#a8d8e8"]},winLit:.4,light:{sky:["#4a5fa8","#f7a070","#f8c89a"],sunDir:[-.86,.16,.2],sun:["#ffb070",2.4],hemi:["#bcc4f0","#c9a080",1.25],fog:"#f0b898",fogNear:240,fogFar:1700},civ:{count:220,visR:24,panic:9,palette:{shirt:["#ff6a8a","#3fb8ff","#ffffff","#ffd84a","#7cff6a","#ff8a3a","#b67aff","#f2f2f2","#2a2a2a"],pants:["#f2f2f2","#2c3550","#d9c7a0","#3fb8ff","#ff6a8a"]}},build:Hy},{id:"area51",name:"Area 51",place:"Groom Lake, NV \xB7 after dark",bounds:[-800,-800,800,800],seed:5151,night:!0,winLit:.9,groundColor:"#bfae8c",outerGround:"#b3a280",mapGround:"#bfae8c",mapRoad:"#3a3a3e",asphalt:"#3a3a3e",palette:Ql,light:{sky:["#050918","#16204a","#262a44"],stars:!0,moon:"#f2f0ff",moonDir:[.35,.55,-.6],sunDir:[.35,.55,-.6],sunDisk:"#000000",sun:["#a8bcff",1.7],hemi:["#6a7ac0","#5a4a30",1.7],fog:"#121a34",fogNear:160,fogFar:1300},civ:{count:95,visR:24,panic:15,palette:{shirt:["#f2f2f2","#f2f2f2","#c8b68a","#6f7a52","#2b3a55"],pants:["#2b2b2b","#6f6a52","#c8b68a"],hair:["#1c1a18","#3b2a1e","#6b6b6b","#c9a36a"]}},build:Xy}];var pr=[{id:"nevada",name:"Nevada",title:"The Crash Site",card:"You woke up alone in the desert. Past the fence is the ship your great-grandmother flew here. Get to it, and find out why it never left.",endKick:"Level 1 complete",endTitle:"The ship sleeps",endStory:"Three pieces gone, scattered to Chicago, New York and Miami. The lights inside won\u2019t wake without them.",log:"Day 1. The landing was not a landing. The hull cracked and three systems scattered on impact. The locals arrived before the smoke cleared.",music:{bpm:118,prog:[{r:33,v:[60,64,67,71]},{r:29,v:[57,60,64,67]},{r:26,v:[60,64,65,69]},{r:28,v:[59,62,64,69]}],bass:[0,null,null,0,null,null,12,null,0,null,null,7,null,10,null,null],stab:[0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0],stabType:"keys",clap:!0,lead:[[0,69,6],[8,72,4],[12,71,2],[14,69,2],[16,67,8],[28,64,4],[32,65,6],[40,69,4],[44,67,4],[48,64,12]],leadType:"twang"}},{id:"chicago",name:"Chicago",title:"The Gravity Coil",card:"The first piece, the gravity coil, ended up on a rooftop in the Loop. The streets are watched. The roofs mostly aren\u2019t.",endKick:"Level 2 complete",endTitle:"Coil recovered",endStory:"It hums when you hold it, like it remembers the ship. One down. New York next.",log:"Day 40. They took the gravity coil east, to a city on a lake that hums all night. I followed the hum.",music:{bpm:122,prog:[{r:29,v:[60,63,67,68]},{r:34,v:[61,65,68,72]},{r:27,v:[62,65,67,70]},{r:36,v:[58,63,67,70]}],bass:[0,null,0,null,null,null,12,null,0,null,null,0,null,null,10,12],stab:[0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0],stabType:"organ",clap:!0,lead:[[2,72,2],[4,75,2],[7,77,3],[12,75,2],[14,72,2],[18,70,2],[20,72,4],[34,72,2],[36,75,2],[39,79,3],[44,77,2],[46,75,2],[50,72,6]],leadType:"keys"}},{id:"nyc",name:"New York",title:"The Nav Crystal",card:"The navigation crystal is in Manhattan, where there are a lot more people looking. You can\u2019t go around all of them. Put them to sleep.",endKick:"Level 3 complete",endTitle:"Crystal recovered",endStory:"It throws a map of stars across your hands, then goes dark again. One more piece. Miami.",log:"Day 212. The crystal is under a million windows. Too many eyes for me. Maybe not for someone smaller.",music:{bpm:120,prog:[{r:26,v:[64,65,69,72]},{r:31,v:[65,69,71,76]},{r:36,v:[62,64,67,71]},{r:33,v:[61,64,67,70]}],bass:[0,null,null,null,7,null,null,null,12,null,null,null,10,null,7,null],stab:[0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0],stabType:"keys",clap:!0,lead:[[0,74,3],[4,77,2],[6,76,2],[8,74,4],[14,72,2],[16,69,8],[32,74,3],[36,77,2],[38,79,2],[40,81,6],[48,79,2],[50,77,2],[52,76,4],[56,74,8]],leadType:"horn"}},{id:"miami",name:"Miami",title:"The Power Core",card:"The power core is in Miami, out where the lights are bright and the cover is thin. Don\u2019t walk the open stretches. Blink across them.",endKick:"Level 4 complete",endTitle:"Core recovered",endStory:"It\u2019s warm, and getting warmer. All three pieces. Back to the desert.",log:"Day 300. The core is somewhere warm. I am too slow now, so I am leaving these logs where only our kind would look.",music:{bpm:124,prog:[{r:31,v:[65,69,70,74]},{r:36,v:[64,67,70,74]},{r:29,v:[64,67,69,72]},{r:34,v:[62,65,69,70]}],bass:[0,null,null,7,null,null,12,null,0,null,null,7,null,null,12,null],stab:[1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1],stabType:"piano",clap:!0,clave:[0,3,6,10,12],conga:[7,14,15],lead:[[0,74,2],[3,77,2],[6,79,2],[8,77,2],[10,74,2],[12,72,4],[16,70,2],[19,72,2],[22,74,6],[32,74,2],[35,77,2],[38,81,2],[40,79,2],[42,77,2],[44,74,4],[48,72,2],[50,70,2],[52,69,8]],leadType:"mallet"}},{id:"area51",name:"Area 51",title:"The Long Way Home",card:"Three pieces. One ship. They doubled the guard while you were gone, and the floodlights are on. Everything you\u2019ve learned, all at once.",endKick:"Level 5 complete",endTitle:"Liftoff",endStory:"",log:"Last entry. If you found these, you are my blood. Fix her gently. She remembers the way home.",music:{bpm:112,prog:[{r:39,v:[62,65,67,70]},{r:37,v:[60,63,65,68]},{r:36,v:[62,63,67,70]},{r:32,v:[60,62,67,68]}],bass:[0,null,null,null,null,null,null,null,0,null,null,12,null,null,null,null],stab:[0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0],stabType:"keys",clap:!1,lead:[[0,67,3],[3,70,3],[6,77,4],[10,74,3],[13,69,6],[32,67,3,-12],[35,70,3,-12],[38,77,4,-12],[42,74,3,-12],[45,69,8,-12]],leadType:"signal",leadAlways:!0}}];function Kd(n){for(let t of n.children)t.isGroup&&Kd(t);let e=new Map;for(let t of[...n.children])t.isMesh&&(t.updateMatrix(),(e.get(t.material)||e.set(t.material,[]).get(t.material)).push(t));for(let[t,i]of e){if(i.length<2)continue;let s=i.map(o=>{let l=o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone();return l.applyMatrix4(o.matrix),l}),r=dr(s,!1);if(!r)continue;let a=new it(r,t);a.castShadow=!0,n.add(a);for(let o of i)n.remove(o),o.geometry.dispose()}}var Ut={skin:"#93cf3a",spot:"#5e9b2b",hoodie:"#c8322b",hoodieDark:"#9a231f",stripe:"#f2ebe3",tee:"#efe6da",denim:"#3b4766",denimDark:"#2a3350",glove:"#26262c",shoe:"#f1ece4",shoeDark:"#2d2a2e",shoeRed:"#b8312a",pack:"#6e5641",packDark:"#4a3a2c",glow:"#3ff0ff",brow:"#4a2f1f",eye:"#ffffff",iris:"#262a36",mouth:"#5a1720",tongue:"#e8737a"};function bt(n,e={}){let t=new Dn({color:n,roughness:e.r??.75,metalness:e.m??0,emissiveIntensity:e.ei??1,map:e.map||null});return e.e&&(t.emissive=new Re(e.e)),t}function Ie(n,e,t,i=0,s=0,r=0,a=0,o=0,l=0,c=1,u=1,d=1){let f=new it(e,t);return f.position.set(i,s,r),f.rotation.set(a,o,l),f.scale.set(c,u,d),f.castShadow=!0,n.add(f),f}function Wy(){return qt(512,256,(n,e,t)=>{n.fillStyle=Ut.skin,n.fillRect(0,0,e,t);let i=(()=>{let s=11;return()=>(s=s*16807%2147483647)/2147483647})();for(let s=0;s<46;s++){let r=Math.pow(i(),1.5)*t*.55,a=i()*e,o=5+i()*11;r>t*.32&&Math.abs(a-e*.25)<e*.12||(n.fillStyle=i()<.5?Ut.spot:"#6aa833",n.globalAlpha=.35+i()*.3,n.beginPath(),n.ellipse(a,r,o*1.3,o,i()*3,0,Math.PI*2),n.fill())}n.globalAlpha=.35,n.fillStyle="#e88b6a";for(let s of[e*.19,e*.31])n.beginPath(),n.ellipse(s,t*.58,20,12,0,0,Math.PI*2),n.fill();n.globalAlpha=1},!1)}function qy(){return qt(64,80,n=>{n.fillStyle=Ut.tee,n.fillRect(0,0,64,80);let e=(t,i,s)=>{n.fillStyle=s,n.fillRect(t*4,i*4,4,4)};for(let t=6;t<=9;t++)for(let i=4;i<=5;i++)e(t,i,"#58c8f0");for(let t=3;t<=12;t++)e(t,6,"#9a5cd6");for(let t=2;t<=13;t++)e(t,7,"#7a3fb8");for(let t=4;t<=11;t++)e(t,8,"#5a2c90");[4,7,10].forEach(t=>e(t,7,"#ffd84a"));for(let t=9;t<=16;t++)for(let i=7-Math.floor((t-9)/2);i<=8+Math.floor((t-9)/2);i++)e(i,t,"#ffe27a");e(7,13,"#3a2a10"),e(8,13,"#3a2a10"),e(7,14,"#3a2a10"),[[2,2],[13,3],[3,12],[12,11]].forEach(([t,i])=>e(t,i,"#f0b84a"))},!1)}function Yy(){return qt(64,64,n=>{n.fillStyle=Ut.stripe,n.beginPath(),n.arc(32,32,30,0,7),n.fill(),n.strokeStyle=Ut.shoeRed,n.lineWidth=5,n.beginPath(),n.ellipse(32,32,26,9,-.3,0,7),n.stroke(),n.fillStyle=Ut.shoeRed,n.beginPath(),n.arc(32,32,12,0,7),n.fill(),n.fillStyle="#ffd84a",n.beginPath();for(let e=0;e<10;e++){let t=e*Math.PI/5-Math.PI/2,i=e%2?4:9;n.lineTo(32+Math.cos(t)*i,32+Math.sin(t)*i)}n.fill()},!1)}function Qd(){let n={skin:bt(Ut.skin,{r:.55}),head:bt("#ffffff",{r:.5,map:Wy()}),hoodie:bt(Ut.hoodie,{r:.85}),hoodieDark:bt(Ut.hoodieDark,{r:.9}),stripe:bt(Ut.stripe),tee:bt("#ffffff",{map:qy()}),patch:bt("#ffffff",{map:Yy()}),denim:bt(Ut.denim,{r:.95}),denimDark:bt(Ut.denimDark,{r:.95}),glove:bt(Ut.glove,{r:.6}),shoe:bt(Ut.shoe,{r:.6}),shoeDark:bt(Ut.shoeDark),shoeRed:bt(Ut.shoeRed),pack:bt(Ut.pack,{r:.8}),packDark:bt(Ut.packDark),paper:bt("#d9c39a"),glow:bt("#0a3a40",{e:Ut.glow,ei:1.6}),eye:bt(Ut.eye,{r:.2}),iris:bt(Ut.iris,{r:.2}),brow:bt(Ut.brow),mouth:bt(Ut.mouth),tongue:bt(Ut.tongue),bulb:bt("#fff6a0",{e:"#ffe45a",ei:2.2,r:.2}),metal:bt("#b9c0c8",{r:.3,m:.6}),ufoDome:bt("#7fd6ff",{r:.2}),ufoLight:bt("#ffd84a",{e:"#ffcc33",ei:1.5})},e=new vt;e.name="alien";let t=new vt;t.position.y=.5,e.add(t);let i=[];for(let _ of[1,-1]){let M=new vt;M.position.set(_*.085,0,0),t.add(M),Ie(M,new st(.1,.115,.3,10),n.denim,0,-.16,0),Ie(M,new st(.09,.08,.07,10),n.denimDark,0,-.34,0),Ie(M,new Be(.035,.09,.1),n.denimDark,_*.115,-.19,.01),Ie(M,new Be(.006,.012,.06),n.glow,_*.134,-.165,.01),Ie(M,new st(.04,.04,.06,8),n.skin,0,-.39,0);let v=new vt;v.position.set(0,-.44,.03),M.add(v),Ie(v,new Be(.14,.045,.27),n.shoe,0,-.035,0),Ie(v,new Be(.142,.012,.272),n.shoeRed,0,-.008,0),Ie(v,new Be(.128,.085,.23),n.shoe,0,.03,-.005),Ie(v,new Be(.13,.05,.08),n.shoeDark,0,.02,.085),Ie(v,new Be(.13,.07,.07),n.shoeRed,0,.03,-.09),Ie(v,new Be(.09,.05,.08),n.shoeRed,0,.085,-.03,-.3),Ie(v,new Be(.004,.012,.09),n.glow,_*.071,-.035,.04),Ie(v,new on(.022,.006,6,14),n.shoeRed,_*.066,.035,0,0,Math.PI/2,.4).scale.set(1,.55,1),Ie(v,new yt(.011,6,4),n.shoeRed,_*.066,.035,0);for(let A=0;A<3;A++)Ie(v,new Be(.08,.008,.012),n.stripe,0,.076-A*.005,.04-A*.03);i.push(M)}let s=new vt;s.position.y=0,t.add(s),Ie(s,new js(.155,.1,6,14),n.hoodie,0,.2,0,0,0,0,1,1,.8),Ie(s,new st(.15,.135,.07,14),n.hoodieDark,0,.035,0,0,0,0,1,1,.82),Ie(s,new st(.128,.115,.05,14),bt(Ut.tee),0,0,0,0,0,0,1,1,.85),Ie(s,new Be(.03,.08,.012),bt("#d8d0c2"),.02,-.03,.098),Ie(s,new yn(.135,.2),n.tee,0,.2,.1245),Ie(s,new Be(.008,.25,.01),n.metal,.072,.19,.118,0,.35),Ie(s,new Be(.008,.25,.01),n.metal,-.072,.19,.118,0,-.35),Ie(s,new Kn(.03,14),n.patch,.105,.28,.093,0,.75),Ie(s,new on(.11,.05,8,16),n.hoodie,0,.385,-.035,Math.PI/2-.25);for(let _ of[1,-1])Ie(s,new st(.006,.006,.12,4),n.stripe,_*.045,.31,.12);let r=new vt;r.position.set(0,.22,-.13),s.add(r),Ie(r,new Be(.25,.27,.12),n.pack,0,0,-.06),Ie(r,new Be(.21,.08,.04),n.packDark,0,-.08,-.13),Ie(r,new on(.06,.014,8,20),n.glow,0,.03,-.122),Ie(r,new Kn(.047,16),bt("#18242a"),0,.03,-.121,0,Math.PI),Ie(r,new Kn(.02,12),n.glow,0,.03,-.123,0,Math.PI);for(let _ of[1,-1])Ie(r,new Be(.012,.12,.03),n.glow,_*.128,.02,-.06),Ie(r,new Be(.035,.3,.02),n.packDark,_*.075,.02,.2,.15);for(let _=0;_<3;_++)Ie(r,new Be(.085,.13,.008),n.paper,-.06+_*.02,.17,-.04-_*.02,-.1,0,.25-_*.15);let a=new vt;a.position.set(.07,-.13,-.12),r.add(a),Ie(a,new on(.012,.003,4,10),n.metal,0,0,0),Ie(a,new st(.003,.003,.04,4),n.metal,0,-.025,0),Ie(a,new yt(.04,12,6),n.metal,0,-.06,0,0,0,0,1,.32,1),Ie(a,new yt(.018,10,6,0,Math.PI*2,0,Math.PI/2),n.ufoDome,0,-.055,0);for(let _=0;_<4;_++)Ie(a,new yt(.006,4,3),n.ufoLight,Math.cos(_*1.57)*.032,-.063,Math.sin(_*1.57)*.032);let o=[];for(let _ of[1,-1]){let M=new vt;M.position.set(_*.165,.33,0),s.add(M),Ie(M,new yt(.075,10,8),n.hoodie,0,-.01,0),Ie(M,new js(.062,.15,4,10),n.hoodie,0,-.12,0);for(let T of[-.075,-.105])Ie(M,new st(.0645,.0645,.016,10),n.stripe,0,T,0);Ie(M,new st(.055,.05,.04,10),n.hoodieDark,0,-.23,0),Ie(M,new st(.03,.03,.03,8),n.skin,0,-.26,0),Ie(M,new st(.036,.036,.03,10),n.glove,0,-.28,0),Ie(M,new Be(.03,.014,.008),n.glow,_*.005,-.28,.036);let v=new vt;v.position.y=-.33,M.add(v),Ie(v,new yt(.052,10,8),n.glove,0,0,0,0,0,0,.9,1,1.05);for(let T=0;T<3;T++)Ie(v,new yt(.016,6,5),n.skin,_*.005,-.05,.02-T*.022);Ie(v,new yt(.017,6,5),n.skin,-_*.035,-.02,.035),o.push(M)}let l=new vt;l.position.y=.44,s.add(l),Ie(l,new st(.045,.055,.06,10),n.skin,0,0,0);let c=Ie(l,new yt(.25,28,20),n.head,0,.24,0,0,-Math.PI/2,0,1.03,.96,.97);c.name="skull";for(let _ of[1,-1]){Ie(l,new yt(.085,16,12),n.eye,_*.095,.215,.195,0,0,0,1,1.12,.55),Ie(l,new yt(.056,14,10),n.iris,_*.09,.205,.226,0,0,0,1,1.1,.45),Ie(l,new yt(.017,6,5),n.eye,_*.09+.022,.235,.252),Ie(l,new yt(.008,5,4),n.eye,_*.09-.02,.185,.25),Ie(l,new Be(.105,.026,.03),n.brow,_*.095,.315,.205,.25,0,_*.33);let M=new vt;M.position.set(_*.22,.27,-.02),M.rotation.set(0,0,_*(-Math.PI/2+.32)),l.add(M),Ie(M,new Ln(.085,.3,10),n.skin,0,.14,0,0,0,0,1,1,.45),Ie(M,new Ln(.05,.2,8),bt("#79b430"),0,.12,.022,0,0,0,1,1,.25)}let u=new vt;u.position.set(.015,.105,.225),u.rotation.x=-.25,l.add(u),Ie(u,new Kn(.06,14,Math.PI,Math.PI),n.mouth,0,.012,0,0,0,0,1,.75,1),Ie(u,new Kn(.03,10,Math.PI,Math.PI),n.tongue,.01,-.012,.002),Ie(u,new Be(.1,.012,.01),n.eye,0,.008,.003),Ie(u,new on(.06,.007,4,14,Math.PI),bt("#5d8f26"),0,.012,0,0,0,Math.PI,1,.75,1);let d=new vt;d.position.set(0,.46,-.02),l.add(d);let f=new tr([new P(0,0,0),new P(0,.16,-.02),new P(.05,.29,-.01),new P(.16,.32,0),new P(.24,.25,.01),new P(.26,.17,.01)]);Ie(d,new da(f,24,.017,6),n.skin),Ie(d,new st(.022,.03,.035,8),bt("#d9c25a",{r:.4,m:.4}),.26,.15,.01);let h=Ie(d,new yt(.058,16,12),n.bulb,.26,.095,.01),m=qt(64,64,_=>{let M=_.createRadialGradient(32,32,2,32,32,32);M.addColorStop(0,"rgba(255,240,150,1)"),M.addColorStop(.35,"rgba(255,220,90,.45)"),M.addColorStop(1,"rgba(255,200,60,0)"),_.fillStyle=M,_.fillRect(0,0,64,64)},!1),x=new oi(new Jn({map:m,blending:Gn,depthWrite:!1,transparent:!0}));x.scale.setScalar(.32),x.position.copy(h.position),d.add(x),Kd(e),e.scale.setScalar(.92),e.traverse(_=>{_.isMesh&&(_.castShadow=!0)});let p={ph:0,sway:0,swayV:0,swayZ:0,swayZV:0,lastSpeed:0,blink:0,keyV:0,key:0};function g(_,M){let v=M.speed||0,T=Math.min(1,v/8);p.ph+=_*(v>.2?3.2+v*1.05:1.6);let A=Math.sin(p.ph),y=0,b=0,D=0,I=0,U=.12,R=[0,0];M.grounded?v>.2?(y=A*(.45+T*.4),b=-A*(.45+T*.55),D=T*.18,I=Math.abs(Math.cos(p.ph))*(.02+T*.035)):I=Math.sin(p.ph)*.006:M.floating?(y=Math.sin(p.ph*.6)*.15,U=1.05+Math.sin(p.ph)*.08,D=.05,R=[-.15,.15]):(y=0,R=[-.65,.35],U=.6,b=-.4,D=M.vy>0?-.05:.08),i[0].rotation.x=y+R[0],i[1].rotation.x=-y+R[1],o[0].rotation.set(b,0,U),o[1].rotation.set(-b,0,-U),M.casting&&(o[1].rotation.set(-1.9,0,-.3),o[0].rotation.set(-.6,0,.4)),M.cower&&(o[0].rotation.set(-2.6,0,.5),o[1].rotation.set(-2.6,0,-.5)),t.position.y=.5+I,s.rotation.x=D,l.rotation.x=-D*.6+(v<.2&&M.grounded?Math.sin(p.ph*.35)*.04:0),l.rotation.y=v<.2&&M.grounded?Math.sin(p.ph*.23)*.25:0;let B=(v-p.lastSpeed)/Math.max(_,.001);p.lastSpeed=v;let L=-Math.max(-.5,Math.min(.5,B*.02))+(M.grounded?0:(M.vy||0)*-.02);p.swayV+=((L-p.sway)*60-p.swayV*6)*_,p.sway+=p.swayV*_,p.swayZV+=((Math.sin(p.ph)*T*.12-p.swayZ)*50-p.swayZV*5)*_,p.swayZ+=p.swayZV*_,d.rotation.set(p.sway,0,p.swayZ),p.keyV+=((-s.rotation.x-p.key)*40-p.keyV*3+A*T*6)*_,p.key+=p.keyV*_,a.rotation.x=p.key;let G=M.floating||M.casting?3.6:2.2;n.bulb.emissiveIntensity+=(G-n.bulb.emissiveIntensity)*Math.min(1,_*8),x.scale.setScalar(.3+(n.bulb.emissiveIntensity-2.2)*.14+Math.sin(p.ph*2)*.02),n.glow.emissiveIntensity=1.4+Math.sin(performance.now()*.004)*.3}return{root:e,update:g,bulbWorld:()=>h.getWorldPosition(new P)}}var ee={ctx:null,master:null,mGain:null,sGain:null,padBus:null,filt:null,tGain:null,muted:!1,tense:!1,agV:null,gridV:null,stepT:0,beat:0,nextT:0,timer:null},Zy=.38,jd=.6,jh=null,gr=.5,Ms={paused:!1},xr=n=>440*Math.pow(2,(n-69)/12);function ep(n){jh=n,gr=60/n.bpm,ee.step=0,ee.delay&&(ee.delay.delayTime.value=gr*.75)}function ec(){if(ee.ctx)return;let n=window.AudioContext||window.webkitAudioContext;if(!n)return;let e=ee.ctx=new n;e.resume&&e.resume();let t=e.createDynamicsCompressor();t.threshold.value=-18,t.knee.value=20,t.ratio.value=8,ee.master=e.createGain(),ee.master.gain.value=ee.muted?0:jd,ee.master.connect(t),t.connect(e.destination),ee.sGain=e.createGain(),ee.sGain.gain.value=.9,ee.sGain.connect(ee.master),ee.mGain=e.createGain(),ee.mGain.gain.value=Zy,ee.mGain.connect(ee.master),ee.filt=e.createBiquadFilter(),ee.filt.type="lowpass",ee.filt.frequency.value=1500,ee.leadBus=e.createGain(),ee.leadBus.gain.value=1,ee.leadBus.connect(ee.mGain),ee.delay=e.createDelay(1.5),ee.delay.delayTime.value=gr*.75;let i=e.createGain();i.gain.value=.32;let s=e.createBiquadFilter();s.type="lowpass",s.frequency.value=2400;let r=e.createGain();r.gain.value=.45,ee.leadBus.connect(ee.delay),ee.delay.connect(s),s.connect(i),i.connect(ee.delay),s.connect(r),r.connect(ee.mGain),ee.padBus=e.createGain(),ee.padBus.gain.value=1,ee.padBus.connect(ee.filt),ee.filt.connect(ee.mGain),tv()}function _r(n,e,t,i,s){n.setValueAtTime(1e-4,e),n.linearRampToValueAtTime(i,e+t),n.exponentialRampToValueAtTime(1e-4,e+t+s)}function Vt(n){let e=ee.ctx,t=n.at||e.currentTime,i=n.a||.005,s=e.createOscillator(),r=e.createGain();s.type=n.type||"sine",s.frequency.setValueAtTime(n.f,t),n.f2&&s.frequency.exponentialRampToValueAtTime(n.f2,t+i+n.dur),_r(r.gain,t,i,n.vol,n.dur),s.connect(r),r.connect(n.bus||ee.sGain),s.start(t),s.stop(t+i+n.dur+.1)}var Na=null;function Mi(n){let e=ee.ctx,t=n.at||e.currentTime,i=n.a||.004;if(!Na){let o=e.createBuffer(1,e.sampleRate*.5,e.sampleRate),l=o.getChannelData(0);for(let c=0;c<l.length;c++)l[c]=Math.random()*2-1;Na=o}let s=e.createBufferSource();s.buffer=Na,s.loop=!0;let r=e.createBiquadFilter();r.type=n.ft||"lowpass",r.frequency.value=n.fq||800,n.q&&(r.Q.value=n.q);let a=e.createGain();_r(a.gain,t,i,n.vol,n.dur),s.connect(r),r.connect(a),a.connect(ee.sGain),s.start(t),s.stop(t+i+n.dur+.1)}var $y={scream(n){let e=ee.ctx,t=e.currentTime,i=(n||1)*(520+Math.random()*180),s=e.createOscillator(),r=e.createGain(),a=e.createBiquadFilter();s.type="sawtooth",s.frequency.setValueAtTime(i*.8,t),s.frequency.linearRampToValueAtTime(i*1.25,t+.12),s.frequency.exponentialRampToValueAtTime(i*.7,t+.7);let o=e.createOscillator(),l=e.createGain();o.frequency.value=9,l.gain.value=i*.04,o.connect(l),l.connect(s.frequency),a.type="bandpass",a.frequency.value=1100,a.Q.value=1.6,_r(r.gain,t,.03,.07,.65),s.connect(a),a.connect(r),r.connect(ee.sGain),s.start(t),o.start(t),s.stop(t+.8),o.stop(t+.8)},gasp(){Mi({dur:.18,vol:.06,fq:1800,ft:"bandpass",q:1.2})},siren(){let n=ee.ctx,e=n.currentTime;for(let t=0;t<4;t++)Vt({f:700,f2:1100,type:"square",vol:.05,dur:.35,at:e+t*.4})},jump(){Vt({f:240,f2:390,vol:.09,dur:.09})},land(n){Mi({dur:.09,vol:n?.28:.09,fq:n?260:180}),Vt({f:n?70:90,vol:n?.22:.07,dur:.12})},stepTick(n){Mi({dur:.03,vol:n?.08:.028,fq:n?2200:500,ft:"bandpass",q:1.4})},coin(){Vt({f:1046.5,vol:.09,dur:.07}),Vt({f:1568,vol:.075,dur:.12,at:ee.ctx.currentTime+.06})},ckpt(){[523.25,659.25,784].forEach((n,e)=>Vt({f:n,type:"triangle",vol:.09,dur:.22,at:ee.ctx.currentTime+e*.09}))},cast(){Vt({f:320,f2:880,vol:.06,dur:.48}),Vt({f:323,f2:886,vol:.06,dur:.48})},sleep(){Vt({f:660,f2:440,type:"triangle",vol:.11,dur:.3}),Vt({f:440,f2:330,type:"triangle",vol:.09,dur:.4,at:ee.ctx.currentTime+.22})},blink(){Vt({f:1100,f2:180,type:"sawtooth",vol:.11,dur:.09}),Mi({dur:.05,vol:.07,fq:3e3,ft:"highpass"})},sus(){Vt({f:440,vol:.13,dur:.28,a:.01}),Vt({f:466.16,vol:.13,dur:.28,a:.01})},alert(){[220,261.63,311.13].forEach(n=>Vt({f:n,f2:n*.5,type:"sawtooth",vol:.11,dur:.5,a:.008})),Mi({dur:.25,vol:.18,fq:900})},zap(){Vt({f:120,f2:60,type:"square",vol:.12,dur:.3}),Mi({dur:.2,vol:.16,fq:2400,ft:"bandpass",q:2})},splash(){Mi({dur:.35,vol:.2,fq:900})},respawn(){Mi({dur:.3,vol:.07,fq:600,ft:"highpass"}),Vt({f:200,f2:520,vol:.06,dur:.3})},wakeTick(){Vt({f:880,type:"square",vol:.045,dur:.05}),Vt({f:880,type:"square",vol:.045,dur:.05,at:ee.ctx.currentTime+.12})},part(){[523.25,783.99,1046.5,1567.98].forEach((n,e)=>Vt({f:n,type:"triangle",vol:.09,dur:.4,at:ee.ctx.currentTime+e*.08}))},win(){[392,493.88,587.33,784,987.77].forEach((n,e)=>Vt({f:n,type:"triangle",vol:.1,dur:.5,at:ee.ctx.currentTime+e*.13}))},launch(){Vt({f:55,f2:440,type:"sawtooth",vol:.12,dur:2.6,a:.4}),Mi({dur:2.4,vol:.16,fq:500,a:.6}),[392,493.88,587.33,784,987.77,1174.66].forEach((n,e)=>Vt({f:n,type:"triangle",vol:.08,dur:.6,at:ee.ctx.currentTime+1.6+e*.14}))},uiBlip(){Vt({f:520,vol:.06,dur:.06})}};function Bt(n,e){!ee.ctx||ee.muted||$y[n](e)}function Ua(n){ee.mGain&&ee.mGain.gain.setTargetAtTime(n,ee.ctx.currentTime,.08)}function eu(n){if(!ee.ctx||ee.tense===n)return;ee.tense=n;let e=ee.ctx.currentTime;ee.tGain&&ee.tGain.gain.setTargetAtTime(n?.09:1e-4,e,.4),ee.filt.frequency.setTargetAtTime(n?3600:1500,e,.5)}function tp(){if(!ee.ctx||ee.agV)return;let n=ee.ctx,e=n.createOscillator(),t=n.createOscillator(),i=n.createGain(),s=n.createOscillator(),r=n.createGain();e.type=t.type="triangle",e.frequency.value=164,t.frequency.value=166.5,i.gain.value=1e-4,i.gain.setTargetAtTime(ee.muted?0:.06,n.currentTime,.05),s.frequency.value=5.5,r.gain.value=6,s.connect(r),r.connect(e.frequency),r.connect(t.frequency),e.connect(i),t.connect(i),i.connect(ee.sGain),e.start(),t.start(),s.start(),ee.agV={stop(){i.gain.setTargetAtTime(1e-4,n.currentTime,.1),setTimeout(()=>{try{e.stop(),t.stop(),s.stop()}catch{}},400)}}}function Fa(){ee.agV&&(ee.agV.stop(),ee.agV=null)}function Xt(n,e,t,i,s,r,a){let o=ee.ctx,l=o.createOscillator(),c=o.createGain();return l.type=i,l.frequency.value=n,_r(c.gain,e,r,s,t),l.connect(c),c.connect(a),l.start(e),l.stop(e+r+t+.1),l}function Qh(n,e,t,i,s,r){let a=ee.ctx;Na||Mi({dur:.001,vol:1e-4});let o=a.createBufferSource();o.buffer=Na,o.loop=!0,o.playbackRate.value=.8+Math.random()*.4;let l=a.createBiquadFilter();l.type=i,l.frequency.value=s,r&&(l.Q.value=r);let c=a.createGain();_r(c.gain,n,.002,t,e),o.connect(l),l.connect(c),c.connect(ee.mGain),o.start(n),o.stop(n+e+.1)}var mr={kick(n,e){let t=ee.ctx,i=t.createOscillator(),s=t.createGain();i.type="sine",i.frequency.setValueAtTime(150,n),i.frequency.exponentialRampToValueAtTime(44,n+.12),s.gain.setValueAtTime(1e-4,n),s.gain.linearRampToValueAtTime(e,n+.004),s.gain.exponentialRampToValueAtTime(1e-4,n+.32),i.connect(s),s.connect(ee.mGain),i.start(n),i.stop(n+.4),Xt(2200,n,.012,"sine",e*.12,.001,ee.mGain),ee.padBus.gain.setValueAtTime(.32,n),ee.padBus.gain.setTargetAtTime(1,n+.03,.09)},hat(n,e){Qh(n,e?.11:.035,e?.05:.018,"highpass",7600)},clap(n){Qh(n,.13,.07,"bandpass",1400,.9),Qh(n+.012,.08,.05,"bandpass",1700,.9)},rim(n){Xt(1750,n,.025,"square",.025,.001,ee.mGain)},conga(n,e){let t=ee.ctx,i=t.createOscillator(),s=t.createGain(),r=e?340:230;i.type="sine",i.frequency.setValueAtTime(r,n),i.frequency.exponentialRampToValueAtTime(r*.82,n+.12),_r(s.gain,n,.003,.09,.16),i.connect(s),s.connect(ee.mGain),i.start(n),i.stop(n+.3)}};function Jy(n,e,t){Xt(xr(n),e,t,"sine",.2,.008,ee.mGain),Xt(xr(n+12),e,t*.8,"triangle",.05,.008,ee.mGain)}function Ky(n,e,t){for(let i of n){let s=xr(i);t==="organ"?(Xt(s,e,.22,"square",.012,.004,ee.padBus),Xt(s,e,.26,"sine",.03,.004,ee.padBus)):t==="piano"?(Xt(s,e,.18,"triangle",.03,.002,ee.padBus),Xt(s*2,e,.08,"sine",.008,.002,ee.padBus)):(Xt(s,e,.55,"sine",.04,.004,ee.padBus),Xt(s*2,e,.25,"sine",.011,.003,ee.padBus),Xt(s*3,e,.08,"sine",.004,.002,ee.padBus))}}function Qy(n,e,t){for(let i of n)Xt(xr(i-12),e,t,"triangle",.008,.6,ee.padBus),Xt(xr(i)*1.004,e,t,"sine",.008,.7,ee.padBus)}function jy(n,e,t,i){let s=ee.ctx,r=xr(n),a=ee.leadBus;if(i==="twang"){let o=Xt(r,e,t*.9,"triangle",.06,.01,a);o.frequency.setValueAtTime(r*.94,e),o.frequency.exponentialRampToValueAtTime(r,e+.09),Xt(r*2,e,t*.5,"sine",.012,.01,a)}else if(i==="horn"){let o=Xt(r,e,t*.9,"sawtooth",.03,.04,a),l=s.createOscillator(),c=s.createGain();l.frequency.value=5.2,c.gain.value=r*.012,l.connect(c),c.connect(o.frequency),l.start(e+.12),l.stop(e+t+.2)}else i==="mallet"?(Xt(r,e,.32,"sine",.07,.002,a),Xt(r*4,e,.06,"sine",.012,.001,a)):i==="signal"?(Xt(r,e,t*.95,"sine",.06,.03,a),Xt(r*1.5,e,t*.8,"triangle",.012,.05,a),Xt(r/2,e,t,"triangle",.02,.06,a)):(Xt(r,e,t*.7,"triangle",.05,.003,a),Xt(r*2,e,t*.35,"sine",.014,.002,a))}function ev(n,e){let t=jh,i=n%16,s=Math.floor(n/16)%4,r=Math.floor(n/64),a=gr/4,o=t.prog[s],l=i%2===1?a*.12:0,c=e+l;i%4===0&&mr.kick(e,t.leadType==="signal"?.42:.55),t.clap&&(i===4||i===12)&&mr.clap(e),i%4===2?mr.hat(e,!0):i%2===1&&mr.hat(c,!1);let u=t.bass[i];if(u!=null&&Jy(o.r+u,c,a*1.7),t.stab[i]&&Ky(o.v,c,t.stabType),i===0&&Qy(o.v,e,gr*4),t.clave&&t.clave.includes(i)&&mr.rim(c),t.conga&&t.conga.includes(i)&&mr.conga(c,i>=14),t.leadAlways||r%2===1){let d=n%64;for(let f of t.lead)f[0]===d&&jy(f[1]+(f[3]||0),c,f[2]*a,t.leadType)}}function tv(){let n=ee.ctx,e=n.createOscillator(),t=n.createOscillator(),i=n.createGain(),s=n.createOscillator(),r=n.createGain();e.frequency.value=622.25,t.frequency.value=659.25,i.gain.value=1e-4,s.frequency.value=7,r.gain.value=.03,s.connect(r),r.connect(i.gain),e.connect(i),t.connect(i),i.connect(ee.padBus),e.start(),t.start(),s.start(),ee.tGain=i,ee.step=0,ee.nextT=n.currentTime+.15,ee.timer=setInterval(()=>{if(ee.ctx){if(Ms.paused||!jh){ee.nextT=Math.max(ee.nextT,ee.ctx.currentTime+.1);return}for(ee.nextT=Math.max(ee.nextT,ee.ctx.currentTime+.02);ee.nextT<ee.ctx.currentTime+.3;)ev(ee.step,ee.nextT),ee.step++,ee.nextT+=gr/4}},60)}function np(){ee.muted=!ee.muted,ee.master&&ee.master.gain.setTargetAtTime(ee.muted?0:jd,ee.ctx.currentTime,.02),ee.muted||Bt("uiBlip")}function ip(){return ee.muted}var tc=["#f2d2b6","#e0b08c","#c68b62","#a86b44","#7d4a2c","#5a3420","#f6dcc8"],sp=["#1c1a18","#3b2a1e","#5a3d25","#8a6a3a","#c9a36a","#2a2a2a","#6b6b6b","#a33a2a"],nv=1.62;function Oa(n,e,t,i){let s=new Be(n,e,t);return s.translate(0,i,0),s}var iv=28900,nc=class{constructor(e,t,i){this.world=e,this.scene=t,this.cfg=i,this.R=e.R,this.civs=[],this.group=new vt,t.add(this.group);let s=i.count,r=l=>{let c=new Li(l,new Ht({color:16777215}),s);return c.castShadow=!0,c.receiveShadow=!1,c.frustumCulled=!1,this.group.add(c),c};this.parts={torso:r(Oa(.42,.6,.24,.3)),head:r(new yt(.13,10,8)),hair:r(new yt(.138,10,6,0,Math.PI*2,0,Math.PI*.55)),legL:r(Oa(.17,.86,.19,-.43)),legR:r(Oa(.17,.86,.19,-.43)),armL:r(Oa(.12,.62,.13,-.31)),armR:r(Oa(.12,.62,.13,-.31))},this.spawn(),this.baseCol={};for(let l in this.parts)this.parts[l].instanceColor&&(this.baseCol[l]=Float32Array.from(this.parts[l].instanceColor.array));let a=qt(64,64,l=>{l.fillStyle="#ffd23a",l.strokeStyle="#7a1a00",l.lineWidth=6,l.font="bold 58px sans-serif",l.textAlign="center",l.strokeText("!",32,54),l.fillText("!",32,54)},!1),o=qt(64,64,l=>{l.fillStyle="#9ff7ff",l.strokeStyle="#0a3050",l.lineWidth=5,l.font="bold 40px sans-serif",l.textAlign="center",l.strokeText("z",24,54),l.fillText("z",24,54),l.font="bold 28px sans-serif",l.strokeText("z",46,26),l.fillText("z",46,26)},!1);this.pool=[];for(let l=0;l<18;l++){let c=new oi(new Jn({map:a,depthTest:!1,transparent:!0}));c.scale.setScalar(.7),c.visible=!1,c.renderOrder=10,this.group.add(c),this.pool.push(c)}this.exTex=a,this.zTex=o,this.screamT=0,this.m4=new ut,this.m4b=new ut,this.m4c=new ut,this.v=new P,this.q=new _n,this.e=new Rn,this.sc=new P}spawn(){let e=this.world,t=this.cfg,i=this.R,s=t.palette||{shirt:["#d94c4c","#3a6fd1","#f0f0ea","#2c2c2c","#e6b33a","#4fa36b","#9a5fc7","#e87ea1","#7a8a99","#f28d35"],pants:["#2c3550","#3b3b3b","#5a4a3a","#7d8899","#1d1d1d","#a8956c"]},r=[],a=t.count;for(let d of e.plazas){let f=Math.min(a,Math.round(d.n*(t.plazaMul||1)));for(let h=0;h<f;h++)r.push({type:"plaza",r:d.r});a-=f}let o=e.loops.filter(d=>d.r[2]-d.r[0]>6&&d.r[3]-d.r[1]>6),l=o.map(d=>d.n??2*(d.r[2]-d.r[0]+(d.r[3]-d.r[1]))),c=l.reduce((d,f)=>d+f,0)||1;for(let d=0;d<a&&o.length;d++){let f=i()*c,h=0;for(;f>l[h]&&h<l.length-1;)f-=l[h],h++;r.push({type:"loop",r:o[h].r})}let u=new Re;r.forEach((d,f)=>{let h={i:f,home:d,state:"walk",t:0,ph:i()*6,speed:1.1+i()*.6,scale:.88+i()*.22,dir:i()<.5?1:-1,s:0,off:(i()-.5)*1.6,x:0,y:0,z:0,yaw:0,tx:0,tz:0,idle:0,look:i()*.25,alarmCool:0,fleeX:0,fleeZ:0,sleepT:0,ind:null,pose:i()<.15?"phone":"",hop:0};if(d.type==="loop"){let g=2*(d.r[2]-d.r[0]+(d.r[3]-d.r[1]));h.s=i()*g,this.loopPos(h)}else h.x=d.r[0]+i()*(d.r[2]-d.r[0]),h.z=d.r[1]+i()*(d.r[3]-d.r[1]),h.state="wander",this.newTarget(h),h.idle=i()*3;let m=this.parts;m.torso.setColorAt(f,u.set(s.shirt[Math.floor(i()*s.shirt.length)]));let x=u.clone();m.armL.setColorAt(f,i()<.3?u.set(tc[Math.floor(i()*tc.length)]):x),m.armR.setColorAt(f,m.armL.instanceColor?(()=>{let g=new Re;return m.armL.getColorAt(f,g),g})():x);let p=u.set(s.pants[Math.floor(i()*s.pants.length)]).clone();m.legL.setColorAt(f,p),m.legR.setColorAt(f,p),m.head.setColorAt(f,u.set(tc[Math.floor(i()*tc.length)])),m.hair.setColorAt(f,u.set(s.hair?s.hair[Math.floor(i()*s.hair.length)]:sp[Math.floor(i()*sp.length)])),h.init={x:h.x,z:h.z,s:h.s,state:h.state},this.civs.push(h)});for(let d in this.parts)this.parts[d].instanceColor&&(this.parts[d].instanceColor.needsUpdate=!0)}reset(){for(let e of this.civs)Object.assign(e,{x:e.init.x,z:e.init.z,s:e.init.s,state:e.init.state,t:0,alarmCool:0,sleepT:0,y:0,hop:0}),e.home.type==="loop"?this.loopPos(e):this.newTarget(e)}loopPos(e){let[t,i,s,r]=e.home.r,a=s-t,o=r-i,l=2*(a+o),c=(e.s%l+l)%l,u,d,f,h=e.off;c<a?(u=t+c,d=i-h,f=Math.PI/2):(c-=a)<o?(u=s+h,d=i+c,f=0):(c-=o)<a?(u=s-c,d=r+h,f=-Math.PI/2):(c-=a,u=t-h,d=r-c,f=Math.PI),e.x=u,e.z=d,e.yaw=e.dir>0?f:f+Math.PI}nearestS(e){let[t,i,s,r]=e.home.r,a=s-t,o=r-i,l=[[Math.max(0,Math.min(a,e.x-t)),Math.abs(e.z-i)],[a+Math.max(0,Math.min(o,e.z-i)),Math.abs(e.x-s)],[a+o+Math.max(0,Math.min(a,s-e.x)),Math.abs(e.z-r)],[2*a+o+Math.max(0,Math.min(o,r-e.z)),Math.abs(e.x-t)]];return l.sort((c,u)=>c[1]-u[1]),l[0][0]}newTarget(e){let t=e.home.r,i=this.R;e.tx=t[0]+i()*(t[2]-t[0]),e.tz=t[1]+i()*(t[3]-t[1])}sleepAround(e,t,i){let s=0;for(let r of this.civs)r.state!=="sleep"&&(r.x-e)**2+(r.z-t)**2<i*i&&(r.state="sleep",r.sleepT=this.cfg.sleepT||18,r.t=0,s++);return s}awakeNear(e,t,i){for(let s of this.civs)if(s.state!=="sleep"&&(s.x-e)**2+(s.z-t)**2<i*i)return!0;return!1}scare(e,t,i,s){e.state=s?"notice":"flee",e.t=0,e.hop=s?.25:0;let r=e.x-t,a=e.z-i,o=Math.hypot(r,a)||1;e.fleeX=r/o,e.fleeZ=a/o,e.fleeSpeed=4.2+this.R()*1.8,e.yaw=Math.atan2(-r,-a)}update(e,t,i){let s=this.world,r=this.cfg,a=this.R,o=0,l=0;this.screamT-=e;let c=r.visR||22,u=c*c,d=Math.cos((r.fov||70)*Math.PI/180),f=[];for(let h of this.civs){h.t+=e,h.alarmCool-=e,h.ph+=e*(h.state==="flee"?11:h.state==="walk"||h.state==="return"||h.state==="wander"&&h.idle<=0?6.2*h.speed/1.4:1.5);let m=t.x-h.x,x=t.z-h.z,p=m*m+x*x;if(t.active&&h.state!=="sleep"&&h.state!=="notice"&&p<u&&Math.abs(t.y-h.y)<(r.seeUp||7)&&(h.look-=e,h.look<=0)){h.look=.15+a()*.12;let _=Math.sqrt(p),M=Math.sin(h.yaw),v=Math.cos(h.yaw),T=(M*m+v*x)/(_||1),A=h.state!=="flee"&&h.state!=="cower";if((_<4.5||T>d)&&s.clearLine(h.x,h.y+nv,h.z,t.x,t.y+.7,t.z))if(A){let y=h.alarmCool<=0;h.alarmCool=25,this.scare(h,t.x,t.z,!0),y&&o++}else h.fleeX=-m/(_||1),h.fleeZ=-x/(_||1),h.t=Math.min(h.t,1),h.state==="cower"&&(h.state="flee",h.t=0)}let g=0;switch(h.state){case"walk":{h.s+=h.speed*e*h.dir,this.loopPos(h),g=h.speed;break}case"wander":{if(h.idle>0){h.idle-=e,g=0;break}let _=h.tx-h.x,M=h.tz-h.z,v=Math.hypot(_,M);if(v<.6){h.idle=1+a()*4,this.newTarget(h);break}h.yaw=Math.atan2(_,M),h.x+=_/v*h.speed*e,h.z+=M/v*h.speed*e,g=h.speed,this.v.set(h.x,h.y,h.z),s.pushOut(this.v,.3,1.7)&&this.newTarget(h),h.x=this.v.x,h.z=this.v.z;break}case"notice":{h.yaw=Math.atan2(m,x),h.t>.55&&(h.state="flee",h.t=0,f.push(h));break}case"flee":{l++;let _=h.fleeSpeed*(h.t<.3?h.t/.3:1),M=Math.sin(h.ph*.13+h.i)*.35,v=h.fleeX*Math.cos(M)-h.fleeZ*Math.sin(M),T=h.fleeX*Math.sin(M)+h.fleeZ*Math.cos(M);if(h.x+=v*_*e,h.z+=T*_*e,h.yaw=Math.atan2(v,T),g=_,this.v.set(h.x,h.y,h.z),s.pushOut(this.v,.3,1.7)){let A=h.fleeX;h.fleeX=h.fleeX*.8-h.fleeZ*.6*(h.i%2?1:-1),h.fleeZ=h.fleeZ*.8+A*.6*(h.i%2?1:-1);let y=Math.hypot(h.fleeX,h.fleeZ)||1;h.fleeX/=y,h.fleeZ/=y}h.x=this.v.x,h.z=this.v.z,s.inWater(h.x,h.z)&&(h.fleeX=-h.fleeX,h.fleeZ=-h.fleeZ,h.x+=h.fleeX,h.z+=h.fleeZ),h.t>4.5&&p>784&&(h.state="cower",h.t=0),h.t>9&&(h.state="cower",h.t=0);break}case"cower":{h.t>2.6&&(h.state="return",h.t=0);break}case"return":{if(h.home.type==="plaza"){let T=h.home.r;if(h.x>T[0]&&h.x<T[2]&&h.z>T[1]&&h.z<T[3]){h.state="wander",h.idle=1;break}h.tx=(T[0]+T[2])/2,h.tz=(T[1]+T[3])/2}else if(h.t<.05){h.s=this.nearestS(h);let T=h.x,A=h.z;this.loopPos(h),h.tx=h.x,h.tz=h.z,h.x=T,h.z=A}let _=h.tx-h.x,M=h.tz-h.z,v=Math.hypot(_,M);if(v<.8||h.t>30&&p>3600){h.home.type==="loop"?(h.state="walk",this.loopPos(h)):(h.x=h.tx,h.z=h.tz,h.state="wander");break}h.yaw=Math.atan2(_,M),h.x+=_/v*h.speed*1.1*e,h.z+=M/v*h.speed*1.1*e,g=h.speed,this.v.set(h.x,h.y,h.z),s.pushOut(this.v,.3,1.7),h.x=this.v.x,h.z=this.v.z;break}case"sleep":{h.sleepT-=e,h.sleepT<=0&&(h.state="return",h.t=0);break}}h.mv=g,h.hop>0&&(h.hop=Math.max(0,h.hop-e))}for(let h of f){this.screamT<=0&&Math.hypot(h.x-t.x,h.z-t.z)<45&&(Bt("scream",h.scale<.95?1.25:.9+this.R()*.3),this.screamT=.35);for(let m of this.civs){if(m===h||m.state==="flee"||m.state==="notice"||m.state==="sleep"||m.state==="cower")continue;let x=m.x-h.x,p=m.z-h.z;x*x+p*p<64&&(this.scare(m,t.x,t.z,!1),m.fleeSpeed*=.9)}}return this.draw(i),{witnesses:o,fleeing:l}}draw(e){let t=this.parts,i=this.m4,s=this.m4b,r=this.m4c,a=this.q,o=this.e,l=this.v,c=this.sc;this._leg||(this._leg=(x,p,g)=>{s.makeRotationX(g),s.setPosition(p*.1,.86,0),r.multiplyMatrices(i,s),x.setMatrixAt(this._ci,r)},this._arm=(x,p,g,_)=>{o.set(g,0,_,"XYZ"),a.setFromEuler(o),s.makeRotationFromQuaternion(a),s.setPosition(p*.27,1.42,0),r.multiplyMatrices(i,s),x.setMatrixAt(this._ci,r)});let u=0,d=0,f=!1;this._slotOf||(this._slotOf=new Int32Array(this.civs.length).fill(-1));for(let x of this.pool)x.visible=!1;let h=e.position.x,m=e.position.z;for(let x of this.civs){if((x.x-h)**2+(x.z-m)**2>iv)continue;let g=d++;if(this._slotOf[g]!==x.i){this._slotOf[g]=x.i;for(let U in this.baseCol){let R=t[U].instanceColor.array,B=this.baseCol[U];R[g*3]=B[x.i*3],R[g*3+1]=B[x.i*3+1],R[g*3+2]=B[x.i*3+2]}f=!0}let _=x.state==="sleep",M=x.state==="cower";o.set(_?-Math.PI/2:x.state==="flee"?.18:0,x.yaw,0,"YXZ"),a.setFromEuler(o);let v=_?.14:x.y+(x.hop>0?Math.sin((.25-x.hop)/.25*Math.PI)*.22:0);l.set(x.x,v,x.z),c.set(x.scale,x.scale*(M?.72:1),x.scale),i.compose(l,a,c),_&&r.makeTranslation(0,0,0);let T=Math.sin(x.ph),A=Math.min(1.1,x.mv*.28),y=x.state==="flee",b=x.state==="notice";s.makeTranslation(0,.86,0),r.multiplyMatrices(i,s),t.torso.setMatrixAt(g,r),s.makeTranslation(0,1.6,0),r.multiplyMatrices(i,s),t.head.setMatrixAt(g,r),t.hair.setMatrixAt(g,r);let D=this._leg,I=this._arm;if(this._ci=g,D(t.legL,1,T*A*.7+(M?-.9:0)),D(t.legR,-1,-T*A*.7+(M?-.9:0)),y?(I(t.armL,1,-2.7+Math.sin(x.ph*1.3)*.5,.35),I(t.armR,-1,-2.7+Math.cos(x.ph*1.3)*.5,-.35)):b?(I(t.armL,1,-1.2,.6),I(t.armR,-1,-1.2,-.6)):M?(I(t.armL,1,-2.9,.9),I(t.armR,-1,-2.9,-.9)):x.pose==="phone"&&x.mv<.2?(I(t.armL,1,0,.08),I(t.armR,-1,-1.9,.3)):(I(t.armL,1,-T*A*.6,.08),I(t.armR,-1,T*A*.6,-.08)),u<this.pool.length&&(b||y&&x.t<1.6||_)){let U=this.pool[u++];U.visible=!0,U.material.map=_?this.zTex:this.exTex,U.position.set(x.x,(_?.9:2.25*x.scale)+(_?Math.sin(x.t*2)*.1:0),x.z)}}for(let x in t)t[x].count=d,t[x].instanceMatrix.needsUpdate=!0,f&&t[x].instanceColor&&(t[x].instanceColor.needsUpdate=!0)}dispose(){this.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}),this.scene.remove(this.group)}};function tu(n,e){let t=new vt;n.add(t);let i=new yt(2200,32,16),s=new Qn({side:un,depthWrite:!1,fog:!1,uniforms:{top:{value:new Re(e.sky[0])},mid:{value:new Re(e.sky[1])},bot:{value:new Re(e.sky[2])},sunDir:{value:new P(...e.sunDir).normalize()},sunCol:{value:new Re(e.sunDisk||"#fff4d0")},sunSize:{value:e.sunSize??.9985}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 top, mid, bot, sunDir, sunCol; uniform float sunSize; varying vec3 vP;
      void main(){ float h = vP.y; vec3 c = h > 0.0 ? mix(mid, top, pow(clamp(h*1.6,0.0,1.0), 0.7)) : mix(mid, bot, clamp(-h*6.0,0.0,1.0));
        float s = dot(normalize(vP), normalize(sunDir)); c += sunCol * smoothstep(sunSize, 1.0, s) * 1.5 + sunCol * pow(max(s,0.0), 24.0) * 0.25;
        gl_FragColor = vec4(c, 1.0); }`});if(t.add(new it(i,s)),e.stars){let u=new Float32Array(4200);for(let f=0;f<1400;f++){let h=Math.random()*2-1,m=Math.random()*6.283,x=Math.sqrt(1-h*h),p=Math.abs(h)*.95+.05;u[f*3]=Math.cos(m)*x*2e3,u[f*3+1]=p*2e3,u[f*3+2]=Math.sin(m)*x*2e3}let d=new Nt;d.setAttribute("position",new jt(u,3)),t.add(new Kr(d,new Qs({color:16777215,size:2.2,sizeAttenuation:!1,fog:!1,transparent:!0,opacity:.85})))}if(e.moon){let c=new it(new yt(40,16,12),new Ot({color:e.moon,fog:!1}));c.position.set(...new P(...e.moonDir).normalize().multiplyScalar(1900).toArray()),t.add(c)}let r=new xa(e.hemi[0],e.hemi[1],e.hemi[2]);t.add(r);let a=new va(e.sun[0],e.sun[1]);a.castShadow=!0,a.shadow.mapSize.set(1024,1024);let o=a.shadow.camera;o.left=-38,o.right=38,o.top=38,o.bottom=-38,o.near=1,o.far=400,a.shadow.bias=-6e-4,a.shadow.normalBias=.04,n.add(a),n.add(a.target);let l=new P(...e.sunDir).normalize();return n.fog=new Wr(e.fog,e.fogNear,e.fogFar),{group:t,sun:a,follow(c){t.position.set(c.x,0,c.z),a.position.set(c.x+l.x*180,l.y*180,c.z+l.z*180),a.target.position.set(c.x,0,c.z)},dispose(){n.remove(t),n.remove(a),n.remove(a.target),t.traverse(c=>{c.geometry&&c.geometry.dispose(),c.material&&c.material.dispose()}),a.dispose()}}}var tt={mx:0,my:0,camDX:0,camDY:0,jump:!1,jumpPressed:!1,power:!1,powerPressed:!1,keys:new Set};function rp(n,e){let t={id:null,ox:0,oy:0},i={id:null,x:0,y:0},s=60,r=e.joyBase,a=e.joyKnob,o=(f,h)=>{let m=p=>{p.preventDefault(),p.stopPropagation(),tt[h]||(tt[h+"Pressed"]=!0),tt[h]=!0,f.classList.add("down")},x=p=>{p.preventDefault(),p.stopPropagation(),tt[h]=!1,f.classList.remove("down")};f.addEventListener("touchstart",m,{passive:!1}),f.addEventListener("touchend",x,{passive:!1}),f.addEventListener("touchcancel",x,{passive:!1}),f.addEventListener("mousedown",m),f.addEventListener("mouseup",x),f.addEventListener("mouseleave",x)};o(e.btnJump,"jump"),o(e.btnPower,"power"),n.addEventListener("touchstart",f=>{f.preventDefault();for(let h of f.changedTouches)h.clientX<window.innerWidth*.45&&t.id===null?(t.id=h.identifier,t.ox=h.clientX,t.oy=h.clientY,r.style.display="block",r.style.left=h.clientX-s+"px",r.style.top=h.clientY-s+"px",a.style.transform="translate(0px,0px)"):i.id===null&&(i.id=h.identifier,i.x=h.clientX,i.y=h.clientY)},{passive:!1}),n.addEventListener("touchmove",f=>{f.preventDefault();for(let h of f.changedTouches)if(h.identifier===t.id){let m=h.clientX-t.ox,x=h.clientY-t.oy,p=Math.hypot(m,x);p>s&&(m*=s/p,x*=s/p),tt.mx=m/s,tt.my=x/s,a.style.transform=`translate(${m}px,${x}px)`}else h.identifier===i.id&&(tt.camDX+=h.clientX-i.x,tt.camDY+=h.clientY-i.y,i.x=h.clientX,i.y=h.clientY)},{passive:!1});let l=f=>{for(let h of f.changedTouches)h.identifier===t.id&&(t.id=null,tt.mx=tt.my=0,r.style.display="none"),h.identifier===i.id&&(i.id=null)};n.addEventListener("touchend",l),n.addEventListener("touchcancel",l);let c=!1,u=0,d=0;n.addEventListener("mousedown",f=>{c=!0,u=f.clientX,d=f.clientY}),window.addEventListener("mouseup",()=>{c=!1}),window.addEventListener("mousemove",f=>{c&&(tt.camDX+=f.clientX-u,tt.camDY+=f.clientY-d,u=f.clientX,d=f.clientY)}),window.addEventListener("keydown",f=>{let h=f.key.toLowerCase();tt.keys.has(h)||(tt.keys.add(h),h===" "&&(tt.jump=!0,tt.jumpPressed=!0,f.preventDefault()),(h==="e"||h==="shift")&&(tt.power=!0,tt.powerPressed=!0))}),window.addEventListener("keyup",f=>{let h=f.key.toLowerCase();tt.keys.delete(h),h===" "&&(tt.jump=!1),(h==="e"||h==="shift")&&(tt.power=!1)})}function nu(){let n=tt.mx,e=tt.my,t=tt.keys;(t.has("w")||t.has("arrowup"))&&(e-=1),(t.has("s")||t.has("arrowdown"))&&(e+=1),(t.has("a")||t.has("arrowleft"))&&(n-=1),(t.has("d")||t.has("arrowright"))&&(n+=1);let i=Math.hypot(n,e);return i>1&&(n/=i,e/=i),[n,e]}function ap(){tt.jumpPressed=!1,tt.powerPressed=!1,tt.camDX=0,tt.camDY=0}function op(){tt.mx=tt.my=0,tt.jump=tt.power=!1,tt.keys.clear()}var su=new URLSearchParams(location.search).has("perf"),Xn=null,yr=[],ic=0,sc=!1,lc="",rc=0,ac=0,oc=1/0,iu=0,ru="";function cp(){su&&(Xn=document.createElement("div"),Xn.style.cssText="position:fixed;left:max(10px,env(safe-area-inset-left));bottom:10px;z-index:50;font:11px/1.35 ui-monospace,Menlo,monospace;color:#9fffb0;background:rgba(0,0,0,.72);padding:6px 8px;border-radius:8px;white-space:pre;pointer-events:auto;max-width:70vw",Xn.textContent="perf: waiting for play\u2026",Xn.addEventListener("click",n=>{n.stopPropagation();let e=lc||Xn.textContent;navigator.clipboard&&navigator.clipboard.writeText(e).then(()=>lp("copied"),()=>lp("copy failed"))}),document.body.appendChild(Xn))}function lp(n){if(!Xn)return;let e=Xn.style.color;Xn.style.color="#fff",Xn.dataset.msg=n,setTimeout(()=>{Xn.style.color=e},400)}function hp(n){su&&(ru=n,yr=[],ic=0,sc=!1,lc="",rc=0,ac=0,oc=1/0)}function up(n,e,t,i){if(!su||!Xn)return;let s=e.info.render,r=e.getPixelRatio();if(t&&!sc&&(ic+=n,yr.push(n),s.calls>rc&&(rc=s.calls),s.triangles>ac&&(ac=s.triangles),r<oc&&(oc=r),ic>=60&&sv(r,i)),iu+=n,iu<.5)return;iu=0;let a=yr.slice(-60),o=a.length?a.length/a.reduce((u,d)=>u+d,0):0,l=a.length?Math.max(...a)*1e3:0,c=`${ru||"\u2014"}
fps ${o.toFixed(0)}  worst ${l.toFixed(0)}ms
calls ${s.calls}  tris ${(s.triangles/1e3).toFixed(0)}k
res x${r.toFixed(2)}  crowd ${i}`+(sc?`

BASELINE (tap to copy)
${lc}`:t?`
baseline in ${Math.max(0,60-ic).toFixed(0)}s`:`
(paused)`);Xn.textContent=c}function sv(n,e){sc=!0;let t=yr.length,i=yr.reduce((l,c)=>l+c,0),s=[...yr].sort((l,c)=>c-l),r=s.slice(0,Math.max(1,Math.floor(t*.01))),a=r.length/r.reduce((l,c)=>l+c,0),o=navigator.userAgent.match(/\(([^)]+)\)/)?.[1]||navigator.userAgent;lc=[`level: ${ru}`,`avg fps: ${(t/i).toFixed(1)}`,`1% low fps: ${a.toFixed(1)}`,`worst frame: ${(s[0]*1e3).toFixed(0)} ms`,`max draw calls: ${rc}`,`max triangles: ${(ac/1e3).toFixed(0)}k`,`lowest res scale: x${oc.toFixed(2)} (start x${Math.min(window.devicePixelRatio||1,1.6).toFixed(2)})`,`crowd: ${e}`,`screen: ${screen.width}x${screen.height} @${window.devicePixelRatio}`,`device: ${o}`].join(`
`)}var It={walk:4.2,run:8.6,accel:34,airAccel:14,jumpV:8.6,grav:24,agMax:2.6,agRise:5.6,glideV:-2.6,radius:.3,height:1.15,blinkDist:11,blinkCD:1.3,sleepR:9,sleepCD:2.4,camDist:5.4},Ye=n=>document.getElementById(n),mp="lwh3d_save",ei={unlocked:1,best:{}};try{let n=JSON.parse(localStorage.getItem(mp)||"null");n&&n.unlocked&&(ei=n)}catch{}var rv=()=>{try{localStorage.setItem(mp,JSON.stringify(ei))}catch{}},fc=new URLSearchParams(location.search),av=fc.get("q")?fc.get("q")==="mobile":matchMedia("(pointer: coarse)").matches||/Android|iPhone|iPad/i.test(navigator.userAgent),fp=700,hu=3e3,gp=Ye("gl"),ti=new Hl({canvas:gp,antialias:!0,powerPreference:"high-performance"}),hc=Math.min(window.devicePixelRatio||1,1.6);ti.setPixelRatio(hc);ti.outputColorSpace=hn;ti.toneMapping=Sa;ti.toneMappingExposure=1.05;ti.shadowMap.enabled=!0;ti.shadowMap.type=fs;var fn=new $s,Mn=new Tn(62,1,.3,2600);function du(){ti.setSize(window.innerWidth,window.innerHeight,!1),Mn.aspect=window.innerWidth/window.innerHeight,Mn.fov=Mn.aspect<1?75:62,Mn.updateProjectionMatrix()}window.addEventListener("resize",du);du();var ov=new ur(ti),vr=Qd();fn.add(vr.root);var dn=0,Wn=Vn[0],at=null,Sn=null,dc=null,In=null,Ba=null,Tt="loading",k={pos:new P,vel:new P,yaw:0,grounded:!0,coyote:0,ag:It.agMax,floating:!1,airT:0,blinkCD:0,powerCD:0,cast:0,cp:new P,cpYaw:0},zt={yaw:0,pitch:.32,lastDrag:-10,dist:It.camDist,pos:new P},Ue={t:0,time:0,panic:0,witnesses:0,coins:0,logs:0,caughtT:0,launchT:0,cpIndex:0,toastT:0,hintT:0},bs=null,Mr=[],Sr=[],ln=null,qn=null,pu=[],uu=qt(64,64,n=>{let e=n.createRadialGradient(32,32,1,32,32,32);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.3,"rgba(255,255,255,.5)"),e.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=e,n.fillRect(0,0,64,64)},!1),xp=new vt;fn.add(xp);for(let n=0;n<40;n++){let e=new oi(new Jn({map:uu,color:4190463,blending:Gn,depthWrite:!1,transparent:!0}));e.visible=!1,xp.add(e),pu.push({s:e,v:new P,life:0})}function Ss(n,e,t=14,i=4){let s=0;for(let r of pu)if(!(r.life>0)&&(r.life=.5+Math.random()*.4,r.s.visible=!0,r.s.material.color.set(e),r.s.position.copy(n),r.s.scale.setScalar(.5),r.v.set((Math.random()-.5)*i,Math.random()*i,(Math.random()-.5)*i),++s>=t))break}function au(n,e=80,t=1.2){let i=new it(new st(t,t,e,12,1,!0),new Ot({color:n,transparent:!0,opacity:.22,blending:Gn,depthWrite:!1,side:Cn,fog:!1}));return i.position.y=e/2,i}function lv(){at&&at.dispose(),Sn&&Sn.dispose(),dc&&dc.dispose();for(let n of[bs,ln,qn,...Sr.map(e=>e.g)])n&&(fn.remove(n),n.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material!==void 0&&e.material.dispose?.()}));Sr=[],bs=null,ln=null,qn=null,Ba&&(Ba.dispose(),Ba=null),Wd()}function _p(n){if(lv(),dn=n,Wn=Vn[n],hp(Wn.name),at=new Wl(fn,{...Wn,night:Wn.night}),at.reflective=[],In=Wn.build(at),at.finish(),dc=tu(fn,Wn.light),hu=Wn.light.fogFar,av&&fn.fog&&(fn.fog.far=Math.min(fn.fog.far,fp),fn.fog.near=Math.min(fn.fog.near,fp*.3),hu=fn.fog.far),at.reflective.length){let o=new $s,l=tu(o,Wn.light);Ba=ov.fromScene(o,.02,.1,5e3).texture,l.dispose();for(let c of at.reflective)c.envMap=Ba,c.needsUpdate=!0}Sn=new nc(at,fn,{...Wn.civ,plazaMul:1});let e=[],t=at.R;for(let o=0;o<400&&e.length<32;o++){let l,c;if(t()<.5&&at.loops.length){let u=at.loops[Math.floor(t()*at.loops.length)].r,d=Math.floor(t()*4);l=d<2?u[0]+t()*(u[2]-u[0]):u[d===2?0:2],c=d>=2?u[1]+t()*(u[3]-u[1]):u[d===0?1:3]}else if(at.plazas.length){let u=at.plazas[Math.floor(t()*at.plazas.length)].r;l=u[0]+t()*(u[2]-u[0]),c=u[1]+t()*(u[3]-u[1])}else continue;at.inWater(l,c)||at.solid(l,.8,c)||e.push([l,at.groundAt(l,c,.5)+1,c])}let i=at.boxes.filter(o=>o.y1>5&&o.y1<14&&o.y0===0&&(o.x1-o.x0)*(o.z1-o.z0)>80);for(let o=0;o<8&&i.length;o++){let l=i[Math.floor(t()*i.length)],c=(l.x0+l.x1)/2,u=(l.z0+l.z1)/2;e.push([c,at.groundAt(c,u,l.y1+.2)+1,u])}Mr=e.map(o=>({p:new P(...o),got:!1})),bs=new Li(new Zi(.32),new Ot({color:"#ffe45a"}),Mr.length),bs.frustumCulled=!1,fn.add(bs),Sr=In.checkpoints.map((o,l)=>{let c=new vt;c.position.set(...o);let u=new it(new on(1.6,.12,8,32),new Ot({color:"#3ff0ff"}));u.rotation.x=Math.PI/2,u.position.y=.15,c.add(u);let d=au("#3ff0ff",14,.9);return c.add(d),l===0&&(c.visible=!1),fn.add(c),{g:c,ring:u,beam:d,on:l===0,pos:new P(...o)}}),ln=new vt,ln.position.set(...In.goal.pos);let s=["#c08bff","#c08bff","#5ef0ff","#ffa040","#ffe45a"][n];if(dn===0||dn===4)ln.add(au("#ffe45a",140,2.5));else{let o=dn===1?new fa(.35,.12,48,8):dn===2?new Zi(.5):new gi(.45,1),l=new it(o,new Ot({color:s}));l.position.y=1,l.name="core",ln.add(l);let c=new oi(new Jn({map:uu,color:s,blending:Gn,depthWrite:!1,transparent:!0}));c.scale.setScalar(3),c.position.y=1,ln.add(c),ln.add(au(s,140,1.6))}fn.add(ln),qn=new vt,qn.position.set(...In.log);let r=new it(new Be(.5,.7,.08),new Ot({color:"#3ff0ff"}));r.position.y=.8,r.name="tab",qn.add(r);let a=new oi(new Jn({map:uu,color:"#3ff0ff",blending:Gn,depthWrite:!1,transparent:!0}));a.scale.setScalar(2),a.position.y=.8,qn.add(a),fn.add(qn),In.ship&&(In.ship.group.visible=!0),gc(!0),Ue.time=0,Ue.panic=0,Ue.witnesses=0,Ue.coins=0,Ue.logs=0,ep(pr[n].music)}function gc(n){let e=In.spawn;if(n){k.cp.set(e[0],e[1],e[2]),k.cpYaw=e[3],Ue.cpIndex=0;for(let[t,i]of Sr.entries())i.on=t===0,yp(i)}k.pos.copy(k.cp),k.pos.y=at.groundAt(k.pos.x,k.pos.z,k.pos.y+1),k.vel.set(0,0,0),k.yaw=k.cpYaw,k.grounded=!0,k.ag=It.agMax,k.floating=!1,k.cast=0,zt.yaw=k.yaw+Math.PI,zt.pitch=.32,Ue.grace=3,vr.root.visible=!0}function yp(n){n.ring.material.color.set(n.on?"#5aff8a":"#3ff0ff"),n.beam.material.color.set(n.on?"#5aff8a":"#3ff0ff"),n.beam.material.opacity=n.on?.08:.22}function Pn(n){for(let e of["ovTitle","ovLevels","ovCard","ovPause","ovEnd","ovCaught"])Ye(e).hidden=e!==n;Ye("hud").classList.toggle("hidden",n!==null&&n!=="ovCaught")}function pc(n,e,t=5.5){let i=Ye("toast");i.innerHTML=(n?"<b>"+n+"</b>":"")+e,i.hidden=!1,Ue.toastT=t}var vp=["Hold JUMP in the air to float. POWER blinks you forward when nobody is close.","The roofs are quieter than Michigan Ave. Float up onto the low ones and stay out of sight.","Times Square is packed. Walk up to a crowd and tap POWER to put everyone nearby to sleep.","The beach is wide open. Blink across the gaps and use the lifeguard towers as cover.","The base is crawling with staff around the ship. Sleep them in groups, then make a run for it."];function xc(n){let e=pr[n],t=Vn[n];Ye("cardKick").textContent=`Level ${n+1} \xB7 ${t.place}`,Ye("cardTitle").textContent=e.title,Ye("cardText").textContent=e.card,Ye("cardTip").textContent=vp[n],Ye("btnGo").onclick=()=>{ec(),bp(),Sp(n)},Pn("ovCard"),Tt="card"}function _c(){let n=Ye("levelGrid");n.innerHTML="",Vn.forEach((e,t)=>{let i=document.createElement("button");i.className="lv",i.disabled=t>=ei.unlocked;let s=ei.best[e.id];i.innerHTML=`${t+1}. ${e.name}<small>${s?Mp(s.time)+" \xB7 \u2726"+s.coins:t>=ei.unlocked?"Locked":pr[t].title}</small>`,i.onclick=()=>{Bt("uiBlip"),xc(t)},n.appendChild(i)})}var Mp=n=>`${Math.floor(n/60)}:${String(Math.floor(n%60)).padStart(2,"0")}`;function Sp(n){Ye("loadingText").textContent=`Loading ${Vn[n].name}\u2026`,Ye("loading").hidden=!1,setTimeout(()=>{n!==dn||!at?_p(n):(Sn.reset(),mc()),mc(),Ye("loading").hidden=!0,Pn(null),Tt="play",Ms.paused=!1,Ua(.38),Ye("hint").textContent=vp[n],Ue.hintT=9},30)}function mc(){gc(!0),Sn.reset(),Ue.time=0,Ue.panic=0,Ue.witnesses=0,Ue.coins=0,Ue.logs=0;for(let n of Mr)n.got=!1;qn.visible=!0,ln.visible=!0,In.ship&&(In.ship.group.position.y=dn===4?2.2:In.ship.group.position.y)}function bp(){let n=document.documentElement;try{!document.fullscreenElement&&n.requestFullscreen&&n.requestFullscreen({navigationUI:"hide"}).then(()=>{try{screen.orientation.lock("landscape").catch(()=>{})}catch{}}).catch(()=>{})}catch{}}Ye("btnPlay").onclick=()=>{ec(),Bt("uiBlip");let n=0;for(let e=0;e<ei.unlocked&&e<Vn.length&&(n=e,!!ei.best[Vn[e].id]);e++);xc(n)};Ye("btnLevels").onclick=()=>{ec(),Bt("uiBlip"),_c(),Pn("ovLevels")};Ye("btnLvBack").onclick=()=>{Pn("ovTitle"),Tt="title"};Ye("btnCardBack").onclick=()=>{_c(),Pn("ovLevels")};Ye("btnPause").onclick=()=>{Tt==="play"&&(Tt="paused",Ms.paused=!0,Fa(),op(),Pn("ovPause"))};Ye("btnResume").onclick=()=>{Tt="play",Ms.paused=!1,Pn(null)};Ye("btnRestart").onclick=()=>{Pn(null),mc(),Tt="play",Ms.paused=!1};Ye("btnQuit").onclick=()=>{Ms.paused=!1,_c(),Pn("ovLevels"),Tt="title"};Ye("btnMute").onclick=()=>{np(),Ye("btnMute").textContent="Sound: "+(ip()?"off":"on")};Ye("btnFs").onclick=bp;Ye("btnReplay").onclick=()=>xc(dn);Ye("btnEndLevels").onclick=()=>{_c(),Pn("ovLevels"),Tt="title"};Ye("btnNext").onclick=()=>{dn+1<Vn.length&&xc(dn+1)};document.addEventListener("visibilitychange",()=>{document.hidden&&Tt==="play"&&Ye("btnPause").onclick()});rp(gp,{joyBase:Ye("joyBase"),joyKnob:Ye("joyKnob"),btnJump:Ye("btnJump"),btnPower:Ye("btnPower")});var uc=new P;function Ep(n){let[e,t]=nu(),i=-Math.sin(zt.yaw),s=-Math.cos(zt.yaw),r=Math.cos(zt.yaw),a=-Math.sin(zt.yaw),o=i*-t+r*e,l=s*-t+a*e,c=Math.min(1,Math.hypot(o,l));c>.01&&(o/=c,l/=c);let u=c<.72?It.walk*(c/.72):It.run,d=k.grounded?It.accel:It.airAccel,f=o*u,h=l*u;if(k.vel.x+=Math.max(-d*n,Math.min(d*n,f-k.vel.x)),k.vel.z+=Math.max(-d*n,Math.min(d*n,h-k.vel.z)),k.cast>0&&(k.vel.x*=.5,k.vel.z*=.5),c>.05){let T=Math.atan2(o,l)-k.yaw;T=Math.atan2(Math.sin(T),Math.cos(T)),k.yaw+=T*Math.min(1,n*12)}k.coyote-=n,tt.jumpPressed&&(k.grounded||k.coyote>0)&&(k.vel.y=It.jumpV,k.grounded=!1,k.coyote=0,k.airT=0,Bt("jump"));let m=k.floating;k.floating=!1,k.grounded||(k.airT+=n,tt.jump&&(k.airT>.22||k.vel.y<1.5)?k.ag>0?(k.floating=!0,k.ag-=n,k.vel.y+=(It.agRise-k.vel.y)*Math.min(1,n*6)):(k.vel.y=Math.max(k.vel.y-It.grav*n,It.glideV),k.floating=!0):k.vel.y=Math.max(k.vel.y-It.grav*n,-40)),k.floating&&!m&&tp(),!k.floating&&m&&Fa(),k.pos.x+=k.vel.x*n,k.pos.z+=k.vel.z*n,at.pushOut(k.pos,It.radius,It.height),k.pos.y+=k.vel.y*n;let x=at.ceilingAt(k.pos.x,k.pos.z,k.pos.y-k.vel.y*n,It.height,It.radius*.8);k.vel.y>0&&k.pos.y+It.height>x&&(k.pos.y=x-It.height,k.vel.y=0);let p=at.groundAt(k.pos.x,k.pos.z,k.pos.y,It.radius,.5);if(k.pos.y<=p+.001?(!k.grounded&&k.vel.y<-13?Bt("land",!0):k.grounded||Bt("land",!1),k.pos.y=p,k.vel.y<0&&(k.vel.y=0),k.grounded=!0,k.ag=It.agMax,k.coyote=.12):k.grounded&&k.pos.y-p<.55&&k.vel.y<=0?k.pos.y=p:k.grounded&&(k.grounded=!1,k.airT=.3),at.inWater(k.pos.x,k.pos.z)&&k.pos.y<.4){Bt("splash"),Ss(k.pos.clone().setY(.3),"#9fe8ff",18,5),pc("","Splash. Aliens don\u2019t swim. Back to the last checkpoint.",3),gc(!1),Bt("respawn");return}k.blinkCD-=n,k.powerCD-=n,k.cast-=n;let g=Sn.awakeNear(k.pos.x,k.pos.z,It.sleepR),_=Ye("btnPower"),M=g?"SLEEP":"BLINK";if(_.textContent!==M&&(_.textContent=M),_.classList.toggle("cool",g?k.powerCD>0:k.blinkCD>0),tt.powerPressed){if(g&&k.powerCD<=0){let v=Sn.sleepAround(k.pos.x,k.pos.z,It.sleepR);k.powerCD=It.sleepCD,k.cast=.45,Bt("cast"),setTimeout(()=>Bt("sleep"),200),Ss(k.pos.clone().setY(k.pos.y+1.3),"#9ff7ff",20,7),v>2&&pc("",`${v} people out cold.`,2)}else if(!g&&k.blinkCD<=0){let v=Math.sin(k.yaw),T=Math.cos(k.yaw),A=0;for(let y=.5;y<=It.blinkDist;y+=.5){let b=k.pos.x+v*y,D=k.pos.z+T*y;if(at.solid(b,k.pos.y+.5,D)||at.solid(b,k.pos.y+1,D)||at.inWater(b,D)&&k.pos.y<.5||b<at.bounds[0]+1||b>at.bounds[2]-1||D<at.bounds[1]+1||D>at.bounds[3]-1)break;A=y}A>.6&&(Ss(k.pos.clone().setY(k.pos.y+.6),"#3ff0ff",12,3),k.pos.x+=v*(A-.3),k.pos.z+=T*(A-.3),Ss(k.pos.clone().setY(k.pos.y+.6),"#3ff0ff",12,3),Bt("blink"),k.blinkCD=It.blinkCD)}}}function fu(n){(tt.camDX||tt.camDY)&&(zt.yaw-=tt.camDX*.0065,zt.pitch=Math.max(-.05,Math.min(1.15,zt.pitch+tt.camDY*.0045)),zt.lastDrag=Ue.t);let[,e]=nu(),t=Math.hypot(k.vel.x,k.vel.z);if(Ue.t-zt.lastDrag>1.2&&t>1&&e<-.3){let f=k.yaw+Math.PI-zt.yaw;f=Math.atan2(Math.sin(f),Math.cos(f)),zt.yaw+=f*Math.min(1,n*1.4)}let i=k.pos.x,s=k.pos.y+1.15,r=k.pos.z,a=Math.cos(zt.pitch),o=k.floating?It.camDist+1.2:It.camDist;zt.dist+=(o-zt.dist)*Math.min(1,n*3);let l=Math.sin(zt.yaw)*a,c=Math.sin(zt.pitch),u=Math.cos(zt.yaw)*a,d=zt.dist;for(let f=.6;f<=zt.dist;f+=.35)if(at.solid(i+l*f,s+c*f,r+u*f)){d=Math.max(.8,f-.45);break}Mn.position.set(i+l*d,Math.max(s+c*d,at.groundAt(i+l*d,r+u*d,s+c*d)+.35),r+u*d),Mn.lookAt(i,s+.25,r)}var Tp=Ye("mini"),Ke=Tp.getContext("2d"),br={},cc=(n,e)=>{br[n]!==e&&(br[n]=e,Ye(n).textContent=e)},dp=(n,e,t)=>{let i=n+e;br[i]!==t&&(br[i]=t,Ye(n).style[e]=t)};function cv(){let n=zt.yaw,e=ln.position,t=e.x-k.pos.x,i=e.z-k.pos.z,s=Math.hypot(t,i),r=t*Math.cos(n)-i*Math.sin(n),a=t*Math.sin(n)+i*Math.cos(n);dp("objArrow","transform",`rotate(${Math.atan2(r,-a).toFixed(2)}rad)`),cc("objLabel",In.goal.label),cc("objDist",s>1e3?(s/1e3).toFixed(1)+" km":Math.round(s)+" m"),dp("panicFill","width",Math.min(100,Ue.panic).toFixed(1)+"%");let o=Ue.panic>70;br.hot!==o&&(br.hot=o,Ye("panic").classList.toggle("hot",o)),cc("coinN",`${Ue.coins}/${Mr.length}`),cc("logN",`${Ue.logs}/1`);let l=at.minimap,c=Tp.width,u=c/2,d=u/230/l.sc;Ke.save(),Ke.clearRect(0,0,c,c),Ke.beginPath(),Ke.arc(u,u,u-2,0,7),Ke.clip(),Ke.fillStyle=Wn.outerGround,Ke.fillRect(0,0,c,c),Ke.translate(u,u),Ke.rotate(n),Ke.scale(d,d);let f=M=>(M-l.x0)*l.sc,h=M=>(M-l.z0)*l.sc;Ke.translate(-f(k.pos.x),-h(k.pos.z)),Ke.drawImage(l.canvas,0,0);let m=1/d;for(let M of Sn.civs)Math.abs(M.x-k.pos.x)>240||Math.abs(M.z-k.pos.z)>240||(Ke.fillStyle=M.state==="flee"||M.state==="notice"?"#ff3a3a":M.state==="sleep"?"#5ef0ff":"#ffffff",Ke.fillRect(f(M.x)-2*m,h(M.z)-2*m,4*m,4*m));for(let M of Sr)M.on||(Ke.fillStyle="#3ff0ff",Ke.beginPath(),Ke.arc(f(M.pos.x),h(M.pos.z),4*m,0,7),Ke.fill());Ke.restore();let x=r*(u/230),p=a*(u/230),g=Math.hypot(x,p);g>u-12&&(x*=(u-12)/g,p*=(u-12)/g),Ke.fillStyle="#ffe45a",Ke.strokeStyle="#3a2600",Ke.lineWidth=3,Ke.beginPath(),Ke.arc(u+x,u+p,8,0,7),Ke.fill(),Ke.stroke();let _=k.yaw-(zt.yaw+Math.PI);Ke.save(),Ke.translate(u,u),Ke.rotate(-_+Math.PI),Ke.fillStyle="#93cf3a",Ke.strokeStyle="#102000",Ke.lineWidth=3,Ke.beginPath(),Ke.moveTo(0,-11),Ke.lineTo(8,8),Ke.lineTo(0,4),Ke.lineTo(-8,8),Ke.closePath(),Ke.stroke(),Ke.fill(),Ke.restore(),Ke.fillStyle="#fff",Ke.font="bold 20px sans-serif",Ke.textAlign="center",Ke.textBaseline="middle",Ke.fillText("N",u+Math.sin(-n)*(u-14)*-1,u-Math.cos(n)*(u-14))}function wp(n){Ue.time+=n;let e=Sn.update(n,{x:k.pos.x,y:k.pos.y,z:k.pos.z,active:Tt==="play"&&Ue.grace<=0},Mn);Ue.grace-=n,e.witnesses&&(Ue.panic+=e.witnesses*Wn.civ.panic,Ue.witnesses+=e.witnesses),Ue.panic=Math.max(0,Ue.panic-n*(e.fleeing?.6:2.6)),eu(Ue.panic>55),Ue.panic>=100&&Tt==="play"&&(Tt="caught",Ue.caughtT=0,Bt("alert"),Bt("siren"),Fa(),Ye("flash").style.opacity=1,Pn("ovCaught"),Ua(.12));let t=uc,i=new ut,s=new _n,r=new P;Mr.forEach((l,c)=>{!l.got&&l.p.distanceToSquared(t.set(k.pos.x,k.pos.y+.6,k.pos.z))<1.6&&(l.got=!0,Ue.coins++,Bt("coin"),Ss(l.p,"#ffe45a",8,3)),s.setFromAxisAngle(new P(0,1,0),Ue.t*2+c),r.setScalar(l.got?1e-4:1),i.compose(new P(l.p.x,l.p.y+Math.sin(Ue.t*2.5+c)*.15,l.p.z),s,r),bs.setMatrixAt(c,i)}),bs.instanceMatrix.needsUpdate=!0,Sr.forEach((l,c)=>{l.ring.rotation.z+=n,!l.on&&l.pos.distanceTo(uc.set(k.pos.x,l.pos.y,k.pos.z))<3&&Math.abs(k.pos.y-l.pos.y)<3&&(l.on=!0,yp(l),k.cp.copy(l.pos),k.cpYaw=k.yaw,Bt("ckpt"),pc("","Checkpoint",1.6))}),qn.visible&&(qn.getObjectByName("tab").rotation.y+=n*1.5,qn.position.y=In.log[1]+Math.sin(Ue.t*2)*.12,qn.position.distanceTo(uc.set(k.pos.x,k.pos.y+.3,k.pos.z))<1.8&&(qn.visible=!1,Ue.logs=1,Bt("ckpt"),pc("Ship\u2019s log \xB7 "+Wn.name,pr[dn].log,8)));let a=ln.getObjectByName("core");a&&(a.rotation.y+=n*1.6,a.rotation.x+=n*.7,a.position.y=1+Math.sin(Ue.t*2)*.15);let o=In.goal.radius||1.6;ln.visible&&Math.hypot(ln.position.x-k.pos.x,ln.position.z-k.pos.z)<o&&Math.abs(ln.position.y-k.pos.y)<2.5&&hv();for(let l of at.anim)l(Ue.t)}function hv(){if(Fa(),eu(!1),dn===4){Tt="launch",Ue.launchT=0,Bt("part"),setTimeout(()=>Bt("launch"),900),vr.root.visible=!1,ln.visible=!1,Ss(k.pos.clone().setY(1),"#ffe45a",30,6);return}Bt(dn===0?"win":"part"),ln.visible=!1,Ss(k.pos.clone().setY(1),"#ffe45a",30,6),Ap()}function Ap(){Tt="end";let n=Wn.id,e=ei.best[n];!e||Ue.time<e.time?ei.best[n]={time:Ue.time,coins:Math.max(Ue.coins,e?e.coins:0)}:ei.best[n].coins=Math.max(e.coins,Ue.coins),ei.unlocked=Math.max(ei.unlocked,Math.min(Vn.length,dn+2)),rv();let t=pr[dn];Ye("endKick").textContent=t.endKick,Ye("endTitle").textContent=t.endTitle,Ye("endStory").textContent=dn===4?"The ship remembered the way. Thanks for playing Long Way Home.":t.endStory,Ye("endStats").innerHTML=`<div><b>${Mp(Ue.time)}</b>time</div><div><b>${Ue.coins}/${Mr.length}</b>stardust</div><div><b>${Ue.witnesses}</b>people spooked</div>`,Ye("btnNext").hidden=dn>=Vn.length-1,Pn("ovEnd"),Ua(.2)}var pp=performance.now(),ou=0,lu=0,cu=0;function Rp(n){requestAnimationFrame(Rp);let e=Math.min(.05,(n-pp)/1e3);if(pp=n,Ue.t+=e,!!at){if(ou+=e,lu++,cu+=e,cu>2.5){let t=lu/ou;t<34&&hc>.9&&(hc-=.15,ti.setPixelRatio(hc),du()),ou=0,lu=0,cu=0,window.__fps=t}if(Tt==="play")Ep(e),fu(e),wp(e);else if(Tt==="caught")Ue.caughtT+=e,Sn.update(e,{x:k.pos.x,y:k.pos.y,z:k.pos.z,active:!1},Mn),fu(e),Ue.caughtT>2.4&&(Ye("flash").style.opacity=0,Ue.panic=0,Sn.reset(),gc(!1),Bt("respawn"),Pn(null),Tt="play",Ua(.38));else if(Tt==="launch"){Ue.launchT+=e;let t=In.ship.group,i=Ue.launchT;t.position.y=2.2+Math.max(0,i-1)**2*2.2,t.rotation.y+=e*(1+i*2),t.rotation.x*=.98,In.ship.lights.color.setHSL(i*.3%1,1,.6),Mn.position.lerp(uc.set(t.position.x+30,8+i*3,t.position.z+34),e*1.5),Mn.lookAt(t.position),Sn.update(e,{x:0,y:-999,z:0,active:!1},Mn),i>6&&Ap()}else if(Tt==="title"||Tt==="card"||Tt==="end"||Tt==="loading"){let t=Ue.t*.2;Mn.position.set(k.pos.x+Math.sin(t)*4.6,k.pos.y+1.5,k.pos.z+Math.cos(t)*4.6),Mn.lookAt(k.pos.x-Math.cos(t)*1.7,k.pos.y+1.3,k.pos.z+Math.sin(t)*1.7),Sn.update(e,{x:k.pos.x,y:k.pos.y,z:k.pos.z,active:!1},Mn)}for(let t of pu)t.life<=0||(t.life-=e,t.s.position.addScaledVector(t.v,e),t.v.y-=6*e,t.s.scale.setScalar(Math.max(.01,t.life)*.9),t.life<=0&&(t.s.visible=!1));Ue.toastT>0&&(Ue.toastT-=e,Ue.toastT<=0&&(Ye("toast").hidden=!0)),Ue.hintT>0&&(Ue.hintT-=e,Ue.hintT<=0&&(Ye("hint").textContent="")),vr.root.position.copy(k.pos),vr.root.rotation.y=k.yaw,vr.update(e,{speed:Tt==="play"?Math.hypot(k.vel.x,k.vel.z):0,grounded:k.grounded,vy:k.vel.y,floating:k.floating,casting:k.cast>0}),dc.follow(k.pos),at.cullFar(Mn,hu+40),ti.render(fn,Mn),up(e,ti,Tt==="play",Sn?Sn.civs.length:0),Tt==="play"&&cv(),ap()}}function uv(){cp();let n=Math.min(Vn.length-1,Number(fc.get("level")||0));_p(n),Tt="title",Pn("ovTitle"),Ye("hud").classList.add("hidden"),fc.has("play")&&(Pn(null),Tt="play",mc()),requestAnimationFrame(Rp)}window.__game={sim(n){let e=.016666666666666666;for(let t=0;t<n*60;t++)Ue.t+=e,Tt==="play"&&(Ep(e),fu(e),wp(e)),tt.jumpPressed=!1,tt.powerPressed=!1},renderer:ti,P:k,G:Ue,cam:zt,get world(){return at},get crowd(){return Sn},input:tt,startLevel:Sp,LEVELS:Vn,setState:n=>{Tt=n},get state(){return Tt}};uv();"serviceWorker"in navigator&&navigator.serviceWorker.register("../sw.js").catch(()=>{});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
