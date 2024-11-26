const elements = {
  introduction: document.querySelector(".introduction"),
  body: document.querySelector("body"),
  sections: {
      section1: document.querySelector(".section-1"),
      section2: document.querySelector(".section-2"),
      section3: document.querySelector(".third-section"),
  },
  anchors: {
      anchor1: document.getElementById("show-state"),
      anchor2: document.getElementById("show-state-2"),
      anchor3: document.getElementById("show-state-3"),
  },
  finalLookLink: document.querySelector(".third-section a"),
  preTagsInSection2: document.querySelectorAll(".section-2 .code"),
  header1: document.querySelector(".header-1"),
  header2: document.querySelector(".header-2")
};

const setSectionVisibility = (sectionKey, sectionElement, marginAppliedClass = '') => {
  if (localStorage.getItem(`sectionVisible${sectionKey}`) === "true") {
      sectionElement.classList.remove("hidden");
      if (marginAppliedClass) {
          elements.introduction.classList.add(marginAppliedClass);
      }
  }
};

const applyMargin = (section, marginClass) => {
  section.classList.add(marginClass);
};

const styleAllAnchors = () => {
  document.querySelectorAll("a").forEach(anchor => anchor.classList.add("styled-anchor"));
};

localStorage.removeItem("sectionVisible1");
localStorage.removeItem("sectionVisible2");
localStorage.removeItem("sectionVisible3");

setSectionVisibility(1, elements.sections.section1, "margin-applied");
setSectionVisibility(2, elements.sections.section2, "margin-applied");
setSectionVisibility(3, elements.sections.section3);
if (localStorage.getItem("sectionVisible3") === "true") {
  styleAllAnchors();
}

elements.anchors.anchor1.addEventListener("click", (e) => {
  e.preventDefault();
  elements.sections.section1.classList.remove("hidden");
  elements.sections.section1.scrollIntoView({ behavior: "smooth" });
  localStorage.setItem("sectionVisible1", "true");
  elements.introduction.classList.add("margin-applied");
});

elements.anchors.anchor2.addEventListener("click", (e) => {
  e.preventDefault();
  elements.sections.section2.classList.remove("hidden");
  elements.sections.section2.scrollIntoView({ behavior: "smooth" });
  localStorage.setItem("sectionVisible2", "true");
  applyMargin(elements.sections.section1, "margin-applied");

  // Apply margin to header-1, introduction, and sections
  elements.header1.style.margin = "0 220px";
  elements.introduction.style.margin = "0 220px";
  elements.sections.section1.style.margin = "0 220px"; 
  elements.sections.section2.style.margin = "0 220px"; 
  elements.sections.section3.style.margin = "0 220px"; 
});

elements.anchors.anchor3.addEventListener("click", (e) => {
  e.preventDefault();
  elements.sections.section3.classList.remove("hidden");
  elements.sections.section3.scrollIntoView({ behavior: "smooth" });
  localStorage.setItem("sectionVisible3", "true");
  applyMargin(elements.sections.section2, "margin-applied");
  styleAllAnchors();

  // Apply margin to section3
  elements.header1.style.margin = "0 220px";
  elements.introduction.style.margin = "0 220px";
  elements.sections.section3.style.margin = "0 220px"; 
});

elements.finalLookLink.addEventListener("click", (e) => {
  e.preventDefault();
  elements.preTagsInSection2.forEach(preTag => {
      preTag.style.backgroundColor = "lightblue";
      preTag.style.borderLeft = "2px solid blue";
      preTag.style.borderBottom = "px soldi gray";
  });

  // Hide .header-1 and show .header-2
  elements.header1.style.display = "none";
  
  // Reset margin for header-2 and ensure it's displayed properly
  elements.header2.classList.remove("hidden");  // Unhide header-2
  elements.header2.style.display = "flex";  // Ensure header-2 is flex
  elements.header2.style.margin = "0";  // Remove any margin specifically from header-2

  // Keep the rest of the body margin intact
  // (No changes to the body margin here)
});