$(function() {
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    //>=, not <=
    if (scroll >= 500) {
      //clearHeader, not clearheader - caps H
      $(".navbar").addClass("bg-dark");
    } else if (scroll < 600) {
      $(".navbar").removeClass("bg-dark");
    }
  }); //missing );

  $(".nav-link, .navbar-brand, .new-button").on("click", function() {
    console.log(this);
    var sectionTo = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(sectionTo).offset().top
      },
      1000
    );
  });

  function myFunction(x) {
    if (x.matches) {
      // If media query matches
      const web = document.querySelector(".web");
      const developer = document.querySelector(".developer");
      web.innerHTML = saranWrap(web.textContent);
      developer.innerHTML = saranWrap(developer.textContent);

      function saranWrap(word) {
        return [...word].map(letter => `<span>${letter}</span>`).join("");
      }
    }
  }

  let x = window.matchMedia("(min-width: 995px)");
  myFunction(x); // Call listener function at run time
  x.addListener(myFunction); // Attach listener function on state changes

  $(".submit").on("click", event => {
    event.preventDefault();
    let name = $("input[type=text][name=name]").val();
    let email = $("input[type=email][name=email]").val();
    let subject = $("input[type=text][name=subject]").val();
    let message = $("textarea").val();

    let body = { name, email, subject, message };

    $.ajax({
      type: "POST",
      url: "https://fast-sierra-79160.herokuapp.com/email",
      data: body,
      crossDomain: true,
      success: () => {
        alert("success");
      }
    });
  });

  var typed = new Typed("#typed", {
    strings: [
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Angular",
      "MySQL",
      "Git"
    ],
    backSpeed: 50,
    typeSpeed: 100,
    loop: true
  });
});
