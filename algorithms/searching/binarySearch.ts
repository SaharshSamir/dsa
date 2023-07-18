let arr = [10, 20, 30, 50, 60, 80, 110, 130, 140, 170], target = 110;

let n = arr.length;

let low = 0, high = n, mid = (low+high)/2;

let found = false;

while(low === high) {
	if(arr[mid] === target){
		found = true;
		console.log(`found ${target} at ${mid}`);
	}

	if(arr[target] < mid) {
		high = mid;
		mid = (low+high)/2;
	}
	if(arr[target] > mid) {
		low = mid;
		mid = (low+high)/2;
	}

}

if(!found){
	console.log(`${target} not found`);
}
