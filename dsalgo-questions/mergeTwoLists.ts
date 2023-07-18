/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }k
 * }
 */
class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {

  
    if(list1 === null && list2 === null) return null;

    if(list1 === null){
        return list2;
    }

    if(list2 === null){
        return list1;
    }

    let merged = new ListNode(); 

    //set the first value of merged list manually, by comparing first elements
    //of list1 and list2
    // merged.val = list1?.val > list2?.val ? list2?.val : list1?.val;

    let l1 = list1;
    let l2 = list2;
    let l3 = merged;
    
    if(list1?.val > list2?.val) {
        merged.val = list2?.val;
        l2 = l2?.next;
    }else {
        merged.val = list1?.val;
        l1 = l1?.next;
    }

    while(l1 !== null && l2 !== null){
        let next = new ListNode(); 
        
        if(l1.val < l2.val){
            next.val = l1.val;
            l3.next = next;
            l1 = l1.next;
        }else if(l1.val > l2.val){
            next.val = l2.val;
            l3.next = next;
            l2 = l2.next;
        }else {
            next.val = l1.val;
            l3.next = next;

            l3.next.next = new ListNode(l2.val);
            l1 = l1.next;
            l2 = l2.next;

            l3 = l3.next.next;
            continue;
        }
        
        l3 = l3.next;
    }



    if(l1 === null){
        l3.next = l2; 
    }else {
        l3.next = l1; 
    }
    return merged;



};
/*
[1, 3, 5, 7, ]
[2, 4, 6]
[1, 2, 3, 4, ]
*/

function printList(list: ListNode | null) {
    let ptr = list;

    if(list === null) console.log(null);

    while(ptr !== null){
        console.log(ptr.val);
        ptr = ptr.next;
    }
}

let list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(4);

let list2 = new ListNode(1);
list2.next = new ListNode(3);
list2.next.next = new ListNode(4);


printList(mergeTwoLists(list1, list2));

export {};
