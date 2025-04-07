// arrrays 
    let numbers = [1,"str", true, 4.9, 5];
    console.log(numbers);
    
    for (let x of numbers ){
        console.log(x);
    }

//access
    console.log(numbers[0]);//1
    console.log("length of array");
    console.log(numbers.length);   //5

// update
    console.log("Updating an array");
    numbers[0] = 10;
    console.log(numbers);

    let arr = [1,2,3,4,5,6,7,8,9]
// delete splice()
    console.log("splice() method");
    let arr2 = arr.splice(3,2);
        //(index,no_of_elements)
    console.log(arr);   //1,2,3,6,7,8,9

// delete and replace --> (index, no_of_elements, replaced_element)
    arr.splice(2,1,2)
    console.log(arr);   //1, 2, 2, 6, 7, 8, 9

    arr.splice(4,0,2,9,10)      
        /*  here  first one 4 is index and then after the 4th index the 
        remaining four elements will be replaced and the remaining
        index elemnts will be written after the replaced elemnts */
    console.log(arr);   
        //[ 1, 2, 2, 6, 2, 9, 10, 7, 8, 9] => arr

    let arr1=[1,2,3]
    console.log("concatination of arrays");
    console.log(arr.concat(arr1));  //merged array

// push & pop methods 
    arr1.push(10)
    console.log("push methods");// push method will add elements to last
    console.log(arr1); //

//pop method 
    console.log("pop method");//pull method will delete elements from last
    arr1.pop() 
    console.log(arr1);

// shift(delete)& unshift(add) methods 
// arr1 = 1,2,3,10
    arr1.shift()   // delete from last
    console.log(arr1);// 2,3,10
    arr1.unshift(10)    //add at first
    console.log(arr1);  //10,2,3,10

// reverse 
    arr.reverse()
    console.log("reversed arr "+arr1);  //10,3,2,10

// spread operator => ...(these 3 dots are called spread operator )
    let arr3=[...arr,...arr1,"str",100]
        //it gives merged array
    console.log(arr2);

