let num=10
console.log(typeof(num));   //number
let f_num=10.9
console.log(typeof(f_num));   //number

let str="Hello"
console.log(typeof(str));   //string

let n_str="124"
console.log(typeof(n_str)); //string

let bool=true  
console.log(typeof(bool));//boolean

let ab;
console.log(ab);
console.log(typeof(ab)); //undefined

let n=null
console.log(n); //null
console.log(typeof(n)); //object

   //escape chars (/)
   console.log("Hello,\"World\" ");
   console.log("Good \\ Afternoon!");
   console.log('Good \'abd\'  Afternoon!');
   
  console.log(`Parul
    university`);
 //by using `` wecan print in two lines 

//Arithmatic operator +,-,*,/,%
let a=10
b=20
console.log(a+b);   //30
console.log(a-b);   //-10
console.log(a*b);   //200
console.log(a/b);   //0.5
console.log(a%b);   //10

let c="10"
let d="str"
console.log(a+c);   //1010
console.log(a+d);   //10str
console.log(a+b);   //0
console.log(a-d);   //NaN (Not a Number)

// relational >,<,>=,<=,===,!==
console.log(2<4);   //true
console.log(2>4);   //false
console.log(2>=4);  //false
console.log(2<=4);  //true

// ===, !==, ==, !=
console.log("-----------------")
let data=12
let data1='12'
console.log(data==data1);   //it will check 12==12 the output is (true)
console.log(data!==data1);  //it will check 12(num)==12(str)  and the output is true

//logical &&, ||, !
console.log("logical operator");
console.log(true && false);
console.log(true && true);
console.log(true || false);
console.log(true || true);
console.log(!true);
console.log(!false);

let num1=12
let num2=5
console.log(num1&num2);
console.log(num1|num2);



//              2^3     2^2     2^1     2^0
//               8       4       2       1
//num1=12-->     0       1       0       0
//num2=5 -->     0       0       1       1
// & --->        0       0       0       0 =>4
// | --->        1       1       0       1 =>13
// ^ --->        1       0       0       1 =>

// => xor gate =>
    //  0^0 =>0   0^1 =>1   1^0 =>1   1^1 =>0
// => and gate
    //  0&0 =>0   0&1 =>0   1&0 =>0   1&1 =>1
// => or gate
    //  0|0 =>0   0|1 =>1   1|0 =>1   1|1 =>1

let num3=10
console.log(~num3); //-11
// n=> [ ~n ---> -(n+1) ]


// left shift =>  <<
//right shift =>  >>

console.log("rotational operators");
let num4=3
let num5=5
console.log(num4<<num5);    //96
//  a<<b --> a*2^b --> 3*2^5 --> 32*3 -->96

console.log(num4>>num5);    //0
//  a>>b --> a/2^b --> 3/2^5 --> 3/32 -->0


//Unary operator 
    let number=10
    console.log("Unary operators");
    console.log("Pre-incremant & Pre-decrement");
    console.log(++number);  //11
    console.log(--number);  //10

    console.log("Post-incremant & Post-decrement");
    console.log(number++);  //10
    console.log(number--);  //11

    let num6=5
    console.log(num6++  +  --num6 + num6--  +  num6++ - num6-- + ++num6  -  num6--);
    //  memory values --> 6m)   5(m)    4(m)    5(m)    4(m)    5   m(4)
    //current values -->   5  +  5   +   5   +   4   -   5   +  5 -  5

// MATH METHODS 
console.log("Math methods .....");
    console.log(Math.round(2.4))    //2
    console.log(Math.round(2.5))    //3

    console.log(Math.ceil(2.1))     //3 round upto nxt number 
    console.log(Math.ceil(2.0))     //2 only here

    console.log(Math.floor(2.9))    //2 round down to nxt number 
    console.log(Math.floor(2.5))    //2 

    console.log(Math.trunc(2.8))    //2
    console.log(Math.trunc(2.3243)) //2
    
    console.log(Math.sign(-4))  //-1
    console.log(Math.sign(12))  //1

    console.log(Math.pow(2,3))  //8
    console.log(Math.pow(9,2))  //81

    console.log(Math.sqrt(25))   //5
    console.log(Math.sqrt(225))  //15

    console.log(Math.max(20,34,51,6,3)) //51
    console.log(Math.min(12,4,25,15,20))    //4

    console.log(Math.abs(234.3553))     //234.3553

    console.log("Random number-----")
    console.log(Math.random()); //0 to <1
    // 1 to 9 ------
    console.log(Math.random()*10);  
        //here if we multiply with 10 then we will get the output from 0 to 9 with decimals 
    console.log(Math.random()*100);  
        //here if we multiply with 10 then we will get the output from 0 to 99 with decimals 
    console.log(Math.trunc(Math.random()*10));
        //here values would be from o to 10 but without decimals 
    console.log(Math.trunc(Math.random()*100));
        //here values would be from o to 99sbut without decimals 

// There are 3 javascript methods that can be used to variables to numbers 
    //Number() Method
        console.log(Number(true));      //1
        console.log(Number(false));     //0
        console.log(Number("10"));      //10
        console.log(Number(" 10"));     //10
        console.log(Number("10 "));     //10
        console.log(Number("10.33"));   //10.33
        console.log(Number("10,33"));   //NaN
        console.log(Number("10 33"));   //NaN
        console.log(Number("puji"));    //NaN

    //parseInt() Method 
        console.log(parseInt("-10"));       //-10
        console.log(parseInt("-10.33"));    //-10
        console.log(parseInt("10"));        //10
        console.log(parseInt("10.33"));     //10
        console.log(parseInt("10 20 30"));  // 10 gives first number
        console.log(parseInt("10 years"));  //10
        console.log(parseInt("years 10"))   //10

    //parseFloat() Method 
        console.log(parseFloat("-10"));
        console.log(parseFloat("-10.33"));
        
        