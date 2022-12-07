let mass_cards = document.querySelectorAll(".product-card"),flag_display = false;

mass_cards.forEach(function callback(element) {
    element.addEventListener('click', function() {
        if(flag_display === false) {
            element.querySelector(".product-parametrs").style.display = "block";
            flag_display = true;
        }
        else if(flag_display === true) {
            element.querySelector(".product-parametrs").style.display = "none";
            flag_display = false;
        }
    });
});