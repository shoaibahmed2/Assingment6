//1. Write a ts program to print all natural numbers from 1 to n. - using while loop
// var n:number = 100;
// var i:number = 0;
// while (i <= n) {
//     console.log(i);
//     i++;
// }
//2. Write a ts program to print all natural numbers in reverse (from n to 1). - using while loop
// var n:number = 13;
// var i:number = 0
// //var x:string = n.toString()
// while(i <= n){
//     console.log(n-i);
//     i++;
// }
//3. Write a ts program to print all alphabets from a to z. - using while loop
//PENDING
//4. Write a ts program to print all even numbers between 1 to 100. - using while loop
//  var n:number = 100;
//  var i:number = 0;
// while(i <= n){
//     if (i % 2 ==0){
//         console.log(i);
//     }
//         i++;
//     }
//5. Write a ts program to print all odd number between 1 to 100.
// var n: number = 10;
// var i: number = 0;
// while (i <= n) {
//   if (i % 2 != 0) {
//     console.log(i);
//   }
//   i++;
// }
//6. Write a ts program to find sum of all natural numbers between 1 to n.
// var n:number = 10;
// var sum:number = 0;
// for(var i=0; i <=n; i++){
//     sum+=i
// }
// console.log(sum);
//7. Write a ts program to find sum of all even numbers between 1 to n.
// var n:number = 10;
// var sum:number = 0
// for(var i = 1; i <=n; i++){
//     if(i % 2 == 0){
//         sum+=i
//     }
// }
// console.log(`sum of even numbers is ${sum}`);
//8. Write a ts program to find sum of all odd numbers between 1 to n.
// var n:number = 10;
// var sum:number=0;
// for(var i=0; i<=n; i++){
//     if(i%2 !=0){
//         sum+=i
//     }
// }
// console.log(sum);
//9. Write a ts program to print multiplication table of any number.
// var table:number = 2;
// var myTable:number = 1;
// for(var i=1; i<=10; i++){
//     myTable=  table*i;
//     console.log(`${table} x ${i} = ${myTable} `);
// }
//10. Write a ts program to count number of digits in a number.
// var n:number = 123456;
// var x = n.toString()
// //for ( var i = 0; i <= x.length; i++) {
//     var y = x.length
//     console.log(y);
//    // break;
// //}
//11. Write a ts program to find first and last digit of a number.
// var n:number = 123
// var o = n.toString()
// var t = o.length
// for(var i=0; i<=o.length; i++){
//     var z = o[0];
//     var x = o[i-1]; 
// }
// console.log(`first digit is ${z} and last digit is ${x}`);
//12. Write a ts program to find sum of first and last digit of a number.
// var n:number = 123897
// var o:string = n.toString()
// for( var i=0; i<=o.length; i++){
//     var y = o[0];
//     var z = o[i-1];
//     var g = Number(y)
//     var h = Number(z)
//     var l  = Number(g+h);
// }
// console.log(l);
//13. Write a ts program to swap first and last digits of a number.
// var n:number = 1234
// var o:string = n.toString()
// for (var i = 0; i <= o.length; i++) {           PENDING
//     var z = o[i-1]
//     var j = o[y] == z && 
//     }
// //console.log(z);
// console.log(j);
//14. Write a ts program to calculate sum of digits of a number.
// var n:number = 4545
// var o:string = n.toString()
// var sum:number = 0
// for ( var i = 0; i < o.length ; i++) {
//     sum += Number(o[i])
// }
// console.log(sum);
//15. Write a ts program to calculate product of digits of a number.
// var n:number = 1234
// var s= n.toString()
// var sum:number =1
// for(var i =0; i<s.length; i++){
//     sum*= Number(s[i])
// }
// console.log(sum);
//16. Write a ts program to enter a number and print its reverse.
// var n = 1236
// var result:string ="";
// var o = n.toString()
// //var z = o.length
// for(var i = o.length-1; i >= 0; i--){
//    // console.log(o[i]);
//      result+= o[i]
// }
// console.log(result);
