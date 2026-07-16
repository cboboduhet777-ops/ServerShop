function showHome() {

    document.getElementById("app").innerHTML = `

    <div class="menu">


        <img class="shop-image-button"
        src="images/sell.jpg"
        onclick="openSell()">



        <img class="shop-image-button"
        src="images/buy.jpg"
        onclick="openBuy()">



        <img class="shop-image-button"
        src="images/info.jpg">



        <img class="shop-image-button"
        src="images/profile.jpg">


    </div>

    `;

}



// 💰 Продажа

function openSell(){

    window.location.href = "sell/index.html";

}



// 🛒 Покупка

function openBuy(){

    window.location.href = "buy/index.html";

}



// ❄️ Анимация снега

function createSnow(){

    let box = document.getElementById("snow-container");


    if(!box) return;


    for(let i = 0; i < 60; i++){


        let snow = document.createElement("div");


        snow.className = "snowflake";


        snow.innerHTML = "❄";


        snow.style.left =
        Math.random() * 100 + "%";


        snow.style.fontSize =
        (10 + Math.random() * 20) + "px";


        snow.style.animationDuration =
        (5 + Math.random() * 8) + "s";


        snow.style.animationDelay =
        Math.random() * 5 + "s";


        box.appendChild(snow);

    }

}



// 🚀 Запуск

window.onload = function(){

    showHome();

    createSnow();

};



// 📱 Telegram

let telegramId = null;
let telegramName = null;

try {

    if(window.Telegram && Telegram.WebApp){

        Telegram.WebApp.ready();

        let user = Telegram.WebApp.initDataUnsafe.user;

        if(user){

            telegramId = user.id;

            telegramName = user.username
            ? "@" + user.username
            : user.first_name;

        }

    }

} catch(e){

    console.log("Telegram не найден");

}


if(user){

    telegramId = user.id;

    telegramName = user.username
    ? "@" + user.username
    : user.first_name;

}


console.log("ID:", telegramId);
console.log("Имя:", telegramName);