/*
 * ImageInfo
 * Author: Lawrence L.
 * Version: 1.3
 *
 * Usage: <img src="https://www.google.com.hk/images/srpr/logo4w.png" class="ui-imginfo" title="Show me when mouseover" width="250px">
 * Js call: $('.ui-imginfo').imageInfo({style: 'margin-bottom: 10px;'});
 * CSS: .ui-imginfo-wrap{margin:10px;position:relative;float:left}.ui-imginfo-wrap .mask{background:rgba(199,209,180,0.61);height:auto;color:#F30;width:100%;display:none;position:absolute;bottom:0;font-weight:bold;font-size:16px;z-index:1}.ui-imginfo-wrap .mask>div{padding:5px}
 *
 * */
( function ($) {

    $.fn.imageInfo = function (o) {
        var defaults = {
            style: '',
            speed: 500
        };
        var opts = $.extend({}, defaults, o);

        return this.each(function () {
            $(this).imagesLoaded(function () {
                var title = $(this).attr('title');
                var width = $(this).width();
                var imgwidth = $(this).width() - parseInt($(this).css('marginRight').replace('px', ''));
                var bottom = parseInt($(this).css('marginBottom').replace('px', ''));
                var uiWrapH = $(this).height();
                $(this).removeAttr('title');
                $(this).wrap('<div class="ui-imginfo-wrap" style="height: ' + uiWrapH + 'px;' + opts.style + '"></div>');

                $(this).before('<div class="mask" style="width: ' + width + 'px;"><div>' + title + '</div></div>');

                var wrapper = $(this).closest('.ui-imginfo-wrap');
                wrapper.hover(function () {
                        wrapper.children('.mask').stop().fadeTo(opts.speed, 1);
                    },

                    function () {
                        wrapper.children('.mask').stop().fadeOut(opts.speed);
                    });
            });
        });
    };

})(jQuery);