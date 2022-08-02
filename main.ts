export{}
let message = 'hello world';
console.log(message);

let name: string = 'qaisher';
let age : number = 27;
let alive : boolean = true;

let numArr1  : number[] = [3, 5, 6];
let numArr2 : Array<number> = [9, 2, 0];

let person1 : [string, number] = ['Chris', 22]; //array of multi type. cannot swap the order of values

let  anyType : any = true;

anyType = 22;


let multiType : number | boolean = 3;
multiType = true;


//functions
function add(num1: number, num2?: number) : number { //parameter with ? is optional
    if(num2){
        return num1 + num2;
    }
    else{
        return num1;
    }
}

console.log(add(3, 9));
console.log(add(3));