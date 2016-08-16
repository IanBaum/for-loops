$(document).ready(function(){
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
      for(var index = countBy; index <= countTo; index += countBy)
        $('#output').append(" " + index);
    }    
  });

});
