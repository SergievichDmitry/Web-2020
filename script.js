function isEmail() {
    var str = document.getElementById("form__button3").value;
    var str1 = document.getElementById("form__button1").value;
    var str2 = document.getElementById("form__button2").value;
    var re = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;
    if (re.test(str)) {
        if (str1 != isEmpty(str1))
            if (str2 != isEmpty(str1)) {
                b__p_unvisible.innerHTML = "Your details have been sent and a representative\n" +
                    "                from ePlane will be in contact with you shortly.";
                b__h2_unvisible.innerHTML = "Thank You!";
                b__p_unvisible.style.cssText = "display: block";
                b__body_unvisible.style.cssText = "display: block";
                b__p.remove();
                b__form.remove();
                b__h2.remove();
            }
    }
    else {
        alert("Проверьте правильность данных!");}
    if(isEmpty(str))
        alert("Заполните поля!");
}

function isEmpty(str){
    return (str == null) || (str.length == 0);
}



function openVideo() {
    vid.style.cssText = "display: flex";
    vid__video.play();
    a__play.style.cssText = "display: none";
    bd.style.cssText = "position: fixed";
}

function closeVideo() {
    vid.style.cssText = "display: none";
    vid__video.pause();
    a__play.style.cssText = "display: flex";
    bd.style.cssText = "position: static";
}