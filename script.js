/**
 * Created by Alex on 14/2/15.
 */
/*global $:false */
$(document).ready(function () {
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
    allQuestions.forEach(function (indx) {
        indx.usersAnswer = null;
    });
    var numCorrect = 0;
    var numQuestion = 0;
    $('h1').hide().fadeIn('slow');
    var display = function () {
        if (numQuestion > 0) {
            $('#prev').show();
        }
        if (numQuestion === allQuestions.length) {
            $('h2').text('You are done with the quiz, your score is ' + numCorrect).fadeIn('slow');
            $('h1, #form').fadeOut('slow').remove();
        } else {
            $('h2').text(allQuestions[numQuestion].question);
            for (var i = 0; i <= allQuestions.length; i++) {
                $('#b' + (i + 1)).text(allQuestions[numQuestion].choices[i]);
            }
        }


    };
    display();
    fading();
    function fading (){
        $('h2').hide().fadeIn();
        for (var i = 0; i <=allQuestions.length; i++) {
            $('div').not('#next').hide().fadeIn();
        }
    }
    fading();
    $('#next').click(function () {
        var correctChoice = allQuestions[numQuestion].corAnswer;
        var answer = $('input[name=Answer]:checked').val();
        allQuestions[numQuestion].usersAnswer = answer;
        console.log(allQuestions); //log the usersAnswer to check if they save correctly
        if ($("input:radio[name=Answer]").is(":checked") === false) {
            alert("Please make your choice!");
            return false;
        } else if (answer == correctChoice) {
            numCorrect++;
        }
        numQuestion++;
        fading();
        console.log(numQuestion);
        display();
        $('input[name=Answer]').attr('checked', false);

    });
    $('#prev').click(function () {
        fading();
        numQuestion--;
        numCorrect--;
        if (numQuestion < 0) {
            numQuestion = 0;
        }
        console.log(numQuestion);
        if (numQuestion === 0){
            $('#prev').css({"display": "none"});
        }
        var showPrev = function () {
            var j = allQuestions[numQuestion].usersAnswer;
            $('input[type="radio"][value="' + j + '"]').prop('checked', true);
        };
        showPrev();
        display();
    });
});