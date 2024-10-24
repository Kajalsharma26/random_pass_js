const button=document.querySelector(".btn");
const pass=document.querySelector(".pass");

const generatepass=(iteration)=>{
    const chart="5444fhhgihfyd!duf@#$#%@bvhvuy55454979gfytdytfiji5555ugyjuhuuh?/6m"
    let password= ""

    for(let i=1;i<=iteration;i++){
        const index=Math.floor(Math.random()*chart.length)
        password +=chart[index]
    }
    return password
}
button.addEventListener("click",(event) => {
    event.preventDefault()
    const length=Number(document.querySelector(".length").value)
        pass.innerText=generatepass(length)

})