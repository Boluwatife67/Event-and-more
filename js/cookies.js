// Check if the user has already accepted cookies
if (!localStorage.getItem('cookiesAccepted')) {
    document.getElementById('cookies-popup').style.display = 'block';
    
  }
  
  // Function to hide the pop-up and store the user's preference
  function acceptCookies() {
    document.getElementById('cookies-popup').style.display = 'none';
    localStorage.setItem('cookiesAccepted', true);
    let c = document.getElementById('blurMe');
    c.style.position = 'relative';
    c.style.filter = 'blur(0px)';
  }
  
  // Attach the acceptCookies function to the button click event
  document.getElementById('accept-cookies').addEventListener('click', acceptCookies);
  