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
({
	foobar: function(){},
	'foo': function(){},
	"foo": function(){}
})

// ==================
// = Function Calls =
// ==================
funkName(parameter1, parameter2)
objectName.methodName(parameter1, parameter2)
objectName.objectName.methodName(parameter1, parameter2)

funkName(funkName(parameter1, parameter2), parameter2)
funkName(parameter1, funkName(parameter1, parameter2))

objectName.methodName(objectName.methodName(parameter1, parameter2), parameter2)
objectName.methodName(parameter1,objectName.methodName(parameter1, parameter2))

objectName.objectName.methodName(objectName.objectName.methodName(parameter1, parameter2), parameter2)
objectName.objectName.methodName(parameter1,objectName.objectName.methodName(parameter1, parameter2))


// ==========================
// = Variables / Properties =
// ==========================
variableName
variableName == "stringName"
variableName = "stringName"

objectName.5 // SYNTAX ERROR
objectName().5 // SYNTAX ERROR
objectName   .5 // SYNTAX ERROR
objectName() .5 // SYNTAX ERROR



/** 
#!/usr/bin/env ruby
code = <<-JS
*/
                a +variableName                            ; // Arithmetic Operator
                a -variableName                            ; // Arithmetic Operator
                a *variableName                            ; // Arithmetic Operator
                a /variableName                            ; // Arithmetic Operator
                a %variableName                            ; // Arithmetic Operator
               a ++variableName                            ; // Arithmetic Operator
               a --variableName                            ; // Arithmetic Operator
                a -variableName                            ; // Arithmetic Operator Unary
                a =variableName                            ; // Assignment Operator
               a +=variableName                            ; // Assignment Operator
               a -=variableName                            ; // Assignment Operator
               a *=variableName                            ; // Assignment Operator
               a /=variableName                            ; // Assignment Operator
              a >>=variableName                            ; // Assignment Operator
              a <<=variableName                            ; // Assignment Operator
             a >>>=variableName                            ; // Assignment Operator
               a &=variableName                            ; // Assignment Operator
               a |=variableName                            ; // Assignment Operator
               a ^=variableName                            ; // Assignment Operator
                   variableName+a                          ; // Arithmetic Operator
                   variableName-a                          ; // Arithmetic Operator
                   variableName*a                          ; // Arithmetic Operator
                   variableName/a                          ; // Arithmetic Operator
                   variableName%a                          ; // Arithmetic Operator
                   variableName++                          ; // Arithmetic Operator
                   variableName--                          ; // Arithmetic Operator
                   variableName-a                          ; // Arithmetic Operator Unary
                   variableName=a                          ; // Assignment Operator
                   variableName+=a                         ; // Assignment Operator
                   variableName-=a                         ; // Assignment Operator
                   variableName*=a                         ; // Assignment Operator
                   variableName/=a                         ; // Assignment Operator
                   variableName>>=a                        ; // Assignment Operator
                   variableName<<=a                        ; // Assignment Operator
                   variableName>>>=a                       ; // Assignment Operator
                   variableName&=a                         ; // Assignment Operator
                   variableName|=a                         ; // Assignment Operator
                   variableName^=a                         ; // Assignment Operator
                a &variableName                            ; // Bitwise Operator
                a |variableName                            ; // Bitwise Operator
                a ^variableName                            ; // Bitwise Operator
                  ~variableName                            ; // Bitwise Operator
               a <<variableName                            ; // Bitwise Operator
               a >>variableName                            ; // Bitwise Operator
              a >>>variableName                            ; // Bitwise Operator
                   variableName&a                          ; // Bitwise Operator
                   variableName|a                          ; // Bitwise Operator
                   variableName^a                          ; // Bitwise Operator
                   variableName<<a                         ; // Bitwise Operator
                   variableName>>a                         ; // Bitwise Operator
                   variableName>>>a                        ; // Bitwise Operator
               a ==variableName                            ; // Comparison Operator
               a !=variableName                            ; // Comparison Operator
              a ===variableName                            ; // Comparison Operator
              a !==variableName                            ; // Comparison Operator
                a >variableName                            ; // Comparison Operator
               a >=variableName                            ; // Comparison Operator
                a <variableName                            ; // Comparison Operator
               a <=variableName                            ; // Comparison Operator
                   variableName==a                         ; // Comparison Operator
                   variableName!=a                         ; // Comparison Operator
                   variableName===a                        ; // Comparison Operator
                   variableName!==a                        ; // Comparison Operator
                   variableName>a                          ; // Comparison Operator
                   variableName>=a                         ; // Comparison Operator
                   variableName<a                          ; // Comparison Operator
                   variableName<=a                         ; // Comparison Operator
               a &&variableName                            ; // Logical Operator
               a ||variableName                            ; // Logical Operator
                a !variableName                            ; // Logical Operator
                a +variableName                            ; // String Operator
               a +=variableName                            ; // String Operator
                   variableName&&a                         ; // Logical Operator
                   variableName||a                         ; // Logical Operator
                   variableName!a                          ; // Logical Operator
                   variableName+a                          ; // String Operator
                   variableName+=a                         ; // String Operator
                   variableName++                          ; // Assignment
                   variableName--                          ; // Assignment
               var variableName                            ; // Assignment
               var variableName,a                          ; // Assignment
               var variableName,a= a                       ; // Assignment
               var variableName= a                         ; // Assignment
             var a,variableName                            ; // Assignment
          var a= a,variableName                            ; // Assignment
          funkName(variableName)                           ; // function call
          funkName(variableName,a)                         ; // function call
        funkName(a,variableName)                           ; // function call
                   variableName.a()                        ; // objectName
        a.funkName(variableName)                           ; // function call
        a.funkName(variableName,a)                         ; // function call
      a.funkName(a,variableName)                           ; // function call
         new Class(variableName)                           ; // class instantiation
         new Class(variableName,a)                         ; // class instantiation
       new Class(a,variableName)                           ; // class instantiation
                  (variableName)                           ; // logical grouping
                  [variableName]                           ; // arrayLiteral
                [a,variableName]                           ; // arrayLiteral
                  [variableName,a]                         ; // arrayLiteral
               ({a:variableName})                          ; // objectLiteral
             ({'a':variableName})                          ; // objectLiteral
             ({"a":variableName})                          ; // objectLiteral
            a = {a:variableName}                           ; // objectLiteral
          a = {'a':variableName}                           ; // objectLiteral
          a = {"a":variableName}                           ; // objectLiteral
        function(){variableName;}                          ; // function definition
        function(){variableName}                           ; // function definition
      a.prototype =variableName                            ; // class definition
    a.prototype.a =variableName                            ; // method definition
                   variableName?a:a                        ; // 
    switch(a){case variableName:break; default:;}          ; // 
                 a?variableName:a                          ; // 
               a?a:variableName                            ; // 
                  /variableName/                           ; // regex
                  /variableName/i                          ; // regex
                  /variableName/g                          ; // regex
                  /variableName/m                          ; // regex
                  /variableName/gim                        ; // regex
                 ({variableName:a})                        ; // objectLiteral
              a = {variableName:a}                         ; // objectLiteral
                ({'variableName':a})                       ; // objectLiteral
                ({"variableName":a})                       ; // objectLiteral
             a = {'variableName':a}                        ; // objectLiteral
             a = {"variableName":a}                        ; // objectLiteral
                ({"variableName":function(){},a:a})        ; // objectLiteral method
                ({'variableName':function(){},a:a})        ; // objectLiteral method
          function(variableName){}                         ; // function definition
          function(variableName,a){}                       ; // function definition
        function(a,variableName){}                         ; // function definition
                   variableName()                          ; // function call
                 a.variableName()                          ; // function call method
          function variableName(){}                        ; // function definition
          function variableName(a){}                       ; // function definition
                 ({variableName: function(){},a:a})        ; // method definition
       a.prototype.variableName= a                         ; // class definition
       a.prototype.variableName= function(){}              ; // method definition
                 a.variableName= function(){}              ; // method definition
                   variableName.a = function(){}           ; // method definition
                   variableName.prototype = a              ; // class definition
                   variableName.prototype.a = a            ; // method definition
                   variableName.prototype.a = function(){} ; // method definition
               new variableName                            ; // class instantiation
               new variableName()                          ; // class instantiation
/*
JS
%w`$$$$ 999 999. 999.999 .999 [arrayLiteral]`.each{|key| puts code.gsub('variableName',key); puts code.gsub('variableName',' '+key+' ') }
**/


objectName.propertyName
objectName.propertyName.propertyName

objectName.propertyName == "stringName"
objectName.propertyName.propertyName == "stringName"

objectName.propertyName = "stringName"
objectName.propertyName.propertyName = "stringName"


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

x = x +5; // is the same as x += 5;
x = x -5; // is the same as x -= 5;
x =  x+5; // is the same as x += 5;
x =  x-5; // is the same as x -= 5;
x =  x*5; // is the same as x *= 5;
x =  x/5; // is the same as x /= 5;
x =  x%5; // is the same as x %= 5;

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
switch(expression){case expression:statements;break;default:statements;}

while(condition){statements;}
do{statements;}while(condition);

for(initialization;condition;update){statements;}

for(variable in object){statements;}
for(variable in object)if(filter){statements;}

try{statements;}catch(variable){statements;}finally{statements;}

eval("expressions")
Function("expressions")
setTimeout("expressions",999)
setInterval("expressions",999)

for (var i=0, j=9; i <= 9; i++, j--)
  document.writeln("a["+i+"]["+j+"]= " + a[i][j]);

// =======================
// = Getters and Setters =
// =======================

// {get prop [ funname ]() { . . . } } 
var o = {
  get latest () {
    if (this.log.length > 0) {
      return this.log[this.log.length - 1];
    }
    else {
      return null;
    }
  },
  log: []
}
delete o.latest;

// {set prop [ funname ](val) { . . . } 
var o = {
  set current (str) {
    return this.log[this.log.length] = str;
  },
  log: []
}
delete o.current;

// ===============
// = in Operator =
// ===============

// Arrays
var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
0 in trees        // returns true
3 in trees        // returns true
6 in trees        // returns false
"bay" in trees    // returns false (you must specify the index number,
                  // not the value at that index)
"length" in trees // returns true (length is an Array property)

// Predefined objects
"PI" in Math          // returns true

// Custom objects
var mycar = {make: "Honda", model: "Accord", year: 1998};
"make" in mycar  // returns true
"model" in mycar // returns true

var color1 = new String("green");
"length" in color1 // returns true
var color2 = "coral";
"length" in color2 // generates an error (color is not a String object)

var mycar = {make: "Honda", model: "Accord", year: 1998};
delete mycar.make;
"make" in mycar;  // returns false

var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
delete trees[3];
3 in trees; // returns false

var mycar = {make: "Honda", model: "Accord", year: 1998};
mycar.make = undefined;
"make" in mycar;  // returns true

var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
trees[3] = undefined;
3 in trees; // returns true


// ==============
// = instanceof =
// ==============

var isInstance = objectName instanceof objectType;

var color1 = new String("green");
color1 instanceof String; // returns true
var color2 = "coral";
color2 instanceof String; // returns false (color2 is not a String object)

var theDay = new Date(1995, 11, 17); // Dec. 17, 1995
if (theDay instanceof Date)
{
  print("theDay is a Date object");
  // whatever else...
}

var myString = new String();
var myDate = new Date();

myString instanceof String; // returns true
myString instanceof Object; // returns true
myString instanceof Date;   // returns false

myDate instanceof Date;     // returns true
myDate instanceof Object;   // returns true
myDate instanceof String;   // returns false

function Car(make, model, year)
{
  this.make = make;
  this.model = model;
  this.year = year;
}
var mycar = new Car("Honda", "Accord", 1998);
var a = mycar instanceof Car;    // returns true
var b = mycar instanceof Object; // returns true


// =======
// = new =
// =======
// objectName = new objectType(param1 [,param2] ...[,paramN]) 

 function Car() {}
 car1 = new Car()
 
 alert(car1.color)           // undefined
 
 Car.prototype.color = null
 alert(car1.color)           // null
 
 car1.color = "black"
 alert(car1.color)           // black

function car(make, model, year) {
   this.make = make;
   this.model = model;
   this.year = year;
}
mycar = new car("Eagle", "Talon TSi", 1993);
kenscar = new car("Nissan", "300ZX", 1992);


function person(name, age, sex) {
   this.name = name;
   this.age = age;
   this.sex = sex;
}
rand = new person("Rand McNally", 33, "M");
ken = new person("Ken Jones", 39, "M");

function car(make, model, year, owner) {
   this.make = make;
   this.model = model;
   this.year = year;
   this.owner = owner;
}

car1 = new car("Eagle", "Talon TSi", 1993, rand);
car2 = new car("Nissan", "300ZX", 1992, ken);

car2.owner.name



// =============
// = Operators =
// =============

//Individual operators  ;// Precedence  Operator type   Associativity   Proximity     
a =          b          ;// 16          assignment      right-to-left   both          
a %=         b          ;// 16          assignment      right-to-left   both          
a &=         b          ;// 16          assignment      right-to-left   both          
a *=         b          ;// 16          assignment      right-to-left   both          
a +=         b          ;// 16          assignment      right-to-left   both          
a -=         b          ;// 16          assignment      right-to-left   both          
a /=         b          ;// 16          assignment      right-to-left   both          
a ^=         b          ;// 16          assignment      right-to-left   both          
a |=         b          ;// 16          assignment      right-to-left   both          
a <<=        b          ;// 16          assignment      right-to-left   both          
a >>=        b          ;// 16          assignment      right-to-left   both          
a >>>=       b          ;// 16          assignment      right-to-left   both          
a ?          b : c      ;// 15          conditional     right-to-left   both          
a in         b          ;// 8           in              left-to-right   both          
a in(        b )        ;// 8           in              left-to-right   both          
a ,          b          ;// 17          comma           left-to-right   both          
a .          b          ;// 1           member          left-to-right   both          
a %          b          ;// 5           modulus         left-to-right   both          
a /          b          ;// 5           division        left-to-right   both          
a +          b          ;// 6           addition        left-to-right   both          
a !=         b          ;// 9           equality        left-to-right   both          
a ==         b          ;// 9           equality        left-to-right   both          
a !==        b          ;// 9           equality        left-to-right   both          
a ===        b          ;// 9           equality        left-to-right   both          
a instanceof b          ;// 8           instanceof      left-to-right   both          
a instanceof(b)         ;// 8           instanceof      left-to-right   both          
a <          b          ;// 8           relational      left-to-right   both          
a >          b          ;// 8           relational      left-to-right   both          
a <=         b          ;// 8           relational      left-to-right   both          
a >=         b          ;// 8           relational      left-to-right   both          
a |          b          ;// 12          bitwise-or      left-to-right   both          
a ||         b          ;// 14          logical-or      left-to-right   both          
a &          b          ;// 10          bitwise-and     left-to-right   both          
a &&         b          ;// 13          logical-and     left-to-right   both          
a -          b          ;// 6           subtraction     left-to-right   both          
a ^          b          ;// 11          bitwise-xor     left-to-right   both          
a <<         b          ;// 7           bitwise shift   left-to-right   both          
a >>         b          ;// 7           bitwise shift   left-to-right   both          
a >>>        b          ;// 7           bitwise shift   left-to-right   both          
a *          b          ;// 5           multiplication  left-to-right   both          
a [          b ]        ;// 1           member          left-to-right   inside + left  
a (          b )        ;// 2           function call   left-to-right   inside + left  
a --                    ;// 3           decrement       n/a             right-or-left
a ++                    ;// 3           increment       n/a             right-or-left
  --         b          ;// 3           decrement       n/a             right-or-left
  ++         b          ;// 3           increment       n/a             right-or-left
  new        b          ;// 1           new             right-to-left   right         
  void       b          ;// 4           void            right-to-left   right         
  void(      b )        ;// 4           void            right-to-left   right         
  delete     b          ;// 4           delete          right-to-left   right         
  delete(    b )        ;// 4           delete          right-to-left   right         
  typeof     b          ;// 4           typeof          right-to-left   right         
  typeof(    b )        ;// 4           typeof          right-to-left   right         
  +          b          ;// 4           unary +         right-to-left   right         
  ~          b          ;// 4           bitwise not     right-to-left   right         
  !          b          ;// 4           logical-not     right-to-left   right         
  -          b          ;// 4           unary negation  right-to-left   right         


// ==============
// = Deprecated =
// ==============

// The escape and unescape functions are deprecated. Use encodeURI, encodeURIComponent, decodeURI or decodeURIComponent to encode and decode escape sequences for special characters. 

escape()
unescape()
encodeURI()
encodeURIComponent()
decodeURI()
decodeURIComponent()

// ==================
// = Reserved Words =
// ==================
// The following are reserved words and may not be used as variables, functions, methods, or object identifiers. 
// The following are reserved as existing keywords by the ECMAScript specification:
break
case
catch
continue
default
delete
do
else
finally
for
function
if
in
instanceof
new
return
switch
this
throw
try
typeof
var
void
while
with 

// The following are reserved as future keywords by the ECMAScript specification:
abstract
boolean
byte
char
class
const
debugger
double
enum
export
extends
final
float
goto
implements
import
int
interface
long
native
package
private
protected
public
short
static
super
synchronized
throws
transient
volatile 

// Take note that while not specified in ECMA-262, const, export, and import have been implemented in Mozilla.
const
export
import

