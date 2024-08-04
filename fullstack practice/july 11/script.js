alert("lets start quizz??")

let a = prompt("What city is known as the eternal city??")
let b = prompt("What planet is closest to the sun?")
let c = prompt("Where is the strongest human muscle located?")
a = a.toLowerCase()
b = b.toLowerCase()
c = c.toLowerCase()
let count = 0
if (a == "rome") {
    count++
}
if (b == "mercury") {
    count++
}
if (c == "jaw") {
    count++
}
alert(count)