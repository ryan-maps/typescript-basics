// # Primitives
const x: number = 10;
const y = 12;
const userName = 'Nome' as String;

// # Union
let number: number | null = 0;
number = null;
number = 10;
console.log(number);
// number = 'String'

// # Type
type User = {
    name: string,
    age: number
}

const person: User = {
    name: 'Randy',
    age: 21
}

// # Interface
interface Animal {
    name: string
}
interface Duck extends Animal {
    quack: Function
}

const bear: Animal = {
    name: 'Urso'
}
const duck: Duck = {
    name: 'Pato',
    quack: () => {
        console.log('Quack');
    }
}
// ## Interfaces vs Type
/*
        - Interfaces podem ser extendidas e ser sobrescritas;
*/

// # Function
function padLeft(padding: number | string, input: string): string {
    throw new Error("Not implemented yet!");
}

// # Narrowing (Funilamento)
/**
 * Bloco de código que restringe um tipo de uma variável.
 */

function toInteger(value: string | number | null): number {
    if(typeof value === "number" ){
        // Reconhece somente como número
        return value.valueOf()
    }
    if (typeof value === "string"){
        // Reconhece somente como string
        return Number(value);
    }
    // Reconhece como null
    return 0;
}
