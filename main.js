/**   ----------Sticky navigation bar-----------  */

let navbar = $(".navbar");

$(window).scroll(function(){
    let oTop = $("#section-2").offset().top - window.innerHeight;
    if($(window).scrollTop() > oTop) 
        navbar.addClass("sticky");
    else   
        navbar.removeClass("sticky");
});
// -------------------^^^^^^Aici trebuie sa modific ceva ....nu-mi accepta ".top" in functie -----------------
// *******REZOLVAT --> nu faceam referirea corespunzator, aveam .section-2 si la mine nu exista o clasa cu asa nume, in schimb am ID

// ----------------------Counter animation ---------------

let nCount = function(selector){
    $(selector).each(function(){   // chemam fiecare parametrul fiecarei metode jQuery
        $(this).animate({    //  $(this) <-- se refera la parametrul/obiectul curent jQuery
            Counter: $(this).text()}, {  //primul argument 
                duration: 4000,   // ---setam timpul animatiei, 4000ms = 4s   //al doilea argument
                easing: "swing",  // ----fuctia de easing - swing <--de tip string  //al treilea argument
                step: function(value){
                    $(this).text(Math.ceil(value))
                }
            } 
        );
    });
};

//mai avem nevboie de un eveniment de derulare - scroll event

let a=0;
$(window).scroll(function(){
    let oTop = $("#section-2").offset().top - window.innerHeight;
    if (a==0 && $(window).scrollTop()>= oTop){
        a++;
        nCount(".rect > h1");
    };
});
