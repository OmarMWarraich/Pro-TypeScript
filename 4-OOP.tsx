// Chapter 4 \\
//Object Orientation in TypeScript\\

// There are two ways of creating a software design: One way is to make it so simple that there are obviously no
// deficencies and the other way is to make it so complicated that there are no obvious deficencies. The first
// method is far more difficult. If demands the same skill, devotion, insight, and even inspiration as the discovery of the 
// simple physical laws which underlie the complex phenomena of nature.

// OOP allows realworld concepts 2 b represented by code dat contains both the data &* related behaviour.
// concepts r modelled as classes with props for data and methods for behaviour. and the specific inst of theses 
// classes r cald objects.

// Object orientation in TypeScript

// Tools

//-Classes
//Instance of Classes 
//Methods
//Inheritance
//Open recursion
//Encaspulation
//Delegation
//Ploymorphism


// Open Recursion

// combination of recursion and late binding. When a method calls itself within a class, that call can be forwarded
// to a replaced defined in a subclass. 
// e.g. class dat reads the content of a directory. FileReader class reads the contents based on the supplied path. 
// Any files are added to the file tree but where directories are found, there is a recursive call to this.getFiles. 
// These call 2 continue unitl the entire path, including all subfolders, are added 2 da file tree. 
// The fs.reaaddirSyn and fs.statSync methods belong to NodeJS.
// The LimitedFileReader is a subclass of the FileReader Class. When u create an instance of the LimitedFileReader class, 
// u must specify a no. dat limits the depth of the file tree represented by the class. 
// If u create a FileReader instance, the call to this.getFiles is a simple recursive call. If u create an instance 
// of the LimitedFileReader, the same call to this.getFiles within the FileReader.getFiles mthod will actually 
// b dispatched 2 da LimitedFileReader.getFiles method.


// // Opern Recursion

// import * as fs from 'fs';

// interface FileItem {
//     path: string;
//     contents: string[];
// }

// class SyncFileReader {
// getFiles(path: string, depth: number = 0) {
//     const fileTree = [];

//     const files = fs.readdirSync(path);

//     for (let file of files) {
//         const stats = fs.statSync(file);

//         let fileItem: FileItem;

//         if (stats.isDirectory()) {
//             // Add directory and contents
//             fileItem = {
//                 path: file,
//                 contents: this.getFiles(file, (depth + 1))
//             };
//         } else {
//             // Add file
//             fileItem = {
//                 path: file,
//                 contents: []
//             };
//         }
//         fileTree.push(fileItem);
//     }
//     return fileTree;
// }
// }

// class LimitedFileReader extends SyncFileReader {
//     constructor(public maxDepth: number) {
//         super();
//     }

//     getFiles(path: string, depth= 0) {
//         if (depth > this.maxDepth) {
//             return [];
//         }

//         return super.getFiles(path, depth);
//     }
// }

// //instantiating an instance of LimitedFileReader
// const fileReader = new LimitedFileReader(1);

// // Results in only the top level, and one additional layer being read
// const files = fileReader.getFiles('path');

// // This e.g., of open recursion can be summarized as the following:

// //-When u create a SyncFileReader:fileReader.getFiles is a call 2 SyncFileReader.getFiles/

// //- this.getFiles within SyncFileReader is a call 2 SyncFileReader.getFiles

// //-When u create a new LimitedFileReader

// //- fielReader.getFiles is a call 2 LimitedFileReader.getFiles.

// //- super.getFiles is a call 2 SyncFileReader.getFiles.

// //- this.getFiles within SyncFileReader is a call 2 LimitedFileReader.getFiles


// //////E N C A P S U L A T I O N\\\\\\

// // fully supported in TS. A class inst can contain props as well as methods that operate on those props; an 
// // encapsulation of data and behaviour. props can also be hidden using the private access modifier, which hides
// // the data 4rm code outside of the class instance.

// // A common use of encapsulation is data hiding: preventing access 2 data 4rm outside of the class except via 
// // explicit ops. e.g.,shows Totalizer class with a pvt total prop dat cant be mod by code outside of Totalizer class.
// // prop changes wen ext code call the methods defined on the class.  removing following risks.

// //- Ext code adding a donation without adding tax rebate.
// //- Ext code faileing to validate the amount is a +ve no.
// //- Tax rebate calc appearing in many places in calling code.
// //- Tax rate appearing in many places in external code.

// //Encapsulation.

// class Totalizer {
//     private total = 0;
//     private taxRateFactor = 0.2;

//     addDonation(amount: number) {
//         if (amount <= 0) {
//             throw new Error("Donation exception")
//         }

//         const taxRebate = amount * this.taxRateFactor;
//         const totalDonation = amount + taxRebate;

//         this.total += totalDonation;
//     }
//     getAmountRaised() {
//         return this.total;
//     }
// }

// const totalizer = new Totalizer();

// totalizer.addDonation(100.00);

// const fundsRaised = totalizer.getAmountRaised();

// // 120

// console.log(fundsRaised);

// //////D E L E G A T I O N\\\\\\

// // describes the situation where one part of ur program hands over a  task to another part. 
// // In true delegation, the wrapper passes a reference 2 itself into the delegate, which allows the delegate
// // 2 call back into the original wrapper, e.g., the wrapper class wud call the delegate class, passing the 
// // keyword this into the delegate, allowing the delegate to call public methosds on the wrapper class. This allows the
// // the wrapper class and delegate class to behave as a subclass and super class.(forwarding)

// // Delegation

// interface ControlPanel {
//     startAlarm(message: string): any;
// }

// interface Sensor {
//     check(): any;
// }

// class MasterControlPanel {
//     private sensors: Sensor[] = [];

//     constructor() {
//         //Instantiating the delegate HeatSensor
//         this.sensors.push(new HeatSensor(this));
//     }

//     start() {
//         for (let sensor of this.sensors) {
//             sensor.check();
//         }

//         window.setTimeout(() => this.start(), 1000);
//     }

//     startAlarm(message: string) {
//         console.log('Alarm! ' + message);
//     }
// }

// class HeatSensor {
//     private upperLimit = 38;
//     private sensor = {
//         read: function() {
//             return Math.floor(Math.random() * 100); }
//     };
//     constructor(private controlPanel: ControlPanel) {
//     }    
//     check() {
//         if (this.sensor.read() > this.upperLimit) {
//             // Calling back to the wrapper
//             this.controlPanel.startAlarm('Overheating!')
//         }
//     }
// }

// const controlPanel = new MasterControlPanel();

// controlPanel.start();

// // Above. The ControlPanel class passes itself into the HeatSensor constructor, which enables the HeatSensor class
// // to call the startAlarm method on the ControlPanel when reqd. The ControlPanel can coordinate any no. of sensors, 
// // and each sensor can call baq in2 the ControlPanel 2 set off the alarm if a problem is detected.
// // possible to expand on this 2 demonstrate various decision points where either inheritance or delegation may b selected.


////////P O L Y M O R P H I S M\\\\\\\\

// ability 2 specify a contract and have many different types implement 4 that contract. 
// da code using a class dat implements some contract shud not nyd 2 know the details of the specific implementation.
// In Ts, Ploymorphism can b achieved using diff forms.

//> An interface implemented by many classes.

//> An interface implemented by many objects.

//> An interface implemented by many functions.

//> A superclass with many specialized subclasses.

//> Any structure with many similar structures.

// interface Vehicle {
//     moveTo(x: number, y: number);
// }

// // Explicit interface implementation
// class Car implements Vehicle {
//     moveTo(x: number, y: number) {
//         console.log('Driving to ' + x + ' ' + y);
//     }
// }

// class SportsCar extends Car {

// }

// // Doesnt explicitly implement the Vehicle interface
// class Airplane {
//     moveTo(x: number, y: number){
//         console.log('Flying to ' + x + ' ' + y);
//     }
// }

// class Satellite {
//     moveTo(x: number) {
//         console.log('Targeting ' + x);
//     }
// }

// function  navigate(vehicle: Vehicle) {
//     vehicle.moveTo(59.9436499, 10.7167959);
// }

// const car = new SportsCar();
// navigate(car);

// const airplane = new Airplane();
// navigate(airplane);

// const satellite = new Satellite();
// navigate(satellite);

/////////////S O L I D  P R I N C I P L E S\\\\\\\\\\\\\

//>Single Responsibility Principle - a class should have one, and only one, reason to change.

//>Open-closed Principle - it shud b possible 2 extend the behavious of a class without modifying it.

//>Liskov substitution principle-subclasses should be substitutable for their superclasses.

//>Interface Segregation Principle-many small, client-specific interfaces re better than one general purpose interface.

//>Dependency inversion principle-depends on abstractions, not concretions.


// The Single Responsibility Principle (SRP)
// A class shi=ud 've only 1 reason 2 change. wen designing ur classes, u shud aim 2 put related features 2gether, 
// ensuring that they r likely 2 change 4 da same reason, & keep features apart if they will change 4 different reasons. 
// A program dat follows dis principle has classes dat perform just a few related tasks. 

// // Single Responsibility Principle Violation

// class Movie {
//     private db: DataBase;

//     constructor(private title: string, private year: number) {
//         this.db = DataBase.connect('user:pw@mydb',['movies']);
//     }

//     getTitle() {
//         return this.title + '(' + this.year + ')';
//     }

//     save() {
//         this.db.movies.save({title: this.title, year: this.year});
//     }
// }

// // Movie

// const movie = new Movie('The Internship', 2013);

// movie.save();


// // 2 fix dis class, separate reasons for change.

// class Movie {
//     constructor(private title: string, private year: number) {

//     }
//     getTitle(){
//         return this.title + '(' + this.year + ')';
//     }
// }

// class MovieRepository {
//     private db: Database;

//     constructor() {
//         this.db = Database.connect('user:pw@mydb', ['movies']);
//     }

//     save(movie: Movie){
//         this.db.movies.save(JSON.stringify(movie));
//     }
// }

// // Movie
// const movie = new Movie('the Internship', 2013);

// // MovieRepository
// const movieRepository = new MovieRepository();

// MovieRepository.save(movie);

// // The Open-Closed Principle(OCP)

// // OCP often summed up by the sentence: software entities should be open for extension but closed for modification.
// // In pragmatic terms, no matter how much u design ur program upfront, it is almost certain dat it wont b entirely 
// // protected 4rm modification. 

// // Open-closed principle(OCP)

// class RewardPointsCalculator {
//     getPoints(transactionValue: number){
//     // 4 points per whole dollar spent
//     return Math.floor(transactionValue) * 4;
// }
// }

// class DoublePointsCalculator extends RewardPointsCalculator {
//     getPoints(transactionValue: number){
//         const standardPoints = super.getPoints(transactionValue);
//         return standardPoints * 2;
//     }
// }

// const pointsCalculator = new DoublePointsCalculator();

// //800
// alert(pointsCalculator.getPoints(100.99));


// The Liskov Substitution Principle (LSP)

// What is wanted here is something like the following substitution property: If for each object 01 of type S 
// there is an object o2 of type T such that for all programs P defined in terms of T, the behaviour of P is
// unchanged when o1 is substituted for o2 then S is a subtype of T.    -- Barbara Liskov

// If u substitute a subclass 4 a superclass, the code dat uses the class shudnt nyd 2 know dat the substitution
// has taken place.

//-Contravariance of method args in the subtype- if the supclass has a method accepting a Cat, the subclass method
// should accept an arg of type Cat or Animal, which is the supclass for Cat. 

//-Covariance of return types in da subtype- if the supclass has a method dat rtrns an Animal, the subclass method
// shud rtrn an Animal or a subclass of Animal such as cat.

// The subtype shud throw either the same exceptions as the supertype, or exceptions that r subtypes of the 
// supertype exceptions: In TS, u'rnt limited 2 usen exception classes; u can simply specify a string to throw
// an exception. possible 2 create classes 4 errors in TS. key => if calling code has an exception handling block,
// it shudnt be surprised by da exception thrown by a subclass.

// // Error-classes

// class ApplicationError implements Error {
//     constructor(public name: string, public message: string){
//     }
// }
// throw new ApplicationError('Example Error', 'An error has occurred');


////////////////////////////The Interface Segregation Principle(ISP)\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// shows a simple eg of an interface for a printer dat can copy, print and staple documetns. 

// coz the interface is just a way of describing all the behaviours of a printer, it grows as new features are
// added. e.g., folding, inserting into envelopes, faxing, scanning, & emailing may endup on the Printer interface.

// Printer Interface

// interface Printer {
//     copyDocument();
//     printDocument(document: Document);
//     stapleDocument(document: Document, tray: number);
// }


// ISP states dat we shud create small interfaces. segregated providing reqd behaviour. above printer interface
// makes it impossible to implement a printer that can print and copy, but not staple or even worse, the staple
// method must be implemented to throw an error that states the operation cant be completed. 

// // Segregated interfaces.

// interface Printer {
//     printDocument(document: Document);
// }
// interface Stapler { 
//     stapleDocument(documetn: Document, tray: number);
// }
// interface Copier {
//     copyDocument();
// }

// class SimplePrinter implements Printer {
//     printDocument(document: Document) {
//         //...
//     }
// }

// class SuperPrinter implements Printer, Stapler, Copier {
//     printDocument(document: Document) {
//         //...
//     }
    
//     copyDocument(){
//         //
//     }

//     stapleDocument(document: Document, tray: number) {
//         //....
//     }
// }


// ///////////////////////The Dependency Inversion Principle\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// // // High-level dependency on low-level class

// // class Light{
// //     switchOn(){
// //         //...
// //     }

// //     switchOff(){
// //         //...
// //     }
// // }

// // class LightSwitch{
// //     private isOn = false;

// //     constructor(private light: Light){

// //     }

// //     onPress(){
// //         if (this.isOn){
// //             this.light.switchOff();
// //             this.isOn = false;
// //         } else {
// //             this.light.switchOn();
// //             this.isOn = true;
// //         }
// //     }
// // }

// // Implementing the dependency Inversion Principle (DIP)

// interface LightSource {
//     switchOn();
//     switchOff();
// }

// class Light implements LightSource {
//     switchOn() {
//         //...
//     }
//     switchOff(){
//         //...
//     }
// }

// class LightSwitch {
//     private isOn = false;

//     constructor(private light: LightSource){
//     }

//     onPress() {
//         if (this.isOn) {
//             this.light.switchOff();
//             this.isOn = false;
//         } else {
//             this.light.switchOn();
//             this.isOn = true;
//         }
//     }
// }

// //impactful yet simple 2 follow. 


//////////////////D E S I G N   P A T T E R N S\\\\\\\\\\\\\\\\\\\\\\

//Gang of four book-Design Patterns-Elements of Reusable oject-oriented software(Gamma, Helm, Johnson, & Vlissides, Addison Wesley, 1995)

//(Pro JavaScript Design Patterns, Aprress 2007)

// // Practical Ecample

// // Wheel Cleaning

// interface WheelCleaning {
//     cleanWheels(): void;
// }

// class BasicWheelCleaning implements WheelCleaning {
//     cleanWheels() {
//         console.log('Soaping Wheel');
//         console.log('Brushing Wheel');
//     }
// }

// class ExecutiveWheelCleaning extends BasicWheelCleaning {
//     cleanWheels() {
//         super.cleanWheels();
//         console.log('Waxing Wheel');
//         console.log('Rinsing Wheel');
//     }
// }

// // Body Cleaning

// interface BodyCleaning {
//     cleanBody(): void;
// }

// class BasicBodyCleaning implements BodyCleaning {
//     cleanBody() {
//         console.log('Soaping Car');
//         console.log('Rinsing Car');
//     }
// }

// class ExecutiveBodyCleaning extends BasicBodyCleaning {
//     cleanBody() {
//         super.cleanBody();
//         console.log('Waxing Car');
//         console.log('Blow drying car');
//     }
// }

// // // CarWashProgram class b4 da abstract factory pattern

// class CarWashProgram {
//     constructor(private washLevel: number) {
//     }

//     runwash() {
//         let wheelWash: WheelCleaning;
//         let bodyWash: BodyCleaning;

//         switch(this.washLevel) {
//             case1:
//                 wheelWash = new BasicWheelCleaning();
//                 wheelWash.cleanWheels();

//                 bodyWash = new BasicBodyCleaning();
//                 bodyWash.cleanBody();

//                 break;
//             case 2: 
//                 wheelWash = new BasicWheelCleaning();
//                 wheelWash.cleanWheels();

//                 bodyWash = new ExecutiveBodyCleaning();
//                 bodyWash.cleanBody();

//             break;
//             case 3:
//                 wheelWash = new ExecutiveWheelCleaning();
//                 wheelWash.cleanWheels();

//                 bodyWash = new ExecutiveBodyCleaning();
//                 bodyWash.cleanBody();

//                 break;
//         }
//     }
// }


// // Abstract factory

// interface ValetFactory {
//     getWheelCleaning(): WheelCleaning;
//     getBodyCleaning(): BodyCleaning;
// }

// // Concrete Factories

// class BronzeWashFactory implements ValetFactory {
//     getWheelCleaning() {
//         return new BasicWheelCleaning();
//     }
//     getBodyCleaning() {
//         return new BasicBodyCleaning();
//     }
// }

// class SilverWashFactory implements ValetFactory {
//     getWheelCleaning() {
//         return new BasicWheelCleaning();
//     }

//     getBodyCleaning() {
//         return new ExecutiveBodyCleaning();
//     }
// }

// class GoldWashFactory implements ValetFactory {
//     getWheelCleaning() {
//         return new ExecutiveWheelCleaning();
//     }

//     getBodyCleaning() {
//         return new ExecutiveBodyCleaning();
//     }
// }

// // Abstract factory pattern in use

// class CarWashProgram {
//     constructor(private cleaningFactory: ValetFactory) {
//     }

//     runWash() {
//         const wheelWash = this.cleaningFactory.getWheelCleaning();
//         wheelWash.cleanWheels();

//         const bodyWash = this.cleaningFactory.getBodyCleaning();
//         bodyWash.cleanBody();
//     }
// }


/////////////The Real Mixins\\\\\\\\\\\\\\\\\\\\\


// type Constructor<T = {}> = new (...args: any[]) => T;

// function Acts<TBase extends Constructor>(Base: TBase) {
//     return class extends Base {
//         message: string = 'Acting';
//         act(){
//             alert(this.message);
//         }
//     };
// }

// class Person {
//     constructor(private name: string) {

//     }
// }

// const Actor = Acts(Person);

// const actor = new Actor('Alan');

// //Acting
// actor.act();


// //The full real mixins

// type Constructor<T = {}> = new (...args: any[]) => T;

// function Sings<TBase extends Constructor>(Base: TBase) {
//     return class extends Base {
//         sing() {
//             alert('Singing');
//         }
//     };
// }

// function Dances<TBase extends Constructor>(Base: TBase) {
//     return class extends Base {
//         dance() {
//             alert('Dancing');
//         }
//     };
// }

// function Acts<TBase extends Constructor>(Base: TBase) {
//     return class extends Base {
//         act() {
//             alert('Acting');
//         }
//     };
// }

// class Person {
//     constructor(private name: string){

//     }
// }

// const Actor = Acts(Person);

// const AllRounder = Acts(Sings(Dances(Person)));

// const actor = new Actor('Alan');
// actor.act();

// const allRounder = new AllRounder('Gene');
// allRounder.act();
// allRounder.dance();
// allRounder.sing();


////////////////////////////////K  E  Y    P  O  I  N  T  S\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// TS has all the tools needed to write OOP programs.

// The SOLID principles aim 2 keep ur code malleable and prevent it from rotting.

// Design Patterns are existing, well-known solutions to common problems.

// You dont have to implement a design pattern exactly as it is described.

// Mixins provide an alternative mechanism for composition.


