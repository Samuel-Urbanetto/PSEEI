let wrong = document.querySelector('#word-wrong');
let pageLine = document.querySelector('#word-field');
let guess = document.querySelector('#guess');
let confirm = document.querySelector('#confirm');
let popUp = document.querySelector('.popUp');

let hc = 0;

list1 = ['community', 'parent', 'office', 'health', 'change', 'morning', 'reason', 'research', 'education', 'law'];

hints1 = [
    ['A specific group of people', 'I enjoy helping my ___', 'A unity'],
    ['A family member', 'The word stands for both, male and female', '50% of your DNA comes from this person'],
    ['Most people word in this place', 'There is a popular series with this word in its name', 'After luch time I must go back to my ___'],
    ['Most peole try to preserve this, in order to have a great life!', 'During the pandemic people with ___ were specially isolated', 'To have a good ___ means that your body has a bioquimic equilibrium'],
    ['To adapt means to ___', 'Do you want your ___? It is only 6 cents...', 'He did ___ his nature from good to bad'],
    ['Everyday starts the same way, first there is the ___', 'I usually skip breakfast, eating in the ___ does not feel right', 'As an early bird, waking up in the ___ just feels right'],
    ['When solving a problem we need to ___', 'Cause is one of its synonyms', 'For what ___ do you think that?'],
    ['In his ___ he found out somehing incredible', 'Our teacher just assigned us for this ___ project', 'Through a thorough ___ scientists have learned that...'],
    ['It is not craved in stone, but inidividuals with greater ___ have a higher income','You do not know where Antartica is? I see there were some flaws in you ___ sir', 'Federal institute of __ science and technology...'],
    ['Humans created a system that would allow order in society, it has many rules know as ___s', 'In the name of the ___, stop it!', '___ and order']
]

let word = '';
let wIndex = '';
let lines = [];

let lives = 6;

function setGame(set){
    wIndex = Math.floor(Math.random() * set.length);
    word =  set[wIndex];

    let transfer = [];

    for(i = 0; transfer.length < word.length; i++){
        transfer[i] = word[i];
        lines[i] = '_';
    }

    word = transfer;

}

setGame(list1);


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


function hint(hints, op){
    if(op == 'close'){
        popUp.style.display = 'none';
        popUp.innerHTML = '';
        return
    }

    let h1 = document.querySelector('#h1');
    let h2 = document.querySelector('#h2');
    let h3 = document.querySelector('#h3');
    let h = parseFloat(getComputedStyle(h1).width) - 15;

    let button =`<br> <button type='button' onclick='hint("", "close")'><strong>Ok<strong></button>`

    if(hc > 3)
        alert('No hints left');//pop up
    else
        hc++;

    if(hc == 1){
        h1.style.backgroundColor = 'white';
        h1.style.width = '15px';
        h1.style.marginLeft = h/2 + 'px';
        h1.style.height = '15px';
        popUp.innerHTML = hints1[wIndex][0] + button;
        popUp.style.display = 'block';
    }
    if(hc == 2){
        h2.style.backgroundColor = 'white';
        h2.style.width = '15px';
        h2.style.marginLeft = h/2 + 'px';
        h2.style.height = '15px';
        popUp.innerHTML = hints1[wIndex][1] + button;
        popUp.style.display = 'block';
    }
    if(hc == 3){
        h3.style.backgroundColor = 'white';
        h3.style.width = '15px';
        h3.style.marginLeft = h/2 + 'px';
        h3.style.height = '15px';
        popUp.innerHTML = hints1[wIndex][2] + button;
        popUp.style.display = 'block';
    }
}