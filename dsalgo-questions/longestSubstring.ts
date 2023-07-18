/*
Question: Given a string s, find the longest substring without any repeating characters

Example: 
s = "abcabcbb"
output = 3
explaination = the anser is "abc"

Solution: let i and j be sides of a sliding window. i=0, j=1. and output = s[i]s[j]
while s[j] is not in outout, 
	p incrementing j
else 
	add substring a[i] to s[j] to hashmap of map<substrng, length>
	rement i to j(where the duplicate val is found) and j = i+1

*/

function longestSubstring(s: string): number {
    let i=0, j=0, max=0;    
    let chars_seen = new Set<string>();

    while (j < s.length) {
        if(!chars_seen.has(s[j])){
            chars_seen.add(s[j]);
            j++;
            max = chars_seen.size > max? chars_seen.size : max;
        }else {
            chars_seen.delete(s[i]);
            i++;
        }

    }

    return max;
}

let longestSubstr = longestSubstring("aab");
console.log(longestSubstr);
