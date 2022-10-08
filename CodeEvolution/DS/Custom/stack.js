class Stack {
    constructor(){
        this.item = [];
    }
    push(element){
        this.item.push(element);
    }
    pop(){
        this.item.pop();
    }
    peek(){
        return this.item[this.item.length - 1]
    }
    isEmpty(){
        return this.item.length == 0
    }
    size(){
        return this.item.length
    }
    print(){
        console.log(this.item.toString());
    }
}

const stack = new Stack();

console.log(stack.isEmpty());
stack.push(10);
stack.print();
stack.push(20);
stack.print();
stack.push(30);
stack.print();
stack.pop();
console.log(stack.peek());
console.log(stack.size()); 