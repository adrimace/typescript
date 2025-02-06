/*
Em TypeScript, você pode definir tipos de uma variável de duas formas principais: 
usando tipos diretamente na variável ou 
criando tipos personalizados com type ou interface

//usando diretamente:
let idade: number = 25;
let nome: string = "João";
let isActive: boolean = true;

//criando tipos personalizados
usando type ou interface que é 
Usado para objetos, funções ou tipos mais complexos.

type: É mais flexível e pode ser usado para criar tipos que incluem tipos literais, 
tipos de união, interseção e até funções. 
No entanto, ele não pode ser extendido ou implementado como interface.

interface: É mais focada na definição de estruturas de objetos e classes. 
interface pode ser extendida ou implementada. 
Usamos interface quando queremos garantir que um objeto siga uma estrutura definida ou 
quando estamos criando uma classe.

type com união de tipos:
type ID = string | number;
let userId: ID = "123"; // ou 123

Exemplo de interface com herança:
interface Animal {
    nome: string;
}

interface Cachorro extends Animal {
    latir(): void;
}

let meuCachorro: Cachorro = {
    nome: "Rex",
    latir: () => { console.log("Au Au!"); }
};

*/


const isFetching: boolean = true;
const isLoading: boolean = false;
let int: number = 42;
// int = "hello" ; error

let float : number = 4.2; // numeros decimais
const message : string = "Hello";
const numArray : number[] = [1,2,3];
const words : string [] = ["hello","world","code"];
const arrNum : Array<number> = [0,1,2,3,4]; //generic type
const arrNumRO: ReadonlyArray<number> = [10,20,30];

// tentar mudar a primeira posicao, ele nao permite pois é so de leitura
//nem alterar os que ja existem

//arrNumRO[0] = 1;
//arrNumRO.push(40);

console.log(words);

const contacts: [string, number] = ["Adriana", 9191919191]

// podemos criar um tipo novo, por exemplo: 
// TipoNovo é uma forma de criar um array com elementos de diferentes tipos
// por convencao colocamos com letra maiuscula o tipo da variavel
type TipoNovo = [string, number, boolean, ...string[]];
const arrType: TipoNovo = ["words",123, true, "qq coisa", "xpt", "..."];

// qd nao sabemos qual sera o tipo de variavel
// para isso usamos o any
let variavel: any = 987;
variavel = "afinal sou uma frase";
variavel = [];


// uma funcao do tipo void significa que funcao nao tem retorno
function sayName (name: string ): void {
    console.log("Hello, ${sayName}!");
};
sayName("Adriana");

// tipo never, usa-se para funcoes que nunca acaba
/*
function infinite(): never {
    while(true){
        console.log("1");
    }
};
*/

type Login = string;
const username: Login = "admin";


// podemos tb definir o tipo como uma string ou number
type ID = string | number;
const id1: ID = 123;
const id2: ID = "palavra";

type SomeType = string | undefined | null;
let email: SomeType = null;
email = "alex.ageev@hotmail.com";

// do tipo objeto:
type User = {
    name: string,
    age: number,
    address: string;
};
let usr : User = {
    name: "Tania",
    age: 33,
    address: "rua sta catarina 123"
};
// se na variavel preencher algum outro campo ele vai dar erro, pois nao foi declarado no tipo

//criando/ combinar os dois types

type TypeUser = {
    name: string,
    age: number,
};

type TypeAdress = {
    city: string,
    country: string;
};

let common: TypeUser & TypeAdress = {
    name: "Alex",
    age: 30,
    city: "Porto",
    country: "Portugal"
};

console.log(common);

let usr1: TypeUser = {
    name: "Zé",
    age: 80    
};

let addr1: TypeAdress = {
    city: "London",
    country: "UK"
};

// para espandir os objetos fazemos ...

let common2 = {
    ...usr1,
    ...addr1
};

console.log(common2);
