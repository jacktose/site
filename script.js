var main = function() {
    $('.form-element').blur(function(event) {
        if ($(this).val().length > 0) {
            $(this).addClass('filled');
        } else {
            $(this).removeClass('filled');
        }
    });

    $('.form-element').focus(function(event) {
        $(this).removeClass('filled');
    });

}

$(document).ready(main);
