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

const setDynamicMargins = () => {
    const windowWidth = window.innerWidth;
    const marginValue = windowWidth < 1040 ? '0' : '220px';

    if (localStorage.getItem("sectionVisible2") === "true") {
        elements.header1.style.margin = `0 ${marginValue}`;
        elements.introduction.style.margin = `0 ${marginValue}`;
        elements.sections.section1.style.margin = `0 ${marginValue}`;
        elements.sections.section2.style.margin = `0 ${marginValue}`;
        elements.sections.section3.style.margin = `0 ${marginValue}`;
    } else {
        elements.header1.style.margin = "0";
        elements.introduction.style.margin = "0";
        elements.sections.section1.style.margin = "0";
        elements.sections.section2.style.margin = "0";
        elements.sections.section3.style.margin = "0";
    }
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

setSectionVisibility(1, elements.sections.section1);
setSectionVisibility(2, elements.sections.section2);
setSectionVisibility(3, elements.sections.section3);
if (localStorage.getItem("sectionVisible3") === "true") {
    styleAllAnchors();
}

setDynamicMargins();
window.addEventListener('resize', setDynamicMargins);

elements.anchors.anchor1.addEventListener("click", (e) => {
    e.preventDefault();
    elements.sections.section1.classList.remove("hidden");
    elements.sections.section1.scrollIntoView({ behavior: "smooth" });
    localStorage.setItem("sectionVisible1", "true");

    if (localStorage.getItem("sectionVisible2") === "true") {
        elements.introduction.classList.add("margin-applied");
    }

    setDynamicMargins();
});

elements.anchors.anchor2.addEventListener("click", (e) => {
    e.preventDefault();
    elements.sections.section2.classList.remove("hidden");
    elements.sections.section2.scrollIntoView({ behavior: "smooth" });
    localStorage.setItem("sectionVisible2", "true");

    applyMargin(elements.sections.section1, "margin-applied");
    setDynamicMargins();
});

elements.anchors.anchor3.addEventListener("click", (e) => {
    e.preventDefault();
    elements.sections.section3.classList.remove("hidden");
    elements.sections.section3.scrollIntoView({ behavior: "smooth" });
    localStorage.setItem("sectionVisible3", "true");
    applyMargin(elements.sections.section2, "margin-applied");
    styleAllAnchors();
    setDynamicMargins();
});

elements.finalLookLink.addEventListener("click", (e) => {
    e.preventDefault();
    elements.preTagsInSection2.forEach(preTag => {
        preTag.style.backgroundColor = "lightblue";
        preTag.style.borderLeft = "2px solid blue";
        preTag.style.borderBottom = "2px solid gray";
    });

    elements.header1.style.display = "none";
    elements.header2.classList.remove("hidden");
    elements.header2.style.display = "flex";
    elements.header2.style.margin = "0";
});
