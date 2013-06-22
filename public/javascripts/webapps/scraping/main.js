$(function() {
    var filter = document.createElement('div');
    filter.className = 'filter';
    $('.dialog').prepend(filter);

    $(document).on('click', '.button-dialog', function(e) {
        e.preventDefault();
        var dialogName = $(this).attr('data-dialog-name');
        $('[data-dialog-name = ' + dialogName + ']').removeClass('hidden');
    });

    $(document).on('click', '.button-close', function(e) {
        e.preventDefault();
        $(this).parents('.dialog').addClass('hidden');
    });


});

