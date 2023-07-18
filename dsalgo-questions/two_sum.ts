/*
Brute Force
	i = first element in array
	j = element after i
	for every j to array.length - 2
		check if arr[i] + arr[j] = target	
	
	increment i
	repeat

	
*/

//Brute Force
//function twoSum(nums: number[], target: number): number[] {
//let i = 0;
//let len = nums.length;

//while (i < len) {
//let j = i + 1;
//while (j < len) {
//if (nums[i] + nums[j] === target) {
//return [i, j]; }
//j++;
//}
//i++;
//}
//};

/*

Using Hash Map (JS Object)
	map<number, number>
	i=first element
	check if ( target-arr[i] exists in map )
		if yes, return [i, value found in map]
*/

function twoSum(nums: number[], target: number): number[] {
	let i = 0, len = nums.length;
	let result = [];
	let map = new Map<number, number>();

	while (i < len) {
		let numberToCheck = target - nums[i];
		if (map.has(numberToCheck)) {
			result = [i, map.get(numberToCheck)];
		}
		map.set(nums[i], i);
		i++;
	}
	return result;
}

let ans = twoSum([2, 7, 11, 15], 9);
console.log(ans);
