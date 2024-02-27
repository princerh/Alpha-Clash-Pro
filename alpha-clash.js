// function play(){
// //    hide the home screen 
// const homesection = document.getElementById("home-screen");
// homesection.classList.add("hidden");

// // show the playground 
// const playgroundSection = document.getElementById("play-ground")
// playgroundSection.classList.remove("hidden");
// }

function handlekeyboardButtonPress(event){
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
        // get the current life Number
        // reduce the life count 
        // set the life now 

        const currentLife = getTextElementValueById("current-life")

        const updatedLife = currentLife - 1;
        setTextElementValueById("current-life", updatedLife);


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

}