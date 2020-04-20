//question picker


var qAndA = {
    questionArray: ["This is question 1",
                "This is question 2",
                "This is question 3",
                "This is question 4",
                "This is question 5"], 
    answerArray: [['a1', 'b', 'c', 'd'], 
                 ['a2', 'b', 'c', 'd'],
                 ['a3', 'b', 'c', 'd'],
                 ['a4', 'b', 'c', 'd'],
                 ['a5', 'b', 'c', 'd']],

    pickQuestion() {
        length = this.questionArray.length; 
        for (i = 0; i < 5; i++){
            var question = document.getElementById('question');
            randNum = Math.floor(Math.random() * (length--));
            if (length == 1 && randNum == 1) {
                currentQ = this.questionArray[0];
                question.innerHTML = currentQ;  
                this.answers(0); 
            } else {
                currentQ = this.questionArray[randNum];
                question.innerHTML = currentQ;
                this.answers(randNum); 
                this.questionArray.splice(randNum, 1); 
                console.log(this.questionArray); 
                length = this.questionArray.length; 
            }
        }
    },

    answers(x) {
        var btn1 = document.getElementById('btn1');  
        var btn2 = document.getElementById('btn2');  
        var btn3 = document.getElementById('btn3');  
        var btn4 = document.getElementById('btn4'); 
        btnArray = [btn1, btn2, btn3, btn4];
        var counter = 0; 
        for (y of btnArray) {
            y.innerHTML = this.answerArray[x][counter];
            counter++; 
         }   
        this.answerArray.splice(x, 1);         
    }
}



debugger
console.log(qAndA.questionArray)
qAndA.pickQuestion(); 


// function shuffle(array) {
//     var m = array.length, t, i;
  
//     // While there remain elements to shuffle…
//     while (m) {
  
//       // Pick a remaining element…
//       i = Math.floor(Math.random() * m--);
  
//       // And swap it with the current element.
//       t = array[m];
//       array[m] = array[i];
//       array[i] = t;
//     }
  
//     return array;
//   }