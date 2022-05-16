var h1 = document.querySelector("#f1")
var h2 = document.querySelector("#f2")
var btn = document.querySelector("#btn")



var now = new Date().getTime();
var countDownDate = Number(localStorage.getItem("time"))
if (0 <= countDownDate - now) {
    clearInterval(deneme);

    var deneme = setInterval(getTime, 1000)
    btn.disabled = true;
} else {
    clearInterval(deneme);
}



if (localStorage.getItem("time")) {
    var countDownDate = Number(localStorage.getItem("time"))
} else {
    var now = new Date().getTime();
    localStorage.setItem("time", (now))//* 60 * 15
    var countDownDate = Number(localStorage.getItem("time"))
}


btn.addEventListener("click", () => {
    var dose = JSON.parse(localStorage.getItem("films"))
    if (dose.length >= 2) {
        clearInterval(deneme);
        var now = new Date().getTime();
        localStorage.setItem("time", (now + (1000 * 60 * 60 * 12)))//
        var deneme = setInterval(getTime, 1000)
        btn.disabled = true; //disable olduğunda geriye doğru timerı textcontentine yazdıralım
        //select film and splice to list that films
        selectFilm()
    }else{
        alert("You should add minimum two films!")
    }

})
if (localStorage.getItem("films")) {
    var filmList = JSON.parse(localStorage.getItem("films"))
} else {
    var filmList = [];
    localStorage.setItem("films", JSON.stringify(filmList))
}

if(localStorage.getItem("yedek")){

}else{
    var list = [];
    localStorage.setItem("yedek", JSON.stringify(list) )
}

function selectFilm() {
    var look = localStorage.getItem("counter")
    if(look == 2){

    }else if(look == 1){
        var filmList = JSON.parse(localStorage.getItem("films"))
        var rnd = Math.floor(Math.random() * filmList.length)
        var selected = filmList[rnd];
        h1.textContent = selected;
        filmList.splice(rnd, 1)
    }else{
        var filmList = JSON.parse(localStorage.getItem("films"))
        var rnd = Math.floor(Math.random() * filmList.length)
        var selected = filmList[rnd];
        h1.textContent = selected;
        filmList.splice(rnd, 1)

        rnd = Math.floor(Math.random() * filmList.length)
        selected = filmList[rnd]
        h2.textContent = selected;
        filmList.splice(rnd, 1)
        localStorage.setItem("films", JSON.stringify(filmList))
    }



}

document.querySelector("#add").addEventListener("click", () => {
    var gel = JSON.parse(localStorage.getItem("films"))
    var yedek = JSON.parse(localStorage.getItem("yedek"))
    var deger = prompt("Filmin ismini giriniz lütfen: ")
    if (deger != null) {
        yedek.push(deger);
        gel.push(deger)
        localStorage.setItem("films", JSON.stringify(gel))
        localStorage.setItem("yedek", JSON.stringify(gel))
    }

})
var timeNow = new Date().getTime();
//now
if(localStorage.getItem("now")){
    var sixty = JSON.parse(localStorage.getItem("now")) 
    setInterval(getTimeRemain,1000) 
    
}else{
    localStorage.setItem("now", (timeNow + (1000 * 60 * 60 * 24 *60)))
}


function getTimeRemain(){
    var timeNow = new Date().getTime();
    var sixty = JSON.parse(localStorage.getItem("now")) 
    var kalan =  sixty - timeNow
    var days = Math.floor((kalan / (1000 * 60 * 60 * 24)));
    var hours = Math.floor((kalan % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((kalan % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((kalan % (1000 * 60)) / 1000);

    if (minutes < 10) {
        var _minutes = "0" + minutes;
    } else {
        var _minutes = minutes;
    }
    if (seconds < 10) {
        var _second = "0" + seconds;
    } else {
        var _second = seconds;
    }
    if (hours < 10) {
        var _hours = "0" + hours;
    } else {
        var _hours = hours;
    }
    if (days < 10) {
        var _days = "0" + days;
    } else {
        var _days = "Remain = " +  days;
    }
    
    
    //step two
    if(kalan < 0){
        if(localStorage.getItem("counter") == 1){
            localStorage.setItem("now", timeNow + (1000 * 60 * 60 * 24 *90))
            localStorage.setItem("counter", "2")
            localStorage.setItem("st", "active")
        }
        else{
            localStorage.setItem("now", timeNow + (1000 * 60 * 60 * 24 *60))
            localStorage.setItem("counter", "1")
        }

    }
    
    document.querySelector("#remain").textContent = _days + ":" + _hours + ":" + _minutes + ":" + _second
}

if(localStorage.getItem("st") == "active"){
    document.querySelector(".main").remove();
}

if(localStorage.getItem("counter")){
    
}
else{localStorage.setItem("counter", "0");}
if(localStorage.getItem("st")){
    
}
else{localStorage.setItem("st", "pasif");}


function getTime() {
    countDownDate = localStorage.getItem("time")
    var now = new Date().getTime();
    var kalan = countDownDate - now;

    if (kalan <= 0) {
        btn.textContent = "00:00:00"
    } else {
        var hours = Math.floor((kalan % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((kalan % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((kalan % (1000 * 60)) / 1000);

        if (minutes < 10) {
            var _minutes = "0" + minutes;
        } else {
            var _minutes = minutes;
        }
        if (seconds < 10) {
            var _second = "0" + seconds;
        } else {
            var _second = seconds;
        }
        if (hours < 10) {
            var _hours = "0" + hours;
        } else {
            var _hours = hours;
        }

        btn.textContent = _hours + ":" + _minutes + ":" + _second


    }
    if (0 >= kalan) {
        btn.disabled = false;
        btn.textContent = "Recommend"
    }
}

