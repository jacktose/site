var main = function() {
    $('.form-element').blur(function(event) {
        if ($(this).val().length > 0) {
            $(this).addClass('filled');
        } else {
            $(this).removeClass('filled');
        }
    });
}

$(document).ready(main);
