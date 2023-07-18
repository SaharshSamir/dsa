/*
Question: You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, 
and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Sol1:
	have two pointers, each pointer to a node in both LL, starting from first node
	while (pointer1 < LL1.length or pointer2 < LL2.length)
		sum=add numbers at both pointers
		if global bank is non empty, add to sum
		if sum has more than 2 digits
			add last digit to a node and add the node to the result LL2
			take the remaining digits and add it to a global bank
		else
			add the sum to a node and add the node to the result LL2

   
*/

class ListNode {
	val: number
	next: ListNode | null
	constructor(val?: number, next?: ListNode | null) {
		this.val = (val === undefined ? 0 : val)
		this.next = (next === undefined ? null : next)
	}
}

// second number is the last digit and the first number is the number from remaining digits 
function carry(num: number): number[] {
	if (num / 10 > 0) {
		return [Math.floor(num / 10), num % 10];
	}
	return [0, 0];
}

function sumLinkedLists(l1: ListNode | null, l2: ListNode | null, carryDigit: number): ListNode {
	console.log("inside calc function");
	console.log(l1, l2);
	//if both the lists end
	if (l1 === null && l2 === null) {
		if (carryDigit) {
			return new ListNode(carryDigit);
		}
		return null;
	}

	//if one of the lists ends 
	if (l1 === null) {
		let carryOfSum = carry(l2.val + carryDigit);
		let resultNode = new ListNode(carryOfSum[1]);
		let remainingSum = sumLinkedLists(null, l2.next, carryOfSum[0]);
		resultNode.next = remainingSum;
		return resultNode;
	} else if (l2 === null) {

		let carryOfSum = carry(l1.val + carryDigit);
		let resultNode = new ListNode(carryOfSum[1]);
		let remainingSum = sumLinkedLists(l1.next, null, carryOfSum[0]);
		resultNode.next = remainingSum;
		return resultNode;
	}

	let sum = l1.val + l2.val;

	let carryOfSum = carry(sum + carryDigit);
	console.log("carry: ", carryOfSum);
	let carryVal = carryOfSum[0];
	let sumDigit = carryOfSum[1];

	let resultNode = new ListNode(sumDigit);

	let remainingSum = sumLinkedLists(l1.next, l2.next, carryVal);

	resultNode.next = remainingSum;
	return resultNode;

}

//main
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {

	console.log("main function");
	console.log(l1);
	console.log(l2);
	return sumLinkedLists(l1, l2, 0);

};

let list1A = new ListNode(2);
let list1B = new ListNode(4);
let list1C = new ListNode(3);
list1A.next = list1B;
list1B.next = list1C;


let list2A = new ListNode(5);
let list2B = new ListNode(6);
let list2C = new ListNode(4);
list2A.next = list2B;
list2B.next = list2C;

let answer = addTwoNumbers(list1A, list2A);
console.log(answer);
