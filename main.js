/*================================= toggle icon navbar ===================================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

/*================================= scroll section active link ===================================*/
let sections = document.querySelectorAll('section, div[id]');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 130;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']')?.classList.add('active');
            });
        }
    });

    /*================================= sticky navbar ===================================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*================================= remove toggle icon and navbar ===================================*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/*================================= scroll to section manually on click ===================================*/
document.querySelectorAll('header nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
      e.preventDefault();

      let targetId = this.getAttribute('href').substring(1);
      let targetElement = document.getElementById(targetId);

      if (targetElement) {
  
          let headerOffset;
          if (window.innerWidth > 768) { 
              headerOffset = 130;
          } else { 
              headerOffset = 120; 
          }

          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;

          window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
          });
      }
  });
});


function openPopup(id) {
  document.getElementById('overlay').style.display = 'block';
  document.querySelectorAll('.popup').forEach(p => p.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}
function closeAllPopups() {
  document.getElementById('overlay').style.display = 'none';
  document.querySelectorAll('.popup').forEach(p => p.style.display = 'none');
}