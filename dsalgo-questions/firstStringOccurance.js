/*
    Given two strings needle and haystack, return the index of the first occurrence of needle
    in haystack, or -1 if needle is not part of haystack.

    Input: haystack = "sadbutsad", needle = "sad"
    Output: 0
    Explanation: "sad" occurs at index 0 and 6.
    The first occurrence is at index 0, so we return 0.
*/
function strStr(haystack, needle) {
    var haystackPtr = 0, needlePtr = 0;
    while (haystackPtr < haystack.length) {
        console.log("needlePtr: ", needlePtr);
        console.log("haystackPtr: ", haystackPtr);
        console.log("-----------------");
        if (needlePtr === needle.length - 1 && haystack[haystackPtr] === needle[needlePtr]) {
            console.log("are we reaching here?");
            return haystackPtr - (needlePtr);
        }
        if (haystack[haystackPtr] === needle[needlePtr]) {
            ++needlePtr;
        }
        else {
            needlePtr = 0;
            --haystackPtr;
        }
        ++haystackPtr;
    }
    return -1;
}
console.log(strStr("mississippi", "issip"));
