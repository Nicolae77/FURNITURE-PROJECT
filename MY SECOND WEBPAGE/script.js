// header scrolling effect
$(window).on('scroll', function(){
	if($(window).scrollTop()){
    $('header').addClass('nav-show');
		
	} 
	else{
		$('header').removeClass('nav-show');
	}
	
})

             //slide-bar
const navSlide = () => {
	const slidebar = document.querySelector(".slide-bar");
	const navbar = document.querySelector(".nav-bar");
	const navLinks = document.querySelectorAll(".nav-bar li");

    slidebar.onclick = () => {
		
	navbar.classList.toggle("nav-active");
		
      //Animation links
	navLinks.forEach((link, index) => {
		if (link.style.animation) {
			link.style.animation = "";
		} else {
			link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+1}s`;
		}
		});
	  //hamburger animation
	slidebar.classList.toggle("toggle");
    }
	
	}

window.onload = () => navSlide();