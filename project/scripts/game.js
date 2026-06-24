      const choice=['rock','paper','scissors'];
      let board=JSON.parse(localStorage.getItem('data'))||{
        wins:0,
        losses:0,
        ties:0,
      }; //converting back to json to js obj is necessary for javascript code to run.
      let your_choice=''; let computer='';
      let result='';
      function play(){
      computer=choice[Math.floor(Math.random()*choice.length)] ; //Math.random generates a no between 0 and 1 * by length makes it between ranges of array's length and math.floor makes the float an integer number.
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