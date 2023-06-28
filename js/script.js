    var boxVisible = false;

    // Check the initial state and adjust the box position accordingly
    if (!boxVisible) {
        $('#item-box-container').css('bottom', '-150px');
    }

    $('#item-box-toggle-button').click(function () {
        if (boxVisible) {
            $('#item-box-container').css('bottom', '-150px');
        } else {
            $('#item-box-container').css('bottom', '0px');
        }
        boxVisible = !boxVisible;
    });