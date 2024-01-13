window.onkeyup = (e) => sounds(e.code)
const $ = value => {
    const elm = document.querySelectorAll(value)
    return elm.length > 1 ? elm : elm[0]
}
function sounds(key) {
    const letter = (key.substring(3)).toLowerCase()
    if ($('.sound-' + letter) !== undefined) {
        $('.sound-' + letter).currentTime = 0
        $('.sound-' + letter).play()
        contrast(letter)
    }
}
function contrast(letter) {
    $(".keys-" + letter).classList.add("press")
    setTimeout(() => {
        $(".keys-" + letter).classList.remove("press")
    }, 100)
}
$("button").onclick = () => {
    const lyrics = ($("#music").value).toLowerCase().split("")
    const response = lyrics.filter(letter => {
        if (letter === "q" || letter === "w" || letter === "e" || letter === "a" || letter === "s" || letter === "d" || letter === "z" || letter === "x" || letter === "c") {
            return true
        }
    })
    listenMusic.bind(response)()
}
function listenMusic() {
    let i = 0
    const loop = setInterval(() => {
        if (i >= this.length) {
            clearInterval(loop)
        } else {
            const upp = (this[i]).toUpperCase()
            sounds("Key" + upp)
        }
        i++
    }, 200)
}
$(".card").forEach(elm => {
    elm.onclick = function () {
        sounds(this.dataset.key)
        $("#music").value += (this.innerText).toLowerCase()
    }
})
