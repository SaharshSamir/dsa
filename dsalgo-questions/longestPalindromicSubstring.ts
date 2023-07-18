/*
Given a string s, return the longest 
palindromic
substring in s.
Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
*/
//"racecar"
function isPalindrome(s: string): boolean {
    let clone = s;
    let length = s.length-1;
    let i=length;
    let flag = true;
    while (i >= 0) {
        if(!(s[i] === s[length-i])) {
            flag = false; 
            break;
        } 
        i--;
    }

    return flag;
}

function longestPalindrome(s: string): string {
    if(isPalindrome(s)) {
        return s;
    }
    
    let left = longestPalindrome(s.slice(1));
    let right = longestPalindrome(s.slice(0, s.length-1));

    if (left.length === right.length) return left;
    return left.length > right.length? left : right;
}

console.log(longestPalindrome("/"));
//console.log(isPalindrome("racecar"));

