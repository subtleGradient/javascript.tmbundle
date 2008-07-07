// Root
// 













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

function myFunc(argument1, argument2){}

Sound.prototype = {}
Sound.prototype.play = function(){}
Sound.prototype.play = myfunc
Sound.play = function(){}
var objectName = {
	foobar: function(){},
	'foo': function(){},
	"foo": function(){}
}

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
// WARNING: regular expressions should be preceded by a left parenthesis, assignment, colon, or comma

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
(.999)
999. == 999;
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
.3407807929942597e+154
.3407807929942597E-154
3407807929942597.E-154.5 // SYNTAX ERROR: missing ; before statement
//....................^
Infinity
Infinity.propertyName
Infinity.methodName()

0377 // octal
0377. // SYNTAX ERROR
0377.5 // SYNTAX ERROR
0377.propertyName // number property
0377.methodName() // number method

0x // HEX
0XFF // HEX
0xFF // hex
0xff. // SYNTAX ERROR
0xff.5 // SYNTAX ERROR
0xff.propertyName // number property
0xff.methodName() // number method

-999
-.999
(-.999)
-999. == -999;
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
-.3407807929942597e+154
-.3407807929942597E-154
-3407807929942597.E-154.5 // SYNTAX ERROR: missing ; before statement
//.....................^
-Infinity
-Infinity.propertyName
-Infinity.methodName()

-0377 // octal
-0377. // SYNTAX ERROR
-0377.5 // SYNTAX ERROR
-0377.propertyName // number property
-0377.methodName() // number method

-0x // HEX
-0XFF // HEX
-0xFF // hex
-0xff. // SYNTAX ERROR
-0xff.5 // SYNTAX ERROR
-0xff.propertyName // number property
-0xff.methodName() // number method

+999
+.999
(+.999)
+999. == +999;
+999.999
+4
+16
+256
+65536
+4294967296
+18446744073709552000
+3.402823669209385e+38
+1.157920892373162e+77
+1.3407807929942597e+154
+.3407807929942597e+154
+.3407807929942597E+154
+3407807929942597.E+154.5 // SYNTAX ERROR: missing ; before statement
//.....................^
+Infinity
+Infinity.propertyName
+Infinity.methodName()

+0377 // octal
+0377. // SYNTAX ERROR
+0377.5 // SYNTAX ERROR
+0377.propertyName // number property
+0377.methodName() // number method

+0x // HEX
+0XFF // HEX
+0xFF // hex
+0xff. // SYNTAX ERROR
+0xff.5 // SYNTAX ERROR
+0xff.propertyName // number property
+0xff.methodName() // number method

1e5
2.5E5

5e-324
1.7976931348623157e+308

x == 5;
x >  5;
x >= 5;
x <  5;
x <= 5;
x <=> 5; // Syntax Error

x = x +5; // is the same as x += 5;
x = x -5; // is the same as x -= 5;
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


// ===========
// = Strings =
// ===========

var stringName = "";
var stringName = '';

var stringName0 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

var stringName1 = "Lorem ipsum dolor sit amet, consectetur adipisicing e" + 
"lit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." + 
" Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis" + 
"i ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehen" + 
"derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. E" + 
"xcepteur sint occaecat cupidatat non proident, sunt in culpa qui offici" + 
"a deserunt mollit anim id est laborum.";

// Allow escaped newline
var stringName2 = "Lorem ipsum dolor sit amet, consectetur adipisicing e\
SHOULD be scoped as string"
var stringName2 = 'Lorem ipsum dolor sit amet, consectetur adipisicing e\
SHOULD be scoped as string'
// First newline should be scoped as constant.character.escape.newline.js

// End string at unescaped newline
// SYNTAX ERROR: unterminated string literal
var stringName3 = "Lorem ipsum dolor sit amet, consectetur adipisicing e
Should NOT be scoped as string"
var stringName3 = 'Lorem ipsum dolor sit amet, consectetur adipisicing e
Should NOT be scoped as string'
// First newline SHOULD be scoped as invalid

var stringName4 = "Lorem ipsum dolor sit amet</script>";
// "</script>" SHOULD be scoped as string & invalid.deprecated
var stringName5 = "Lorem ipsum dolor sit amet</script>
// "</script>" Should NOT be scoped as string

// WARNING: regular expressions should be preceded by a left parenthesis, assignment, colon, or comma

 {unquotedString: null}
 {'singleQuotedString': null}// SYNTAX ERROR: invalid label
 {"doubleQuotedString": null}// SYNTAX ERROR: invalid label
({'singleQuotedString': null})
({"doubleQuotedString": null})

switch (something){
	case "stringName" : 
		break; 
	case unquotedString : 
		break; 
	case /regex/ : 
		break; 
	case 999.999 : 
		break; 
	case funkName() : 
		break; 
	default : 
		// do something
} 
