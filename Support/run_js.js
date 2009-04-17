(function(window){

	function e_sh(s){
		return String(s).replace(/'/g,'’').replace(/(?=["\n\\])/g,'\\');
	};

	window.alert = function(s){
		console.debug($DIALOG +' -e -p \'{messageTitle="JavaScript";informativeText="'+ e_sh(s) +'";}\'');
		TextMate.system($DIALOG +' -e -p \'{messageTitle="JavaScript";informativeText="'+ e_sh(s) +'";}\'', null);
	};

	var __TM_confirm_Status;
	window.confirm = function(s){
		TextMate.system($DIALOG +' -e -p \'{messageTitle="JavaScript";informativeText="'+ e_sh(s) +'";buttonTitles=("OK","Cancel");}\'', null)
			.onreadoutput = function(s){ __TM_confirm_Status = s != 1; };
		return __TM_confirm_Status;
	};

})(this);
