// strings
    let str="Good afternoon,!"
    console.log(str)
    console.log(str.length);//16

//index-of
    console.log("Index of method");
    console.log(str.indexOf("o"));  //1
    console.log(str.indexOf("A"));  //-1
    console.log(str.indexOf("noon"));   //10

// last index method 
    console.log("Last index method");
    console.log(str.lastIndexOf("o")); //12
    console.log(str.lastIndexOf("n")); //13

// serch--> returns index of first
// occurence of the specified value
//str="Good afternoon,!"
    console.log("Search method");
    console.log(str.search("o"));   //1
    console.log(str.search("O"));   //-1
    console.log(str.search("after"));   //5

// includes-->returns true if the value is found
    console.log("includes method");
        //str="GOod afternoon,!"
    console.log(str.includes("o")); //true
    console.log(str.includes("@")); //false

// startsWith ()
    console.log(" startswith method");
    //str="Good afternoon,!"
    console.log(str.startsWith("g"));   //false
    console.log(str.startsWith("Go"));  //true
    console.log(str.endsWith("Go"));    //false
    console.log(str.endsWith("noon"));  //false
    console.log(str.endsWith("!"));     //true

//toLowercase()
// str="Good afternoon,!"
    console.log("To Lower case method");
    console.log(str.toLowerCase());
    console.log(str.toUpperCase());

// trim()
    let str1="  Parul   "
    console.log(str1);
    console.log((str1.length));
    console.log(str1.trim());   // space at starting & ending
    let trimstr=str1.trim()
    console.log(trimstr);
    console.log(trimstr.length);

// string to array 
    let str2="Hello, World"
    console.log(str);
    console.log(str2.split(""));
        // ['H', 'e', 'l', 'l', 'o', ',', ' ', 'W', 'o', 'r', 'l', 'd']
    console.log(str2.split("  "));
        // ['Hello, World']

//array to string
    let arr=['H', 'e', 'l', 'l', 'o']
    console.log(arr);
    console.log("convert to string ");
    console.log(arr.join());
    console.log(typeof(arr.join()));

//charAt() => return char at index 
// let str2="Hello, world"
    console.log("char at index");
    console.log(str2.charAt(2)) //l
    console.log(str2.charAt(6))

// charCode
    console.log("char code");
    console.log(str2.charCodeAt(2));    //l-108
    console.log(str2.charCodeAt(6));    //32

//slice()
    console.log("Slice Method");
    //let str2="Hello, world"
    console.log(str2.slice(0,5));//Hello
        // slice method --> Starting index to ending-1
        // 0 to 5-1 --> 0 to 4 then it print Hello
    //let str2="Hello, word"
    console.log(str2.slice(5));  //, world
    console.log(str2.slice(-1)); //d
        //if we include minus(-) then it prints from last of the string
    console.log(str2.slice(-5));    //world
    console.log(str2.slice(-5,-1)); //worl
    console.log(str2.slice(-1,-5)); //nothing
    console.log(str2.slice(0,-1));  //Hello, Worl

//subString() --> will not work with -ve index
    //let str2="Hello, world"
    console.log("subString Method");    //subString Method
    console.log(str2.substring());      //Hello, World
    console.log(str2.substring(2));     //llo, World
    console.log(str2.substring(2,5));   //llo
    console.log(str2.substring(-1));    //Hello, World
    console.log(str2.substring(-1,-5)); //nothing
    console.log(str2.substring(-5,-1)); //nothing
    console.log(str2.substring(-5));    //Hello, World

//subStr() --> starting index, no of char 
    //let str2="Hello, world"
    console.log("subStr Method"); //subStr Method
    console.log(str2.substr()); //Hello, World
    console.log(str2.substr(1));//ello, World
    console.log(str2.substr(1,5));
    /* ikkada 1 ante 1at index and 5 antee aa 1st index nunchi 
    5 indexs dhaka print cheyyali */
    console.log(str2.substr(3,7));
    /* ikkada 3 ante 3rd index and then 3rd index 1st index laa anukoni
    aa anukunna 1st index nunchi 7 words dhaka and vaatini 7 indexs
    anukovali and then aa anukunna 1st index nunchi 7 index 
    dhaka print cheyyali */
    console.log(str2.substr(7,20));
    console.log(str2.substr(7,0));
    console.log(str2.substr(-7));
    console.log(str2.substr(-7,3));