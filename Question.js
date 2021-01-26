class Question{

constructor()
{

this.title = createElement("h2")
this.input1 = createInput("Enter Your Name Here");
this.input2 = createInput("Enter Your Option Number Here");
this.button = createButton("submit")
this.question  = createElement("h4")
this.option1  = createElement("h4")
this.option2 = createElement("h4")
this.option3 = createElement("h4")
this.option4 = createElement("h4")

}

display(){

this.title.html("My Quiz Game");
this.title.position(350,0);

this.input1.position(400,300);
this.input2.position(200,300);

this.button.position(600,300);

this.question.html("Question :- What the highest mountain peak in India ?");
this.question.position(150,80);
this.option1.html("1: k2");
this.option1.position(150,100);
this.option2.html("2: Mount Everest");
this.option2.position(150,120);
this.option3.html("3: kanchenjunga");
this.option3.position(150,140);
this.option4.html("4: none");
this.option4.position(150,160);


this.button.mousePressed(()=>{
    this.input1.hide();
    this.input2.hide();
    this.button.hide();

    contestant.name = this.input1.value();
    
    contestantCount+=1;
    contestant.update();
    contestant.index = contestantCount;
    contestant.updateCount(contestantCount);

  });

}

}