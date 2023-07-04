window.addEventListener('load', function() {
  // Get the target div element
  var targetDiv = document.getElementById('first-div');

  // Scroll to the target div
  if (targetDiv) {
    targetDiv.scrollIntoView();
  }
});

// Get the navigation bar element
const navbar = document.getElementById('nav');
//const logoo = document.getElementById('logo');

// Add a scroll event listener
window.addEventListener('scroll', () => {
  // Check if the user has scrolled beyond a specific threshold (e.g., 100 pixels)
  if (window.pageYOffset > 100) {
    // Apply the scroll style
    nav.classList.add('scroll-style');
    //logo.classList.add('logoScroll-style');
  } else {
    // Remove the scroll style
    nav.classList.remove('scroll-style');
    //logo.classList.remove('logoScroll-style');
  }
});

/*window.addEventListener('scroll', function() {
  var logo = document.getElementById('logo');
  
  // Adjust the scrollOffset value according to your needs
  var scrollOffset = 100;
  
  if (window.pageYOffset > scrollOffset) {
    // Change the logo source when scrolling down
    logo.src = 'logo10.png';
  } else {
    // Revert the logo source when scrolling up
    logo.src = 'logo8.png';
  }
});*/
verif=1;
window.addEventListener('scroll', function() {
  var logo = document.getElementById('logo');
  var scrollOffset = 100; 
  if (window.pageYOffset > scrollOffset) {
    // Fade out the logo
      if(verif==0){
    logo.style.opacity = '0';
      fadeIn(logo);
    logo.src = './images/logo10.png';
       verif=1;}
     
    
  } else {
    
    // Fade in the logo
      if(verif==1){
      
    logo.style.opacity = '0';
          fadeIn(logo);
    logo.src = './images/logo8.png';
      verif=0;}
  }
});

function fadeIn(element) {
  var opacity = 0;
  var interval = setInterval(function() {
    if (opacity < 1) {
      opacity += 0.1;
      element.style.opacity = opacity.toString();
    } else {
      clearInterval(interval);
    }
  }, 50);
}




