function showSellMenu(){

document.getElementById("app").innerHTML = `

<div class="menu">


<h2 class="title">
🏪 Магазин ServerShop
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



// 🎮 Minecraft серверы

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




// 📦 Товары сервера

function openServer(server){


let products =
JSON.parse(localStorage.getItem("products")) || [];



let serverProducts =
products.filter(item =>
item.type === server
);



let html = `

<div class="menu">


<button class="shop-button"
onclick="openMinecraftSell()">
⬅ Назад
</button>


<h2 class="title">
🎮 ${server}
</h2>

`;



if(serverProducts.length === 0){

html += `

<p>
📦 Пока нет товаров
</p>

`;

}



serverProducts.forEach(item=>{


html += `

<div class="product-card">


<div class="product-photo">
📷 Фото товара
</div>



<p>
📝 Описание:
<br>
${item.description}
</p>



<p>
💲 Цена:
<br>
${item.price}
</p>



<p>
👤 Продавец:
<br>
${item.user}
</p>



<button class="shop-button"
onclick="buyProduct('${item.type}')">
🛒 Купить
</button>


</div>

`;

});



html += `

</div>

`;


document.getElementById("app").innerHTML = html;


}



// 💬 Telegram товары

function openTelegramSell(){

let products =
JSON.parse(localStorage.getItem("products")) || [];


let telegramProducts =
products.filter(item =>
item.type.startsWith("Telegram")
);



let html = `

<div class="menu">


<button class="shop-button"
onclick="showSellMenu()">
⬅ Назад
</button>



<h2 class="title">
💬 Telegram
</h2>

`;



if(telegramProducts.length === 0){

html += `

<p>
📦 Пока нет Telegram товаров
</p>

`;

}



telegramProducts.forEach(item=>{


html += `

<div class="product-card">


<div class="product-photo">
📷 Фото товара
</div>



<p>
📝 Описание:
<br>
${item.description}
</p>



<p>
💲 Цена:
<br>
${item.price}
</p>



<p>
👤 Продавец:
<br>
${item.user}
</p>



<button class="shop-button"
onclick="buyProduct('${item.type}')">
🛒 Купить
</button>



</div>

`;

});



html += `

</div>

`;


document.getElementById("app").innerHTML = html;


}



// 💲 Доллары

function createMoney(){

let box=document.getElementById("money-container");

if(!box)return;


for(let i=0;i<30;i++){

let money=document.createElement("div");

money.className="money";

money.innerHTML="💲";

money.style.left=Math.random()*100+"%";

box.appendChild(money);

}

}



// 🏠 Назад

function goHome(){

window.location.href="../index.html";

}


// 🚀 Запуск

window.onload = function(){

    showSellMenu();

    createMoney();

};



function changePage(html){

let app = document.getElementById("app");


app.classList.remove("fade-in");

app.classList.add("fade-out");



setTimeout(()=>{


app.innerHTML = html;


app.classList.remove("fade-out");

app.classList.add("fade-in");


},400);


}