/* (c) 2008, 2009 Add This, LLC */
var addthis_conf={ver:152};function addthis_onmouseover(_1,e,_3,_4,_5,_6,_7){if(_5){addthis_config.username=_5;}if(_6){addthis_language=_6;}addthis_content=_7||"";return addthis_open(_1,"share",_3,_4);}function addthis_onmouseout(){addthis_close();}function addthis_to(s){return addthis_sendto(s);}function addthis_invoke(s,u,t,p){addthis_config.username=p||_ate.pub();addthis_share.url=(u||w.addthis_url);addthis_share.title=(t||w.addthis_title);var w=window,lu=addthis_share.url.toLowerCase(),lt=addthis_share.title.toLowerCase();if(lu===""||lu==="[url]"){addthis_share.url=location.href;}if(lt===""||lt==="[title]"){addthis_share.title=document.title;}_ate.as(s);return false;}if(!window._ate){var _atd="www.addthis.com/",_atr="//s7.addthis.com/",_euc=encodeURIComponent,_duc=decodeURIComponent,_atu="undefined",_atc={dr:0,ver:250,loc:0,enote:"",cwait:500,tamp:1,samp:0.01,camp:0.2,vamp:1,addr:-1,addt:1,xfl:!!window.addthis_disable_flash,abf:!!window.addthis_do_ab};(function(){try{var l=window.location;if(l.protocol.indexOf("file")===0){_atr="http:"+_atr;}if(l.hostname.indexOf("localhost")!=-1){_atc.loc=1;}}catch(e){}var ua=navigator.userAgent.toLowerCase(),d=document,w=window,wa=w.addEventListener,we=w.attachEvent,dl=d.location,b={win:/windows/.test(ua),chr:/chrome/.test(ua),iph:/iphone/.test(ua),saf:(/webkit/.test(ua))&&!(/chrome/.test(ua)),opr:/opera/.test(ua),msi:(/msie/.test(ua))&&!(/opera/.test(ua)),ffx:/firefox/.test(ua),ie6:/msie 6.0/.test(ua),mod:-1},_9={isBound:false,isReady:false,readyList:window.addthis_onload||[],onReady:function(){if(!_9.isReady){_9.isReady=true;var l=_9.readyList;for(var fn=0;fn<l.length;fn++){l[fn].call(window);}_9.readyList=[];}},addLoad:function(_c){var _d=w.onload;if(typeof w.onload!="function"){w.onload=_c;}else{w.onload=function(){if(_d){_d();}_c();};}},bindReady:function(){if(r.isBound){return;}r.isBound=true;if(d.addEventListener&&!b.opr){d.addEventListener("DOMContentLoaded",r.onReady,false);}var _e=window.addthis_product;if(_e&&_e.indexOf("f")>-1){r.onReady();return;}if(b.msi&&window==top){(function(){if(r.isReady){return;}try{d.documentElement.doScroll("left");}catch(error){setTimeout(arguments.callee,0);return;}r.onReady();})();}if(b.opr){d.addEventListener("DOMContentLoaded",function(){if(r.isReady){return;}for(var i=0;i<d.styleSheets.length;i++){if(d.styleSheets[i].disabled){setTimeout(arguments.callee,0);return;}}r.onReady();},false);}if(b.saf){var _10;(function(){if(r.isReady){return;}if(d.readyState!="loaded"&&d.readyState!="complete"){setTimeout(arguments.callee,0);return;}if(_10===undefined){var _12=d.gn("link");for(var i=0;i<_12.length;i++){if(_12[i].getAttribute("rel")=="stylesheet"){_10++;}}var _14=d.gn("style");_10+=_14.length;}if(d.styleSheets.length!=_10){setTimeout(arguments.callee,0);return;}r.onReady();})();}r.addLoad(r.onReady);},append:function(fn,_16){r.bindReady();if(r.isReady){fn.call(window,[]);}else{r.readyList.push(function(){return fn.call(window,[]);});}}},r=_9,_17={vst:[],rev:"$Rev: 64692 $",bro:b,clck:1,show:1,dl:dl,camp:_atc.camp-Math.random(),samp:_atc.samp-Math.random(),vamp:_atc.vamp-Math.random(),tamp:_atc.tamp-Math.random(),ab:"-",scnt:1,seq:1,inst:1,wait:500,tmo:null,cvt:[],svt:[],sttm:new Date().getTime(),max:268435455,pix:"tev",sid:0,sub:!!window.at_sub,uid:null,oot:null,swf:"//bin.clearspring.com/at/v/1/button1.6.swf",evu:"//e1.clearspring.com/at/",off:function(){return Math.floor((new Date().getTime()-_17.sttm)/100).toString(16);},ran:function(){return Math.floor(Math.random()*4294967295).toString(36);},srd:function(){if(_17.dr){return"&pre="+_euc(_17.dr);}else{return"";}},cst:function(c){return"CXNID=2000001.521545608054043907"+(c||2)+"NXC";},img:function(i,c){if(!window.at_sub){var a=_17,dr=a.dr;if(dr){dr=(dr.split("?")).shift();dr=(dr.split("http://")).pop();if(dr.length>25){dr=dr.substr(0,25);}}new Image().src=_atr+"live/t00/"+i+".gif?"+(a.uid!==null?"uid="+a.uid+"&":"")+a.ran()+"&"+a.cst(c)+(a.pub()?"&pub="+a.pub():"")+(dr?"&dr="+_euc(dr):"");}},cuid:function(){return(_17.sttm&_17.max).toString(16)+(Math.floor(Math.random()*_17.max)).toString(16);},ssid:function(){if(_17.sid===0){_17.sid=_17.cuid();}return _17.sid;},sev:function(id,_1e){_17.pix="sev-"+(typeof(id)!=="number"?_euc(id):id);_17.svt.push(id+";"+_17.off());if(_1e===1){_17.xmi(true);}else{_17.sxm(true);}},cev:function(k,v){_17.pix="cev-"+_euc(k);_17.cvt.push(_euc(k)+"="+_euc(v)+";"+_17.off());_17.sxm(true);},sxm:function(b){if(_17.tmo!==null){clearTimeout(_17.tmo);}if(b){_17.tmo=_17.sto("_ate.xmi(false)",_17.wait);}},sto:function(c,t){return setTimeout(c,t);},sta:function(){var a=_17;return"AT-"+(a.pub()?a.pub():"unknown")+"/-/"+a.ab+"/"+a.ssid()+"/"+(a.seq++)+(a.uid!==null?"/"+a.uid:"");},gov:function(){var a=_17,h=a.dl?a.dl.hostname:"";if(h.indexOf(".gov")>-1||h.indexOf(".mil")>-1){_atc.xck=1;}},xmi:function(_27){var a=_17,h=a.dl?a.dl.hostname:"";if(!a.uid){a.dck("X"+a.cuid());}else{a.coo();}if(a.cvt.length+a.svt.length>0){a.sxm(false);if(a.seq===1){a.cev("pin",a.inst);}if(_atc.xtr){return;}_17.gov();var urp=a.pix+"-"+a.ran()+".png?ev="+_17.sta()+"&se="+a.svt.join(",")+"&ce="+a.cvt.join(",")+(_atc.xck?"&xck=1":""),url=a.evu+urp;a.cvt=[];a.svt=[];if(_27){var d=document,i=d.ce("iframe");i.id="_atf";i.src=url;_17.opp(i.style);d.body.appendChild(i);i=d.getElementById("_atf");}else{(new Image()).src=url;}}},loc:function(){return _atc.loc;},opp:function(st){st.width="1px";st.height="1px";st.position="absolute";st.zIndex=100000;},pub:function(){return window.addthis_config&&addthis_config.username?_euc(addthis_config.username):(window.addthis_pub||"");},plo:[],lad:function(x){_17.plo.push(x);},lng:function(al){var d=document;if(al&&(al.toLowerCase()).indexOf("en")!==0&&!_17.pll){var o=d.ce("script");o.src=_atr+"static/r07/lang00.js";d.gn("head")[0].appendChild(o);_17.pll=o;}},jlo:function(){try{var d=document,al=(window.addthis_language||addthis_config.ui_language||(_17.bro.msi?navigator.userLanguage:navigator.language));_17.lng(al);if(!_17.pld){var m=d.ce("script");m.src=_atr+"static/r07/menu21.js";d.gn("head")[0].appendChild(m);_17.pld=m;}}catch(e){}},igv:function(){if(!w.addthis_share){w.addthis_share={url:w.addthis_url,title:w.addthis_title};}if(!w.addthis_config){w.addthis_config={username:w.addthis_pub};}else{if(addthis_config.data_use_flash===false){_atc.xfl=1;}if(addthis_config.data_use_cookies===false){_atc.xck=1;}}},lod:function(arg){try{var w=window,a=_17,hp=0,f=((arg===1||w.addthis_load_flash)&&!_atc.abf),dr=d.referer||d.referrer||"",du=dl?dl.href:null,si=du?du.indexOf("sms_ss"):-1,al=(w.addthis_language||(w.addthis_config?w.addthis_config.ui_language:null)||(_17.bro.msi?navigator.userLanguage:navigator.language)),_3f="email,favorites,print,delicious,digg,google,myspace,live,facebook,stumbleupon,twitter,more";a.igv();a.gov();a.dr=dr;a.ab=(!window.addthis_options||addthis_options==_3f)?w.addthis_ab||Math.round(a.tamp*100/4.55):0;if(a.ab>11){a.ab="f"+(a.ab-11);}else{if(a.ab>0){a.ab="t"+a.ab;}}if(!f){if(a.samp>=0&&!a.sub){a.sev("20");a.cev("plo",Math.round(1/_atc.samp));if(a.dr){a.cev("pre",a.dr);hp=1;}}if(a.camp>=0&&du&&dl&&dl.protocol&&(dr.indexOf("com/search")>-1)&&(dl.protocol.indexOf("https")==-1)){dr=dr.split("?").pop();var t=dr.split("&"),fnd=0,quo=-1,ts="";for(var i=0;i<t.length;i++){if(t[i].indexOf("q=")==0||t[i].indexOf("p=")==0){t=_duc(t[i].substr(2)).replace(/\+/g," ");fnd=1;break;}}if(fnd){for(var i=0;i<t.length;i++){switch(t[i]){case" ":if(i>0&&t[i-1]!=" "&&quo==-1){ts+=",";}break;case"\"":if(quo>=0){ts+=t.substr(quo+1,(i)-(quo+1));quo=-1;}else{quo=i;}break;default:if(quo==-1){ts+=t[i];}}}}if(!_atc.xtr&&!_atc.xck&&ts!=_atu&&ts.length&&ts!==" "&&ts.indexOf(_atu)==-1){new Image().src="//cf.addthis.com/redirector?url="+_euc(du)+"&terms="+ts;}}if(si>-1){var sm=du.substr(si),am=sm.indexOf("&");if(am>-1){sm=sm.substr(0,am);}sm=(sm.split("="))[1];if(a.vamp>=0&&!a.sub&&sm.length){a.cev("plv",Math.round(1/_atc.vamp));a.cev("rsc",sm);}}a.img(_atc.ver+"lo","2");}if(a.plo.length>0){a.jlo();}if(a.swf&&!_atc.xfl&&!(a.loc())&&!_atc.abf&&(f||a.uid===null||(a.uid!=="anonymous"&&((new Date()).getTime()-a.oot>60480000)))){var _47=function(o,n,v){var c=d.createElement("param");c.name=n;c.value=v;o.appendChild(c);};var o=d.createElement("object");a.opp(o.style);o.id="atff";if(b.msi){o.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";_47(o,"movie",a.swf);}else{o.data=a.swf;o.quality="high";o.type="application/x-shockwave-flash";}_47(o,"wmode","transparent");_47(o,"allowScriptAccess","always");d.body.insertBefore(o,d.body.firstChild);if(b.msi){o.outerHTML+=" ";}}}catch(e){}},unl:function(){var a=_17;if(a.samp>=0&&!a.sub&&!_atc.abf){a.sev("21",1);a.cev("pun",1/_atc.samp);}return true;},kck:function(k){var d=document;if(d.cookie){d.cookie=k+"= ; expires=Tue, 31 Mar 2009 05:47:11 UTC; path=/";}},rck:function(k){var d=document;if(d.cookie){var ck=d.cookie.split(";");for(var i=0;i<ck.length;i++){var c=ck[i],x=c.indexOf(k+"=");if(x>=0){return c.substring(x+(k.length+1));}}}return;},coo:function(){if(_17.uid=="anonymous"&&!_17.oot){_17.xck=1;_17.sck("_csoot",(new Date().getTime()));}},dck:function(c){_17.uid=c;_17.sck("_csuid",c);_17.coo();},sck:function(u,v,s){var h=_17.dl?_17.dl.hostname:"";if(h.indexOf(".gov")>-1||h.indexOf(".mil")>-1){_atc.xck=1;_atc.xfl=1;}var p=_17.pub(),x=["usarmymedia","gobiernousa","govdelivery"];for(i in x){if(p==x[i]){_atc.xck=1;_atc.xfl=1;break;}}if(!_atc.xck){d.cookie=u+"="+v+(!s?"; expires=Wed, 04 Oct 2028 03:19:53 GMT":"")+"; path=/";}},fcl:null,asetup:function(x){var a=_17;try{if(x!==null&&x!==_atu){a.dck(x);}if(a.fcl){a.fcl();}}catch(e){}return x;},ao:function(elt,_61,_62,_63,_64,_65){_17.lad(["open",elt,_61,_62,_63,_64,_65]);_17.jlo();return false;},ac:function(){},as:function(s,cf,sh){_17.lad(["send",s,cf,sh]);_17.jlo();}},a=_17;w._ate=a;w._adr=r;d.ce=d.createElement;d.gn=d.getElementsByTagName;r.bindReady();if(wa){wa("unload",a.unl,false);}else{if(we){we("onunload",a.unl);}else{w.onunload=a.unl;}}if(!_atc.ost){if(!w.addthis_conf){w.addthis_conf={};}for(var i in addthis_conf){_atc[i]=addthis_conf[i];}_atc.ost=1;}r.append(a.lod);if(d.cookie){var ck=d.cookie.split(";");for(var i=0;i<ck.length;i++){var c=ck[i],x=c.indexOf("_csuid="),y=c.indexOf("_csoot=");if(x>=0){_17.uid=c.substring(x+7);}else{if(y>=0){_17.oot=c.substring(y+7);}}}}try{var l=d.ce("link");l.rel="stylesheet";l.type="text/css";l.href=_atr+"static/r07/widget07.css";l.media="all";d.gn("head")[0].appendChild(l);}catch(e){}var ss=d.gn("script"),s=ss[ss.length-1],q=s.src.replace(/^[^\?]+\??/,""),pq=function(q){var p={};if(!q){return p;}var ps=q.split(/[;&]/);for(var i=0;i<ps.length;i++){var kv=ps[i].split("=");if(!kv||kv.length!=2){continue;}var k=_duc(kv[0]),v=_duc(kv[1]);v=v.replace(/\+/g," ");ps[k]=v;}return ps;},p=pq(q);if(p.pub){w.addthis_pub=_duc(p.pub);if(w.addthis_config){w.addthis_config.username=w.addthis_pub;}}else{if(p.username){w.addthis_pub=_duc(p.username);if(w.addthis_config){w.addthis_config.username=w.addthis_pub;}}}if(p.domready){_atc.dr=1;}try{if(_atc.ver===120){var rc="atb"+w._ate.cuid();d.write("<span id=\""+rc+"\"></span>");w._ate.igv();w._ate.lad(["span",rc,addthis_share.url||"[url]",addthis_share.title||"[title]"]);}if(w.addthis_clickout){_17.lad(["cout"]);}}catch(e){}})();function addthis_open(elt,_7c,_7d,_7e,_7f,_80){if(typeof _7f=="string"){_7f=null;}return _ate.ao(elt,_7c,_7d,_7e,_7f,_80);}function addthis_close(){_ate.ac();}function addthis_sendto(s,cf,sh){_ate.as(s,cf,sh);return false;}if(_atc.dr){_adr.onReady();}}else{_ate.inst++;}if(_atc.abf){addthis_open(document.getElementById("ab"),"emailab",window.addthis_url||"[URL]",window.addthis_title||"[TITLE]");}