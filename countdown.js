(() => {

const overlay = document.getElementById("countdown-overlay");

if (!overlay) return;

const unlockDate = new Date("2026-08-12T00:00:00");

const secretLink = document.getElementById("secret-link");
const secretPanel = document.getElementById("secret-panel");
const unlockBtn = document.getElementById("unlock-btn");
const password = document.getElementById("secret-password");
const wrong = document.getElementById("wrong-pass");

secretLink.onclick = () => {

    secretPanel.style.display = "block";

};

unlockBtn.onclick = () => {

    if(password.value==="1208"){

        overlay.remove();

    }else{

        wrong.innerHTML="🐷 Wrong Password";

        password.value="";

    }

};

function update(){

    const now = new Date();

    const diff = unlockDate-now;

    if(diff<=0){

        overlay.remove();

        clearInterval(interval);

        return;

    }

    document.getElementById("days").innerHTML=Math.floor(diff/86400000);

    document.getElementById("hours").innerHTML=Math.floor(diff%86400000/3600000);

    document.getElementById("minutes").innerHTML=Math.floor(diff%3600000/60000);

    document.getElementById("seconds").innerHTML=Math.floor(diff%60000/1000);

}

update();

const interval=setInterval(update,1000);

})();