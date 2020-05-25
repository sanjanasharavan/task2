function populate() {  
    if(quiz.isEnded()) {
    showScores();
    }
    else {
        //show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text; 

        // show choices
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i< choices.length; i++) { 
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices [i]; 
            guess("btn" + i, choices[i]); 
        } 
        showProgress();
    }
};

function guess(id,guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();

    }
};

function showProgress() {
var currentQuestionNumber = quiz.questionIndex + 1;
var element = document.getElementById("progress");
element.innerHTML="Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHtml = "<h1>Result</h1> " ;
    
     gameOverHtml += "<h2 id='score'> Your score: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
    }

var  questions = [
    new Question("Which of following is shared structure of a set of similar objects?", ["Encapsulaion", "A class", "Inheritance", "None of the above"], "A class"),
    new Question("Which of the following does not have a body ?", ["Double", "A class", "An abstract method", "None of the above"], "An abstract method"),
    new Question(" A private member of a class is visible to", ["Everywhere", "In sub class", "Only members of same class", "None of the above"], "Only members of same class"),
    new Question("Which of the following is not related to OOPS? ", ["Class and Object", "Constructor and Destructor", "Structure and Union", "Inheritance and Polymorphism"], "Structure and Union"),
    new Question(" Which of the following is an abstract data type?", ["Double", "String", "Int", "Class"], "Class"),
    new Question(" In oops public, private & protected are",["Classes", "Access Modifiers", "Interfaces", "Method signature"], "Access Modifiers"),
    new Question(" Which of the following is correct for copy constructor?", ["The argument object is passed by reference", "It can be defined with zero arguments", "Used when an object is passed by value ", "Used when a function returns an onject"], "It can be defined with zero arguments"),
    new Question(" Which Feature of OOP encourges the code reusability?", ["Polymorphism", "Inheritance", "Abstraction", "Encapsulation"], "Inheritance"),
    new Question(" Which keyword is used to inherit a class or abstract class?", ["Extends", "Extend", "Implement", "Inherit"], "Extends"),
    new Question(" We can not create instance of", ["Anonymous class", "Nested class", "Parent class", "Abstract class"], "Abstract class"),
   


];

var quiz = new Quiz(questions);

populate();
