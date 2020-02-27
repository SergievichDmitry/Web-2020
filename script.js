function isEmail() {
    var str = document.getElementById("b11_i3").value;
    var str1 = document.getElementById("b11_i1").value;
    var str2 = document.getElementById("b11_i2").value;
    var re = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;
    if (re.test(str)) {
        if (str1 != isEmpty(str1))
            if (str2 != isEmpty(str1)) {
                b1_p.innerHTML = "Your details have been sent and a representative\n" +
                    "                from ePlane will be in contact with you shortly.";
                b1_h2.innerHTML = "Thank You!";
                b1_p.style.cssText = "display: block";
                b11_p.remove();
                form.remove();
                b11_h2.remove();
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
    video12345.play();
    play.style.cssText = "display: none";
    bd.style.cssText = "position: fixed";
}

function closeVideo() {
    vid.style.cssText = "display: none";
    video12345.pause();
    play.style.cssText = "display: flex";
    bd.style.cssText = "position: static";
}