"use strict";
// # Primitives
const x = 10;
const y = 12;
const userName = 'Nome';
// # Union
let number = 0;
number = null;
number = 10;
console.log(number);
const person = {
    name: 'Randy',
    age: 21
};
const bear = {
    name: 'Urso'
};
const duck = {
    name: 'Pato',
    quack: () => {
        console.log('Quack');
    }
};
// ## Interfaces vs Type
/*
        - Interfaces podem ser extendidas e ser sobrescritas;
*/
// # Function
function padLeft(padding, input) {
    throw new Error("Not implemented yet!");
}
// # Narrowing (Funilamento)
/**
 * Bloco de código que restringe um tipo de uma variável.
 */
function toInteger(value) {
    if (typeof value === "number") {
        // Reconhece somente como número
        return value.valueOf();
    }
    if (typeof value === "string") {
        // Reconhece somente como string
        return Number(value);
    }
    // Reconhece como null
    return 0;
}
const creditCard = {
    name: "Bank A",
    serial: 1000,
    owner: person
};
function isCard(card) {
    const casting = card;
    console.log(casting);
    return casting?.owner !== undefined;
}
const resultCard = isCard(creditCard);
console.log(resultCard);
const resultNull = isCard(null);
console.log(resultNull);
const userDuck = {
    name: 'DuckPro',
    age: 20,
    quack: () => {
        console.log('Quack');
    }
};
const boxUserDuck = {
    contents: userDuck
};
// # Never
function throwError() {
    throw new Error("Not implemented yet!");
}
try {
    throwError();
}
catch (error) {
    console.log("error");
}
