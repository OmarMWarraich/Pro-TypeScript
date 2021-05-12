// CHAPTER 2- C O D E   O R G A N I Z A T I O N

// It is not the language that makes programs appear simple. It is the programmer that makes the language appear simple.(Robert C Martin)

// A namespace => aka internal module => creates context 4 identifiers, reducing naming collusions in ur program
//                & providing a mechanism to organize your code into logical schemes. A namespace adds only 1 item
//                2 da global scope; & dis item provides a hierarchical mechanism 4 accessing everything that is 
//                made public within the namespace.


// A module  => aka external module => isolated context; adds no items to the global scope => A module may import
//              other modules and export members that can be used outside of the module. Modules r supported
//              by a module loader, with various options available 2 load modules in browsers, and with the common
//              JS loader found on web servers running Node.

// A package => a mechanism 2 deliver a no of code files for consumption with another program. This

// // N A M E S P A C E S

// // group related features together. group var, fn, obj, cla, inters into ns, keep dem out of global scope(gs)
// // & avoid naming collisions, although root of each namespace added to the global scope.
// // open ended. same name. common root. described in multi files allow each file to maintainable size.

// //e.g.

// namespace First {
//     export class Example {
//         log(){
//             console.log('Logging from First.Example.log()');
//         }
//     }
// }

// namespace Second {
//     export class Example {
//         log(){
//             console.log('Logging from Second.Example.log()');
//         }
//     }
// }

// const first = new First.Example();

// // Logging from First.Example.log()
// first.log();

// const second = new Second.Example();

// // Logging from Second.Example.log()
// second.log();

// // Nested and dotted hierarchies

// namespace FirstLevel {
//     export namespace SecondLevel {
//         export class Example {

//         }
//     }
// }

// namespace FirstLevel.SecondLevel.ThirdLevel {
//     export class Example {

//     }
// }

// // const netted = new FirstLevel.SecondLevel.Example();
// // const dotted = new FirstLevel.SecondLevel.ThirdLevel.Example();

// // Public and Private members

// namespace Shipping {
//     // Available as Shipping.Ship
//     export interface Ship {
//         name: string;
//         port: string;
//         displacement: number;
//     }

//     // Available as Shipping.Ferry
//     export class Ferry implements Ship {
//         constructor( 
//             public name: string,
//             public port: string,
//             public displacement: number) {
//             }
//     }
//     // Only available inside of the Shiiping module
//     const defaultDisplacement = 4000;

//     class PrivateShip implements Ship {
//         constructor(
//             public name: string,
//             public port: string,
//             public displacement: number = defaultDisplacement) {
        
//     }
// }
// }

// const ferry = new Shipping.Ferry('Assurance', 'London', 3220);

// // Import alias

// namespace Docking {
//     import Ship = Shipping.Ship;

//     export class Dock {
//         private dockedShips: Ship[] = [];

//         arrival(ship: Ship) {
//             this.dockedShips.push(ship);
//         }
//     }
// }

// const dock = new Docking.Dock();

// // // Namespace/ class merging

// // class Car {

// // }

// // namespace Car {
// //     export class Engine {

// //     }

// //     export class GloveBox {

// //     }
// // }

// // const car = new Car();
// // const engine = new Car.Engine();
// // const gloveBox = new Car.GloveBox();

// // Better to use modules as smodules add nothing to global scope, provide a sol to naming  conflicts,
// // can be loaded asynchronously on demand.

// //  M O D U L E S 

// export interface Ship {
//     name: string;
//     port: string;
//     displacement: number;
// }

// export class Ferry implements Ship {
//     constructor(
//         public name: string,
//         public port: string,
//         public displacement: number) {

//         }
// }

// const defaultDisplacement = 4000;

// class PrivateShip implements Ship {
//     constructor(
//         public name: string,
//         public port: string,
//         public displacement: number = defaultDisplacement) {
//         }   
// }

// // Importing modules

// // Import shipping module as above example statement below;

// import * as Shipping from './';

// export class Dock {
//     private dockedShips: Shipping.Ship[] = [];

//     arrival(ship: Shipping.Ship) {
//         this.dockedShips.push(ship);
//     }
// }


// // Importing named module members

// // Import a single export from a module

// import { Ship } from './Listings[0]';

// export class Dock {
//     private dockedShips: Ship[] = [];

//     arrival(ship: Ship) {
//         this.dockedShips.push(ship);
//     }
// }

// // Import using an alias

// import { Ship as Boat } from './Listings[0]';

// export class Dock {
//     private dockedShips: Boat[] = [];

//     arrival(ship: Boat) {
//         this.dockedShips.push(ship);
//     }
// }


// // Module Re-Exporting

// // Re-export with an alias

// export { Ship as Boat } from './Listings[0]';

// // Re-export an entire module

// export * from './Listings[0]'

// // Default Exports


// export default class Yacht {
//     constructor(
//         public name: string,
//         public port: string,
//         public displacement: number){
//         }
// }

// // Import a default export

// import Yacht from './Yacht';

// // Error: Module has no default export

// import Ship from './Ship';

// const Yacht = new Yacht('The Sea Princess', 'Tadley', 150)

// // E X P O R T S   O B J E C T

// // Export object

// class Ferry {
//     constructor(
//         public name: string,
//         public port: string,
//         public displacement: number){
//         }
// }

// export = Ferry;

// // Importing an export object

// import Ferry = require('./');

// const ferry = new Ferry('Dartmouth Ferrry', 'Darthmouth', 580)


// M O D U L E   L O A D I N G \\ 
//..............................\\

// Dynamic Module Loading  => avoid unnecessary network calls & file system access using dynamic module loading

// // declaration for the require function (Node)

// declare function require(moduleName: string): any;

// // Import - doesnt actually emit code

// import { Ferry } from './';

// const condition = true;

// if (condition) {
//     // Only imports if the condition is true

//     const ferry: typeof Ferry = require(./);

//     const myFerry = new ferry('','',0);
// }

// // Dynamic Module loading system modules

// // Declaration for the require function (System JS)
// declare const System: { import(module: string): Promise<any>;}

// // Import - doesnt actually emit code

// import { Ferry } from './';

// const condition = true;

// if(condition) {
//     // Only imports if the condition is true
//     System.import('./').then((ferry: typeof Ferry) => {
//         const myFerry = new ferry('','',0);
//     })
// }


