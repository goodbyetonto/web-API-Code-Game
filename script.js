//question picker


var qAndA = {
    questionArray: ["This is question 1",
                "This is question 2",
                "This is question 3",
                "This is question 4",
                "This is question 5"], 
    answerArray1: ['a', 'b', 'c', 'd'],
    answerArray2: ['a', 'b', 'c', 'd'],
    answerArray3: ['a', 'b', 'c', 'd'],
    answerArray4: ['a', 'b', 'c', 'd'],
    answerArray5: ['a', 'b', 'c', 'd'],

    pickQuestion() {
        length = this.questionArray.length; 
        for (i = 0; i < 5; i++){
            var question = document.getElementById('question');
            randNum = Math.floor(Math.random() * (length - 1));
            currentQ = this.questionArray[randNum];
            question = question.innerHTML = currentQ; 
            this.questionArray.splice(randNum, 1); 
            console.log(this.questionArray); 
            length = this.questionArray.length; 
        }
    }
}

debugger
console.log(qAndA.questionArray)
qAndA.pickQuestion(); 


