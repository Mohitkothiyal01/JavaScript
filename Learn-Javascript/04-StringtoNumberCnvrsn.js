console.log("Hello i am mohit");

console.log(3+3)   /* we know that Its output is 6 */

console.log("3"+ 6);  /*Its output is 36 js takes it as string */
console.log(3+ "6");  /*Its output is  also 36 js takes it as string */

console.log("3"+ 6+2);  /*Its output is 362 js takes it also as string */
console.log(3+ 6+"2");  /*Its output is 92 here js takes first two values as number & 3rd value as string */

/*It is confusing that when we add 2 values one string & one number js take it as string....
   But when we add 3 values if the first value is string so js take it as string and 
   if the 1st value is number js takes it as number...
*/