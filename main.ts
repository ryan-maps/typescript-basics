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
function padLeft(padding: number | string, input: string): never {
    throw new Error("Not implemented yet!");
}

// # Narrowing (Funilamento)
/**
 * Bloco de código que restringe um tipo de uma variável.
 */

function toInteger(value: string | number): number {
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

// # Predicados

type Card = {
    name: string,
    serial: number
    owner: User
}

const creditCard: Card = {
    name: "Bank A",
    serial: 1000,
    owner: person
}

function isCard(card: Card | null): card is Card{
    const casting = (card as Card);
    console.log(casting)
    return casting?.owner !== undefined
}

const resultCard = isCard(creditCard);
console.log(resultCard);
const resultNull = isCard(null);
console.log(resultNull);

// # Intersection type
/**
 * Mescla tipos;
 */
type UserDuck = User & Duck;

const userDuck: UserDuck = {
    name: 'DuckPro',
    age: 20,
    quack: () => {
        console.log('Quack');
    }
}

// # Generics

interface Box<Type> {
    contents: Type;
}
const boxUserDuck: Box<UserDuck> = {
    contents: userDuck
}

// ReturnType
/**
 * Consegue obter o tipo do retorno de uma função
 */

type typeIsCard = ReturnType<typeof isCard>

// # Never
function throwError(): never {
    throw new Error("Not implemented yet!");
}
try{
    throwError();
} catch(error){
    console.log("error")
}