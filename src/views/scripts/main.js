const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.fillStyle = "rgba(63,94,251,1)";

class Ball {
    constructor(effect){
        this.effect = effect;
        this.x = this.effect.width * 0.5;
        this.y = this.effect.height * 0.5;
        this.radius = Math.random() * 100 + 20;
        this.speedX = Math.random() - 0.5;
        this.speedY =  Math.random() - 0.5;
    }   
    update() {
        if (this.x < this.radius || this.x > this.effect.width - this.radius) this.speedX *= -1;
        if (this.y < this.radius || this.y > this.effect.height - this.radius) this.speedY *= -1;        
        this.x += this.speedX;
        this.y += this.speedY;
    }

    draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fill();
    }

    reset() {
        this.x = this.effect.width * 0.5;
        this.y = this.effect.height * 0.5;
    }
}

class MetaballsEffect {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.metaballsArray = [];
    }

    init(numberOfBalls) {
        for (let i = 0; i < numberOfBalls; i++) {
            this.metaballsArray.push(new Ball(this));
        }
    }

    update() {
        this.metaballsArray.forEach(metaball => metaball.update());
    }

    draw(context) {
        this.metaballsArray.forEach(metaball => metaball.draw(context));
    }

    reset(newHeight, newWidht) {
         this.width = newWidht;
         this.height = newHeight;
         this.metaballsArray.forEach(metaball => metaball.reset());
    }
}

const effect = new MetaballsEffect(canvas.height, canvas.width);
effect.init(50);

function animate() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    effect.update();
    effect.draw(ctx);
    requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.fillStyle = "rgba(63,94,251,1)";
    effect.reset(canvas.height, canvas.width);
});

const coursor = document.querySelector(".coursor");
const form = document.querySelector(".form");
const mySkills = document.querySelector(".My-skills");
const venus = document.querySelector(".venus");
const mars = document.querySelector(".mars");


window.addEventListener("mousemove", (e)=> {
    coursor.style.top = e.pageY + "px";
    coursor.style.left = e.pageX + "px";    
})

window.addEventListener("scroll", (e)=> {
    var height = window.innerHeight;
    var scroll = $(window).scrollTop();
    var scrollElement= document.documentElement.scrollHeight;
    
    console.log(height, Math.floor(scroll), scrollElement);
    if (height + scroll + 2 > scrollElement) {
        form.classList.add("colorForm");
    }
    
    if (height + scroll > scrollElement/2 && height + scroll < scrollElement) {
        venus.classList.add("venus-show");
        mySkills.classList.add("My-skillsOpacity");
        
    }
    
    if (height + scroll > scrollElement/3 && height + scroll < scrollElement) {
        mySkills.classList.add("rocket-show");
        
    }
    
    if (height + scroll < scrollElement/3) {
        mySkills.classList.remove("rocket-show");
    }

    if (height + scroll < scrollElement/2) {
        venus.classList.remove("venus-show");
        mars.classList.remove("mars-show");
        mySkills.classList.remove("My-skillsOpacity");
        
    }
    if (height + scroll  < scrollElement) {
        form.classList.remove("colorForm");

    }

    if (scroll > (height) + 40) {
        mars.classList.add("mars-show");
    }

});


const about = document.querySelector(".about");
const content = document.querySelector(".about div");
window.addEventListener("DOMContentLoaded", () => {
    about.classList.add("load");

})

const rocket = document.querySelector(".rocket-container");
window.addEventListener("scroll", ()=> {
    var scroll = $(window).scrollTop();
    var height = window.innerHeight;
    
    if (scroll > (height/3) + 70) {
        rocket.style.top = Math.floor(scroll) + "px";
        console.log(scroll);
    }

});

const Pcontent = document.querySelector(".content");

Pcontent.addEventListener("mouseover", ()=> {
    console.log("hola");
    Pcontent.classList.add("p-over");
    Pcontent.innerHTML = "About";
});

Pcontent.addEventListener("mouseleave", ()=> {
    Pcontent.classList.remove("p-over");
    Pcontent.innerHTML = "I'm a full-stack web developer";
});