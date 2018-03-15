/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/*jslint devel: true */
/*jslint browser: true*/
/*global $, jQuery, alert*/

function switchChannel(e, channelName) {
    "use strict";
    console.log('Tuning into channel', channelName);

    //Change Channel Name
    $('#chat_h1').html(channelName);
    $('#chat h1 strong').html('<a href="https://map.what3words.com/upgrading.never.helps" target="_blank">upgrading.never.helps</a>');

    //Change Star Picture to current Status
    $('#chat_img').attr("src", $(e.target).find('img').attr("src"));

    var Attr = $(e.target).attr('class');
    if (Attr === undefined || Attr === "") {
        $('#channels').find('.selected').removeClass('selected');
        $(e.target).addClass('selected');
    }

}

function ChangeFavoriteAppBar() {
    "use strict";
    console.log('Changing Favorite');
    if ($('#chat_img').attr("src") === "http://ip.lfe.mw.tum.de/sections/star.png") {
        $('#chat_img').attr("src", "http://ip.lfe.mw.tum.de/sections/star-o.png");
        $('#channels').find('.selected').find('.star').attr("src", "http://ip.lfe.mw.tum.de/sections/star-o.png");
    } else {
        $('#chat_img').attr("src", "http://ip.lfe.mw.tum.de/sections/star.png");
        $('#channels').find('.selected').find('.star').attr("src", "http://ip.lfe.mw.tum.de/sections/star.png");
    }
}

function ChangeFavoriteChannel(e) {
    "use strict";
    console.log('Changing Favorite');
    e.stopPropagation();
    if ($(e.target).attr("src") === "http://ip.lfe.mw.tum.de/sections/star.png") {
        $(e.target).attr("src", "http://ip.lfe.mw.tum.de/sections/star-o.png");
        if ($(e.target).parent().parent()[0].className === 'selected') {
            $('#chat_img').attr("src", "http://ip.lfe.mw.tum.de/sections/star-o.png");
        }
    } else {
        $(e.target).attr("src", "http://ip.lfe.mw.tum.de/sections/star.png");
        if ($(e.target).parent().parent()[0].className === 'selected') {
            $('#chat_img').attr("src", "http://ip.lfe.mw.tum.de/sections/star.png");
        }
    }
}

function selectTab(e, tabId) {
    "use strict";
    console.log('Switching to tab ', tabId);
    
    //Remove Class selected from all and add it to target
    $('#tab-bar').find('.selected').removeClass('selected');
    $(e.target).toggleClass('selected');
}

function ToggleSmiley(e) {
    "use strict";
    $('#emojis').toggle();
}
