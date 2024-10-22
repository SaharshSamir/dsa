let arr = [10, 20, 30, 50, 60, 80, 110, 130, 140, 170], target = 110;

let i=0, j=arr.length - 1;

while(i < j){
  const mid = Math.floor((j + i)/2);
  console.log("j: ", j, "i: ", i, "mid: ", mid);

  if(arr[mid] > target){
    j = mid;
  }else if(arr[mid] < target){
    i = mid;
  }else if(arr[mid] === target){
    console.log(`found ${target} at ${mid}`);
    break;
  }

}

export {};
