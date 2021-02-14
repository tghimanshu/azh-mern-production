function advisor_reg_success() {
        Swal.fire({
            title: '<strong>Register SuccessFul</strong>',
            icon: 'success',
            html:
              'You are now succussfully registered as an Advisor!',
            showCloseButton: true,
            showCancelButton: false,
            focusConfirm: true,
            confirmButtonText:
              'Go To Your Account!',
            confirmButtonAriaLabel: 'Go To Your Account!',
            cancelButtonText:
              'Close',
            cancelButtonAriaLabel: 'Close',
            preConfirm:function(){
                window.location = 'advisor/';
            }
        });
};

function client_reg_success() {
  Swal.fire({
      title: '<strong>Register SuccessFul</strong>',
      icon: 'success',
      html:
        'You are now succussfully registered as an Client!<br>You can now see the Advisors',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: true,
      confirmButtonText:
        'See Advisors',
      confirmButtonAriaLabel: 'See Advisors!',
      cancelButtonText:
        'Close',
      cancelButtonAriaLabel: 'Close',
      preConfirm:function(){
          window.location = 'advisors.php';
      }
  });
};

function client_booking_success() {
  Swal.fire({
      title: '<strong>Booking SuccessFul</strong>',
      icon: 'success',
      html:
        'You have successfully made a Booking!',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: true,
      confirmButtonText:
        'See Bookings',
      confirmButtonAriaLabel: 'See Bookings!',
      cancelButtonText:
        'Close',
      cancelButtonAriaLabel: 'Close',
      preConfirm:function(){
          window.location = 'account.php';
      }
  });
};

function login_error() {
  Swal.fire({
      title: '<strong>Login Unsuccessful!</strong>',
      icon: 'error',
      html:
        'Invalid UserName Or Password!',
      showCloseButton: true,
      showCancelButton: false,
      focusConfirm: true,
      confirmButtonText:
        'Close',
      confirmButtonAriaLabel: 'Close',
      preConfirm:function(){
        window.location = 'index.php';
    }
  });
};

function feedback_success() {
  Swal.fire({
      title: '<strong>Feedback Successful!</strong>',
      icon: 'success',
      html:
        'You will recieve your certificate shortly!<br>Checkout the best and the finest advisors in India',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: true,
      confirmButtonText:
        'Register Now',
      confirmButtonAriaLabel: 'Register Now',
      preConfirm:function(){
        window.location = 'client-registration.php';
    }
  });
};