"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function upper(val) {
    return val.toUpperCase();
}
console.log(upper("mudassir"));
function add(num) {
    return num + 2;
}
console.log(add(22));
function login(name, email, ispaid) {
    console.log("".concat(name, " with ").concat(email, " email and the payment status is ").concat(ispaid));
}
login('mudassir', 'mm@.com', false);
