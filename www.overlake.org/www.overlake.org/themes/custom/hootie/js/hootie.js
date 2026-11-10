/* eslint-disable prettier/prettier */
/* MENU TOGGLE */

(function($, Drupal, drupalSettings, _, once) {

    let mobile = $(window).width() < 480;
    let front = drupalSettings.path.isFront;

    let navClosedPosition = !mobile && !front ? '-519px' : '-352px';
    let navOpenPosition = 0;
    let navOpen = false;

    // fix for d2d flyout transition blip on front page load
    $(window).on('load', function() {
        $("body").removeClass("preload");
    });

    Drupal.behaviors.menuToggle = {
        attach: function(context, settings) {
            $('.navigation h2', context).click(function() {
                let menuBlock = $(this).parent();
                menuBlock.siblings().children('.menu:visible').each(function() {
                    $(this).slideToggle();
                });
                menuBlock.children('.menu').slideToggle();
            });
        }
    };

    $('.login-link').click(function() {
        location.href = "/myoverlake"
    });

    $('#flyouts li').click(function(e) {
        $('#sidenav-content .block').hide();
        switch ($(e.target).attr('class')) {
            case 'flyout-menu':
                $('#block-mobile-search,.block-menu,#block-myoverlake,#block-quicklinks,#block-alumniportallink').show();
                break;
            case 'flyout-search':
                $('#block-searchfaq,#block-hootie-search').show();
                break;
            case 'flyout-events':
                $('#block-veracross-upcoming-events-community-highlights,#block-slider-news,#block-owlsnightoutnewseventsbanner').show();
                // $('#block-veracross-upcoming-events-community-highlights,#block-slider-news,#block-owlsnightoutnewseventsbanner,#block-coronavirusnewseventsbanner').show();
                break;
            default:
                // Do nothing
                return;
        }
        if (!navOpen) {
            slideSideNav();
        }
    });

    $('#flyout-d2d div').hover(
        function() {
            $(this).addClass('open')
        },
        function() {
            $(this).removeClass('open')
        }
    );

    // temporary fix for Firefox not hovering before loading on mobile
    $('#flyout-d2d div').click((e) => {
        e.preventDefault();
        $(this).addClass('open'),
            setTimeout(function() {
                window.location.href = "/support/discovery";
            }, 500);
        $(this).removeClass('open');
    });

    $('#flyout-covid div').hover(
        function() {
            $(this).addClass('open')
        },
        function() {
            $(this).removeClass('open')
        }
    );

    // temporary fix for Firefox not hovering before loading on mobile
    $('#flyout-covid div').click((e) => {
        e.preventDefault();
        $(this).addClass('open'),
            setTimeout(function() {
                window.location.href = '/welcome';
            }, 500);
        $(this).removeClass('open');
    });

    $('body').click(function(e) {
        $target = $(e.target);
        if ($(e.target).closest('#sidenav').length === 0 && navOpen) {
            slideSideNav()
        }
    });

    $('#nav-close').click(function() {
        slideSideNav();
    });

    $('.main-menu a, #sidenav-content a').click(function(e) {

        if (!$(this).attr('href')) {
            e.preventDefault();
            $(this).siblings('ul').slideToggle();
            e.stopPropagation();
        }
    });

    function slideSideNav() {
        if (navOpen) {
            $('.layout-sidenav').animate({
                'margin-right': navClosedPosition
            }, function() {
                $('#sidenav-content .block').hide();
                $('.container')
                    .css('top', 0)
                    .css('position', 'relative');
                $(window).scrollTop(drupalSettings.hootie.scrollTop);
            });
            navOpen = false;
        } else {
            let $container = $('.container');
            drupalSettings.hootie.scrollTop = $(window).scrollTop();
            $('.container')
                .css('position', 'fixed')
                .css('top', -drupalSettings.hootie.scrollTop);
            $(window).scrollTop(0);
            $('.layout-sidenav').animate({
                'margin-right': navOpenPosition
            });
            navOpen = true;
        }
    }

    /* Accordions */
    Drupal.behaviors.toggle = {
        attach: function(context, settings) {
            $(context).find('.toggle-trigger').click(function() {
                $(this).nextAll('.toggle-target').toggleClass("open");
                $(this).toggleClass("active");
            });
            $(context).find('.toggle-trigger').keypress(function(e) {
                if (e.keyCode === 13 || e.keyCode === 32) {
                    $(this).find('.toggle-target').toggleClass("open");
                    $(this).toggleClass("active");
                }
            });
        }
    }

    Drupal.behaviors.hootie_klaro = {
        attach: function(context, settings) {
            once('hootie_klaro', '.klaro .context-notice .cm-dialog-link a', context).forEach(function(element) {
                element.textContent = Drupal.t('Manage Cookie Preferences');
            });
        }
    };

})(jQuery, Drupal, drupalSettings, _, once);


document.addEventListener('DOMContentLoaded', function() {
    const activeSidebars = document.querySelectorAll(
        '.main-menu .block-menu',
    );

    activeSidebars.forEach(function(sidebar) {
        const activeLinks = sidebar.querySelectorAll('a.is-active');

        // Check if there are no active links in this sidebar
        if (activeLinks.length === 0) {
            // Remove the "active" class from the sidebar
            sidebar.classList.remove('active');
        } else {
            // Make sure active class is added to menu.
            sidebar.classList.add('active');
            // If there are active links, make sure the parent UL is displayed
            activeLinks.forEach(function(link) {
                const parentUl = link.parentElement.parentElement;

                if (parentUl && parentUl.tagName === 'UL') {
                    parentUl.style.display = 'block';
                }
            });
        }
    });
});


(function($, Drupal) {
    Drupal.behaviors.addDefaultGradeFilter = {
        attach: function(context, settings) {
            const currentPath = window.location.pathname;
            const params = new URLSearchParams(window.location.search);

            // Target only the /about/news path
            if (currentPath === '/about/news' && !params.has('field_grade_level_target_id')) {
                params.set('field_grade_level_target_id', 'All');
                const newUrl = `${currentPath}?${params.toString()}`;
                window.location.replace(newUrl);
            }

        }
    };
})(jQuery, Drupal);