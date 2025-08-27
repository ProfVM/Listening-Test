//=========================================
// File name: page_NNNNN.js
//-----------------------------------------
// Project : QuizFaber 4.1.9
// Licence : GNU General Public License v3.0
// Author  : Luca Galli
// Email   : info@quizfaber.com
//-----------------------------------------
// Script for NNNNN-th question
//=========================================



$(document).ready(function ()
{
	const questionIndex = 0;
	const questionTime = 0;

	PageLoad(questionIndex, questionTime);

	
});

$(window).on("beforeunload", function ()
{
	PageUnload();
	window.scrollTo(0, 0);
});

$(window).on("scroll", function ()
{
	PageOnScroll();
});


/* Code generated function */
function InitQuestion1()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 0;
    var weight = DecodeNumber('jgzlixhx7G4=', 232, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('jgzlixhx7G4=', 232, -1000, 1000),DecodeDecimal('DSyplhWLr9E=', 232, -1000, 1000),DecodeDecimal('DSyplhWLr9E=', 232, -1000, 1000));
    question.num = 1;
    question.answers.length = 0;
    question.shortTextQuestion = "Part One Listen to the record and answer to the questions  ";
    question.noChoice = false;
    choice = $('#idGap1_0').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('akqg7tDY3tM='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap1_1').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('5J1OcXi+Vdw='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap1_2').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('rtMxjx408bQFsG0BbxLYSa2T7aM1AsdY4AyM7z1kGc1uUgZNPxRnew=='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    choice = $('#idGap1_3').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('de0E7LQT00QHAMjwzqT5Yg=='));
    var answer3 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer3);
    return question;

}


/* Code generated function */
function ClearQuestion1()
{
    ClearFillTheGap(1,0);
    ClearFillTheGap(1,1);
    ClearFillTheGap(1,2);
    ClearFillTheGap(1,3);

}






