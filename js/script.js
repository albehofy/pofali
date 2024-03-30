// form validation 
// start JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })(); 


// Removing Animation
window.setTimeout(()=>{
  // removing loader
  document.querySelector('.loader').style.opacity='0';
  document.querySelector('.loader').style.position='static';
  document.querySelector('.loader').style.height='0';
  // removing hidden overflow from y axios 
  document.querySelector('body').style.overflowY = 'auto'; 
},0)