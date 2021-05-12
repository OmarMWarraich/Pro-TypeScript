////////////////U N D E R T A N D I N G    T H E    R U N T I M E\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//The difference bwtween a bad programmer and a good programmer is understanding. That is, bad programmers don't understand
// what they are doing and good programmers do.     ---Max Kanat-Alexander

// // Queued Timer

// function test() {
//     const testStart = performance.now();

//     window.setTimeout(function () {
//         console.log(performance.now() - testStart)
//     }, 50);
// }

// test();

// // Queued Timer, delayed, waiting for the test method to finish

// function test() {
//     const testStart = performance.now();

//     window.setTimeout(function () {
//         console.log(performance.now() - testStart)
//     }, 50);

//     //Simulated long running process

//     const start = +new Date();
//     while (+new Date() - start < 100) {
//         // Delay for 100ms
//     }
// }

// test();


///////////////////////////S  C  O  P  E\\\\\\\\\\\\\\\\\\\\\\\\\\\

// // C-like scope

// var scope = 1;

// {
//     var scope = 2;
//     //Inner: 2
//     console.log('Inner: ' + scope);
// }
// //Outer: 1
// console.log('Outer: ' + scope);

// // Funtional scope

// var scope = 1;

// (function () {
//     var scope = 2;

//     //Inner: 2
//     console.log('Inner ' + scope);
// }());
// //Outer: 1
// console.log('Outer: ' + scope);

// //Down-level compilation of block-scoped variables

// var scope = 1;
// {
//     var scope_1 = 2;
//     //Inner: 2
//     console.log('Inner: ' + scope_1);
// }
// //Outer: 1
// console.log('Outer: ' + scope);

// // Variable Hoisting

// function lemur() {
//     //undefined, but technically allowable
//     console.log(kind);
//     var kind = 'Ruffed Lemur';
// }
// lemur();

// // Variable Hoisting and Global Scope Confusion

// var kind = 'Ring Tailed Lemur';

// function lemurr() {
//     //undefined, not 'Ring Tailed Lemur'

//     console.log(kind);
//     var kind = 'Ruffed Lemur';
// }

// lemurr();


//////////////////////////C   A   L   L   L  B   A   C   K   S\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// A callback is simply a function that you pass as an argument, and which is called when an opertion has completed.

// Although callbacks are commonly used to avoid blocking the program during a long running process, u can freely
// pass a fn as an arg anywhere in ur program. The callback parameter has a type annotation that restricts the fns
// that can be passed to only those that accept a string argument. The callbackFunction satisfies this type annotation.

// // Passing a function as an argument.

// function go(callback: (arg: string) => void) {
//     callback.call(this, 'Example Argument');
// }

// function callbackFunction(arg: string) {
//     alert(arg);
// }

// go(callbackFunction);

// // Using apply

// function goto(callback: (arg: string) => void) {
//     callback.apply(this, ['Example Argument']);
// }

// function callbaqFunction(arg: string) {
//     alert(arg);
// }
// goto(callbaqFunction);

// // Simply function call  // doesnt allow the context to be set

// function go(callback: (arg: string) => void) {
//     callback.call('Example Argument');
// }

// function callbackFunction(arg: string){
//     alert(arg);
// }

// go(callbackFunction);

// // Using apply to convert array to arguments array

// const numbers = [3, 11, 5, 7, 2];

// // A fragile way of finding the maximum number
// // const max = Math.max(numbers[0], numbers[1], numbers[2], numbers[3], numbers[4]);

// // A solid way to find the maximum
// const max = Math.max.apply(null, numbers);

// //11 
// console.log(max);


// // Passing Functions as arguments

// // Simple Observer

// interface Subscriber {
//     (message: string): void;
// }

// class Publisher {
//     private subscribers: Subscriber[] = [];

//     addSubscriber(subscriber: Subscriber) {
//         this.subscribers.push(subscriber);
//     }

//     notify(message: string) {
//         for (let subscriber of this.subscribers){
//             subscriber(message);
//         }
//     }
// }

// const publisher = new Publisher();

// // Using an arrow function 
// publisher.addSubscriber((message) => console.log('A: ' + message));


// //Using an inline function
// publisher.addSubscriber(function (message) {
//     console.log('B: ' + message);
// });

// //A: Test message
// //B: Test message

// publisher.notify('Test message');


///////////////////////////P   R   O   M   I   S   E   S\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\



////////////////////S   I   M    P    L   E       C   A   L   L   B   A   C   K   S\\\\\\\\\\\\\\\\\\\\\\\\

// starting point for our fictitious API that asynchronously obtains some data. The getData method takes an id, 
// and a callback that will be executed once the data is available. 

// // Fictitious API v1.0

// interface FictitiousData {
//     id: number;
//     name: string;
// }

// class FictitiousAPI {
//     static data: {[index: number]: FictitiousData} = {
//         1: { id: 1, name: 'Aramis'},
//         2: { id: 2, name: 'Athos'},
//         3: { id: 3, name: 'Porthos'},
//         4: { id: 4, name: 'D\'Artagnan'},
//     };

//     static getData(id: number, callback: (data: FictitiousData) => void) {
//         //Simulating async data access with a timeout
//         window.setTimeout(() => {
//             const result = this.data[id];

//             if (typeof result == 'undefined') {
//                 throw new Error('No matching record')
//             }
//             callback(result);
//         }, 200);
//     }
// }

// // Single Call

// FictitiousAPI.getData(1, function(data) {
//     console.log(data.name);
// });


// // Error Handling

// // Error handling (doesnt work)
// try {
//     FictitiousAPI.getData(5, function (data) {
//         console.log(data.name);
//     })
// } catch (ex) {
//     console.log('This statement is not reached, the error is not caught!');
// }

// // Nested callbacks

// FictitiousAPI.getData(1, (data) => {
//     console.log(data.name);

//     FictitiousAPI.getData(2, (data) => {

//         if (data.name == 'Athos') {
//             console.log(data.id + ' ' + data.name);
//         } else {
//             console.log(data.name);
//         }

//         FictitiousAPI.getData(3, (data) => {
//             console.log(data.name);

//             FictitiousAPI.getData(4, (data) => {
//                 console.log(data.name);

//                 FictitiousAPI.getData(5, (data) => {
//                     console.log(data.name);
//                 })
//             });
//         });
//     });
// });

// // Output the
// Aramis
// 2 Athos
// Porthos
// D'Artagnan
// Error: No matching record


//////////////C A L L B A C K S   &    E R R O R H A N D L I N G\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// // Fictitious API v2.0


// interface FictitiousData {
//     id: number;
//     name: string;
// }

// class FictitiousAPI {
//     static data: {[index: number]: FictitiousData} = {
//         1: { id: 1, name: 'Aramis'},
//         2: { id: 2, name: 'Athos'},
//         3: { id: 3, name: 'Porthos'},
//         4: { id: 4, name: 'D\'Artagnan'},
//     };

//     static getData(id: number, callback: (error: string, data: FictitiousData) => void) {
//         //Simulating async data access with a timeout
//         window.setTimeout(() => {
//             const result = this.data[id];

//             if (typeof result == 'undefined') {
//                 throw new Error('No matching record')
//             }
//             callback(null, result);
//         }, 200);
//     }
// }

// // Single Call with error handling
// //Single Call: Aramis

// FictitiousAPI.getData(1, function(error, data) {
//     if(error) {
//         console.log('Caught ' + error);
//         return;
//     }
//     console.log(data.name);
// });


// //  WORKING Error Handling

// // Error handling 
// FictitiousAPI.getData(5, function (error, data) {
//     if (error) {
//         console.log('Caught ' + error);
//         return;
//     }
//     console.log(data.name);
// })

// // Nested callbacks with error handling

// FictitiousAPI.getData(1, (error, data) => {
//     if (error) {
//         console.log('Caught ' + error);
//         return;
//     }
//     console.log(data.name);

//     FictitiousAPI.getData(2, (error, data) => {
//         if (error) {
//             console.log('Caught ' + error);
//             return;
//         }
//         if (data.name == 'Athos') {
//             console.log(data.id + ' ' + data.name);
//         } else {
//             console.log(data.name);
//         }

//         FictitiousAPI.getData(3, (error, data) => {
//             if (error) {
//                 console.log('Caught ' + error);
//                 return;
//             }
            
//             console.log(data.name);

//             FictitiousAPI.getData(4, (error, data) => {
//                 if (error) {
//                     console.log('Caught ' + error);
//                     return;
//                 }
//                 console.log(data.name);

//                 FictitiousAPI.getData(5, (error, data) => {
//                     if (error) {
//                         console.log('Caught ' + error);
//                         return;
//                     }
//                     console.log(data.name);
//                 })
//             });
//         });
//     });
// });


// // Output as b4 ; the error being handled now.
// Aramis
// 2 Athos
// Porthos
// D'Artagnan
// Caught: No matching record



/////////////////////////////P   R   O   M   I    S    E    S\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// // // Fictitious API v3.0

// interface FictitiousData {
//     id: number;
//     name: string;
// }

// class FictitiousAPI {
//     static data: {[index: number]: FictitiousData} = {
//         1: { id: 1, name: 'Aramis'},
//         2: { id: 2, name: 'Athos'},
//         3: { id: 3, name: 'Porthos'},
//         4: { id: 4, name: 'D\'Artagnan'},
//     };

//     static getData(id: number){
//         return new Promise((fulfil: (data: FictitiousData) => void, reject: (reason: string) => void) =>{
//             //Simulating async data access with a timeout
//             window.setTimeout(() => {
//                 const result = this.data[id];
    
//                 if (typeof result == 'undefined') {
//                     reject('No matching record')
//                 }
//                 fulfil(result);
//             }, 200);
//         });
        
//     }
// }
// // above we r given a promise, wen we call the getData method. 

// // Single Call with then
// // Single Call: 'Aramis

// FictitiousAPI.getData(1)
//     .then(function(data) {
//     console.log(data.name);
// });


// // Error Handling with catch

// // Error handling (works)

//     FictitiousAPI.getData(5)
//         .then(function (data) {
//         console.log(data.name);
//     })
//     .catch (function(error) {
//     console.log('Caught ' + error);
// })

// // Promise chain

// FictitiousAPI.getData(1) 
//     .then((data) => {
//     console.log(data.name);
//     return FictitiousAPI.getData(2);
//     })
//     .then((data) => {
//         if (data.name == 'Athos') {
//             console.log(data.id + ' ' + data.name);
//         } else {
//             console.log(data.name);
//         }

//         return FictitiousAPI.getData(3);
//     })
//     .then((data) => {
//         console.log(data.name);
//         return FictitiousAPI.getData(4)
//     })
//     .then((data) => {
//         console.log(data.name);
//         return FictitiousAPI.getData(5)
//     })        
//     .catch((error) => {
//         console.log('Caught ' + error);
//     });

// // Output same as b4 but the program is far easier to read.
// // Aramis
// // 2 Athos
// // Porthos
// // D'Artagnan
// // Error: No matching record


/////////////////////M  U  L  T  I  P  L  E    P  R  O  M  I  S  E  S\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// //Promise.all

// Promise.all([
//     FictitiousAPI.getData(1),
//     FictitiousAPI.getData(2),
//     FictitiousAPI.getData(3),
//     FictitiousAPI.getData(4),
// ]).then((values) => {
//     for (let val of values) {
//         console.log(val.name);
//     }
//     }).catch((error) => {
//         console.log('Caught ' + error);
//     })


////////////////F  A  S  T  E  S  T   P  R  O  M  I  S  E\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//Promise.race method


// Promise.race([
//     FictitiousAPI.getData(1),
//     FictitiousAPI.getData(2),
//     FictitiousAPI.getData(3),
//     FictitiousAPI.getData(4),
// ]).then((data) => {
//         console.log(data.name);
//     }).catch((error) => {
//         console.log('Caught ' + error);
//     })



/////////////////////F  E  T  C  H   A   P  I\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// fetch('./api/musketeers.json')
//     .then((response) => {
//         if (response.status !== 200) {
//             // Status code not likely to be useable, i.e. a redirect or an error
//             console.log('Status Code:', response.status);
//             return;
//         }

//         return response.json();
//     }).then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         // i.e. network failure
//         console.log('Error making request', error);
//     });


///////////////////////////E     V    E    N    T    S\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// Events are handled across two distinct phases-capturing and bubbling.

//1. During capturing, the event is sent to the topmost elements in the document hierarchy first and then
//   to more deeply nested elements. 

//2. During bubbling, it is sent to the target element first and then to its ancestors.

// //Event Listeners

// class ClickLogger {
//     constructor() {
//         document.addEventListener("click", this.eventListener;)
//     }
//     eventListener(e: Event) {
//         //3 (Bubbling Phase)
//         const phase = e.eventPhase;

//         const tag = (<HTMLElement>e.target).tagName;

//         console.log(`Click event in phase ${phase} detected on element ${tag} by ClickLogger.`);
//     }
// }

// const clickLogger = new ClickLogger();

// // Click event detected on element DIV by ClickLogger
// // Click event detected on element P by ClickLogger
// // Click event detected on element BLOCKQUOTE by ClickLogger
// // Click event detected on element FOOTER by ClickLogger

// // Cross-Browser Events

// function addEventCrossBrowser(element, eventName, listener) {
//     if (element.addEventListener) {
//         element.addEventListener(eventName, listener, false);
//     } else if (element.attachEvent) {
//         element.attachEvent('on' + eventName, listener);
//     }
// }

// class ClickLogger {
//     constructor(){
//         addEventCrossBrowser(document, 'click', this.eventListener);
//     }
//     eventListener(e: Event) {
//         //3 Bubbling Phase
//         const phase = e.eventPhase;

//         const tag = (<HTMLElement>e.target).tagName;
        
//         console.log('Click event detected on element ' + tag + ' by ClickLogger.');
//     }
// }
// const clickLogger = new ClickLogger();


// Event Phases

// An event is dispatched tpo an event target along a propagation path that flows from the root of the document
// to the target element. 

////////////////////E  X  T  E  N  D  I  N  G      O  B  J  E C T S      I  N     J  S\\\\\\\\\\\\\\\\\\\\\\\


// NodeList.prototype.each = function (callback) {
//     for (let node of this) {
//         callback.call(node);
//     }};

//     const getParagraphText = function() {
//         console.log(this.innerHTML);
//     };

//     const paragraphs = document.querySelectorAll('p');
//     paragraphs.each(getParagraphText);

////////////////////E  X  T  E  N  D  I  N  G      O  B  J  E C T S      I  N     T  S\\\\\\\\\\\\\\\\\\\\\\\

// interface NodeList {
//     each(callback: () => any): void;
// }

// NodeList.prototype.each = function (callback) {
//     for (let node of this) {
//         callback.call(node);
//     }
// };

// const getParagraphText = function () {
//     console.log(this.innerHTML);
// };

// const paragraphs = document.querySelectorAll('p');
// paragraphs.each(getParagraphText);

// // Improved TypeScript object extensions


// interface NodeList {
//     each(callback: (element: HTMLElement) => any): void;
// }

// interface NodeListOf<TNode extends Node> {
//     each(callback: (element: TNode) => any): void;
// }

// NodeList.prototype.each = function (callback: (elem: HTMLElement) => any) {
//     for (let node of this) {
//         callback.call(node);
//     }
// };

// const getParagraphText = function (elem: HTMLParagraphElement) {
//     console.log(elem.innerHTML);
// };

// const paragraphs = document.querySelectorAll('p');
// paragraphs.each(getParagraphText);

// //Turning an extension into a polyfill

// if (!NodeList.prototype.each) {
//     NodeList.prototype.each = function (callback: (elem: HTMLElement) => any) {
//         for (let node of this) {
//             callback.call(node, node);
//         }
//     };
// }

// // S E A L I N G    O B J E C T S


// // Extended Instance

// class Lemur {
//     constructor(public name: string) {

//     }
// }

// const lemur = new Lemur('Sloth Lemur');

// // new property 

// lemur.isExtinct = true;

// //true
// console.log(lemur.isExtinct);

// class Lemur {
//     constructor(public name: string) {

//     }
// }

// const lemur = new Lemur('Sloth Lemur');

// Object.seal(lemur.isExtinct);

// // new property 
// lemur.isExtinct = true;

// //undefined
// console.log(lemur.isExtinct);

///////////////////////////K   E   Y      P   O   I   N   T   S\\\\\\\\\\\\\\\\\\\\\\\\\


// Avoid the functionally scoped var keyword as TypeScript makes block-level variables available even for 
// older versions of JavaScript.

// Callbacks can help to avoid blocking the main thread.

// Events can prevent tight coupling, whether using native events on your own publisher.

// You can extend all JS objects and almost eth in JS is an obj.

// You can seal or freeze objects to prvent further changes. The

// You can polyfill missing behaviour to make new features availabel on old platforms.