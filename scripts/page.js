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
    var weight = DecodeNumber('MycPcfHoovM=', 883, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('MycPcfHoovM=', 883, -1000, 1000),DecodeDecimal('/PuMJ144qIM=', 883, -1000, 1000),DecodeDecimal('/PuMJ144qIM=', 883, -1000, 1000));
    question.num = 1;
    question.answers.length = 0;
    question.shortTextQuestion = "Part One Listen to the record and answer to the questions  ";
    question.noChoice = false;
    choice = $('#idGap1_0').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('hdg77O5eBH0='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap1_1').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('KvNKM1geeSs='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap1_2').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('CuvAsAC8EogUSqIdH8kiDOwaN/61JAANbp7m7wieLL8r930k1wpKwQ=='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    choice = $('#idGap1_3').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('HCv4wi3uHDmFO0ca8tEGOA=='));
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
    var weight = DecodeNumber('fCW9T/PUyJU=', 447, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('fCW9T/PUyJU=', 447, -1000, 1000),DecodeDecimal('UcT7SqIXrKA=', 447, -1000, 1000),DecodeDecimal('UcT7SqIXrKA=', 447, -1000, 1000));
    question.num = 2;
    question.answers.length = 0;
    question.shortTextQuestion = "Part Two Listen to the record and answer to the questions  ";
    question.noChoice = false;
    choice = $('#idGap2_0').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('YTcKzEqLAulJU7cla73YyFvVlnw='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap2_1').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('sx5+yzYeSGmxHHvj1Vb1XB2ma+k18aQI1iLrxMs377M='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap2_2').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('LuZzcyhhfnxxbwxm'));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    choice = $('#idGap2_3').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('uAgMNGpSBoIudjnNaqClrpF/lgdAgizOtn+Ty8sGp2nMmCSlnM3ErtXjzHpLxOyJ3QrHpxreJK9RprDX'));
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
    var weight = DecodeNumber('xLf0rigiKI4=', 488, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('xLf0rigiKI4=', 488, -1000, 1000),DecodeDecimal('63lQp0rAaMw=', 488, -1000, 1000),DecodeDecimal('63lQp0rAaMw=', 488, -1000, 1000));
    question.num = 3;
    question.answers.length = 0;
    question.shortTextQuestion = "Part Three Listen to the record and answer to the questions ";
    question.noChoice = false;
    choice = $('#idGap3_0').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('P5z4jPDoLIzIvW60'));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap3_1').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('94nasj0Hi85VBiN3hkRff7kVUJqotW9m8Tj8wA=='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap3_2').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('+Zc/t+otUHTAi1JCFTQSrMnYYXI2ldVr'));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    choice = $('#idGap3_3').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('OHkPZ+8OJ5DAlDBTothVk12Uy7G9ZTuJBWZgJg=='));
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
    var weight = DecodeNumber('ZMtqz+KOW3Y=', 52, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ZMtqz+KOW3Y=', 52, -1000, 1000),DecodeDecimal('WMk2mDFrtNU=', 52, -1000, 1000),DecodeDecimal('WMk2mDFrtNU=', 52, -1000, 1000));
    question.num = 4;
    question.answers.length = 0;
    question.shortTextQuestion = "Part Four Listen to the record and answer to the questions. ";
    question.noChoice = false;
    choice = $('#idGap4_0').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('arxFXByeaR0Ibh29LzT89A=='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap4_1').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('5Zx1y6jXDzzSOqASfSs3qasYz5Ug3B9W'));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap4_2').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('DAzifu9SkbHAT1hsPzaWpQDxCoMu5B0PQgMjJptB6s/g989GzPg995eBY3k='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    choice = $('#idGap4_3').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('0Ch4DRcnkg7uqcieBoUpzp1X5YQ3ZJAaS8Tz4ExSIbdQQafplGPXOx8oe9I='));
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
    var weight = DecodeNumber('0mrCRy9ngNU=', 812, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('0mrCRy9ngNU=', 812, -1000, 1000),DecodeDecimal('Zr4G+NH2DJU=', 812, -1000, 1000),DecodeDecimal('Zr4G+NH2DJU=', 812, -1000, 1000));
    question.num = 5;
    question.answers.length = 0;
    question.shortTextQuestion = "Part Five Listen to the record and answer to the questions. ";
    question.noChoice = false;
    choice = $('#idGap5_0').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('XDR6JUa7ER8='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap5_1').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('YvZxp0IKhkhv/lOuP869EAKgNzTPCsdvAbguOcb27GNV0Ia/476iQ6w+fSqCbPT1'));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap5_2').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('RWOBZKxW9y7B44QzC8msofI13uHTVtosjrJrEKUXfKY='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    choice = $('#idGap5_3').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('Lyl/MoKVQFop/PDW0NG3Qyk4WBXT09tjUcUAcUR5gizZoWcg228feQ=='));
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
    var weight = DecodeNumber('CrCwyGgp5YY=', 734, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('CrCwyGgp5YY=', 734, -1000, 1000),DecodeDecimal('D5Lv4Fpedlk=', 734, -1000, 1000),DecodeDecimal('D5Lv4Fpedlk=', 734, -1000, 1000));
    question.num = 6;
    question.answers.length = 0;
    question.shortTextQuestion = "Part Six Listen to the record and answer to the questions. ";
    question.noChoice = false;
    choice = $('#idGap6_0').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('Qb63e7TZIwA='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap6_1').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('EH3RNRabcUqi3GHm'));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap6_2').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('dQOSquyV2OwBOHwc+XsNbjCxkbI3gMKH'));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    choice = $('#idGap6_3').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('Xnw61W2fMSey6OfjZvGJ7Gvdq98OevCG4mB66wxMinn7fThK'));
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






