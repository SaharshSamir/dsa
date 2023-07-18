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
        //if only 1 node is present
        if(this.length === 1){
            this.head = null;
            this.tail = null;
            this.length = 0;
            return;
        }

        //else
        let pointer = this.head;
        
        while(pointer.next?.next !== null){
            pointer = pointer.next;
        }
        this.tail = pointer;
        this.tail.next = null;

    }
    
    print(){
        let pointer = this.head;
        let output = "";
        while(pointer !== null){
            //console.log(`${pointer.data} -> `);
            output = output.concat(`${pointer.data} -> `);
            pointer = pointer.next;
        }
        console.log(output);
    }

    peek() {
        return this.tail;
    }

    size(){
        return this.length;
    }
};

export default LinkedList; 
