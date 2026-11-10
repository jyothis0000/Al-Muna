jQuery.type = function(obj) {
    return Object.prototype.toString
        .call(obj)
        .match(/\s([a-zA-Z]+)/)[1]
        .toLowerCase();
};
(function($) {
    /* Home: About Slider */
    $(".abt-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        loop: true,
        autoplaySpeed: 6000,
        dots: false,
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    /* Hero page slider */
    $(".hp-slide").slick({
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        appendDots: $("#bannerDots"),
        draggable: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 800,
        cssEase: "cubic-bezier(0.49, 0, 0.49, 1)",
        asNavFor: ".hp-items",
        pauseOnHover: false,
        pauseOnFocus: false,
        adaptiveHeight: true,
        responsive: [{
            breakpoint: 767,
            settings: {
                adaptiveHeight: false,
            },
        }, ],
    });

    $(".hp-items").slick({
        fade: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        asNavFor: ".hp-slide",
        dots: false,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false,
    }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        const nextVideo = slick.$slides.eq(nextSlide).find('video').get(0);
        if (nextVideo) {
            nextVideo.currentTime = 0;
            nextVideo.muted = true;
            nextVideo.play();
        }
    }).on('afterChange', function(event, slick, currentSlide) {
        slick.$slides.each(function(i, slide) {
            if (i !== currentSlide) {
                const video = $(slide).find('video').get(0);
                if (video) {
                    video.pause();
                    video.currentTime = 0;
                }
            }
        });
    });

    /* Community slider */
    $(".values-slider .img-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: true,
        loop: true,
        arrows: true,
        dots: true,
        draggable: true,
        autoplay: false,
        speed: 900,
        cssEase: "cubic-bezier(0.39, 0.01, 0.61, 1)",
        centerMode: true,
        centerPadding: "0",
        asNavFor: ".values-slider .content",
    });

    $(".values-slider .content").slick({
        fade: true,
        speed: 150,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        asNavFor: ".hp-community .img-slider",
        dots: false,
        autoplay: false,
        arrows: false,
        responsive: [{
            breakpoint: 576,
            settings: {
                variableWidth: false,
            },
        }, ],
    });

    /* Home: Testimonials */
    $(".testimonial-slider")
        .slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            autoplay: false,
            loop: true,
            dots: true,
            arrows: false,
            pauseOnHover: false,
            pauseOnFocus: false,
            speed: 500,
            fade: true,
            cssEase: "linear",
        })
        .on("afterChange", function(event, slick, currentSlide) {
            $("audio").each((_, ele) => {
                $(ele)[0].pause();
                $(ele)[0].currentTime = 0;
            });
            $(".cmn-big-btn").removeClass("playing");
        });

    /* CMN Img With Content Slider */
    $(".cmn-img-with-content-slider").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: false,
        loop: false,
        arrows: true,
        dots: false,
        draggable: true,
        autoplay: false,
        speed: 900,
        cssEase: "cubic-bezier(0.39, 0.01, 0.61, 1)",
        pauseOnHover: false,
        pauseOnFocus: false,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                },
            },
            {
                breakpoint: 991,
                settings: {
                    variableWidth: false,
                },
            }
        ],
    });

    /* CMN Recent News Slider */
    $(".cmn-recent-news-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        loop: false,
        arrows: true,
        appendArrows: $("#newsArrows"),
        dots: false,
        draggable: true,
        autoplay: false,
        speed: 900,
        cssEase: "cubic-bezier(0.39, 0.01, 0.61, 1)",
        pauseOnHover: false,
        pauseOnFocus: false,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });

    $(".cmn-big-btn").on("click", function(e) {
        e.preventDefault();
        $(this).toggleClass("playing");
        var audio = $(this).prev("audio")[0]; // Get the audio element

        if ($(this).hasClass("playing")) {
            audio.play(); // Play the audio
        } else {
            audio.pause(); // Pause the audio
        }

        audio.onended = function() {
            $(".cmn-big-btn").removeClass("playing");
        };
    });

    /* Home: Uniquely slider */
    const $slider = $(".hp-uniquely .items");
    if ($slider.length === 0) return; // Exit early if not found
    const $slides = $slider.find(".item");
    const $dotsWrapper = $(".custom-dots");
    const $dotsContainer = $dotsWrapper.find("ul.list-unstyled");
    const $progressLine = $dotsWrapper.find(".dots-container-progress-line");
    const $fullProgressLine = $dotsWrapper.find(".dots-container-full-line");

    // Generate dots
    $slides.each(function(index) {
        const title = $(this).data("title") || "•";
        const $dot = $(`<li><button class="custom-dot">${title}</button></li>`);
        $dotsContainer.append($dot);
    });

    const $dots = $dotsContainer.find(".custom-dot");

    // Scroll to slide on dot click
    $dots.on("click", function() {
        const index = $(this).closest("li").index();
        const $targetSlide = $slides.eq(index);

        $("html, body").animate({
                scrollTop: $targetSlide.offset().top - 122
            },
            600
        );

        updateActiveDots(index);
        updateCurrentDot(index); // also set current on click
    });

    // Update active progress dots
    function updateActiveDots(currentIndex) {
        $dots.removeClass("active");
        for (let i = 0; i <= currentIndex; i++) {
            $dots.eq(i).addClass("active");
        }

        const $firstDot = $dots.eq(0);
        const $currentDot = $dots.eq(currentIndex);

        const containerTop = $dotsWrapper.offset().top;
        const containerHeight = $dotsWrapper.height();

        const firstCenter = $firstDot.offset().top + $firstDot.outerHeight() / 2;
        const currentCenter =
            $currentDot.offset().top + $currentDot.outerHeight() / 2;

        const heightPercent =
            ((currentCenter - firstCenter) / containerHeight) * 100;
        const topPercent = ((firstCenter - containerTop) / containerHeight) * 100;

        $progressLine.css({
            top: `${topPercent}%`,
            height: `${heightPercent}%`,
        });
    }

    // Update only the current dot
    function updateCurrentDot(currentIndex) {
        $dots.removeClass("current");
        $dots.eq(currentIndex).addClass("current");
    }

    // Set full progress line height initially
    function setFullProgressHeight() {
        const $firstDot = $dots.eq(0);
        const $lastDot = $dots.eq($dots.length - 1);

        if ($dots.length < 2) return;

        const containerTop = $dotsWrapper.offset().top;
        const containerHeight = $dotsWrapper.height();

        const firstCenter = $firstDot.offset().top + $firstDot.outerHeight() / 2;
        const lastCenter = $lastDot.offset().top + $lastDot.outerHeight() / 2;

        const heightPercent = ((lastCenter - firstCenter) / containerHeight) * 100;
        const topPercent = ((firstCenter - containerTop) / containerHeight) * 100;

        $fullProgressLine.css({
            top: `${topPercent}%`,
            height: `${heightPercent}%`,
        });
    }

    // Detect which slide is active in center of viewport
    function getActiveSlideIndexOnScroll() {
        const viewportMiddle = $(window).scrollTop() + $(window).height() / 2;

        let closestIndex = 0;
        let closestDistance = Infinity;

        $slides.length > 0 &&
            $slides.each(function(index) {
                const $el = $(this);
                const elCenter = $el.offset().top + $el.outerHeight() / 2;
                const distance = Math.abs(elCenter - viewportMiddle);

                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestIndex = index;
                }
            });

        return closestIndex;
    }

    // Auto update while scrolling
    let ticking = false;

    $(window).on("scroll", function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                const currentIndex = getActiveSlideIndexOnScroll();
                updateActiveDots(currentIndex);
                updateCurrentDot(currentIndex);
                ticking = false;
            });
            ticking = true;
        }
    });
    // Init on page load
    setFullProgressHeight();
    updateActiveDots(0);
    updateCurrentDot(0);
})(jQuery);