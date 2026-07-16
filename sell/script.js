function showSellMenu(){

document.getElementById("app").innerHTML = `

<div class="menu">

<h2 class="title">
💰 Продать
</h2>

<button class="shop-button"
onclick="openMinecraftSell()">
🎮 Minecraft
</button>

<button class="shop-button"
onclick="openTelegramSell()">
💬 Telegram
</button>

<button class="shop-button"
onclick="goHome()">
⬅ Назад
</button>

</div>

`;

}



// 🎮 Minecraft

function openMinecraftSell(){

document.getElementById("app").innerHTML = `

<div class="menu">

<button class="shop-button"
onclick="showSellMenu()">
⬅ Назад
</button>

<h2 class="title">
🎮 Minecraft
</h2>

<button class="shop-button"
onclick="openServer('NeverTime')">
🌎 NeverTime
</button>

<button class="shop-button"
onclick="openServer('FunTime')">
🌎 FunTime
</button>

<button class="shop-button"
onclick="openServer('Phoenix')">
🌎 Phoenix
</button>

<button class="shop-button"
onclick="openServer('FrizMine')">
🌎 FrizMine
</button>

<button class="shop-button"
onclick="openServer('WastoPE')">
🌎 WastoPE
</button>

</div>

`;

}



// 🌎 Заявка сервера

function openServer(server){

document.getElementById("app").innerHTML = `

<div class="menu">

<button class="shop-button"
onclick="openMinecraftSell()">
⬅ Назад
</button>


<h2 class="title">
🎮 ${server}
</h2>


<input class="shop-input"
type="file"
accept="image/*">



<textarea class="shop-input"
placeholder="📝 Описание товара"></textarea>



<div class="price-row">

<input 
id="priceInput"
class="shop-input"
placeholder="Цена">


<select class="shop-input">
<option>💲 RUB</option>
<option>⭐ Stars</option>
</select>

</div>



<input 
id="userInput"
class="shop-input"
placeholder="👤@userName">



<button class="shop-button"
onclick="sendOrder('${server}')">
📤 Отправить заявку
</button>


</div>

`;

}

// 💬 Telegram

function openTelegramSell(){

document.getElementById("app").innerHTML = `

<div class="menu">

<button class="shop-button"
onclick="showSellMenu()">
⬅ Назад
</button>


<h2 class="title">
💬 Telegram
</h2>


<button class="shop-button"
onclick="openTelegramType('Личный аккаунт')">
👤 @userName
</button>


<button class="shop-button"
onclick="openTelegramType('Канал')">
💲 Premium 
</button>


<button class="shop-button"
onclick="openTelegramType('Группа')">
Номера +???
</button>


<button class="shop-button"
onclick="openTelegramType('Бот')">
другое
</button>


<button class="shop-button"
onclick="openTelegramType('Premium')">
⭐ звезды
</button>


</div>

`;

}



// 💬 Заявка Telegram

function openTelegramType(type){

document.getElementById("app").innerHTML = `

<div class="menu">


<button class="shop-button"
onclick="openTelegramSell()">
⬅ Назад
</button>



<h2 class="title">
💬 ${type}
</h2>



<input class="shop-input"
type="file"
accept="image/*">



<textarea class="shop-input"
placeholder="📝 Описание товара"></textarea>



<div class="price-row">

<input class="shop-input"
placeholder="Цена">



<select class="shop-input">

<option>💲 RUB</option>

<option>⭐ Stars</option>

</select>

</div>



<input class="shop-input"
placeholder="👤@userName">



<button class="shop-button"
onclick="sendOrder('Telegram ${type}')">
📤 Отправить заявку
</button>



</div>

`;

}

function sendOrder(type){

let description = document.querySelector("textarea").value;

let price = document.getElementById("priceInput").value;

let user = document.getElementById("userInput").value;


if(!description || !price || !user){

alert("❌ Заполни все поля");

return;

}


let products =
JSON.parse(localStorage.getItem("products")) || [];


products.push({

type:type,

description:description,

price:price,

user:user

});


localStorage.setItem(
"products",
JSON.stringify(products)
);


alert("✅ Товар выставлен");

}



// 🏠 Назад

function goHome(){

window.location.href="../index.html";

}

// 🚀 Запуск

window.onload=function(){

showSellMenu();

createMoney();

};

// 💲 Анимация долларов

function createMoney(){

let box = document.getElementById("money-container");  


if(!box) return;  


for(let i = 0; i < 30; i++){  


    let money = document.createElement("div");  


    money.className = "money";  


    money.innerHTML = "💲";  


    money.style.left =  
    Math.random() * 100 + "%";  


    money.style.fontSize =  
    (15 + Math.random() * 25) + "px";  


    money.style.animationDuration =  
    (15 + Math.random() * 15) + "s";  


    money.style.animationDelay =  
    Math.random() * 5 + "s";  


    box.appendChild(money);  

}

}