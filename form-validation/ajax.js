function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
}

function call() {
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    var err = "";
    if ((name == "" || name.length <= 3) || (email == "" && !isValidEmailAddress(email)) || (message == "" || message.length < 20)) {
        if (name == "") {
            $("#name").addClass("error");
            $("#name").removeClass("success");
            err += "Введите имя!<br>";
        }
        if (name.length > 0 && name.length <= 3) {
            $("#name").addClass("error");
            $("#name").removeClass("success");
            err += "Слишком короткое имя!<br>";
        }
        if (name.length > 3) {

            $("#name").addClass("success");
            $("#name").removeClass("error");
        }

        if (email == "") {
            $("#email").addClass("error");
            $("#email").removeClass("success");
            err += "Введите почтовый адресс!<br>";
        }
        if (email && !isValidEmailAddress(email)) {
            $("#email").addClass("error");
            $("#email").removeClass("success");
            err += "Неверный формат Email!<br>";
        }
        if (isValidEmailAddress(email)) {
            $("#email").addClass("success");
            $("#email").removeClass("error");
        }
        if (message == "") {
            $("#message").addClass("error");
            $("#message").removeClass("success");
            err += "Введите сообщение!<br>";
        }
        if (message && message.length < 20) {
            $("#message").addClass("error");
            $("#message").removeClass("success");
            err += "Сообщение должно быть больше 20 символов!<br>";
        }
        if (message.length > 20) {
            $("#message").addClass("success");
            $("#message").removeClass("error");
        }
        return $("#err").html(err);
    } else {
        $("*").removeClass("error");
        $("*").removeClass("success");
        $("#err").html("");
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