// -*- Mode: Embedded JavaScript; tab-width: 4; indent-tabs-mode: nil; -*-

// Select everything and hit Text > Indent Line
// Then run a Diff > Document with Saved Copy
// If there are any differences then the indent rules are broken

/*
Block Comment
*/
/*
Block Comment
*/ // Comment

/**
Documentation Comment (idiom)
**/ // Comment

/* Documentation Comment (idiom)
 * 
 * Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
 * eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
 * ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
 * aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
 * in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
 * Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
 * officia deserunt mollit anim id est laborum.
 */


// nothing

[1,2,3]
[
    1,
    2,
    3
]
myArray[
    0
]
(statement)
(
    statement
)
myFunction(
    statement
)
{
    label:'value'
}
var myObj = {
    label:'value'
}

function (){
    statement;
}

// With ;
[1,2,3];
[
    1,
    2,
    3
];
myArray[
    0
];
(statement)
(
    statement
);
myFunction(
    statement
);
{
    label:'value'
};
function(){
    statement;
};



// With ()
[1,2,3]()
[
    1,
    2,
    3
]()
myArray[
    0
]()
(statement)
(
    statement
)()
myFunction(
    statement
)()
({
    label:'value'
})['label']()
(function(){
    statement()
})()



// Object
var myObj = {
    label: [1,2,3],
    label: [
        1,
        2,
        3
    ],
    label: myArray[
        0
    ],
    label: (statement),
    label: (
        statement
    ),
    label: myFunction(
        statement
    ),
    label: {
        label:'value'
    },
    label: function(){
        statement;
    },
    label: 0
};


// ========================
// = With inline comments =
// ========================
[1,2,3]                 // Comment
[                       // Comment
    1,                  // Comment
    2,                  // Comment
    3                   // Comment
]                       // Comment
myArray[                // Comment
    0                   // Comment
]                       // Comment
(statement)             // Comment
(                       // Comment
    statement           // Comment
)                       // Comment
myFunction(             // Comment
    statement           // Comment
)                       // Comment
{                       // Comment
    label:'value'       // Comment
}                       // Comment
function(){             // Comment
    statement;          // Comment
}                       // Comment


[1,2,3];                // Comment
[                       // Comment
    1,                  // Comment
    2,                  // Comment
    3                   // Comment
];                      // Comment
myArray[                // Comment
    0                   // Comment
];                      // Comment
(statement)             // Comment
(                       // Comment
    statement           // Comment
);                      // Comment
myFunction(             // Comment
    statement           // Comment
);                      // Comment
{                       // Comment
    label:'value'       // Comment
};                      // Comment
function(){             // Comment
    statement;          // Comment
};                      // Comment


var myObj = {           // Comment
    label: [1,2,3],     // Comment
    label: [            // Comment
        1,              // Comment
        2,              // Comment
        3               // Comment
    ],                  // Comment
    label: myArray[     // Comment
        0               // Comment
    ],                  // Comment
    label: (statement), // Comment
    label: (            // Comment
        statement       // Comment
    ),                  // Comment
    label: myFunction(  // Comment
        statement       // Comment
    ),                  // Comment
    label: {            // Comment
        label:'value'   // Comment
    },                  // Comment
    label: function(){  // Comment
        statement;      // Comment
    },                  // Comment
    label: 0            // Comment
};                      // Comment


// =================
// = With Comments =
// =================
[1,2,3]                 /* Comment */
[                       /* Comment */
    1,                  /* Comment */
    2,                  /* Comment */
    3                   /* Comment */
]                       /* Comment */
myArray[                /* Comment */
    0                   /* Comment */
]                       /* Comment */
(statement)             /* Comment */
(                       /* Comment */
    statement           /* Comment */
)                       /* Comment */
myFunction(             /* Comment */
    statement           /* Comment */
)                       /* Comment */
{                       /* Comment */
    label:'value'       /* Comment */
}                       /* Comment */
function(){             /* Comment */
    statement;          /* Comment */
}                       /* Comment */

// With ;               /* Comment */
[1,2,3];                /* Comment */
[                       /* Comment */
    1,                  /* Comment */
    2,                  /* Comment */
    3                   /* Comment */
];                      /* Comment */
myArray[                /* Comment */
    1,                  /* Comment */
    2,                  /* Comment */
    3                   /* Comment */
];                      /* Comment */
(statement)             /* Comment */
(                       /* Comment */
    statement           /* Comment */
);                      /* Comment */
myFunction(             /* Comment */
    statement           /* Comment */
);                      /* Comment */
{                       /* Comment */
    label:'value'       /* Comment */
};                      /* Comment */
function(){             /* Comment */
    statement;          /* Comment */
};                      /* Comment */


// Object               /* Comment */
var myObj = {           /* Comment */
    label: [1,2,3],     /* Comment */
    label: [            /* Comment */
        1,              /* Comment */
        2,              /* Comment */
        3               /* Comment */
    ],                  /* Comment */
    label: myArray[     /* Comment */
        0               /* Comment */
    ],                  /* Comment */
    label: (statement), /* Comment */
    label: (            /* Comment */
        statement       /* Comment */
    ),                  /* Comment */
    label: myFunction(  /* Comment */
        statement       /* Comment */
    ),                  /* Comment */
    label: {            /* Comment */
        label:'value'   /* Comment */
    },                  /* Comment */
    label: function(){  /* Comment */
        statement;      /* Comment */
    },                  /* Comment */
    label: 0            /* Comment */
};                      /* Comment */


// ==============
// = Mixed line =
// ==============

[   [1,2,3],[1,2,3],
    [1,2,3],[1,2,3],
][0]
myArray[ myArray[0] + myArray[0] +
    0
][  0
]
(  (statement) +
    statement
)
myFunction( myFunction() + myFunction()
)
var myObj = { label:{ label:'value' }, label:{ label:'value' },
    label:'value'
}
function(){ function(){ statement }; function(){ statement };
    statement;
}


// ========
// = Bugs =
// ========

myFunction()

myFunction(
    // Fold; Indent
);myFunction

myFunction((0)
    // Fold; Indent
);myFunction

myFunction(something()
    // Fold; Indent
)

myFunction(()something
    // Fold; Indent
)

myFunction((something)
    // Fold; Indent
)

myFunction(something(something)something
    // Fold; Indent
something(something)something)



myFunction(something()()
    // Fold; Indent
)

myFunction(()something()
    // Fold; Indent
)

myFunction((something)()
    // Fold; Indent
)

myFunction(()something()(something)()something()
    // Fold; Indent
)



// ===========
// = Special =
// ===========
switch (statement){
case 'label':
    statement;
    break;
case 'label':
    statement;
    break;
case 'label':
    statement;
    break;
default:
    statement;
}

function(){

    switch (statement){
    case 'label':
        statement;
        break;
    case 'label':
        statement;
        break;
    case 'label':
        statement;
        break;
    default:
        statement;
    }

    switch (statement){
    case 'label': statement; break;
    case 'label':
        statement;
        break;
    case 'label': statement; break;
    default:
        statement;
    }

    switch (statement){
    case 'label': statement; break;
    case 'label': statement; break;
    case 'label': statement; break;
    default: statement;
    }

    switch(expression){case expression:statements;break;default:statements;}
    statements; // No More Indent

    switch(expression){ default:function(){"   { "}; }
    switch(expression){ default:function(){"   } "}; }
    switch(expression){ default:function(){"\" { "}; }
    switch(expression){ default:function(){"\" } "}; }
    switch(expression){ default:function(){'   { '}; }
    switch(expression){ default:function(){'   } '}; }
    switch(expression){ default:function(){'\' { '}; }
    switch(expression){ default:function(){'\' } '}; }
    switch(expression){ default:function(){/   } /}; }
    switch(expression){ default:function(){/  \{ /}; }
    switch(expression){ default:function(){/\/ } /}; }
    switch(expression){ default:function(){/\/\{ /}; }
    // No More Indent

}




// No fold
if (statement) statement;

if (statement)
    statement;

if (statement){
statement;}

// Fold
if (statement){
    statement;
}

if ()
    statement;
else if ()
    statement;
else
    statement;
while ()
    statement;
for ()
    statement;
switch ()
    statement;


// ===========
// = Strings =
// ===========

// No Fold; No Indent
myFunction(")"
    statement; // Fold; Indent
"(")
// No Fold; No Indent
myArray = ["]",
    statement; // Fold; Indent
"["]
// No Fold; No Indent
function(){"}"
    statement; // Fold; Indent
"{"}
// No Fold; No Indent
myFunction("\")"
    statement; // Fold; Indent
"\"(")
// No Fold; No Indent
myArray = ["\"]",
    statement; // Fold; Indent
"\"["]
// No Fold; No Indent
function(){"\"}"
    statement; // Fold; Indent
"\"{"}
// No Fold; No Indent
myFunction(')'
    statement; // Fold; Indent
'(')
// No Fold; No Indent
myArray = [']',
    statement; // Fold; Indent
'[']
// No Fold; No Indent
function(){'}'
    statement; // Fold; Indent
'{'}
// No Fold; No Indent
myFunction('\')'
    statement; // Fold; Indent
'\'(')
// No Fold; No Indent
myArray = ['\']',
    statement; // Fold; Indent
'\'[']
// No Fold; No Indent
function(){'\'}'
    statement; // Fold; Indent
'\'{'}
// No Fold; No Indent
myFunction(/)/
    statement; // Fold; Indent
/(/)
// No Fold; No Indent
myArray = [/]/,
    statement; // Fold; Indent
/[/]
// No Fold; No Indent
function(){/}/
    statement; // Fold; Indent
/{/}
// No Fold; No Indent
myFunction(/\/)/
    statement; // Fold; Indent
/\/(/)
// No Fold; No Indent
myArray = [/\/]/,
    statement; // Fold; Indent
/\/[/]
// No Fold; No Indent
function(){/\/}/
    statement; // Fold; Indent
/\/{/}

// No Fold; No Indent
function(){"   { "}
function(){"\" { "}
function(){'   { '}
function(){'\' { '}
function(){/  \{ /}
function(){/\/\{ /}
myArray = ["   [ "]
myArray = ["\" [ "]
myArray = ['   [ ']
myArray = ['\' [ ']
myArray = [/  \[ /]
myArray = [/\/\[ /]
myFunction("   ( ")
myFunction("\" ( ")
myFunction('   ( ')
myFunction('\' ( ')
myFunction(/  \( /)
myFunction(/\/\( /)
// No Fold; No Indent
function(){"   } "}
function(){"\" } "}
function(){'   } '}
function(){'\' } '}
function(){/   } /}
function(){/\/ } /}
myArray = ["   ] "]
myArray = ["\" ] "]
myArray = ['   ] ']
myArray = ['\' ] ']
myArray = [/   ] /]
myArray = [/\/ ] /]
myFunction("   ) ")
myFunction("\" ) ")
myFunction('   ) ')
myFunction('\' ) ')
myFunction(/  \) /)
myFunction(/\/\) /)


// ============
// = Comments =
// ============

// myFunction(
//     No Fold; No Indent
// )
// myArray = [
//     No Fold; No Indent
// ]
// function(){
//     No Fold; No Indent
// }


function(){
    some_function();

/*  ignore_first();
    ignore_second();
*/

    more_functions();
}


""
''
()
[]
{}

