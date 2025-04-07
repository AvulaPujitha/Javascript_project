/*
    try
    {
        //block of code
    }
    catch(error)
    {
        //error message
    }
*/

    try{
        let num=10/0    //infinite
        console.log("From try block");
        console.log(num);
    }
    catch(error){
        console.log("From catch block");
            console.error(error)
            console.log("error");
    }
    finally{
        console.log("will work irrespective of try or catch");
    }

//replace 
    let str="Good Morning";
    console.log(str.replace("Good","Happy"));
        //Happy Morning
    let str_1="Good Morning, Good night";
    console.log(str_1.replace("Good","Happy"));
        //Happy Morning, Good night
    let str_2="Good Morning, Good night";
    console.log(str_2.replaceAll("Good","Happy"));
        //Happy Morning, Happy night

// g-globally
// let str="Good Morning,Good night";
console.log(str_1.replace(/Good/g,"sad"));

// tostring()
    let d=369;
    console.log(d.toString());
    console.log((369).toString());
    console.log((300+69).toString());
    
    console.log("Exponent values-----");
    let f= 9.656;
    console.log(f.toExponential(2));
    let g=9.999;
    console.log(g.toExponential(2));
    let h=99.999;
    console.log(h.toExponential(5));

// toFixed method 
    console.log("toFixed method------");
    let m = 81.658;
    console.log(m.toFixed(4));  //81.6580
    console.log(m.toFixed(2));  //81.66
        // it prints the 2 digits after the decimal 

// toPrecision method
    console.log("toPrecision method");
    let n=81.658;
    console.log(n.toPrecision(4));
        /* it prints the 4 digits from the starting by including the  
           after decimal point  */
    console.log(n.toPrecision(3));
    console.log(n.toPrecision(2));
    console.log(n.toPrecision(1));

//getobject
    console.log("date object");
    const o=new Date();
    console.log(o.getTime());
    console.log(o.getFullYear()); 
    console.log(o.getMonth());
    console.log(o.getDate());
    console.log(o.getHours());
    console.log(o.getMinutes());
    console.log(o.getSeconds());

    /*  getTime()  -->  get the 

        getDate()  -->  get the day as a number ()

        getHours() -->  get the hours as number ()
    */

        const p=new Date();
        p.setFullYear(2006 ,11,13);
        console.log(p)

    let nAME=prompt("eNTER ur name")
    console.log("Ur name is"+ nAME);
    console.log(`Ur name is ${nAME}`);

    
    

