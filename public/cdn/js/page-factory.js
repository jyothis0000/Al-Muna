//THIS JAVASCRIPT IS ALWAYS AVAILABLE FOR ALL PAGES Logout, logged in, Preview mode, ALWAYS AVAILABLE.

$(".site-tooltip").hover(function() {

        $(".site-tooltip-text").remove()

        /*
              $("<div>", {
                'class': "custom-tooltip-text",
              }).insertAfter($(this));
        */
        /*
        $("<div>", {
            'class': "iviewer_image_mask",
            css: {
                "background": "url('http://somesite.com/path/to/image.jpg')"
            }
        }).appendTo('#container');
        */

        $("<div>")
            .addClass('site-tooltip-text')
            .css({
                "position": "absolute"
            })
            .appendTo('body');

        //$(this).next(".custom-tooltip-text").append($(this).attr("longdesc"));

        $(".site-tooltip-text").append($(this).attr("longdesc"));

        var topOffset = $(this).offset().top - $(window).scrollTop();

        var offset = $(this).offset();
        var height = $(this).height();
        var width = $(this).width();
        var top = offset.top + height + "px";
        //var left = offset.left + width + "px";

        //var top = offset.top + "px";
        var left = offset.left + "px";

        var halfleft = (offset.left + width) / 2 + "px"

        $('.site-tooltip-text').css({
            'position': 'absolute',
            'left': left,
            'top': top
        });

    },
    function() {
        $(".site-tooltip-text").remove()

    });

/* JS for CK5 style drop current year */
function getcurrentyear() {
    if ($(".cms-current-year").length) {
        $(".cms-current-year").each(function() {
            $(this).text(new Date().getFullYear());
        })
    }
}

getcurrentyear();

setTimeout(function() {
    getcurrentyear()
}, 2000)



$(".site-tooltip").click(function() {
    $(".site-tooltip-text-popup").remove();

    $("<div>")
        .addClass('site-tooltip-text-popup')
        .css({})
        .appendTo('body');

    $("<div>")
        .addClass('site-tooltip-text-popup-data')
        .css({})
        .appendTo('.site-tooltip-text-popup');

    $("<div>")
        .addClass('site-tooltip-text-popup-close')
        .css({})
        .appendTo('.site-tooltip-text-popup-data');

    $("<div>")
        .addClass('site-tooltip-text-popup-desc')
        .css({})
        .appendTo('.site-tooltip-text-popup-data');

    $(".site-tooltip-text-popup-data").append($(this).attr("longdesc"));

});

$(".site-tooltip-text-popup-close").click(function() {
    $(".site-tooltip-text-popup").remove();
});


$(document.body).on('click', '.site-tooltip-text-popup-close', function() {
    $(".site-tooltip-text-popup").remove();
});


$(".site-hover-change-text").hover(function() {
        $(".site-hover-change-text strong").html($(this).attr("title"));
        $(".site-hover-change-text strong").removeClass("site-updated-word");

        $(".site-hover-change-text strong").addClass("site-updated-word-hide");

        setTimeout(function() {
            $(".site-hover-change-text strong").addClass("site-updated-word");
        }, 100);

    },
    function() {
        $(".site-hover-change-text strong").html("...");
        $(".site-hover-change-text strong").removeClass("site-updated-word");
        $(".site-hover-change-text strong").removeClass("site-updated-word-hide");
    });



function determineDropDirection() {
    $(".cms-moving-block").each(function() {
        $(this).css({
            visibility: "hidden",
            display: "block"
        });


        $(this).parent().removeClass("dropup");
        $(this).parent().removeClass("dropleft");

        if ($(this).offset().top > $(window).innerHeight() - 360) {
            console.log("write plz")
            console.log("top 1: " + $(this).offset().top + $(this).outerHeight())
            console.log("top 2: " + $(window).innerHeight() + $(window).scrollTop())
            $(this).parent().addClass("dropup");
        }

        if ($(this).offset().left < 310) {

            console.log("$(this).offset().left: " + $(this).offset().left)
            console.log("$(this).outerWidth(): " + $(this).outerWidth())
            console.log("left 1: " + $(this).offset().left + $(this).outerWidth())

            console.log("$(window).innerWidth(): " + $(window).innerWidth())
            console.log("$(window).scrollLeft(): " + $(window).scrollLeft())
            console.log("left 2: " + $(window).innerWidth() + $(window).scrollLeft())

            $(this).parent().addClass("dropleft");
        }

        $(this).removeAttr("style");
    });
}

$(document).ready(function() {


    if ($(".site-page-recommendation-wrapper").length) {
        $(".site-page-recommendation-wrapper").hide();

        $(".site-page-recommendation-wrapper .site-pr-icon").click(function() {
            $(".site-pr-list-wrapper").addClass("site-pr-list-wrapper-active");
            $(".site-pr-list").removeClass("site-pr-list-full");
            $(".site-pr-list-show-more").show();
        });

        $(".site-pr-list-show-more").click(function() {
            $(".site-pr-list").addClass("site-pr-list-full");
            $(".site-pr-list-show-more").hide();
        });

        $(".site-pr-list-close").click(function() {
            $(".site-pr-list-wrapper").removeClass("site-pr-list-wrapper-active");
            $(".site-pr-list").removeClass("site-pr-list-full");
        });

        var fixmeTop = $("body").height() / 2;


        $(document).on('scroll.recommendation', function() {

            var currentScroll = $(window).scrollTop();

            if (currentScroll >= fixmeTop) {
                $(".site-page-recommendation-wrapper").show();
                $(".site-pr-list-wrapper").addClass("site-pr-list-wrapper-active");
                $(document).off('scroll.recommendation')
            }
        })

    }

    if ($('#moving-block').length) {
        var div = document.getElementById('moving-block');
        var isDown = -1;
        var offset = 0;
        var mousePosition = 0;
        document.addEventListener('mousemove', move);

        div.addEventListener('mousedown', function(e) {
            isDown = true;
            offset = [
                div.offsetLeft - e.clientX,
                div.offsetTop - e.clientY
            ];
            console.log("1")

        }, true);

        div.addEventListener('mouseup', function(e) {
            isDown = false;
            determineDropDirection();
            console.log("2")
        }, true);

        function move(e) {
            let event = e || window.event;
            e.preventDefault();
            if (isDown) {
                e.preventDefault();
                mousePosition = {
                    x: event.clientX,
                    y: event.clientY
                };

                div.style.left = (mousePosition.x + offset[0]) + 'px';
                div.style.top = (mousePosition.y + offset[1]) + 'px';
            }
        }
    }
    /*
        if ($('#OrphanedFeaturesContainer').length) {
            var div = document.getElementById('OrphanedFeaturesContainer');
            var isDown = -1;
            var offset = 0;
            var mousePosition = 0;
            document.addEventListener('mousemove', move);

            div.addEventListener('mousedown', function (e) {
                isDown = true;
                offset = [
                    div.offsetLeft - e.clientX,
                    div.offsetTop - e.clientY
                ];
                console.log("1")

            }, true);

            div.addEventListener('mouseup', function (e) {
                isDown = false;
                determineDropDirection();
                console.log("2")
            }, true);

            function move(e) {
                let event = e || window.event;
                e.preventDefault();
                if (isDown) {
                    e.preventDefault();
                    mousePosition = {
                        x: event.clientX,
                        y: event.clientY
                    };

                    div.style.left = (mousePosition.x + offset[0]) + 'px';
                    div.style.top = (mousePosition.y + offset[1]) + 'px';
                }
            }
        }
        */

    /*
    ---------------------------------
    Remove deafult list custom style
    ---------------------------------
    */
    function removeCustomlistStyle() {
        if ($("ul").length) {
            $("ul[style*='list-style-type']").each(function() {
                $(this).addClass("site-no-custom-link")
            });
        }

        if ($("ol").length) {
            $("ol[style*='list-style-type']").each(function() {
                $(this).addClass("site-no-custom-link")
            });
        }
    }

    if ($("body:not(.cms-page-is-in-edit-mode)").length) {
        removeCustomlistStyle();
    }

    setTimeout(function() {
        removeCustomlistStyle();
    }, 1000);




    if ($(window).width() < 600) {
        $(".site-display-filter-title").click(function() {
            $(this).next(".site-display-filter-desc").slideToggle();
            $(this).toggleClass("site-display-filter-title-active")
        });
    }


    if ($("body:not(.cms-page-is-in-edit-mode) .ck5-site-table-accordion").length) {
        $(".ck5-site-table-accordion").each(function() {
            $(this).addClass("site-table-accordion");
        });
    }


    if ($("body:not(.cms-page-is-in-edit-mode) .ck5-site-table-accordion-arrow-first").length) {
        console.log("arrow first in if")
        $(".ck5-site-table-accordion-arrow-first").each(function() {
            console.log("arrow first in each")
            $(this).addClass("site-table-accordion-arrow-first");
            $(this).addClass("site-table-accordion")
        });
    }


    if ($("body:not(.cms-page-is-in-edit-mode) .site-table-accordion").length) {

        $(".site-table-accordion tr").each(function() {
            $(this).addClass("site-tbl-accordion-row");

            $(this).children("th").each(function() {
                $(this).parent("tr").addClass("site-tbl-accordion-header");
            });

            $(this).children("td").each(function() {
                $(this).parent("tr").addClass("site-tbl-accordion-desc");
            });

            $(this).find("table").addClass("site-tbl-accordion-sub-tbl")
            $(".site-tbl-accordion-sub-tbl").find("tr").removeClass()
            $(".site-tbl-accordion-sub-tbl").find("th").removeClass()
            $(".site-tbl-accordion-sub-tbl").find("td").removeClass()
        });

        $(".site-table-accordion tr.site-tbl-accordion-header").each(function() {});

        // Start JS for ck5-site-table-accordion - Appling same strture as old accordion so that FED dont need style again
        if ($("body:not(.cms-page-is-in-edit-mode) .ck5-site-table-accordion").length) {
            $(".ck5-site-table-accordion").each(function() {
                $(this).find("tr").addClass("site-tbl-accordion-row");
                $(this).find("tr").addClass("site-tbl-accordion-desc");

                if ($(this).find("td").hasClass("ck5-site-table-accordion-title")) {
                    $(this).find("td.ck5-site-table-accordion-title").parent("tr").addClass("site-tbl-accordion-header").removeClass("site-tbl-accordion-desc")
                }

                $(this).find("td.ck5-site-table-accordion-title").replaceWith(function() {
                    return $("<th>", {
                        html: $(this).html(), // keep content
                        class: $(this).attr("class"), // keep class
                    });
                });
            });
        }

        // Start JS for ck5-site-table-accordion - Appling same strture as old accordion so that FED dont need style again
        if ($("body:not(.cms-page-is-in-edit-mode) .ck5-site-table-accordion-arrow-first").length) {
            $(".ck5-site-table-accordion-arrow-first").each(function() {
                $(this).find("tr").addClass("site-tbl-accordion-row");
                $(this).find("tr").addClass("site-tbl-accordion-desc");

                if ($(this).find("td").hasClass("ck5-site-table-accordion-title")) {
                    $(this).find("td.ck5-site-table-accordion-title").parent("tr").addClass("site-tbl-accordion-header").removeClass("site-tbl-accordion-desc")
                }

                $(this).find("td.ck5-site-table-accordion-title").replaceWith(function() {
                    return $("<th>", {
                        html: $(this).html(), // keep content
                        class: $(this).attr("class"), // keep class
                    });
                });
            });
        }



        $(".site-table-accordion tr.site-tbl-accordion-header").each(function() {
            $(this).nextUntil('tr.site-tbl-accordion-header').find(' > td').wrap("<div class='site-tbl-accordion-desc-wrapper'></div>");

            $(this).click(function() {
                $(this).toggleClass("site-tbl-accordion-header-active");
                $(this).nextUntil('tr.site-tbl-accordion-header').toggleClass("site-tbl-accordion-desc-active");
                $(this).nextUntil('tr.site-tbl-accordion-header').find('.site-tbl-accordion-desc-wrapper').slideToggle();
                if ($(this).nextUntil('tr.site-tbl-accordion-header').find('.site-tbl-accordion-desc-wrapper').find("iframe")) {

                    var iframe_block = $(this).nextUntil('tr.site-tbl-accordion-header').find('.site-tbl-accordion-desc-wrapper').find("iframe");

                    iframeReload(iframe_block.get(0));
                }
            });

        });
    }


    // Start JS for ck5-site-table-tabs - Appling same strture as old tabs so that FED dont need style again
    if ($("body:not(.cms-page-is-in-edit-mode) .ck5-site-table-tabs").length) {
        $(".ck5-site-table-tabs").each(function() {
            $(this).addClass("site-table-tabs");
            if ($(this).find("td").hasClass("ck5-site-table-tabs-title")) {
                $(this).find("td.ck5-site-table-tabs-title").parent("tr").addClass("site-tbl-tab-header");
            }

            $("td.ck5-site-table-tabs-title").replaceWith(function() {
                return $("<th>", {
                    html: $(this).html(), // keep content
                    class: $(this).attr("class"), // keep class
                });
            });
        });
    }

    if ($("body:not(.cms-page-is-in-edit-mode) .site-table-tabs").length) {
        $(".site-table-tabs").each(function() {
            var $this = $(this);
            var $table_tr = $this.find("tbody:first > tr");
            var $table_th = $this.find(".site-tbl-tab-header");

            //now next loop
            $.each($table_tr, function(n, e) {
                $(this).children("th").each(function() {
                    $(this).parent("tr").addClass("site-tbl-tab-header");
                });
            });

            $('.site-tbl-tab-header').each(function() {
                var $nextGroup = $(this).nextUntil('.site-tbl-tab-header');
                $nextGroup.add($nextGroup).wrapAll('<div class="site-tbl-tab-desc"><div class="site-tbl-tab-desc-block"></div></div>');
            });

            $this.find('.site-tbl-tab-header').wrapAll('<div class="site-tbl-tab-header-wrapper"></div>').andSelf();
            $this.find('.site-tbl-tab-header-wrapper').addClass("site-tbl-tab-header-" + $this.find('.site-tbl-tab-header-wrapper').children().length)

            $this.find('.site-tbl-tab-desc').wrapAll('<div class="site-tbl-tab-desc-wrapper"></div>').andSelf();

            $this.find(".site-tbl-tab-header-wrapper .site-tbl-tab-header:first").addClass("site-tbl-tab-header-active");
            $this.find(".site-tbl-tab-desc-wrapper .site-tbl-tab-desc:first").addClass("site-tbl-tab-desc-active")

            $this.find(".site-tbl-tab-header").click(function() {
                $this.find(".site-tbl-tab-header").removeClass("site-tbl-tab-header-active");
                $this.find(".site-tbl-tab-desc").removeClass("site-tbl-tab-desc-active");

                $(this).addClass("site-tbl-tab-header-active");
                var tab_header_index = $(this).index();
                $this.find('.site-tbl-tab-desc-wrapper .site-tbl-tab-desc').eq(tab_header_index).addClass("site-tbl-tab-desc-active")
            });

            $this.find('.site-tbl-tab-desc').each(function() {
                $("<div class='site-tbl-tab-accordion-title'>accr titil</div>").prependTo($(this));
            });

            $this.find(".site-tbl-tab-header").each(function() {
                var tab_header_index = $(this).index();
                $this.find('.site-tbl-tab-desc-wrapper .site-tbl-tab-desc .site-tbl-tab-accordion-title').eq(tab_header_index).text($(this).text());
            });

            $this.find(".site-tbl-tab-accordion-title").click(function() {

                if ($(this).hasClass("site-tbl-tab-accordion-title-active")) {
                    $this.find(".site-tbl-tab-desc-block").slideUp();
                    $this.find(".site-tbl-tab-accordion-title").removeClass("site-tbl-tab-accordion-title-active")
                    return true;
                }

                $this.find(".site-tbl-tab-accordion-title").removeClass("site-tbl-tab-accordion-title-active")
                $this.find(".site-tbl-tab-desc-block").slideUp()
                $(this).addClass("site-tbl-tab-accordion-title-active")
                $(this).next(".site-tbl-tab-desc-block").slideDown().addClass("site-tbl-tab-desc-block-active")
            })
        });
    }

    $(function() {
        // CONFIG
        const TYPING_INTERVAL = 300;
        const DELETING_INTERVAL = 100;
        const PAUSE_AFTER_TYPED = 600;

        // For every block on page
        $("ul.site-style-tt").each(function() {

            const $block = $(this);
            $block.hide();

            // Locate target, if missing create one
            let $target = $block.find(".typewriter-target");
            if (!$target.length) {
                $target = $('<div class="typewriter-target"></div>').insertBefore($block);
            }

            // The static text that is already inside typewriter-target
            const staticText = $target.text().trim();

            // Collect words from UL inside this same block
            const words = $block.find("li").map(function() {
                return $(this).text().trim();
            }).get();

            if (!words.length) return;

            let index = 0;
            let letter = 0;
            let deleting = false;

            function loop() {
                const word = words[index];
                const output = staticText + word.substring(0, Math.max(0, letter));

                $target.text(output);

                if (!deleting) {
                    letter++;
                } else {
                    letter--;
                }

                // Finished typing
                if (!deleting && letter === word.length + 1) {
                    letter = word.length;
                    setTimeout(() => {
                        deleting = true;
                        loop();
                    }, PAUSE_AFTER_TYPED);
                    return;
                }

                // Finished deleting
                if (deleting && letter === 0) {
                    deleting = false;
                    index = (index + 1) % words.length;
                }

                setTimeout(loop, deleting ? DELETING_INTERVAL : TYPING_INTERVAL);
            }

            loop();
        });
    });



    if ($(".site-thumbnail").length) {

        $('.site-thumbnail:not(.site-thumbnail-show-desc-popup) .site-thumbnail-wrapper').each(function() {
            var desc_data = "";

            $(this).magnificPopup({
                delegate: '.site-thumbnail-link', // the selector for gallery item
                type: 'image',
                mainClass: 'mfp-with-zoom',
                gallery: {
                    enabled: true
                },
                image: {
                    tError: 'Image could not load',

                    markup: '<div class="mfp-figure">' +
                        '<div class="mfp-close"></div>' +
                        '<figure><div class="mfp-img"></div>' +
                        '<figcaption><div class="mfp-bottom-bar">' +
                        '<div class="mfp-title"></div>' +
                        '<div class="mfp-counter"></div>' +
                        '</div></figcaption></figure>' +
                        '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag,
                    titleSrc: function(item) {
                        return item.el.parents(".site-thumbnail-block").find(".site-thumbnail-more-desc").clone();
                    },
                },
                zoom: {
                    enabled: true,

                    duration: 300, // duration of the effect, in milliseconds
                    easing: 'ease-in-out', // CSS transition easing function
                    opener: function(openerElement) {
                        return openerElement.is('img') ? openerElement : openerElement.find('img');
                    }
                },

            });
        });


        $('.site-thumbnail.site-thumbnail-show-desc-popup .site-thumbnail-wrapper').each(function() {
            var desc_data = "";

            $(this).magnificPopup({
                delegate: '.site-thumbnail-link', // the selector for gallery item
                type: 'image',
                mainClass: 'mfp-with-zoom',
                gallery: {
                    enabled: true
                },
                image: {
                    tError: 'Image could not load',

                    markup: '<div class="mfp-figure">' +
                        '<div class="mfp-close"></div>' +
                        '<figure><div class="mfp-img"></div>' +
                        '<figcaption><div class="mfp-bottom-bar">' +
                        '<div class="mfp-title"></div>' +
                        '<div class="mfp-counter"></div>' +
                        '</div></figcaption></figure>' +
                        '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag,

                    titleSrc: function(item) {
                        return item.el.parents(".site-thumbnail-block").find(".site-thumbnail-desc").clone();
                    },

                },
                zoom: {
                    enabled: true,

                    duration: 300, // duration of the effect, in milliseconds
                    easing: 'ease-in-out', // CSS transition easing function
                    opener: function(openerElement) {
                        return openerElement.is('img') ? openerElement : openerElement.find('img');
                    }
                },

            });
        });
    }



    $(".site-thumbnail-block .site-thumbnail-desc").each(function() {
        if ($.trim($(this).html()) == '') {
            $(this).remove();
        }
    });

    $(".site-thumbnail-block .site-thumbnail-more-desc").each(function() {
        if ($.trim($(this).html()) == '') {
            $(this).parents(".site-thumbnail-block").addClass("site-thumbnail-no-more-desc")
            $(this).remove();

        }
    });



    // POPUP SLIDER
    $(".site-slider-pop-wrapper").each(function(index) {
        $(this).click(function() {
            if (!($(this).hasClass("site-active-slider-pop-wrapper"))) {
                $(".site-slider-pop-wrapper").removeClass("site-active-slider-pop-wrapper");
            }

            $(this).toggleClass("site-active-slider-pop-wrapper");
            $(".site-slider-popup .slick-arrow").toggleClass("hidden-block")

            return true;

        });
    });


    //We initialiaze Masonry only if there is an integration feature Directory present in the page
    $("body:not(.cms-page-is-in-edit-mode) .site-feature-accordion-wrapper").each(function() {
        $(this).find(".cms-feature-datablock").hide();
    });

    $("body:not(.cms-page-is-in-edit-mode) .site-feature-accordion-wrapper .cms-feature-title").click(function() {

        $(this).parents(".site-feature-accordion-wrapper").toggleClass("site-feature-accordion-active").find(".cms-feature-datablock").slideToggle();

        if ($(this).parents(".site-feature-accordion-wrapper").find(".cms-feature-datablock").find("iframe")) {
            var iframe_block = $(this).parents(".site-feature-accordion-wrapper").find(".cms-feature-datablock").find("iframe");

            iframeReload(iframe_block.get(0));
        }

    });


});

function iframeReload(iframe) {
    if (iframe) {
        try {
            iframe.contentDocument.location.reload();
        } catch (e) {

        }
    }
}



$(document).ready(function() {
    var animationElements = $('[class*="site-animation-"]').toArray();
    var isAnimationUpdateScheduled = false;

    if (!animationElements.length) return;

    function updateAnimations() {
        isAnimationUpdateScheduled = false;
        var activationBoundary = window.innerHeight - 300;

        animationElements.forEach(function(element) {
            if (element.getBoundingClientRect().top < activationBoundary) {
                element.classList.add("site-animation-active");
            } else if (!element.classList.contains('site-animation-right-wrapper') &&
                !element.classList.contains('site-animation-left-wrapper')) {
                element.classList.remove("site-animation-active");
            }
        });
    }

    function scheduleAnimationUpdate() {
        if (isAnimationUpdateScheduled) return;
        isAnimationUpdateScheduled = true;
        window.requestAnimationFrame(updateAnimations);
    }

    window.addEventListener('scroll', scheduleAnimationUpdate, {
        passive: true
    });
});

// .cms-drag-drop-block
$(function() {
    var $container = $('#OrphanedFeaturesContainer');
    var $handle = $container.find('.cms-drag-drop-block');
    var headerHeight = 72;

    var isDragging = false;
    var mouseDiffX = 0;
    var mouseDiffY = 0;

    $handle.on('mousedown', function(e) {
        e.preventDefault();
        isDragging = true;

        // Get container's current position
        var containerPos = $container.position();

        // Get handle's position inside the container
        var handlePos = $handle.position();

        // Calculate where the mouse is inside the handle
        mouseDiffX = e.clientX - (containerPos.left + handlePos.left);
        mouseDiffY = e.clientY - (containerPos.top + handlePos.top);

        $container.css('z-index', 100001).addClass('dragging');
    });

    $(document).on('mousemove', function(e) {
        if (!isDragging) return;

        // Keep mouse locked to the handle
        var handlePos = $handle.position();
        var newLeft = e.clientX - mouseDiffX - handlePos.left;
        var newTop = e.clientY - mouseDiffY - handlePos.top;

        // Clamp inside viewport
        var winW = $(window).width();
        var winH = $(window).height();
        var cW = $container.outerWidth();
        var cH = $container.outerHeight();

        newLeft = Math.max(0, Math.min(newLeft, winW - cW));
        newTop = Math.max(headerHeight, Math.min(newTop, winH - cH));

        $container.css({
            left: newLeft,
            top: newTop
        });
    });

    $(document).on('mouseup', function() {
        if (!isDragging) return;
        isDragging = false;
        $container.css('z-index', 100000).removeClass('dragging');
    });
});