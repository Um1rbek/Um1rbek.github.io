
const ball = document.getElementById('ball');
const name = prompt("What is ypu name? ....")

// To'pning boshlang'ich pozitsiyasi
let posX = window.innerWidth / 2 - 25;
let posY = window.innerHeight / 2 - 25;

ball.style.left = posX + 'px';
ball.style.top = posY + 'px';

ball.addEventListener('mouseover', (e) => {
    // Mishka pozitsiyasini olish
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    // To'pning joriy pozitsiyasi
    const ballRect = ball.getBoundingClientRect();
    const ballCenterX = ballRect.left + 25;
    const ballCenterY = ballRect.top + 25;

    // Mishka to'pning qaysi tomonida ekanligini aniqlash
    const dx = mouseX - ballCenterX;
    const dy = mouseY - ballCenterY;

    // 100px masofaga qarama-qarshi yo'nalishda harakatlantirish
    const moveDistance = 200;
    const angle = Math.atan2(dy, dx);
    
    posX -= Math.cos(angle) * moveDistance;
    posY -= Math.sin(angle) * moveDistance;

    // Ekran chegaralarida qolishi uchun tekshirish
    posX = Math.max(0, Math.min(posX, window.innerWidth - 50));
    posY = Math.max(0, Math.min(posY, window.innerHeight - 50));

    // Yangi pozitsiyani qo'llash
    ball.style.left = posX + 'px';
    ball.style.top = posY + 'px';

});

ball.addEventListener("click" , () => {
    alert(name + "You Win")
})