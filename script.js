const container = document.getElementById('container');
const tilt = document.querySelector('.tilt'); // wrapper div
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

// sound
const clickSound = new Audio("https://www.fesliyanstudios.com/play-mp3/387");

function switchMode(mode) {
    clickSound.currentTime = 0;
    clickSound.play();

    if (mode === "register") {
        container.classList.add("active");
    } else {
        container.classList.remove("active");
    }

    // bounce effect (safe)
    container.animate([
        { transform: "scale(0.96)" },
        { transform: "scale(1.02)" },
        { transform: "scale(1)" }
    ], {
        duration: 300,
        easing: "ease"
    });
}

// events
registerBtn.addEventListener('click', () => switchMode("register"));
loginBtn.addEventListener('click', () => switchMode("login"));

// firebaseConfig
const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();


/* ─── 3D TILT (FIXED) ─── */
tilt.addEventListener('mousemove', (e) => {
    const rect = tilt.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    tilt.style.transform = `
        rotateX(${y * 12}deg)
        rotateY(${x * -12}deg)
        scale(1.02)
    `;
});

tilt.addEventListener('mouseleave', () => {
    tilt.style.transform = 'rotateX(0) rotateY(0) scale(1)';
});


// GoogleAuthProvider
const googleBtn = document.querySelector(".fa-google-plus-g");

googleBtn.parentElement.addEventListener("click", () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.error(error);
        });
});

// githubauth
const githubBtn = document.querySelector(".fa-github");

githubBtn.parentElement.addEventListener("click", () => {
    const provider = new firebase.auth.GithubAuthProvider();

    auth.signInWithPopup(provider)
        .then(result => console.log(result.user))
        .catch(error => console.error(error));
});

// facebookauth
const facebookBtn = document.querySelector(".fa-facebook-f");

facebookBtn.parentElement.addEventListener("click", () => {
    const provider = new firebase.auth.FacebookAuthProvider();

    auth.signInWithPopup(provider)
        .then(result => console.log(result.user))
        .catch(error => console.error(error));
});

// Redirect user to linkedinpage
document.getElementById("linkedinBtn").addEventListener("click", () => {

    const clientId = "YOUR_LINKEDIN_CLIENT_ID";
    const redirectUri = "YOUR_REDIRECT_URI"; // e.g. http://localhost:5500/callback.html

    const scope = "r_liteprofile r_emailaddress";
    const state = "RANDOM_STRING";

    const linkedinAuthUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&state=${state}`;

    window.location.href = linkedinAuthUrl;
});