$(function () {
    $('.accordion .collapse').on('show.bs.collapse', function (e) {
        var target =  $(e.target);
        if(target.find('.iframe-wrapper iframe').length === 0) {
            target.find('.iframe-wrapper').append($('<iframe />').attr({src: target.data('url')}))
        }
    });
});