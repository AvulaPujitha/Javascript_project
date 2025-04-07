// DOM --> Document Object Model 
// when a webpage is loaded browser creates a DOM of the page l
    document.body.style.backgroundColor="pink"
    console.log("pujitha")
        //prints PUJITHA on console
    document.write("pujitha")
        // prints PUJITHA on page

    document.write("<h1>pujitha</h1>")

//selectors in js 
//getElementById return element
// <h1> id="h1">Heading</h1>
    let head=document.getElementById("h1")
    console.log(head);
    head.style.color="purple"

    //elementbyclass => html collection 
        let gtcls=document.getElementsByClassName("jy")
        console.log(gtcls);
        gtcls[0].style.backgroundColor="red";
        gtcls[1].style.backgroundColor="brown";

        for(let i=0; i<gtcls.length; i++)
            {
                gtcls[0].style.color="gold"
            }

// tag name => html collection 
    let tg=document.getElementsByTagName("h1")

    console.log(tg);
    tg[0].style.textDecoration="Underline";

    for(let j=0; j<tg.length; j++)
    {
        tg[1].style.textTransform="uppercase"
    }

// query selector => html element
    let qu=document.querySelector("h4")
    console.log(qu)
    qu.style.color="aqua"

// query selector => html element
    let qp=document.querySelector(".cls")
    console.log(qp)
    qp.style.color="green"
//getElementById return element 
//elementarybycls => html collection 
//tag name => html collection
//queryselector => html collection 
//queryAll => node list 
    let p=document.querySelectorAll("h2")
    console.log(p);
    p[0].style.color="aqua"

    for(let i=0; i<p.length;i++){
        p[a].style.textDecoration="underline overline"
    }
    

// create element eith Js
    let newh1 = document.createElement("h1")
    newh1.textContent="new heading"
        // <h1> new heading </h1>
    document.body.appendChild(newh1)

// create input and attributes 
    let newinp=document.createElement("input")
    newinp.type="text"
    newinp.placeholder="Enter your name"
    document.body.appendChild(newinp)