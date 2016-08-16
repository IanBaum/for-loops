$(document).ready(function(){
  // Counter
  $("#userNumbers").submit(function(event) {
    event.preventDefault();
    var countTo = parseInt($('#countTo').val());
    var countBy = parseInt($('#countBy').val());

    if(!countTo || !countBy) {
      alert("Please enter a valid number!")
    }
    else if (countTo < 0 || countBy < 0) {
      alert("Please enter a positive number!")
    }
    else if (countBy > countTo) {
      alert("Cannot count to smaller number than you are counting by!")
    }
    else {
      $("#output").text("");
      for(var index = countBy; index <= countTo; index += countBy){
        $('#output').append(" " + index);
      }
    }
  });
  // Word Puzzle
  $("#puzzleInfo").submit(function(event){
    event.preventDefault();

    var puzzleString = $("#puzzleString").val();
    var puzzleArray = puzzleString.split("");

    for(var index = 0; index < puzzleArray.length; index++){
      if(puzzleArray[index] === "a" ||puzzleArray[index] === "e" ||puzzleArray[index] === "i" ||puzzleArray[index] === "o" ||puzzleArray[index] === "u"){
        puzzleArray[index] = "-";
      }
    }
    $("#puzzleOutput").text(puzzleArray.join(""));
    $("#puzzleString").val("");

  });

  $("#factorialInfo").submit(function(event){
    event.preventDefault();

    var number = parseInt($('#factorialNumber').val());
    var outputNumber = 1

    for(var index = number; index > 0; index--){
      outputNumber *= index;
    }
    $('#factorialOutput').text(outputNumber);
  });

  $("#palindromeInfo").submit(function(event){
    event.preventDefault();

    var palindromeString = $('#palindromeString').val().toLowerCase();
    var palindromeArray = palindromeString.split("");
    var noSpaceArray = [];
    var firstHalfArray = [];
    var secondHalfArray = [];
    console.log(palindromeArray);

    for(var index = 0; index < palindromeArray.length; index++){
      if(palindromeArray[index] != " "){
        noSpaceArray.push(palindromeArray[index]);
      }
    }

    for(var index = 0; index < Math.floor(noSpaceArray.length/2); index++){
        firstHalfArray.push(noSpaceArray[index]);
    }
    console.log(firstHalfArray);
    for(var index = Math.ceil(noSpaceArray.length/2); index < noSpaceArray.length; index++){
        secondHalfArray.push(noSpaceArray[index]);
    }
    console.log(secondHalfArray);
    secondHalfArray.reverse()
    if(firstHalfArray.toString() === secondHalfArray.toString()){
      $("#palindromeOutput").text("This is a Palindrome!")
    }
    else {
      $("#palindromeOutput").text("This is not a Palindrome!")
    }

  });
});
