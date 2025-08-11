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
	const questionIndex = 2;
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
function InitQuestion3()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 2;
    var weight = DecodeNumber('nlvPBi3k5yM=', 663, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('nlvPBi3k5yM=', 663, -1000, 1000),DecodeDecimal('xXLPjLwWXUk=', 663, -1000, 1000),DecodeDecimal('xXLPjLwWXUk=', 663, -1000, 1000));
    question.num = 3;
    question.answers.length = 0;
    question.shortTextQuestion = "Part Three Listen to the record and answer to the questions ";
    question.noChoice = false;
    choice = $('#idGap3_0').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('fmG2UP5fJ2SOzQth'));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap3_1').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('kJz6NuXqOBbyP2xTeioi6kqdFkxXNFX6cDVv6Q=='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap3_2').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('iQtW734baN1CTQWMc3bj4UVCI5PYRFGV'));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    choice = $('#idGap3_3').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('B8RbcYCHI1eLMUwD0K60oh6udV9AzC5ILjYLUA=='));
    var answer3 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer3);
    return question;

}


/* Code generated function */
function ClearQuestion3()
{
    ClearFillTheGap(3,0);
    ClearFillTheGap(3,1);
    ClearFillTheGap(3,2);
    ClearFillTheGap(3,3);

}






