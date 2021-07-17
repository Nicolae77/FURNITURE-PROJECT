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
	const sidebar = document.querySelector(".side-bar");
	const navbar = document.querySelector(".nav-bar");
	const navLinks = document.querySelectorAll(".nav-bar li");

    sidebar.onclick = () => {
		
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
	sidebar.classList.toggle("toggle");
    }
	
	}

window.onload = () => navSlide();
