const LinkedList = require('./LinkedListTail');

class LinkedListStack{
    constructor(){
        this.list = new LinkedList;
    }

    push(value){
        this.list.prepend(value);
    }

    pop(){
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

const stack = new LinkedListStack();
console.log(stack.isEmpty());

stack.push(10);
stack.push(20);
stack.push(30);

stack.print();
console.log(stack.getSize());

console.log(stack.pop());
stack.print();

console.log(stack.peek());