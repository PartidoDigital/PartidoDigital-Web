$(function () {
    $('.accordion .collapse').on('show.bs.collapse', function (e) {
        var target =  $(e.target);
        target.find('.iframe-wrapper').append($('<iframe />').attr({src: target.data('url')}))
    });
});