//bubble sort 
//in each iteration, compare 2 elems, and swap if elemA > elemB

import {test} from "./test";

function swap(arr: number[], i: number, j: number) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function bubbleSort(arr: number[]){
  const len = arr.length - 1;

  for(let i=0; i<len; i++){
    for(let j=0; j<len-i; j++){
      if(arr[j] > arr[j+1]){
        swap(arr, j, j+1);
      }
    }
  }
  return arr;
}

test(bubbleSort);

//time complexity: O(n^2)
export {}
