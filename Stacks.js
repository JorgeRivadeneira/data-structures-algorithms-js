let letters = [];

const word = 'racecar';

var rword = '';

//put into the stack
for(let i=0; i < word.length; i++){
    letters.push(word[i]);
}

//pop off the stack in reverse order
for(let i = 0; i < word.length; i++){
    rword += letters.pop();
    console.log(`${i} = ${rword}`);
}

if(word === rword){
    console.log(`The word: ${word} is palindrome`);
}

const stack = ()=>{
    this.count = 0;
    this.storage = {};

    //Adds a value onto the end of the stack
    this.push = (value)=>{
        this.storage[this.count] = value;
        this.count++;
    }

    //Removes and return the value at the end of the stack
    this.pop = ()=>{
        if(this.count === 0){
            return undefined;
        }

        this.count--;
        const result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    this.size = ()=>{
        return this.count;
    }

    //Returns the value at the end of the stack
    this.peek = ()=>{
        return this.storage[this.count - 1];
    }
}

let myStack = new stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek);
console.log(myStack.pop);
console.log(myStack.peek);
myStack.push("freeCode");
console.log(myStack.size());
console.log(myStack.peek);
console.log(myStack.pop);
console.log(myStack.peek);