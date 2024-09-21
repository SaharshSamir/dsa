/*
    test cases: 
    1. ["eat","tea","tan","ate","nat","bat"]
       output: [["bat"],["nat","tan"],["ate","eat","tea"]]
    2. 
*/


function groupAnagrams(strs: string[]): string[][] {
    let hash: {[key: string]: string[]}  | {} = {};
    strs.forEach(str => {
        const sortedStr = str.split("").sort().join("");

        hash[sortedStr] = hash[sortedStr] === undefined ? [str] : [...hash[sortedStr], str]
    });

    return Object.values(hash);

}

function test() {
    const testCases = [
        ["eat","tea","tan","ate","nat","bat"],
        [""],
        ["a"]
    ]

    testCases.forEach((testCase, idx) => {
        const res: string[][] = groupAnagrams(testCase); 
        console.log(`${idx}. ${testCase}`);
        console.log(res);
        console.log("---------------------------");
    });
}

test();
