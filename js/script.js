// console.log("Hello world");
// const myName = "Abdo Khatab";
// console.log(myName);
// const h1 = document.querySelector(".h1-hero");
// console.log(h1);
// h1.textContent = myName;
// h1.style.backgroundColor = "red";
// h1.style.padding = "5rem";
// h1.style.fontSize = "15rem";

// h1.addEventListener("click", function () {
//   h1.textContent = myName;
//   h1.style.backgroundColor = "red";
//   h1.style.padding = "5rem";
//   h1.style.fontSize = "15rem";
// });

/* SET curr year*/
const Year = document.querySelector(".year");
const currYear = new Date().getFullYear();
Year.textContent = currYear;

/* Make mobile navigation work */
const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header-page");

// if we cick on btnNav , we need to add class nav-mobile-active to page header
btnNav.addEventListener("click", function () {
  header.classList.toggle("nav-mobile-active");
});

/* Smooth scrooling */
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (evnt) {
    evnt.preventDefault(); // remove the default behavoir
    const href = link.getAttribute("href"); // we need first to specify where we are going from the current event
    if (href === "#") {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    }
    if (href.startsWith("#")) {
      // Now href if the ID of the section that we want scroll to
      const section = document.querySelector(href);
      section.scrollIntoView({ behavior: "smooth" });
    }
    // close mobile nav
    if (link.classList.contains("a-main-nav"))
      header.classList.toggle("nav-mobile-active");
  });
});

/* Sticky Navigation */
// First we want to observe section-hero to make nav sticky, when section-hero is out viewport
const sectionHero = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      document.querySelector(".header-page").classList.add("sticky");
      sectionHero.style.marginTop = "9.8rem";
    } else {
      document.querySelector(".header-page").classList.remove("sticky");
      sectionHero.style.marginTop = "0rem";
    }
  },
  {
    // Root is the viewport
    root: null,
    // when 0% of the hero section is in veiwport
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHero);
///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
