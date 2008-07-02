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

"stringName".match(/regex/)

funkName(/regex/, /regex/i)

[/regex/, /regex/i]

{keyName : /regex/}

/regex/ && /regex/
/regex/
/regex/i
/regex/g
/regex/m
/regex/igm

function(){ return /regex/ }

/regex/.test('test')
1==1 && /regex/.test('test')



// ===========
// = Numbers =
// ===========
// http://www.hunlock.com/blogs/The_Complete_Javascript_Number_Reference

999
.999
999.999
4
16
256
65536
4294967296
18446744073709552000
3.402823669209385e+38
1.157920892373162e+77
1.3407807929942597e+154
Infinity
0377 // octal
0xFF // hex
0xff // hex

-999
-.999
-999.999
-4
-16
-256
-65536
-4294967296
-18446744073709552000
-3.402823669209385e+38
-1.157920892373162e+77
-1.3407807929942597e+154
-Infinity
-0377 // octal
-0xFF // hex
-0xff // hex

1e5
2.5E5

5e-324
1.7976931348623157e+308

x = x+5; // is the same as x += 5;
x = x-5; // is the same as x -= 5;
x = x*5; // is the same as x *= 5;
x = x/5; // is the same as x /= 5;
x = x%5; // is the same as x %= 5;

x += 5
x -= 5
x *= 5
x /= 5
x %= 5

x ++
x --

x = x&5;    // is the same as x &= 5;
x = x|5;    // is the same as x |= 5;
x = x^5;    // is the same as x ^= 5;
x = x<<5;   // is the same as x <<= 5;
x = x>>5;   // is the same as x >>= 5;
x = x>>>5;  // is the same as x >>>= 5;

x &= 5
x |= 5
x ^= 5
x <<= 5
x >>= 5
x >>>= 5

