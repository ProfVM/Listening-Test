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
	const questionIndex = 3;
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
function InitQuestion4()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 3;
    var weight = DecodeNumber('U9pG8/FR/Tw=', 617, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('U9pG8/FR/Tw=', 617, -1000, 1000),DecodeDecimal('tN/M+8CQFm4=', 617, -1000, 1000),DecodeDecimal('tN/M+8CQFm4=', 617, -1000, 1000));
    question.num = 4;
    question.answers.length = 0;
    question.shortTextQuestion = "Part Four Listen to the record and answer to the questions. ";
    question.noChoice = false;
    choice = $('#idGap4_0').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('Akxuim2ymO8n/tB/0zEVug=='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap4_1').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('yFrj4gG9ZuMiCFOQp3cAECldRTZoTTOs'));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap4_2').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('EMYSZqdX0gCw1QE9SviNFI3JlZOuSL4+5a0kP2u4ScRDNkOpiPNtPrGaWlg='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    choice = $('#idGap4_3').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('fQ70KQdVnB2Iz6iT59VLF9Qq7VV6ZypEefBz7Ky6TPiqr0tMxzbT1LgGHU0='));
    var answer3 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer3);
    return question;

}


/* Code generated function */
function ClearQuestion4()
{
    ClearFillTheGap(4,0);
    ClearFillTheGap(4,1);
    ClearFillTheGap(4,2);
    ClearFillTheGap(4,3);

}






