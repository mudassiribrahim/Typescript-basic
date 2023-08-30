interface User{
    readonly dbId : number,
    email : string,
     userId : number,
     googleSginup? : boolean,
     trailStart (): string
}

interface User {
    isPaid : boolean
}
interface Admin extends User {
    role: "Admin"| "dept Head" | "learner"
}



let sarmad : User ={
    dbId:1122,
    email : "example@gmai.com",
    userId : 22,
    googleSginup : false,
    trailStart(){
        return"trail started"
    },
    isPaid :true
}

let mudassir :Admin ={
    role:"learner",
    userId: 364,
    email:"muda@.com",
    isPaid: true,
    dbId:2233,
    googleSginup:true,
    trailStart(){
        return "trail started"
    }


}
console.log(mudassir);
console.log(sarmad);
console.log(typeof sarmad);

export{}