//THIS JAVASCRIPT IS ALWAYS AVAILABLE In all places of the solution, use it to store common functions.


//Escape jquery selector especial characters
function escapeJquerySelector(selector) {
    return selector.replace(/[!"#$%&'()*+,.\/:;<=>?@[\\\]^`{|}~]/g, "\\\\$&");
}
//Get Parameters from query string
function getUrlParam(paramName) {
    var reParam = new RegExp('(?:[\?&]|&)' + paramName + '=([^&]+)', 'i');
    var match = window.location.search.match(reParam);

    return (match && match.length > 1) ? decodeURIComponent(match[1]) : null;
}

//Modify an specific parameter from a query string without reloading the page
function updateQueryStringParameterWithoutReloading(parameterKey, parameterValue) {
    const url = new URL(window.location.href);
    url.searchParams.set(parameterKey, parameterValue);
    window.history.pushState(null, '', url.toString());
}

//Clears the query string of a URL without reloading the Page
function clearQueryStringWithoutReloading() {
    let url = new URL(window.location.href);
    history.pushState({}, null, url.pathname);
}

//Functions to add and Remove Items from Comma Separated Lists
function addItemToList(stringList, item) {

    if (!stringList) {
        stringList = "," + item + ",";
    } else {
        stringList = stringList + item + ",";
    }

    return stringList;
}

function removeItemFromList(stringList, item) {
    if (stringList) {
        stringList = stringList.replace("," + item + ",", ",");
    }

    return stringList;
}

function scrollToAnchor(name) {
    var aTag = $("[name='" + name + "']");
    $('html,body').scrollTop(aTag.offset().top);
}

function addPageToBookmarks(pageId, pageURL, imagePath, pageTitle, pageDescription) {
    if (!pageIsAlreadyBookmarked(pageId)) {
        window.AMAIS = new AMAIS();
        if (bookmarksAreEmpty()) {
            window.AMAIS.setCookie("amais_bookmarks", "|" + pageId + "|", 365);
        } else {
            var bookmarks = window.AMAIS.getCookie("amais_bookmarks") + pageId + "|";
            window.AMAIS.setCookie("amais_bookmarks", bookmarks, 365);
        }

        $(document).trigger("amais:bookmark:added", {
            url: pageURL,
            pageId: pageId,
            imagePath: imagePath,
            pageTitle: pageTitle,
            pageDescription: pageDescription
        });
    }
}

function removePageFromBookmark(pageId, pageURL) {
    if (!bookmarksAreEmpty()) {
        window.AMAIS = new AMAIS();
        var bookmarks = window.AMAIS.getCookie("amais_bookmarks");
        bookmarks = bookmarks.replace('|' + pageId, "").replace('%7C' + pageId, "");

        window.AMAIS.setCookie("amais_bookmarks", bookmarks, 365);

        $(document).trigger("amais:bookmark:removed", {
            url: pageURL,
            pageId: pageId
        });
    }
}

$(document).on("amais:bookmark:added", function(event, data) {
    //If the current page has an individual bookmark button with a matching ID we make the Remove button visible, and  we hide the Add button
    if ($('.site-bookmark-single-button-add-' + data.pageId)) {
        $('.site-bookmark-single-button-add-' + data.pageId).hide();
        $('.site-bookmark-single-button-remove-' + data.pageId).show();
        $('.site-bookmark-single-button-add-' + data.pageId).addClass("site-bookmark-single-button-hide");
        $('.site-bookmark-single-button-add-' + data.pageId).removeClass("site-bookmark-single-button-show");
        $('.site-bookmark-single-button-remove-' + data.pageId).addClass("site-bookmark-single-button-show");
        $('.site-bookmark-single-button-remove-' + data.pageId).removeClass("site-bookmark-single-button-hide");

    }

    //If the current page has a display feature with an element that matches the bookmark page ID we show the remove button and hide the add button
    if ($('.site-bookmark-display-button-add-' + data.pageId)) {
        $('.site-bookmark-display-button-add-' + data.pageId).hide();
        $('.site-bookmark-display-button-remove-' + data.pageId).show();
        $('.site-bookmark-display-button-add-' + data.pageId).addClass("site-bookmark-display-button-hide");
        $('.site-bookmark-display-button-add-' + data.pageId).removeClass("site-bookmark-display-button-show");
        $('.site-bookmark-display-button-remove-' + data.pageId).addClass("site-bookmark-display-button-show");
        $('.site-bookmark-display-button-remove-' + data.pageId).removeClass("site-bookmark-display-button-hide");
    }
    //If there is a bookmark component and the page/post to be added matches the ID we need to add the bookmark html element
    if ($('.site-bookmark-list')) {

        //First we build the HTML of the bookmark Element
        var htmlBookmarkElement = '<div class="site-bookmark-wrapper-listitem site-bookmark-wrapper-listitem-' + data.pageId + '">';
        htmlBookmarkElement = htmlBookmarkElement + '<div class="site-bookmark-list-block">';
        htmlBookmarkElement = htmlBookmarkElement + '<div class="site-bookmark-image">';
        htmlBookmarkElement = htmlBookmarkElement + '<a href="' + data.url + '" class="site-bookmark-image-link">';
        htmlBookmarkElement = htmlBookmarkElement + '<img src="' + data.imagePath + '" title="' + data.pageTitle + '" />';
        htmlBookmarkElement = htmlBookmarkElement + '</a>';
        htmlBookmarkElement = htmlBookmarkElement + '</div>';
        htmlBookmarkElement = htmlBookmarkElement + '<div class="site-bookmark-data-block">';
        htmlBookmarkElement = htmlBookmarkElement + '<div class="site-bookmark-title">';
        htmlBookmarkElement = htmlBookmarkElement + '<a href="' + data.url + '">' + data.pageTitle + '</a>';
        htmlBookmarkElement = htmlBookmarkElement + '</div>';

        if ($('.site-bookmark-list').hasClass('bookmark-descriptions-enabled')) {
            htmlBookmarkElement = htmlBookmarkElement + '<div class="site-bookmark-description">' + data.pageDescription + '</div>';
        }
        htmlBookmarkElement = htmlBookmarkElement + '</div>';
        htmlBookmarkElement = htmlBookmarkElement + '</div>';
        htmlBookmarkElement = htmlBookmarkElement + '<button class="site-bookmark-remove-button" onclick="event.preventDefault();removePageFromBookmark(' + data.pageId + ',$(location).attr(\'href\'));" title="Remove Bookmark">Remove Bookmark</button>';
        htmlBookmarkElement = htmlBookmarkElement + '</div>';

        //Then We add it to the bookmarks component
        $('.site-bookmark-list').append(htmlBookmarkElement);
    }

    calculateBookmarkCounter();
});

$(document).on("amais:bookmark:removed", function(event, data) {
    //If the current page has an individual bookmark button with a matching ID we make the Add button visible, and  we hide the Remove button
    if ($('.site-bookmark-single-button-add-' + data.pageId)) {
        $('.site-bookmark-single-button-add-' + data.pageId).show();
        $('.site-bookmark-single-button-remove-' + data.pageId).hide();
        $('.site-bookmark-single-button-add-' + data.pageId).addClass("site-bookmark-single-button-show");
        $('.site-bookmark-single-button-add-' + data.pageId).removeClass("site-bookmark-single-button-hide");
        $('.site-bookmark-single-button-remove-' + data.pageId).addClass("site-bookmark-single-button-hide");
        $('.site-bookmark-single-button-remove-' + data.pageId).removeClass("site-bookmark-single-button-show");
    }

    //If the current page has a display feature with an element that matches the bookmark page ID we make the Add button visible, and  we hide the Remove button
    if ($('.site-bookmark-display-button-add-' + data.pageId)) {
        $('.site-bookmark-display-button-add-' + data.pageId).show();
        $('.site-bookmark-display-button-remove-' + data.pageId).hide();
        $('.site-bookmark-display-button-add-' + data.pageId).addClass("site-bookmark-display-button-show");
        $('.site-bookmark-display-button-add-' + data.pageId).removeClass("site-bookmark-display-button-hide");
        $('.site-bookmark-display-button-remove-' + data.pageId).addClass("site-bookmark-display-button-hide");
        $('.site-bookmark-display-button-remove-' + data.pageId).removeClass("site-bookmark-display-button-show");
    }

    //If there is a bookmark component and the page/post to be remove matches the ID we need to remove the bookmark element
    if ($('.site-bookmark-wrapper-listitem-' + data.pageId)) {
        $('.site-bookmark-wrapper-listitem-' + data.pageId).remove();
    }

    calculateBookmarkCounter();

});

function pageIsAlreadyBookmarked(pageId) {
    window.AMAIS = new AMAIS();
    var bookmarks = window.AMAIS.getCookie("amais_bookmarks");
    var pageIdString = '|' + pageId + '|';
    var pageIdStringEscaped = '%7C' + pageId + '%7C';
    var pageIdStringEscapedFirst = '%7C' + pageId + '|';
    var pageIdStringEscapedLast = '|' + pageId + '%7C';
    if (bookmarksAreEmpty())
        return false;
    else
        return bookmarks.indexOf(pageIdString) != -1 || bookmarks.indexOf(pageIdStringEscaped) != -1 || bookmarks.indexOf(pageIdStringEscapedFirst) != -1 || bookmarks.indexOf(pageIdStringEscapedLast) != -1;
}

function bookmarksAreEmpty() {
    window.AMAIS = new AMAIS();
    var bookmarks = window.AMAIS.getCookie("amais_bookmarks");

    if (bookmarks)
        return false;
    else
        return true;
}

function calculateBookmarkCounter() {
    if ($(".site-bookmark-wrapper .site-bookmark-wrapper-listitem").length) {
        $(".site-bookmark-icon").html('');
        $(".site-bookmark-icon").html('<div class="site-bookmark-count" title="Total bookmarks">' + $(".site-bookmark-wrapper .site-bookmark-wrapper-listitem").length + '</div>');
    }
}

// Count bookmar number
$(function() {
    calculateBookmarkCounter();

    if ($(window).width() < 1001) {
        $(".site-bookmark-icon").on("click", function() {
            $(".site-bookmark-list-wrapper").addClass("site-bookmark-list-popup")

            $(".site-bookmark-list-close").remove();

            var iDiv = document.createElement('div');
            iDiv.className = 'site-bookmark-list-close';
            iDiv.onclick = function() {
                $(".site-bookmark-list-wrapper").removeClass("site-bookmark-list-popup")
            };

            $(".site-bookmark-list-popup").append(iDiv);

        });
    }
});

class AMAIS {

    constructor() {}

    getCookie = function(name) {
        var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        if (match) return match[2];
        else null;
    }

    setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    reloadPage = function() {
        setTimeout(() => {
            document.location.reload(true);
        }, 100);
        return false;
    }
}

window.AMAIS = new AMAIS();
var initialUserCookie = window.AMAIS.getCookie(".AspNetCore.Cookies");

$(document).ajaxSend(function(event, request, settings) {
    var cookie = window.AMAIS.getCookie(".AspNetCore.Cookies");
    if (cookie == null && initialUserCookie) {
        request.abort();
    }
});

$(document).ajaxError(function(event, request, settings) {
    var cookie = window.AMAIS.getCookie(".AspNetCore.Cookies");
    if (cookie == null && initialUserCookie) {
        window.location.href = "/admin/account/signout"
    }
});

$(function() {
    // For Profile Dropdown Show 
    $(".header-profile .icon-logout-user").on("click", function() {
        $(".profile-dropdown").slideDown();
        $(".profile-dropdown").addClass("active-profile-dropdown");
    });

    // For Profile Dropdown Hide 
    $(".profile-dd-close").on("click", function() {
        $(".profile-dropdown").slideUp();
        $(".profile-dropdown").removeClass("active-profile-dropdown");
    });

    if ($(".alert-message").length > 0) {
        //console.log("Alrert msg came");

        setTimeout(function() {
            $(".alert-message").fadeOut("slow, swing");
        }, 10000)

    } else {
        //console.log("Alret is not loading");
    }

    $(".alert-close").on("click", function() {
        $(".alert-message").fadeOut("slow, swing");
    });

    $('form').on("submit", function(e) {
        var cookie = window.AMAIS.getCookie(".AspNetCore.Cookies");
        if (cookie == null && initialUserCookie) {
            e.preventDefault(); // cancel the actual submit
            window.location.href = "/admin/account/signout"
        }
    });
});

$.fn.removeClassPrefix = function(prefix) {
    this.each(function(i, it) {
        var classes = it.className.split(" ").map(function(item) {
            return item.indexOf(prefix) === 0 ? "" : item;
        });
        it.className = classes.join(" ");
    });

    return this;
};