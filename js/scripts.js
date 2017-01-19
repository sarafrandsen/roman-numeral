//backend
var converter = function(input){
  var str = digitconverter(input);
  var convertedStr = "";
  for (var i=1;i<=str.length;i++){
    if (i === 4){
      convertedStr = convertedStr.substring(0,1).concat(concat(input, i))
    }else if (i === 5){
      convertedStr = convertedStr.substring(1)
    }else if (i === 9){
      convertedStr = "IX";
    }else{
    convertedStr = convertedStr.concat(concat(input, i))
  }
  }
  return convertedStr;
}

var digitconverter = function(input){
  if (input > 3999){
    return input;
  }else{
    if (input < 10){
      count = input/divider(input);
      var output = []
      for (var i = 1; i <=count; i++){
        output = output.concat([["I"]]);
      }
      return output.join("");
    }else if (input >= 10 && input < 100){
      count = input/divider(input);
      var output = []
      for (var i = 1; i <=count; i++){
        output = output.concat(["X"]);
      }
      return output.join("");
    }else if (input >=100 && input < 1000){
      count = input/divider(input);
      var output = []
      for (var i = 1; i <=count; i++){
        output = output.concat(["C"]);
      }
      return output.join("");
    }else if (input >= 1000){
      count = input/divider(input);
      var output = []
      for (var i = 1; i <=count; i++){
        output = output.concat(["M"]);
      }
      return output.join("");
    }
  }
}


//frontend
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    userInput = parseInt($("#user-input").val());
    var result = converter(userInput);
    $("#resultInRoman").text(result);
  })
})

//test
var divider = function(input){
  var divider = "1"
  for (var i = 1; i <=input.toString().length-1; i++){
    divider = divider.concat("0");
  }
  return parseInt(divider)
}

var concat = function(input, num){
  var digit = input.toString().length
  if (digit ===1){
    if (num ===4){
      return "V"
    }else{
      return "I"
    }
  }else if (digit ===2){
    if (num ===4){
      return "L"
    }else{
      return "X"
    }
  }else if (digit ===3){
    if (num ===4){
      return "D"
    }else{
      return "C"
    }
  }else if (digit ===4){
    return "M"
  }
}
