

    var counter = 5;
    var correctGuesses = 0;
    var wrongGuesses = 0;
    var unansweredGuesses = 0;
    var selectedAnswer = 0;
    var questionCounter = 0;
    var victoryCondition = 1;
    var clock;


    /*var questions = [
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
*/
    var questionsArray = [
        "what is the capital of Illinois?",
        "what is the capital of Michigan?",
        "what is the capital of indiana?",
        "what is the capital of Minnesota?",
        "what is the capital of Kentucky?"
    ];
    var answersArray = [
        ["Joliet", "Rockford", "Springfield", "Chicago"],
        ["Detroit", "Lansing", "Flint", "Kalamazoo"],
        ["Indianapolis", "Gary", "Bloomington", "South Bend"],
        ["Duluth", "Minnesota city", "Minneapolis", "Saint Paul"],
        ["Frankfort", "Lexington", "Louisville", "Owensboro"]
    ];
    var correctAnswers = ["C. Springfield", "B. Lansing", "A. Indianapolis", "C. Minneapolis", "A. Frankfort"];

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

    //////////////

    $(document).keydown(function (e) {
        var key_one = 49;
        var key_two = 50;
        var key_three = 51;
        var key_four = 52;

        if (e.keyCode == key_one) {
            if (e.keycode === correctAnswers[questionCounter]) {
                clearInterval(clock);
                renderRight();
            }
            else {
                clearInterval(clock);
                renderWrong();
            }
        }
        if (e.keyCode == key_two) {
            if (e.keycode === correctAnswers[questionCounter]) {
                clearInterval(clock);
                renderRight();
            }
            else {
                clearInterval(clock);
                renderWrong();
            }
        }
        if (e.keyCode == key_three) {
            if (e.keycode === correctAnswers[questionCounter]) {
                clearInterval(clock);
                renderRight();
            }
            else {
                clearInterval(clock);
                renderWrong();
            }
        }
        if (e.keyCode == key_four) {
            if (e.keycode === correctAnswers[questionCounter]) {
                clearInterval(clock);
                renderRight();
            }
            else {
                clearInterval(clock);
                renderWrong();
            }
        }

    });

    /////////////

    $("#restartBtn").on("click", function () {
        reset();
    });

    console.log(questionsArray[questionCounter]);
    console.log(answersArray[questionCounter][0]);
    console.log(answersArray[questionCounter][1]);
    console.log(answersArray[questionCounter][2]);
    console.log(answersArray[questionCounter][3]);
    console.log(correctAnswers[questionCounter]);


    function noTime() {
        unansweredGuesses++;
        $(".container").html("<p class='timer'>Time Left: <span class='timeLeft'>" + counter + "</span></p>");
        $(".container").append("<p class='answerSize'>The correct answer was, " + correctAnswers[questionCounter] + "</p>");
        setTimeout(transitionTime, 4000);
    }

    function renderRight() {
        correctGuesses++;
        $(".container").html("<p class='timer'>Time Left: <span class='timeLeft'>" + counter + "</span></p>");
        $(".container").append("<p>" + correctAnswers[questionCounter] + "was the right response!!</p>");
        //transitionTime();
        setTimeout(transitionTime, 4000);
    }

    function renderWrong() {
        wrongGuesses++;
        $(".container").html("<p class='timer'>Time Left: <span class='timeLeft'>" + counter + "</span></p>");
        $(".container").append("<p class='answerSize'>Wrong answer :(" + correctAnswers[questionCounter] + " was the right response</p>");
        //transitionTime();
        setTimeout(transitionTime, 4000);

    }

    function renderHtml() {
        $(".container").html("<p class='timer'>Time Left: <span class='timeLeft'>5</span></p>")
        $(".container").append("<p class='questionSize'> " + questionsArray[questionCounter] + "</p>");
        $(".container").append("<p class='answerSize answer'>A: " + answersArray[questionCounter][0] + "</p>");
        $(".container").append("<p class='answerSize answer'>B: " + answersArray[questionCounter][1] + "</p>");
        $(".container").append("<p class='answerSize answer'>C: " + answersArray[questionCounter][2] + "</p>");
        $(".container").append("<p class='answerSize answer'>D: " + answersArray[questionCounter][3] + "</p>");

    }

    function transitionTime() {
        if (questionCounter < 4) {
            questionCounter++;
            renderHtml();
            counter = 5;
            timer();
        }
        else {
            results();
        }
    }

    function timer() {
        clock = setInterval(decrement, 1000);
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

    function results() {
        clearInterval(clock);
        $(".container").html("<p class='timer'>Time Left: <span class='timeLeft'>" + counter + "</span></p>");
        $(".container").append("<p>You finished the game!");
        $(".container").append("<p>Correct Answers: " + correctGuesses + "</p>");
        $(".container").append("<p>Wrong Answers: " + wrongGuesses + "</p>");
        $(".container").append("<p>Unanswered Questions: " + unansweredGuesses + "</p>");
        $(".container").append("<p><button id='restartBtn'>Restart?</button></p>");
    }

    function reset() {
        counter = 5;
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


