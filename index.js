var questions = [{
    title: "The travelling salesman problem can be solved using",
    options: ['A spanning tree',
            'Bellman - Ford algorithm',
            'A minimun Spanning Tree',
            'DFS traversal'],
    correctAnswer: 'o3',
    score: 1
},{
    title: "What is full form of css",
    options: ['Cascading style sheets',
            'Cascade style sheets',
            'Color and style sheets',
            'None of the above'],
    correctAnswer: 'o1' ,
    score: 2
},{
    title: "How to include javascript in HTML document",
    options: ['script',
            'js',
            'javascript',
            'None of the above'],
    correctAnswer: 'o1' ,
    score: 1
},{
    title: "Which type os js language is",
    options: ['Object-Oriented',
            'High Level',
            'Assembly Language',
            'Object Based'],
    correctAnswer: 'o4' ,
    score: 1
},{
    title: "Which one of the following also known as Conditional Expression:",
    options: ['Alternate to if-else',
            'Switch Statement',
            'If-then-else Statement',
            'immediate if'],
    correctAnswer: 'o4',
    score: 2
},{
    title: "What do we use to comment in JS",
    options: ['//**//',
            '//',
            '\\',
            '\**/'],
    correctAnswer: 'o2',
    score: 1
},{
    title: "The 'function' and 'var' are known as:" ,
    options: ['Keywords',
            'Data types',
            'Declaration Statements',
            'Prototypes'],
    correctAnswer: 'o3',
    score: 1
},{
    title: "What is the output of '2'+2",
    options: ['4',
            '22',
            'Error',
            'NaN'],
    correctAnswer: 'o2',
    score: 2 
},{
    title: "What is the output of '2'*1",
    options: ['2',
            'Error',
            '21',
            'NaN'],
    correctAnswer: 'o4',
    score: 2
},{
    title: "Which of the following type of a variable is volatile ? ",
    options: ['Mutable Variable',
            'Dynamic Variable',
            'Volatile Variable',
            'Immutable Variable'],
    correctAnswer: 'o1',
    score: 2
}];
var start = document.getElementById("start");
var index=0;
var divAddQues = document.getElementById("question")
var answer,totalScore=0;


function hideScorePanel(){
    var scoreTexT = document.getElementById("score");
    scoreTexT.setAttribute("style","visibility:hidden");
    var space = document.getElementById("space");
    space.setAttribute("style","visibility:hidden");
}

function hideQuizPanel(){
    var quizText = document.getElementById("quiz");
    quizText.setAttribute("style","visibility:hidden");
}

function unhideQuizPanel(){
    var quizText = document.getElementById("quiz");
    quizText.setAttribute("style","visibility:visible");
}

function createshowQuestionsToDom(){
    var divQues = document.createElement("div");
    divQues.setAttribute("id","main");
    var timer=30,time=0;
    var queTime = setInterval(function(){
        timer--;
        if(parseInt(timer/60)<10)
            mm = '0'+parseInt(timer/60)+':';
        else
            mm = parseInt(timer/60)+':';
        if(timer%60<10)
            ss = '0'+timer%60;
        else
            ss = timer%60;
        if(ss>=0){
            time=mm+ss;
            lbl.innerHTML = time;
        }else{
            console.log("hiiii");
            clearInterval(queTime);
            submitFun();
        }
    },1000)

    var lbl = document.createElement("label");
    lbl.setAttribute("style","float:right;");
    lbl.innerHTML="00:30";
    divQues.appendChild(lbl);
    divQues.appendChild(document.createElement("br"));
    
    var title = document.createElement("label");
    title.innerHTML = questions[index].title;
    divQues.appendChild(title);
    divQues.appendChild(document.createElement("br"));

    var rb1 = document.createElement("input");
    rb1.setAttribute("type","radio");
    rb1.setAttribute("id","o1");
    rb1.setAttribute("name","option");
    rb1.addEventListener("click",createSelectedAnswer);
    var lbl1 = document.createElement("label");
    lbl1.setAttribute("for","o1");
    lbl1.innerHTML = questions[index].options[0];
    divQues.appendChild(rb1);
    divQues.appendChild(lbl1);
    divQues.appendChild(document.createElement("br"));

    var rb2 = document.createElement("input");
    rb2.setAttribute("type","radio");
    rb2.setAttribute("id","o2");
    rb2.setAttribute("name","option");
    rb2.addEventListener("click",createSelectedAnswer);
    var lbl2 = document.createElement("label");
    lbl2.setAttribute("for","o2");
    lbl2.innerHTML = questions[index].options[1];
    divQues.appendChild(rb2);
    divQues.appendChild(lbl2);
    divQues.appendChild(document.createElement("br"));

    var rb3 = document.createElement("input");
    rb3.setAttribute("type","radio");
    rb3.setAttribute("id","o3");
    rb3.setAttribute("name","option");
    rb3.addEventListener("click",createSelectedAnswer);
    var lbl3 = document.createElement("label");
    lbl3.setAttribute("for","o1");
    lbl3.innerHTML = questions[index].options[2];
    divQues.appendChild(rb3);
    divQues.appendChild(lbl3);
    divQues.appendChild(document.createElement("br"));

    var rb4 = document.createElement("input");
    rb4.setAttribute("type","radio");
    rb4.setAttribute("id","o4");
    rb4.setAttribute("name","option");
    rb4.addEventListener("click",createSelectedAnswer);
    var lbl4 = document.createElement("label");
    lbl4.setAttribute("for","o4");
    lbl4.innerHTML = questions[index].options[3];
    divQues.appendChild(rb4);
    divQues.appendChild(lbl4);
    divQues.appendChild(document.createElement("br"));

    var submitBtn = document.createElement("button");
    submitBtn.setAttribute("id","sub start");
    submitBtn.setAttribute("type","button");
    submitBtn.setAttribute("style","background-color:yellow;font-size:30px");
    submitBtn.innerHTML = "Submit";
    divQues.appendChild(submitBtn);
    divAddQues.appendChild(divQues);

    submitBtn.addEventListener("click",function(){
        console.log("button");
        if(answer==undefined){
            alert('Please Select option.')
        }
        else {
            submitFun();
        }
    });

    function submitFun(){
        clearInterval(queTime);
            submitBtn.style.visibility="hidden";
            var anslbl = document.createElement("h3");
            anslbl.setAttribute("id","ans start");
            if(answer){
                totalScore+=questions[index].score;
                console.log(totalScore);
                anslbl.setAttribute("style","background-color:lightgreen;color:green;width:40%;text-align:center;");
                anslbl.innerHTML="Correct";
            }else{
                anslbl.setAttribute("style","background-color:lightpink;color:red;width:40%;text-align:center;");
                anslbl.innerHTML="Incorrect";
            }
            answer=undefined;
            divQues.appendChild(anslbl);

            if(index<questions.length-1){
                var nextbtn = document.createElement("button");
                nextbtn.setAttribute("type","button");
                nextbtn.addEventListener("click",function(event){
                    var targetParent = event.target.parentNode;
                    targetParent.parentNode.removeChild(targetParent);
                    createQuestionPanel();
                });
                nextbtn.setAttribute("style","background-color:green;color:white;font-size:20px;padding-left: 10px;padding-right: 10px;");
                nextbtn.innerHTML = "Next";
                divQues.appendChild(nextbtn);
            }else{
                var finishbtn = document.createElement("button");
                finishbtn.setAttribute("type","button");
                finishbtn.addEventListener("click",function(event){
                    var targetParent = event.target.parentNode;
                    targetParent.parentNode.removeChild(targetParent);
                    createQuestionPanel();
                });
                finishbtn.setAttribute("style","background-color:green;color:white;font-size:20px;padding-left: 10px;padding-right: 10px;");
                finishbtn.innerHTML = "Finish";
                divQues.appendChild(finishbtn);
            }
            divAddQues.appendChild(divQues);
            index++;
    }
}

function createSelectedAnswer(event){
    if(questions[index].correctAnswer==this.id){
        answer=true;
    }else{
        answer=false;
    }
    console.log(answer);
}

function createshowScore(){
    hideQuizPanel();

    var anspder = document.getElementById("anspage");
    var ansp = document.createElement("div");
    ansp.setAttribute("style","visibility:visible");
    ansp.setAttribute("id","ansp");
    var tscore = document.getElementById("tscore");
    tscore.setAttribute("style","visibility:visible");
    var sc=document.createElement("div");
    sc.setAttribute("id","sco");
    var totalscore = document.createElement("h5");
    var marks = "Score: "+totalScore
    console.log(marks);
    totalscore.innerHTML = marks;
    sc.appendChild(totalscore);
    tscore.appendChild(sc);

    var para = document.createElement("h1");
    para.innerHTML="Answer Key ";
    ansp.appendChild(para);
    
    var divShowAnswer = document.createElement("div");
    divShowAnswer.setAttribute("id","main");
    var ul = document.createElement("ul");
    ul.setAttribute("type","disc");
    for(var i=0;i<questions.length;i++){
    var li='li'+i;
    li = document.createElement("li");
    var lbl = document.createElement("label");
    lbl.setAttribute("style","background-color:green;color:white");
    opindex=questions[i].correctAnswer.split('')[1]-1;
    lbl.innerHTML = questions[i].options[opindex];
    var item = questions[i].title+'- ';
    li.innerHTML = item;
    li.appendChild(lbl);
    ul.appendChild(li); 
    }

    divShowAnswer.appendChild(ul);
    ansp.appendChild(divShowAnswer);
    anspder.appendChild(ansp);

    var divrestart= document.getElementById("restart");
    divrestart.appendChild(document.createElement("br"));
    var resbtn = document.createElement("button");
    resbtn.setAttribute("type","button");
    resbtn.addEventListener("click",function(event){
        index=0;
        totalScore=0;
        tscore.style.visibility="hidden";
        var sc1 = document.getElementById("sco");
        sc1.parentNode.removeChild(sc1);
        ansp.parentNode.removeChild(ansp);
        resbtn.parentNode.removeChild(resbtn);
        unhideQuizPanel();
        createQuestionPanel();
    });
    resbtn.setAttribute("style","background-color:blue;color:white;font-size:20px;padding-left: 10px;padding-right: 10px;");
    resbtn.innerHTML = "Restart";
    divrestart.appendChild(resbtn);


}

function createQuestionPanel(){
    
    if(index<questions.length){
        createshowQuestionsToDom();
    }else{
        createshowScore();
    }

    
}

start.addEventListener("click",function(){
    hideScorePanel();
    this.parentNode.removeChild(this);
    createQuestionPanel();
});
