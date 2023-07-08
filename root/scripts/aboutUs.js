    var teamMembers = document.querySelectorAll('.team-member');
teamMembers.forEach(function(member) {
  member.addEventListener('click', function() {
    var name = this.querySelector('h3').textContent;
    alert('Clicked on ' + name);
  });
}); 

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
    logo.src = '../images/logo10.png';
       verif=1;}
     
    
  } else {
    
    // Fade in the logo
      if(verif==1){
      
    logo.style.opacity = '0';
          fadeIn(logo);
    logo.src = '../images/logo8.png';
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

document.addEventListener("DOMContentLoaded", function() {
    var animateParts = document.querySelectorAll(".animate-part");

    function isElementInViewport(element) {
      var rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function checkElements() {
      for (var i = 0; i < animateParts.length; i++) {
        if (isElementInViewport(animateParts[i])) {
          animateParts[i].classList.add("show");
        }
      }
    }

    window.addEventListener("scroll", checkElements);
    checkElements();
  });

document.addEventListener("DOMContentLoaded", function() {
    var animateElements = document.querySelectorAll(".animate-element");

    function isElementInViewport(element) {
      var rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function checkElements() {
      for (var i = 0; i < animateElements.length; i++) {
        if (isElementInViewport(animateElements[i])) {
          animateElements[i].classList.add("show");
        }
      }
    }

    window.addEventListener("scroll", checkElements);
    checkElements();
  });

/*for the scroll right and left*/
