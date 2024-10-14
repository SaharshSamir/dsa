import { test } from "./test";

//given two sorted arrays, merge them into a single sorted array
function merge(nums1: number[], nums2: number[]): number[]{
    let i: number=0, j: number = 0;

    const sorted:number[] = [];

    while(i < nums1.length && j < nums2.length) {
        if(nums1[i] <= nums2[j]) {
            sorted.push(nums1[i]);
            i++;
        }else {
            sorted.push(nums2[j]);j
            j++;
        }
    }
    while(i < nums1.length) {
        sorted.push(nums1[i]);
        i++; 
    }

    while(j < nums2.length) {
        sorted.push(nums2[j]);
        j++; 
    }
    return sorted;
}

function mergeSort(nums: number[]): number[] {

    if(nums.length === 1) return nums;
    
    let mid = nums.length / 2;

    const left = mergeSort(nums.slice(0, mid));
    const right = mergeSort(nums.slice(mid, nums.length));

    return merge(left, right); 
}


test(mergeSort);

export {};
