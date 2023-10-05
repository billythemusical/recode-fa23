// const frog = document.getElementById('frog')
const gsapToButton = document.getElementById('gsap-to')
gsapToButton.addEventListener('click', rotateImage)

function rotateImage() {
    console.log('button pressed!')
    gsap.fromTo(
        '#frog', // object to change
        { rotate: "0deg" }, // from these values...
        {
            rotate: "360deg", // to these values...
            duration: 0.5, // over 3 seconds
        }
    );
}

// Let's talk about anonymous functions!!