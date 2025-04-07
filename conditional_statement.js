//   camelCase ->>  userName  (def)
//  PascalCase ->>  UserName
//  sanke_case ->>  user_name

//conditional statements
//if, if else
/* if (condition){

    }else{

    }   stat => if age<18 print not adult
*/

let age=12;
if (age<18){
    console.log(" not adult")
}else{
    console.log(" adult")
}

// To take input from user then the conditional statement can be written as 
/* let age=prompt("enter your age");
    let age=12
    if (age<18){
        console.log(" not dult")
    }else{
        console.log(" adult")
    }
*/

//  num> 0 --> +ve, num<0, -ve, zero
    let num=23;
    if(num>0){
        console.log("positive number");
    }else if(num===0){         // comparing should be done with triple equal to 
        console.log("zero");
    }else{
        console.log("negative number");
    }



//SWITCH STATEMENT 
/*  switch statement syntax
    switch(expression){
        case value1:
                //code
            break
        case value2:
                //code
            break
        default:
                //code
            break
*/
//example of switch statement
    let day=1
    switch(day){
        case 1:
            console.log("Monday");
            break
        case 2:
            console.log("Tuesday");
            break
        case 3:
            console.log("wednesday");
            break
        default:
            console.log("Invalid Day!");
            break
    }

// ternary operator =>3 operands and 2 
/* syntax of ternary operator 
    condition ? true(stat) : false(stat)
*/
//find num is even or not using ternary operator 
/*  let num=12
    let ans=(num%2==0)?"even" :"odd"
    console.log(ans);   
*/



//loops -> for,while, do-while
// for loop
    //for(start and increment/decrement){
    //      //code
    //}
    //  1 to 10

    for(let i=0;i<10;i++){
        console.log(i);
    }

// while loop 
    /* while(condition){
            //code
        }
    */
    
    console.log("while loop");  
/*  while(true){
            console.log(1)      
                // in this case the number will print infinite time 
    }             
*/

/* print even numbers using while loop */
    let a=2
    while(a<=10){
        console.log(a);        
        a+=2    //a=a+2
        /* in this case the number will print finite times and also
        finite while loop and infite loop cannot be written at a time 
        and also after getting infinite loop the page cannot be 
        reloaded we should close the page and open the page again by 
        opening with the live server */
    }

// do-while loop 
    // syntax of do-while loop
    /* do{
            //code
         } 
        while() //table of 3
    */
        console.log("do-while loop");
        let j=1
        do{
            console.log(3*j); // 3 6 9 .... 30
            j++
        }
        while(j<10)
