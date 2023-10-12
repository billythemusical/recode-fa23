// const frog = document.getElementById('frog')
const gsapToButton = document.getElementById('gsap-to')
gsapToButton.addEventListener('click', rotateImage)

function rotateImage() {
    console.log('button pressed!')
    gsap.fromTo(
        '#frog', // object/element to change
        { rotate: "0deg" }, // from these values...
        {
            rotate: "360deg", // to these values...
            duration: 2, // over X seconds
            ease: "back.out(1.7)"
        }
    );
}

// Let's talk about anonymous functions!!