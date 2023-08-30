"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var marks;
marks = 33;
console.log(marks);
marks = "grade A";
console.log(marks);
var mudassir;
mudassir = {
    userName: "mudassir",
    userId: 1234
};
console.log(mudassir);
mudassir = {
    adminName: "mudassir",
    adminId: 1234
};
console.log(mudassir);
function getUserId(id) {
    return id;
}
var byString = getUserId;
console.log(byString("22"));
var byNmuber = getUserId;
console.log(byNmuber(12));
