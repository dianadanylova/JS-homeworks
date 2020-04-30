let menuItems = document.getElementsByClassName("menu-item"),
    adv= document.getElementsByClassName("adv")[0],
    title = document.getElementById("title"),
    li = document.createElement("li"),
    menu = document.getElementsByClassName("menu")[0],
    applePrompt = document.querySelector("#prompt");

let buff = menuItems[1].textContent;
menuItems[1].textContent = menuItems[2].textContent;
menuItems[2].textContent = buff; 

li.classList.add("menu-item");
li.textContent = "Пятый элемент";
menu.appendChild(li);

title.textContent = "Мы продаем только подлинную технику Apple";

adv.remove();

document.body.style.background = "url(img/apple_true.jpg)";

let opinion = prompt("Ваше отношение к технике Apple?", "");
applePrompt.textContent = opinion;