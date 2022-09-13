// sweet alert

document.onload =(async () => {
Swal.fire({
  title: 'Login Form',
  html: `
  <input type="text" id="login" class="swal1-input1" placeholder="userName">,
  <input type="password" id="password" class="swal1-input1" placeholder="Password">,
  <input type="email" id="Email" class="swal1-input1" placeholder="Email">`,
  confirmButtonText: 'Sign in',
  focusConfirm: false,
  preConfirm: () => {
    const login = Swal.getPopup().querySelector('#login').value
    const password = Swal.getPopup().querySelector('#password').value
    const Email = Swal.getPopup().querySelector('#Email').value
    if (!login || !password) {
      Swal.showValidationMessage(`Please enter login and password and Email`)
    }
    return { login: login, password: password, Email:Email }
  }
}).then((result) => {
  Swal.fire(`
    Login: ${result.value.login}.
    Password: ${result.value.password}
    email: ${result.value.Email}
  `.trim())
})

})()

$(function () {
   

    //Canvas Menu
    $(".btn-menu").on('click', function () {
              $('.collapse').toggleClass("toogle")
    });

     
    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    $(".navbar-nav a").on('click', function () {
        $(".navbar-nav a").removeClass("active");
        $(this).addClass("active");
        })

    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }
 
    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return true;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });
    
});

