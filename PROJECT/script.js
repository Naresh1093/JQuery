$(document).ready(function () {
    var slide = $('.slide'),
    slideAele = $('.slide-a-child'),
    slideBele = $('.slide-b-child'),
    slideCele = $('.slide-c-child'),
    slideDele = $('.slide-d-child'),
    reply = $('.reply');

    slide.each(function (i) {
        if(i<3) {
            setTimeout(function () {
                slide.eq(i).fadeOut();
            }, 5000 * (i+1))
        }
    });

    function animateSlideA() {
        slideAele.each(function(i) {
            setTimeout(function () {
                slideAele.eq(i).addClass('is-visible')
            }, 300* (i+1))
        });
    }

    function animateSlideB() {
        slideBele.each(function(i) {
            setTimeout(function () {
                slideBele.eq(i).addClass('is-visible')
            }, 300* (i+1))
        });
    }

    function animateSlideC() {
        slideCele.each(function(i) {
            setTimeout(function () {
                slideCele.eq(i).addClass('is-visible')
            }, 300* (i+1))
        });
    }

    function animateSlideD() {
        slideDele.each(function(i) {
            setTimeout(function () {
                slideDele.eq(i).addClass('is-visible')
            }, 300* (i+1))
        });
    }
    

    animateSlideA();

    setTimeout(function () {
        animateSlideB()
    },5000);

    setTimeout(function () {
        animateSlideC()
    },10000);

    setTimeout(function () {
        animateSlideD()
    },15000);

    reply.on('click',function() {
        location.reload(true);  // current path refresh
    })
});

