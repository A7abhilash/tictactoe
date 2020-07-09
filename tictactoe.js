function startGame(){
    document.turn='X';
    document.winner=null;
    setMessage(document.turn +' gets to start the game.')
}

function setMessage(msg){
    document.getElementById("message").innerHTML=msg;
}

function nextMove(square){
    if(document.winner!=null)
    {
        setMessage(document.turn+' has already won!')
    }
    else if(square.innerHTML=='')
    {
        square.innerHTML=document.turn;
        switchTurn();
    }
    else
    {
        setMessage('The SQUARE is already occupied.');
    }  
}

function switchTurn(){
    if(checkForWinner(document.turn) )
    {
        setMessage("Congrats "+ document.turn +", you are the winner!");
        document.winner=document.turn;
        console.log("winner");
    }
    else if(document.turn=='X')
    {
        document.turn='O';
        setMessage('Its '+ document.turn + '\'s turn');
    }
    else 
    {
        document.turn='X';
        setMessage('Its '+ document.turn + '\'s turn');
    }
}

function checkForWinner(move){      //move represents the value of the content i.e either X or O
    var result=false;
    if( checkRow(1,2,3,move) ||
        checkRow(4,5,6,move) ||
        checkRow(7,8,9,move) || 
        checkRow(1,4,7,move) ||
        checkRow(2,5,8,move) ||
        checkRow(3,6,9,move) ||
        checkRow(1,5,9,move) ||
        checkRow(3,5,7,move) ) 
        {
            result=true;
            console.log("checkForWinner is working");
        }
        return result;
}

function checkRow(a,b,c,move){         //move represents the value of the content i.e either X or O
    var result=false;
    if(getBox(a)==move && getBox(b)==move && getBox(c)==move)
    {
        result=true;
        console.log("checkRow is working");
    }
    return result;
}

function getBox(number){
   return document.getElementById("s"+number).innerHTML;  
}

