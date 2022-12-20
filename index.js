document.addEventListener("DOMContentLoaded", () => {
    const btnYes = document.querySelector('.yes');
    const btnNo = document.querySelector('.no');
    const repeatBtn = document.querySelector(".repeat");
    const btns = document.querySelector('.btns');
    const body = document.querySelector("main");
    const h1 = document.querySelector("h1");
    const happyImg = document.querySelector(".happy");

    const text = {
        "default": "С днем Рождения, любимка! Ты готов к самому крутому свиданию в твоей жизни??",
        "no": "Ты че офигел??! Вернись и нажми да!",
        "yes": "Это твой первый день Рождения, который мы встречаем вместе. И я решила устроить нам невероятное свидание!) Но свидание нас ждёт не сегодня, а завтра…в 17:30! (Надеюсь ничего страшного, если ты освободишься с работы в 16:30). Тематика свидания- секрет! Узнаешь на месте. Но будет несколько пунктов, которые надо будет соблюсти: 1. дресс-код в меру и по комфорту нарядный 2. Не наноси на себя парфюм 3. Не употребляй сегодня сильно газированные и сладкие напитки 4. Расслабься и наслаждайся по максимуму Люблю тебя! А пока покушаем этот вкусный тортик))"
    }

    btnYes.addEventListener('click', () => {
        h1.textContent = text["yes"];
        body.classList.add('yes-fon');
        happyImg.classList.add("show");
        btns.classList.add("hide");
        repeatBtn.classList.add("show");
    });

    btnNo.addEventListener('click', () => {
        h1.textContent = text["no"];
        body.classList.add('no-fon');
        btns.classList.add("hide");
        repeatBtn.classList.add("show");
    });

    repeatBtn.addEventListener("click", () => {
        btns.classList.remove("hide");
        body.classList.remove('no-fon');
        body.classList.remove('yes-fon');
        repeatBtn.classList.remove('show');
        h1.textContent = text["default"];
        happyImg.classList.remove("show");

    });

});