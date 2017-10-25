
function error() {
    swal(
        'Oops...',
        'You have chosen more than three modules ',
        'error'
    )
}

function delay() {
    swal({
        title: 'Auto close alert!',
        text: 'Saving selection',
        timer: 2000,
        onOpen: function () {
            swal.showLoading()
        }
    }).then(
        function () {},
        // handling the promise rejection
        function (dismiss) {
            if (dismiss === 'timer') {
                console.log('I was closed by the timer')
            }
        }
    )
}

function confirmation() {
    swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Proceed!',
        cancelButtonText: 'No, cancel!',
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
        buttonsStyling: false
    }).then(function () {
        swal(
            'Saved!',
            'Changes Saved!',
            'success'
        )


        delay();
        saved();
        timeoutFunction();

    }, function (dismiss) {
        // dismiss can be 'cancel', 'overlay',
        // 'close', and 'timer'
        if (dismiss === 'cancel') {
            swal(
                'Cancelled',
                'Changes not saved!',
                'error'
            )
        }
    })
}

function saved() {
    swal({
        position: 'center',
        type: 'success',
        title: 'Your selection has been saved',
        showConfirmButton: false,
        timer: 5000
    })
}

function timeoutFunction() {
    setTimeout(function() {
        window.location.replace("index.html");
    }, 3000);
}

function errorCheck() {
    swal(
        'Oops...',
        'You have chosen more than two modules ',
        'error'
    )
}




