var choices = [];

function choose(choice) {
    choices.push(choice);
    showNextQuestion();
}

function showNextQuestion() {
    var questions = document.getElementById("buttonContainer");
    var resultContainer = document.getElementById("resultContainer");

    if (choices.length === 2) {
        questions.style.display = "none";
        resultContainer.style.display = "block";
        var resultText = "Your choices: " + choices.join(", ");
        resultContainer.textContent = resultText;
    }
}

var leftButton = document.getElementById("leftButton");

leftButton.addEventListener("click", function() {
    window.location.href = "question6.html";
});

var rightButton = document.getElementById("rightButton");

rightButton.addEventListener("click", function() {
    window.location.href = "question6.html";
});