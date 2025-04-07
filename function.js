//function : block of code written at one place to perform specific task
/* syntax of a function =>
    function fun_name(...para....)
    {
        fun_body
        return    
    }
    fun_name(argument) //calling function 
*/

// o parameters and no return
    function greet(){
            //0 parameters & no return
        console.log("Good Morning");
    }
    greet() //fun_call

//parametarized &no return
    function greet_i(name){
        // parameterized & no return 
        console.log("Hello"+name)
    }
    greet_i() // fun_call

//parametarized & return
    function greet_p(name){
        // parameterized & return 
        console.log("Avula"+name)
    }
    greet_p("pujitha") // fun_call

//no parameter but return 
    function greet_u()
    {
        console.log("Hello")
        return     
    }
    greet_u() //fun_call

//no parameter but return
    function add()
    {
        let a=10
        let b=20
        return a+b
    }
    let res=add()
    console.log(res); //or --> console.log(add))

// parameter & return
    function div(a,b)
    {
            return a*b
    }
    console.log(div(2,6))

// anonymus function
    let fun=function(a,b)
    {
        console.log("From anonymous fun");
        return a*b
    }
    console.log(fun(3,5));

//arrow function 
    let arr_fun=()=>
    {
        console.log("From arrow fun");
    }
    arr_fun()

// parameter &return
    let mul=(a,b)=>
    {
        return a*b
    }
    console.log(mul(2,3));

//square 
    let sq=(x)=> x*x    //implict return
    console.log(sq(7)); //49

// callback function --> function inside function 
    function modulus(a,b)
    {
        console.log(a%b)  //2%9=2
    }
    console.log("taim lagega");
    setTimeout(modulus,2000,2,9)

// for-each & call back function 
    let arr=[1,2,3,4,5]
    console.log("For Each loop");
    arr.forEach((num)=>
    {
        console.log(num);
    })
