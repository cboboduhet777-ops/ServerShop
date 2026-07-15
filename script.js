function showHome(){

document.getElementById("app").innerHTML = `

<div class="menu">


<button class="shop-button"
onclick="openMinecraftSell()">
🎮 Minecraft
</button>


<button class="shop-button">
💬 Telegram
</button>


</div>

`;

}



// 🎮 Minecraft

function openMinecraftSell(){

document.getElementById("app").innerHTML = `

<div class="menu servers">


<button class="shop-button back"
onclick="showHome()">
⬅ Назад
</button>


<h2 class="title">
🎮 Выбор сервера
</h2>



<button class="shop-button"
onclick="openServerForm('NeverTime')">
🌎 NeverTime
</button>



<button class="shop-button"
onclick="openServerForm('FunTime')">
🌎 FunTime
</button>



<button class="shop-button"
onclick="openServerForm('Phoenix')">
🌎 Phoenix
</button>



<button class="shop-button"
onclick="openServerForm('FrizMine')">
🌎 FrizMine
</button>



<button class="shop-button"
onclick="openServerForm('WastoPe')">
🌎 WastoPe
</button>



</div>

`;

}




// 📦 Категории сервера

function openServerForm(server){


document.getElementById("app").innerHTML = `


<div class="menu">


<button class="shop-button"
onclick="openMinecraftSell()">
⬅ Назад
</button>


<h2 class="title">
🎮 ${server}
</h2>



<button class="shop-button"
onclick="openForm('${server}','Аккаунт')">
👤 Аккаунты
</button>



<button class="shop-button"
onclick="openForm('${server}','Предметы')">
🗡 Предметы
</button>



<button class="shop-button"
onclick="openForm('${server}','Услуги')">
🛠 Услуги
</button>



<button class="shop-button"
onclick="openForm('${server}','Другое')">
📦 Другое
</button>


</div>


`;

}





// 📝 Анкета

function openForm(server,category){


document.getElementById("app").innerHTML = `


<div class="menu">


<h2 class="title">

🎮 ${server}

<br>

📦 ${category}

</h2>



<input class="shop-input"
placeholder="👤 Ваш ник">



<input class="shop-input"
placeholder="💰 Стоимость">



<textarea class="shop-input"
placeholder="📝 Описание товара"></textarea>



<button class="shop-button">

📤 Отправить на модерацию

</button>



<button class="shop-button"
onclick="openServerForm('${server}')">

⬅ Назад

</button>



</div>


`;

}





// 🌸 САКУРА

function createSakura(){


const sakura =
document.getElementById("sakura-container");


if(!sakura) return;



for(let i = 0; i < 60; i++){


let petal =
document.createElement("div");



petal.className="petal";


petal.innerHTML="🌸";


petal.style.left =
Math.random()*100+"vw";


petal.style.fontSize =
(12 + Math.random()*18)+"px";


petal.style.animationDuration =
(2 + Math.random()*5)+"s";


petal.style.animationDelay =
Math.random()*5+"s";


sakura.appendChild(petal);


}


}




// 🚀 Запуск

window.onload=function(){

showHome();

createSakura();

};