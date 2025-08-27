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
	const questionIndex = 4;
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
function InitQuestion5()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 4;
    var weight = DecodeNumber('DX5opSybj8M=', 931, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('DX5opSybj8M=', 931, -1000, 1000),DecodeDecimal('lArqXelCFsw=', 931, -1000, 1000),DecodeDecimal('lArqXelCFsw=', 931, -1000, 1000));
    question.num = 5;
    question.answers.length = 0;
    question.shortTextQuestion = "Part Five Listen to the record and answer to the questions. ";
    question.noChoice = false;
    choice = $('#idGap5_0').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('LIQ0I8MOh2U='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap5_1').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('iynmQh0NUoZ7pvQHCF/hRyW36KcUh0n1SsKq6sP9h3X56OdQUUsWAjHzyzOX/OvM'));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap5_2').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('VxORezUTYkH1JdJVtNGRbjhW6koj++wo8bIe1Gicq/U='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    choice = $('#idGap5_3').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('MhtQxpPedVUdLzCB54gBjC/y0yy+KKcA9MzeeTawvGRKJjlYUqfPJA=='));
    var answer3 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer3);
    return question;

}


/* Code generated function */
function ClearQuestion5()
{
    ClearFillTheGap(5,0);
    ClearFillTheGap(5,1);
    ClearFillTheGap(5,2);
    ClearFillTheGap(5,3);

}






