function onSubmit(){
    //activate submit button
    if(parseInt(document.getElementById("box1").value)%2===0){
        document.getElementById("results").innerHTML= "even";
    }else{
        document.getElementById("results").innerHTML= "odd";
    }
    var month = parseInt(document.getElementById("box1").value);
    var day = parseInt(document.getElementById("box2").value);
    var year= parseInt(document.getElementById("birth year").value);
    var name= document.getElementById("name").value;

    if((month===9 && day>=22) || (month===10 && day<=23) ) {
        document.getElementById("results").innerHTML = name +  " you are a libra! You are most compatible with Capricorn!";
        document.getElementById("imgs").innerHTML= "<img width='250' src='imgs/libra.jpg'>";
    }
    if((month===10 && day>=23) || (month===11 && day<=21) ) {
        document.getElementById("results").innerHTML = name +  " you are a scorpio! You are most compatible with Sagittarius!";
        document.getElementById("imgs").innerHTML= "<img width='300' src='imgs/scorpio.jpg'>";
    }
    if((month===11 && day>=21) || (month===12 && day<=21) ) {
        document.getElementById("results").innerHTML = name +  " you are a sagittarius! You are most compatible with Aquarius!";
        document.getElementById("imgs").innerHTML= "<img width='300' src='imgs/sag.jpg'>";
    }
    if((month===12 && day>=22) || (month===1 && day<=19)) {
        document.getElementById("results").innerHTML= name +  " you are a capricorn! You are most compatible with Scorpio!";
        document.getElementById("imgs").innerHTML= "<img width='300' src='imgs/cap.jpg'>";
    }
    if((month===1 && day>=20) || (month===2 && day<=18) ) {
        document.getElementById("results").innerHTML = name +  " you are an aquarius! You are most compatible with Pisces!";
        document.getElementById("imgs").innerHTML= "<img width='250' src='imgs/Aqu.jpg'>";
    }
    if((month===2 && day>=19) || (month===3 && day<=20) ) {
        document.getElementById("results").innerHTML = name +  " you are a pisces! You are most compatible with Pisces!";
        document.getElementById("imgs").innerHTML= "<img width='350' src='imgs/pisces.jpg'>";
    }
    if((month===3 && day>=21) || (month===4 && day<=19) ) {
        document.getElementById("results").innerHTML = name +  " you are an aries! You are most compatible with Taurus!";
        document.getElementById("imgs").innerHTML= "<img width='300' src='imgs/Aries.png'>";
    }
    if((month===4 && day>=20) || (month===5 && day<=20) ) {
        document.getElementById("results").innerHTML = name +  " you are a taurus! You are most compatible with Gemini!";
        document.getElementById("imgs").innerHTML= "<img width='350' src='imgs/taurus.jpg'>";
    }
    if((month===5 && day>=21) || (month===6 && day<=20) ) {
        document.getElementById("results").innerHTML = name +  " you are a gemini! You are most compatible with Cancer!";
        document.getElementById("imgs").innerHTML= "<img width='300' src='imgs/Gemini.jpg'>";
    }
    if((month===6 && day>=21) || (month===7 && day<=22) ) {
        document.getElementById("results").innerHTML =name +  " you are a cancer! You are most compatible with Leo!";
        document.getElementById("imgs").innerHTML= "<img width='300' src='imgs/cancer.jpg'>";
    }
    if((month===7 && day>=23) || (month===8 && day<=22) ) {
        document.getElementById("results").innerHTML = name +  " you are a leo! You are most compatible with Virgo!";
        document.getElementById("imgs").innerHTML= "<img width='320' src='imgs/leo.jpg'>";
    }
    if((month===8 && day>=23) || (month===9 && day<=22) ) {
        document.getElementById("results").innerHTML = name +  " you are a virgo! You are most compatible with Libra!";
        document.getElementById("imgs").innerHTML= "<img width='300' src='imgs/virgo.jpg'>";
    }
    if(year.toString()!== "NaN"){
        document.getElementById("zodiac").innerHTML=findZodiac(year);
    }

}


function generateList(month){
    var days = "";
    var daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    for(var i = 1; i<=daysPerMonth[month-1]; i++){
        days += "<option value='" + i + "'>" + i + "</option>";
    }
    document.getElementById("box2").innerHTML= days;
}

function findZodiac(year){
    if(year%12===1){
        return "You were born in the year of the Rooster!";
    }
    else if(year%12===0){
        return "You were born in the year of the Monkey!";
    }
    else if(year%12===2){
        return "You were born in the year of the Dog!";
    }
    else if(year%12===3){
        return "You were born in the year of the Pig!";
    }
    else if(year%12===4){
        return "You were born in the year of the Rat!";
    }
    else if(year%12===5){
        return "You were born in the year of the Ox!";
    }
    else if(year%12===6){
        return "You were born in the year of the Tiger!";
    }
    else if(year%12===7){
        return "You were born in the year of the Rabbit!";
    }
    else if(year%12===8){
        return "You were born in the year of the Dragon!";
    }
    else if(year%12===9){
        return "You were born in the year of the Snake!";
    }
    else if(year%12===10){
        return "You were born in the year of the Horse!";
    }
    else if (year%12===11) {
        return "You were born in the year of the Goat!";
    }

}
