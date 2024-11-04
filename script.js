var character = document.getElementById("character");
var block = document.getElementById("block");
var bonus = document.getElementById("bonus");
var counter = 0;
var bonusCounter = 0;

function jump() {
    if (character.classList.contains("animate")) { return; }
    character.classList.add("animate");
    setTimeout(function() {
        character.classList.remove("animate");
    }, 600);
}

var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    let bonusLeft = parseInt(window.getComputedStyle(bonus).getPropertyValue("left"));

    if (blockLeft < 20 && blockLeft > -20 && characterTop >= 130) {
        block.style.animation = "none";
        bonus.style.animation = "none";
        let totalScore = Math.floor(bonusCounter / 100) + Math.floor(counter / 300);
        let restart = confirm("Oops！Game Over！ Your Score: " + totalScore + "\nRestart?");
        if (restart) {
            counter = 0;
            bonusCounter = 0;
            block.style.animation = "block 3s infinite linear";
            bonus.style.animation = "bonus 2s infinite linear";
        } else {
            clearInterval(checkDead); 
        }
    } else {
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(bonusCounter / 100) + Math.floor(counter / 300);
    }

    if (bonusLeft === 0 && characterTop === 150) {
        bonusCounter += 200;
        bonus.style.left = "500px";
        document.getElementById("scoreSpan").innerHTML = Math.floor(bonusCounter / 100) + Math.floor(counter / 300);
    }
}, 10);