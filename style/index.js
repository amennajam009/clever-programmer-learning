

function ageInDays(){
    var birthYear = prompt ('what is your age');
    var ageInDayss= (2018-birthYear) * 365;
    var h4 = document.createElement('h4');
    var textanswer= document.createTextNode('you are'+ ageInDayss+' days old');
    h4.setAttribute('id','ageInDays');
    h4.appendChild(textanswer);
    document.getElementById('result').appendChild(h4);
 }
 
 function reset(){
    document.getElementById('ageInDays').remove();
 }
 
 function catgenerator(){
 
    var image= document.createElement('img');
    var div= document.getElementById('box-cat-gen');
    image.src="https://s18670.pcdn.co/wp-content/uploads/cat-typing.gif";
     div.appendChild(image);
 }
 
 function rpsgame(yourchoice){
  console.log(yourchoice);
  var humanchoice,botchoice;
   humanchoice=yourchoice.id;
   botchoice= numbertochoice(randtorpsint());
   console.log('computerchoice',botchoice);
   results= decidewinner(humanchoice,botchoice);
   console.log(results)
   message=finalmessage(results);
   console.log(message);
   rpsfrontend(yourchoice.id,botchoice,message);
 
 }
 
 function randtorpsint(){
   return Math.floor(Math.random()*3);
 }
 function numbertochoice(number){
    return ['rock','paper','scissors'][number];
 }
 
 function decidewinner(yourchoice,computerchoice){
 
    var rpsDatabase ={
       'rock': {'scissors':1, 'rock':0.5, 'paper':0 },
       'paper': {'rock':1, 'paper':0.5, 'scissors':0 },
       'scissors': {'paper':1, 'scissors':0.5, 'rock':0 }
    };
 
    var yourscore = rpsDatabase[yourchoice][computerchoice];
    var computerscore = rpsDatabase[computerchoice][yourchoice];
 
    return [yourscore,computerscore];
 }
 
 function finalmessage([yourscore,computerscore]){
 if(yourscore===0) {
    return{'message': 'you lost!','color':'red'};
 }
 else if(yourscore===0.5) {
    return{'message': 'you tied!','color':'yellow'};
 }
 else {
    return{'message':'you win!','color':'green'};
 }
 }
 
 function rpsfrontend(humanimagechoice,botimagechoice,finalmessage){
    var imagedatabase= {
       'rock': document.getElementById('rock').src,
       'paper': document.getElementById('paper').src,
       'scissors': document.getElementById('scissors').src
    }
    //let remove img
 
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
 
    var humandiv = document.createElement('div');
    var botdiv = document.createElement('div');
    var messagediv = document.createElement('div');
 
 
    humandiv.innerHTML = "<img src='" + imagedatabase[humanimagechoice] + "' height=150 width=150 style='box-shadow:0px 10px 50px rgba(37,50,233,1);'>"
    messagediv.innerHTML= "<h1 style=color:" +finalmessage['color'] + ";font-size: 60px; padding: 30px '>" + finalmessage['message'] + "</h1>"
    botdiv.innerHTML = "<img src='" + imagedatabase[botimagechoice] + "' height=150 width=150  style='box-shadow:0px 10px 50px rgba(243,38,24,1);'>"
   
 
    document.getElementById('rps-div').appendChild(humandiv);
    document.getElementById('rps-div').appendChild(messagediv);
    document.getElementById('rps-div').appendChild(botdiv);
   
 
 }