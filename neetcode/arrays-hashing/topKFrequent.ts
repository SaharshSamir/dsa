function topKFrequent(nums: number[], k: number): number[] {
    console.log("-----test-----");
    
    const hash = {};

    nums.forEach((num) => {
        hash[num] = hash[num] !== undefined ? ++hash[num] : 1;
        console.log(hash);
    });

    return [];
};

function test() {
    const testCases = [
        {
            nums: [1, 1, 1, 2, 2, 3],
            k: 2,
            output: [1, 2]
        },
        {
            nums: [1],
            k: 1,
            output: [1]
        }
    ];

    testCases.forEach((test) => {
        topKFrequent(test.nums, test.k);
    })
}

test();
