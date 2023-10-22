// document.getElementById("contact-form").addEventListener("submit", (event) => {
//   const contactForm = event.target
//   if (!validateContactForm(contactForm)) {
//     event.preventDefault();
//     displayError(contactForm, 'Invalid input')
//   }
// });

// // Function to validate email addresses
// function isValidEmail(email) {
//     // Define the JS Regex pattern for a valid email address
//     const emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    
//     // Test the email against the pattern and return the result (true or false)
//     return emailRegex.test(email);
//   }
  
//   // Function to validate phone numbers
//   function isValidPhoneNumber(phone) {
//     // Define the JS Regex pattern for a valid 10-digit phone number
//     const phoneRegex = /^\d{10}$/;
    
//     // Test the phone number against the pattern and return the result (true or false)
//     return phoneRegex.test(phone);
//   }

//   // Function to validate the contact form
// function validateContactForm(contactForm) {
//   // Get the values entered in the form fields
//   const name = contactForm["name"].value;
//   const email = contactForm["email"].value;
//   const phone = contactForm["phone"].value;
//   const message = contactForm["message"].value;

//   // Check if the required fields (name, email, and message) are empty
//   // If any of them are empty, return false to prevent form submission
//   if (!name || !email || !message) {
//     return false;
//   }

//   // Check if the email is valid using the isValidEmail function
//   // If the phone field is not empty, also check if it is valid using the isValidPhoneNumber function
//   // If either the email or the phone number is invalid, return false to prevent form submission
//   if (!isValidEmail(email) || (phone && !isValidPhoneNumber(phone))) {
//     return false;
//   }

//   // If all the validations pass, return true to allow form submission
//   return true;
// }

// // Function to display an error message on the web page
// function displayError(formElement, message) {
//   const errorElement = formElement.getElementsByClassName("form-error")[0];
  
//   // Set the innerHTML of the error element to the provided error message
//   errorElement.innerHTML = message;
  
//   // Change the display style of the error element to "block" to make it visible
//   errorElement.style.display = "block";
// }

// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }

// function currentDiv(n) {
//   showDivs(slideIndex = n);
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("projectSlides");
//   var dots = document.getElementsByClassName("demo");
//   if (n > x.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = x.length}
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" w3-white", "");
//   }
//   x[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " w3-white";
// }

// var $slider = $('.slider');

// var $slickTrack = $('.slick-track');
// var $slickCurrent = $('.slick-current');

// var slideDuration = 900;

// //RESET ANIMATIONS
// // On init slide change
// $slider.on('init', function(slick){
//   TweenMax.to($('.slick-track'), 0.9, {
//     marginLeft: 0
//   });
//   TweenMax.to($('.slick-active'), 0.9, {
//     x: 0,
//     zIndex: 2
//   });
// });
// // On before slide change
// $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
//   TweenMax.to($('.slick-track'), 0.9, {
//     marginLeft: 0
//   });
//   TweenMax.to($('.slick-active'), 0.9, {
//     x: 0
//   });
// });

// // On after slide change
// $slider.on('afterChange', function(event, slick, currentSlide){
//   TweenMax.to($('.slick-track'), 0.9, {
//     marginLeft: 0
//   });
//   $('.slick-slide').css('z-index','1');
//   TweenMax.to($('.slick-active'), 0.9, {
//     x: 0,
//     zIndex: 2
//   });
// });

// //SLICK INIT
// $slider.slick({
//   speed: slideDuration,
//   dots: true,
//   waitForAnimate: true,
//   useTransform: true,
//   cssEase: 'cubic-bezier(0.455, 0.030, 0.130, 1.000)'
// })

// //PREV
// $('.slick-prev').on('mouseenter', function(){
//                 TweenMax.to($('.slick-track'), 0.6, {
//                   marginLeft: "180px",
//                   ease: Quad.easeOut
//                 });
//                 TweenMax.to($('.slick-current'), 0.6, {
//                   x: -100,
//                   ease: Quad.easeOut
//                 });
//             });

// $('.slick-prev').on('mouseleave', function(){
//                 TweenMax.to($('.slick-track'), 0.4, {
//                   marginLeft: 0,
//                   ease: Sine.easeInOut
//                 });
//                 TweenMax.to($('.slick-current'), 0.4, {
//                   x: 0,
//                   ease: Sine.easeInOut
//                 });
//             });

// //NEXT
// $('.slick-next').on('mouseenter', function(){
  
//                 TweenMax.to($('.slick-track'), 0.6, {
//                   marginLeft: "-180px",
//                   ease: Quad.easeOut
//                 });
//                 TweenMax.to($('.slick-current'), 0.6, {
//                   x: 100,
//                   ease: Quad.easeOut
//                 });
//             });

// $('.slick-next').on('mouseleave', function(){
//                 TweenMax.to($('.slick-track'), 0.4, {
//                   marginLeft: 0,
//                   ease: Quad.easeInOut
//                 });
//                 TweenMax.to($('.slick-current'), 0.4, {
//                   x: 0,
//                   ease: Quad.easeInOut
//                 });
//             });