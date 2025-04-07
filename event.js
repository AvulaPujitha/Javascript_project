let div=document.getElementById("div")
let btn=document.getElementById("btn")

btn.addEventListener("mouseover",()=>{
    div.style.backgroundColor="black"
    div.style.color="white"
    div.style.fontSize="30px"
    div.style.fontFamily="cursive"
    div.style.padding="20px"
    div.textContent="Heyy guys click the below button"
    div.style.backgroundColor="pink"
    div.style.textDecoration="underline"
    btn.textContent="click me"
}
)

btn.addEventListener('click',()=>{
    div.style.backgroundColor="pink"
    div.style.color="purple"
    div.textContent="April fool "
    btn.textContent="clicked"
})

btn.addEventListener("mouseout",()=>{
    div.style.backgroundColor="green"
    div.style.color="gold"
    div.textContent="reload the sight"
    btn.textContent="not in Zone"
})

document.addEventListener('keydown',(event)=>{
    console.log(event.key);
})
console.log("--------")
document.addEventListener('keyup',(event)=>{
    console.log(event.key);
})


//document