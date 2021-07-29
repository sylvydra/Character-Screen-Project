//raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

document.addEventListener("DOMContentLoaded", () => {

    const red = document.getElementById("red")
    const orange = document.getElementById("orange")
    const yellow = document.getElementById("yellow")
    const green = document.getElementById("green")
    const changedSquare = document.getElementById("changedSquare")
    const blue = document.getElementById("blue")
    const indigo = document.getElementById("indigo")
    const violet = document.getElementById("violet")
    const clearColor = document.getElementById("clearColor")
 
    var playerOne = document.querySelector(".playerOne")
    const playerTwo = document.querySelector(".playerTwo")
    var playButtonOne = document.getElementById("playButtonOne")
    const playButtonTwo = document.getElementById("playButtonTwo")

    // const blocks = document.getElementsByClassName("block")
    const clickableH2 = document.querySelectorAll("h2")

    const colorArray = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
    const variableArray = [red, orange, yellow, green, blue, indigo, violet]

    for (h2 of clickableH2) {
        h2.style.cursor = "pointer"
        h2.style.textShadow = "1px 1px 1px black"
    }

    red.style.color = colorArray[0]
    orange.style.color = colorArray[1]
    yellow.style.color = colorArray[2]
    green.style.color = colorArray[3]
    blue.style.color = colorArray[4]
    indigo.style.color = colorArray[5]
    violet.style.color = colorArray[6]



    function removeColor() {
        changedSquare.style.backgroundColor = ""
    }

    function removeClip() {
        changedSquare.style.clipPath = ""
    }

    let randomPoke = Math.floor(Math.random() * 151) + 1

    var newImg = document.createElement("img")
    var charImg = document.createElement("img")
    var secondImg = document.createElement("img")



    function pokemonCenter() {
        newImg.classList.add("character")
        changedSquare.appendChild(newImg)
    }

    function unPoke() {
        if (newImg.src !== "") {
            changedSquare.removeChild(newImg)
        }
    }

    function playerOneRemove() {
        if(newImg.src !== "") {
            document.getElementById("charOne").removeChild(charImg)
            charImg.src === ""
            document.getElementById("charOne").style.border === ""
        }
    }
    function playerTwoRemove() {
        if(secondImg.src !== "") {
            document.getElementById("charTwo").removeChild(secondImg)
            secondImg.src === ""
        }
    }

    function playerSelect(img) {
        if(document.getElementById("charOne").style.border === "2px dashed red") {
            secondImg.src = img
            document.getElementById("charTwo").appendChild(secondImg)
            secondImg.classList.add("playerSize")
        }
        else if(document.getElementById("charOne").style.border !== "2px dashed red") {
            charImg.src = img
            document.getElementById("charOne").appendChild(charImg)
            charImg.classList.add("playerSize")
        }
    }

    red.addEventListener("click", () => {
        removeColor()
        removeClip()
        changedSquare.style.backgroundColor = "red"
        changedSquare.style.clipPath = "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)"
        newImg.src = "https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/Mr._Krabs.svg/1200px-Mr._Krabs.svg.png"
        pokemonCenter()
        playerSelect("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/405610ed-0ed8-404b-b733-b0bc5ad9d340/ddpxmfm-389baa34-1c67-48aa-b48b-e7e236ea5efe.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQwNTYxMGVkLTBlZDgtNDA0Yi1iNzMzLWIwYmM1YWQ5ZDM0MFwvZGRweG1mbS0zODliYWEzNC0xYzY3LTQ4YWEtYjQ4Yi1lN2UyMzZlYTVlZmUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.RhBeMW7wdXucVOyc9SnmZH7mL-T7HqI72RLrvXBNUCI")
    })

    orange.addEventListener("click", () => {
        removeColor()
        removeClip()
        changedSquare.style.backgroundColor = "orange"
        changedSquare.style.clipPath = "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)"
        newImg.src = "https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/Sandy_Cheeks.svg/1200px-Sandy_Cheeks.svg.png"
        pokemonCenter()
        playerSelect("https://i.pinimg.com/474x/82/08/e0/8208e0d60d9393d30b7e2c5b59323b63.jpg")
    })

    yellow.addEventListener("click", () => {
        removeColor()
        removeClip()
        changedSquare.style.backgroundColor = "yellow"
        changedSquare.style.clipPath = "inset(5% 5% 5% 5%)"
        newImg.src = "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png"
        pokemonCenter()
        playerSelect("http://pm1.narvii.com/7400/ecbcf3ec0a6d4c49798333af224498a84fb4c50fr1-512-410v2_uhq.jpg")
    })

    green.addEventListener("click", () => {
        removeColor()
        removeClip()
        changedSquare.style.backgroundColor = "green"
        changedSquare.style.clipPath = "ellipse(32% 48% at 50% 50%)"
        newImg.src = "https://upload.wikimedia.org/wikipedia/en/thumb/4/49/Plankton_and_Karen.svg/1200px-Plankton_and_Karen.svg.png"
        pokemonCenter()
        playerSelect("https://i.pinimg.com/originals/5f/7a/38/5f7a38445fb9f317a4f78b955ae825ce.jpg")
    })

    blue.addEventListener("click", () => {
        removeColor()
        removeClip()
        changedSquare.style.backgroundColor = "blue"
        changedSquare.style.clipPath = "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)"
        newImg.src = "https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Squidward_Tentacles.svg/1200px-Squidward_Tentacles.svg.png"
        pokemonCenter()
        playerSelect("https://mtv.mtvnimages.com/uri/mgid:file:http:shared:mtv.com/news/wp-content/uploads/2015/01/Squidward-1422477764.png?quality=.8&height=480&width=640")
    })

    indigo.addEventListener("click", () => {
        removeColor()
        removeClip()
        changedSquare.style.backgroundColor = "indigo"
        changedSquare.style.clipPath = "polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)"
        newImg.src = "https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Mrs._Puff.svg/1200px-Mrs._Puff.svg.png"
        pokemonCenter()
        playerSelect("https://pbs.twimg.com/profile_images/1013562903067332608/Cjc2_ZaY_400x400.jpg")
    })

    violet.addEventListener("click", () => {
        removeColor()
        removeClip()
        changedSquare.style.backgroundColor = "violet"
        changedSquare.style.clipPath = "polygon(50% 0%, 66% 31%, 98% 35%, 76% 59%, 79% 91%, 50% 74%, 21% 91%, 26% 61%, 2% 35%, 32% 31%)"
        newImg.src = "https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/1200px-Patrick_Star.svg.png"
        pokemonCenter()
        playerSelect("https://i1.sndcdn.com/artworks-ZOCaszzIwZ6DM81Y-4pOXIQ-t500x500.jpg")
    })

    clearColor.addEventListener("click", () => {
        removeColor()
        removeClip()
        unPoke()
        playerOneRemove()
        playerTwoRemove()
    })

    const cancelButton = document.createElement("div")

    playButtonOne.addEventListener("click", () => {
        document.getElementById("charOne").style.border = "2px dashed red"
        cancelButton.style.height = "20px"
        cancelButton.style.width = "50px"
        cancelButton.style.backgroundColor = "salmon"
        cancelButton.style.display = "inlineBlock"
        playerOne.appendChild(cancelButton)
    })


})