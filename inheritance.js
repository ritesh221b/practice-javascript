console.log("Inheritance in Javascript");

// Js only have protypal inheritance
// class use prototypal insheritance in back
// just a syntatical sugar

(function() {

    class Person{
        talk(){
            return "Talking";
        }
    };

    const me = new Person();
    const you = new Person();
    console.log(me.talk(), you.talk());
    console.log(me.__proto__.talk===Person.prototype.talk); //true

    // Change method
    Person.prototype.talk = function(){
        return "More effecient Talking";
    }
    console.log(me.talk(), you.talk());

    console.log(me);
    // Now talk is property
    me.talk = function () {
        return "Talking from me";
    }
    console.log(me);
    console.log(me.talk());
    console.log(you.talk());

});

// Property vs Methods
// Protypal inheritance
(function(){
   
    // constuctor function
    function Person(){}
    Person.prototype.talk = function(){
        return "Talking";
    }
    let me = new Person();
    console.log(me, me.talk());

    // Changing Method
    Person.prototype.talk = function(){
        return "Good Talk";
    }
    let you = new Person();
    console.log("you", you, you.talk());
    console.log("me", me, me.talk());


    function SuperHero() {
        this.talk = function(){
            return "I'm SuperHero";
        }
    }
    
    const batman = new SuperHero();
    console.log("batman",batman, batman.talk());
    
    // #confused Change Property
    SuperHero.talk = function(){
        return "Improved SuperHero";
    }
    console.log(SuperHero);

    const ironman = new SuperHero();
    console.log("Ironman", ironman, ironman.talk());
    console.log("Batman", batman, batman.talk());

});


// Ideal way to write
(function(){

    // Things I have
    function Person(name,age, gender){
        this.age = age;
        this.name = name;
        this.gender = gender;
    }

    // Things I do
    Person.prototype.smile = function(){}
    Person.prototype.run = function(){}
    Person.prototype.walk = function(){}

});

// Extending Behaviour
(function(){
    
    class Person{
        talk(){
            return "talking";
        }
    }

    class SuperHuman extends Person{
        fly(){
            return "Flying to thee moon";
        }
    }

    const me = new Person();
    const you = new SuperHuman();
    
    console.log("me",me,me.talk());
    // console.log("me as fly",me, me.fly());
    console.log("you as talk", you, you.talk());
    console.log("you as fly", you, you.fly());

});

// Ways to create object
(function(){

    // Pure Object
    const Person = {
        talk(){
            return "Talking";
        }
    }
    const me =  Person;
    // const me = Object.create(Person);
    // const me = {};
    // Object.setPrototypeOf(me,Person);
    console.log("me", me, me.talk());
});


(function(){

    class Person{
        constructor(name,age,worth){
            this.name = name;
            this.age = age; 
            this.worth = worth;
        }
        show(){
            console.log(this.name, this.age, this.worth);
            return "++ shown Person";
        }
    }

    class Developer extends Person{
        constructor(name,age,worth,github){
            super(name,age,worth);
            this.github = github;
        }
        show(){
            console.log(this.name);
            return "++ Show dev";
        }
        static multi(a,b){
            return a*b;
        }
    }

    const me = new Person("Ritesh",12,91);
    console.log("Me as person",me, me.show());

    const you = new Developer("Cool",221,11,"gitra");
    console.log("You as dev", you, you.show());

    console.log("Using static", Developer.multi(2,4));
    console.log( (new Person).show() );

})();





