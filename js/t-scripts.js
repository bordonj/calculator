function triangle(a, b, c) {
  if (a + b <= c || a + c <= b || c + b <= a || isNaN(a)||isNaN(b)||isNaN(c)) {
    return 0;
  } else {
    if (a === b && b === c) {
      return 1;
    } else if (a === b || b === c || c === a) {
      return 2;
    } else {
      return 3;
    }
  }
}


$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const side1 = parseInt($("input#side1").val());
    const side2 = parseInt($("input#side2").val());
    const side3 = parseInt($("input#side3").val());
    const triangleType = triangle(side1, side2, side3);

    if (triangleType) {
      if (triangleType === 1) {
        $(".tri-type").text('Equilateral');
      } else if (triangleType === 2) {
        $(".tri-type").text('Iscoceles');
      } else if (triangleType === 3) {
        $(".tri-type").text('Scalene');
      } 
      $("#output1").show();
      $('#output2').hide();
    } else if (triangleType === 0) {
      $("#output2").show();
      $('#output1').hide();
    }
  })
});