function checkAnswer(){
    const correctAnswer = '4';
    const choices = document.querySelector('input[name="quiz"]:checked');
    const feedback = document.getElementById('feedback');
    let userAnswer;


     if (choices !== null) {
        userAnswer = choices.value;

        // Compare the User’s Answer with the Correct Answer
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
        }
    } else {
        feedback.textContent = 'Please select an answer';
    }
}


const submit = document.getElementById('submit-answer')
submit.addEventListener('click', checkAnswer);
