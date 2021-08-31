const myButton = document.getElementById("myBTN")
const myParagraph = document.getElementById("mPara")
const rndIcon = document.getElementById("myIconImage")
const mySweetPicArr = ["bee.png", "cubes.png", "dog.png", "fox.png", "home.png", "number.png", "shocked.png", "sign.png", "thinking.png", "thunderbolt.png", "cat.png", "hamster.png", "dice.png", "four-leaf.png", "infinity.png", "coin.png", "money.png", "chess-piece.png", "chess-pieces.png", "chess-board.png"]

// Checking localStorage if the item is empty.
if (localStorage.getItem("randomImage") === null){
    localStorage.setItem("randomImage", "infinity.png")

}

// Storing number LONG
const valueFromLocalStorage = JSON.parse(localStorage.getItem("randomNumber"))
myParagraph.innerText = valueFromLocalStorage

// Storing image LONG
const imageFromLocalStorage = localStorage.getItem("randomImage")
let myLocalImage = imageFromLocalStorage
rndIcon.src = `images/${myLocalImage}`


myButton.addEventListener("click", function(){
    myParagraph.innerText = rndNumber()
    rndIcon.src = `images/${rndItem()}`

    // Storing Number
    localStorage.setItem("randomNumber", JSON.stringify(rndNumber()))
    myLocalValue = JSON.parse(localStorage.getItem("randomNumber"))
    myParagraph.innerText = myLocalValue

    // Storing Image
    localStorage.setItem("randomImage", rndItem())
    myLocalImage = localStorage.getItem("randomImage")
    rndIcon.src = `images/${myLocalImage}`

})



// Generate Random Number from 0 - 100
function rndNumber(){
    myNumber = Math.floor(Math.random()*100);
    return myNumber
}

// Get random item from array
function rndItem(){
    item = mySweetPicArr[Math.floor(Math.random()*mySweetPicArr.length)];
    return item
}