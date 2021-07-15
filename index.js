let btn = document.getElementById('btn'); 
let output = document.getElementById('show1');

let number = Math.floor(Math.random() * 100);
let attempts = 0; 
let attempts2 = document.getElementById('attempts1');  

btn.addEventListener('click', function(){
    let input = document.getElementById('guessNum').value;
    if(input == number){
      output.innerHTML = `you are right, That number was ${number}`   
    }else if (input < number){
        output.innerHTML = "you are too low!!"
    }else if (input > number){
        output.innerHTML = "you are too high!!"
    }else{
        output.innerHTML = "you should enter only number!"
    };

})

btn.addEventListener('click', function(){
    let input = document.getElementById('guessNum').value;
    if(input != number){
        attempts += 1;
        attempts2.innerHTML = `you are attempted ${attempts} times ` ;
    }else{
        attempts2.innerHTML = `You are win with ${attempts} attempts`
    }
})