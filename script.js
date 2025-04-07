let count = 0;
// decrease : decreaasing the value 
document.getElementById("decreaseBtn").onclick = ()=>{
    count -= 1;     // or count = count - 1;
    document.getElementById("countlabel").innerHTML = count;
};

//reset: reset the value to zero 
document.getElementById("resetBtn").onclick = ()=>{
    count = 0;     
    document.getElementById("countlabel").innerHTML = count;
};

/*
// increase: increase the value 
document.getElementById("increaseBtn").onclick = ()=>{
    count += 1;     // or count = count + 1;
    document.getElementById("countlabel").innerHTML = count;
};
*/

// increaseBtn:
document.getElementById("increaseBtn").onclick = ()=>{
    if(count==10){
        alert("Your Limit is Over")
    }else{
    count += 1;     // or count = count + 1;
    document.getElementById("countlabel").innerHTML = count;
    }
}