/*
You are given a large integer represented as an integer array digits, 
where each digits[i] is the ith digit of the integer. The digits are ordered
from most significant to least significant in left-to-right order. The large integer
does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.    

example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].

example 2:

Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].
*/

function plusOne(digits: number[]): number[] {
   let i = digits.length - 1; 
   let carryOver = 1;
   while(i >= 0){
        let sum = digits[i] + carryOver;
        carryOver = parseInt(`${sum/10}`);
        let newDigit = sum%10;
        digits[i] = newDigit;
        i--;
   } 

   if(carryOver > 0){
       digits = [carryOver, ...digits];
   }

   return digits;
}

//another hacky, cool method
function plusOneHack(digits: number[]): number[] {
    return (BigInt(digits.join('')) + BigInt(1)).toString().split('').map(Number);
}

console.log(plusOneHack([1, 9, 9]));
