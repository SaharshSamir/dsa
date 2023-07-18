//

let arr = [10, 7, 8, 9, 1, 5];
console.log('before sort', arr);

function swap(arr: number[], a: number, b: number) {
	let temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
}

function partition(arr: number[], low: number, high: number) {
	let pivot = arr[high];

	//index of smaller element. (As the j pointer ensured that the elements in front of i are bigger than pivot, numbers at i are then smaller than pivot)
	//i also indicates the correct position of the pivot
	let i = low - 1;

	//j goes from low to high-1, while i starts at low-1
	for (let j = low; j < high; j++) {
		if (arr[j] < pivot) {
			++i;
			swap(arr, i, j);
		}
	}

	swap(arr, i + 1, high);
	return i + 1;

}

function quickSort(arr: number[], low: number, high: number) {
	if (low < high) {
		let pi = partition(arr, low, high);

		quickSort(arr, low, pi - 1);
		quickSort(arr, pi + 1, high);
	}
}

quickSort(arr, 0, arr.length - 1);

console.log('after sort', arr);
