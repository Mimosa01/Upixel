import{c as tt}from"./@pixi-BV13E6tz.js";import{l as ft}from"./qs-CWD4nPQT.js";var Q={exports:{}};/*! https://mths.be/punycode v1.4.1 by @mathias */Q.exports;(function(s,a){(function(t){var d=a&&!a.nodeType&&a,l=s&&!s.nodeType&&s,g=typeof tt=="object"&&tt;(g.global===g||g.window===g||g.self===g)&&(t=g);var m,h=2147483647,x=36,b=1,F=26,G=38,y=700,f=72,P=128,z="-",q=/^xn--/,N=/[^\x20-\x7E]/,o=/[\x2E\u3002\uFF0E\uFF61]/g,c={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},O=x-b,u=Math.floor,C=String.fromCharCode,B;function A(e){throw new RangeError(c[e])}function I(e,r){for(var n=e.length,i=[];n--;)i[n]=r(e[n]);return i}function U(e,r){var n=e.split("@"),i="";n.length>1&&(i=n[0]+"@",e=n[1]),e=e.replace(o,".");var p=e.split("."),j=I(p,r).join(".");return i+j}function J(e){for(var r=[],n=0,i=e.length,p,j;n<i;)p=e.charCodeAt(n++),p>=55296&&p<=56319&&n<i?(j=e.charCodeAt(n++),(j&64512)==56320?r.push(((p&1023)<<10)+(j&1023)+65536):(r.push(p),n--)):r.push(p);return r}function Y(e){return I(e,function(r){var n="";return r>65535&&(r-=65536,n+=C(r>>>10&1023|55296),r=56320|r&1023),n+=C(r),n}).join("")}function Z(e){return e-48<10?e-22:e-65<26?e-65:e-97<26?e-97:x}function K(e,r){return e+22+75*(e<26)-((r!=0)<<5)}function W(e,r,n){var i=0;for(e=n?u(e/y):e>>1,e+=u(e/r);e>O*F>>1;i+=x)e=u(e/O);return u(i+(O+1)*e/(e+G))}function _(e){var r=[],n=e.length,i,p=0,j=P,v=f,M,D,R,$,w,T,L,S,V;for(M=e.lastIndexOf(z),M<0&&(M=0),D=0;D<M;++D)e.charCodeAt(D)>=128&&A("not-basic"),r.push(e.charCodeAt(D));for(R=M>0?M+1:0;R<n;){for($=p,w=1,T=x;R>=n&&A("invalid-input"),L=Z(e.charCodeAt(R++)),(L>=x||L>u((h-p)/w))&&A("overflow"),p+=L*w,S=T<=v?b:T>=v+F?F:T-v,!(L<S);T+=x)V=x-S,w>u(h/V)&&A("overflow"),w*=V;i=r.length+1,v=W(p-$,i,$==0),u(p/i)>h-j&&A("overflow"),j+=u(p/i),p%=i,r.splice(p++,0,j)}return Y(r)}function E(e){var r,n,i,p,j,v,M,D,R,$,w,T=[],L,S,V,H;for(e=J(e),L=e.length,r=P,n=0,j=f,v=0;v<L;++v)w=e[v],w<128&&T.push(C(w));for(i=p=T.length,p&&T.push(z);i<L;){for(M=h,v=0;v<L;++v)w=e[v],w>=r&&w<M&&(M=w);for(S=i+1,M-r>u((h-n)/S)&&A("overflow"),n+=(M-r)*S,r=M,v=0;v<L;++v)if(w=e[v],w<r&&++n>h&&A("overflow"),w==r){for(D=n,R=x;$=R<=j?b:R>=j+F?F:R-j,!(D<$);R+=x)H=D-$,V=x-$,T.push(C(K($+H%V,0))),D=u(H/V);T.push(C(K(D,0))),j=W(n,S,i==p),n=0,++i}++n,++r}return T.join("")}function at(e){return U(e,function(r){return q.test(r)?_(r.slice(4).toLowerCase()):r})}function it(e){return U(e,function(r){return N.test(r)?"xn--"+E(r):r})}if(m={version:"1.4.1",ucs2:{decode:J,encode:Y},decode:_,encode:E,toASCII:it,toUnicode:at},d&&l)if(s.exports==d)l.exports=m;else for(B in m)m.hasOwnProperty(B)&&(d[B]=m[B]);else t.punycode=m})(tt)})(Q,Q.exports);var ut=Q.exports,ct=ut;function k(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}var pt=/^([a-z0-9.+-]+:)/i,lt=/:[0-9]*$/,mt=/^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/,xt=["<",">",'"',"`"," ","\r",`
`,"	"],dt=["{","}","|","\\","^","`"].concat(xt),st=["'"].concat(dt),ot=["%","/","?",";","#"].concat(st),rt=["/","?","#"],gt=255,nt=/^[+a-z0-9A-Z_-]{0,63}$/,bt=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,yt={javascript:!0,"javascript:":!0},ht={javascript:!0,"javascript:":!0},X={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},et=ft;function Ct(s,a,t){if(s&&typeof s=="object"&&s instanceof k)return s;var d=new k;return d.parse(s,a,t),d}k.prototype.parse=function(s,a,t){if(typeof s!="string")throw new TypeError("Parameter 'url' must be a string, not "+typeof s);var d=s.indexOf("?"),l=d!==-1&&d<s.indexOf("#")?"?":"#",g=s.split(l),m=/\\/g;g[0]=g[0].replace(m,"/"),s=g.join(l);var h=s;if(h=h.trim(),!t&&s.split("#").length===1){var x=mt.exec(h);if(x)return this.path=h,this.href=h,this.pathname=x[1],x[2]?(this.search=x[2],a?this.query=et.parse(this.search.substr(1)):this.query=this.search.substr(1)):a&&(this.search="",this.query={}),this}var b=pt.exec(h);if(b){b=b[0];var F=b.toLowerCase();this.protocol=F,h=h.substr(b.length)}if(t||b||h.match(/^\/\/[^@/]+@[^@/]+/)){var G=h.substr(0,2)==="//";G&&!(b&&ht[b])&&(h=h.substr(2),this.slashes=!0)}if(!ht[b]&&(G||b&&!X[b])){for(var y=-1,f=0;f<rt.length;f++){var P=h.indexOf(rt[f]);P!==-1&&(y===-1||P<y)&&(y=P)}var z,q;y===-1?q=h.lastIndexOf("@"):q=h.lastIndexOf("@",y),q!==-1&&(z=h.slice(0,q),h=h.slice(q+1),this.auth=decodeURIComponent(z)),y=-1;for(var f=0;f<ot.length;f++){var P=h.indexOf(ot[f]);P!==-1&&(y===-1||P<y)&&(y=P)}y===-1&&(y=h.length),this.host=h.slice(0,y),h=h.slice(y),this.parseHost(),this.hostname=this.hostname||"";var N=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!N)for(var o=this.hostname.split(/\./),f=0,c=o.length;f<c;f++){var O=o[f];if(O&&!O.match(nt)){for(var u="",C=0,B=O.length;C<B;C++)O.charCodeAt(C)>127?u+="x":u+=O[C];if(!u.match(nt)){var A=o.slice(0,f),I=o.slice(f+1),U=O.match(bt);U&&(A.push(U[1]),I.unshift(U[2])),I.length&&(h="/"+I.join(".")+h),this.hostname=A.join(".");break}}}this.hostname.length>gt?this.hostname="":this.hostname=this.hostname.toLowerCase(),N||(this.hostname=ct.toASCII(this.hostname));var J=this.port?":"+this.port:"",Y=this.hostname||"";this.host=Y+J,this.href+=this.host,N&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),h[0]!=="/"&&(h="/"+h))}if(!yt[F])for(var f=0,c=st.length;f<c;f++){var Z=st[f];if(h.indexOf(Z)!==-1){var K=encodeURIComponent(Z);K===Z&&(K=escape(Z)),h=h.split(Z).join(K)}}var W=h.indexOf("#");W!==-1&&(this.hash=h.substr(W),h=h.slice(0,W));var _=h.indexOf("?");if(_!==-1?(this.search=h.substr(_),this.query=h.substr(_+1),a&&(this.query=et.parse(this.query)),h=h.slice(0,_)):a&&(this.search="",this.query={}),h&&(this.pathname=h),X[F]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var J=this.pathname||"",E=this.search||"";this.path=J+E}return this.href=this.format(),this};k.prototype.format=function(){var s=this.auth||"";s&&(s=encodeURIComponent(s),s=s.replace(/%3A/i,":"),s+="@");var a=this.protocol||"",t=this.pathname||"",d=this.hash||"",l=!1,g="";this.host?l=s+this.host:this.hostname&&(l=s+(this.hostname.indexOf(":")===-1?this.hostname:"["+this.hostname+"]"),this.port&&(l+=":"+this.port)),this.query&&typeof this.query=="object"&&Object.keys(this.query).length&&(g=et.stringify(this.query,{arrayFormat:"repeat",addQueryPrefix:!1}));var m=this.search||g&&"?"+g||"";return a&&a.substr(-1)!==":"&&(a+=":"),this.slashes||(!a||X[a])&&l!==!1?(l="//"+(l||""),t&&t.charAt(0)!=="/"&&(t="/"+t)):l||(l=""),d&&d.charAt(0)!=="#"&&(d="#"+d),m&&m.charAt(0)!=="?"&&(m="?"+m),t=t.replace(/[?#]/g,function(h){return encodeURIComponent(h)}),m=m.replace("#","%23"),a+l+t+m+d};k.prototype.resolve=function(s){return this.resolveObject(Ct(s,!1,!0)).format()};k.prototype.resolveObject=function(s){if(typeof s=="string"){var a=new k;a.parse(s,!1,!0),s=a}for(var t=new k,d=Object.keys(this),l=0;l<d.length;l++){var g=d[l];t[g]=this[g]}if(t.hash=s.hash,s.href==="")return t.href=t.format(),t;if(s.slashes&&!s.protocol){for(var m=Object.keys(s),h=0;h<m.length;h++){var x=m[h];x!=="protocol"&&(t[x]=s[x])}return X[t.protocol]&&t.hostname&&!t.pathname&&(t.pathname="/",t.path=t.pathname),t.href=t.format(),t}if(s.protocol&&s.protocol!==t.protocol){if(!X[s.protocol]){for(var b=Object.keys(s),F=0;F<b.length;F++){var G=b[F];t[G]=s[G]}return t.href=t.format(),t}if(t.protocol=s.protocol,!s.host&&!ht[s.protocol]){for(var c=(s.pathname||"").split("/");c.length&&!(s.host=c.shift()););s.host||(s.host=""),s.hostname||(s.hostname=""),c[0]!==""&&c.unshift(""),c.length<2&&c.unshift(""),t.pathname=c.join("/")}else t.pathname=s.pathname;if(t.search=s.search,t.query=s.query,t.host=s.host||"",t.auth=s.auth,t.hostname=s.hostname||s.host,t.port=s.port,t.pathname||t.search){var y=t.pathname||"",f=t.search||"";t.path=y+f}return t.slashes=t.slashes||s.slashes,t.href=t.format(),t}var P=t.pathname&&t.pathname.charAt(0)==="/",z=s.host||s.pathname&&s.pathname.charAt(0)==="/",q=z||P||t.host&&s.pathname,N=q,o=t.pathname&&t.pathname.split("/")||[],c=s.pathname&&s.pathname.split("/")||[],O=t.protocol&&!X[t.protocol];if(O&&(t.hostname="",t.port=null,t.host&&(o[0]===""?o[0]=t.host:o.unshift(t.host)),t.host="",s.protocol&&(s.hostname=null,s.port=null,s.host&&(c[0]===""?c[0]=s.host:c.unshift(s.host)),s.host=null),q=q&&(c[0]===""||o[0]==="")),z)t.host=s.host||s.host===""?s.host:t.host,t.hostname=s.hostname||s.hostname===""?s.hostname:t.hostname,t.search=s.search,t.query=s.query,o=c;else if(c.length)o||(o=[]),o.pop(),o=o.concat(c),t.search=s.search,t.query=s.query;else if(s.search!=null){if(O){t.host=o.shift(),t.hostname=t.host;var u=t.host&&t.host.indexOf("@")>0?t.host.split("@"):!1;u&&(t.auth=u.shift(),t.hostname=u.shift(),t.host=t.hostname)}return t.search=s.search,t.query=s.query,(t.pathname!==null||t.search!==null)&&(t.path=(t.pathname?t.pathname:"")+(t.search?t.search:"")),t.href=t.format(),t}if(!o.length)return t.pathname=null,t.search?t.path="/"+t.search:t.path=null,t.href=t.format(),t;for(var C=o.slice(-1)[0],B=(t.host||s.host||o.length>1)&&(C==="."||C==="..")||C==="",A=0,I=o.length;I>=0;I--)C=o[I],C==="."?o.splice(I,1):C===".."?(o.splice(I,1),A++):A&&(o.splice(I,1),A--);if(!q&&!N)for(;A--;A)o.unshift("..");q&&o[0]!==""&&(!o[0]||o[0].charAt(0)!=="/")&&o.unshift(""),B&&o.join("/").substr(-1)!=="/"&&o.push("");var U=o[0]===""||o[0]&&o[0].charAt(0)==="/";if(O){t.hostname=U?"":o.length?o.shift():"",t.host=t.hostname;var u=t.host&&t.host.indexOf("@")>0?t.host.split("@"):!1;u&&(t.auth=u.shift(),t.hostname=u.shift(),t.host=t.hostname)}return q=q||t.host&&o.length,q&&!U&&o.unshift(""),o.length>0?t.pathname=o.join("/"):(t.pathname=null,t.path=null),(t.pathname!==null||t.search!==null)&&(t.path=(t.pathname?t.pathname:"")+(t.search?t.search:"")),t.auth=s.auth||t.auth,t.slashes=t.slashes||s.slashes,t.href=t.format(),t};k.prototype.parseHost=function(){var s=this.host,a=lt.exec(s);a&&(a=a[0],a!==":"&&(this.port=a.substr(1)),s=s.substr(0,s.length-a.length)),s&&(this.hostname=s)};
