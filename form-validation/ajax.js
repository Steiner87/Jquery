function call() {
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    var err = $("#err");
    if (name == "" || email == "" || message == "") {
        if (name == "") {
            $("#name").addClass("error");
            $("#name").removeClass("success");
        }
        if (name) {
            $("#name").addClass("success");
            $("#name").removeClass("error");
        }

        if (email == "") {
            $("#email").addClass("error");
            $("#email").removeClass("success");
        }
        if (email) {
            $("#email").addClass("success");
            $("#email").removeClass("error");
        }
        if (message == "") {
            $("#message").addClass("error");
            $("#message").removeClass("success");
        }
        if (message) {
            $("#message").addClass("success");
            $("#message").removeClass("error");
        }
        return err.html("Заполните все поля!");
    } else {
        $("*").removeClass("error");
        $("*").removeClass("success");
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