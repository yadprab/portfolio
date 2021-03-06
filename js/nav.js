const mainFn = () => {
  const morePro = document.querySelector(".more--pro");

   setInterval(()=>{morePro.classList.toggle("buzz")},2000)

  

  navFn();

  projects();

  skills();

    contact();
};

const navFn = () => {
  const header = document.querySelector("header");

  const handleIntersect = (entries) => {
    entries.forEach((entry) => {
      !entry.isIntersecting
        ? header.classList.add("scroll")
        : header.classList.remove("scroll");
    });
  };
  const scrollNav = new IntersectionObserver(handleIntersect);

  scrollNav.observe(header);
};
const projects = () => {
  const projects = document.querySelector(".projects");

  const proLink = document.querySelector("[data-links=projects]");

  const parent = proLink.parentElement.parentElement;

  const handleIntersectPro = (entries) => {
    entries.forEach((entry) => {
      entry.isIntersecting
        ? parent.classList.add("highlight--pro")
        : parent.classList.remove("highlight--pro");
    });
  };

  const proNav = new IntersectionObserver(handleIntersectPro, {
    rootMargin: "-150px",
  });

  proNav.observe(projects);
};
const skills = () => {
  const skills = document.querySelector(".skills");

  const skiLink = document.querySelector("[data-links=skills]");

  const parent = skiLink.parentElement.parentElement;

  const handleIntersectSki = (entries) => {
    entries.forEach((entry) => {
     
      entry.isIntersecting
        ? parent.classList.add("highlight--skill")
        : parent.classList.remove("highlight--skill");
    });
  };

  const skiNav = new IntersectionObserver(handleIntersectSki, {
    rootMargin: "-150px",
    threshold:0,
  });

  skiNav.observe(skills);
};
const contact = () => {
  const contact = document.querySelector(".contact");

  const conLink = document.querySelector("[data-links=contact]");

  const parent = conLink.parentElement.parentElement;

  const handleIntersectCon = (entries) => {
    entries.forEach((entry) => {
     
      entry.isIntersecting
        ? parent.classList.add("highlight--contact")
        : parent.classList.remove("highlight--contact");
    });
  };

  const conNav = new IntersectionObserver(handleIntersectCon, {
    rootMargin: "-150px",
  });

  conNav.observe(contact);
};
window.addEventListener("DOMContentLoaded", mainFn);
