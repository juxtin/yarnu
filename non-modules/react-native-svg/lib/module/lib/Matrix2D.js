Object.defineProperty(exports,"__esModule",{value:true});exports.reset=reset;exports.toArray=toArray;exports.append=append;exports.appendTransform=appendTransform;exports.identity=void 0;var DEG_TO_RAD=Math.PI/180;var identity=[1,0,0,1,0,0];exports.identity=identity;var a=1;var b=0;var c=0;var d=1;var tx=0;var ty=0;var hasInitialState=true;function reset(){if(hasInitialState){return;}a=d=1;b=c=tx=ty=0;hasInitialState=true;}function toArray(){if(hasInitialState){return identity;}return[a,b,c,d,tx,ty];}function append(a2,b2,c2,d2,tx2,ty2){var change=a2!==1||b2!==0||c2!==0||d2!==1;var translate=tx2!==0||ty2!==0;if(!change&&!translate){return;}if(hasInitialState){hasInitialState=false;a=a2;b=b2;c=c2;d=d2;tx=tx2;ty=ty2;return;}var a1=a;var b1=b;var c1=c;var d1=d;if(change){a=a1*a2+c1*b2;b=b1*a2+d1*b2;c=a1*c2+c1*d2;d=b1*c2+d1*d2;}if(translate){tx=a1*tx2+c1*ty2+tx;ty=b1*tx2+d1*ty2+ty;}}function appendTransform(x,y,scaleX,scaleY,rotation,skewX,skewY,regX,regY){if(x===0&&y===0&&scaleX===1&&scaleY===1&&rotation===0&&skewX===0&&skewY===0&&regX===0&&regY===0){return;}var cos,sin;if(rotation%360){var r=rotation*DEG_TO_RAD;cos=Math.cos(r);sin=Math.sin(r);}else{cos=1;sin=0;}var a2=cos*scaleX;var b2=sin*scaleX;var c2=-sin*scaleY;var d2=cos*scaleY;if(skewX||skewY){var b1=Math.tan(skewY*DEG_TO_RAD);var c1=Math.tan(skewX*DEG_TO_RAD);append(a2+c1*b2,b1*a2+b2,c2+c1*d2,b1*c2+d2,x,y);}else{append(a2,b2,c2,d2,x,y);}if(regX||regY){tx-=regX*a+regY*c;ty-=regX*b+regY*d;hasInitialState=false;}}
//# sourceMappingURL=Matrix2D.js.map