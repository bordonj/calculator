
//UI logic
const validate = () => {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    let forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    let validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
  console.log('validated');
};

// validate();

$(document).ready(function() {
  $('form#user-info').submit(function(event) {
    event.preventDefault();
    // validate();
    const firstName = $('input#validationCustom01').val();
    const lastName = $('input#validationCustom02').val();
    const city = $('input#validationCustom03').val();
    const zip = $('input#validationCustom05').val();
    const age = parseInt($('input#validationCustom06').val());
    const checked = $('input:checkbox').is(':checked');
    console.log(checked);
    $('.name').text(`${firstName} ${lastName}`);

    
    // if (!firstName || !lastName || !city || !age || !zip || !checked) {
    //   alert('please do not leave empty field');
    //   return;
    // }
    
    if (firstName || lastName || city || age || zip) {
      if (!checked) {
        alert('please agree to terms and conditions');
        return;
      }
    } else if (!firstName || !lastName || !city || !age || !zip) {
      if (!checked) {
        alert('please agree to terms and conditions');
        return;
      }
      return;
    }
    //following code below ignores the alert for the checkbox but does not allow the user to see the information
    // if (!firstName || !lastName || !city || !age || !zip) {
    //   return;
    // }
    // if (!checked) {
    //   alert('please agree to terms and conditions');  
    //   return;
    // }
    if (age < 18) {
      $('#underage').show();
      $('#adult').hide();
    } else {
      $('#adult').show();
      $('#underage').hide();
    }
    // validate();
  });
});