/*
                   i   j
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
*/

function removeDuplicates(nums: number[]): number {
    let k = 0;

    if (nums.length === 0) {
        return 0;
    } else if (nums.length === 1) return 1;

    let i=1, j=1;

    while(j<nums.length-1) {
        console.log(`iteration ${i}: ${nums}`);
       if(nums[i-1] === nums[j]){
           //duplicate, move j forward till we find non-duplicate
           ++j;
           continue;
       }else if(nums[i] > nums[i+1]) {
           let temp = nums[i];
           nums[i] = nums[i+1];
           nums[i+1] = temp;
       }

       let temp = nums[i];
       nums[i] = nums[j];
       nums[j] = temp;
       
       i = j;

       ++i;
       ++j;
    }
    console.log(nums);
    return i;
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
