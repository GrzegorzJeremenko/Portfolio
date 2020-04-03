setInterval(navUpdate, 1000/fps);

function navUpdate() {
    document.getElementsByTagName("nav")[1].style.transition = "top .3s ease";
    document.getElementsByTagName("nav")[1].style.backgroundColor = "#181818";
    document.getElementsByTagName("nav")[1].style.position = "fixed";
    document.getElementsByTagName("nav")[1].style.top = "0px";

    if(window.pageYOffset > 70) {
        document.getElementsByTagName("nav")[1].style.top = "0px";
    } else {
        document.getElementsByTagName("nav")[1].style.top = "-60px";
    }

    console.log(window.pageYOffset);
}

function changeOption(a) {
    for(let i=0; i<4; i++) document.getElementsByClassName("option")[i].style.color = "";
    for(let i=0; i<4; i++) document.getElementsByClassName("option")[i+4].style.color = "";

    document.getElementsByClassName("option")[a].style.color = "#3498db";
    document.getElementsByClassName("option")[a+4].style.color = "#3498db";
}

let $window = $(window);
let area = ['shadow', 'aboutme', 'skills', 'portfolio', 'contact'];

function check_if_in_view() {
    for(let i=0; i<5; i++) {
        let $animation_elements = $('#'+area[i]);

        let window_height = $window.height();
        let window_top_position = $window.scrollTop();
        let window_bottom_position = (window_top_position + window_height);
        
        $.each($animation_elements, function() {
            let $element = $(this);
            let element_height = $element.outerHeight();
            let element_top_position = $element.offset().top;
            let element_bottom_position = (element_top_position + element_height);

            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
                if(i >= 3) skillbarUpdate();
                if(i>0 && i<4) changeOption(i-1);
                else if(i>=4) changeOption(i-3);
            }
        });
    }
}

function scrollToElement(name) { window.scroll({top: document.getElementById(name).offsetTop-60, left: 0, behavior: 'smooth'}); }

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');