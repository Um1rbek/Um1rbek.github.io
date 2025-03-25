const ball = document.getElementById('ball');
const name = prompt("What is your name? ....")

function setRandomPosition() {
    const maxX = window.innerWidth - 100;
    const maxY = window.innerHeight - 100;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    ball.style.left = randomX + 'px';
    ball.style.top = randomY + 'px';
}

// Sichqoncha ustiga kelganda
ball.addEventListener('mouseover', () => {
    setRandomPosition();
});

// Sahifa yuklanganda dastlabki pozitsiyani belgilash
window.onload = setRandomPosition;



ball.addEventListener("click" , () => {
    alert( name + " you are win")
})
