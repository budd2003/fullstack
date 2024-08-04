let score = 0;

let answer1 = prompt("What is the capital of India?");
if (answer1.toLowerCase() === "New Delhi") {
    alert("Right!");
    score++;
} else {
    alert("Wrong. The Right answer is New Delhi.");
}

let answer2 = prompt("Who created Bitcoin?");
if (answer2 === "Satoshi Nakamoto") {
    alert("correct!");
    score++;
} else {
    alert("Incorrect. The correct answer is Satoshi Nakamoto.");
}

let answer3 = prompt("What is the Full Form of the CAT exam?");
if (answer3.trim().toLowerCase() === "Common Admission Test") {
    alert("correct!");
    score++;
} else {
    alert("incorrect. The correct answer is Common Admission Test");
}

let answer4 = prompt("What is the Full form of ISRO?");
if (answer4.trim().toLowerCase() === "Indian Space Research Organization") {
    alert("correct!");
    score++;
} else {
    alert("incorrect. The correct answer is Indian Space Research Organization");
}

alert("You scored " + score + " out of 4!");