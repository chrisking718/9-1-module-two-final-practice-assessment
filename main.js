const people = document.querySelector("#people")

const info = document.querySelector("#info")

const form = document.querySelector("form")

const remove = document.querySelector("#reset-shoutouts")

const shoutoutList = document.querySelector("ul")

const shout = document.querySelector("#shoutout")


fetch("https://ghibliapi.herokuapp.com/people")
    .then((res)=>res.json())
    .then((res)=>{
        console.log(res)
        
        
        let i  = 0
        res.forEach(element => {
            
            const opt = document.createElement("option")
            opt.setAttribute("value",`${element.name}`)
            opt.innerText=`${element.name}`
            opt.setAttribute("index",`${i}`)

            people.append(opt)

           
            i++ 
        });

        window.localStorage.setItem('person',JSON.stringify(res))
        
    })
    .catch((error) => console.log(error))



function addPeople(){
        
    
        // console.log(`${people["value"]}`)
        // console.log(JSON.parse(window.localStorage.getItem("person")).length)

for (let w = 0;w<JSON.parse(window.localStorage.getItem("person")).length;w++){

    if(people["value"] === JSON.parse(window.localStorage.getItem("person"))[w]["name"]){

        const h4 = document.createElement("h4")
            h4.innerText = JSON.parse(window.localStorage.getItem("person"))[w]["name"]
            
            const age = document.createElement("p")
            age.innerText = JSON.parse(window.localStorage.getItem("person"))[w]["age"]
            
            const eye = document.createElement("p")
            eye.innerText = JSON.parse(window.localStorage.getItem("person"))[w]["eye_color"]

            const hair = document.createElement("p")
            hair.innerText = JSON.parse(window.localStorage.getItem("person"))[w]["hair_color"]
            
            info.innerHTML = ""

            info.append(h4,age,eye,hair)
    }
}

            
        }




form.addEventListener("submit",(event)=>{
    event.preventDefault()
    console.log("form")

if(people["value"]===""){
    alert("Please select a person to give a shoutout!")
}else{
    let message = document.createElement("li")
    message.innerText = `${people["value"]}: ${shout.value}`


    shoutoutList.append(message)
shout.value = ""
} 
})      



remove.addEventListener("click",(event)=>
{
    event.preventDefault()
    

shoutoutList.innerHTML=""

})