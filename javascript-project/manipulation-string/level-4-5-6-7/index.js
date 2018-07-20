var mystring = "Hello World";
var mystring1 = "What's Up?";

console.log(mystring.charAt(4)); //return o as result
console.log(mystring.charCodeAt(4)); //return '111' as Unicode of 'o' 
console.log(mystring.toUpperCase()); //return HELLO WORLD
console.log(mystring.toLowerCase()); // return hello world

console.log(mystring + ", " +  mystring1);
/* Add mystring and 
* mystring1 together 
 with ", " in between
 */
const mystring2 = `${mystring} ${mystring1}`;
 console.log(mystring2);
