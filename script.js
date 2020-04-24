// //question  & answer picker
// var time = 60; 
// console.log(time); 

// let countdown = $("#timer"); 
// console.log(countdown); 

// function timer() {
//     time--; 
//     countdown.innerHTML = time; 
// }
// setInterval(timer, 1000)



$(".btn-secondary").on("click", function() {
    //debugger
    //timer(); 
    //const answerBtns = $(".answers");
    var selBtn = $(this).val(); 
    //console.log(selBtn);
    //checkAnswer(selBtn, qAndA.currentQ); 
    if (selBtn === )
    qAndA.pickQuestion(); 
});



var qAndA = {
    // Define Question Array
    questionArray: ["This is question 1",
                "This is question 2",
                "This is question 3",
                "This is question 4",
                "This is question 5"], 

    // Define Answer Arrays to be assigned to html buttons
    answerArray: [['a1', 'b', 'c', 'd'], 
                 ['a2', 'b', 'c', 'd'],
                 ['a3', 'b', 'c', 'd'],
                 ['a4', 'b', 'c', 'd'],
                 ['a5', 'b', 'c', 'd']],

    // Define answer booleans. False by default, true if right answer is chosen
    correct1: this.answerArray[0][2], 
    correct2: this.answerArray[1][1],
    correct3: this.answerArray[2][3],
    correct4: this.answerArray[3][3],


    // Method for randomly choosing Question to Display to user

    pickQuestion() {
        
        //debugger
        // Capture length of array and storing it in variable 'length'
        length = this.questionArray.length; 
        //console.log(length);
        // store #question in variable 'question'
        //var question = $("#question").html();
        //console.log(question); 
        // random number generator 0 to (length - 1) to account for 0 index value
        randNum = Math.floor(Math.random() * (length--));
        currentQ = this.questionArray[randNum]; 
        //console.log(randNum); 


            // Since question is randomly selected with random number (0 to (length - 1))
            // length will eventually be a single index, with a length of 1 and this 
            // if block is here to avoid the potential for a 1 to be picked when the only 
            // index at length 1 is 0. 

            if (length == 1 && randNum == 1) {
                // Assign the question being picked to variable
                currentQ = this.questionArray[0];
                //console.log(currentQ); 
                // From variable 'question', which stored $('#question'), change inner html 
                // to value of currentQ
                $("#question").html(currentQ);
                //console.log(this.questionArray);
                // invoke answers(), with an argument of 0, since only one set of answers 
                // remain in answers array   
                this.answers(0); 

            //  For all other lengths of questionArray, same logic as above 

            } else {
                //currentQ = this.questionArray[randNum];
                //console.log(currentQ); 
                $("#question").html(currentQ);
                this.answers(randNum); 
                // splice the current question from the array so that it cannot be chosen again
                this.questionArray.splice(randNum, 1); 
                //console.log(this.questionArray); 
                //console.log(this.answerArray); 
                // set new length so that the next random number range is (n - 1)
                length = this.questionArray.length;
                //console.log(length); 
            }
        },
    
    // Method for selecting appropriate answer set for each question 
    // Iterate through each btn variable (btn1, btn2, btn3, btn4 using template literal syntax)
    // Change inner html of iterated btn to the answer stored in answerArray at 
    // position [x], which is the random number generated in pickQuestion(), and
    // the specific index [i - 1], correleating with each respective button (-1)
    // to account for the [0] index position
    // y.innerHTML = this.answerArray[x][counter];

    answers(x) {
        for (i=1; i < 5; i++) {
            //console.log(i);
            $(`#btn${i}`).html(this.answerArray[x][i-1]);
        }
        // remove the set of answers from answerArray so they cannot be used again
        this.answerArray.splice(x, 1); 
     },  
}






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