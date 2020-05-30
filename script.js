// Define defaults values
var startBtn = document.querySelector('#start');
var timerEl = document.querySelector('#timer');
var quizBoxEl = document.getElementById('quizBox');
var startPage = document.querySelector('#main');
var decisionMade = document.querySelectorAll('.multipleChoice')

// questions list and answers
var quizBox = [
    {
        questions: '1. Inside which HTML element do we put the JavaScript?',
        multipleChoice: [
            'script',
            'js',
            'javaScript',
        ],
        quizAnswer: 'script'
    },{
        questions: '2. Where is the correct place to insert a JavaScript?',
        multipleChoice: [
            'body section',
            'body and head section',
            'head section',
        ],
        quizAnswer: 'head section'
    },{
        questions: '3. What is the correct syntax for referring to an external script called "xxx.js"?',
        multipleChoice: [
            'script name = "xxx.js"',
            'script href = "xxx.js"',
            'script src = "xxx.js"',
        ],
        quizAnswer: 'script src = "xxx.js'
    },{
        questions: '4. How do you write "Hello World" in an alert box?',
        multipleChoice: [
            'msgBox("Hello World");',
            'alert("Hello World");',
            'alertBox("Hello World");',
        ],
        quizAnswer: 'alert("Hello World");'
    },{
        questions: '5. How do you create a function in JavaScript?',
        multipleChoice: [
            'function:myFunction()',
            'function myFunction()',
            'function = myFunction()',
        ],
        quizAnswer: 'function myFunction()'
    },{
        questions: '6. How do you call a function named "myFunction"?',
        multipleChoice: [
            'call myFunction()',
            'myFunction',
            'myFunction()',
        ],
        quizAnswer: 'myFunction()'
    },{
        questions: '7. How does a WHILE loop start?',
        multipleChoice: [
            'while i++',
            'while (i<=10; i++)',
            'while i = 1 to 10',
        ],
        quizAnswer: 'while (i<=10; i++)'
    }, {
        questions: '8. Which event occurs when the user clicks on an HTML element?',
        multipleChoice: [
            'onmouseover',
            'onchange',
            'onclick',
        ],
        quizAnswer: 'onclick'
    }
    ];

// Start Button
startBtn.addEventListener('click', function(){
    toggleShowStartPage();
    quizBoxEl.style.display = 'block';
    showingQuizes();
    startTime();
})

// Show Start Page
function toggleShowStartPage(){
    if (startPage.style.display === 'none'){
        startPage.style.display = 'block';
    } else {
        startPage.style.display = 'none';
    }
}

// quizBox.classList.toggle("show");

// Showing Quizes
function showingQuizes(){
    document.getElementById('questions').textContent = quizBox[timer].questions;
    document.getElementById('choice1').textContent = quizBox[timer].multipleChoice[0];
    document.getElementById('choice2').textContent = quizBox[timer].multipleChoice[1];
    document.getElementById('choice3').textContent = quizBox[timer].multipleChoice[2];
}

// Timer
var timer = 0;
var totalTimeLeft =50;
var timeInterval;


function startTime(){
    timeInterval = setInterval(function(){
        totalTimeLeft --;
        timerEl.textContent = totalTimeLeft;
        if (totalTimeLeft <= 0 ){
            clearInterval(timeInterval);
            timer = 8;
            // when time or socre were hit 0 ask for try again
            var check = confirm("Time is over Please try again");
                if (check ==true){
                location.reload();
            } else{// may be set it to the default page
                location.reload();
            }
            // stop Need to finish function
        }
    },1000);
}

// Subtract Time 
function incorrectAns(){
    totalTimeLeft = totalTimeLeft -5;
}

// Decision Making
decisionMade.forEach(function (button) {
    button.addEventListener('click', function () {
        var userChoice = this.textContent;
        var quizAnswer = quizBox[timer].correct;
        var username = localStorage.getItem("username");
        if (userChoice === quizAnswer) {
            console.log({ userChoice, currentCorrectAnswer });
        } else {
            incorrectAns();
        }
        timer++;
        if (timer===8) {
            alert (`It's Done!!!  Your Score is ${totalTimeLeft}`)
            clearInterval (timeInterval);
            // ask for user Name and save the info(name and score) to a local storage.
            var userName = localStorage.getItem("userName")
            if(!userName){
                userName = prompt("Please enter your name or initial");
                localStorage.setItem("UserNameScore", [userName, totalTimeLeft]);
            }
        } else{
            showingQuizes();
        }
    });
});

// when time done


quizBoxEl.style.display = 'none';