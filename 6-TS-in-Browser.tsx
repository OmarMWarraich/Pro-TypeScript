////////////////////////////////C   H   A   P   T   E   R   -   6\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//////////R  U  N  N  I  N  G     T  Y  P  E  S  C  R  I  P  T     I  N    A    B  R  O  W  S  E  R\\\\\\\\\\\\

// All modern web browsers-on desktops, game consoles, tablets and smart phones-include JavaScript interpreters
// making JavaScript the most ubiquitous programming language in history.      - David Flanagan.

// // F I N D I N G   D O M   E L E M E N T 

// // HTMLElement
// const a = document.getElementById('content');

// // Element
// const b = document.querySelector('#content');

// // HTMLDivElement (due to type assertion)
// const c = <HTMLDivElement>document.querySelector('#content');


// G E T T I N G   E L E M E N T S   B Y   H T M L   T A G

// //NodeListOf<HTMLDivElement>
// const elements = document.getElementsByTagName('div');

// // HTMLDivElement
// const a = elements[0];


// G E T T I N G   E L E M E N T S    U S I N G    C S S   S E L E C T O R 

// //NodeListOf<Element>
// var elements = document.querySelectorAll('#content');

// // Element
// var a = elements[0];

// // HTMLDivElement
// var b = <HTMLDivElement>elements[0];


// // G E N E R I C   W R A P P E R   F U N C T I O N S

// function QueryOf<T extends Element>(query: string){
//     return <T>document.querySelector(query);
// }

// const elem = QueryOf<HTMLDivElement>('div#content');

//     function QueryAllOf<T extends Element>(query: string){
//         return <NodeListOf<T>>document.querySelectorAll(query);
//     }

// const elems = QueryAllOf<HTMLDivElement>('div');


// // U P D A T I N G   T H E   E L E M E N T'S   H T M L

// const element = <HTMLDivElement>document.querySelector('#content');

// element.innerHTML ='<span>Hello World!</span>';


// // U S I N G   A P P E N D C H I L D

// const element = <HTMLDivElement>document.querySelector('#content');

// // Create and add the first element

// const newElement1 = document.createElement('div');
// newElement1.textContent = 'Hello World!';

// element.appendChild(newElement1);

// // Create and add the second element

// const newElement2 = document.createElement('div');
// newElement2.textContent = 'Greetings Earth';
// element.appendChild(newElement2);


// //A P P E N D C H I L D    U S I N G    I N S E R T B E F O R E

// const element = <HTMLDivElement>document.querySelector('#content');

// const newElement2 = document.createElement('div');
// newElement2.textContent = 'Greetings Earth';
// element.insertBefore(newElement2, element.firstChild);


// F R A  M E W O R K S    A N D    L I B R A R I E S

//\\if you pick a noun and add .js or .io, you'll probably get a library.    --Martin Beeby

// npm install --save for dependencies
// npm install --save-dev for Devdependencies  (for packages that rnot reqd by downstream consumers of code)

//////////////////////////N    E    T    W    O    R    K\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//////////A  J  A  X\\\\\\\\\\\\\\\

// AJAX stands 4 asynchronous JS & XML. An AJAX request is initiated using JS in the browser. The req is sent
// 2 da server, which sends an HTTP response that cal include a body in plain text, JSON, HTML, XML or even a
// custom format. The HTTP req & response occur asynchronously, it doesnt block JS event loop.


// //HTTP Get method

// export class AJAX {
//     private readonly READY_STATUS_CODE = 4;

//     private isCompleted(request: XMLHttpRequest) {
//         return request.readyState === this.READY_STATUS_CODE;
//     }
//     httpGet(url: string) {
//         return new Promise<XMLHttpRequest>((resolve, reject) => {
//             // Create a request
//             const request = new XMLHttpRequest();

//             // Attach an event listener

//         request.onreadystatechange = () => {
//             if (this.isCompleted(request)) {
//                 resolve(request);
//             }
//         };
//         // Specify the HTTP verb and URL
//         request.open('GET', url, true);

//         // Send the request
//         request.send();
//         });
//     }
// }

// // HTTP Post method


// export class AJAX {
//     private readonly READY_STATUS_CODE = 4;

//     private isCompleted(request: XMLHttpRequest) {
//         return request.readyState === this.READY_STATUS_CODE;
//     }
// httpPost(url: string, data: string) {
//     return new Promise<XMLHttpRequest>((resolve, reject) => {
//         const request = new XMLHttpRequest();

//         request.onreadystatechange = () => {
//             if (this.isCompleted(request)) {
//                 resolve(request);
//             }
//         }

//         request.open('POST', url, true);
//         request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
//         request.send(data);
//     })
// }
// }

// // USING THE AJAX CLASS 

// //import { Ajax } from './';

// var ajax = new Ajax();

// // Making a  GET request

// ajax.httpGet('data.html')
//     .then((request) => {
//         document.getElementById('content').innerHTML = request.responseText;
//     });


// // Allowing CORS (cross-origin request sharing), client side

// const request = new XMLHttpRequest();
// request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
// //...


///////////////////////////W  E  B  S  O  C  K  E  T  S\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// The websocket specification establishes a persistent two-way communication channel between the server and the client
// that can be used to send messages in either direction. recieve and send msgs anytime without waiting to make connection.

// // Establishing a WebSocket Connection

// const webSocket = new WebSocket('ws://localhost:8080/WS');

// webSocket.onmessage = (message: MessageEvent) => {
//     // Log message from server
//     console.log(message.data);
// }

// webSocket.send('Message to Server');

// // When finished, end com by calling webSocket.close(). // The Definitve Guide to HTML5 WebSockets by Wang, Salim
// // and Moskovits(Apress, 2013)

// Real-Time Communications

// realtime p2p audio & video streaming. WebRTC. 

// // Display a Video Stream

// const constraints = {
//     audio: true,
//     video: {
//         width: 1280,
//         height: 720
//     }
// };

// const videoElement = document.createElement('video');
// videoElement.setAttribute('width', Math.floor(constraints.video.width / 2).toString());
// videoElement.setAttribute('height', Math.floor(constraints.video.height / 2).toString());
// document.body.appendChild(videoElement);

// navigator.mediaDevices.getUserMedia(constraints)
//     .then(function (mediaStream) {
//         const video = document.querySelector('video');
//         video.srcObject = mediaStream;
//         video.onloadedmetadata = function (e) {
//             video.play();
//         };
//     })
//     .catch(function (error) {
//         console.log(error.name, error.message);
//     });

//////////////////////////////////S   T   O   R   A   G   E\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// Storage on user's machine has come a long way since cookies, with their size limitations and terrible API.
// several available storage options with diff life spans, soft limirs and APIs for local data keep.
// Both session storage and local storage have an identical API, but they offer different life spans.
// However, IndexedDB offers a more advanced data storage mechanism. All three as folows;

////////////////S   E   S   S   I   O   N       S   T   O   R   A   G   E\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// // SS is attached 2 a page session(ps).  a ps starts when page is opened and continues even if the page is reloaded/
// // restored with a browser tab. separate tab or browser window results in a new page session.

// // ss APi is simple, => key/value pair 2 b stored with the setItem method. both key,value mst b strings, obj serialized
// // to a string 2 b stored.

// const storageKey = 'Example';

// // null the first ime, 'Stored value' each subsequent time
// console.log(sessionStorage.getItem(storageKey));

// sessionStorage.setItem(storageKey, 'Stored value');

// //getItem method is called b4 da item is set; when page first loads, the null value is logged, but on 
// // subsequent refreshes the stored value is logged(stays as long a page stays in the same tab).
// // If u open page in a new tab, once again null value logged. 

// // Removing and cleaning session storage

// // Remove an item using a key
// sessionStorage.removeItem(storageKey);

// // Clear all items
// sessionStorage.clear();


//////////////////////////////L   O   C   A   L      S   T   O   R   A  G   E\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// LS Api identical to ssAPI, bt da storage persists until deleted/cleared by user/privacy reasons. LS can also
// b accessed 4rm multiple pages on the same domain as well as in multiple bwowsers and tabs. 
// cos local storage items are shared across pages, tabs and browsers it can be used 2 store a cache of data 2
// reduce network traffic. cn also b usd 2 store user-entered data when no connection or 2 store data not to be 
// transmitted, e.g. temporary application state.

// // Local storage and events

// // script storing a value incl current date & time in ls. event listener attached to storage event, which 
// // fires whenever change is made in another tab/window.
// import {addEvent} from '';
// const storageKey = 'Example';

// localStorage.setItem(storageKey, 'Stored value '+ Date.now());

// addEvent(window, 'storage', (event: StorageEvent) => {
//     console.log(`${event.key} "${event.oldValue}" changed to "${event.newValue}"`);
// })


////////////////////////////I  N  D  E  X  E  D    D  B\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// allows much larger amount of data 2 b stored in a structured way allowing fast searches using indexes. 

// IndexedDB is designed to work asynchronously, which means you supply a callback to each method on the API
// dat executes when the op has completed. 

// IndexedDB API demonstrated using the Product class=> 2 public props(productId 2 b used as key for items stored in db)

// //Product.ts

// export class Product {
//     constructor(public productId: number, public name: string){
//     }
// }

// // empty ProductDatabase class expanded 2 perform db ops such as storing, retrieving and deleting products. 
// // reeducing dependency on the IndexedDB API in the program code.

// //Empty ProductDatabase.ts

// import { Product } from '.';

// export class ProductDatabase {
//     constructor(private name: string, private version: number){
//         //vers detects if local db needs upgrade. schema changes increment vers no. vers no. mst be integer.
//     }
// }

// // Upgrade constructor for the ProductDatabase class issung req 2 open db & adds listener 2 the onupgradeneeded event.
// // If an upgrade needed, the update method is called.

// // ProductDatabase supporting upgrades.

// import {Product} from './';

// export class ProductDatabase {
//     constructor (private name: string, private version: number) {
//         const openDatabaseRequest = indexedDB.open(this.name, this.version);
//         openDatabaseRequest.onupgradeneeded = this.upgrade;
//     }

//     upgrade(event: any) {
//         const db = event.target.result;

//         // The keyPath specifies the property that contains the id
//         const objectStore = db.createObjectStore("products", {keyPath: 'productId'});

//         objectStore.createIndex('name', 'name', { unique: false});

//         objectStore.transaction.oncomplete = () => {
//             // Example static data
//             const products = [
//                 new Product(1, 'My first Product'),
//                 new Product(2, 'My second Product'),
//                 new Product(3, 'My third Product')
//             ];

//             // Add records

//             const productStore = db.transaction('products', 'readwrite')
//             objectStore('products');
//             for (let product of products) {
//                 productStore.add(product);
//             }
//         }
//     }
// }

// // Instantiating  a ProductDatabase

// import { ProductDatabase } from './';

// const versionNumber = 1;

// const db = new ProductDatabase('Example Database', versionNumber);


////////////////////////Q  U  E  R  Y  I  N  G     T  H  E    D  A  T  A  B  A  S  E\\\\\\\\\\\\\\\\\\\\\\\\\\\

// // A GETpRODUCT METHOD FOR THE PRODUCTdATABASE CLASS, handling the db opening request, transactions and queries. 
// // This allows calling code to simply pass the productId and a callback to process the result.

// //getProduct method.

// getProduct(productId: number, callback: (result: Product) => void) {
//     //Open the database
//     const openDatabaseRequest = indexedDB.open(this.name, this.version);

//     openDatabaseRequest.onsuccess = () => {
//         // the database is open
//         const db = openDatabaseRequest.result;

//         // Start a transaction on the products store
//         const productStore = db.transaction(['products']).objectStore('products');

//         // Request the query

//         const query = productStore.get(productId);
//         query.onsuccess = () => {
//             callback(query.result);
//         };
//     };
// }

// // CALLING GETPRODUCT(productID => input is collected using the keyup event => getProduct method
// // alongwith a callback displaying the result on the web page if there is a matching record.)

// import { addEvent } from './above'
// import {product } from './above'
// import {ProductDatabase} from './above'

// const db = newProductDatabase('ExamplesDatabase', 1);

// // Wait for entry in the productId input

// addEvent(document.getElementById('productId'), 'keyup', function(){
//     // Get the id entered by the user, convert 2 number.
//     const productId = +this.value;

//     // Search the database with the id
//     db.getProduct(productId, (product) => {
//         document.getElementById('content').innerHTML = product ? 
//             `The result for product id: ${product.productId} is: ${product.name}` :
//             'No result';
//     });
// });

//Running the examle will show that despite some of the code appearing a little complex, the retrieval of records
//os blistering fast coz no network round trip is reqd. Data also avail offline, which means ur program can continue
// to work without a connection.


////////////////A  D  D  I  N  G        A        N   E   W        R   E   C   O   R   D\\\\\\\\\\\\\\\\\\\\\\

// SLIGHTLY SIMPOOLER THAN OBTAINING A RECORD WITH A QUERY. reqs one less callback. gen pattern same. req a 
// connection and starting a transaction inside the success callback.

// The product is then stored using the addmethod, which takes in the product object and automatically
// // finds the productId prop to use as the unique key as per the db config.

// //addProduct method

// addProduct(product: Product) {
//     //OPpen the db
//     const openDatabaseRequest = indexedDB.open(this.name, this.version);
    
//     openDatabaseRequest.onsuccess = () => {
//         // The databse is open

//         const db = openDatabaseRequest.result;

//         // Start a transaction on the prooducts store
//         const productStore = db.transaction('products', 'readwrite').
//     objectStore('products');

//         //Add the product
//         productStore.add(product);
//     };
// }

// // Calling a product

// import {Product} from './abo\ve';
// import {ProductDatabase} from './above'

// const db = new ProductDatabase('ExampleDatabase', 1);

// const newProduct = new Product(4, 'Newly added product');

// db.addProduct(newProduct);

////db avail offline. possible 2 store record withour a network connection and then later sync dem with server
/// when net avail. holding table or flag record 2 show when syncd. 

// Deleting a record

//  the method for deleting a record from the db. uniq key usd 2 identify the recrd 2 b removed. 
// once again ther is a need to open the database and open a transaction on the product store.

// // deleteProduct method.

// deleteProduct(productId: number) {
//     //Open the databse
//     const openDatabaseRequest = indexedDB.open(this.name, this.version);

//     openDatabaseRequest.onsuccess = (event: any) => {
//         //The database is open
//         const db = openDatabaseRequest.result;

//         // Start a transaction on the products store

//         const productStore = db.transaction('products', 'readwrite').objectStore('products');

//         // Add the Product
//         const deleteRequest = productStore.delete(productId);
//     };
// }

// // Calling deleteProduct

// import {Product} from './above';
// import {ProductDatabase } from './above';

// const db = new ProductDatabase('ExampleDatabaase', 1);

// db.deleteProduct(4);


////////////////I   D   B   R   E   Q   U   E   S   T        I   N   T   E   R   F   A   C   E\\\\\\\\\\\\\\\\\

// IndexedDB model suports this model be it indexedDB.open, objectStore.get, objectStore.add or objectStore.delete.
// The beauity of this conv is that u can add a listener to any of these ops to handle both success & error events.
// Within the event handler u can access the original request object, which contains the following info:-

// result-the result of the request, if available.
// error- the error message, if availabel.
// source-the index or object store, if applicable to the request.
// transition- the transaction for the request, if the request is within a transaction; u can undo the changes 
// in the transaction by calling transaction.abort()
// readyState- either pending or done.


// // IDBRequest convention

// deleteProduct(productId: number) {
//     // Open the database
//     const databaseRequest = indexedDB.open(this.name, this.version);

//     openDatabaseRequest.onsuccess = (event: any) => {
//         // the db is open
//         const db = openDatabaseRequest.result;

//         // Start a transaction on the products store.
//         const productStore = db.transaction('products', 'readwrite').objectStore('products');

//         // Add the product

//         const deleteRequest = productStore.delete(productId);

//         deleteRequest.onsuccess = () => {
//             console.log('Deleted OK');
//         }
//         deleteRequest.onerror = () => {
//             console.log('Failed to delete: ' + deleteRequest.error.name);
//         }
//     };
// }

///////////////////////////S  T  O  R  A  G  E     R  O  U  N  D  U  P\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//Any storage supplied by the browser should be treated as potentially volatile. 
// Many users 've diff devices accessing ur browser based app. syn vid server 4 ubiquitous exp across these dev.


////////////////////G   E   O   L   O   C   A   T   I   O   N\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//PROVIDES  MEChanism 4 obtaining the user's location no matter whether the user's device supports location
// using GPS or network based inference to dtmn actual loc.

// user's loc if dey grant ur app permission to acces the info, therefore, fallback mechanism to handle denied
// requests as well as older browsers and failed lookups. usu mech 4 obtaining a loc when geoloc fails is 2
// allow da user 2 enter a search term to find their location.

// e.g., showing one-off location lookup usng da getCurrentPosition method. If req appruvd & succeeds the 
// success callback 'll be called, with an arg containing the position info. The pos obj contains lat & long and
// can also contain additional data abt altitute, direction and speed, if availabel.

// ////Geoloation getCurrentPosition

// function success(pos: Position) {
//     console.log(' You are here: Lat=' + pos.coords.latitude +
//                 ' Long=' + pos.cords.altitude +
//                 ' Altitude=' + pos.coords.altitude +
//                 ' (Accuracy=' + pos.coords.altitudeAccuracy + ')' +
//                 ' Heading=' + pos.coords.heading +
//                 ' Speed=' + pos.coords.speed);
// }

// navigator.geolocation.getCurrentPosition(success);

// // You are here: Lat = 51.503 Long = 0.1197    // foot of London-eye
// // Altitude = 15 (Accuracy = 0)
// // Heading = 0 Speed = 0

// As well as obtaining a single reading of the user's position u can watch the postion for changes using the 
// watchPosition method. Listing 6-34 reuses the success callback fn 4rm the previous eg 2 listen 2 changes
// in da user's loc. Assuming user muvd btw top of London Eye & The Gherkin in 1 s @ 3379m/s. 
// The heading is represented by degrees with N being 0, E being 90, S 180, W 270 degrees.

// // Geolocation watchPosition

// function success(pos: Position) {
//     console.log(' You are here: Lat=' + pos.coords.latitude +
//                 ' Long=' + pos.cords.altitude +
//                 ' Altitude=' + pos.coords.altitude +
//                 ' (Accuracy=' + pos.coords.altitudeAccuracy + ')' +
//                 ' Heading=' + pos.coords.heading +
//                 ' Speed=' + pos.coords.speed);
// }

// // navigator.geolocation.getCurrentPosition(success);
// const watch = navigator.geolocation.watchPosition(success);

// You are here: Lat = 51.503 Long = 0.1197    // top of London-eye
// Altitude = 135 (Accuracy = 15)
// Heading = 0 Speed = 0

// You are here: Lat = 51.5144 Long = 0.0803    // top of the Gherkin
// Altitude = 135 (Accuracy = 15)
// Heading = 0 Speed = 0

// If u want to stop tracking the user's location, u can call the clearWatch method, passing in a ref to the 
// original watchPosition req 2 end listening to changes in location. 

// ////////////////C  L  E  A  R  I  N  G      A      W   A   T   C   H\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// navigator.geolocation.clearWatch(watch);

// ///// F A I L I N G   T O   O  B  T  A   I  N     T  H  E    L   O  C  A  T  I  O  N\\\\\\\\\\\\\\\\\\\\\\

// function succcess(){
//     console.log('Okay');
// }

// function error(){
//     console.log('Position information not available.');
// }

// const watch = navigator.geolocation.watchPosition(success, error);


//// Geolocation commonly used 2 customize a page based on the user's current location or 2 store the location
//// as metadata when the user performs an action such as posting a message.



//////////////////////////////////S    E    N    S    O    R    S\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//try out the device sensor evetns and APIs on a device vid approp sensors, and a browser that has implemented 
// the standard. e.g., u can try motion and orientation, light and proximity on a Google Pixel running the
// Firefox browser.




///////////////////////B   A   T   T   E   R   Y         S   T   A   T   U   S\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// to get autocompletion and typechecking for battery status API, supply a type definition containing 2 interfaces.
// 1- The BatteryManager interface- containing props and e's making up da battery status API.
// 2- The Navigator Interface extends the existing interface in the TypeScript library to add the battery prop.


// ////Type Definitions for battery status.

// interface BatteryManager {
//     charging: boolean;
//     charginTime: number;
//     dischargingTime: number;
//     level: number;
//     onChargingchange: () => any;
//     onchargingtimechange: () => any;
//     ondischargingtimechange: () => any;
//     onlevelchange: () => any;
// }

// interface Navigator {
//     battery: BatteryManager;
//     mozBattery: BatteryManager;
//     webkitBattery: BatteryManager;
// }

// // To obtain info 4rm battery API , detect da presence of the feature b4 calling da props on battery manager.
// // battery level is supplied as a val btw 0 and 1 so u can obtain the % charge by multiplying dis val by 100.
// // All times given in the battery info are spplied in seconds which u can convert into min or hrs as reqd. The
// // charging flag indicates chargin or not.

// //..B  A  T  T  E  R  Y       S  T  A  T  U  S..\\

// const battery: BatteryManager = (<any>navigator).battery
//     ||  (<any>navigator).mozBattery
//     ||  (<any>navigator).webkitBattery;

// if (battery) {
//     const output = document.getElementById('content');

//     function updateBatteryStatus() {
//         // Gets the battery charge level
//         const charge = Math.floor(battery.level * 100) + '%';

//         //Detects wherher the battery is charginf
//         const charging = battery.chargin ? ' charging' : ' discharging';

//         // Gets the time remaining based on charging or discharging

//         const timeLeft = battery.charging ?
//             `Time until charged (${Math.floor(battery.chargingTime / 60)} mins)`:
//             `Time until charged (${Math.floor(battery.dischargingTime / 60)} mins)`:

//         output.innerHTML = charge + timeLeft + charging;
//     }

//     // Update the display when plugged in or unpluggd
//     battery.onchargingchange = updateBatteryStatus;

//     // Update the display when chargin time changes
//     battery.onchargingtimechange = updateBatteryStatus;

//     // Update the display when dischargin time changes
//     battery.ondischargingchange = updateBatteryStatus;

//     // Update the display when battery level changes
//     battery.onlevelchange = updateBatteryStatus;


// }    

//////////////////P   R   O   X   I   M   I   T   Y        S   E   N   S   O   R\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// proximity sensor = simple ai= determines user closeness vid device. Typically, located at top of device, when 
// phone near ear API detects sth close to the speaker, when away api detects user no longer near.

// Primary purpose == hide the screen and disable touch when user is speaking on the phone and then redisplay
// the scrren when user moves the phone away 4rm their ear. 

// proximity API allows for 2 diff kinds of event: a user proximity event that supplies a property to state 
// whether the user is near, and a device proximity event that supplies a measurement within a range. 


// ////////////////P   R   O   X   I   M   I   T   Y        E   V   E   N   T   S\\\\\\\\\\\\\\\\\\\\\\


// import { addEvent } from './above';

// interface ProximityEvent {
//     min: number;
//     max: number;
//     value: number;
//     near: boolean;
// }

// const output = document.getElementById('content');

// function sensorChange(proximity: ProximityEvent) {
//     const distance =
//         (proximity.value ? proximity.value + ' ' : '') +
//         (proximity.near ? 'near' : 'far');

//         output.innerHTML = distance;
// }

// // Near or far
// addEvent(window, 'userproximity', sensorChange);

// //Measurement within a range
// addEvent(window, 'deviceProximity', sensorChange);



////////////////////////////L  I  G   H   T    S  E  N  S  O  R\\\\\\\\\\\\\\\\\\\\\\\\


// The ambient light sensor supplies a single reading that represents the current ambient light as measured in lux 
// units. Lux units represent one lumen per sqq. meter, which is a reasonable representation of light intensity as 
// seen by the human eye. A full moon on a clear night can supply upto one lux of light. Office lighting typically
// ranges from 300 to 500 lux, while a tv studip might use 1000 lux/ Direct sunlight can achieve a range 4rm
// 320000 2 100000 lux..


// /////Ambient light Sensor

// import { addEvent } from './above';

// const output = document.getElementById('content');

// function sensorChange(data: DeviceLightEvent){
//     output.innerHTML = 'Ambient light reading: ' + data.value;
// }

// addEvent(window, 'devicelight', sensorChange);


////////////M   O   T   I   O   N     AND      O   R   I   E   N   T   A   T   I   I   O   N\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// The motion and orientation API is already contained within the TS standard library, so no additonal types
// need to be declared on top of the existing DeviceMotionEvent type.

// //MOTION & ORIENTATION

// import { addEvent } from './above';

// const output = document.getElementById('content');

// function sensorChange(event: DeviceMotionEvent) {
//     var motion = event.acceleration;
//     var rotation = event.rotationRate;

//     output.innerHTML = '<p>Motion :<br />' +
//         motion.x + '<br />'   +
//         motion.y + '<br />'   +
//         motion.z + '<br />'   +
//         '<p>Rotation:<br />' +
//         rotation.alpha + '<br />' +
//         rotation.beta  + '<br />' +
//         rotation.gamma + '</p>';
// }

// addEvent(window, 'devicemotion', sensorChange);


// // The acceleration property is normalized to remove the effects of gravity. This normalization can only take 
// // places on devices that have a gyroscope. In the absence of gyroscope, an additional property named 
// // accelerationIncludingGravity is available, which includes an additional measurement of 9.81 on the axis
// // currently facing up/down (or spread btw multiple axes if the device is at an angle where no single axis
// // is pointing directly up/down). e.g., if the device was flat on its back with the screen facing up, u wud
// // get the following values.

// // acceleration: {x: 0, y: 0, z: 0}
// // accelerationIncludingGravity: {x: 0, y: 0, z: 9.81 }

// ///////////////O  T  H  E  R    D  E  V  I  C  E  S     S  E  N  S  O  R  S\\\\\\\\\\\\\\\\\\\\\\\\\

// //// THE DEVICE API PATTERN


// import { addEvent } from './above';

// const sensorApiName = 'devicetemperature';

// const output = document.getElementById('content');

// addEvent(window, sensorApiName, (data) => {
//     output.innerHTML = sensorApiName + ' ' + data.value;
// });

// // The sensorApiName in this example can be changed to any of the following event names and any future event 
// // names that follow this  implementation pattern.

// //devicehumidity-the value will be the percentage humidity.

// //devicelighit- the value is the ambient light in lux.

// //devicenoise- the value is the noise level in dBA.

// //devicetemperature-the value is the temperature in degree Celsius.


///////////////////////////////W   E   B       W   O   R   K   E   R   S\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//JS DESIGNED  2 run an event loop on a single thread, and this is the model to follow. If u come across a 
//situation that calls for additional threads, u can use web workers. Web workers allow scripts to run on a 
//background thread, which has a separate global context and can communicate baq to the task that spawned the thread
//using events.

// To create a new worker, the code to run on a background thread must be contained in a separate JS file. 
// worker.ts shall be compield 2 worker.js dat 'll b spawned on a backgorund thread.


// //////////worker.ts\\\\\\\\\\\\\\\\\

// declare function postMessage(message: any): void;

// let id = 0;

// self.setInterval(() => {
//     id++;
//     var message = {
//         'id': id,
//         'message': 'Message sent at ' + Date.now()
//     };

//     postMessage(message);
// }, 1000);

// //The setInterval method in this example is not called onwindow but on self. This reflects the fact that the worker
// // runs in a separate context with its own scope. The postMessage event is the mechanism for sending info baq 
// // to the main thread from the worker, and any object passed to or from a worker is copied not shared.

// // Creating and using a webworker

// const worker = new Worker(./above);

// function workerMessageRecieved(event) {
//     const response = event.data;

//     console.log(response.id, response.message);
// };

// worker.addEventListener('message', workerMessageRecieved);

// //above worker indulges in race condition


// ////Worker that waits for a start signal


// declare function postMessage(message: any): void;

// let id = 0;

// function start() {
//     self.setInterval(() => {
//         id++;
//         const message = {
//             'id': id,
//             'message': 'Message sent at ' + Date.now()
//         };

//         postMessage(message);
//     }, 1000);
// }

// self.onmessage = (event) => {
//     if (event.data === 'Start') {
//         start();
//     } else {
//         console.log(event.data);
//     }
// }

// //Now the worker shall wait to recieve the start message before running. Passing the start message to the 
// // worker uses the same postMessage mechanism that the worker uses to communicate back to the main thread.
// // By placing the start message after adding the event handler, the race condition is prevented.

// // Signalling the worker to start

// const worker = new Worker(./above);

// function workerMessageRecieved(event) {
//     const response = event.data;

//     console.log(response.id, response. message);
// };

// worker.addEventListener('message', workerMessageRecieved);

// worker.postMessage('Start');




////////////////////////K     E     Y         P     O    I    N    T     S\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


//By avoiding unnecessary reflows, your program will appear more responsive.

//There are multiple methods for finding elemnts on a web page. Each of them rtrns diff types, althu u can 
//use a type assertion to change that type.

//Constructing a nested set of elements b4 adding them to the page can be more efficient than adding each in turn.

//AJAX allows asynchronous calls to the server and allows data in many different formats.

//WebSockets offer persistent connections with two-way communication and WebRTC allows real-time audio &
//video streams.

// U can store data on the local computer using Sesson storage, local storage, or IndexedDB. No guarantee data shall persist.

//U can get the user's location with their permission and the browser will use the most accurate abailable method
// of finding the location.

// There are a number of sensors that u can access, and they all have a similar implementation pattern.

//Web Workers run in a separate thread, with messages being posted btw the main thread and the worker thread and 
//vice versa.

