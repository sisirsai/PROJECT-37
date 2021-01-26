var canvas;
var gameState,contestantCount,database,quiz,question,contestant;
gameState = 0;
var allContestants = [];
function setup(){
  canvas = createCanvas(windowWidth,windowHeight);
  database = firebase.database();
  quiz = new Quiz();
quiz.getState();
quiz.start();

}


function draw(){
  background("pink");

  
}
