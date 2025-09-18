
document.addEventListener('DOMContentLoaded', function () {
  // Reset hamburger and nav menu state on page load
  const hamburger = document.getElementById('hamburger-btn');
  const navLinks = document.getElementById('nav-links');
  if (hamburger && navLinks) {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');

    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('open');
    });

   
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 700) {
          hamburger.classList.remove('active');
          navLinks.classList.remove('open');
        }
      });
    });
  }

  let mode = document.querySelector(".mode1");
  let sun = document.querySelector(".sun");
  let moon = document.querySelector(".moon");

  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
    sun.style.display = "inline";
    moon.style.display = "none";
  } else {
    document.body.classList.remove("light");
    sun.style.display = "none";
    moon.style.display = "inline";
  }

  mode.addEventListener("click", () => {
    if (document.body.classList.toggle("light")) {
      sun.style.display = "inline";
      moon.style.display = "none";
      localStorage.setItem("theme", "light");
    } else {
      sun.style.display = "none";
      moon.style.display = "inline";
      localStorage.setItem("theme", "dark");
    }
  });
});




// let mode=document.querySelector(".mode1")
// let sun=document.querySelector(".sun")
// let moon=document.querySelector(".moon")
// let body=document.getElementsByTagName("body")

// mode.addEventListener("click",(e)=>

// {
//     if(document.body.classList.toggle("light"))
//         {
//             document.body.classList.add("light")
//             sun.style.display="inline"
//             sun.style.color="white"
//             moon.style.display="none"
//         }
//         else
//         {
//             document.body.classList.remove("light")
//             moon.style.display="inline"
//             sun.style.display="none"
//     }
  
    
// })



// for styling smooth css
// Add this to your script.js or directly in your HTML
document.addEventListener('DOMContentLoaded', function () {
  // ...existing code...

  // Pop-up on scroll for skill containers
  const skillContainers = document.querySelectorAll('.skill-container');

  function revealSkillsOnScroll() {
    skillContainers.forEach(container => {
      const rect = container.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60 && rect.bottom > 60) {
        container.classList.add('active');
      } else {
        container.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', revealSkillsOnScroll);
  revealSkillsOnScroll(); // Reveal on load
});


document.addEventListener('DOMContentLoaded', function () {
  // ...existing code...

  // Pop-up on scroll for skill containers and project items
  const skillContainers = document.querySelectorAll('.skill-container');
  const projectItems = document.querySelectorAll('.project-item');

  function revealOnScroll(elements) {
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60 && rect.bottom > 60) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });
  }

  function revealAll() {
    revealOnScroll(skillContainers);
    revealOnScroll(projectItems);
  }

  window.addEventListener('scroll', revealAll);
  revealAll(); // Reveal on load
});