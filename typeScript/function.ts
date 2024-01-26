console.log("functio  in typescript")

// function in typescript
function addTwo(a:number, b:number):number {
    return a+b;
}

 // rest parameters
function add(...nums:number[]):number {
    let sum:number = 0;
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum;
}

console.log("here is the sum: " + add(1,2,3,4,5,6,7,8,9,10));
