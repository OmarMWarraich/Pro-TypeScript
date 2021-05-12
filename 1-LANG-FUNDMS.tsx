// // Variables

// let globalScope = 1;

// {
//     let blockScope = 2;

//     {
//         let nestedBlockScope = 3;
//     }
// }



// // Name reuse with let

// let firstName = 'Chris';

// {
//     let firstName = 'Tudor';
//     console.log('Name 1: ' + firstName);
// }
// console.log('Name 1: ' + firstName);

// // Output:
// // Name 1: Tudor
// // Name 2: Chris

// // Name reuse with bar

// var firstName = 'Chris';

// {
//     var firstName = 'Tudor';
//     console.log('Name 1: ' + firstName);
// }
// console.log('Name 1: ' + firstName);

// // Output:
// // Name 1: Tudor
// // Name 2: Tudor


// // Constants

// // Constants follow the scope rules of the let keyword, but they cant be reassigned. Constants r immutable however
// // the value within the constants can be mutated e.g., by calling methods on the value already assigned.

// const name = 'Lily'  

// //Error cant assign to name coz its a constant
// name = 'Proncess Sparkles'

// const digits = [1, 2, 3];

// // Mutable- this changes the value of digits without using an assignment,

// digits.push(4,5,6);

// // Types 

// {
//     let radius = 4;

//     radius.toExponential()
// }


// // Explicit Type Annotation

// // primitive type annotation
// const fname: string = 'Steve';
// const heightInCentimeters: number = 182.44;
// const IsActive: boolean = false;

// // array type Annotation

// const names: string[] = ['James', 'Philips', 'Charles'];

// //  function annotation with parameter type annotation and return type Annotation

// let sayHello: (name: string) => string;

// // implementation of sayHello function 

// sayHello = function (name) {
//     return 'Hello ' + name;
// };

// // object type Annotation

// let person: {name: string; heightInCentimeters: number;};

// // Implementation of a person ObjectType

// person = {name: 'James', heightInCentimeters:183};


// // Interface and type aliases 

// // Interface

// interface Personinterface {
//     name: String;
//     heightInCentimeters: number;
// }

// const sher: Personinterface = {
//     name: 'Ben',
//     heightInCentimeters: 183
// }

// // Type Alias

// type PersonType = {
//     name: String;
//     heightInCentimeters: number;
// };

// const john: PersonType = {
//     name: 'Martin',
//     heightInCentimeters: 169
// }

// Primitive Types.

// string - a sequence of UTF-16 code units

// boolean - true or false

// number - a double-precision 64-bit floating point value

// symbol - a unique, immutable symbol, substitutable for a string as an object key


// types with special values are

// undefined = val of var dat hasnt ben assigned a val

// null = intentional absence of an object value. 

// void = to show that a fn doesnt return anything

// never = represents unreachable section of code e.g., a fn dat throws an exception


// Object and Dynamic Types

// what isnt primitive is a subclasss of object type. most of types fall in this domain.

// dynamic type can be used to represent literally anything. no compiler type checking for the type dynamic.

// any type is used by compiler in situations where it cant auto infer the type. 

// // Enumerations

// // represent a collection of named elements dat can b used to avoid littering ur program with hard-coded values.

// enum VehicleType {
//     PedalCycle,
//     MotorCycle,
//     Car,
//     Van,
//     Bus,
//     Lorry
// }

// const type = VehicleType.Lorry;

// const typeName = VehicleType[type]; // 'lorry

// // Enums split across multiple blocks

// enum BoxSize {
//     Small,
//     Medium
// }

// //................................................................

// enum BoxSize {
//     Large = 2,
//     XLarge,
//     XXLarge
// }

// // Consumers of enums declared in multi blocks can tell no difference with an enumeration declared in one block


// // Bit Flags

// // When a variable is created to store the state, all items are switched off. To switch on an option, it can simply
// // be assigned to variable. TO switch on multiple items, items can b combined with the bitwise OR operatr (|)

// // Flags

// enum DiscFlags {
//     None = 0,
//     Drive = 1,
//     Influence = 2, 
//     Steadiness = 4,
//     Conscientiousness = 8
// }

// // Using flags

// var personality = DiscFlags.Drive | DiscFlags.Conscientiousness;

// // Testing Flags

// // true 

// var hasD = (personality & DiscFlags.Drive)  == DiscFlags.Drive;

// // false

// var hasI = (personality & DiscFlags.Influence) == DiscFlags.Influence;

// // false

// var hasS = (personality & DiscFlags.Steadiness) == DiscFlags.Steadiness;

// // false

// var hasC = (personality & DiscFlags.Conscientiousness) == DiscFlags.Conscientiousness;


// // Constant Enumerations is erased during compilation and all code is replaced by hard ded values

// const enum VehicleType {
//     PedalCycle,
//     MotorCycle,
//     Car,Van,
//     Bus,
//     Lorry
// }

// const type = VehicleType.Lorry


// // Union Types

// // Union tpes use the pipe-delimiter to separate each of the possible types, which u can read as an 'OR.'.
// // value not matching any type in the union results in an error..............

// // Type annotation for a union type is
// let union: boolean | number;

// // OK: number of
// union: 5;

// // OK: boolean 
// union= true;

// // Error: Type "string" is not assignable to type number | boolean 
// union = 'string';

// // Type alias for a union type

// type StringOrError = string | Error;

// // Type alias for union of many types

// type SeriesOfTypes = string | number | boolean | Error;


// // Literal Types

// // used 2 narrow the range of allowable values to a subset of the type, such as reducing a string, to a 
// // set of specific values. 

// type Kingdom = 'Bacteria' | 'Protozoa' | 'Chromista' | 'Plantae' | 'Fungi' | 'Animalia'

// let kingdom: Kingdom;

// // OK
// kingdom = 'Bacteria'

// //Error
// kindom = 'Protista'

// // Number literal types and hybrid union/literal types

// // Number literal type

// type Fibonacci = 1 | 2 | 3 | 5 | 8 | 13

// let num: Fibonacci;

// // OK
// num = 8;

// //Error: Type '9 is not assignable to type Fibonacci
// num = 9;


// // Hybrid Union/ Literal type

// type Randoms = 'Text' | 10 | false;

// let random: Randoms;

// // OK
// random = 'Text';
// random = 10;
// random = false;

// // Error: Not assignable
// random = 'Other String';
// random = 12;
// random = true;


// // intersection types is both types...........


// // Intersection types

// interface Skier {
//     slide(): void;
// }

// interface Shooter {
//     shoot(): void;
// }

// type Biathelete = Skier & Shooter;

// let biathelete: Biathelete = null;

// biathelete.shoot();
// biathelete.slide();


// // Arrays 

// interface Monument {
//     name: string;
//     heightInMeters: number;
// }

// // The array is typed using the Monument interface.

// const monuments: Monument[] = [];

// // Each item added to the array is checked for type compatibility 

// monuments.push({
//     name: 'Statue of Liberty',
//     heightInMeters: 46
// });

// monuments.push({
//     name: 'Peter the Great',
//     heightInMeters: 96
// }); 

// monuments.push({
//     name: 'Sussex',
//     heightInMeters:20
// });

// function compareMonumentsHeights(a: Monument, b: Monument) {
//     if(a.heightInMeters > b.heightInMeters) {
//         return -1;
//     }
//     if(a.heightInMeters < b.heightInMeters) {
//         return 1;
//     }
//     return 0;
// }

// // The array.sort method expects a compareer that accepts two monumnets 

// const monumentsOrderedByHeight = monuments.sort(compareMonumentsHeights);

// // Get the first element from the array, which is the tallest

// const tallestMonument = monumentsOrderedByHeight[0];

// // Peter the Great

// console.log(tallestMonument.name);


// // Tuple Types

// // uses an array and specifies the type of elements based on their position. ......

// let poem: [number, boolean, string];

// poem =[1, true, 'love'];

// poem = ['mu', true, 'love'];


// pair, triple, quadruple, quintuple, sextuple, spetuble


// Dictionary Types

// // Indexed Types 

// interface Cephalopod {
//     hasInk : boolean;
//     arms: number;
//     tentacles: number;
// }

// interface CephalopodDictionary {
//     [index: string]: Cephalopod;
// }

// let dictionary: CephalopodDictionary = {};

// dictionary['octopus vulgaris'] = { hasInk: true, arms: 8, tentacles: 0 };
// dictionary['loligo vulgaris'] = { hasInk: true, arms: 8, tentacles: 2 };

// // Error Not assignable to type Cephalopod
// dictionary[0] = { hasInk: true};

// const octopus = dictionary['octopus vulgaris'];

// // 0 (The common octopus has no tentacles)
// console.log(octopus.tentacles);

// // Remove Item

// delete dictionary['octopus vulgaris'];

// // Mapped Types

// interface Options {
//     material: string;
//     backlight: boolean;
// }

// // Manually created readonly interface

// interface ManualReadOnlyOptions {
//     readonly material: string;
//     readonly backlight: boolean;
// }

// // Manually created optional interface

// interface ManualOptionsOptions {
//     material?: string;
//     backlight?: boolean;
// }

// // Manually created nullable interface

// interface ManualNullableOptions {
//     material: string | null;
//     backlight: string | null;
// }

// // Mapped types

// interface Options {
//     material: string;
//     backlight: boolean;
// }

// // Mapped types

// type ReadOnly<T> = { readonly [k in keyof T]: T[k]}
// type Optional<T> = {[k in keyof T]?: T[k]}
// type Nullable<T> = {[k in keyof T]: T[k] | null;}


// // Creating new types from mapped Types

// type ReadonlyOptions = Readonly<Options>;
// type OptionalOptions = Optional<Options>;
// type NullableOptions = Nullable<Options>;

// // Using mapped types

// // Read-only type
// const options1: ReadonlyOptions = {
//     backlight: true,
//     material: 'plastic'
// };

// // Error. Property is read-only
// options1.backlight = false;

// // Optional type
// const options2: OptionalOptions = {
//     // All members are optional
// };

// // Nullable Type

// const options3: NullableOptions = {
//     backlight: null,
//     material: null
// }



// // Type Assertions


// // TS says assgnmnt invalid, u being rite override the type usen type assertion. .....

// // Type assertions

// interface House {
//     bedrooms: number;
//     bathrooms: number;
// }

// interface Mansion {
//     bedrooms: number;
//     bathrooms: number;
//     butlers: number;
// }

// function getProperty() : House | Mansion {
//     // ...
// }

// const property = getProperty();

// // OK as the property is on both House and mansion
// const bedroomCount = property.bedrooms();

// //Errors: Property 'butlers' doesnt exist on type 'House | Mansion'
// const butlerCount = property.butlers();

// // OK with type assertion
// const workingButlerCount = (<Mansion>property).butlers;

// // Forced type Assertions

// const name: string = 'Avenue road';

// // Error: Type 'string' cant b conrtd 2 type 'number'
// const bedroomCount : number = <number>name;

// // Works

// const workingBedroomCount: number = <number><any><name>;


// //................................................................


// // Type Guards

// // Type Guard eg., 

// function typeGuardExample(stringNumber: string | number) {
//     // Error: Property does not exist`
//     const  a = stringNumber.length;
//     const b = stringNumber.toFixed();

//     // TypeGuard

//     if(typeof stringNumber === 'string') {
//         // OK
//         return stringNumber.length;
//     } else {
//         // OK
//         return stringNumber.toFixed();
//     }

// }

// // Custom Type Guard

// interface SpeedControllable {
//     increaseSpeed(): void;
//     decreaseSpeed(): void;
//     stop(): void;
// }

// interface InclineControllable {
//     lift(): void;
//     drop(): void;
// }

// function isSpeedControllable(treadmill: SpeedControllable | any) 
//     : treadmill is SpeedControllable {
//         if (treadmill.increaseSpeed
//             && treadmill.decreaseSpeed
//             && treadmill.stop) {
//                 return true;
//             }

//             return false;
//     }

//     function customTypeGuardExample(treadmill: SpeedControllable | InclineControllable) {
//         // Error Property doesnt exist
//         const a = treadmill.increaseSpeed();
//         const b = treadmill.lift();
//     }

//     // TypeGuard

//     if (isSpeedControllable(treadmill)) {
//         // OK
//         treadmill.increaseSpeed();
//     } else {
//         //OK
//         treadmill.lift();
//     }

// // ...................................................

// // Discriminated Union

// interface Cube {
//     kind: 'cube'; //Discriminant
//     size: number;
// }

// interface Cuboid {
//     kind: 'cuboid'; //Discriminant
//     width: number;
//     depth: number;
//     height: number;
// }

// // Union

// type Prism = Cube | Cuboid;

// function volume(prism: Prism): number {
//     // Type Guard
//     switch (prism.kind) {
//         case 'cube':
//             return prism.size * prism.size * prism.size;
//         case 'cuboid':
//             return prism.width * prism.depth * prism.height;
//         default: 
//             assertNever(prism);
//             break;
//     }
// }
// function assertNever(arg: never): never {
//     throw new Error("Possible new tagged type: " + arg);
// }

// Operators

// ++ & -- ops can only be applied to variables of type any, number or enum, used to increase index variables
// in a loop or to update counting variables in ur program. ...........

// // Increment and decrement

// let counter = 0;

// do {
//     ++counter;
// } while (counter < 10);

// // 10

// alert(counter);

// // Increment/Decrement of enumerations

// enum Size {
//     S,
//     M,
//     L,
//     XL
// }

// var size = Size.S;
// ++size;
// console.log(Size[size]); //M

// var size = Size.XL;
// --size;
// console.log(Size[size]); //L

// var size = Size.XL;
// ++size;
// console.log(Size[size]); // undefined

//................................................................


// // Binary Operators

// // -  *  /  %  <<  >>  &  ^  |

// // + op nt her coz special both additon & concatenation depending on variable types.

// // + => type pf both args is number or enum, the result is a no.

// // + => type of either args is string, the result is a string.

// // + => type pf either args is any & other arg isnt a string, the result is any.

// // Any other case , the op isnt allowes................

// // Binary plus Operator............

// // 6: number
// const num = 5 +1 ;

// // '51': string
// const str = 5 + '1';

// // Unary plus & minus Operators

// //5: number
// const nums = +str;

// //-5: number
// const negative = -str;


// // Bitwise Operators

// // accept values of all types. The op treats each value in the exp as a seq of 32 bits & rtrns a no. 

// &   AND   rtrns rslt 1 in each psitn dat both inputs 've 1.

// |   OR    rtrns rslt 1 in each psitn ver eydr input =1

// ^   XOR    rtrns rslt 1 in each psitn ver exctly one input has a 1.

// <<  LeftShift  Bits in the left hand arg r muvd 2 left by no of bits specified in the right hand arg.Bits muvd off 
//                da left side r discarded & zeroes r added on the right side.............

// >>  RightShift Bits in the right hand arg r muvd 2 right by no of bits specified in the right hand arg.Bits muvd off
//                da right side r discarded digits matching the left most bit r added on the right side

// >>> Zero-fill Right Shift       Bits in the left hand arg r muvd 2 da right by da no of bits specified in the right hand arg.
//                                 Bits muvd off da right side r discarded and zeroes r added on the left side.

// ~     NOT           Accepts a sngle arg and inverts each bit


// LOGICAL OPERATOS

// usd 2 test Boolean variables or2 convrt an exp n2 Boolean value. How logical oprs usd in Ts & how logical
// AND and logical OR oprs can be usd outside of the context of Boolean types............

// NOT Operator

// invert Boolean value. ..........Not oprtr cn convrt any variable 2 Boolean type. This can b done vidout inverting
// da truth of da variable by usng a seq of 2 unary NOT oprts.(!!). A sinle ! usd 2 invert a sttmnt to rdce nesting
// in code while !! converts a type to Boolean type

// NOT Oprts eg.,

// const truthyString = 'TruthyString';
// let falseyString: string;

// // False, it checks the string but inverts the truth
// const invertedTest = !truthyString;

// // True, the string isnt undefined or empty...
// const truthyTest = !!truthyString;

// //False, the string is empty
// const falseyTest = !!falseyString;

// // falsey = false values == undefined, null, false: boolean, '':string(empty string), O: number, NaN
// // truthy = true values = '0' string, 'False': string

// //Shorthand Boolean 

// var myProperty;

// if(myProperty) {
//     // Reaching this location means that......
//     // myProperty isnt null
//     // myProperty isnt undefined
//     // myProperty isnt an empty string
//     // myProperty isnt the number 0
//     // my property isnt NAN
// }

// // AND Operator

// // && asserts both sides of a logical expr r true, if(isValid && isRequired). if LHS is false. the evaluation ends........
// // Otherwise RHS is evaluated. 

// // AND Oprtr e.g.,

// //longhand 
// if (console) {
//     console.log('Console Available');
// }

// // shorthand
// console && console.log('Console Available');

// const player1 = 'Martin';

// // player2 is only defined if player1 is defined
// const player2 = player1 && 'Dan';

// // 'Dan' 
// alert(player2);

// // OR Operator

// // The cmn use of OR(||) oprtr 2 test eydr ov 2 sides to an exp r true. LHS evaluated first & if true evaluation 
// // ends, otherwise RHS evaluated. L

// // OR Oprtr.........

// // Empty strings are falsey........
// let errorMessages = '';

// // result is 'SavedOK'
// let result = errorMessages || 'Saved OK';

// // Filled strings are truthy
// errorMessages = 'Error Detected';

// // result is 'Error Detected';
// result = errorMessages || 'Saved OK';

// let undefinedLogger;

// // if the logger isnt initialized, substitute 4 the result of da RHS exprs.........
// const logger = undefinedLogger || { log: function (msg: string) {alert(msg);}};

// // alerts 'Message
// logger.log('Message');


// // SHORT CIRCUIT EVALUATION

// interface Caravan {
//     rooms: number;
// }

// let caravan: Caravan;

// if (caravan && caravan.rooms > 5) {
//     //...
// }

// // Conditional Operator

// const isValid = true;
// const message = isValid ? 'Okay' : 'Failed';

// // Type Operators

// // typeof, instanceof, delete etc etc

// // Destructuring

// const triangles = [1, 3, 5, 7, 9 ,10];

// // Destructuring

// const[first, second] = triangles;

// //1
// console.log(first);

// //3
// console.log(second);

// //Array destructuring with a rest parameter

// // Destructuring with a rest argumen

// const [firsst, seccond, ...remaining] = triangles;

// //1
// console.log(firsst);

// //3
// console.log(seccond);

// //[5,7,9,10]
// console.log(remaining);

// //Skipping Items

// // Skipping third item
// const[firsth, secondth, , fourth] = triangles;


// //1
// console.log(firsst);

// //3
// console.log(seccond);

// //[7]
// console.log(fourth);

// // Variable Swapping

// let a = 3;

// let b = 5;

// // Swapping

// [a, b] = [b, a];

// // 5
// console.log(a);

// //3
// console.log(b);

// // Object Destructuring

// const highSchool =  { school: 'Central High', team: 'Centaurs' };

// // Object destructuring
// const { school: s, team: t } = highSchool;

// // 'Central High'
// console.log(s);

// // 'Centaurs'
// console.log(t);

// //Auto unpacking if variable names match property names

// const { school, team} = highSchool;

// // 'Central High'
// console.log(school);

// //'Centaurs'
// console.log(team);

// // Object destructuring with rest parameter...result in an object containing all props that u didnt explicitly unpack.......

// const pets = { cat: 'Pickle', dog: 'Berkley', hamster: 'Hammy'}

// // Object destructuring
// const {dog, ...others} = pets;

// // 'Berkley'
// console.log(dog);

// // Object { cat: 'Pickle, hamster: 'Hammy' }
// console.log(others);

// // Destructuring past available values renders rslt as undefined. 

// // Undefined result

// const triangles1 =[1, 3, 4];

// // Destructuring past available values.......
// const [firsty, secondy, thirdy, fourthy] = triangles1;

// //undefined
// console.log(fourthy);

// // Default values

// const [firssty, seccondy, thirrdy = -1, fourtthy = -1] = triangles1;

// //4
// console.log(thirrdy);

// //-1
// console.log(fourtthy);

// // Tuples and destructuring

// // Returning a tuple

// function getThreeLandmarks(): [string, string, string] {
//     return ['Golden Gate Bridge', 'Palace of Westminster', 'Colosseum'];
// }

// // Destructuring the tuple into named variables
// const [sanFrancisco, london, rome] = getThreeLandmarks();


// // Spread Operator

// // dus da oppst of destructuring & cn b usd 2 pack arrays & objects usng a shallow copy. works vid props nt methods......

// // Array spreading
// const squares = [1, 4, 9, 16, 25];
// const powers = [2, 4, 8, 16, 32];

// // Array spreading
// const squaresAndPowers = [...squares, ...powers];

// // [1,4,9,16,25,2,4,8,16,32]
// console.log(squaresAndPowers);

// // if same no appears on both objects, last assignment wins and overwrites any previous value.


// // Object spreading

// const emergencyService = {
//     police: 'Chase',
//     fire: 'Marshall',
// };

// const utilityService = {
//     recycling: 'Rocky',
//     construction: 'Rubble'
// };

// // Object spreading
// const patrol = { ...emergencyService, ...utilityService};

// // { police: 'Chase', fire: 'Marshall', recycling: 'Rocky', construction:'Rubble'}
// console.log(patrol);

// // spread oprts can also b used for fn args. .....

// //Listing 1-53/ Spread Operator in function call......

// function add(a: number, b: number, c: number) {
//     return a + b + c;
// }

// const hexagons = [1, 6, 15];

// // Spread Operator in function call
// const result = add(...hexagons);

// //22 
// console.log(result);


// // Functions  => building blocks of readable, maintable and reusable code.

// // Function type annotations

// function getAverage(a: number, b: number, c: number): string {
//     const total = a + b + c;
//     const average = total / 3;
//     return 'The average is ' + average
// }

// const result = getAverage(4, 3, 8); // ' The average is 5'

// // Optional Parameters to be denoted by ? mark

// function getAverage1(a: number, b: number, c?: number): string {
//     let total = a;
//     let count = 1;

//     total += b;
//     count++;

//     if (typeof c !== 'undefined') {
//         total += c;
//         count++;
//     }

//     const average = total / count;
//     return 'The average is ' + average
// }

// // The average is 5
// const result1 = getAverage1(4,6);

// // Default Parameters = complimentary to Optional Parameters used as alternative design. Default

// // e.g., 

// function concatenate(items: string[], separator = ',', beginAt = 0, endAt = items.length) {
//     let result = '';

//     for (let i = beginAt; i < endAt; i++) {
//         result += items[i];
//         if ( i < (endAt - 1)) {
//             result += separator;
//         }
//     }
//     return result;
// }

// const items = [ 'A', 'B', 'C'];

// // 'A,B,C' 
// const ressult = concatenate(items);

// // 'B-C'
// const partialResult = concatenate(items, '-', 1);


// // Rest Parameters   aloow calling code to specify zero or more args of the specified type.

// //Must follow rules as follows;-

// // 1- only one rest parameter is allowed, 2-, rest param mst appr lst in the param lst. 3-, rest param type = array


// function gethAverage(...a: number[]): string {
//     let total = 0;
//     let count = 0;

//     for (let i = 0; i < a.length; i++) {
//         total += a[i];
//         count++;
//     }

//     const average = total /count;
//     return 'The average is' + average
// }
    
// // The average is 6
// const ressultt = gethAverage(2,4,6,8,10);


// // Overloads

// function getsAverage(a: string, b: string, c: string): string;
// function getsAverage(a: number, b: number, c: number): string;
// //implementation signature
// function getsAverage(a: any, b: any, c: any): string {
//     const total = parseInt(a, 10) + parseInt(b, 10) + parseInt(c, 10);
//     const average = total /3;
//     return 'The average is' + average;
// }

// // The average is 5
// const ressuult = getsAverage(4, 3, 8);


// // Specialized overload signatures
// // rules
// // 1. der mst b 1 non specialized signature, 2. each specialized signature mst rtrn a subtype of a non specialized signature,
// // 3. impl signature mst be compatible with all signatures.

// class HandlerFactory {
//     getHandler(type: 'Random'): RandomHandler;
//     getHandler(type: 'Reverse'): ReversedHandler;
//     getHandler(type: string): Handler; // non-specialized signature
//     getHandler(type: string): Handler; { // implementation signature
//         switch(type) {
//             case 'Random': 
//                 return new RandomHandler();
//             case 'Reversed':
//                 return new ReversedHandler();
//             default: 
//                 return new Handler();
//         }
//     }
// }

 ////................................................................

//  // Arrow Functions

// //e.g.,

// const shortAddNumbers = (a: number, b: number) => a + b;

// const mediumAddNumbers = (a: number, b: number) => {
//     return a + b;
// }

// const longAddNumbers = function (a: number, b: number) {
//     return a + b;
// }

// // Wrapping an object in parantheses......

// const makeName = (f: string, l: string) => ({ first: f, last: l });

// // Preserving scope with arrow syntax

// const scopeLosingExample = {
//     text: 'Property from lexical scope',
//     run: function () {
//         setTimeout(function () {
//             alert(this.text);
//         }, 1000);
//     }
// };

// // alerts undefined
// scopeLosingExample.run();

// const scopePreservingExample = {
//     text: 'Property from lexical scope',
//     run: function () {
//         setTimeout(() => {
//             alert(this.text);
//         }, 1000);
//     }
// };

// // alerts "Property from lexical scope"
// scopePreservingExample.run();

// // Function Currying

// // Currying with arrow fns.

// const multiply = (a: number) => (b: number) => a * b;

// // Pass both arguments in sequence: 30
// const numA = multiply(5)(6);

// // Pass just the first arg & re-use
// const orderOfMagnitude = multiply(10);

// //10
// const deca = orderOfMagnitude(1);

// // 100
// const hecta = orderOfMagnitude(deca);

// // 1,000
// const kilo = orderOfMagnitude(hecta);


// // Currying with fn overloads.

// function multiply(a: number): (b: number) => number;
// function multiply(a: number, b: number): number;
// function multiply(a: number, b: number = null) {
//     if (b === null) {
//         return (b: number) => a * b;
//     }
//     return a * b;
// }

// // Pass both the args normally: 30

// const numA = multiply(5, 6);

// // Pass both the first arg and re-use

// const orderOfMagnitude = multiply(10);

// // 10

// const deca = orderOfMagnitude(1);

// // 100

// const hecta = orderOfMagnitude(deca);

// // 1,000

// const kilo = orderOfMagnitude(hecta);

// // Practical Currying

// const log = (source: string) => (message: string) => console.log(source, message);

// const customLog = log('Custom Log:');

// // Custom Log: Message One
// customLog('Message One');

// // Custom Log: Message Two
// customLog('Message Two');

// //................................................................


// // I N T E R F A C E S


// // e.g.,

// interface Point {
//     // Properties
//     x: number;
//     y: number;
// }

// interface Passenger {
//     // Properties
//     name: string;
// }

// interface Vehicle {
//     // Constructor
//     new(): Vehicle;
// // Properties
// currentLocation: Point;
// // methods
// travelTo(point: Point): void;
// addPassenger(passenger: Passenger): void;
// removePassenger(passenger: Passenger): void;
// }

// // Nodelist 

// // const nodeList = document.getElementsByTagName('div');

// // nodeList.

// // Builtin NodeLIstOf<T> interface
// /

// // Extending the NodeList interface

// interface NodeList {
//     onclick: (event: MouseEvent) => any;
// }

// const nodeList = document.getElementsByTagName('div');

// nodeList.onclick = function (event: MouseEvent) {
//     alert('Clicked')
// };

// // Hybrid types

// interface SimpleDocument {
//     (selector: string): HTMLElement;
//     notify(message: string): void;
// }

// //Implementation

// const prepareDocument = function (): SimpleDocument {
//     let doc = <SimpleDocument>function (selector: string) {
//         return document.getElementById(selector);
//     };

//     doc.notify = function (message: string) {
//         alert(message);
//     }
//     return doc;
// }

// const $ = prepareDocument();

// // Call $ as a function

// const elem = $('myId');

// // Use $ as san object
// $.notify(elem.id);

//////////////////////////...................................\\\\\\\\\\\\\\\\

// C L A S S E S 

//still v. imp.......

// // C O N S T R U C T O R S

// class Song {
//     constructor(private artist: string, private title: string) {
//     }
//     play() {
//         console.log('Playing ' + this.title + 'by ' + this.artist);
//     }
// }
    
// class Jukebox {
//     constructor(private songs: Song[]){            
//     }
//     play() {
//         const song = this.getRandomSong();
//         song.play();
//     }
//     private getRandomSong() {
//         const songCount = this.songs.length;
//         const songIndex = Math.floor(Math.random() * songCount);

//         return this.songs[songIndex];
//     }
// }

// const songs = [
//     new Song('Bushbaby', 'Megaphone'),
//     new Song('Delays', 'One More Lie In'),
//     new Song('Goober Gun', 'Stereo'),
//     new Song('Sohnee', 'Shatter'),
//     new Song('Get Amped', 'Celebrity'),
// ];

// const jukebox = new Jukebox(songs);

// jukebox.play();


// // // Manually mapped constructor parameters

// class Song {
//     private artist: string;
//     private title: string;

//     constructor(artist: string, title: string) {
//         // Don't do this!
//         this.artist = artist;
//         this.title = title;
//     }

//     play() {
//         console.log('Playing ' + this.title + ' by ' + this.artist);
//     }
// }

// // Access Modifiers   change the visibility of class members. 

// // 3 access modifiers available in TypeScript:


// // - private - restricts visibility 2 same class only. 

// // - protected - allows mmbr 2 b used within same class & within subclasses. Access 4rm aywhere alse nt allowed. 

// // - public - default for class members- allows access 4rm all locations. not necessary 2 specify da public keyword
// //              on a property or method unless u want 2 b explicit. but u will need 2 add it 2 constructor params 2 have
// //            dem mapped 2 properties automatically. 


// // Properties and Methods

// class Playlist {
//     private songs: Song[] = [];
//     static readonly maxSongCount = 30;

//     constructor(public name: String) {
//     }

//     addSong(song: Song) {
//         if (this.songs.length >= Playlist.maxSongCount) {
//             throw new Error("Playlist is full")
//         }
//         this.songs.push(song);
//     }
// }

// // Creating a new instance 
// const playlist = new Playlist('My Playlist');

// // Accessing a public instance property
// const name = playlist.name;

// // Calling a public instance method
// playlist.addSong(new Song('Therapy?', 'Crooked Timer'));

// // Accessing a public state property
// const maxSongs = Playlist.maxSongCount;

// // Error: Cannot assign to a readonly property
// Playlist.maxSongCount = 20;

// // Property getters and setters

// interface StockItem {
//     description: string;
//     asin: string;
// }

// class WarehouseLocation {
//     private _stockItem: StockItem;

//     constructor(public aisle: number, public slot: string) {

//     }

//     get stockItem() {
//         return this._stockItem;
//     }

//     set stockItem(item: StockItem) {
//         this._stockItem = item;
//     }
// }

// const figure = { asin: 'BOO1TEQ2PI', description: 'Figure'};

// const warehouseSlot = new WarehouseLocation(15, 'A6');

// warehouseSlot.stockItem = figure;


// // C L A S S  H E R I T A G E 

// // A class can implement an interface using the implements keyword and a class can inherit 4rm another class using the extends keyword.

// interface Audio {
//     play(): any;
// }

// class Song implements Audio {
//     constructor(private artist: string, private title: string){
//     }

//     play(): void {
//         console.log('Playing ' + this.title + 'by ' + this.artist);
//     }

//     static Comparer(a: Song, b: Song) {
//         if (a.title === b.title) {
//             return 0;
//         }

//         return a.title > b.title ? 1 : -1;
//     }
// }

// class Playlist {
//     constructor(public songs: Audio[]){
//     }

//     play() {
//         var song = this.songs.pop();
//         song.play();
//     }

//     sort() {
//         this.songs.sort(Song.Comparer);
//     }
// }

// class RepeatingPlaylist extends Playlist {
//     private songIndex = 0;

//     constructor(songs: Song[]) {
//         super(songs);
//     }

//     play() {
//         this.songs[this.songIndex].play;

//         this.songIndex++;

//         if (this.songIndex >= this.songs.length) {
//             this.songIndex = 0;
//         }
//     }
// }


// // A B S T R A C T   C LA S S E S 

// // Abstract class

// abstract class Logger {
//     abstract notify(message: string): void;

//     protected getMessage(message: string): string {
//         return `Information: ${new Date().toUTCString()} ${message}`;
//     }
// }

// class ConsoleLogger extends Logger {
//     notify(message) {
//         alert(this.getMessage(message));
//     }
// }

// class InvasiveLogger extends Logger {
//     notify(message) {
//         alert(this.getMessage(message));
//     }
// }


// let logger: Logger;

// // Error. Cant create an instance of an abstract class
// logger = new Logger();

// // Create an instance of a sub-class
// logger = new InvasiveLogger();

// logger.notify('Hello World')



/////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\


// // Lost context

// // registerClick works wen cald against ClickCounter inst howeva when assgnd to onclick event, the context is lost.

// class ClickCounter {
//     private count = 0;

//     registerClick() {
//         this.count++;
//         alert(this.count);
//     }
// }

// const clickCounter = new ClickCounter();

// document.getElementById('target').onclick = clickCounter.registerClick;

// // following ways to preserve the context

// // Property and Arrow Function

// // Preserving context with a closure......

// document.getElementById('target').onclick = function() { clickCounter.registerClick(); }

// // Preserving Context with ESMA Script 5  bind function

// const clickHandler = clickCounter.registerClick.bind( clickCounter );

// document.getElementById('target').onclick = clickHandler;


// // E V E N T  C A P T U R I N G 

// // Preserving context and capturing the event

// class ClickCounter {
//     private count = 0;

//     registerClick(id: string) {
//         this.count++;
//         alert(this.count);
//     }
// }

// const clickCounter = new ClickCounter();

// document.getElementById('target').onclick = (e) => {
//     const target = <Element>e.target || e.srcElement;
//         clickCounter.registerClick(target.id);
//     }


// // C H O O S I N G  A   S O L U T I O N

// // Using the instanceof operator

// class Display {
//     name: string = '';
// }

// class Television extends Display {

// }

// class HiFi {

// }

// const display = new Display();
// const television = new Television();
// const hifi = new HiFi();

// let isDisplay;

// //true
// isDisplay = display instanceof Display;

// //true (inherits from Display)
// isDisplay = television instanceof Display;

// //false
// isDisplay = hiFi instanceof Display;


// // The in property

// let hasName;

// //true
// hasName = 'name' in display;

// //true
// hasName = 'name' in television;

// //false
// hasName = 'name' in hiFi;

// // Unitialized Property

// class Display {
//     name: string;
// }

// const display = new Display();

// //false
// const hasName = 'name' in display;

// // Obtaining runtime types

// const tv = new Television();
// const radio = new HiFi();

// //Television 
// const tvType = tv.constructor.name;

// //HiFi
// const radioType = radio.constructor.name;


// Generics

// allows the types to b specified later. in TS, generic functions, methods, interfaces, classes can b created.....

// // G E N R I C  F U N C T I O N S 

// function reverse<T>(list: T[]): T[] {
//     const reversedList: T[] = [];

//     for (let i = (list.length - 1); i >= 0; i--) {
//         reversedList.push(list[i]);
//     }

//     return reversedList;
// }

// const letters = ['a', 'b', 'c', 'd', 'e', 'f']

// // f,e,d,c,b,a
// const reversedLetters = reverse<string>(letters);

// const numbers = [1, 2, 3, 4];

// // 4, 3, 2, 1
// const reversedNumbers = reverse<number>(numbers);

// // G E N E R I C  I N T E R F A C E S

// class CustomerId {
//     constructor(private customerIdValue: number){
//     }

//     get value() {
//         return this.customerIdValue;
//     }
// }

// class Customer {
//     constructor(public id: CustomerId, public name: string) {

//     }
// }

// interface Repository<T, TId> {
//     getById(id: TId): T;
//     persist(model: T): TId;
// }

// class CustomerRepository implements Repository<Customer, CustomerId> {
//     constructor(private customers: Customer[]) {

//     }
//     getById(id: CustomerId) {
//         return this.customers[id.value];
//     }

//     persist(customer: Customer) {
//         this.customers[customer.name.value] = customer
//         return customer.id;
//     }
// }


// // G E N E R I C   C L A S S E S 

// class DomainId<T> {
//     constructor(private id: T) {

//     }

//     get value(): T {
//         return this.id;
//     }
// }

// class OrderId extends DomainId<number> {
//     constructor(orderIdValue: number) {
//         super(orderIdValue);
//     }
// }

// class AccountId extends DomainId<number> {
//     constructor(accountIdValue: number) {
//         super(accountIdValue);
//     }
// }

// // e.g.,s of compatibility

// function onlyAcceptsOrderId(orderId: OrderId) {
//     //...
// }

// function acceptsAnyDomainId(id: DomainId<any>) {
//     //...
// }

// const accountId = new AccountId('GUID-1');
// const orderId = new OrderId(5);

// // Error: Argument of type 'AccountId' is not assignable to parameter of type 'OrderId'
// onlyAcceptsOrderId(accountId);

// //OK
// onlyAcceptsOrderId(orderId);

// //OK
// acceptsAnyDomainId(accountId);


// //Type Constraints

// //e.g.,

// interface HasName {
//     name: string;
// }

// class Personalization {
//     static greet<T extends HasName>(obj: T) {
//         return 'Hello' + obj.name
//     }
// }


// TypeScript Features

// Key Points

// All Js is valis TS.

// Primitive Types are closely linked to JS primitve types.

// Types are inferred in TS, but u can supply annotations to make types explicit or deal with cases the compiler cant handle.....

// Interfaces can be used 2 describe complicated strcutures, to make type annotations shorter....

// All Ts arrays are generic.....

// enums can be used as bit flags.

// Special cases where type coercion applies, but in most cases type checking will generate errors 4 invalid use of types.....

// Optional, default and rest parameters can be added to functions and methods.....

// Arrow functions provide a short syntax for declaring functions, but can also be used to preserve the lexical scope.

// Enums, interfaces, and modules are open, so multiple declarations that have the same name in the same common root will result in a single definition/

// Classes bring structure to ypur Ts prog & make it posible to use common design patterns......

// Type Information can be obtained at runtime, ought 2 be done responsibly





























































