function upper(val : string){
   return val.toUpperCase();
}

console.log(upper("mudassir"));


function add (num: number):number{
    return num +2;
}
console.log(add(22));


function login(name: string, email : string, ispaid : boolean){
    console.log(`${name} with ${email} email and the payment status is ${ispaid}`);
}

login('mudassir','mm@.com',false);

export {}
