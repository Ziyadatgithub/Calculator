const textone = document.querySelector("#textboxone")
const texttwo = document.querySelector("#textboxtwo")
const add = document.querySelector("#add")
const minus = document.querySelector("#minus")
const ans1 = document.querySelector("#addition")
const ans2 = document.querySelector("#minusresult")

add.addEventListener("click",function(){
    const answer = document.createElement("h2")
    answer.textContent = Number(textone.value) + Number(texttwo.value)
    ans1.append(answer)
})

minus.addEventListener("click",function(){
    const answertwo = document.createElement("h2")
    answertwo.style.color="darkcyan"
    answertwo.style.fontSize="35px"
    answertwo.textContent = Number(textone.value) - Number(texttwo.value)
    ans2.append(answertwo)
})