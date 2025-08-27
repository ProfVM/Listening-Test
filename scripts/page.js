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

var allInitQuestionFunctions = new Array (
    InitQuestion1,
    InitQuestion2,
    InitQuestion3,
    InitQuestion4,
    InitQuestion5,
    InitQuestion6,
);



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
    var weight = DecodeNumber('IdUUj7R07oU=', 126, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('R1ijsgatcCs=', 126, -1000, 1000),DecodeDecimal('md++O3r1Mew=', 126, -1000, 1000),DecodeDecimal('md++O3r1Mew=', 126, -1000, 1000));
    question.num = 1;
    question.answers.length = 0;
    question.shortTextQuestion = "Part One Listen to the record and answer to the questions  ";
    question.noChoice = false;
    choice = $('#idGap1_0').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('Y9B3n7Fg5Xo='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap1_1').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('fXxb4VYhHwc='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap1_2').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('sEnOCEBHsFO5+EscTbxO2HhodjvYUnCzQrhWZvG+H7XkGKdjjvpr8w=='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    choice = $('#idGap1_3').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('NjBaCasDswO41rLXMgm60A=='));
    var answer3 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion2()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 1;
    var weight = DecodeNumber('BIFNuQOGO8Q=', 973, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('KlmL3l/dlaI=', 973, -1000, 1000),DecodeDecimal('rNQCXRUeEps=', 973, -1000, 1000),DecodeDecimal('rNQCXRUeEps=', 973, -1000, 1000));
    question.num = 2;
    question.answers.length = 0;
    question.shortTextQuestion = "Part Two Listen to the record and answer to the questions  ";
    question.noChoice = false;
    choice = $('#idGap2_0').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('aH3ans/C/Oq3lZ9IqIuUyoPOipY='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap2_1').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('N0ZogSlfkCcUX6WCMAjK2K0oTfU2exIpMy//7zVWUk0='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap2_2').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('KvO9LQGsznxC1zdT'));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    choice = $('#idGap2_3').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('g6Qry/BP6QZXo0NU2+ogfI5YCig8MLXPNYhqT8yRzK0pHZUGWcNDxDDi7uTcUUfBwGuH1PVqqLnNRWz+'));
    var answer3 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion3()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 2;
    var weight = DecodeNumber('6TbFgAbe8Dg=', 983, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('LdF/JzL2Hl0=', 983, -1000, 1000),DecodeDecimal('+Tir3egQlUQ=', 983, -1000, 1000),DecodeDecimal('+Tir3egQlUQ=', 983, -1000, 1000));
    question.num = 3;
    question.answers.length = 0;
    question.shortTextQuestion = "Part Three Listen to the record and answer to the questions ";
    question.noChoice = false;
    choice = $('#idGap3_0').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('5JJr6tvAt7eFie/D'));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap3_1').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('2vWfLp/YfjtZMaep6EEZ0Jimon1DFVk6MOq3/w=='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap3_2').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('2cR5d2zvC12geddj1atCN3IzVoY0cNp6'));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    choice = $('#idGap3_3').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('ephqqyi94BBWeCgki3UJGg46Rsz6CIibpYGxXA=='));
    var answer3 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion4()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 3;
    var weight = DecodeNumber('kXrZNQ2ysGw=', 351, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('RChyswr4b+I=', 351, -1000, 1000),DecodeDecimal('6/0HxeJsL3o=', 351, -1000, 1000),DecodeDecimal('6/0HxeJsL3o=', 351, -1000, 1000));
    question.num = 4;
    question.answers.length = 0;
    question.shortTextQuestion = "Part Four Listen to the record and answer to the questions. ";
    question.noChoice = false;
    choice = $('#idGap4_0').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('10emVIZJGj4h2+bkh/pgfw=='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap4_1').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('P15/MkLOIVgvvHUska/9a/AlP1a1WscC'));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap4_2').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('lg1FCkeIdyCRQiRzYvkHNDx+jd4ZyEa+lWwIczRz/jrg3aRQmLHfkVT8iR4='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    choice = $('#idGap4_3').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('LbtHtMItmR7cin0udPKHcULOnXyXRZB0i8TPx1jiUsnnyvtUf/BEqHbudjY='));
    var answer3 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion5()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 4;
    var weight = DecodeNumber('NVBZmHb2Pg0=', 720, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('hBkVc6qWwM0=', 720, -1000, 1000),DecodeDecimal('sF9qYt3f0Lc=', 720, -1000, 1000),DecodeDecimal('sF9qYt3f0Lc=', 720, -1000, 1000));
    question.num = 5;
    question.answers.length = 0;
    question.shortTextQuestion = "Part Five Listen to the record and answer to the questions. ";
    question.noChoice = false;
    choice = $('#idGap5_0').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('GmeSrLeSGnM='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap5_1').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('p+uMzmu+yiYEzYRCmxi0P96qlnN0sSG4X+jHNzbp6PZWoyIOXu7UkKkmBA6XF9hS'));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap5_2').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('mchSXeFZuzfh9BazH1l12GSXXXO416i4C67XSj5V5/c='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    choice = $('#idGap5_3').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('j3WAI852FHQ7+emlUqJs07sE4XzlxLVeofBBSoUhtEI5/8FGlwa9GQ=='));
    var answer3 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion6()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 5;
    var weight = DecodeNumber('evT7SNzZXdM=', 730, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('VCQ9KG5AzMc=', 730, -1000, 1000),DecodeDecimal('UhBkp7wJxMQ=', 730, -1000, 1000),DecodeDecimal('UhBkp7wJxMQ=', 730, -1000, 1000));
    question.num = 6;
    question.answers.length = 0;
    question.shortTextQuestion = "Part Six Listen to the record and answer to the questions. ";
    question.noChoice = false;
    choice = $('#idGap6_0').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('gMikF0fpvR4='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap6_1').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('Xtqnv5Yll0Vax0sL'));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap6_2').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('f2AmAkNh7L+b0aHoU4xIwgCUFFoYDoBo'));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    choice = $('#idGap6_3').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('JwFlVdqhUQ6UM4LBx3wyYQbcomhN/JUJvmwrlsnGf5/sukCr'));
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
/* Code generated function */
function ClearQuestion2()
{
    ClearFillTheGap(2,0);
    ClearFillTheGap(2,1);
    ClearFillTheGap(2,2);
    ClearFillTheGap(2,3);

}
/* Code generated function */
function ClearQuestion3()
{
    ClearFillTheGap(3,0);
    ClearFillTheGap(3,1);
    ClearFillTheGap(3,2);
    ClearFillTheGap(3,3);

}
/* Code generated function */
function ClearQuestion4()
{
    ClearFillTheGap(4,0);
    ClearFillTheGap(4,1);
    ClearFillTheGap(4,2);
    ClearFillTheGap(4,3);

}
/* Code generated function */
function ClearQuestion5()
{
    ClearFillTheGap(5,0);
    ClearFillTheGap(5,1);
    ClearFillTheGap(5,2);
    ClearFillTheGap(5,3);

}
/* Code generated function */
function ClearQuestion6()
{
    ClearFillTheGap(6,0);
    ClearFillTheGap(6,1);
    ClearFillTheGap(6,2);
    ClearFillTheGap(6,3);

}






