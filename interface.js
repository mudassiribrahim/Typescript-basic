"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sarmad = {
    dbId: 1122,
    email: "example@gmai.com",
    userId: 22,
    googleSginup: false,
    trailStart: function () {
        return "trail started";
    },
    isPaid: true
};
var mudassir = {
    role: "learner",
    userId: 364,
    email: "muda@.com",
    isPaid: true,
    dbId: 2233,
    googleSginup: true,
    trailStart: function () {
        return "trail started";
    }
};
console.log(mudassir);
console.log(sarmad);
console.log(typeof sarmad);
