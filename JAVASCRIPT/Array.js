let newArray=[1,6,4,3,2,5,6,7,2,1,2,3,4,5,6,7,8,9,12,23,56,34,23,12,98,12];

console.log(newArray)

//Methods that create new array

let newArrayMap=newArray.map(num=>num*num);
console.log("After mapping")
console.log(newArray)

//filter function

let newArrayFilter=newArray.filter(num=>num%2==0);
console.log("After using Filter Method")
console.log(newArrayFilter)


//reduce method

let newArrayReduce=newArray.reduce((acc,x)=>acc+x,0);
console.log("After using reduce method");
console.log(newArrayReduce);

///sliced method

let slicedArray=newArray.slice(2,10);
console.log("Slicing");
console.log(slicedArray);

//concat
let dummyArray=new Array(300,200,100,800,900);
let concatedArray=newArray.concat(dummyArray);
console.log(concatedArray);

//Methods that modify the original array


//push method
dummyArray.push(700);
console.log("After pushing 700 to the dummy array");
console.log(dummyArray);


//pop method

dummyArray.pop();
console.log("pop Method")
console.log(dummyArray);

//unshift Method

dummyArray.unshift(0);
console.log("Unshift Method");
console.log(dummyArray);

//shit Method

dummyArray.shift();
console.log("shift method")
console.log(dummyArray);

//splice Method

dummyArray.splice(1,0,400);
console.log("shift method")
console.log(dummyArray);

//sort Method

dummyArray.sort();
console.log("Sorting the Array");
console.log(dummyArray);

//reverse Method

dummyArray.reverse();
console.log("revrse Method");
console.log(dummyArray);


//Methods that does not create or modify the array

console.log("Methods that doesnot modify or create new Array");

//foreach method
console.log("Using ForEach method");
dummyArray.forEach((s)=>console.log(s*2));
console.log(dummyArray);

//every and some Method

console.log(dummyArray.every(num=>num>=100));
console.log(dummyArray.some(num=>num>500));