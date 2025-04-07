console.log("From external script");
// dynamically typed language

    // declaration statements 
    var a;  //declartion
    a=10;   //initialization
    console.log(a); //10

    //var a=10->> declaring &intialization
    a=12 //updated -> assigning 
    console.log(a); //12

    var a=10
    var a=20  //declaring & re-initialization
    console.log(a);

    a=25
    console.log(a); // re-intialization

    {
        var a=40;
        console.log("inside block"+a);//40
    }
        console.log("inside block"+a);//25


//RE-intialization re-initialization 
//re-assignment is possible in var=
//var-Global scope
    //let -> only re-assigning/updating is possible 
    //let -> no declaration , no-initializtion
    //let --> block scope
        let b10;
        console.log(a); //error
        let b=20;
        console.log(a); //

    //scope
    {
        let b=30;
        console.log("Inside the block" + b); // 30
    }
        console.log("outside the block"+b); //20

    //const
        const pi=3.14;
        console.log(pi);    //3.14
     // pi=3.0;
    //  console.log(pi);    //error
        //scope-> block scope 
    //scope
    {
        const pi=2.8;
        console.log("inside"+pi); //2.8
    }
    console.log("outside"+pi);  //

    {
        z=20;
        console.log(z); //20
    }
    console.log(z); //20

    ///only declaration is not possible 
    //declaring 7initialization is possible 
    //re-declaring & re-initialization is not possible 
    //re-assigning is not possible 
    //scoping --> block

//dynamic typing
    let x=10;
    console.log(x); //10-->int

    x=10.3;
    console.log(x); //10.3-->float

    x="puji";
    console.log(x); //10-->string

//hoisting --> First initialize and then declare 
//var hoisting --> is possible 
    p=10    //initializng 
    var p;  //declaring
    console.log(p);

/*
//let hoisting --> not possible 
q=20    //initialization
let q;  //declaring 
console.log(q); //error

//const-hoisting is not possible 
r=20;
const r;
console.log(r);
*/




