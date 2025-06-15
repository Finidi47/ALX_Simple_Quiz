function checkAnswer(){
    const correctAnswer = '4';
    const choices = document.querySelector('input[name="quiz"]:checked');
    const feedback = document.getElementById('feedback');
    const userAnswer = choices.value;

    if(choices !== null){
        const userAnswer = choices.value;
    } else{
        feedback.textContent = 'Please select an answer';
    }

    //Compare the User’s Answer with the Correct Answer

    if(userAnswer === correctAnswer){
        feedback.textContent = "Correct! Well done.";
    }else if(userAnswer !== correctAnswer){
        feedback.textContent = "That's incorrect. Try again!";
    }

}

const submit = document.getElementById('submit-answer')
submit.addEventListener('click', checkAnswer);
