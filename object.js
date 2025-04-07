// create objects ......
    let person = {
            name: "Puji",
            age: 17,
            city: "New York"
    }
    console.log(person)     // printing your object 

//loops for-in
    for(let i in person ){
        console.log(i); //key 
        console.log(person[i]);    //value  
    }
//for-in loop
    for(let i in person ){
        console.log(i,person[i]);   // key value in same line 
    }

// access -> bracket [""], dot  . notation 
    console.log(person.name);   //puji
    console.log(person.age); 
    // in bracket if we use any key keep it in double quote
    console.log(person["city"]);


//update










//add 
    person.mobile="xxx-xxxx-xxx"
    console.log(person);

//delete
    delete person.city 
    console.log(person);

// object in object university(student)
    let university = {
            name:"Parul",
            place:"Vadodara",
                student:{
                    stud_name:"Pujitha",
                    stud_marks:"98",
                    stud_roll:"20"
                }
        }
    console.log(university);
    console.log(university.student.stud_marks);    
        // we should use . to print seperately 
    
    



