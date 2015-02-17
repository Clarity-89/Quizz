/**
 * Created by Alex on 14/2/15.
 */
/*global $:false */
$(document).ready(function(){
    var allQuestions = [{
    question: "Who is Prime Minister of the United Kingdom?",
    choices: ["David Cameron", "Gordon Brown", "Tony Blair", "Winston Churchill"],
    corAnswer: 0
}, {
    question: "Which country has the biggest population?",
    choices: ["Finland", "China", "India", "USA"],
    corAnswer: 1
}, {
    question: "Which country does not belong to Scandinavia?",
    choices: ["Sweden", "Finland", "Denmark", "Iceland"],
    corAnswer: 3
}];
    var numCorrect = 0;
    var numQuestion = 0;
          var display = function() {
        if (numQuestion === allQuestions.length) {
            $('h2').text('You are done with the quiz, your score is ' + numCorrect);
            $('h1, #form').remove();
        } else {
            $('h2').text(allQuestions[numQuestion].question);
            for (var i = 0; i <= allQuestions.length; i++) {
               $('#a'+(i+1)).text(allQuestions[numQuestion].choices[i]);
           }
        }
        };
    display();
$('#next').click(function(){
    var correctChoice = allQuestions[numQuestion].corAnswer;
    var answer = $('input[name=Answer]:checked').val();
    if ($("input:radio[name=Answer]").is(":checked") === false) {
        alert("Make a choice!");
        return false;
                } else if (answer == correctChoice) {
        numCorrect++;
    }
    numQuestion++;
    display();
    });
$('#prev').click(function(){
        numQuestion--;
    if (numQuestion < 0){
        numQuestion = 0;
    }
    display();
    });
    });