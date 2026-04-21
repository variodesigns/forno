// Step 1: Fade in FORNO
setTimeout(() => {
    document.querySelector('.forno-text').classList.add('show-text');
}, 300);

// Step 2: Left bracket slides in
setTimeout(() => {
    document.querySelector('.left-bracket').classList.add('show-left');
}, 1500);

// Step 3: Right bracket slides in
setTimeout(() => {
    document.querySelector('.right-bracket').classList.add('show-right');
}, 1700);

// Step 4: Hold, then fade everything out
// Fade out later
setTimeout(() => {
    document.querySelector('.intro-container').classList.add('fade-out');
}, 3000);

document.querySelector('.subtitle').classList.add('fade-out');


// Step 4: Show subtitle after brackets land
setTimeout(() => {
    document.querySelector('.subtitle').style.opacity = 1;
}, 2000);

// Step 5: Redirect to homepage
setTimeout(() => {
    window.location.href = "homepage.html";
}, 4000); // gives fade-out time to breathe