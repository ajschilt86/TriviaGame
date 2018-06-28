$(document).ready(function () {

    var counter = 10;
    var correctGuesses = 0;
    var wrongGuesses = 0;
    var unasnsweredGuesses = 0;
    var selectedAnswer = 0;
    var questionCounter = 0;


    var questions = [
        {
            question: "what is the capital of Illinois?",
            choice1: "joliet",
            choice2: "rockford",
            choice3: "springfield",
            choice4: "chicago",
            answer: "springfield"
        },
        {
            question: "what is the capital of Michigan?",
            choice1: "detroit",
            choice2: "lansing",
            choice3: "springfield",
            choice4: "chicago",
            answer: "lansing"
        }
    ]



    function starGame() {
        $(".container").html("<p><button id='startBtn'>Start</button></p>");

    }

    starGame();

    function renderHtml() {

        for (var i = 0; i < questions.length; i++) {

            $(".container").html("<p class='timer'>Time Left: <span class='timeLeft'>10</span></p>")
            $(".container").append("<p class='questionSize'> " + questions[i].question + "</p>");
            $(".container").append("<p class='answerSize answer1'>A: " + questions[i].choice1 + "</p>");
            $(".container").append("<p class='answerSize answer2'>B: " + questions[i].choice2 + "</p>");
            $(".container").append("<p class='answerSize answer3'>C: " + questions[i].choice3 + "</p>");
            $(".container").append("<p class='answerSize answer4'>D: " + questions[i].choice4 + "</p>");
            setTimeout(transitionTime, 4000);

            console.log(questions);
            console.log(questions[i].choice1);
            console.log(questions[i].choice2);
            console.log(questions[i].choice3);
            console.log(questions[i].choice4);
        }
        $("#startBtn").on("click", function () {
            renderHtml();
            timer();
        });

        $(".answer1").on("click", function () {

            if (questions[i].choice1 === questions.answer) {
                renderRight();
            }
            else {
                renderWrong();
            }

        });

        $(".answer2").on("click", function () {
            selectedAnswer = $(this).text();
            if (selectedAnswer === questions[i].answer) {
                renderRight();
            }
            else {
                renderWrong();
            }

        });
        $(".restartBtn").on("click", function () {
            renderHtml();
            timer();
        });





    }

    function timer() {
        clock = setInterval(decrement, 1000);
        counter--;


        function decrement() {

            if (counter > 0) {
                counter--;
            }
            if (counter === 0) {
                clearInterval(clock);
                noTime();
            }
            $(".timeLeft").html(counter);
        }

    }

    function noTime() {
        unasnsweredGuesses++;
        $(".container").html("<p class='timer'>Time Left: <span class='timeLeft'>10</span></p>");
        $(".container").append("<p class='answerSize'>The correct answer was, " + questions[i].answer + "</p>");
        setTimeout(transitionTime, 4000);
    }

    function renderRight() {
        correctGuesses++;
        $(".container").html("<p class='timer'>Time Left: <span class='timeLeft'>10</span></p>");
        $(".container").append("<p>" + questions[i].answer + "was the right response!!</p>");
        transitionTime();
        setTimeout(transitionTime, 4000);
    }

    function renderWrong() {
        wrongGuesses--;
        $(".container").html("<p class='timer'>Time Left: <span class='timeLeft'>10</span></p>");
        $(".container").append("<p>Wrong answer :(" + questions[i].answer + " was the right response</p>");
        transitionTime();
        setTimeout(transitionTime, 4000);

    }

    function transitionTime() {
        if (questionCounter < 7) {
            questionCounter++;
            renderHtml();
            counter = 10;
            timer();
        }
        else {
            resultScreen();
        }
    }

    function resultScreen() {
        clearInterval(clock);
        $(".container").html("<p class='timer'>Time Left: <span class='timeLeft'>10</span></p>");
        $(".container").append("You finished the game!");
        $(".container").append("Correct Answers: " + correctGuesses);
        $(".container").append("Wrong Answers: " + wrongGuesses);
        $(".container").append("Unanswered Questions: " + unasnsweredGuesses);
        $(".container").append("<p><button id='restartBtn'>restart?</button></p>");
    }

    function reset() {
        counter = 10;
        correctGuesses = 0;
        wrongGuesses = 0;
        unasnsweredGuesses = 0;
        questionCounter = 0;
        renderHtml();
        timer();
    }



    ///// Button Listener/////
    $("#startBtn").on("click", function () {
        renderHtml();
        timer();
    });

    $(".answer").on("click", function () {
        selectedAnswer = $(this).text();
        if (selectedAnswer === questions[i].answer) {
            renderRight();
        }
        else {
            renderWrong();
        }

    });

    $(".restartBtn").on("click", function () {
        renderHtml();
        timer();
    });


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
