(function($, Drupal, drupalSettings, _) {
    if (!document.querySelector(".notification-bar")) {
        document.body.classList.add("no-notification");
    }

    /* Header fixed */
    let lastScroll = window.scrollY;
    const header = document.querySelector(".header-fixed");

    window.addEventListener("scroll", () => {
        const currentScroll = window.scrollY;
        if (currentScroll <= 0) {
            header.classList.remove("hide-topbar");
            header.classList.add("show-topbar");
            return;
        }
        if (currentScroll > lastScroll) {
            header.classList.remove("show-topbar");
            header.classList.add("hide-topbar");
        } else {
            header.classList.remove("hide-topbar");
            header.classList.add("show-topbar");
        }

        lastScroll = currentScroll;
    });


    /* Header: Hamburger Menu */
    var myOffcanvas = document.getElementById("offcanvasRight");
    myOffcanvas.addEventListener("hidden.bs.offcanvas", function() {});
    myOffcanvas.addEventListener("shown.bs.offcanvas", function() {});
    /* Header: Marquee */

    /* Header custom script */
    function handleMobileMenu() {
        if ($(window).width() < 991.98) {
            // Inject arrow if not already present
            $(".mid-sidebar .menu .menu-item.menu-item--expanded > span").each(
                function() {
                    if ($(this).find(".arrow").length === 0) {
                        $(this).append(`
            <span class="arrow">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M8.12002 14.71L12 10.83L15.88 14.71C16.27 15.1 16.9 15.1 17.29 14.71C17.68 14.32 17.68 13.69 17.29 13.3L12.7 8.71C12.31 8.32 11.68 8.32 11.29 8.71L6.70002 13.3C6.31002 13.69 6.31002 14.32 6.70002 14.71C7.09002 15.09 7.73002 15.1 8.12002 14.71Z" fill="white"/>
              </svg>
            </span>
          `);
                    }
                }
            );

            // Unbind previous click to avoid duplicate bindings
            $(".mid-sidebar .menu .menu-item.menu-item--expanded > span").off(
                "click"
            );

            // Toggle menu and arrow
            $(".mid-sidebar .menu .menu-item.menu-item--expanded > span").on(
                "click",
                function(e) {
                    e.preventDefault();

                    const $clickedMenu = $(this).next(".menu");
                    const $clickedArrow = $(this).find(".arrow");

                    // Slide up all other menus
                    $(".mid-sidebar .menu .menu-item.menu-item--expanded > .menu")
                        .not($clickedMenu)
                        .stop(true, true)
                        .slideUp(300);

                    // Remove .open class from all other arrows
                    $(".mid-sidebar .menu .menu-item.menu-item--expanded > span .arrow")
                        .not($clickedArrow)
                        .removeClass("open");

                    // Toggle the clicked menu
                    $clickedMenu.stop(true, true).slideToggle(300);

                    // Toggle .open class on arrow
                    $clickedArrow.toggleClass("open");
                }
            );
        } else {
            // Optional: Reset styles and unbind on larger screens
            $(".mid-sidebar .menu .menu-item.menu-item--expanded > span").off(
                "click"
            );
            $(".mid-sidebar .menu .menu-item.menu-item--expanded > .menu").removeAttr(
                "style"
            );
            $(
                ".mid-sidebar .menu .menu-item.menu-item--expanded > span .arrow"
            ).remove();
            $(
                ".mid-sidebar .menu .menu-item.menu-item--expanded > span .arrow"
            ).removeClass("open");
        }
    }

    handleMobileMenu();

    // Run on window resize
    $(window).resize(function() {
        handleMobileMenu();
    });

    /**WOW JS***/
    wow = new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: true,
        live: true,
    });
    wow.init();

    /* Uneven img slider */
    function createMarquee(wrapperSelector, contentSelector, options = {}) {
        const marqueeWrapper = document.querySelector(wrapperSelector);
        const marqueeContent = document.querySelector(contentSelector);

        if (!marqueeWrapper || !marqueeContent) {
            console.error(
                `Marquee elements not found: ${wrapperSelector} or ${contentSelector}`
            );
            return;
        }

        const speed = options.speed || 1.5;
        let isMouseDown = false;
        let startX;
        let scrollLeft;
        let animationFrame;
        let isHovered = false;

        function cloneContentConditionally() {
            const items = marqueeContent.children;
            const itemCount = items.length;
            const originalContent = marqueeContent.innerHTML;

            if (itemCount <= 2) {
                marqueeContent.innerHTML = originalContent.repeat(7);
            } else if (itemCount <= 3) {
                marqueeContent.innerHTML = originalContent.repeat(6);
            } else if (itemCount <= 4) {
                marqueeContent.innerHTML = originalContent.repeat(5);
            } else if (itemCount <= 5) {
                marqueeContent.innerHTML = originalContent.repeat(4);
            } else {
                marqueeContent.innerHTML = originalContent.repeat(3);
            }
        }

        function stopDragging() {
            isMouseDown = false;
            marqueeContent.style.cursor = "grab";
            marqueeContent.style.transition = "none";
            document.body.style.cursor = "default";
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", stopDragging);
        }

        function handleMouseMove(e) {
            if (!isMouseDown) return;

            e.preventDefault();
            const x = e.pageX;
            const walk = x - startX;
            let newPosition = scrollLeft + walk;

            if (Math.abs(newPosition) >= contentWidth) {
                const overflow = newPosition % contentWidth;
                newPosition = overflow;
                scrollLeft = overflow;
                startX = e.pageX;
            }

            marqueeContent.style.left = `${newPosition}px`;
        }

        cloneContentConditionally();
        const contentWidth = marqueeContent.scrollWidth / 2;

        marqueeContent.style.position = "relative";
        marqueeContent.style.left = "0px";
        marqueeWrapper.style.overflow = "hidden";
        marqueeContent.style.cursor = "grab";

        function autoScroll() {
            if (!isMouseDown && !isHovered) {
                let currentLeft = parseFloat(marqueeContent.style.left) || 0;
                currentLeft -= speed;

                if (Math.abs(currentLeft) >= contentWidth) {
                    currentLeft = 0;
                }

                marqueeContent.style.left = `${currentLeft}px`;
            }
            animationFrame = requestAnimationFrame(autoScroll);
        }

        // Hover events
        document.addEventListener("mouseover", (e) => {
            if (e.target.closest(`${contentSelector} .item`)) {
                isHovered = true;
            }
        });

        document.addEventListener("mouseout", (e) => {
            if (
                e.target.closest(`${contentSelector} .item`) &&
                !e.relatedTarget ? .closest(`${contentSelector} .item`)
            ) {
                isHovered = false;
            }
        });

        marqueeContent.addEventListener("mousedown", (e) => {
            e.preventDefault();
            isMouseDown = true;
            startX = e.pageX;
            scrollLeft = parseFloat(marqueeContent.style.left) || 0;

            marqueeContent.style.cursor = "grabbing";
            document.body.style.cursor = "grabbing";
            marqueeContent.style.transition = "none";

            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mouseup", stopDragging);
        });

        document.addEventListener("mouseup", stopDragging);
        document.addEventListener("mouseleave", stopDragging);

        marqueeContent.addEventListener("touchstart", (e) => {
            const touch = e.touches[0];
            isMouseDown = true;
            startX = touch.pageX;
            scrollLeft = parseFloat(marqueeContent.style.left) || 0;
        });

        marqueeContent.addEventListener("touchmove", (e) => {
            if (!isMouseDown) return;
            e.preventDefault();
            const touch = e.touches[0];

            const x = touch.pageX;
            const walk = x - startX;
            let newPosition = scrollLeft + walk;

            if (Math.abs(newPosition) >= contentWidth) {
                const overflow = newPosition % contentWidth;
                newPosition = overflow;
                scrollLeft = overflow;
                startX = touch.pageX;
            }

            marqueeContent.style.left = `${newPosition}px`;
        });

        marqueeContent.addEventListener("touchend", () => {
            isMouseDown = false;
        });

        marqueeContent.addEventListener("selectstart", (e) => {
            if (isMouseDown) {
                e.preventDefault();
            }
        });

        function cleanup() {
            cancelAnimationFrame(animationFrame);
            stopDragging();
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", stopDragging);
        }

        window.addEventListener("pagehide", cleanup);

        autoScroll();

        // Return cleanup function for manual disposal if needed
        return cleanup;
    }

    document.addEventListener("DOMContentLoaded", () => {
        const checkExist = setInterval(() => {
            if (
                document.querySelector(".img-slider-section") &&
                document.querySelector(".uneven-img-slider")
            ) {
                clearInterval(checkExist);
                // createMarquee('.banner-btm-slider', '.banner-video-slider', { speed: 1.5 });
                createMarquee(".img-slider-section", ".uneven-img-slider", {
                    speed: 1.5,
                });
            }
        }, 100);
    });

    /******Experience title********** */

    function experienceTitleHeight() {
        $(".exp-block .hover-data .block-title").each(function() {
            // Let the title take natural height
            $(this).css("height", "auto");

            // Get the current title's height
            var currentHeight = $(this).outerHeight();

            // Adjust the parent .hover-data transform based on this individual height
            $(this)
                .parent(".hover-data")
                .css("transform", `translateY(calc(100% - ${currentHeight}px))`);
        });
    }

    $(function() {
        experienceTitleHeight();
        // Select 2
        $(window).on("load", function() {
            // funSelectScroll();
        });

        $(".cmn-select select").on("select2:open", function() {
            // funSelectScroll();
        });

        $(document).on("keydown", ".select2-search__field", function() {
            // funSelectScroll();
        });
    });

    $(window).on("resize", experienceTitleHeight);


    /* Select2 Custom Scrollbar & init */
    function funSelectScroll() {
        $(".select2-dropdown .select2-results__options").mCustomScrollbar("destroy");
        setTimeout(function() {
            $(".select2-dropdown .select2-results__options").mCustomScrollbar({
                axis: "y",
                scrollbarPosition: "inside",
                advanced: {
                    updateOnContentResize: true,
                },
            });
        }, 8);
    }

    $(".block-webform .form-item select").select2({
        minimumResultsForSearch: -1,
        dropdownParent: $(".form-type-select"),
        dropdownAutoWidth: false,
        width: "100%",
    });

    $(".view-overlake-news .view-filters form select").select2({
        placeholder: 'All Grade Levels',
        minimumResultsForSearch: -1,
        dropdownParent: $(".js-form-type-select"),
        dropdownAutoWidth: false,
        width: "100%",
    });

    /*  $("#views-exposed-form-staff-directory-page-1 select").select2({
        placeholder: 'All Departments',
        minimumResultsForSearch: -1,
        dropdownParent: $("#views-exposed-form-staff-directory-page-1"),
        dropdownAutoWidth: false,
        width: "100%",
      });
      */


    (function(Drupal, once) {
        Drupal.behaviors.addPlaceholder = {
            attach: function(context) {
                once('addPlaceholder', '#views-exposed-form-staff-directory-page-1 #edit-search', context).forEach(function(el) {
                    el.setAttribute('placeholder', 'Search By Name');
                });
            }
        };
    })(Drupal, once);



    /***Modal popup****/
    var $bannerModal;
    $("[data-bs-target='#bsModal']").on("click", function() {
        $bannerModal = $(this).data("src");
        $("#bannerVideo").attr("src", $bannerModal + "?&autoplay=1&mute=1");
    });

    $("#bsModal").on("hide.bs.modal", function() {
        $("#bannerVideo").attr("src", "");
    });

    /**OUR CAMPUS AUDIO***/

    var audio = $('#ourCampusAudio')[0];
    $('#enableAudio').on('click', function() {
        $(this).toggleClass('played');
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
        audio.onended = function() {
            $("#enableAudio").removeClass("played");
        };
    });


    /* document.querySelectorAll('.accordion-button').forEach(button => {
      button.addEventListener('touchstart', function() {
        this.click();
      });
    }); */


    document.addEventListener("DOMContentLoaded", function() {
        // Marquee
        const marqueeContent = document.querySelector(
            ".notification-bar .field--type-text-with-summary"
        );
        let marqueeCloned = false;

        function handleMarquee() {
            if (!marqueeContent) return;

            const existingClones = marqueeContent.querySelectorAll("p");
            const isMobile = window.innerWidth < 556;

            if (isMobile && existingClones.length === 1) {
                const clone = existingClones[0].cloneNode(true);
                marqueeContent.appendChild(clone);
                marqueeContent.classList.add("marquee-enabled");
                marqueeCloned = true;
            } else if (!isMobile && existingClones.length > 1) {
                // Remove all clones except the first
                for (let i = 1; i < existingClones.length; i++) {
                    existingClones[i].remove();
                }
                marqueeContent.classList.remove("marquee-enabled");
                marqueeCloned = false;
            }
        }

        // Initial check
        handleMarquee();

        // Re-check on resize
        window.addEventListener("resize", handleMarquee);
    });

    /* Alumni Member Popup */
    $("[data-bs-target='#dataModal']").on("click", function() {
        $alumniModaltitle = $(this).data("title");
        $alumniModaldesi = $(this).data("designation");
        $subContent = $(this).find('.subcontent').text();
        $("#alumnititle").text($alumniModaltitle);
        $("#alumndesi").text($alumniModaldesi);
        $("#alumncont").html($subContent);
    });

    $('#dataModal').on('shown.bs.modal', function() {
        $('.data-popup .overflow-data').animate({
            scrollTop: 0
        }, 250); // 400ms animation
    });

    $('#offcanvasTop').on('shown.bs.offcanvas', function() {
        $('#offcanvasTop form input.form-control').val('').focus();
    });

    $('.hp-uniquely .content a[href^="#"]').on('click', function(e) {
        e.preventDefault(); // Stop default jump
        var targetId = $(this).attr('href').substr(1); // Get ID from href

        var $target = $('#' + targetId);
        if ($target.length) {
            $('html, body').animate({
                scrollTop: $target.offset().top - $("header").outerHeight()
            }, 600);

            // Update URL hash
            history.pushState(null, null, '#' + targetId);
        }
    });

    if (window.location.hash) {
        var targetId = window.location.hash.substring(1);
        var $target = $('#' + targetId);

        if ($target.length) {
            // Wait a moment to ensure layout is ready
            setTimeout(function() {
                $('html, body').animate({
                    scrollTop: $target.offset().top - $('header').outerHeight()
                }, 600);
            }, 100); // adjust delay as needed
        }
    }


})(jQuery, Drupal, drupalSettings, _);



(function($, Drupal) {
    Drupal.behaviors.autoSubmitFilter = {
        attach: function(context, settings) {
            // Replace with your actual select element ID or class
            $('#edit-field-grade-level-target-id', context).on('change', function() {
                $(this).closest('form').submit();
            });
        }
    };
})(jQuery, Drupal);


(function($, Drupal, once) {
    Drupal.behaviors.overrideEmailMessageAttribute = {
        attach: function(context, settings) {
            $(once('custom-email-msg', 'input[type="email"]', context)).each(function() {
                $(this).attr('data-msg-email', 'Please enter a valid email address.');
            });
        }
    };
})(jQuery, Drupal, once);

(function($, Drupal, once) {
    Drupal.behaviors.openPdfAndExternalLinksInNewTab = {
        attach: function(context) {
            const links = once('openInNewTab', 'a', context);
            links.forEach(function(link) {
                const href = link.getAttribute('href');
                if (!href) return;

                if (link.classList.contains('found-no-target')) return;

                const isPdf = /\.pdf(\?|$)/i.test(href);
                const isExternal = link.hostname && link.hostname !== window.location.hostname;

                if (isPdf || isExternal) {
                    link.setAttribute('target', '_blank');
                    link.setAttribute('rel', 'noopener noreferrer');
                }
            });
        }
    };
})(jQuery, Drupal, once);


(function($, Drupal) {
    Drupal.behaviors.searchFilterAjax = {
        attach: function(context, settings) {
            //console.log('Custom AJAX behavior loaded.');
            /***Search Page*****/

            $(".form-item-type select").select2({
                placeholder: 'Any',
                minimumResultsForSearch: -1,
                dropdownParent: $(".form-item-type"),
                dropdownAutoWidth: false,
                width: "100%",
            });
            $(".form-item-field-grade-level select").select2({
                placeholder: 'Any',
                minimumResultsForSearch: -1,
                dropdownParent: $(".form-item-field-grade-level"),
                dropdownAutoWidth: false,
                width: "100%",
            });
            $(".form-item-field-program select").select2({
                placeholder: 'Any',
                minimumResultsForSearch: -1,
                dropdownParent: $(".form-item-field-program"),
                dropdownAutoWidth: false,
                width: "100%",
            });
            $(".form-item-aggregated-departments select").select2({
                placeholder: 'Any',
                minimumResultsForSearch: -1,
                dropdownParent: $(".form-item-aggregated-departments"),
                dropdownAutoWidth: false,
                width: "100%",
            });
            $(".form-item-sort-by select").select2({
                placeholder: 'Any',
                minimumResultsForSearch: -1,
                dropdownParent: $(".form-item-sort-by"),
                dropdownAutoWidth: false,
                width: "100%",
            });

        }
    };
})(jQuery, Drupal);

(function($, Drupal, once) {
    Drupal.behaviors.openPdfAndExternalLinksInNewTab = {
        attach: function(context) {
            once('openInNewTab', 'footer .footer-bottom .cookie-preferences', context).forEach(function(link) {
                $(link).click(function(e) {
                    e.preventDefault();
                    klaro.show();
                });
            });
        }
    };
})(jQuery, Drupal, once);