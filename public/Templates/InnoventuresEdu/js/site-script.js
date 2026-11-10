$(document).ready(function() {
    // Click on search icon to get seach box

    $("a.quicklinks-search, .desktop-search").click(function(e) {
        $(".site-search-block").toggleClass("site-search-block-active");
        $(".site-search-input").focus();
        e.stopPropagation();
    });

    // Click anywhere on screen to close searchbar

    $(document).on("click", function(e) {
        if ($(e.target).closest(".site-search-data").length == 0) {
            $(".site-search-block").removeClass("site-search-block-active");
        } else {
            $(".site-search-block").addClass("site-search-block-active");
        }
    });

    // Mobile menu sub nav expand
    $(".level1 .site-nav-expand:not(.level2 .site-nav-expand):not(.level3 .site-nav-expand)").click(function() {
        var $clickedExpand = $(this);
        var $clickedSubnav = $clickedExpand.next(".site-subnav-wrapper");

        var isActive = $clickedExpand.hasClass("site-nav-expand-active");

        $(".site-nav-linktext").removeClass("site-nav-expand-active");

        $clickedExpand.toggleClass("site-nav-expand-active", !isActive);

        $clickedSubnav.toggleClass("site-subnav-wrapper-active", !isActive);

        // Remove active class from other subnav wrappers
        $(".site-subnav-wrapper").not($clickedSubnav).removeClass("site-subnav-wrapper-active");
    });

    $(".level2 > .site-nav-expand").click(function() {
        const closestLevel2 = $(this).closest(".level2").siblings(".level2");

        //remove active classes from all siblings elements
        closestLevel2.find(".site-nav-expand").removeClass("site-nav-expand-active");
        closestLevel2.find(".site-subnav-wrapper").removeClass("site-subnav-wrapper-active");

        $(this).toggleClass("site-nav-expand-active");
        $(this).next(".site-subnav-wrapper").toggleClass("site-subnav-wrapper-active");
    });

    $("body:not(.home-page) .site-nav-active-grandparent").each(function() {
        $(this).find(".site-subnav-wrapper:first").addClass("site-subnav-wrapper-active");
        $(this).find(".site-nav-expand:first").addClass("site-nav-expand-active");
    });

    $(".site-nav-active-parent").each(function() {
        $(this).find(".site-subnav-wrapper:first").addClass("site-subnav-wrapper-active");
        $(this).find(".site-nav-expand:first").addClass("site-nav-expand-active");
    });

    $(".site-nav-active").each(function() {
        $(this).find(".site-subnav-wrapper:first").addClass("site-subnav-wrapper-active");
        $(this).find(".site-nav-expand:first").addClass("site-nav-expand-active");
    });

    $(".site-subnav-active").each(function() {
        $(this).find(".site-subnav-wrapper:first").addClass("site-subnav-wrapper-active");
        $(this).find(".site-nav-expand:first").addClass("site-nav-expand-active");
    });


    // Custom link active
    var currentPageUrl = window.location.pathname;
    $("body:not(site-footer-right) .cms-text-feature-content a").each(function() {
        var href = $(this).attr('href');
        if (href && href.endsWith(currentPageUrl)) {
            $(this).addClass('custom-link-active');
        }
    });


    // ----------------------------
    // Desktop Custom Menu Toggle
    // ----------------------------
    $("#site-header .site-header-block .site-header-right .site-menu-wrapper ul li a").click(function(event) {
        event.preventDefault();
        $(".site-navigation-wrapper").fadeIn();
        $(".site-toggle").css("opacity", "1");
        $(".site-toggle").addClass('active');
        $(".site-navigation-wrapper").addClass('active');

        if ($('.site-navigation-wrapper').hasClass("active")) {
            $("body").css("overflow", "hidden");
        } else {
            $("body").css({
                "overflow-y": "auto",
                "overflow-x": "hidden"
            });
        }
    });



    // --------------------
    // Custom Nav Toggle
    // --------------------
    $(".site-navigation-wrapper .level1.site-nav-item").click(function(event) {
        event.preventDefault();

        // Ensure the click is not on a nested .level2 item
        if (!$(event.target).closest('.level2').length) {
            var $parentNavItem = $(this);
            var $clickedExpand = $parentNavItem.children(".site-nav-expand");
            var $clickedSubnav = $parentNavItem.children(".site-subnav-wrapper");

            var isActive = $clickedExpand.hasClass("site-nav-expand-active");

            // Remove active classes from other .site-nav-expand and .site-subnav-wrapper within .level1
            $(".site-navigation-wrapper .level1 .site-nav-expand").removeClass("site-nav-expand-active");
            $(".site-navigation-wrapper .level1 .site-subnav-wrapper").removeClass("site-subnav-wrapper-active");

            setTimeout(function() {
                // Toggle active classes for clicked nav expand and its subnav wrapper
                $clickedExpand.toggleClass("site-nav-expand-active", !isActive);
                $clickedSubnav.toggleClass("site-subnav-wrapper-active", !isActive);
            }, 100);

        }
    });

    $(".site-navigation-wrapper .level2.site-nav-item").click(function(event) {
        event.preventDefault();

        // Ensure the click is not on a nested .level2 item
        if (!$(event.target).closest('.level3').length) {
            var $parentNavItem = $(this);
            var $clickedExpand = $parentNavItem.children(".site-nav-expand");
            var $clickedSubnav = $parentNavItem.children(".site-subnav-wrapper");

            var isActive = $clickedExpand.hasClass("site-nav-expand-active");

            // Remove active classes from other .site-nav-expand and .site-subnav-wrapper within .level1
            $(".site-navigation-wrapper .level2 .site-nav-expand").removeClass("site-nav-expand-active");
            $(".site-navigation-wrapper .level2 .site-subnav-wrapper").removeClass("site-subnav-wrapper-active");

            setTimeout(function() {
                // Toggle active classes for clicked nav expand and its subnav wrapper
                $clickedExpand.toggleClass("site-nav-expand-active", !isActive);
                $clickedSubnav.toggleClass("site-subnav-wrapper-active", !isActive);
            }, 100);

        }
    });

    // Handle clicks within .level3 separately
    $(".site-sidebar-menu .level3 .site-nav-expand").click(function(event) {
        var $clickedExpand = $(this);
        var $clickedSubnav = $clickedExpand.next(".site-subnav-wrapper");

        var isActive = $clickedExpand.hasClass("site-nav-expand-active");

        // Remove active classes from other .site-nav-expand and .site-subnav-wrapper within .level2
        $(".site-sidebar-menu .level3 .site-nav-expand").removeClass("site-nav-expand-active");
        $(".site-sidebar-menu .level3 .site-subnav-wrapper").removeClass("site-subnav-wrapper-active");

        setTimeout(function() {
            // Toggle active classes for clicked nav expand and its subnav wrapper
            $clickedExpand.toggleClass("site-nav-expand-active", !isActive);
            $clickedSubnav.toggleClass("site-subnav-wrapper-active", !isActive);
        }, 100);

        // Prevent the event from bubbling up to .level1
        event.stopPropagation();
    });

    // Prevent subnav wrapper from closing when clicked within .level1
    $(".level1 .site-subnav-wrapper").click(function(event) {
        event.stopPropagation();
    });

    // Prevent subnav wrapper from closing when clicked within .level2
    $(".level2 .site-subnav-wrapper").click(function(event) {
        event.stopPropagation();
    });



    // ----------------------------
    // Mobile Custom Menu Toggle
    // ----------------------------
    if ($(window).width() < 1000) {
        $(".site-toggle").click(function() {
            $(".site-toggle").toggleClass('active');

            if ($('.site-navigation-wrapper').hasClass("active")) {
                $(".site-navigation-wrapper").fadeOut();
                $(".site-navigation-wrapper").removeClass('active');
                $("body").css({
                    "overflow-y": "auto",
                    "overflow-x": "hidden"
                });
            } else {
                $(".site-navigation-wrapper").fadeIn();
                $(".site-navigation-wrapper").addClass('active');
                $("body").css("overflow", "hidden");
            }
        });
    }


    // ----------------------------
    // Desktop Custom Menu Toggle
    // ----------------------------
    if ($(window).width() > 1000) {
        $(".site-toggle").click(function() {
            if ($('.site-navigation-wrapper').hasClass("active")) {
                $(".site-navigation-wrapper").fadeOut();
                $(".site-navigation-wrapper").removeClass('active');
                $("body").css({
                    "overflow-y": "auto",
                    "overflow-x": "hidden"
                });
                $(".site-toggle").removeClass("active");
                $(".site-toggle").css("opacity", "0");
            }
        });
    }


    // ----------------------------
    // Sidebar Mobile Toggle
    // ----------------------------
    if ($(window).width() < 1000) {
        $(".custom-sidebar-wrapper .cms-feature-title").click(function() {
            $(".site-sidebar-menu").toggleClass("active");
        });
    }


    // --------------------------------
    // Change Search Placeholder Text
    // --------------------------------    
    if ($('body:not(.search-result-page)').length > 0) {
        $('.site-search-input').attr('placeholder', 'Search...');
    }


    // --------------------------------
    // iFrame Resize
    // --------------------------------
    $('.iframe-resize').on('load', function() {
        var iframe_height = this.contentDocument.body.scrollHeight
        this.style.height = iframe_height + 'px';
    });

    $(".iframe-resize-video").each(function() {
        $(this).wrapAll('<div class=iframe-resize-video-wrapper></div>');
    });


    // --------------------------------
    // Video & Popups
    // --------------------------------
    // Video Popup - mp4/vimeo/youtube
    $("a.video-popup-button, .video-gallery-popup .site-slide-link").click(function(event) {
        event.preventDefault();

        $(".video-popup-button").removeClass("video-popup-button-active");
        $(".video-popup-section").remove();

        $(this).addClass("video-popup-button-active");

        $('<div>', {
            id: 'video-popup-section',
            class: 'video-popup-section video-popup-wrapper video-popup-wrapper-active',
        }).insertAfter("#page-wrapper");

        $(".video-popup-section").append("<div class='video-popup'></div>");
        $(".video-popup").append("<div class='remove-video-popup'></div>");

        const videoUrl = $(this).attr('href');
        const videoId = getVideoIdFromURL(videoUrl);

        if (isVimeoVideo(videoUrl)) {
            const videoSrc = `https://player.vimeo.com/video/${videoId}?autoplay=1`;
            $('.video-popup-section .video-popup').append(`<iframe width="100%" height="500" src="${videoSrc}" frameborder="0" allow="autoplay" allowfullscreen></iframe>`);
        } else if (isYouTubeVideo(videoUrl)) {
            const videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            $('.video-popup-section .video-popup').append(`<iframe width="100%" height="500" src="${videoSrc}" frameborder="0" allow="autoplay" allowfullscreen></iframe>`);
        } else {
            $('.video-popup-section .video-popup').append(`
              <video width="100%" height="auto" controls autoplay>
                  <source src="${videoUrl}" type="video/mp4">
                  Your browser does not support the video tag.
              </video>
          `);
        }

        // Hide previous videos in dynamic-modal
        $('.dynamic-modal').removeClass('active-modal');
    });

    function getVideoIdFromURL(url) {
        const youtubeRegex = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/ ]{11})/;
        const vimeoRegex = /vimeo\.com\/(?:channels\/|groups\/[^\/]*\/videos\/|video\/|)([0-9]+)/;

        const youtubeMatch = url.match(youtubeRegex);
        const vimeoMatch = url.match(vimeoRegex);

        if (youtubeMatch) {
            return youtubeMatch[1];
        } else if (vimeoMatch) {
            return vimeoMatch[1];
        } else {
            return null;
        }
    }

    function isYouTubeVideo(url) {
        return /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)/.test(url);
    }

    function isVimeoVideo(url) {
        return /vimeo\.com/.test(url);
    }

    $(function() {
        $(document).on("click", '.remove-video-popup', function() {
            $(".video-popup-section .video-popup-wrapper").removeClass("video-popup-wrapper-active");
            $(".remove-video-popup").remove();
            $(".video-popup-section").remove();
        });
    });

    $(".custom-link-popup a.site-slide-link:not([target])").on('click', function(event) {
        custom_video_popup(event, $(this).attr('href'));
    });

    $(".custom-banner-popup").on('click', function(event) {
        custom_video_popup(event, $(this).attr('href'));
    });

    function custom_video_popup(event, href) {
        event.preventDefault();

        $(".video-popup-button").removeClass("video-popup-button-active");
        $(".video-popup-section").remove();

        $(this).addClass("video-popup-button-active");

        $('<div>', {
            id: 'video-popup-section',
            class: 'video-popup-section video-popup-wrapper video-popup-wrapper-active',
        }).insertAfter("#page-wrapper");

        $(".video-popup-section").append("<div class='video-popup'> </div>");
        $(".video-popup").append("<div class='remove-video-popup'> </div>");

        var video_id = '';
        if (href) {
            if (href.includes('youtube.com') || href.includes('youtu.be')) {
                video_id = href.includes('v=') ? href.split('v=')[1].split('&')[0] : href.split('/').slice(-1)[0];
                $('.video-popup-section .video-popup').append('<iframe width="100%" height="500" src="https://www.youtube.com/embed/' + video_id + '?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
            } else if (href.includes('vimeo.com')) {
                video_id = href.split('/').slice(-1)[0];
                $('.video-popup-section .video-popup').append('<iframe src="https://player.vimeo.com/video/' + video_id + '?autoplay=1" width="100%" height="500" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>');
            } else if (href.includes('.mp4')) {
                $('.video-popup-section .video-popup').append('<video width="100%" height="500" controls autoplay><source src="' + href + '" type="video/mp4">Your browser does not support the video tag.</video>');
            }
        } else {
            video_id = $(this).attr('href').split('/').slice(-1)[0];
            var ampersandPosition = video_id.indexOf('&');
            if (ampersandPosition !== -1) {
                video_id = video_id.substring(0, ampersandPosition);
            }
            $('.video-popup-section .video-popup').append('<iframe width="100%" height="500" src="https://www.youtube.com/embed/' + video_id + '?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
        }

        event.preventDefault();
    }



    // --------------------------------
    // Sitewide Popup
    // --------------------------------
    $(document).on("click", function(e) {
        if ($(e.target).closest(".site-opened-popup").length == 0) {
            $("body:not(.cms-page-is-in-edit-mode) .site-opened-popup-wrapper").hide();
        }
    });

    $('<div class="site-popup-close"></div>').prependTo('.site-opened-popup');
    $("body:not(.cms-page-is-in-edit-mode) .site-popup-close").click(function() {
        $(".site-opened-popup-wrapper").hide();
    });

    var popupInitialized = false; // Flag to track initialization

    function initializePopup() {
        // Check if initialization has already occurred
        if (popupInitialized) {
            return;
        }

        $.get("/site-wide-popup", function(data) {
            var $sidebarContent = $(data);
            var $popup = $sidebarContent.find('.site-wide-popup');

            // Wrap the popup in a div with class .popup-wrapper
            $popup.wrap('<div class="popup-wrapper"></div>');

            // Check if the close button is not already present within the site-opened-popup
            if ($popup.find('.site-popup-close').length === 0) {
                var $closeButton = $('<div class="site-popup-close"></div>');
                // Append the close button only within the site-opened-popup
                $popup.prepend($closeButton);
            }

            var $popupWrapper = $popup.parent('.popup-wrapper');

            // Check if the site-opened-popup has the class site-desktop-hide
            if ($popup.hasClass('site-desktop-hide')) {
                // Add the class hide-desktop to .popup-wrapper
                $popupWrapper.addClass('hide-desktop');
            }

            // Check if the site-opened-popup has the class site-mobile-hide
            if ($popup.hasClass('site-mobile-hide')) {
                // Add the class hide-mobile to .popup-wrapper
                $popupWrapper.addClass('hide-mobile');
            }

            if ($popup.length != 0) {
                $("#site-wide-popup").each(function() {
                    $(this).append($popupWrapper.clone());
                    $(this).removeClass("no-features");
                });
            }

            // Attach the click event handler only once
            $("body:not(.cms-page-is-in-edit-mode)").on("click", ".site-popup-close", function() {
                $(".popup-wrapper").hide();
            });

            // Set the flag to true to indicate initialization
            popupInitialized = true;
        });
    }

    // Call the function once to initialize the popup
    initializePopup();


    // ------------------------
    // Site table mobile stack
    // ------------------------
    function mobileTable() {
        $(function() {
            $(".site-table-mobile-stack").each(function(index) {
                var array = [];

                $(this)
                    .find("th")
                    .each(function(index) {
                        array.push($(this).text());
                    });

                $(this)
                    .find("tbody tr td")
                    .each(function(index, element) {
                        var $this = $(this);

                        $this.attr("data-label", array[$this.index()]);
                    });
            });
        });
    }
    mobileTable();


    // ------------------------
    // Embeded Video
    // ------------------------
    //Video Wrapper and Icon Append (Only inside text features)
    $('.cms-text-feature video').each(function() {
        var video = $(this);
        var playIcon = $('<img class="custom-play-icon" src="/Templates/RegentsAustin/images/play.svg">');
        video.wrap('<div class="custom-video"></div>');
        playIcon.insertAfter(video);
    });

    //Video/Play Icon Click handeler
    const customVideos = document.querySelectorAll('.custom-video');

    for (const customVideo of customVideos) {
        const video = customVideo.querySelector('video');
        const playIcon = customVideo.querySelector('.custom-play-icon');

        //Video Click
        const toggleVideo = () => {

            if (!video.controls) {
                video.controls = true;
                //console.log('controls enabled');
            } else {
                //console.log('controls already enabled');
            }

            // Play the video after it has finished loading
            video.addEventListener('loadedmetadata', () => {
                video.play();
            });
            playIcon.style.display = 'none';
        };

        //Icon Click
        const iconToggleVideo = () => {
            video.controls = true;
            video.play();
            playIcon.style.display = 'none';
        };

        video.addEventListener('click', toggleVideo);
        playIcon.addEventListener('click', iconToggleVideo);
    }



    // --------------------------------
    // Grid JS
    // --------------------------------
    $('.site-row-wrapper').each(function() {
        var $nextGroup = $(this).nextUntil('.site-row-wrapper').add(this);
        $nextGroup.add($nextGroup).wrapAll('<div class="site-row-container">');
    });

    $("body.cms-page-is-in-edit-mode #site-main-content-wrapper .site-row-container").each(function(i) {
        var $this = $(this);
        var $items = $this.find(".cms-feature-wrapper");
        var i = 0;

        $items.each(function(i) {
            $("<div class='site-feature-detail'><div class='site-feature-count'>No: " + ++i + "</div></div>").insertBefore($(this).find(".cms-feature-datablock"));
            return true;
        });
    });

    setTimeout(function() {
        $("body.cms-page-is-in-edit-mode #site-main-content-wrapper .cms-feature-wrapper").each(function(i) {
            if ($(this).hasClass("site-right-block-wrapper")) {
                $("<div class='site-feature-align'>Right block</div>").insertAfter($(this).find(".site-feature-count"));
            } else {
                $("<div class='site-feature-align'>Left block</div>").insertAfter($(this).find(".site-feature-count"));
            }

            if ($(this).hasClass("site-row-wrapper")) {
                $("<div class='site-feature-row'>Row</div>").insertAfter($(this).find(".site-feature-align"));
            }

        });
    }, 1000);

    if ($("body:not(.cms-page-is-in-edit-mode) .site-sidebar-menu").length) {
        $(".site-sidebar-menu").appendTo(".custom-sidebar");
    }

    setTimeout(function() {
        if ($("body.cms-page-is-in-edit-mode .site-sidebar-menu").length) {
            $(".site-sidebar-menu").appendTo(".custom-sidebar");
        }
    }, 1500);

    if ($("body:not(.cms-page-is-in-edit-mode) .site-display-operations").length) {
        $(".site-home-display-search-wrapper").appendTo(".site-display-operations");
    }

    var classNames = [];
    $('div[class*="site-row-block-"]').each(function(i, el) {
        var name = (el.className.match(/(^|\s)(site\-row\-block\-[^\s]*)/) || [, , ''])[2];

        var finalclass = name.split(/\s+/).filter(function(c) {
            return !c.includes('-wrapper');
        }).join(' ');

        if (finalclass) {
            classNames.push(finalclass);
            $(el).removeClass(finalclass);

            $(this).parents(".site-row-container").addClass(finalclass);
        }
    });


    // --------------------------------
    // Reorder Sidebar
    // --------------------------------
    function reorderSidebar() {
        if ($(window).width() <= 1000) { // Adjust the width as per your mobile breakpoint
            $('#site-main-content-wrapper').prepend($('.custom-sidebar-wrapper.site-right-block-wrapper'));
        }
    }

    reorderSidebar();

    $(window).resize(function() {
        reorderSidebar();
    });


    // --------------------------------
    // Unslick Sliders
    // --------------------------------
    if ($('.interests-gallery-wrapper .slick-slider').length > 0) {
        $('.interests-gallery-wrapper .slick-slider').slick('unslick');
    }

    if ($('.statistics-gallery-wrapper .slick-slider').length > 0) {
        $('.statistics-gallery-wrapper .slick-slider').slick('unslick');
    }

    if ($('.custom-tabbed-video-gallery-sml-wrapper .slick-slider').length > 0) {
        $('.custom-tabbed-video-gallery-sml-wrapper .slick-slider').slick('unslick');
    }

    $('.custom-tabbed-video-gallery-sml-wrapper').on('click', '.site-slide', function() {
        var slideIndex = $(this).index(); // Get the index of the clicked item
        $('.custom-tabbed-video-gallery-wrapper .slick-slider').slick('slickGoTo', slideIndex); // Navigate to the corresponding slide
    });


    if ($('.custom-hero-video-wrapper').length) {
        const playButton = $('<button>').addClass('mute-video');

        $('.custom-hero-video-wrapper').append(playButton);

        const iframe = $('.custom-hero-video-wrapper iframe')[0];
        const player = new Vimeo.Player(iframe);
        let isMuted = true;

        $('.mute-video').on('click', function() {
            if (isMuted) {
                player.setVolume(1);
            } else {
                player.setVolume(0);
            }

            isMuted = !isMuted;
            $(this).toggleClass('active', !isMuted);
        });
    }


    // --------------------------------
    // Footer Year
    // --------------------------------
    if ($("#current-year").length) {
        function getCopyrightYear() {
            return new Date().getFullYear();
        }

        const currentYearElement = document.getElementById('current-year');
        const copyrightYear = getCopyrightYear();
        currentYearElement.textContent = copyrightYear;
    }


    // --------------------------------
    // Tabbed Table
    // --------------------------------
    function tabbedTable() {
        if ($(".site-table-tabbed").length) {
            const table = document.querySelector('.site-table-tabbed');
            const headers = table.querySelectorAll('.site-table-tabbed thead th');
            const rows = table.querySelectorAll('.site-table-tabbed tbody tr');

            headers[0].classList.add('active');
            rows[0].classList.add('active');

            headers.forEach((header, index) => {
                header.addEventListener('click', function() {
                    headers.forEach(h => h.classList.remove('active'));
                    rows.forEach(row => row.classList.remove('active'));

                    header.classList.add('active');
                    rows[index].classList.add('active');
                });
            });
        }
    }
    tabbedTable();


    // --------------------------------
    // Statistics Mobile Gallery
    // --------------------------------
    if ($('.statistics-gallery-wrapper').length > 0 && $(window).width() < 1200 && !$('body').hasClass('cms-page-is-in-edit-mode')) {
        $(document).on('click', '.site-slider-caption', function() {
            const $clickedSlide = $(this).closest('.statistics-gallery-wrapper .site-slide');

            // Check if the clicked element is already active
            const isActive = $clickedSlide.hasClass('active');

            // Remove active class from all .site-slide elements
            $('.statistics-gallery-wrapper .site-slide').removeClass('active');

            // Toggle the active class on the clicked slide
            if (!isActive) {
                $clickedSlide.addClass('active');
            }
        });
    }



    // --------------------------------
    // Custom Hero Videos
    // --------------------------------
    if ($('.custom-hero-video-wrapper').length > 0 && !$('body').hasClass('cms-page-is-in-edit-mode')) {
        var $bannerWrapper = $('.site-hero-banner');
        var $galleryWrapper = $bannerWrapper.find('.cms-gallery-feature-wrapper');
        var $videoWrapper = $bannerWrapper.find('.custom-hero-video-wrapper');

        if ($galleryWrapper.length && $videoWrapper.length) {
            // Find the first .site-slide
            var $firstSlide = $galleryWrapper.find('.site-slide').first();

            // If it exists, move the .custom-hero-video-wrapper inside it
            if ($firstSlide.length) {
                $firstSlide.find('.site-slider-image-block, .site-slider-video-block').remove();
                $videoWrapper.prependTo($firstSlide);
                //  console.log('Video wrapper moved.');
            } else {
                //  console.log('.site-slide not found inside .custom-hero-gallery-wrapper');
            }
        } else {
            //  console.log('Elements not found in .custom-hero-banner-wrapper');
        }

        $('.site-hero-banner .cms-gallery-feature-wrapper').each(function() {
            var $wrapper = $(this);
            var $videoElement = $wrapper.find('video, iframe[src*="vimeo.com"]');

            if ($videoElement.length) {
                if ($videoElement.is('video')) {
                    var video = $videoElement[0];

                    // Set attributes
                    video.autoplay = true;
                    video.loop = true;
                    video.muted = true; // autoplay may require muted

                    // Play the video
                    var playPromise = video.play();
                    if (playPromise !== undefined) {
                        playPromise.then(_ => {
                            updateButtonState(true);
                        }).catch(error => {
                            console.log("Autoplay was prevented:", error);
                            updateButtonState(false);
                        });
                    }

                    $button.on('click', function() {
                        if (video.paused) {
                            video.play().then(() => updateButtonState(true)).catch(console.log);
                        } else {
                            video.pause();
                            updateButtonState(false);
                        }
                    });

                    // Listen for play and pause events
                    video.addEventListener('play', function() {
                        updateButtonState(true);
                    });
                    video.addEventListener('pause', function() {
                        updateButtonState(false);
                    });

                } else if ($videoElement.is('iframe')) {
                    var $iframe = $videoElement;
                    var currentSrc = $iframe.attr('src');

                    // Parse the current URL
                    var urlParts = currentSrc.split('?');
                    var baseUrl = urlParts[0];
                    var queryParams = new URLSearchParams(urlParts[1] || '');

                    // Extract video ID
                    var videoId = baseUrl.match(/video\/(\d+)/)[1];

                    // Set parameters
                    queryParams.set('autoplay', '1');
                    queryParams.set('loop', '1');
                    queryParams.set('background', '1');
                    queryParams.set('autopause', '0');
                    queryParams.set('badge', '0');
                    queryParams.set('muted', '1');

                    // New src
                    var newSrc = baseUrl + '?' + queryParams.toString();

                    // Update iframe src
                    $iframe.attr('src', newSrc);

                    // Set attributes
                    $iframe.attr({
                        'allow': 'autoplay; fullscreen; picture-in-picture',
                        'allowfullscreen': '',
                        'frameborder': '0'
                    });
                }
            }
        });
    }


    // --------------------------------
    // Custom Hide Slick Dots
    // --------------------------------
    $('.slick-slider').each(function() {
        if ($(this).find('.site-slide').length === 1) {
            $(this).find('.slick-dots').hide(); // Hide the dots
        }
    });


    // --------------------------------
    // Custom Filter Gallery
    // --------------------------------
    if ($('.custom-filtered-tabs-wrapper').length > 0 && !$('body').hasClass('cms-page-is-in-edit-mode')) {
        // Prepend the filter buttons container to the slider's parent
        $('.custom-filtered-tabs-wrapper').before('<div class="custom-filter-buttons animate-element"></div>');

        const categories = new Set();

        // Extract unique categories from the slides
        $('.custom-filtered-tabs-wrapper .site-slider-more-desc-data').each(function() {
            categories.add($(this).text().trim());
        });

        // Add filter buttons for each category
        categories.forEach(category => {
            $('.custom-filter-buttons').append(
                `<button class="filter-btn" data-filter="${category}">${category}</button>`
            );
        });

        // Set default filter (first button)
        const firstFilterBtn = $('.custom-filter-buttons .filter-btn').first();
        firstFilterBtn.addClass('active'); // Optional: Add an active class for styling
        const defaultFilter = firstFilterBtn.data('filter');

        // Apply default filter on load
        if (defaultFilter !== 'all') {
            $('.custom-filtered-tabs-wrapper .slick-slider').slick('slickFilter', function() {
                const slideCategory = $(this).find('.site-slider-more-desc-data').text().trim();
                return slideCategory === defaultFilter;
            });
        }

        // Filter functionality
        $(document).on('click', '.filter-btn', function() {
            const filter = $(this).data('filter');

            // Reset the slider to show all slides
            $('.custom-filtered-tabs-wrapper .slick-slider').slick('slickUnfilter');

            // Remove active class from all buttons and add it to the clicked button
            $('.filter-btn').removeClass('active');
            $(this).addClass('active');

            if (filter !== 'all') {
                // Filter slides by category
                $('.custom-filtered-tabs-wrapper .slick-slider').slick('slickFilter', function() {
                    const slideCategory = $(this).find('.site-slider-more-desc-data').text().trim();
                    return slideCategory === filter;
                });
            }
        });
    }



    // --------------------------------------------
    // Force Interests Gallery to bottom on mobile
    // --------------------------------------------
    function moveInterestsGallery() {
        var $interestsHeader = $(".interested-in-wrapper");
        var $interestsGallery = $(".interests-gallery-wrapper");
        var $footer = $("#site-main-content-wrapper");

        if ($(window).width() < 600 && $interestsGallery.length && $interestsHeader.length) {
            $interestsHeader.detach().appendTo($footer);
            $interestsGallery.detach().appendTo($footer);
        }
    }

    // Initial check on page load
    moveInterestsGallery();

    // Optional: Recheck on window resize
    $(window).resize(function() {
        moveInterestsGallery();
    });



    // --------------------------------
    // Interactive Map
    // --------------------------------
    if ($('.interactive-map-wrapper').length > 0) {
        function applyFilter(point) {
            $(".map-point").each(function() {
                const points = $(this).data("categories").split(",");
                if (point === "all" || points.includes(point)) {
                    $(this).css("opacity", "1");
                    $(this).css("z-index", "6");
                } else {
                    $(this).css("opacity", "0");
                    $(this).css("z-index", "initial");
                }
            });
        }

        // Handle Point Clicks
        $(".interactive-map-wrapper .map-point").on("click", function() {
            const url = $(this).data("url");
            if (url) window.open(url, "_blank");
        });

        // Handle Filter Button Clicks
        $(".interactive-map-wrapper .custom-map-filter-buttons button").on("click", function(e) {
            e.preventDefault();
            const pointFilter = $(this).data("filters");
            applyFilter(pointFilter);

            // Update Active Button State
            $(".interactive-map-wrapper .custom-map-filter-buttons button").removeClass("active");
            $(this).addClass("active");
        });

        // Handle Tooltip on hover
        if ($(window).width() > 1200) {
            $(".interactive-map-wrapper .map-point").on("mouseenter", function(e) {
                const $this = $(this);
                const tooltipText = $this.data("name");

                // Check if opacity is 1
                if (tooltipText && $this.css("opacity") == 1) {
                    const $tooltip = $("<div class='map-tooltip'></div>").text(tooltipText);
                    $("body").append($tooltip);
                    $tooltip.css({
                        top: e.pageY - 10 + "px", // Offset from cursor
                        left: e.pageX + 10 + "px",
                        position: "absolute",
                        zIndex: 1000
                    }).fadeIn(200);
                }
            }).on("mousemove", function(e) {
                $(".map-tooltip").css({
                    top: e.pageY + 10 + "px",
                    left: e.pageX + 10 + "px"
                });
            }).on("mouseleave", function() {
                $(".map-tooltip").remove();
            });
        }

        // Initialize Default Filter
        applyFilter("all");
        $(".interactive-map-wrapper .custom-map-filter-buttons button[data-filters='all']").addClass("active");
    }


    // --------------------------------
    // Hide in Menu
    // --------------------------------
    // Always hide the first parent arrow
    $(".site-sidebar-menu .site-nav-block .site-nav-active-path .site-nav-link").hide();
    $(".site-sidebar-menu .site-nav-block .site-nav-active-path .site-nav-linktext").hide();


    // --------------------------------
    // Custom Slider With Arrow Button
    // --------------------------------
    $('.cta-arrow-wrapper .site-slide .site-slider-caption').each(function() {
        var $arrowBtn = $(this).find('a.arrow-btn');

        if ($arrowBtn.length) {
            var $newButton = $arrowBtn.clone();
            $('.cta-arrow-wrapper .slick-current').append($newButton);
        }
    });


    // -----------------------------------
    // Menu Click Reflected in Large Menu
    // -----------------------------------
    if ($(window).width() > 1000 && !$('body').hasClass('cms-page-is-in-edit-mode')) {
        $(".site-menu-wrapper .site-nav-link").on("click", function(e) {
            e.preventDefault();

            // Get the text of the clicked menu item
            var clickedText = $(this).text().trim();

            // Remove active class from all items in the second menu
            $(".site-navigation-wrapper #site-navigation .site-nav-item .site-nav-link").removeClass("active");

            // Find the matching menu item in the second menu and add active class
            $(".site-navigation-wrapper #site-navigation .site-nav-item .site-nav-link").each(function() {
                if ($(this).text().trim() === clickedText) {
                    $(this).addClass("active");
                }
            });
        });
    }


    // --------------------------------
    // Register Plugins
    // --------------------------------
    gsap.registerPlugin(ScrollTrigger);


    // --------------------------------
    // Header on Scroll Animation
    // --------------------------------
    if ($('.site-header').length > 0 && $(window).width() > 1000 && !$('body').hasClass('cms-page-is-in-edit-mode')) {
        ScrollTrigger.create({
            trigger: ".site-header",
            start: "top top", // When the top of .site-header hits the top of the viewport
            end: "+=100", // Adjust the end based on when you want the header to stay fixed
            onEnter: () => {
                document.querySelector(".site-header").classList.add("fixed");
            },
            onLeaveBack: () => {
                document.querySelector(".site-header").classList.remove("fixed");
            }
        });
    }


    // --------------------------------
    // General Transitions
    // --------------------------------
    if (!$('body').hasClass('cms-page-is-in-edit-mode') && $('.animate-element').length > 0) {
        // Animate each element with the class .animate-element
        gsap.utils.toArray('.animate-element').forEach(element => {
            gsap.fromTo(element, {
                    opacity: 0,
                    y: 50
                }, // Starting state: hidden, slightly down
                {
                    opacity: 1,
                    y: 0,
                    scrollTrigger: {
                        trigger: element,
                        start: "top 85%", // Triggers animation when top of element is in viewport (80% down the page)
                        toggleActions: "play none none none", // Play animation once
                        markers: false, // Set to true to see ScrollTrigger markers
                    },
                    duration: .5, // Duration of the animation
                    ease: "power1.inOut" // Smooth easing effect
                }
            );
        });
    }

});