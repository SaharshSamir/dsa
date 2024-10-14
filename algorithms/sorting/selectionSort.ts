import { test } from "./test";

function swap(arr: number[], i: number, j: number): number[]{
    let temp = arr[i];
    arr[i] = temp;
    arr[j] = temp;

    return arr;
}

//iterative
/*
function selectionSort(nums: number[]): number[] {
    for(let i=0; i<nums.length; i++){
        let minIndex = i;
        for(let j=i+1; j<nums.length; j++){
            minIndex = nums[j] < nums[minIndex] ? j : minIndex;
        }


        let temp = nums[i];
        nums[i] = nums[minIndex];
        nums[minIndex] = temp;

    }

    return nums;

}
*/

//recursive
function selectionSort(nums: number[]): number[] {
    let minIndex = 0;

    if(nums.length === 0) return nums;

    minIndex = nums.reduce((min, val, idx) => {
        return val < nums[min] ? idx : min;
    }, minIndex);

    const temp = nums[0];
    nums[0] = nums[minIndex];
    nums[minIndex] = temp;

    return [nums[0], ...selectionSort(nums.slice(1))];
}


test(selectionSort);
//time complexity: O(n^2)
export {};
