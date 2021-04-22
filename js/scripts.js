//business logic
function add(number1, number2) {
  return number1 + number2;
  }
function subtract(number1, number2) {
  return number1 - number2;
}
function multiply(number1, number2) {
  return number1 * number2;
}
function divide(number1, number2) {
  return number1 / number2;
};



//UI logic
$(document).ready(function() {
  $("form#add").submit(function(event) { 
    event.preventDefault();
    const number1 = parseInt($("#add1").val());
    const number2 = parseInt($("#add2").val());
    const result = add(number1, number2);
    $("#output-add").text(result);
  });

  $("form#subtract").submit(function(event) { 
    event.preventDefault();
    const number1 = parseInt($("#subtract1").val());
    const number2 = parseInt($("#subtract2").val());
    const result = subtract(number1, number2);
    $("#output-subtract").text(result);
  });

  $("form#divide").submit(function(event) { 
    event.preventDefault();
    const number1 = parseInt($("#divide1").val());
    const number2 = parseInt($("#divide2").val());
    const result = divide(number1, number2);
    $("#output-divide").text(result);
  });

  $('form#multiply').submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($('#multiply1').val());
    const number2 = parseInt($('#multiply2').val());
    const result = multiply(number1, number2);
    $('#output-multiply').text(result);
  })


  // for the calc.html
  $('form#operations').submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($('#op1').val());
    const number2 = parseInt($('#op2').val());
    const operator = $('select#operator').val();
    let result;

    if (operator === 'add') {
      result = add(number1, number2);
    } else if(operator === 'subtract') {
      result = subtract(number1, number2)
    } else if (operator === 'divide') {
      result = divide(number1, number2)
    } else if (operator === 'multiply') {
      result = multiply(number1, number2)
    } 
    if (isNaN(result)) {
      alert('please put in a number');
    } else {
      $('#output-all').text(result);
    }
  })

  $('form#calc').submit(function(event) {
    event.preventDefault();
    const number1 = parseFloat($('#radio1').val());
    const number2 = parseFloat($('#radio2').val());
    const operator = $('input:radio[name=operator]:checked').val();
    let result;

    if (operator === 'add') {
      result = add(number1, number2);
    } else if (operator === 'subtract') {
      result = subtract(number1, number2);
    } else if (operator === 'divide') {
      result = divide(number1, number2);
    } else if (operator === 'multiply') {
      result = multiply(number1, number2);
    }
    if (isNaN(result)) {
      alert('please enter a number');
    } else {
      $('#radio-all').text(result);
    }
    
  })
});



//when i write a function, how do i know when to not put an unnecessary parameter and when to put a parameter?