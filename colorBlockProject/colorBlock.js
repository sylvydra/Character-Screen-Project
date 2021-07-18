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


    function pokemonCenter() {
        newImg.classList.add("character")
        changedSquare.appendChild(newImg)

    }

    function unPoke() {
        if (newImg.src !== "") {
            changedSquare.removeChild(newImg)
        }
    }

    function p1Select() {
        if (newImg.src !== "") {
            setTimeout(() => {
                document.getElementById("charOne").appendChild(charImg)
                charImg.classList.add("playerSize")
            }, 2000)
        }
    }

    // if (changedSquare.style.backgroundColor !== "") {
    //     changedSquare.addEventListener("click", () => {
    //         pokemonCenter()
    //     })
    // }

    red.addEventListener("click", () => {
        removeColor()
        removeClip()
        changedSquare.style.backgroundColor = "red"
        changedSquare.style.clipPath = "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)"
        newImg.src = "https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/Mr._Krabs.svg/1200px-Mr._Krabs.svg.png"
        pokemonCenter()
    })

    orange.addEventListener("click", () => {
        removeColor()
        removeClip()
        changedSquare.style.backgroundColor = "orange"
        changedSquare.style.clipPath = "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)"
        newImg.src = "https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/Sandy_Cheeks.svg/1200px-Sandy_Cheeks.svg.png"
        pokemonCenter()
        charImg.src = "https://i.pinimg.com/474x/82/08/e0/8208e0d60d9393d30b7e2c5b59323b63.jpg"
        p1Select()
    })

    yellow.addEventListener("click", () => {
        removeColor()
        removeClip()
        changedSquare.style.backgroundColor = "yellow"
        changedSquare.style.clipPath = "inset(5% 5% 5% 5%)"
        newImg.src = "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png"
        pokemonCenter()
        charImg.src = "http://pm1.narvii.com/7400/ecbcf3ec0a6d4c49798333af224498a84fb4c50fr1-512-410v2_uhq.jpg"
        p1Select()
    })

    green.addEventListener("click", () => {
        removeColor()
        removeClip()
        changedSquare.style.backgroundColor = "green"
        changedSquare.style.clipPath = "ellipse(32% 48% at 50% 50%)"
        newImg.src = "https://upload.wikimedia.org/wikipedia/en/thumb/4/49/Plankton_and_Karen.svg/1200px-Plankton_and_Karen.svg.png"
        pokemonCenter()
    })

    blue.addEventListener("click", () => {
        removeColor()
        removeClip()
        changedSquare.style.backgroundColor = "blue"
        changedSquare.style.clipPath = "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)"
        newImg.src = "https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Squidward_Tentacles.svg/1200px-Squidward_Tentacles.svg.png"
        pokemonCenter()
    })

    indigo.addEventListener("click", () => {
        removeColor()
        removeClip()
        changedSquare.style.backgroundColor = "indigo"
        changedSquare.style.clipPath = "polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)"
        newImg.src = "https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Mrs._Puff.svg/1200px-Mrs._Puff.svg.png"
        pokemonCenter()
    })

    violet.addEventListener("click", () => {
        removeColor()
        removeClip()
        changedSquare.style.backgroundColor = "violet"
        changedSquare.style.clipPath = "polygon(50% 0%, 66% 31%, 98% 35%, 76% 59%, 79% 91%, 50% 74%, 21% 91%, 26% 61%, 2% 35%, 32% 31%)"
        newImg.src = "https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/1200px-Patrick_Star.svg.png"
        pokemonCenter()
    })

    clearColor.addEventListener("click", () => {
        removeColor()
        removeClip()
        unPoke()
    })


})