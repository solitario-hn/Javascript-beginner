      const choice=['rock','paper','scissors'];
      let board=JSON.parse(localStorage.getItem('data'))||{
        wins:0,
        losses:0,
        ties:0,
      }; //converting back to json to js obj is necessary for javascript code to run.
      let your_choice=''; let computer='';
      let result='';
      function compMove(){
        return choice[Math.floor(Math.random()*choice.length)];
      }
      function play(){
        computer=compMove();
        if(your_choice===computer){
          result='Tie🫠';
          board.ties+=1;
        }
        else if(your_choice==='rock'&&computer==='paper'||your_choice==='paper'&&computer==='scissors'||your_choice==='scissors'&&computer==='rock'){
          result='Lose🤓';
          board.losses+=1;
        }
        else{
          result='Win😎';
          board.wins+=1;
        }
        change();
        localStorage.setItem('data',JSON.stringify(board));
      }
    function reset(){
      board.ties=0;  result='Yet to ▶️';
      board.losses=0; computer='Yet to ▶️';
      board.wins=0; your_choice='Yet to ▶️';
      change();
      localStorage.removeItem('data');
      alert('RESET DONE!');
    }   
    function change(){
      document.querySelector('.js-result').innerHTML=`You ${result}`;
      document.querySelector('.js-choice').innerHTML=`YOU: <img class="js-ch" src="${your_choice}-emoji.png"> Computer: <img class="js-ch" src="${computer}-emoji.png">`;
      document.querySelector('.js-score').innerHTML=`Wins:${board.wins} losses:${board.losses} ties:${board.ties}`;
    }

    let intervalID;
    let isautoPlay=false;

    function autoPlay(){
      if(!isautoPlay){
      intervalID=setInterval(()=>{
        your_choice=compMove();
        play();
      },2000);
      isautoPlay=true;
      document.querySelector('.js-auto-play').innerHTML='Stop Play'      
      }
      else{
        clearInterval(intervalID);
        isautoPlay=false;
      document.querySelector('.js-auto-play').innerHTML='Auto Play' 
      }
    }

    document.querySelector('.js-paper').addEventListener('click',()=>{
      your_choice='paper';
      play();
    });

    document.querySelector('.js-rock').addEventListener('click',()=>{
      your_choice='rock';
      play();
    })

    document.querySelector('.js-scissors').addEventListener('click',()=>{
      your_choice='scissors';
      play();
    })

    document.addEventListener('keydown',(event)=>{
      if(event.key==='p'){
        your_choice='paper';
      }
      else if(event.key==='r'){
        your_choice='rock';
      }
      else if(event.key==='s'){
        your_choice='scissors';
      }
      play();     
    })  //every eventlister has an event assosciated with it which we can pass onto the function and access the key and various features of that event.