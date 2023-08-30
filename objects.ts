import { type } from "express/lib/response";

type User = {
    name : string;
    email : string;
    isActive : boolean

}
function getUser(user:User):User{
    return user;
}

console.log(getUser({name: 'mudassir',email:"mm@gmai.com",isActive:false}));


type Course={
    readonly _couresId : number;
    courseName : string;
    crtHr : number;
    lessonNum?: number 
}

let myCourse : Course ={
    _couresId : 12,
    courseName :'typeScript',
    crtHr :8,
    lessonNum :20

}

// myCourse._couresId=190;

let nodeJs : Course = {
    
    _couresId :90,
    courseName : "Nodejs",
    crtHr:10,
}
console.log(myCourse);
console.log(nodeJs);


type CardDate ={
    date : number
}

type cardOwner ={
    name : string;
}

type card = CardDate & cardOwner;

let nC :card ={
    date :2,
    name :"khan"
}

console.log(nC);

export{} 