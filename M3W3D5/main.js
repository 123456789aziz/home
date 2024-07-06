const firstSection = document.getElementById("first-section");
const ctaButton = document.querySelectorAll(".animation");
const welcomeHeader = document.querySelector(".welcome h1");
const welcomeHeaderText = welcomeHeader.innerText;
welcomeHeaderText.innerText = "";

const generateSpan = (content) => {
    return `<span class="text-gsap">${content}</span>`;
}

const letters = welcomeHeaderText
    .split("")
    .map(letter => generateSpan(letter))
    .join("")
welcomeHeader.innerHTML = letters;

const timeline = gsap.timeline({
    delay: 0.5
})

timeline.to(".text-gsap", {
    opacity: 1,
    duration: 0.2, 
    ease: "power1.inOut",
    stagger: 0.1
})

console.log(welcomeHeader)


const heroImg = document.getElementById("hero-img");

gsap.from("#hero-img", {
    x: "200%",
    duration: 1,
    delay: 1,
    ease: "bounce.out"
})


gsap.from(".animation", {
    y: 300,
    duration: 1,
    delay: 1.5,
    ease: "bounce.out"
})

/*`<span class="text-gsap">${letter}</span>`*/

/*
gsap.from(firstSection, {
    x: -1000, 
    duration: 1, 
    ease: "power2.inOut"
})

const buttonAnimation = gsap.to(ctaButton, {
    scale: 0.8, 
    duration: 0.5, 
    ease: "power2.inOut",
    paused: true
})

ctaButton.addEventListener("mouseenter", () => buttonAnimation.play());
ctaButton.addEventListener("mouseleave", () => buttonAnimation.reverse());
*/