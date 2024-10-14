import { test } from "./test";

function insertionSort(nums: number[]): number[] {

    for(let i=1; i< nums.length; i++){
        let key = nums[i];

        let j = i-1;
        while(j >= 0 && nums[j] > key){
            nums[j+1] = key; 
            j--;
        }

        nums[j+1] = key; 
    } 

    return nums;
}

test(insertionSort);
