$(function () {
    function getAll() {
        $.ajax({
            url: 'http://localhost:3000/api/comments',
            type: 'GET',
            dataType: 'json',
            cache: false,
            success: function (data, textStatus, xhr) {
                console.log(textStatus);
                console.log(data);
                $('#komentare').html('');
                data.forEach(function (koment) {
                    $('#komentare').append('<hr><div class="row"><div class="col-6"><b>' + koment.name + '</b></div><div class="col-6 text-right"><i>' + koment.date + '</i></div></div> <div class="row"><div class="col-9">' + koment.text + '</div> <div class="col-3"><button class="btn btn-secondary update" data-id="' + koment.id + '">Upravit</button> <button class="btn btn-danger delete" data-id="' + koment.id + '">Smazat</button></div></div>');
                });
                $('.update').on('click', function () {
                    getById($(this).data('id'));
                });
                $('.delete').on('click', function () {
                    deleteById($(this).data('id'));
                });
            },
            error: function (xhr, textStatus, err) {
                console.log(err);
            }
        })
    }

    function getById(id) {
        $.ajax({
            url: 'http://localhost:3000/api/comments/' + id,
            type: 'GET',
            dataType: 'json',
            cache: false,
            success: function (data, textStatus, xhr) {
                console.log(textStatus);
                $('#id').val(data.id);
                $('#name').val(data.name);
                $('#text').val(data.text);
                $('#date').val(data.date);
                $('#modelId').modal('show');
            },
            error: function (xhr, textStatus, err) {
                console.log(err);
            }
        })
    }

    function deleteById(id) {
        $.ajax({
            url: 'http://localhost:3000/api/comments/' + id,
            type: 'DELETE',
            dataType: 'json',
            cache: false,
            success: function (data, textStatus, xhr) {
                console.log(textStatus);
                getAll();
            },
            error: function (xhr, textStatus, err) {
                console.log(err);
            }
        })
    }

    function update(id, data) {
        $.ajax({
            url: 'http://localhost:3000/api/comments/' + id,
            type: 'PUT',
            data: data,
            dataType: 'json',
            contentType: 'application/json',
            success: function (data, textStatus, xhr) {
                console.log(textStatus);
                getAll();
            },
            error: function (xhr, textStatus, err) {
                console.log(err);
            }
        })
    }

    function create(data) {
        $.ajax({
            url: 'http://localhost:3000/api/comments',
            type: 'POST',
            data: data,
            dataType: 'json',
            contentType: 'application/json',
            success: function (data, textStatus, xhr) {
                console.log(textStatus);
                getAll();
            },
            error: function (xhr, textStatus, err) {
                console.log(err);
            }
        })
    }

    $('#pridat').on('click', function () {
        $('#id').val('');
        $('#date').val('');
        $('#name').val('');
        $('#text').val('');
    });

    $('#ulozit').on('click', function () {
        var json = {};
        var datum = new Date();
        json.name = $('#name').val();
        json.text = $('#text').val();
        json.date = datum.getHours() + ":" + datum.getMinutes() + " " + datum.getDate() + "." + (datum.getMonth()+1) + "." + datum.getFullYear();
        var data = JSON.stringify(json);
        if ($('#id').val()) {
            update($('#id').val(), data);
        }
        else {
            create(data);
        }
    });

    getAll();

})