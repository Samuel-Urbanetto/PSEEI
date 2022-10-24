let wrong = document.querySelector('#word-wrong');
let pageLine = document.querySelector('#word-field');

let guess = document.querySelector('#guess');

let confirm = document.querySelector('#confirm');

list = ['community', 'parent', 'office', 'health', 'change', 'morning', 'reason', 'research', 'education', 'law', 'issue', 'business', 'month', 'fact', 'government', 'country', 'state', 'year', 'principal', 'ruler'];

let word = '';
let lines = [];

let lives = 6;

function setGame(set){
    let i = Math.floor(Math.random() * set.length);
    word =  list[i];

    let transfer = [];

    for(i = 0; transfer.length < word.length; i++){
        transfer[i] = word[i];
        lines[i] = '_';
    }

    word = transfer;

}

setGame(list);


function getLines(){
    let line = '';

    for(i = 0; i < lines.length; i++){
        if (i != lines.length -1)
            line += lines[i] + ' ';
        else
            line += lines[i];
    }
    return line;
}

pageLine.innerHTML = getLines();

confirm.onclick = verify;

function verify(){

    if(isNaN(guess.value) && guess.value != ' '){ //It is a valid character
        if(word.indexOf(guess.value) != -1){ //It is correct
            while(word.indexOf(guess.value) != -1){
                
                if(word.indexOf(guess.value) == 0)
                    lines[word.indexOf(guess.value)] = (guess.value).toUpperCase();
                else
                    lines[word.indexOf(guess.value)] = guess.value;
                
                    word[word.indexOf(guess.value)] = '*';
                
                pageLine.innerHTML = getLines(); 
                
                
                {
                        c = 0; //infinite loop blocker
                        c++;
                    if(c > 20){
                        console.log('Argh')
                        break;}
                }
            }
            if (lines.indexOf('_') == -1)
                alert('You win! \n\nCongratulations');
        }
        
        else{ //It is incorrect
            lives--;
            switch(lives){
                case 5:
                    hangman.innerHTML = '⠀⠀⠀_______<br>⠀⠀⠀|⠀⠀⠀⠀⠀| <br>⠀⠀⠀|<p>---------</p>O <br>⠀⠀⠀| <br>⠀⠀⠀| <br>⠀⠀⠀| <br>================';
                    break;
                case 4:
                    hangman.innerHTML = '⠀⠀⠀_______<br>⠀⠀⠀|⠀⠀⠀⠀⠀| <br>⠀⠀⠀|<p>---------</p>O <br>⠀⠀⠀|<p>---------</p>| <br>⠀⠀⠀| <br>⠀⠀⠀| <br>================';
                    break;
                case 3:
                    hangman.innerHTML = '⠀⠀⠀_______<br>⠀⠀⠀|⠀⠀⠀⠀⠀| <br>⠀⠀⠀|<p>---------</p>O <br>⠀⠀⠀|<p>--------</p>/  | <br>⠀⠀⠀| <br>⠀⠀⠀| <br>================';
                    break;
                case 2:
                    hangman.innerHTML = '⠀⠀⠀_______<br>⠀⠀⠀|⠀⠀⠀⠀⠀| <br>⠀⠀⠀|<p>---------</p>O <br>⠀⠀⠀|<p>--------</p>/  |  \\<br>⠀⠀⠀| <br>⠀⠀⠀| <br>================';
                    break;
                case 1:
                    hangman.innerHTML = '⠀⠀⠀_______<br>⠀⠀⠀|⠀⠀⠀⠀⠀| <br>⠀⠀⠀|<p>---------</p>O <br>⠀⠀⠀|<p>--------</p>/  |  \\<br>⠀⠀⠀|<p>-----|----/</p>\\ <br>⠀⠀⠀| <br>================';
                    break;
                case 0:
                    hangman.innerHTML = '⠀⠀⠀_______<br>⠀⠀⠀|⠀⠀⠀⠀⠀| <br>⠀⠀⠀|<p>---------</p>O <br>⠀⠀⠀|<p>--------</p>/  |  \\<br>⠀⠀⠀|<p>-----|---</p>/<p>-</p>\\ <br>⠀⠀⠀| <br>================';
                    break;
            }
            if(lives == 5)
                document.querySelector('#word-wrong').innerHTML = '';
            document.querySelector('#word-wrong').innerHTML += (guess.value).toUpperCase() + ' ';


        if(lives == 0)
            alert('Game Over !')
        }
    }

    else {
        if  (guess.value == ' ')
            w = 'Space bar';
        else
            w = guess.value;
        alert(`${w} is an invalid character! \n\nTry again.`);
    }
    guess.value = '';
}   


console.log(`word: ${word}`)
