// question  & answer picker
var time = 60; 
let score = 0;

// console.log(time); 

// Timer Function
function timer() {
    setInterval(function() {
        $("#timer").html(time); 
        time--; 
    }, 1000); 

}

// Define Question & Answer Objects 
var qa1 = {
    q: "This is question 1", 
    a: ["a1", "a", "a", "a"], 
    correct: function() {
        return this.a[0];
    }
};

var qa2 = {
    q: "This is question 2", 
    a: ["a2", "a", "a", "a"], 
    correct: function() {
        return this.a[3];
    }
};

var qa3 = {
    q: "This is question 3", 
    a: ["a3", "a", "a", "a"], 
    correct: function() {
        return this.a[2];
    }
};

var qa4 = {
    q: "This is question 4", 
    a: ["a4", "a", "a", "a"], 
    correct: function() {
        return this.a[0];
    }
};

var qa5 = {
    q: "This is question 5", 
    a: ["a5", "a", "a", "a"], 
    correct: function() {
        return this.a[1]; 
    }
};



$(".btn-secondary").on("click", function() {
    debugger
    //timer(); 
    // capture value of button pressed 
    var selBtn = parseInt($(this).val()); 
    console.log(selBtn); 

    // define non-shuffled ? order
    var qOrder = [qa1, qa2, qa3, qa4, qa5]; 
    console.log(qOrder); 


    // define shuffled ? order
    qShuffled = shuffle; 
    console.log(qShuffled); 

    // iterate through shuffled ? order
    for (i = 0; i < qShuffled.length; i++) {

        // pick question from q object
        currentQ = qShuffled[i].q; 
        console.log(currentQ); 

        // Change html content for #question element, to question body
        $("#question").html(currentQ);

        // Change html content for #answer element, to answer array 
        for (i=1; i < 5; i++) {
            $(`#btn${i}`).html(qShuffled.a[i]);
        }
    }
});

var shuffle = function (qOrder) {

	var currentIndex = array.length;
	var temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = qOrder[currentIndex];
		qOrder[currentIndex] = qOrder[randomIndex];
		qOrder[randomIndex] = temporaryValue;
    }
    return qOrder;
}

	

// $(".btn-secondary").on("click", function() {
//     debugger
//     //timer(); 
//     var selBtn = parseInt($(this).val()); 
//     console.log(selBtn); 
//     qAndA.pickQuestion(selBtn); 
//     debugger
//     qAndA.checkAnswer(selBtn, currentQ); 
// });


// var qAndA = {
//     // Define Question Array
//     questionArray: ["This is question 1",
//                 "This is question 2",
//                 "This is question 3",
//                 "This is question 4",
//                 "This is question 5"], 

//     // Define Answer Arrays to be assigned to html buttons
//     answerArray: [['a1', 'b', 'c', 'd'], 
//                  ['a2', 'b', 'c', 'd'],
//                  ['a3', 'b', 'c', 'd'],
//                  ['a4', 'b', 'c', 'd'],
//                  ['a5', 'b', 'c', 'd']],

//     // Define answer booleans. False by default, true if right answer is chosen
//     correctArray: [[1, 1, 3, 2, 3,]],


//     // Method for randomly choosing Question to Display to user

//     pickQuestion(selBtn) {
        
//         //debugger
//         // Capture length of array and storing it in variable 'length'
//         length = this.questionArray.length; 

//         // random number generator 0 to (length - 1) to account for 0 index value
//         randNum = Math.floor(Math.random() * (length--));
//         currentQ = this.questionArray[randNum]; 


//         // Since question is randomly selected with random number (0 to (length - 1))
//         // length will eventually be a single index, with a length of 1 and this 
//         // if block is here to avoid the potential for a 1 to be picked when the only 
//         // index at length 1 is 0. 

//         if (length == 1 && randNum == 1) {
//             // Assign the question being picked to variable
//             currentQ = this.questionArray[0];

//             // From variable 'question', which stored $('#question'), change inner html 
//             // to value of currentQ
//             $("#question").html(currentQ);

//             // invoke answers(), with an argument of 0, since only one set of answers 
//             // remain in answers array   
//             this.answers(0); 
                 

//         //  For all other lengths of questionArray, same logic as above 

//         } else {
//             $("#question").html(currentQ);
//             this.answers(randNum); 
//             if ()
//             // splice the current question from the array so that it cannot be chosen again
//             this.questionArray.splice(randNum, 1); 

//             // set new length so that the next random number range is (n - 1)
//             length = this.questionArray.length;
//         }
//         return currentQ; 
//     },
    
//     // Method for selecting appropriate answer set for each question 
//     // Iterate through each btn variable (btn1, btn2, btn3, btn4 using template literal syntax)
//     // Change inner html of iterated btn to the answer stored in answerArray at 
//     // position [x], which is the random number generated in pickQuestion(), and
//     // the specific index [i - 1], correleating with each respective button (-1)
//     // to account for the [0] index position
//     // y.innerHTML = this.answerArray[x][counter];

//     answers(x) {
//         for (i=1; i < 5; i++) {
//             $(`#btn${i}`).html(this.answerArray[x][i-1]);
//         }
//         // remove the set of answers from answerArray so they cannot be used again
//         this.answerArray.splice(x, 1); 
//      },  
// }






