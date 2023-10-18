let msg = document.querySelector('.msg');
let guess = document.querySelector('input');
let btn = document.querySelector('.btn')
let randWords = "";
let newWords = "";
let play = false;

let sWord = ["Car", "Bike", "Sky", "Cloud", "Home", "Table", "office", "metro", "bus"]


const createNewWord = () => {
      let ranNum = Math.floor(Math.random() *sWord.length);
      let newTempSword = sWord[ranNum];
      return newTempSword;
    }

    

const scrambleWords = (arr) => {
     for (let i = arr.length-1; i >= 0; --i ){
        let tempAre = arr[i];
        let j = Math.floor(Math.random() * (i + 1))
        
        arr[i] = arr[j];
        arr[j] = tempAre;
     }  

     return arr
}    



btn.addEventListener('click', function(){
      if(!play){
        play = true;
        btn.innerText = "Guess";
        guess.classList.toggle('hidden');
        newWords = createNewWord(); 
        randWords = scrambleWords(newWords.split("")).join('');
        msg.innerHTML = `Guess the word  ' ${randWords} '`; 
       }else{
         let inputValue = guess.value;
         if(inputValue === newWords) {
            play = false;
            msg.innerHTML = `Awesome It's Correct word. it is ${newWords}`;
            btn.innerText = "Start again";
            guess.classList.toggle('hidden');
            guess.value = "";


         }else{
            msg.innerHTML = `Sorry It's Incorrect word. Plz try again ${randWords}`;
            btn.innerText = "Try again";
         }
        
       }

})