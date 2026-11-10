//--------------------------------------------------------//
//--- Search Component Functions-----------------------------//
function onSearchTermPressEnter(e, sender, url) {
    if (e.keyCode == 13) {
        onSearchTerm(sender, url);
    }
};

function onSearchTerm(sender, url) {
    var searchTerm = encodeURIComponent($(sender).parent('.site-search-data').find('input[type=text].site-search-input').val());
    var $button = $(sender).parent('.site-search-data').find('button.site-search-button');
    if ($button.length === 0 || $button.prop('disabled')) return;

    $button.prop('disabled', true);

    var $overlay = $('<div id="search-loading-overlay" style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.7);z-index:999999999;display:flex;align-items:center;justify-content:center;"><img src="/img/AssetManager/loading.gif" width="100" height="100" /></div>');
    $('body').append($overlay);

    window.location.href = url + searchTerm;
};