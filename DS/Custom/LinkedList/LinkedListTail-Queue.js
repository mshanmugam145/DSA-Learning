const LinkedList = require('./LinkedListTail');

class LinkedListQueue{
    constructor(){
        this.list = new LinkedList;
    }

    enqueue(value){
        this.list.append(value);
    }

    dequeue(){
        return this.list.removeFromFront();
    }

    getSize(){
        return this.list.getSize();
    }

    isEmpty(){
        return this.list.isEmpty();
    }

    peek(){
        return this.list.head.value;
    }

    print(){
        return this.list.print();
    }
}

const queue = new LinkedListQueue();
console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

queue.print();
console.log(queue.getSize());

console.log(queue.dequeue());
queue.print();

console.log(queue.peek());