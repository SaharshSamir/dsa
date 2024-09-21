export function isAnagram(s: string, t: string): boolean {
        let res = true;
  if (s.length !== t.length) res = false;

  let counter = new Map<string, number>();
    s.split("").map((char) => {
      counter.set(char, (counter.get(char) || 0) + 1);
    });

    t.split("").map((char) => {
      counter.set(char, (counter.get(char) || 0) - 1);
    });

    counter.forEach((value, _) => {
        if(value !== 0) res = false;
    })
    return res;
    
};

function test() {
    const testCases = [
        ["anagram", "nagaram"],
        ["rat", "car"],
    ];

    testCases.forEach(([s, t]) => {
        const result = isAnagram(s, t);
        console.log(`"${s}" is ${result ? "" : "not "}an anagram of "${t}"`);
    });
}
