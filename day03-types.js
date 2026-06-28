// Primitive Types
    // let a = "hello";    // string
    // let b = 42;         // number
    // let c = true;       // boolean
    // let d = undefined;  // undefined - delcared but no value assigned
    // let e = null;       // null - intentionally "nothing"
    // let f = Symbol("id");   // symbol - rare at your stage, just know it exists
    // let g = 10n;        // bigint - also rare, ignore for now

    // console.log(typeof "hello");    
    // console.log(typeof 42);
    // console.log(typeof undefined);
    // console.log(typeof null);

// undefind vs null
    // let UserActivation;
    // console.log(user);
    // let selectedUser = null; 

// Type coercion and == vs ===
    // console.log(5 == "5");  // true - "5" gets converted to 5 first
    // console.log(5 === "5"); // false - different types, no conversion
    
    // console.log(0 == false);
    // console.log(0 === false);

    // console.log(null == undefined);     // true
    // console.log(null === undefined);    // false

//  Truthy and falsy
    // if ("0") console.log("truthy!");    // logs - non-empty string
    // if ([]) console.log("truthy!");     // logs - empty array is still an object
    // if ({}) console.log("truthy!");     // logs - same reason


// Exercise 1: Predict the output, then check
    // console.log(typeof "42");      //string
    // console.log(typeof 42);        //number
    // console.log(typeof null);      //object
    // console.log(typeof undefined);  //undefined

// Exercise 2: Predict true or false for each, then check
    // console.log(1 == "1");              //true
    // console.log(1 === "1");             //false
    // console.log(null == undefined);     //true
    // console.log(null === undefined);    //false
    // console.log(NaN === NaN); // trick one — research why if you get it wrong //false


// Exercise 3: List which of these are truthy vs falsy, then verify with if-statements
//   0, "0", "", " ", null, undefined, NaN, [], {}, -1

// Exercise 4: Write a function isEmpty(value) that returns true ONLY for
// these specific "empty" cases: "", null, undefined, [] (empty array)
// It should return false for 0, "0", and {} (empty object).
// Hint: truthy/falsy checking alone won't be enough — think about what
// makes [] different from {} when checking emptiness.

// function isEmpty(value) {
//   if (value === "" || value === null || value === undefined) {
//     return true;
//   }
//   if (Array.isArray(value) && value.length === 0) {
//     return true;
//   }
//   return false;
// }

// const usernames = ["alex", "", "sam", "", "jo"];
// for (let i = 0; i < usernames.length; i++) {
//   if (usernames[i] === "") { continue; }
//   console.log(usernames[i]);
// }

// console.log(Boolean(" "));
// console.log(Boolean(-1));