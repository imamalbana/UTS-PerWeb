
document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('navtoggle');
  const navMenu = document.getElementById('navnav');

  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('responsive');
  });
});


var typingEffect = new Typed(".typedText", {
  strings: [
    '<span style="color: rgb(68, 68, 68) ;">Imam <span style="color: rgb(3, 108, 95);">Albana</span> </span>',
    '<span style="color: rgb(3, 108, 95) ;">A Web <span style="color: rgb(68, 68, 68) ;">Developer</span> </span>',
  ],
  loop: true,
  typeSpeed: 100,
  backSpeed: 60,
  backDelay: 1200,
});

// project navigasi

function ShowAll() {
  const AllImage = document.getElementById("all-image");
  AllImage.style.display = "block";
  AllImage.classList.add("animated");

  document.getElementById("image-website").style.display = "none";
  document.getElementById("image-photography").style.display = "none";
  document.getElementById("image-design").style.display = "none";
}
function ShowImageWebsite() {
  const imageWebsite = document.getElementById("image-website");
  imageWebsite.style.display = "block";
  imageWebsite.classList.add("animated");

  document.getElementById("all-image").style.display = "none";
  document.getElementById("image-photography").style.display = "none";
  document.getElementById("image-design").style.display = "none";
}

function ShowImagePhotography() {
  const imagePhotography = document.getElementById("image-photography");
  imagePhotography.style.display = "block";
  imagePhotography.classList.add("animated");

  document.getElementById("all-image").style.display = "none";
  document.getElementById("image-website").style.display = "none";
  document.getElementById("image-design").style.display = "none";
}

function ShowImageDesign() {
  const imageDesign = document.getElementById("image-design");
  imageDesign.style.display = "block";
  imageDesign.classList.add("animated");

  document.getElementById("all-image").style.display = "none";
  document.getElementById("image-website").style.display = "none";
  document.getElementById("image-photography").style.display = "none";
}

// Tambah dan hapus kelas aktif 
var activeclassLink = document.querySelectorAll(".aktif");
for (var i = 0; i < activeclassLink.length; i++) {
  activeclassLink[i].addEventListener("click", activateClassLink);
}
function activateClassLink(e) {
  for (var i = 0; i < activeclassLink.length; i++) {
    activeclassLink[i].classList.remove("active");
  }
  e.target.classList.add("active");
}


// About Us Navigasi

function ShowAboutText() {
  document.getElementById("abouttext").style.display = "block";
  document.getElementById("aboutskill").style.display = "none";
}

function ShowAboutSkill() {
  document.getElementById("abouttext").style.display = "none";
  document.getElementById("aboutskill").style.display = "block";
}
