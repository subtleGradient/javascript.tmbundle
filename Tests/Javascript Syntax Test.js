// =============
// = FUNCTIONS =
// =============

function(argument1,argument2){return argument1 + argument1;};
function (argument1, argument2) {return argument1 + argument1;};


function funkName(argument1, argument2) {
	return argument1 + argument1;
};
function funkName(argument1, argument2)
{
	return argument1 + argument1;
};


function(argument1, argument2){
	return argument1 + argument1;
};
function(argument1, argument2)
{
	return argument1 + argument1;
};


new Function("argument1", "argument2", "return argument1 + argument1;");
var funkName=new Function("argument1", "argument2", "return argument1 + argument1;");


var funkName1 = function funkName (argument1, argument2) {return argument1 + argument1;};
var funkName1=function funkName(argument1,argument2){return argument1 + argument1;};


// ===================
// = OBJECT LITERALS =
// ===================
var objectName = {};

var objectName = {
	
	 stringName  : '',
	'stringName' : '',
	"stringName" : '',
	 stringName  : "",
	'stringName' : "",
	"stringName" : "",
	
	 numberName  : 999.999,
	'numberName' : 999.999,
	"numberName" : 999.999,
	
	 funkName    : function(argument1, argument2){},
	'funkName'   : function(argument1, argument2){},
	"funkName"   : function(argument1, argument2){},
	
	nullName : null

};

var objectName = {
	
	 keyName  : 0,
	'keyName' : 0,
	"keyName" : 0
	
};
objectName[funkName()] = 0;


// =============
// = ARGUMENTS =
// =============

funkName(variableName, funkName(), 999.999, "stringName", 'stringName', function(){}, {objectName:{}}, /regex/, null, true, false, undefined);
funkName(
	variableName,
	funkName(),
	999.999,
	"stringName",
	'stringName',
	function(){},
	{objectName:{}},
	/regex/,
	null,
	true,
	false,
	undefined
);


// =========
// = REGEX =
// =========
var regexName = /regex/

funkName(/regex/, /regex/i)

[/regex/, /regex/i]

{keyName : /regex/}

/regex/
/regex/i
/regex/g
/regex/m
/regex/igm

function(){
	return /regex/
}

