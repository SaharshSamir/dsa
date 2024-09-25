export class TreeNode<T> {
    value: T; 
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;

    constructor(val: T) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
} 

export class BinaryTree<T> {
    root: TreeNode<T> = null;

    insert(val: T) {
        const newNode = new TreeNode(val);
        const queue: TreeNode<T>[] = [];
        if(this.root === null){
            this.root = newNode; 
            return;
        }
        queue.push(this.root);

        while (queue.length > 0) {
            const curr = queue.shift();
            
            //check the left child. If exitst, add to queue. Else, insert to left
            if(curr.left === null) {
                curr.left = newNode;
                return;
            }else {
                queue.push(curr.left);
            }

            //check the right child. If exitst, add to queue. Else, insert to right
            if(curr.right === null) {
                curr.right = newNode;
                return;
            }else {
                queue.push(curr.right);
            }
        }
    
    }

    printLevelOrder(root: TreeNode<T>): void {
      if (!root) return;

      const queue: (TreeNode<T>)[] = [root];

      while (queue.length > 0) {
        const current = queue.shift();
        if (current) {
          console.log(current.value);
          if (current.left) queue.push(current.left);
          if (current.right) queue.push(current.right);
        }
      }
    }
}

function test() {
    const bt = new BinaryTree<number>();
    const arr = [1,2,3,4,5,6,7,8,9,10];


    arr.forEach(val => {
        bt.insert(val);
    });


    bt.printLevelOrder(bt.root);
} 

test();

const age = [1,2,3,4,5,6,7,8,9,10];

