$(document).ready(function () {

    var counter = 15;
    var correctGuesses = 0;
    var wrongGuesses = 0;
    var unansweredGuesses = 0;
    var selectedAnswer = 0;
    var questionCounter = 0;
    var clock;
    var questionsArray = [
        "What is the capital of Illinois?",
        "What is the capital of Michigan?",
        "What is the capital of indiana?",
        "What is the capital of Minnesota?",
        "What is the capital of Kentucky?",
        "What is the capital of Missouri?",
        "What is the capital of Maryland?",
        "What is the capital of South Dakota?",
        "What is the capital of Alabama?",
        "What is the capital of Kansas?"
    ];
    var answersArray = [
        ["Joliet", "Rockford", "Springfield", "Chicago"],
        ["Detroit", "Lansing", "Flint", "Kalamazoo"],
        ["Indianapolis", "Gary", "Bloomington", "South Bend"],
        ["Duluth", "Minnesota city", "Minneapolis", "Saint Paul"],
        ["Frankfort", "Lexington", "Louisville", "Owensboro"],
        ["Saint Louis", "Jefferson City", "Columbia", "Kansas City"],
        ["Baltimore", "Germantown", "Annapolis", "Silver Spring"],
        ["Sioux Falls", "Rapid City", "Watertown", "Pierre"],
        ["Montgomery", "Birmingham", "Mobile", "Tuscaloosa"],
        ["Witchita", "Topeka", "Overland Park", "Olathe"]
    ];
    var correctAnswers = ["Springfield", "Lansing", "Indianapolis", "Saint Paul", "Frankfort", "Jefferson City", "Annapolis", "Pierre", "Montgomery", "Topeka"];

    function starGame() {
        $(".container").html("<p><button id='startBtn'>Click to Start the Trivia Game!</button></p>");
    }
    starGame();
    ///// Button Listener/////
    $("#startBtn").on("click", function () {
        renderHtml();
        timer();
    });

    $("body").on("click", ".answer", function (event) {
        console.log(this);
        selectedAnswer = $(this).text();
        if (selectedAnswer === correctAnswers[questionCounter]) {
            clearInterval(clock);
            renderRight();
        }
        else {
            clearInterval(clock);
            renderWrong();
        }
    });

    $("#restartBtn").on("click", function () {
        reset();
    });

    function noTime() {
        unansweredGuesses++;
        $(".container").html("<p class='timer'>Time Left: <span class='timeLeft'>" + counter + "</span></span></p>");
        $(".container").append("<p class='rightWrong'>The correct answer was " + correctAnswers[questionCounter] + "</p>");
        $(".container").append("<img class='noTimePic' src='assets/images/time.jpg'>");
        setTimeout(transitionTime, 3000);
    }
    /////right answer screen/////
    function renderRight() {
        correctGuesses++;
        $(".container").html("<p class='timer'>Time Left: <span class='timeLeft'>" + counter + "</span></p>");
        $(".container").append("<p class='rightWrong'>" + correctAnswers[questionCounter] + " was the right answer!!</p>");
        $(".container").append("<img class='rightPic' src='assets/images/right.png'>");
        //transitionTime();
        setTimeout(transitionTime, 3000);
    }
    /////wrong answer screen/////
    function renderWrong() {
        wrongGuesses++;
        $(".container").html("<p class='timer'>Time Left: <span class='timeLeft'>" + counter + "</span></p>");
        $(".container").append("<p class='rightWrong'>The correct answer was " + correctAnswers[questionCounter] + "</p>");
        $(".container").append("<img class='rightPic' src='assets/images/wrong.png'>");
        //transitionTime();
        setTimeout(transitionTime, 3000);

    }
    /////questions/////
    function renderHtml() {
        $(".container").html("<p class='timer'>Time Left: <span class='timeLeft'>15</span></p>")
        $(".container").append("<p class='questionSize'> " + questionsArray[questionCounter] + "</p>");
        $(".container").append("<p class='answerSize answer'>" + answersArray[questionCounter][0] + "</p>");
        $(".container").append("<p class='answerSize answer'>" + answersArray[questionCounter][1] + "</p>");
        $(".container").append("<p class='answerSize answer'>" + answersArray[questionCounter][2] + "</p>");
        $(".container").append("<p class='answerSize answer'>" + answersArray[questionCounter][3] + "</p>");

    }
    /////slide timer/////
    function transitionTime() {
        if (questionCounter < 9) {
            questionCounter++;
            renderHtml();
            counter = 15;
            timer();
        }
        else {
            results();
        }
    }
    /////Countdown Timer/////
    function timer() {
        clock = setInterval(decrement, 1000);
        function decrement() {
            if (counter > 0) {
                counter--;
            }
            if (counter === 5) {
                $(".timeLeft").addClass("fiveLeft")
            }
            if (counter === 0) {
                clearInterval(clock);
                noTime();
            }
            $(".timeLeft").html(counter);
        }
    }
    /////results page/////
    function results() {
        clearInterval(clock);
        $(".container").html("<p class='timer'>Time Left: <span class='timeLeft'>" + counter + "</span></p>");
        $(".container").append("<p class='resultsHead'>You finished the game!");
        $(".container").append("<p class='finishedSize'>Correct Answers: " + correctGuesses + "</p>");
        $(".container").append("<p class='finishedSize'>Wrong Answers: " + wrongGuesses + "</p>");
        $(".container").append("<p class='finishedSize'>Unanswered Questions: " + unansweredGuesses + "</p>");
        $(".container").append("<p class='resultsBtn'><button id='restartBtn'>Click to Play Again!</button></p>");
    }
    /////resets everything/////
    function reset() {
        counter = 15;
        correctGuesses = 0;
        wrongGuesses = 0;
        unansweredGuesses = 0;
        questionCounter = 0;
        renderHtml();
        timer();
    }

    // on click, start game
    //timer starts and question shows up,
    //hover effects over possible answers
    //user selects answer
    //notified if the answer is correct or not
    //gives answer
    //next question shows up, if the time expires or answer is given
    //after all the questions, show correct/incorrect/unasnswered
    //star over button, does not reload page....goes straight to first question

});
