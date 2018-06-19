function call() {
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    var err = $("#err");
    if (name == "" || email == "" || message == "") {
        return err.html("Заполните все поля!");
    } else {
        err.empty();
        var msg = $('#form').serialize();
        $.ajax({
            type: 'POST',
            url: 'response.php',
            data: msg,
            success: function(data) {
                $('#results').html(data);
            },
            error: function(xhr, str) {
                alert('Возникла ошибка: ' + xhr.responseCode);
            }
        });
    }






}