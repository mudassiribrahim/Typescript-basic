let marks : string | number ;
marks = 33;
console.log(marks);
marks = "grade A";
console.log(marks);



type User ={
    userName: string;
    userId : number
}
type Admin={
    adminName : string;
    adminId : number
}

let mudassir : User | Admin;
mudassir = {
    userName: "mudassir",
    userId : 1234
}

console.log(mudassir);
mudassir ={
    adminName: "mudassir",
    adminId: 1234
}

console.log(mudassir);


function getUserId(id: string|number):string|number{
  return id;
}

let byString = getUserId;
console.log(byString("22"));
let byNmuber = getUserId;
console.log(byNmuber(12));
export{}