$(function () {

    /******************************************
     * ****************************************
     * accordion
     * ******************************************
     */
    $(".accordion-head").on("click", function () {
        let accordionBody = $(this).siblings()[0]


        // Open accordionBody
        $(accordionBody).slideToggle("fast");

        // Change Icon
        // add data-open to parent
        let parentEle = $(accordionBody).parents(".custom-accordion")[0]
        let plusIcon = $(this).children(".icon")[0];


        if ($(parentEle).attr("data-open") == "close") {
            $(plusIcon).find("i ,svg").addClass("fa-minus")
            $(plusIcon).find("i ,svg").removeClass("fa-plus")

            $(parentEle).attr("data-open", "open");

            $(parentEle).addClass("active")


        } else {

            $(plusIcon).find("i ,svg").removeClass("fa-minus");
            $(plusIcon).find("i ,svg").addClass("fa-plus")


            $(parentEle).attr("data-open", "close");


            $(parentEle).removeClass("active")

        }





    });

    /******************************************
     * ****************************************
     * Header Height
     * ******************************************
     */

    let topBarHeight = $(".top-bar").outerHeight();
    let navbarHeight = $(".custom-navbar").outerHeight();

    let allHeight = topBarHeight + navbarHeight;

    $(".header").css("height", $(window).innerHeight() - topBarHeight);


    $(window).resize(function () {
        $(".header").css("height", $(window).innerHeight() - topBarHeight);
    });

    /******************************************
     * ****************************************
     * Loading Page
     * ******************************************
     */
    $(window).on("load", function () {
        $("body").css("overflow-y", "scroll")
        $(".loading").fadeOut(500)
    });

    /******************************************
     * ****************************************
     * WOW Js
     * ******************************************
     */
    wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 0, // default
        mobile: true, // default
        live: true, // default

    })
    wow.init();

    
    /******************************************
     * ****************************************
     * Window Scroll
     * ******************************************
     */
    $(window).on("scroll" , function() {
        // Scroll to Top Icon
        if($(window).scrollTop() > 300) {
            $(".srcoll-to-top").fadeIn(300).css("display" , "flex");

        }else {
            $(".srcoll-to-top").fadeOut(300);
            
        }

        // Wts Icon Fixed
        if($(window).scrollTop() > $(".category-filter").offset().top) {
            $(".floating_btn").addClass("active_fixed")
        }else {
            $(".floating_btn").removeClass("active_fixed")
        }

        
    });

    // Scroll to Top Icon When Click
    $(".srcoll-to-top").on("click" , function() {
        $("html , body").animate({
            scrollTop : 0
        } , 500)
    })


});



/******************************************
     * ****************************************
     *  Sliders
     * ******************************************
*/

// carousel slider Category
const swiper = new Swiper('.swiper-category', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,



    // If we need pagination
    pagination: {
        el: '.swiper-category-pagination',

    },
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 20,
        },

        640: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    },

    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },




});

// carousel slider Customers
const swiper3 = new Swiper('.ourCustomers-slide', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    autoplay: false,

    // If we need pagination
    pagination: {
        el: '.ourCustomers-slide-pagination',

    },
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 20,
        },

        640: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    },

    // autoplay: {
    //     delay: 1500,
    //     disableOnInteraction: false,
    // },




});

// carousel slider Projects
var myTabSwiper = new Swiper(".myTabSwiper", {
    navigation: {
        nextEl: ".myTabSwiper-next",
        prevEl: ".myTabSwiper-prev",
    },
    pagination: {
        el: ".swiper-pagination-tabs",
    },
    mousewheel: true,
    keyboard: true,

    // Optional parameters
    direction: 'horizontal',

    autoplay: true,

    // If we need pagination
    pagination: {
        el: '.ourCustomers-slide-pagination',

    },
    centeredSlides: true,

    pagination: {
        clickable: true,
    },


    autoplay: false,



});