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
	const questionIndex = 1;
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
function InitQuestion2()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 1;
    var weight = DecodeNumber('/7FINEusONI=', 545, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('/7FINEusONI=', 545, -1000, 1000),DecodeDecimal('zUUNjTPb+hg=', 545, -1000, 1000),DecodeDecimal('zUUNjTPb+hg=', 545, -1000, 1000));
    question.num = 2;
    question.answers.length = 0;
    question.shortTextQuestion = "Part Two Listen to the record and answer to the questions  ";
    question.noChoice = false;
    choice = $('#idGap2_0').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('gv0N2QG3L/tDOBk4KXlsEa/wUCg='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap2_1').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('5C71D6WdH5o57YpbIkWRPSibTSfrAy7Q/RmKHDiuu+s='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap2_2').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('EvQ18/XWoxw8Epkl'));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    choice = $('#idGap2_3').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('49/5gWoDgDyspc+by8X1HrTkSu4sy/mOdgNpK5T897aAFH7ThShGfzLRCkR2Um0X1z9JgZAPCBdBwK02'));
    var answer3 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer3);
    return question;

}


/* Code generated function */
function ClearQuestion2()
{
    ClearFillTheGap(2,0);
    ClearFillTheGap(2,1);
    ClearFillTheGap(2,2);
    ClearFillTheGap(2,3);

}






