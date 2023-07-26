/*
    Given two strings needle and haystack, return the index of the first occurrence of needle
    in haystack, or -1 if needle is not part of haystack.

    Input: haystack = "sadbutsad", needle = "sad"
    Output: 0
    Explanation: "sad" occurs at index 0 and 6.
    The first occurrence is at index 0, so we return 0.
*/


function strStr(haystack: string, needle: string): number {
    let haystackPtr = 0;
    let needlePtr = 0;
    
    if(!needle || !haystack) return -1;

    while(haystackPtr < haystack.length){
        let currentHaystackLetter = haystack[haystackPtr + needlePtr];
        let currentNeedleLetter = needle[needlePtr];

        //if needlePtr has exceeded needle.length, needleLetter would be null or undefined
        if(!currentNeedleLetter) return haystackPtr;

        if(currentNeedleLetter === currentHaystackLetter) {
            ++needlePtr;
        }else {
            ++haystackPtr;
            needlePtr = 0;
        }
        
    }

    return -1;
}
console.log(strStr("mississippi", "misi"));
