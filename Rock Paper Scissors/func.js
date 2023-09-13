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
            result='You Lose Hahaha...';
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
            result='You Lose Hahaha...';
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
            result='You Lose Hahaha...';
        }

        else if(commove === 'Scissor')
        {
            result='You Won...';
        }        
    }
        document.getElementById('demo').innerHTML=(`You picked ${playermove}. Computer picked ${commove}.=>${result}`);
}