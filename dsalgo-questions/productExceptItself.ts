function productExceptSelf(nums: number[]): number[] {
    let mult=1;

    const firstPass: number[] = new Array(nums.length).fill(1);
    for(let i=0; i<nums.length; i++){
        firstPass[i] = mult;
        mult *= nums[i];
    }
    console.log("fist pass: ", firstPass);

    mult=1;
    const secondPass: number[] = new Array(nums.length).fill(1);
    for(let i=nums.length-1; i>-1; i--) {
        secondPass[i] = mult;
        mult *= nums[i];
    }
    console.log("second pass: ", secondPass);

    //multiply the respective indeces of firstPass and secondPass
    const result: number[] = new Array(nums.length).fill(1);

    for(let i=0; i<nums.length; i++){
        result[i] = firstPass[i] * secondPass[i];
    }

    return result;

}

function test() {
    const testCases: number[][] = [
        [1, 2, 3, 4],
        [-1,1,0,-3,3]
    ]

    for(let i=0; i<testCases.length; i++){
        const result = productExceptSelf(testCases[i]);
        console.log("result: ", result);
        console.log("------------------");
    }
}

test();
