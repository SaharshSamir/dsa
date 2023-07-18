type TNode<T> = {
    data: T,
    next: TNode<T> | null,
}

class LinkedList<T> {
    head: TNode<T> | null = null;
    tail: TNode<T> | null = null;
    length: number = 0;

    constructor(data: T = null){
        if(data !== null){
            this.head = {
                data,
                next: null
            } as TNode<T>;
            this.length = 1;
        }
    }

    push(data: T){
        let node: TNode<T> = {
            data: data,
            next: null,
        }
        if(this.length === 0) {
            this.head = node;
            this.tail = node;
            this.length = 1;
        }else {
            this.tail.next = node;
            this.tail = node;
            ++this.length;
        }
    }


    pop(){
        let nodeToDelete = this.head;
        this.head = this.head.next;
        nodeToDelete.next = null;
    }

    print(){
        let pointer = this.head;
        let output = "";
        while(pointer !== null){
            output = output.concat(`${pointer.data} -> `);
            pointer = pointer.next;
        }
        console.log(output);
    }

    peek() {
        return this.head;
    }

    size(){
        return this.length;
    }
};

export default LinkedList; 
