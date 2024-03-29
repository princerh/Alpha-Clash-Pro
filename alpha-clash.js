// function play(){
// //    hide the home screen 
// const homesection = document.getElementById("home-screen");
// homesection.classList.add("hidden");

// // show the playground 
// const playgroundSection = document.getElementById("play-ground")
// playgroundSection.classList.remove("hidden");
// }

const audio = new Audio();
let isGamePlayOn = false;

const artBoard = document.getElementById("art-board");

function handlekeyboardButtonPress(event){
    if(isGamePlayOn == false) return;
    const playerPressed = event.key;
    // console.log(playerPressed);

    // stop the game if player pressed escape 
    if(playerPressed === "Escaped"){
        gameOver();
    }

    const currentAlphabetElement = document.getElementById("current-alphabet");
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    if(playerPressed === expectedAlphabet){
        // console.log("point") 
audio.src = "../audio/success.mp3";
audio.play();



const currentScore = getTextElementValueById("current-score");
const updatedScore = currentScore + 1;
setTextElementValueById("current-score", updatedScore);


        // start a new round 
    removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else
    {
        console.log("missed");

        audio.src = "../audio/wrong.mp3"
        audio.play();
        // get the current life Number
        // reduce the life count 
        // set the life now 
        
        const currentLife = getTextElementValueById("current-life")

        const updatedLife = currentLife - 1;
        setTextElementValueById("current-life", updatedLife);

        const updatedLifePercentage = (updatedLife/5) * 100;

        artBoard.style.background = `linear-gradient(#FFFFFFB3 ${updatedLifePercentage}%,red)`;

        if(updatedLife === 0){
            gameOver();
            
        }
    }


}

document.addEventListener("keyup", handlekeyboardButtonPress)

function continueGame(){
    // step 1 generate random alphabet
    const randomAlphabet = getRandomAlphabet();
    const currentAlphabetElement = document.getElementById("current-alphabet")
    currentAlphabetElement.innerText = randomAlphabet;

    // set background color 
    setBackgroundColorById(randomAlphabet)



}
function play(){
    hideElementById("home-screen");
    showElementById("play-ground");
    hideElementById("final-score");

    

setTextElementValueById("current-score", 0);
setTextElementValueById("current-life", 5);

document.body.focus();
isGamePlayOn = true;
    continueGame();
}



function gameOver(){
    hideElementById("play-ground");
    showElementById("final-score");

    // update final score 
    const lastScore = getTextElementValueById("current-score");
    setTextElementValueById("last-score", lastScore);

   const currentAlphabet = getElementTextById("current-alphabet");
   removeBackgroundColorById(currentAlphabet);
isGamePlayOn = false;

artBoard.style.background = "linear-gradient(#FFFFFFB3 100%,red)";

}