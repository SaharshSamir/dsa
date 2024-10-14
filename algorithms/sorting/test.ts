export function test(sort: Function) {
    const testCases = [
        [15, 2, 5, 1, 9, 20, 10, 4],
        [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
        [10],
    ];

    testCases.forEach(testCase => {
        console.log("----------------");
        console.log("case: ", testCase);
        const res = sort(testCase);
        console.log("answer: ", res);
    });
}
