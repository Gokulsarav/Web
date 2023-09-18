const score={
    win : 0,
    lose : 0,
    tie : 0
};

jsScore();

function myfun2()
{
        let num=Math.random();
        let commove='';
        if(num >=0 && num<1/3)
        {
            commove='rock';
        }

        else if(num >=1/3 && num<2/3)
        {
            commove='Paper';
        }

        else if(num >=2/3 && num<1)
        {
            commove='Scissor';
        }
        return commove;
}


function myfunc(playermove)
{
    const commove = myfun2();
    let result='';    
    if(playermove === 'Scissors')
    {
        if(commove === 'rock')
        {
            result='You Lose...';
        }

        else if(commove === 'Paper')
        {
            result='You Won...';
        }

        else if(commove === 'Scissor')
        {
            result='Tie...';
        }
    }

    else if(playermove === 'Paper')
    {
        if(commove === 'rock')
        {
            result='You Won...';
        }

        else if(commove === 'Paper')
        {
            result='Tie...';
        }

        else if(commove === 'Scissor')
        {
            result='You Lose...';
        }
    }

    else if(playermove === 'rock')
    {
        if(commove === 'rock')
        {
            result='Tie...';
        }

        else if(commove === 'Paper')
        {
            result='You Lose...';
        }

        else if(commove === 'Scissor')
        {
            result='You Won...';
        }        
    }

    if( result == 'You Won...'){
        score.win +=1;
    }
    else if(result === 'You Lose...')
    {
        score.lose += 1;
    }
    
    else if( result === 'Tie...')
    {
        score.tie += 1;
    }

    jsScore();

    document.querySelector('.res').
     innerHTML = result;

    document.querySelector('.move').
     innerHTML = `You ${playermove} - Computer ${commove}`;  
}


function jsScore(){
    document.querySelector('.score').
     innerHTML=`Wins:${score.win} , Loses:${score.lose} , Tie:${score.tie}`;
}