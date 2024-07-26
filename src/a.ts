const  greet = (firstName : string) =>{
    console.log("Hello " + firstName);
}
const runAfterOneSec = (fn : ()=>void ) =>{
    setTimeout(fn, 1000);
}
const isLegal = (age : number) : boolean =>{
    if(age >= 18) return true;
    else return false;
}

const sum = (a : number, b : number) : number => {
    return a+b;
}

const isLegal2 = (user : {age : number, firstName : string, lastName : string}) : boolean =>{
    if(user.age >= 18) return true;
    else return false;
}

console.log(
    isLegal2({
        age : 20,
        firstName : "Abhay",
        lastName : "Pratap"
    })
);


runAfterOneSec(()=>{
    console.log("Hello");
})

console.log(sum(2,3));

greet("Abhay");

const x = isLegal(20);  