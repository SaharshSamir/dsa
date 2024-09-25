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

export class BinarySearchTree<T> {
    root: TreeNode<T> = null;

    insert(root: TreeNode<T> | null = this.root, val: T): TreeNode<T> {
        const newNode = new TreeNode<T>(val);    


        if(root === null){
            return newNode; 
        }

        if(newNode.value < root.value) {
            root.left = this.insert(root.left, val);
        }

        if(newNode.value > root.value){
            root.right = this.insert(root.right, val);
        }
        return root;
    }

    printLevelOrder(root: TreeNode<T> = this.root): void {
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

    //visit root, then it's children (left children first, then right children)
    printPreOrder(root: TreeNode<T> | null = this.root){
        if(root === null) return;

        //process the root node
        console.log(root.value);
        //process the left sub-tree
        this.printPreOrder(root.left);
        //process the right sub-tree
        this.printPreOrder(root.right);
    }

    //visit the left children, then the root and then the right children
    printInOrder(root: TreeNode<T> | null = this.root) {
        if(root === null) return;

        //first process the left sub-tree
        this.printInOrder(root.left);
        //this process the root node
        console.log(root.value);
        //then process the right sub-tree
        this.printInOrder(root.right);

    }
    
    //visit the children first, (left then right) then visit the root
    printPostOrder(root: TreeNode<T> | null = this.root) {
        if(root === null) return;

        this.printPostOrder(root.left);
        this.printPostOrder(root.right);
        console.log(root.value);
    }

}

function test() {
    const bt = new BinarySearchTree<number>();
    const arr = [50, 20, 30, 10, 80,  90, 70, 60];


    arr.forEach(val => {
        bt.root = bt.insert(bt.root, val);
    });

    console.log("pre order: ");
    bt.printPreOrder();

    console.log("in order: ");
    bt.printInOrder();

    console.log("post order: ");
    bt.printPostOrder();
} 

test();

