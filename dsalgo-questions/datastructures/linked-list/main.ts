import LinkedList from "./LinkedList";


let ll = new LinkedList();

for(let i=0; i<10; i++){
    ll.push(i + 1);
}

ll.print();

ll.pushAt(3, 100);
//ll.pushAt(3, 100);

ll.print();

ll.popAt(3);
ll.pushStart(99);

ll.print();

ll.popStart();
ll.print();
